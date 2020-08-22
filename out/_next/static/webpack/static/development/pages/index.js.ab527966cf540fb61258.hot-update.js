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

  var inside_menu = props.inside_menu,
      data = props.data,
      selected_menu = props.selected_menu;
  console.log(inside_menu, 'this is val');
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, data[selected_menu][inside_menu[1]].map(function () {
    return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
      alt: 'not found',
      sizes: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
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
        lineNumber: 22,
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
        lineNumber: 24,
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
        lineNumber: 32,
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
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "/static/001-happy-1.png",
      alt: "Klarna logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
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
        lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbnNpZGVfbWVudSIsImRhdGEiLCJzZWxlY3RlZF9tZW51IiwibWFwIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLGlDQUFuQixFQURrQyxDQUVsQzs7QUFGa0MsTUFHMUJHLFdBSDBCLEdBR1dILEtBSFgsQ0FHMUJHLFdBSDBCO0FBQUEsTUFHYkMsSUFIYSxHQUdXSixLQUhYLENBR2JJLElBSGE7QUFBQSxNQUdQQyxhQUhPLEdBR1dMLEtBSFgsQ0FHUEssYUFITztBQUtsQ0osU0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUFBeUIsYUFBekI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxDQUFDQyxhQUFELENBQUosQ0FBb0JGLFdBQVcsQ0FBQyxDQUFELENBQS9CLEVBQW9DRyxHQUFwQyxDQUF3QyxZQUFNO0FBQzdDLFdBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwQ0FBRDtBQUNFLFNBQUcsRUFBQywwQ0FETjtBQUVFLFNBQUcsRUFBRSxXQUZQO0FBR0UsV0FBSyxFQUFDLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLHFCQUFhLEVBQUU7QUFBbEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsY0FBTSxFQUFFLG1CQURIO0FBRUxILGVBQU8sRUFBRSxPQUZKO0FBR0xJLFlBQUksRUFBRSxNQUhEO0FBSUxDLGNBQU0sRUFBRTtBQUpILE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRSxDQURGO0FBRUxELGNBQU0sRUFBRSxDQUZIO0FBR0xFLGtCQUFVLEVBQUUsc0NBSFA7QUFJTEMsb0JBQVksRUFBRTtBQUpULE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLENBRkYsQ0FERixFQXFCRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxpQkFBUyxFQUFFLEVBRE47QUFFTFIsZUFBTyxFQUFFLE1BRko7QUFHTFMsa0JBQVUsRUFBRSxRQUhQO0FBSUxMLGNBQU0sRUFBRTtBQUpILE9BRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVFFO0FBQUssU0FBRyxFQUFDLHlCQUFUO0FBQW1DLFNBQUcsRUFBQyxhQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFTRTtBQUFPLFdBQUssRUFBRTtBQUFFTSxrQkFBVSxFQUFFLEVBQWQ7QUFBa0JDLGdCQUFRLEVBQUU7QUFBNUIsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLENBckJGLENBTkYsQ0FERjtBQTRDRCxHQTdDQSxDQURILENBREY7QUFrREQsQ0F4REQ7O0tBQU1wQixnQjtBQXlEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmFiNTI3OTY2Y2Y1NDBmYjYxMjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkTGF5b3V0LCBJbWcgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2dyaWQvZ3JpZC1pdGVtL3N0eWxlcyc7XHJcbmltcG9ydCBSZXZpZXdQbGFjZU9yZGVyIGZyb20gJy4uL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmNvbnN0IFNwZWFjaWFsTWVudUNhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcywgJ3RoaXMgaXMgcHJvcHMgc3BlY2lhbCBtZW51IGNhcmQnKTtcclxuICAvLyBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcy52YWw7XHJcbiAgY29uc3QgeyBpbnNpZGVfbWVudSwgZGF0YSwgc2VsZWN0ZWRfbWVudSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKGluc2lkZV9tZW51LCAndGhpcyBpcyB2YWwnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGFbc2VsZWN0ZWRfbWVudV1baW5zaWRlX21lbnVbMV1dLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxDYXJkTGF5b3V0PlxyXG4gICAgICAgICAgICA8SW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9QOWhyVnc2L3N4d2U1aWljLTJ4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PXsnbm90IGZvdW5kJ31cclxuICAgICAgICAgICAgICBzaXplcz1cIlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPFRpdGxlIHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT57dGl0bGV9PC9UaXRsZT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgIzAwNzQzNiAxcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxLjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcgIzAwNzQzNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNSxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljLzAwMS1oYXBweS0xLnBuZ1wiIGFsdD1cIktsYXJuYSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCwgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAyNCByZXZpZXdzXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2FyZExheW91dD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFjaWFsTWVudUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=