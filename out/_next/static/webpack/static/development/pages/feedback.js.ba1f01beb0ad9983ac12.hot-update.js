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
      lineNumber: 39,
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
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 9
    }
  }, ' ', "Thank You for your feedback!", ' '), __jsx("h5", {
    style: {
      color: '#999999'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Your feedback directly send to the manager.We ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_ui_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexRow"], {
    style: {
      marginTop: -150
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 13
    }
  }), ' ', "BACK TO HOME")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
            console.log(ctx, 'this is ctx');
            token = auth(ctx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmVlZGJhY2suanMiXSwibmFtZXMiOlsiU2V0RmlsdGVySWNvbiIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0VGV4dCIsIkJhY2tncm91bmRJbWFnZSIsIkZlZWRiYWNrIiwibWFyZ2luVG9wIiwicGFkZGluZyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luUmlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBbkI7QUFjUCxJQUFNQyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWxCO0FBUUEsSUFBTUUsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBKQUFyQjtLQUFNRSxlO0FBT047QUFDRTtBQUNEOztBQUNELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsU0FDRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRSxFQUFiO0FBQWlCQyxhQUFPLEVBQUU7QUFBMUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLFNBREY7QUFFTEMsY0FBUSxFQUFFLEVBRkw7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxKLGVBQVMsRUFBRTtBQUpOLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHLEdBUkgsa0NBUytCLEdBVC9CLENBREYsRUFZRTtBQUFJLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdURBQ2dEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEaEQsOENBWkYsRUFpQkU7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQSxXQUFLLEVBQUUsU0FBVDtBQUFvQkYsZUFBUyxFQUFFLEdBQS9CO0FBQW9DSSxnQkFBVSxFQUFFO0FBQWhELEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBRUosZUFBUyxFQUFFLENBQUM7QUFBZCxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFNBQUssRUFBRTtBQUFFSyxpQkFBVyxFQUFFLENBQWY7QUFBa0JGLGNBQVEsRUFBRSxFQUE1QjtBQUFnQ0MsZ0JBQVUsRUFBRTtBQUE1QyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdLLEdBSEwsaUJBSkYsQ0FqQkYsRUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVCRixDQURGLENBREY7QUFrQ0QsQ0FuQ0Q7O01BQU1MLFE7O0FBb0NOQSxRQUFRLENBQUNPLGVBQVQ7QUFBQSw4TEFBMkIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosRUFBaUIsYUFBakI7QUFDTUcsaUJBRm1CLEdBRVhDLElBQUksQ0FBQ0osR0FBRCxDQUZPO0FBQUEsNkNBR2xCO0FBQUVHLG1CQUFLLEVBQUxBO0FBQUYsYUFIa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBM0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2VYLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmZWVkYmFjay5qcy5iYTFmMDFiZWIwYWQ5OTgzYWMxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleFJvdyB9IGZyb20gJy4vLi4vdWkvRmxleCc7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9MYXllciAyLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogaW5oZXJpdDtcclxuYDtcclxue1xyXG4gIC8qIDxpbWcgc3JjPVwiL3N0YXRpYy9MYXllciAyL0xheWVyIDIucG5nXCIgLz4gKi9cclxufVxyXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tncm91bmRJbWFnZT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogJyM0MDQwNDAnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAyLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgVGhhbmsgWW91IGZvciB5b3VyIGZlZWRiYWNrIXsnICd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnIzk5OTk5OScgfX0+XHJcbiAgICAgICAgICBZb3VyIGZlZWRiYWNrIGRpcmVjdGx5IHNlbmQgdG8gdGhlIG1hbmFnZXIuV2UgPGJyIC8+XHJcbiAgICAgICAgICBhc3N1cmUgeW91IHRvIGhlbHAgeW91IGFzIG11Y2ggYXMgd2UgY2FuLlxyXG4gICAgICAgIDwvaDU+XHJcblxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwdDIwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzNDQkNCNCcsIG1hcmdpblRvcDogNDAwLCBmb250V2VpZ2h0OiA2MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6IC0xNTAgfX0+XHJcbiAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAsIGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogNjAwIH19XHJcbiAgICAgICAgICAgIC8+eycgJ31cclxuICAgICAgICAgICAgQkFDSyBUTyBIT01FXHJcbiAgICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9CYWNrZ3JvdW5kSW1hZ2U+XHJcbiAgKTtcclxufTtcclxuRmVlZGJhY2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGN0eCwgJ3RoaXMgaXMgY3R4Jyk7XHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoKGN0eCk7XHJcbiAgcmV0dXJuIHsgdG9rZW4gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=