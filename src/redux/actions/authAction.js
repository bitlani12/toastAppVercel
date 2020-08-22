import * as types from '../types';
import RestClient from './../RestClient/RestClient';
import Connection from '../../config/Connection';
import Router from 'next/router';
import { handleLoader } from './app';
import { ToastContainer, toast } from 'react-toastify';
// import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
export const sendOtp_action = (params) => {
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.getCall(Connection.getBaseUrl() + `/login/phone/${params}`)
      .then(async (res) => {
        dispatch(handleLoader(false));
        console.log(res, 'this is res');
        // dispatch(handleLoader(false));
        if (res.data.type === 'success') {
          Router.push({
            pathname: '/otp_verify',
            query: { mobile: params },
          });
          //   navigateToOtpVerification(params, screenname_redirect);
        } else {
          console.log(res, 'this is error');
          // toast.error('Wow so easy!', {
          //   position: 'top-right',
          //   autoClose: 3000,
          // });
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
        //   dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};

export const verifyotp_action = (otp, mobile, callBack) => {
  let paramsData = {
    otp_value: otp,
  };
  return (dispatch) => {
    dispatch(handleLoader(true));
    RestClient.restCall(
      Connection.getBaseUrl() + `/login/phone/${mobile}`,
      '',
      paramsData
    )
      .then(async (res, status) => {
        console.log(res, res.data.customer_id, 'this is res');
        dispatch(handleLoader(false));
        if (res.data.status === true) {
          console.log('yes i am here');
          cookie.set('token', res.data.auth_token, { expires: 365 });
          cookie.set('customer_id', res.data.customer_id, { expires: 365 });
          callBack();
          // cookie.get('customer_id') && Router.push('/update_name');

          //   navigateToOtpVerification(params, screenname_redirect);
        } else {
          toast.error('Invalid OTP!', {
            position: 'top-right',
            autoClose: 3000,
          });
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
      // .then(() => ) // eslint-disable-next-line
      .catch((e) => {
        //   dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};

export const updatename_action = (name) => {
  console.log(name, 'this is name');
  return (dispatch) => {
    let formData = new FormData();
    formData.append('customer_name', name);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1], 'this is dorm data');
    }
    console.log(formData, 'this is dorm data');
    const customer_id = cookie.get('customer_id');
    const token = cookie.get('token');
    fetch(Connection.getBaseUrl() + `/customer_profile/${customer_id}`, {
      method: 'POST',
      timeout: 1000 * 1 * 60,
      headers: {
        // 'Content-Type': 'multipart/form-data',
        // "Cache-Control": "no-cache",
        Authorization: token,
      },
      body: formData,
    })
      .then(async (res, status) => {
        res = await res.json();
        console.log(res, 'this is res ++++++++++');
        // dispatch(handleLoader(false));
        if (res.data.status === 'success') {
          console.log('yes i am here');
          Router.push('/qr_scanner');
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
      })
      // .then(() => cookie.get('customer_id') && ) // eslint-disable-next-line
      .catch((e) => {
        //   dispatch(handleLoader(false));
        // eslint-disable-line
        console.log('errorror', e);
      });
  };
  //    )
};
