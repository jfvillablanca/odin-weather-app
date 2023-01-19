/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/search.svg */ "./src/images/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid white; */\n}\n\n:root {\n  font-size: 62.5%;\n\n  --color-winter-blue: #252535;\n  --color-old-white: #c8c093;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Lato\", sans-serif;\n  background-color: var(--color-winter-blue);\n  color: var(--color-old-white);\n\n  padding: 3rem;\n  max-height: 100vh;\n  overflow: hidden;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));\n}\n\n.current-weather {\n  display: grid;\n}\n\n.weather-now {\n  margin-bottom: 3rem;\n  font-size: 1.6rem;\n}\n\n.searchbar {\n  width: min-content;\n  border-bottom: 2px solid var(--color-old-white);\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\ninput[type=\"text\"] {\n  font-size: 2rem;\n  background: none;\n  border: none;\n  color: inherit;\n}\n\ninput[type=\"submit\"] {\n  height: 3.2rem;\n  width: 3.2rem;\n  background: none;\n  border: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.weather-condition {\n  display: grid;\n  grid-auto-rows: auto;\n  align-items: center;\n\n  margin-bottom: 3rem;\n}\n\n.weather-gist-div {\n  display:grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.weather-gist-div svg {\n  place-self: center;\n  min-height: 9rem; \n  width: auto;\n}\n\n.weather-gist {\n  align-self: center;\n  margin-left: 2rem;\n  font-size: 3.3rem;\n}\n\n.weather-desc {\n  margin-bottom: 1rem;\n  font-size: 5rem;\n}\n\n.temp-group {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.temp-feels-like-div {\n  grid-column: span 3;\n  font-size: 4.3rem;\n  align-self: center;\n\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  gap: 2rem;\n}\n\n.temp-feels-like-div p {\n  grid-column: span 2;\n}\n\n.temp-icon {\n  font-style: 1.0rem;\n  place-self: center;\n  min-height: 4rem; \n  width: auto;\n}\n\n.temp-actual {\n  font-size: 3rem;\n}\n\n.temp-actual-div,\n.temp-min-div,\n.temp-max-div {\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.temp-feels-like-div p,\n.temp-actual-div p,\n.temp-min-div p,\n.temp-max-div p {\n  font-size: 1.8rem;\n  opacity: 0.8;\n}\n\n.location-and-time {\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-rows: 1fr min-content 1fr;\n}\n\n.location-and-time > * {\n  margin-bottom: 2rem;\n}\n\n.city-div {\n  font-size: 3rem;\n\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.city-div svg {\n  height: 60%;\n  width: auto;\n  /* align-self: center; */\n}\n\n.city {\n  font-size: 3.8rem;\n}\n\n.country {\n  font-size: 2.9rem;\n}\n\n.sunrise-sunset-div {\n  display: grid;\n  grid-template-columns: min-content min-content;\n  gap: 5rem;\n}\n\n.time-sunrise-div,\n.time-sunset-div {\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  gap: 1rem;\n}\n\n.time-sunset,\n.time-sunrise {\n  font-size: 2rem;\n}\n\n.time-measure-div p {\n  opacity: 0.8;\n}\n\n.barometric-group,\n.wind-group {\n  margin-bottom: 1rem;\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.humidity-div,\n.pressure-div,\n.wind-speed-div,\n.wind-angle-div {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n\n.humidity-div p,\n.pressure-div p,\n.wind-speed-div p,\n.wind-angle-div p {\n  grid-column: span 2;\n  margin-bottom: 1rem;\n}\n\n.humidity-div svg,\n.pressure-div svg,\n.wind-speed-div svg,\n.wind-angle-div svg {\n  height: 4rem;\n  width: auto;\n  margin-right: 2rem;\n}\n\n.barometric-group h2,\n.wind-group h3 {\n  font-size: 2.6rem;\n}\n\nsvg * {\n  stroke: var(--color-old-white);\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;;EAEhB,4BAA4B;EAC5B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,0CAA0C;EAC1C,6BAA6B;;EAE7B,aAAa;EACb,iBAAiB;EACjB,gBAAgB;;EAEhB,aAAa;EACb,2DAA2D;AAC7D;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,+CAA+C;EAC/C,mBAAmB;;EAEnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,yDAA6C;EAC7C,wBAAwB;EACxB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;;EAEnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;EACb,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,iBAAiB;EACjB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;;;EAIE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,mBAAmB;;EAEnB,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;;EAIE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;;;;EAIE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid white; */\n}\n\n:root {\n  font-size: 62.5%;\n\n  --color-winter-blue: #252535;\n  --color-old-white: #c8c093;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Lato\", sans-serif;\n  background-color: var(--color-winter-blue);\n  color: var(--color-old-white);\n\n  padding: 3rem;\n  max-height: 100vh;\n  overflow: hidden;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));\n}\n\n.current-weather {\n  display: grid;\n}\n\n.weather-now {\n  margin-bottom: 3rem;\n  font-size: 1.6rem;\n}\n\n.searchbar {\n  width: min-content;\n  border-bottom: 2px solid var(--color-old-white);\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\ninput[type=\"text\"] {\n  font-size: 2rem;\n  background: none;\n  border: none;\n  color: inherit;\n}\n\ninput[type=\"submit\"] {\n  height: 3.2rem;\n  width: 3.2rem;\n  background: none;\n  border: none;\n  background-image: url(\"../images/search.svg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.weather-condition {\n  display: grid;\n  grid-auto-rows: auto;\n  align-items: center;\n\n  margin-bottom: 3rem;\n}\n\n.weather-gist-div {\n  display:grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.weather-gist-div svg {\n  place-self: center;\n  min-height: 9rem; \n  width: auto;\n}\n\n.weather-gist {\n  align-self: center;\n  margin-left: 2rem;\n  font-size: 3.3rem;\n}\n\n.weather-desc {\n  margin-bottom: 1rem;\n  font-size: 5rem;\n}\n\n.temp-group {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.temp-feels-like-div {\n  grid-column: span 3;\n  font-size: 4.3rem;\n  align-self: center;\n\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  gap: 2rem;\n}\n\n.temp-feels-like-div p {\n  grid-column: span 2;\n}\n\n.temp-icon {\n  font-style: 1.0rem;\n  place-self: center;\n  min-height: 4rem; \n  width: auto;\n}\n\n.temp-actual {\n  font-size: 3rem;\n}\n\n.temp-actual-div,\n.temp-min-div,\n.temp-max-div {\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.temp-feels-like-div p,\n.temp-actual-div p,\n.temp-min-div p,\n.temp-max-div p {\n  font-size: 1.8rem;\n  opacity: 0.8;\n}\n\n.location-and-time {\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-rows: 1fr min-content 1fr;\n}\n\n.location-and-time > * {\n  margin-bottom: 2rem;\n}\n\n.city-div {\n  font-size: 3rem;\n\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.city-div svg {\n  height: 60%;\n  width: auto;\n  /* align-self: center; */\n}\n\n.city {\n  font-size: 3.8rem;\n}\n\n.country {\n  font-size: 2.9rem;\n}\n\n.sunrise-sunset-div {\n  display: grid;\n  grid-template-columns: min-content min-content;\n  gap: 5rem;\n}\n\n.time-sunrise-div,\n.time-sunset-div {\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  gap: 1rem;\n}\n\n.time-sunset,\n.time-sunrise {\n  font-size: 2rem;\n}\n\n.time-measure-div p {\n  opacity: 0.8;\n}\n\n.barometric-group,\n.wind-group {\n  margin-bottom: 1rem;\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.humidity-div,\n.pressure-div,\n.wind-speed-div,\n.wind-angle-div {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n\n.humidity-div p,\n.pressure-div p,\n.wind-speed-div p,\n.wind-angle-div p {\n  grid-column: span 2;\n  margin-bottom: 1rem;\n}\n\n.humidity-div svg,\n.pressure-div svg,\n.wind-speed-div svg,\n.wind-angle-div svg {\n  height: 4rem;\n  width: auto;\n  margin-right: 2rem;\n}\n\n.barometric-group h2,\n.wind-group h3 {\n  font-size: 2.6rem;\n}\n\nsvg * {\n  stroke: var(--color-old-white);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/global/window.js":
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof __webpack_require__.g !== "undefined") {
    win = __webpack_require__.g;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ "./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/***/ ((module) => {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/sliced/index.js":
/*!**************************************!*\
  !*** ./node_modules/sliced/index.js ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

module.exports = exports = __webpack_require__(/*! ./lib/sliced */ "./node_modules/sliced/lib/sliced.js");


/***/ }),

/***/ "./node_modules/sliced/lib/sliced.js":
/*!*******************************************!*\
  !*** ./node_modules/sliced/lib/sliced.js ***!
  \*******************************************/
/***/ ((module) => {


/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}



/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/svg-inject/index.js":
/*!******************************************!*\
  !*** ./node_modules/svg-inject/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var slice = __webpack_require__(/*! sliced */ "./node_modules/sliced/index.js")
var xhr   = __webpack_require__(/*! xhr */ "./node_modules/xhr/index.js")
var noop  = function noop(){}

module.exports = inject


function inject(element, callback) {
  callback = typeof callback === 'function' ? callback : noop

  var url = element.getAttribute('src')
  if (!url) return

  var attributes = slice(element.attributes).map(function(attr) {
    return [attr.name, attr.value]
  })

  xhr({
    uri: url
  }, function(err, res, body) {
    if (err) return callback(err)

    if (!res.responseXML) {
      return callback(new Error(
        'Invalid SVG file: ' + url
      ))
    }

    var svg = res.responseXML.querySelector('svg')
    for (var i = 0; i < attributes.length; i++) {
      svg.setAttribute(attributes[i][0], attributes[i][1])
    }

    if (element.parentNode) {
      element.parentNode.replaceChild(svg, element)
    }

    callback(null, svg)
  })
}


/***/ }),

/***/ "./node_modules/xhr/index.js":
/*!***********************************!*\
  !*** ./node_modules/xhr/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var window = __webpack_require__(/*! global/window */ "./node_modules/global/window.js")
var once = __webpack_require__(/*! once */ "./node_modules/xhr/node_modules/once/once.js")
var parseHeaders = __webpack_require__(/*! parse-headers */ "./node_modules/parse-headers/parse-headers.js")

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var key
    var load = options.response ? loadResponse : loadXhr

    if ("json" in options) {
        isJson = true
        headers["Accept"] = "application/json"
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
                                    //backward compatibility
    if (options.withCredentials || (options.cors && options.withCredentials !== false)) {
        xhr.withCredentials = true
    }

    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = null

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === 'text' || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function getStatusCode() {
        return xhr.status === 1223 ? 204 : xhr.status
    }

    // if we're getting a none-ok statusCode, build & return an error
    function errorFromStatusCode(status, body) {
        var error = null
        if (status === 0 || (status >= 400 && status < 600)) {
            var message = (typeof body === "string" ? body : false) ||
                messages[String(status).charAt(0)]
            error = new Error(message)
            error.statusCode = status
        }

        return error
    }

    // will load the data & process the response in a special response object
    function loadResponse() {
        var status = getStatusCode()
        var body = getBody()
        var error = errorFromStatusCode(status, body)
        var response = {
            body: body,
            statusCode: status,
            statusText: xhr.statusText,
            raw: xhr
        }
        if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
            response.headers = parseHeaders(xhr.getAllResponseHeaders())
        } else {
            response.headers = {}
        }

        callback(error, response, response.body)
    }

    // will load the data and add some response properties to the source xhr
    // and then respond with that
    function loadXhr() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)

        xhr.status = xhr.statusCode = status
        xhr.body = getBody()
        xhr.headers = parseHeaders(xhr.getAllResponseHeaders())

        callback(error, xhr, xhr.body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}


/***/ }),

/***/ "./node_modules/xhr/node_modules/once/once.js":
/*!****************************************************!*\
  !*** ./node_modules/xhr/node_modules/once/once.js ***!
  \****************************************************/
/***/ ((module) => {

module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}


/***/ }),

/***/ "./src/js/images.js":
/*!**************************!*\
  !*** ./src/js/images.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HumidityIcon": () => (/* reexport default export from named module */ _images_weather_main_humidity_svg__WEBPACK_IMPORTED_MODULE_39__),
