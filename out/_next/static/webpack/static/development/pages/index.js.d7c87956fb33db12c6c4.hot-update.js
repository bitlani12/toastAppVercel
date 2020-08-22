webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/page-components/index/index.js":
/*!********************************************!*\
  !*** ./src/page-components/index/index.js ***!
  \********************************************/
/*! exports provided: getData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var components_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/grid */ "./src/components/grid/index.js");
/* harmony import */ var lib_graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/graph */ "./src/lib/graph/index.js");
/* harmony import */ var lib_graph_fragments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/graph/fragments */ "./src/lib/graph/fragments.js");
/* harmony import */ var lib_language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/language */ "./src/lib/language.js");
/* harmony import */ var _ServiceAssistant_ServiceAssistant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../ServiceAssistant/ServiceAssistant */ "./src/page-components/ServiceAssistant/ServiceAssistant.js");
/* harmony import */ var _ServiceAssistant_ServiceAssistant2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../ServiceAssistant/ServiceAssistant2 */ "./src/page-components/ServiceAssistant/ServiceAssistant2.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/page-components/index/styles.js");
/* harmony import */ var components_SpecialMenuCard_SpecialMenuCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/SpecialMenuCard/SpecialMenuCard */ "./src/components/SpecialMenuCard/SpecialMenuCard.js");
/* harmony import */ var page_components_SelectedItem_SelectedItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! page-components/SelectedItem/SelectedItem */ "./src/page-components/SelectedItem/SelectedItem.js");
/* harmony import */ var page_components_MenuFilter_MenuFilter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! page-components/MenuFilter/MenuFilter */ "./src/page-components/MenuFilter/MenuFilter.js");
/* harmony import */ var _ui_BottomDrawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/BottomDrawer */ "./src/ui/BottomDrawer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_ReviewPlaceOrder_ReviewPlaceOrder__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/ReviewPlaceOrder/ReviewPlaceOrder */ "./src/components/ReviewPlaceOrder/ReviewPlaceOrder.js");
/* harmony import */ var ui_Text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ui/Text */ "./src/ui/Text.js");
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ui */ "./src/ui/index.js");
/* harmony import */ var components_layout_header_MenuSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/layout/header/MenuSelector */ "./src/components/layout/header/MenuSelector.js");
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/layout/header */ "./src/components/layout/header/index.js");
/* harmony import */ var _Codepopup_Codepopup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Codepopup/Codepopup */ "./src/page-components/Codepopup/Codepopup.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);



var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\index\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;























function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$simplyFetchFro, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Object(lib_graph__WEBPACK_IMPORTED_MODULE_5__["simplyFetchFromGraph"])({
              query: "\n        query FRONTPAGE($language: String!) {\n          catalogue(path: \"/web-frontpage\", language: $language) {\n            ...item\n            ...product\n          }\n        }\n\n        ".concat(lib_graph_fragments__WEBPACK_IMPORTED_MODULE_6__["default"], "\n      "),
              variables: {
                language: Object(lib_language__WEBPACK_IMPORTED_MODULE_7__["getLanguage"])()
              }
            });

          case 3:
            _yield$simplyFetchFro = _context.sent;
            data = _yield$simplyFetchFro.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", null);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getData.apply(this, arguments);
}

function FrontPage(_ref) {
  _s();

  var _this = this;

  var catalogue = _ref.catalogue,
      simple = _ref.simple,
      menu_data = _ref.menu_data;
  var menupp = Object.keys(menu_data.menu.menu);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(menupp[0]),
      selected_menu = _useState[0],
      set_selected_menu = _useState[1];

  var grid = [{
    title: 'Coconut & Berry Yogurt Bowl'
  }, {
    title: 'Coconut & Berry Yogurt Bowl'
  }, {
    title: 'Coconut & Berry Yogurt Bowl'
  }, {
    title: 'Coconut & Berry Yogurt Bowl'
  }, {
    title: 'Coconut & Berry Yogurt Bowl'
  }];
  console.log(menu_data, 'this is menu data');
  var menus = menu_data.menu.menu;

  var onchange_menu = function onchange_menu(menu_type) {
    console.log(menu_type, 'beve');
    set_selected_menu(menu_type);
  };

  var menu_list = Object.keys(menus);
  console.log(menupp[0], selected_menu, 'this is');
  var inside_menu = Object.keys(menu_data.menu.menu[selected_menu]);
  console.log(menus[selected_menu][inside_menu[0]], 'this is abc');
  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(components_layout_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    simple: simple,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx(components_layout_header_MenuSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
    selected: "",
    menus: menus,
    onchange_menu: onchange_menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Outer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, inside_menu.map(function (val) {
    return menus[selected_menu][val].map(function (val_data, i) {
      console.log(val_data, 'this is val-----');
      return (// menus[selected_menu][inside_menu[i]].map(() => {
        //   return
        __jsx(components_SpecialMenuCard_SpecialMenuCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
          val: val_data,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }
        })
      ); // });
    });
  }), ";"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/billing_details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "billing details"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/select_payment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "select payment"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/order_success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "order success"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/ratings_feedback",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "ratings feedback"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/complaints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "complaints"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/applyCoupon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "apply coupon"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["SetFilterIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/static/bx-filter-alt.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  })), __jsx(page_components_SelectedItem_SelectedItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx(_ui_BottomDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "place order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(components_ReviewPlaceOrder_ReviewPlaceOrder__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }))), __jsx(_ServiceAssistant_ServiceAssistant__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }), __jsx(_ServiceAssistant_ServiceAssistant2__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx(_Codepopup_Codepopup__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, "Dish"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dishDescription",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, "dishDescription"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dishSelection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "dish selection"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/repeatLastdish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, "repeat last dist"))), __jsx(page_components_MenuFilter_MenuFilter__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }));
}

