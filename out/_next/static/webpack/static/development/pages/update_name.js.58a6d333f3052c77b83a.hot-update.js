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
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(mobile), '', paramsData).then( /*#__PURE__*/function () {
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
var updatename_action = function updatename_action(name) {
  var paramsData = {
    customer_name: name
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/customer_profile/", '', paramsData).then( /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hdXRoQWN0aW9uLmpzIl0sIm5hbWVzIjpbInNlbmRPdHBfYWN0aW9uIiwicGFyYW1zIiwiZGlzcGF0Y2giLCJSZXN0Q2xpZW50IiwiZ2V0Q2FsbCIsIkNvbm5lY3Rpb24iLCJnZXRCYXNlVXJsIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidHlwZSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwibW9iaWxlIiwiZSIsInZlcmlmeW90cF9hY3Rpb24iLCJvdHAiLCJwYXJhbXNEYXRhIiwib3RwX3ZhbHVlIiwicmVzdENhbGwiLCJzdGF0dXMiLCJjdXN0b21lcl9pZCIsImNvb2tpZSIsInNldCIsImF1dGhfdG9rZW4iLCJnZXQiLCJ1cGRhdGVuYW1lX2FjdGlvbiIsIm5hbWUiLCJjdXN0b21lcl9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7QUFDeEMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDbkJDLGtFQUFVLENBQUNDLE9BQVgsQ0FBbUJDLDBEQUFVLENBQUNDLFVBQVgsNEJBQTBDTCxNQUExQyxDQUFuQixFQUNHTSxJQURIO0FBQUEsa01BQ1EsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBaUIsYUFBakIsRUFESSxDQUVKOztBQUNBLG9CQUFJQSxHQUFHLENBQUNHLElBQUosQ0FBU0MsSUFBVCxLQUFrQixTQUF0QixFQUFpQztBQUMvQkMsb0VBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLDRCQUFRLEVBQUUsYUFEQTtBQUVWQyx5QkFBSyxFQUFFO0FBQUVDLDRCQUFNLEVBQUVoQjtBQUFWO0FBRkcsbUJBQVos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QUlqQixHQUFHLENBQUNHLElBQUosQ0FBU2EsTUFBVCxLQUFvQixJQUF4QixFQUE4QjtBQUM1QmYseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQWdCLGtFQUFNLENBQUNDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLFFBQW5CO0FBRUFELGtFQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CbkIsR0FBRyxDQUFDRyxJQUFKLENBQVNpQixVQUE3QjtBQUVBRixrRUFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxFQUEwQm5CLEdBQUcsQ0FBQ0csSUFBSixDQUFTYyxXQUFuQyxFQU40QixDQVE1QjtBQUNELGlCQVRELE1BU087QUFDTGhCLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixlQUFqQixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNEOztBQXhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxSOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBK0JHRCxJQS9CSCxDQStCUTtBQUFBLGFBQU1tQixnREFBTSxDQUFDRyxHQUFQLENBQVcsYUFBWCxLQUE2QmhCLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxhQUFaLENBQW5DO0FBQUEsS0EvQlIsRUErQnVFO0FBL0J2RSxjQWdDUyxVQUFDSSxDQUFELEVBQU87QUFDWjtBQUNBO0FBQ0FULGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JRLENBQXhCO0FBQ0QsS0FwQ0g7QUFxQ0QsR0F0Q0QsQ0FKeUMsQ0EyQ3pDO0FBQ0QsQ0E1Q00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVwZGF0ZV9uYW1lLmpzLjU4YTZkMzMzZjMwNTJjNzdiODNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBSZXN0Q2xpZW50IGZyb20gJy4vLi4vUmVzdENsaWVudC9SZXN0Q2xpZW50JztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vLi4vY29uZmlnL0Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgY29uc3Qgc2VuZE90cF9hY3Rpb24gPSAocGFyYW1zKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5nZXRDYWxsKENvbm5lY3Rpb24uZ2V0QmFzZVVybCgpICsgYC9sb2dpbi9waG9uZS8ke3BhcmFtc31gKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyByZXMnKTtcclxuICAgICAgICAvLyBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL290cF92ZXJpZnknLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBtb2JpbGU6IHBhcmFtcyB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeW90cF9hY3Rpb24gPSAob3RwLCBtb2JpbGUpID0+IHtcclxuICBsZXQgcGFyYW1zRGF0YSA9IHtcclxuICAgIG90cF92YWx1ZTogb3RwLFxyXG4gIH07XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5yZXN0Q2FsbChcclxuICAgICAgQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL2xvZ2luL3Bob25lLyR7bW9iaWxlfWAsXHJcbiAgICAgICcnLFxyXG4gICAgICBwYXJhbXNEYXRhXHJcbiAgICApXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgcmVzLmRhdGEuY3VzdG9tZXJfaWQsICd0aGlzIGlzIHJlcycpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMgaSBhbSBoZXJlJyk7XHJcbiAgICAgICAgICBjb29raWUuc2V0KCduYW1lJywgJ211a2VzaCcpO1xyXG5cclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEuYXV0aF90b2tlbik7XHJcblxyXG4gICAgICAgICAgY29va2llLnNldCgnY3VzdG9tZXJfaWQnLCByZXMuZGF0YS5jdXN0b21lcl9pZCk7XHJcblxyXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZVRvT3RwVmVyaWZpY2F0aW9uKHBhcmFtcywgc2NyZWVubmFtZV9yZWRpcmVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKSAmJiBSb3V0ZXIucHVzaCgnL3FyX3NjYW5uZXInKSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVuYW1lX2FjdGlvbiA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHBhcmFtc0RhdGEgPSB7XHJcbiAgICBjdXN0b21lcl9uYW1lOiBuYW1lLFxyXG4gIH07XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5yZXN0Q2FsbChcclxuICAgICAgQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL2N1c3RvbWVyX3Byb2ZpbGUvYCxcclxuICAgICAgJycsXHJcbiAgICAgIHBhcmFtc0RhdGFcclxuICAgIClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCByZXMuZGF0YS5jdXN0b21lcl9pZCwgJ3RoaXMgaXMgcmVzJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcyBpIGFtIGhlcmUnKTtcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ25hbWUnLCAnbXVrZXNoJyk7XHJcblxyXG4gICAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS5hdXRoX3Rva2VuKTtcclxuXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdjdXN0b21lcl9pZCcsIHJlcy5kYXRhLmN1c3RvbWVyX2lkKTtcclxuXHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpICYmIFJvdXRlci5wdXNoKCcvcXJfc2Nhbm5lcicpKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9