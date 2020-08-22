webpackHotUpdate("static\\development\\pages\\update_name.js",{

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./src/config/Connection.js":
/*!**********************************!*\
  !*** ./src/config/Connection.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connection; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/*
Name: Parshant Nagpal
Description : Connection file for the application
Date : 4 May 2020
*/

/* eslint-disable */
 // const apiServer = "7hyhccb00d.execute-api.us-east-1.amazonaws.com";
// const apiServer = "54.190.192.105:6025";



var apiServer = 'staging-be.toastapp.co'; //"54.190.192.105:6025";//"http://ded724c8.ngrok.io"
//uncomment these four line for use staging

var running_url = apiServer,
    http_url = "https://".concat(running_url),
    apiBase_url = "https://".concat(running_url, "/");

var Connection = /*#__PURE__*/function () {
  function Connection() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Connection);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Connection, null, [{
    key: "getResturl",
    value: function getResturl() {
      return apiBase_url;
    }
  }, {
    key: "getCmsUrl",
    value: function getCmsUrl() {
      return frontEndUrl;
    }
  }, {
    key: "getBaseUrl",
    value: function getBaseUrl() {
      return http_url;
    }
  }, {
    key: "getSuccessUrl",
    value: function getSuccessUrl() {
      return "".concat(apiBase_url, "success.html");
    }
  }, {
    key: "getErroUrl",
    value: function getErroUrl() {
      return "".concat(apiBase_url, "failure.html");
    }
  }]);

  return Connection;
}();



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

/***/ }),

/***/ "./src/pages/update_name.js":
/*!**********************************!*\
  !*** ./src/pages/update_name.js ***!
  \**********************************/
/*! exports provided: SetFilterIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFilterIcon", function() { return SetFilterIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout */ "./src/components/layout/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_authAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../redux/actions/authAction */ "./src/redux/actions/authAction.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\freelance\\crystallize-nextjs-boilerplate\\src\\pages\\update_name.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var BackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__BackgroundImage",
  componentId: "sc-1au4xmd-0"
})(["background-image:url('/static/Group 1113.svg');background-repeat:no-repeat;background-position:center;min-height:100vh;background-position-x:center;"]);
_c = BackgroundImage;
var SetFilterIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__SetFilterIcon",
  componentId: "sc-1au4xmd-1"
})(["position:fixed;bottom:50px;right:20px;opacity:0.8;background:transparent linear-gradient(172deg,#78ffd6 0%,#007991 100%) 0% 0% no-repeat padding-box;box-shadow:0px 3px 6px #00000029;opacity:1;padding:5px 5px;display:flex;border-radius:100px;box-shadow:0 0 5px #70707029;"]);
_c2 = SetFilterIcon;
var CheckoutText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "update_name__CheckoutText",
  componentId: "sc-1au4xmd-2"
})(["position:fixed;bottom:30px;font-weight:700;right:10px;color:#3cbcb4;font-size:12px;"]);
_c3 = CheckoutText;

var UpdateName = function UpdateName(props) {
  var onsubmit_name = function onsubmit_name() {
    props.sendOtp_action(login);
  };

  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(BackgroundImage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/static/Component 47 \u2013 3.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      position: 'fixed',
      bottom: 100,
      left: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h3", {
    style: {
      fontWeight: 800,
      fontSize: 18,
      color: '#404040'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "What should we call you?", ' '), __jsx("input", {
    placeholder: "Tell us your name",
    style: {
      border: 'none',
      borderBottom: 'solid #999999 0.8px',
      fontSize: 16
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(CheckoutText, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Let's Go"), __jsx(SetFilterIcon, {
    onClick: onsubmit_name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiChevronRight"], {
    style: {
      fontSize: 34,
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }))), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "\n      ::placeholder{\n          font-size:14px;\n          margin-bottom:5px;\n      }"));
};

