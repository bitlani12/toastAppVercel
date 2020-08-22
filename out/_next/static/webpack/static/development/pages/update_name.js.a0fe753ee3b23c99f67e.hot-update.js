webpackHotUpdate("static\\development\\pages\\update_name.js",{

/***/ "./src/ui/global.js":
/*!**************************!*\
  !*** ./src/ui/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  :root {\n    --content-padding: 50px;\n    \n    --color-main-background: #fff;\n    --color-text-main: #000;\n    --color-text-sub: #4c505b;\n    --color-box-background: #efefef;\n\n    --color-price: #d79b59;\n    --color-error: #EF4836;\n  }\n\n  /* Uncomment this to enable dark mode */\n  /* @media (prefers-color-scheme: dark) {\n    :root {\n      --color-main-background: #020210;\n      --color-text-main: #fff;\n      --color-text-sub: #ddd;\n      --color-box-background: #555;\n    }\n  } */\n  \n  html {\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n    font: 16px/1 roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    background: var(--color-main-background);\n    color: var(--color-text-sub);\n    font-family: 'Manrope', sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Manrope', sans-serif;\n    line-height:1.3;\n  }\ndiv{\n  font-family: 'Manrope', sans-serif;\n  font-weight:500;\n}\n  h1,\n  h2,\n  h3,\n  h4,\n  p,\n  blockquote,\n  figure,\n  ol,\n  ul {\n    padding: 0;\n    font-family: 'Manrope', sans-serif;\n  }\n  main {\n    display: block;\n  }\n  h1,\n  h2,\n  h3,\n  h4 {\n    font-size: inherit;\n  }\n  div{\n    font-size:14px;\n  }\n  strong {\n    font-weight: bold;\n  }\n  a,\n  button {\n    color: inherit;\n  }\n  a {\n    text-decoration: none;\n\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  p > a {\n    border-bottom: 2px solid black;\n    font-weight: 600;\n\n    &:hover {\n      text-decoration: none;\n      border-bottom-color: transparent;\n    }\n  }\n\n  button {\n    overflow: visible;\n    border: 0;\n    font: inherit;\n    -webkit-font-smoothing: inherit;\n    letter-spacing: inherit;\n    background: none;\n    cursor: pointer;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  ::-webkit-input-placeholder { /* Edge */\n    color:#999999;\n    font-weight:500;\n  }\n  ::placeholder {\n    color: #999999;\n    font-size:12px;\n    opacity:0.5;\n  }\n  img {\n    max-width: 100%;\n    height: auto;\n    border: 0;\n  }\n  .p10{\n    padding:10px;\n    width:100%;\n  }\n  .pt10{\n    padding-top:10px;\n  }\n  .pt20{\n    padding-top:20px;\n  }\n  .mr10{\n    margin-right:10px;\n  }\n  .ml10{\n    margin-left:10px;\n  }\n  .m10{\n    margin:10px;\n  }\n  .secondText{\n    color:#999999;\n  }\n  .fo12{\n    font-size:12px;\n  }\n  .fo16{\n    font-size:16px;\n  }\n  .fo13{\n    font-size:13px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZUEsMElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVwZGF0ZV9uYW1lLmpzLmEwZmU3NTNlZTNiMjNjOTlmNjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIDpyb290IHtcclxuICAgIC0tY29udGVudC1wYWRkaW5nOiA1MHB4O1xyXG4gICAgXHJcbiAgICAtLWNvbG9yLW1haW4tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC0tY29sb3ItdGV4dC1tYWluOiAjMDAwO1xyXG4gICAgLS1jb2xvci10ZXh0LXN1YjogIzRjNTA1YjtcclxuICAgIC0tY29sb3ItYm94LWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblxyXG4gICAgLS1jb2xvci1wcmljZTogI2Q3OWI1OTtcclxuICAgIC0tY29sb3ItZXJyb3I6ICNFRjQ4MzY7XHJcbiAgfVxyXG5cclxuICAvKiBVbmNvbW1lbnQgdGhpcyB0byBlbmFibGUgZGFyayBtb2RlICovXHJcbiAgLyogQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAtLWNvbG9yLW1haW4tYmFja2dyb3VuZDogIzAyMDIxMDtcclxuICAgICAgLS1jb2xvci10ZXh0LW1haW46ICNmZmY7XHJcbiAgICAgIC0tY29sb3ItdGV4dC1zdWI6ICNkZGQ7XHJcbiAgICAgIC0tY29sb3ItYm94LWJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICB9XHJcbiAgfSAqL1xyXG4gIFxyXG4gIGh0bWwge1xyXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQ6IDE2cHgvMSByb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc3ViKTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4zO1xyXG4gIH1cclxuZGl2e1xyXG4gIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgcCxcclxuICBibG9ja3F1b3RlLFxyXG4gIGZpZ3VyZSxcclxuICBvbCxcclxuICB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIH1cclxuICBkaXZ7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICB9XHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBhLFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCA+IGEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICA6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICB9XHJcbiAgOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgb3BhY2l0eTowLjU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIC5wMTB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAucHQxMHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgfVxyXG4gIC5wdDIwe1xyXG4gICAgcGFkZGluZy10b3A6MjBweDtcclxuICB9XHJcbiAgLm1yMTB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgLm1sMTB7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIH1cclxuICAubTEwe1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgfVxyXG4gIC5zZWNvbmRUZXh0e1xyXG4gICAgY29sb3I6Izk5OTk5OTtcclxuICB9XHJcbiAgLmZvMTJ7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICB9XHJcbiAgLmZvMTZ7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICB9XHJcbiAgLmZvMTN7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxuICB9XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=