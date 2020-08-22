webpackHotUpdate("static\\development\\pages\\_app.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/auth-context */ "./src/components/auth-context.js");
/* harmony import */ var components_settings_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/settings-context */ "./src/components/settings-context.js");
/* harmony import */ var components_basket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/basket */ "./src/components/basket/index.js");
/* harmony import */ var lib_graph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/graph */ "./src/lib/graph/index.js");
/* harmony import */ var lib_language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/language */ "./src/lib/language.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_rootReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../redux/rootReducer */ "./src/redux/rootReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/with-redux-store */ "./src/lib/with-redux-store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 // import globalstyle from './../ui/global.js';




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      reduxStore = _ref.reduxStore;
  // const { mainNavigation } = commonData;
  return __jsx(next_app__WEBPACK_IMPORTED_MODULE_14__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
    store: reduxStore,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(components_basket__WEBPACK_IMPORTED_MODULE_7__["BasketProvider"], {
    shippingCost: 199,
    freeShippingMinimumPurchaseAmount: 800,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })))));
}

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _objectSpread;
            _context.t1 = {};

            if (!Component.getInitialProps) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            _context.t2 = _context.sent;
            _context.next = 9;
            break;

          case 8:
            _context.t2 = {};

          case 9:
            _context.t3 = _context.t2;
            _context.t4 = (0, _context.t0)(_context.t1, _context.t3);
            return _context.abrupt("return", {
              pageProps: _context.t4
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
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


/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_13__["default"])(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlZHV4U3RvcmUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJ3aXRoUmVkdXhTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsS0FBVCxPQUFxRDtBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQ25EO0FBRUEsU0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQVUsU0FBSyxFQUFFQSxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUNFLGdCQUFZLEVBQUUsR0FEaEI7QUFFRSxxQ0FBaUMsRUFBRSxHQUZyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixDQURGLENBREYsQ0FERjtBQVlEOztLQWZRRixLOztBQWdCVEEsS0FBSyxDQUFDSSxlQUFOO0FBQUEsK0xBQXdCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLGlCQUdkSixTQUFTLENBQUNHLGVBSEk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFJUkgsU0FBUyxDQUFDRyxlQUFWLENBQTBCQyxHQUExQixDQUpROztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBS2QsRUFMYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVwQkgsdUJBRm9CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxxRUFBQUksc0VBQWMsQ0FBQ04sS0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5kNWIyZTU2ZTQxNTExZmY3YmRjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnY29tcG9uZW50cy9hdXRoLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1Byb3ZpZGVyIH0gZnJvbSAnY29tcG9uZW50cy9zZXR0aW5ncy1jb250ZXh0JztcclxuaW1wb3J0IHsgQmFza2V0UHJvdmlkZXIgfSBmcm9tICdjb21wb25lbnRzL2Jhc2tldCc7XHJcbmltcG9ydCB7IHNpbXBseUZldGNoRnJvbUdyYXBoIH0gZnJvbSAnbGliL2dyYXBoJztcclxuaW1wb3J0IHsgZ2V0TGFuZ3VhZ2UgfSBmcm9tICdsaWIvbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuLy4uL3JlZHV4L3Jvb3RSZWR1Y2VyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBnbG9iYWxzdHlsZSBmcm9tICcuLy4uL3VpL2dsb2JhbC5qcyc7XHJcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tICcuLi9saWIvd2l0aC1yZWR1eC1zdG9yZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJztcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcmVkdXhTdG9yZSB9KSB7XHJcbiAgLy8gY29uc3QgeyBtYWluTmF2aWdhdGlvbiB9ID0gY29tbW9uRGF0YTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XHJcbiAgICAgICAgPEJhc2tldFByb3ZpZGVyXHJcbiAgICAgICAgICBzaGlwcGluZ0Nvc3Q9ezE5OX1cclxuICAgICAgICAgIGZyZWVTaGlwcGluZ01pbmltdW1QdXJjaGFzZUFtb3VudD17ODAwfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0Jhc2tldFByb3ZpZGVyPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xyXG4gICAgICAgID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgOiB7fSksXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbi8qKlxyXG4gKiBHZXQgc2hhcmVkIGRhdGEgZm9yIGFsbCBwYWdlc1xyXG4gKiAtIFRlbmFudCBzZXR0aW5nc1xyXG4gKiAtIE1haW4gbmF2aWF0aW9uXHJcbiAqL1xyXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoeyByb3V0ZXI6IHsgYXNQYXRoIH0gfSkge1xyXG4vLyBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlKHsgYXNQYXRoIH0pO1xyXG5cclxuLy8gdHJ5IHtcclxuLy8gICBjb25zdCB7XHJcbi8vICAgICBkYXRhOiB7XHJcbi8vICAgICAgIHRlbmFudCxcclxuLy8gICAgICAgbWFpbk5hdmlnYXRpb246IHsgY2hpbGRyZW46IG1haW5OYXZpZ2F0aW9uIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgIH0gPSBhd2FpdCBzaW1wbHlGZXRjaEZyb21HcmFwaCh7XHJcbi8vICAgICBxdWVyeTogYFxyXG4vLyAgICAgICBxdWVyeSBDT01NT05fREFUQSgkbGFuZ3VhZ2U6IFN0cmluZyEpIHtcclxuLy8gICAgICAgICBtYWluTmF2aWdhdGlvbjogY2F0YWxvZ3VlKGxhbmd1YWdlOiAkbGFuZ3VhZ2UsIHBhdGg6IFwiL1wiKSB7XHJcbi8vICAgICAgICAgICBjaGlsZHJlbiB7XHJcbi8vICAgICAgICAgICAgIHR5cGVcclxuLy8gICAgICAgICAgICAgbmFtZVxyXG4vLyAgICAgICAgICAgICBwYXRoXHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0ZW5hbnQobGFuZ3VhZ2U6ICRsYW5ndWFnZSkge1xyXG4vLyAgICAgICAgICAgbmFtZVxyXG4vLyAgICAgICAgICAgZGVmYXVsdHMge1xyXG4vLyAgICAgICAgICAgICBjdXJyZW5jeVxyXG4vLyAgICAgICAgICAgICBsYW5ndWFnZVxyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgYCxcclxuLy8gICAgIHZhcmlhYmxlczoge1xyXG4vLyAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgIH0sXHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBjb21tb25EYXRhOiB7XHJcbi8vICAgICAgIGxhbmd1YWdlLFxyXG4vLyAgICAgICB0ZW5hbnQsXHJcbi8vICAgICAgIG1haW5OYXZpZ2F0aW9uOiBtYWluTmF2aWdhdGlvbi5maWx0ZXIoKGkpID0+ICFpLm5hbWUuc3RhcnRzV2l0aCgnXycpKSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBmZXRjaCBjb21tb24gcGFnZSBkYXRhJyk7XHJcblxyXG4vLyBGYWxsYmFjayB2YWx1ZXNcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgY29tbW9uRGF0YToge1xyXG4vLyAgICAgICBsYW5ndWFnZSxcclxuLy8gICAgICAgbWFpbk5hdmlnYXRpb246IFtdLFxyXG4vLyAgICAgICB0ZW5hbnQ6IHtcclxuLy8gICAgICAgICBkZWZhdWx0czoge1xyXG4vLyAgICAgICAgICAgbGFuZ3VhZ2U6ICdlbicsXHJcbi8vICAgICAgICAgICBjdXJyZW5jeTogJ3VzZCcsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eFN0b3JlKE15QXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==