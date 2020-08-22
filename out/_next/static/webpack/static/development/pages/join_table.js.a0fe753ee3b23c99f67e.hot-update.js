webpackHotUpdate("static\\development\\pages\\join_table.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdWkvZ2xvYmFsLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZUEsMElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGpvaW5fdGFibGUuanMuYTBmZTc1M2VlM2IyM2M5OWY2N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgOnJvb3Qge1xyXG4gICAgLS1jb250ZW50LXBhZGRpbmc6IDUwcHg7XHJcbiAgICBcclxuICAgIC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLS1jb2xvci10ZXh0LW1haW46ICMwMDA7XHJcbiAgICAtLWNvbG9yLXRleHQtc3ViOiAjNGM1MDViO1xyXG4gICAgLS1jb2xvci1ib3gtYmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHJcbiAgICAtLWNvbG9yLXByaWNlOiAjZDc5YjU5O1xyXG4gICAgLS1jb2xvci1lcnJvcjogI0VGNDgzNjtcclxuICB9XHJcblxyXG4gIC8qIFVuY29tbWVudCB0aGlzIHRvIGVuYWJsZSBkYXJrIG1vZGUgKi9cclxuICAvKiBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICA6cm9vdCB7XHJcbiAgICAgIC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kOiAjMDIwMjEwO1xyXG4gICAgICAtLWNvbG9yLXRleHQtbWFpbjogI2ZmZjtcclxuICAgICAgLS1jb2xvci10ZXh0LXN1YjogI2RkZDtcclxuICAgICAgLS1jb2xvci1ib3gtYmFja2dyb3VuZDogIzU1NTtcclxuICAgIH1cclxuICB9ICovXHJcbiAgXHJcbiAgaHRtbCB7XHJcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udDogMTZweC8xIHJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zdWIpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZScsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDoxLjM7XHJcbiAgfVxyXG5kaXZ7XHJcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDo1MDA7XHJcbn1cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCxcclxuICBwLFxyXG4gIGJsb2NrcXVvdGUsXHJcbiAgZmlndXJlLFxyXG4gIG9sLFxyXG4gIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ01hbnJvcGUnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBtYWluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBoMSxcclxuICBoMixcclxuICBoMyxcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIGRpdntcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gIH1cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGEsXHJcbiAgYnV0dG9uIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwID4gYSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udDogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIDo6LW1vei1mb2N1cy1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXHJcbiAgICBjb2xvcjojOTk5OTk5O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIH1cclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBvcGFjaXR5OjAuNTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbiAgLnAxMHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIC5wdDEwe1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICB9XHJcbiAgLnB0MjB7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gIH1cclxuICAubXIxMHtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICAubWwxMHtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgfVxyXG4gIC5tMTB7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICB9XHJcbiAgLnNlY29uZFRleHR7XHJcbiAgICBjb2xvcjojOTk5OTk5O1xyXG4gIH1cclxuICAuZm8xMntcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gIH1cclxuICAuZm8xNntcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gIH1cclxuICAuZm8xM3tcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==