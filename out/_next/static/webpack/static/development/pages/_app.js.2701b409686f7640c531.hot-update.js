webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/auth-context */ "./src/components/auth-context.js");
/* harmony import */ var components_settings_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/settings-context */ "./src/components/settings-context.js");
/* harmony import */ var components_basket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/basket */ "./src/components/basket/index.js");
/* harmony import */ var lib_graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/graph */ "./src/lib/graph/index.js");
/* harmony import */ var lib_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/language */ "./src/lib/language.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_rootReducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../redux/rootReducer */ "./src/redux/rootReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/with-redux-store */ "./src/lib/with-redux-store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_16__);






var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








 // import globalstyle from './../ui/global.js';




var MyApp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _React$Component);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    // const { mainNavigation } = commonData;
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return __jsx(next_app__WEBPACK_IMPORTED_MODULE_16__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7
        }
      }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, __jsx(components_basket__WEBPACK_IMPORTED_MODULE_9__["BasketProvider"], {
        shippingCost: 199,
        freeShippingMinimumPurchaseAmount: 800,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      })))));
    }
  }]);

  return MyApp;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);
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


/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_15__["default"])(MyApp));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVkdXhTdG9yZSIsIlJlYWN0Iiwid2l0aFJlZHV4U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztJQUNNQSxLOzs7Ozs7Ozs7Ozs7O0FBQ0o7NkJBQ1M7QUFBQSx3QkFDc0MsS0FBS0MsS0FEM0M7QUFBQSxVQUNDQyxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxTQURaLGVBQ1lBLFNBRFo7QUFBQSxVQUN1QkMsVUFEdkIsZUFDdUJBLFVBRHZCO0FBR1AsYUFDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHFEQUFEO0FBQVUsYUFBSyxFQUFFQSxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnRUFBRDtBQUNFLG9CQUFZLEVBQUUsR0FEaEI7QUFFRSx5Q0FBaUMsRUFBRSxHQUZyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUUsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRixDQURGLENBREYsQ0FERjtBQVlEOzs7O0VBakJpQkUsNENBQUssQ0FBQ0gsUztBQW9CMUI7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsb0VBQUFJLHNFQUFjLENBQUNOLEtBQUQsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMjcwMWI0MDk2ODZmNzY0MGM1MzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJ2NvbXBvbmVudHMvYXV0aC1jb250ZXh0JztcclxuaW1wb3J0IHsgU2V0dGluZ3NQcm92aWRlciB9IGZyb20gJ2NvbXBvbmVudHMvc2V0dGluZ3MtY29udGV4dCc7XHJcbmltcG9ydCB7IEJhc2tldFByb3ZpZGVyIH0gZnJvbSAnY29tcG9uZW50cy9iYXNrZXQnO1xyXG5pbXBvcnQgeyBzaW1wbHlGZXRjaEZyb21HcmFwaCB9IGZyb20gJ2xpYi9ncmFwaCc7XHJcbmltcG9ydCB7IGdldExhbmd1YWdlIH0gZnJvbSAnbGliL2xhbmd1YWdlJztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi8uLi9yZWR1eC9yb290UmVkdWNlcic7XHJcbmltcG9ydCB7IFByb3ZpZGVyLCBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgZ2xvYmFsc3R5bGUgZnJvbSAnLi8uLi91aS9nbG9iYWwuanMnO1xyXG5pbXBvcnQgd2l0aFJlZHV4U3RvcmUgZnJvbSAnLi4vbGliL3dpdGgtcmVkdXgtc3RvcmUnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICduZXh0L2FwcCc7XHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBjb25zdCB7IG1haW5OYXZpZ2F0aW9uIH0gPSBjb21tb25EYXRhO1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlZHV4U3RvcmV9PlxyXG4gICAgICAgICAgPEJhc2tldFByb3ZpZGVyXHJcbiAgICAgICAgICAgIHNoaXBwaW5nQ29zdD17MTk5fVxyXG4gICAgICAgICAgICBmcmVlU2hpcHBpbmdNaW5pbXVtUHVyY2hhc2VBbW91bnQ9ezgwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgPC9CYXNrZXRQcm92aWRlcj5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2V0IHNoYXJlZCBkYXRhIGZvciBhbGwgcGFnZXNcclxuICogLSBUZW5hbnQgc2V0dGluZ3NcclxuICogLSBNYWluIG5hdmlhdGlvblxyXG4gKi9cclxuLy8gTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgcm91dGVyOiB7IGFzUGF0aCB9IH0pIHtcclxuLy8gY29uc3QgbGFuZ3VhZ2UgPSBnZXRMYW5ndWFnZSh7IGFzUGF0aCB9KTtcclxuXHJcbi8vIHRyeSB7XHJcbi8vICAgY29uc3Qge1xyXG4vLyAgICAgZGF0YToge1xyXG4vLyAgICAgICB0ZW5hbnQsXHJcbi8vICAgICAgIG1haW5OYXZpZ2F0aW9uOiB7IGNoaWxkcmVuOiBtYWluTmF2aWdhdGlvbiB9LFxyXG4vLyAgICAgfSxcclxuLy8gICB9ID0gYXdhaXQgc2ltcGx5RmV0Y2hGcm9tR3JhcGgoe1xyXG4vLyAgICAgcXVlcnk6IGBcclxuLy8gICAgICAgcXVlcnkgQ09NTU9OX0RBVEEoJGxhbmd1YWdlOiBTdHJpbmchKSB7XHJcbi8vICAgICAgICAgbWFpbk5hdmlnYXRpb246IGNhdGFsb2d1ZShsYW5ndWFnZTogJGxhbmd1YWdlLCBwYXRoOiBcIi9cIikge1xyXG4vLyAgICAgICAgICAgY2hpbGRyZW4ge1xyXG4vLyAgICAgICAgICAgICB0eXBlXHJcbi8vICAgICAgICAgICAgIG5hbWVcclxuLy8gICAgICAgICAgICAgcGF0aFxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgdGVuYW50KGxhbmd1YWdlOiAkbGFuZ3VhZ2UpIHtcclxuLy8gICAgICAgICAgIG5hbWVcclxuLy8gICAgICAgICAgIGRlZmF1bHRzIHtcclxuLy8gICAgICAgICAgICAgY3VycmVuY3lcclxuLy8gICAgICAgICAgICAgbGFuZ3VhZ2VcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIGAsXHJcbi8vICAgICB2YXJpYWJsZXM6IHtcclxuLy8gICAgICAgbGFuZ3VhZ2UsXHJcbi8vICAgICB9LFxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgY29tbW9uRGF0YToge1xyXG4vLyAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgICAgdGVuYW50LFxyXG4vLyAgICAgICBtYWluTmF2aWdhdGlvbjogbWFpbk5hdmlnYXRpb24uZmlsdGVyKChpKSA9PiAhaS5uYW1lLnN0YXJ0c1dpdGgoJ18nKSksXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZmV0Y2ggY29tbW9uIHBhZ2UgZGF0YScpO1xyXG5cclxuLy8gRmFsbGJhY2sgdmFsdWVzXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIGNvbW1vbkRhdGE6IHtcclxuLy8gICAgICAgbGFuZ3VhZ2UsXHJcbi8vICAgICAgIG1haW5OYXZpZ2F0aW9uOiBbXSxcclxuLy8gICAgICAgdGVuYW50OiB7XHJcbi8vICAgICAgICAgZGVmYXVsdHM6IHtcclxuLy8gICAgICAgICAgIGxhbmd1YWdlOiAnZW4nLFxyXG4vLyAgICAgICAgICAgY3VycmVuY3k6ICd1c2QnLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=