webpackHotUpdate("static\\development\\pages\\join_table.js",{

/***/ "./node_modules/react-otp-input/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-otp-input/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// keyCode constants
var BACKSPACE = 8;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;
var DELETE = 46;

// Doesn't really check if it's a style Object
// Basic implemenetation to check if it's not a string
// of classNames and is an Object
// TODO: Better implementation
var isStyleObject = function isStyleObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var SingleOtpInput = function (_PureComponent) {
  _inherits(SingleOtpInput, _PureComponent);

  function SingleOtpInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleOtpInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleOtpInput.__proto__ || Object.getPrototypeOf(SingleOtpInput)).call.apply(_ref, [this].concat(args))), _this), _this.getClasses = function () {
      for (var _len2 = arguments.length, classes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      return classes.filter(function (c) {
        return !isStyleObject(c) && c !== false;
      }).join(' ');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleOtpInput, [{
    key: 'componentDidMount',


    // Focus on first render
    // Only when shouldAutoFocus is true
    value: function componentDidMount() {
      var input = this.input,
          _props = this.props,
          focus = _props.focus,
          shouldAutoFocus = _props.shouldAutoFocus;


      if (input && focus && shouldAutoFocus) {
        input.focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var input = this.input,
          focus = this.props.focus;

      // Check if focusedInput changed
      // Prevent calling function if input already in focus

      if (prevProps.focus !== focus && input && focus) {
        input.focus();
        input.select();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          separator = _props2.separator,
          isLastChild = _props2.isLastChild,
          inputStyle = _props2.inputStyle,
          focus = _props2.focus,
          isDisabled = _props2.isDisabled,
          hasErrored = _props2.hasErrored,
          errorStyle = _props2.errorStyle,
          focusStyle = _props2.focusStyle,
          disabledStyle = _props2.disabledStyle,
          shouldAutoFocus = _props2.shouldAutoFocus,
          isInputNum = _props2.isInputNum,
          value = _props2.value,
          rest = _objectWithoutProperties(_props2, ['separator', 'isLastChild', 'inputStyle', 'focus', 'isDisabled', 'hasErrored', 'errorStyle', 'focusStyle', 'disabledStyle', 'shouldAutoFocus', 'isInputNum', 'value']);

      var numValueLimits = isInputNum ? { min: 0, max: 9 } : {};

      return _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement('input', _extends({
          style: Object.assign({ width: '1em', textAlign: 'center' }, isStyleObject(inputStyle) && inputStyle, focus && isStyleObject(focusStyle) && focusStyle, isDisabled && isStyleObject(disabledStyle) && disabledStyle, hasErrored && isStyleObject(errorStyle) && errorStyle),
          className: this.getClasses(inputStyle, focus && focusStyle, isDisabled && disabledStyle, hasErrored && errorStyle),
          type: isInputNum ? 'number' : 'tel'
        }, numValueLimits, {
          maxLength: '1',
          ref: function ref(input) {
            _this2.input = input;
          },
          disabled: isDisabled,
          value: value ? value : ''
        }, rest)),
        !isLastChild && separator
      );
    }
  }]);

  return SingleOtpInput;
}(_react.PureComponent);

var OtpInput = function (_Component) {
  _inherits(OtpInput, _Component);

  function OtpInput() {
    var _ref2;

    var _temp2, _this3, _ret2;

    _classCallCheck(this, OtpInput);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref2 = OtpInput.__proto__ || Object.getPrototypeOf(OtpInput)).call.apply(_ref2, [this].concat(args))), _this3), _this3.state = {
      activeInput: 0
    }, _this3.getOtpValue = function () {
      return _this3.props.value ? _this3.props.value.toString().split('') : [];
    }, _this3.handleOtpChange = function (otp) {
      var _this3$props = _this3.props,
          onChange = _this3$props.onChange,
          isInputNum = _this3$props.isInputNum;

      var otpValue = otp.join('');
      onChange(isInputNum ? Number(otpValue) : otpValue);
    }, _this3.focusInput = function (input) {
      var numInputs = _this3.props.numInputs;

      var activeInput = Math.max(Math.min(numInputs - 1, input), 0);

      _this3.setState({ activeInput: activeInput });
    }, _this3.focusNextInput = function () {
      var activeInput = _this3.state.activeInput;

      _this3.focusInput(activeInput + 1);
    }, _this3.focusPrevInput = function () {
      var activeInput = _this3.state.activeInput;

      _this3.focusInput(activeInput - 1);
    }, _this3.changeCodeAtFocus = function (value) {
      var activeInput = _this3.state.activeInput;

      var otp = _this3.getOtpValue();
      otp[activeInput] = value[0];

      _this3.handleOtpChange(otp);
    }, _this3.handleOnPaste = function (e) {
      e.preventDefault();
      var numInputs = _this3.props.numInputs;
      var activeInput = _this3.state.activeInput;

      var otp = _this3.getOtpValue();

      // Get pastedData in an array of max size (num of inputs - current position)
      var pastedData = e.clipboardData.getData('text/plain').slice(0, numInputs - activeInput).split('');

      // Paste data from focused input onwards
      for (var pos = 0; pos < numInputs; ++pos) {
        if (pos >= activeInput && pastedData.length > 0) {
          otp[pos] = pastedData.shift();
        }
      }

      _this3.handleOtpChange(otp);
    }, _this3.handleOnChange = function (e) {
      _this3.changeCodeAtFocus(e.target.value);
      _this3.focusNextInput();
    }, _this3.handleOnKeyDown = function (e) {
      if (e.keyCode === BACKSPACE || e.key === 'Backspace') {
        e.preventDefault();
        _this3.changeCodeAtFocus('');
        _this3.focusPrevInput();
      } else if (e.keyCode === DELETE || e.key === 'Delete') {
        e.preventDefault();
        _this3.changeCodeAtFocus('');
      } else if (e.keyCode === LEFT_ARROW || e.key === 'ArrowLeft') {
        e.preventDefault();
        _this3.focusPrevInput();
      } else if (e.keyCode === RIGHT_ARROW || e.key === 'ArrowRight') {
        e.preventDefault();
        _this3.focusNextInput();
      }
    }, _this3.checkLength = function (e) {
      if (e.target.value.length > 1) {
        e.preventDefault();
        _this3.focusNextInput();
      }
    }, _this3.renderInputs = function () {
      var activeInput = _this3.state.activeInput;
      var _this3$props2 = _this3.props,
          numInputs = _this3$props2.numInputs,
          inputStyle = _this3$props2.inputStyle,
          focusStyle = _this3$props2.focusStyle,
          separator = _this3$props2.separator,
          isDisabled = _this3$props2.isDisabled,
          disabledStyle = _this3$props2.disabledStyle,
          hasErrored = _this3$props2.hasErrored,
          errorStyle = _this3$props2.errorStyle,
          shouldAutoFocus = _this3$props2.shouldAutoFocus,
          isInputNum = _this3$props2.isInputNum;

      var otp = _this3.getOtpValue();
      var inputs = [];

      var _loop = function _loop(i) {
        inputs.push(_react2.default.createElement(SingleOtpInput, {
          key: i,
          focus: activeInput === i,
          value: otp && otp[i],
          onChange: _this3.handleOnChange,
          onKeyDown: _this3.handleOnKeyDown,
          onInput: _this3.checkLength,
          onPaste: _this3.handleOnPaste,
          onFocus: function onFocus(e) {
            _this3.setState({ activeInput: i });
            e.target.select();
          },
          onBlur: function onBlur() {
            return _this3.setState({ activeInput: -1 });
          },
          separator: separator,
          inputStyle: inputStyle,
          focusStyle: focusStyle,
          isLastChild: i === numInputs - 1,
          isDisabled: isDisabled,
          disabledStyle: disabledStyle,
          hasErrored: hasErrored,
          errorStyle: errorStyle,
          shouldAutoFocus: shouldAutoFocus,
          isInputNum: isInputNum
        }));
      };

      for (var i = 0; i < numInputs; i++) {
        _loop(i);
      }

      return inputs;
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  // Helper to return OTP from input


  // Focus on input by index


  // Focus on next input


  // Focus on previous input


  // Change OTP value at focused input


  // Handle pasted OTP


  // Handle cases of backspace, delete, left arrow, right arrow


  _createClass(OtpInput, [{
    key: 'render',
    value: function render() {
      var containerStyle = this.props.containerStyle;


      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({ display: 'flex' }, isStyleObject(containerStyle) && containerStyle),
          className: !isStyleObject(containerStyle) && containerStyle
        },
        this.renderInputs()
      );
    }
  }]);

  return OtpInput;
}(_react.Component);

