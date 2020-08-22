webpackHotUpdate(1,{

/***/ "./src/redux/actions/orderAction.js":
/*!******************************************!*\
  !*** ./src/redux/actions/orderAction.js ***!
  \******************************************/
/*! exports provided: sendOtp_action, scanqr_action, jointable_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOtp_action", function() { return sendOtp_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanqr_action", function() { return scanqr_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jointable_action", function() { return jointable_action; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./src/redux/types.js");
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
var scanqr_action = function scanqr_action(code) {
  console.log(name, 'this is name');
  var paramsData = {
    qr_code: code
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/table/", '/join', paramsData, 'customer_id').then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(res, 'this is res ++++++++++'); // dispatch(handleLoader(false));

                if (res.data.status === 'occupied') {
                  console.log('i am herre    ++++');
                  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                    pathname: '/join_table',
                    query: {
                      qr_code: code
                    }
                  } // { shallow: true }
                  );
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
    }()) //   .then(() => cookie.get('customer_id') && Router.push('/qr_scanner')) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};
var jointable_action = function jointable_action(code, qr_code) {
  console.log(name, 'this is name');
  var paramsData = {
    table_joining_code: code,
    qr_code: qr_code
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/table/", '/join_with_code', paramsData, 'customer_id').then( /*#__PURE__*/function () {
      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(res, 'this is res ++++++++++'); // dispatch(handleLoader(false));

                if (res.data.status !== 'failure') {
                  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
                  dispatch({
                    type: _types_js__WEBPACK_IMPORTED_MODULE_2__["MENU_DATA"],
                    data: res.data
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
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref3.apply(this, arguments);
      };
    }()) //   .then(() => cookie.get('customer_id') && Router.push('/qr_scanner')) // eslint-disable-next-line
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9vcmRlckFjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZW5kT3RwX2FjdGlvbiIsInBhcmFtcyIsImRpc3BhdGNoIiwiUmVzdENsaWVudCIsImdldENhbGwiLCJDb25uZWN0aW9uIiwiZ2V0QmFzZVVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInR5cGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1vYmlsZSIsImUiLCJzY2FucXJfYWN0aW9uIiwiY29kZSIsIm5hbWUiLCJwYXJhbXNEYXRhIiwicXJfY29kZSIsInJlc3RDYWxsIiwic3RhdHVzIiwiam9pbnRhYmxlX2FjdGlvbiIsInRhYmxlX2pvaW5pbmdfY29kZSIsInR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7QUFDeEMsU0FBTyxVQUFDQyxRQUFELEVBQWM7QUFDbkJDLGtFQUFVLENBQUNDLE9BQVgsQ0FBbUJDLDBEQUFVLENBQUNDLFVBQVgsNEJBQTBDTCxNQUExQyxDQUFuQixFQUNHTSxJQURIO0FBQUEsa01BQ1EsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBaUIsYUFBakIsRUFESSxDQUVKOztBQUNBLG9CQUFJQSxHQUFHLENBQUNHLElBQUosQ0FBU0MsSUFBVCxLQUFrQixTQUF0QixFQUFpQztBQUMvQkMsb0VBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1ZDLDRCQUFRLEVBQUUsYUFEQTtBQUVWQyx5QkFBSyxFQUFFO0FBQUVDLDRCQUFNLEVBQUVoQjtBQUFWO0FBRkcsbUJBQVosRUFEK0IsQ0FLL0I7QUFDRCxpQkFORCxNQU1PO0FBQ0xRLHlCQUFP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QUFDRCxpQkFKRCxNQUlPO0FBQ0xGLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixlQUFqQixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNEOztBQW5CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5SOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkJFO0FBM0JGLGNBNEJTLFVBQUNVLENBQUQsRUFBTztBQUNaO0FBQ0E7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlEsQ0FBeEI7QUFDRCxLQWhDSDtBQWlDRCxHQWxDRCxDQU5pRCxDQXlDakQ7QUFDRCxDQTFDTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjJjYmVhMjM4NzI5ODA0ZmQ2ZTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcy5qcyc7XHJcbmltcG9ydCBSZXN0Q2xpZW50IGZyb20gJy4vLi4vUmVzdENsaWVudC9SZXN0Q2xpZW50JztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vLi4vY29uZmlnL0Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgY29uc3Qgc2VuZE90cF9hY3Rpb24gPSAocGFyYW1zKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5nZXRDYWxsKENvbm5lY3Rpb24uZ2V0QmFzZVVybCgpICsgYC9sb2dpbi9waG9uZS8ke3BhcmFtc31gKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyByZXMnKTtcclxuICAgICAgICAvLyBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL290cF92ZXJpZnknLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBtb2JpbGU6IHBhcmFtcyB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjYW5xcl9hY3Rpb24gPSAoY29kZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5hbWUsICd0aGlzIGlzIG5hbWUnKTtcclxuICBsZXQgcGFyYW1zRGF0YSA9IHtcclxuICAgIHFyX2NvZGU6IGNvZGUsXHJcbiAgfTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBSZXN0Q2xpZW50LnJlc3RDYWxsKFxyXG4gICAgICBDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvdGFibGUvYCxcclxuICAgICAgJy9qb2luJyxcclxuICAgICAgcGFyYW1zRGF0YSxcclxuICAgICAgJ2N1c3RvbWVyX2lkJ1xyXG4gICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIHJlcyArKysrKysrKysrJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gJ29jY3VwaWVkJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2kgYW0gaGVycmUgICAgKysrKycpO1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9qb2luX3RhYmxlJyxcclxuICAgICAgICAgICAgICBxdWVyeTogeyBxcl9jb2RlOiBjb2RlIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8geyBzaGFsbG93OiB0cnVlIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLy8gICAudGhlbigoKSA9PiBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpICYmIFJvdXRlci5wdXNoKCcvcXJfc2Nhbm5lcicpKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGpvaW50YWJsZV9hY3Rpb24gPSAoY29kZSwgcXJfY29kZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5hbWUsICd0aGlzIGlzIG5hbWUnKTtcclxuICBsZXQgcGFyYW1zRGF0YSA9IHtcclxuICAgIHRhYmxlX2pvaW5pbmdfY29kZTogY29kZSxcclxuICAgIHFyX2NvZGU6IHFyX2NvZGUsXHJcbiAgfTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBSZXN0Q2xpZW50LnJlc3RDYWxsKFxyXG4gICAgICBDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvdGFibGUvYCxcclxuICAgICAgJy9qb2luX3dpdGhfY29kZScsXHJcbiAgICAgIHBhcmFtc0RhdGEsXHJcbiAgICAgICdjdXN0b21lcl9pZCdcclxuICAgIClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyByZXMgKysrKysrKysrKycpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgIT09ICdmYWlsdXJlJykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuTUVOVV9EQVRBLCBkYXRhOiByZXMuZGF0YSB9KTtcclxuICAgICAgICAgIC8vICAgbmF2aWdhdGVUb090cFZlcmlmaWNhdGlvbihwYXJhbXMsIHNjcmVlbm5hbWVfcmVkaXJlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIGVycm9yJyk7XHJcbiAgICAgICAgICAvLyAgICAgICBEaWFsb2cocmVzLm1lc3NhZ2UsIFtcclxuICAgICAgICAgIC8vICAgICAgICAgeyB0ZXh0OiAnT0snLCBvblByZXNzOiAoKSA9PiBjb25zb2xlLmxvZygnT0sgUHJlc3NlZCcpIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdKTtcclxuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG4gICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcblxyXG4gICAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgICAgLy8gICAgICAgY2IocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKCkgPT4gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKSAmJiBSb3V0ZXIucHVzaCgnL3FyX3NjYW5uZXInKSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==