webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_headings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../ui/headings */ "./src/ui/headings.js");
/* harmony import */ var _ui_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/Flex */ "./src/ui/Flex.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _components_common_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/input */ "./src/components/common/input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_authAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../redux/actions/authAction */ "./src/redux/actions/authAction.js");


var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var SetFilterIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__SetFilterIcon",
  componentId: "sc-1sr9d22-0"
})(["position:fixed;bottom:50px;right:20px;opacity:0.8;background:transparent linear-gradient(172deg,#78ffd6 0%,#007991 100%) 0% 0% no-repeat padding-box;box-shadow:0px 3px 6px #00000029;opacity:1;padding:5px 5px;display:flex;border-radius:100px;box-shadow:0 0 5px #70707029;"]);
_c = SetFilterIcon;
var CheckoutText = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__CheckoutText",
  componentId: "sc-1sr9d22-1"
})(["position:fixed;bottom:30px;font-weight:700;right:10px;color:#3cbcb4;font-size:12px;"]);
_c2 = CheckoutText;
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "login__BackgroundImage",
  componentId: "sc-1sr9d22-2"
})(["background-image:url('", "');background-repeat:no-repeat;background-position:", ";min-height:100vh;background-position-x:", ";background-position-y:", ";margin-top:-20px;"], function (props) {
  return props.path;
}, function (props) {
  return props.pos;
}, function (props) {
  return props.posx;
}, function (props) {
  return props.posy;
});
_c3 = BackgroundImage;

