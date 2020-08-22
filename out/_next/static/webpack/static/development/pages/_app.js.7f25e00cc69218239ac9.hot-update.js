webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducer/loadingReducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducer/loadingReducer.js ***!
  \*********************************************/
/*! exports provided: loadingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingReducer", function() { return loadingReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReducer */ "./src/redux/reducer/createReducer.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  isLoginLoading: false,
  loading: false
};
var loadingReducer = Object(_createReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _types__WEBPACK_IMPORTED_MODULE_1__["LOADING"], function (state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loading: action.payload
  });
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlci9sb2FkaW5nUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc0xvZ2luTG9hZGluZyIsImxvYWRpbmciLCJsb2FkaW5nUmVkdWNlciIsImNyZWF0ZVJlZHVjZXIiLCJ0eXBlcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsZ0JBQWMsRUFBRSxLQURHO0FBRW5CQyxTQUFPLEVBQUU7QUFGVSxDQUFyQjtBQUlPLElBQU1DLGNBQWMsR0FBR0MsOERBQWEsQ0FBQ0osWUFBRCxnR0FDeENLLDhDQUR3QyxZQUN6QkMsS0FEeUIsRUFDbEJDLE1BRGtCLEVBQ1Y7QUFDN0IseUNBQVlELEtBQVo7QUFBbUJKLFdBQU8sRUFBRUssTUFBTSxDQUFDQztBQUFuQztBQUNELENBSHdDLEVBQXBDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjdmMjVlMDBjYzY5MjE4MjM5YWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tICcuL2NyZWF0ZVJlZHVjZXInO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9hZGluZ1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xyXG4gIFt0eXBlcy5MT0FESU5HXShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogYWN0aW9uLnBheWxvYWQgfTtcclxuICB9LFxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==