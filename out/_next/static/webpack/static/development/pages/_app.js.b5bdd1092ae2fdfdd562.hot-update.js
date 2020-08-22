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
    isLoginLoading: action.payload
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

/***/ }),

/***/ "./src/redux/rootReducer.js":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducer_authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer/authReducer */ "./src/redux/reducer/authReducer.js");
/* harmony import */ var _reducer_orderReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer/orderReducer */ "./src/redux/reducer/orderReducer.js");
/* harmony import */ var _reducer_loadingReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer/loadingReducer */ "./src/redux/reducer/loadingReducer.js");




 // const config = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['loadingReducer'],
//   debug: true, //to get useful logging
// };

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  loginReducer: _reducer_authReducer__WEBPACK_IMPORTED_MODULE_2__["loginReducer"],
  orderReducer: _reducer_orderReducer__WEBPACK_IMPORTED_MODULE_3__["orderReducer"],
  loadingReducer: _reducer_loadingReducer__WEBPACK_IMPORTED_MODULE_4__["loadingReducer"]
});

var configureStore = function configureStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(rootReducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

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

/***/ }),

/***/ "./src/redux/types.js":
/*!****************************!*\
  !*** ./src/redux/types.js ***!
  \****************************/
/*! exports provided: LOGIN_REQUEST, MENU_DATA, LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_DATA", function() { return MENU_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
var LOGIN_REQUEST = 'LOGIN_REQUEST';
var MENU_DATA = 'MENU_DATA';
var LOADING = 'LOADING';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlci9sb2FkaW5nUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3R5cGVzLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzTG9naW5Mb2FkaW5nIiwibG9hZGluZyIsImxvYWRpbmdSZWR1Y2VyIiwiY3JlYXRlUmVkdWNlciIsInR5cGVzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJsb2dpblJlZHVjZXIiLCJvcmRlclJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJMT0dJTl9SRVFVRVNUIiwiTUVOVV9EQVRBIiwiTE9BRElORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsZ0JBQWMsRUFBRSxLQURHO0FBRW5CQyxTQUFPLEVBQUU7QUFGVSxDQUFyQjtBQUlPLElBQU1DLGNBQWMsR0FBR0MsOERBQWEsQ0FBQ0osWUFBRCxnR0FDeENLLDhDQUR3QyxZQUN6QkMsS0FEeUIsRUFDbEJDLE1BRGtCLEVBQ1Y7QUFDN0IseUNBQVlELEtBQVo7QUFBbUJMLGtCQUFjLEVBQUVNLE1BQU0sQ0FBQ0M7QUFBMUM7QUFDRCxDQUh3QyxFQUFwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxjQUFZLEVBQUVBLGlFQURvQjtBQUVsQ0MsY0FBWSxFQUFFQSxrRUFGb0I7QUFHbENULGdCQUFjLEVBQUVBLHNFQUFjQTtBQUhJLENBQUQsQ0FBbkM7O0FBTUEsSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFNBQU9DLHlEQUFXLENBQUNMLFdBQUQsRUFBY00sNkRBQWUsQ0FBQ0MsbURBQUQsQ0FBN0IsQ0FBbEI7QUFDRCxDQUZEOztBQUllSCw2RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUksYUFBYSxHQUFHLGVBQXRCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmI1YmRkMTA5MmFlMmZkZmRkNTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tICcuL2NyZWF0ZVJlZHVjZXInO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNMb2dpbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRpbmc6IGZhbHNlLFxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9hZGluZ1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xyXG4gIFt0eXBlcy5MT0FESU5HXShzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2dpbkxvYWRpbmc6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IGxvZ2luUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9hdXRoUmVkdWNlcic7XHJcbmltcG9ydCB7IG9yZGVyUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9vcmRlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBsb2FkaW5nUmVkdWNlciB9IGZyb20gJy4vcmVkdWNlci9sb2FkaW5nUmVkdWNlcic7XHJcbi8vIGNvbnN0IGNvbmZpZyA9IHtcclxuLy8gICBrZXk6ICdyb290JyxcclxuLy8gICBzdG9yYWdlOiBBc3luY1N0b3JhZ2UsXHJcbi8vICAgYmxhY2tsaXN0OiBbJ2xvYWRpbmdSZWR1Y2VyJ10sXHJcbi8vICAgZGVidWc6IHRydWUsIC8vdG8gZ2V0IHVzZWZ1bCBsb2dnaW5nXHJcbi8vIH07XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgbG9naW5SZWR1Y2VyOiBsb2dpblJlZHVjZXIsXHJcbiAgb3JkZXJSZWR1Y2VyOiBvcmRlclJlZHVjZXIsXHJcbiAgbG9hZGluZ1JlZHVjZXI6IGxvYWRpbmdSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcclxuIiwiZXhwb3J0IGNvbnN0IExPR0lOX1JFUVVFU1QgPSAnTE9HSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNRU5VX0RBVEEgPSAnTUVOVV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=