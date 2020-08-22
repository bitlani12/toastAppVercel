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
  var loading = _this.props.loading.loading;

  if (!loading) {
    return null;
  }

  return __jsx("div", {
    className: "loading_container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "innerview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "loader-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwibG9hZGluZyIsInByb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2FkaW5nUmVkdWNlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBLE1BQ2JDLE9BRGEsR0FDRCxLQUFJLENBQUNDLEtBQUwsQ0FBV0QsT0FEVixDQUNiQSxPQURhOztBQUVuQixNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG8zREFKRixDQURGO0FBa0ZELENBdkZEOztLQUFNRCxNOztBQXdGTixJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDSCxXQUFPLEVBQUVHLEtBQUssQ0FBQ0M7QUFEbUIsR0FBWjtBQUFBLENBQXhCOztBQUdlQywwSEFBTyxDQUFDSCxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JILE1BQS9CLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjA1NmFkOGNmZTNlN2E5NzdhMjQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgbGV0IHsgbG9hZGluZyB9ID0gdGhpcy5wcm9wcy5sb2FkaW5nO1xyXG4gIGlmICghbG9hZGluZykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdfY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJ2aWV3XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItM1wiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLmxvYWRpbmdfY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojM2E5YmRjNzA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbm5lcnZpZXd7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbi5sb2FkZXItMzpiZWZvcmUsICNsb2FkZXItMzphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBhbmltYXRpb246IHNxdWFyZW1vdmUgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkZXItMzphZnRlcntcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcXVhcmVtb3Zle1xyXG4gICAgMCUsIDEwMCV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMjUle1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA1MCV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw4MHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw4MHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCw4MHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA3NSV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgbG9hZGluZzogc3RhdGUubG9hZGluZ1JlZHVjZXIsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoTG9hZGVyKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9