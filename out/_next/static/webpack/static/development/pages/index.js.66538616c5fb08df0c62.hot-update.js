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
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
    alt: 'not found',
    sizes: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    style: {
      padding: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
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
      lineNumber: 25,
      columnNumber: 15
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
      lineNumber: 33,
      columnNumber: 17
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/static/001-happy-1.png",
    alt: "Klarna logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx("small", {
    style: {
      marginLeft: 10,
      fontSize: 12
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "24 reviews"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbnNpZGVfbWVudSIsImRhdGEiLCJzZWxlY3RlZF9tZW51IiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLGlDQUFuQixFQURrQyxDQUVsQzs7QUFGa0MsTUFHMUJHLFdBSDBCLEdBR1dILEtBSFgsQ0FHMUJHLFdBSDBCO0FBQUEsTUFHYkMsSUFIYSxHQUdXSixLQUhYLENBR2JJLElBSGE7QUFBQSxNQUdQQyxhQUhPLEdBR1dMLEtBSFgsQ0FHUEssYUFITztBQUtsQ0osU0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUFBeUIsYUFBekI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUNFLE9BQUcsRUFBQywwQ0FETjtBQUVFLE9BQUcsRUFBRSxXQUZQO0FBR0UsU0FBSyxFQUFDLEVBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFBSyxTQUFLLEVBQUU7QUFBRUcsYUFBTyxFQUFFO0FBQVgsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLE1BQVg7QUFBbUJDLG1CQUFhLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFDRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLG1CQURIO0FBRUxILGFBQU8sRUFBRSxPQUZKO0FBR0xJLFVBQUksRUFBRSxNQUhEO0FBSUxDLFlBQU0sRUFBRTtBQUpILEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRSxDQURGO0FBRUxELFlBQU0sRUFBRSxDQUZIO0FBR0xFLGdCQUFVLEVBQUUsc0NBSFA7QUFJTEMsa0JBQVksRUFBRTtBQUpULEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBRkYsQ0FERixFQXFCRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsRUFETjtBQUVMUixhQUFPLEVBQUUsTUFGSjtBQUdMUyxnQkFBVSxFQUFFLFFBSFA7QUFJTEwsWUFBTSxFQUFFO0FBSkgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBSyxPQUFHLEVBQUMseUJBQVQ7QUFBbUMsT0FBRyxFQUFDLGFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQU8sU0FBSyxFQUFFO0FBQUVNLGdCQUFVLEVBQUUsRUFBZDtBQUFrQkMsY0FBUSxFQUFFO0FBQTVCLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixDQXJCRixDQU5GLENBREYsQ0FIRixDQURGO0FBbURELENBekREOztLQUFNbkIsZ0I7QUEwRFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NjUzODYxNmM1ZmIwOGRmMGM2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZExheW91dCwgSW1nIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnY29tcG9uZW50cy9ncmlkL2dyaWQtaXRlbS9zdHlsZXMnO1xyXG5pbXBvcnQgUmV2aWV3UGxhY2VPcmRlciBmcm9tICcuLi9SZXZpZXdQbGFjZU9yZGVyL1Jldmlld1BsYWNlT3JkZXInO1xyXG5jb25zdCBTcGVhY2lhbE1lbnVDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocHJvcHMsICd0aGlzIGlzIHByb3BzIHNwZWNpYWwgbWVudSBjYXJkJyk7XHJcbiAgLy8gY29uc3QgeyB0aXRsZSB9ID0gcHJvcHMudmFsO1xyXG4gIGNvbnN0IHsgaW5zaWRlX21lbnUsIGRhdGEsIHNlbGVjdGVkX21lbnUgfSA9IHByb3BzO1xyXG5cclxuICBjb25zb2xlLmxvZyhpbnNpZGVfbWVudSwgJ3RoaXMgaXMgdmFsJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiB7ZGF0YVtzZWxlY3RlZF9tZW51XVtpbnNpZGVfbWVudVswXV0ubWFwKCgpID0+IHsgKi99XHJcbiAgICAgIHsvKiByZXR1cm4gKCAqL31cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2FyZExheW91dD5cclxuICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9QOWhyVnc2L3N4d2U1aWljLTJ4LnBuZ1wiXHJcbiAgICAgICAgICAgIGFsdD17J25vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgIHNpemVzPVwiXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICB7LyogPFRpdGxlIHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT57dGl0bGV9PC9UaXRsZT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgIzAwNzQzNiAxcHgnLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41cHgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnICMwMDc0MzYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljLzAwMS1oYXBweS0xLnBuZ1wiIGFsdD1cIktsYXJuYSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIGZvbnRTaXplOiAxMiB9fT4yNCByZXZpZXdzPC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NhcmRMYXlvdXQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogKTtcclxuICAgICAgfSAqL31cclxuICAgICAgey8qICl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU3BlYWNpYWxNZW51Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==