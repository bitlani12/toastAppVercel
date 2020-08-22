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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\Loader\\Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Loader = function Loader() {
  return __jsx("div", {
    className: "loading_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "innerview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
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
  }, "\n        .loading_container{\n                background-color:#3a9bdc70;\n          \n              position: absolute;\n              z-index: 9999;\n              top: 0;\n              left: 0;\n              flex: 1;\n              justify-content: center;\n              align-items: center;\n              height: 100%;\n              width: 100%;\n              align-items: center;\n    text-align: center;\n    display:flex;\n        }\n        .innerview{\n            flex: 1; justify-content: center; align-items: center;\n        }\n  \n\n\n\n\n        \n.loader-3:before, #loader-3:after{\n    content: \"\";\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    top: 40%;\n    left: calc(50% - 10px);\n    background-color: #3498db;\n    animation: squaremove 1s ease-in-out infinite;\n  }\n  \n  .loader-3:after{\n    bottom: 0;\n    animation-delay: 0.5s;\n  }\n  \n  @keyframes squaremove{\n    0%, 100%{\n      -webkit-transform: translate(0,0) rotate(0);\n      -ms-transform: translate(0,0) rotate(0);\n      -o-transform: translate(0,0) rotate(0);\n      transform: translate(0,0) rotate(0);\n    }\n  \n    25%{\n      -webkit-transform: translate(40px,40px) rotate(45deg);\n      -ms-transform: translate(40px,40px) rotate(45deg);\n      -o-transform: translate(40px,40px) rotate(45deg);\n      transform: translate(40px,40px) rotate(45deg);\n    }\n  \n    50%{\n      -webkit-transform: translate(0px,80px) rotate(0deg);\n      -ms-transform: translate(0px,80px) rotate(0deg);\n      -o-transform: translate(0px,80px) rotate(0deg);\n      transform: translate(0px,80px) rotate(0deg);\n    }\n  \n    75%{\n      -webkit-transform: translate(-40px,40px) rotate(45deg);\n      -ms-transform: translate(-40px,40px) rotate(45deg);\n      -o-transform: translate(-40px,40px) rotate(45deg);\n      transform: translate(-40px,40px) rotate(45deg);\n    }\n  }\n  \n  "));
};

_c = Loader;

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.loadingReducer
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(Loader)); // export default ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwibG9hZGluZ1JlZHVjZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzNEQUpGLENBREY7QUFrRkQsQ0FuRkQ7O0tBQU1BLE07O0FBb0ZOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENDLFdBQU8sRUFBRUQsS0FBSyxDQUFDRTtBQURtQixHQUFaO0FBQUEsQ0FBeEI7O0FBR2VDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0IsSUFBbEIsQ0FBUCxDQUErQkQsTUFBL0IsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZWRmZjExNGQ3ZWY4YjUzZDczZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nX2NvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVydmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLTNcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZT5cclxuICAgICAgICB7YFxyXG4gICAgICAgIC5sb2FkaW5nX2NvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzNhOWJkYzcwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5uZXJ2aWV3e1xyXG4gICAgICAgICAgICBmbGV4OiAxOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4ubG9hZGVyLTM6YmVmb3JlLCAjbG9hZGVyLTM6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgYW5pbWF0aW9uOiBzcXVhcmVtb3ZlIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAubG9hZGVyLTM6YWZ0ZXJ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3F1YXJlbW92ZXtcclxuICAgIDAlLCAxMDAle1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDApO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgIH1cclxuICBcclxuICAgIDI1JXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNTAle1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw4MHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsODBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsODBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsODBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgNzUle1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGxvYWRpbmc6IHN0YXRlLmxvYWRpbmdSZWR1Y2VyLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKExvYWRlcik7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==