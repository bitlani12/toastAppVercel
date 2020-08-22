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
  console.log(props, 'this is props special menu card'); // const { title } = props.val;

  var val = Object.keys(props.val);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, val.map(function () {
    return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
      alt: 'not found',
      sizes: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
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
        lineNumber: 22,
        columnNumber: 17
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
        lineNumber: 30,
        columnNumber: 19
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
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "/static/001-happy-1.png",
      alt: "Klarna logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), __jsx("small", {
      style: {
        marginLeft: 10,
        fontSize: 12
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, "24 reviews"))));
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLGlDQUFuQixFQURrQyxDQUVsQzs7QUFDQSxNQUFNRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxLQUFLLENBQUNHLEdBQWxCLENBQVo7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsR0FBRyxDQUFDRyxHQUFKLENBQVEsWUFBTTtBQUNiLFdBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwQ0FBRDtBQUNFLFNBQUcsRUFBQywwQ0FETjtBQUVFLFNBQUcsRUFBRSxXQUZQO0FBR0UsV0FBSyxFQUFDLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHFCQUFhLEVBQUU7QUFBbEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsY0FBTSxFQUFFLG1CQURIO0FBRUxILGVBQU8sRUFBRSxPQUZKO0FBR0xJLFlBQUksRUFBRSxNQUhEO0FBSUxDLGNBQU0sRUFBRTtBQUpILE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRSxDQURGO0FBRUxELGNBQU0sRUFBRSxDQUZIO0FBR0xFLGtCQUFVLEVBQUUsc0NBSFA7QUFJTEMsb0JBQVksRUFBRTtBQUpULE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBRkYsQ0FERixFQXFCRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxpQkFBUyxFQUFFLEVBRE47QUFFTFIsZUFBTyxFQUFFLE1BRko7QUFHTFMsa0JBQVUsRUFBRSxRQUhQO0FBSUxMLGNBQU0sRUFBRTtBQUpILE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQUssU0FBRyxFQUFDLHlCQUFUO0FBQW1DLFNBQUcsRUFBQyxhQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFTRTtBQUFPLFdBQUssRUFBRTtBQUFFTSxrQkFBVSxFQUFFLEVBQWQ7QUFBa0JDLGdCQUFRLEVBQUU7QUFBNUIsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLENBckJGLENBTkYsQ0FERjtBQTRDRCxHQTdDQSxDQURILENBREY7QUFrREQsQ0F0REQ7O0tBQU1wQixnQjtBQXVEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVmZWFlNGE2MzdmZTFiNDhkYzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkTGF5b3V0LCBJbWcgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2dyaWQvZ3JpZC1pdGVtL3N0eWxlcyc7XHJcbmltcG9ydCBSZXZpZXdQbGFjZU9yZGVyIGZyb20gJy4uL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmNvbnN0IFNwZWFjaWFsTWVudUNhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcywgJ3RoaXMgaXMgcHJvcHMgc3BlY2lhbCBtZW51IGNhcmQnKTtcclxuICAvLyBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcy52YWw7XHJcbiAgY29uc3QgdmFsID0gT2JqZWN0LmtleXMocHJvcHMudmFsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3ZhbC5tYXAoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2FyZExheW91dD5cclxuICAgICAgICAgICAgPEltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vUDloclZ3Ni9zeHdlNWlpYy0yeC5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD17J25vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxyXG4gICAgICAgICAgICAgICAgey8qIDxUaXRsZSBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+e3RpdGxlfTwvVGl0bGU+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkICMwMDc0MzYgMXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnICMwMDc0MzYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTUsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy8wMDEtaGFwcHktMS5wbmdcIiBhbHQ9XCJLbGFybmEgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgMjQgcmV2aWV3c1xyXG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NhcmRMYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVhY2lhbE1lbnVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9