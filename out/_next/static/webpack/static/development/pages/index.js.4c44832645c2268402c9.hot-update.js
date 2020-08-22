webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/SpecialMenuCard/SpecialMenuCard.js":
/*!***********************************************************!*\
  !*** ./src/components/SpecialMenuCard/SpecialMenuCard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/SpecialMenuCard/style.js");
/* harmony import */ var components_grid_grid_item_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/grid/grid-item/styles */ "./src/components/grid/grid-item/styles.js");
/* harmony import */ var _ReviewPlaceOrder_ReviewPlaceOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ReviewPlaceOrder/ReviewPlaceOrder */ "./src/components/ReviewPlaceOrder/ReviewPlaceOrder.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\components\\SpecialMenuCard\\SpecialMenuCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SpeacialMenuCard = function SpeacialMenuCard(props) {
  var title = props.val.title;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
    alt: 'not found',
    sizes: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      border: 'solid #007436 1px',
      padding: '1.5px',
      flex: 'none',
      height: 'fit-content'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: 8,
      height: 8,
      background: ' #007436 0% 0% no-repeat padding-box',
      borderRadius: 100
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }))), __jsx("div", {
    style: {
      marginTop: 15,
      display: 'flex',
      alignItems: 'center',
      height: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/static/001-happy-1.png",
    alt: "Klarna logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx("small", {
    style: {
      marginLeft: 10,
      fontSize: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "24 reviews")))));
};

_c = SpeacialMenuCard;
/* harmony default export */ __webpack_exports__["default"] = (SpeacialMenuCard);

var _c;

$RefreshReg$(_c, "SpeacialMenuCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsInRpdGxlIiwidmFsIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFBQSxNQUMxQkMsS0FEMEIsR0FDaEJELEtBQUssQ0FBQ0UsR0FEVSxDQUMxQkQsS0FEMEI7QUFFbEMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUNFLE9BQUcsRUFBQywwQ0FETjtBQUVFLE9BQUcsRUFBRSxXQUZQO0FBR0UsU0FBSyxFQUFDLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRUUsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLG1CQURIO0FBRUxILGFBQU8sRUFBRSxPQUZKO0FBR0xJLFVBQUksRUFBRSxNQUhEO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxDQURGO0FBRUxELFlBQU0sRUFBRSxDQUZIO0FBR0xFLGdCQUFVLEVBQUUsc0NBSFA7QUFJTEMsa0JBQVksRUFBRTtBQUpULEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBRkYsQ0FERixFQXFCRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsRUFETjtBQUVMUixhQUFPLEVBQUUsTUFGSjtBQUdMUyxnQkFBVSxFQUFFLFFBSFA7QUFJTEwsWUFBTSxFQUFFO0FBSkgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBSyxPQUFHLEVBQUMseUJBQVQ7QUFBbUMsT0FBRyxFQUFDLGFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU8sU0FBSyxFQUFFO0FBQUVNLGdCQUFVLEVBQUUsRUFBZDtBQUFrQkMsY0FBUSxFQUFFO0FBQTVCLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixDQXJCRixDQU5GLENBREYsQ0FERjtBQTRDRCxDQTlDRDs7S0FBTWhCLGdCO0FBK0NTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNGM0NDgzMjY0NWMyMjY4NDAyYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmRMYXlvdXQsIEltZyB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ2NvbXBvbmVudHMvZ3JpZC9ncmlkLWl0ZW0vc3R5bGVzJztcclxuaW1wb3J0IFJldmlld1BsYWNlT3JkZXIgZnJvbSAnLi4vUmV2aWV3UGxhY2VPcmRlci9SZXZpZXdQbGFjZU9yZGVyJztcclxuY29uc3QgU3BlYWNpYWxNZW51Q2FyZCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdGl0bGUgfSA9IHByb3BzLnZhbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcmRMYXlvdXQ+XHJcbiAgICAgICAgPEltZ1xyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9QOWhyVnc2L3N4d2U1aWljLTJ4LnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9eydub3QgZm91bmQnfVxyXG4gICAgICAgICAgc2l6ZXM9XCJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICB7LyogPFRpdGxlIHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT57dGl0bGV9PC9UaXRsZT4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgIzAwNzQzNiAxcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzEuNXB4JyxcclxuICAgICAgICAgICAgICAgIGZsZXg6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDgsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyAjMDA3NDM2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNSxcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljLzAwMS1oYXBweS0xLnBuZ1wiIGFsdD1cIktsYXJuYSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBmb250U2l6ZTogMTIgfX0+MjQgcmV2aWV3czwvc21hbGw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3BlYWNpYWxNZW51Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==