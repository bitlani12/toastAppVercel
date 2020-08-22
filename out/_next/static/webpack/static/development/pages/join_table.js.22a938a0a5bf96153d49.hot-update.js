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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


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
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
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
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    style: {
      marginTop: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
        lineNumber: 56,
        columnNumber: 26
      }
    }),
    containerStyle: "containerstyle",
    inputStyle: "inputstyle",
    shouldAutoFocus: true,
    focusStyle: "focusstyle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: onverify_otp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 67,
      columnNumber: 15
    }
  }))))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "\n        .containerstyle{\n            display: flex;\n        }\n        .inputstyle{\n            border: none;\n    border-bottom: solid #999999 1.5px;\n    font-size: 20px;\n        }\n        .focusstyle{\n            border: none;\n            outline: none;\n            border-bottom: solid #3CBCB4 1.5px;\n        }\n        "));
};

_s(JoinTable, "4XrcR+8/nE4Wcux47mhX6PG5cyQ=");

_c3 = JoinTable;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    verifyotp_action: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(verifyotp_action, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(JoinTable))); // export default JoinTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJTZXRGaWx0ZXJJY29uIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tvdXRUZXh0IiwiSm9pblRhYmxlIiwidXNlU3RhdGUiLCJjb2RlIiwic2V0Y29kZSIsIm9udmVyaWZ5X290cCIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcmdpblRvcCIsIm90cCIsIm1hcmdpblJpZ2h0IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ2ZXJpZnlvdHBfYWN0aW9uIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQWNiLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUMsWTs7QUFRTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBRXRCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDekI7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxXQUFLLEVBQUU7QUFBMUIsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSEFERixFQUtFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUxGLEVBUUU7QUFBTyxhQUFTLEVBQUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBUkYsRUFXRTtBQUFLLFNBQUssRUFBRTtBQUFFRSxlQUFTLEVBQUU7QUFBYixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDQyxHQUFEO0FBQUEsYUFBU1AsT0FBTyxDQUFDTyxHQUFELENBQWhCO0FBQUEsS0FEWjtBQUVFLGFBQVMsRUFBRSxDQUZiO0FBR0UsU0FBSyxFQUFFUixJQUhUO0FBSUUsYUFBUyxFQUFFO0FBQU0sV0FBSyxFQUFFO0FBQUVTLG1CQUFXLEVBQUU7QUFBZixPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKYjtBQUtFLGtCQUFjLEVBQUMsZ0JBTGpCO0FBTUUsY0FBVSxFQUFDLFlBTmI7QUFPRSxtQkFBZSxFQUFFLElBUG5CO0FBUUUsY0FBVSxFQUFDLFlBUmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFUCxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixTQUFLLEVBQUU7QUFBRUksY0FBUSxFQUFFLEVBQVo7QUFBZ0JELFdBQUssRUFBRTtBQUF2QixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXhCRixDQURGLENBREYsRUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1VkFsQ0YsQ0FERjtBQW9ERCxDQXpERDs7R0FBTVAsUzs7TUFBQUEsUzs7QUEwRE4sSUFBTVksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q0Msb0JBQWdCLEVBQUVDLGdFQUFrQixDQUFDRCxnQkFBRCxFQUFtQkQsUUFBbkI7QUFESSxHQUFmO0FBQUEsQ0FBM0I7O0FBR2VHLDBIQUFPLENBQUMsSUFBRCxFQUFPSixrQkFBUCxDQUFQLENBQWtDSyw4REFBVSxDQUFDakIsU0FBRCxDQUE1QyxDQUFmLEUsQ0FFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcam9pbl90YWJsZS5qcy4yMmE5MzhhMGE1YmY5NjE1M2Q0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IE90cElucHV0IGZyb20gJ3JlYWN0LW90cC1pbnB1dCc7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQsIEZpQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBKb2luVGFibGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvZGUsIHNldGNvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9udmVyaWZ5X290cCA9ICgpID0+IHtcclxuICAgIC8vIHRoaXMucHJvcHMudmVyaWZ5b3RwX2FjdGlvbihvdHAsIHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5Lm1vYmlsZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbzE1XCIgc3R5bGU9e3sgZm9udFdlaWdodDogNTAwLCBjb2xvcjogJyM0MDQwNDAnIH19PlxyXG4gICAgICAgICAgICBJdCBsb29rcyBsaWtlIHRoZXJlJ3MgYWxyZWFkeSBzb21lb25lIG9uIHRoaXMgdGFibGUuIFRvIGpvaW4sIHlvdVxyXG4gICAgICAgICAgICBuZWVkIHRvIGFzayB0aGUgcGVyc29uIGZvciB0aGUgNCBkaWdpdCBjb2RlLlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBjb2xvcjogJyM2NTY1NjUnIH19PlxyXG4gICAgICAgICAgICBKb2luIHlvdXIgZnJpZW5kcyBvbiB0aGlzIHRhYmxlXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZvMTIgc2Vjb25kVGV4dFwiPlxyXG4gICAgICAgICAgICBFbnRlciB0aGUgNCBkaWdpdCBjb2RlIGRpc3BsYXllZCBvbiB5b3VyIGZyaWVuZCdzIHNjcmVlblxyXG4gICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgPE90cElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdHApID0+IHNldGNvZGUob3RwKX1cclxuICAgICAgICAgICAgICBudW1JbnB1dHM9ezR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgc2VwYXJhdG9yPXs8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+PC9zcGFuPn1cclxuICAgICAgICAgICAgICBjb250YWluZXJTdHlsZT1cImNvbnRhaW5lcnN0eWxlXCJcclxuICAgICAgICAgICAgICBpbnB1dFN0eWxlPVwiaW5wdXRzdHlsZVwiXHJcbiAgICAgICAgICAgICAgc2hvdWxkQXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGZvY3VzU3R5bGU9XCJmb2N1c3N0eWxlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDaGVja291dFRleHQ+TGV0J3MgZ288L0NoZWNrb3V0VGV4dD5cclxuICAgICAgICAgICAgPFNldEZpbHRlckljb24gb25DbGljaz17b252ZXJpZnlfb3RwfT5cclxuICAgICAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L1NldEZpbHRlckljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIC5jb250YWluZXJzdHlsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0c3R5bGV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICM5OTk5OTkgMS41cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb2N1c3N0eWxle1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICMzQ0JDQjQgMS41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICB2ZXJpZnlvdHBfYWN0aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnModmVyaWZ5b3RwX2FjdGlvbiwgZGlzcGF0Y2gpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIoSm9pblRhYmxlKSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBKb2luVGFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=