_c4 = UpdateName;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sendOtp_action: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_authAction__WEBPACK_IMPORTED_MODULE_5__["sendOtp_action"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(UpdateName));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "BackgroundImage");
$RefreshReg$(_c2, "SetFilterIcon");
$RefreshReg$(_c3, "CheckoutText");
$RefreshReg$(_c4, "UpdateName");

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

/***/ }),

/***/ "./src/redux/RestClient/RestClient.js":
/*!********************************************!*\
  !*** ./src/redux/RestClient/RestClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





var RestClient = /*#__PURE__*/function () {
  function RestClient() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RestClient);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RestClient, null, [{
    key: "isConnected",
    value: function isConnected() {
      var context = this;
      return new Promise(function (fulfill, reject) {
        var unsubscribe; //   unsubscribe = NetInfo.addEventListener(state => {
        //     console.log("Connection type", state.type);
        //     console.log("Is connected?", state.isConnected);
        // if (state.isConnected)

        fulfill(); //  state.isConnected // this will come inside fuction
        // else {
        //   reject(state.isConnected);
        // }
        // unsubscribe();
        //   });
      });
    }
  }, {
    key: "restCall",
    value: function restCall(url, params) {
      var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'POST';
      var context = this;
      console.log(type, ' call', url, params, token);
      return new Promise(function (fulfill, reject) {
        context.isConnected().then(function () {
          fetch(url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token
            },
            body: JSON.stringify(params)
          }).then(function (response) {
            console.log('responseresponse', response);
            return response.text();
          }).then(function (responseText) {
            console.log('POST responseText*****', responseText);

            if (responseText) {
              fulfill(JSON.parse(responseText));
            } else {
              fulfill(null);
            }
          })["catch"](function (error) {
            fulfill({// message: Constants.AppConstants.Error.internetConnectivity,
            });
            console.warn('eroro', error);
          });
        })["catch"](function (error) {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.'
          });
        });
      });
    }
  }, {
    key: "getCall",
    value: function getCall(url, token) {
      var context = this;
      console.log('get call', url, token);
      return new Promise(function (fulfill, reject) {
        context.isConnected().then(function () {
          fetch(url, {
            method: 'GET',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              // "Cache-Control": "no-cache",
              Authorization: token
            }
          }).then(function (response) {
            if (response._bodyInit == '') {
              return response._bodyInit;
            }

            return response.text();
          }).then(function (responseText) {
            console.log('responseTextresponseText', responseText); // fulfill(responseText);

            if (responseText) {
              fulfill(JSON.parse(responseText));
            } else {
              fulfill(responseText);
            }
          })["catch"](function (error) {
            fulfill({// message: Constants.AppConstants.Error.internetConnectivity,
            });
            console.warn('eroro', error);
          });
        })["catch"](function (error) {
          console.log('eroro ********* ', error);
          fulfill({
            message: 'Please check your internet connectivity.'
          });
        });
      });
    }
  }]);

  return RestClient;
}();

/* harmony default export */ __webpack_exports__["default"] = (RestClient);

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

/***/ "./src/redux/actions/authAction.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/authAction.js ***!
  \*****************************************/
/*! exports provided: sendOtp_action, verifyotp_action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendOtp_action", function() { return sendOtp_action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyotp_action", function() { return verifyotp_action; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../RestClient/RestClient */ "./src/redux/RestClient/RestClient.js");
/* harmony import */ var _config_Connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/Connection */ "./src/config/Connection.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);





 // import nextCookie from 'next-cookies';