/* harmony export */   "LoadingIcon": () => (/* reexport default export from named module */ _images_loader_svg__WEBPACK_IMPORTED_MODULE_34__),
/* harmony export */   "LocationIcon": () => (/* reexport default export from named module */ _images_map_pin_svg__WEBPACK_IMPORTED_MODULE_36__),
/* harmony export */   "PressureIcon": () => (/* reexport default export from named module */ _images_weather_main_pressure_svg__WEBPACK_IMPORTED_MODULE_40__),
/* harmony export */   "SunriseIcon": () => (/* reexport default export from named module */ _images_weather_sys_sunrise_svg__WEBPACK_IMPORTED_MODULE_37__),
/* harmony export */   "SunsetIcon": () => (/* reexport default export from named module */ _images_weather_sys_sunset_svg__WEBPACK_IMPORTED_MODULE_38__),
/* harmony export */   "TempLoadingIcon": () => (/* reexport default export from named module */ _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_35__),
/* harmony export */   "TemperatureIcon": () => (/* binding */ TemperatureIcon),
/* harmony export */   "WeatherIcon": () => (/* binding */ WeatherIcon),
/* harmony export */   "WindAngleIcon": () => (/* reexport default export from named module */ _images_weather_wind_angle_svg__WEBPACK_IMPORTED_MODULE_42__),
/* harmony export */   "WindSpeedIcon": () => (/* reexport default export from named module */ _images_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_41__)
/* harmony export */ });
/* harmony import */ var _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/weather/atmosphere_1_1.svg */ "./src/images/weather/atmosphere_1_1.svg");
/* harmony import */ var _images_weather_clear_1_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/weather/clear_1_1.svg */ "./src/images/weather/clear_1_1.svg");
/* harmony import */ var _images_weather_clear_1_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/weather/clear_1_2.svg */ "./src/images/weather/clear_1_2.svg");
/* harmony import */ var _images_weather_cloud_1_1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/weather/cloud_1_1.svg */ "./src/images/weather/cloud_1_1.svg");
/* harmony import */ var _images_weather_cloud_1_2_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weather/cloud_1_2.svg */ "./src/images/weather/cloud_1_2.svg");
/* harmony import */ var _images_weather_cloud_2_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/weather/cloud_2_1.svg */ "./src/images/weather/cloud_2_1.svg");
/* harmony import */ var _images_weather_drizzle_1_1_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/weather/drizzle_1_1.svg */ "./src/images/weather/drizzle_1_1.svg");
/* harmony import */ var _images_weather_drizzle_1_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/weather/drizzle_1_2.svg */ "./src/images/weather/drizzle_1_2.svg");
/* harmony import */ var _images_weather_drizzle_2_1_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/weather/drizzle_2_1.svg */ "./src/images/weather/drizzle_2_1.svg");
/* harmony import */ var _images_weather_drizzle_2_2_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/weather/drizzle_2_2.svg */ "./src/images/weather/drizzle_2_2.svg");
/* harmony import */ var _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/weather/rain_1_1.svg */ "./src/images/weather/rain_1_1.svg");
/* harmony import */ var _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/weather/rain_1_2.svg */ "./src/images/weather/rain_1_2.svg");
/* harmony import */ var _images_weather_rain_2_1_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/weather/rain_2_1.svg */ "./src/images/weather/rain_2_1.svg");
/* harmony import */ var _images_weather_rain_2_2_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/weather/rain_2_2.svg */ "./src/images/weather/rain_2_2.svg");
/* harmony import */ var _images_weather_rain_3_1_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/weather/rain_3_1.svg */ "./src/images/weather/rain_3_1.svg");
/* harmony import */ var _images_weather_rain_3_2_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/weather/rain_3_2.svg */ "./src/images/weather/rain_3_2.svg");
/* harmony import */ var _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/weather/rain_4_1.svg */ "./src/images/weather/rain_4_1.svg");
/* harmony import */ var _images_weather_snow_1_1_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/weather/snow_1_1.svg */ "./src/images/weather/snow_1_1.svg");
/* harmony import */ var _images_weather_snow_1_2_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/weather/snow_1_2.svg */ "./src/images/weather/snow_1_2.svg");
/* harmony import */ var _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/weather/snow_2_1.svg */ "./src/images/weather/snow_2_1.svg");
/* harmony import */ var _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/weather/snow_2_2.svg */ "./src/images/weather/snow_2_2.svg");
/* harmony import */ var _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/weather/snow_3_1.svg */ "./src/images/weather/snow_3_1.svg");
/* harmony import */ var _images_weather_storm_1_1_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/weather/storm_1_1.svg */ "./src/images/weather/storm_1_1.svg");
/* harmony import */ var _images_weather_storm_1_2_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/weather/storm_1_2.svg */ "./src/images/weather/storm_1_2.svg");
/* harmony import */ var _images_weather_storm_2_1_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/weather/storm_2_1.svg */ "./src/images/weather/storm_2_1.svg");
/* harmony import */ var _images_weather_storm_2_2_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/weather/storm_2_2.svg */ "./src/images/weather/storm_2_2.svg");
/* harmony import */ var _images_weather_storm_3_1_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../images/weather/storm_3_1.svg */ "./src/images/weather/storm_3_1.svg");
/* harmony import */ var _images_weather_storm_4_1_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../images/weather/storm_4_1.svg */ "./src/images/weather/storm_4_1.svg");
/* harmony import */ var _images_weather_temp_thermometer_1_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../images/weather/temp_thermometer_1.svg */ "./src/images/weather/temp_thermometer_1.svg");
/* harmony import */ var _images_weather_temp_thermometer_2_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../images/weather/temp_thermometer_2.svg */ "./src/images/weather/temp_thermometer_2.svg");
/* harmony import */ var _images_weather_temp_thermometer_3_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../images/weather/temp_thermometer_3.svg */ "./src/images/weather/temp_thermometer_3.svg");
/* harmony import */ var _images_weather_temp_thermometer_4_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../images/weather/temp_thermometer_4.svg */ "./src/images/weather/temp_thermometer_4.svg");
/* harmony import */ var _images_weather_temp_thermometer_5_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../images/weather/temp_thermometer_5.svg */ "./src/images/weather/temp_thermometer_5.svg");
/* harmony import */ var _images_weather_temp_thermometer_6_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../images/weather/temp_thermometer_6.svg */ "./src/images/weather/temp_thermometer_6.svg");
/* harmony import */ var _images_loader_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../images/loader.svg */ "./src/images/loader.svg");
/* harmony import */ var _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../images/thermometer.svg */ "./src/images/thermometer.svg");
/* harmony import */ var _images_map_pin_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../images/map-pin.svg */ "./src/images/map-pin.svg");
/* harmony import */ var _images_weather_sys_sunrise_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../images/weather/sys_sunrise.svg */ "./src/images/weather/sys_sunrise.svg");
/* harmony import */ var _images_weather_sys_sunset_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../images/weather/sys_sunset.svg */ "./src/images/weather/sys_sunset.svg");
/* harmony import */ var _images_weather_main_humidity_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../images/weather/main_humidity.svg */ "./src/images/weather/main_humidity.svg");
/* harmony import */ var _images_weather_main_pressure_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../images/weather/main_pressure.svg */ "./src/images/weather/main_pressure.svg");
/* harmony import */ var _images_weather_wind_speed_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../images/weather/wind_speed.svg */ "./src/images/weather/wind_speed.svg");
/* harmony import */ var _images_weather_wind_angle_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../images/weather/wind_angle.svg */ "./src/images/weather/wind_angle.svg");












































const WeatherIcon = {
  "11d_200": _images_weather_storm_1_1_svg__WEBPACK_IMPORTED_MODULE_22__,
  "11d_210": _images_weather_storm_1_1_svg__WEBPACK_IMPORTED_MODULE_22__,
  "11d_230": _images_weather_storm_1_1_svg__WEBPACK_IMPORTED_MODULE_22__,
  "11n_200": _images_weather_storm_1_2_svg__WEBPACK_IMPORTED_MODULE_23__,
  "11n_210": _images_weather_storm_1_2_svg__WEBPACK_IMPORTED_MODULE_23__,
  "11n_230": _images_weather_storm_1_2_svg__WEBPACK_IMPORTED_MODULE_23__,

  "11d_201": _images_weather_storm_2_1_svg__WEBPACK_IMPORTED_MODULE_24__,
  "11d_211": _images_weather_storm_2_1_svg__WEBPACK_IMPORTED_MODULE_24__,
  "11d_231": _images_weather_storm_2_1_svg__WEBPACK_IMPORTED_MODULE_24__,
  "11n_201": _images_weather_storm_2_2_svg__WEBPACK_IMPORTED_MODULE_25__,
  "11n_211": _images_weather_storm_2_2_svg__WEBPACK_IMPORTED_MODULE_25__,
  "11n_231": _images_weather_storm_2_2_svg__WEBPACK_IMPORTED_MODULE_25__,

  "11d_202": _images_weather_storm_3_1_svg__WEBPACK_IMPORTED_MODULE_26__,
  "11d_232": _images_weather_storm_3_1_svg__WEBPACK_IMPORTED_MODULE_26__,
  "11n_202": _images_weather_storm_3_1_svg__WEBPACK_IMPORTED_MODULE_26__,
  "11n_232": _images_weather_storm_3_1_svg__WEBPACK_IMPORTED_MODULE_26__,

  "11d_212": _images_weather_storm_4_1_svg__WEBPACK_IMPORTED_MODULE_27__,
  "11d_221": _images_weather_storm_4_1_svg__WEBPACK_IMPORTED_MODULE_27__,
  "11n_212": _images_weather_storm_4_1_svg__WEBPACK_IMPORTED_MODULE_27__,
  "11n_221": _images_weather_storm_4_1_svg__WEBPACK_IMPORTED_MODULE_27__,

  "09d_313": _images_weather_drizzle_1_1_svg__WEBPACK_IMPORTED_MODULE_6__,
  "09d_321": _images_weather_drizzle_1_1_svg__WEBPACK_IMPORTED_MODULE_6__,
  "09n_313": _images_weather_drizzle_1_2_svg__WEBPACK_IMPORTED_MODULE_7__,
  "09n_321": _images_weather_drizzle_1_2_svg__WEBPACK_IMPORTED_MODULE_7__,

  "09d_302": _images_weather_drizzle_2_1_svg__WEBPACK_IMPORTED_MODULE_8__,
  "09d_312": _images_weather_drizzle_2_1_svg__WEBPACK_IMPORTED_MODULE_8__,
  "09d_314": _images_weather_drizzle_2_1_svg__WEBPACK_IMPORTED_MODULE_8__,
  "09n_302": _images_weather_drizzle_2_2_svg__WEBPACK_IMPORTED_MODULE_9__,
  "09n_312": _images_weather_drizzle_2_2_svg__WEBPACK_IMPORTED_MODULE_9__,
  "09n_314": _images_weather_drizzle_2_2_svg__WEBPACK_IMPORTED_MODULE_9__,

  "10d_500": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_520": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_521": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_300": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_301": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_310": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "09d_311": _images_weather_rain_1_1_svg__WEBPACK_IMPORTED_MODULE_10__,
  "10n_500": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_520": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_521": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_300": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_301": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_310": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,
  "09n_311": _images_weather_rain_1_2_svg__WEBPACK_IMPORTED_MODULE_11__,

  "10d_501": _images_weather_rain_3_1_svg__WEBPACK_IMPORTED_MODULE_14__,
  "10n_501": _images_weather_rain_3_2_svg__WEBPACK_IMPORTED_MODULE_15__,

  "10d_502": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,
  "10d_503": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,
  "10d_504": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,
  "10n_502": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,
  "10n_503": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,
  "10n_504": _images_weather_rain_4_1_svg__WEBPACK_IMPORTED_MODULE_16__,

  "09d_522": _images_weather_rain_2_1_svg__WEBPACK_IMPORTED_MODULE_12__,
  "09d_531": _images_weather_rain_2_1_svg__WEBPACK_IMPORTED_MODULE_12__,
  "09n_522": _images_weather_rain_2_2_svg__WEBPACK_IMPORTED_MODULE_13__,
  "09n_531": _images_weather_rain_2_2_svg__WEBPACK_IMPORTED_MODULE_13__,

  "13d_600": _images_weather_snow_1_1_svg__WEBPACK_IMPORTED_MODULE_17__,
  "13d_601": _images_weather_snow_1_1_svg__WEBPACK_IMPORTED_MODULE_17__,
  "13d_615": _images_weather_snow_1_1_svg__WEBPACK_IMPORTED_MODULE_17__,
  "13d_620": _images_weather_snow_1_1_svg__WEBPACK_IMPORTED_MODULE_17__,
  "13n_600": _images_weather_snow_1_2_svg__WEBPACK_IMPORTED_MODULE_18__,
  "13n_601": _images_weather_snow_1_2_svg__WEBPACK_IMPORTED_MODULE_18__,
  "13n_615": _images_weather_snow_1_2_svg__WEBPACK_IMPORTED_MODULE_18__,
  "13n_620": _images_weather_snow_1_2_svg__WEBPACK_IMPORTED_MODULE_18__,

  "13d_611": _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__,
  "13d_612": _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__,
  "13d_613": _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__,
  "13d_616": _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__,
  "13d_511": _images_weather_snow_2_1_svg__WEBPACK_IMPORTED_MODULE_19__,
  "13n_611": _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__,
  "13n_612": _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__,
  "13n_613": _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__,
  "13n_616": _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__,
  "13n_511": _images_weather_snow_2_2_svg__WEBPACK_IMPORTED_MODULE_20__,

  "13d_602": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,
  "13d_621": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,
  "13d_622": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,
  "13n_602": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,
  "13n_621": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,
  "13n_622": _images_weather_snow_3_1_svg__WEBPACK_IMPORTED_MODULE_21__,

  "50d_701": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_711": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_721": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_731": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_741": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_751": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_761": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_762": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_771": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,
  "50d_781": _images_weather_atmosphere_1_1_svg__WEBPACK_IMPORTED_MODULE_0__,

  "01d_800": _images_weather_clear_1_1_svg__WEBPACK_IMPORTED_MODULE_1__,
  "01n_800": _images_weather_clear_1_2_svg__WEBPACK_IMPORTED_MODULE_2__,

  "02d_801": _images_weather_cloud_1_1_svg__WEBPACK_IMPORTED_MODULE_3__,
  "03d_802": _images_weather_cloud_1_1_svg__WEBPACK_IMPORTED_MODULE_3__,
  "04d_803": _images_weather_cloud_1_1_svg__WEBPACK_IMPORTED_MODULE_3__,
  "02n_801": _images_weather_cloud_1_2_svg__WEBPACK_IMPORTED_MODULE_4__,
  "03n_802": _images_weather_cloud_1_2_svg__WEBPACK_IMPORTED_MODULE_4__,
  "04n_803": _images_weather_cloud_1_2_svg__WEBPACK_IMPORTED_MODULE_4__,

  "04d_804": _images_weather_cloud_2_1_svg__WEBPACK_IMPORTED_MODULE_5__,
  "04n_804": _images_weather_cloud_2_1_svg__WEBPACK_IMPORTED_MODULE_5__,
};

