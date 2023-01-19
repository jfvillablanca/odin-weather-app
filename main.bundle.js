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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid white; */\n}\n\n:root {\n  font-size: 62.5%;\n\n  --color-winter-blue: #252535;\n  --color-old-white: #c8c093;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Lato\", sans-serif;\n  background-color: var(--color-winter-blue);\n  color: var(--color-old-white);\n\n  padding: 3rem;\n  max-height: 100vh;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));\n}\n\n.current-weather {\n  display: grid;\n}\n\n.weather-now {\n  margin-bottom: 3rem;\n  font-size: 1.6rem;\n}\n\n.searchbar {\n  width: min-content;\n  border-bottom: 2px solid var(--color-old-white);\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\ninput[type=\"text\"] {\n  font-size: 2rem;\n  background: none;\n  border: none;\n  color: inherit;\n}\n\ninput[type=\"submit\"] {\n  height: 3.2rem;\n  width: 3.2rem;\n  background: none;\n  border: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.weather-condition {\n  display: grid;\n  grid-auto-rows: auto;\n  align-items: center;\n\n  margin-bottom: 3rem;\n}\n\n.weather-gist-div {\n  display:grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.weather-gist-div svg {\n  place-self: center;\n  min-height: 9rem; \n  width: auto;\n}\n\n.weather-gist {\n  align-self: center;\n  margin-left: 2rem;\n  font-size: 3.3rem;\n}\n\n.weather-desc {\n  margin-bottom: 1rem;\n  font-size: 5rem;\n}\n\n.temp-group {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.temp-feels-like-div {\n  grid-column: span 3;\n  font-size: 4.3rem;\n  align-self: center;\n\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  gap: 2rem;\n}\n\n.temp-feels-like-div p {\n  grid-column: span 2;\n}\n\n.temp-icon {\n  font-style: 1.0rem;\n  place-self: center;\n  min-height: 4rem; \n  width: auto;\n}\n\n.temp-actual {\n  font-size: 3rem;\n}\n\n.temp-actual-div,\n.temp-min-div,\n.temp-max-div {\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.temp-feels-like-div p,\n.temp-actual-div p,\n.temp-min-div p,\n.temp-max-div p {\n  font-size: 1.8rem;\n  opacity: 0.8;\n}\n\n.location-and-time {\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-rows: 1fr min-content 1fr;\n}\n\n.location-and-time > * {\n  margin-bottom: 2rem;\n}\n\n.city-div {\n  font-size: 3rem;\n\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.city-div svg {\n  height: 60%;\n  width: auto;\n  /* align-self: center; */\n}\n\n.city {\n  font-size: 3.8rem;\n}\n\n.country {\n  font-size: 2.9rem;\n}\n\n.sunrise-sunset-div {\n  display: grid;\n  grid-template-columns: min-content min-content;\n  gap: 5rem;\n}\n\n.time-sunrise-div,\n.time-sunset-div {\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  gap: 1rem;\n}\n\n.time-sunset,\n.time-sunrise {\n  font-size: 2rem;\n}\n\n.time-measure-div p {\n  opacity: 0.8;\n}\n\n.barometric-group,\n.wind-group {\n  margin-bottom: 1rem;\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.humidity-div,\n.pressure-div,\n.wind-speed-div,\n.wind-angle-div {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n\n.humidity-div p,\n.pressure-div p,\n.wind-speed-div p,\n.wind-angle-div p {\n  grid-column: span 2;\n  margin-bottom: 1rem;\n}\n\n.humidity-div svg,\n.pressure-div svg,\n.wind-speed-div svg,\n.wind-angle-div svg {\n  height: 4rem;\n  width: auto;\n  margin-right: 2rem;\n}\n\n.barometric-group h2,\n.wind-group h3 {\n  font-size: 2.6rem;\n}\n\nsvg * {\n  stroke: var(--color-old-white);\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;;EAEhB,4BAA4B;EAC5B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,0CAA0C;EAC1C,6BAA6B;;EAE7B,aAAa;EACb,iBAAiB;;EAEjB,aAAa;EACb,2DAA2D;AAC7D;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,+CAA+C;EAC/C,mBAAmB;;EAEnB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,yDAA6C;EAC7C,wBAAwB;EACxB,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;;EAEnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;EACb,sCAAsC;EACtC,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,iBAAiB;EACjB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;;;;EAIE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,mBAAmB;;EAEnB,aAAa;EACb,uCAAuC;AACzC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;;EAEf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,WAAW;EACX,wBAAwB;AAC1B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,mBAAmB;EACnB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;AAChC;;AAEA;;;;EAIE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;;;;EAIE,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid white; */\n}\n\n:root {\n  font-size: 62.5%;\n\n  --color-winter-blue: #252535;\n  --color-old-white: #c8c093;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Lato\", sans-serif;\n  background-color: var(--color-winter-blue);\n  color: var(--color-old-white);\n\n  padding: 3rem;\n  max-height: 100vh;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));\n}\n\n.current-weather {\n  display: grid;\n}\n\n.weather-now {\n  margin-bottom: 3rem;\n  font-size: 1.6rem;\n}\n\n.searchbar {\n  width: min-content;\n  border-bottom: 2px solid var(--color-old-white);\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-columns: 5fr 1fr;\n}\n\ninput[type=\"text\"] {\n  font-size: 2rem;\n  background: none;\n  border: none;\n  color: inherit;\n}\n\ninput[type=\"submit\"] {\n  height: 3.2rem;\n  width: 3.2rem;\n  background: none;\n  border: none;\n  background-image: url(\"../images/search.svg\");\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n\n.weather-condition {\n  display: grid;\n  grid-auto-rows: auto;\n  align-items: center;\n\n  margin-bottom: 3rem;\n}\n\n.weather-gist-div {\n  display:grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.weather-gist-div svg {\n  place-self: center;\n  min-height: 9rem; \n  width: auto;\n}\n\n.weather-gist {\n  align-self: center;\n  margin-left: 2rem;\n  font-size: 3.3rem;\n}\n\n.weather-desc {\n  margin-bottom: 1rem;\n  font-size: 5rem;\n}\n\n.temp-group {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n\n.temp-feels-like-div {\n  grid-column: span 3;\n  font-size: 4.3rem;\n  align-self: center;\n\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  gap: 2rem;\n}\n\n.temp-feels-like-div p {\n  grid-column: span 2;\n}\n\n.temp-icon {\n  font-style: 1.0rem;\n  place-self: center;\n  min-height: 4rem; \n  width: auto;\n}\n\n.temp-actual {\n  font-size: 3rem;\n}\n\n.temp-actual-div,\n.temp-min-div,\n.temp-max-div {\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n}\n\n.temp-feels-like-div p,\n.temp-actual-div p,\n.temp-min-div p,\n.temp-max-div p {\n  font-size: 1.8rem;\n  opacity: 0.8;\n}\n\n.location-and-time {\n  margin-bottom: 3rem;\n\n  display: grid;\n  grid-template-rows: 1fr min-content 1fr;\n}\n\n.location-and-time > * {\n  margin-bottom: 2rem;\n}\n\n.city-div {\n  font-size: 3rem;\n\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n\n.city-div svg {\n  height: 60%;\n  width: auto;\n  /* align-self: center; */\n}\n\n.city {\n  font-size: 3.8rem;\n}\n\n.country {\n  font-size: 2.9rem;\n}\n\n.sunrise-sunset-div {\n  display: grid;\n  grid-template-columns: min-content min-content;\n  gap: 5rem;\n}\n\n.time-sunrise-div,\n.time-sunset-div {\n  display: grid;\n  grid-template-columns: 1fr 9fr;\n  gap: 1rem;\n}\n\n.time-sunset,\n.time-sunrise {\n  font-size: 2rem;\n}\n\n.time-measure-div p {\n  opacity: 0.8;\n}\n\n.barometric-group,\n.wind-group {\n  margin-bottom: 1rem;\n  font-size: 1.8rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.humidity-div,\n.pressure-div,\n.wind-speed-div,\n.wind-angle-div {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  align-items: center;\n}\n\n.humidity-div p,\n.pressure-div p,\n.wind-speed-div p,\n.wind-angle-div p {\n  grid-column: span 2;\n  margin-bottom: 1rem;\n}\n\n.humidity-div svg,\n.pressure-div svg,\n.wind-speed-div svg,\n.wind-angle-div svg {\n  height: 4rem;\n  width: auto;\n  margin-right: 2rem;\n}\n\n.barometric-group h2,\n.wind-group h3 {\n  font-size: 2.6rem;\n}\n\nsvg * {\n  stroke: var(--color-old-white);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUV0QixhQUFhLDJEQUFTO0FBQ3RCLGFBQWEsMkRBQVM7QUFDdEIsYUFBYSwyREFBUztBQUN0QixhQUFhLDJEQUFTOztBQUV0QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7QUFDeEIsYUFBYSw0REFBVztBQUN4QixhQUFhLDREQUFXOztBQUV4QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7QUFDeEIsYUFBYSw0REFBVztBQUN4QixhQUFhLDREQUFXO0FBQ3hCLGFBQWEsNERBQVc7QUFDeEIsYUFBYSw0REFBVzs7QUFFeEIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7O0FBRXJCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7O0FBRXJCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7O0FBRXJCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFRO0FBQ3JCLGFBQWEsMERBQVE7QUFDckIsYUFBYSwwREFBUTtBQUNyQixhQUFhLDBEQUFROztBQUVyQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjO0FBQzNCLGFBQWEsK0RBQWM7QUFDM0IsYUFBYSwrREFBYztBQUMzQixhQUFhLCtEQUFjOztBQUUzQixhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7O0FBRXRCLGFBQWEsMERBQVM7QUFDdEIsYUFBYSwwREFBUztBQUN0QixhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7QUFDdEIsYUFBYSwwREFBUztBQUN0QixhQUFhLDBEQUFTOztBQUV0QixhQUFhLDBEQUFTO0FBQ3RCLGFBQWEsMERBQVM7QUFDdEI7O0FBRUEseUJBQXlCLG9FQUFNLEVBQUUsb0VBQU0sRUFBRSxvRUFBTSxFQUFFLG9FQUFNLEVBQUUsb0VBQU0sRUFBRSxvRUFBTTs7QUFjckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakxGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDM0Isa0JBQWtCLG1CQUFPLENBQUMsc0RBQVk7QUFDQTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCxTQUFTLGlCQUFpQixRQUFRO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9ELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJLFNBQVMsUUFBUTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFrQixJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBeUI7QUFDeEMsSUFBSTtBQUNKLGVBQWUsMERBQXlCO0FBQ3hDLElBQUk7QUFDSixlQUFlLDBEQUF5QjtBQUN4QyxJQUFJO0FBQ0osZUFBZSwwREFBeUI7QUFDeEMsSUFBSTtBQUNKLGVBQWUsMERBQXlCO0FBQ3hDLElBQUk7QUFDSixlQUFlLDBEQUF5QjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QyxtREFBa0I7QUFDM0Q7QUFDQSxvQ0FBb0MsdURBQXNCO0FBQzFEO0FBQ0EsaUNBQWlDLG9EQUFtQjtBQUNwRDtBQUNBLGdDQUFnQyxtREFBa0I7QUFDbEQ7QUFDQSwrQkFBK0Isa0RBQWlCO0FBQ2hEO0FBQ0EsaUNBQWlDLG9EQUFtQjtBQUNwRDtBQUNBLGlDQUFpQyxvREFBbUI7QUFDcEQ7QUFDQSxrQ0FBa0MscURBQW9CO0FBQ3REO0FBQ0Esa0NBQWtDLHFEQUFvQjs7QUFFdEQ7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtREFBa0I7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsdURBQXNCOztBQUU1RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2dsb2JhbC93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9wYXJzZS1oZWFkZXJzL3BhcnNlLWhlYWRlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zbGljZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zbGljZWQvbGliL3NsaWNlZC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2Nzcy9zdHlsZXMuY3NzPzk5YTMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N2Zy1pbmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy94aHIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy94aHIvbm9kZV9tb2R1bGVzL29uY2Uvb25jZS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2pzL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9zZWFyY2guc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuXFxuICAtLWNvbG9yLXdpbnRlci1ibHVlOiAjMjUyNTM1O1xcbiAgLS1jb2xvci1vbGQtd2hpdGU6ICNjOGMwOTM7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2ludGVyLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxuXFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzB2dywgMWZyKSk7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLndlYXRoZXItbm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itb2xkLXdoaXRlKTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuXFxuLndlYXRoZXItZ2lzdC1kaXYge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0LWRpdiBzdmcge1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogOXJlbTsgXFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLndlYXRoZXItZ2lzdCB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMy4zcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1kZXNjIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDVyZW07XFxufVxcblxcbi50ZW1wLWdyb3VwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGVtcC1mZWVscy1saWtlLWRpdiB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgZm9udC1zaXplOiA0LjNyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHAge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLnRlbXAtaWNvbiB7XFxuICBmb250LXN0eWxlOiAxLjByZW07XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA0cmVtOyBcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGVtcC1hY3R1YWwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGVtcC1hY3R1YWwtZGl2LFxcbi50ZW1wLW1pbi1kaXYsXFxuLnRlbXAtbWF4LWRpdiB7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGVtcC1mZWVscy1saWtlLWRpdiBwLFxcbi50ZW1wLWFjdHVhbC1kaXYgcCxcXG4udGVtcC1taW4tZGl2IHAsXFxuLnRlbXAtbWF4LWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ubG9jYXRpb24tYW5kLXRpbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudCAxZnI7XFxufVxcblxcbi5sb2NhdGlvbi1hbmQtdGltZSA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmNpdHktZGl2IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY2l0eS1kaXYgc3ZnIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IGF1dG87XFxuICAvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXFxufVxcblxcbi5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMy44cmVtO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDIuOXJlbTtcXG59XFxuXFxuLnN1bnJpc2Utc3Vuc2V0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXG4gIGdhcDogNXJlbTtcXG59XFxuXFxuLnRpbWUtc3VucmlzZS1kaXYsXFxuLnRpbWUtc3Vuc2V0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOWZyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udGltZS1zdW5zZXQsXFxuLnRpbWUtc3VucmlzZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50aW1lLW1lYXN1cmUtZGl2IHAge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uYmFyb21ldHJpYy1ncm91cCxcXG4ud2luZC1ncm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2LFxcbi5wcmVzc3VyZS1kaXYsXFxuLndpbmQtc3BlZWQtZGl2LFxcbi53aW5kLWFuZ2xlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2IHAsXFxuLnByZXNzdXJlLWRpdiBwLFxcbi53aW5kLXNwZWVkLWRpdiBwLFxcbi53aW5kLWFuZ2xlLWRpdiBwIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaHVtaWRpdHktZGl2IHN2ZyxcXG4ucHJlc3N1cmUtZGl2IHN2ZyxcXG4ud2luZC1zcGVlZC1kaXYgc3ZnLFxcbi53aW5kLWFuZ2xlLWRpdiBzdmcge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxufVxcblxcbi5iYXJvbWV0cmljLWdyb3VwIGgyLFxcbi53aW5kLWdyb3VwIGgzIHtcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcbn1cXG5cXG5zdmcgKiB7XFxuICBzdHJva2U6IHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjs7RUFFaEIsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsMENBQTBDO0VBQzFDLDZCQUE2Qjs7RUFFN0IsYUFBYTtFQUNiLGlCQUFpQjs7RUFFakIsYUFBYTtFQUNiLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseURBQTZDO0VBQzdDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1COztFQUVuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTs7RUFFZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTs7OztFQUlFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuXFxuICAtLWNvbG9yLXdpbnRlci1ibHVlOiAjMjUyNTM1O1xcbiAgLS1jb2xvci1vbGQtd2hpdGU6ICNjOGMwOTM7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2ludGVyLWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9sZC13aGl0ZSk7XFxuXFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzB2dywgMWZyKSk7XFxufVxcblxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLndlYXRoZXItbm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnNlYXJjaGJhciB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itb2xkLXdoaXRlKTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBoZWlnaHQ6IDMuMnJlbTtcXG4gIHdpZHRoOiAzLjJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvc2VhcmNoLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0LWRpdiB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi53ZWF0aGVyLWdpc3QtZGl2IHN2ZyB7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiA5cmVtOyBcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ud2VhdGhlci1naXN0IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgZm9udC1zaXplOiAzLjNyZW07XFxufVxcblxcbi53ZWF0aGVyLWRlc2Mge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuLnRlbXAtZ3JvdXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICBmb250LXNpemU6IDQuM3JlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnRlbXAtZmVlbHMtbGlrZS1kaXYgcCB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4udGVtcC1pY29uIHtcXG4gIGZvbnQtc3R5bGU6IDEuMHJlbTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDRyZW07IFxcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50ZW1wLWFjdHVhbCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50ZW1wLWFjdHVhbC1kaXYsXFxuLnRlbXAtbWluLWRpdixcXG4udGVtcC1tYXgtZGl2IHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZW1wLWZlZWxzLWxpa2UtZGl2IHAsXFxuLnRlbXAtYWN0dWFsLWRpdiBwLFxcbi50ZW1wLW1pbi1kaXYgcCxcXG4udGVtcC1tYXgtZGl2IHAge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5sb2NhdGlvbi1hbmQtdGltZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIG1pbi1jb250ZW50IDFmcjtcXG59XFxuXFxuLmxvY2F0aW9uLWFuZC10aW1lID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uY2l0eS1kaXYge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jaXR5LWRpdiBzdmcge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmNpdHkge1xcbiAgZm9udC1zaXplOiAzLjhyZW07XFxufVxcblxcbi5jb3VudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xcbn1cXG5cXG4uc3VucmlzZS1zdW5zZXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4udGltZS1zdW5yaXNlLWRpdixcXG4udGltZS1zdW5zZXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5ZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50aW1lLXN1bnNldCxcXG4udGltZS1zdW5yaXNlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRpbWUtbWVhc3VyZS1kaXYgcCB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5iYXJvbWV0cmljLWdyb3VwLFxcbi53aW5kLWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5odW1pZGl0eS1kaXYsXFxuLnByZXNzdXJlLWRpdixcXG4ud2luZC1zcGVlZC1kaXYsXFxuLndpbmQtYW5nbGUtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5odW1pZGl0eS1kaXYgcCxcXG4ucHJlc3N1cmUtZGl2IHAsXFxuLndpbmQtc3BlZWQtZGl2IHAsXFxuLndpbmQtYW5nbGUtZGl2IHAge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5odW1pZGl0eS1kaXYgc3ZnLFxcbi5wcmVzc3VyZS1kaXYgc3ZnLFxcbi53aW5kLXNwZWVkLWRpdiBzdmcsXFxuLndpbmQtYW5nbGUtZGl2IHN2ZyB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG59XFxuXFxuLmJhcm9tZXRyaWMtZ3JvdXAgaDIsXFxuLndpbmQtZ3JvdXAgaDMge1xcbiAgZm9udC1zaXplOiAyLjZyZW07XFxufVxcblxcbnN2ZyAqIHtcXG4gIHN0cm9rZTogdmFyKC0tY29sb3Itb2xkLXdoaXRlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIHdpbjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW4gPSBnbG9iYWw7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICB3aW4gPSBzZWxmO1xufSBlbHNlIHtcbiAgICB3aW4gPSB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aW47XG4iLCJ2YXIgdHJpbSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn1cbiAgLCBpc0FycmF5ID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gIGlmICghaGVhZGVycylcbiAgICByZXR1cm4ge31cblxuICB2YXIgcmVzdWx0ID0ge31cblxuICB2YXIgaGVhZGVyc0FyciA9IHRyaW0oaGVhZGVycykuc3BsaXQoJ1xcbicpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJzQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IGhlYWRlcnNBcnJbaV1cbiAgICB2YXIgaW5kZXggPSByb3cuaW5kZXhPZignOicpXG4gICAgLCBrZXkgPSB0cmltKHJvdy5zbGljZSgwLCBpbmRleCkpLnRvTG93ZXJDYXNlKClcbiAgICAsIHZhbHVlID0gdHJpbShyb3cuc2xpY2UoaW5kZXggKyAxKSlcblxuICAgIGlmICh0eXBlb2YocmVzdWx0W2tleV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShyZXN1bHRba2V5XSkpIHtcbiAgICAgIHJlc3VsdFtrZXldLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gWyByZXN1bHRba2V5XSwgdmFsdWUgXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3NsaWNlZCcpO1xuIiwiXG4vKipcbiAqIEFuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykgYWx0ZXJuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYXJncyBzb21ldGhpbmcgd2l0aCBhIGxlbmd0aFxuICogQHBhcmFtIHtOdW1iZXJ9IHNsaWNlXG4gKiBAcGFyYW0ge051bWJlcn0gc2xpY2VFbmRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJncywgc2xpY2UsIHNsaWNlRW5kKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuXG4gIGlmICgwID09PSBsZW4pIHJldHVybiByZXQ7XG5cbiAgdmFyIHN0YXJ0ID0gc2xpY2UgPCAwXG4gICAgPyBNYXRoLm1heCgwLCBzbGljZSArIGxlbilcbiAgICA6IHNsaWNlIHx8IDA7XG5cbiAgaWYgKHNsaWNlRW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZW4gPSBzbGljZUVuZCA8IDBcbiAgICAgID8gc2xpY2VFbmQgKyBsZW5cbiAgICAgIDogc2xpY2VFbmRcbiAgfVxuXG4gIHdoaWxlIChsZW4tLSA+IHN0YXJ0KSB7XG4gICAgcmV0W2xlbiAtIHN0YXJ0XSA9IGFyZ3NbbGVuXTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBzbGljZSA9IHJlcXVpcmUoJ3NsaWNlZCcpXG52YXIgeGhyICAgPSByZXF1aXJlKCd4aHInKVxudmFyIG5vb3AgID0gZnVuY3Rpb24gbm9vcCgpe31cblxubW9kdWxlLmV4cG9ydHMgPSBpbmplY3RcblxuXG5mdW5jdGlvbiBpbmplY3QoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6IG5vb3BcblxuICB2YXIgdXJsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gIGlmICghdXJsKSByZXR1cm5cblxuICB2YXIgYXR0cmlidXRlcyA9IHNsaWNlKGVsZW1lbnQuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKGF0dHIpIHtcbiAgICByZXR1cm4gW2F0dHIubmFtZSwgYXR0ci52YWx1ZV1cbiAgfSlcblxuICB4aHIoe1xuICAgIHVyaTogdXJsXG4gIH0sIGZ1bmN0aW9uKGVyciwgcmVzLCBib2R5KSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycilcblxuICAgIGlmICghcmVzLnJlc3BvbnNlWE1MKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKFxuICAgICAgICAnSW52YWxpZCBTVkcgZmlsZTogJyArIHVybFxuICAgICAgKSlcbiAgICB9XG5cbiAgICB2YXIgc3ZnID0gcmVzLnJlc3BvbnNlWE1MLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbaV1bMF0sIGF0dHJpYnV0ZXNbaV1bMV0pXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzdmcsIGVsZW1lbnQpXG4gICAgfVxuXG4gICAgY2FsbGJhY2sobnVsbCwgc3ZnKVxuICB9KVxufVxuIiwidmFyIHdpbmRvdyA9IHJlcXVpcmUoXCJnbG9iYWwvd2luZG93XCIpXG52YXIgb25jZSA9IHJlcXVpcmUoXCJvbmNlXCIpXG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgncGFyc2UtaGVhZGVycycpXG5cbnZhciBtZXNzYWdlcyA9IHtcbiAgICBcIjBcIjogXCJJbnRlcm5hbCBYTUxIdHRwUmVxdWVzdCBFcnJvclwiLFxuICAgIFwiNFwiOiBcIjR4eCBDbGllbnQgRXJyb3JcIixcbiAgICBcIjVcIjogXCI1eHggU2VydmVyIEVycm9yXCJcbn1cblxudmFyIFhIUiA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCBub29wXG52YXIgWERSID0gXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiAobmV3IFhIUigpKSA/IFhIUiA6IHdpbmRvdy5YRG9tYWluUmVxdWVzdFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVhIUlxuXG5mdW5jdGlvbiBjcmVhdGVYSFIob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgdXJpOiBvcHRpb25zIH1cbiAgICB9XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjaylcblxuICAgIHZhciB4aHIgPSBvcHRpb25zLnhociB8fCBudWxsXG5cbiAgICBpZiAoIXhocikge1xuICAgICAgICBpZiAob3B0aW9ucy5jb3JzIHx8IG9wdGlvbnMudXNlWERSKSB7XG4gICAgICAgICAgICB4aHIgPSBuZXcgWERSKClcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB4aHIgPSBuZXcgWEhSKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1cmkgPSB4aHIudXJsID0gb3B0aW9ucy51cmkgfHwgb3B0aW9ucy51cmxcbiAgICB2YXIgbWV0aG9kID0geGhyLm1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IFwiR0VUXCJcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keSB8fCBvcHRpb25zLmRhdGFcbiAgICB2YXIgaGVhZGVycyA9IHhoci5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9XG4gICAgdmFyIHN5bmMgPSAhIW9wdGlvbnMuc3luY1xuICAgIHZhciBpc0pzb24gPSBmYWxzZVxuICAgIHZhciBrZXlcbiAgICB2YXIgbG9hZCA9IG9wdGlvbnMucmVzcG9uc2UgPyBsb2FkUmVzcG9uc2UgOiBsb2FkWGhyXG5cbiAgICBpZiAoXCJqc29uXCIgaW4gb3B0aW9ucykge1xuICAgICAgICBpc0pzb24gPSB0cnVlXG4gICAgICAgIGhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICBpZiAobWV0aG9kICE9PSBcIkdFVFwiICYmIG1ldGhvZCAhPT0gXCJIRUFEXCIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuanNvbilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZWFkeXN0YXRlY2hhbmdlXG4gICAgeGhyLm9ubG9hZCA9IGxvYWRcbiAgICB4aHIub25lcnJvciA9IGVycm9yXG4gICAgLy8gSUU5IG11c3QgaGF2ZSBvbnByb2dyZXNzIGJlIHNldCB0byBhIHVuaXF1ZSBmdW5jdGlvbi5cbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSUUgbXVzdCBkaWVcbiAgICB9XG4gICAgLy8gaGF0ZSBJRVxuICAgIHhoci5vbnRpbWVvdXQgPSBub29wXG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmksICFzeW5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IChvcHRpb25zLmNvcnMgJiYgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgIT09IGZhbHNlKSkge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIENhbm5vdCBzZXQgdGltZW91dCB3aXRoIHN5bmMgcmVxdWVzdFxuICAgIGlmICghc3luYykge1xuICAgICAgICB4aHIudGltZW91dCA9IFwidGltZW91dFwiIGluIG9wdGlvbnMgPyBvcHRpb25zLnRpbWVvdXQgOiA1MDAwXG4gICAgfVxuXG4gICAgaWYgKHhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgIGZvcihrZXkgaW4gaGVhZGVycyl7XG4gICAgICAgICAgICBpZihoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpe1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGVhZGVycyBjYW5ub3QgYmUgc2V0IG9uIGFuIFhEb21haW5SZXF1ZXN0IG9iamVjdFwiKVxuICAgIH1cblxuICAgIGlmIChcInJlc3BvbnNlVHlwZVwiIGluIG9wdGlvbnMpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IG9wdGlvbnMucmVzcG9uc2VUeXBlXG4gICAgfVxuICAgIFxuICAgIGlmIChcImJlZm9yZVNlbmRcIiBpbiBvcHRpb25zICYmIFxuICAgICAgICB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTZW5kID09PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgICAgb3B0aW9ucy5iZWZvcmVTZW5kKHhocilcbiAgICB9XG5cbiAgICB4aHIuc2VuZChib2R5KVxuXG4gICAgcmV0dXJuIHhoclxuXG4gICAgZnVuY3Rpb24gcmVhZHlzdGF0ZWNoYW5nZSgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBsb2FkKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIC8vIENocm9tZSB3aXRoIHJlcXVlc3RUeXBlPWJsb2IgdGhyb3dzIGVycm9ycyBhcnJvdW5kIHdoZW4gZXZlbiB0ZXN0aW5nIGFjY2VzcyB0byByZXNwb25zZVRleHRcbiAgICAgICAgdmFyIGJvZHkgPSBudWxsXG5cbiAgICAgICAgaWYgKHhoci5yZXNwb25zZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVxuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCAheGhyLnJlc3BvbnNlVHlwZSkge1xuICAgICAgICAgICAgYm9keSA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlWE1MXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNKc29uKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZHlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4geGhyLnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHhoci5zdGF0dXNcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSdyZSBnZXR0aW5nIGEgbm9uZS1vayBzdGF0dXNDb2RlLCBidWlsZCAmIHJldHVybiBhbiBlcnJvclxuICAgIGZ1bmN0aW9uIGVycm9yRnJvbVN0YXR1c0NvZGUoc3RhdHVzLCBib2R5KSB7XG4gICAgICAgIHZhciBlcnJvciA9IG51bGxcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gMCB8fCAoc3RhdHVzID49IDQwMCAmJiBzdGF0dXMgPCA2MDApKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICh0eXBlb2YgYm9keSA9PT0gXCJzdHJpbmdcIiA/IGJvZHkgOiBmYWxzZSkgfHxcbiAgICAgICAgICAgICAgICBtZXNzYWdlc1tTdHJpbmcoc3RhdHVzKS5jaGFyQXQoMCldXG4gICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHN0YXR1c1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yXG4gICAgfVxuXG4gICAgLy8gd2lsbCBsb2FkIHRoZSBkYXRhICYgcHJvY2VzcyB0aGUgcmVzcG9uc2UgaW4gYSBzcGVjaWFsIHJlc3BvbnNlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGxvYWRSZXNwb25zZSgpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9IGdldFN0YXR1c0NvZGUoKVxuICAgICAgICB2YXIgYm9keSA9IGdldEJvZHkoKVxuICAgICAgICB2YXIgZXJyb3IgPSBlcnJvckZyb21TdGF0dXNDb2RlKHN0YXR1cywgYm9keSlcbiAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgcmF3OiB4aHJcbiAgICAgICAgfVxuICAgICAgICBpZih4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKXsgLy9yZW1lbWJlciB4aHIgY2FuIGluIGZhY3QgYmUgWERSIGZvciBDT1JTIGluIElFXG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSB7fVxuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlLCByZXNwb25zZS5ib2R5KVxuICAgIH1cblxuICAgIC8vIHdpbGwgbG9hZCB0aGUgZGF0YSBhbmQgYWRkIHNvbWUgcmVzcG9uc2UgcHJvcGVydGllcyB0byB0aGUgc291cmNlIHhoclxuICAgIC8vIGFuZCB0aGVuIHJlc3BvbmQgd2l0aCB0aGF0XG4gICAgZnVuY3Rpb24gbG9hZFhocigpIHtcbiAgICAgICAgdmFyIHN0YXR1cyA9IGdldFN0YXR1c0NvZGUoKVxuICAgICAgICB2YXIgZXJyb3IgPSBlcnJvckZyb21TdGF0dXNDb2RlKHN0YXR1cylcblxuICAgICAgICB4aHIuc3RhdHVzID0geGhyLnN0YXR1c0NvZGUgPSBzdGF0dXNcbiAgICAgICAgeGhyLmJvZHkgPSBnZXRCb2R5KClcbiAgICAgICAgeGhyLmhlYWRlcnMgPSBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKVxuXG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCB4aHIsIHhoci5ib2R5KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yKGV2dCkge1xuICAgICAgICBjYWxsYmFjayhldnQsIHhocilcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG9uY2Vcblxub25jZS5wcm90byA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVuY3Rpb24ucHJvdG90eXBlLCAnb25jZScsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG9uY2UodGhpcylcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufSlcblxuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhbGxlZCkgcmV0dXJuXG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbn1cbiIsImltcG9ydCBBdG1vc3BoZXJlXzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvYXRtb3NwaGVyZV8xXzEuc3ZnXCI7XG5pbXBvcnQgQ2xlYXJfMV8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9jbGVhcl8xXzEuc3ZnXCI7XG5pbXBvcnQgQ2xlYXJfMV8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9jbGVhcl8xXzIuc3ZnXCI7XG5pbXBvcnQgQ2xvdWRfMV8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9jbG91ZF8xXzEuc3ZnXCI7XG5pbXBvcnQgQ2xvdWRfMV8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9jbG91ZF8xXzIuc3ZnXCI7XG5pbXBvcnQgQ2xvdWRfMl8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9jbG91ZF8yXzEuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZV8xXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL2RyaXp6bGVfMV8xLnN2Z1wiO1xuaW1wb3J0IERyaXp6bGVfMV8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9kcml6emxlXzFfMi5zdmdcIjtcbmltcG9ydCBEcml6emxlXzJfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvZHJpenpsZV8yXzEuc3ZnXCI7XG5pbXBvcnQgRHJpenpsZV8yXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL2RyaXp6bGVfMl8yLnN2Z1wiO1xuaW1wb3J0IFJhaW5fMV8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9yYWluXzFfMS5zdmdcIjtcbmltcG9ydCBSYWluXzFfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvcmFpbl8xXzIuc3ZnXCI7XG5pbXBvcnQgUmFpbl8yXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3JhaW5fMl8xLnN2Z1wiO1xuaW1wb3J0IFJhaW5fMl8yIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9yYWluXzJfMi5zdmdcIjtcbmltcG9ydCBSYWluXzNfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvcmFpbl8zXzEuc3ZnXCI7XG5pbXBvcnQgUmFpbl8zXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3JhaW5fM18yLnN2Z1wiO1xuaW1wb3J0IFJhaW5fNF8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9yYWluXzRfMS5zdmdcIjtcbmltcG9ydCBTbm93XzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc25vd18xXzEuc3ZnXCI7XG5pbXBvcnQgU25vd18xXzIgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3Nub3dfMV8yLnN2Z1wiO1xuaW1wb3J0IFNub3dfMl8xIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9zbm93XzJfMS5zdmdcIjtcbmltcG9ydCBTbm93XzJfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc25vd18yXzIuc3ZnXCI7XG5pbXBvcnQgU25vd18zXzEgZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3Nub3dfM18xLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzFfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fMV8xLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzFfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fMV8yLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzJfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fMl8xLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzJfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fMl8yLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzNfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fM18xLnN2Z1wiO1xuaW1wb3J0IFN0b3JtXzRfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvc3Rvcm1fNF8xLnN2Z1wiO1xuaW1wb3J0IFRlbXBfMSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl8xLnN2Z1wiO1xuaW1wb3J0IFRlbXBfMiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl8yLnN2Z1wiO1xuaW1wb3J0IFRlbXBfMyBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl8zLnN2Z1wiO1xuaW1wb3J0IFRlbXBfNCBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl80LnN2Z1wiO1xuaW1wb3J0IFRlbXBfNSBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl81LnN2Z1wiO1xuaW1wb3J0IFRlbXBfNiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvdGVtcF90aGVybW9tZXRlcl82LnN2Z1wiO1xuaW1wb3J0IExvYWRpbmdJY29uIGZyb20gXCIuLi9pbWFnZXMvbG9hZGVyLnN2Z1wiO1xuaW1wb3J0IFRlbXBMb2FkaW5nSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3RoZXJtb21ldGVyLnN2Z1wiO1xuaW1wb3J0IExvY2F0aW9uSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL21hcC1waW4uc3ZnXCI7XG5pbXBvcnQgU3VucmlzZUljb24gZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N5c19zdW5yaXNlLnN2Z1wiO1xuaW1wb3J0IFN1bnNldEljb24gZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3N5c19zdW5zZXQuc3ZnXCI7XG5pbXBvcnQgSHVtaWRpdHlJY29uIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci9tYWluX2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IFByZXNzdXJlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3dlYXRoZXIvbWFpbl9wcmVzc3VyZS5zdmdcIjtcbmltcG9ydCBXaW5kU3BlZWRJY29uIGZyb20gXCIuLi9pbWFnZXMvd2VhdGhlci93aW5kX3NwZWVkLnN2Z1wiO1xuaW1wb3J0IFdpbmRBbmdsZUljb24gZnJvbSBcIi4uL2ltYWdlcy93ZWF0aGVyL3dpbmRfYW5nbGUuc3ZnXCI7XG5cbmNvbnN0IFdlYXRoZXJJY29uID0ge1xuICBcIjExZF8yMDBcIjogU3Rvcm1fMV8xLFxuICBcIjExZF8yMTBcIjogU3Rvcm1fMV8xLFxuICBcIjExZF8yMzBcIjogU3Rvcm1fMV8xLFxuICBcIjExbl8yMDBcIjogU3Rvcm1fMV8yLFxuICBcIjExbl8yMTBcIjogU3Rvcm1fMV8yLFxuICBcIjExbl8yMzBcIjogU3Rvcm1fMV8yLFxuXG4gIFwiMTFkXzIwMVwiOiBTdG9ybV8yXzEsXG4gIFwiMTFkXzIxMVwiOiBTdG9ybV8yXzEsXG4gIFwiMTFkXzIzMVwiOiBTdG9ybV8yXzEsXG4gIFwiMTFuXzIwMVwiOiBTdG9ybV8yXzIsXG4gIFwiMTFuXzIxMVwiOiBTdG9ybV8yXzIsXG4gIFwiMTFuXzIzMVwiOiBTdG9ybV8yXzIsXG5cbiAgXCIxMWRfMjAyXCI6IFN0b3JtXzNfMSxcbiAgXCIxMWRfMjMyXCI6IFN0b3JtXzNfMSxcbiAgXCIxMW5fMjAyXCI6IFN0b3JtXzNfMSxcbiAgXCIxMW5fMjMyXCI6IFN0b3JtXzNfMSxcblxuICBcIjExZF8yMTJcIjogU3Rvcm1fNF8xLFxuICBcIjExZF8yMjFcIjogU3Rvcm1fNF8xLFxuICBcIjExbl8yMTJcIjogU3Rvcm1fNF8xLFxuICBcIjExbl8yMjFcIjogU3Rvcm1fNF8xLFxuXG4gIFwiMDlkXzMxM1wiOiBEcml6emxlXzFfMSxcbiAgXCIwOWRfMzIxXCI6IERyaXp6bGVfMV8xLFxuICBcIjA5bl8zMTNcIjogRHJpenpsZV8xXzIsXG4gIFwiMDluXzMyMVwiOiBEcml6emxlXzFfMixcblxuICBcIjA5ZF8zMDJcIjogRHJpenpsZV8yXzEsXG4gIFwiMDlkXzMxMlwiOiBEcml6emxlXzJfMSxcbiAgXCIwOWRfMzE0XCI6IERyaXp6bGVfMl8xLFxuICBcIjA5bl8zMDJcIjogRHJpenpsZV8yXzIsXG4gIFwiMDluXzMxMlwiOiBEcml6emxlXzJfMixcbiAgXCIwOW5fMzE0XCI6IERyaXp6bGVfMl8yLFxuXG4gIFwiMTBkXzUwMFwiOiBSYWluXzFfMSxcbiAgXCIwOWRfNTIwXCI6IFJhaW5fMV8xLFxuICBcIjA5ZF81MjFcIjogUmFpbl8xXzEsXG4gIFwiMDlkXzMwMFwiOiBSYWluXzFfMSxcbiAgXCIwOWRfMzAxXCI6IFJhaW5fMV8xLFxuICBcIjA5ZF8zMTBcIjogUmFpbl8xXzEsXG4gIFwiMDlkXzMxMVwiOiBSYWluXzFfMSxcbiAgXCIxMG5fNTAwXCI6IFJhaW5fMV8yLFxuICBcIjA5bl81MjBcIjogUmFpbl8xXzIsXG4gIFwiMDluXzUyMVwiOiBSYWluXzFfMixcbiAgXCIwOW5fMzAwXCI6IFJhaW5fMV8yLFxuICBcIjA5bl8zMDFcIjogUmFpbl8xXzIsXG4gIFwiMDluXzMxMFwiOiBSYWluXzFfMixcbiAgXCIwOW5fMzExXCI6IFJhaW5fMV8yLFxuXG4gIFwiMTBkXzUwMVwiOiBSYWluXzNfMSxcbiAgXCIxMG5fNTAxXCI6IFJhaW5fM18yLFxuXG4gIFwiMTBkXzUwMlwiOiBSYWluXzRfMSxcbiAgXCIxMGRfNTAzXCI6IFJhaW5fNF8xLFxuICBcIjEwZF81MDRcIjogUmFpbl80XzEsXG4gIFwiMTBuXzUwMlwiOiBSYWluXzRfMSxcbiAgXCIxMG5fNTAzXCI6IFJhaW5fNF8xLFxuICBcIjEwbl81MDRcIjogUmFpbl80XzEsXG5cbiAgXCIwOWRfNTIyXCI6IFJhaW5fMl8xLFxuICBcIjA5ZF81MzFcIjogUmFpbl8yXzEsXG4gIFwiMDluXzUyMlwiOiBSYWluXzJfMixcbiAgXCIwOW5fNTMxXCI6IFJhaW5fMl8yLFxuXG4gIFwiMTNkXzYwMFwiOiBTbm93XzFfMSxcbiAgXCIxM2RfNjAxXCI6IFNub3dfMV8xLFxuICBcIjEzZF82MTVcIjogU25vd18xXzEsXG4gIFwiMTNkXzYyMFwiOiBTbm93XzFfMSxcbiAgXCIxM25fNjAwXCI6IFNub3dfMV8yLFxuICBcIjEzbl82MDFcIjogU25vd18xXzIsXG4gIFwiMTNuXzYxNVwiOiBTbm93XzFfMixcbiAgXCIxM25fNjIwXCI6IFNub3dfMV8yLFxuXG4gIFwiMTNkXzYxMVwiOiBTbm93XzJfMSxcbiAgXCIxM2RfNjEyXCI6IFNub3dfMl8xLFxuICBcIjEzZF82MTNcIjogU25vd18yXzEsXG4gIFwiMTNkXzYxNlwiOiBTbm93XzJfMSxcbiAgXCIxM2RfNTExXCI6IFNub3dfMl8xLFxuICBcIjEzbl82MTFcIjogU25vd18yXzIsXG4gIFwiMTNuXzYxMlwiOiBTbm93XzJfMixcbiAgXCIxM25fNjEzXCI6IFNub3dfMl8yLFxuICBcIjEzbl82MTZcIjogU25vd18yXzIsXG4gIFwiMTNuXzUxMVwiOiBTbm93XzJfMixcblxuICBcIjEzZF82MDJcIjogU25vd18zXzEsXG4gIFwiMTNkXzYyMVwiOiBTbm93XzNfMSxcbiAgXCIxM2RfNjIyXCI6IFNub3dfM18xLFxuICBcIjEzbl82MDJcIjogU25vd18zXzEsXG4gIFwiMTNuXzYyMVwiOiBTbm93XzNfMSxcbiAgXCIxM25fNjIyXCI6IFNub3dfM18xLFxuXG4gIFwiNTBkXzcwMVwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzExXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83MjFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzczMVwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzQxXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83NTFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzc2MVwiOiBBdG1vc3BoZXJlXzFfMSxcbiAgXCI1MGRfNzYyXCI6IEF0bW9zcGhlcmVfMV8xLFxuICBcIjUwZF83NzFcIjogQXRtb3NwaGVyZV8xXzEsXG4gIFwiNTBkXzc4MVwiOiBBdG1vc3BoZXJlXzFfMSxcblxuICBcIjAxZF84MDBcIjogQ2xlYXJfMV8xLFxuICBcIjAxbl84MDBcIjogQ2xlYXJfMV8yLFxuXG4gIFwiMDJkXzgwMVwiOiBDbG91ZF8xXzEsXG4gIFwiMDNkXzgwMlwiOiBDbG91ZF8xXzEsXG4gIFwiMDRkXzgwM1wiOiBDbG91ZF8xXzEsXG4gIFwiMDJuXzgwMVwiOiBDbG91ZF8xXzIsXG4gIFwiMDNuXzgwMlwiOiBDbG91ZF8xXzIsXG4gIFwiMDRuXzgwM1wiOiBDbG91ZF8xXzIsXG5cbiAgXCIwNGRfODA0XCI6IENsb3VkXzJfMSxcbiAgXCIwNG5fODA0XCI6IENsb3VkXzJfMSxcbn07XG5cbmNvbnN0IFRlbXBlcmF0dXJlSWNvbiA9IFtUZW1wXzEsIFRlbXBfMiwgVGVtcF8zLCBUZW1wXzQsIFRlbXBfNSwgVGVtcF82XTtcblxuZXhwb3J0IHtcbiAgSHVtaWRpdHlJY29uLFxuICBMb2FkaW5nSWNvbixcbiAgTG9jYXRpb25JY29uLFxuICBQcmVzc3VyZUljb24sXG4gIFN1bnJpc2VJY29uLFxuICBTdW5zZXRJY29uLFxuICBUZW1wZXJhdHVyZUljb24sXG4gIFRlbXBMb2FkaW5nSWNvbixcbiAgV2VhdGhlckljb24sXG4gIFdpbmRBbmdsZUljb24sXG4gIFdpbmRTcGVlZEljb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9zdHlsZXMuY3NzXCI7XG5jb25zdCBTVkdJbmplY3QgPSByZXF1aXJlKFwic3ZnLWluamVjdFwiKTtcbmltcG9ydCAqIGFzIEltYWdlcyBmcm9tIFwiLi9pbWFnZXMuanNcIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiZjIzNjcwZGE5MWMzYTRiMDdlYzc4NDc4MDIyMTg2ZDBcIjtcblxuY29uc3QgcXVlcnlMb2NhdGlvbiA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvbn0mbGltaXQ9NSZBUFBJRD0ke0FQSV9LRVl9YFxuICApO1xuICBjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpZiAoK3Jhd0RhdGEuY29kID49IDQwMCkge1xuICAgIHJldHVybiBgRXJyb3I6IEdlb2NvZGluZyBBUEkgPT4gU3RhdHVzIENvZGU6ICR7cmF3RGF0YS5jb2R9YDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldEN1cnJlbnRXZWF0aGVyKFxuICAgICAgLy8gRklYTUU6IFRocm93IERPTSBub3RpY2UgaWYgbG9jYXRpb24gZG9lcyBub3QgZXhpc3RcbiAgICAgIHJhd0RhdGFbMF0ubGF0LFxuICAgICAgcmF3RGF0YVswXS5sb24sXG4gICAgICByYXdEYXRhWzBdLm5hbWVcbiAgICApO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfVxufTtcblxuY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSAoZHQsIHR6T2Zmc2V0LCBpc0RhdGUpID0+IHtcbiAgY29uc3QgYWRqdXN0ZWRUaW1lID0gKGR0ICsgdHpPZmZzZXQpICogMTAwMDsgLy8gY29udmVydCB0byBtaWxsaXNlY29uZHNcbiAgY29uc3QgdGltZUluTG9jYWwgPSBuZXcgRGF0ZShhZGp1c3RlZFRpbWUpO1xuICBjb25zdCB0aW1lSW5VVEMgPSB0aW1lSW5Mb2NhbC50b1VUQ1N0cmluZygpO1xuXG4gIGlmIChpc0RhdGUpIHtcbiAgICBjb25zdCBnZXRGdWxsRGF0ZSA9XG4gICAgICB0aW1lSW5VVEMuc3BsaXQoXCIgXCIpLnNsaWNlKDAsIDQpLmpvaW4oXCIgXCIpICtcbiAgICAgIFwiIGF0IFwiICtcbiAgICAgIHRpbWVJblVUQy5zcGxpdChcIiBcIilbNF0gK1xuICAgICAgXCIgaW4gXCI7XG4gICAgcmV0dXJuIGdldEZ1bGxEYXRlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGdldEhvdXJBbmRNaW51dGUgPSB0aW1lSW5VVEMuc3BsaXQoXCIgXCIpWzRdLnNsaWNlKDAsIDUpO1xuICAgIHJldHVybiBnZXRIb3VyQW5kTWludXRlO1xuICB9XG59O1xuXG5jb25zdCBnZXRDdXJyZW50V2VhdGhlciA9IGFzeW5jIChsYXQsIGxvbiwgbG9jYXRpb24pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JkFQUElEPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYFxuICApO1xuICBjb25zdCByYXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zb2xlLmxvZyhyYXdEYXRhKTtcbiAgaWYgKCtyYXdEYXRhLmNvZCAhPT0gMjAwKSB7XG4gICAgcmV0dXJuIGBFcnJvcjogQ3VycmVudCBXZWF0aGVyIEFQSSA9PiBTdGF0dXMgQ29kZTogJHtyYXdEYXRhLmNvZH1gO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR6T2Zmc2V0ID0gcmF3RGF0YS50aW1lem9uZSB8fCBudWxsO1xuICAgIGNvbnN0IGxvY2FsVGltZSA9IHJhd0RhdGEuZHQgfHwgbnVsbDtcbiAgICBjb25zdCBzdW5yaXNlVGltZSA9IHJhd0RhdGEuc3lzLnN1bnJpc2UgfHwgbnVsbDtcbiAgICBjb25zdCBzdW5zZXRUaW1lID0gcmF3RGF0YS5zeXMuc3Vuc2V0IHx8IG51bGw7XG5cbiAgICBsZXQgaXNEYXl0aW1lO1xuICAgIGlmIChsb2NhbFRpbWUgPj0gc3VucmlzZVRpbWUgJiYgbG9jYWxUaW1lIDwgc3Vuc2V0VGltZSkge1xuICAgICAgaXNEYXl0aW1lID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNEYXl0aW1lID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAge1xuICAgICAgICB0aW1lOiBmb3JtYXREYXRlVGltZShsb2NhbFRpbWUsIHR6T2Zmc2V0LCB0cnVlKSxcbiAgICAgICAgaXNEYXlPck5pZ2h0OiBpc0RheXRpbWUgPyBcImRcIiA6IFwiblwiLFxuICAgICAgICBuYW1lOiBsb2NhdGlvbixcbiAgICAgICAgbmFtZV9sYXRsb246IHJhd0RhdGEubmFtZSB8fCBudWxsLFxuICAgICAgICBtYWluX3RlbXBfYXZlOiByYXdEYXRhLm1haW4udGVtcCB8fCBudWxsLFxuICAgICAgICBtYWluX3RlbXBfZmVlbHNfbGlrZTogcmF3RGF0YS5tYWluLmZlZWxzX2xpa2UgfHwgbnVsbCxcbiAgICAgICAgbWFpbl90ZW1wX21pbjogcmF3RGF0YS5tYWluLnRlbXBfbWluIHx8IG51bGwsXG4gICAgICAgIG1haW5fdGVtcF9tYXg6IHJhd0RhdGEubWFpbi50ZW1wX21heCB8fCBudWxsLFxuICAgICAgICBtYWluX2h1bWlkaXR5OiByYXdEYXRhLm1haW4uaHVtaWRpdHkgfHwgbnVsbCxcbiAgICAgICAgbWFpbl9wcmVzc3VyZTogcmF3RGF0YS5tYWluLnByZXNzdXJlIHx8IG51bGwsXG4gICAgICAgIHN5c19jb3VudHJ5OiByYXdEYXRhLnN5cy5jb3VudHJ5IHx8IG51bGwsXG4gICAgICAgIHN5c19zdW5yaXNlOiBmb3JtYXREYXRlVGltZShzdW5yaXNlVGltZSwgdHpPZmZzZXQsIGZhbHNlKSxcbiAgICAgICAgc3lzX3N1bnNldDogZm9ybWF0RGF0ZVRpbWUoc3Vuc2V0VGltZSwgdHpPZmZzZXQsIGZhbHNlKSxcbiAgICAgICAgd2VhdGhlcl9pZDogcmF3RGF0YS53ZWF0aGVyWzBdLmlkIHx8IG51bGwsXG4gICAgICAgIHdlYXRoZXJfZ2lzdDogcmF3RGF0YS53ZWF0aGVyWzBdLm1haW4gfHwgbnVsbCxcbiAgICAgICAgd2VhdGhlcl9kZXNjOiByYXdEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24gfHwgbnVsbCxcbiAgICAgICAgd2VhdGhlcl9pY29uOiByYXdEYXRhLndlYXRoZXJbMF0uaWNvbi5zbGljZSgwLCAyKSB8fCBudWxsLFxuICAgICAgICB3aW5kX2FuZ2xlOiByYXdEYXRhLndpbmQuZGVnIHx8IG51bGwsXG4gICAgICAgIHdpbmRfc3BlZWQ6IHJhd0RhdGEud2luZC5zcGVlZCB8fCBudWxsLFxuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9XG59O1xuXG4vLyBOT1RFOiBET00gU1RVRkZcblxuY29uc3Qgc2VhcmNoYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hiYXJcIik7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZXh0J11cIik7XG5zZWFyY2hiYXIub25zdWJtaXQgPSAoKSA9PiB0cnlRdWVyeShpbnB1dC52YWx1ZSk7XG5cbmZ1bmN0aW9uIHRyeVF1ZXJ5KHF1ZXJpZWRMb2NhdGlvbikge1xuICBsb2FkaW5nRE9NKCk7XG4gIHRyeSB7XG4gICAgcXVlcnlMb2NhdGlvbihxdWVyaWVkTG9jYXRpb24pXG4gICAgICAudGhlbigod2VhdGhlckRhdGEpID0+IHtcbiAgICAgICAgdXBkYXRlRE9NKHdlYXRoZXJEYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRE9NKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJHaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWdpc3RcIik7XG4gIHdlYXRoZXJHaXN0LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlcl9naXN0O1xuXG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjXCIpO1xuICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyX2Rlc2M7XG5cbiAgbGV0IHdlYXRoZXJDb25kaXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNvbmRpdGlvbi1pY29uXCIpO1xuICBpZiAod2VhdGhlckNvbmRpdGlvbkljb24udGFnTmFtZSA9PT0gXCJzdmdcIikge1xuICAgIGNvbnN0IHBhcmVudCA9IHdlYXRoZXJDb25kaXRpb25JY29uLnBhcmVudEVsZW1lbnQ7XG4gICAgd2VhdGhlckNvbmRpdGlvbkljb24ucmVtb3ZlKCk7XG4gICAgd2VhdGhlckNvbmRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNvbmRpdGlvbi1pY29uXCIpO1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIndlYXRoZXIgaWNvblwiKTtcbiAgICBwYXJlbnQucHJlcGVuZCh3ZWF0aGVyQ29uZGl0aW9uSWNvbik7XG4gIH1cbiAgY29uc3QgaWQgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyX2lkO1xuICBjb25zdCBkbiA9IHdlYXRoZXJEYXRhLmlzRGF5T3JOaWdodDtcbiAgY29uc3QgaWMgPSB3ZWF0aGVyRGF0YS53ZWF0aGVyX2ljb247XG5cbiAgd2VhdGhlckNvbmRpdGlvbkljb24uc2V0QXR0cmlidXRlKFxuICAgIFwic3JjXCIsXG4gICAgSW1hZ2VzLldlYXRoZXJJY29uW2Ake2ljfSR7ZG59XyR7aWR9YF1cbiAgKTtcblxuICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWZlZWxzLWxpa2VcIik7XG4gIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5tYWluX3RlbXBfZmVlbHNfbGlrZSArIFwiIMKwQ1wiO1xuXG4gIGxldCB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtaWNvblwiKTtcbiAgaWYgKHRlbXBlcmF0dXJlSWNvbi50YWdOYW1lID09PSBcInN2Z1wiKSB7XG4gICAgY29uc3QgcHJldlNpYmxpbmcgPSB0ZW1wZXJhdHVyZUljb24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIHRlbXBlcmF0dXJlSWNvbi5yZW1vdmUoKTtcbiAgICB0ZW1wZXJhdHVyZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRlbXBlcmF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKFwidGVtcC1pY29uXCIpO1xuICAgIHByZXZTaWJsaW5nLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWJlZ2luXCIsIHRlbXBlcmF0dXJlSWNvbik7XG4gIH1cblxuICBjb25zdCBmZWVsc0xpa2VUZW1wID0gd2VhdGhlckRhdGEubWFpbl90ZW1wX2ZlZWxzX2xpa2U7XG4gIGxldCB0ZW1wSWNvbjtcbiAgaWYgKGZlZWxzTGlrZVRlbXAgPD0gLTEyKSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzBdO1xuICB9IGVsc2UgaWYgKGZlZWxzTGlrZVRlbXAgPiAtMTIgJiYgZmVlbHNMaWtlVGVtcCA8PSA0KSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzFdO1xuICB9IGVsc2UgaWYgKGZlZWxzTGlrZVRlbXAgPiA0ICYmIGZlZWxzTGlrZVRlbXAgPD0gMTUpIHtcbiAgICB0ZW1wSWNvbiA9IEltYWdlcy5UZW1wZXJhdHVyZUljb25bMl07XG4gIH0gZWxzZSBpZiAoZmVlbHNMaWtlVGVtcCA+IDE1ICYmIGZlZWxzTGlrZVRlbXAgPD0gMjUpIHtcbiAgICB0ZW1wSWNvbiA9IEltYWdlcy5UZW1wZXJhdHVyZUljb25bM107XG4gIH0gZWxzZSBpZiAoZmVlbHNMaWtlVGVtcCA+IDI1ICYmIGZlZWxzTGlrZVRlbXAgPD0gMzIpIHtcbiAgICB0ZW1wSWNvbiA9IEltYWdlcy5UZW1wZXJhdHVyZUljb25bNF07XG4gIH0gZWxzZSB7XG4gICAgdGVtcEljb24gPSBJbWFnZXMuVGVtcGVyYXR1cmVJY29uWzVdO1xuICB9XG4gIHRlbXBlcmF0dXJlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdGVtcEljb24pO1xuXG4gIGNvbnN0IHRlbXBBY3R1YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtYWN0dWFsXCIpO1xuICB0ZW1wQWN0dWFsLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubWFpbl90ZW1wX2F2ZSArIFwiIMKwQ1wiO1xuXG4gIGNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWluXCIpO1xuICB0ZW1wTWluLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubWFpbl90ZW1wX21pbiArIFwiIMKwQ1wiO1xuXG4gIGNvbnN0IHRlbXBNYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtbWF4XCIpO1xuICB0ZW1wTWF4LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubWFpbl90ZW1wX21heCArIFwiIMKwQ1wiO1xuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG4gIGNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5uYW1lICsgXCIsIFwiO1xuXG4gIGNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnlcIik7XG4gIGNvdW50cnkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5zeXNfY291bnRyeTtcblxuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLXN1bnJpc2VcIik7XG4gIHN1bnJpc2UudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5zeXNfc3VucmlzZTtcblxuICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtc3Vuc2V0XCIpO1xuICBzdW5zZXQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5zeXNfc3Vuc2V0O1xuXG4gIGNvbnN0IG1lYXN1cmVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLW1lYXN1cmVcIik7XG4gIG1lYXN1cmVUaW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEudGltZTtcblxuICBjb25zdCBtZWFzdXJlTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtbWVhc3VyZS1sb2NcIik7XG4gIG1lYXN1cmVMb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm5hbWVfbGF0bG9uO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5tYWluX2h1bWlkaXR5ICsgXCIlXCI7XG5cbiAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlXCIpO1xuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLm1haW5fcHJlc3N1cmUgKyBcIiBoUGFcIjtcblxuICBjb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIik7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndpbmRfc3BlZWQgKyBcIiBrbS9oXCI7XG5cbiAgY29uc3Qgd2luZEFuZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLWFuZ2xlXCIpO1xuICB3aW5kQW5nbGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS53aW5kX2FuZ2xlICsgXCLCsFwiO1xuXG4gIGluamVjdFNWRygpO1xufVxuXG5jb25zdCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jb25kaXRpb24taWNvblwiKTtcbndlYXRoZXJDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuTG9hZGluZ0ljb24pO1xuY29uc3QgdGVtcGVyYXR1cmVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWljb25cIik7XG50ZW1wZXJhdHVyZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5UZW1wTG9hZGluZ0ljb24pO1xuY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pY29uXCIpO1xubG9jYXRpb25JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuTG9jYXRpb25JY29uKTtcbmNvbnN0IHN1bnJpc2VJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLXN1bnJpc2UtaWNvblwiKTtcbnN1bnJpc2VJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuU3VucmlzZUljb24pO1xuY29uc3Qgc3Vuc2V0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1zdW5zZXQtaWNvblwiKTtcbnN1bnNldEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5TdW5zZXRJY29uKTtcbmNvbnN0IGh1bWlkaXR5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHktaWNvblwiKTtcbmh1bWlkaXR5SWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLkh1bWlkaXR5SWNvbik7XG5jb25zdCBwcmVzc3VyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlLWljb25cIik7XG5wcmVzc3VyZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5QcmVzc3VyZUljb24pO1xuY29uc3Qgd2luZFNwZWVkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZC1pY29uXCIpO1xud2luZFNwZWVkSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLldpbmRTcGVlZEljb24pO1xuY29uc3Qgd2luZEFuZ2xlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1hbmdsZS1pY29uXCIpO1xud2luZEFuZ2xlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgSW1hZ2VzLldpbmRBbmdsZUljb24pO1xuXG5mdW5jdGlvbiBpbmplY3RTVkcoKSB7XG4gIGNvbnN0IHN2Z3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbc3JjJD1cIi5zdmdcIl0nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgU1ZHSW5qZWN0KHN2Z3NbaV0sIGZ1bmN0aW9uIChlcnIsIF8pIHtcbiAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxufVxuaW5qZWN0U1ZHKCk7XG5cbi8vIE5PVEU6IExvY2F0aW9uIGZvciBpbml0aWFsIHBhZ2UgbG9hZFxuY29uc3QgaW5pdGlhbExvY2F0aW9uID0gXCJNYW5pbGFcIjtcbnRyeVF1ZXJ5KGluaXRpYWxMb2NhdGlvbik7XG5cbmZ1bmN0aW9uIGxvYWRpbmdET00oKSB7XG4gIGNvbnN0IHdlYXRoZXJHaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWdpc3RcIik7XG4gIHdlYXRoZXJHaXN0LnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG5cbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWRlc2NcIik7XG4gIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIGxldCB3ZWF0aGVyQ29uZGl0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jb25kaXRpb24taWNvblwiKTtcbiAgaWYgKHdlYXRoZXJDb25kaXRpb25JY29uLnRhZ05hbWUgPT09IFwic3ZnXCIpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5wYXJlbnRFbGVtZW50O1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uLnJlbW92ZSgpO1xuICAgIHdlYXRoZXJDb25kaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jb25kaXRpb24taWNvblwiKTtcbiAgICB3ZWF0aGVyQ29uZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJ3ZWF0aGVyIGljb25cIik7XG4gICAgcGFyZW50LnByZXBlbmQod2VhdGhlckNvbmRpdGlvbkljb24pO1xuICB9XG4gIHdlYXRoZXJDb25kaXRpb25JY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBJbWFnZXMuTG9hZGluZ0ljb24pO1xuXG4gIGNvbnN0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZmVlbHMtbGlrZVwiKTtcbiAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gIGNvbnN0IHRlbXBlcmF0dXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1pY29uXCIpO1xuICB0ZW1wZXJhdHVyZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIEltYWdlcy5UZW1wTG9hZGluZ0ljb24pO1xuXG4gIGNvbnN0IHRlbXBBY3R1YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtYWN0dWFsXCIpO1xuICB0ZW1wQWN0dWFsLnRleHRDb250ZW50ID0gXCI2OSDCsENcIjtcblxuICBjb25zdCB0ZW1wTWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLW1pblwiKTtcbiAgdGVtcE1pbi50ZXh0Q29udGVudCA9IFwiNjkgwrBDXCI7XG5cbiAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1tYXhcIik7XG4gIHRlbXBNYXgudGV4dENvbnRlbnQgPSBcIjY5IMKwQ1wiO1xuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHlcIik7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcblxuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudHJ5XCIpO1xuICBjb3VudHJ5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLXN1bnJpc2VcIik7XG4gIHN1bnJpc2UudGV4dENvbnRlbnQgPSBcIjY5OjY5XCI7XG5cbiAgY29uc3Qgc3Vuc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLXN1bnNldFwiKTtcbiAgc3Vuc2V0LnRleHRDb250ZW50ID0gXCI2OTo2OVwiO1xuXG4gIGNvbnN0IG1lYXN1cmVUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLW1lYXN1cmVcIik7XG4gIG1lYXN1cmVUaW1lLnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCI7XG5cbiAgY29uc3QgbWVhc3VyZUxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLW1lYXN1cmUtbG9jXCIpO1xuICBtZWFzdXJlTG9jYXRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBcIjY5JVwiO1xuXG4gIGNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKTtcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBcIjY5IGhQYVwiO1xuXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZFwiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gXCI2OSBrbS9oXCI7XG5cbiAgY29uc3Qgd2luZEFuZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLWFuZ2xlXCIpO1xuICB3aW5kQW5nbGUudGV4dENvbnRlbnQgPSBcIsKwXCI7XG5cbiAgaW5qZWN0U1ZHKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=