var sendOtp_action = function sendOtp_action(params) {
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].getCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(params)).then( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(res, 'this is res'); // dispatch(handleLoader(false));

                if (res.data.type === 'success') {
                  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
                    pathname: '/otp_verify',
                    query: {
                      mobile: params
                    }
                  }); //   navigateToOtpVerification(params, screenname_redirect);
                } else {
                  console.log(res, 'this is error'); //       Dialog(res.message, [
                  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                  //       ]);
                  //       console.log('ressssssssss', res);
                  //     }
                  //     console.log('ressssssssss', res);
                  //     if (cb) {
                  //       cb(res);
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};
var verifyotp_action = function verifyotp_action(otp, mobile) {
  var paramsData = {
    otp_value: otp
  };
  return function (dispatch) {
    _RestClient_RestClient__WEBPACK_IMPORTED_MODULE_3__["default"].restCall(_config_Connection__WEBPACK_IMPORTED_MODULE_4__["default"].getBaseUrl() + "/login/phone/".concat(mobile), paramsData).then( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res, status) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(res, res.data.customer_id, 'this is res'); // dispatch(handleLoader(false));

                if (res.data.status === true) {
                  console.log('yes i am here');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('name', 'mukesh');
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', res.data.auth_token);
                  js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('customer_id', res.data.customer_id); //   navigateToOtpVerification(params, screenname_redirect);
                } else {
                  console.log(res, 'this is error'); //       Dialog(res.message, [
                  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
                  //       ]);
                  //       console.log('ressssssssss', res);
                  //     }
                  //     console.log('ressssssssss', res);
                  //     if (cb) {
                  //       cb(res);
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()).then(function () {
      return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('customer_id') && next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/qr_scanner');
    }) // eslint-disable-next-line
    ["catch"](function (e) {
      //   dispatch(handleLoader(false));
      // eslint-disable-line
      console.log('errorror', e);
    });
  }; //    )
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9Db25uZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy91cGRhdGVfbmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvUmVzdENsaWVudC9SZXN0Q2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2F1dGhBY3Rpb24uanMiXSwibmFtZXMiOlsiYXBpU2VydmVyIiwicnVubmluZ191cmwiLCJodHRwX3VybCIsImFwaUJhc2VfdXJsIiwiQ29ubmVjdGlvbiIsImZyb250RW5kVXJsIiwiQmFja2dyb3VuZEltYWdlIiwic3R5bGVkIiwiZGl2IiwiU2V0RmlsdGVySWNvbiIsIkNoZWNrb3V0VGV4dCIsIlVwZGF0ZU5hbWUiLCJwcm9wcyIsIm9uc3VibWl0X25hbWUiLCJzZW5kT3RwX2FjdGlvbiIsImxvZ2luIiwicGFkZGluZyIsInBvc2l0aW9uIiwiYm90dG9tIiwibGVmdCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiUmVzdENsaWVudCIsImNvbnRleHQiLCJQcm9taXNlIiwiZnVsZmlsbCIsInJlamVjdCIsInVuc3Vic2NyaWJlIiwidXJsIiwicGFyYW1zIiwidG9rZW4iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImlzQ29ubmVjdGVkIiwidGhlbiIsImZldGNoIiwibWV0aG9kIiwidGltZW91dCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsInRleHQiLCJyZXNwb25zZVRleHQiLCJwYXJzZSIsImVycm9yIiwid2FybiIsIm1lc3NhZ2UiLCJfYm9keUluaXQiLCJnZXRDYWxsIiwiZ2V0QmFzZVVybCIsInJlcyIsImRhdGEiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1vYmlsZSIsImUiLCJ2ZXJpZnlvdHBfYWN0aW9uIiwib3RwIiwicGFyYW1zRGF0YSIsIm90cF92YWx1ZSIsInJlc3RDYWxsIiwic3RhdHVzIiwiY3VzdG9tZXJfaWQiLCJjb29raWUiLCJzZXQiLCJhdXRoX3Rva2VuIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDakI7QUFDQTtBQUNBLEtBQUssSUFBMkI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNCQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixFQUFFO0FBQ2pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EscUVBQXFFO0FBQ3JFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNE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LE1BQVgsRUFBbUIsUUFBbkI7QUFFQUQsa0VBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsRUFBb0JoQixHQUFHLENBQUNDLElBQUosQ0FBU2dCLFVBQTdCO0FBRUFGLGtFQUFNLENBQUNDLEdBQVAsQ0FBVyxhQUFYLEVBQTBCaEIsR0FBRyxDQUFDQyxJQUFKLENBQVNhLFdBQW5DLEVBTjRCLENBUTVCO0FBQ0QsaUJBVEQsTUFTTztBQUNMckMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsR0FBWixFQUFpQixlQUFqQixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNEOztBQXhCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUpSOztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOEJHcEIsSUE5QkgsQ0E4QlE7QUFBQSxhQUFNbUMsZ0RBQU0sQ0FBQ0csR0FBUCxDQUFXLGFBQVgsS0FBNkJoQixrREFBTSxDQUFDQyxJQUFQLENBQVksYUFBWixDQUFuQztBQUFBLEtBOUJSLEVBOEJ1RTtBQTlCdkUsY0ErQlMsVUFBQ0ksQ0FBRCxFQUFPO0FBQ1o7QUFDQTtBQUNBOUIsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QjZCLENBQXhCO0FBQ0QsS0FuQ0g7QUFvQ0QsR0FyQ0QsQ0FKK0MsQ0EwQy9DO0FBQ0QsQ0EzQ00iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHVwZGF0ZV9uYW1lLmpzLmEyMTMyN2U0ZTBjYjUzZWE1ZjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEphdmFTY3JpcHQgQ29va2llIHYyLjIuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL2pzLWNvb2tpZS9qcy1jb29raWVcbiAqXG4gKiBDb3B5cmlnaHQgMjAwNiwgMjAxNSBLbGF1cyBIYXJ0bCAmIEZhZ25lciBCcmFja1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbjsoZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0dmFyIHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcjtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0XHRyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIgPSB0cnVlO1xuXHR9XG5cdGlmICghcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyKSB7XG5cdFx0dmFyIE9sZENvb2tpZXMgPSB3aW5kb3cuQ29va2llcztcblx0XHR2YXIgYXBpID0gd2luZG93LkNvb2tpZXMgPSBmYWN0b3J5KCk7XG5cdFx0YXBpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuQ29va2llcyA9IE9sZENvb2tpZXM7XG5cdFx0XHRyZXR1cm4gYXBpO1xuXHRcdH07XG5cdH1cbn0oZnVuY3Rpb24gKCkge1xuXHRmdW5jdGlvbiBleHRlbmQgKCkge1xuXHRcdHZhciBpID0gMDtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0Zm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzWyBpIF07XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRyZXN1bHRba2V5XSA9IGF0dHJpYnV0ZXNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAocykge1xuXHRcdHJldHVybiBzLnJlcGxhY2UoLyglWzAtOUEtWl17Mn0pKy9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdCAoY29udmVydGVyKSB7XG5cdFx0ZnVuY3Rpb24gYXBpKCkge31cblxuXHRcdGZ1bmN0aW9uIHNldCAoa2V5LCB2YWx1ZSwgYXR0cmlidXRlcykge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhdHRyaWJ1dGVzID0gZXh0ZW5kKHtcblx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHR9LCBhcGkuZGVmYXVsdHMsIGF0dHJpYnV0ZXMpO1xuXG5cdFx0XHRpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUobmV3IERhdGUoKSAqIDEgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlKzUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZSdyZSB1c2luZyBcImV4cGlyZXNcIiBiZWNhdXNlIFwibWF4LWFnZVwiIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcyA/IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cdFx0XHRcdGlmICgvXltcXHtcXFtdLy50ZXN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdFx0dmFsdWUgPSBjb252ZXJ0ZXIud3JpdGUgP1xuXHRcdFx0XHRjb252ZXJ0ZXIud3JpdGUodmFsdWUsIGtleSkgOlxuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSlcblx0XHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnwzQXwzQ3wzRXwzRHwyRnwzRnw0MHw1Qnw1RHw1RXw2MHw3Qnw3RHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblxuXHRcdFx0a2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKVxuXHRcdFx0XHQucmVwbGFjZSgvJSgyM3wyNHwyNnwyQnw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuXHRcdFx0XHQucmVwbGFjZSgvW1xcKFxcKV0vZywgZXNjYXBlKTtcblxuXHRcdFx0dmFyIHN0cmluZ2lmaWVkQXR0cmlidXRlcyA9ICcnO1xuXHRcdFx0Zm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnOyAnICsgYXR0cmlidXRlTmFtZTtcblx0XHRcdFx0aWYgKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPT09IHRydWUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcblx0XHRcdFx0Ly8gICAgIGNoYXJhY3Rlcjpcblx0XHRcdFx0Ly8gQ29uc3VtZSB0aGUgY2hhcmFjdGVycyBvZiB0aGUgdW5wYXJzZWQtYXR0cmlidXRlcyB1cCB0byxcblx0XHRcdFx0Ly8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXG5cdFx0XHRcdC8vIC4uLlxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJz0nICsgYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXS5zcGxpdCgnOycpWzBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IGtleSArICc9JyArIHZhbHVlICsgc3RyaW5naWZpZWRBdHRyaWJ1dGVzKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXQgKGtleSwganNvbikge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgamFyID0ge307XG5cdFx0XHQvLyBUbyBwcmV2ZW50IHRoZSBmb3IgbG9vcCBpbiB0aGUgZmlyc3QgcGxhY2UgYXNzaWduIGFuIGVtcHR5IGFycmF5XG5cdFx0XHQvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC5cblx0XHRcdHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG5cdFx0XHR2YXIgaSA9IDA7XG5cblx0XHRcdGZvciAoOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRcdHZhciBjb29raWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCc9Jyk7XG5cblx0XHRcdFx0aWYgKCFqc29uICYmIGNvb2tpZS5jaGFyQXQoMCkgPT09ICdcIicpIHtcblx0XHRcdFx0XHRjb29raWUgPSBjb29raWUuc2xpY2UoMSwgLTEpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IGRlY29kZShwYXJ0c1swXSk7XG5cdFx0XHRcdFx0Y29va2llID0gKGNvbnZlcnRlci5yZWFkIHx8IGNvbnZlcnRlcikoY29va2llLCBuYW1lKSB8fFxuXHRcdFx0XHRcdFx0ZGVjb2RlKGNvb2tpZSk7XG5cblx0XHRcdFx0XHRpZiAoanNvbikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0Y29va2llID0gSlNPTi5wYXJzZShjb29raWUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRqYXJbbmFtZV0gPSBjb29raWU7XG5cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBuYW1lKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBrZXkgPyBqYXJba2V5XSA6IGphcjtcblx0XHR9XG5cblx0XHRhcGkuc2V0ID0gc2V0O1xuXHRcdGFwaS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgZmFsc2UgLyogcmVhZCBhcyByYXcgKi8pO1xuXHRcdH07XG5cdFx0YXBpLmdldEpTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRyZXR1cm4gZ2V0KGtleSwgdHJ1ZSAvKiByZWFkIGFzIGpzb24gKi8pO1xuXHRcdH07XG5cdFx0YXBpLnJlbW92ZSA9IGZ1bmN0aW9uIChrZXksIGF0dHJpYnV0ZXMpIHtcblx0XHRcdHNldChrZXksICcnLCBleHRlbmQoYXR0cmlidXRlcywge1xuXHRcdFx0XHRleHBpcmVzOiAtMVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cblx0XHRhcGkuZGVmYXVsdHMgPSB7fTtcblxuXHRcdGFwaS53aXRoQ29udmVydGVyID0gaW5pdDtcblxuXHRcdHJldHVybiBhcGk7XG5cdH1cblxuXHRyZXR1cm4gaW5pdChmdW5jdGlvbiAoKSB7fSk7XG59KSk7XG4iLCIvKlxyXG5OYW1lOiBQYXJzaGFudCBOYWdwYWxcclxuRGVzY3JpcHRpb24gOiBDb25uZWN0aW9uIGZpbGUgZm9yIHRoZSBhcHBsaWNhdGlvblxyXG5EYXRlIDogNCBNYXkgMjAyMFxyXG4qL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBjb25zdCBhcGlTZXJ2ZXIgPSBcIjdoeWhjY2IwMGQuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cIjtcclxuLy8gY29uc3QgYXBpU2VydmVyID0gXCI1NC4xOTAuMTkyLjEwNTo2MDI1XCI7XHJcbmNvbnN0IGFwaVNlcnZlciA9ICdzdGFnaW5nLWJlLnRvYXN0YXBwLmNvJztcclxuLy9cIjU0LjE5MC4xOTIuMTA1OjYwMjVcIjsvL1wiaHR0cDovL2RlZDcyNGM4Lm5ncm9rLmlvXCJcclxuLy91bmNvbW1lbnQgdGhlc2UgZm91ciBsaW5lIGZvciB1c2Ugc3RhZ2luZ1xyXG5cclxuY29uc3QgcnVubmluZ191cmwgPSBhcGlTZXJ2ZXIsXHJcbiAgaHR0cF91cmwgPSBgaHR0cHM6Ly8ke3J1bm5pbmdfdXJsfWAsXHJcbiAgYXBpQmFzZV91cmwgPSBgaHR0cHM6Ly8ke3J1bm5pbmdfdXJsfS9gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvbiB7XHJcbiAgc3RhdGljIGdldFJlc3R1cmwoKSB7XHJcbiAgICByZXR1cm4gYXBpQmFzZV91cmw7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRDbXNVcmwoKSB7XHJcbiAgICByZXR1cm4gZnJvbnRFbmRVcmw7XHJcbiAgfVxyXG4gIHN0YXRpYyBnZXRCYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIGh0dHBfdXJsO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0U3VjY2Vzc1VybCgpIHtcclxuICAgIHJldHVybiBgJHthcGlCYXNlX3VybH1zdWNjZXNzLmh0bWxgO1xyXG4gIH1cclxuICBzdGF0aWMgZ2V0RXJyb1VybCgpIHtcclxuICAgIHJldHVybiBgJHthcGlCYXNlX3VybH1mYWlsdXJlLmh0bWxgO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2VuZE90cF9hY3Rpb24gfSBmcm9tICcuLy4uL3JlZHV4L2FjdGlvbnMvYXV0aEFjdGlvbic7XHJcbmltcG9ydCB7IEZpQ2hldnJvbkxlZnQsIEZpQ2hldnJvblJpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5jb25zdCBCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9Hcm91cCAxMTEzLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xyXG5gO1xyXG5leHBvcnQgY29uc3QgU2V0RmlsdGVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNTBweDtcclxuICByaWdodDogMjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzc4ZmZkNiAwJSwgIzAwNzk5MSAxMDAlKSAwJVxyXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM3MDcwNzAyOTtcclxuYDtcclxuY29uc3QgQ2hlY2tvdXRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICMzY2JjYjQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5gO1xyXG5jb25zdCBVcGRhdGVOYW1lID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgb25zdWJtaXRfbmFtZSA9ICgpID0+IHtcclxuICAgIHByb3BzLnNlbmRPdHBfYWN0aW9uKGxvZ2luKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8QmFja2dyb3VuZEltYWdlPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvQ29tcG9uZW50IDQ3IOKAkyAzLnN2Z1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJywgYm90dG9tOiAxMDAsIGxlZnQ6IDIwIH19PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDgwMCwgZm9udFNpemU6IDE4LCBjb2xvcjogJyM0MDQwNDAnIH19PlxyXG4gICAgICAgICAgICBXaGF0IHNob3VsZCB3ZSBjYWxsIHlvdT97JyAnfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgdXMgeW91ciBuYW1lXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICBib3JkZXJCb3R0b206ICdzb2xpZCAjOTk5OTk5IDAuOHB4JyxcclxuICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JhY2tncm91bmRJbWFnZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2hlY2tvdXRUZXh0PkxldCdzIEdvPC9DaGVja291dFRleHQ+XHJcbiAgICAgICAgPFNldEZpbHRlckljb24gb25DbGljaz17b25zdWJtaXRfbmFtZX0+XHJcbiAgICAgICAgICA8RmlDaGV2cm9uUmlnaHQgc3R5bGU9e3sgZm9udFNpemU6IDM0LCBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgIDwvU2V0RmlsdGVySWNvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgfWB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2VuZE90cF9hY3Rpb246IGJpbmRBY3Rpb25DcmVhdG9ycyhzZW5kT3RwX2FjdGlvbiwgZGlzcGF0Y2gpLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVwZGF0ZU5hbWUpO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFJlc3RDbGllbnQge1xyXG4gIHN0YXRpYyBpc0Nvbm5lY3RlZCgpIHtcclxuICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGxldCB1bnN1YnNjcmliZTtcclxuICAgICAgLy8gICB1bnN1YnNjcmliZSA9IE5ldEluZm8uYWRkRXZlbnRMaXN0ZW5lcihzdGF0ZSA9PiB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZVwiLCBzdGF0ZS50eXBlKTtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSXMgY29ubmVjdGVkP1wiLCBzdGF0ZS5pc0Nvbm5lY3RlZCk7XHJcbiAgICAgIC8vIGlmIChzdGF0ZS5pc0Nvbm5lY3RlZClcclxuICAgICAgZnVsZmlsbCgpO1xyXG4gICAgICAvLyAgc3RhdGUuaXNDb25uZWN0ZWQgLy8gdGhpcyB3aWxsIGNvbWUgaW5zaWRlIGZ1Y3Rpb25cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgcmVqZWN0KHN0YXRlLmlzQ29ubmVjdGVkKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHN0YXRpYyByZXN0Q2FsbCh1cmwsIHBhcmFtcywgdG9rZW4gPSBudWxsLCB0eXBlID0gJ1BPU1QnKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlLCAnIGNhbGwnLCB1cmwsIHBhcmFtcywgdG9rZW4pO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChmdWxmaWxsLCByZWplY3QpIHtcclxuICAgICAgY29udGV4dFxyXG4gICAgICAgIC5pc0Nvbm5lY3RlZCgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogdHlwZSxcclxuICAgICAgICAgICAgdGltZW91dDogMTAwMCAqIDEgKiA2MCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgLy8gXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZXJlc3BvbnNlJywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZVRleHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUE9TVCByZXNwb25zZVRleHQqKioqKicsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgZnVsZmlsbChKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKG51bGwpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICAgICAgLy8gbWVzc2FnZTogQ29uc3RhbnRzLkFwcENvbnN0YW50cy5FcnJvci5pbnRlcm5ldENvbm5lY3Rpdml0eSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Vyb3JvJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcm9ybyAqKioqKioqKiogJywgZXJyb3IpO1xyXG4gICAgICAgICAgZnVsZmlsbCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aXZpdHkuJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q2FsbCh1cmwsIHRva2VuKSB7XHJcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0IGNhbGwnLCB1cmwsIHRva2VuKTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZnVsZmlsbCwgcmVqZWN0KSB7XHJcbiAgICAgIGNvbnRleHRcclxuICAgICAgICAuaXNDb25uZWN0ZWQoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwICogMSAqIDYwLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAvLyBcIkNhY2hlLUNvbnRyb2xcIjogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLl9ib2R5SW5pdCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLl9ib2R5SW5pdDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlVGV4dCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZVRleHRyZXNwb25zZVRleHQnLCByZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgIC8vIGZ1bGZpbGwocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBmdWxmaWxsKEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGwocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBmdWxmaWxsKHtcclxuICAgICAgICAgICAgICAgIC8vIG1lc3NhZ2U6IENvbnN0YW50cy5BcHBDb25zdGFudHMuRXJyb3IuaW50ZXJuZXRDb25uZWN0aXZpdHksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdlcm9ybycsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZXJvcm8gKioqKioqKioqICcsIGVycm9yKTtcclxuICAgICAgICAgIGZ1bGZpbGwoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGl2aXR5LicsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdENsaWVudDtcclxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgUmVzdENsaWVudCBmcm9tICcuLy4uL1Jlc3RDbGllbnQvUmVzdENsaWVudCc7XHJcbmltcG9ydCBDb25uZWN0aW9uIGZyb20gJy4uLy4uL2NvbmZpZy9Db25uZWN0aW9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbi8vIGltcG9ydCBuZXh0Q29va2llIGZyb20gJ25leHQtY29va2llcyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGNvbnN0IHNlbmRPdHBfYWN0aW9uID0gKHBhcmFtcykgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIFJlc3RDbGllbnQuZ2V0Q2FsbChDb25uZWN0aW9uLmdldEJhc2VVcmwoKSArIGAvbG9naW4vcGhvbmUvJHtwYXJhbXN9YClcclxuICAgICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgcmVzJyk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnR5cGUgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy9vdHBfdmVyaWZ5JyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgbW9iaWxlOiBwYXJhbXMgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZVRvT3RwVmVyaWZpY2F0aW9uKHBhcmFtcywgc2NyZWVubmFtZV9yZWRpcmVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB2ZXJpZnlvdHBfYWN0aW9uID0gKG90cCwgbW9iaWxlKSA9PiB7XHJcbiAgbGV0IHBhcmFtc0RhdGEgPSB7XHJcbiAgICBvdHBfdmFsdWU6IG90cCxcclxuICB9O1xyXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIFJlc3RDbGllbnQucmVzdENhbGwoXHJcbiAgICAgIENvbm5lY3Rpb24uZ2V0QmFzZVVybCgpICsgYC9sb2dpbi9waG9uZS8ke21vYmlsZX1gLFxyXG4gICAgICBwYXJhbXNEYXRhXHJcbiAgICApXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXMsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcywgcmVzLmRhdGEuY3VzdG9tZXJfaWQsICd0aGlzIGlzIHJlcycpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKGhhbmRsZUxvYWRlcihmYWxzZSkpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCd5ZXMgaSBhbSBoZXJlJyk7XHJcbiAgICAgICAgICBjb29raWUuc2V0KCduYW1lJywgJ211a2VzaCcpO1xyXG5cclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEuYXV0aF90b2tlbik7XHJcblxyXG4gICAgICAgICAgY29va2llLnNldCgnY3VzdG9tZXJfaWQnLCByZXMuZGF0YS5jdXN0b21lcl9pZCk7XHJcblxyXG4gICAgICAgICAgLy8gICBuYXZpZ2F0ZVRvT3RwVmVyaWZpY2F0aW9uKHBhcmFtcywgc2NyZWVubmFtZV9yZWRpcmVjdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3RoaXMgaXMgZXJyb3InKTtcclxuICAgICAgICAgIC8vICAgICAgIERpYWxvZyhyZXMubWVzc2FnZSwgW1xyXG4gICAgICAgICAgLy8gICAgICAgICB7IHRleHQ6ICdPSycsIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdPSyBQcmVzc2VkJykgfSxcclxuICAgICAgICAgIC8vICAgICAgIF0pO1xyXG4gICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Jlc3Nzc3Nzc3NzcycsIHJlcyk7XHJcbiAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVzc3Nzc3Nzc3NzJywgcmVzKTtcclxuXHJcbiAgICAgICAgICAvLyAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAvLyAgICAgICBjYihyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29va2llLmdldCgnY3VzdG9tZXJfaWQnKSAmJiBSb3V0ZXIucHVzaCgnL3FyX3NjYW5uZXInKSkgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgZGlzcGF0Y2goaGFuZGxlTG9hZGVyKGZhbHNlKSk7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcnJvcicsIGUpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIC8vICAgIClcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==