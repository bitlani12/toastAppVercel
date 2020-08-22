webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/layout/header/MenuSelector.js":
/*!******************************************************!*\
  !*** ./src/components/layout/header/MenuSelector.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_topics_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/topics/styles */ "./src/components/topics/styles.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\components\\layout\\header\\MenuSelector.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var MenuSelector = function MenuSelector(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      state = _useState[0],
      setstate = _useState[1];

  var list = ['Special', 'Food Menu', 'Beverages', 'Desert', 'Food Menu', 'Beverages', 'Desert'];

  var typeToName = function typeToName(type) {
    // console.log(type, 'tihs is type');
    __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, "hii");

    switch (type) {
      case 'food':
        console.log('food ');
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 16
          }
        }, " Food Menu ");
      // break;

      case 'beverages':
        return 'Beverages';
      // break;

      case 'desserts':
        return 'Deserts';
      // break;

      case 'food':
        return 'Food Menu';
      // break;

      default:
        return;
      // break;
    }
  };

  var list2 = Object.keys(props.menus);
  console.log(list2, 'this is list2');
  return __jsx("div", {
    className: "jsx-1770098743",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      color: '#404040',
      fontWeight: 'bold',
      fontSize: 20,
      padding: 10
    },
    className: "jsx-1770098743",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Sacred Earth Cafe"), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'scroll',
      flexWrap: 'nowrap',
      width: 'auto'
    },
    className: "jsx-1770098743" + " " + "scrollbarxx",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, list.map(function (val, i) {
    return __jsx("div", {
      style: {
        margin: 10,
        width: 'auto',
        flex: 'none',
        fontSize: 14,
        fontWeight: 500
      },
      onClick: function onClick() {
        return setstate(i);
      },
      className: "jsx-1770098743" + " " + "".concat(state === i ? 'active' : 'unactive'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, typeToName(val));
  })), __jsx("div", {
    className: "jsx-1770098743" + " " + "borderDivide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1770098743",
    __self: _this
  }, ".borderDivide.jsx-1770098743{border:solid #00000014 2px;}.active.jsx-1770098743{color:#3cbcb4;}.unactive.jsx-1770098743{color:#656565;}.scrollbarxx.jsx-1770098743::-webkit-scrollbar{display:none;}.scrollbarxx.jsx-1770098743{-ms-overflow-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ga0IsQUFHc0MsQUFHYixBQUdBLEFBSUQsQUFLVyxhQUoxQixDQVBBLEFBR0EsVUFTQSxHQWZBIiwiZmlsZSI6IkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b3BpY3Mvc3R5bGVzJztcclxuY29uc3QgTWVudVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBsaXN0ID0gW1xyXG4gICAgJ1NwZWNpYWwnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gIF07XHJcbiAgY29uc3QgdHlwZVRvTmFtZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCAndGlocyBpcyB0eXBlJyk7XHJcbiAgICA8ZGl2PmhpaTwvZGl2PjtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdmb29kJzpcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9vZCAnKTtcclxuICAgICAgICByZXR1cm4gPGRpdj4gRm9vZCBNZW51IDwvZGl2PjtcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdiZXZlcmFnZXMnOlxyXG4gICAgICAgIHJldHVybiAnQmV2ZXJhZ2VzJztcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdkZXNzZXJ0cyc6XHJcbiAgICAgICAgcmV0dXJuICdEZXNlcnRzJztcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdmb29kJzpcclxuICAgICAgICByZXR1cm4gJ0Zvb2QgTWVudSc7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIC8vIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgbGlzdDIgPSBPYmplY3Qua2V5cyhwcm9wcy5tZW51cyk7XHJcbiAgY29uc29sZS5sb2cobGlzdDIsICd0aGlzIGlzIGxpc3QyJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICcjNDA0MDQwJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBTYWNyZWQgRWFydGggQ2FmZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsYmFyeHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xpc3QubWFwKCh2YWwsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcblxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdGF0ZSA9PT0gaSA/ICdhY3RpdmUnIDogJ3VuYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldHN0YXRlKGkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3R5cGVUb05hbWUodmFsKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJEaXZpZGVcIj48L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ib3JkZXJEaXZpZGUge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwMTQgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2NiY2I0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudW5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICAgICAuc2Nyb2xsYmFyeHg6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUgYW5kIEVkZ2UgKi9cclxuICAgICAgICAuc2Nyb2xsYmFyeHgge1xyXG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWVudVNlbGVjdG9yO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\freelance\\\\crystallize-nextjs-boilerplate\\\\src\\\\components\\\\layout\\\\header\\\\MenuSelector.js */"));
};

_s(MenuSelector, "PmHc17xavijw93/D2BFGD+8YPx8=");

_c = MenuSelector;
/* harmony default export */ __webpack_exports__["default"] = (MenuSelector);

var _c;

