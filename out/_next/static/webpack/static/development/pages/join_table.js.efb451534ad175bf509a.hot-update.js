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
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\join_table.js",
    _s = $RefreshSig$();

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
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      code = _useState[0],
      setcode = _useState[1];

  var onverify_otp = function onverify_otp() {// this.props.verifyotp_action(otp, this.props.router.query.mobile);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(react_otp_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: function onChange(otp) {
      return setcode(otp);
    },
    numInputs: 4,
    value: code,
    separator: __jsx("span", {
      style: {
        marginRight: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
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
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: onverify_otp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 15
    }
  }))))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "\n        .containerstyle{\n            display: flex;\n        }\n        .inputstyle{\n            border: none;\n    border-bottom: solid #999999 1.5px;\n    font-size: 20px;\n        }\n        .focusstyle{\n            border: none;\n            outline: none;\n            border-bottom: solid #3CBCB4 1.5px;\n        }\n        "));
};

_s(JoinTable, "4XrcR+8/nE4Wcux47mhX6PG5cyQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJTZXRGaWx0ZXJJY29uIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tvdXRUZXh0IiwiSm9pblRhYmxlIiwidXNlU3RhdGUiLCJjb2RlIiwic2V0Y29kZSIsIm9udmVyaWZ5X290cCIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm90cCIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQWNiLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUMsWTs7QUFRTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBRXRCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDekI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFERixFQUtFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUxGLEVBUUU7QUFBTyxhQUFTLEVBQUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFlBQVEsRUFBRSxrQkFBQ0UsR0FBRDtBQUFBLGFBQVNOLE9BQU8sQ0FBQ00sR0FBRCxDQUFoQjtBQUFBLEtBRFo7QUFFRSxhQUFTLEVBQUUsQ0FGYjtBQUdFLFNBQUssRUFBRVAsSUFIVDtBQUlFLGFBQVMsRUFBRTtBQUFNLFdBQUssRUFBRTtBQUFFUSxtQkFBVyxFQUFFO0FBQWYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxrQkFBYyxFQUFDLGdCQUxqQjtBQU1FLGNBQVUsRUFBQyxZQU5iO0FBT0UsY0FBVSxFQUFFLElBUGQ7QUFRRSxtQkFBZSxFQUFFLElBUm5CO0FBU0UsY0FBVSxFQUFDLFlBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFTixZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixTQUFLLEVBQUU7QUFBRUksY0FBUSxFQUFFLEVBQVo7QUFBZ0JELFdBQUssRUFBRTtBQUF2QixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXpCRixDQURGLENBREYsRUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1VkFuQ0YsQ0FERjtBQXFERCxDQTFERDs7R0FBTVAsUzs7TUFBQUEsUztBQTJEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGpvaW5fdGFibGUuanMuZWZiNDUxNTM0YWQxNzViZjUwOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBPdHBJbnB1dCBmcm9tICdyZWFjdC1vdHAtaW5wdXQnO1xyXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0LCBGaUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmV4cG9ydCBjb25zdCBTZXRGaWx0ZXJJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjNzhmZmQ2IDAlLCAjMDA3OTkxIDEwMCUpIDAlXHJcbiAgICAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzcwNzA3MDI5O1xyXG5gO1xyXG5jb25zdCBDaGVja291dFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICByaWdodDogMTdweDtcclxuICBjb2xvcjogIzNjYmNiNDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbmA7XHJcbmNvbnN0IEpvaW5UYWJsZSA9ICgpID0+IHtcclxuICBjb25zdCBbY29kZSwgc2V0Y29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb252ZXJpZnlfb3RwID0gKCkgPT4ge1xyXG4gICAgLy8gdGhpcy5wcm9wcy52ZXJpZnlvdHBfYWN0aW9uKG90cCwgdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnkubW9iaWxlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvMTVcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnIzQwNDA0MCcgfX0+XHJcbiAgICAgICAgICAgIEl0IGxvb2tzIGxpa2UgdGhlcmUncyBhbHJlYWR5IHNvbWVvbmUgb24gdGhpcyB0YWJsZS4gVG8gam9pbiwgeW91XHJcbiAgICAgICAgICAgIG5lZWQgdG8gYXNrIHRoZSBwZXJzb24gZm9yIHRoZSA0IGRpZ2l0IGNvZGUuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogMTgsIGNvbG9yOiAnIzY1NjU2NScgfX0+XHJcbiAgICAgICAgICAgIEpvaW4geW91ciBmcmllbmRzIG9uIHRoaXMgdGFibGVcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm8xMiBzZWNvbmRUZXh0XCI+XHJcbiAgICAgICAgICAgIEVudGVyIHRoZSA0IGRpZ2l0IGNvZGUgZGlzcGxheWVkIG9uIHlvdXIgZnJpZW5kJ3Mgc2NyZWVuXHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE90cElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdHApID0+IHNldGNvZGUob3RwKX1cclxuICAgICAgICAgICAgICBudW1JbnB1dHM9ezR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgc2VwYXJhdG9yPXs8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+PC9zcGFuPn1cclxuICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT1cImNvbnRhaW5lcnN0eWxlXCJcclxuICAgICAgICAgICAgICBpbnB1dFN0eWxlPVwiaW5wdXRzdHlsZVwiXHJcbiAgICAgICAgICAgICAgaXNJbnB1dE51bT17dHJ1ZX1cclxuICAgICAgICAgICAgICBzaG91bGRBdXRvRm9jdXM9e3RydWV9XHJcbiAgICAgICAgICAgICAgZm9jdXNTdHlsZT1cImZvY3Vzc3R5bGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENoZWNrb3V0VGV4dD5MZXQncyBnbzwvQ2hlY2tvdXRUZXh0PlxyXG4gICAgICAgICAgICA8U2V0RmlsdGVySWNvbiBvbkNsaWNrPXtvbnZlcmlmeV9vdHB9PlxyXG4gICAgICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBzdHlsZT17eyBmb250U2l6ZTogMzQsIGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvU2V0RmlsdGVySWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgLmNvbnRhaW5lcnN0eWxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRzdHlsZXtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzk5OTk5OSAxLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvY3Vzc3R5bGV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzNDQkNCNCAxLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSm9pblRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9