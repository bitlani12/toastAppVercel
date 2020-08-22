webpackHotUpdate("static\\development\\pages\\feedback.js",{

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);



var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
      token = _nextCookie.token;

  console.log('i am in auth');

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return token;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
  }

  return token;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXV0aC5qcyJdLCJuYW1lcyI6WyJhdXRoIiwiY3R4IiwibmV4dENvb2tpZSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInJlcSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQVM7QUFBQSxvQkFDVEMsbURBQVUsQ0FBQ0QsR0FBRCxDQUREO0FBQUEsTUFDbkJFLEtBRG1CLGVBQ25CQSxLQURtQjs7QUFFM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7O0FBQ0EsTUFBSUosR0FBRyxDQUFDSyxHQUFKLElBQVcsQ0FBQ0gsS0FBaEIsRUFBdUI7QUFDckJGLE9BQUcsQ0FBQ00sR0FBSixDQUFRQyxTQUFSLENBQWtCLEdBQWxCLEVBQXVCO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBQXZCO0FBQ0FSLE9BQUcsQ0FBQ00sR0FBSixDQUFRRyxHQUFSO0FBQ0EsV0FBT1AsS0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1ZRLHNEQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7O0FBRUQsU0FBT1QsS0FBUDtBQUNELENBZE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZlZWRiYWNrLmpzLmFkNWIyODM5YTMwMjcwNjA4YWI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoID0gKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgdG9rZW4gfSA9IG5leHRDb29raWUoY3R4KTtcclxuICBjb25zb2xlLmxvZygnaSBhbSBpbiBhdXRoJyk7XHJcbiAgaWYgKGN0eC5yZXEgJiYgIXRva2VuKSB7XHJcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246ICcvbG9naW4nIH0pO1xyXG4gICAgY3R4LnJlcy5lbmQoKTtcclxuICAgIHJldHVybiB0b2tlbjtcclxuICB9XHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbjtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==