$RefreshReg$(_c, "MenuSelector");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL01lbnVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJNZW51U2VsZWN0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImxpc3QiLCJ0eXBlVG9OYW1lIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0MiIsIk9iamVjdCIsImtleXMiLCJtZW51cyIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dYIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsInZhbCIsImkiLCJtYXJnaW4iLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUN2QkMsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBRTlCLE1BQU1DLElBQUksR0FBRyxDQUNYLFNBRFcsRUFFWCxXQUZXLEVBR1gsV0FIVyxFQUlYLFFBSlcsRUFLWCxXQUxXLEVBTVgsV0FOVyxFQU9YLFFBUFcsQ0FBYjs7QUFTQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0I7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLFlBQVFBLElBQVI7QUFDRSxXQUFLLE1BQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUNGOztBQUVBLFdBQUssV0FBTDtBQUNFLGVBQU8sV0FBUDtBQUNGOztBQUVBLFdBQUssVUFBTDtBQUNFLGVBQU8sU0FBUDtBQUNGOztBQUVBLFdBQUssTUFBTDtBQUNFLGVBQU8sV0FBUDtBQUNGOztBQUVBO0FBQ0U7QUFDRjtBQXBCRjtBQXNCRCxHQXpCRDs7QUEwQkEsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVgsS0FBSyxDQUFDWSxLQUFsQixDQUFkO0FBQ0FMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CLGVBQW5CO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRTtBQUNMSSxXQUFLLEVBQUUsU0FERjtBQUVMQyxnQkFBVSxFQUFFLE1BRlA7QUFHTEMsY0FBUSxFQUFFLEVBSEw7QUFJTEMsYUFBTyxFQUFFO0FBSkosS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFXRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxtQkFBYSxFQUFFLEtBRlY7QUFHTEMsZUFBUyxFQUFFLFFBSE47QUFJTEMsY0FBUSxFQUFFLFFBSkw7QUFLTEMsV0FBSyxFQUFFO0FBTEYsS0FEVDtBQUFBLHdDQVFZLGFBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVHakIsSUFBSSxDQUFDa0IsR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ3BCLFdBQ0U7QUFDRSxXQUFLLEVBQUU7QUFDTEMsY0FBTSxFQUFFLEVBREg7QUFFTEosYUFBSyxFQUFFLE1BRkY7QUFHTEssWUFBSSxFQUFFLE1BSEQ7QUFJTFgsZ0JBQVEsRUFBRSxFQUpMO0FBTUxELGtCQUFVLEVBQUU7QUFOUCxPQURUO0FBVUUsYUFBTyxFQUFFO0FBQUEsZUFBTVgsUUFBUSxDQUFDcUIsQ0FBRCxDQUFkO0FBQUEsT0FWWDtBQUFBLG9EQVNnQnRCLEtBQUssS0FBS3NCLENBQVYsR0FBYyxRQUFkLEdBQXlCLFVBVHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FZR25CLFVBQVUsQ0FBQ2tCLEdBQUQsQ0FaYixDQURGO0FBZ0JELEdBakJBLENBVkgsQ0FYRixFQXdDRTtBQUFBLHdDQUFlLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRjtBQUFBO0FBQUE7QUFBQSxtMUlBREY7QUFnRUQsQ0F2R0Q7O0dBQU14QixZOztLQUFBQSxZO0FBd0dTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMGRhYmFjMmZmODk2YjdiOTU5OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2NvbXBvbmVudHMvdG9waWNzL3N0eWxlcyc7XHJcbmNvbnN0IE1lbnVTZWxlY3RvciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbGlzdCA9IFtcclxuICAgICdTcGVjaWFsJyxcclxuICAgICdGb29kIE1lbnUnLFxyXG4gICAgJ0JldmVyYWdlcycsXHJcbiAgICAnRGVzZXJ0JyxcclxuICAgICdGb29kIE1lbnUnLFxyXG4gICAgJ0JldmVyYWdlcycsXHJcbiAgICAnRGVzZXJ0JyxcclxuICBdO1xyXG4gIGNvbnN0IHR5cGVUb05hbWUgPSAodHlwZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZSwgJ3RpaHMgaXMgdHlwZScpO1xyXG4gICAgPGRpdj5oaWk8L2Rpdj47XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnZm9vZCc6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvb2QgJyk7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+IEZvb2QgTWVudSA8L2Rpdj47XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnYmV2ZXJhZ2VzJzpcclxuICAgICAgICByZXR1cm4gJ0JldmVyYWdlcyc7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZGVzc2VydHMnOlxyXG4gICAgICAgIHJldHVybiAnRGVzZXJ0cyc7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZm9vZCc6XHJcbiAgICAgICAgcmV0dXJuICdGb29kIE1lbnUnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGxpc3QyID0gT2JqZWN0LmtleXMocHJvcHMubWVudXMpO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QyLCAndGhpcyBpcyBsaXN0MicpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2FjcmVkIEVhcnRoIENhZmVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbGJhcnh4XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3RhdGUgPT09IGkgPyAnYWN0aXZlJyA6ICd1bmFjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzdGF0ZShpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlVG9OYW1lKHZhbCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyRGl2aWRlXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9yZGVyRGl2aWRlIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgIzAwMDAwMDE0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNjYmNiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4IHtcclxuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3RvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==