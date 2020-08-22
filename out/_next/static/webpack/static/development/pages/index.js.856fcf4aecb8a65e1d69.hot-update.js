webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/next-cookies/index.js":
/*!********************************************!*\
  !*** ./node_modules/next-cookies/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Cookies = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
// we seem to sometimes get the ES6 version despite requesting cjs here, not sure why
// this isn't the ideal fix, but it'll do for now
Cookies = Cookies.default || Cookies;

function nextCookies(ctx, options) {
  // Note: Next.js Static export sets ctx.req to a fake request with no headers
  var header = ctx.req && ctx.req.headers && ctx.req.headers.cookie;
  var uc = new Cookies(header);
  return uc.getAll(options);
}

module.exports = nextCookies;


/***/ }),

/***/ "./node_modules/universal-cookie/es6/Cookies.js":
/*!******************************************************!*\
  !*** ./node_modules/universal-cookie/es6/Cookies.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/universal-cookie/es6/utils.js");


// We can't please Rollup and TypeScript at the same time
// Only way to make both of them work
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var Cookies = /** @class */ (function () {
    function Cookies(cookies, options) {
        var _this = this;
        this.changeListeners = [];
        this.HAS_DOCUMENT_COOKIE = false;
        this.cookies = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseCookies"])(cookies, options);
        new Promise(function () {
            _this.HAS_DOCUMENT_COOKIE = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hasDocumentCookie"])();
        }).catch(function () { });
    }
    Cookies.prototype._updateBrowserValues = function (parseOptions) {
        if (!this.HAS_DOCUMENT_COOKIE) {
            return;
        }
        this.cookies = cookie__WEBPACK_IMPORTED_MODULE_0__["parse"](document.cookie, parseOptions);
    };
    Cookies.prototype._emitChange = function (params) {
        for (var i = 0; i < this.changeListeners.length; ++i) {
            this.changeListeners[i](params);
        }
    };
    Cookies.prototype.get = function (name, options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["readCookie"])(this.cookies[name], options);
    };
    Cookies.prototype.getAll = function (options, parseOptions) {
        if (options === void 0) { options = {}; }
        this._updateBrowserValues(parseOptions);
        var result = {};
        for (var name_1 in this.cookies) {
            result[name_1] = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["readCookie"])(this.cookies[name_1], options);
        }
        return result;
    };
    Cookies.prototype.set = function (name, value, options) {
        var _a;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        this.cookies = objectAssign({}, this.cookies, (_a = {}, _a[name] = value, _a));
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"](name, value, options);
        }
        this._emitChange({ name: name, value: value, options: options });
    };
    Cookies.prototype.remove = function (name, options) {
        var finalOptions = (options = objectAssign({}, options, {
            expires: new Date(1970, 1, 1, 0, 0, 1),
            maxAge: 0
        }));
        this.cookies = objectAssign({}, this.cookies);
        delete this.cookies[name];
        if (this.HAS_DOCUMENT_COOKIE) {
            document.cookie = cookie__WEBPACK_IMPORTED_MODULE_0__["serialize"](name, '', finalOptions);
        }
        this._emitChange({ name: name, value: undefined, options: options });
    };
    Cookies.prototype.addChangeListener = function (callback) {
        this.changeListeners.push(callback);
    };
    Cookies.prototype.removeChangeListener = function (callback) {
        var idx = this.changeListeners.indexOf(callback);
        if (idx >= 0) {
            this.changeListeners.splice(idx, 1);
        }
    };
    return Cookies;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cookies);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/index.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies */ "./node_modules/universal-cookie/es6/Cookies.js");

