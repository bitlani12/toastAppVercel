webpackHotUpdate("static\\development\\pages\\qr_scanner.js",{

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
    switch (type) {
      case 'food':
        console.log('food ');
        return __jsx("div", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
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
      lineNumber: 42,
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
      lineNumber: 43,
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
      lineNumber: 53,
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
        lineNumber: 65,
        columnNumber: 13
      }
    }, typeToName(val));
  })), __jsx("div", {
    className: "jsx-1770098743" + " " + "borderDivide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1770098743",
    __self: _this
  }, ".borderDivide.jsx-1770098743{border:solid #00000014 2px;}.active.jsx-1770098743{color:#3cbcb4;}.unactive.jsx-1770098743{color:#656565;}.scrollbarxx.jsx-1770098743::-webkit-scrollbar{display:none;}.scrollbarxx.jsx-1770098743{-ms-overflow-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGa0IsQUFHc0MsQUFHYixBQUdBLEFBSUQsQUFLVyxhQUoxQixDQVBBLEFBR0EsVUFTQSxHQWZBIiwiZmlsZSI6IkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b3BpY3Mvc3R5bGVzJztcclxuY29uc3QgTWVudVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBsaXN0ID0gW1xyXG4gICAgJ1NwZWNpYWwnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gIF07XHJcbiAgY29uc3QgdHlwZVRvTmFtZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCAndGlocyBpcyB0eXBlJyk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSAnZm9vZCc6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvb2QgJyk7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+IEZvb2QgTWVudSA8L2Rpdj47XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnYmV2ZXJhZ2VzJzpcclxuICAgICAgICByZXR1cm4gJ0JldmVyYWdlcyc7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZGVzc2VydHMnOlxyXG4gICAgICAgIHJldHVybiAnRGVzZXJ0cyc7XHJcbiAgICAgIC8vIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZm9vZCc6XHJcbiAgICAgICAgcmV0dXJuICdGb29kIE1lbnUnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGxpc3QyID0gT2JqZWN0LmtleXMocHJvcHMubWVudXMpO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QyLCAndGhpcyBpcyBsaXN0MicpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2FjcmVkIEVhcnRoIENhZmVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbGJhcnh4XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3RhdGUgPT09IGkgPyAnYWN0aXZlJyA6ICd1bmFjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzdGF0ZShpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlVG9OYW1lKHZhbCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyRGl2aWRlXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9yZGVyRGl2aWRlIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgIzAwMDAwMDE0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNjYmNiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4IHtcclxuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3RvcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\freelance\\\\crystallize-nextjs-boilerplate\\\\src\\\\components\\\\layout\\\\header\\\\MenuSelector.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL01lbnVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJNZW51U2VsZWN0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImxpc3QiLCJ0eXBlVG9OYW1lIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0MiIsIk9iamVjdCIsImtleXMiLCJtZW51cyIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dYIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsInZhbCIsImkiLCJtYXJnaW4iLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUN2QkMsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBRTlCLE1BQU1DLElBQUksR0FBRyxDQUNYLFNBRFcsRUFFWCxXQUZXLEVBR1gsV0FIVyxFQUlYLFFBSlcsRUFLWCxXQUxXLEVBTVgsV0FOVyxFQU9YLFFBUFcsQ0FBYjs7QUFTQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0I7QUFDQSxZQUFRQSxJQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0VDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxlQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFDRjs7QUFFQSxXQUFLLFdBQUw7QUFDRSxlQUFPLFdBQVA7QUFDRjs7QUFFQSxXQUFLLFVBQUw7QUFDRSxlQUFPLFNBQVA7QUFDRjs7QUFFQSxXQUFLLE1BQUw7QUFDRSxlQUFPLFdBQVA7QUFDRjs7QUFFQTtBQUNFO0FBQ0Y7QUFwQkY7QUFzQkQsR0F4QkQ7O0FBeUJBLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlYLEtBQUssQ0FBQ1ksS0FBbEIsQ0FBZDtBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixFQUFtQixlQUFuQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEksV0FBSyxFQUFFLFNBREY7QUFFTEMsZ0JBQVUsRUFBRSxNQUZQO0FBR0xDLGNBQVEsRUFBRSxFQUhMO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBV0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxLQUZWO0FBR0xDLGVBQVMsRUFBRSxRQUhOO0FBSUxDLGNBQVEsRUFBRSxRQUpMO0FBS0xDLFdBQUssRUFBRTtBQUxGLEtBRFQ7QUFBQSx3Q0FRWSxhQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR2pCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUNwQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxFQURIO0FBRUxKLGFBQUssRUFBRSxNQUZGO0FBR0xLLFlBQUksRUFBRSxNQUhEO0FBSUxYLGdCQUFRLEVBQUUsRUFKTDtBQU1MRCxrQkFBVSxFQUFFO0FBTlAsT0FEVDtBQVVFLGFBQU8sRUFBRTtBQUFBLGVBQU1YLFFBQVEsQ0FBQ3FCLENBQUQsQ0FBZDtBQUFBLE9BVlg7QUFBQSxvREFTZ0J0QixLQUFLLEtBQUtzQixDQUFWLEdBQWMsUUFBZCxHQUF5QixVQVR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUduQixVQUFVLENBQUNrQixHQUFELENBWmIsQ0FERjtBQWdCRCxHQWpCQSxDQVZILENBWEYsRUF3Q0U7QUFBQSx3Q0FBZSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q0Y7QUFBQTtBQUFBO0FBQUEsbXpJQURGO0FBZ0VELENBdEdEOztHQUFNeEIsWTs7S0FBQUEsWTtBQXVHU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHFyX3NjYW5uZXIuanMuYzMxNGUzZjhlZjhjZjdhOTA4MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJ2NvbXBvbmVudHMvdG9waWNzL3N0eWxlcyc7XHJcbmNvbnN0IE1lbnVTZWxlY3RvciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0c3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbGlzdCA9IFtcclxuICAgICdTcGVjaWFsJyxcclxuICAgICdGb29kIE1lbnUnLFxyXG4gICAgJ0JldmVyYWdlcycsXHJcbiAgICAnRGVzZXJ0JyxcclxuICAgICdGb29kIE1lbnUnLFxyXG4gICAgJ0JldmVyYWdlcycsXHJcbiAgICAnRGVzZXJ0JyxcclxuICBdO1xyXG4gIGNvbnN0IHR5cGVUb05hbWUgPSAodHlwZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codHlwZSwgJ3RpaHMgaXMgdHlwZScpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2Zvb2QnOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb29kICcpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2PiBGb29kIE1lbnUgPC9kaXY+O1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2JldmVyYWdlcyc6XHJcbiAgICAgICAgcmV0dXJuICdCZXZlcmFnZXMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Rlc3NlcnRzJzpcclxuICAgICAgICByZXR1cm4gJ0Rlc2VydHMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Zvb2QnOlxyXG4gICAgICAgIHJldHVybiAnRm9vZCBNZW51JztcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgLy8gYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBsaXN0MiA9IE9iamVjdC5rZXlzKHByb3BzLm1lbnVzKTtcclxuICBjb25zb2xlLmxvZyhsaXN0MiwgJ3RoaXMgaXMgbGlzdDInKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBjb2xvcjogJyM0MDQwNDAnLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgcGFkZGluZzogMTAsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNhY3JlZCBFYXJ0aCBDYWZlXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcclxuICAgICAgICAgIGZsZXhXcmFwOiAnbm93cmFwJyxcclxuICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGxiYXJ4eFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bGlzdC5tYXAoKHZhbCwgaSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIGZsZXg6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0YXRlID09PSBpID8gJ2FjdGl2ZScgOiAndW5hY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0c3RhdGUoaSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dHlwZVRvTmFtZSh2YWwpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlckRpdmlkZVwiPjwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJvcmRlckRpdmlkZSB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkICMwMDAwMDAxNCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51bmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzY1NjU2NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgICAgIC5zY3JvbGxiYXJ4eDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSBhbmQgRWRnZSAqL1xyXG4gICAgICAgIC5zY3JvbGxiYXJ4eCB7XHJcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNZW51U2VsZWN0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=