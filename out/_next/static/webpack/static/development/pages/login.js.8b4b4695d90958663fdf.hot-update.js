webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/redux/actions/app/index.js":
/*!****************************************!*\
  !*** ./src/redux/actions/app/index.js ***!
  \****************************************/
/*! exports provided: handleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLoader", function() { return handleLoader; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types.js */ "./src/redux/types.js");

var handleLoader = function handleLoader(loading) {
  console.log(loading, 'this is loading ++++++');
  return {
    type: _types_js__WEBPACK_IMPORTED_MODULE_0__["LOADING"],
    payload: loading
  };
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hcHAvaW5kZXguanMiXSwibmFtZXMiOlsiaGFuZGxlTG9hZGVyIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQWE7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaLEVBQXFCLHdCQUFyQjtBQUNBLFNBQU87QUFDTEcsUUFBSSxFQUFFQyxpREFERDtBQUVMQyxXQUFPLEVBQUVMO0FBRkosR0FBUDtBQUlELENBTk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjhiNGI0Njk1ZDkwOTU4NjYzZmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi8uLi90eXBlcy5qcyc7XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2FkZXIgPSAobG9hZGluZykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsICd0aGlzIGlzIGxvYWRpbmcgKysrKysrJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkxPQURJTkcsXHJcbiAgICBwYXlsb2FkOiBsb2FkaW5nLFxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=