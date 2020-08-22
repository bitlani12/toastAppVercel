webpackHotUpdate("static\\development\\pages\\qr_scanner.js",{

/***/ "./src/pages/qr_scanner.js":
/*!*********************************!*\
  !*** ./src/pages/qr_scanner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");







var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\qr_scanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // import QrScanner from '../page-components/QrScanner/QrScanner';

var QrScanner = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../page-components/QrScanner/QrScanner */ "./src/page-components/QrScanner/QrScanner.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../page-components/QrScanner/QrScanner */ "./src/page-components/QrScanner/QrScanner.js")];
    },
    modules: ['../page-components/QrScanner/QrScanner']
  }
}); // import QrReader from '';

_c2 = QrScanner;

var QrScan = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QrScan, _Component);

  var _super = _createSuper(QrScan);

  function QrScan() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, QrScan);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(QrScan, [{
    key: "render",
    value: function render() {
      var previewStyle = {
        height: 240,
        width: 320
      };
      return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, __jsx(QrScanner, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      })));
    }
  }]);

  return QrScan;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

QrScan.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('this is ctx');
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_11__["auth"])(ctx);
            return _context.abrupt("return", {
              token: token
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (QrScan);

var _c, _c2;

$RefreshReg$(_c, "QrScanner$dynamic");
$RefreshReg$(_c2, "QrScanner");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcXJfc2Nhbm5lci5qcyJdLCJuYW1lcyI6WyJRclNjYW5uZXIiLCJkeW5hbWljIiwic3NyIiwiUXJTY2FuIiwicHJldmlld1N0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxtREFBTyxNQUN2QjtBQUFBLFNBQU0sMktBQU47QUFBQSxDQUR1QixFQUV2QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSw0RkFDYjtBQUFBO0FBQUEsY0FEYSx3Q0FDYjtBQUFBO0FBQUEsQ0FGdUIsQ0FBekIsQyxDQUlBOztNQUpNRixTOztJQUtBRyxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxjQUFNLEVBQUUsR0FEVztBQUVuQkMsYUFBSyxFQUFFO0FBRlksT0FBckI7QUFLQSxhQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsQ0FERjtBQU9EOzs7O0VBZGtCQywrQzs7QUFnQnJCSixNQUFNLENBQUNLLGVBQVA7QUFBQSw4TEFBeUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNNQyxpQkFGaUIsR0FFVEMseURBQUksQ0FBQ0osR0FBRCxDQUZLO0FBQUEsNkNBR2hCO0FBQUVHLG1CQUFLLEVBQUxBO0FBQUYsYUFIZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2VULHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxxcl9zY2FubmVyLmpzLjYwOGU3M2EzZjgwYWRiZGRhZTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbi8vIGltcG9ydCBRclNjYW5uZXIgZnJvbSAnLi4vcGFnZS1jb21wb25lbnRzL1FyU2Nhbm5lci9RclNjYW5uZXInO1xyXG5jb25zdCBRclNjYW5uZXIgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydCgnLi4vcGFnZS1jb21wb25lbnRzL1FyU2Nhbm5lci9RclNjYW5uZXInKSxcclxuICB7IHNzcjogZmFsc2UgfVxyXG4pO1xyXG4vLyBpbXBvcnQgUXJSZWFkZXIgZnJvbSAnJztcclxuY2xhc3MgUXJTY2FuIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcmV2aWV3U3R5bGUgPSB7XHJcbiAgICAgIGhlaWdodDogMjQwLFxyXG4gICAgICB3aWR0aDogMzIwLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8UXJTY2FubmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuUXJTY2FuLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zb2xlLmxvZygndGhpcyBpcyBjdHgnKTtcclxuICBjb25zdCB0b2tlbiA9IGF1dGgoY3R4KTtcclxuICByZXR1cm4geyB0b2tlbiB9O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBRclNjYW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=