import * as types from '../types.js';
import RestClient from './../RestClient/RestClient';
import Connection from '../../config/Connection';
import Router from 'next/router';
import { handleLoader } from './app';
import { ToastContainer, toast } from 'react-toastify';
// import nextcookie from 'next-cookies';
import cookie from 'js-cookie'

export const sendOtp_action = (params) => {
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.getCall(Connection.getBaseUrl() + `/login/phone/${params}`)
      .then(async (res) => {
        console.log(res, 'this is res');
        dispatch(handleLoader(false));
        if (res.data.type === 'success') {
          Router.push({
            pathname: '/otp_verify',
            query: { mobile: params },
          });
          //   navigateToOtpVerification(params, screenname_redirect);
        } else {
          console.log(res, 'this is error');
          //       Dialog(res.message, [
          //         { text: 'OK', onPress: () => console.log('OK Pressed') },
          //       ]);
          //       console.log('ressssssssss', res);
          //     }

          //     console.log('ressssssssss', res);

          //     if (cb) {
          //       cb(res);
        }
      }) // eslint-disable-next-line
      .catch((e) => {
        dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};

export const getBilling_action = (order_id, customer_id, token) => {
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.getCall(
      Connection.getBaseUrl() + `/orders/${order_id}/customer/${customer_id}`,
      token
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        dispatch({ type: types.BILLING_DATA, data: res.data });
        if (res.data.type === 'success') {
        } else {
          console.log(res, 'this is error');
        }
        dispatch(handleLoader(false));
      })
      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};

export const getItemReview_action = (
  customer_id,
  item_id,
  start,
  limit,
  token
) => {
  return (dispatch) => {
    // dispatch(handleLoader(true));

    dispatch({ type: types.LOAD_ITEM_REVIEW, data: true });
    dispatch({ type: types.GET_ITEM_REVIEW, data: [] });

    RestClient.getCall(
      Connection.getBaseUrl() +
      `/reviews/${customer_id}/item/${item_id}?start=${start}&limit=${limit}`,
      token
    )
      .then(async (res) => {
        console.log(res, 'this is res');

        dispatch({ type: types.GET_ITEM_REVIEW, data: res.data });
        dispatch({ type: types.LOAD_ITEM_REVIEW, data: false });
        if (res.data.type === 'success') {
        } else {
          console.log(res, 'this is error');
        }
        // dispatch(handleLoader(false));
      })

      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};

export const getCoupon_action = (code, type) => {
  return (dispatch) => {
    dispatch(handleLoader(true));
    let paramsData = {
      qr_code: code,
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/promo`,
      '/coupons/',
      paramsData,
      'get_coupon'
    )
      .then(async (res) => {
        console.log(res.data.length, 'this is res');
        if (res.data.length !== 0) {
          dispatch({ type: types.GET_COUPON, data: res.data });
          if (type === 'billing_details') {
            Router.push('/applyCoupon');
          }
        } else {
          toast.error('Coupons Are Not Available', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
        if (res.data.type === 'success') {
        } else {
          console.log(res, 'this is error');
        }
        dispatch(handleLoader(false));
      })
      .catch((e) => {
        console.log('errorror', e);
        dispatch(handleLoader(false));
      });
  };
};
export const applyCoupon_action = (code, id) => {
  return (dispatch) => {
    let paramsData = {
      coupon_id: id,
      qr_code: code,
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/coupons/',
      paramsData,
      'apply_coupon'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        if (res.data.status === 'success') {
          toast.success('Coupon Applied', {
            position: 'top-right',
            autoClose: 3000,
          });
          Router.back();
        } else {
          toast.error(res.data.message, {
            position: 'top-right',
            autoClose: 3000,
          });
          console.log(res, 'this is error');
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error('something went wrong', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  };
};

export const addTip_action = (amount, callBack) => {
  return (dispatch) => {
    let paramsData = {
      tip_amount: amount,
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      paramsData,
      'add_tip'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        toast.success(`Tip Added ₹${amount}`, {
          position: 'top-right',
          autoClose: 3000,
        });
        callBack();

        if (res.data.type === 'success') {
        } else {
          console.log(res, 'this is error');
        }
      })
      .catch((e) => {
        console.log('errorror', e);
      });
  };
};
export const getTableCode_action = (code) => {
  return (dispatch) => {
    let paramsData = {
      qr_code: code,
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/table/`,
      '/get_table_code',
      paramsData,
      'get_table_code'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        dispatch({ type: types.GET_TABLE_CODE, data: res.data });
        if (res.data.type === 'success') {
        } else {
          console.log(res, 'this is error');
        }
      })
      .catch((e) => {
        console.log('errorror', e);
      });
  };
};

export const placeOrder_action = (code, params, textBox, callBack) => {
  return (dispatch) => {
    dispatch(handleLoader(true));
    let paramsData = {
      qr_code: code,
      order_details: params,
      customize_item: textBox
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      paramsData,
      'place_order'
    )
      .then(async (res) => {
        if (res.data.status === 'success') {
          callBack();
          Router.push('/order_success');
          dispatch({ type: types.PLACE_ORDER, data: res.data });
          dispatch(handleLoader(false));
        } else {
          console.log(res, 'this is error');
          dispatch(handleLoader(false));
        }
      })
      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};
export const complaints_action = (code, params) => {
  return (dispatch) => {
    let paramsData = {
      qr_code: code,
      complaints: params,
    };
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/complaints/`,
      '/add',
      paramsData,
      'customer_id'
    )
      .then(async (res) => {
        console.log(res, 'this is res');

        if (res.data.status === 'success') {
          toast.success('Complaint has been registered', {
            position: 'top-right',
            autoClose: 3000,
          });
          Router.push('/feedback');
          dispatch(handleLoader(false));
          dispatch({ type: types.COMPLAINTS, data: res.data });
        } else {
          console.log(res, 'this is error');
        }
      })
      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};
export const serviceRequest_action = (item, essentials, textBox, callBack) => {
  return (dispatch) => {
    let paramsData = {
      customize_item: `${item} , ${textBox}`,
      essentials_request: essentials,
      qr_code: cookie.get('qr_code'),
    };
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      paramsData,
      'service_request'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        dispatch(handleLoader(false));
        if (res.data.status === 'success') {
          toast.success('Service Request has been registered', {
            position: 'top-right',
            autoClose: 3000,
          });
          callBack();
        } else {
          console.log(res, 'this is error');
        }
      })
      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};
export const zomatoGold_action = (params) => {
  return (dispatch) => {
    let paramsData = {
      qr_code: cookie.get('qr_code'),
      zomato_gold_visit_id: params,
    };
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/zomato_gold/',
      paramsData,
      'place_order'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        toast.success(
          'Please wait a moment while restaurant updates your bill :)',
          {
            position: 'top-right',
            autoClose: 3000,
          }
        );
        dispatch({ type: types.ZOMATOGOLD, data: res.data });
      })
      .catch((e) => {
        console.log('errorror', e);
      });
  };
};

export const scanqr_action = (code) => {
  console.log(name, 'this is name');
  let paramsData = {
    qr_code: code,
  };
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/table/`,
      '/jview_catalogue/menu',
      paramsData,
      // 'customer_id'
    )
      .then(async (res, status) => {
        console.log(res, 'this is res ++++++++++');

        if (res.data.status === 'occupied') {
          console.log('i am herre    ++++');
          cookie.set('qr_code', code, { expires: 365 });
          Router.push(
            {
              pathname: '/join_table',
              query: { qr_code: code },
            }
            // { shallow: true }
          );
          setTimeout(() => {
            dispatch(handleLoader(false));
          }, 1000);
        } else {
          if (res.data.status !== 'failure') {
            cookie.set('order_id', res.data.order_id, { expires: 365 });
            cookie.set('join_code', res.data.table_joining_code, { expires: 365 });
            cookie.set('qr_code', code, { expires: 365 });
            Router.push('/');
            /////////// code for special menu update///////////////////
            const menus = res.data.menu.menu;
            console.log(res.data.menu.menu, 'this is is x ===== 2222');
            let list2 = Object.keys(menus);
            let y = {};
            list2.map((val) => {
              const inside_menu = Object.keys(res.data.menu.menu[val]);

              inside_menu.map((inside) => {
                let x = res.data.menu.menu[val][inside].filter(
                  (val_data, i) => {
                    return val_data.is_special === true;
                  }
                );
                if (x.length > 0) {
                  y = { ...y, [inside]: x };
                }
              });
            });
            console.log(y, 'this is y');
            res.data = {
              ...res.data,
              menu: {
                ...res.data.menu,
                menu: { ...res.data.menu.menu, Special: y },
              },
            };
            ///////////////////////////////////////////////////////////////////

            dispatch({ type: types.MENU_DATA, data: res.data });
            // setTimeout(() => {
            //   dispatch(handleLoader(false));
            // }, 1000);
            //   navigateToOtpVerification(params, screenname_redirect);
          }

          //       Dialog(res.message, [
          //         { text: 'OK', onPress: () => console.log('OK Pressed') },
          //       ]);
          //       console.log('ressssssssss', res);
          //     }

          //     console.log('ressssssssss', res);

          //     if (cb) {
          //       cb(res);
        }
      })
      //   .then(() => cookie.get('customer_id') && Router.push('/qr_scanner')) // eslint-disable-next-line
      .catch((e) => {
        dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
        toast.error('error', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  };
  //    )
};

export const leaveTable_action = () => {
  return (dispatch) => {
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      '',
      'leave_table'
    )
      .then(async (res) => {
        console.log(res, 'this is res');

        if (res.data.status === 'success') {
          cookie.remove('qr_code');
          Router.push('/qr_scanner');
        } else {
          console.log(res.error_message, 'this is error');
          toast.error(res.data.error_message, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      })
      .catch((e) => {
        console.log('errorror', e);
      });
  };
};
export const orderCheckout_action = (qr_code, type, callBack) => {
  let paramsData = {
    qr_code: qr_code,
    payment_type: type,
  };
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      paramsData,
      'checkout'
    )
      .then(async (res) => {
        console.log(res, 'this is res');
        if (res.data.status === 'success') {
          callBack();
        } else {
          console.log(res.error_message, 'this is error');
          toast.error(res.data.error_message, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
        dispatch(handleLoader(false));
      })
      .catch((e) => {
        dispatch(handleLoader(false));
        console.log('errorror', e);
      });
  };
};

export const jointable_action = (code, qr_code, type) => {
  let paramsData = {
    table_joining_code: code,
    qr_code: qr_code,
  };

  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/table/`,
      '/join_with_code',
      paramsData,
      'customer_id'
    )
      .then(async (res, status) => {
        if (res.data.status !== 'failure') {
          cookie.set('order_id', res.data.order_id, { expires: 365 });
          Router.push('/');

          /////////// code for special menu update///////////////////
          const menus = res.data.menu.menu;
          console.log(res.data.menu.menu, 'this is is x ===== 2222');
          let list2 = Object.keys(menus);
          let y = {};
          list2.map((val) => {
            const inside_menu = Object.keys(res.data.menu.menu[val]);

            inside_menu.map((inside) => {
              let x = res.data.menu.menu[val][inside].filter((val_data, i) => {
                return val_data.is_special === true;
              });
              if (x.length > 0) {
                y = { ...y, [inside]: x };
              }
            });
          });
          console.log(y, 'this is y');
          res.data = {
            ...res.data,
            menu: {
              ...res.data.menu,
              menu: { ...res.data.menu.menu, Special: y },
            },
          };
          dispatch(handleLoader(false));
          ///////////////////////////////////////////////////////////////////
          dispatch({ type: types.MENU_DATA, data: res.data });
          //   navigateToOtpVerification(params, screenname_redirect);
        } else if (res.data.status === 'failure' && type === 'home') {
          cookie.remove('qr_code');
          // console.log(res, 'this is error');
          // toast.error('Invalid Joining Code', {
          //   position: 'top-right',
          //   autoClose: 3000,
          // });
          dispatch(handleLoader(false));
          Router.push('/qr_scanner');

          //       Dialog(res.message, [
          //         { text: 'OK', onPress: () => console.log('OK Pressed') },
          //       ]);
          //       console.log('ressssssssss', res);
          //     }

          //     console.log('ressssssssss', res);

          //     if (cb) {
          //       cb(res);
        } else {
          dispatch(handleLoader(false));
          toast.error('Invalid Joining Code', {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      })
      //   .then(() => cookie.get('customer_id') && Router.push('/qr_scanner')) // eslint-disable-next-line
      .catch((e) => {
        dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};

export const paymentAcknowledge = (payment_id) => {
  console.log('this is working ++++++', payment_id);
  let paramsData = {
    razorpay_payment_id: payment_id,
    payment_status: true,
  };

  return (dispatch) => {
    // dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/orders/`,
      '/customer/',
      paramsData,
      'acknowledge'
    )
      .then(async (res, status) => {
        // dispatch(handleLoader(false));
        console.log(res, 'this is res ++++++++++');
        if (res.data.status !== 'failure') {
          cookie.set('order_id', res.data.order_id, { expires: 365 });
          cookie.remove('qr_code');
          Router.push('/payment_done');

          ///////////////////////////////////////////////////////////////////
          dispatch({ type: types.MENU_DATA, data: res.data });
          //   navigateToOtpVerification(params, screenname_redirect);
        } else {
        }
      })
      //   .then(() => cookie.get('customer_id') && Router.push('/qr_scanner')) // eslint-disable-next-line
      .catch((e) => {
        dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};
export const userReview_action = (file, pic) => {
  console.log(name, 'this is name');
  return (dispatch) => {
    dispatch(handleLoader(true));
    let formData = new FormData();
    formData.append('review', file);
    // formData.append('review_item_images', pic);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1], 'this is dorm data');
    }
    console.log(formData, 'this is dorm data');
    const customer_id = cookie.get('customer_id');
    const token = cookie.get('token');
    fetch(
      Connection.getBaseUrl() +
      `/reviews/${customer_id}/orders/${cookie.get('order_id')}`,
      {
        method: 'POST',
        timeout: 1000 * 1 * 60,
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    )
      .then(async (res, status) => {
        res = await res.json();
        console.log(res, 'this is res ++++++++++');
        dispatch(handleLoader(false));
        if (res.data.status === 'SUCCESS') {
          toast.success('Review Submited', {
            position: 'top-right',
            autoClose: 3000,
          });
          cookie.remove('qr_code');
          Router.push('/qr_scanner');
        } else {
          toast.error(res.data.error_message, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      })

      .catch((e) => {
        console.log('errorror', e);
        toast.error('Something went wrong', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  };
  //    )
};
export const dish_description = (data) => {
  return (dispatch) => {
    dispatch({ type: types.SELECTED_MENU_DATA, data: data });
  };
};

export const add_item = (data) => {
  console.log('add item reducer action ');
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM, data: data });
  };
};

export const add_item_increase = (data) => {
  console.log('add item reducer action ++++++++++');
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM_INCREASE, data: data });
  };
};

export const add_item_increase_place_order = (data) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM_INCREASE_PLACE_ORDER, data: data });
  };
};
export const add_item_decrease = (data) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM_DECREASE, data: data });
  };
};
export const add_item_decrease_place_order = (data) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM_DECREASE_PLACE_ORDER, data: data });
  };
};

export const add_item_decrease_addon = (data) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_ITEM_DECREASE_ADDON, data: data });
  };
};
export const repeat_last_addon = (data) => {
  return (dispatch) => {
    dispatch({ type: types.REPEAT_LAST_ADDON, data: data });
  };
};
export const add_to_tray = (data) => {
  return (dispatch) => {
    dispatch({ type: types.ADD_TO_ARRAY, data: data });
  };
};
export const handlefilter = (selected_menu, filter) => {
  console.log('filter action');
  return (dispatch) => {
    dispatch({
      type: types.FILTER_DATA,
    });
  };
};

export const handlefilter_contains_egg = (selected_menu, filter) => {
  console.log('filter action');
  return (dispatch) => {
    dispatch({
      type: types.FILTER_DATA_CONTAINS_EGG,
    });
  };
};
export const final_Amount = (amount) => {
  console.log('filter action');
  return (dispatch) => {
    dispatch({ type: types.FINAL_AMOUNT, data: amount });
  };
};