OtpInput.defaultProps = {
  numInputs: 4,
  onChange: function onChange(otp) {
    return console.log(otp);
  },
  isDisabled: false,
  shouldAutoFocus: false,
  value: ''
};
exports.default = OtpInput;

/***/ }),

/***/ "./src/pages/join_table.js":
/*!*********************************!*\
  !*** ./src/pages/join_table.js ***!
  \*********************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-otp-input */ "./node_modules/react-otp-input/lib/index.js");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\join_table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 30px;\n  font-weight: 500;\n  right: 17px;\n  color: #3cbcb4;\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  opacity: 0.8;\n  background: transparent linear-gradient(172deg, #78ffd6 0%, #007991 100%) 0%\n    0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  padding: 5px 5px;\n  display: flex;\n  border-radius: 100px;\n  box-shadow: 0 0 5px #70707029;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SetFilterIcon = styled.div(_templateObject());
_c = SetFilterIcon;
var CheckoutText = styled.div(_templateObject2());
_c2 = CheckoutText;

var JoinTable = function JoinTable() {
  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "fo15",
    style: {
      fontWeight: 500,
      color: '#404040'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "It looks like there's already someone on this table. To join, you need to ask the person for the 4 digit code."), __jsx("h3", {
    style: {
      fontSize: 18,
      color: '#656565'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "Join your friends on this table"), __jsx("small", {
    className: "fo12 secondText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Enter the 4 digit code displayed on your friend's screen"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(react_otp_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onChange: function onChange(otp) {
      return _this.setState({
        otp: otp
      });
    },
    numInputs: 6,
    value: otp,
    separator: __jsx("span", {
      style: {
        marginRight: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 26
      }
    }),
    containerStyle: "containerstyle",
    inputStyle: "inputstyle",
    isInputNum: true,
    shouldAutoFocus: true,
    focusStyle: "focusstyle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Let's go"), __jsx(SetFilterIcon, {
    onClick: _this.onverify_otp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiChevronRight"], {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }))))));
};

_c3 = JoinTable;
/* harmony default export */ __webpack_exports__["default"] = (JoinTable);

var _c, _c2, _c3;

$RefreshReg$(_c, "SetFilterIcon");
$RefreshReg$(_c2, "CheckoutText");
$RefreshReg$(_c3, "JoinTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtb3RwLWlucHV0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvam9pbl90YWJsZS5qcyJdLCJuYW1lcyI6WyJTZXRGaWx0ZXJJY29uIiwic3R5bGVkIiwiZGl2IiwiQ2hlY2tvdXRUZXh0IiwiSm9pblRhYmxlIiwicGFkZGluZyIsImZvbnRXZWlnaHQiLCJjb2xvciIsImZvbnRTaXplIiwib3RwIiwic2V0U3RhdGUiLCJtYXJnaW5SaWdodCIsIm9udmVyaWZ5X290cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixvR0FBb0csbUJBQW1CLEVBQUUsbUJBQW1CLDhIQUE4SDs7QUFFMVEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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U0UsY0FBVSxFQUFDLFlBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyxhQUFEO0FBQWUsV0FBTyxFQUFFLEtBQUksQ0FBQ0MsWUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsU0FBSyxFQUFFO0FBQUVKLGNBQVEsRUFBRSxFQUFaO0FBQWdCRCxXQUFLLEVBQUU7QUFBdkIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0F6QkYsQ0FERixDQURGLENBREY7QUFzQ0QsQ0F2Q0Q7O01BQU1ILFM7QUF3Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxqb2luX3RhYmxlLmpzLjNlYTczMTYyMmMwYWIxODI3MGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy8ga2V5Q29kZSBjb25zdGFudHNcbnZhciBCQUNLU1BBQ0UgPSA4O1xudmFyIExFRlRfQVJST1cgPSAzNztcbnZhciBSSUdIVF9BUlJPVyA9IDM5O1xudmFyIERFTEVURSA9IDQ2O1xuXG4vLyBEb2Vzbid0IHJlYWxseSBjaGVjayBpZiBpdCdzIGEgc3R5bGUgT2JqZWN0XG4vLyBCYXNpYyBpbXBsZW1lbmV0YXRpb24gdG8gY2hlY2sgaWYgaXQncyBub3QgYSBzdHJpbmdcbi8vIG9mIGNsYXNzTmFtZXMgYW5kIGlzIGFuIE9iamVjdFxuLy8gVE9ETzogQmV0dGVyIGltcGxlbWVudGF0aW9uXG52YXIgaXNTdHlsZU9iamVjdCA9IGZ1bmN0aW9uIGlzU3R5bGVPYmplY3Qob2JqKSB7XG4gIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqKSkgPT09ICdvYmplY3QnO1xufTtcblxudmFyIFNpbmdsZU90cElucHV0ID0gZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTaW5nbGVPdHBJbnB1dCwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNpbmdsZU90cElucHV0KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaW5nbGVPdHBJbnB1dCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU2luZ2xlT3RwSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTaW5nbGVPdHBJbnB1dCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmdldENsYXNzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBjbGFzc2VzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gIWlzU3R5bGVPYmplY3QoYykgJiYgYyAhPT0gZmFsc2U7XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2luZ2xlT3RwSW5wdXQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuXG5cbiAgICAvLyBGb2N1cyBvbiBmaXJzdCByZW5kZXJcbiAgICAvLyBPbmx5IHdoZW4gc2hvdWxkQXV0b0ZvY3VzIGlzIHRydWVcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgaW5wdXQgPSB0aGlzLmlucHV0LFxuICAgICAgICAgIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9jdXMgPSBfcHJvcHMuZm9jdXMsXG4gICAgICAgICAgc2hvdWxkQXV0b0ZvY3VzID0gX3Byb3BzLnNob3VsZEF1dG9Gb2N1cztcblxuXG4gICAgICBpZiAoaW5wdXQgJiYgZm9jdXMgJiYgc2hvdWxkQXV0b0ZvY3VzKSB7XG4gICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgdmFyIGlucHV0ID0gdGhpcy5pbnB1dCxcbiAgICAgICAgICBmb2N1cyA9IHRoaXMucHJvcHMuZm9jdXM7XG5cbiAgICAgIC8vIENoZWNrIGlmIGZvY3VzZWRJbnB1dCBjaGFuZ2VkXG4gICAgICAvLyBQcmV2ZW50IGNhbGxpbmcgZnVuY3Rpb24gaWYgaW5wdXQgYWxyZWFkeSBpbiBmb2N1c1xuXG4gICAgICBpZiAocHJldlByb3BzLmZvY3VzICE9PSBmb2N1cyAmJiBpbnB1dCAmJiBmb2N1cykge1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBpbnB1dC5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNlcGFyYXRvciA9IF9wcm9wczIuc2VwYXJhdG9yLFxuICAgICAgICAgIGlzTGFzdENoaWxkID0gX3Byb3BzMi5pc0xhc3RDaGlsZCxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIGZvY3VzID0gX3Byb3BzMi5mb2N1cyxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3Byb3BzMi5pc0Rpc2FibGVkLFxuICAgICAgICAgIGhhc0Vycm9yZWQgPSBfcHJvcHMyLmhhc0Vycm9yZWQsXG4gICAgICAgICAgZXJyb3JTdHlsZSA9IF9wcm9wczIuZXJyb3JTdHlsZSxcbiAgICAgICAgICBmb2N1c1N0eWxlID0gX3Byb3BzMi5mb2N1c1N0eWxlLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGUgPSBfcHJvcHMyLmRpc2FibGVkU3R5bGUsXG4gICAgICAgICAgc2hvdWxkQXV0b0ZvY3VzID0gX3Byb3BzMi5zaG91bGRBdXRvRm9jdXMsXG4gICAgICAgICAgaXNJbnB1dE51bSA9IF9wcm9wczIuaXNJbnB1dE51bSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wczIudmFsdWUsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ3NlcGFyYXRvcicsICdpc0xhc3RDaGlsZCcsICdpbnB1dFN0eWxlJywgJ2ZvY3VzJywgJ2lzRGlzYWJsZWQnLCAnaGFzRXJyb3JlZCcsICdlcnJvclN0eWxlJywgJ2ZvY3VzU3R5bGUnLCAnZGlzYWJsZWRTdHlsZScsICdzaG91bGRBdXRvRm9jdXMnLCAnaXNJbnB1dE51bScsICd2YWx1ZSddKTtcblxuICAgICAgdmFyIG51bVZhbHVlTGltaXRzID0gaXNJbnB1dE51bSA/IHsgbWluOiAwLCBtYXg6IDkgfSA6IHt9O1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oeyB3aWR0aDogJzFlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfSwgaXNTdHlsZU9iamVjdChpbnB1dFN0eWxlKSAmJiBpbnB1dFN0eWxlLCBmb2N1cyAmJiBpc1N0eWxlT2JqZWN0KGZvY3VzU3R5bGUpICYmIGZvY3VzU3R5bGUsIGlzRGlzYWJsZWQgJiYgaXNTdHlsZU9iamVjdChkaXNhYmxlZFN0eWxlKSAmJiBkaXNhYmxlZFN0eWxlLCBoYXNFcnJvcmVkICYmIGlzU3R5bGVPYmplY3QoZXJyb3JTdHlsZSkgJiYgZXJyb3JTdHlsZSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzZXMoaW5wdXRTdHlsZSwgZm9jdXMgJiYgZm9jdXNTdHlsZSwgaXNEaXNhYmxlZCAmJiBkaXNhYmxlZFN0eWxlLCBoYXNFcnJvcmVkICYmIGVycm9yU3R5bGUpLFxuICAgICAgICAgIHR5cGU6IGlzSW5wdXROdW0gPyAnbnVtYmVyJyA6ICd0ZWwnXG4gICAgICAgIH0sIG51bVZhbHVlTGltaXRzLCB7XG4gICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaW5wdXQpIHtcbiAgICAgICAgICAgIF90aGlzMi5pbnB1dCA9IGlucHV0O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUgOiAnJ1xuICAgICAgICB9LCByZXN0KSksXG4gICAgICAgICFpc0xhc3RDaGlsZCAmJiBzZXBhcmF0b3JcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNpbmdsZU90cElucHV0O1xufShfcmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbnZhciBPdHBJbnB1dCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPdHBJbnB1dCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3RwSW5wdXQoKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgdmFyIF90ZW1wMiwgX3RoaXMzLCBfcmV0MjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdHBJbnB1dCk7XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYyID0gT3RwSW5wdXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPdHBJbnB1dCkpLmNhbGwuYXBwbHkoX3JlZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMzKSwgX3RoaXMzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlSW5wdXQ6IDBcbiAgICB9LCBfdGhpczMuZ2V0T3RwVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLnByb3BzLnZhbHVlID8gX3RoaXMzLnByb3BzLnZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJycpIDogW107XG4gICAgfSwgX3RoaXMzLmhhbmRsZU90cENoYW5nZSA9IGZ1bmN0aW9uIChvdHApIHtcbiAgICAgIHZhciBfdGhpczMkcHJvcHMgPSBfdGhpczMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpczMkcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgaXNJbnB1dE51bSA9IF90aGlzMyRwcm9wcy5pc0lucHV0TnVtO1xuXG4gICAgICB2YXIgb3RwVmFsdWUgPSBvdHAuam9pbignJyk7XG4gICAgICBvbkNoYW5nZShpc0lucHV0TnVtID8gTnVtYmVyKG90cFZhbHVlKSA6IG90cFZhbHVlKTtcbiAgICB9LCBfdGhpczMuZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG51bUlucHV0cyA9IF90aGlzMy5wcm9wcy5udW1JbnB1dHM7XG5cbiAgICAgIHZhciBhY3RpdmVJbnB1dCA9IE1hdGgubWF4KE1hdGgubWluKG51bUlucHV0cyAtIDEsIGlucHV0KSwgMCk7XG5cbiAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGFjdGl2ZUlucHV0OiBhY3RpdmVJbnB1dCB9KTtcbiAgICB9LCBfdGhpczMuZm9jdXNOZXh0SW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5wdXQgPSBfdGhpczMuc3RhdGUuYWN0aXZlSW5wdXQ7XG5cbiAgICAgIF90aGlzMy5mb2N1c0lucHV0KGFjdGl2ZUlucHV0ICsgMSk7XG4gICAgfSwgX3RoaXMzLmZvY3VzUHJldklucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFjdGl2ZUlucHV0ID0gX3RoaXMzLnN0YXRlLmFjdGl2ZUlucHV0O1xuXG4gICAgICBfdGhpczMuZm9jdXNJbnB1dChhY3RpdmVJbnB1dCAtIDEpO1xuICAgIH0sIF90aGlzMy5jaGFuZ2VDb2RlQXRGb2N1cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGFjdGl2ZUlucHV0ID0gX3RoaXMzLnN0YXRlLmFjdGl2ZUlucHV0O1xuXG4gICAgICB2YXIgb3RwID0gX3RoaXMzLmdldE90cFZhbHVlKCk7XG4gICAgICBvdHBbYWN0aXZlSW5wdXRdID0gdmFsdWVbMF07XG5cbiAgICAgIF90aGlzMy5oYW5kbGVPdHBDaGFuZ2Uob3RwKTtcbiAgICB9LCBfdGhpczMuaGFuZGxlT25QYXN0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgbnVtSW5wdXRzID0gX3RoaXMzLnByb3BzLm51bUlucHV0cztcbiAgICAgIHZhciBhY3RpdmVJbnB1dCA9IF90aGlzMy5zdGF0ZS5hY3RpdmVJbnB1dDtcblxuICAgICAgdmFyIG90cCA9IF90aGlzMy5nZXRPdHBWYWx1ZSgpO1xuXG4gICAgICAvLyBHZXQgcGFzdGVkRGF0YSBpbiBhbiBhcnJheSBvZiBtYXggc2l6ZSAobnVtIG9mIGlucHV0cyAtIGN1cnJlbnQgcG9zaXRpb24pXG4gICAgICB2YXIgcGFzdGVkRGF0YSA9IGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJykuc2xpY2UoMCwgbnVtSW5wdXRzIC0gYWN0aXZlSW5wdXQpLnNwbGl0KCcnKTtcblxuICAgICAgLy8gUGFzdGUgZGF0YSBmcm9tIGZvY3VzZWQgaW5wdXQgb253YXJkc1xuICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgbnVtSW5wdXRzOyArK3Bvcykge1xuICAgICAgICBpZiAocG9zID49IGFjdGl2ZUlucHV0ICYmIHBhc3RlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG90cFtwb3NdID0gcGFzdGVkRGF0YS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzMy5oYW5kbGVPdHBDaGFuZ2Uob3RwKTtcbiAgICB9LCBfdGhpczMuaGFuZGxlT25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMzLmNoYW5nZUNvZGVBdEZvY3VzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIF90aGlzMy5mb2N1c05leHRJbnB1dCgpO1xuICAgIH0sIF90aGlzMy5oYW5kbGVPbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGUua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzMy5jaGFuZ2VDb2RlQXRGb2N1cygnJyk7XG4gICAgICAgIF90aGlzMy5mb2N1c1ByZXZJbnB1dCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IERFTEVURSB8fCBlLmtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpczMuY2hhbmdlQ29kZUF0Rm9jdXMoJycpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cgfHwgZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX3RoaXMzLmZvY3VzUHJldklucHV0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cgfHwgZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzMy5mb2N1c05leHRJbnB1dCgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzMy5jaGVja0xlbmd0aCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIF90aGlzMy5mb2N1c05leHRJbnB1dCgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzMy5yZW5kZXJJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYWN0aXZlSW5wdXQgPSBfdGhpczMuc3RhdGUuYWN0aXZlSW5wdXQ7XG4gICAgICB2YXIgX3RoaXMzJHByb3BzMiA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgICBudW1JbnB1dHMgPSBfdGhpczMkcHJvcHMyLm51bUlucHV0cyxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3RoaXMzJHByb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIGZvY3VzU3R5bGUgPSBfdGhpczMkcHJvcHMyLmZvY3VzU3R5bGUsXG4gICAgICAgICAgc2VwYXJhdG9yID0gX3RoaXMzJHByb3BzMi5zZXBhcmF0b3IsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzMyRwcm9wczIuaXNEaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlID0gX3RoaXMzJHByb3BzMi5kaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGhhc0Vycm9yZWQgPSBfdGhpczMkcHJvcHMyLmhhc0Vycm9yZWQsXG4gICAgICAgICAgZXJyb3JTdHlsZSA9IF90aGlzMyRwcm9wczIuZXJyb3JTdHlsZSxcbiAgICAgICAgICBzaG91bGRBdXRvRm9jdXMgPSBfdGhpczMkcHJvcHMyLnNob3VsZEF1dG9Gb2N1cyxcbiAgICAgICAgICBpc0lucHV0TnVtID0gX3RoaXMzJHByb3BzMi5pc0lucHV0TnVtO1xuXG4gICAgICB2YXIgb3RwID0gX3RoaXMzLmdldE90cFZhbHVlKCk7XG4gICAgICB2YXIgaW5wdXRzID0gW107XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgaW5wdXRzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlT3RwSW5wdXQsIHtcbiAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgZm9jdXM6IGFjdGl2ZUlucHV0ID09PSBpLFxuICAgICAgICAgIHZhbHVlOiBvdHAgJiYgb3RwW2ldLFxuICAgICAgICAgIG9uQ2hhbmdlOiBfdGhpczMuaGFuZGxlT25DaGFuZ2UsXG4gICAgICAgICAgb25LZXlEb3duOiBfdGhpczMuaGFuZGxlT25LZXlEb3duLFxuICAgICAgICAgIG9uSW5wdXQ6IF90aGlzMy5jaGVja0xlbmd0aCxcbiAgICAgICAgICBvblBhc3RlOiBfdGhpczMuaGFuZGxlT25QYXN0ZSxcbiAgICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgICAgICAgIF90aGlzMy5zZXRTdGF0ZSh7IGFjdGl2ZUlucHV0OiBpIH0pO1xuICAgICAgICAgICAgZS50YXJnZXQuc2VsZWN0KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0U3RhdGUoeyBhY3RpdmVJbnB1dDogLTEgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgICAgICAgICBpbnB1dFN0eWxlOiBpbnB1dFN0eWxlLFxuICAgICAgICAgIGZvY3VzU3R5bGU6IGZvY3VzU3R5bGUsXG4gICAgICAgICAgaXNMYXN0Q2hpbGQ6IGkgPT09IG51bUlucHV0cyAtIDEsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlOiBkaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGhhc0Vycm9yZWQ6IGhhc0Vycm9yZWQsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBzaG91bGRBdXRvRm9jdXM6IHNob3VsZEF1dG9Gb2N1cyxcbiAgICAgICAgICBpc0lucHV0TnVtOiBpc0lucHV0TnVtXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtSW5wdXRzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnB1dHM7XG4gICAgfSwgX3RlbXAyKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMzLCBfcmV0Mik7XG4gIH1cblxuICAvLyBIZWxwZXIgdG8gcmV0dXJuIE9UUCBmcm9tIGlucHV0XG5cblxuICAvLyBGb2N1cyBvbiBpbnB1dCBieSBpbmRleFxuXG5cbiAgLy8gRm9jdXMgb24gbmV4dCBpbnB1dFxuXG5cbiAgLy8gRm9jdXMgb24gcHJldmlvdXMgaW5wdXRcblxuXG4gIC8vIENoYW5nZSBPVFAgdmFsdWUgYXQgZm9jdXNlZCBpbnB1dFxuXG5cbiAgLy8gSGFuZGxlIHBhc3RlZCBPVFBcblxuXG4gIC8vIEhhbmRsZSBjYXNlcyBvZiBiYWNrc3BhY2UsIGRlbGV0ZSwgbGVmdCBhcnJvdywgcmlnaHQgYXJyb3dcblxuXG4gIF9jcmVhdGVDbGFzcyhPdHBJbnB1dCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLnByb3BzLmNvbnRhaW5lclN0eWxlO1xuXG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogT2JqZWN0LmFzc2lnbih7IGRpc3BsYXk6ICdmbGV4JyB9LCBpc1N0eWxlT2JqZWN0KGNvbnRhaW5lclN0eWxlKSAmJiBjb250YWluZXJTdHlsZSksXG4gICAgICAgICAgY2xhc3NOYW1lOiAhaXNTdHlsZU9iamVjdChjb250YWluZXJTdHlsZSkgJiYgY29udGFpbmVyU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5yZW5kZXJJbnB1dHMoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT3RwSW5wdXQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5PdHBJbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIG51bUlucHV0czogNCxcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG90cCkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhvdHApO1xuICB9LFxuICBpc0Rpc2FibGVkOiBmYWxzZSxcbiAgc2hvdWxkQXV0b0ZvY3VzOiBmYWxzZSxcbiAgdmFsdWU6ICcnXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gT3RwSW5wdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBPdHBJbnB1dCBmcm9tICdyZWFjdC1vdHAtaW5wdXQnO1xyXG5pbXBvcnQgeyBGaUNoZXZyb25MZWZ0LCBGaUNoZXZyb25SaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuZXhwb3J0IGNvbnN0IFNldEZpbHRlckljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxNzJkZWcsICM3OGZmZDYgMCUsICMwMDc5OTEgMTAwJSkgMCVcclxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjNzA3MDcwMjk7XHJcbmA7XHJcbmNvbnN0IENoZWNrb3V0VGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIGNvbG9yOiAjM2NiY2I0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuYDtcclxuY29uc3QgSm9pblRhYmxlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvMTVcIiBzdHlsZT17eyBmb250V2VpZ2h0OiA1MDAsIGNvbG9yOiAnIzQwNDA0MCcgfX0+XHJcbiAgICAgICAgICAgIEl0IGxvb2tzIGxpa2UgdGhlcmUncyBhbHJlYWR5IHNvbWVvbmUgb24gdGhpcyB0YWJsZS4gVG8gam9pbiwgeW91XHJcbiAgICAgICAgICAgIG5lZWQgdG8gYXNrIHRoZSBwZXJzb24gZm9yIHRoZSA0IGRpZ2l0IGNvZGUuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBmb250U2l6ZTogMTgsIGNvbG9yOiAnIzY1NjU2NScgfX0+XHJcbiAgICAgICAgICAgIEpvaW4geW91ciBmcmllbmRzIG9uIHRoaXMgdGFibGVcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZm8xMiBzZWNvbmRUZXh0XCI+XHJcbiAgICAgICAgICAgIEVudGVyIHRoZSA0IGRpZ2l0IGNvZGUgZGlzcGxheWVkIG9uIHlvdXIgZnJpZW5kJ3Mgc2NyZWVuXHJcbiAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE90cElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvdHApID0+IHRoaXMuc2V0U3RhdGUoeyBvdHA6IG90cCB9KX1cclxuICAgICAgICAgICAgICBudW1JbnB1dHM9ezZ9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e290cH1cclxuICAgICAgICAgICAgICBzZXBhcmF0b3I9ezxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fT48L3NwYW4+fVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPVwiY29udGFpbmVyc3R5bGVcIlxyXG4gICAgICAgICAgICAgIGlucHV0U3R5bGU9XCJpbnB1dHN0eWxlXCJcclxuICAgICAgICAgICAgICBpc0lucHV0TnVtPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHNob3VsZEF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICBmb2N1c1N0eWxlPVwiZm9jdXNzdHlsZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hlY2tvdXRUZXh0PkxldCdzIGdvPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgICAgIDxTZXRGaWx0ZXJJY29uIG9uQ2xpY2s9e3RoaXMub252ZXJpZnlfb3RwfT5cclxuICAgICAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L1NldEZpbHRlckljb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBKb2luVGFibGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=