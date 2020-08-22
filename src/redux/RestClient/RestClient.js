'use strict';
import Cookie from 'js-cookie';
class RestClient {
  static isConnected() {
    let context = this;
    return new Promise(function (fulfill, reject) {
      let unsubscribe;
      //   unsubscribe = NetInfo.addEventListener(state => {
      //     console.log("Connection type", state.type);
      //     console.log("Is connected?", state.isConnected);
      // if (state.isConnected)
      fulfill();
      //  state.isConnected // this will come inside fuction
      // else {
      //   reject(state.isConnected);
      // }
      // unsubscribe();
      //   });
    });
  }
  static restCall(url, url2, params, urltype) {
    let context = this;
    let c_id = Cookie.get('customer_id');
    let o_id = Cookie.get('order_id');
    switch (urltype) {
      // case 'customer_id':
      //   let c_id1 = Cookie.get('customer_id');
      //   url = `${url}${c_id1}`;
      //   break;
      case 'customer_id':
        url = `${url}${c_id}${url2}`;
        break;
      case 'get_coupon':
        url = `${url}${url2}${c_id}`;
        break;
      case 'apply_coupon':
        url = `${url}${o_id}${url2}${c_id}/apply`;
        break;
      case 'add_tip':
        url = `${url}${o_id}${url2}${c_id}/tips`;
        break;
      case 'get_table_code':
        url = `${url}${c_id}${url2}`;
        break;
      case 'place_order':
        url = `${url}${o_id}${url2}${c_id}`;
        break;
      case 'leave_table':
        url = `${url}${o_id}${url2}${c_id}/leave`;
        break;
      case 'checkout':
        url = `${url}${o_id}${url2}${c_id}/checkout`;
        break;
      case 'service_request':
        url = `${url}${o_id}${url2}${c_id}/customize_order`;
        break;
      case 'acknowledge':
        url = `${url}${o_id}${url2}${c_id}/acknowledge`;
        break;
      default:
        url;
        break;
    }
    const token = Cookie.get('token');
    const type = 'POST';
    console.log(token, 'this is tokemn');
    console.log(type, ' call', url, params);
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token,
            },
            body: JSON.stringify(params),
          })
            .then((response) => {
              console.log('responseresponse', response);
              return response.text();
            })
            .then((responseText) => {
              console.log('POST responseText*****', responseText);
              if (responseText) {
                fulfill(JSON.parse(responseText));
              } else {
                fulfill(null);
              }
            })
            .catch((error) => {
              fulfill({
                // message: Constants.AppConstants.Error.internetConnectivity,
              });
              console.warn('eroro', error);
            });
        })
        .catch((error) => {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.',
          });
        });
    });
  }

  static getCall(url, token) {
    let context = this;
    console.log('get call', url, token);
    return new Promise(function (fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(url, {
            method: 'GET',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token,
            },
          })
            .then((response) => {
              if (response._bodyInit == '') {
                return response._bodyInit;
              }
              return response.text();
            })
            .then((responseText) => {
              console.log('responseTextresponseText', responseText);
              // fulfill(responseText);
              if (responseText) {
                fulfill(JSON.parse(responseText));
              } else {
                fulfill(responseText);
              }
            })
            .catch((error) => {
              fulfill({
                // message: Constants.AppConstants.Error.internetConnectivity,
              });
              console.warn('eroro', error);
            });
        })
        .catch((error) => {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.',
          });
        });
    });
  }
}

export default RestClient;
