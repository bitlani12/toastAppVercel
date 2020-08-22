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
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/grid */ "./src/components/grid/index.js");
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
      lineNumber: 13,
      columnNumber: 5
    }
  }, // data[selected_menu][inside_menu[0]].map(() => {
  // props.grid.map(() => {
  //   return (
  __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
    alt: 'not found',
    sizes: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 26,
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
      lineNumber: 28,
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
      lineNumber: 36,
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
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/001-happy-1.png",
    alt: "Klarna logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 17
    }
  }, "24 reviews"))))) //   );
  // })
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbnNpZGVfbWVudSIsImRhdGEiLCJzZWxlY3RlZF9tZW51IiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLGlDQUFuQixFQURrQyxDQUVsQzs7QUFGa0MsTUFHMUJHLFdBSDBCLEdBR1dILEtBSFgsQ0FHMUJHLFdBSDBCO0FBQUEsTUFHYkMsSUFIYSxHQUdXSixLQUhYLENBR2JJLElBSGE7QUFBQSxNQUdQQyxhQUhPLEdBR1dMLEtBSFgsQ0FHUEssYUFITztBQUtsQ0osU0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUFBeUIsYUFBekI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUNFLE9BQUcsRUFBQywwQ0FETjtBQUVFLE9BQUcsRUFBRSxXQUZQO0FBR0UsU0FBSyxFQUFDLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRUcsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLG1CQURIO0FBRUxILGFBQU8sRUFBRSxPQUZKO0FBR0xJLFVBQUksRUFBRSxNQUhEO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxDQURGO0FBRUxELFlBQU0sRUFBRSxDQUZIO0FBR0xFLGdCQUFVLEVBQUUsc0NBSFA7QUFJTEMsa0JBQVksRUFBRTtBQUpULEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBRkYsQ0FERixFQXFCRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsRUFETjtBQUVMUixhQUFPLEVBQUUsTUFGSjtBQUdMUyxnQkFBVSxFQUFFLFFBSFA7QUFJTEwsWUFBTSxFQUFFO0FBSkgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBSyxPQUFHLEVBQUMseUJBQVQ7QUFBbUMsT0FBRyxFQUFDLGFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU8sU0FBSyxFQUFFO0FBQUVNLGdCQUFVLEVBQUUsRUFBZDtBQUFrQkMsY0FBUSxFQUFFO0FBQTVCLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixDQXJCRixDQU5GLENBREYsQ0FMSixDQWlESTtBQUNBO0FBbERKLEdBREY7QUF1REQsQ0E3REQ7O0tBQU1uQixnQjtBQThEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjVmMDkxMzdhZWJmNDg1ZDYzN2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkTGF5b3V0LCBJbWcgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2dyaWQvZ3JpZC1pdGVtL3N0eWxlcyc7XHJcbmltcG9ydCBSZXZpZXdQbGFjZU9yZGVyIGZyb20gJy4uL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCc7XHJcbmNvbnN0IFNwZWFjaWFsTWVudUNhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcywgJ3RoaXMgaXMgcHJvcHMgc3BlY2lhbCBtZW51IGNhcmQnKTtcclxuICAvLyBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcy52YWw7XHJcbiAgY29uc3QgeyBpbnNpZGVfbWVudSwgZGF0YSwgc2VsZWN0ZWRfbWVudSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKGluc2lkZV9tZW51LCAndGhpcyBpcyB2YWwnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1xyXG4gICAgICAgIC8vIGRhdGFbc2VsZWN0ZWRfbWVudV1baW5zaWRlX21lbnVbMF1dLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgLy8gcHJvcHMuZ3JpZC5tYXAoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENhcmRMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL1A5aHJWdzYvc3h3ZTVpaWMtMngucG5nXCJcclxuICAgICAgICAgICAgICBhbHQ9eydub3QgZm91bmQnfVxyXG4gICAgICAgICAgICAgIHNpemVzPVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiA1IH19PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGl0bGUgc3R5bGU9e3sgZm9udFNpemU6IDEzIH19Pnt0aXRsZX08L1RpdGxlPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdzb2xpZCAjMDA3NDM2IDFweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEuNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyAjMDA3NDM2IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDE1LFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvMDAxLWhhcHB5LTEucG5nXCIgYWx0PVwiS2xhcm5hIGxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBmb250U2l6ZTogMTIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDI0IHJldmlld3NcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJkTGF5b3V0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTcGVhY2lhbE1lbnVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9