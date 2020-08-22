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



var Loader = function Loader(props) {
  var loading = props.loading.loading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwicHJvcHMiLCJsb2FkaW5nIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJsb2FkaW5nUmVkdWNlciIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBQUssQ0FBQ0MsT0FEQSxDQUNsQkEsT0FEa0I7O0FBRXhCLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzNEQUpGLENBREY7QUFrRkQsQ0F2RkQ7O0tBQU1GLE07O0FBd0ZOLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENGLFdBQU8sRUFBRUUsS0FBSyxDQUFDQztBQURtQixHQUFaO0FBQUEsQ0FBeEI7O0FBR2VDLDBIQUFPLENBQUNILGVBQUQsRUFBa0IsSUFBbEIsQ0FBUCxDQUErQkgsTUFBL0IsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZTUwM2UyYTliMDg1ZTNhNjdlYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmNvbnN0IExvYWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGxldCB7IGxvYWRpbmcgfSA9IHByb3BzLmxvYWRpbmc7XHJcbiAgaWYgKCFsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ19jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcnZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci0zXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge2BcclxuICAgICAgICAubG9hZGluZ19jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYTliZGM3MDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlubmVydmlld3tcclxuICAgICAgICAgICAgZmxleDogMTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuLmxvYWRlci0zOmJlZm9yZSwgI2xvYWRlci0zOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgIGFuaW1hdGlvbjogc3F1YXJlbW92ZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRlci0zOmFmdGVye1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNxdWFyZW1vdmV7XHJcbiAgICAwJSwgMTAwJXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgcm90YXRlKDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIHJvdGF0ZSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKSByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAyNSV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSg0MHB4LDQwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDUwJXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsODBweCkgcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDgwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICBcclxuICAgIDc1JXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCw0MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsNDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nUmVkdWNlcixcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShMb2FkZXIpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=