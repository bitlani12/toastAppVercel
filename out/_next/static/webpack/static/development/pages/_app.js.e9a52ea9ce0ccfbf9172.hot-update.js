webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/page-components/Loader/Loader.js":
/*!**********************************************!*\
  !*** ./src/page-components/Loader/Loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\Loader\\Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Loader = function Loader() {
  return __jsx("div", {
    className: "loading_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "innerview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, "hii", __jsx("div", {
    className: "loader-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\n        .loading_container{\n                background-color:transparent;\n          \n              position: absolute;\n              z-index: 9999;\n              top: 0;\n              left: 0;\n              flex: 1;\n              justify-content: center;\n              align-items: center;\n              height: 100%;\n              width: 100%;\n              align-items: center;\n    text-align: center;\n    display:flex;\n        }\n        .innerview{\n            flex: 1; justify-content: center; align-items: center;\n        }\n  \n\n\n\n\n        \n.loader-3:before, #loader-3:after{\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 0;\n    left: calc(50% - 10px);\n    background-color: #3498db;\n    animation: squaremove 1s ease-in-out infinite;\n  }\n  \n  .loader-3:after{\n    bottom: 0;\n    animation-delay: 0.5s;\n  }\n  \n  @keyframes squaremove{\n    0%, 100%{\n      -webkit-transform: translate(0,0) rotate(0);\n      -ms-transform: translate(0,0) rotate(0);\n      -o-transform: translate(0,0) rotate(0);\n      transform: translate(0,0) rotate(0);\n    }\n  \n    25%{\n      -webkit-transform: translate(40px,40px) rotate(45deg);\n      -ms-transform: translate(40px,40px) rotate(45deg);\n      -o-transform: translate(40px,40px) rotate(45deg);\n      transform: translate(40px,40px) rotate(45deg);\n    }\n  \n    50%{\n      -webkit-transform: translate(0px,80px) rotate(0deg);\n      -ms-transform: translate(0px,80px) rotate(0deg);\n      -o-transform: translate(0px,80px) rotate(0deg);\n      transform: translate(0px,80px) rotate(0deg);\n    }\n  \n    75%{\n      -webkit-transform: translate(-40px,40px) rotate(45deg);\n      -ms-transform: translate(-40px,40px) rotate(45deg);\n      -o-transform: translate(-40px,40px) rotate(45deg);\n      transform: translate(-40px,40px) rotate(45deg);\n    }\n  }\n  \n  "));
};

_c = Loader;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiXSwibmFtZXMiOlsiTG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzNEQUxGLENBREY7QUFtRkQsQ0FwRkQ7O0tBQU1BLE07QUFxRlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmU5YTUyZWE5Y2UwY2NmYmY5MTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ19jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcnZpZXdcIj5cclxuICAgICAgICBoaWlcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci0zXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge2BcclxuICAgICAgICAubG9hZGluZ19jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5uZXJ2aWV3e1xyXG4gICAgICAgICAgICBmbGV4OiAxOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4ubG9hZGVyLTM6YmVmb3JlLCAjbG9hZGVyLTM6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIGFuaW1hdGlvbjogc3F1YXJlbW92ZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlci0zOmFmdGVye1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNxdWFyZW1vdmV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAyNSV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDUwJXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsODBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDc1JXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==