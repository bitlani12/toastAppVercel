webpackHotUpdate("static\\development\\pages\\feedback.js",{

/***/ "./src/pages/feedback.js":
/*!*******************************!*\
  !*** ./src/pages/feedback.js ***!
  \*******************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/Flex */ "./src/ui/Flex.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");



var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\feedback.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var SetFilterIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "feedback__SetFilterIcon",
  componentId: "sc-1slitdj-0"
})(["position:fixed;bottom:50px;right:20px;opacity:0.8;background:transparent linear-gradient(172deg,#78ffd6 0%,#007991 100%) 0% 0% no-repeat padding-box;box-shadow:0px 3px 6px #00000029;opacity:1;padding:5px 5px;display:flex;border-radius:100px;box-shadow:0 0 5px #70707029;"]);
var CheckoutText = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "feedback__CheckoutText",
  componentId: "sc-1slitdj-1"
})(["position:fixed;bottom:30px;font-weight:600;right:10px;color:#3cbcb4;font-size:12px;"]);
var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "feedback__BackgroundImage",
  componentId: "sc-1slitdj-2"
})(["background-image:url('/static/Layer 2.svg');background-repeat:no-repeat;background-position:bottom;min-height:100vh;background-position-x:inherit;"]);
_c = BackgroundImage;
{
  /* <img src="/static/Layer 2/Layer 2.png" /> */
}

var Feedback = function Feedback() {
  return __jsx(BackgroundImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      marginTop: 20,
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      color: '#404040',
      fontSize: 18,
      fontWeight: 600,
      marginTop: 2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, ' ', "Thank You for your feedback!", ' '), __jsx("h5", {
    style: {
      color: '#999999'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Your feedback directly send to the manager.We ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 57
    }
  }), "assure you to help you as much as we can."), __jsx("p", {
    className: "pt20",
    style: {
      color: '#3CBCB4',
      marginTop: 400,
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_ui_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexRow"], {
    style: {
      marginTop: -150
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronLeft"], {
    style: {
      marginRight: 0,
      fontSize: 16,
      fontWeight: 600
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), ' ', "BACK TO HOME")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
};

_c2 = Feedback;

Feedback.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('this is ctx');
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_6__["auth"])(ctx);
            return _context.abrupt("return", {
              token: token
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Feedback);

var _c, _c2;

$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "Feedback");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmVlZGJhY2suanMiXSwibmFtZXMiOlsiU2V0RmlsdGVySWNvbiIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0VGV4dCIsIkJhY2tncm91bmRJbWFnZSIsIkZlZWRiYWNrIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luUmlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBbkI7QUFjUCxJQUFNQyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWxCO0FBUUEsSUFBTUUsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBKQUFyQjtLQUFNRSxlO0FBT047QUFDRTtBQUNEOztBQUNELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLFNBREY7QUFFTEMsY0FBUSxFQUFFLEVBRkw7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxKLGVBQVMsRUFBRTtBQUpOLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHLEdBUkgsa0NBUytCLEdBVC9CLENBREYsRUFZRTtBQUFJLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQ2dEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEQsOENBWkYsRUFpQkU7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUUsU0FBVDtBQUFvQkYsZUFBUyxFQUFFLEdBQS9CO0FBQW9DSSxnQkFBVSxFQUFFO0FBQWhELEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRUosZUFBUyxFQUFFLENBQUM7QUFBZCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFNBQUssRUFBRTtBQUFFSyxpQkFBVyxFQUFFLENBQWY7QUFBa0JGLGNBQVEsRUFBRSxFQUE1QjtBQUFnQ0MsZ0JBQVUsRUFBRTtBQUE1QyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdLLEdBSEwsaUJBSkYsQ0FqQkYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGLENBREY7QUFrQ0QsQ0FuQ0Q7O01BQU1MLFE7O0FBb0NOQSxRQUFRLENBQUNPLGVBQVQ7QUFBQSw4TEFBMkIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNNQyxpQkFGbUIsR0FFWEMsd0RBQUksQ0FBQ0osR0FBRCxDQUZPO0FBQUEsNkNBR2xCO0FBQUVHLG1CQUFLLEVBQUxBO0FBQUYsYUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2VYLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmZWVkYmFjay5qcy4xMmMxNjAzNzgyNTc3M2ViMWNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4vLi4vdWkvRmxleCc7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmV4cG9ydCBjb25zdCBTZXRGaWx0ZXJJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjNzhmZmQ2IDAlLCAjMDA3OTkxIDEwMCUpIDAlXHJcbiAgICAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcGFkZGluZzogNXB4IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzcwNzA3MDI5O1xyXG5gO1xyXG5jb25zdCBDaGVja291dFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICByaWdodDogMTBweDtcclxuICBjb2xvcjogIzNjYmNiNDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbmA7XHJcbmNvbnN0IEJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL0xheWVyIDIuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBpbmhlcml0O1xyXG5gO1xyXG57XHJcbiAgLyogPGltZyBzcmM9XCIvc3RhdGljL0xheWVyIDIvTGF5ZXIgMi5wbmdcIiAvPiAqL1xyXG59XHJcbmNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja2dyb3VuZEltYWdlPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAsIHBhZGRpbmc6IDEwIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICBUaGFuayBZb3UgZm9yIHlvdXIgZmVlZGJhY2sheycgJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICcjOTk5OTk5JyB9fT5cclxuICAgICAgICAgIFlvdXIgZmVlZGJhY2sgZGlyZWN0bHkgc2VuZCB0byB0aGUgbWFuYWdlci5XZSA8YnIgLz5cclxuICAgICAgICAgIGFzc3VyZSB5b3UgdG8gaGVscCB5b3UgYXMgbXVjaCBhcyB3ZSBjYW4uXHJcbiAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgPHBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB0MjBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjM0NCQ0I0JywgbWFyZ2luVG9wOiA0MDAsIGZvbnRXZWlnaHQ6IDYwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4Um93IHN0eWxlPXt7IG1hcmdpblRvcDogLTE1MCB9fT5cclxuICAgICAgICAgICAgPEZpQ2hldnJvbkxlZnRcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogMCwgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAgfX1cclxuICAgICAgICAgICAgLz57JyAnfVxyXG4gICAgICAgICAgICBCQUNLIFRPIEhPTUVcclxuICAgICAgICAgIDwvRmxleFJvdz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0JhY2tncm91bmRJbWFnZT5cclxuICApO1xyXG59O1xyXG5GZWVkYmFjay5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3RoaXMgaXMgY3R4Jyk7XHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoKGN0eCk7XHJcbiAgcmV0dXJuIHsgdG9rZW4gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=