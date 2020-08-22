webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/page-components/Loader/Loader.js":
/*!**********************************************!*\
  !*** ./src/page-components/Loader/Loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\Loader\\Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Loader = function Loader() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 10
    }
  }, "hii this is loading");
};

_c = Loader;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

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

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_auth_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/auth-context */ "./src/components/auth-context.js");
/* harmony import */ var components_settings_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/settings-context */ "./src/components/settings-context.js");
/* harmony import */ var components_basket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/basket */ "./src/components/basket/index.js");
/* harmony import */ var lib_graph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/graph */ "./src/lib/graph/index.js");
/* harmony import */ var lib_language__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/language */ "./src/lib/language.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_rootReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../redux/rootReducer */ "./src/redux/rootReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/with-redux-store */ "./src/lib/with-redux-store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _page_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../page-components/Loader/Loader */ "./src/page-components/Loader/Loader.js");









var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








 // import globalstyle from './../ui/global.js';





var MyApp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _React$Component);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return __jsx(next_app__WEBPACK_IMPORTED_MODULE_19__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_17__["Provider"], {
        store: reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, __jsx(components_basket__WEBPACK_IMPORTED_MODULE_12__["BasketProvider"], {
        shippingCost: 199,
        freeShippingMinimumPurchaseAmount: 800,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }))), __jsx(_page_components_Loader_Loader__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    // const { mainNavigation } = commonData;
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                _context.t0 = _objectSpread;
                _context.t1 = {};

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return Component.getInitialProps(ctx);

              case 6:
                _context.t2 = _context.sent;
                _context.next = 10;
                break;

              case 9:
                _context.t2 = {};

              case 10:
                _context.t3 = _context.t2;
                _context.t4 = (0, _context.t0)(_context.t1, _context.t3);
                return _context.abrupt("return", {
                  pageProps: _context.t4
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);
/**
 * Get shared data for all pages
 * - Tenant settings
 * - Main naviation
 */
// MyApp.getInitialProps = async function ({ router: { asPath } }) {
// const language = getLanguage({ asPath });
// try {
//   const {
//     data: {
//       tenant,
//       mainNavigation: { children: mainNavigation },
//     },
//   } = await simplyFetchFromGraph({
//     query: `
//       query COMMON_DATA($language: String!) {
//         mainNavigation: catalogue(language: $language, path: "/") {
//           children {
//             type
//             name
//             path
//           }
//         }
//         tenant(language: $language) {
//           name
//           defaults {
//             currency
//             language
//           }
//         }
//       }
//     `,
//     variables: {
//       language,
//     },
//   });
//   return {
//     commonData: {
//       language,
//       tenant,
//       mainNavigation: mainNavigation.filter((i) => !i.name.startsWith('_')),
//     },
//   };
// } catch (error) {
//   console.error(error);
//   console.warn('Could not fetch common page data');
// Fallback values
//   return {
//     commonData: {
//       language,
//       mainNavigation: [],
//       tenant: {
//         defaults: {
//           language: 'en',
//           currency: 'usd',
//         },
//       },
//     },
//   };
// };
// };


/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_18__["default"])(MyApp));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTG9hZGVyIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJjdHgiLCJnZXRJbml0aWFsUHJvcHMiLCJSZWFjdCIsIndpdGhSZWR1eFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBQ0QsQ0FGRDs7S0FBTUEsTTtBQUdTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7SUFDTUMsSzs7Ozs7Ozs7Ozs7Ozs2QkFXSztBQUFBLHdCQUNzQyxLQUFLQyxLQUQzQztBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFNBRFosZUFDWUEsU0FEWjtBQUFBLFVBQ3VCQyxVQUR2QixlQUN1QkEsVUFEdkI7QUFFUCxhQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMscURBQUQ7QUFBVSxhQUFLLEVBQUVBLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGlFQUFEO0FBQ0Usb0JBQVksRUFBRSxHQURoQjtBQUVFLHlDQUFpQyxFQUFFLEdBRnJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRSxNQUFDLFNBQUQseUZBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGLENBREYsRUFPRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixDQURGLENBREY7QUFhRDs7O0FBekJEOzs7Ozs7OztBQUMrQkQseUIsUUFBQUEsUyxFQUFXRyxHLFFBQUFBLEc7Ozs7cUJBR2hDSCxTQUFTLENBQUNJLGU7Ozs7Ozt1QkFDSkosU0FBUyxDQUFDSSxlQUFWLENBQTBCRCxHQUExQixDOzs7Ozs7Ozs4QkFDTixFOzs7Ozs7QUFITkYsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSmNJLDRDQUFLLENBQUNMLFM7QUE2QjFCOzs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLG9FQUFBTSxzRUFBYyxDQUFDUixLQUFELENBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmQ1OTVhNDA0YmJhMGJjM2NiZDg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+aGlpIHRoaXMgaXMgbG9hZGluZzwvZGl2PjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xyXG4iLCJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICdjb21wb25lbnRzL2F1dGgtY29udGV4dCc7XHJcbmltcG9ydCB7IFNldHRpbmdzUHJvdmlkZXIgfSBmcm9tICdjb21wb25lbnRzL3NldHRpbmdzLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBCYXNrZXRQcm92aWRlciB9IGZyb20gJ2NvbXBvbmVudHMvYmFza2V0JztcclxuaW1wb3J0IHsgc2ltcGx5RmV0Y2hGcm9tR3JhcGggfSBmcm9tICdsaWIvZ3JhcGgnO1xyXG5pbXBvcnQgeyBnZXRMYW5ndWFnZSB9IGZyb20gJ2xpYi9sYW5ndWFnZSc7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vLi4vcmVkdXgvcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQgeyBQcm92aWRlciwgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IGdsb2JhbHN0eWxlIGZyb20gJy4vLi4vdWkvZ2xvYmFsLmpzJztcclxuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gJy4uL2xpYi93aXRoLXJlZHV4LXN0b3JlJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vLi4vcGFnZS1jb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xyXG5jbGFzcyBNeUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgLy8gY29uc3QgeyBtYWluTmF2aWdhdGlvbiB9ID0gY29tbW9uRGF0YTtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZVByb3BzOiB7XHJcbiAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcclxuICAgICAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgICA6IHt9KSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgICAgICA8QmFza2V0UHJvdmlkZXJcclxuICAgICAgICAgICAgc2hpcHBpbmdDb3N0PXsxOTl9XHJcbiAgICAgICAgICAgIGZyZWVTaGlwcGluZ01pbmltdW1QdXJjaGFzZUFtb3VudD17ODAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L0Jhc2tldFByb3ZpZGVyPlxyXG4gICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgc2hhcmVkIGRhdGEgZm9yIGFsbCBwYWdlc1xyXG4gKiAtIFRlbmFudCBzZXR0aW5nc1xyXG4gKiAtIE1haW4gbmF2aWF0aW9uXHJcbiAqL1xyXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyByb3V0ZXI6IHsgYXNQYXRoIH0gfSkge1xyXG4vLyBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKHsgYXNQYXRoIH0pO1xyXG5cclxuLy8gdHJ5IHtcclxuLy8gICBjb25zdCB7XHJcbi8vICAgICBkYXRhOiB7XHJcbi8vICAgICAgIHRlbmFudCxcclxuLy8gICAgICAgbWFpbk5hdmlnYXRpb246IHsgY2hpbGRyZW46IG1haW5OYXZpZ2F0aW9uIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgIH0gPSBhd2FpdCBzaW1wbHlGZXRjaEZyb21HcmFwaCh7XHJcbi8vICAgICBxdWVyeTogYFxyXG4vLyAgICAgICBxdWVyeSBDT01NT05fREFUQSgkbGFuZ3VhZ2U6IFN0cmluZyEpIHtcclxuLy8gICAgICAgICBtYWluTmF2aWdhdGlvbjogY2F0YWxvZ3VlKGxhbmd1YWdlOiAkbGFuZ3VhZ2UsIHBhdGg6IFwiL1wiKSB7XHJcbi8vICAgICAgICAgICBjaGlsZHJlbiB7XHJcbi8vICAgICAgICAgICAgIHR5cGVcclxuLy8gICAgICAgICAgICAgbmFtZVxyXG4vLyAgICAgICAgICAgICBwYXRoXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0ZW5hbnQobGFuZ3VhZ2U6ICRsYW5ndWFnZSkge1xyXG4vLyAgICAgICAgICAgbmFtZVxyXG4vLyAgICAgICAgICAgZGVmYXVsdHMge1xyXG4vLyAgICAgICAgICAgICBjdXJyZW5jeVxyXG4vLyAgICAgICAgICAgICBsYW5ndWFnZVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgYCxcclxuLy8gICAgIHZhcmlhYmxlczoge1xyXG4vLyAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBjb21tb25EYXRhOiB7XHJcbi8vICAgICAgIGxhbmd1YWdlLFxyXG4vLyAgICAgICB0ZW5hbnQsXHJcbi8vICAgICAgIG1haW5OYXZpZ2F0aW9uOiBtYWluTmF2aWdhdGlvbi5maWx0ZXIoKGkpID0+ICFpLm5hbWUuc3RhcnRzV2l0aCgnXycpKSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBmZXRjaCBjb21tb24gcGFnZSBkYXRhJyk7XHJcblxyXG4vLyBGYWxsYmFjayB2YWx1ZXNcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgY29tbW9uRGF0YToge1xyXG4vLyAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgICAgbWFpbk5hdmlnYXRpb246IFtdLFxyXG4vLyAgICAgICB0ZW5hbnQ6IHtcclxuLy8gICAgICAgICBkZWZhdWx0czoge1xyXG4vLyAgICAgICAgICAgbGFuZ3VhZ2U6ICdlbicsXHJcbi8vICAgICAgICAgICBjdXJyZW5jeTogJ3VzZCcsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==