/* harmony default export */ __webpack_exports__["default"] = (_Cookies__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/universal-cookie/es6/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/universal-cookie/es6/utils.js ***!
  \****************************************************/
/*! exports provided: hasDocumentCookie, cleanCookies, parseCookies, isParsingCookie, readCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDocumentCookie", function() { return hasDocumentCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanCookies", function() { return cleanCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParsingCookie", function() { return isParsingCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readCookie", function() { return readCookie; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function hasDocumentCookie() {
    // Can we get/set cookies on document.cookie?
    return typeof document === 'object' && typeof document.cookie === 'string';
}
function cleanCookies() {
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
}
function parseCookies(cookies, options) {
    if (typeof cookies === 'string') {
        return cookie__WEBPACK_IMPORTED_MODULE_0__["parse"](cookies, options);
    }
    else if (typeof cookies === 'object' && cookies !== null) {
        return cookies;
    }
    else {
        return {};
    }
}
function isParsingCookie(value, doNotParse) {
    if (typeof doNotParse === 'undefined') {
        // We guess if the cookie start with { or [, it has been serialized
        doNotParse =
            !value || (value[0] !== '{' && value[0] !== '[' && value[0] !== '"');
    }
    return !doNotParse;
}
function readCookie(value, options) {
    if (options === void 0) { options = {}; }
    var cleanValue = cleanupCookieValue(value);
    if (isParsingCookie(cleanValue, options.doNotParse)) {
        try {
            return JSON.parse(cleanValue);
        }
        catch (e) {
            // At least we tried
        }
    }
    // Ignore clean value if we failed the deserialization
    // It is not relevant anymore to trim those values
    return value;
}
function cleanupCookieValue(value) {
    // express prepend j: before serializing a cookie
    if (value && value[0] === 'j' && value[1] === ':') {
        return value.substr(2);
    }
    return value;
}


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var page_components_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! page-components/index */ "./src/page-components/index/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ "./src/utils/auth.js");





page_components_index__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var token;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = Object(_utils_auth__WEBPACK_IMPORTED_MODULE_3__["auth"])(ctx);
            return _context.abrupt("return", {
              token: token
            });

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
}();

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (page_components_index__WEBPACK_IMPORTED_MODULE_2__["default"]);

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

