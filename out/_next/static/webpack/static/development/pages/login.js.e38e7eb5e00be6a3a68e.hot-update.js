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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvUmVzdENsaWVudC9SZXN0Q2xpZW50LmpzIl0sIm5hbWVzIjpbIlJlc3RDbGllbnQiLCJjb250ZXh0IiwiUHJvbWlzZSIsImZ1bGZpbGwiLCJyZWplY3QiLCJ1bnN1YnNjcmliZSIsInVybCIsInVybDIiLCJwYXJhbXMiLCJ1cmx0eXBlIiwiY19pZDEiLCJjb29raWUiLCJnZXQiLCJjX2lkIiwiY19pZDIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInRva2VuIiwiaXNDb25uZWN0ZWQiLCJ0aGVuIiwiZmV0Y2giLCJtZXRob2QiLCJ0aW1lb3V0IiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwidGV4dCIsInJlc3BvbnNlVGV4dCIsInBhcnNlIiwiZXJyb3IiLCJ3YXJuIiwibWVzc2FnZSIsIl9ib2R5SW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7OztBQUNiOztJQUNNQSxVOzs7Ozs7O2tDQUNpQjtBQUNuQixVQUFJQyxPQUFPLEdBQUcsSUFBZDtBQUNBLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzVDLFlBQUlDLFdBQUosQ0FENEMsQ0FFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLGVBQU8sR0FOcUMsQ0FPNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0FiTSxDQUFQO0FBY0Q7Ozs2QkFDZUcsRyxFQUFLQyxJLEVBQU1DLE0sRUFBUUMsTyxFQUFTO0FBQzFDLFVBQUlSLE9BQU8sR0FBRyxJQUFkOztBQUNBLGNBQVFRLE9BQVI7QUFDRSxhQUFLLGFBQUw7QUFDRSxjQUFJQyxLQUFLLEdBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLENBQVo7QUFDQU4sYUFBRyxhQUFNQSxHQUFOLGNBQWFPLElBQWIsQ0FBSDtBQUNBOztBQUNGLGFBQUssY0FBTDtBQUNFLGNBQUlDLEtBQUssR0FBR0gsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLGFBQVgsQ0FBWjtBQUNBTixhQUFHLGFBQU1BLEdBQU4sY0FBYU8sSUFBYixjQUFxQk4sSUFBckIsQ0FBSDtBQUNBOztBQUVGO0FBQ0VELGFBQUc7QUFDSDtBQVpKOztBQWNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixPQUFsQixFQUEyQlgsR0FBM0IsRUFBZ0NFLE1BQWhDLEVBQXdDVSxLQUF4QztBQUNBLGFBQU8sSUFBSWhCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1Q0gsZUFBTyxDQUNKa0IsV0FESCxHQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWQyxlQUFLLENBQUNmLEdBQUQsRUFBTTtBQUNUZ0Isa0JBQU0sRUFBRUwsSUFEQztBQUVUTSxtQkFBTyxFQUFFLE9BQU8sQ0FBUCxHQUFXLEVBRlg7QUFHVEMsbUJBQU8sRUFBRTtBQUNQQyxvQkFBTSxFQUFFLGtCQUREO0FBRVAsOEJBQWdCLGtCQUZUO0FBR1A7QUFDQUMsMkJBQWEsRUFBRVI7QUFKUixhQUhBO0FBU1RTLGdCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlckIsTUFBZjtBQVRHLFdBQU4sQ0FBTCxDQVdHWSxJQVhILENBV1EsVUFBQ1UsUUFBRCxFQUFjO0FBQ2xCZixtQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NjLFFBQWhDO0FBQ0EsbUJBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0QsV0FkSCxFQWVHWCxJQWZILENBZVEsVUFBQ1ksWUFBRCxFQUFrQjtBQUN0QmpCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ2dCLFlBQXRDOztBQUNBLGdCQUFJQSxZQUFKLEVBQWtCO0FBQ2hCN0IscUJBQU8sQ0FBQ3lCLElBQUksQ0FBQ0ssS0FBTCxDQUFXRCxZQUFYLENBQUQsQ0FBUDtBQUNELGFBRkQsTUFFTztBQUNMN0IscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLFdBdEJILFdBdUJTLFVBQUMrQixLQUFELEVBQVc7QUFDaEIvQixtQkFBTyxDQUFDLENBQ047QUFETSxhQUFELENBQVA7QUFHQVksbUJBQU8sQ0FBQ29CLElBQVIsQ0FBYSxPQUFiLEVBQXNCRCxLQUF0QjtBQUNELFdBNUJIO0FBNkJELFNBaENILFdBaUNTLFVBQUNBLEtBQUQsRUFBVztBQUNoQm5CLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ2tCLEtBQWhDO0FBQ0EvQixpQkFBTyxDQUFDO0FBQ05pQyxtQkFBTyxFQUFFO0FBREgsV0FBRCxDQUFQO0FBR0QsU0F0Q0g7QUF1Q0QsT0F4Q00sQ0FBUDtBQXlDRDs7OzRCQUVjOUIsRyxFQUFLWSxLLEVBQU87QUFDekIsVUFBSWpCLE9BQU8sR0FBRyxJQUFkO0FBQ0FjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JWLEdBQXhCLEVBQTZCWSxLQUE3QjtBQUNBLGFBQU8sSUFBSWhCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUEyQjtBQUM1Q0gsZUFBTyxDQUNKa0IsV0FESCxHQUVHQyxJQUZILENBRVEsWUFBTTtBQUNWQyxlQUFLLENBQUNmLEdBQUQsRUFBTTtBQUNUZ0Isa0JBQU0sRUFBRSxLQURDO0FBRVRDLG1CQUFPLEVBQUUsT0FBTyxDQUFQLEdBQVcsRUFGWDtBQUdUQyxtQkFBTyxFQUFFO0FBQ1BDLG9CQUFNLEVBQUUsa0JBREQ7QUFFUCw4QkFBZ0Isa0JBRlQ7QUFHUDtBQUNBQywyQkFBYSxFQUFFUjtBQUpSO0FBSEEsV0FBTixDQUFMLENBVUdFLElBVkgsQ0FVUSxVQUFDVSxRQUFELEVBQWM7QUFDbEIsZ0JBQUlBLFFBQVEsQ0FBQ08sU0FBVCxJQUFzQixFQUExQixFQUE4QjtBQUM1QixxQkFBT1AsUUFBUSxDQUFDTyxTQUFoQjtBQUNEOztBQUNELG1CQUFPUCxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNELFdBZkgsRUFnQkdYLElBaEJILENBZ0JRLFVBQUNZLFlBQUQsRUFBa0I7QUFDdEJqQixtQkFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVosRUFBd0NnQixZQUF4QyxFQURzQixDQUV0Qjs7QUFDQSxnQkFBSUEsWUFBSixFQUFrQjtBQUNoQjdCLHFCQUFPLENBQUN5QixJQUFJLENBQUNLLEtBQUwsQ0FBV0QsWUFBWCxDQUFELENBQVA7QUFDRCxhQUZELE1BRU87QUFDTDdCLHFCQUFPLENBQUM2QixZQUFELENBQVA7QUFDRDtBQUNGLFdBeEJILFdBeUJTLFVBQUNFLEtBQUQsRUFBVztBQUNoQi9CLG1CQUFPLENBQUMsQ0FDTjtBQURNLGFBQUQsQ0FBUDtBQUdBWSxtQkFBTyxDQUFDb0IsSUFBUixDQUFhLE9BQWIsRUFBc0JELEtBQXRCO0FBQ0QsV0E5Qkg7QUErQkQsU0FsQ0gsV0FtQ1MsVUFBQ0EsS0FBRCxFQUFXO0FBQ2hCbkIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDa0IsS0FBaEM7QUFDQS9CLGlCQUFPLENBQUM7QUFDTmlDLG1CQUFPLEVBQUU7QUFESCxXQUFELENBQVA7QUFHRCxTQXhDSDtBQXlDRCxPQTFDTSxDQUFQO0FBMkNEOzs7Ozs7QUFHWXBDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy5lMzhlN2ViNWUwMGJlNmEzYTY4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmNsYXNzIFJlc3RDbGllbnQge1xyXG4gIHN0YXRpYyBpc0Nvbm5lY3RlZCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGxldCB1bnN1YnNjcmliZTtcclxuICAgICAgLy8gICB1bnN1YnNjcmliZSA9IE5ldEluZm8uYWRkRXZlbnRMaXN0ZW5lcihzdGF0ZSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZVwiLCBzdGF0ZS50eXBlKTtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXMgY29ubmVjdGVkP1wiLCBzdGF0ZS5pc0Nvbm5lY3RlZCk7XHJcbiAgICAgIC8vIGlmIChzdGF0ZS5pc0Nvbm5lY3RlZClcclxuICAgICAgZnVsZmlsbCgpO1xyXG4gICAgICAvLyAgc3RhdGUuaXNDb25uZWN0ZWQgLy8gdGhpcyB3aWxsIGNvbWUgaW5zaWRlIGZ1Y3Rpb25cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgcmVqZWN0KHN0YXRlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXN0Q2FsbCh1cmwsIHVybDIsIHBhcmFtcywgdXJsdHlwZSkge1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc3dpdGNoICh1cmx0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2N1c3RvbWVyX2lkJzpcclxuICAgICAgICBsZXQgY19pZDEgPSBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpO1xyXG4gICAgICAgIHVybCA9IGAke3VybH0vJHtjX2lkfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1c3RvbWVyX2lkMic6XHJcbiAgICAgICAgbGV0IGNfaWQyID0gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKTtcclxuICAgICAgICB1cmwgPSBgJHt1cmx9LyR7Y19pZH0vJHt1cmwyfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHVybDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHR5cGUsICcgY2FsbCcsIHVybCwgcGFyYW1zLCB0b2tlbik7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGZ1bGZpbGwsIHJlamVjdCkge1xyXG4gICAgICBjb250ZXh0XHJcbiAgICAgICAgLmlzQ29ubmVjdGVkKClcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiB0eXBlLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwICogMSAqIDYwLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAvLyBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlcmVzcG9uc2UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQT1NUIHJlc3BvbnNlVGV4dCoqKioqJywgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwobnVsbCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXNzYWdlOiBDb25zdGFudHMuQXBwQ29uc3RhbnRzLkVycm9yLmludGVybmV0Q29ubmVjdGl2aXR5LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignZXJvcm8nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vyb3JvICoqKioqKioqKiAnLCBlcnJvcik7XHJcbiAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpdml0eS4nLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDYWxsKHVybCwgdG9rZW4pIHtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKCdnZXQgY2FsbCcsIHVybCwgdG9rZW4pO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgY29udGV4dFxyXG4gICAgICAgIC5pc0Nvbm5lY3RlZCgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAgKiAxICogNjAsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIC8vIFwiQ2FjaGUtQ29udHJvbFwiOiBcIm5vLWNhY2hlXCIsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuX2JvZHlJbml0ID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuX2JvZHlJbml0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2VUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlVGV4dHJlc3BvbnNlVGV4dCcsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgLy8gZnVsZmlsbChyZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwoSlNPTi5wYXJzZShyZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChyZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICAgICAgLy8gbWVzc2FnZTogQ29uc3RhbnRzLkFwcENvbnN0YW50cy5FcnJvci5pbnRlcm5ldENvbm5lY3Rpdml0eSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Vyb3JvJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcm9ybyAqKioqKioqKiogJywgZXJyb3IpO1xyXG4gICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aXZpdHkuJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0Q2xpZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9