var Login = function Login(props) {
  _s();

  var _ref;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      login = _useState[0],
      setlogin = _useState[1];

  var onchange = function onchange(value) {
    setlogin(value);
  };

  var onsubmit_login = function onsubmit_login() {
    props.sendOtp_action(login);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, ' ', __jsx(BackgroundImage, {
    path: "/static/Path 636.svg",
    posx: '-89px',
    posy: "-92px",
    pos: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(BackgroundImage, {
    path: "/static/Path 3891.svg",
    posx: '27vh',
    posy: "71vh",
    pos: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      marginTop: 20,
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: (_ref = {
      color: '#404040',
      fontSize: 14,
      fontWeight: 700,
      marginTop: 60,
      marginBottom: 10
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "fontWeight", 500), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "marginLeft", 20), _ref),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "Welcome Toast"), __jsx("img", {
    src: "/static/logo_type.svg",
    style: {
      marginLeft: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }), __jsx("div", {
    style: {
      marginLeft: 22
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("p", {
    style: {
      color: '#404040',
      marginTop: 100,
      fontWeight: 700,
      fontSize: 18
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Sign-in"), __jsx("h4", {
    className: "fo13",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, " Phone Number"), __jsx(_ui_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexBetween"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(_ui_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("div", {
    style: {
      position: 'relative',
      marginRight: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("select", {
    id: "cars",
    className: "option_layout",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }, __jsx("option", {
    className: "option_layout",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, "+91"), __jsx("option", {
    value: "saab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "+1"), __jsx("option", {
    value: "vw",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "VW"), __jsx("option", {
    value: "audi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, "Audi")), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoMdArrowDropdown"], {
    style: {
      position: 'absolute',
      marginTop: 10,
      right: 4,
      fontSize: 22
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  })), __jsx(_components_common_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: login,
    onchange: onchange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  })))))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "CHECKOUT"), __jsx(SetFilterIcon, {
    onClick: onsubmit_login,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, "\n       select {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        text-indent: 1px;\n        text-overflow: '';\n    }\n          .option_layout{\n            background: #9999991a;\n            padding: 8px 25px 10px 8px;\n            color: #404040;\n            font-weight: 500;\n            border: solid #99999926 1px;\n            border-radius:8px;\n          }\n          .arrow {\n            border: solid black;\n            border-width: 0 3px 3px 0;\n            display: inline-block;\n            padding: 3px;\n          }\n          .down {\n            transform: rotate(45deg);\n            -webkit-transform: rotate(45deg);\n          }\n          \n          "));
};

_s(Login, "eHgCupu6WrgQnUm7O3C9HBFKhyI=");

_c4 = Login;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sendOtp_action: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_11__["sendOtp_action"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(Login)); // export default ;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "SetFilterIcon");
$RefreshReg$(_c2, "CheckoutText");
$RefreshReg$(_c3, "BackgroundImage");
$RefreshReg$(_c4, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiU2V0RmlsdGVySWNvbiIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0VGV4dCIsIkJhY2tncm91bmRJbWFnZSIsInByb3BzIiwicGF0aCIsInBvcyIsInBvc3giLCJwb3N5IiwiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0bG9naW4iLCJvbmNoYW5nZSIsInZhbHVlIiwib25zdWJtaXRfbG9naW4iLCJzZW5kT3RwX2FjdGlvbiIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsIm1hcmdpblJpZ2h0IiwicmlnaHQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNSQUFuQjtLQUFNRixhO0FBY2IsSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJGQUFsQjtNQUFNQyxZO0FBUU4sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1MQUNNLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsQ0FETixFQUdJLFVBQUNELEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEdBQWpCO0FBQUEsQ0FISixFQUtNLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsQ0FMTixFQU1P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K0hOLElBQU1rQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDWixrQkFBYyxFQUFFYSxpRUFBa0IsQ0FBQ2IseUVBQUQsRUFBaUJZLFFBQWpCO0FBRE0sR0FBZjtBQUFBLENBQTNCOztBQUdlRSwwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ2xCLEtBQWxDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy4zZWExODJkNDUzZTU1ZGYwZTMzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYXZ0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIMyB9IGZyb20gJy4vLi4vdWkvaGVhZGluZ3MnO1xyXG5pbXBvcnQgeyBGbGV4Um93LCBGbGV4QmV0d2VlbiB9IGZyb20gJy4vLi4vdWkvRmxleCc7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQsIEZpQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCB7IElvTWRBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vaW5wdXQnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHNlbmRPdHBfYWN0aW9uIH0gZnJvbSAnLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb24nO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHsocHJvcHMpID0+IHByb3BzLnBhdGh9Jyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucG9zfTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6ICR7KHByb3BzKSA9PiBwcm9wcy5wb3N4fTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6ICAkeyhwcm9wcykgPT4gcHJvcHMucG9zeX07XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbmA7XHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2luLCBzZXRsb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25jaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIHNldGxvZ2luKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uc3VibWl0X2xvZ2luID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuc2VuZE90cF9hY3Rpb24obG9naW4pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgeycgJ31cclxuICAgICAgICA8QmFja2dyb3VuZEltYWdlXHJcbiAgICAgICAgICBwYXRoPVwiL3N0YXRpYy9QYXRoIDYzNi5zdmdcIlxyXG4gICAgICAgICAgcG9zeD17Jy04OXB4J31cclxuICAgICAgICAgIHBvc3k9XCItOTJweFwiXHJcbiAgICAgICAgICBwb3M9XCJ0b3BcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2VcclxuICAgICAgICAgICAgcGF0aD1cIi9zdGF0aWMvUGF0aCAzODkxLnN2Z1wiXHJcbiAgICAgICAgICAgIHBvc3g9eycyN3ZoJ31cclxuICAgICAgICAgICAgcG9zeT1cIjcxdmhcIlxyXG4gICAgICAgICAgICBwb3M9XCJib3R0b21cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDYwLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDIwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIFRvYXN0XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2xvZ29fdHlwZS5zdmdcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjIgfX0+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24taW5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmbzEzXCI+IFBob25lIE51bWJlcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8RmxleEJldHdlZW4+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpblJpZ2h0OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJjYXJzXCIgY2xhc3NOYW1lPVwib3B0aW9uX2xheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cIm9wdGlvbl9sYXlvdXRcIiBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICArOTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCI+KzE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZ3XCI+Vlc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzcz1cImFycm93IGRvd25cIj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW9NZEFycm93RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHRleHQ9e2xvZ2lufSBvbmNoYW5nZT17b25jaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICAgICAgICAgIDwvRmxleEJldHdlZW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXY+XHJcbiAgICAgIDxDaGVja291dFRleHQ+Q0hFQ0tPVVQ8L0NoZWNrb3V0VGV4dD5cclxuICAgICAgPFNldEZpbHRlckljb24+XHJcbiAgICAgICAgPEZpQ2hldnJvblJpZ2h0IHN0eWxlPXt7IGZvbnRTaXplOiAzNCwgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgPC9TZXRGaWx0ZXJJY29uPlxyXG4gICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQmFja2dyb3VuZEltYWdlPlxyXG4gICAgICAgIDwvQmFja2dyb3VuZEltYWdlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2hlY2tvdXRUZXh0PkNIRUNLT1VUPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgPFNldEZpbHRlckljb24gb25DbGljaz17b25zdWJtaXRfbG9naW59PlxyXG4gICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IHN0eWxlPXt7IGZvbnRTaXplOiAzNCwgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICA8L1NldEZpbHRlckljb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGU+XHJcbiAgICAgICAge2BcclxuICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICB0ZXh0LWluZGVudDogMXB4O1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xyXG4gICAgfVxyXG4gICAgICAgICAgLm9wdGlvbl9sYXlvdXR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5OTk5OTkxYTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDI1cHggMTBweCA4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkICM5OTk5OTkyNiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFycm93IHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZG93biB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNlbmRPdHBfYWN0aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2VuZE90cF9hY3Rpb24sIGRpc3BhdGNoKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==