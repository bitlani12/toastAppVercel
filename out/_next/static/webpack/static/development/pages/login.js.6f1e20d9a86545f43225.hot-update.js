webpackHotUpdate("static\\development\\pages\\login.js",{

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
    value: function restCall(url, url2, params, urltype) {
      var context = this;

      switch (urltype) {
        // case 'customer_id':
        //   let c_id1 = cookie.get('customer_id');
        //   url = `${url}${c_id1}`;
        //   break;
        case 'customer_id':
          var c_id2 = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('customer_id');
          url = "".concat(url).concat(c_id).concat(url2);
          break;

        default:
          url;
          break;
      }

      var token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');
      var type = 'POST';
      console.log(type, ' call', url, params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvUmVzdENsaWVudC9SZXN0Q2xpZW50LmpzIl0sIm5hbWVzIjpbIlJlc3RDbGllbnQiLCJjb250ZXh0IiwiUHJvbWlzZSIsImZ1bGZpbGwiLCJyZWplY3QiLCJ1bnN1YnNjcmliZSIsInVybCIsInVybDIiLCJwYXJhbXMiLCJ1cmx0eXBlIiwiY19pZDIiLCJjb29raWUiLCJnZXQiLCJjX2lkIiwidG9rZW4iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImlzQ29ubmVjdGVkIiwidGhlbiIsImZldGNoIiwibWV0aG9kIiwidGltZW91dCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJwYXJzZSIsImVycm9yIiwid2FybiIsIm1lc3NhZ2UiLCJfYm9keUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWE7Ozs7QUFDYjs7SUFDTUEsVTs7Ozs7OztrQ0FDaUI7QUFDbkIsVUFBSUMsT0FBTyxHQUFHLElBQWQ7QUFDQSxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1QyxZQUFJQyxXQUFKLENBRDRDLENBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUNBRixlQUFPLEdBTnFDLENBTzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELE9BYk0sQ0FBUDtBQWNEOzs7NkJBQ2VHLEcsRUFBS0MsSSxFQUFNQyxNLEVBQVFDLE8sRUFBUztBQUMxQyxVQUFJUixPQUFPLEdBQUcsSUFBZDs7QUFDQSxjQUFRUSxPQUFSO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLLGFBQUw7QUFDRSxjQUFJQyxLQUFLLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLENBQVo7QUFDQU4sYUFBRyxhQUFNQSxH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QyxHQUFSLENBQVksMEJBQVosRUFBd0NjLFlBQXhDLEVBRHNCLENBRXRCOztBQUNBLGdCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCNUIscUJBQU8sQ0FBQ3dCLElBQUksQ0FBQ0ssS0FBTCxDQUFXRCxZQUFYLENBQUQsQ0FBUDtBQUNELGFBRkQsTUFFTztBQUNMNUIscUJBQU8sQ0FBQzRCLFlBQUQsQ0FBUDtBQUNEO0FBQ0YsV0F4QkgsV0F5QlMsVUFBQ0UsS0FBRCxFQUFXO0FBQ2hCOUIsbUJBQU8sQ0FBQyxDQUNOO0FBRE0sYUFBRCxDQUFQO0FBR0FhLG1CQUFPLENBQUNrQixJQUFSLENBQWEsT0FBYixFQUFzQkQsS0FBdEI7QUFDRCxXQTlCSDtBQStCRCxTQWxDSCxXQW1DUyxVQUFDQSxLQUFELEVBQVc7QUFDaEJqQixpQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NnQixLQUFoQztBQUNBOUIsaUJBQU8sQ0FBQztBQUNOZ0MsbUJBQU8sRUFBRTtBQURILFdBQUQsQ0FBUDtBQUdELFNBeENIO0FBeUNELE9BMUNNLENBQVA7QUEyQ0Q7Ozs7OztBQUdZbkMseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjZmMWUyMGQ5YTg2NTQ1ZjQzMjI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuY2xhc3MgUmVzdENsaWVudCB7XHJcbiAgc3RhdGljIGlzQ29ubmVjdGVkKCkge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgbGV0IHVuc3Vic2NyaWJlO1xyXG4gICAgICAvLyAgIHVuc3Vic2NyaWJlID0gTmV0SW5mby5hZGRFdmVudExpc3RlbmVyKHN0YXRlID0+IHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0eXBlXCIsIHN0YXRlLnR5cGUpO1xyXG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJJcyBjb25uZWN0ZWQ/XCIsIHN0YXRlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgLy8gaWYgKHN0YXRlLmlzQ29ubmVjdGVkKVxyXG4gICAgICBmdWxmaWxsKCk7XHJcbiAgICAgIC8vICBzdGF0ZS5pc0Nvbm5lY3RlZCAvLyB0aGlzIHdpbGwgY29tZSBpbnNpZGUgZnVjdGlvblxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICByZWplY3Qoc3RhdGUuaXNDb25uZWN0ZWQpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc3RhdGljIHJlc3RDYWxsKHVybCwgdXJsMiwgcGFyYW1zLCB1cmx0eXBlKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzd2l0Y2ggKHVybHR5cGUpIHtcclxuICAgICAgLy8gY2FzZSAnY3VzdG9tZXJfaWQnOlxyXG4gICAgICAvLyAgIGxldCBjX2lkMSA9IGNvb2tpZS5nZXQoJ2N1c3RvbWVyX2lkJyk7XHJcbiAgICAgIC8vICAgdXJsID0gYCR7dXJsfSR7Y19pZDF9YDtcclxuICAgICAgLy8gICBicmVhaztcclxuICAgICAgY2FzZSAnY3VzdG9tZXJfaWQnOlxyXG4gICAgICAgIGxldCBjX2lkMiA9IGNvb2tpZS5nZXQoJ2N1c3RvbWVyX2lkJyk7XHJcbiAgICAgICAgdXJsID0gYCR7dXJsfSR7Y19pZH0ke3VybDJ9YDtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdXJsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBjb29raWUuZ2V0KCd0b2tlbicpO1xyXG4gICAgY29uc3QgdHlwZSA9ICdQT1NUJztcclxuICAgIGNvbnNvbGUubG9nKHR5cGUsICcgY2FsbCcsIHVybCwgcGFyYW1zKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGNvbnRleHRcclxuICAgICAgICAuaXNDb25uZWN0ZWQoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IHR5cGUsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAgKiAxICogNjAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIC8vIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2VyZXNwb25zZScsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BPU1QgcmVzcG9uc2VUZXh0KioqKionLCByZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwoSlNPTi5wYXJzZShyZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2U6IENvbnN0YW50cy5BcHBDb25zdGFudHMuRXJyb3IuaW50ZXJuZXRDb25uZWN0aXZpdHksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdlcm9ybycsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJvcm8gKioqKioqKioqICcsIGVycm9yKTtcclxuICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGl2aXR5LicsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldENhbGwodXJsLCB0b2tlbikge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ2dldCBjYWxsJywgdXJsLCB0b2tlbik7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xyXG4gICAgICBjb250ZXh0XHJcbiAgICAgICAgLmlzQ29ubmVjdGVkKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMCAqIDEgKiA2MCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgLy8gXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5fYm9keUluaXQgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5fYm9keUluaXQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZVRleHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2VUZXh0cmVzcG9uc2VUZXh0JywgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAvLyBmdWxmaWxsKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXNzYWdlOiBDb25zdGFudHMuQXBwQ29uc3RhbnRzLkVycm9yLmludGVybmV0Q29ubmVjdGl2aXR5LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignZXJvcm8nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vyb3JvICoqKioqKioqKiAnLCBlcnJvcik7XHJcbiAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpdml0eS4nLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RDbGllbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=