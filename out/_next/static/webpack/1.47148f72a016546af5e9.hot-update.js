webpackHotUpdate(1,{

/***/ "./src/page-components/QrScanner/QrScanner.js":
/*!****************************************************!*\
  !*** ./src/page-components/QrScanner/QrScanner.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-qr-reader */ "./node_modules/react-qr-reader/lib/index.js");
/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_qr_reader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_actions_orderAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux/actions/orderAction */ "./src/redux/actions/orderAction.js");








var _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\page-components\\QrScanner\\QrScanner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // let QrReader = '';

var QrScanner = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QrScanner, _Component);

  var _super = _createSuper(QrScanner);

  function QrScanner(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, QrScanner);

    _this = _super.call(this, props);
    _this.state = {
      delay: 100,
      result: 'No result',
      appIsMounted: false
    };
    _this.handleScan = _this.handleScan.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(QrScanner, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "handleScan",
    value: function handleScan(data) {
      // this.setState({
      //   result: data,
      // });
      if (data !== null) {
        console.log(data, 'this is code ');
        this.props.scanqr_action(data);
      }
    }
  }, {
    key: "handleError",
    value: function handleError(err) {
      console.error(err);
    }
  }, {
    key: "render",
    value: function render() {
      var previewStyle = {
        height: '100vh',
        width: '100%'
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "cut-border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }), __jsx("div", {
        "class": "preloader-scan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx(react_qr_reader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: this.state.delay,
        style: previewStyle,
        onError: this.handleError,
        onScan: this.handleScan,
        className: "qrstyle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), __jsx("div", {
        "class": "diode",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, __jsx("div", {
        "class": "laser",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }))), __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, "\n        \n        .qrstyle div {\n          width: 100px;\n          height: 100px;\n        \n          background:\n            linear-gradient(to right, black 2px, transparent 2px) 0 0,\n            linear-gradient(to right, black 2px, transparent 2px) 0 100%,\n            linear-gradient(to left, black 2px, transparent 2px) 100% 0,\n            linear-gradient(to left, black 2px, transparent 2px) 100% 100%,\n            linear-gradient(to bottom, black 2px, transparent 2px) 0 0,\n            linear-gradient(to bottom, black 2px, transparent 2px) 100% 0,\n            linear-gradient(to top, black 2px, transparent 2px) 0 100%,\n            linear-gradient(to top, black 2px, transparent 2px) 100% 100%;\n        \n          background-repeat: no-repeat;\n          background-size: 20px 20px;\n          box-shadow: none !important;\n          border-top: 20vh solid #0000004d !important;\n          border-bottom: 20vh solid #0000004d !important;\n          border-right: 5vh solid #0000004d !important;\n          border-left: 5vh solid #0000004d !important;\n        }\n        body{\n          margin: 0px;\n          padding: 0px;\n        }\n        .qrstyle section{\n          overflow: hidden;\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    padding-top:0px !important;\n        }\n\n\n        .preloader-scan {\n          // position: fixed;\n          left: 0;\n          right: 0;\n          max-width: 200px;\n          display: table;\n          margin: 0 auto;\n          height: 100%;\n          text-align: center;\n        }\n\n        .preloader-scan .laser {\n          // width: 150%;\n          margin-left: -25%;\n          background-color: tomato;\n          height: 1px;\n          position: absolute;\n          top: 40%;\n          z-index: 2;\n          box-shadow: 0 0 4px red;\n          -webkit-animation: scanning 2s infinite;\n                  animation: scanning 2s infinite;\n        }\n        .preloader-scan .diode {\n          -webkit-animation: beam .01s infinite;\n                  animation: beam .01s infinite;\n        }\n        \n        body {\n          height: 100%;\n        }\n        \n        @-webkit-keyframes beam {\n          50% {\n            opacity: 0;\n          }\n        }\n        \n        @keyframes beam {\n          50% {\n            opacity: 0;\n          }\n        }\n        @-webkit-keyframes scanning {\n          50% {\n            -webkit-transform: translateY(75px);\n                    transform: translateY(75px);\n          }\n        }\n        @keyframes scanning {\n          50% {\n            -webkit-transform: translateY(75px);\n                    transform: translateY(75px);\n          }\n        }\n        \n        "));
    }
  }]);

  return QrScanner;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    scanqr_action: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(redux_actions_orderAction__WEBPACK_IMPORTED_MODULE_12__["scanqr_action"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, mapDispatchToProps)(QrScanner)); // export default ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL1FyU2Nhbm5lci9RclNjYW5uZXIuanMiXSwibmFtZXMiOlsiUXJTY2FubmVyIiwicHJvcHMiLCJzdGF0ZSIsImRlbGF5IiwicmVzdWx0IiwiYXBwSXNNb3VudGVkIiwiaGFuZGxlU2NhbiIsImJpbmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNjYW5xcl9hY3Rpb24iLCJlcnIiLCJlcnJvciIsInByZXZpZXdTdHlsZSIsImhlaWdodCIsIndpZHRoIiwiaGFuZGxlRXJyb3IiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0lBQ01BLFM7Ozs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsV0FBSyxFQUFFLEdBREk7QUFFWEMsWUFBTSxFQUFFLFdBRkc7QUFHWEMsa0JBQVksRUFBRTtBQUhILEtBQWI7QUFNQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQVJpQjtBQVNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFRVUMsSSxFQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCLGVBQWxCO0FBQ0EsYUFBS1AsS0FBTCxDQUFXVSxhQUFYLENBQXlCSCxJQUF6QjtBQUNEO0FBQ0Y7OztnQ0FDV0ksRyxFQUFLO0FBQ2ZILGFBQU8sQ0FBQ0ksS0FBUixDQUFjRCxHQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQU1FLFlBQVksR0FBRztBQUNuQkMsY0FBTSxFQUFFLE9BRFc7QUFFbkJDLGFBQUssRUFBRTtBQUZZLE9BQXJCO0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBSUU7QUFBSyxpQkFBTSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQUssRUFBRSxLQUFLZCxLQUFMLENBQVdDLEtBRHBCO0FBRUUsYUFBSyxFQUFFVyxZQUZUO0FBR0UsZUFBTyxFQUFFLEtBQUtHLFdBSGhCO0FBSUUsY0FBTSxFQUFFLEtBQUtYLFVBSmY7QUFLRSxpQkFBUyxFQUFDLFNBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBUUU7QUFBSyxpQkFBTSxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFNLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBUkYsQ0FKRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVzRkFoQkYsQ0FERjtBQWlIRDs7OztFQXJKcUJZLCtDOztBQXVKeEIsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1QsaUJBQWEsRUFBRVUsaUVBQWtCLENBQUNWLHdFQUFELEVBQWdCUyxRQUFoQjtBQURPLEdBQWY7QUFBQSxDQUEzQjs7QUFHZUUsMkhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NuQixTQUFsQyxDQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjQ3MTQ4ZjcyYTAxNjU0NmFmNWU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFFyUmVhZGVyIGZyb20gJ3JlYWN0LXFyLXJlYWRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2NhbnFyX2FjdGlvbiB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvb3JkZXJBY3Rpb24nO1xyXG4vLyBsZXQgUXJSZWFkZXIgPSAnJztcclxuY2xhc3MgUXJTY2FubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVsYXk6IDEwMCxcclxuICAgICAgcmVzdWx0OiAnTm8gcmVzdWx0JyxcclxuICAgICAgYXBwSXNNb3VudGVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVTY2FuID0gdGhpcy5oYW5kbGVTY2FuLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGltcG9ydCgncmVhY3QtcXItcmVhZGVyJyk7XHJcbiAgICAvLyBRclJlYWRlciA9IHJlc3VsdC5RclJlYWRlcjtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICBhcHBJc01vdW50ZWQ6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9XHJcbiAgaGFuZGxlU2NhbihkYXRhKSB7XHJcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtcclxuICAgIC8vICAgcmVzdWx0OiBkYXRhLFxyXG4gICAgLy8gfSk7XHJcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLCAndGhpcyBpcyBjb2RlICcpO1xyXG4gICAgICB0aGlzLnByb3BzLnNjYW5xcl9hY3Rpb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUVycm9yKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcmV2aWV3U3R5bGUgPSB7XHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1dC1ib3JkZXJcIj48L2Rpdj5cclxuICAgICAgICB7LyogPE5vU1NSPiAqL31cclxuICAgICAgICB7Lyoge3RoaXMuc3RhdGUuYXBwSXNNb3VudGVkID8gKCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyLXNjYW5cIj5cclxuICAgICAgICAgIDxRclJlYWRlclxyXG4gICAgICAgICAgICBkZWxheT17dGhpcy5zdGF0ZS5kZWxheX1cclxuICAgICAgICAgICAgc3R5bGU9e3ByZXZpZXdTdHlsZX1cclxuICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVFcnJvcn1cclxuICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInFyc3R5bGVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaW9kZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFzZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5xcnN0eWxlIGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibGFjayAycHgsIHRyYW5zcGFyZW50IDJweCkgMCAwLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrIDJweCwgdHJhbnNwYXJlbnQgMnB4KSAwIDEwMCUsXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjayAycHgsIHRyYW5zcGFyZW50IDJweCkgMTAwJSAwLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgYmxhY2sgMnB4LCB0cmFuc3BhcmVudCAycHgpIDEwMCUgMTAwJSxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgYmxhY2sgMnB4LCB0cmFuc3BhcmVudCAycHgpIDAgMCxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgYmxhY2sgMnB4LCB0cmFuc3BhcmVudCAycHgpIDEwMCUgMCxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMnB4LCB0cmFuc3BhcmVudCAycHgpIDAgMTAwJSxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2sgMnB4LCB0cmFuc3BhcmVudCAycHgpIDEwMCUgMTAwJTtcclxuICAgICAgICBcclxuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDIwdmggc29saWQgIzAwMDAwMDRkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAyMHZoIHNvbGlkICMwMDAwMDA0ZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1dmggc29saWQgIzAwMDAwMDRkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogNXZoIHNvbGlkICMwMDAwMDA0ZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xcnN0eWxlIHNlY3Rpb257XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLnByZWxvYWRlci1zY2FuIHtcclxuICAgICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByZWxvYWRlci1zY2FuIC5sYXNlciB7XHJcbiAgICAgICAgICAvLyB3aWR0aDogMTUwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJlZDtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FubmluZyAycyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FubmluZyAycyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByZWxvYWRlci1zY2FuIC5kaW9kZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogYmVhbSAuMDFzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IGJlYW0gLjAxcyBpbmZpbml0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBiZWFtIHtcclxuICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBrZXlmcmFtZXMgYmVhbSB7XHJcbiAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2Nhbm5pbmcge1xyXG4gICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAa2V5ZnJhbWVzIHNjYW5uaW5nIHtcclxuICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzY2FucXJfYWN0aW9uOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2NhbnFyX2FjdGlvbiwgZGlzcGF0Y2gpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFFyU2Nhbm5lcik7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==