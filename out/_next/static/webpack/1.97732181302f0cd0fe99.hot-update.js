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
      }, __jsx(react_qr_reader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        delay: this.state.delay,
        style: previewStyle,
        onError: this.handleError,
        onScan: this.handleScan,
        className: "qrstyle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, this.state.result), __jsx("style", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, "\n        .qrstyle div{\n          position:relative;\n          margin:20px auto;\n          width:20%;\n          padding-bottom:20%;\n          background-color: transparent;\n          border:1px solid black;\n        }\n        .qrstyle div:before {\n          content:'';\n          position:absolute;\n          top:-1px; left:-1px;\n          border:1px solid #fff;\n          height:100%;\n          width:100%;\n          border-radius: 10%;\n      }\n        body{\n          margin: 0px;\n          padding: 0px;\n        }\n        .qrstyle section{\n          overflow: hidden;\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    padding-top:0px !important;\n        }\n        "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS1jb21wb25lbnRzL1FyU2Nhbm5lci9RclNjYW5uZXIuanMiXSwibmFtZXMiOlsiUXJTY2FubmVyIiwicHJvcHMiLCJzdGF0ZSIsImRlbGF5IiwicmVzdWx0IiwiYXBwSXNNb3VudGVkIiwiaGFuZGxlU2NhbiIsImJpbmQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic2NhbnFyX2FjdGlvbiIsImVyciIsImVycm9yIiwicHJldmlld1N0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVFcnJvciIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7SUFDTUEsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxXQUFLLEVBQUUsR0FESTtBQUVYQyxZQUFNLEVBQUUsV0FGRztBQUdYQyxrQkFBWSxFQUFFO0FBSEgsS0FBYjtBQU1BLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIseUdBQWxCO0FBUmlCO0FBU2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQVFVQyxJLEVBQU07QUFDZkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFBa0IsZUFBbEI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFDWlAsY0FBTSxFQUFFSTtBQURJLE9BQWQ7O0FBR0EsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakIsYUFBS1AsS0FBTCxDQUFXVyxhQUFYLENBQXlCSixJQUF6QjtBQUNEO0FBQ0Y7OztnQ0FDV0ssRyxFQUFLO0FBQ2ZKLGFBQU8sQ0FBQ0ssS0FBUixDQUFjRCxHQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQU1FLFlBQVksR0FBRztBQUNuQkMsY0FBTSxFQUFFLE9BRFc7QUFFbkJDLGFBQUssRUFBRTtBQUZZLE9BQXJCO0FBS0EsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQyxzREFBRDtBQUNFLGFBQUssRUFBRSxLQUFLZixLQUFMLENBQVdDLEtBRHBCO0FBRUUsYUFBSyxFQUFFWSxZQUZUO0FBR0UsZUFBTyxFQUFFLEtBQUtHLFdBSGhCO0FBSUUsY0FBTSxFQUFFLEtBQUtaLFVBSmY7QUFLRSxpQkFBUyxFQUFDLFNBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJLEtBQUtKLEtBQUwsQ0FBV0UsTUFBZixDQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxndEJBZEYsQ0FERjtBQStDRDs7OztFQW5GcUJlLCtDOztBQXFGeEIsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q1QsaUJBQWEsRUFBRVUsaUVBQWtCLENBQUNWLHdFQUFELEVBQWdCUyxRQUFoQjtBQURPLEdBQWY7QUFBQSxDQUEzQjs7QUFHZUUsMkhBQU8sQ0FBQyxJQUFELEVBQU9ILGtCQUFQLENBQVAsQ0FBa0NwQixTQUFsQyxDQUFmLEUsQ0FDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjk3NzMyMTgxMzAyZjBjZDBmZTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFFyUmVhZGVyIGZyb20gJ3JlYWN0LXFyLXJlYWRlcic7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2NhbnFyX2FjdGlvbiB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvb3JkZXJBY3Rpb24nO1xyXG4vLyBsZXQgUXJSZWFkZXIgPSAnJztcclxuY2xhc3MgUXJTY2FubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGVsYXk6IDEwMCxcclxuICAgICAgcmVzdWx0OiAnTm8gcmVzdWx0JyxcclxuICAgICAgYXBwSXNNb3VudGVkOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kbGVTY2FuID0gdGhpcy5oYW5kbGVTY2FuLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gbGV0IHJlc3VsdCA9IGF3YWl0IGltcG9ydCgncmVhY3QtcXItcmVhZGVyJyk7XHJcbiAgICAvLyBRclJlYWRlciA9IHJlc3VsdC5RclJlYWRlcjtcclxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgLy8gICBhcHBJc01vdW50ZWQ6IHRydWUsXHJcbiAgICAvLyB9KTtcclxuICB9XHJcbiAgaGFuZGxlU2NhbihkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCAndGhpcyBpcyBjb2RlICcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHJlc3VsdDogZGF0YSxcclxuICAgIH0pO1xyXG4gICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcm9wcy5zY2FucXJfYWN0aW9uKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVFcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcHJldmlld1N0eWxlID0ge1xyXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgey8qIDxOb1NTUj4gKi99XHJcbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLmFwcElzTW91bnRlZCA/ICggKi99XHJcbiAgICAgICAgPFFyUmVhZGVyXHJcbiAgICAgICAgICBkZWxheT17dGhpcy5zdGF0ZS5kZWxheX1cclxuICAgICAgICAgIHN0eWxlPXtwcmV2aWV3U3R5bGV9XHJcbiAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxyXG4gICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJxcnN0eWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiAvLyBudWxsfSAqL31cclxuICAgICAgICB7LyogPC9Ob1NTUj4gKi99XHJcbiAgICAgICAgey8qICovfVxyXG4gICAgICAgIDxwPnt0aGlzLnN0YXRlLnJlc3VsdH08L3A+XHJcbiAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgLnFyc3R5bGUgZGl2e1xyXG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW46MjBweCBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6MjAlO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206MjAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXJzdHlsZSBkaXY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDotMXB4OyBsZWZ0Oi0xcHg7XHJcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICAgIH1cclxuICAgICAgICBib2R5e1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xcnN0eWxlIHNlY3Rpb257XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2NhbnFyX2FjdGlvbjogYmluZEFjdGlvbkNyZWF0b3JzKHNjYW5xcl9hY3Rpb24sIGRpc3BhdGNoKSxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShRclNjYW5uZXIpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=