const TemperatureIcon = [_images_weather_temp_thermometer_1_svg__WEBPACK_IMPORTED_MODULE_28__, _images_weather_temp_thermometer_2_svg__WEBPACK_IMPORTED_MODULE_29__, _images_weather_temp_thermometer_3_svg__WEBPACK_IMPORTED_MODULE_30__, _images_weather_temp_thermometer_4_svg__WEBPACK_IMPORTED_MODULE_31__, _images_weather_temp_thermometer_5_svg__WEBPACK_IMPORTED_MODULE_32__, _images_weather_temp_thermometer_6_svg__WEBPACK_IMPORTED_MODULE_33__];




/***/ }),

/***/ "./src/images/loader.svg":
/*!*******************************!*\
  !*** ./src/images/loader.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7cdb98bf32791f52bac1.svg";

/***/ }),

/***/ "./src/images/map-pin.svg":
/*!********************************!*\
  !*** ./src/images/map-pin.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d0997107678a8a73ae52.svg";

/***/ }),

/***/ "./src/images/search.svg":
/*!*******************************!*\
  !*** ./src/images/search.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5102d6e42bfad83f2286.svg";

/***/ }),

/***/ "./src/images/thermometer.svg":
/*!************************************!*\
  !*** ./src/images/thermometer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70c6fc7f2563637cc47d.svg";

/***/ }),

/***/ "./src/images/weather/atmosphere_1_1.svg":
/*!***********************************************!*\
  !*** ./src/images/weather/atmosphere_1_1.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1ec0946ae129b14c4a79.svg";

/***/ }),

/***/ "./src/images/weather/clear_1_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/clear_1_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3ed4c98f150e3a90123e.svg";

/***/ }),

/***/ "./src/images/weather/clear_1_2.svg":
/*!******************************************!*\
  !*** ./src/images/weather/clear_1_2.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4fcf3192645a8104f461.svg";

/***/ }),

/***/ "./src/images/weather/cloud_1_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/cloud_1_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fa2a80d5369d5131e0c8.svg";

/***/ }),

/***/ "./src/images/weather/cloud_1_2.svg":
/*!******************************************!*\
  !*** ./src/images/weather/cloud_1_2.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "866f0402f53cf0642467.svg";

/***/ }),

/***/ "./src/images/weather/cloud_2_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/cloud_2_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c00a2a0f1c5219a5c3c7.svg";

/***/ }),

/***/ "./src/images/weather/drizzle_1_1.svg":
/*!********************************************!*\
  !*** ./src/images/weather/drizzle_1_1.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0d9c67e9bc8f587212d9.svg";

/***/ }),

/***/ "./src/images/weather/drizzle_1_2.svg":
/*!********************************************!*\
  !*** ./src/images/weather/drizzle_1_2.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d42519d20b8905970ba5.svg";

/***/ }),

/***/ "./src/images/weather/drizzle_2_1.svg":
/*!********************************************!*\
  !*** ./src/images/weather/drizzle_2_1.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a13dcf440d2e8045c803.svg";

/***/ }),

/***/ "./src/images/weather/drizzle_2_2.svg":
/*!********************************************!*\
  !*** ./src/images/weather/drizzle_2_2.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06bb411bd6aed276d051.svg";

/***/ }),

/***/ "./src/images/weather/main_humidity.svg":
/*!**********************************************!*\
  !*** ./src/images/weather/main_humidity.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7ac9106ee637f99abd91.svg";

/***/ }),

/***/ "./src/images/weather/main_pressure.svg":
/*!**********************************************!*\
  !*** ./src/images/weather/main_pressure.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "45f8760babfc831ae623.svg";

/***/ }),

/***/ "./src/images/weather/rain_1_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_1_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8194057490b66189fdbe.svg";

/***/ }),

/***/ "./src/images/weather/rain_1_2.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_1_2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "19ea866fc72551daac64.svg";

/***/ }),

/***/ "./src/images/weather/rain_2_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_2_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2dbbe653d7a79ebe8dd.svg";

/***/ }),

/***/ "./src/images/weather/rain_2_2.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_2_2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29cae1ad610c0d76021f.svg";

/***/ }),

/***/ "./src/images/weather/rain_3_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_3_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3f65c1036446416df236.svg";

/***/ }),

/***/ "./src/images/weather/rain_3_2.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_3_2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "78cba00827d08a9ec7da.svg";

/***/ }),

/***/ "./src/images/weather/rain_4_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/rain_4_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "885123267a850d2fa02f.svg";

/***/ }),

/***/ "./src/images/weather/snow_1_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/snow_1_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d624f6785ac536bf6ba.svg";

/***/ }),

/***/ "./src/images/weather/snow_1_2.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/snow_1_2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d1363badf604ba6db12.svg";

/***/ }),

/***/ "./src/images/weather/snow_2_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/snow_2_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b88f96112a3faa48c883.svg";

/***/ }),

/***/ "./src/images/weather/snow_2_2.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/snow_2_2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "efba872b510c322d5fe6.svg";

/***/ }),

/***/ "./src/images/weather/snow_3_1.svg":
/*!*****************************************!*\
  !*** ./src/images/weather/snow_3_1.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "79015aa8e9380a809aef.svg";

/***/ }),

/***/ "./src/images/weather/storm_1_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_1_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb35fd1e037c179f668e.svg";

/***/ }),

/***/ "./src/images/weather/storm_1_2.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_1_2.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48c105a167f48226bbdf.svg";

/***/ }),

/***/ "./src/images/weather/storm_2_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_2_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b7b5852eda6906a9605e.svg";

/***/ }),

/***/ "./src/images/weather/storm_2_2.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_2_2.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe5a332129a911595119.svg";

/***/ }),

/***/ "./src/images/weather/storm_3_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_3_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "28a95a866c911feb074e.svg";

/***/ }),

/***/ "./src/images/weather/storm_4_1.svg":
/*!******************************************!*\
  !*** ./src/images/weather/storm_4_1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d07ece469b7575d2a510.svg";

/***/ }),

/***/ "./src/images/weather/sys_sunrise.svg":
/*!********************************************!*\
  !*** ./src/images/weather/sys_sunrise.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "618ebb0a55bb53d280e3.svg";

/***/ }),

/***/ "./src/images/weather/sys_sunset.svg":
/*!*******************************************!*\
  !*** ./src/images/weather/sys_sunset.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "61893b284b344ea800a3.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_1.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_1.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "40961a15bd64fd098544.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_2.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_2.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6dd3295abe47cf3cd16b.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_3.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_3.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bd49704e357d2abc0d44.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_4.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_4.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "effdb59a3d4534ec9665.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_5.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_5.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "caa5717a19da53206023.svg";

/***/ }),

/***/ "./src/images/weather/temp_thermometer_6.svg":
/*!***************************************************!*\
  !*** ./src/images/weather/temp_thermometer_6.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1d936b7ebc41f600cb7f.svg";

/***/ }),

/***/ "./src/images/weather/wind_angle.svg":
/*!*******************************************!*\
  !*** ./src/images/weather/wind_angle.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ede70770303ca7ac7011.svg";

/***/ }),

/***/ "./src/images/weather/wind_speed.svg":
/*!*******************************************!*\
  !*** ./src/images/weather/wind_speed.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d92feb60c8a85cf867f9.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ "./src/js/images.js");

const SVGInject = __webpack_require__(/*! svg-inject */ "./node_modules/svg-inject/index.js");


const API_KEY = "f23670da91c3a4b07ec78478022186d0";

const queryLocation = async (location) => {
  const response = await fetch(
    ` https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&APPID=${API_KEY}`
  );
  const rawData = await response.json();
  if (+rawData.cod >= 400) {
    return `Error: Geocoding API => Status Code: ${rawData.cod}`;
  } else {
    const weatherData = await getCurrentWeather(
      // FIXME: Throw DOM notice if location does not exist
      rawData[0].lat,
      rawData[0].lon,
      rawData[0].name
    );
    return weatherData;
  }
};

const formatDateTime = (dt, tzOffset, isDate) => {
  const adjustedTime = (dt + tzOffset) * 1000; // convert to milliseconds
  const timeInLocal = new Date(adjustedTime);
  const timeInUTC = timeInLocal.toUTCString();

  if (isDate) {
    const getFullDate =
      timeInUTC.split(" ").slice(0, 4).join(" ") +
      " at " +
      timeInUTC.split(" ")[4] +
      " in ";
    return getFullDate;
  } else {
    const getHourAndMinute = timeInUTC.split(" ")[4].slice(0, 5);
    return getHourAndMinute;
  }
};

const getCurrentWeather = async (lat, lon, location) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  );
  const rawData = await response.json();
  console.log(rawData);
  if (+rawData.cod !== 200) {
    return `Error: Current Weather API => Status Code: ${rawData.cod}`;
  } else {
    const tzOffset = rawData.timezone || null;
    const localTime = rawData.dt || null;
    const sunriseTime = rawData.sys.sunrise || null;
    const sunsetTime = rawData.sys.sunset || null;

    let isDaytime;
    if (localTime >= sunriseTime && localTime < sunsetTime) {
      isDaytime = true;
    } else {
      isDaytime = false;
    }
    const weatherData = Object.assign(
      {},
      {
        time: formatDateTime(localTime, tzOffset, true),
        isDayOrNight: isDaytime ? "d" : "n",
        name: location,
        name_latlon: rawData.name || null,
        main_temp_ave: rawData.main.temp || null,
        main_temp_feels_like: rawData.main.feels_like || null,
        main_temp_min: rawData.main.temp_min || null,
        main_temp_max: rawData.main.temp_max || null,
        main_humidity: rawData.main.humidity || null,
        main_pressure: rawData.main.pressure || null,
        sys_country: rawData.sys.country || null,
        sys_sunrise: formatDateTime(sunriseTime, tzOffset, false),
        sys_sunset: formatDateTime(sunsetTime, tzOffset, false),
        weather_id: rawData.weather[0].id || null,
        weather_gist: rawData.weather[0].main || null,
        weather_desc: rawData.weather[0].description || null,
        weather_icon: rawData.weather[0].icon.slice(0, 2) || null,
        wind_angle: rawData.wind.deg || null,
        wind_speed: rawData.wind.speed || null,
      }
    );
    return weatherData;
  }
};

