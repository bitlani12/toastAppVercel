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
  props.grid.map(function () {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
      alt: 'not found',
      sizes: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("div", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
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
        columnNumber: 19
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
        columnNumber: 21
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
        columnNumber: 23
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
        columnNumber: 19
      }
    }, __jsx("img", {
      src: "/static/001-happy-1.png",
      alt: "Klarna logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
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
        columnNumber: 21
      }
    }, "24 reviews")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbnNpZGVfbWVudSIsImRhdGEiLCJzZWxlY3RlZF9tZW51IiwiZ3JpZCIsIm1hcCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImJvcmRlciIsImZsZXgiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixpQ0FBbkIsRUFEa0MsQ0FFbEM7O0FBRmtDLE1BRzFCRyxXQUgwQixHQUdXSCxLQUhYLENBRzFCRyxXQUgwQjtBQUFBLE1BR2JDLElBSGEsR0FHV0osS0FIWCxDQUdiSSxJQUhhO0FBQUEsTUFHUEMsYUFITyxHQUdXTCxLQUhYLENBR1BLLGFBSE87QUFLbENKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFaLEVBQXlCLGFBQXpCO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFDQUgsT0FBSyxDQUFDTSxJQUFOLENBQVdDLEdBQVgsQ0FBZSxZQUFNO0FBQ25CLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMENBQUQ7QUFDRSxTQUFHLEVBQUMsMENBRE47QUFFRSxTQUFHLEVBQUUsV0FGUDtBQUdFLFdBQUssRUFBQyxFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxxQkFBYSxFQUFFO0FBQWxDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxtQkFESDtBQUVMSCxlQUFPLEVBQUUsT0FGSjtBQUdMSSxZQUFJLEVBQUUsTUFIRDtBQUlMQyxjQUFNLEVBQUU7QUFKSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxhQUFLLEVBQUUsQ0FERjtBQUVMRCxjQUFNLEVBQUUsQ0FGSDtBQUdMRSxrQkFBVSxFQUFFLHNDQUhQO0FBSUxDLG9CQUFZLEVBQUU7QUFKVCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixDQUZGLENBREYsRUFxQkU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsaUJBQVMsRUFBRSxFQUROO0FBRUxSLGVBQU8sRUFBRSxNQUZKO0FBR0xTLGtCQUFVLEVBQUUsUUFIUDtBQUlMTCxjQUFNLEVBQUU7QUFKSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRTtBQUFLLFNBQUcsRUFBQyx5QkFBVDtBQUFtQyxTQUFHLEVBQUMsYUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFBTyxXQUFLLEVBQUU7QUFBRU0sa0JBQVUsRUFBRSxFQUFkO0FBQWtCQyxnQkFBUSxFQUFFO0FBQTVCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixDQXJCRixDQU5GLENBREYsQ0FERjtBQThDRCxHQS9DRCxDQUhKLENBREY7QUF1REQsQ0E3REQ7O0tBQU1yQixnQjtBQThEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY1OTQwNGY0ZDVhZGI5MTQwYTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkTGF5b3V0LCBJbWcgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2dyaWQvZ3JpZC1pdGVtL3N0eWxlcyc7XHJcbmltcG9ydCBSZXZpZXdQbGFjZU9yZGVyIGZyb20gJy4uL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ2NvbXBvbmVudHMvZ3JpZCc7XHJcbmNvbnN0IFNwZWFjaWFsTWVudUNhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcywgJ3RoaXMgaXMgcHJvcHMgc3BlY2lhbCBtZW51IGNhcmQnKTtcclxuICAvLyBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcy52YWw7XHJcbiAgY29uc3QgeyBpbnNpZGVfbWVudSwgZGF0YSwgc2VsZWN0ZWRfbWVudSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKGluc2lkZV9tZW51LCAndGhpcyBpcyB2YWwnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge1xyXG4gICAgICAgIC8vIGRhdGFbc2VsZWN0ZWRfbWVudV1baW5zaWRlX21lbnVbMF1dLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZ3JpZC5tYXAoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Q2FyZExheW91dD5cclxuICAgICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9QOWhyVnc2L3N4d2U1aWljLTJ4LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17J25vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgICAgICAgIHNpemVzPVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDUgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPFRpdGxlIHN0eWxlPXt7IGZvbnRTaXplOiAxMyB9fT57dGl0bGV9PC9UaXRsZT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnc29saWQgIzAwNzQzNiAxcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMS41cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnICMwMDc0MzYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljLzAwMS1oYXBweS0xLnBuZ1wiIGFsdD1cIktsYXJuYSBsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIGZvbnRTaXplOiAxMiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDI0IHJldmlld3NcclxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZExheW91dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFjaWFsTWVudUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=