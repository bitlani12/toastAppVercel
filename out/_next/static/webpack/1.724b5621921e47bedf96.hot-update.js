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
      console.log(data, 'this is code ');
      this.setState({
        result: data
      });

      if (data !== null) {
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
      }), __jsx(react_qr_reader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: this.state.delay,
        style: previewStyle,
        onError: this.handleError,
        onScan: this.handleScan,
        className: "qrstyle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, this.state.result), __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }, "\n        .qrstyle div {\n          width: 100px;\n          height: 100px;\n        \n          background:\n            linear-gradient(to right, black 4px, transparent 4px) 0 0,\n            linear-gradient(to right, black 4px, transparent 4px) 0 100%,\n            linear-gradient(to left, black 4px, transparent 4px) 100% 0,\n            linear-gradient(to left, black 4px, transparent 4px) 100% 100%,\n            linear-gradient(to bottom, black 4px, transparent 4px) 0 0,\n            linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,\n            linear-gradient(to top, black 4px, transparent 4px) 0 100%,\n            linear-gradient(to top, black 4px, transparent 4px) 100% 100%;\n        \n          background-repeat: no-repeat;\n          background-size: 20px 20px;\n          box-shadow: none !important;\n        }\n        body{\n          margin: 0px;\n          padding: 0px;\n        }\n        .qrstyle section{\n          overflow: hidden;\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    padding-top:0px !important;\n        }\n        "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL1FyU2Nhbm5lci9RclNjYW5uZXIuanMiXSwibmFtZXMiOlsiUXJTY2FubmVyIiwicHJvcHMiLCJzdGF0ZSIsImRlbGF5IiwicmVzdWx0IiwiYXBwSXNNb3VudGVkIiwiaGFuZGxlU2NhbiIsImJpbmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic2NhbnFyX2FjdGlvbiIsImVyciIsImVycm9yIiwicHJldmlld1N0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVFcnJvciIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7SUFDTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsR0FESTtBQUVYQyxZQUFNLEVBQUUsV0FGRztBQUdYQyxrQkFBWSxFQUFFO0FBSEgsS0FBYjtBQU1BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIseUdBQWxCO0FBUmlCO0FBU2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQVFVQyxJLEVBQU07QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFBa0IsZUFBbEI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFDWlAsY0FBTSxFQUFFSTtBQURJLE9BQWQ7O0FBR0EsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsYUFBS1AsS0FBTCxDQUFXVyxhQUFYLENBQXlCSixJQUF6QjtBQUNEO0FBQ0Y7OztnQ0FDV0ssRyxFQUFLO0FBQ2ZKLGFBQU8sQ0FBQ0ssS0FBUixDQUFjRCxHQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQU1FLFlBQVksR0FBRztBQUNuQkMsY0FBTSxFQUFFLE9BRFc7QUFFbkJDLGFBQUssRUFBRTtBQUZZLE9BQXJCO0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBSUUsTUFBQyxzREFBRDtBQUNFLGFBQUssRUFBRSxLQUFLZixLQUFMLENBQVdDLEtBRHBCO0FBRUUsYUFBSyxFQUFFWSxZQUZUO0FBR0UsZUFBTyxFQUFFLEtBQUtHLFdBSGhCO0FBSUUsY0FBTSxFQUFFLEtBQUtaLFVBSmY7QUFLRSxpQkFBUyxFQUFDLFNBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBQUtKLEtBQUwsQ0FBV0UsTUFBZixDQWZGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWxDQWhCRixDQURGO0FBa0REOzs7O0VBdEZxQmUsK0M7O0FBd0Z4QixJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDVCxpQkFBYSxFQUFFVSxpRUFBa0IsQ0FBQ1Ysd0VBQUQsRUFBZ0JTLFFBQWhCO0FBRE8sR0FBZjtBQUFBLENBQTNCOztBQUdlRSwySEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ3BCLFNBQWxDLENBQWYsRSxDQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuNzI0YjU2MjE5MjFlNDdiZWRmOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUXJSZWFkZXIgZnJvbSAncmVhY3QtcXItcmVhZGVyJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzY2FucXJfYWN0aW9uIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9vcmRlckFjdGlvbic7XHJcbi8vIGxldCBRclJlYWRlciA9ICcnO1xyXG5jbGFzcyBRclNjYW5uZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZWxheTogMTAwLFxyXG4gICAgICByZXN1bHQ6ICdObyByZXN1bHQnLFxyXG4gICAgICBhcHBJc01vdW50ZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRsZVNjYW4gPSB0aGlzLmhhbmRsZVNjYW4uYmluZCh0aGlzKTtcclxuICB9XHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBsZXQgcmVzdWx0ID0gYXdhaXQgaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKTtcclxuICAgIC8vIFFyUmVhZGVyID0gcmVzdWx0LlFyUmVhZGVyO1xyXG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAvLyAgIGFwcElzTW91bnRlZDogdHJ1ZSxcclxuICAgIC8vIH0pO1xyXG4gIH1cclxuICBoYW5kbGVTY2FuKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsICd0aGlzIGlzIGNvZGUgJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcmVzdWx0OiBkYXRhLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnByb3BzLnNjYW5xcl9hY3Rpb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUVycm9yKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcmV2aWV3U3R5bGUgPSB7XHJcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1dC1ib3JkZXJcIj48L2Rpdj5cclxuICAgICAgICB7LyogPE5vU1NSPiAqL31cclxuICAgICAgICB7Lyoge3RoaXMuc3RhdGUuYXBwSXNNb3VudGVkID8gKCAqL31cclxuICAgICAgICA8UXJSZWFkZXJcclxuICAgICAgICAgIGRlbGF5PXt0aGlzLnN0YXRlLmRlbGF5fVxyXG4gICAgICAgICAgc3R5bGU9e3ByZXZpZXdTdHlsZX1cclxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XHJcbiAgICAgICAgICBvblNjYW49e3RoaXMuaGFuZGxlU2Nhbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInFyc3R5bGVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiAvLyBudWxsfSAqL31cclxuICAgICAgICB7LyogPC9Ob1NTUj4gKi99XHJcbiAgICAgICAgey8qICovfVxyXG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLnJlc3VsdH08L3A+XHJcbiAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgLnFyc3R5bGUgZGl2IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOlxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsYWNrIDRweCwgdHJhbnNwYXJlbnQgNHB4KSAwIDAsXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgYmxhY2sgNHB4LCB0cmFuc3BhcmVudCA0cHgpIDAgMTAwJSxcclxuICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGJsYWNrIDRweCwgdHJhbnNwYXJlbnQgNHB4KSAxMDAlIDAsXHJcbiAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBibGFjayA0cHgsIHRyYW5zcGFyZW50IDRweCkgMTAwJSAxMDAlLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBibGFjayA0cHgsIHRyYW5zcGFyZW50IDRweCkgMCAwLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBibGFjayA0cHgsIHRyYW5zcGFyZW50IDRweCkgMTAwJSAwLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayA0cHgsIHRyYW5zcGFyZW50IDRweCkgMCAxMDAlLFxyXG4gICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayA0cHgsIHRyYW5zcGFyZW50IDRweCkgMTAwJSAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xcnN0eWxlIHNlY3Rpb257XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2NhbnFyX2FjdGlvbjogYmluZEFjdGlvbkNyZWF0b3JzKHNjYW5xcl9hY3Rpb24sIGRpc3BhdGNoKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShRclNjYW5uZXIpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=