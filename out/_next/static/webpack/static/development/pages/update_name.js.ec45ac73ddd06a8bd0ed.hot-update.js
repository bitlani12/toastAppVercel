webpackHotUpdate("static\\development\\pages\\update_name.js",{

/***/ "./src/redux/RestClient/RestClient.js":
/*!********************************************!*\
  !*** ./src/redux/RestClient/RestClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);






var RestClient = /*#__PURE__*/function () {
  function RestClient() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RestClient);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RestClient, null, [{
    key: "isConnected",
    value: function isConnected() {
      var context = this;
      return new Promise(function (fulfill, reject) {
        var unsubscribe; //   unsubscribe = NetInfo.addEventListener(state => {
        //     console.log("Connection type", state.type);
        //     console.log("Is connected?", state.isConnected);
        // if (state.isConnected)

        fulfill(); //  state.isConnected // this will come inside fuction
        // else {
        //   reject(state.isConnected);
        // }
        // unsubscribe();
        //   });
      });
    }
  }, {
    key: "restCall",
    value: function restCall(url, url2, params) {
      var context = this;

      switch (urltype) {
        case 'customer_id':
          var c_id1 = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('customer_id');
          url = "".concat(url, "/").concat(c_id);
          break;

        case 'customer_id2':
          var c_id2 = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('customer_id');
          url = "".concat(url, "/").concat(c_id, "/").concat(url2);
          break;

        default:
          break;
      }

      console.log(type, ' call', url, params, token);
      return new Promise(function (fulfill, reject) {
        context.isConnected().then(function () {
          fetch(url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            console.log('responseresponse', response);
            return response.text();
          }).then(function (responseText) {
            console.log('POST responseText*****', responseText);

            if (responseText) {
              fulfill(JSON.parse(responseText));
            } else {
              fulfill(null);
            }
          })["catch"](function (error) {
            fulfill({// message: Constants.AppConstants.Error.internetConnectivity,
            });
            console.warn('eroro', error);
          });
        })["catch"](function (error) {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.'
          });
        });
      });
    }
  }, {
    key: "getCall",
    value: function getCall(url, token) {
      var context = this;
      console.log('get call', url, token);
      return new Promise(function (fulfill, reject) {
        context.isConnected().then(function () {
          fetch(url, {
            method: 'GET',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token
            }
          }).then(function (response) {
            if (response._bodyInit == '') {
              return response._bodyInit;
            }

            return response.text();
          }).then(function (responseText) {
            console.log('responseTextresponseText', responseText); // fulfill(responseText);

            if (responseText) {
              fulfill(JSON.parse(responseText));
            } else {
              fulfill(responseText);
            }
          })["catch"](function (error) {
            fulfill({// message: Constants.AppConstants.Error.internetConnectivity,
            });
            console.warn('eroro', error);
          });
        })["catch"](function (error) {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.'
          });
        });
      });
    }
  }]);

  return RestClient;
}();

