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


var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\index\\index.js";
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
  var _this = this;

  var catalogue = _ref.catalogue,
      simple = _ref.simple;
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
  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(components_layout_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    simple: simple,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), __jsx(components_layout_header_MenuSelector__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["Outer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, grid && grid.map(function (val) {
    return __jsx(components_SpecialMenuCard_SpecialMenuCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      val: val,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 20
      }
    });
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/billing_details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "billing details"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/select_payment",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "select payment"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/order_success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "order success"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/ratings_feedback",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "ratings feedback"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/complaints",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "complaints"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/applyCoupon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "apply coupon"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_10__["SetFilterIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/static/bx-filter-alt.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  })), __jsx(page_components_SelectedItem_SelectedItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(_ui_BottomDrawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: "place order",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(components_ReviewPlaceOrder_ReviewPlaceOrder__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }))), __jsx(_ServiceAssistant_ServiceAssistant__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx(_ServiceAssistant_ServiceAssistant2__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }), __jsx(_Codepopup_Codepopup__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Dish"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dishDescription",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "dishDescription"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/dishSelection",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, "dish selection"))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/repeatLastdish",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "repeat last dist"))), __jsx(page_components_MenuFilter_MenuFilter__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }));
}

_c = FrontPage;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    jointable_action: Object(redux__WEBPACK_IMPORTED_MODULE_23__["bindActionCreators"])(jointable_action, dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_22__["connect"])(null, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(FrontPage))); // export default FrontPage

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL2luZGV4L2luZGV4LmpzIl0sIm5hbWVzIjpbImdldERhdGEiLCJzaW1wbHlGZXRjaEZyb21HcmFwaCIsInF1ZXJ5IiwiZnJhZ21lbnRzIiwidmFyaWFibGVzIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRnJvbnRQYWdlIiwiY2F0YWxvZ3VlIiwic2ltcGxlIiwiZ3JpZCIsInRpdGxlIiwibWFwIiwidmFsIiwicGFkZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiam9pbnRhYmxlX2FjdGlvbiIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBZUEsT0FBdEI7QUFBQTtBQUFBOzs7OExBQU87QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFb0JDLHNFQUFvQixDQUFDO0FBQzFDQyxtQkFBSyxrTkFRREMsMkRBUkMsYUFEcUM7QUFXMUNDLHVCQUFTLEVBQUU7QUFBRUMsd0JBQVEsRUFBRUMsZ0VBQVc7QUFBdkI7QUFYK0IsYUFBRCxDQUZ4Qzs7QUFBQTtBQUFBO0FBRUtDLGdCQUZMLHlCQUVLQSxJQUZMO0FBQUEsNkNBZUlBLElBZko7O0FBQUE7QUFBQTtBQUFBO0FBaUJIQyxtQkFBTyxDQUFDQyxHQUFSO0FBakJHLDZDQWtCSSxJQWxCSjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBc0JQLFNBQVNDLFNBQVQsT0FB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O0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQWxFRixFQXVFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQURGLENBdkVGLEVBNEVFLE1BQUMsOEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVFRixDQURGO0FBZ0ZEOztLQXpGUVAsUzs7QUEyRlQsSUFBTVEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q0Msb0JBQWdCLEVBQUVDLGlFQUFrQixDQUFDRCxnQkFBRCxFQUFtQkQsUUFBbkI7QUFESSxHQUFmO0FBQUEsQ0FBM0I7O0FBR2VHLDJIQUFPLENBQUMsSUFBRCxFQUFPSixrQkFBUCxDQUFQLENBQWtDSywrREFBVSxDQUFDYixTQUFELENBQTVDLENBQWYsRSxDQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41YjYzMDdhYjgxMGU5NTRkNTEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgR3JpZCwgeyBHcmlkSXRlbSB9IGZyb20gJ2NvbXBvbmVudHMvZ3JpZCc7XHJcbmltcG9ydCB7IHNpbXBseUZldGNoRnJvbUdyYXBoIH0gZnJvbSAnbGliL2dyYXBoJztcclxuaW1wb3J0IGZyYWdtZW50cyBmcm9tICdsaWIvZ3JhcGgvZnJhZ21lbnRzJztcclxuaW1wb3J0IHsgZ2V0TGFuZ3VhZ2UgfSBmcm9tICdsaWIvbGFuZ3VhZ2UnO1xyXG5pbXBvcnQgU2VydmljZUFzc2lzdGFudCBmcm9tICcuLy4uL1NlcnZpY2VBc3Npc3RhbnQvU2VydmljZUFzc2lzdGFudCc7XHJcbmltcG9ydCBTZXJ2aWNlQXNzaXN0YW50MiBmcm9tICcuLy4uL1NlcnZpY2VBc3Npc3RhbnQvU2VydmljZUFzc2lzdGFudDInO1xyXG5pbXBvcnQgeyBPdXRlciwgU2V0RmlsdGVySWNvbiB9IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IFNwZWNpYWxNZW51Q2FyZCBmcm9tICdjb21wb25lbnRzL1NwZWNpYWxNZW51Q2FyZC9TcGVjaWFsTWVudUNhcmQnO1xyXG5pbXBvcnQgU2VsZWN0ZWRJdGVtIGZyb20gJ3BhZ2UtY29tcG9uZW50cy9TZWxlY3RlZEl0ZW0vU2VsZWN0ZWRJdGVtJztcclxuaW1wb3J0IE1lbnVGaWx0ZXIgZnJvbSAncGFnZS1jb21wb25lbnRzL01lbnVGaWx0ZXIvTWVudUZpbHRlcic7XHJcbmltcG9ydCBCb3R0b21EcmF3ZXIgZnJvbSAnLi4vLi4vdWkvQm90dG9tRHJhd2VyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJldmlld1BsYWNlT3JkZXIgZnJvbSAnY29tcG9uZW50cy9SZXZpZXdQbGFjZU9yZGVyL1Jldmlld1BsYWNlT3JkZXInO1xyXG5pbXBvcnQgeyBUaXRsZUNlbnRlciB9IGZyb20gJ3VpL1RleHQnO1xyXG5pbXBvcnQgeyBIMyB9IGZyb20gJ3VpJztcclxuaW1wb3J0IE1lbnVTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2xheW91dC9oZWFkZXIvTWVudVNlbGVjdG9yJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL2xheW91dC9oZWFkZXInO1xyXG5pbXBvcnQgQ29kZXBvcHVwIGZyb20gJy4uL0NvZGVwb3B1cC9Db2RlcG9wdXAnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHNpbXBseUZldGNoRnJvbUdyYXBoKHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICBxdWVyeSBGUk9OVFBBR0UoJGxhbmd1YWdlOiBTdHJpbmchKSB7XHJcbiAgICAgICAgICBjYXRhbG9ndWUocGF0aDogXCIvd2ViLWZyb250cGFnZVwiLCBsYW5ndWFnZTogJGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICAgIC4uLml0ZW1cclxuICAgICAgICAgICAgLi4ucHJvZHVjdFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHtmcmFnbWVudHN9XHJcbiAgICAgIGAsXHJcbiAgICAgIHZhcmlhYmxlczogeyBsYW5ndWFnZTogZ2V0TGFuZ3VhZ2UoKSB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBGcm9udFBhZ2UoeyBjYXRhbG9ndWUsIHNpbXBsZSB9KSB7XHJcbiAgY29uc3QgZ3JpZCA9IFtcclxuICAgIHsgdGl0bGU6ICdDb2NvbnV0ICYgQmVycnkgWW9ndXJ0IEJvd2wnIH0sXHJcbiAgICB7IHRpdGxlOiAnQ29jb251dCAmIEJlcnJ5IFlvZ3VydCBCb3dsJyB9LFxyXG4gICAgeyB0aXRsZTogJ0NvY29udXQgJiBCZXJyeSBZb2d1cnQgQm93bCcgfSxcclxuICAgIHsgdGl0bGU6ICdDb2NvbnV0ICYgQmVycnkgWW9ndXJ0IEJvd2wnIH0sXHJcbiAgICB7IHRpdGxlOiAnQ29jb251dCAmIEJlcnJ5IFlvZ3VydCBCb3dsJyB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwiSG9tZVwiPlxyXG4gICAgICA8SGVhZGVyIHNpbXBsZT17c2ltcGxlfSAvPlxyXG4gICAgICA8TWVudVNlbGVjdG9yIC8+XHJcbiAgICAgIDxPdXRlcj5cclxuICAgICAgICB7Z3JpZCAmJlxyXG4gICAgICAgICAgZ3JpZC5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPFNwZWNpYWxNZW51Q2FyZCB2YWw9e3ZhbH0gLz47XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9PdXRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2JpbGxpbmdfZGV0YWlsc1wiPlxyXG4gICAgICAgICAgPGE+YmlsbGluZyBkZXRhaWxzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxlY3RfcGF5bWVudFwiPlxyXG4gICAgICAgICAgPGE+c2VsZWN0IHBheW1lbnQ8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL29yZGVyX3N1Y2Nlc3NcIj5cclxuICAgICAgICAgIDxhPm9yZGVyIHN1Y2Nlc3M8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3JhdGluZ3NfZmVlZGJhY2tcIj5cclxuICAgICAgICAgIDxhPnJhdGluZ3MgZmVlZGJhY2s8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbXBsYWludHNcIj5cclxuICAgICAgICAgIDxhPmNvbXBsYWludHM8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2FwcGx5Q291cG9uXCI+XHJcbiAgICAgICAgICA8YT5hcHBseSBjb3Vwb248L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cInBheW1lbnRfZG9uZVwiPlxyXG4gICAgICAgICAgPGE+cGF5bWVudCBkb25lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8U2V0RmlsdGVySWNvbj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYngtZmlsdGVyLWFsdC5wbmdcIiAvPlxyXG4gICAgICA8L1NldEZpbHRlckljb24+XHJcbiAgICAgIDxTZWxlY3RlZEl0ZW0gLz5cclxuICAgICAgPEJvdHRvbURyYXdlciB0aXRsZT1cInBsYWNlIG9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cclxuICAgICAgICAgIDxSZXZpZXdQbGFjZU9yZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm90dG9tRHJhd2VyPlxyXG4gICAgICA8U2VydmljZUFzc2lzdGFudCAvPlxyXG4gICAgICA8U2VydmljZUFzc2lzdGFudDIgLz5cclxuICAgICAgPENvZGVwb3B1cCAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzaFwiPlxyXG4gICAgICAgICAgPGE+RGlzaDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzaERlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICA8YT5kaXNoRGVzY3JpcHRpb248L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Rpc2hTZWxlY3Rpb25cIj5cclxuICAgICAgICAgIDxhPmRpc2ggc2VsZWN0aW9uPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXBlYXRMYXN0ZGlzaFwiPlxyXG4gICAgICAgICAgPGE+cmVwZWF0IGxhc3QgZGlzdDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TWVudUZpbHRlciAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGpvaW50YWJsZV9hY3Rpb246IGJpbmRBY3Rpb25DcmVhdG9ycyhqb2ludGFibGVfYWN0aW9uLCBkaXNwYXRjaCksXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcihGcm9udFBhZ2UpKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEZyb250UGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9