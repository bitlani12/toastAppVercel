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
  console.log('feed');
  return __jsx(BackgroundImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 9
    }
  }, ' ', "Thank You for your feedback!", ' '), __jsx("h5", {
    style: {
      color: '#999999'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Your feedback directly send to the manager.We ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_ui_Flex__WEBPACK_IMPORTED_MODULE_3__["FlexRow"], {
    style: {
      marginTop: -150
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 13
    }
  }), ' ', "BACK TO HOME")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZmVlZGJhY2suanMiXSwibmFtZXMiOlsiU2V0RmlsdGVySWNvbiIsInN0eWxlZCIsImRpdiIsIkNoZWNrb3V0VGV4dCIsIkJhY2tncm91bmRJbWFnZSIsIkZlZWRiYWNrIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblJpZ2h0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUkFBbkI7QUFjUCxJQUFNQyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWxCO0FBUUEsSUFBTUUsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBKQUFyQjtLQUFNRSxlO0FBT047QUFDRTtBQUNEOztBQUNELElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxTQUNFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFLEVBQWI7QUFBaUJDLGFBQU8sRUFBRTtBQUExQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsU0FERjtBQUVMQyxjQUFRLEVBQUUsRUFGTDtBQUdMQyxnQkFBVSxFQUFFLEdBSFA7QUFJTEosZUFBUyxFQUFFO0FBSk4sS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUcsR0FSSCxrQ0FTK0IsR0FUL0IsQ0FERixFQVlFO0FBQUksU0FBSyxFQUFFO0FBQUVFLFdBQUssRUFBRTtBQUFULEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFDZ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURoRCw4Q0FaRixFQWlCRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVBLFdBQUssRUFBRSxTQUFUO0FBQW9CRixlQUFTLEVBQUUsR0FBL0I7QUFBb0NJLGdCQUFVLEVBQUU7QUFBaEQsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFTLFNBQUssRUFBRTtBQUFFSixlQUFTLEVBQUUsQ0FBQztBQUFkLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVLLGlCQUFXLEVBQUUsQ0FBZjtBQUFrQkYsY0FBUSxFQUFFLEVBQTVCO0FBQWdDQyxnQkFBVSxFQUFFO0FBQTVDLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0ssR0FITCxpQkFKRixDQWpCRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUJGLENBREYsQ0FERjtBQWtDRCxDQXBDRDs7TUFBTVAsUTs7QUFxQ05BLFFBQVEsQ0FBQ1MsZUFBVDtBQUFBLDhMQUEyQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDekJULG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ01TLGlCQUZtQixHQUVYQyx3REFBSSxDQUFDRixHQUFELENBRk87QUFBQSw2Q0FHbEI7QUFBRUMsbUJBQUssRUFBTEE7QUFBRixhQUhrQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZVgsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGZlZWRiYWNrLmpzLjQxZWUyMGE5NTgyYzcwZDhkM2ZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGbGV4Um93IH0gZnJvbSAnLi8uLi91aS9GbGV4JztcclxuaW1wb3J0IHsgRmlDaGV2cm9uTGVmdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tICcuLi91dGlscy9hdXRoJztcclxuZXhwb3J0IGNvbnN0IFNldEZpbHRlckljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxNzJkZWcsICM3OGZmZDYgMCUsICMwMDc5OTEgMTAwJSkgMCVcclxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNzA3MDcwMjk7XHJcbmA7XHJcbmNvbnN0IENoZWNrb3V0VGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjM2NiY2I0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuY29uc3QgQmFja2dyb3VuZEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvTGF5ZXIgMi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGluaGVyaXQ7XHJcbmA7XHJcbntcclxuICAvKiA8aW1nIHNyYz1cIi9zdGF0aWMvTGF5ZXIgMi9MYXllciAyLnBuZ1wiIC8+ICovXHJcbn1cclxuY29uc3QgRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2ZlZWQnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tncm91bmRJbWFnZT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwLCBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBjb2xvcjogJyM0MDQwNDAnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAyLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgVGhhbmsgWW91IGZvciB5b3VyIGZlZWRiYWNrIXsnICd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAnIzk5OTk5OScgfX0+XHJcbiAgICAgICAgICBZb3VyIGZlZWRiYWNrIGRpcmVjdGx5IHNlbmQgdG8gdGhlIG1hbmFnZXIuV2UgPGJyIC8+XHJcbiAgICAgICAgICBhc3N1cmUgeW91IHRvIGhlbHAgeW91IGFzIG11Y2ggYXMgd2UgY2FuLlxyXG4gICAgICAgIDwvaDU+XHJcblxyXG4gICAgICAgIDxwXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwdDIwXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzNDQkNCNCcsIG1hcmdpblRvcDogNDAwLCBmb250V2VpZ2h0OiA2MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RmxleFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6IC0xNTAgfX0+XHJcbiAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAsIGZvbnRTaXplOiAxNiwgZm9udFdlaWdodDogNjAwIH19XHJcbiAgICAgICAgICAgIC8+eycgJ31cclxuICAgICAgICAgICAgQkFDSyBUTyBIT01FXHJcbiAgICAgICAgICA8L0ZsZXhSb3c+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9CYWNrZ3JvdW5kSW1hZ2U+XHJcbiAgKTtcclxufTtcclxuRmVlZGJhY2suZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCd0aGlzIGlzIGN0eCcpO1xyXG4gIGNvbnN0IHRva2VuID0gYXV0aChjdHgpO1xyXG4gIHJldHVybiB7IHRva2VuIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9