/* harmony default export */ __webpack_exports__["default"] = (RestClient);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvUmVzdENsaWVudC9SZXN0Q2xpZW50LmpzIl0sIm5hbWVzIjpbIlJlc3RDbGllbnQiLCJjb250ZXh0IiwiUHJvbWlzZSIsImZ1bGZpbGwiLCJyZWplY3QiLCJ1bnN1YnNjcmliZSIsInVybCIsInVybDIiLCJwYXJhbXMiLCJ1cmx0eXBlIiwiY19pZDEiLCJjb29raWUiLCJnZXQiLCJjX2lkIiwiY19pZDIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRva2VuIiwiaXNDb25uZWN0ZWQiLCJ0aGVuIiwiZmV0Y2giLCJtZXRob2QiLCJ0aW1lb3V0IiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInBhcnNlIiwiZXJyb3IiLCJ3YXJuIiwibWVzc2FnZSIsIl9ib2R5SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7OztBQUNiOztJQUNNQSxVOzs7Ozs7O2tDQUNpQjtBQUNuQixVQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFlBQUlDLFdBQUosQ0FENEMsQ0FFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLGVBQU8sR0FOcUMsQ0FPNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFDZUcsRyxFQUFLQyxJLEVBQU1DLE0sRUFBUTtBQUNqQyxVQUFJUCxPQUFPLEdBQUcsSUFBZDs7QUFDQSxjQUFRUSxPQUFSO0FBQ0UsYUFBSyxhQUFMO0FBQ0UsY0FBSUMsS0FBSyxHQUFHQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxDQUFaO0FBQ0FOLGFBQUcsYUFBTUEsR0FBTixjQUFhTyxJQUFiLENBQUg7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QUFrQjtBQUN0QmpCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q2dCLFlBQXhDLEVBRHNCLENBRXRCOztBQUNBLGdCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCN0IscUJBQU8sQ0FBQ3lCLElBQUksQ0FBQ0ssS0FBTCxDQUFXRCxZQUFYLENBQUQsQ0FBUDtBQUNELGFBRkQsTUFFTztBQUNMN0IscUJBQU8sQ0FBQzZCLFlBQUQsQ0FBUDtBQUNEO0FBQ0YsV0F4QkgsV0F5QlMsVUFBQ0UsS0FBRCxFQUFXO0FBQ2hCL0IsbUJBQU8sQ0FBQyxDQUNOO0FBRE0sYUFBRCxDQUFQO0FBR0FZLG1CQUFPLENBQUNvQixJQUFSLENBQWEsT0FBYixFQUFzQkQsS0FBdEI7QUFDRCxXQTlCSDtBQStCRCxTQWxDSCxXQW1DUyxVQUFDQSxLQUFELEVBQVc7QUFDaEJuQixpQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NrQixLQUFoQztBQUNBL0IsaUJBQU8sQ0FBQztBQUNOaUMsbUJBQU8sRUFBRTtBQURILFdBQUQsQ0FBUDtBQUdELFNBeENIO0FBeUNELE9BMUNNLENBQVA7QUEyQ0Q7Ozs7OztBQUdZcEMseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVwZGF0ZV9uYW1lLmpzLmVjNDVhYzczZGRkMDZhOGJkMGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuY2xhc3MgUmVzdENsaWVudCB7XHJcbiAgc3RhdGljIGlzQ29ubmVjdGVkKCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgbGV0IHVuc3Vic2NyaWJlO1xyXG4gICAgICAvLyAgIHVuc3Vic2NyaWJlID0gTmV0SW5mby5hZGRFdmVudExpc3RlbmVyKHN0YXRlID0+IHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0eXBlXCIsIHN0YXRlLnR5cGUpO1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJJcyBjb25uZWN0ZWQ/XCIsIHN0YXRlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgLy8gaWYgKHN0YXRlLmlzQ29ubmVjdGVkKVxyXG4gICAgICBmdWxmaWxsKCk7XHJcbiAgICAgIC8vICBzdGF0ZS5pc0Nvbm5lY3RlZCAvLyB0aGlzIHdpbGwgY29tZSBpbnNpZGUgZnVjdGlvblxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICByZWplY3Qoc3RhdGUuaXNDb25uZWN0ZWQpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIHJlc3RDYWxsKHVybCwgdXJsMiwgcGFyYW1zKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzd2l0Y2ggKHVybHR5cGUpIHtcclxuICAgICAgY2FzZSAnY3VzdG9tZXJfaWQnOlxyXG4gICAgICAgIGxldCBjX2lkMSA9IGNvb2tpZS5nZXQoJ2N1c3RvbWVyX2lkJyk7XHJcbiAgICAgICAgdXJsID0gYCR7dXJsfS8ke2NfaWR9YDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY3VzdG9tZXJfaWQyJzpcclxuICAgICAgICBsZXQgY19pZDIgPSBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpO1xyXG4gICAgICAgIHVybCA9IGAke3VybH0vJHtjX2lkfS8ke3VybDJ9YDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlLCAnIGNhbGwnLCB1cmwsIHBhcmFtcywgdG9rZW4pO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgY29udGV4dFxyXG4gICAgICAgIC5pc0Nvbm5lY3RlZCgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZSxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMCAqIDEgKiA2MCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgLy8gXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZXJlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZVRleHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUE9TVCByZXNwb25zZVRleHQqKioqKicsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICAgICAgLy8gbWVzc2FnZTogQ29uc3RhbnRzLkFwcENvbnN0YW50cy5FcnJvci5pbnRlcm5ldENvbm5lY3Rpdml0eSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Vyb3JvJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcm9ybyAqKioqKioqKiogJywgZXJyb3IpO1xyXG4gICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aXZpdHkuJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q2FsbCh1cmwsIHRva2VuKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0IGNhbGwnLCB1cmwsIHRva2VuKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGNvbnRleHRcclxuICAgICAgICAuaXNDb25uZWN0ZWQoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwICogMSAqIDYwLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAvLyBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLl9ib2R5SW5pdCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLl9ib2R5SW5pdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZVRleHRyZXNwb25zZVRleHQnLCByZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIC8vIGZ1bGZpbGwocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2U6IENvbnN0YW50cy5BcHBDb25zdGFudHMuRXJyb3IuaW50ZXJuZXRDb25uZWN0aXZpdHksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdlcm9ybycsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJvcm8gKioqKioqKioqICcsIGVycm9yKTtcclxuICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGl2aXR5LicsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdENsaWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==