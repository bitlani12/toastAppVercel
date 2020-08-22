webpackHotUpdate("static\\development\\pages\\update_name.js",{

/***/ "./src/pages/update_name.js":
/*!**********************************!*\
  !*** ./src/pages/update_name.js ***!
  \**********************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_authAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../redux/actions/authAction */ "./src/redux/actions/authAction.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\update_name.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__BackgroundImage",
  componentId: "sc-1au4xmd-0"
})(["background-image:url('/static/Group 1113.svg');background-repeat:no-repeat;background-position:center;min-height:100vh;background-position-x:center;"]);
_c = BackgroundImage;
var SetFilterIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__SetFilterIcon",
  componentId: "sc-1au4xmd-1"
})(["position:fixed;bottom:50px;right:20px;opacity:0.8;background:transparent linear-gradient(172deg,#78ffd6 0%,#007991 100%) 0% 0% no-repeat padding-box;box-shadow:0px 3px 6px #00000029;opacity:1;padding:5px 5px;display:flex;border-radius:100px;box-shadow:0 0 5px #70707029;"]);
_c2 = SetFilterIcon;
var CheckoutText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__CheckoutText",
  componentId: "sc-1au4xmd-2"
})(["position:fixed;bottom:30px;font-weight:700;right:10px;color:#3cbcb4;font-size:12px;"]);
_c3 = CheckoutText;

var UpdateName = function UpdateName(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setname = _useState[1];

  var onsubmit_name = function onsubmit_name() {
    props.updatename_action(name);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(BackgroundImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/Component 47 \u2013 3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      position: 'fixed',
      bottom: 100,
      left: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("h3", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: '#404040'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "What should we call you?", ' '), __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setname(e.target.value);
    },
    placeholder: "Tell us your name",
    style: {
      border: 'none',
      borderBottom: 'solid #999999 0.8px',
      fontSize: 16
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "Let's Go"), __jsx(SetFilterIcon, {
    onClick: onsubmit_name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiChevronRight"], {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "\n      ::placeholder{\n          font-size:14px;\n          margin-bottom:5px;\n      }"));
};

_s(UpdateName, "0Xcix0mHjjcRK1w+NkvrrsJz6VE=");

_c4 = UpdateName;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updatename_action: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_5__["updatename_action"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(UpdateName));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "SetFilterIcon");
$RefreshReg$(_c3, "CheckoutText");
$RefreshReg$(_c4, "UpdateName");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXBkYXRlX25hbWUuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiU2V0RmlsdGVySWNvbiIsIkNoZWNrb3V0VGV4dCIsIlVwZGF0ZU5hbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwibmFtZSIsInNldG5hbWUiLCJvbnN1Ym1pdF9uYW1lIiwidXBkYXRlbmFtZV9hY3Rpb24iLCJwYWRkaW5nIiwicG9zaXRpb24iLCJib3R0b20iLCJsZWZ0IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJib3JkZXIiLCJib3JkZXJCb3R0b20iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SkFBckI7S0FBTUYsZTtBQU9DLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBbkI7TUFBTUMsYTtBQWNiLElBQU1DLFlBQVksR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyRkFBbEI7TUFBTUUsWTs7QUFRTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxFQUFELENBREo7QUFBQSxNQUNyQkMsSUFEcUI7QUFBQSxNQUNmQyxPQURlOztBQUU1QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJKLFNBQUssQ0FBQ0ssaUJBQU4sQ0FBd0JILElBQXhCO0FBQ0QsR0FGRDs7QUFHQSxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUksYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsbUNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsT0FBWjtBQUFxQkMsWUFBTSxFQUFFLEdBQTdCO0FBQWtDQyxVQUFJLEVBQUU7QUFBeEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsZ0JBQVUsRUFBRSxHQUFkO0FBQW1CQyxjQUFRLEVBQUUsRUFBN0I7QUFBaUNDLFdBQUssRUFBRTtBQUF4QyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQzJCLEdBRDNCLENBREYsRUFJRTtBQUNFLFNBQUssRUFBRVYsSUFEVDtBQUVFLFlBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGFBQU9WLE9BQU8sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBLEtBRlo7QUFHRSxlQUFXLEVBQUMsbUJBSGQ7QUFJRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsa0JBQVksRUFBRSxxQkFGVDtBQUdMTixjQUFRLEVBQUU7QUFITCxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQUpGLENBREYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFUCxhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixTQUFLLEVBQUU7QUFBRU8sY0FBUSxFQUFFLEVBQVo7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQXJCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdHQTNCRixDQURGO0FBbUNELENBeENEOztHQUFNYixVOztNQUFBQSxVOztBQTBDTixJQUFNbUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q2QscUJBQWlCLEVBQUVlLGdFQUFrQixDQUFDZiwyRUFBRCxFQUFvQmMsUUFBcEI7QUFERyxHQUFmO0FBQUEsQ0FBM0I7O0FBR2VFLDBIQUFPLENBQUMsSUFBRCxFQUFPSCxrQkFBUCxDQUFQLENBQWtDbkIsVUFBbEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcdXBkYXRlX25hbWUuanMuNzkzZTI3MzI5OTAwNTc2ZTc0NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHVwZGF0ZW5hbWVfYWN0aW9uIH0gZnJvbSAnLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb24nO1xyXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0LCBGaUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuY29uc3QgQmFja2dyb3VuZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvR3JvdXAgMTExMy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IFNldEZpbHRlckljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxNzJkZWcsICM3OGZmZDYgMCUsICMwMDc5OTEgMTAwJSkgMCVcclxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNzA3MDcwMjk7XHJcbmA7XHJcbmNvbnN0IENoZWNrb3V0VGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjM2NiY2I0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuY29uc3QgVXBkYXRlTmFtZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXRuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbnN1Ym1pdF9uYW1lID0gKCkgPT4ge1xyXG4gICAgcHJvcHMudXBkYXRlbmFtZV9hY3Rpb24obmFtZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEJhY2tncm91bmRJbWFnZT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0NvbXBvbmVudCA0NyDigJMgMy5zdmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMTAwLCBsZWZ0OiAyMCB9fT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250V2VpZ2h0OiA4MDAsIGZvbnRTaXplOiAxOCwgY29sb3I6ICcjNDA0MDQwJyB9fT5cclxuICAgICAgICAgICAgV2hhdCBzaG91bGQgd2UgY2FsbCB5b3U/eycgJ31cclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0bmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB1cyB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkICM5OTk5OTkgMC44cHgnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQmFja2dyb3VuZEltYWdlPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDaGVja291dFRleHQ+TGV0J3MgR288L0NoZWNrb3V0VGV4dD5cclxuICAgICAgICA8U2V0RmlsdGVySWNvbiBvbkNsaWNrPXtvbnN1Ym1pdF9uYW1lfT5cclxuICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBzdHlsZT17eyBmb250U2l6ZTogMzQsIGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgPC9TZXRGaWx0ZXJJY29uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlPntgXHJcbiAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgICB9YH08L3N0eWxlPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICB1cGRhdGVuYW1lX2FjdGlvbjogYmluZEFjdGlvbkNyZWF0b3JzKHVwZGF0ZW5hbWVfYWN0aW9uLCBkaXNwYXRjaCksXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXBkYXRlTmFtZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=