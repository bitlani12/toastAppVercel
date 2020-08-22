webpackHotUpdate("static\\development\\pages\\join_table.js",{

/***/ "./src/pages/join_table.js":
/*!*********************************!*\
  !*** ./src/pages/join_table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\join_table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var JoinTable = function JoinTable() {
  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fo15",
    style: {
      fontWeight: 500,
      color: '#404040'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, "It looks like there's already someone on this table. To join, you need to ask the person for the 4 digit code."), __jsx("h3", {
    style: {
      fontSize: 18,
      color: '#656565'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(OtpInput, {
    onChange: function onChange(otp) {
      return _this.setState({
        otp: otp
      });
    },
    numInputs: 6,
    value: otp,
    separator: __jsx("span", {
      style: {
        marginRight: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 26
      }
    }),
    containerStyle: "containerstyle",
    inputStyle: "inputstyle",
    isInputNum: true,
    shouldAutoFocus: true,
    focusStyle: "focusstyle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: _this.onverify_otp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(FiChevronRight, {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }))))));
};

_c = JoinTable;
/* harmony default export */ __webpack_exports__["default"] = (JoinTable);

var _c;

$RefreshReg$(_c, "JoinTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJKb2luVGFibGUiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJvdHAiLCJzZXRTdGF0ZSIsIm1hcmdpblJpZ2h0Iiwib252ZXJpZnlfb3RwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFERixFQUtFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUxGLEVBUUU7QUFBTyxhQUFTLEVBQUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDRSxHQUFEO0FBQUEsYUFBUyxLQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxXQUFHLEVBQUVBO0FBQVAsT0FBZCxDQUFUO0FBQUEsS0FEWjtBQUVFLGFBQVMsRUFBRSxDQUZiO0FBR0UsU0FBSyxFQUFFQSxHQUhUO0FBSUUsYUFBUyxFQUFFO0FBQU0sV0FBSyxFQUFFO0FBQUVFLG1CQUFXLEVBQUU7QUFBZixPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLGtCQUFjLEVBQUMsZ0JBTGpCO0FBTUUsY0FBVSxFQUFDLFlBTmI7QUFPRSxjQUFVLEVBQUUsSUFQZDtBQVFFLG1CQUFlLEVBQUUsSUFSbkI7QUFTRSxjQUFVLEVBQUMsWUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLGFBQUQ7QUFBZSxXQUFPLEVBQUUsS0FBSSxDQUFDQyxZQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxjQUFEO0FBQWdCLFNBQUssRUFBRTtBQUFFSixjQUFRLEVBQUUsRUFBWjtBQUFnQkQsV0FBSyxFQUFFO0FBQXZCLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBekJGLENBREYsQ0FERixDQURGO0FBc0NELENBdkNEOztLQUFNSCxTO0FBd0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbl90YWJsZS5qcy5hMjQxZWNlZjdlMzg5NTI5YTA4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmNvbnN0IEpvaW5UYWJsZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbzE1XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJyM0MDQwNDAnIH19PlxyXG4gICAgICAgICAgICBJdCBsb29rcyBsaWtlIHRoZXJlJ3MgYWxyZWFkeSBzb21lb25lIG9uIHRoaXMgdGFibGUuIFRvIGpvaW4sIHlvdVxyXG4gICAgICAgICAgICBuZWVkIHRvIGFzayB0aGUgcGVyc29uIGZvciB0aGUgNCBkaWdpdCBjb2RlLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBjb2xvcjogJyM2NTY1NjUnIH19PlxyXG4gICAgICAgICAgICBKb2luIHlvdXIgZnJpZW5kcyBvbiB0aGlzIHRhYmxlXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvMTIgc2Vjb25kVGV4dFwiPlxyXG4gICAgICAgICAgICBFbnRlciB0aGUgNCBkaWdpdCBjb2RlIGRpc3BsYXllZCBvbiB5b3VyIGZyaWVuZCdzIHNjcmVlblxyXG4gICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxPdHBJbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3RwKSA9PiB0aGlzLnNldFN0YXRlKHsgb3RwOiBvdHAgfSl9XHJcbiAgICAgICAgICAgICAgbnVtSW5wdXRzPXs2fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtvdHB9XHJcbiAgICAgICAgICAgICAgc2VwYXJhdG9yPXs8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+PC9zcGFuPn1cclxuICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT1cImNvbnRhaW5lcnN0eWxlXCJcclxuICAgICAgICAgICAgICBpbnB1dFN0eWxlPVwiaW5wdXRzdHlsZVwiXHJcbiAgICAgICAgICAgICAgaXNJbnB1dE51bT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzaG91bGRBdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgZm9jdXNTdHlsZT1cImZvY3Vzc3R5bGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENoZWNrb3V0VGV4dD5MZXQncyBnbzwvQ2hlY2tvdXRUZXh0PlxyXG4gICAgICAgICAgICA8U2V0RmlsdGVySWNvbiBvbkNsaWNrPXt0aGlzLm9udmVyaWZ5X290cH0+XHJcbiAgICAgICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IHN0eWxlPXt7IGZvbnRTaXplOiAzNCwgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9TZXRGaWx0ZXJJY29uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSm9pblRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9