webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducer/orderReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/orderReducer.js ***!
  \*******************************************/
/*! exports provided: orderReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderReducer", function() { return orderReducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createReducer */ "./src/redux/reducer/createReducer.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  menu_data: {}
};
var orderReducer = Object(_createReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(initialState, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _types__WEBPACK_IMPORTED_MODULE_1__["MENU_DATA"], function (state, action) {
  console.log(action.data, 'this is action data');
  return _objectSpread(_objectSpread({}, state), {}, {
    menu_data: action.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlci9vcmRlclJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWVudV9kYXRhIiwib3JkZXJSZWR1Y2VyIiwiY3JlYXRlUmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFO0FBRFEsQ0FBckI7QUFJTyxJQUFNQyxZQUFZLEdBQUdDLDhEQUFhLENBQUNILFlBQUQsZ0dBQ3RDSSxnREFEc0MsWUFDckJDLEtBRHFCLEVBQ2RDLE1BRGMsRUFDTjtBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQU0sQ0FBQ0csSUFBbkIsRUFBeUIscUJBQXpCO0FBQ0EseUNBQ0tKLEtBREw7QUFFRUosYUFBUyxFQUFFSyxNQUFNLENBQUNHO0FBRnBCO0FBSUQsQ0FQc0MsRUFBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuN2E2N2E2MWYwZWY0Y2Q1MWY3M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gJy4vY3JlYXRlUmVkdWNlcic7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtZW51X2RhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGVyUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgW3R5cGVzLk1FTlVfREFUQV0oc3RhdGUsIGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEsICd0aGlzIGlzIGFjdGlvbiBkYXRhJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgbWVudV9kYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH07XHJcbiAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=