/***/ "./src/utils/auth.js":
/*!***************************!*\
  !*** ./src/utils/auth.js ***!
  \***************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);



var auth = function auth(ctx) {
  var _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx),
      token = _nextCookie.token;

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return token;
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
  }

  return token;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29va2llL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0LWNvb2tpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvZXM2L0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXZlcnNhbC1jb29raWUvZXM2L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91bml2ZXJzYWwtY29va2llL2VzNi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2F1dGguanMiXSwibmFtZXMiOlsiQ21wIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJhdXRoIiwibmV4dENvb2tpZSIsInJlcSIsInJlcyIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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anMuODU2ZmNmNGFlY2I4YTY1ZTFkNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY29va2llXG4gKiBDb3B5cmlnaHQoYykgMjAxMi0yMDE0IFJvbWFuIFNodHlsbWFuXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIHBhaXJTcGxpdFJlZ0V4cCA9IC87ICovO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFBhcnNlIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gY29va2llIGhlYWRlciBzdHJpbmcgaW50byBhbiBvYmplY3RcbiAqIFRoZSBvYmplY3QgaGFzIHRoZSB2YXJpb3VzIGNvb2tpZXMgYXMga2V5cyhuYW1lcykgPT4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHIgbXVzdCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgdmFyIG9iaiA9IHt9XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQocGFpclNwbGl0UmVnRXhwKTtcbiAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcblxuICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFfaWR4KS50cmltKClcbiAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG5cbiAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuXG4gICAgaWYgKGlzTmFOKG1heEFnZSkgfHwgIWlzRmluaXRlKG1heEFnZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBtYXhBZ2UgaXMgaW52YWxpZCcpXG4gICAgfVxuXG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIiwidmFyIENvb2tpZXMgPSByZXF1aXJlKFwidW5pdmVyc2FsLWNvb2tpZVwiKTtcbi8vIHdlIHNlZW0gdG8gc29tZXRpbWVzIGdldCB0aGUgRVM2IHZlcnNpb24gZGVzcGl0ZSByZXF1ZXN0aW5nIGNqcyBoZXJlLCBub3Qgc3VyZSB3aHlcbi8vIHRoaXMgaXNuJ3QgdGhlIGlkZWFsIGZpeCwgYnV0IGl0J2xsIGRvIGZvciBub3dcbkNvb2tpZXMgPSBDb29raWVzLmRlZmF1bHQgfHwgQ29va2llcztcblxuZnVuY3Rpb24gbmV4dENvb2tpZXMoY3R4LCBvcHRpb25zKSB7XG4gIC8vIE5vdGU6IE5leHQuanMgU3RhdGljIGV4cG9ydCBzZXRzIGN0eC5yZXEgdG8gYSBmYWtlIHJlcXVlc3Qgd2l0aCBubyBoZWFkZXJzXG4gIHZhciBoZWFkZXIgPSBjdHgucmVxICYmIGN0eC5yZXEuaGVhZGVycyAmJiBjdHgucmVxLmhlYWRlcnMuY29va2llO1xuICB2YXIgdWMgPSBuZXcgQ29va2llcyhoZWFkZXIpO1xuICByZXR1cm4gdWMuZ2V0QWxsKG9wdGlvbnMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5leHRDb29raWVzO1xuIiwiaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmltcG9ydCB7IGhhc0RvY3VtZW50Q29va2llLCBwYXJzZUNvb2tpZXMsIHJlYWRDb29raWUgfSBmcm9tICcuL3V0aWxzJztcclxuLy8gV2UgY2FuJ3QgcGxlYXNlIFJvbGx1cCBhbmQgVHlwZVNjcmlwdCBhdCB0aGUgc2FtZSB0aW1lXHJcbi8vIE9ubHkgd2F5IHRvIG1ha2UgYm90aCBvZiB0aGVtIHdvcmtcclxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcclxudmFyIENvb2tpZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gcGFyc2VDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpO1xyXG4gICAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuSEFTX0RPQ1VNRU5UX0NPT0tJRSA9IGhhc0RvY3VtZW50Q29va2llKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgIH1cclxuICAgIENvb2tpZXMucHJvdG90eXBlLl91cGRhdGVCcm93c2VyVmFsdWVzID0gZnVuY3Rpb24gKHBhcnNlT3B0aW9ucykge1xyXG4gICAgICAgIGlmICghdGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gY29va2llLnBhcnNlKGRvY3VtZW50LmNvb2tpZSwgcGFyc2VPcHRpb25zKTtcclxuICAgIH07XHJcbiAgICBDb29raWVzLnByb3RvdHlwZS5fZW1pdENoYW5nZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzW2ldKHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBwYXJzZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJyb3dzZXJWYWx1ZXMocGFyc2VPcHRpb25zKTtcclxuICAgICAgICByZXR1cm4gcmVhZENvb2tpZSh0aGlzLmNvb2tpZXNbbmFtZV0sIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIChvcHRpb25zLCBwYXJzZU9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUJyb3dzZXJWYWx1ZXMocGFyc2VPcHRpb25zKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgbmFtZV8xIGluIHRoaXMuY29va2llcykge1xyXG4gICAgICAgICAgICByZXN1bHRbbmFtZV8xXSA9IHJlYWRDb29raWUodGhpcy5jb29raWVzW25hbWVfMV0sIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb29raWVzID0gb2JqZWN0QXNzaWduKHt9LCB0aGlzLmNvb2tpZXMsIChfYSA9IHt9LCBfYVtuYW1lXSA9IHZhbHVlLCBfYSkpO1xyXG4gICAgICAgIGlmICh0aGlzLkhBU19ET0NVTUVOVF9DT09LSUUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnNlcmlhbGl6ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdmFsdWUsIG9wdGlvbnM6IG9wdGlvbnMgfSk7XHJcbiAgICB9O1xyXG4gICAgQ29va2llcy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZmluYWxPcHRpb25zID0gKG9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgZXhwaXJlczogbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSksXHJcbiAgICAgICAgICAgIG1heEFnZTogMFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmNvb2tpZXMgPSBvYmplY3RBc3NpZ24oe30sIHRoaXMuY29va2llcyk7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuY29va2llc1tuYW1lXTtcclxuICAgICAgICBpZiAodGhpcy5IQVNfRE9DVU1FTlRfQ09PS0lFKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5zZXJpYWxpemUobmFtZSwgJycsIGZpbmFsT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VtaXRDaGFuZ2UoeyBuYW1lOiBuYW1lLCB2YWx1ZTogdW5kZWZpbmVkLCBvcHRpb25zOiBvcHRpb25zIH0pO1xyXG4gICAgfTtcclxuICAgIENvb2tpZXMucHJvdG90eXBlLmFkZENoYW5nZUxpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgQ29va2llcy5wcm90b3R5cGUucmVtb3ZlQ2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgaWR4ID0gdGhpcy5jaGFuZ2VMaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29va2llcztcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llcztcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9Db29raWVzJztcclxuZXhwb3J0IGRlZmF1bHQgQ29va2llcztcclxuIiwiaW1wb3J0ICogYXMgY29va2llIGZyb20gJ2Nvb2tpZSc7XHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNEb2N1bWVudENvb2tpZSgpIHtcclxuICAgIC8vIENhbiB3ZSBnZXQvc2V0IGNvb2tpZXMgb24gZG9jdW1lbnQuY29va2llP1xyXG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGRvY3VtZW50LmNvb2tpZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuQ29va2llcygpIHtcclxuICAgIGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eICsvLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoLz0uKi8sICc9O2V4cGlyZXM9JyArIG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKSArICc7cGF0aD0vJyk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXMsIG9wdGlvbnMpIHtcclxuICAgIGlmICh0eXBlb2YgY29va2llcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICByZXR1cm4gY29va2llLnBhcnNlKGNvb2tpZXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGNvb2tpZXMgPT09ICdvYmplY3QnICYmIGNvb2tpZXMgIT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gY29va2llcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNQYXJzaW5nQ29va2llKHZhbHVlLCBkb05vdFBhcnNlKSB7XHJcbiAgICBpZiAodHlwZW9mIGRvTm90UGFyc2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gV2UgZ3Vlc3MgaWYgdGhlIGNvb2tpZSBzdGFydCB3aXRoIHsgb3IgWywgaXQgaGFzIGJlZW4gc2VyaWFsaXplZFxyXG4gICAgICAgIGRvTm90UGFyc2UgPVxyXG4gICAgICAgICAgICAhdmFsdWUgfHwgKHZhbHVlWzBdICE9PSAneycgJiYgdmFsdWVbMF0gIT09ICdbJyAmJiB2YWx1ZVswXSAhPT0gJ1wiJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIWRvTm90UGFyc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb29raWUodmFsdWUsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgY2xlYW5WYWx1ZSA9IGNsZWFudXBDb29raWVWYWx1ZSh2YWx1ZSk7XHJcbiAgICBpZiAoaXNQYXJzaW5nQ29va2llKGNsZWFuVmFsdWUsIG9wdGlvbnMuZG9Ob3RQYXJzZSkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShjbGVhblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gQXQgbGVhc3Qgd2UgdHJpZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJZ25vcmUgY2xlYW4gdmFsdWUgaWYgd2UgZmFpbGVkIHRoZSBkZXNlcmlhbGl6YXRpb25cclxuICAgIC8vIEl0IGlzIG5vdCByZWxldmFudCBhbnltb3JlIHRvIHRyaW0gdGhvc2UgdmFsdWVzXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gY2xlYW51cENvb2tpZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAvLyBleHByZXNzIHByZXBlbmQgajogYmVmb3JlIHNlcmlhbGl6aW5nIGEgY29va2llXHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWVbMF0gPT09ICdqJyAmJiB2YWx1ZVsxXSA9PT0gJzonKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cigyKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgQ21wLCB7IGdldERhdGEgfSBmcm9tICdwYWdlLWNvbXBvbmVudHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSh7IGFzUGF0aDogJy8nIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgIH0sXHJcbiAgICB1bnN0YWJsZV9yZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcbkNtcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBhdXRoKGN0eCk7XHJcbiAgcmV0dXJuIHsgdG9rZW4gfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ21wO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgbmV4dENvb2tpZSBmcm9tICduZXh0LWNvb2tpZXMnXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aCA9IGN0eCA9PiB7XHJcbiAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpXHJcblxyXG4gIGlmIChjdHgucmVxICYmICF0b2tlbikge1xyXG4gICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiAnL2xvZ2luJ30pXHJcbiAgICBjdHgucmVzLmVuZCgpXHJcbiAgICByZXR1cm4gdG9rZW5cclxuICB9XHJcblxyXG4gIGlmICghdG9rZW4pIHtcclxuICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRva2VuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=