// NOTE: DOM STUFF

const searchbar = document.querySelector(".searchbar");
const input = document.querySelector("input[type='text']");
searchbar.onsubmit = () => tryQuery(input.value);

function tryQuery(queriedLocation) {
  loadingDOM();
  try {
    queryLocation(queriedLocation)
      .then((weatherData) => {
        updateDOM(weatherData);
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    throw new Error(error);
  }
  return false;
}

function updateDOM(weatherData) {
  const weatherGist = document.querySelector(".weather-gist");
  weatherGist.textContent = weatherData.weather_gist;

  const weatherDescription = document.querySelector(".weather-desc");
  weatherDescription.textContent = weatherData.weather_desc;

  let weatherConditionIcon = document.querySelector(".weather-condition-icon");
  if (weatherConditionIcon.tagName === "svg") {
    const parent = weatherConditionIcon.parentElement;
    weatherConditionIcon.remove();
    weatherConditionIcon = document.createElement("img");
    weatherConditionIcon.classList.add("weather-condition-icon");
    weatherConditionIcon.setAttribute("alt", "weather icon");
    parent.prepend(weatherConditionIcon);
  }
  const id = weatherData.weather_id;
  const dn = weatherData.isDayOrNight;
  const ic = weatherData.weather_icon;

  weatherConditionIcon.setAttribute(
    "src",
    _images_js__WEBPACK_IMPORTED_MODULE_1__.WeatherIcon[`${ic}${dn}_${id}`]
  );

  const tempFeelsLike = document.querySelector(".temp-feels-like");
  tempFeelsLike.textContent = weatherData.main_temp_feels_like + " °C";

  let temperatureIcon = document.querySelector(".temp-icon");
  if (temperatureIcon.tagName === "svg") {
    const prevSibling = temperatureIcon.nextElementSibling;
    temperatureIcon.remove();
    temperatureIcon = document.createElement("img");
    temperatureIcon.classList.add("temp-icon");
    prevSibling.insertAdjacentElement("beforebegin", temperatureIcon);
  }

  const feelsLikeTemp = weatherData.main_temp_feels_like;
  let tempIcon;
  if (feelsLikeTemp <= -12) {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[0];
  } else if (feelsLikeTemp > -12 && feelsLikeTemp <= 4) {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[1];
  } else if (feelsLikeTemp > 4 && feelsLikeTemp <= 15) {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[2];
  } else if (feelsLikeTemp > 15 && feelsLikeTemp <= 25) {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[3];
  } else if (feelsLikeTemp > 25 && feelsLikeTemp <= 32) {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[4];
  } else {
    tempIcon = _images_js__WEBPACK_IMPORTED_MODULE_1__.TemperatureIcon[5];
  }
  temperatureIcon.setAttribute("src", tempIcon);

  const tempActual = document.querySelector(".temp-actual");
  tempActual.textContent = weatherData.main_temp_ave + " °C";

  const tempMin = document.querySelector(".temp-min");
  tempMin.textContent = weatherData.main_temp_min + " °C";

  const tempMax = document.querySelector(".temp-max");
  tempMax.textContent = weatherData.main_temp_max + " °C";

  const city = document.querySelector(".city");
  city.textContent = weatherData.name + ", ";

  const country = document.querySelector(".country");
  country.textContent = weatherData.sys_country;

  const sunrise = document.querySelector(".time-sunrise");
  sunrise.textContent = weatherData.sys_sunrise;

  const sunset = document.querySelector(".time-sunset");
  sunset.textContent = weatherData.sys_sunset;

  const measureTime = document.querySelector(".time-measure");
  measureTime.textContent = weatherData.time;

  const measureLocation = document.querySelector(".time-measure-loc");
  measureLocation.textContent = weatherData.name_latlon;

  const humidity = document.querySelector(".humidity");
  humidity.textContent = weatherData.main_humidity + "%";

  const pressure = document.querySelector(".pressure");
  pressure.textContent = weatherData.main_pressure + " hPa";

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = weatherData.wind_speed + " km/h";

  const windAngle = document.querySelector(".wind-angle");
  windAngle.textContent = weatherData.wind_angle + "°";

  injectSVG();
}

const weatherConditionIcon = document.querySelector(".weather-condition-icon");
weatherConditionIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.LoadingIcon);
const temperatureIcon = document.querySelector(".temp-icon");
temperatureIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.TempLoadingIcon);
const locationIcon = document.querySelector(".location-icon");
locationIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.LocationIcon);
const sunriseIcon = document.querySelector(".time-sunrise-icon");
sunriseIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.SunriseIcon);
const sunsetIcon = document.querySelector(".time-sunset-icon");
sunsetIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.SunsetIcon);
const humidityIcon = document.querySelector(".humidity-icon");
humidityIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.HumidityIcon);
const pressureIcon = document.querySelector(".pressure-icon");
pressureIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.PressureIcon);
const windSpeedIcon = document.querySelector(".wind-speed-icon");
windSpeedIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.WindSpeedIcon);
const windAngleIcon = document.querySelector(".wind-angle-icon");
windAngleIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.WindAngleIcon);

function injectSVG() {
  const svgs = document.querySelectorAll('img[src$=".svg"]');
  for (let i = 0; i < svgs.length; i++) {
    SVGInject(svgs[i], function (err, _) {
      if (err) throw err;
    });
  }
}
injectSVG();

// NOTE: Location for initial page load
const initialLocation = "Manila";
tryQuery(initialLocation);

