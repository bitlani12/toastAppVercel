webpackHotUpdate("static\\development\\pages\\join_table.js",{

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

                if (!(res.data.status === true)) {
                  _context2.next = 5;
                  break;
                }

                console.log('yes i am here'); //   navigateToOtpVerification(params, screenname_redirect);

                _context2.next = 11;
                break;

              case 5:
                if (!(res.data.status === 'occupied')) {
                  _context2.next = 10;
                  break;
                }

                console.log('i am herre');
                return _context2.abrupt("return", next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                  pathname: '/join_table',
                  query: {
                    qr_code: code
                  }
                }));

              case 10:
                console.log(res, 'this is error'); //       Dialog(res.message, [
                //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                //       ]);
                //       console.log('ressssssssss', res);
                //     }
                //     console.log('ressssssssss', res);
                //     if (cb) {
                //       cb(res);

              case 11:
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

                if (res.data.status === true) {
                  console.log('yes i am here'); //   navigateToOtpVerification(params, screenname_redirect);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9vcmRlckFjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZW5kT3RwX2FjdGlvbiIsInBhcmFtcyIsImRpc3BhdGNoIiwiUmVzdENsaWVudCIsImdldENhbGwiLCJDb25uZWN0aW9uIiwiZ2V0QmFzZVVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInR5cGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1vYmlsZSIsImUiLCJzY2FucXJfYWN0aW9uIiwiY29kZSIsIm5hbWUiLCJwYXJhbXNEYXRhIiwicXJfY29kZSIsInJlc3RDYWxsIiwic3RhdHVzIiwiY29va2llIiwiZ2V0Iiwiam9pbnRhYmxlX2FjdGlvbiIsInRhYmxlX2pvaW5pbmdfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNPLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3hDLFNBQU8sVUFBQ0MsUUFBRCxFQUFjO0FBQ25CQyxrRUFBVSxDQUFDQyxPQUFYLENBQW1CQywwREFBVSxDQUFDQyxVQUFYLDRCQUEwQ0wsTUFBMUMsQ0FBbkIsRUFDR00sSUFESDtBQUFBLGtNQUNRLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLGFBQWpCLEVBREksQ0FFSjs7QUFDQSxvQkFBSUEsR0FBRyxDQUFDRyxJQUFKLENBQVNDLElBQVQsS0FBa0IsU0FBdEIsRUFBaUM7QUFDL0JDLG9FQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyw0QkFBUSxFQUFFLGFBREE7QUFFVkMseUJBQUssRUFBRTtBQUFFQyw0QkFBTSxFQUFFaEI7QUFBVjtBQUZHLG1CQUFaLEVBRCtCLENBSy9CO0FBQ0QsaUJBTkQsTUFNTztBQUNM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QU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLHdCQUFqQixFQURJLENBRUo7O0FBQ0Esb0JBQUlBLEdBQUcsQ0FBQ0csSUFBSixDQUFTYyxNQUFULEtBQW9CLElBQXhCLEVBQThCO0FBQzVCaEIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFENEIsQ0FHNUI7QUFDRCxpQkFKRCxNQUlPO0FBQ0xELHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixlQUFqQixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNEOztBQW5CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5SOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkJHRCxJQTNCSCxDQTJCUTtBQUFBLGFBQU1tQixnREFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxLQUE2QmQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBbkM7QUFBQSxLQTNCUixFQTJCdUU7QUEzQnZFLGNBNEJTLFVBQUNJLENBQUQsRUFBTztBQUNaO0FBQ0E7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlEsQ0FBeEI7QUFDRCxLQWhDSDtBQWlDRCxHQWxDRCxDQU5pRCxDQXlDakQ7QUFDRCxDQTFDTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbl90YWJsZS5qcy5iNGYwNGQzNjYyYTUzYjZlYThhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgUmVzdENsaWVudCBmcm9tICcuLy4uL1Jlc3RDbGllbnQvUmVzdENsaWVudCc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uLy4uL2NvbmZpZy9Db25uZWN0aW9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGNvbnN0IHNlbmRPdHBfYWN0aW9uID0gKHBhcmFtcykgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIFJlc3RDbGllbnQuZ2V0Q2FsbChDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvbG9naW4vcGhvbmUvJHtwYXJhbXN9YClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgcmVzJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9vdHBfdmVyaWZ5JyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgbW9iaWxlOiBwYXJhbXMgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZVRvT3RwVmVyaWZpY2F0aW9uKHBhcmFtcywgc2NyZWVubmFtZV9yZWRpcmVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzY2FucXJfYWN0aW9uID0gKGNvZGUpID0+IHtcclxuICBjb25zb2xlLmxvZyhuYW1lLCAndGhpcyBpcyBuYW1lJyk7XHJcbiAgbGV0IHBhcmFtc0RhdGEgPSB7XHJcbiAgICBxcl9jb2RlOiBjb2RlLFxyXG4gIH07XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5yZXN0Q2FsbChcclxuICAgICAgQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL3RhYmxlL2AsXHJcbiAgICAgICcvam9pbicsXHJcbiAgICAgIHBhcmFtc0RhdGEsXHJcbiAgICAgICdjdXN0b21lcl9pZCdcclxuICAgIClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcywgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyByZXMgKysrKysrKysrKycpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMgaSBhbSBoZXJlJyk7XHJcblxyXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZVRvT3RwVmVyaWZpY2F0aW9uKHBhcmFtcywgc2NyZWVubmFtZV9yZWRpcmVjdCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09ICdvY2N1cGllZCcpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdpIGFtIGhlcnJlJyk7XHJcbiAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9qb2luX3RhYmxlJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgcXJfY29kZTogY29kZSB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKSAmJiBSb3V0ZXIucHVzaCgnL3FyX3NjYW5uZXInKSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBqb2ludGFibGVfYWN0aW9uID0gKGNvZGUsIHFyX2NvZGUpID0+IHtcclxuICBjb25zb2xlLmxvZyhuYW1lLCAndGhpcyBpcyBuYW1lJyk7XHJcbiAgbGV0IHBhcmFtc0RhdGEgPSB7XHJcbiAgICB0YWJsZV9qb2luaW5nX2NvZGU6IGNvZGUsXHJcbiAgICBxcl9jb2RlOiBxcl9jb2RlLFxyXG4gIH07XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5yZXN0Q2FsbChcclxuICAgICAgQ29ubmVjdGlvbi5nZXRCYXNlVXJsKCkgKyBgL3RhYmxlL2AsXHJcbiAgICAgICcvam9pbl93aXRoX2NvZGUnLFxyXG4gICAgICBwYXJhbXNEYXRhLFxyXG4gICAgICAnY3VzdG9tZXJfaWQnXHJcbiAgICApXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgcmVzICsrKysrKysrKysnKTtcclxuICAgICAgICAvLyBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzIGkgYW0gaGVyZScpO1xyXG5cclxuICAgICAgICAgIC8vICAgbmF2aWdhdGVUb090cFZlcmlmaWNhdGlvbihwYXJhbXMsIHNjcmVlbm5hbWVfcmVkaXJlY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIGVycm9yJyk7XHJcbiAgICAgICAgICAvLyAgICAgICBEaWFsb2cocmVzLm1lc3NhZ2UsIFtcclxuICAgICAgICAgIC8vICAgICAgICAgeyB0ZXh0OiAnT0snLCBvblByZXNzOiAoKSA9PiBjb25zb2xlLmxvZygnT0sgUHJlc3NlZCcpIH0sXHJcbiAgICAgICAgICAvLyAgICAgICBdKTtcclxuICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG4gICAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcblxyXG4gICAgICAgICAgLy8gICAgIGlmIChjYikge1xyXG4gICAgICAgICAgLy8gICAgICAgY2IocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGNvb2tpZS5nZXQoJ2N1c3RvbWVyX2lkJykgJiYgUm91dGVyLnB1c2goJy9xcl9zY2FubmVyJykpIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAvLyAgIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Jyb3InLCBlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuICAvLyAgICApXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=