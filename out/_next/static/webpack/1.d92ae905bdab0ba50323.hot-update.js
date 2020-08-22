webpackHotUpdate(1,{

/***/ "./src/redux/actions/orderAction.js":
/*!******************************************!*\
  !*** ./src/redux/actions/orderAction.js ***!
  \******************************************/
/*! exports provided: sendOtp_action, scanqr_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOtp_action", function() { return sendOtp_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanqr_action", function() { return scanqr_action; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9vcmRlckFjdGlvbi5qcyJdLCJuYW1lcyI6WyJzZW5kT3RwX2FjdGlvbiIsInBhcmFtcyIsImRpc3BhdGNoIiwiUmVzdENsaWVudCIsImdldENhbGwiLCJDb25uZWN0aW9uIiwiZ2V0QmFzZVVybCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInR5cGUiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1vYmlsZSIsImUiLCJzY2FucXJfYWN0aW9uIiwiY29kZSIsIm5hbWUiLCJwYXJhbXNEYXRhIiwicXJfY29kZSIsInJlc3RDYWxsIiwic3RhdHVzIiwiY29va2llIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBWTtBQUN4QyxTQUFPLFVBQUNDLFFBQUQsRUFBYztBQUNuQkMsa0VBQVUsQ0FBQ0MsT0FBWCxDQUFtQkMsMERBQVUsQ0FBQ0MsVUFBWCw0QkFBMENMLE1BQTFDLENBQW5CLEVBQ0dNLElBREg7QUFBQSxrTUFDUSxpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0pDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixhQUFqQixFQURJLENBRUo7O0FBQ0Esb0JBQUlBLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxJQUFULEtBQWtCLFNBQXRCLEVBQWlDO0FBQy9CQyxvRUFBTSxDQUFDQyxJQUFQLENBQVk7QUFDVkMsNEJBQVEsRUFBRSxhQURBO0FBRVZDLHlCQUFLLEVBQUU7QUFBRUMsNEJBQU0sRUFBRWhCO0FBQVY7QUFGRyxtQkFBWixFQUQrQixDQUsvQjtBQUNELGlCQU5ELE1BTU87QUFDTFEseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLGVBQWpCLEVBREssQ0FFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0Q7O0FBckJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0F1Qks7QUF2QkwsY0F3QlMsVUFBQ1UsQ0FBRCxFQUFPO0FBQ1o7QUFDQTtBQUNBVCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCUSxDQUF4QjtBQUNELEtBNUJIO0FBNkJELEdBOUJELENBRHdDLENBZ0N4QztBQUNELENBakNNO0FBbUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3JDWCxTQUFPLENBQUNDLEdBQVIsQ0FBWVcsSUFBWixFQUFrQixjQUFsQjtBQUNBLE1BQUlDLFVBQVUsR0FBRztBQUNmQyxXQUFPLEVBQUVIO0FBRE0sR0FBakI7QUFHQSxTQUFPLFVBQUNsQixRQUFELEVBQWM7QUFDbkJDLGtFQUFVLENBQUNxQixRQUFYLENBQ0VuQiwwREFBVSxDQUFDQyxVQUFYLGNBREYsRUFFRSxPQUZGLEVBR0VnQixVQUhGLEVBSUUsYUFKRixFQU1HZixJQU5IO0FBQUEsbU1BTVEsa0JBQU9DLEdBQVAsRUFBWWlCLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKaEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEVBQWlCLHdCQUFqQixFQURJLENBRUo7O0FBQ0Esb0JBQUlBLEdBQUcsQ0FBQ0csSUFBSixDQUFTYyxNQUFULEtBQW9CLElBQXhCLEVBQThCO0FBQzVCaEIseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFENEIsQ0FHNUI7QUFDRCxpQkFKRCxNQUlPO0FBQ0xELHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixFQUFpQixlQUFqQixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNEOztBQW5CRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQU5SOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkJHRCxJQTNCSCxDQTJCUTtBQUFBLGFBQU1tQixnREFBTSxDQUFDQyxHQUFQLENBQVcsYUFBWCxLQUE2QmQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosQ0FBbkM7QUFBQSxLQTNCUixFQTJCdUU7QUEzQnZFLGNBNEJTLFVBQUNJLENBQUQsRUFBTztBQUNaO0FBQ0E7QUFDQVQsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlEsQ0FBeEI7QUFDRCxLQWhDSDtBQWlDRCxHQWxDRCxDQUxxQyxDQXdDckM7QUFDRCxDQXpDTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmQ5MmFlOTA1YmRhYjBiYTUwMzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCBSZXN0Q2xpZW50IGZyb20gJy4vLi4vUmVzdENsaWVudC9SZXN0Q2xpZW50JztcclxuaW1wb3J0IENvbm5lY3Rpb24gZnJvbSAnLi4vLi4vY29uZmlnL0Nvbm5lY3Rpb24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5leHBvcnQgY29uc3Qgc2VuZE90cF9hY3Rpb24gPSAocGFyYW1zKSA9PiB7XHJcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgUmVzdENsaWVudC5nZXRDYWxsKENvbm5lY3Rpb24uZ2V0QmFzZVVybCgpICsgYC9sb2dpbi9waG9uZS8ke3BhcmFtc31gKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyByZXMnKTtcclxuICAgICAgICAvLyBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICBpZiAocmVzLmRhdGEudHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL290cF92ZXJpZnknLFxyXG4gICAgICAgICAgICBxdWVyeTogeyBtb2JpbGU6IHBhcmFtcyB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjYW5xcl9hY3Rpb24gPSAoY29kZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5hbWUsICd0aGlzIGlzIG5hbWUnKTtcclxuICBsZXQgcGFyYW1zRGF0YSA9IHtcclxuICAgIHFyX2NvZGU6IGNvZGUsXHJcbiAgfTtcclxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBSZXN0Q2xpZW50LnJlc3RDYWxsKFxyXG4gICAgICBDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvdGFibGUvYCxcclxuICAgICAgJy9qb2luJyxcclxuICAgICAgcGFyYW1zRGF0YSxcclxuICAgICAgJ2N1c3RvbWVyX2lkJ1xyXG4gICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzLCBzdGF0dXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMsICd0aGlzIGlzIHJlcyArKysrKysrKysrJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3llcyBpIGFtIGhlcmUnKTtcclxuXHJcbiAgICAgICAgICAvLyAgIG5hdmlnYXRlVG9PdHBWZXJpZmljYXRpb24ocGFyYW1zLCBzY3JlZW5uYW1lX3JlZGlyZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLCAndGhpcyBpcyBlcnJvcicpO1xyXG4gICAgICAgICAgLy8gICAgICAgRGlhbG9nKHJlcy5tZXNzYWdlLCBbXHJcbiAgICAgICAgICAvLyAgICAgICAgIHsgdGV4dDogJ09LJywgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ09LIFByZXNzZWQnKSB9LFxyXG4gICAgICAgICAgLy8gICAgICAgXSk7XHJcbiAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZXNzc3Nzc3Nzc3MnLCByZXMpO1xyXG5cclxuICAgICAgICAgIC8vICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgIC8vICAgICAgIGNiKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBjb29raWUuZ2V0KCdjdXN0b21lcl9pZCcpICYmIFJvdXRlci5wdXNoKCcvcXJfc2Nhbm5lcicpKSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgLy8gICBkaXNwYXRjaChoYW5kbGVMb2FkZXIoZmFsc2UpKTtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9ycm9yJywgZSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbiAgLy8gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9