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
  }, data[selected_menu][inside_menu[0]].map(function () {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CardLayout"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Img"], {
      src: "https://i.ibb.co/P9hrVw6/sxwe5iic-2x.png",
      alt: 'not found',
      sizes: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }), __jsx("div", {
      style: {
        padding: 5
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
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
        columnNumber: 17
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
        columnNumber: 19
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
        columnNumber: 21
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
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "/static/001-happy-1.png",
      alt: "Klarna logo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
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
        columnNumber: 19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVjaWFsTWVudUNhcmQvU3BlY2lhbE1lbnVDYXJkLmpzIl0sIm5hbWVzIjpbIlNwZWFjaWFsTWVudUNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJpbnNpZGVfbWVudSIsImRhdGEiLCJzZWxlY3RlZF9tZW51IiwibWFwIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYm9yZGVyIiwiZmxleCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQW1CLGlDQUFuQixFQURrQyxDQUVsQzs7QUFGa0MsTUFHMUJHLFdBSDBCLEdBR1dILEtBSFgsQ0FHMUJHLFdBSDBCO0FBQUEsTUFHYkMsSUFIYSxHQUdXSixLQUhYLENBR2JJLElBSGE7QUFBQSxNQUdQQyxhQUhPLEdBR1dMLEtBSFgsQ0FHUEssYUFITztBQUtsQ0osU0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQVosRUFBeUIsYUFBekI7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsSUFBSSxDQUFDQyxhQUFELENBQUosQ0FBb0JGLFdBQVcsQ0FBQyxDQUFELENBQS9CLEVBQW9DRyxHQUFwQyxDQUF3QyxZQUFNO0FBQzdDLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMENBQUQ7QUFDRSxTQUFHLEVBQUMsMENBRE47QUFFRSxTQUFHLEVBQUUsV0FGUDtBQUdFLFdBQUssRUFBQyxFQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxxQkFBYSxFQUFFO0FBQWxDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxtQkFESDtBQUVMSCxlQUFPLEVBQUUsT0FGSjtBQUdMSSxZQUFJLEVBQUUsTUFIRDtBQUlMQyxjQUFNLEVBQUU7QUFKSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxhQUFLLEVBQUUsQ0FERjtBQUVMRCxjQUFNLEVBQUUsQ0FGSDtBQUdMRSxrQkFBVSxFQUFFLHNDQUhQO0FBSUxDLG9CQUFZLEVBQUU7QUFKVCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixDQUZGLENBREYsRUFxQkU7QUFDRSxXQUFLLEVBQUU7QUFDTEMsaUJBQVMsRUFBRSxFQUROO0FBRUxSLGVBQU8sRUFBRSxNQUZKO0FBR0xTLGtCQUFVLEVBQUUsUUFIUDtBQUlMTCxjQUFNLEVBQUU7QUFKSCxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRTtBQUFLLFNBQUcsRUFBQyx5QkFBVDtBQUFtQyxTQUFHLEVBQUMsYUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0U7QUFBTyxXQUFLLEVBQUU7QUFBRU0sa0JBQVUsRUFBRSxFQUFkO0FBQWtCQyxnQkFBUSxFQUFFO0FBQTVCLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURixDQXJCRixDQU5GLENBREYsQ0FERjtBQThDRCxHQS9DQSxDQURILENBREY7QUFvREQsQ0ExREQ7O0tBQU1wQixnQjtBQTJEU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjk2YjAwOTcyY2UyZjRiZTZhZWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkTGF5b3V0LCBJbWcgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdjb21wb25lbnRzL2dyaWQvZ3JpZC1pdGVtL3N0eWxlcyc7XHJcbmltcG9ydCBSZXZpZXdQbGFjZU9yZGVyIGZyb20gJy4uL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmNvbnN0IFNwZWFjaWFsTWVudUNhcmQgPSAocHJvcHMpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9wcywgJ3RoaXMgaXMgcHJvcHMgc3BlY2lhbCBtZW51IGNhcmQnKTtcclxuICAvLyBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcy52YWw7XHJcbiAgY29uc3QgeyBpbnNpZGVfbWVudSwgZGF0YSwgc2VsZWN0ZWRfbWVudSB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnNvbGUubG9nKGluc2lkZV9tZW51LCAndGhpcyBpcyB2YWwnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2RhdGFbc2VsZWN0ZWRfbWVudV1baW5zaWRlX21lbnVbMF1dLm1hcCgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDYXJkTGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vUDloclZ3Ni9zeHdlNWlpYy0yeC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PXsnbm90IGZvdW5kJ31cclxuICAgICAgICAgICAgICAgIHNpemVzPVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogNSB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxUaXRsZSBzdHlsZT17eyBmb250U2l6ZTogMTMgfX0+e3RpdGxlfTwvVGl0bGU+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ3NvbGlkICMwMDc0MzYgMXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxLjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcgIzAwNzQzNiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy8wMDEtaGFwcHktMS5wbmdcIiBhbHQ9XCJLbGFybmEgbG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzbWFsbCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCwgZm9udFNpemU6IDEyIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDI0IHJldmlld3NcclxuICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NhcmRMYXlvdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFjaWFsTWVudUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=