_s(FrontPage, "1TJYL/viPQZTnEyNB0z2SRe2g78=");

_c = FrontPage;

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu_data: state.orderReducer.menu_data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {// jointable_action: bindActionCreators(jointable_action, dispatch),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_22__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(FrontPage))); // export default FrontPage

var _c;

$RefreshReg$(_c, "FrontPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldERhdGEiLCJzaW1wbHlGZXRjaEZyb21HcmFwaCIsInF1ZXJ5IiwiZnJhZ21lbnRzIiwidmFyaWFibGVzIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRnJvbnRQYWdlIiwiY2F0YWxvZ3VlIiwic2ltcGxlIiwibWVudV9kYXRhIiwibWVudXBwIiwiT2JqZWN0Iiwia2V5cyIsIm1lbnUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkX21lbnUiLCJzZXRfc2VsZWN0ZWRfbWVudSIsImdyaWQiLCJ0aXRsZSIsIm1lbnVzIiwib25jaGFuZ2VfbWVudSIsIm1lbnVfdHlwZSIsIm1lbnVfbGlzdCIsImluc2lkZV9tZW51IiwibWFwIiwidmFsIiwidmFsX2RhdGEiLCJpIiwicGFkZGluZyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwib3JkZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQWVBLE9BQXRCO0FBQUE7QUFBQTs7OzhMQUFPO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRW9CQyxzRUFBb0IsQ0FBQztBQUMxQ0MsbUJBQUssa05BUURDLDJEQVJDLGFBRHFDO0FBVzFDQyx1QkFBUyxFQUFFO0FBQUVDLHdCQUFRLEVBQUVDLGdFQUFXO0FBQXZCO0FBWCtCLGFBQUQsQ0FGeEM7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YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kN2M4Nzk1NmZiMzNkYjEyYzZjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBHcmlkLCB7IEdyaWRJdGVtIH0gZnJvbSAnY29tcG9uZW50cy9ncmlkJztcclxuaW1wb3J0IHsgc2ltcGx5RmV0Y2hGcm9tR3JhcGggfSBmcm9tICdsaWIvZ3JhcGgnO1xyXG5pbXBvcnQgZnJhZ21lbnRzIGZyb20gJ2xpYi9ncmFwaC9mcmFnbWVudHMnO1xyXG5pbXBvcnQgeyBnZXRMYW5ndWFnZSB9IGZyb20gJ2xpYi9sYW5ndWFnZSc7XHJcbmltcG9ydCBTZXJ2aWNlQXNzaXN0YW50IGZyb20gJy4vLi4vU2VydmljZUFzc2lzdGFudC9TZXJ2aWNlQXNzaXN0YW50JztcclxuaW1wb3J0IFNlcnZpY2VBc3Npc3RhbnQyIGZyb20gJy4vLi4vU2VydmljZUFzc2lzdGFudC9TZXJ2aWNlQXNzaXN0YW50Mic7XHJcbmltcG9ydCB7IE91dGVyLCBTZXRGaWx0ZXJJY29uIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5pbXBvcnQgU3BlY2lhbE1lbnVDYXJkIGZyb20gJ2NvbXBvbmVudHMvU3BlY2lhbE1lbnVDYXJkL1NwZWNpYWxNZW51Q2FyZCc7XHJcbmltcG9ydCBTZWxlY3RlZEl0ZW0gZnJvbSAncGFnZS1jb21wb25lbnRzL1NlbGVjdGVkSXRlbS9TZWxlY3RlZEl0ZW0nO1xyXG5pbXBvcnQgTWVudUZpbHRlciBmcm9tICdwYWdlLWNvbXBvbmVudHMvTWVudUZpbHRlci9NZW51RmlsdGVyJztcclxuaW1wb3J0IEJvdHRvbURyYXdlciBmcm9tICcuLi8uLi91aS9Cb3R0b21EcmF3ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmV2aWV3UGxhY2VPcmRlciBmcm9tICdjb21wb25lbnRzL1Jldmlld1BsYWNlT3JkZXIvUmV2aWV3UGxhY2VPcmRlcic7XHJcbmltcG9ydCB7IFRpdGxlQ2VudGVyIH0gZnJvbSAndWkvVGV4dCc7XHJcbmltcG9ydCB7IEgzIH0gZnJvbSAndWknO1xyXG5pbXBvcnQgTWVudVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9NZW51U2VsZWN0b3InO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlcic7XHJcbmltcG9ydCBDb2RlcG9wdXAgZnJvbSAnLi4vQ29kZXBvcHVwL0NvZGVwb3B1cCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc2ltcGx5RmV0Y2hGcm9tR3JhcGgoe1xyXG4gICAgICBxdWVyeTogYFxyXG4gICAgICAgIHF1ZXJ5IEZST05UUEFHRSgkbGFuZ3VhZ2U6IFN0cmluZyEpIHtcclxuICAgICAgICAgIGNhdGFsb2d1ZShwYXRoOiBcIi93ZWItZnJvbnRwYWdlXCIsIGxhbmd1YWdlOiAkbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgICAgLi4uaXRlbVxyXG4gICAgICAgICAgICAuLi5wcm9kdWN0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAke2ZyYWdtZW50c31cclxuICAgICAgYCxcclxuICAgICAgdmFyaWFibGVzOiB7IGxhbmd1YWdlOiBnZXRMYW5ndWFnZSgpIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEZyb250UGFnZSh7IGNhdGFsb2d1ZSwgc2ltcGxlLCBtZW51X2RhdGEgfSkge1xyXG4gIGNvbnN0IG1lbnVwcCA9IE9iamVjdC5rZXlzKG1lbnVfZGF0YS5tZW51Lm1lbnUpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZF9tZW51LCBzZXRfc2VsZWN0ZWRfbWVudV0gPSB1c2VTdGF0ZShtZW51cHBbMF0pO1xyXG4gIGNvbnN0IGdyaWQgPSBbXHJcbiAgICB7IHRpdGxlOiAnQ29jb251dCAmIEJlcnJ5IFlvZ3VydCBCb3dsJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NvY29udXQgJiBCZXJyeSBZb2d1cnQgQm93bCcgfSxcclxuICAgIHsgdGl0bGU6ICdDb2NvbnV0ICYgQmVycnkgWW9ndXJ0IEJvd2wnIH0sXHJcbiAgICB7IHRpdGxlOiAnQ29jb251dCAmIEJlcnJ5IFlvZ3VydCBCb3dsJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NvY29udXQgJiBCZXJyeSBZb2d1cnQgQm93bCcgfSxcclxuICBdO1xyXG4gIGNvbnNvbGUubG9nKG1lbnVfZGF0YSwgJ3RoaXMgaXMgbWVudSBkYXRhJyk7XHJcbiAgY29uc3QgbWVudXMgPSBtZW51X2RhdGEubWVudS5tZW51O1xyXG4gIGNvbnN0IG9uY2hhbmdlX21lbnUgPSAobWVudV90eXBlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZW51X3R5cGUsICdiZXZlJyk7XHJcbiAgICBzZXRfc2VsZWN0ZWRfbWVudShtZW51X3R5cGUpO1xyXG4gIH07XHJcbiAgY29uc3QgbWVudV9saXN0ID0gT2JqZWN0LmtleXMobWVudXMpO1xyXG5cclxuICBjb25zb2xlLmxvZyhtZW51cHBbMF0sIHNlbGVjdGVkX21lbnUsICd0aGlzIGlzJyk7XHJcbiAgY29uc3QgaW5zaWRlX21lbnUgPSBPYmplY3Qua2V5cyhtZW51X2RhdGEubWVudS5tZW51W3NlbGVjdGVkX21lbnVdKTtcclxuICBjb25zb2xlLmxvZyhtZW51c1tzZWxlY3RlZF9tZW51XVtpbnNpZGVfbWVudVswXV0sICd0aGlzIGlzIGFiYycpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZGVyIHNpbXBsZT17c2ltcGxlfSAvPlxyXG4gICAgICA8TWVudVNlbGVjdG9yIHNlbGVjdGVkPVwiXCIgbWVudXM9e21lbnVzfSBvbmNoYW5nZV9tZW51PXtvbmNoYW5nZV9tZW51fSAvPlxyXG4gICAgICA8T3V0ZXI+XHJcbiAgICAgICAgey8qIHtpbnNpZGVfbWVudS5tYXAoKHZhbCkgPT4geyAqL31cclxuICAgICAgICB7LyogY29uc29sZS5sb2codmFsLCAndGhpcyBpcyB2YWwrKysrKycpOyAqL31cclxuICAgICAgICB7LyogcmV0dXJuICovfVxyXG4gICAgICAgIHsvKiB7Z3JpZC5tYXAoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICggKi99XHJcbiAgICAgICAge2luc2lkZV9tZW51Lm1hcCgodmFsKSA9PlxyXG4gICAgICAgICAgbWVudXNbc2VsZWN0ZWRfbWVudV1bdmFsXS5tYXAoKHZhbF9kYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbF9kYXRhLCAndGhpcyBpcyB2YWwtLS0tLScpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIC8vIG1lbnVzW3NlbGVjdGVkX21lbnVdW2luc2lkZV9tZW51W2ldXS5tYXAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vICAgcmV0dXJuXHJcblxyXG4gICAgICAgICAgICAgIDxTcGVjaWFsTWVudUNhcmQgdmFsPXt2YWxfZGF0YX0gLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qICk7XHJcbiAgICAgICAgfSl9ICovfVxyXG4gICAgICAgIHsvKiA8U3BlY2lhbE1lbnVDYXJkXHJcbiAgICAgICAgICBpbnNpZGVfbWVudT17aW5zaWRlX21lbnV9XHJcbiAgICAgICAgICBkYXRhPXttZW51c31cclxuICAgICAgICAgIHNlbGVjdGVkX21lbnU9e3NlbGVjdGVkX21lbnV9XHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgO3svKiB9KX0gKi99XHJcbiAgICAgIDwvT3V0ZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9iaWxsaW5nX2RldGFpbHNcIj5cclxuICAgICAgICAgIDxhPmJpbGxpbmcgZGV0YWlsczwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsZWN0X3BheW1lbnRcIj5cclxuICAgICAgICAgIDxhPnNlbGVjdCBwYXltZW50PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlcl9zdWNjZXNzXCI+XHJcbiAgICAgICAgICA8YT5vcmRlciBzdWNjZXNzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yYXRpbmdzX2ZlZWRiYWNrXCI+XHJcbiAgICAgICAgICA8YT5yYXRpbmdzIGZlZWRiYWNrPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9jb21wbGFpbnRzXCI+XHJcbiAgICAgICAgICA8YT5jb21wbGFpbnRzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9hcHBseUNvdXBvblwiPlxyXG4gICAgICAgICAgPGE+YXBwbHkgY291cG9uPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJwYXltZW50X2RvbmVcIj5cclxuICAgICAgICAgIDxhPnBheW1lbnQgZG9uZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPFNldEZpbHRlckljb24+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2J4LWZpbHRlci1hbHQucG5nXCIgLz5cclxuICAgICAgPC9TZXRGaWx0ZXJJY29uPlxyXG4gICAgICA8U2VsZWN0ZWRJdGVtIC8+XHJcbiAgICAgIDxCb3R0b21EcmF3ZXIgdGl0bGU9XCJwbGFjZSBvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8UmV2aWV3UGxhY2VPcmRlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JvdHRvbURyYXdlcj5cclxuICAgICAgPFNlcnZpY2VBc3Npc3RhbnQgLz5cclxuICAgICAgPFNlcnZpY2VBc3Npc3RhbnQyIC8+XHJcbiAgICAgIDxDb2RlcG9wdXAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Rpc2hcIj5cclxuICAgICAgICAgIDxhPkRpc2g8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Rpc2hEZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGE+ZGlzaERlc2NyaXB0aW9uPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNoU2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICA8YT5kaXNoIHNlbGVjdGlvbjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcmVwZWF0TGFzdGRpc2hcIj5cclxuICAgICAgICAgIDxhPnJlcGVhdCBsYXN0IGRpc3Q8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1lbnVGaWx0ZXIgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG1lbnVfZGF0YTogc3RhdGUub3JkZXJSZWR1Y2VyLm1lbnVfZGF0YSxcclxufSk7XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAvLyBqb2ludGFibGVfYWN0aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnMoam9pbnRhYmxlX2FjdGlvbiwgZGlzcGF0Y2gpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikod2l0aFJvdXRlcihGcm9udFBhZ2UpKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEZyb250UGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9