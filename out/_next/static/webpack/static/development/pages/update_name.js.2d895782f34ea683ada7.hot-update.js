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
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\update_name.js";

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
  var onsubmit_name = function onsubmit_name() {
    props.updatename_action(login);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(BackgroundImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/Component 47 \u2013 3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 47,
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
      lineNumber: 48,
      columnNumber: 11
    }
  }, "What should we call you?", ' '), __jsx("input", {
    placeholder: "Tell us your name",
    style: {
      border: 'none',
      borderBottom: 'solid #999999 0.8px',
      fontSize: 16
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Let's Go"), __jsx(SetFilterIcon, {
    onClick: onsubmit_name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 11
    }
  }))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "\n      ::placeholder{\n          font-size:14px;\n          margin-bottom:5px;\n      }"));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdXBkYXRlX25hbWUuanMiXSwibmFtZXMiOlsiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiU2V0RmlsdGVySWNvbiIsIkNoZWNrb3V0VGV4dCIsIlVwZGF0ZU5hbWUiLCJwcm9wcyIsIm9uc3VibWl0X25hbWUiLCJ1cGRhdGVuYW1lX2FjdGlvbiIsImxvZ2luIiwicGFkZGluZyIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGVBQWUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SkFBckI7S0FBTUYsZTtBQU9DLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBbkI7TUFBTUMsYTtBQWNiLElBQU1DLFlBQVksR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyRkFBbEI7TUFBTUUsWTs7QUFRTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCRCxTQUFLLENBQUNFLGlCQUFOLENBQXdCQyxLQUF4QjtBQUNELEdBRkQ7O0FBR0EsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLG1DQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLE9BQVo7QUFBcUJDLFlBQU0sRUFBRSxHQUE3QjtBQUFrQ0MsVUFBSSxFQUFFO0FBQXhDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsR0FBZDtBQUFtQkMsY0FBUSxFQUFFLEVBQTdCO0FBQWlDQyxXQUFLLEVBQUU7QUFBeEMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUMyQixHQUQzQixDQURGLEVBSUU7QUFDRSxlQUFXLEVBQUMsbUJBRGQ7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsa0JBQVksRUFBRSxxQkFGVDtBQUdMSCxjQUFRLEVBQUU7QUFITCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQUpGLENBREYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFUixhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFnQixTQUFLLEVBQUU7QUFBRVEsY0FBUSxFQUFFLEVBQVo7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQW5CRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdHQXpCRixDQURGO0FBaUNELENBckNEOztNQUFNWCxVOztBQXVDTixJQUFNYyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDWixxQkFBaUIsRUFBRWEsZ0VBQWtCLENBQUNiLDJFQUFELEVBQW9CWSxRQUFwQjtBQURHLEdBQWY7QUFBQSxDQUEzQjs7QUFHZUUsMEhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NkLFVBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVwZGF0ZV9uYW1lLmpzLjJkODk1NzgyZjM0ZWE2ODNhZGE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgdXBkYXRlbmFtZV9hY3Rpb24gfSBmcm9tICcuLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbic7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQsIEZpQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9Hcm91cCAxMTEzLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBVcGRhdGVOYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgb25zdWJtaXRfbmFtZSA9ICgpID0+IHtcclxuICAgIHByb3BzLnVwZGF0ZW5hbWVfYWN0aW9uKGxvZ2luKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8QmFja2dyb3VuZEltYWdlPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvQ29tcG9uZW50IDQ3IOKAkyAzLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAxMDAsIGxlZnQ6IDIwIH19PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCwgZm9udFNpemU6IDE4LCBjb2xvcjogJyM0MDQwNDAnIH19PlxyXG4gICAgICAgICAgICBXaGF0IHNob3VsZCB3ZSBjYWxsIHlvdT97JyAnfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCAjOTk5OTk5IDAuOHB4JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JhY2tncm91bmRJbWFnZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2hlY2tvdXRUZXh0PkxldCdzIEdvPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgPFNldEZpbHRlckljb24gb25DbGljaz17b25zdWJtaXRfbmFtZX0+XHJcbiAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgIDwvU2V0RmlsdGVySWNvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgfWB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgdXBkYXRlbmFtZV9hY3Rpb246IGJpbmRBY3Rpb25DcmVhdG9ycyh1cGRhdGVuYW1lX2FjdGlvbiwgZGlzcGF0Y2gpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVwZGF0ZU5hbWUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9