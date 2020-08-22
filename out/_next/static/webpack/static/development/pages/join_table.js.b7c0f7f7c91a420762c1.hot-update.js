webpackHotUpdate("static\\development\\pages\\join_table.js",{

/***/ "./src/pages/join_table.js":
/*!*********************************!*\
  !*** ./src/pages/join_table.js ***!
  \*********************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-otp-input */ "./node_modules/react-otp-input/lib/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\join_table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 30px;\n  font-weight: 500;\n  right: 17px;\n  color: #3cbcb4;\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  opacity: 0.8;\n  background: transparent linear-gradient(172deg, #78ffd6 0%, #007991 100%) 0%\n    0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  padding: 5px 5px;\n  display: flex;\n  border-radius: 100px;\n  box-shadow: 0 0 5px #70707029;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SetFilterIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = SetFilterIcon;
var CheckoutText = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject2());
_c2 = CheckoutText;

var JoinTable = function JoinTable() {
  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
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
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(react_otp_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
        lineNumber: 49,
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
      lineNumber: 45,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: _this.onverify_otp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiChevronRight"], {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }))))));
};

_c3 = JoinTable;
/* harmony default export */ __webpack_exports__["default"] = (JoinTable);

var _c, _c2, _c3;

$RefreshReg$(_c, "SetFilterIcon");
$RefreshReg$(_c2, "CheckoutText");
$RefreshReg$(_c3, "JoinTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJTZXRGaWx0ZXJJY29uIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tvdXRUZXh0IiwiSm9pblRhYmxlIiwicGFkZGluZyIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwib3RwIiwic2V0U3RhdGUiLCJtYXJnaW5SaWdodCIsIm9udmVyaWZ5X290cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQWNiLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUMsWTs7QUFRTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFERixFQUtFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUxGLEVBUUU7QUFBTyxhQUFTLEVBQUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFlBQVEsRUFBRSxrQkFBQ0UsR0FBRDtBQUFBLGFBQVMsS0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRUQsV0FBRyxFQUFFQTtBQUFQLE9BQWQsQ0FBVDtBQUFBLEtBRFo7QUFFRSxhQUFTLEVBQUUsQ0FGYjtBQUdFLFNBQUssRUFBRUEsR0FIVDtBQUlFLGFBQVMsRUFBRTtBQUFNLFdBQUssRUFBRTtBQUFFRSxtQkFBVyxFQUFFO0FBQWYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxrQkFBYyxFQUFDLGdCQUxqQjtBQU1FLGNBQVUsRUFBQyxZQU5iO0FBT0UsY0FBVSxFQUFFLElBUGQ7QUFRRSxtQkFBZSxFQUFFLElBUm5CO0FBU0UsY0FBVSxFQUFDLFlBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFLEtBQUksQ0FBQ0MsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsU0FBSyxFQUFFO0FBQUVKLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0F6QkYsQ0FERixDQURGLENBREY7QUFzQ0QsQ0F2Q0Q7O01BQU1ILFM7QUF3Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxqb2luX3RhYmxlLmpzLmI3YzBmN2Y3YzkxYTQyMDc2MmMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IE90cElucHV0IGZyb20gJ3JlYWN0LW90cC1pbnB1dCc7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQsIEZpQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuZXhwb3J0IGNvbnN0IFNldEZpbHRlckljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxNzJkZWcsICM3OGZmZDYgMCUsICMwMDc5OTEgMTAwJSkgMCVcclxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNzA3MDcwMjk7XHJcbmA7XHJcbmNvbnN0IENoZWNrb3V0VGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIGNvbG9yOiAjM2NiY2I0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuY29uc3QgSm9pblRhYmxlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvMTVcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnIzQwNDA0MCcgfX0+XHJcbiAgICAgICAgICAgIEl0IGxvb2tzIGxpa2UgdGhlcmUncyBhbHJlYWR5IHNvbWVvbmUgb24gdGhpcyB0YWJsZS4gVG8gam9pbiwgeW91XHJcbiAgICAgICAgICAgIG5lZWQgdG8gYXNrIHRoZSBwZXJzb24gZm9yIHRoZSA0IGRpZ2l0IGNvZGUuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogMTgsIGNvbG9yOiAnIzY1NjU2NScgfX0+XHJcbiAgICAgICAgICAgIEpvaW4geW91ciBmcmllbmRzIG9uIHRoaXMgdGFibGVcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm8xMiBzZWNvbmRUZXh0XCI+XHJcbiAgICAgICAgICAgIEVudGVyIHRoZSA0IGRpZ2l0IGNvZGUgZGlzcGxheWVkIG9uIHlvdXIgZnJpZW5kJ3Mgc2NyZWVuXHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE90cElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdHApID0+IHRoaXMuc2V0U3RhdGUoeyBvdHA6IG90cCB9KX1cclxuICAgICAgICAgICAgICBudW1JbnB1dHM9ezZ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e290cH1cclxuICAgICAgICAgICAgICBzZXBhcmF0b3I9ezxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT48L3NwYW4+fVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPVwiY29udGFpbmVyc3R5bGVcIlxyXG4gICAgICAgICAgICAgIGlucHV0U3R5bGU9XCJpbnB1dHN0eWxlXCJcclxuICAgICAgICAgICAgICBpc0lucHV0TnVtPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHNob3VsZEF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBmb2N1c1N0eWxlPVwiZm9jdXNzdHlsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRUZXh0PkxldCdzIGdvPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgICAgIDxTZXRGaWx0ZXJJY29uIG9uQ2xpY2s9e3RoaXMub252ZXJpZnlfb3RwfT5cclxuICAgICAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L1NldEZpbHRlckljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBKb2luVGFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=