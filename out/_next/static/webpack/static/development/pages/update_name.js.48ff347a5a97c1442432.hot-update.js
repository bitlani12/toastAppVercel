webpackHotUpdate("static\\development\\pages\\update_name.js",{

/***/ "./src/redux/actions/authAction.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/authAction.js ***!
  \*****************************************/
/*! exports provided: sendOtp_action, verifyotp_action, updatename_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOtp_action", function() { return sendOtp_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyotp_action", function() { return verifyotp_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatename_action", function() { return updatename_action; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../RestClient/RestClient */ "./src/redux/RestClient/RestClient.js");
/* harmony import */ var _config_Connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/Connection */ "./src/config/Connection.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);





 // import nextCookie from 'next-cookies';


var sendOtp_action = function sendOtp_action(params) {
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].getCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(params)).then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(res, 'this is res'); // dispatch(handleLoader(false));

                if (res.data.type === 'success') {
                  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                    pathname: '/otp_verify',
                    query: {
                      mobile: params
                    }
                  }); //   navigateToOtpVerification(params, screenname_redirect);
                } else {
                  console.log(res, 'this is error'); //       Dialog(res.message, [
                  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                  //       ]);
                  //       console.log('ressssssssss', res);
                  //     }
                  //     console.log('ressssssssss', res);
                  //     if (cb) {
                  //       cb(res);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};
var verifyotp_action = function verifyotp_action(otp, mobile) {
  var paramsData = {
    otp_value: otp
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(mobile), paramsData).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(res, res.data.customer_id, 'this is res'); // dispatch(handleLoader(false));

                if (res.data.status === true) {
                  console.log('yes i am here');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('name', 'mukesh');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', res.data.auth_token);
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('customer_id', res.data.customer_id); //   navigateToOtpVerification(params, screenname_redirect);
                } else {
                  console.log(res, 'this is error'); //       Dialog(res.message, [
                  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                  //       ]);
                  //       console.log('ressssssssss', res);
                  //     }
                  //     console.log('ressssssssss', res);
                  //     if (cb) {
                  //       cb(res);
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()).then(function () {
      return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('customer_id') && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/qr_scanner');
    }) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};
var updatename_action = function updatename_action(otp, mobile) {
  var paramsData = {
    otp_value: otp
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(mobile), paramsData).then( /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(res, res.data.customer_id, 'this is res'); // dispatch(handleLoader(false));

                if (res.data.status === true) {
                  console.log('yes i am here');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('name', 'mukesh');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', res.data.auth_token);
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('customer_id', res.data.customer_id); //   navigateToOtpVerification(params, screenname_redirect);
                } else {
                  console.log(res, 'this is error'); //       Dialog(res.message, [
                  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                  //       ]);
                  //       console.log('ressssssssss', res);
                  //     }
                  //     console.log('ressssssssss', res);
                  //     if (cb) {
                  //       cb(res);
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()).then(function () {
      return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('customer_id') && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/qr_scanner');
    }) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uLmpzIl0sIm5hbWVzIjpbInNlbmRPdHBfYWN0aW9uIiwicGFyYW1zIiwiZGlzcGF0Y2giLCJSZXN0Q2xpZW50IiwiZ2V0Q2FsbCIsIkNvbm5lY3Rpb24iLCJnZXRCYXNlVXJsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidHlwZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibW9iaWxlIiwiZSIsInZlcmlmeW90cF9hY3Rpb24iLCJvdHAiLCJwYXJhbXNEYXRhIiwib3RwX3ZhbHVlIiwicmVzdENhbGwiLCJzdGF0dXMiLCJjdXN0b21lcl9pZCIsImNvb2tpZSIsInNldCIsImF1dGhfdG9rZW4iLCJnZXQiLCJ1cGRhdGVuYW1lX2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3hDLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ25CQyxrRUFBVSxDQUFDQyxPQUFYLENBQW1CQywwREFBVSxDQUFDQyxVQUFYLDRCQUEwQ0wsTUFBMUMsQ0FBbkIsRUFDR00sSUFESDtBQUFBLGtNQUNRLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLGFBQWpCLEVBREksQ0FFSjs7QUFDQSxvQkFBSUEsR0FBRyxDQUFDRyxJQUFKLENBQVNDLElBQVQsS0FBa0IsU0FBdEIsRUFBaUM7QUFDL0JDLG9FQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyw0QkFBUSxFQUFFLGFBREE7QUFFVkMseUJBQUssRUFBRTtBQUFFQyw0QkFBTSxFQUFFaEI7QUFBVjtBQUZHLG1CQUFaLEVBRCtCLENBSy9CO0FBQ0QsaUJBTkQs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SixDQUFTYSxNQUFULEtBQW9CLElBQXhCLEVBQThCO0FBQzVCZix5QkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWjtBQUNBZ0Isa0VBQU0sQ0FBQ0MsR0FBUCxDQUFXLE1BQVgsRUFBbUIsUUFBbkI7QUFFQUQsa0VBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsRUFBb0JuQixHQUFHLENBQUNHLElBQUosQ0FBU2lCLFVBQTdCO0FBRUFGLGtFQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLEVBQTBCbkIsR0FBRyxDQUFDRyxJQUFKLENBQVNjLFdBQW5DLEVBTjRCLENBUTVCO0FBQ0QsaUJBVEQsTUFTTztBQUNMaEIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLGVBQWpCLEVBREssQ0FFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0Q7O0FBeEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0E4QkdELElBOUJILENBOEJRO0FBQUEsYUFBTW1CLGdEQUFNLENBQUNHLEdBQVAsQ0FBVyxhQUFYLEtBQTZCaEIsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBbkM7QUFBQSxLQTlCUixFQThCdUU7QUE5QnZFLGNBK0JTLFVBQUNJLENBQUQsRUFBTztBQUNaO0FBQ0E7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlEsQ0FBeEI7QUFDRCxLQW5DSDtBQW9DRCxHQXJDRCxDQUpnRCxDQTBDaEQ7QUFDRCxDQTNDTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXBkYXRlX25hbWUuanMuNDhmZjM0N2E1YTk3YzE0NDI0MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IFJlc3RDbGllbnQgZnJvbSAnLi8uLi9SZXN0Q2xpZW50L1Jlc3RDbGllbnQnO1xyXG5pbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuLi8uLi9jb25maWcvQ29ubmVjdGlvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmV4cG9ydCBjb25zdCBzZW5kT3RwX2FjdGlvbiA9IChwYXJhbXMpID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBSZXN0Q2xpZW50LmdldENhbGwoQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL2xvZ2luL3Bob25lLyR7cGFyYW1zfWApXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIHJlcycpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvb3RwX3ZlcmlmeScsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG1vYmlsZTogcGFyYW1zIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vICAgbmF2aWdhdGVUb090cFZlcmlmaWNhdGlvbihwYXJhbXMsIHNjcmVlbm5hbWVfcmVkaXJlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIGVycm9yJyk7XHJcbiAgICAgICAgICAvLyAgICAgICBEaWFsb2cocmVzLm1lc3NhZ2UsIFtcclxuICAgICAgICAgIC8vICAgICAgICAgeyB0ZXh0OiAnT0snLCBvblByZXNzOiAoKSA9PiBjb25zb2xlLmxvZygnT0sgUHJlc3NlZCcpIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdKTtcclxuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG4gICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcblxyXG4gICAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgICAgLy8gICAgICAgY2IocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyAgIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Jyb3InLCBlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICAvLyAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdmVyaWZ5b3RwX2FjdGlvbiA9IChvdHAsIG1vYmlsZSkgPT4ge1xyXG4gIGxldCBwYXJhbXNEYXRhID0ge1xyXG4gICAgb3RwX3ZhbHVlOiBvdHAsXHJcbiAgfTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBSZXN0Q2xpZW50LnJlc3RDYWxsKFxyXG4gICAgICBDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvbG9naW4vcGhvbmUvJHttb2JpbGV9YCxcclxuICAgICAgcGFyYW1zRGF0YVxyXG4gICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsIHJlcy5kYXRhLmN1c3RvbWVyX2lkLCAndGhpcyBpcyByZXMnKTtcclxuICAgICAgICAvLyBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzIGkgYW0gaGVyZScpO1xyXG4gICAgICAgICAgY29va2llLnNldCgnbmFtZScsICdtdWtlc2gnKTtcclxuXHJcbiAgICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLmF1dGhfdG9rZW4pO1xyXG5cclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ2N1c3RvbWVyX2lkJywgcmVzLmRhdGEuY3VzdG9tZXJfaWQpO1xyXG5cclxuICAgICAgICAgIC8vICAgbmF2aWdhdGVUb090cFZlcmlmaWNhdGlvbihwYXJhbXMsIHNjcmVlbm5hbWVfcmVkaXJlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIGVycm9yJyk7XHJcbiAgICAgICAgICAvLyAgICAgICBEaWFsb2cocmVzLm1lc3NhZ2UsIFtcclxuICAgICAgICAgIC8vICAgICAgICAgeyB0ZXh0OiAnT0snLCBvblByZXNzOiAoKSA9PiBjb25zb2xlLmxvZygnT0sgUHJlc3NlZCcpIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdKTtcclxuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG4gICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcblxyXG4gICAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgICAgLy8gICAgICAgY2IocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGNvb2tpZS5nZXQoJ2N1c3RvbWVyX2lkJykgJiYgUm91dGVyLnB1c2goJy9xcl9zY2FubmVyJykpIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyAgIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Jyb3InLCBlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICAvLyAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlbmFtZV9hY3Rpb24gPSAob3RwLCBtb2JpbGUpID0+IHtcclxuICBsZXQgcGFyYW1zRGF0YSA9IHtcclxuICAgIG90cF92YWx1ZTogb3RwLFxyXG4gIH07XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5yZXN0Q2FsbChcclxuICAgICAgQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL2xvZ2luL3Bob25lLyR7bW9iaWxlfWAsXHJcbiAgICAgIHBhcmFtc0RhdGFcclxuICAgIClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCByZXMuZGF0YS5jdXN0b21lcl9pZCwgJ3RoaXMgaXMgcmVzJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcyBpIGFtIGhlcmUnKTtcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ25hbWUnLCAnbXVrZXNoJyk7XHJcblxyXG4gICAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS5hdXRoX3Rva2VuKTtcclxuXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdjdXN0b21lcl9pZCcsIHJlcy5kYXRhLmN1c3RvbWVyX2lkKTtcclxuXHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpICYmIFJvdXRlci5wdXNoKCcvcXJfc2Nhbm5lcicpKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9