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
/* harmony import */ var _redux_actions_orderAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../redux/actions/orderAction */ "./src/redux/actions/orderAction.js");


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

var JoinTable = function JoinTable(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      code = _useState[0],
      setcode = _useState[1];

  var joindtable = function joindtable() {
    props.jointable_action(code, props.router.query.qr_code);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
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
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    style: {
      marginTop: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
        lineNumber: 57,
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
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: joindtable,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 15
    }
  }))))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "\n        .containerstyle{\n            display: flex;\n        }\n        .inputstyle{\n            border: none;\n    border-bottom: solid #999999 1.5px;\n    font-size: 20px;\n        }\n        .focusstyle{\n            border: none;\n            outline: none;\n            border-bottom: solid #3CBCB4 1.5px;\n        }\n        "));
};

_s(JoinTable, "4XrcR+8/nE4Wcux47mhX6PG5cyQ=");

_c3 = JoinTable;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    jointable_action: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_orderAction__WEBPACK_IMPORTED_MODULE_10__["jointable_action"], dispatch)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJTZXRGaWx0ZXJJY29uIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tvdXRUZXh0IiwiSm9pblRhYmxlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvZGUiLCJzZXRjb2RlIiwiam9pbmR0YWJsZSIsImpvaW50YWJsZV9hY3Rpb24iLCJyb3V0ZXIiLCJxdWVyeSIsInFyX2NvZGUiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJtYXJnaW5Ub3AiLCJvdHAiLCJtYXJnaW5SaWdodCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQWNiLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUMsWTs7QUFRTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxFQUFELENBREw7QUFBQSxNQUNwQkMsSUFEb0I7QUFBQSxNQUNkQyxPQURjOztBQUUzQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSixTQUFLLENBQUNLLGdCQUFOLENBQXVCSCxJQUF2QixFQUE2QkYsS0FBSyxDQUFDTSxNQUFOLENBQWFDLEtBQWIsQ0FBbUJDLE9BQWhEO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsR0FBZDtBQUFtQkMsV0FBSyxFQUFFO0FBQTFCLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0hBREYsRUFLRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkQsV0FBSyxFQUFFO0FBQXZCLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FMRixFQVFFO0FBQU8sYUFBUyxFQUFDLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQVJGLEVBV0U7QUFBSyxTQUFLLEVBQUU7QUFBRUUsZUFBUyxFQUFFO0FBQWIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLFlBQVEsRUFBRSxrQkFBQ0MsR0FBRDtBQUFBLGFBQVNYLE9BQU8sQ0FBQ1csR0FBRCxDQUFoQjtBQUFBLEtBRFo7QUFFRSxhQUFTLEVBQUUsQ0FGYjtBQUdFLFNBQUssRUFBRVosSUFIVDtBQUlFLGFBQVMsRUFBRTtBQUFNLFdBQUssRUFBRTtBQUFFYSxtQkFBVyxFQUFFO0FBQWYsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSmI7QUFLRSxrQkFBYyxFQUFDLGdCQUxqQjtBQU1FLGNBQVUsRUFBQyxZQU5iO0FBT0UsbUJBQWUsRUFBRSxJQVBuQjtBQVFFLGNBQVUsRUFBQyxZQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLEVBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsYUFBRDtBQUFlLFdBQU8sRUFBRVgsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsU0FBSyxFQUFFO0FBQUVRLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0F4QkYsQ0FERixDQURGLEVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdVZBbENGLENBREY7QUFvREQsQ0F6REQ7O0dBQU1aLFM7O01BQUFBLFM7O0FBMEROLElBQU1pQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDWixvQkFBZ0IsRUFBRWEsZ0VBQWtCLENBQUNiLDRFQUFELEVBQW1CWSxRQUFuQjtBQURJLEdBQWY7QUFBQSxDQUEzQjs7QUFHZUUsMEhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NJLDhEQUFVLENBQUNyQixTQUFELENBQTVDLENBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxqb2luX3RhYmxlLmpzLjYzNGE3NGE3NGU1ZjFkODE1NjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgT3RwSW5wdXQgZnJvbSAncmVhY3Qtb3RwLWlucHV0JztcclxuaW1wb3J0IHsgRmlDaGV2cm9uTGVmdCwgRmlDaGV2cm9uUmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGpvaW50YWJsZV9hY3Rpb24gfSBmcm9tICcuLy4uL3JlZHV4L2FjdGlvbnMvb3JkZXJBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBKb2luVGFibGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY29kZSwgc2V0Y29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgam9pbmR0YWJsZSA9ICgpID0+IHtcclxuICAgIHByb3BzLmpvaW50YWJsZV9hY3Rpb24oY29kZSwgcHJvcHMucm91dGVyLnF1ZXJ5LnFyX2NvZGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm8xNVwiIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDUwMCwgY29sb3I6ICcjNDA0MDQwJyB9fT5cclxuICAgICAgICAgICAgSXQgbG9va3MgbGlrZSB0aGVyZSdzIGFscmVhZHkgc29tZW9uZSBvbiB0aGlzIHRhYmxlLiBUbyBqb2luLCB5b3VcclxuICAgICAgICAgICAgbmVlZCB0byBhc2sgdGhlIHBlcnNvbiBmb3IgdGhlIDQgZGlnaXQgY29kZS5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgY29sb3I6ICcjNjU2NTY1JyB9fT5cclxuICAgICAgICAgICAgSm9pbiB5b3VyIGZyaWVuZHMgb24gdGhpcyB0YWJsZVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmbzEyIHNlY29uZFRleHRcIj5cclxuICAgICAgICAgICAgRW50ZXIgdGhlIDQgZGlnaXQgY29kZSBkaXNwbGF5ZWQgb24geW91ciBmcmllbmQncyBzY3JlZW5cclxuICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgIDxPdHBJbnB1dFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsob3RwKSA9PiBzZXRjb2RlKG90cCl9XHJcbiAgICAgICAgICAgICAgbnVtSW5wdXRzPXs0fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICAgIHNlcGFyYXRvcj17PHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19Pjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9XCJjb250YWluZXJzdHlsZVwiXHJcbiAgICAgICAgICAgICAgaW5wdXRTdHlsZT1cImlucHV0c3R5bGVcIlxyXG4gICAgICAgICAgICAgIHNob3VsZEF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBmb2N1c1N0eWxlPVwiZm9jdXNzdHlsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRUZXh0PkxldCdzIGdvPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgICAgIDxTZXRGaWx0ZXJJY29uIG9uQ2xpY2s9e2pvaW5kdGFibGV9PlxyXG4gICAgICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBzdHlsZT17eyBmb250U2l6ZTogMzQsIGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvU2V0RmlsdGVySWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgLmNvbnRhaW5lcnN0eWxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXRzdHlsZXtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzk5OTk5OSAxLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvY3Vzc3R5bGV7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgIzNDQkNCNCAxLjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGpvaW50YWJsZV9hY3Rpb246IGJpbmRBY3Rpb25DcmVhdG9ycyhqb2ludGFibGVfYWN0aW9uLCBkaXNwYXRjaCksXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcihKb2luVGFibGUpKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEpvaW5UYWJsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==