function loadingDOM() {
  const weatherGist = document.querySelector(".weather-gist");
  weatherGist.textContent = "Loading...";

  const weatherDescription = document.querySelector(".weather-desc");
  weatherDescription.textContent = "Loading...";

  let weatherConditionIcon = document.querySelector(".weather-condition-icon");
  if (weatherConditionIcon.tagName === "svg") {
    const parent = weatherConditionIcon.parentElement;
    weatherConditionIcon.remove();
    weatherConditionIcon = document.createElement("img");
    weatherConditionIcon.classList.add("weather-condition-icon");
    weatherConditionIcon.setAttribute("alt", "weather icon");
    parent.prepend(weatherConditionIcon);
  }
  weatherConditionIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.LoadingIcon);

  const tempFeelsLike = document.querySelector(".temp-feels-like");
  tempFeelsLike.textContent = "Loading...";

  const temperatureIcon = document.querySelector(".temp-icon");
  temperatureIcon.setAttribute("src", _images_js__WEBPACK_IMPORTED_MODULE_1__.TempLoadingIcon);

  const tempActual = document.querySelector(".temp-actual");
  tempActual.textContent = "69 °C";

  const tempMin = document.querySelector(".temp-min");
  tempMin.textContent = "69 °C";

  const tempMax = document.querySelector(".temp-max");
  tempMax.textContent = "69 °C";

  const city = document.querySelector(".city");
  city.textContent = "Loading...";

  const country = document.querySelector(".country");
  country.textContent = "";

  const sunrise = document.querySelector(".time-sunrise");
  sunrise.textContent = "69:69";

  const sunset = document.querySelector(".time-sunset");
  sunset.textContent = "69:69";

  const measureTime = document.querySelector(".time-measure");
  measureTime.textContent = "Loading...";

  const measureLocation = document.querySelector(".time-measure-loc");
  measureLocation.textContent = "";

  const humidity = document.querySelector(".humidity");
  humidity.textContent = "69%";

  const pressure = document.querySelector(".pressure");
  pressure.textContent = "69 hPa";

  const windSpeed = document.querySelector(".wind-speed");
  windSpeed.textContent = "69 km/h";

  const windAngle = document.querySelector(".wind-angle");
  windAngle.textContent = "°";

  injectSVG();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDdEIsYUFBYSwyREFBUzs7QUFFdEIsYUFBYSwyREFBUztBQUN0QixhQUFhLDJEQUFTO0FBQ3RCLGFBQWEsMkRBQVM7QUFDdEIsYUFBYSwyREFBUzs7QUFFdEIsYUFBYSw0REFBVztBQUN4QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7QUFDeEIsYUFBYSw0REFBVzs7QUFFeEIsYUFBYSw0REFBVztBQUN4QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7QUFDeEIsYUFBYSw0REFBVztBQUN4QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7O0FBRXhCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTs7QUFFckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTs7QUFFckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTs7QUFFckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTs7QUFFckIsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYzs7QUFFM0IsYUFBYSwwREFBUztBQUN0QixhQUFhLDBEQUFTOztBQUV0QixhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7QUFDdEIsYUFBYSwwREFBUztBQUN0QixhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7QUFDdEIsYUFBYSwwREFBUzs7QUFFdEIsYUFBYSwwREFBUztBQUN0QixhQUFhLDBEQUFTO0FBQ3RCOztBQUVBLHlCQUF5QixvRUFBTSxFQUFFLG9FQUFNLEVBQUUsb0VBQU0sRUFBRSxvRUFBTSxFQUFFLG9FQUFNLEVBQUUsb0VBQU07O0FBY3JFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pMRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzNCLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZO0FBQ0E7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUyxpQkFBaUIsUUFBUTtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTtBQUMvRCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxJQUFJLE9BQU8sSUFBSSxTQUFTLFFBQVE7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsWUFBWTtBQUNyRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBa0IsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUc7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMERBQXlCO0FBQ3hDLElBQUk7QUFDSixlQUFlLDBEQUF5QjtBQUN4QyxJQUFJO0FBQ0osZUFBZSwwREFBeUI7QUFDeEMsSUFBSTtBQUNKLGVBQWUsMERBQXlCO0FBQ3hDLElBQUk7QUFDSixlQUFlLDBEQUF5QjtBQUN4QyxJQUFJO0FBQ0osZUFBZSwwREFBeUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsbURBQWtCO0FBQzNEO0FBQ0Esb0NBQW9DLHVEQUFzQjtBQUMxRDtBQUNBLGlDQUFpQyxvREFBbUI7QUFDcEQ7QUFDQSxnQ0FBZ0MsbURBQWtCO0FBQ2xEO0FBQ0EsK0JBQStCLGtEQUFpQjtBQUNoRDtBQUNBLGlDQUFpQyxvREFBbUI7QUFDcEQ7QUFDQSxpQ0FBaUMsb0RBQW1CO0FBQ3BEO0FBQ0Esa0NBQWtDLHFEQUFvQjtBQUN0RDtBQUNBLGtDQUFrQyxxREFBb0I7O0FBRXREO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsbURBQWtCOztBQUU3RDtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLHVEQUFzQjs7QUFFNUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9nbG9iYWwvd2luZG93LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2xpY2VkL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2xpY2VkL2xpYi9zbGljZWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdmctaW5qZWN0L2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMveGhyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMveGhyL25vZGVfbW9kdWxlcy9vbmNlL29uY2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9qcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvc2VhcmNoLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcblxcbiAgLS1jb2xvci13aW50ZXItYmx1ZTogIzI1MjUzNTtcXG4gIC0tY29sb3Itb2xkLXdoaXRlOiAjYzhjMDkzO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdpbnRlci1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbGQtd2hpdGUpO1xcblxcbiAgcGFkZGluZzogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHZ3LCAxZnIpKTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ud2VhdGhlci1ub3cge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4uc2VhcmNoYmFyIHtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vbGQtd2hpdGUpO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIGhlaWdodDogMy4ycmVtO1xcbiAgd2lkdGg6IDMuMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0LWRpdiB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi53ZWF0aGVyLWdpc3QtZGl2IHN2ZyB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA5cmVtOyBcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZm9udC1zaXplOiAzLjNyZW07XFxufVxcblxcbi53ZWF0aGVyLWRlc2Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLnRlbXAtZ3JvdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICBmb250LXNpemU6IDQuM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnRlbXAtZmVlbHMtbGlrZS1kaXYgcCB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4udGVtcC1pY29uIHtcXG4gIGZvbnQtc3R5bGU6IDEuMHJlbTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07IFxcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50ZW1wLWFjdHVhbCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50ZW1wLWFjdHVhbC1kaXYsXFxuLnRlbXAtbWluLWRpdixcXG4udGVtcC1tYXgtZGl2IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHAsXFxuLnRlbXAtYWN0dWFsLWRpdiBwLFxcbi50ZW1wLW1pbi1kaXYgcCxcXG4udGVtcC1tYXgtZGl2IHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5sb2NhdGlvbi1hbmQtdGltZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmxvY2F0aW9uLWFuZC10aW1lID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2l0eS1kaXYge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jaXR5LWRpdiBzdmcge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmNpdHkge1xcbiAgZm9udC1zaXplOiAzLjhyZW07XFxufVxcblxcbi5jb3VudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xcbn1cXG5cXG4uc3VucmlzZS1zdW5zZXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4udGltZS1zdW5yaXNlLWRpdixcXG4udGltZS1zdW5zZXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lLXN1bnNldCxcXG4udGltZS1zdW5yaXNlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRpbWUtbWVhc3VyZS1kaXYgcCB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5iYXJvbWV0cmljLWdyb3VwLFxcbi53aW5kLWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5odW1pZGl0eS1kaXYsXFxuLnByZXNzdXJlLWRpdixcXG4ud2luZC1zcGVlZC1kaXYsXFxuLndpbmQtYW5nbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5odW1pZGl0eS1kaXYgcCxcXG4ucHJlc3N1cmUtZGl2IHAsXFxuLndpbmQtc3BlZWQtZGl2IHAsXFxuLndpbmQtYW5nbGUtZGl2IHAge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5odW1pZGl0eS1kaXYgc3ZnLFxcbi5wcmVzc3VyZS1kaXYgc3ZnLFxcbi53aW5kLXNwZWVkLWRpdiBzdmcsXFxuLndpbmQtYW5nbGUtZGl2IHN2ZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmJhcm9tZXRyaWMtZ3JvdXAgaDIsXFxuLndpbmQtZ3JvdXAgaDMge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbnN2ZyAqIHtcXG4gIHN0cm9rZTogdmFyKC0tY29sb3Itb2xkLXdoaXRlKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCOztFQUVoQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiwwQ0FBMEM7RUFDMUMsNkJBQTZCOztFQUU3QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseURBQTZDO0VBQzdDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1COztFQUVuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuXFxuICAtLWNvbG9yLXdpbnRlci1ibHVlOiAjMjUyNTM1O1xcbiAgLS1jb2xvci1vbGQtd2hpdGU6ICNjOGMwOTM7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2ludGVyLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxuXFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwdncsIDFmcikpO1xcbn1cXG5cXG4uY3VycmVudC13ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi53ZWF0aGVyLW5vdyB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi5zZWFyY2hiYXIge1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgaGVpZ2h0OiAzLjJyZW07XFxuICB3aWR0aDogMy4ycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3NlYXJjaC5zdmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLndlYXRoZXItZ2lzdC1kaXYge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0LWRpdiBzdmcge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogOXJlbTsgXFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLndlYXRoZXItZ2lzdCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMy4zcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi50ZW1wLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGVtcC1mZWVscy1saWtlLWRpdiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgZm9udC1zaXplOiA0LjNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHAge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLnRlbXAtaWNvbiB7XFxuICBmb250LXN0eWxlOiAxLjByZW07XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA0cmVtOyBcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGVtcC1hY3R1YWwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGVtcC1hY3R1YWwtZGl2LFxcbi50ZW1wLW1pbi1kaXYsXFxuLnRlbXAtbWF4LWRpdiB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGVtcC1mZWVscy1saWtlLWRpdiBwLFxcbi50ZW1wLWFjdHVhbC1kaXYgcCxcXG4udGVtcC1taW4tZGl2IHAsXFxuLnRlbXAtbWF4LWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubG9jYXRpb24tYW5kLXRpbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5sb2NhdGlvbi1hbmQtdGltZSA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNpdHktZGl2IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2l0eS1kaXYgc3ZnIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXFxufVxcblxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMy44cmVtO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG59XFxuXFxuLnN1bnJpc2Utc3Vuc2V0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnRpbWUtc3VucmlzZS1kaXYsXFxuLnRpbWUtc3Vuc2V0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZS1zdW5zZXQsXFxuLnRpbWUtc3VucmlzZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50aW1lLW1lYXN1cmUtZGl2IHAge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uYmFyb21ldHJpYy1ncm91cCxcXG4ud2luZC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2LFxcbi5wcmVzc3VyZS1kaXYsXFxuLndpbmQtc3BlZWQtZGl2LFxcbi53aW5kLWFuZ2xlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2IHAsXFxuLnByZXNzdXJlLWRpdiBwLFxcbi53aW5kLXNwZWVkLWRpdiBwLFxcbi53aW5kLWFuZ2xlLWRpdiBwIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2IHN2ZyxcXG4ucHJlc3N1cmUtZGl2IHN2ZyxcXG4ud2luZC1zcGVlZC1kaXYgc3ZnLFxcbi53aW5kLWFuZ2xlLWRpdiBzdmcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbi5iYXJvbWV0cmljLWdyb3VwIGgyLFxcbi53aW5kLWdyb3VwIGgzIHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG5zdmcgKiB7XFxuICBzdHJva2U6IHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciB3aW47XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgd2luID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgd2luID0gc2VsZjtcbn0gZWxzZSB7XG4gICAgd2luID0ge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2luO1xuIiwidmFyIHRyaW0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgdmFyIGhlYWRlcnNBcnIgPSB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBoZWFkZXJzQXJyW2ldXG4gICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9zbGljZWQnKTtcbiIsIlxuLyoqXG4gKiBBbiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpIGFsdGVybmF0aXZlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFyZ3Mgc29tZXRoaW5nIHdpdGggYSBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBzbGljZVxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlRW5kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3MsIHNsaWNlLCBzbGljZUVuZCkge1xuICB2YXIgcmV0ID0gW107XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcblxuICBpZiAoMCA9PT0gbGVuKSByZXR1cm4gcmV0O1xuXG4gIHZhciBzdGFydCA9IHNsaWNlIDwgMFxuICAgID8gTWF0aC5tYXgoMCwgc2xpY2UgKyBsZW4pXG4gICAgOiBzbGljZSB8fCAwO1xuXG4gIGlmIChzbGljZUVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuID0gc2xpY2VFbmQgPCAwXG4gICAgICA/IHNsaWNlRW5kICsgbGVuXG4gICAgICA6IHNsaWNlRW5kXG4gIH1cblxuICB3aGlsZSAobGVuLS0gPiBzdGFydCkge1xuICAgIHJldFtsZW4gLSBzdGFydF0gPSBhcmdzW2xlbl07XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgc2xpY2UgPSByZXF1aXJlKCdzbGljZWQnKVxudmFyIHhociAgID0gcmVxdWlyZSgneGhyJylcbnZhciBub29wICA9IGZ1bmN0aW9uIG5vb3AoKXt9XG5cbm1vZHVsZS5leHBvcnRzID0gaW5qZWN0XG5cblxuZnVuY3Rpb24gaW5qZWN0KGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wXG5cbiAgdmFyIHVybCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICBpZiAoIXVybCkgcmV0dXJuXG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBzbGljZShlbGVtZW50LmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbihhdHRyKSB7XG4gICAgcmV0dXJuIFthdHRyLm5hbWUsIGF0dHIudmFsdWVdXG4gIH0pXG5cbiAgeGhyKHtcbiAgICB1cmk6IHVybFxuICB9LCBmdW5jdGlvbihlcnIsIHJlcywgYm9keSkge1xuICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpXG5cbiAgICBpZiAoIXJlcy5yZXNwb25zZVhNTCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcihcbiAgICAgICAgJ0ludmFsaWQgU1ZHIGZpbGU6ICcgKyB1cmxcbiAgICAgICkpXG4gICAgfVxuXG4gICAgdmFyIHN2ZyA9IHJlcy5yZXNwb25zZVhNTC5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzW2ldWzBdLCBhdHRyaWJ1dGVzW2ldWzFdKVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoc3ZnLCBlbGVtZW50KVxuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHN2ZylcbiAgfSlcbn1cbiIsInZhciB3aW5kb3cgPSByZXF1aXJlKFwiZ2xvYmFsL3dpbmRvd1wiKVxudmFyIG9uY2UgPSByZXF1aXJlKFwib25jZVwiKVxudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJ3BhcnNlLWhlYWRlcnMnKVxuXG52YXIgbWVzc2FnZXMgPSB7XG4gICAgXCIwXCI6IFwiSW50ZXJuYWwgWE1MSHR0cFJlcXVlc3QgRXJyb3JcIixcbiAgICBcIjRcIjogXCI0eHggQ2xpZW50IEVycm9yXCIsXG4gICAgXCI1XCI6IFwiNXh4IFNlcnZlciBFcnJvclwiXG59XG5cbnZhciBYSFIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgbm9vcFxudmFyIFhEUiA9IFwid2l0aENyZWRlbnRpYWxzXCIgaW4gKG5ldyBYSFIoKSkgPyBYSFIgOiB3aW5kb3cuWERvbWFpblJlcXVlc3RcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVYSFJcblxuZnVuY3Rpb24gY3JlYXRlWEhSKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7IHVyaTogb3B0aW9ucyB9XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2spXG5cbiAgICB2YXIgeGhyID0gb3B0aW9ucy54aHIgfHwgbnVsbFxuXG4gICAgaWYgKCF4aHIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29ycyB8fCBvcHRpb25zLnVzZVhEUikge1xuICAgICAgICAgICAgeGhyID0gbmV3IFhEUigpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgeGhyID0gbmV3IFhIUigpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdXJpID0geGhyLnVybCA9IG9wdGlvbnMudXJpIHx8IG9wdGlvbnMudXJsXG4gICAgdmFyIG1ldGhvZCA9IHhoci5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiXG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHkgfHwgb3B0aW9ucy5kYXRhXG4gICAgdmFyIGhlYWRlcnMgPSB4aHIuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fVxuICAgIHZhciBzeW5jID0gISFvcHRpb25zLnN5bmNcbiAgICB2YXIgaXNKc29uID0gZmFsc2VcbiAgICB2YXIga2V5XG4gICAgdmFyIGxvYWQgPSBvcHRpb25zLnJlc3BvbnNlID8gbG9hZFJlc3BvbnNlIDogbG9hZFhoclxuXG4gICAgaWYgKFwianNvblwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgaXNKc29uID0gdHJ1ZVxuICAgICAgICBoZWFkZXJzW1wiQWNjZXB0XCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBtZXRob2QgIT09IFwiSEVBRFwiKSB7XG4gICAgICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIGJvZHkgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zLmpzb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gcmVhZHlzdGF0ZWNoYW5nZVxuICAgIHhoci5vbmxvYWQgPSBsb2FkXG4gICAgeGhyLm9uZXJyb3IgPSBlcnJvclxuICAgIC8vIElFOSBtdXN0IGhhdmUgb25wcm9ncmVzcyBiZSBzZXQgdG8gYSB1bmlxdWUgZnVuY3Rpb24uXG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElFIG11c3QgZGllXG4gICAgfVxuICAgIC8vIGhhdGUgSUVcbiAgICB4aHIub250aW1lb3V0ID0gbm9vcFxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJpLCAhc3luYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscyB8fCAob3B0aW9ucy5jb3JzICYmIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzICE9PSBmYWxzZSkpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBDYW5ub3Qgc2V0IHRpbWVvdXQgd2l0aCBzeW5jIHJlcXVlc3RcbiAgICBpZiAoIXN5bmMpIHtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSBcInRpbWVvdXRcIiBpbiBvcHRpb25zID8gb3B0aW9ucy50aW1lb3V0IDogNTAwMFxuICAgIH1cblxuICAgIGlmICh4aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICBmb3Ioa2V5IGluIGhlYWRlcnMpe1xuICAgICAgICAgICAgaWYoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhlYWRlcnMgY2Fubm90IGJlIHNldCBvbiBhbiBYRG9tYWluUmVxdWVzdCBvYmplY3RcIilcbiAgICB9XG5cbiAgICBpZiAoXCJyZXNwb25zZVR5cGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBvcHRpb25zLnJlc3BvbnNlVHlwZVxuICAgIH1cbiAgICBcbiAgICBpZiAoXCJiZWZvcmVTZW5kXCIgaW4gb3B0aW9ucyAmJiBcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2VuZCA9PT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICAgIG9wdGlvbnMuYmVmb3JlU2VuZCh4aHIpXG4gICAgfVxuXG4gICAgeGhyLnNlbmQoYm9keSlcblxuICAgIHJldHVybiB4aHJcblxuICAgIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2UoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgbG9hZCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5KCkge1xuICAgICAgICAvLyBDaHJvbWUgd2l0aCByZXF1ZXN0VHlwZT1ibG9iIHRocm93cyBlcnJvcnMgYXJyb3VuZCB3aGVuIGV2ZW4gdGVzdGluZyBhY2Nlc3MgdG8gcmVzcG9uc2VUZXh0XG4gICAgICAgIHZhciBib2R5ID0gbnVsbFxuXG4gICAgICAgIGlmICh4aHIucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VcbiAgICAgICAgfSBlbHNlIGlmICh4aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgIXhoci5yZXNwb25zZVR5cGUpIHtcbiAgICAgICAgICAgIGJvZHkgPSB4aHIucmVzcG9uc2VUZXh0IHx8IHhoci5yZXNwb25zZVhNTFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSnNvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBib2R5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzXG4gICAgfVxuXG4gICAgLy8gaWYgd2UncmUgZ2V0dGluZyBhIG5vbmUtb2sgc3RhdHVzQ29kZSwgYnVpbGQgJiByZXR1cm4gYW4gZXJyb3JcbiAgICBmdW5jdGlvbiBlcnJvckZyb21TdGF0dXNDb2RlKHN0YXR1cywgYm9keSkge1xuICAgICAgICB2YXIgZXJyb3IgPSBudWxsXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDAgfHwgKHN0YXR1cyA+PSA0MDAgJiYgc3RhdHVzIDwgNjAwKSkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBib2R5IDogZmFsc2UpIHx8XG4gICAgICAgICAgICAgICAgbWVzc2FnZXNbU3RyaW5nKHN0YXR1cykuY2hhckF0KDApXVxuICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICAgICAgICAgIGVycm9yLnN0YXR1c0NvZGUgPSBzdGF0dXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvclxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSAmIHByb2Nlc3MgdGhlIHJlc3BvbnNlIGluIGEgc3BlY2lhbCByZXNwb25zZSBvYmplY3RcbiAgICBmdW5jdGlvbiBsb2FkUmVzcG9uc2UoKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSBnZXRTdGF0dXNDb2RlKClcbiAgICAgICAgdmFyIGJvZHkgPSBnZXRCb2R5KClcbiAgICAgICAgdmFyIGVycm9yID0gZXJyb3JGcm9tU3RhdHVzQ29kZShzdGF0dXMsIGJvZHkpXG4gICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBzdGF0dXMsXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIHJhdzogeGhyXG4gICAgICAgIH1cbiAgICAgICAgaWYoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyl7IC8vcmVtZW1iZXIgeGhyIGNhbiBpbiBmYWN0IGJlIFhEUiBmb3IgQ09SUyBpbiBJRVxuICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycyA9IHBhcnNlSGVhZGVycyh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSwgcmVzcG9uc2UuYm9keSlcbiAgICB9XG5cbiAgICAvLyB3aWxsIGxvYWQgdGhlIGRhdGEgYW5kIGFkZCBzb21lIHJlc3BvbnNlIHByb3BlcnRpZXMgdG8gdGhlIHNvdXJjZSB4aHJcbiAgICAvLyBhbmQgdGhlbiByZXNwb25kIHdpdGggdGhhdFxuICAgIGZ1bmN0aW9uIGxvYWRYaHIoKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSBnZXRTdGF0dXNDb2RlKClcbiAgICAgICAgdmFyIGVycm9yID0gZXJyb3JGcm9tU3RhdHVzQ29kZShzdGF0dXMpXG5cbiAgICAgICAgeGhyLnN0YXR1cyA9IHhoci5zdGF0dXNDb2RlID0gc3RhdHVzXG4gICAgICAgIHhoci5ib2R5ID0gZ2V0Qm9keSgpXG4gICAgICAgIHhoci5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcblxuICAgICAgICBjYWxsYmFjayhlcnJvciwgeGhyLCB4aHIuYm9keSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihldnQpIHtcbiAgICAgICAgY2FsbGJhY2soZXZ0LCB4aHIpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuIiwibW9kdWxlLmV4cG9ydHMgPSBvbmNlXG5cbm9uY2UucHJvdG8gPSBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ29uY2UnLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvbmNlKHRoaXMpXG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIG9uY2UgKGZuKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHJldHVyblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICB9XG59XG4iLCJpbXBvcnQgQXRtb3NwaGVyZV8xXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL2F0bW9zcGhlcmVfMV8xLnN2Z1wiO1xuaW1wb3J0IENsZWFyXzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvY2xlYXJfMV8xLnN2Z1wiO1xuaW1wb3J0IENsZWFyXzFfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvY2xlYXJfMV8yLnN2Z1wiO1xuaW1wb3J0IENsb3VkXzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvY2xvdWRfMV8xLnN2Z1wiO1xuaW1wb3J0IENsb3VkXzFfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvY2xvdWRfMV8yLnN2Z1wiO1xuaW1wb3J0IENsb3VkXzJfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvY2xvdWRfMl8xLnN2Z1wiO1xuaW1wb3J0IERyaXp6bGVfMV8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9kcml6emxlXzFfMS5zdmdcIjtcbmltcG9ydCBEcml6emxlXzFfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvZHJpenpsZV8xXzIuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZV8yXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL2RyaXp6bGVfMl8xLnN2Z1wiO1xuaW1wb3J0IERyaXp6bGVfMl8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9kcml6emxlXzJfMi5zdmdcIjtcbmltcG9ydCBSYWluXzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvcmFpbl8xXzEuc3ZnXCI7XG5pbXBvcnQgUmFpbl8xXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3JhaW5fMV8yLnN2Z1wiO1xuaW1wb3J0IFJhaW5fMl8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9yYWluXzJfMS5zdmdcIjtcbmltcG9ydCBSYWluXzJfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvcmFpbl8yXzIuc3ZnXCI7XG5pbXBvcnQgUmFpbl8zXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3JhaW5fM18xLnN2Z1wiO1xuaW1wb3J0IFJhaW5fM18yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9yYWluXzNfMi5zdmdcIjtcbmltcG9ydCBSYWluXzRfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvcmFpbl80XzEuc3ZnXCI7XG5pbXBvcnQgU25vd18xXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3Nub3dfMV8xLnN2Z1wiO1xuaW1wb3J0IFNub3dfMV8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9zbm93XzFfMi5zdmdcIjtcbmltcG9ydCBTbm93XzJfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc25vd18yXzEuc3ZnXCI7XG5pbXBvcnQgU25vd18yXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3Nub3dfMl8yLnN2Z1wiO1xuaW1wb3J0IFNub3dfM18xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9zbm93XzNfMS5zdmdcIjtcbmltcG9ydCBTdG9ybV8xXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzFfMS5zdmdcIjtcbmltcG9ydCBTdG9ybV8xXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzFfMi5zdmdcIjtcbmltcG9ydCBTdG9ybV8yXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzJfMS5zdmdcIjtcbmltcG9ydCBTdG9ybV8yXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzJfMi5zdmdcIjtcbmltcG9ydCBTdG9ybV8zXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzNfMS5zdmdcIjtcbmltcG9ydCBTdG9ybV80XzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N0b3JtXzRfMS5zdmdcIjtcbmltcG9ydCBUZW1wXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfMS5zdmdcIjtcbmltcG9ydCBUZW1wXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfMi5zdmdcIjtcbmltcG9ydCBUZW1wXzMgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfMy5zdmdcIjtcbmltcG9ydCBUZW1wXzQgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfNC5zdmdcIjtcbmltcG9ydCBUZW1wXzUgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfNS5zdmdcIjtcbmltcG9ydCBUZW1wXzYgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3RlbXBfdGhlcm1vbWV0ZXJfNi5zdmdcIjtcbmltcG9ydCBMb2FkaW5nSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2xvYWRlci5zdmdcIjtcbmltcG9ydCBUZW1wTG9hZGluZ0ljb24gZnJvbSBcIi4uL2ltYWdlcy90aGVybW9tZXRlci5zdmdcIjtcbmltcG9ydCBMb2NhdGlvbkljb24gZnJvbSBcIi4uL2ltYWdlcy9tYXAtcGluLnN2Z1wiO1xuaW1wb3J0IFN1bnJpc2VJY29uIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9zeXNfc3VucmlzZS5zdmdcIjtcbmltcG9ydCBTdW5zZXRJY29uIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9zeXNfc3Vuc2V0LnN2Z1wiO1xuaW1wb3J0IEh1bWlkaXR5SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvbWFpbl9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCBQcmVzc3VyZUljb24gZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL21haW5fcHJlc3N1cmUuc3ZnXCI7XG5pbXBvcnQgV2luZFNwZWVkSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvd2luZF9zcGVlZC5zdmdcIjtcbmltcG9ydCBXaW5kQW5nbGVJY29uIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci93aW5kX2FuZ2xlLnN2Z1wiO1xuXG5jb25zdCBXZWF0aGVySWNvbiA9IHtcbiAgXCIxMWRfMjAwXCI6IFN0b3JtXzFfMSxcbiAgXCIxMWRfMjEwXCI6IFN0b3JtXzFfMSxcbiAgXCIxMWRfMjMwXCI6IFN0b3JtXzFfMSxcbiAgXCIxMW5fMjAwXCI6IFN0b3JtXzFfMixcbiAgXCIxMW5fMjEwXCI6IFN0b3JtXzFfMixcbiAgXCIxMW5fMjMwXCI6IFN0b3JtXzFfMixcblxuICBcIjExZF8yMDFcIjogU3Rvcm1fMl8xLFxuICBcIjExZF8yMTFcIjogU3Rvcm1fMl8xLFxuICBcIjExZF8yMzFcIjogU3Rvcm1fMl8xLFxuICBcIjExbl8yMDFcIjogU3Rvcm1fMl8yLFxuICBcIjExbl8yMTFcIjogU3Rvcm1fMl8yLFxuICBcIjExbl8yMzFcIjogU3Rvcm1fMl8yLFxuXG4gIFwiMTFkXzIwMlwiOiBTdG9ybV8zXzEsXG4gIFwiMTFkXzIzMlwiOiBTdG9ybV8zXzEsXG4gIFwiMTFuXzIwMlwiOiBTdG9ybV8zXzEsXG4gIFwiMTFuXzIzMlwiOiBTdG9ybV8zXzEsXG5cbiAgXCIxMWRfMjEyXCI6IFN0b3JtXzRfMSxcbiAgXCIxMWRfMjIxXCI6IFN0b3JtXzRfMSxcbiAgXCIxMW5fMjEyXCI6IFN0b3JtXzRfMSxcbiAgXCIxMW5fMjIxXCI6IFN0b3JtXzRfMSxcblxuICBcIjA5ZF8zMTNcIjogRHJpenpsZV8xXzEsXG4gIFwiMDlkXzMyMVwiOiBEcml6emxlXzFfMSxcbiAgXCIwOW5fMzEzXCI6IERyaXp6bGVfMV8yLFxuICBcIjA5bl8zMjFcIjogRHJpenpsZV8xXzIsXG5cbiAgXCIwOWRfMzAyXCI6IERyaXp6bGVfMl8xLFxuICBcIjA5ZF8zMTJcIjogRHJpenpsZV8yXzEsXG4gIFwiMDlkXzMxNFwiOiBEcml6emxlXzJfMSxcbiAgXCIwOW5fMzAyXCI6IERyaXp6bGVfMl8yLFxuICBcIjA5bl8zMTJcIjogRHJpenpsZV8yXzIsXG4gIFwiMDluXzMxNFwiOiBEcml6emxlXzJfMixcblxuICBcIjEwZF81MDBcIjogUmFpbl8xXzEsXG4gIFwiMDlkXzUyMFwiOiBSYWluXzFfMSxcbiAgXCIwOWRfNTIxXCI6IFJhaW5fMV8xLFxuICBcIjA5ZF8zMDBcIjogUmFpbl8xXzEsXG4gIFwiMDlkXzMwMVwiOiBSYWluXzFfMSxcbiAgXCIwOWRfMzEwXCI6IFJhaW5fMV8xLFxuICBcIjA5ZF8zMTFcIjogUmFpbl8xXzEsXG4gIFwiMTBuXzUwMFwiOiBSYWluXzFfMixcbiAgXCIwOW5fNTIwXCI6IFJhaW5fMV8yLFxuICBcIjA5bl81MjFcIjogUmFpbl8xXzIsXG4gIFwiMDluXzMwMFwiOiBSYWluXzFfMixcbiAgXCIwOW5fMzAxXCI6IFJhaW5fMV8yLFxuICBcIjA5bl8zMTBcIjogUmFpbl8xXzIsXG4gIFwiMDluXzMxMVwiOiBSYWluXzFfMixcblxuICBcIjEwZF81MDFcIjogUmFpbl8zXzEsXG4gIFwiMTBuXzUwMVwiOiBSYWluXzNfMixcblxuICBcIjEwZF81MDJcIjogUmFpbl80XzEsXG4gIFwiMTBkXzUwM1wiOiBSYWluXzRfMSxcbiAgXCIxMGRfNTA0XCI6IFJhaW5fNF8xLFxuICBcIjEwbl81MDJcIjogUmFpbl80XzEsXG4gIFwiMTBuXzUwM1wiOiBSYWluXzRfMSxcbiAgXCIxMG5fNTA0XCI6IFJhaW5fNF8xLFxuXG4gIFwiMDlkXzUyMlwiOiBSYWluXzJfMSxcbiAgXCIwOWRfNTMxXCI6IFJhaW5fMl8xLFxuICBcIjA5bl81MjJcIjogUmFpbl8yXzIsXG4gIFwiMDluXzUzMVwiOiBSYWluXzJfMixcblxuICBcIjEzZF82MDBcIjogU25vd18xXzEsXG4gIFwiMTNkXzYwMVwiOiBTbm93XzFfMSxcbiAgXCIxM2RfNjE1XCI6IFNub3dfMV8xLFxuICBcIjEzZF82MjBcIjogU25vd18xXzEsXG4gIFwiMTNuXzYwMFwiOiBTbm93XzFfMixcbiAgXCIxM25fNjAxXCI6IFNub3dfMV8yLFxuICBcIjEzbl82MTVcIjogU25vd18xXzIsXG4gIFwiMTNuXzYyMFwiOiBTbm93XzFfMixcblxuICBcIjEzZF82MTFcIjogU25vd18yXzEsXG4gIFwiMTNkXzYxMlwiOiBTbm93XzJfMSxcbiAgXCIxM2RfNjEzXCI6IFNub3dfMl8xLFxuICBcIjEzZF82MTZcIjogU25vd18yXzEsXG4gIFwiMTNkXzUxMVwiOiBTbm93XzJfMSxcbiAgXCIxM25fNjExXCI6IFNub3dfMl8yLFxuICBcIjEzbl82MTJcIjogU25vd18yXzIsXG4gIFwiMTNuXzYxM1wiOiBTbm93XzJfMixcbiAgXCIxM25fNjE2XCI6IFNub3dfMl8yLFxuICBcIjEzbl81MTFcIjogU25vd18yXzIsXG5cbiAgXCIxM2RfNjAyXCI6IFNub3dfM18xLFxuICBcIjEzZF82MjFcIjogU25vd18zXzEsXG4gIFwiMTNkXzYyMlwiOiBTbm93XzNfMSxcbiAgXCIxM25fNjAyXCI6IFNub3dfM18xLFxuICBcIjEzbl82MjFcIjogU25vd18zXzEsXG4gIFwiMTNuXzYyMlwiOiBTbm93XzNfMSxcblxuICBcIjUwZF83MDFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzcxMVwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzIxXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83MzFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzc0MVwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzUxXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83NjFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzc2MlwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzcxXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83ODFcIjogQXRtb3NwaGVyZV8xXzEsXG5cbiAgXCIwMWRfODAwXCI6IENsZWFyXzFfMSxcbiAgXCIwMW5fODAwXCI6IENsZWFyXzFfMixcblxuICBcIjAyZF84MDFcIjogQ2xvdWRfMV8xLFxuICBcIjAzZF84MDJcIjogQ2xvdWRfMV8xLFxuICBcIjA0ZF84MDNcIjogQ2xvdWRfMV8xLFxuICBcIjAybl84MDFcIjogQ2xvdWRfMV8yLFxuICBcIjAzbl84MDJcIjogQ2xvdWRfMV8yLFxuICBcIjA0bl84MDNcIjogQ2xvdWRfMV8yLFxuXG4gIFwiMDRkXzgwNFwiOiBDbG91ZF8yXzEsXG4gIFwiMDRuXzgwNFwiOiBDbG91ZF8yXzEsXG59O1xuXG5jb25zdCBUZW1wZXJhdHVyZUljb24gPSBbVGVtcF8xLCBUZW1wXzIsIFRlbXBfMywgVGVtcF80LCBUZW1wXzUsIFRlbXBfNl07XG5cbmV4cG9ydCB7XG4gIEh1bWlkaXR5SWNvbixcbiAgTG9hZGluZ0ljb24sXG4gIExvY2F0aW9uSWNvbixcbiAgUHJlc3N1cmVJY29uLFxuICBTdW5yaXNlSWNvbixcbiAgU3Vuc2V0SWNvbixcbiAgVGVtcGVyYXR1cmVJY29uLFxuICBUZW1wTG9hZGluZ0ljb24sXG4gIFdlYXRoZXJJY29uLFxuICBXaW5kQW5nbGVJY29uLFxuICBXaW5kU3BlZWRJY29uLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3Mvc3R5bGVzLmNzc1wiO1xuY29uc3QgU1ZHSW5qZWN0ID0gcmVxdWlyZShcInN2Zy1pbmplY3RcIik7XG5pbXBvcnQgKiBhcyBJbWFnZXMgZnJvbSBcIi4vaW1hZ2VzLmpzXCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBcImYyMzY3MGRhOTFjM2E0YjA3ZWM3ODQ3ODAyMjE4NmQwXCI7XG5cbmNvbnN0IHF1ZXJ5TG9jYXRpb24gPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTUmQVBQSUQ9JHtBUElfS0VZfWBcbiAgKTtcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaWYgKCtyYXdEYXRhLmNvZCA+PSA0MDApIHtcbiAgICByZXR1cm4gYEVycm9yOiBHZW9jb2RpbmcgQVBJID0+IFN0YXR1cyBDb2RlOiAke3Jhd0RhdGEuY29kfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRDdXJyZW50V2VhdGhlcihcbiAgICAgIC8vIEZJWE1FOiBUaHJvdyBET00gbm90aWNlIGlmIGxvY2F0aW9uIGRvZXMgbm90IGV4aXN0XG4gICAgICByYXdEYXRhWzBdLmxhdCxcbiAgICAgIHJhd0RhdGFbMF0ubG9uLFxuICAgICAgcmF3RGF0YVswXS5uYW1lXG4gICAgKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gIH1cbn07XG5cbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gKGR0LCB0ek9mZnNldCwgaXNEYXRlKSA9PiB7XG4gIGNvbnN0IGFkanVzdGVkVGltZSA9IChkdCArIHR6T2Zmc2V0KSAqIDEwMDA7IC8vIGNvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gIGNvbnN0IHRpbWVJbkxvY2FsID0gbmV3IERhdGUoYWRqdXN0ZWRUaW1lKTtcbiAgY29uc3QgdGltZUluVVRDID0gdGltZUluTG9jYWwudG9VVENTdHJpbmcoKTtcblxuICBpZiAoaXNEYXRlKSB7XG4gICAgY29uc3QgZ2V0RnVsbERhdGUgPVxuICAgICAgdGltZUluVVRDLnNwbGl0KFwiIFwiKS5zbGljZSgwLCA0KS5qb2luKFwiIFwiKSArXG4gICAgICBcIiBhdCBcIiArXG4gICAgICB0aW1lSW5VVEMuc3BsaXQoXCIgXCIpWzRdICtcbiAgICAgIFwiIGluIFwiO1xuICAgIHJldHVybiBnZXRGdWxsRGF0ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBnZXRIb3VyQW5kTWludXRlID0gdGltZUluVVRDLnNwbGl0KFwiIFwiKVs0XS5zbGljZSgwLCA1KTtcbiAgICByZXR1cm4gZ2V0SG91ckFuZE1pbnV0ZTtcbiAgfVxufTtcblxuY29uc3QgZ2V0Q3VycmVudFdlYXRoZXIgPSBhc3luYyAobGF0LCBsb24sIGxvY2F0aW9uKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZBUFBJRD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgKTtcbiAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cocmF3RGF0YSk7XG4gIGlmICgrcmF3RGF0YS5jb2QgIT09IDIwMCkge1xuICAgIHJldHVybiBgRXJyb3I6IEN1cnJlbnQgV2VhdGhlciBBUEkgPT4gU3RhdHVzIENvZGU6ICR7cmF3RGF0YS5jb2R9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0ek9mZnNldCA9IHJhd0RhdGEudGltZXpvbmUgfHwgbnVsbDtcbiAgICBjb25zdCBsb2NhbFRpbWUgPSByYXdEYXRhLmR0IHx8IG51bGw7XG4gICAgY29uc3Qgc3VucmlzZVRpbWUgPSByYXdEYXRhLnN5cy5zdW5yaXNlIHx8IG51bGw7XG4gICAgY29uc3Qgc3Vuc2V0VGltZSA9IHJhd0RhdGEuc3lzLnN1bnNldCB8fCBudWxsO1xuXG4gICAgbGV0IGlzRGF5dGltZTtcbiAgICBpZiAobG9jYWxUaW1lID49IHN1bnJpc2VUaW1lICYmIGxvY2FsVGltZSA8IHN1bnNldFRpbWUpIHtcbiAgICAgIGlzRGF5dGltZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzRGF5dGltZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgdGltZTogZm9ybWF0RGF0ZVRpbWUobG9jYWxUaW1lLCB0ek9mZnNldCwgdHJ1ZSksXG4gICAgICAgIGlzRGF5T3JOaWdodDogaXNEYXl0aW1lID8gXCJkXCIgOiBcIm5cIixcbiAgICAgICAgbmFtZTogbG9jYXRpb24sXG4gICAgICAgIG5hbWVfbGF0bG9uOiByYXdEYXRhLm5hbWUgfHwgbnVsbCxcbiAgICAgICAgbWFpbl90ZW1wX2F2ZTogcmF3RGF0YS5tYWluLnRlbXAgfHwgbnVsbCxcbiAgICAgICAgbWFpbl90ZW1wX2ZlZWxzX2xpa2U6IHJhd0RhdGEubWFpbi5mZWVsc19saWtlIHx8IG51bGwsXG4gICAgICAgIG1haW5fdGVtcF9taW46IHJhd0RhdGEubWFpbi50ZW1wX21pbiB8fCBudWxsLFxuICAgICAgICBtYWluX3RlbXBfbWF4OiByYXdEYXRhLm1haW4udGVtcF9tYXggfHwgbnVsbCxcbiAgICAgICAgbWFpbl9odW1pZGl0eTogcmF3RGF0YS5tYWluLmh1bWlkaXR5IHx8IG51bGwsXG4gICAgICAgIG1haW5fcHJlc3N1cmU6IHJhd0RhdGEubWFpbi5wcmVzc3VyZSB8fCBudWxsLFxuICAgICAgICBzeXNfY291bnRyeTogcmF3RGF0YS5zeXMuY291bnRyeSB8fCBudWxsLFxuICAgICAgICBzeXNfc3VucmlzZTogZm9ybWF0RGF0ZVRpbWUoc3VucmlzZVRpbWUsIHR6T2Zmc2V0LCBmYWxzZSksXG4gICAgICAgIHN5c19zdW5zZXQ6IGZvcm1hdERhdGVUaW1lKHN1bnNldFRpbWUsIHR6T2Zmc2V0LCBmYWxzZSksXG4gICAgICAgIHdlYXRoZXJfaWQ6IHJhd0RhdGEud2VhdGhlclswXS5pZCB8fCBudWxsLFxuICAgICAgICB3ZWF0aGVyX2dpc3Q6IHJhd0RhdGEud2VhdGhlclswXS5tYWluIHx8IG51bGwsXG4gICAgICAgIHdlYXRoZXJfZGVzYzogcmF3RGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uIHx8IG51bGwsXG4gICAgICAgIHdlYXRoZXJfaWNvbjogcmF3RGF0YS53ZWF0aGVyWzBdLmljb24uc2xpY2UoMCwgMikgfHwgbnVsbCxcbiAgICAgICAgd2luZF9hbmdsZTogcmF3RGF0YS53aW5kLmRlZyB8fCBudWxsLFxuICAgICAgICB3aW5kX3NwZWVkOiByYXdEYXRhLndpbmQuc3BlZWQgfHwgbnVsbCxcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfVxufTtcblxuLy8gTk9URTogRE9NIFNUVUZGXG5cbmNvbnN0IHNlYXJjaGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoYmFyXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGV4dCddXCIpO1xuc2VhcmNoYmFyLm9uc3VibWl0ID0gKCkgPT4gdHJ5UXVlcnkoaW5wdXQudmFsdWUpO1xuXG5mdW5jdGlvbiB0cnlRdWVyeShxdWVyaWVkTG9jYXRpb24pIHtcbiAgbG9hZGluZ0RPTSgpO1xuICB0cnkge1xuICAgIHF1ZXJ5TG9jYXRpb24ocXVlcmllZExvY2F0aW9uKVxuICAgICAgLnRoZW4oKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICAgIHVwZGF0ZURPTSh3ZWF0aGVyRGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTSh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCB3ZWF0aGVyR2lzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1naXN0XCIpO1xuICB3ZWF0aGVyR2lzdC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndlYXRoZXJfZ2lzdDtcblxuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY1wiKTtcbiAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlcl9kZXNjO1xuXG4gIGxldCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jb25kaXRpb24taWNvblwiKTtcbiAgaWYgKHdlYXRoZXJDb25kaXRpb25JY29uLnRhZ05hbWUgPT09IFwic3ZnXCIpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5wYXJlbnRFbGVtZW50O1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uLnJlbW92ZSgpO1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb25kaXRpb24taWNvblwiKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ3ZWF0aGVyIGljb25cIik7XG4gICAgcGFyZW50LnByZXBlbmQod2VhdGhlckNvbmRpdGlvbkljb24pO1xuICB9XG4gIGNvbnN0IGlkID0gd2VhdGhlckRhdGEud2VhdGhlcl9pZDtcbiAgY29uc3QgZG4gPSB3ZWF0aGVyRGF0YS5pc0RheU9yTmlnaHQ7XG4gIGNvbnN0IGljID0gd2VhdGhlckRhdGEud2VhdGhlcl9pY29uO1xuXG4gIHdlYXRoZXJDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcbiAgICBcInNyY1wiLFxuICAgIEltYWdlcy5XZWF0aGVySWNvbltgJHtpY30ke2RufV8ke2lkfWBdXG4gICk7XG5cbiAgY29uc3QgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1mZWVscy1saWtlXCIpO1xuICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubWFpbl90ZW1wX2ZlZWxzX2xpa2UgKyBcIiDCsENcIjtcblxuICBsZXQgdGVtcGVyYXR1cmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWljb25cIik7XG4gIGlmICh0ZW1wZXJhdHVyZUljb24udGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgIGNvbnN0IHByZXZTaWJsaW5nID0gdGVtcGVyYXR1cmVJY29uLm5leHRFbGVtZW50U2libGluZztcbiAgICB0ZW1wZXJhdHVyZUljb24ucmVtb3ZlKCk7XG4gICAgdGVtcGVyYXR1cmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0ZW1wZXJhdHVyZUljb24uY2xhc3NMaXN0LmFkZChcInRlbXAtaWNvblwiKTtcbiAgICBwcmV2U2libGluZy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmViZWdpblwiLCB0ZW1wZXJhdHVyZUljb24pO1xuICB9XG5cbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IHdlYXRoZXJEYXRhLm1haW5fdGVtcF9mZWVsc19saWtlO1xuICBsZXQgdGVtcEljb247XG4gIGlmIChmZWVsc0xpa2VUZW1wIDw9IC0xMikge1xuICAgIHRlbXBJY29uID0gSW1hZ2VzLlRlbXBlcmF0dXJlSWNvblswXTtcbiAgfSBlbHNlIGlmIChmZWVsc0xpa2VUZW1wID4gLTEyICYmIGZlZWxzTGlrZVRlbXAgPD0gNCkge1xuICAgIHRlbXBJY29uID0gSW1hZ2VzLlRlbXBlcmF0dXJlSWNvblsxXTtcbiAgfSBlbHNlIGlmIChmZWVsc0xpa2VUZW1wID4gNCAmJiBmZWVsc0xpa2VUZW1wIDw9IDE1KSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzJdO1xuICB9IGVsc2UgaWYgKGZlZWxzTGlrZVRlbXAgPiAxNSAmJiBmZWVsc0xpa2VUZW1wIDw9IDI1KSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzNdO1xuICB9IGVsc2UgaWYgKGZlZWxzTGlrZVRlbXAgPiAyNSAmJiBmZWVsc0xpa2VUZW1wIDw9IDMyKSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzRdO1xuICB9IGVsc2Uge1xuICAgIHRlbXBJY29uID0gSW1hZ2VzLlRlbXBlcmF0dXJlSWNvbls1XTtcbiAgfVxuICB0ZW1wZXJhdHVyZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIHRlbXBJY29uKTtcblxuICBjb25zdCB0ZW1wQWN0dWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWFjdHVhbFwiKTtcbiAgdGVtcEFjdHVhbC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm1haW5fdGVtcF9hdmUgKyBcIiDCsENcIjtcblxuICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLW1pblwiKTtcbiAgdGVtcE1pbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm1haW5fdGVtcF9taW4gKyBcIiDCsENcIjtcblxuICBjb25zdCB0ZW1wTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLW1heFwiKTtcbiAgdGVtcE1heC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm1haW5fdGVtcF9tYXggKyBcIiDCsENcIjtcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZSArIFwiLCBcIjtcblxuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJ5XCIpO1xuICBjb3VudHJ5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuc3lzX2NvdW50cnk7XG5cbiAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1zdW5yaXNlXCIpO1xuICBzdW5yaXNlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuc3lzX3N1bnJpc2U7XG5cbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLXN1bnNldFwiKTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuc3lzX3N1bnNldDtcblxuICBjb25zdCBtZWFzdXJlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1tZWFzdXJlXCIpO1xuICBtZWFzdXJlVGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnRpbWU7XG5cbiAgY29uc3QgbWVhc3VyZUxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLW1lYXN1cmUtbG9jXCIpO1xuICBtZWFzdXJlTG9jYXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5uYW1lX2xhdGxvbjtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubWFpbl9odW1pZGl0eSArIFwiJVwiO1xuXG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKTtcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5tYWluX3ByZXNzdXJlICsgXCIgaFBhXCI7XG5cbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX3NwZWVkICsgXCIga20vaFwiO1xuXG4gIGNvbnN0IHdpbmRBbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1hbmdsZVwiKTtcbiAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2luZF9hbmdsZSArIFwiwrBcIjtcblxuICBpbmplY3RTVkcoKTtcbn1cblxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY29uZGl0aW9uLWljb25cIik7XG53ZWF0aGVyQ29uZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLkxvYWRpbmdJY29uKTtcbmNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1pY29uXCIpO1xudGVtcGVyYXR1cmVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuVGVtcExvYWRpbmdJY29uKTtcbmNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24taWNvblwiKTtcbmxvY2F0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLkxvY2F0aW9uSWNvbik7XG5jb25zdCBzdW5yaXNlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1zdW5yaXNlLWljb25cIik7XG5zdW5yaXNlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLlN1bnJpc2VJY29uKTtcbmNvbnN0IHN1bnNldEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtc3Vuc2V0LWljb25cIik7XG5zdW5zZXRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuU3Vuc2V0SWNvbik7XG5jb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5LWljb25cIik7XG5odW1pZGl0eUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5IdW1pZGl0eUljb24pO1xuY29uc3QgcHJlc3N1cmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZS1pY29uXCIpO1xucHJlc3N1cmVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuUHJlc3N1cmVJY29uKTtcbmNvbnN0IHdpbmRTcGVlZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWQtaWNvblwiKTtcbndpbmRTcGVlZEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5XaW5kU3BlZWRJY29uKTtcbmNvbnN0IHdpbmRBbmdsZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtYW5nbGUtaWNvblwiKTtcbndpbmRBbmdsZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5XaW5kQW5nbGVJY29uKTtcblxuZnVuY3Rpb24gaW5qZWN0U1ZHKCkge1xuICBjb25zdCBzdmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW3NyYyQ9XCIuc3ZnXCJdJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3Zncy5sZW5ndGg7IGkrKykge1xuICAgIFNWR0luamVjdChzdmdzW2ldLCBmdW5jdGlvbiAoZXJyLCBfKSB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cbn1cbmluamVjdFNWRygpO1xuXG4vLyBOT1RFOiBMb2NhdGlvbiBmb3IgaW5pdGlhbCBwYWdlIGxvYWRcbmNvbnN0IGluaXRpYWxMb2NhdGlvbiA9IFwiTWFuaWxhXCI7XG50cnlRdWVyeShpbml0aWFsTG9jYXRpb24pO1xuXG5mdW5jdGlvbiBsb2FkaW5nRE9NKCkge1xuICBjb25zdCB3ZWF0aGVyR2lzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1naXN0XCIpO1xuICB3ZWF0aGVyR2lzdC50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjXCIpO1xuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcblxuICBsZXQgd2VhdGhlckNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY29uZGl0aW9uLWljb25cIik7XG4gIGlmICh3ZWF0aGVyQ29uZGl0aW9uSWNvbi50YWdOYW1lID09PSBcInN2Z1wiKSB7XG4gICAgY29uc3QgcGFyZW50ID0gd2VhdGhlckNvbmRpdGlvbkljb24ucGFyZW50RWxlbWVudDtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5yZW1vdmUoKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgd2VhdGhlckNvbmRpdGlvbkljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY29uZGl0aW9uLWljb25cIik7XG4gICAgd2VhdGhlckNvbmRpdGlvbkljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwid2VhdGhlciBpY29uXCIpO1xuICAgIHBhcmVudC5wcmVwZW5kKHdlYXRoZXJDb25kaXRpb25JY29uKTtcbiAgfVxuICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLkxvYWRpbmdJY29uKTtcblxuICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWZlZWxzLWxpa2VcIik7XG4gIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcblxuICBjb25zdCB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtaWNvblwiKTtcbiAgdGVtcGVyYXR1cmVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuVGVtcExvYWRpbmdJY29uKTtcblxuICBjb25zdCB0ZW1wQWN0dWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWFjdHVhbFwiKTtcbiAgdGVtcEFjdHVhbC50ZXh0Q29udGVudCA9IFwiNjkgwrBDXCI7XG5cbiAgY29uc3QgdGVtcE1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1taW5cIik7XG4gIHRlbXBNaW4udGV4dENvbnRlbnQgPSBcIjY5IMKwQ1wiO1xuXG4gIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWF4XCIpO1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gXCI2OSDCsENcIjtcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuICBjaXR5LnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG5cbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRyeVwiKTtcbiAgY291bnRyeS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3Qgc3VucmlzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1zdW5yaXNlXCIpO1xuICBzdW5yaXNlLnRleHRDb250ZW50ID0gXCI2OTo2OVwiO1xuXG4gIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1zdW5zZXRcIik7XG4gIHN1bnNldC50ZXh0Q29udGVudCA9IFwiNjk6NjlcIjtcblxuICBjb25zdCBtZWFzdXJlVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1tZWFzdXJlXCIpO1xuICBtZWFzdXJlVGltZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIGNvbnN0IG1lYXN1cmVMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1tZWFzdXJlLWxvY1wiKTtcbiAgbWVhc3VyZUxvY2F0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gXCI2OSVcIjtcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlc3N1cmVcIik7XG4gIHByZXNzdXJlLnRleHRDb250ZW50ID0gXCI2OSBoUGFcIjtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIik7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IFwiNjkga20vaFwiO1xuXG4gIGNvbnN0IHdpbmRBbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1hbmdsZVwiKTtcbiAgd2luZEFuZ2xlLnRleHRDb250ZW50ID0gXCLCsFwiO1xuXG4gIGluamVjdFNWRygpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9