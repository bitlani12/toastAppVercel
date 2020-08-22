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
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 12
      }
    }, "hii"); // switch (type) {
    //   case 'food':
    //     console.log('food ');
    //     return <div> Food Menu </div>;
    //     break;
    //   case 'beverages':
    //     return 'Beverages';
    //     break;
    //   case 'desserts':
    //     return 'Deserts';
    //     break;
    //   case 'food':
    //     return 'Food Menu';
    //     break;
    //   default:
    //     break;
    // }
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
  }, ".borderDivide.jsx-1770098743{border:solid #00000014 2px;}.active.jsx-1770098743{color:#3cbcb4;}.unactive.jsx-1770098743{color:#656565;}.scrollbarxx.jsx-1770098743::-webkit-scrollbar{display:none;}.scrollbarxx.jsx-1770098743{-ms-overflow-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGa0IsQUFHc0MsQUFHYixBQUdBLEFBSUQsQUFLVyxhQUoxQixDQVBBLEFBR0EsVUFTQSxHQWZBIiwiZmlsZSI6IkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b3BpY3Mvc3R5bGVzJztcclxuY29uc3QgTWVudVNlbGVjdG9yID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBsaXN0ID0gW1xyXG4gICAgJ1NwZWNpYWwnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gICAgJ0Zvb2QgTWVudScsXHJcbiAgICAnQmV2ZXJhZ2VzJyxcclxuICAgICdEZXNlcnQnLFxyXG4gIF07XHJcbiAgY29uc3QgdHlwZVRvTmFtZSA9ICh0eXBlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCAndGlocyBpcyB0eXBlJyk7XHJcbiAgICByZXR1cm4gPGRpdj5oaWk8L2Rpdj47XHJcbiAgICAvLyBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIC8vICAgY2FzZSAnZm9vZCc6XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2Zvb2QgJyk7XHJcbiAgICAvLyAgICAgcmV0dXJuIDxkaXY+IEZvb2QgTWVudSA8L2Rpdj47XHJcbiAgICAvLyAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gICBjYXNlICdiZXZlcmFnZXMnOlxyXG4gICAgLy8gICAgIHJldHVybiAnQmV2ZXJhZ2VzJztcclxuICAgIC8vICAgICBicmVhaztcclxuXHJcbiAgICAvLyAgIGNhc2UgJ2Rlc3NlcnRzJzpcclxuICAgIC8vICAgICByZXR1cm4gJ0Rlc2VydHMnO1xyXG4gICAgLy8gICAgIGJyZWFrO1xyXG5cclxuICAgIC8vICAgY2FzZSAnZm9vZCc6XHJcbiAgICAvLyAgICAgcmV0dXJuICdGb29kIE1lbnUnO1xyXG4gICAgLy8gICAgIGJyZWFrO1xyXG5cclxuICAgIC8vICAgZGVmYXVsdDpcclxuICAgIC8vICAgICBicmVhaztcclxuICAgIC8vIH1cclxuICB9O1xyXG4gIGNvbnN0IGxpc3QyID0gT2JqZWN0LmtleXMocHJvcHMubWVudXMpO1xyXG4gIGNvbnNvbGUubG9nKGxpc3QyLCAndGhpcyBpcyBsaXN0MicpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGNvbG9yOiAnIzQwNDA0MCcsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgICBwYWRkaW5nOiAxMCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgU2FjcmVkIEVhcnRoIENhZmVcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgICBvdmVyZmxvd1g6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgZmxleFdyYXA6ICdub3dyYXAnLFxyXG4gICAgICAgICAgd2lkdGg6ICdhdXRvJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNjcm9sbGJhcnh4XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0Lm1hcCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3RhdGUgPT09IGkgPyAnYWN0aXZlJyA6ICd1bmFjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzdGF0ZShpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlVG9OYW1lKHZhbCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyRGl2aWRlXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9yZGVyRGl2aWRlIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgIzAwMDAwMDE0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNjYmNiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4IHtcclxuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3RvcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\freelance\\\\crystallize-nextjs-boilerplate\\\\src\\\\components\\\\layout\\\\header\\\\MenuSelector.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL01lbnVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJNZW51U2VsZWN0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImxpc3QiLCJ0eXBlVG9OYW1lIiwidHlwZSIsImxpc3QyIiwiT2JqZWN0Iiwia2V5cyIsIm1lbnVzIiwiY29uc29sZSIsImxvZyIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dYIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsInZhbCIsImkiLCJtYXJnaW4iLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBQyxDQUFELENBREo7QUFBQSxNQUN2QkMsS0FEdUI7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBRTlCLE1BQU1DLElBQUksR0FBRyxDQUNYLFNBRFcsRUFFWCxXQUZXLEVBR1gsV0FIVyxFQUlYLFFBSlcsRUFLWCxXQUxXLEVBTVgsV0FOVyxFQU9YLFFBUFcsQ0FBYjs7QUFTQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDM0I7QUFDQSxXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUCxDQUYyQixDQUczQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0QsR0F4QkQ7O0FBeUJBLE1BQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULEtBQUssQ0FBQ1UsS0FBbEIsQ0FBZDtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWixFQUFtQixlQUFuQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTE0sV0FBSyxFQUFFLFNBREY7QUFFTEMsZ0JBQVUsRUFBRSxNQUZQO0FBR0xDLGNBQVEsRUFBRSxFQUhMO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBV0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxLQUZWO0FBR0xDLGVBQVMsRUFBRSxRQUhOO0FBSUxDLGNBQVEsRUFBRSxRQUpMO0FBS0xDLFdBQUssRUFBRTtBQUxGLEtBRFQ7QUFBQSx3Q0FRWSxhQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR2pCLElBQUksQ0FBQ2tCLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUNwQixXQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGNBQU0sRUFBRSxFQURIO0FBRUxKLGFBQUssRUFBRSxNQUZGO0FBR0xLLFlBQUksRUFBRSxNQUhEO0FBSUxYLGdCQUFRLEVBQUUsRUFKTDtBQU1MRCxrQkFBVSxFQUFFO0FBTlAsT0FEVDtBQVVFLGFBQU8sRUFBRTtBQUFBLGVBQU1YLFFBQVEsQ0FBQ3FCLENBQUQsQ0FBZDtBQUFBLE9BVlg7QUFBQSxvREFTZ0J0QixLQUFLLEtBQUtzQixDQUFWLEdBQWMsUUFBZCxHQUF5QixVQVR6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BWUduQixVQUFVLENBQUNrQixHQUFELENBWmIsQ0FERjtBQWdCRCxHQWpCQSxDQVZILENBWEYsRUF3Q0U7QUFBQSx3Q0FBZSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q0Y7QUFBQTtBQUFBO0FBQUEsKzNJQURGO0FBZ0VELENBdEdEOztHQUFNeEIsWTs7S0FBQUEsWTtBQXVHU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmZiMjhmZWE1NTRhZTIzYWU3OGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICdjb21wb25lbnRzL3RvcGljcy9zdHlsZXMnO1xyXG5jb25zdCBNZW51U2VsZWN0b3IgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpc3QgPSBbXHJcbiAgICAnU3BlY2lhbCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgXTtcclxuICBjb25zdCB0eXBlVG9OYW1lID0gKHR5cGUpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsICd0aWhzIGlzIHR5cGUnKTtcclxuICAgIHJldHVybiA8ZGl2PmhpaTwvZGl2PjtcclxuICAgIC8vIHN3aXRjaCAodHlwZSkge1xyXG4gICAgLy8gICBjYXNlICdmb29kJzpcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnZm9vZCAnKTtcclxuICAgIC8vICAgICByZXR1cm4gPGRpdj4gRm9vZCBNZW51IDwvZGl2PjtcclxuICAgIC8vICAgICBicmVhaztcclxuXHJcbiAgICAvLyAgIGNhc2UgJ2JldmVyYWdlcyc6XHJcbiAgICAvLyAgICAgcmV0dXJuICdCZXZlcmFnZXMnO1xyXG4gICAgLy8gICAgIGJyZWFrO1xyXG5cclxuICAgIC8vICAgY2FzZSAnZGVzc2VydHMnOlxyXG4gICAgLy8gICAgIHJldHVybiAnRGVzZXJ0cyc7XHJcbiAgICAvLyAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gICBjYXNlICdmb29kJzpcclxuICAgIC8vICAgICByZXR1cm4gJ0Zvb2QgTWVudSc7XHJcbiAgICAvLyAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gICBkZWZhdWx0OlxyXG4gICAgLy8gICAgIGJyZWFrO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcbiAgY29uc3QgbGlzdDIgPSBPYmplY3Qua2V5cyhwcm9wcy5tZW51cyk7XHJcbiAgY29uc29sZS5sb2cobGlzdDIsICd0aGlzIGlzIGxpc3QyJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICcjNDA0MDQwJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBTYWNyZWQgRWFydGggQ2FmZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsYmFyeHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xpc3QubWFwKCh2YWwsIGkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBmbGV4OiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcblxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdGF0ZSA9PT0gaSA/ICdhY3RpdmUnIDogJ3VuYWN0aXZlJ31gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldHN0YXRlKGkpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3R5cGVUb05hbWUodmFsKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJEaXZpZGVcIj48L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5ib3JkZXJEaXZpZGUge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAjMDAwMDAwMTQgMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2NiY2I0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudW5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICM2NTY1NjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cclxuICAgICAgICAuc2Nyb2xsYmFyeHg6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUgYW5kIEVkZ2UgKi9cclxuICAgICAgICAuc2Nyb2xsYmFyeHgge1xyXG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTWVudVNlbGVjdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9