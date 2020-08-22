webpackHotUpdate("static\\development\\pages\\otp_verify.js",{

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
        case 'customer_id':
          var c_id1 = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('customer_id');
          url = "".concat(url, "/").concat(c_id);
          break;

        case 'customer_id2':
          var c_id2 = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('customer_id');
          url = "".concat(url, "/").concat(c_id, "/").concat(url2);
          break;

        default:
          url;
          break;
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvUmVzdENsaWVudC9SZXN0Q2xpZW50LmpzIl0sIm5hbWVzIjpbIlJlc3RDbGllbnQiLCJjb250ZXh0IiwiUHJvbWlzZSIsImZ1bGZpbGwiLCJyZWplY3QiLCJ1bnN1YnNjcmliZSIsInVybCIsInVybDIiLCJwYXJhbXMiLCJ1cmx0eXBlIiwiY19pZDEiLCJjb29raWUiLCJnZXQiLCJjX2lkIiwiY19pZDIiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImlzQ29ubmVjdGVkIiwidGhlbiIsImZldGNoIiwibWV0aG9kIiwidGltZW91dCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInBhcnNlIiwiZXJyb3IiLCJ3YXJuIiwibWVzc2FnZSIsIl9ib2R5SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7OztBQUNiOztJQUNNQSxVOzs7Ozs7O2tDQUNpQjtBQUNuQixVQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFlBQUlDLFdBQUosQ0FENEMsQ0FFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLGVBQU8sR0FOcUMsQ0FPNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFDZUcsRyxFQUFLQyxJLEVBQU1DLE0sRUFBUUMsTyxFQUFTO0FBQzFDLFVBQUlSLE9BQU8sR0FBRyxJQUFkOztBQUNBLGNBQVFRLE9BQVI7QUFDRSxhQUFLLGFBQUw7QUFDRSxjQUFJQyxLQUFLLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLENBQVo7QUFDQU4sYUFBRyxhQUFNQSxHQUFOLGNBQWFPLElB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QWdCR1osSUFoQkgsQ0FnQlEsVUFBQ2EsWUFBRCxFQUFrQjtBQUN0QmhCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWixFQUF3Q2UsWUFBeEMsRUFEc0IsQ0FFdEI7O0FBQ0EsZ0JBQUlBLFlBQUosRUFBa0I7QUFDaEI3QixxQkFBTyxDQUFDeUIsSUFBSSxDQUFDSyxLQUFMLENBQVdELFlBQVgsQ0FBRCxDQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0w3QixxQkFBTyxDQUFDNkIsWUFBRCxDQUFQO0FBQ0Q7QUFDRixXQXhCSCxXQXlCUyxVQUFDRSxLQUFELEVBQVc7QUFDaEIvQixtQkFBTyxDQUFDLENBQ047QUFETSxhQUFELENBQVA7QUFHQWEsbUJBQU8sQ0FBQ21CLElBQVIsQ0FBYSxPQUFiLEVBQXNCRCxLQUF0QjtBQUNELFdBOUJIO0FBK0JELFNBbENILFdBbUNTLFVBQUNBLEtBQUQsRUFBVztBQUNoQmxCLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ2lCLEtBQWhDO0FBQ0EvQixpQkFBTyxDQUFDO0FBQ05pQyxtQkFBTyxFQUFFO0FBREgsV0FBRCxDQUFQO0FBR0QsU0F4Q0g7QUF5Q0QsT0ExQ00sQ0FBUDtBQTJDRDs7Ozs7O0FBR1lwQyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb3RwX3ZlcmlmeS5qcy4wNWRlMmEzNWY5NzAxMGIxNDk2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmNsYXNzIFJlc3RDbGllbnQge1xyXG4gIHN0YXRpYyBpc0Nvbm5lY3RlZCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGxldCB1bnN1YnNjcmliZTtcclxuICAgICAgLy8gICB1bnN1YnNjcmliZSA9IE5ldEluZm8uYWRkRXZlbnRMaXN0ZW5lcihzdGF0ZSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZVwiLCBzdGF0ZS50eXBlKTtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXMgY29ubmVjdGVkP1wiLCBzdGF0ZS5pc0Nvbm5lY3RlZCk7XHJcbiAgICAgIC8vIGlmIChzdGF0ZS5pc0Nvbm5lY3RlZClcclxuICAgICAgZnVsZmlsbCgpO1xyXG4gICAgICAvLyAgc3RhdGUuaXNDb25uZWN0ZWQgLy8gdGhpcyB3aWxsIGNvbWUgaW5zaWRlIGZ1Y3Rpb25cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgcmVqZWN0KHN0YXRlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXN0Q2FsbCh1cmwsIHVybDIsIHBhcmFtcywgdXJsdHlwZSkge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc3dpdGNoICh1cmx0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2N1c3RvbWVyX2lkJzpcclxuICAgICAgICBsZXQgY19pZDEgPSBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpO1xyXG4gICAgICAgIHVybCA9IGAke3VybH0vJHtjX2lkfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1c3RvbWVyX2lkMic6XHJcbiAgICAgICAgbGV0IGNfaWQyID0gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKTtcclxuICAgICAgICB1cmwgPSBgJHt1cmx9LyR7Y19pZH0vJHt1cmwyfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHVybDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnN0IHR5cGUgPSAnUE9TVCc7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlLCAnIGNhbGwnLCB1cmwsIHBhcmFtcyk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xyXG4gICAgICBjb250ZXh0XHJcbiAgICAgICAgLmlzQ29ubmVjdGVkKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiB0eXBlLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwICogMSAqIDYwLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAvLyBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlcmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1NUIHJlc3BvbnNlVGV4dCoqKioqJywgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwobnVsbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXNzYWdlOiBDb25zdGFudHMuQXBwQ29uc3RhbnRzLkVycm9yLmludGVybmV0Q29ubmVjdGl2aXR5LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignZXJvcm8nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vyb3JvICoqKioqKioqKiAnLCBlcnJvcik7XHJcbiAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpdml0eS4nLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDYWxsKHVybCwgdG9rZW4pIHtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKCdnZXQgY2FsbCcsIHVybCwgdG9rZW4pO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgY29udGV4dFxyXG4gICAgICAgIC5pc0Nvbm5lY3RlZCgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAgKiAxICogNjAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIC8vIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuX2JvZHlJbml0ID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuX2JvZHlJbml0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlVGV4dHJlc3BvbnNlVGV4dCcsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgLy8gZnVsZmlsbChyZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwoSlNPTi5wYXJzZShyZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChyZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICAgICAgLy8gbWVzc2FnZTogQ29uc3RhbnRzLkFwcENvbnN0YW50cy5FcnJvci5pbnRlcm5ldENvbm5lY3Rpdml0eSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Vyb3JvJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcm9ybyAqKioqKioqKiogJywgZXJyb3IpO1xyXG4gICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aXZpdHkuJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0Q2xpZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9