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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
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

  function typeToName(type) {
    console.log(type, 'tihs is type');

    switch (type) {
      case 'food':
        console.log('food');
        return __jsx("div", {
          __self: this,
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
        return type;
      // break;
    }
  }

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
  }, list2.map(function (val, i) {
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
  }, ".borderDivide.jsx-1770098743{border:solid #00000014 2px;}.active.jsx-1770098743{color:#3cbcb4;}.unactive.jsx-1770098743{color:#656565;}.scrollbarxx.jsx-1770098743::-webkit-scrollbar{display:none;}.scrollbarxx.jsx-1770098743{-ms-overflow-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ga0IsQUFHc0MsQUFHYixBQUdBLEFBSUQsQUFLVyxhQUoxQixDQVBBLEFBR0EsVUFTQSxHQWZBIiwiZmlsZSI6IkM6XFxmcmVlbGFuY2VcXGNyeXN0YWxsaXplLW5leHRqcy1ib2lsZXJwbGF0ZVxcc3JjXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcTWVudVNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b3BpY3Mvc3R5bGVzJztcclxuaW1wb3J0IHsgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5jb25zdCBNZW51U2VsZWN0b3IgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpc3QgPSBbXHJcbiAgICAnU3BlY2lhbCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgXTtcclxuICBmdW5jdGlvbiB0eXBlVG9OYW1lKHR5cGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGUsICd0aWhzIGlzIHR5cGUnKTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdmb29kJzpcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9vZCcpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2PiBGb29kIE1lbnUgPC9kaXY+O1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2JldmVyYWdlcyc6XHJcbiAgICAgICAgcmV0dXJuICdCZXZlcmFnZXMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Rlc3NlcnRzJzpcclxuICAgICAgICByZXR1cm4gJ0Rlc2VydHMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Zvb2QnOlxyXG4gICAgICAgIHJldHVybiAnRm9vZCBNZW51JztcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgbGlzdDIgPSBPYmplY3Qua2V5cyhwcm9wcy5tZW51cyk7XHJcbiAgY29uc29sZS5sb2cobGlzdDIsICd0aGlzIGlzIGxpc3QyJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICcjNDA0MDQwJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBTYWNyZWQgRWFydGggQ2FmZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsYmFyeHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xpc3QyLm1hcCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3RhdGUgPT09IGkgPyAnYWN0aXZlJyA6ICd1bmFjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzdGF0ZShpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlVG9OYW1lKHZhbCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyRGl2aWRlXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9yZGVyRGl2aWRlIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgIzAwMDAwMDE0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNjYmNiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4IHtcclxuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3RvcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\freelance\\\\crystallize-nextjs-boilerplate\\\\src\\\\components\\\\layout\\\\header\\\\MenuSelector.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL01lbnVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJNZW51U2VsZWN0b3IiLCJwcm9wcyIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRzdGF0ZSIsImxpc3QiLCJ0eXBlVG9OYW1lIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0MiIsIk9iamVjdCIsImtleXMiLCJtZW51cyIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwib3ZlcmZsb3dYIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsInZhbCIsImkiLCJtYXJnaW4iLCJmbGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsQ0FBRCxDQURKO0FBQUEsTUFDdkJDLEtBRHVCO0FBQUEsTUFDaEJDLFFBRGdCOztBQUU5QixNQUFNQyxJQUFJLEdBQUcsQ0FDWCxTQURXLEVBRVgsV0FGVyxFQUdYLFdBSFcsRUFJWCxRQUpXLEVBS1gsV0FMVyxFQU1YLFdBTlcsRUFPWCxRQVBXLENBQWI7O0FBU0EsV0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLGNBQWxCOztBQUNBLFlBQVFBLElBQVI7QUFDRSxXQUFLLE1BQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBUDtBQUNGOztBQUVBLFdBQUssV0FBTDtBQUNFLGVBQU8sV0FBUDtBQUNGOztBQUVBLFdBQUssVUFBTDtBQUNFLGVBQU8sU0FBUDtBQUNGOztBQUVBLFdBQUssTUFBTDtBQUNFLGVBQU8sV0FBUDtBQUNGOztBQUVBO0FBQ0UsZUFBT0YsSUFBUDtBQUNGO0FBcEJGO0FBc0JEOztBQUNELE1BQU1HLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlYLEtBQUssQ0FBQ1ksS0FBbEIsQ0FBZDtBQUNBTCxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixFQUFtQixlQUFuQjtBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUU7QUFDTEksV0FBSyxFQUFFLFNBREY7QUFFTEMsZ0JBQVUsRUFBRSxNQUZQO0FBR0xDLGNBQVEsRUFBRSxFQUhMO0FBSUxDLGFBQU8sRUFBRTtBQUpKLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBV0U7QUFDRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxLQUZWO0FBR0xDLGVBQVMsRUFBRSxRQUhOO0FBSUxDLGNBQVEsRUFBRSxRQUpMO0FBS0xDLFdBQUssRUFBRTtBQUxGLEtBRFQ7QUFBQSx3Q0FRWSxhQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVR1osS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDckIsV0FDRTtBQUNFLFdBQUssRUFBRTtBQUNMQyxjQUFNLEVBQUUsRUFESDtBQUVMSixhQUFLLEVBQUUsTUFGRjtBQUdMSyxZQUFJLEVBQUUsTUFIRDtBQUlMWCxnQkFBUSxFQUFFLEVBSkw7QUFNTEQsa0JBQVUsRUFBRTtBQU5QLE9BRFQ7QUFVRSxhQUFPLEVBQUU7QUFBQSxlQUFNWCxRQUFRLENBQUNxQixDQUFELENBQWQ7QUFBQSxPQVZYO0FBQUEsb0RBU2dCdEIsS0FBSyxLQUFLc0IsQ0FBVixHQUFjLFFBQWQsR0FBeUIsVUFUekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVlHbkIsVUFBVSxDQUFDa0IsR0FBRCxDQVpiLENBREY7QUFnQkQsR0FqQkEsQ0FWSCxDQVhGLEVBd0NFO0FBQUEsd0NBQWUsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENGO0FBQUE7QUFBQTtBQUFBLG0ySUFERjtBQWdFRCxDQXRHRDs7R0FBTXhCLFk7O0tBQUFBLFk7QUF1R1NBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jMmY5YzhlZjhjZjkxMmJhZWFiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnY29tcG9uZW50cy90b3BpY3Mvc3R5bGVzJztcclxuaW1wb3J0IHsgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5jb25zdCBNZW51U2VsZWN0b3IgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpc3QgPSBbXHJcbiAgICAnU3BlY2lhbCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgICAnRm9vZCBNZW51JyxcclxuICAgICdCZXZlcmFnZXMnLFxyXG4gICAgJ0Rlc2VydCcsXHJcbiAgXTtcclxuICBmdW5jdGlvbiB0eXBlVG9OYW1lKHR5cGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGUsICd0aWhzIGlzIHR5cGUnKTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdmb29kJzpcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9vZCcpO1xyXG4gICAgICAgIHJldHVybiA8ZGl2PiBGb29kIE1lbnUgPC9kaXY+O1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2JldmVyYWdlcyc6XHJcbiAgICAgICAgcmV0dXJuICdCZXZlcmFnZXMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Rlc3NlcnRzJzpcclxuICAgICAgICByZXR1cm4gJ0Rlc2VydHMnO1xyXG4gICAgICAvLyBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2Zvb2QnOlxyXG4gICAgICAgIHJldHVybiAnRm9vZCBNZW51JztcclxuICAgICAgLy8gYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0eXBlO1xyXG4gICAgICAvLyBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgbGlzdDIgPSBPYmplY3Qua2V5cyhwcm9wcy5tZW51cyk7XHJcbiAgY29uc29sZS5sb2cobGlzdDIsICd0aGlzIGlzIGxpc3QyJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgY29sb3I6ICcjNDA0MDQwJyxcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBTYWNyZWQgRWFydGggQ2FmZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICAgIG92ZXJmbG93WDogJ3Njcm9sbCcsXHJcbiAgICAgICAgICBmbGV4V3JhcDogJ25vd3JhcCcsXHJcbiAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsYmFyeHhcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2xpc3QyLm1hcCgodmFsLCBpKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgZmxleDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3RhdGUgPT09IGkgPyAnYWN0aXZlJyA6ICd1bmFjdGl2ZSd9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRzdGF0ZShpKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0eXBlVG9OYW1lKHZhbCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyRGl2aWRlXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9yZGVyRGl2aWRlIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgIzAwMDAwMDE0IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzNjYmNiNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgICAgICAgLnNjcm9sbGJhcnh4IHtcclxuICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTZWxlY3RvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==