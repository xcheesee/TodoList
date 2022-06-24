/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".datepicker {\n  display: none;\n}\n.datepicker.active {\n  display: block;\n}\n\n.datepicker-dropdown {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-top: 4px;\n}\n.datepicker-dropdown.datepicker-orient-top {\n  padding-top: 0;\n  padding-bottom: 4px;\n}\n\n.datepicker-picker {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: hsl(0deg, 0%, 100%);\n}\n.datepicker-dropdown .datepicker-picker {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n}\n.datepicker-picker span {\n  display: block;\n  flex: 1;\n  border: 0;\n  border-radius: 4px;\n  cursor: default;\n  text-align: center;\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n\n.datepicker-main {\n  padding: 2px;\n}\n\n.datepicker-footer {\n  box-shadow: inset 0 1px 1px rgba(10, 10, 10, 0.1);\n  background-color: hsl(0deg, 0%, 96%);\n}\n\n.datepicker-grid, .datepicker-view .days-of-week, .datepicker-view, .datepicker-controls {\n  display: flex;\n}\n\n.datepicker-grid {\n  flex-wrap: wrap;\n}\n\n.datepicker-view .days .datepicker-cell, .datepicker-view .dow {\n  flex-basis: 14.2857142857%;\n}\n\n.datepicker-view.datepicker-grid .datepicker-cell {\n  flex-basis: 25%;\n}\n\n.datepicker-cell, .datepicker-view .week {\n  height: 2.25rem;\n  line-height: 2.25rem;\n}\n\n.datepicker-title {\n  box-shadow: inset 0 -1px 1px rgba(10, 10, 10, 0.1);\n  background-color: hsl(0deg, 0%, 96%);\n  padding: 0.375rem 0.75rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.datepicker-header .datepicker-controls {\n  padding: 2px 2px 0;\n}\n.datepicker-controls .button {\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  box-shadow: none;\n  background-color: hsl(0deg, 0%, 100%);\n  cursor: pointer;\n  padding: calc(0.375em - 1px) 0.75em;\n  height: 2.25em;\n  vertical-align: top;\n  text-align: center;\n  line-height: 1.5;\n  white-space: nowrap;\n  color: hsl(0deg, 0%, 21%);\n  font-size: 1rem;\n}\n.datepicker-controls .button:focus, .datepicker-controls .button:active {\n  outline: none;\n}\n.datepicker-controls .button:hover {\n  border-color: #b5b5b5;\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button:focus {\n  border-color: hsl(217deg, 71%, 53%);\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button:focus:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.datepicker-controls .button:active {\n  border-color: #4a4a4a;\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button[disabled] {\n  cursor: not-allowed;\n}\n.datepicker-header .datepicker-controls .button {\n  border-color: transparent;\n  font-weight: bold;\n}\n.datepicker-header .datepicker-controls .button:hover {\n  background-color: #f9f9f9;\n}\n.datepicker-header .datepicker-controls .button:focus:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.datepicker-header .datepicker-controls .button:active {\n  background-color: #f2f2f2;\n}\n.datepicker-header .datepicker-controls .button[disabled] {\n  box-shadow: none;\n}\n.datepicker-footer .datepicker-controls .button {\n  margin: calc(0.375rem - 1px) 0.375rem;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.datepicker-controls .view-switch {\n  flex: auto;\n}\n.datepicker-controls .prev-btn,\n.datepicker-controls .next-btn {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n  width: 2.25rem;\n}\n.datepicker-controls .prev-btn.disabled,\n.datepicker-controls .next-btn.disabled {\n  visibility: hidden;\n}\n\n.datepicker-view .dow {\n  height: 1.5rem;\n  line-height: 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.datepicker-view .week {\n  width: 2.25rem;\n  color: #b5b5b5;\n  font-size: 0.75rem;\n}\n@media (max-width: 22.5rem) {\n  .datepicker-view .week {\n    width: 1.96875rem;\n  }\n}\n\n.datepicker-grid {\n  width: 15.75rem;\n}\n@media (max-width: 22.5rem) {\n  .calendar-weeks + .days .datepicker-grid {\n    width: 13.78125rem;\n  }\n}\n\n.datepicker-cell:not(.disabled):hover {\n  background-color: #f9f9f9;\n  cursor: pointer;\n}\n.datepicker-cell.focused:not(.selected) {\n  background-color: #e8e8e8;\n}\n.datepicker-cell.selected, .datepicker-cell.selected:hover {\n  background-color: hsl(217deg, 71%, 53%);\n  color: #fff;\n  font-weight: 600;\n}\n.datepicker-cell.disabled {\n  color: #dbdbdb;\n}\n.datepicker-cell.prev:not(.disabled), .datepicker-cell.next:not(.disabled) {\n  color: hsl(0deg, 0%, 48%);\n}\n.datepicker-cell.prev.selected, .datepicker-cell.next.selected {\n  color: #e6e6e6;\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today) {\n  border-radius: 0;\n  background-color: hsl(0deg, 0%, 96%);\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today):not(.disabled):hover {\n  background-color: #eeeeee;\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today).focused {\n  background-color: #e8e8e8;\n}\n.datepicker-cell.today:not(.selected) {\n  background-color: hsl(171deg, 100%, 41%);\n}\n.datepicker-cell.today:not(.selected):not(.disabled) {\n  color: #fff;\n}\n.datepicker-cell.today.focused:not(.selected) {\n  background-color: #00c4a7;\n}\n.datepicker-cell.range-end:not(.selected), .datepicker-cell.range-start:not(.selected) {\n  background-color: #b5b5b5;\n  color: #fff;\n}\n.datepicker-cell.range-end.focused:not(.selected), .datepicker-cell.range-start.focused:not(.selected) {\n  background-color: #afafaf;\n}\n.datepicker-cell.range-start {\n  border-radius: 4px 0 0 4px;\n}\n.datepicker-cell.range-end {\n  border-radius: 0 4px 4px 0;\n}\n.datepicker-cell.range {\n  border-radius: 0;\n  background-color: #dbdbdb;\n}\n.datepicker-cell.range:not(.disabled):not(.focused):not(.today):hover {\n  background-color: #d5d5d5;\n}\n.datepicker-cell.range.disabled {\n  color: #c2c2c2;\n}\n.datepicker-cell.range.focused {\n  background-color: #cfcfcf;\n}\n.datepicker-view.datepicker-grid .datepicker-cell {\n  height: 4.5rem;\n  line-height: 4.5rem;\n}\n\n.datepicker-input.in-edit {\n  border-color: #2366d1;\n}\n.datepicker-input.in-edit:focus, .datepicker-input.in-edit:active {\n  box-shadow: 0 0 0.25em 0.25em rgba(35, 102, 209, 0.2);\n}\n\n#header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-area: header;\n}\n\n#formContainer, .nFormWrapper, .pFormWrapper {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n}\n\n#nForm, #pForm {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 300px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  padding: 2rem;\n}\n\n.mainPage {\n  display: grid;\n  grid-template-areas: \"header  header header header header\" \"sidebar card   card   card   card  \" \"sidebar card   card   card   card  \";\n}\n\n.sidebar {\n  display: grid;\n  grid-area: sidebar;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n\n.cardContainer {\n  grid-area: card;\n}\n\n.showForm {\n  display: block !important;\n}\n\n.formTitle {\n  grid-column: 1/-1;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./node_modules/vanillajs-datepicker/sass/datepicker.scss","webpack://./src/style.css","webpack://./node_modules/vanillajs-datepicker/sass/_mixins.scss","webpack://./src/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/vanillajs-datepicker/js/Datepicker.js":
/*!************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/Datepicker.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Datepicker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n/base-locales.js */ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js");
/* harmony import */ var _options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options/defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");
/* harmony import */ var _options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/processOptions.js */ "./node_modules/vanillajs-datepicker/js/options/processOptions.js");
/* harmony import */ var _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./picker/Picker.js */ "./node_modules/vanillajs-datepicker/js/picker/Picker.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/inputFieldListeners.js */ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js");
/* harmony import */ var _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/otherListeners.js */ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js");













function stringifyDates(dates, config) {
  return dates
    .map(dt => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(dt, config.format, config.locale))
    .join(config.dateDelimiter);
}

// parse input dates and create an array of time values for selection
// returns undefined if there are no valid dates in inputDates
// when origDates (current selection) is passed, the function works to mix
// the input dates into the current selection
function processInputDates(datepicker, inputDates, clear = false) {
  // const {config, dates: origDates, rangepicker} = datepicker;
  const {config, dates: origDates, rangeSideIndex} = datepicker;
  if (inputDates.length === 0) {
    // empty input is considered valid unless origiDates is passed
    return clear ? [] : undefined;
  }

  // const rangeEnd = rangepicker && datepicker === rangepicker.datepickers[1];
  let newDates = inputDates.reduce((dates, dt) => {
    let date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, config.format, config.locale);
    if (date === undefined) {
      return dates;
    }
    // adjust to 1st of the month/Jan 1st of the year
    // or to the last day of the monh/Dec 31st of the year if the datepicker
    // is the range-end picker of a rangepicker
    date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, config.pickLevel, rangeSideIndex);
    if (
      (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, config.minDate, config.maxDate)
      && !dates.includes(date)
      && !config.datesDisabled.includes(date)
      && (config.pickLevel > 0 || !config.daysOfWeekDisabled.includes(new Date(date).getDay()))
    ) {
      dates.push(date);
    }
    return dates;
  }, []);
  if (newDates.length === 0) {
    return;
  }
  if (config.multidate && !clear) {
    // get the synmetric difference between origDates and newDates
    newDates = newDates.reduce((dates, date) => {
      if (!origDates.includes(date)) {
        dates.push(date);
      }
      return dates;
    }, origDates.filter(date => !newDates.includes(date)));
  }
  // do length check always because user can input multiple dates regardless of the mode
  return config.maxNumberOfDates && newDates.length > config.maxNumberOfDates
    ? newDates.slice(config.maxNumberOfDates * -1)
    : newDates;
}

// refresh the UI elements
// modes: 1: input only, 2, picker only, 3 both
function refreshUI(datepicker, mode = 3, quickRender = true) {
  const {config, picker, inputField} = datepicker;
  if (mode & 2) {
    const newView = picker.active ? config.pickLevel : config.startView;
    picker.update().changeView(newView).render(quickRender);
  }
  if (mode & 1 && inputField) {
    inputField.value = stringifyDates(datepicker.dates, config);
  }
}

function setDate(datepicker, inputDates, options) {
  let {clear, render, autohide, revert} = options;
  if (render === undefined) {
    render = true;
  }
  if (!render) {
    autohide = false;
  } else if (autohide === undefined) {
    autohide = datepicker.config.autohide;
  }

  const newDates = processInputDates(datepicker, inputDates, clear);
  if (!newDates && !revert) {
    return;
  }
  if (newDates && newDates.toString() !== datepicker.dates.toString()) {
    datepicker.dates = newDates;
    refreshUI(datepicker, render ? 3 : 1);
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_9__.triggerDatepickerEvent)(datepicker, 'changeDate');
  } else {
    refreshUI(datepicker, 1);
  }

  if (autohide) {
    datepicker.hide();
  }
}

/**
 * Class representing a date picker
 */
class Datepicker {
  /**
   * Create a date picker
   * @param  {Element} element - element to bind a date picker
   * @param  {Object} [options] - config options
   * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
   * date picker belongs to. Use this only when creating date picker as a part
   * of date range picker
   */
  constructor(element, options = {}, rangepicker = undefined) {
    element.datepicker = this;
    this.element = element;

    const config = this.config = Object.assign({
      buttonClass: (options.buttonClass && String(options.buttonClass)) || 'button',
      container: null,
      defaultViewDate: (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(),
      maxDate: undefined,
      minDate: undefined,
    }, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_options_defaultOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"], this));
    // configure by type
    const inline = this.inline = element.tagName !== 'INPUT';
    let inputField;
    if (inline) {
      config.container = element;
    } else {
      if (options.container) {
        // omit string type check because it doesn't guarantee to avoid errors
        // (invalid selector string causes abend with sytax error)
        config.container = options.container instanceof HTMLElement
          ? options.container
          : document.querySelector(options.container);
      }
      inputField = this.inputField = element;
      inputField.classList.add('datepicker-input');
    }
    if (rangepicker) {
      // check validiry
      const index = rangepicker.inputs.indexOf(inputField);
      const datepickers = rangepicker.datepickers;
      if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
        throw Error('Invalid rangepicker object.');
      }
      // attach itaelf to the rangepicker here so that processInputDates() can
      // determine if this is the range-end picker of the rangepicker while
      // setting inital values when pickLevel > 0
      datepickers[index] = this;
      // add getter for rangepicker
      Object.defineProperty(this, 'rangepicker', {
        get() {
          return rangepicker;
        },
      });
      Object.defineProperty(this, 'rangeSideIndex', {
        get() {
          return index;
        },
      });
    }

    // set up config
    this._options = options;
    Object.assign(config, (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this));

    // set initial dates
    let initialDates;
    if (inline) {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(element.dataset.date, config.dateDelimiter);
      delete element.dataset.date;
    } else {
      initialDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(inputField.value, config.dateDelimiter);
    }
    this.dates = [];
    // process initial value
    const inputDateValues = processInputDates(this, initialDates);
    if (inputDateValues && inputDateValues.length > 0) {
      this.dates = inputDateValues;
    }
    if (inputField) {
      inputField.value = stringifyDates(this.dates, config);
    }

    const picker = this.picker = new _picker_Picker_js__WEBPACK_IMPORTED_MODULE_8__["default"](this);

    if (inline) {
      this.show();
    } else {
      // set up event listeners in other modes
      const onMousedownDocument = _events_otherListeners_js__WEBPACK_IMPORTED_MODULE_11__.onClickOutside.bind(null, this);
      const listeners = [
        [inputField, 'keydown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onKeydown.bind(null, this)],
        [inputField, 'focus', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onFocus.bind(null, this)],
        [inputField, 'mousedown', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onMousedown.bind(null, this)],
        [inputField, 'click', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onClickInput.bind(null, this)],
        [inputField, 'paste', _events_inputFieldListeners_js__WEBPACK_IMPORTED_MODULE_10__.onPaste.bind(null, this)],
        [document, 'mousedown', onMousedownDocument],
        [document, 'touchstart', onMousedownDocument],
        [window, 'resize', picker.place.bind(picker)]
      ];
      (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.registerListeners)(this, listeners);
    }
  }

  /**
   * Format Date object or time value in given format and language
   * @param  {Date|Number} date - date or time value to format
   * @param  {String|Object} format - format string or object that contains
   * toDisplay() custom formatter, whose signature is
   * - args:
   *   - date: {Date} - Date instance of the date passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {String} formatted date
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {String} formatted date
   */
  static formatDate(date, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * Parse date string
   * @param  {String|Date|Number} dateStr - date string, Date object or time
   * value to parse
   * @param  {String|Object} format - format string or object that contains
   * toValue() custom parser, whose signature is
   * - args:
   *   - dateStr: {String|Date|Number} - the dateStr passed to the method
   *   - format: {Object} - the format object passed to the method
   *   - locale: {Object} - locale for the language specified by `lang`
   * - return:
   *     {Date|Number} parsed date or its time value
   * @param  {String} [lang=en] - language code for the locale to use
   * @return {Number} time value of parsed date
   */
  static parseDate(dateStr, format, lang) {
    return (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dateStr, format, lang && _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales[lang] || _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales.en);
  }

  /**
   * @type {Object} - Installed locales in `[languageCode]: localeObject` format
   * en`:_English (US)_ is pre-installed.
   */
  static get locales() {
    return _i18n_base_locales_js__WEBPACK_IMPORTED_MODULE_5__.locales;
  }

  /**
   * @type {Boolean} - Whether the picker element is shown. `true` whne shown
   */
  get active() {
    return !!(this.picker && this.picker.active);
  }

  /**
   * @type {HTMLDivElement} - DOM object of picker element
   */
  get pickerElement() {
    return this.picker ? this.picker.element : undefined;
  }

  /**
   * Set new values to the config options
   * @param {Object} options - config options to update
   */
  setOptions(options) {
    const picker = this.picker;
    const newOptions = (0,_options_processOptions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, this);
    Object.assign(this._options, options);
    Object.assign(this.config, newOptions);
    picker.setOptions(newOptions);

    refreshUI(this, 3);
  }

  /**
   * Show the picker element
   */
  show() {
    if (this.inputField) {
      if (this.inputField.disabled) {
        return;
      }
      if (!(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.isActiveElement)(this.inputField) && !this.config.disableTouchKeyboard) {
        this._showing = true;
        this.inputField.focus();
        delete this._showing;
      }
    }
    this.picker.show();
  }

  /**
   * Hide the picker element
   * Not available on inline picker
   */
  hide() {
    if (this.inline) {
      return;
    }
    this.picker.hide();
    this.picker.update().changeView(this.config.startView).render();
  }

  /**
   * Destroy the Datepicker instance
   * @return {Detepicker} - the instance destroyed
   */
  destroy() {
    this.hide();
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_4__.unregisterListeners)(this);
    this.picker.detach();
    if (!this.inline) {
      this.inputField.classList.remove('datepicker-input');
    }
    delete this.element.datepicker;
    return this;
  }

  /**
   * Get the selected date(s)
   *
   * The method returns a Date object of selected date by default, and returns
   * an array of selected dates in multidate mode. If format string is passed,
   * it returns date string(s) formatted in given format.
   *
   * @param  {String} [format] - Format string to stringify the date(s)
   * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
   * selected, empty array in multidate mode and untitled in sigledate mode
   */
  getDate(format = undefined) {
    const callback = format
      ? date => (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(date, format, this.config.locale)
      : date => new Date(date);

    if (this.config.multidate) {
      return this.dates.map(callback);
    }
    if (this.dates.length > 0) {
      return callback(this.dates[0]);
    }
  }

  /**
   * Set selected date(s)
   *
   * In multidate mode, you can pass multiple dates as a series of arguments
   * or an array. (Since each date is parsed individually, the type of the
   * dates doesn't have to be the same.)
   * The given dates are used to toggle the select status of each date. The
   * number of selected dates is kept from exceeding the length set to
   * maxNumberOfDates.
   *
   * With clear: true option, the method can be used to clear the selection
   * and to replace the selection instead of toggling in multidate mode.
   * If the option is passed with no date arguments or an empty dates array,
   * it works as "clear" (clear the selection then set nothing), and if the
   * option is passed with new dates to select, it works as "replace" (clear
   * the selection then set the given dates)
   *
   * When render: false option is used, the method omits re-rendering the
   * picker element. In this case, you need to call refresh() method later in
   * order for the picker element to reflect the changes. The input field is
   * refreshed always regardless of this option.
   *
   * When invalid (unparsable, repeated, disabled or out-of-range) dates are
   * passed, the method ignores them and applies only valid ones. In the case
   * that all the given dates are invalid, which is distinguished from passing
   * no dates, the method considers it as an error and leaves the selection
   * untouched. (The input field also remains untouched unless revert: true
   * option is used.)
   *
   * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
   * objects, time values or mix of those for new selection
   * @param {Object} [options] - function options
   * - clear: {boolean} - Whether to clear the existing selection
   *     defualt: false
   * - render: {boolean} - Whether to re-render the picker element
   *     default: true
   * - autohide: {boolean} - Whether to hide the picker element after re-render
   *     Ignored when used with render: false
   *     default: config.autohide
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  setDate(...args) {
    const dates = [...args];
    const opts = {};
    const lastArg = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(args);
    if (
      typeof lastArg === 'object'
      && !Array.isArray(lastArg)
      && !(lastArg instanceof Date)
      && lastArg
    ) {
      Object.assign(opts, dates.pop());
    }

    const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
    setDate(this, inputDates, opts);
  }

  /**
   * Update the selected date(s) with input field's value
   * Not available on inline picker
   *
   * The input field will be refreshed with properly formatted date string.
   *
   * In the case that all the entered dates are invalid (unparsable, repeated,
   * disabled or out-of-range), whixh is distinguished from empty input field,
   * the method leaves the input field untouched as well as the selection by
   * default. If revert: true option is used in this case, the input field is
   * refreshed with the existing selection.
   *
   * @param  {Object} [options] - function options
   * - autohide: {boolean} - whether to hide the picker element after refresh
   *     default: false
   * - revert: {boolean} - Whether to refresh the input field when all the
   *     passed dates are invalid
   *     default: false
   */
  update(options = undefined) {
    if (this.inline) {
      return;
    }

    const opts = Object.assign(options || {}, {clear: true, render: true});
    const inputDates = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.stringToArray)(this.inputField.value, this.config.dateDelimiter);
    setDate(this, inputDates, opts);
  }

  /**
   * Refresh the picker element and the associated input field
   * @param {String} [target] - target item when refreshing one item only
   * 'picker' or 'input'
   * @param {Boolean} [forceRender] - whether to re-render the picker element
   * regardless of its state instead of optimized refresh
   */
  refresh(target = undefined, forceRender = false) {
    if (target && typeof target !== 'string') {
      forceRender = target;
      target = undefined;
    }

    let mode;
    if (target === 'picker') {
      mode = 2;
    } else if (target === 'input') {
      mode = 1;
    } else {
      mode = 3;
    }
    refreshUI(this, mode, !forceRender);
  }

  /**
   * Enter edit mode
   * Not available on inline picker or when the picker element is hidden
   */
  enterEditMode() {
    if (this.inline || !this.picker.active || this.editMode) {
      return;
    }
    this.editMode = true;
    this.inputField.classList.add('in-edit');
  }

  /**
   * Exit from edit mode
   * Not available on inline picker
   * @param  {Object} [options] - function options
   * - update: {boolean} - whether to call update() after exiting
   *     If false, input field is revert to the existing selection
   *     default: false
   */
  exitEditMode(options = undefined) {
    if (this.inline || !this.editMode) {
      return;
    }
    const opts = Object.assign({update: false}, options);
    delete this.editMode;
    this.inputField.classList.remove('in-edit');
    if (opts.update) {
      this.update(opts);
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/functions.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/functions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goToPrevOrNext": () => (/* binding */ goToPrevOrNext),
/* harmony export */   "switchView": () => (/* binding */ switchView),
/* harmony export */   "triggerDatepickerEvent": () => (/* binding */ triggerDatepickerEvent),
/* harmony export */   "unfocus": () => (/* binding */ unfocus)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");



function triggerDatepickerEvent(datepicker, type) {
  const detail = {
    date: datepicker.getDate(),
    viewDate: new Date(datepicker.picker.viewDate),
    viewId: datepicker.picker.currentView.id,
    datepicker,
  };
  datepicker.element.dispatchEvent(new CustomEvent(type, {detail}));
}

// direction: -1 (to previous), 1 (to next)
function goToPrevOrNext(datepicker, direction) {
  const {minDate, maxDate} = datepicker.config;
  const {currentView, viewDate} = datepicker.picker;
  let newViewDate;
  switch (currentView.id) {
    case 0:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addMonths)(viewDate, direction);
      break;
    case 1:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction);
      break;
    default:
      newViewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addYears)(viewDate, direction * currentView.navStep);
  }
  newViewDate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(newViewDate, minDate, maxDate);
  datepicker.picker.changeFocus(newViewDate).render();
}

function switchView(datepicker) {
  const viewId = datepicker.picker.currentView.id;
  if (viewId === datepicker.config.maxView) {
    return;
  }
  datepicker.picker.changeView(viewId + 1).render();
}

function unfocus(datepicker) {
  if (datepicker.config.updateOnBlur) {
    datepicker.update({revert: true});
  } else {
    datepicker.refresh('input');
  }
  datepicker.hide();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js":
/*!****************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/inputFieldListeners.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickInput": () => (/* binding */ onClickInput),
/* harmony export */   "onFocus": () => (/* binding */ onFocus),
/* harmony export */   "onKeydown": () => (/* binding */ onKeydown),
/* harmony export */   "onMousedown": () => (/* binding */ onMousedown),
/* harmony export */   "onPaste": () => (/* binding */ onPaste)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");





// Find the closest date that doesn't meet the condition for unavailable date
// Returns undefined if no available date is found
// addFn: function to calculate the next date
//   - args: time value, amount
// increase: amount to pass to addFn
// testFn: function to test the unavailablity of the date
//   - args: time value; retun: true if unavailable
function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
  if (!(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)(date, min, max)) {
    return;
  }
  if (testFn(date)) {
    const newDate = addFn(date, increase);
    return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
  }
  return date;
}

// direction: -1 (left/up), 1 (right/down)
// vertical: true for up/down, false for left/right
function moveByArrowKey(datepicker, ev, direction, vertical) {
  const picker = datepicker.picker;
  const currentView = picker.currentView;
  const step = currentView.step || 1;
  let viewDate = picker.viewDate;
  let addFn;
  let testFn;
  switch (currentView.id) {
    case 0:
      if (vertical) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction * 7);
      } else if (ev.ctrlKey || ev.metaKey) {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction);
      } else {
        viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays)(viewDate, direction);
      }
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addDays;
      testFn = (date) => currentView.disabled.includes(date);
      break;
    case 1:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths)(viewDate, vertical ? direction * 4 : direction);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addMonths;
      testFn = (date) => {
        const dt = new Date(date);
        const {year, disabled} = currentView;
        return dt.getFullYear() === year && disabled.includes(dt.getMonth());
      };
      break;
    default:
      viewDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears)(viewDate, direction * (vertical ? 4 : 1) * step);
      addFn = _lib_date_js__WEBPACK_IMPORTED_MODULE_2__.addYears;
      testFn = date => currentView.disabled.includes((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_2__.startOfYearPeriod)(date, step));
  }
  viewDate = findNextAvailableOne(
    viewDate,
    addFn,
    direction < 0 ? -step : step,
    testFn,
    currentView.minDate,
    currentView.maxDate
  );
  if (viewDate !== undefined) {
    picker.changeFocus(viewDate).render();
  }
}

function onKeydown(datepicker, ev) {
  const key = ev.key;
  if (key === 'Tab') {
    (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.unfocus)(datepicker);
    return;
  }

  const picker = datepicker.picker;
  const {id, isMinView} = picker.currentView;
  if (!picker.active) {
    if (key === 'ArrowDown') {
      picker.show();
    } else {
      if (key === 'Enter') {
        datepicker.update();
      } else if (key === 'Escape') {
        picker.show();
      }
      return;
    }
  } else if (datepicker.editMode) {
    if (key === 'Enter') {
      datepicker.exitEditMode({update: true, autohide: datepicker.config.autohide});
    } else if (key === 'Escape') {
      picker.hide();
    }
    return;
  } else {
    if (key === 'ArrowLeft') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, -1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, false);
      }
    } else if (key === 'ArrowRight') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.goToPrevOrNext)(datepicker, 1);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, 1, false);
      }
    } else if (key === 'ArrowUp') {
      if (ev.ctrlKey || ev.metaKey) {
        (0,_functions_js__WEBPACK_IMPORTED_MODULE_3__.switchView)(datepicker);
      } else if (ev.shiftKey) {
        datepicker.enterEditMode();
        return;
      } else {
        moveByArrowKey(datepicker, ev, -1, true);
      }
    } else if (key === 'ArrowDown') {
      if (ev.shiftKey && !ev.ctrlKey && !ev.metaKey) {
        datepicker.enterEditMode();
        return;
      }
      moveByArrowKey(datepicker, ev, 1, true);
    } else if (key === 'Enter') {
      if (isMinView) {
        datepicker.setDate(picker.viewDate);
        return;
      }
      picker.changeView(id - 1).render();
    } else {
      if (key === 'Escape') {
        picker.hide();
      } else if (
        key === 'Backspace'
        || key === 'Delete'
        || (key.length === 1 && !ev.ctrlKey && !ev.metaKey)
      ) {
        datepicker.enterEditMode();
      }
      return;
    }
  }
  ev.preventDefault();
}

function onFocus(datepicker) {
  if (datepicker.config.showOnFocus && !datepicker._showing) {
    datepicker.show();
  }
}

// for the prevention for entering edit mode while getting focus on click
function onMousedown(datepicker, ev) {
  const el = ev.target;
  if (datepicker.picker.active || datepicker.config.showOnClick) {
    el._active = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.isActiveElement)(el);
    el._clicking = setTimeout(() => {
      delete el._active;
      delete el._clicking;
    }, 2000);
  }
}

function onClickInput(datepicker, ev) {
  const el = ev.target;
  if (!el._clicking) {
    return;
  }
  clearTimeout(el._clicking);
  delete el._clicking;

  if (el._active) {
    datepicker.enterEditMode();
  }
  delete el._active;

  if (datepicker.config.showOnClick) {
    datepicker.show();
  }
}

function onPaste(datepicker, ev) {
  if (ev.clipboardData.types.includes('text/plain')) {
    datepicker.enterEditMode();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/otherListeners.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/otherListeners.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickOutside": () => (/* binding */ onClickOutside)
/* harmony export */ });
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




// for the `document` to delegate the events from outside the picker/input field
function onClickOutside(datepicker, ev) {
  const {element, picker} = datepicker;
  // check both picker's and input's activeness to make updateOnBlur work in
  // the cases where...
  // - picker is hidden by ESC key press → input stays focused
  // - input is unfocused by closing mobile keyboard → piker is kept shown
  if (!picker.active && !(0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_0__.isActiveElement)(element)) {
    return;
  }
  const pickerElem = picker.element;
  if ((0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, el => el === element || el === pickerElem)) {
    return;
  }
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.unfocus)(datepicker);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/events/pickerListeners.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onClickClearBtn": () => (/* binding */ onClickClearBtn),
/* harmony export */   "onClickNextBtn": () => (/* binding */ onClickNextBtn),
/* harmony export */   "onClickPrevBtn": () => (/* binding */ onClickPrevBtn),
/* harmony export */   "onClickTodayBtn": () => (/* binding */ onClickTodayBtn),
/* harmony export */   "onClickView": () => (/* binding */ onClickView),
/* harmony export */   "onClickViewSwitch": () => (/* binding */ onClickViewSwitch),
/* harmony export */   "onMousedownPicker": () => (/* binding */ onMousedownPicker)
/* harmony export */ });
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");




function goToSelectedMonthOrYear(datepicker, selection) {
  const picker = datepicker.picker;
  const viewDate = new Date(picker.viewDate);
  const viewId = picker.currentView.id;
  const newDate = viewId === 1
    ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addMonths)(viewDate, selection - viewDate.getMonth())
    : (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.addYears)(viewDate, selection - viewDate.getFullYear());

  picker.changeFocus(newDate).changeView(viewId - 1).render();
}

function onClickTodayBtn(datepicker) {
  const picker = datepicker.picker;
  const currentDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  if (datepicker.config.todayBtnMode === 1) {
    if (datepicker.config.autohide) {
      datepicker.setDate(currentDate);
      return;
    }
    datepicker.setDate(currentDate, {render: false});
    picker.update();
  }
  if (picker.viewDate !== currentDate) {
    picker.changeFocus(currentDate);
  }
  picker.changeView(0).render();
}

function onClickClearBtn(datepicker) {
  datepicker.setDate({clear: true});
}

function onClickViewSwitch(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.switchView)(datepicker);
}

function onClickPrevBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, -1);
}

function onClickNextBtn(datepicker) {
  (0,_functions_js__WEBPACK_IMPORTED_MODULE_2__.goToPrevOrNext)(datepicker, 1);
}

// For the picker's main block to delegete the events from `datepicker-cell`s
function onClickView(datepicker, ev) {
  const target = (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_1__.findElementInEventPath)(ev, '.datepicker-cell');
  if (!target || target.classList.contains('disabled')) {
    return;
  }

  const {id, isMinView} = datepicker.picker.currentView;
  if (isMinView) {
    datepicker.setDate(Number(target.dataset.date));
  } else if (id === 1) {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.month));
  } else {
    goToSelectedMonthOrYear(datepicker, Number(target.dataset.year));
  }
}

function onMousedownPicker(ev) {
  ev.preventDefault();
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/i18n/base-locales.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/i18n/base-locales.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locales": () => (/* binding */ locales)
/* harmony export */ });
// default locales
const locales = {
  en: {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    clear: "Clear",
    titleFormat: "MM y"
  }
};


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date-format.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date-format.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "parseDate": () => (/* binding */ parseDate),
/* harmony export */   "reFormatTokens": () => (/* binding */ reFormatTokens),
/* harmony export */   "reNonDateParts": () => (/* binding */ reNonDateParts)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");



// pattern for format parts
const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
// pattern for non date parts
const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
// cache for persed formats
let knownFormats = {};
// parse funtions for date parts
const parseFns = {
  y(date, year) {
    return new Date(date).setFullYear(parseInt(year, 10));
  },
  m(date, month, locale) {
    const newDate = new Date(date);
    let monthIndex = parseInt(month, 10) - 1;

    if (isNaN(monthIndex)) {
      if (!month) {
        return NaN;
      }

      const monthName = month.toLowerCase();
      const compareNames = name => name.toLowerCase().startsWith(monthName);
      // compare with both short and full names because some locales have periods
      // in the short names (not equal to the first X letters of the full names)
      monthIndex = locale.monthsShort.findIndex(compareNames);
      if (monthIndex < 0) {
        monthIndex = locale.months.findIndex(compareNames);
      }
      if (monthIndex < 0) {
        return NaN;
      }
    }

    newDate.setMonth(monthIndex);
    return newDate.getMonth() !== normalizeMonth(monthIndex)
      ? newDate.setDate(0)
      : newDate.getTime();
  },
  d(date, day) {
    return new Date(date).setDate(parseInt(day, 10));
  },
};
// format functions for date parts
const formatFns = {
  d(date) {
    return date.getDate();
  },
  dd(date) {
    return padZero(date.getDate(), 2);
  },
  D(date, locale) {
    return locale.daysShort[date.getDay()];
  },
  DD(date, locale) {
    return locale.days[date.getDay()];
  },
  m(date) {
    return date.getMonth() + 1;
  },
  mm(date) {
    return padZero(date.getMonth() + 1, 2);
  },
  M(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MM(date, locale) {
    return locale.months[date.getMonth()];
  },
  y(date) {
    return date.getFullYear();
  },
  yy(date) {
    return padZero(date.getFullYear(), 2).slice(-2);
  },
  yyyy(date) {
    return padZero(date.getFullYear(), 4);
  },
};

// get month index in normal range (0 - 11) from any number
function normalizeMonth(monthIndex) {
  return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
}

function padZero(num, length) {
  return num.toString().padStart(length, '0');
}

function parseFormatString(format) {
  if (typeof format !== 'string') {
    throw new Error("Invalid date format.");
  }
  if (format in knownFormats) {
    return knownFormats[format];
  }

  // sprit the format string into parts and seprators
  const separators = format.split(reFormatTokens);
  const parts = format.match(new RegExp(reFormatTokens, 'g'));
  if (separators.length === 0 || !parts) {
    throw new Error("Invalid date format.");
  }

  // collect format functions used in the format
  const partFormatters = parts.map(token => formatFns[token]);

  // collect parse function keys used in the format
  // iterate over parseFns' keys in order to keep the order of the keys.
  const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
    const token = parts.find(part => part[0] !== 'D' && part[0].toLowerCase() === key);
    if (token) {
      keys.push(key);
    }
    return keys;
  }, []);

  return knownFormats[format] = {
    parser(dateStr, locale) {
      const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
        if (part.length > 0 && parts[index]) {
          const token = parts[index][0];
          if (token === 'M') {
            dtParts.m = part;
          } else if (token !== 'D') {
            dtParts[token] = part;
          }
        }
        return dtParts;
      }, {});

      // iterate over partParserkeys so that the parsing is made in the oder
      // of year, month and day to prevent the day parser from correcting last
      // day of month wrongly
      return partParserKeys.reduce((origDate, key) => {
        const newDate = parseFns[key](origDate, dateParts[key], locale);
        // ingnore the part failed to parse
        return isNaN(newDate) ? origDate : newDate;
      }, (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)());
    },
    formatter(date, locale) {
      let dateStr = partFormatters.reduce((str, fn, index) => {
        return str += `${separators[index]}${fn(date, locale)}`;
      }, '');
      // separators' length is always parts' length + 1,
      return dateStr += (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.lastItemOf)(separators);
    },
  };
}

function parseDate(dateStr, format, locale) {
  if (dateStr instanceof Date || typeof dateStr === 'number') {
    const date = (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(dateStr);
    return isNaN(date) ? undefined : date;
  }
  if (!dateStr) {
    return undefined;
  }
  if (dateStr === 'today') {
    return (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.today)();
  }

  if (format && format.toValue) {
    const date = format.toValue(dateStr, format, locale);
    return isNaN(date) ? undefined : (0,_date_js__WEBPACK_IMPORTED_MODULE_0__.stripTime)(date);
  }

  return parseFormatString(format).parser(dateStr, locale);
}

function formatDate(date, format, locale) {
  if (isNaN(date) || (!date && date !== 0)) {
    return '';
  }

  const dateObj = typeof date === 'number' ? new Date(date) : date;

  if (format.toDisplay) {
    return format.toDisplay(dateObj, format, locale);
  }

  return parseFormatString(format).formatter(dateObj, locale);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/date.js":
/*!**********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/date.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addMonths": () => (/* binding */ addMonths),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "addYears": () => (/* binding */ addYears),
/* harmony export */   "dateValue": () => (/* binding */ dateValue),
/* harmony export */   "dayOfTheWeekOf": () => (/* binding */ dayOfTheWeekOf),
/* harmony export */   "getWeek": () => (/* binding */ getWeek),
/* harmony export */   "regularizeDate": () => (/* binding */ regularizeDate),
/* harmony export */   "startOfYearPeriod": () => (/* binding */ startOfYearPeriod),
/* harmony export */   "stripTime": () => (/* binding */ stripTime),
/* harmony export */   "today": () => (/* binding */ today)
/* harmony export */ });
function stripTime(timeValue) {
  return new Date(timeValue).setHours(0, 0, 0, 0);
}

function today() {
  return new Date().setHours(0, 0, 0, 0);
}

// Get the time value of the start of given date or year, month and day
function dateValue(...args) {
  switch (args.length) {
    case 0:
      return today();
    case 1:
      return stripTime(args[0]);
  }

  // use setFullYear() to keep 2-digit year from being mapped to 1900-1999
  const newDate = new Date(0);
  newDate.setFullYear(...args);
  return newDate.setHours(0, 0, 0, 0);
}

function addDays(date, amount) {
  const newDate = new Date(date);
  return newDate.setDate(newDate.getDate() + amount);
}

function addWeeks(date, amount) {
  return addDays(date, amount * 7);
}

function addMonths(date, amount) {
  // If the day of the date is not in the new month, the last day of the new
  // month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
  const newDate = new Date(date);
  const monthsToSet = newDate.getMonth() + amount;
  let expectedMonth = monthsToSet % 12;
  if (expectedMonth < 0) {
    expectedMonth += 12;
  }

  const time = newDate.setMonth(monthsToSet);
  return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
}

function addYears(date, amount) {
  // If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
  // new year will be returned.
  const newDate = new Date(date);
  const expectedMonth = newDate.getMonth();
  const time = newDate.setFullYear(newDate.getFullYear() + amount);
  return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
}

// Calculate the distance bettwen 2 days of the week
function dayDiff(day, from) {
  return (day - from + 7) % 7;
}

// Get the date of the specified day of the week of given base date
function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
  const baseDay = new Date(baseDate).getDay();
  return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
}

// Get the ISO week of a date
function getWeek(date) {
  // start of ISO week is Monday
  const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
  // 1st week == the week where the 4th of January is in
  const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
  return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
}

// Get the start year of the period of years that includes given date
// years: length of the year period
function startOfYearPeriod(date, years) {
  /* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
  const year = new Date(date).getFullYear();
  return Math.floor(year / years) * years;
}

// Convert date to the first/last date of the month/year of the date
function regularizeDate(date, timeSpan, useLastDate) {
  if (timeSpan !== 1 && timeSpan !== 2) {
    return date;
  }
  const newDate = new Date(date);
  if (timeSpan === 1) {
    useLastDate
      ? newDate.setMonth(newDate.getMonth() + 1, 0)
      : newDate.setDate(1);
  } else {
    useLastDate
      ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0)
      : newDate.setMonth(0, 1);
  }
  return newDate.setHours(0, 0, 0, 0);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/dom.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyChildNodes": () => (/* binding */ emptyChildNodes),
/* harmony export */   "getParent": () => (/* binding */ getParent),
/* harmony export */   "hideElement": () => (/* binding */ hideElement),
/* harmony export */   "isActiveElement": () => (/* binding */ isActiveElement),
/* harmony export */   "isVisible": () => (/* binding */ isVisible),
/* harmony export */   "parseHTML": () => (/* binding */ parseHTML),
/* harmony export */   "replaceChildNodes": () => (/* binding */ replaceChildNodes),
/* harmony export */   "showElement": () => (/* binding */ showElement)
/* harmony export */ });
const range = document.createRange();

function parseHTML(html) {
  return range.createContextualFragment(html);
}

function getParent(el) {
  return el.parentElement
    || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : undefined);
}

function isActiveElement(el) {
  return el.getRootNode().activeElement === el;
}

// equivalent to jQuery's :visble
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function hideElement(el) {
  if (el.style.display === 'none') {
    return;
  }
  // back up the existing display setting in data-style-display
  if (el.style.display) {
    el.dataset.styleDisplay = el.style.display;
  }
  el.style.display = 'none';
}

function showElement(el) {
  if (el.style.display !== 'none') {
    return;
  }
  if (el.dataset.styleDisplay) {
    // restore backed-up dispay property
    el.style.display = el.dataset.styleDisplay;
    delete el.dataset.styleDisplay;
  } else {
    el.style.display = '';
  }
}

function emptyChildNodes(el) {
  if (el.firstChild) {
    el.removeChild(el.firstChild);
    emptyChildNodes(el);
  }
}

function replaceChildNodes(el, newChildNodes) {
  emptyChildNodes(el);
  if (newChildNodes instanceof DocumentFragment) {
    el.appendChild(newChildNodes);
  } else if (typeof newChildNodes === 'string') {
    el.appendChild(parseHTML(newChildNodes));
  } else if (typeof newChildNodes.forEach === 'function') {
    newChildNodes.forEach((node) => {
      el.appendChild(node);
    });
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/event.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/event.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findElementInEventPath": () => (/* binding */ findElementInEventPath),
/* harmony export */   "registerListeners": () => (/* binding */ registerListeners),
/* harmony export */   "unregisterListeners": () => (/* binding */ unregisterListeners)
/* harmony export */ });
const listenerRegistry = new WeakMap();
const {addEventListener, removeEventListener} = EventTarget.prototype;

// Register event listeners to a key object
// listeners: array of listener definitions;
//   - each definition must be a flat array of event target and the arguments
//     used to call addEventListener() on the target
function registerListeners(keyObj, listeners) {
  let registered = listenerRegistry.get(keyObj);
  if (!registered) {
    registered = [];
    listenerRegistry.set(keyObj, registered);
  }
  listeners.forEach((listener) => {
    addEventListener.call(...listener);
    registered.push(listener);
  });
}

function unregisterListeners(keyObj) {
  let listeners = listenerRegistry.get(keyObj);
  if (!listeners) {
    return;
  }
  listeners.forEach((listener) => {
    removeEventListener.call(...listener);
  });
  listenerRegistry.delete(keyObj);
}

// Event.composedPath() polyfill for Edge
// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
if (!Event.prototype.composedPath) {
  const getComposedPath = (node, path = []) => {
    path.push(node);

    let parent;
    if (node.parentNode) {
      parent = node.parentNode;
    } else if (node.host) { // ShadowRoot
      parent = node.host;
    } else if (node.defaultView) {  // Document
      parent = node.defaultView;
    }
    return parent ? getComposedPath(parent, path) : path;
  };

  Event.prototype.composedPath = function () {
    return getComposedPath(this.target);
  };
}

function findFromPath(path, criteria, currentTarget) {
  const [node, ...rest] = path;
  if (criteria(node)) {
    return node;
  }
  if (node === currentTarget || node.tagName === 'HTML' || rest.length === 0) {
    // stop when reaching currentTarget or <html>
    return;
  }
  return findFromPath(rest, criteria, currentTarget);
}

// Search for the actual target of a delegated event
function findElementInEventPath(ev, selector) {
  const criteria = typeof selector === 'function'
    ? selector
    : el => el instanceof Element && el.matches(selector);
  return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/lib/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/lib/utils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTagRepeat": () => (/* binding */ createTagRepeat),
/* harmony export */   "hasProperty": () => (/* binding */ hasProperty),
/* harmony export */   "isInRange": () => (/* binding */ isInRange),
/* harmony export */   "lastItemOf": () => (/* binding */ lastItemOf),
/* harmony export */   "limitToRange": () => (/* binding */ limitToRange),
/* harmony export */   "optimizeTemplateHTML": () => (/* binding */ optimizeTemplateHTML),
/* harmony export */   "pushUnique": () => (/* binding */ pushUnique),
/* harmony export */   "stringToArray": () => (/* binding */ stringToArray)
/* harmony export */ });
function hasProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

function lastItemOf(arr) {
  return arr[arr.length - 1];
}

// push only the items not included in the array
function pushUnique(arr, ...items) {
  items.forEach((item) => {
    if (arr.includes(item)) {
      return;
    }
    arr.push(item);
  });
  return arr;
}

function stringToArray(str, separator) {
  // convert empty string to an empty array
  return str ? str.split(separator) : [];
}

function isInRange(testVal, min, max) {
  const minOK = min === undefined || testVal >= min;
  const maxOK = max === undefined || testVal <= max;
  return minOK && maxOK;
}

function limitToRange(val, min, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = '') {
  const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
    let val = attributes[attr];
    if (typeof val === 'function') {
      val = val(index);
    }
    return `${src} ${attr}="${val}"`;
  }, tagName);
  html += `<${openTagSrc}></${tagName}>`;

  const next = index + 1;
  return next < repeat
    ? createTagRepeat(tagName, repeat, attributes, next, html)
    : html;
}

// Remove the spacing surrounding tags for HTML parser not to create text nodes
// before/after elements
function optimizeTemplateHTML(html) {
  return html.replace(/>\s+/g, '>').replace(/\s+</, '<');
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/defaultOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// config options updatable by setOptions() and their default values
const defaultOptions = {
  autohide: false,
  beforeShowDay: null,
  beforeShowDecade: null,
  beforeShowMonth: null,
  beforeShowYear: null,
  calendarWeeks: false,
  clearBtn: false,
  dateDelimiter: ',',
  datesDisabled: [],
  daysOfWeekDisabled: [],
  daysOfWeekHighlighted: [],
  defaultViewDate: undefined, // placeholder, defaults to today() by the program
  disableTouchKeyboard: false,
  format: 'mm/dd/yyyy',
  language: 'en',
  maxDate: null,
  maxNumberOfDates: 1,
  maxView: 3,
  minDate: null,
  nextArrow: '»',
  orientation: 'auto',
  pickLevel: 0,
  prevArrow: '«',
  showDaysOfWeek: true,
  showOnClick: true,
  showOnFocus: true,
  startView: 0,
  title: '',
  todayBtn: false,
  todayBtnMode: 0,
  todayHighlight: false,
  updateOnBlur: true,
  weekStart: 0,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultOptions);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/options/processOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/options/processOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ processOptions)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultOptions.js */ "./node_modules/vanillajs-datepicker/js/options/defaultOptions.js");






const {
  language: defaultLang,
  format: defaultFormat,
  weekStart: defaultWeekStart,
} = _defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"];

// Reducer function to filter out invalid day-of-week from the input
function sanitizeDOW(dow, day) {
  return dow.length < 6 && day >= 0 && day < 7
    ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dow, day)
    : dow;
}

function calcEndOfWeek(startOfWeek) {
  return (startOfWeek + 6) % 7;
}

// validate input date. if invalid, fallback to the original value
function validateDate(value, format, locale, origValue) {
  const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(value, format, locale);
  return date !== undefined ? date : origValue;
}

// Validate viewId. if invalid, fallback to the original value
function validateViewId(value, origValue, max = 3) {
  const viewId = parseInt(value, 10);
  return viewId >= 0 && viewId <= max ? viewId : origValue;
}

// Create Datepicker configuration to set
function processOptions(options, datepicker) {
  const inOpts = Object.assign({}, options);
  const config = {};
  const locales = datepicker.constructor.locales;
  const rangeSideIndex = datepicker.rangeSideIndex;
  let {
    format,
    language,
    locale,
    maxDate,
    maxView,
    minDate,
    pickLevel,
    startView,
    weekStart,
  } = datepicker.config || {};

  if (inOpts.language) {
    let lang;
    if (inOpts.language !== language) {
      if (locales[inOpts.language]) {
        lang = inOpts.language;
      } else {
        // Check if langauge + region tag can fallback to the one without
        // region (e.g. fr-CA → fr)
        lang = inOpts.language.split('-')[0];
        if (locales[lang] === undefined) {
          lang = false;
        }
      }
    }
    delete inOpts.language;
    if (lang) {
      language = config.language = lang;

      // update locale as well when updating language
      const origLocale = locale || locales[defaultLang];
      // use default language's properties for the fallback
      locale = Object.assign({
        format: defaultFormat,
        weekStart: defaultWeekStart
      }, locales[defaultLang]);
      if (language !== defaultLang) {
        Object.assign(locale, locales[language]);
      }
      config.locale = locale;
      // if format and/or weekStart are the same as old locale's defaults,
      // update them to new locale's defaults
      if (format === origLocale.format) {
        format = config.format = locale.format;
      }
      if (weekStart === origLocale.weekStart) {
        weekStart = config.weekStart = locale.weekStart;
        config.weekEnd = calcEndOfWeek(locale.weekStart);
      }
    }
  }

  if (inOpts.format) {
    const hasToDisplay = typeof inOpts.format.toDisplay === 'function';
    const hasToValue = typeof inOpts.format.toValue === 'function';
    const validFormatString = _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.reFormatTokens.test(inOpts.format);
    if ((hasToDisplay && hasToValue) || validFormatString) {
      format = config.format = inOpts.format;
    }
    delete inOpts.format;
  }

  //*** pick level ***//
  let newPickLevel = pickLevel;
  if (inOpts.pickLevel !== undefined) {
    newPickLevel = validateViewId(inOpts.pickLevel, 2);
    delete inOpts.pickLevel;
  }
  if (newPickLevel !== pickLevel) {
    if (newPickLevel > pickLevel) {
      // complement current minDate/madDate so that the existing range will be
      // expanded to fit the new level later
      if (inOpts.minDate === undefined) {
        inOpts.minDate = minDate;
      }
      if (inOpts.maxDate === undefined) {
        inOpts.maxDate = maxDate;
      }
    }
    // complement datesDisabled so that it will be reset later
    if (!inOpts.datesDisabled) {
      inOpts.datesDisabled = [];
    }
    pickLevel = config.pickLevel = newPickLevel;
  }

  //*** dates ***//
  // while min and maxDate for "no limit" in the options are better to be null
  // (especially when updating), the ones in the config have to be undefined
  // because null is treated as 0 (= unix epoch) when comparing with time value
  let minDt = minDate;
  let maxDt = maxDate;
  if (inOpts.minDate !== undefined) {
    const defaultMinDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(0, 0, 1);
    minDt = inOpts.minDate === null
      ? defaultMinDt  // set 0000-01-01 to prevent negative values for year
      : validateDate(inOpts.minDate, format, locale, minDt);
    if (minDt !== defaultMinDt) {
      minDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(minDt, pickLevel, false);
    }
    delete inOpts.minDate;
  }
  if (inOpts.maxDate !== undefined) {
    maxDt = inOpts.maxDate === null
      ? undefined
      : validateDate(inOpts.maxDate, format, locale, maxDt);
    if (maxDt !== undefined) {
      maxDt = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(maxDt, pickLevel, true);
    }
    delete inOpts.maxDate;
  }
  if (maxDt < minDt) {
    minDate = config.minDate = maxDt;
    maxDate = config.maxDate = minDt;
  } else {
    if (minDate !== minDt) {
      minDate = config.minDate = minDt;
    }
    if (maxDate !== maxDt) {
      maxDate = config.maxDate = maxDt;
    }
  }

  if (inOpts.datesDisabled) {
    config.datesDisabled = inOpts.datesDisabled.reduce((dates, dt) => {
      const date = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(dt, format, locale);
      return date !== undefined
        ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(dates, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.regularizeDate)(date, pickLevel, rangeSideIndex))
        : dates;
    }, []);
    delete inOpts.datesDisabled;
  }
  if (inOpts.defaultViewDate !== undefined) {
    const viewDate = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.parseDate)(inOpts.defaultViewDate, format, locale);
    if (viewDate !== undefined) {
      config.defaultViewDate = viewDate;
    }
    delete inOpts.defaultViewDate;
  }

  //*** days of week ***//
  if (inOpts.weekStart !== undefined) {
    const wkStart = Number(inOpts.weekStart) % 7;
    if (!isNaN(wkStart)) {
      weekStart = config.weekStart = wkStart;
      config.weekEnd = calcEndOfWeek(wkStart);
    }
    delete inOpts.weekStart;
  }
  if (inOpts.daysOfWeekDisabled) {
    config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekDisabled;
  }
  if (inOpts.daysOfWeekHighlighted) {
    config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
    delete inOpts.daysOfWeekHighlighted;
  }

  //*** multi date ***//
  if (inOpts.maxNumberOfDates !== undefined) {
    const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
    if (maxNumberOfDates >= 0) {
      config.maxNumberOfDates = maxNumberOfDates;
      config.multidate = maxNumberOfDates !== 1;
    }
    delete inOpts.maxNumberOfDates;
  }
  if (inOpts.dateDelimiter) {
    config.dateDelimiter = String(inOpts.dateDelimiter);
    delete inOpts.dateDelimiter;
  }

  //*** view ***//
  let newMaxView = maxView;
  if (inOpts.maxView !== undefined) {
    newMaxView = validateViewId(inOpts.maxView, maxView);
    delete inOpts.maxView;
  }
  // ensure max view >= pick level
  newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
  if (newMaxView !== maxView) {
    maxView = config.maxView = newMaxView;
  }

  let newStartView = startView;
  if (inOpts.startView !== undefined) {
    newStartView = validateViewId(inOpts.startView, newStartView);
    delete inOpts.startView;
  }
  // ensure pick level <= start view <= max view
  if (newStartView < pickLevel) {
    newStartView = pickLevel;
  } else if (newStartView > maxView) {
    newStartView = maxView;
  }
  if (newStartView !== startView) {
    config.startView = newStartView;
  }

  //*** template ***//
  if (inOpts.prevArrow) {
    const prevArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.prevArrow);
    if (prevArrow.childNodes.length > 0) {
      config.prevArrow = prevArrow.childNodes;
    }
    delete inOpts.prevArrow;
  }
  if (inOpts.nextArrow) {
    const nextArrow = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(inOpts.nextArrow);
    if (nextArrow.childNodes.length > 0) {
      config.nextArrow = nextArrow.childNodes;
    }
    delete inOpts.nextArrow;
  }

  //*** misc ***//
  if (inOpts.disableTouchKeyboard !== undefined) {
    config.disableTouchKeyboard = 'ontouchstart' in document && !!inOpts.disableTouchKeyboard;
    delete inOpts.disableTouchKeyboard;
  }
  if (inOpts.orientation) {
    const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
    config.orientation = {
      x: orientation.find(x => (x === 'left' || x === 'right')) || 'auto',
      y: orientation.find(y => (y === 'top' || y === 'bottom')) || 'auto',
    };
    delete inOpts.orientation;
  }
  if (inOpts.todayBtnMode !== undefined) {
    switch(inOpts.todayBtnMode) {
      case 0:
      case 1:
        config.todayBtnMode = inOpts.todayBtnMode;
    }
    delete inOpts.todayBtnMode;
  }

  //*** copy the rest ***//
  Object.keys(inOpts).forEach((key) => {
    if (inOpts[key] !== undefined && (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(_defaultOptions_js__WEBPACK_IMPORTED_MODULE_4__["default"], key)) {
      config[key] = inOpts[key];
    }
  });

  return config;
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/Picker.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/Picker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Picker)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _lib_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/event.js */ "./node_modules/vanillajs-datepicker/js/lib/event.js");
/* harmony import */ var _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/pickerTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js");
/* harmony import */ var _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/DaysView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js");
/* harmony import */ var _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/MonthsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js");
/* harmony import */ var _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/YearsView.js */ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js");
/* harmony import */ var _events_functions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../events/functions.js */ "./node_modules/vanillajs-datepicker/js/events/functions.js");
/* harmony import */ var _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../events/pickerListeners.js */ "./node_modules/vanillajs-datepicker/js/events/pickerListeners.js");











const orientClasses = ['left', 'top', 'right', 'bottom'].reduce((obj, key) => {
  obj[key] = `datepicker-orient-${key}`;
  return obj;
}, {});
const toPx = num => num ? `${num}px` : num;

function processPickerOptions(picker, options) {
  if (options.title !== undefined) {
    if (options.title) {
      picker.controls.title.textContent = options.title;
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.title);
    } else {
      picker.controls.title.textContent = '';
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.title);
    }
  }
  if (options.prevArrow) {
    const prevBtn = picker.controls.prevBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(prevBtn);
    options.prevArrow.forEach((node) => {
      prevBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.nextArrow) {
    const nextBtn = picker.controls.nextBtn;
    (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyChildNodes)(nextBtn);
    options.nextArrow.forEach((node) => {
      nextBtn.appendChild(node.cloneNode(true));
    });
  }
  if (options.locale) {
    picker.controls.todayBtn.textContent = options.locale.today;
    picker.controls.clearBtn.textContent = options.locale.clear;
  }
  if (options.todayBtn !== undefined) {
    if (options.todayBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.todayBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.todayBtn);
    }
  }
  if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate') || (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
    const {minDate, maxDate} = picker.datepicker.config;
    picker.controls.todayBtn.disabled = !(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.isInRange)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)(), minDate, maxDate);
  }
  if (options.clearBtn !== undefined) {
    if (options.clearBtn) {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.showElement)(picker.controls.clearBtn);
    } else {
      (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideElement)(picker.controls.clearBtn);
    }
  }
}

// Compute view date to reset, which will be...
// - the last item of the selected dates or defaultViewDate if no selection
// - limitted to minDate or maxDate if it exceeds the range
function computeResetViewDate(datepicker) {
  const {dates, config} = datepicker;
  const viewDate = dates.length > 0 ? (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.lastItemOf)(dates) : config.defaultViewDate;
  return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.limitToRange)(viewDate, config.minDate, config.maxDate);
}

// Change current view's view date
function setViewDate(picker, newDate) {
  const oldViewDate = new Date(picker.viewDate);
  const newViewDate = new Date(newDate);
  const {id, year, first, last} = picker.currentView;
  const viewYear = newViewDate.getFullYear();

  picker.viewDate = newDate;
  if (viewYear !== oldViewDate.getFullYear()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeYear');
  }
  if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(picker.datepicker, 'changeMonth');
  }

  // return whether the new date is in different period on time from the one
  // displayed in the current view
  // when true, the view needs to be re-rendered on the next UI refresh.
  switch (id) {
    case 0:
      return newDate < first || newDate > last;
    case 1:
      return viewYear !== year;
    default:
      return viewYear < first || viewYear > last;
  }
}

function getTextDirection(el) {
  return window.getComputedStyle(el).direction;
}

// find the closet scrollable ancestor elemnt under the body
function findScrollParents(el) {
  const parent = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(el);
  if (parent === document.body || !parent) {
    return;
  }

  // checking overflow only is enough because computed overflow cannot be
  // visible or a combination of visible and other when either axis is set
  // to other than visible.
  // (Setting one axis to other than 'visible' while the other is 'visible'
  // results in the other axis turning to 'auto')
  return window.getComputedStyle(parent).overflow !== 'visible'
    ? parent
    : findScrollParents(parent);
}

// Class representing the picker UI
class Picker {
  constructor(datepicker) {
    const {config} = this.datepicker = datepicker;

    const template = _templates_pickerTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"].replace(/%buttonClass%/g, config.buttonClass);
    const element = this.element = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)(template).firstChild;
    const [header, main, footer] = element.firstChild.children;
    const title = header.firstElementChild;
    const [prevBtn, viewSwitch, nextBtn] = header.lastElementChild.children;
    const [todayBtn, clearBtn] = footer.firstChild.children;
    const controls = {
      title,
      prevBtn,
      viewSwitch,
      nextBtn,
      todayBtn,
      clearBtn,
    };
    this.main = main;
    this.controls = controls;

    const elementClass = datepicker.inline ? 'inline' : 'dropdown';
    element.classList.add(`datepicker-${elementClass}`);

    processPickerOptions(this, config);
    this.viewDate = computeResetViewDate(datepicker);

    // set up event listeners
    (0,_lib_event_js__WEBPACK_IMPORTED_MODULE_3__.registerListeners)(datepicker, [
      [element, 'mousedown', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onMousedownPicker],
      [main, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickView.bind(null, datepicker)],
      [controls.viewSwitch, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickViewSwitch.bind(null, datepicker)],
      [controls.prevBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickPrevBtn.bind(null, datepicker)],
      [controls.nextBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickNextBtn.bind(null, datepicker)],
      [controls.todayBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickTodayBtn.bind(null, datepicker)],
      [controls.clearBtn, 'click', _events_pickerListeners_js__WEBPACK_IMPORTED_MODULE_9__.onClickClearBtn.bind(null, datepicker)],
    ]);

    // set up views
    this.views = [
      new _views_DaysView_js__WEBPACK_IMPORTED_MODULE_5__["default"](this),
      new _views_MonthsView_js__WEBPACK_IMPORTED_MODULE_6__["default"](this),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 2, name: 'years', cellClass: 'year', step: 1}),
      new _views_YearsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](this, {id: 3, name: 'decades', cellClass: 'decade', step: 10}),
    ];
    this.currentView = this.views[config.startView];

    this.currentView.render();
    this.main.appendChild(this.currentView.element);
    if (config.container) {
      config.container.appendChild(this.element);
    } else {
      datepicker.inputField.after(this.element);
    }
  }

  setOptions(options) {
    processPickerOptions(this, options);
    this.views.forEach((view) => {
      view.init(options, false);
    });
    this.currentView.render();
  }

  detach() {
    this.element.remove();
  }

  show() {
    if (this.active) {
      return;
    }

    const {datepicker, element} = this;
    if (datepicker.inline) {
      element.classList.add('active');
    } else {
      // ensure picker's direction matches input's
      const inputDirection = getTextDirection(datepicker.inputField);
      if (inputDirection !== getTextDirection((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.getParent)(element))) {
        element.dir = inputDirection;
      } else if (element.dir) {
        element.removeAttribute('dir');
      }

      element.style.visiblity = 'hidden';
      element.classList.add('active');
      this.place();
      element.style.visiblity = '';

      if (datepicker.config.disableTouchKeyboard) {
        datepicker.inputField.blur();
      }
    }
    this.active = true;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(datepicker, 'show');
  }

  hide() {
    if (!this.active) {
      return;
    }
    this.datepicker.exitEditMode();
    this.element.classList.remove('active');
    this.active = false;
    (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'hide');
  }

  place() {
    const {classList, offsetParent, style} = this.element;
    const {config, inputField} = this.datepicker;
    const {
      width: calendarWidth,
      height: calendarHeight,
    } = this.element.getBoundingClientRect();
    const {
      left: inputLeft,
      top: inputTop,
      right: inputRight,
      bottom: inputBottom,
      width: inputWidth,
      height: inputHeight
    } = inputField.getBoundingClientRect();
    let {x: orientX, y: orientY} = config.orientation;
    let left = inputLeft;
    let top = inputTop;

    // caliculate offsetLeft/Top of inputField
    if (offsetParent === document.body || !offsetParent) {
      left += window.scrollX;
      top += window.scrollY;
    } else {
      const offsetParentRect = offsetParent.getBoundingClientRect();
      left -= offsetParentRect.left - offsetParent.scrollLeft;
      top -= offsetParentRect.top - offsetParent.scrollTop;
    }

    // caliculate the boundaries of the visible area that contains inputField
    const scrollParent = findScrollParents(inputField);
    let scrollAreaLeft = 0;
    let scrollAreaTop = 0;
    let {
      clientWidth: scrollAreaRight,
      clientHeight: scrollAreaBottom,
    } = document.documentElement;

    if (scrollParent) {
      const scrollParentRect = scrollParent.getBoundingClientRect();
      if (scrollParentRect.top > 0) {
        scrollAreaTop = scrollParentRect.top;
      }
      if (scrollParentRect.left > 0) {
        scrollAreaLeft = scrollParentRect.left;
      }
      if (scrollParentRect.right < scrollAreaRight) {
        scrollAreaRight = scrollParentRect.right;
      }
      if (scrollParentRect.bottom < scrollAreaBottom) {
        scrollAreaBottom = scrollParentRect.bottom;
      }
    }

    // determine the horizontal orientation and left position
    let adjustment = 0;
    if (orientX === 'auto') {
      if (inputLeft < scrollAreaLeft) {
        orientX = 'left';
        adjustment = scrollAreaLeft - inputLeft;
      } else if (inputLeft + calendarWidth > scrollAreaRight) {
        orientX = 'right';
        if (scrollAreaRight < inputRight) {
          adjustment = scrollAreaRight - inputRight;
        }
      } else if (getTextDirection(inputField) === 'rtl') {
        orientX = inputRight - calendarWidth < scrollAreaLeft ? 'left' : 'right';
      } else {
        orientX = 'left';
      }
    }
    if (orientX === 'right') {
      left += inputWidth - calendarWidth;
    }
    left += adjustment;

    // determine the vertical orientation and top position
    if (orientY === 'auto') {
      if (inputTop - calendarHeight > scrollAreaTop) {
        orientY = inputBottom + calendarHeight > scrollAreaBottom ? 'top' : 'bottom';
      } else {
        orientY = 'bottom';
      }
    }
    if (orientY === 'top') {
      top -= calendarHeight;
    } else {
      top += inputHeight;
    }

    classList.remove(...Object.values(orientClasses));
    classList.add(orientClasses[orientX], orientClasses[orientY]);

    style.left = toPx(left);
    style.top = toPx(top);
  }

  setViewSwitchLabel(labelText) {
    this.controls.viewSwitch.textContent = labelText;
  }

  setPrevBtnDisabled(disabled) {
    this.controls.prevBtn.disabled = disabled;
  }

  setNextBtnDisabled(disabled) {
    this.controls.nextBtn.disabled = disabled;
  }

  changeView(viewId) {
    const oldView = this.currentView;
    const newView =  this.views[viewId];
    if (newView.id !== oldView.id) {
      this.currentView = newView;
      this._renderMethod = 'render';
      (0,_events_functions_js__WEBPACK_IMPORTED_MODULE_8__.triggerDatepickerEvent)(this.datepicker, 'changeView');
      this.main.replaceChild(newView.element, oldView.element);
    }
    return this;
  }

  // Change the focused date (view date)
  changeFocus(newViewDate) {
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refreshFocus';
    this.views.forEach((view) => {
      view.updateFocus();
    });
    return this;
  }

  // Apply the change of the selected dates
  update() {
    const newViewDate = computeResetViewDate(this.datepicker);
    this._renderMethod = setViewDate(this, newViewDate) ? 'render' : 'refresh';
    this.views.forEach((view) => {
      view.updateFocus();
      view.updateSelection();
    });
    return this;
  }

  // Refresh the picker UI
  render(quickRender = true) {
    const renderMethod = (quickRender && this._renderMethod) || 'render';
    delete this._renderMethod;

    this.currentView[renderMethod]();
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const calendarWeeksTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 6, {class: 'week'})}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendarWeeksTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const daysTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="days">
  <div class="days-of-week">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 7, {class: 'dow'})}</div>
  <div class="datepicker-grid">${(0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 42)}</div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (daysTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");


const pickerTemplate = (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.optimizeTemplateHTML)(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% prev-btn"></button>
        <button type="button" class="%buttonClass% view-switch"></button>
        <button type="button" class="%buttonClass% next-btn"></button>
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        <button type="button" class="%buttonClass% today-btn"></button>
        <button type="button" class="%buttonClass% clear-btn"></button>
      </div>
    </div>
  </div>
</div>`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pickerTemplate);


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DaysView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/date-format.js */ "./node_modules/vanillajs-datepicker/js/lib/date-format.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../templates/daysTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js");
/* harmony import */ var _templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/calendarWeeksTemplate.js */ "./node_modules/vanillajs-datepicker/js/picker/templates/calendarWeeksTemplate.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");








class DaysView extends _View_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(picker) {
    super(picker, {
      id: 0,
      name: 'days',
      cellClass: 'day',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      const inner = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_daysTemplate_js__WEBPACK_IMPORTED_MODULE_4__["default"]).firstChild;
      this.dow = inner.firstChild;
      this.grid = inner.lastChild;
      this.element.appendChild(inner);
    }
    super.init(options);
  }

  setOptions(options) {
    let updateDOW;

    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      this.minDate = options.minDate;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      this.maxDate = options.maxDate;
    }
    if (options.datesDisabled) {
      this.datesDisabled = options.datesDisabled;
    }
    if (options.daysOfWeekDisabled) {
      this.daysOfWeekDisabled = options.daysOfWeekDisabled;
      updateDOW = true;
    }
    if (options.daysOfWeekHighlighted) {
      this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
    }
    if (options.todayHighlight !== undefined) {
      this.todayHighlight = options.todayHighlight;
    }
    if (options.weekStart !== undefined) {
      this.weekStart = options.weekStart;
      this.weekEnd = options.weekEnd;
      updateDOW = true;
    }
    if (options.locale) {
      const locale = this.locale = options.locale;
      this.dayNames = locale.daysMin;
      this.switchLabelFormat = locale.titleFormat;
      updateDOW = true;
    }
    if (options.beforeShowDay !== undefined) {
      this.beforeShow = typeof options.beforeShowDay === 'function'
        ? options.beforeShowDay
        : undefined;
    }

    if (options.calendarWeeks !== undefined) {
      if (options.calendarWeeks && !this.calendarWeeks) {
        const weeksElem = (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.parseHTML)(_templates_calendarWeeksTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"]).firstChild;
        this.calendarWeeks = {
          element: weeksElem,
          dow: weeksElem.firstChild,
          weeks: weeksElem.lastChild,
        };
        this.element.insertBefore(weeksElem, this.element.firstChild);
      } else if (this.calendarWeeks && !options.calendarWeeks) {
        this.element.removeChild(this.calendarWeeks.element);
        this.calendarWeeks = null;
      }
    }
    if (options.showDaysOfWeek !== undefined) {
      if (options.showDaysOfWeek) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.showElement)(this.calendarWeeks.dow);
        }
      } else {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.dow);
        if (this.calendarWeeks) {
          (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.hideElement)(this.calendarWeeks.dow);
        }
      }
    }

    // update days-of-week when locale, daysOfweekDisabled or weekStart is changed
    if (updateDOW) {
      Array.from(this.dow.children).forEach((el, index) => {
        const dow = (this.weekStart + index) % 7;
        el.textContent = this.dayNames[dow];
        el.className = this.daysOfWeekDisabled.includes(dow) ? 'dow disabled' : 'dow';
      });
    }
  }

  // Apply update on the focused date to view's settings
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const viewYear = viewDate.getFullYear();
    const viewMonth = viewDate.getMonth();
    const firstOfMonth = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth, 1);
    const start = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(firstOfMonth, this.weekStart, this.weekStart);

    this.first = firstOfMonth;
    this.last = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(viewYear, viewMonth + 1, 0);
    this.start = start;
    this.focused = this.picker.viewDate;
  }

  // Apply update on the selected dates to view's settings
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates;
    if (rangepicker) {
      this.range = rangepicker.dates;
    }
  }

   // Update the entire view UI
  render() {
    // update today marker on ever render
    this.today = this.todayHighlight ? (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.today)() : undefined;
    // refresh disabled dates on every render in order to clear the ones added
    // by beforeShow hook at previous render
    this.disabled = [...this.datesDisabled];

    const switchLabel = (0,_lib_date_format_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.focused, this.switchLabelFormat, this.locale);
    this.picker.setViewSwitchLabel(switchLabel);
    this.picker.setPrevBtnDisabled(this.first <= this.minDate);
    this.picker.setNextBtnDisabled(this.last >= this.maxDate);

    if (this.calendarWeeks) {
      // start of the UTC week (Monday) of the 1st of the month
      const startOfWeek = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dayOfTheWeekOf)(this.first, 1, 1);
      Array.from(this.calendarWeeks.weeks.children).forEach((el, index) => {
        el.textContent = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.getWeek)((0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(startOfWeek, index));
      });
    }
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.addDays)(this.start, index);
      const date = new Date(current);
      const day = date.getDay();

      el.className = `datepicker-cell ${this.cellClass}`;
      el.dataset.date = current;
      el.textContent = date.getDate();

      if (current < this.first) {
        classList.add('prev');
      } else if (current > this.last) {
        classList.add('next');
      }
      if (this.today === current) {
        classList.add('today');
      }
      if (current < this.minDate || current > this.maxDate || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.daysOfWeekDisabled.includes(day)) {
        classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (this.daysOfWeekHighlighted.includes(day)) {
        classList.add('highlighted');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, current);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.dataset.date);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / 86400000);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MonthsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function computeMonthRange(range, thisYear) {
  if (!range || !range[0] || !range[1]) {
    return;
  }

  const [[startY, startM], [endY, endM]] = range;
  if (startY > thisYear || endY < thisYear) {
    return;
  }
  return [
    startY === thisYear ? startM : -1,
    endY === thisYear ? endM : 12,
  ];
}

class MonthsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker) {
    super(picker, {
      id: 1,
      name: 'months',
      cellClass: 'month',
    });
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.grid = this.element;
      this.element.classList.add('months', 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12, {'data-month': ix => ix})));
    }
    super.init(options);
  }

  setOptions(options) {
    if (options.locale) {
      this.monthNames = options.locale.monthsShort;
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minMonth = this.minDate = undefined;
      } else {
        const minDateObj = new Date(options.minDate);
        this.minYear = minDateObj.getFullYear();
        this.minMonth = minDateObj.getMonth();
        this.minDate = minDateObj.setDate(1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxMonth = this.maxDate = undefined;
      } else {
        const maxDateObj = new Date(options.maxDate);
        this.maxYear = maxDateObj.getFullYear();
        this.maxMonth = maxDateObj.getMonth();
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, this.maxMonth + 1, 0);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options.beforeShowMonth !== undefined) {
      this.beforeShow = typeof options.beforeShowMonth === 'function'
        ? options.beforeShowMonth
        : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    this.year = viewDate.getFullYear();
    this.focused = viewDate.getMonth();
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((selected, timeValue) => {
      const date = new Date(timeValue);
      const year = date.getFullYear();
      const month = date.getMonth();
      if (selected[year] === undefined) {
        selected[year] = [month];
      } else {
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(selected[year], month);
      }
      return selected;
    }, {});
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        const date = new Date(timeValue);
        return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled months on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.reduce((arr, disabled) => {
      const dt = new Date(disabled);
      if (this.year === dt.getFullYear()) {
        arr.push(dt.getMonth());
      }
      return arr;
    }, []);

    this.picker.setViewSwitchLabel(this.year);
    this.picker.setPrevBtnDisabled(this.year <= this.minYear);
    this.picker.setNextBtnDisabled(this.year >= this.maxYear);

    const selected = this.selected[this.year] || [];
    const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
    const isMinYear = this.year === this.minYear;
    const isMaxYear = this.year === this.maxYear;
    const range = computeMonthRange(this.range, this.year);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.year, index, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      // reset text on every render to clear the custom content set
      // by beforeShow hook at previous render
      el.textContent = this.monthNames[index];

      if (
        yrOutOfRange
        || isMinYear && index < this.minMonth
        || isMaxYear && index > this.maxMonth
        || this.disabled.includes(index)
      ) {
        classList.add('disabled');
      }
      if (range) {
        const [rangeStart, rangeEnd] = range;
        if (index > rangeStart && index < rangeEnd) {
          classList.add('range');
        }
        if (index === rangeStart) {
          classList.add('range-start');
        }
        if (index === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, index, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const selected = this.selected[this.year] || [];
    const [rangeStart, rangeEnd] = computeMonthRange(this.range, this.year) || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      if (index > rangeStart && index < rangeEnd) {
        classList.add('range');
      }
      if (index === rangeStart) {
        classList.add('range-start');
      }
      if (index === rangeEnd) {
        classList.add('range-end');
      }
      if (selected.includes(index)) {
        classList.add('selected');
      }
      if (index === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[this.focused].classList.add('focused');
  }
}

/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/View.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/View.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");



// Base class of the view classes
class View {
  constructor(picker, config) {
    Object.assign(this, config, {
      picker,
      element: (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.parseHTML)(`<div class="datepicker-view"></div>`).firstChild,
      selected: [],
    });
    this.init(this.picker.datepicker.config);
  }

  init(options) {
    if (options.pickLevel !== undefined) {
      this.isMinView = this.id === options.pickLevel;
    }
    this.setOptions(options);
    this.updateFocus();
    this.updateSelection();
  }

  // Execute beforeShow() callback and apply the result to the element
  // args:
  // - current - current value on the iteration on view rendering
  // - timeValue - time value of the date to pass to beforeShow()
  performBeforeHook(el, current, timeValue) {
    let result = this.beforeShow(new Date(timeValue));
    switch (typeof result) {
      case 'boolean':
        result = {enabled: result};
        break;
      case 'string':
        result = {classes: result};
    }

    if (result) {
      if (result.enabled === false) {
        el.classList.add('disabled');
        (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
      }
      if (result.classes) {
        const extraClasses = result.classes.split(/\s+/);
        el.classList.add(...extraClasses);
        if (extraClasses.includes('disabled')) {
          (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(this.disabled, current);
        }
      }
      if (result.content) {
        (0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_1__.replaceChildNodes)(el, result.content);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js":
/*!************************************************************************!*\
  !*** ./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YearsView)
/* harmony export */ });
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils.js */ "./node_modules/vanillajs-datepicker/js/lib/utils.js");
/* harmony import */ var _lib_date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/date.js */ "./node_modules/vanillajs-datepicker/js/lib/date.js");
/* harmony import */ var _lib_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/dom.js */ "./node_modules/vanillajs-datepicker/js/lib/dom.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View.js */ "./node_modules/vanillajs-datepicker/js/picker/views/View.js");





function toTitleCase(word) {
  return [...word].reduce((str, ch, ix) => str += ix ? ch : ch.toUpperCase(), '');
}

// Class representing the years and decades view elements
class YearsView extends _View_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(picker, config) {
    super(picker, config);
  }

  init(options, onConstruction = true) {
    if (onConstruction) {
      this.navStep = this.step * 10;
      this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
      this.grid = this.element;
      this.element.classList.add(this.name, 'datepicker-grid');
      this.grid.appendChild((0,_lib_dom_js__WEBPACK_IMPORTED_MODULE_2__.parseHTML)((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.createTagRepeat)('span', 12)));
    }
    super.init(options);
  }

  setOptions(options) {
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'minDate')) {
      if (options.minDate === undefined) {
        this.minYear = this.minDate = undefined;
      } else {
        this.minYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.minDate, this.step);
        this.minDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.minYear, 0, 1);
      }
    }
    if ((0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.hasProperty)(options, 'maxDate')) {
      if (options.maxDate === undefined) {
        this.maxYear = this.maxDate = undefined;
      } else {
        this.maxYear = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(options.maxDate, this.step);
        this.maxDate = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(this.maxYear, 11, 31);
      }
    }
    if (this.isMinView) {
      if (options.datesDisabled) {
        this.datesDisabled = options.datesDisabled;
      }
    } else {
      this.datesDisabled = [];
    }
    if (options[this.beforeShowOption] !== undefined) {
      const beforeShow = options[this.beforeShowOption];
      this.beforeShow = typeof beforeShow === 'function' ? beforeShow : undefined;
    }
  }

  // Update view's settings to reflect the viewDate set on the picker
  updateFocus() {
    const viewDate = new Date(this.picker.viewDate);
    const first = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.navStep);
    const last = first + 9 * this.step;

    this.first = first;
    this.last = last;
    this.start = first - this.step;
    this.focused = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(viewDate, this.step);
  }

  // Update view's settings to reflect the selected dates
  updateSelection() {
    const {dates, rangepicker} = this.picker.datepicker;
    this.selected = dates.reduce((years, timeValue) => {
      return (0,_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.pushUnique)(years, (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step));
    }, []);
    if (rangepicker && rangepicker.dates) {
      this.range = rangepicker.dates.map(timeValue => {
        if (timeValue !== undefined) {
          return (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.startOfYearPeriod)(timeValue, this.step);
        }
      });
    }
  }

  // Update the entire view UI
  render() {
    // refresh disabled years on every render in order to clear the ones added
    // by beforeShow hook at previous render
    // this.disabled = [...this.datesDisabled];
    this.disabled = this.datesDisabled.map(disabled => new Date(disabled).getFullYear());

    this.picker.setViewSwitchLabel(`${this.first}-${this.last}`);
    this.picker.setPrevBtnDisabled(this.first <= this.minYear);
    this.picker.setNextBtnDisabled(this.last >= this.maxYear);

    Array.from(this.grid.children).forEach((el, index) => {
      const classList = el.classList;
      const current = this.start + (index * this.step);
      const date = (0,_lib_date_js__WEBPACK_IMPORTED_MODULE_1__.dateValue)(current, 0, 1);

      el.className = `datepicker-cell ${this.cellClass}`;
      if (this.isMinView) {
        el.dataset.date = date;
      }
      el.textContent = el.dataset.year = current;

      if (index === 0) {
        classList.add('prev');
      } else if (index === 11) {
        classList.add('next');
      }
      if (current < this.minYear || current > this.maxYear || this.disabled.includes(current)) {
        classList.add('disabled');
      }
      if (this.range) {
        const [rangeStart, rangeEnd] = this.range;
        if (current > rangeStart && current < rangeEnd) {
          classList.add('range');
        }
        if (current === rangeStart) {
          classList.add('range-start');
        }
        if (current === rangeEnd) {
          classList.add('range-end');
        }
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }

      if (this.beforeShow) {
        this.performBeforeHook(el, current, date);
      }
    });
  }

  // Update the view UI by applying the changes of selected and focused items
  refresh() {
    const [rangeStart, rangeEnd] = this.range || [];
    this.grid
      .querySelectorAll('.range, .range-start, .range-end, .selected, .focused')
      .forEach((el) => {
        el.classList.remove('range', 'range-start', 'range-end', 'selected', 'focused');
      });
    Array.from(this.grid.children).forEach((el) => {
      const current = Number(el.textContent);
      const classList = el.classList;
      if (current > rangeStart && current < rangeEnd) {
        classList.add('range');
      }
      if (current === rangeStart) {
        classList.add('range-start');
      }
      if (current === rangeEnd) {
        classList.add('range-end');
      }
      if (this.selected.includes(current)) {
        classList.add('selected');
      }
      if (current === this.focused) {
        classList.add('focused');
      }
    });
  }

  // Update the view UI by applying the change of focused item
  refreshFocus() {
    const index = Math.round((this.focused - this.start) / this.step);
    this.grid.querySelectorAll('.focused').forEach((el) => {
      el.classList.remove('focused');
    });
    this.grid.children[index].classList.add('focused');
  }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/isValid */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns_isPast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isPast */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanillajs-datepicker/Datepicker */ "./node_modules/vanillajs-datepicker/js/Datepicker.js");
// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF







const mainPage = document.querySelector('.mainPage')
const notesForm = document.querySelector('.nFormWrapper')
const projsForm = document.querySelector('.pFormWrapper')
const cardContainer = document.querySelector('.cardContainer')
const addBtn = document.querySelector('#notesBtn')
const projBtn = document.querySelector('#projBtn')
addBtn.onclick = showNotesForm
projBtn.onclick = showProjForm
const nForm = document.querySelector('#nForm')
const pForm = document.querySelector('#pForm')
nForm.addEventListener('submit', submitNoteQuestions)
pForm.addEventListener('submit', submitProjsQuestions)
let currCardContainer;

const datepicker = new vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#date'), {
    autohide: true,
    format: 'dd/mm/yyyy'
})

function showNotesForm () {
    attachProjs(pageData.getProjs())
    notesForm.classList.toggle('showForm')
    return
}

function showProjForm () {
    projsForm.classList.toggle('showForm')
    return
}

function attachProjs (projObjValues) {
    const projSelect = document.querySelector('#projSelect')
    clearPage(projSelect)
    let projDomValues = makeDomObject.makeOptions(projObjValues)
    projDomValues.forEach(dom => projSelect.appendChild(dom))
    return
}

function submitNoteQuestions (event) {
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    
    pageData.addNote(data)
    makeDomObject.updateProjTabEle(data.proj)
    // cardContainer.appendChild(makeDomObject.makeNote(data))
    if(currCardContainer == data.proj) {
        showProjectNotes(data.proj)
    }
    notesForm.classList.toggle('showForm')
    event.preventDefault();
    event.target.reset()
    return
}

function submitProjsQuestions (event) {
    const projSidebar = document.querySelector('.sidebar')
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    console.log(data)
    if(pageData.duplicateProj(data.name)) return
    pageData.addProj(data)
    addToPage(projSidebar, makeDomObject.makeProjTabEle(data.name))
    projsForm.classList.toggle('showForm')
    event.preventDefault();
    event.target.reset()
    return
}

function addToPage (container, ...childNodes) {
    return childNodes.forEach(node => container.appendChild(node))
}

const pageData = (() => {
    let notesData = [];
    let projectsData = {
        default: {
            name: 'default',
            toDos: [],
            id: 0
        }
    }
    let noteId = 0;
    let projId = 1;

    const addNote = (item) => {
        item.dataId = noteId
        projectsData[item.proj].toDos.push(item)
        console.log(item, projectsData)
        noteId++;
    }

    const addProj = (proj) => {
        if(projectsData[proj.name]) return false
        projectsData[proj.name] = {
            name: proj.name,
            toDos: [],
            id: projId
        }
        projId++;
        console.log(projectsData)
        console.log(getProjs())
        return true
    }

    const getNotes = () => notesData

    const getProjs = () => {
        let projNames = []
        for(let project in projectsData) {
            projNames.push(projectsData[project].name)
        }
        return projNames
    }

    const getProjNotes = (proj) => projectsData[proj].toDos

    const getProjData = (proj) => projectsData[proj]

    const duplicateProj = (proj) => {
        if (projectsData[proj]) {
            return true
            //add error message
        }
        return false
    }

    return {addNote, getNotes, addProj, getProjs, getProjNotes, duplicateProj, getProjData}
})();

const makeDomObject = (() => {
    let node;

    const makeNote = ({title, desc, date, prio, dataId}) => {
        node = document.createElement('div')
        node.setAttribute('id', `card${dataId}`)
        node.classList.add('card')

        const t = document.createElement('h2')
        t.setAttribute('id', 'cardTitle')
        t.innerText = `${title}`

        const d = document.createElement('p')
        d.setAttribute('id', 'cardDesc')
        d.innerText = `${desc}`

        const dueDate = document.createElement('p')
        dueDate.setAttribute('id', `cardDate`)
        dueDate.innerText = `${date}`

        const priority = document.createElement('p')
        priority.setAttribute('id', 'cardPrio')
        priority.innerText = `${prio} priority`
        
        addToPage(node, t, d, dueDate, priority)

        return node
    }

    const makeOptions = (values) => {
        let domItems = values.map(value => {
            let domValue = document.createElement('option')
            domValue.setAttribute('value', value)
            domValue.innerText = capitalized(value)
            return domValue
        })
        return domItems
    }

    const makeProjTabEle = (projectName) => {
        let sidebarEle = document.createElement('p')
        sidebarEle.setAttribute('id', `${projectName}`)
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`
        sidebarEle.addEventListener('click', getProjectNotes)
        return sidebarEle
    }

    const updateProjTabEle = (projectName) => {
        let sidebarEle = document.querySelector(`#${projectName}`)
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`
        return
    }

    const initSidebar = () => {
        for(let proj of pageData.getProjs()) {
            addToPage(document.querySelector('.sidebar'), makeProjTabEle(proj))
        }
        return
    }

    return {makeNote, makeOptions, makeProjTabEle, updateProjTabEle, initSidebar}
})();

function isFormValid ({title, desc, dueD}) {
    let [day, month, year] = dueD.split('/')
    month--;
    //23:59:59 to be able to define note for same day
    let fDate = new Date(year, month , day, 23, 59, 59)
    console.log(fDate)

    if(title === '') {
        let title = document.querySelector('#title')
        title.classList.add('failTitle')
        return false
    } else if (desc === '') {
        let desc = document.querySelector('#desc')
        desc.classList.add('failDesc')
        return false
    } else if (!(0,date_fns_isValid__WEBPACK_IMPORTED_MODULE_2__["default"])(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('pastDate')
        d.classList.add('blankDate')
        return false
    } else if ((0,date_fns_isPast__WEBPACK_IMPORTED_MODULE_3__["default"])(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('blankDate')
        d.classList.add('pastDate')
        return false
    }

    return true
}

function capitalized (value) {
    let str = value
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

function clearPage (element) {
    while (element.firstChild) {
       element.removeChild(element.firstChild)
    }
}

function getProjectNotes (event) {
    const project = event.target.id
    currCardContainer = project
    showProjectNotes(project)
}

function showProjectNotes (data) {
    const projectData = pageData.getProjData(data)
    const container = document.querySelector('.cardContainer')
    const projCont = document.createElement('div')
    projCont.setAttribute('id', `${data}Container`)
    projCont.innerText = `${data} Project`
    projectData.toDos.forEach(obj => addToPage(projCont, makeDomObject.makeNote(obj)))
    clearPage(container)
    container.appendChild(projCont)

}

makeDomObject.initSidebar()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGtCQUFrQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRywwQkFBMEIsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IscUJBQXFCLEdBQUcsOENBQThDLG1CQUFtQix3QkFBd0IsR0FBRyx3QkFBd0IsMEJBQTBCLHVCQUF1QiwwQ0FBMEMsR0FBRywyQ0FBMkMsaUZBQWlGLEdBQUcsMkJBQTJCLG1CQUFtQixZQUFZLGNBQWMsdUJBQXVCLG9CQUFvQix1QkFBdUIsZ0NBQWdDLHNCQUFzQixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0Isc0RBQXNELHlDQUF5QyxHQUFHLDhGQUE4RixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsb0VBQW9FLCtCQUErQixHQUFHLHVEQUF1RCxvQkFBb0IsR0FBRyw4Q0FBOEMsb0JBQW9CLHlCQUF5QixHQUFHLHVCQUF1Qix1REFBdUQseUNBQXlDLDhCQUE4Qix1QkFBdUIscUJBQXFCLEdBQUcsNkNBQTZDLHVCQUF1QixHQUFHLGdDQUFnQyx5QkFBeUIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsY0FBYyw4QkFBOEIsdUJBQXVCLHFCQUFxQiwwQ0FBMEMsb0JBQW9CLHdDQUF3QyxtQkFBbUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsd0JBQXdCLDhCQUE4QixvQkFBb0IsR0FBRywyRUFBMkUsa0JBQWtCLEdBQUcsc0NBQXNDLDBCQUEwQiw4QkFBOEIsR0FBRyxzQ0FBc0Msd0NBQXdDLDhCQUE4QixHQUFHLG1EQUFtRCx1REFBdUQsR0FBRyx1Q0FBdUMsMEJBQTBCLDhCQUE4QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxtREFBbUQsOEJBQThCLHNCQUFzQixHQUFHLHlEQUF5RCw4QkFBOEIsR0FBRyxzRUFBc0Usd0RBQXdELEdBQUcsMERBQTBELDhCQUE4QixHQUFHLDZEQUE2RCxxQkFBcUIsR0FBRyxtREFBbUQsMENBQTBDLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcscUNBQXFDLGVBQWUsR0FBRyxtRUFBbUUsNEJBQTRCLDJCQUEyQixtQkFBbUIsR0FBRyxxRkFBcUYsdUJBQXVCLEdBQUcsMkJBQTJCLG1CQUFtQix3QkFBd0Isd0JBQXdCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsbUJBQW1CLHVCQUF1QixHQUFHLCtCQUErQiw0QkFBNEIsd0JBQXdCLEtBQUssR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsK0JBQStCLDhDQUE4Qyx5QkFBeUIsS0FBSyxHQUFHLDJDQUEyQyw4QkFBOEIsb0JBQW9CLEdBQUcsMkNBQTJDLDhCQUE4QixHQUFHLDhEQUE4RCw0Q0FBNEMsZ0JBQWdCLHFCQUFxQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyw4RUFBOEUsOEJBQThCLEdBQUcsa0VBQWtFLG1CQUFtQixHQUFHLHVFQUF1RSxxQkFBcUIseUNBQXlDLEdBQUcsNEZBQTRGLDhCQUE4QixHQUFHLCtFQUErRSw4QkFBOEIsR0FBRyx5Q0FBeUMsNkNBQTZDLEdBQUcsd0RBQXdELGdCQUFnQixHQUFHLGlEQUFpRCw4QkFBOEIsR0FBRywwRkFBMEYsOEJBQThCLGdCQUFnQixHQUFHLDBHQUEwRyw4QkFBOEIsR0FBRyxnQ0FBZ0MsK0JBQStCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLDBCQUEwQixxQkFBcUIsOEJBQThCLEdBQUcseUVBQXlFLDhCQUE4QixHQUFHLG1DQUFtQyxtQkFBbUIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcscURBQXFELG1CQUFtQix3QkFBd0IsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcscUVBQXFFLDBEQUEwRCxHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixrQ0FBa0Msc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQixvQkFBb0IsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIseUNBQXlDLGVBQWUsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLG1DQUFtQywwQkFBMEIsd0JBQXdCLGtCQUFrQixHQUFHLGVBQWUsa0JBQWtCLGlKQUFpSixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1QixtQ0FBbUMsd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGVBQWUsOEJBQThCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLGtEQUFrRCxxUEFBcVAsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxjQUFjLE1BQU0sTUFBTSxVQUFVLGFBQWEsT0FBTyxNQUFNLFdBQVcsYUFBYSxjQUFjLE1BQU0sTUFBTSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxlQUFlLFFBQVEsTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLGFBQWEsUUFBUSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsY0FBYyxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLDZCQUE2QjtBQUN2Z1U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSnlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyw0REFBTTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Cd0M7QUFDQTtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTs7QUFFZCxPQUFPLDREQUFNO0FBQ2I7QUFDQTs7QUFFQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RFeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx3S0FBd0s7O0FBRXhLO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRTtBQUNoQjtBQUNPO0FBQ2Q7QUFDeUI7QUFDdkI7QUFDVTtBQUNBO0FBQ2pCO0FBQ3FCO0FBQzBDO0FBQzdDOztBQUUxRDtBQUNBO0FBQ0EsZUFBZSwrREFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVDQUF1QztBQUNuRCxTQUFTLDBDQUEwQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw4REFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUFjO0FBQ3pCO0FBQ0EsTUFBTSx3REFBUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBc0I7QUFDMUIsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixjQUFjLGlCQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbURBQUs7QUFDNUI7QUFDQTtBQUNBLEtBQUssRUFBRSxzRUFBYyxDQUFDLGtFQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixzRUFBYzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFhO0FBQ2xDO0FBQ0EsTUFBTTtBQUNOLHFCQUFxQiw0REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMseURBQU07O0FBRTNDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxrQ0FBa0MsMkVBQW1CO0FBQ3JEO0FBQ0EsZ0NBQWdDLDJFQUFjO0FBQzlDLDhCQUE4Qix5RUFBWTtBQUMxQyxrQ0FBa0MsNkVBQWdCO0FBQ2xELDhCQUE4Qiw4RUFBaUI7QUFDL0MsOEJBQThCLHlFQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnRUFBaUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEIsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxVQUFVLFFBQVE7QUFDbEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0EsV0FBVywrREFBVSx1QkFBdUIsMERBQU8sVUFBVSw2REFBVTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxvQkFBb0I7QUFDbEM7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkMsa0JBQWtCLFFBQVE7QUFDMUIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxVQUFVLGFBQWE7QUFDdkIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0EsV0FBVyw4REFBUywwQkFBMEIsMERBQU8sVUFBVSw2REFBVTtBQUN6RTs7QUFFQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLDBEQUFPO0FBQ2xCOztBQUVBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQWM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNERBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxZQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFVO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFNBQVM7QUFDeEI7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEdBQUcsMEJBQTBCO0FBQ3pFLHVCQUF1Qiw0REFBYTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcmY2QztBQUNNOztBQUU1QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxPQUFPO0FBQ2pFOztBQUVBO0FBQ087QUFDUCxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVM7QUFDN0I7QUFDQTtBQUNBLG9CQUFvQixzREFBUTtBQUM1QjtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFRO0FBQzVCO0FBQ0EsZ0JBQWdCLDJEQUFZO0FBQzVCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHVCQUF1QixhQUFhO0FBQ3BDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzBDO0FBQ0k7QUFDaUM7QUFDWjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsT0FBTyx3REFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxREFBTztBQUMxQixRQUFRO0FBQ1IsbUJBQW1CLHNEQUFRO0FBQzNCLFFBQVE7QUFDUixtQkFBbUIscURBQU87QUFDMUI7QUFDQSxjQUFjLGlEQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1REFBUztBQUMxQixjQUFjLG1EQUFTO0FBQ3ZCO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBUTtBQUN6QixjQUFjLGtEQUFRO0FBQ3RCLHFEQUFxRCwrREFBaUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSSxzREFBTztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGVBQWU7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSwrQkFBK0IsbURBQW1EO0FBQ2xGLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFFBQVEsNkRBQWM7QUFDdEIsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFFBQVEsNkRBQWM7QUFDdEIsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFFBQVEseURBQVU7QUFDbEIsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsNERBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE04QztBQUNTO0FBQ2hCOztBQUV2QztBQUNPO0FBQ1AsU0FBUyxpQkFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBc0I7QUFDNUI7QUFDQTtBQUNBLEVBQUUsc0RBQU87QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIwRDtBQUNIO0FBQ0c7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFTO0FBQ2YsTUFBTSxzREFBUTs7QUFFZDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxzQkFBc0IsbURBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1Asc0JBQXNCLFlBQVk7QUFDbEM7O0FBRU87QUFDUCxFQUFFLHlEQUFVO0FBQ1o7O0FBRU87QUFDUCxFQUFFLDZEQUFjO0FBQ2hCOztBQUVPO0FBQ1AsRUFBRSw2REFBYztBQUNoQjs7QUFFQTtBQUNPO0FBQ1AsaUJBQWlCLHFFQUFzQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUEsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1oyQztBQUNMOztBQUV0QztBQUNPO0FBQ1A7QUFDTyxxQ0FBcUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFLCtDQUFLO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSx5QkFBeUIsa0JBQWtCLEVBQUUsaUJBQWlCO0FBQzlELE9BQU87QUFDUDtBQUNBLHdCQUF3QixxREFBVTtBQUNsQyxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0EsaUJBQWlCLG1EQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsK0NBQUs7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxtREFBUztBQUM5Qzs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeExPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0EsT0FBTyx1Q0FBdUM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNCQUFzQjtBQUM1QjtBQUNBLE1BQU0sOEJBQThCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDhDQUE4QyxzREFBUztBQUN2RDtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEVBQXNCO0FBQzFCOztBQUVBO0FBQ0EsV0FBVyxnQ0FBZ0M7QUFDM0MsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFNBQVMsd0JBQXdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNEVBQXNCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTLDJEQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDLDRCQUE0QixNQUFNO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNQYXN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9EYXRlcGlja2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2V2ZW50cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2lucHV0RmllbGRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL290aGVyTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2V2ZW50cy9waWNrZXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvaTE4bi9iYXNlLWxvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RhdGUtZm9ybWF0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2V2ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9vcHRpb25zL2RlZmF1bHRPcHRpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL29wdGlvbnMvcHJvY2Vzc09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL1BpY2tlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdGVtcGxhdGVzL2NhbGVuZGFyV2Vla3NUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdGVtcGxhdGVzL2RheXNUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdGVtcGxhdGVzL3BpY2tlclRlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9EYXlzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdmlld3MvTW9udGhzVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdmlld3MvVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvdmlld3MvWWVhcnNWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmRhdGVwaWNrZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRhdGVwaWNrZXIuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1kcm9wZG93biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjA7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbn1cXG4uZGF0ZXBpY2tlci1kcm9wZG93bi5kYXRlcGlja2VyLW9yaWVudC10b3Age1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1waWNrZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCAxMDAlKTtcXG59XFxuLmRhdGVwaWNrZXItZHJvcGRvd24gLmRhdGVwaWNrZXItcGlja2VyIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSksIDAgMCAwIDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XFxufVxcbi5kYXRlcGlja2VyLXBpY2tlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1tYWluIHtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmRhdGVwaWNrZXItZm9vdGVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDk2JSk7XFxufVxcblxcbi5kYXRlcGlja2VyLWdyaWQsIC5kYXRlcGlja2VyLXZpZXcgLmRheXMtb2Ytd2VlaywgLmRhdGVwaWNrZXItdmlldywgLmRhdGVwaWNrZXItY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRhdGVwaWNrZXItZ3JpZCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5kYXRlcGlja2VyLXZpZXcgLmRheXMgLmRhdGVwaWNrZXItY2VsbCwgLmRhdGVwaWNrZXItdmlldyAuZG93IHtcXG4gIGZsZXgtYmFzaXM6IDE0LjI4NTcxNDI4NTclO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci12aWV3LmRhdGVwaWNrZXItZ3JpZCAuZGF0ZXBpY2tlci1jZWxsIHtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG59XFxuXFxuLmRhdGVwaWNrZXItY2VsbCwgLmRhdGVwaWNrZXItdmlldyAud2VlayB7XFxuICBoZWlnaHQ6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLmRhdGVwaWNrZXItdGl0bGUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDFweCByZ2JhKDEwLCAxMCwgMTAsIDAuMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDk2JSk7XFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmRhdGVwaWNrZXItaGVhZGVyIC5kYXRlcGlja2VyLWNvbnRyb2xzIHtcXG4gIHBhZGRpbmc6IDJweCAycHggMDtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCAxMDAlKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IGNhbGMoMC4zNzVlbSAtIDFweCkgMC43NWVtO1xcbiAgaGVpZ2h0OiAyLjI1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAyMSUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmZvY3VzLCAuZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmFjdGl2ZSB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDIxJSk7XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiBoc2woMjE3ZGVnLCA3MSUsIDUzJSk7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAyMSUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmZvY3VzOm5vdCg6YWN0aXZlKSB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjEyNWVtIHJnYmEoNTAsIDExNSwgMjIwLCAwLjI1KTtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMjElKTtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmRhdGVwaWNrZXItaGVhZGVyIC5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b24ge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbjpmb2N1czpub3QoOmFjdGl2ZSkge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcbn1cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuLmRhdGVwaWNrZXItaGVhZGVyIC5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b25bZGlzYWJsZWRdIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5kYXRlcGlja2VyLWZvb3RlciAuZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uIHtcXG4gIG1hcmdpbjogY2FsYygwLjM3NXJlbSAtIDFweCkgMC4zNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLnZpZXctc3dpdGNoIHtcXG4gIGZsZXg6IGF1dG87XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5wcmV2LWJ0bixcXG4uZGF0ZXBpY2tlci1jb250cm9scyAubmV4dC1idG4ge1xcbiAgcGFkZGluZy1yaWdodDogMC4zNzVyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMzc1cmVtO1xcbiAgd2lkdGg6IDIuMjVyZW07XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5wcmV2LWJ0bi5kaXNhYmxlZCxcXG4uZGF0ZXBpY2tlci1jb250cm9scyAubmV4dC1idG4uZGlzYWJsZWQge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci12aWV3IC5kb3cge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5kYXRlcGlja2VyLXZpZXcgLndlZWsge1xcbiAgd2lkdGg6IDIuMjVyZW07XFxuICBjb2xvcjogI2I1YjViNTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDIyLjVyZW0pIHtcXG4gIC5kYXRlcGlja2VyLXZpZXcgLndlZWsge1xcbiAgICB3aWR0aDogMS45Njg3NXJlbTtcXG4gIH1cXG59XFxuXFxuLmRhdGVwaWNrZXItZ3JpZCB7XFxuICB3aWR0aDogMTUuNzVyZW07XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAyMi41cmVtKSB7XFxuICAuY2FsZW5kYXItd2Vla3MgKyAuZGF5cyAuZGF0ZXBpY2tlci1ncmlkIHtcXG4gICAgd2lkdGg6IDEzLjc4MTI1cmVtO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZXBpY2tlci1jZWxsOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwuZm9jdXNlZDpub3QoLnNlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnNlbGVjdGVkLCAuZGF0ZXBpY2tlci1jZWxsLnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMTdkZWcsIDcxJSwgNTMlKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5kaXNhYmxlZCB7XFxuICBjb2xvcjogI2RiZGJkYjtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5wcmV2Om5vdCguZGlzYWJsZWQpLCAuZGF0ZXBpY2tlci1jZWxsLm5leHQ6bm90KC5kaXNhYmxlZCkge1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgNDglKTtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5wcmV2LnNlbGVjdGVkLCAuZGF0ZXBpY2tlci1jZWxsLm5leHQuc2VsZWN0ZWQge1xcbiAgY29sb3I6ICNlNmU2ZTY7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwuaGlnaGxpZ2h0ZWQ6bm90KC5zZWxlY3RlZCk6bm90KC5yYW5nZSk6bm90KC50b2RheSkge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgOTYlKTtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5oaWdobGlnaHRlZDpub3QoLnNlbGVjdGVkKTpub3QoLnJhbmdlKTpub3QoLnRvZGF5KTpub3QoLmRpc2FibGVkKTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLmhpZ2hsaWdodGVkOm5vdCguc2VsZWN0ZWQpOm5vdCgucmFuZ2UpOm5vdCgudG9kYXkpLmZvY3VzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC50b2RheTpub3QoLnNlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTcxZGVnLCAxMDAlLCA0MSUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnRvZGF5Om5vdCguc2VsZWN0ZWQpOm5vdCguZGlzYWJsZWQpIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnRvZGF5LmZvY3VzZWQ6bm90KC5zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzRhNztcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5yYW5nZS1lbmQ6bm90KC5zZWxlY3RlZCksIC5kYXRlcGlja2VyLWNlbGwucmFuZ2Utc3RhcnQ6bm90KC5zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLWVuZC5mb2N1c2VkOm5vdCguc2VsZWN0ZWQpLCAuZGF0ZXBpY2tlci1jZWxsLnJhbmdlLXN0YXJ0LmZvY3VzZWQ6bm90KC5zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5yYW5nZS1zdGFydCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5yYW5nZS1lbmQge1xcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwucmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwucmFuZ2U6bm90KC5kaXNhYmxlZCk6bm90KC5mb2N1c2VkKTpub3QoLnRvZGF5KTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjYzJjMmMyO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLmZvY3VzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmY2ZjZjtcXG59XFxuLmRhdGVwaWNrZXItdmlldy5kYXRlcGlja2VyLWdyaWQgLmRhdGVwaWNrZXItY2VsbCB7XFxuICBoZWlnaHQ6IDQuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA0LjVyZW07XFxufVxcblxcbi5kYXRlcGlja2VyLWlucHV0LmluLWVkaXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjM2NmQxO1xcbn1cXG4uZGF0ZXBpY2tlci1pbnB1dC5pbi1lZGl0OmZvY3VzLCAuZGF0ZXBpY2tlci1pbnB1dC5pbi1lZGl0OmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDAgMC4yNWVtIDAuMjVlbSByZ2JhKDM1LCAxMDIsIDIwOSwgMC4yKTtcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbiNmb3JtQ29udGFpbmVyLCAubkZvcm1XcmFwcGVyLCAucEZvcm1XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbkZvcm0sICNwRm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubWFpblBhZ2Uge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgIGhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcInNpZGViYXIgY2FyZCAgIGNhcmQgICBjYXJkICAgY2FyZCAgXFxcIiBcXFwic2lkZWJhciBjYXJkICAgY2FyZCAgIGNhcmQgICBjYXJkICBcXFwiO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNhcmRDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBjYXJkO1xcbn1cXG5cXG4uc2hvd0Zvcm0ge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm1UaXRsZSB7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG59XFxuXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9zYXNzL2RhdGVwaWNrZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiLFwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL3Nhc3MvX21peGlucy5zY3NzXCIsXCJ3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dCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiB2YXIgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtsYXN0SXRlbU9mLCBzdHJpbmdUb0FycmF5LCBpc0luUmFuZ2V9IGZyb20gJy4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7dG9kYXksIHJlZ3VsYXJpemVEYXRlfSBmcm9tICcuL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VEYXRlLCBmb3JtYXREYXRlfSBmcm9tICcuL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQge2lzQWN0aXZlRWxlbWVudH0gZnJvbSAnLi9saWIvZG9tLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJMaXN0ZW5lcnMsIHVucmVnaXN0ZXJMaXN0ZW5lcnN9IGZyb20gJy4vbGliL2V2ZW50LmpzJztcbmltcG9ydCB7bG9jYWxlc30gZnJvbSAnLi9pMThuL2Jhc2UtbG9jYWxlcy5qcyc7XG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zL2RlZmF1bHRPcHRpb25zLmpzJztcbmltcG9ydCBwcm9jZXNzT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvcHJvY2Vzc09wdGlvbnMuanMnO1xuaW1wb3J0IFBpY2tlciBmcm9tICcuL3BpY2tlci9QaWNrZXIuanMnO1xuaW1wb3J0IHt0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50fSBmcm9tICcuL2V2ZW50cy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHtvbktleWRvd24sIG9uRm9jdXMsIG9uTW91c2Vkb3duLCBvbkNsaWNrSW5wdXQsIG9uUGFzdGV9IGZyb20gJy4vZXZlbnRzL2lucHV0RmllbGRMaXN0ZW5lcnMuanMnO1xuaW1wb3J0IHtvbkNsaWNrT3V0c2lkZX0gZnJvbSAnLi9ldmVudHMvb3RoZXJMaXN0ZW5lcnMuanMnO1xuXG5mdW5jdGlvbiBzdHJpbmdpZnlEYXRlcyhkYXRlcywgY29uZmlnKSB7XG4gIHJldHVybiBkYXRlc1xuICAgIC5tYXAoZHQgPT4gZm9ybWF0RGF0ZShkdCwgY29uZmlnLmZvcm1hdCwgY29uZmlnLmxvY2FsZSkpXG4gICAgLmpvaW4oY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xufVxuXG4vLyBwYXJzZSBpbnB1dCBkYXRlcyBhbmQgY3JlYXRlIGFuIGFycmF5IG9mIHRpbWUgdmFsdWVzIGZvciBzZWxlY3Rpb25cbi8vIHJldHVybnMgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBubyB2YWxpZCBkYXRlcyBpbiBpbnB1dERhdGVzXG4vLyB3aGVuIG9yaWdEYXRlcyAoY3VycmVudCBzZWxlY3Rpb24pIGlzIHBhc3NlZCwgdGhlIGZ1bmN0aW9uIHdvcmtzIHRvIG1peFxuLy8gdGhlIGlucHV0IGRhdGVzIGludG8gdGhlIGN1cnJlbnQgc2VsZWN0aW9uXG5mdW5jdGlvbiBwcm9jZXNzSW5wdXREYXRlcyhkYXRlcGlja2VyLCBpbnB1dERhdGVzLCBjbGVhciA9IGZhbHNlKSB7XG4gIC8vIGNvbnN0IHtjb25maWcsIGRhdGVzOiBvcmlnRGF0ZXMsIHJhbmdlcGlja2VyfSA9IGRhdGVwaWNrZXI7XG4gIGNvbnN0IHtjb25maWcsIGRhdGVzOiBvcmlnRGF0ZXMsIHJhbmdlU2lkZUluZGV4fSA9IGRhdGVwaWNrZXI7XG4gIGlmIChpbnB1dERhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGVtcHR5IGlucHV0IGlzIGNvbnNpZGVyZWQgdmFsaWQgdW5sZXNzIG9yaWdpRGF0ZXMgaXMgcGFzc2VkXG4gICAgcmV0dXJuIGNsZWFyID8gW10gOiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBjb25zdCByYW5nZUVuZCA9IHJhbmdlcGlja2VyICYmIGRhdGVwaWNrZXIgPT09IHJhbmdlcGlja2VyLmRhdGVwaWNrZXJzWzFdO1xuICBsZXQgbmV3RGF0ZXMgPSBpbnB1dERhdGVzLnJlZHVjZSgoZGF0ZXMsIGR0KSA9PiB7XG4gICAgbGV0IGRhdGUgPSBwYXJzZURhdGUoZHQsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5sb2NhbGUpO1xuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBkYXRlcztcbiAgICB9XG4gICAgLy8gYWRqdXN0IHRvIDFzdCBvZiB0aGUgbW9udGgvSmFuIDFzdCBvZiB0aGUgeWVhclxuICAgIC8vIG9yIHRvIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9uaC9EZWMgMzFzdCBvZiB0aGUgeWVhciBpZiB0aGUgZGF0ZXBpY2tlclxuICAgIC8vIGlzIHRoZSByYW5nZS1lbmQgcGlja2VyIG9mIGEgcmFuZ2VwaWNrZXJcbiAgICBkYXRlID0gcmVndWxhcml6ZURhdGUoZGF0ZSwgY29uZmlnLnBpY2tMZXZlbCwgcmFuZ2VTaWRlSW5kZXgpO1xuICAgIGlmIChcbiAgICAgIGlzSW5SYW5nZShkYXRlLCBjb25maWcubWluRGF0ZSwgY29uZmlnLm1heERhdGUpXG4gICAgICAmJiAhZGF0ZXMuaW5jbHVkZXMoZGF0ZSlcbiAgICAgICYmICFjb25maWcuZGF0ZXNEaXNhYmxlZC5pbmNsdWRlcyhkYXRlKVxuICAgICAgJiYgKGNvbmZpZy5waWNrTGV2ZWwgPiAwIHx8ICFjb25maWcuZGF5c09mV2Vla0Rpc2FibGVkLmluY2x1ZGVzKG5ldyBEYXRlKGRhdGUpLmdldERheSgpKSlcbiAgICApIHtcbiAgICAgIGRhdGVzLnB1c2goZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlcztcbiAgfSwgW10pO1xuICBpZiAobmV3RGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChjb25maWcubXVsdGlkYXRlICYmICFjbGVhcikge1xuICAgIC8vIGdldCB0aGUgc3lubWV0cmljIGRpZmZlcmVuY2UgYmV0d2VlbiBvcmlnRGF0ZXMgYW5kIG5ld0RhdGVzXG4gICAgbmV3RGF0ZXMgPSBuZXdEYXRlcy5yZWR1Y2UoKGRhdGVzLCBkYXRlKSA9PiB7XG4gICAgICBpZiAoIW9yaWdEYXRlcy5pbmNsdWRlcyhkYXRlKSkge1xuICAgICAgICBkYXRlcy5wdXNoKGRhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGVzO1xuICAgIH0sIG9yaWdEYXRlcy5maWx0ZXIoZGF0ZSA9PiAhbmV3RGF0ZXMuaW5jbHVkZXMoZGF0ZSkpKTtcbiAgfVxuICAvLyBkbyBsZW5ndGggY2hlY2sgYWx3YXlzIGJlY2F1c2UgdXNlciBjYW4gaW5wdXQgbXVsdGlwbGUgZGF0ZXMgcmVnYXJkbGVzcyBvZiB0aGUgbW9kZVxuICByZXR1cm4gY29uZmlnLm1heE51bWJlck9mRGF0ZXMgJiYgbmV3RGF0ZXMubGVuZ3RoID4gY29uZmlnLm1heE51bWJlck9mRGF0ZXNcbiAgICA/IG5ld0RhdGVzLnNsaWNlKGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzICogLTEpXG4gICAgOiBuZXdEYXRlcztcbn1cblxuLy8gcmVmcmVzaCB0aGUgVUkgZWxlbWVudHNcbi8vIG1vZGVzOiAxOiBpbnB1dCBvbmx5LCAyLCBwaWNrZXIgb25seSwgMyBib3RoXG5mdW5jdGlvbiByZWZyZXNoVUkoZGF0ZXBpY2tlciwgbW9kZSA9IDMsIHF1aWNrUmVuZGVyID0gdHJ1ZSkge1xuICBjb25zdCB7Y29uZmlnLCBwaWNrZXIsIGlucHV0RmllbGR9ID0gZGF0ZXBpY2tlcjtcbiAgaWYgKG1vZGUgJiAyKSB7XG4gICAgY29uc3QgbmV3VmlldyA9IHBpY2tlci5hY3RpdmUgPyBjb25maWcucGlja0xldmVsIDogY29uZmlnLnN0YXJ0VmlldztcbiAgICBwaWNrZXIudXBkYXRlKCkuY2hhbmdlVmlldyhuZXdWaWV3KS5yZW5kZXIocXVpY2tSZW5kZXIpO1xuICB9XG4gIGlmIChtb2RlICYgMSAmJiBpbnB1dEZpZWxkKSB7XG4gICAgaW5wdXRGaWVsZC52YWx1ZSA9IHN0cmluZ2lmeURhdGVzKGRhdGVwaWNrZXIuZGF0ZXMsIGNvbmZpZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlcGlja2VyLCBpbnB1dERhdGVzLCBvcHRpb25zKSB7XG4gIGxldCB7Y2xlYXIsIHJlbmRlciwgYXV0b2hpZGUsIHJldmVydH0gPSBvcHRpb25zO1xuICBpZiAocmVuZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICByZW5kZXIgPSB0cnVlO1xuICB9XG4gIGlmICghcmVuZGVyKSB7XG4gICAgYXV0b2hpZGUgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChhdXRvaGlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXV0b2hpZGUgPSBkYXRlcGlja2VyLmNvbmZpZy5hdXRvaGlkZTtcbiAgfVxuXG4gIGNvbnN0IG5ld0RhdGVzID0gcHJvY2Vzc0lucHV0RGF0ZXMoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgY2xlYXIpO1xuICBpZiAoIW5ld0RhdGVzICYmICFyZXZlcnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5ld0RhdGVzICYmIG5ld0RhdGVzLnRvU3RyaW5nKCkgIT09IGRhdGVwaWNrZXIuZGF0ZXMudG9TdHJpbmcoKSkge1xuICAgIGRhdGVwaWNrZXIuZGF0ZXMgPSBuZXdEYXRlcztcbiAgICByZWZyZXNoVUkoZGF0ZXBpY2tlciwgcmVuZGVyID8gMyA6IDEpO1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQoZGF0ZXBpY2tlciwgJ2NoYW5nZURhdGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZWZyZXNoVUkoZGF0ZXBpY2tlciwgMSk7XG4gIH1cblxuICBpZiAoYXV0b2hpZGUpIHtcbiAgICBkYXRlcGlja2VyLmhpZGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIGRhdGUgcGlja2VyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVwaWNrZXIge1xuICAvKipcbiAgICogQ3JlYXRlIGEgZGF0ZSBwaWNrZXJcbiAgICogQHBhcmFtICB7RWxlbWVudH0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZCBhIGRhdGUgcGlja2VyXG4gICAqIEBwYXJhbSAge09iamVjdH0gW29wdGlvbnNdIC0gY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtICB7RGF0ZVJhbmdlUGlja2VyfSBbcmFuZ2VwaWNrZXJdIC0gRGF0ZVJhbmdlUGlja2VyIGluc3RhbmNlIHRoZVxuICAgKiBkYXRlIHBpY2tlciBiZWxvbmdzIHRvLiBVc2UgdGhpcyBvbmx5IHdoZW4gY3JlYXRpbmcgZGF0ZSBwaWNrZXIgYXMgYSBwYXJ0XG4gICAqIG9mIGRhdGUgcmFuZ2UgcGlja2VyXG4gICAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30sIHJhbmdlcGlja2VyID0gdW5kZWZpbmVkKSB7XG4gICAgZWxlbWVudC5kYXRlcGlja2VyID0gdGhpcztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGJ1dHRvbkNsYXNzOiAob3B0aW9ucy5idXR0b25DbGFzcyAmJiBTdHJpbmcob3B0aW9ucy5idXR0b25DbGFzcykpIHx8ICdidXR0b24nLFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuICAgICAgZGVmYXVsdFZpZXdEYXRlOiB0b2RheSgpLFxuICAgICAgbWF4RGF0ZTogdW5kZWZpbmVkLFxuICAgICAgbWluRGF0ZTogdW5kZWZpbmVkLFxuICAgIH0sIHByb2Nlc3NPcHRpb25zKGRlZmF1bHRPcHRpb25zLCB0aGlzKSk7XG4gICAgLy8gY29uZmlndXJlIGJ5IHR5cGVcbiAgICBjb25zdCBpbmxpbmUgPSB0aGlzLmlubGluZSA9IGVsZW1lbnQudGFnTmFtZSAhPT0gJ0lOUFVUJztcbiAgICBsZXQgaW5wdXRGaWVsZDtcbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBjb25maWcuY29udGFpbmVyID0gZWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyKSB7XG4gICAgICAgIC8vIG9taXQgc3RyaW5nIHR5cGUgY2hlY2sgYmVjYXVzZSBpdCBkb2Vzbid0IGd1YXJhbnRlZSB0byBhdm9pZCBlcnJvcnNcbiAgICAgICAgLy8gKGludmFsaWQgc2VsZWN0b3Igc3RyaW5nIGNhdXNlcyBhYmVuZCB3aXRoIHN5dGF4IGVycm9yKVxuICAgICAgICBjb25maWcuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAgID8gb3B0aW9ucy5jb250YWluZXJcbiAgICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgfVxuICAgICAgaW5wdXRGaWVsZCA9IHRoaXMuaW5wdXRGaWVsZCA9IGVsZW1lbnQ7XG4gICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2RhdGVwaWNrZXItaW5wdXQnKTtcbiAgICB9XG4gICAgaWYgKHJhbmdlcGlja2VyKSB7XG4gICAgICAvLyBjaGVjayB2YWxpZGlyeVxuICAgICAgY29uc3QgaW5kZXggPSByYW5nZXBpY2tlci5pbnB1dHMuaW5kZXhPZihpbnB1dEZpZWxkKTtcbiAgICAgIGNvbnN0IGRhdGVwaWNrZXJzID0gcmFuZ2VwaWNrZXIuZGF0ZXBpY2tlcnM7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gMSB8fCAhQXJyYXkuaXNBcnJheShkYXRlcGlja2VycykpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgcmFuZ2VwaWNrZXIgb2JqZWN0LicpO1xuICAgICAgfVxuICAgICAgLy8gYXR0YWNoIGl0YWVsZiB0byB0aGUgcmFuZ2VwaWNrZXIgaGVyZSBzbyB0aGF0IHByb2Nlc3NJbnB1dERhdGVzKCkgY2FuXG4gICAgICAvLyBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgcmFuZ2UtZW5kIHBpY2tlciBvZiB0aGUgcmFuZ2VwaWNrZXIgd2hpbGVcbiAgICAgIC8vIHNldHRpbmcgaW5pdGFsIHZhbHVlcyB3aGVuIHBpY2tMZXZlbCA+IDBcbiAgICAgIGRhdGVwaWNrZXJzW2luZGV4XSA9IHRoaXM7XG4gICAgICAvLyBhZGQgZ2V0dGVyIGZvciByYW5nZXBpY2tlclxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyYW5nZXBpY2tlcicsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiByYW5nZXBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdyYW5nZVNpZGVJbmRleCcsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNldCB1cCBjb25maWdcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgcHJvY2Vzc09wdGlvbnMob3B0aW9ucywgdGhpcykpO1xuXG4gICAgLy8gc2V0IGluaXRpYWwgZGF0ZXNcbiAgICBsZXQgaW5pdGlhbERhdGVzO1xuICAgIGlmIChpbmxpbmUpIHtcbiAgICAgIGluaXRpYWxEYXRlcyA9IHN0cmluZ1RvQXJyYXkoZWxlbWVudC5kYXRhc2V0LmRhdGUsIGNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbiAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXQuZGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbERhdGVzID0gc3RyaW5nVG9BcnJheShpbnB1dEZpZWxkLnZhbHVlLCBjb25maWcuZGF0ZURlbGltaXRlcik7XG4gICAgfVxuICAgIHRoaXMuZGF0ZXMgPSBbXTtcbiAgICAvLyBwcm9jZXNzIGluaXRpYWwgdmFsdWVcbiAgICBjb25zdCBpbnB1dERhdGVWYWx1ZXMgPSBwcm9jZXNzSW5wdXREYXRlcyh0aGlzLCBpbml0aWFsRGF0ZXMpO1xuICAgIGlmIChpbnB1dERhdGVWYWx1ZXMgJiYgaW5wdXREYXRlVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuZGF0ZXMgPSBpbnB1dERhdGVWYWx1ZXM7XG4gICAgfVxuICAgIGlmIChpbnB1dEZpZWxkKSB7XG4gICAgICBpbnB1dEZpZWxkLnZhbHVlID0gc3RyaW5naWZ5RGF0ZXModGhpcy5kYXRlcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrZXIgPSB0aGlzLnBpY2tlciA9IG5ldyBQaWNrZXIodGhpcyk7XG5cbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2V0IHVwIGV2ZW50IGxpc3RlbmVycyBpbiBvdGhlciBtb2Rlc1xuICAgICAgY29uc3Qgb25Nb3VzZWRvd25Eb2N1bWVudCA9IG9uQ2xpY2tPdXRzaWRlLmJpbmQobnVsbCwgdGhpcyk7XG4gICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXG4gICAgICAgIFtpbnB1dEZpZWxkLCAna2V5ZG93bicsIG9uS2V5ZG93bi5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2lucHV0RmllbGQsICdmb2N1cycsIG9uRm9jdXMuYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnbW91c2Vkb3duJywgb25Nb3VzZWRvd24uYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnY2xpY2snLCBvbkNsaWNrSW5wdXQuYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAncGFzdGUnLCBvblBhc3RlLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbZG9jdW1lbnQsICdtb3VzZWRvd24nLCBvbk1vdXNlZG93bkRvY3VtZW50XSxcbiAgICAgICAgW2RvY3VtZW50LCAndG91Y2hzdGFydCcsIG9uTW91c2Vkb3duRG9jdW1lbnRdLFxuICAgICAgICBbd2luZG93LCAncmVzaXplJywgcGlja2VyLnBsYWNlLmJpbmQocGlja2VyKV1cbiAgICAgIF07XG4gICAgICByZWdpc3Rlckxpc3RlbmVycyh0aGlzLCBsaXN0ZW5lcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgRGF0ZSBvYmplY3Qgb3IgdGltZSB2YWx1ZSBpbiBnaXZlbiBmb3JtYXQgYW5kIGxhbmd1YWdlXG4gICAqIEBwYXJhbSAge0RhdGV8TnVtYmVyfSBkYXRlIC0gZGF0ZSBvciB0aW1lIHZhbHVlIHRvIGZvcm1hdFxuICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBmb3JtYXQgLSBmb3JtYXQgc3RyaW5nIG9yIG9iamVjdCB0aGF0IGNvbnRhaW5zXG4gICAqIHRvRGlzcGxheSgpIGN1c3RvbSBmb3JtYXR0ZXIsIHdob3NlIHNpZ25hdHVyZSBpc1xuICAgKiAtIGFyZ3M6XG4gICAqICAgLSBkYXRlOiB7RGF0ZX0gLSBEYXRlIGluc3RhbmNlIG9mIHRoZSBkYXRlIHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBmb3JtYXQ6IHtPYmplY3R9IC0gdGhlIGZvcm1hdCBvYmplY3QgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGxvY2FsZToge09iamVjdH0gLSBsb2NhbGUgZm9yIHRoZSBsYW5ndWFnZSBzcGVjaWZpZWQgYnkgYGxhbmdgXG4gICAqIC0gcmV0dXJuOlxuICAgKiAgICAge1N0cmluZ30gZm9ybWF0dGVkIGRhdGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbbGFuZz1lbl0gLSBsYW5ndWFnZSBjb2RlIGZvciB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRlXG4gICAqL1xuICBzdGF0aWMgZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxhbmcpIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXQsIGxhbmcgJiYgbG9jYWxlc1tsYW5nXSB8fCBsb2NhbGVzLmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBkYXRlIHN0cmluZ1xuICAgKiBAcGFyYW0gIHtTdHJpbmd8RGF0ZXxOdW1iZXJ9IGRhdGVTdHIgLSBkYXRlIHN0cmluZywgRGF0ZSBvYmplY3Qgb3IgdGltZVxuICAgKiB2YWx1ZSB0byBwYXJzZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd8T2JqZWN0fSBmb3JtYXQgLSBmb3JtYXQgc3RyaW5nIG9yIG9iamVjdCB0aGF0IGNvbnRhaW5zXG4gICAqIHRvVmFsdWUoKSBjdXN0b20gcGFyc2VyLCB3aG9zZSBzaWduYXR1cmUgaXNcbiAgICogLSBhcmdzOlxuICAgKiAgIC0gZGF0ZVN0cjoge1N0cmluZ3xEYXRlfE51bWJlcn0gLSB0aGUgZGF0ZVN0ciBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gZm9ybWF0OiB7T2JqZWN0fSAtIHRoZSBmb3JtYXQgb2JqZWN0IHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBsb2NhbGU6IHtPYmplY3R9IC0gbG9jYWxlIGZvciB0aGUgbGFuZ3VhZ2Ugc3BlY2lmaWVkIGJ5IGBsYW5nYFxuICAgKiAtIHJldHVybjpcbiAgICogICAgIHtEYXRlfE51bWJlcn0gcGFyc2VkIGRhdGUgb3IgaXRzIHRpbWUgdmFsdWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbbGFuZz1lbl0gLSBsYW5ndWFnZSBjb2RlIGZvciB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRpbWUgdmFsdWUgb2YgcGFyc2VkIGRhdGVcbiAgICovXG4gIHN0YXRpYyBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsYW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlRGF0ZShkYXRlU3RyLCBmb3JtYXQsIGxhbmcgJiYgbG9jYWxlc1tsYW5nXSB8fCBsb2NhbGVzLmVuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7T2JqZWN0fSAtIEluc3RhbGxlZCBsb2NhbGVzIGluIGBbbGFuZ3VhZ2VDb2RlXTogbG9jYWxlT2JqZWN0YCBmb3JtYXRcbiAgICogZW5gOl9FbmdsaXNoIChVUylfIGlzIHByZS1pbnN0YWxsZWQuXG4gICAqL1xuICBzdGF0aWMgZ2V0IGxvY2FsZXMoKSB7XG4gICAgcmV0dXJuIGxvY2FsZXM7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge0Jvb2xlYW59IC0gV2hldGhlciB0aGUgcGlja2VyIGVsZW1lbnQgaXMgc2hvd24uIGB0cnVlYCB3aG5lIHNob3duXG4gICAqL1xuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiAhISh0aGlzLnBpY2tlciAmJiB0aGlzLnBpY2tlci5hY3RpdmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtIVE1MRGl2RWxlbWVudH0gLSBET00gb2JqZWN0IG9mIHBpY2tlciBlbGVtZW50XG4gICAqL1xuICBnZXQgcGlja2VyRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5waWNrZXIgPyB0aGlzLnBpY2tlci5lbGVtZW50IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgdmFsdWVzIHRvIHRoZSBjb25maWcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZyBvcHRpb25zIHRvIHVwZGF0ZVxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgcGlja2VyID0gdGhpcy5waWNrZXI7XG4gICAgY29uc3QgbmV3T3B0aW9ucyA9IHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIHRoaXMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgbmV3T3B0aW9ucyk7XG4gICAgcGlja2VyLnNldE9wdGlvbnMobmV3T3B0aW9ucyk7XG5cbiAgICByZWZyZXNoVUkodGhpcywgMyk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICovXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRGaWVsZCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXRGaWVsZC5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzQWN0aXZlRWxlbWVudCh0aGlzLmlucHV0RmllbGQpICYmICF0aGlzLmNvbmZpZy5kaXNhYmxlVG91Y2hLZXlib2FyZCkge1xuICAgICAgICB0aGlzLl9zaG93aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbnB1dEZpZWxkLmZvY3VzKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9zaG93aW5nO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBpY2tlci5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGlja2VyIGVsZW1lbnRcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyXG4gICAqL1xuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnBpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5waWNrZXIudXBkYXRlKCkuY2hhbmdlVmlldyh0aGlzLmNvbmZpZy5zdGFydFZpZXcpLnJlbmRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgdGhlIERhdGVwaWNrZXIgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGV0ZXBpY2tlcn0gLSB0aGUgaW5zdGFuY2UgZGVzdHJveWVkXG4gICAqL1xuICBkZXN0cm95KCkge1xuICAgIHRoaXMuaGlkZSgpO1xuICAgIHVucmVnaXN0ZXJMaXN0ZW5lcnModGhpcyk7XG4gICAgdGhpcy5waWNrZXIuZGV0YWNoKCk7XG4gICAgaWYgKCF0aGlzLmlubGluZSkge1xuICAgICAgdGhpcy5pbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2RhdGVwaWNrZXItaW5wdXQnKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRlcGlja2VyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2VsZWN0ZWQgZGF0ZShzKVxuICAgKlxuICAgKiBUaGUgbWV0aG9kIHJldHVybnMgYSBEYXRlIG9iamVjdCBvZiBzZWxlY3RlZCBkYXRlIGJ5IGRlZmF1bHQsIGFuZCByZXR1cm5zXG4gICAqIGFuIGFycmF5IG9mIHNlbGVjdGVkIGRhdGVzIGluIG11bHRpZGF0ZSBtb2RlLiBJZiBmb3JtYXQgc3RyaW5nIGlzIHBhc3NlZCxcbiAgICogaXQgcmV0dXJucyBkYXRlIHN0cmluZyhzKSBmb3JtYXR0ZWQgaW4gZ2l2ZW4gZm9ybWF0LlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtmb3JtYXRdIC0gRm9ybWF0IHN0cmluZyB0byBzdHJpbmdpZnkgdGhlIGRhdGUocylcbiAgICogQHJldHVybiB7RGF0ZXxTdHJpbmd8RGF0ZVtdfFN0cmluZ1tdfSAtIHNlbGVjdGVkIGRhdGUocyksIG9yIGlmIG5vbmUgaXNcbiAgICogc2VsZWN0ZWQsIGVtcHR5IGFycmF5IGluIG11bHRpZGF0ZSBtb2RlIGFuZCB1bnRpdGxlZCBpbiBzaWdsZWRhdGUgbW9kZVxuICAgKi9cbiAgZ2V0RGF0ZShmb3JtYXQgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZvcm1hdFxuICAgICAgPyBkYXRlID0+IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCB0aGlzLmNvbmZpZy5sb2NhbGUpXG4gICAgICA6IGRhdGUgPT4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubXVsdGlkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlcy5tYXAoY2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5kYXRlc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RlZCBkYXRlKHMpXG4gICAqXG4gICAqIEluIG11bHRpZGF0ZSBtb2RlLCB5b3UgY2FuIHBhc3MgbXVsdGlwbGUgZGF0ZXMgYXMgYSBzZXJpZXMgb2YgYXJndW1lbnRzXG4gICAqIG9yIGFuIGFycmF5LiAoU2luY2UgZWFjaCBkYXRlIGlzIHBhcnNlZCBpbmRpdmlkdWFsbHksIHRoZSB0eXBlIG9mIHRoZVxuICAgKiBkYXRlcyBkb2Vzbid0IGhhdmUgdG8gYmUgdGhlIHNhbWUuKVxuICAgKiBUaGUgZ2l2ZW4gZGF0ZXMgYXJlIHVzZWQgdG8gdG9nZ2xlIHRoZSBzZWxlY3Qgc3RhdHVzIG9mIGVhY2ggZGF0ZS4gVGhlXG4gICAqIG51bWJlciBvZiBzZWxlY3RlZCBkYXRlcyBpcyBrZXB0IGZyb20gZXhjZWVkaW5nIHRoZSBsZW5ndGggc2V0IHRvXG4gICAqIG1heE51bWJlck9mRGF0ZXMuXG4gICAqXG4gICAqIFdpdGggY2xlYXI6IHRydWUgb3B0aW9uLCB0aGUgbWV0aG9kIGNhbiBiZSB1c2VkIHRvIGNsZWFyIHRoZSBzZWxlY3Rpb25cbiAgICogYW5kIHRvIHJlcGxhY2UgdGhlIHNlbGVjdGlvbiBpbnN0ZWFkIG9mIHRvZ2dsaW5nIGluIG11bHRpZGF0ZSBtb2RlLlxuICAgKiBJZiB0aGUgb3B0aW9uIGlzIHBhc3NlZCB3aXRoIG5vIGRhdGUgYXJndW1lbnRzIG9yIGFuIGVtcHR5IGRhdGVzIGFycmF5LFxuICAgKiBpdCB3b3JrcyBhcyBcImNsZWFyXCIgKGNsZWFyIHRoZSBzZWxlY3Rpb24gdGhlbiBzZXQgbm90aGluZyksIGFuZCBpZiB0aGVcbiAgICogb3B0aW9uIGlzIHBhc3NlZCB3aXRoIG5ldyBkYXRlcyB0byBzZWxlY3QsIGl0IHdvcmtzIGFzIFwicmVwbGFjZVwiIChjbGVhclxuICAgKiB0aGUgc2VsZWN0aW9uIHRoZW4gc2V0IHRoZSBnaXZlbiBkYXRlcylcbiAgICpcbiAgICogV2hlbiByZW5kZXI6IGZhbHNlIG9wdGlvbiBpcyB1c2VkLCB0aGUgbWV0aG9kIG9taXRzIHJlLXJlbmRlcmluZyB0aGVcbiAgICogcGlja2VyIGVsZW1lbnQuIEluIHRoaXMgY2FzZSwgeW91IG5lZWQgdG8gY2FsbCByZWZyZXNoKCkgbWV0aG9kIGxhdGVyIGluXG4gICAqIG9yZGVyIGZvciB0aGUgcGlja2VyIGVsZW1lbnQgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcy4gVGhlIGlucHV0IGZpZWxkIGlzXG4gICAqIHJlZnJlc2hlZCBhbHdheXMgcmVnYXJkbGVzcyBvZiB0aGlzIG9wdGlvbi5cbiAgICpcbiAgICogV2hlbiBpbnZhbGlkICh1bnBhcnNhYmxlLCByZXBlYXRlZCwgZGlzYWJsZWQgb3Igb3V0LW9mLXJhbmdlKSBkYXRlcyBhcmVcbiAgICogcGFzc2VkLCB0aGUgbWV0aG9kIGlnbm9yZXMgdGhlbSBhbmQgYXBwbGllcyBvbmx5IHZhbGlkIG9uZXMuIEluIHRoZSBjYXNlXG4gICAqIHRoYXQgYWxsIHRoZSBnaXZlbiBkYXRlcyBhcmUgaW52YWxpZCwgd2hpY2ggaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIHBhc3NpbmdcbiAgICogbm8gZGF0ZXMsIHRoZSBtZXRob2QgY29uc2lkZXJzIGl0IGFzIGFuIGVycm9yIGFuZCBsZWF2ZXMgdGhlIHNlbGVjdGlvblxuICAgKiB1bnRvdWNoZWQuIChUaGUgaW5wdXQgZmllbGQgYWxzbyByZW1haW5zIHVudG91Y2hlZCB1bmxlc3MgcmV2ZXJ0OiB0cnVlXG4gICAqIG9wdGlvbiBpcyB1c2VkLilcbiAgICpcbiAgICogQHBhcmFtIHsuLi4oRGF0ZXxOdW1iZXJ8U3RyaW5nKXxBcnJheX0gW2RhdGVzXSAtIERhdGUgc3RyaW5ncywgRGF0ZVxuICAgKiBvYmplY3RzLCB0aW1lIHZhbHVlcyBvciBtaXggb2YgdGhvc2UgZm9yIG5ldyBzZWxlY3Rpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSBjbGVhcjoge2Jvb2xlYW59IC0gV2hldGhlciB0byBjbGVhciB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uXG4gICAqICAgICBkZWZ1YWx0OiBmYWxzZVxuICAgKiAtIHJlbmRlcjoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZS1yZW5kZXIgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqICAgICBkZWZhdWx0OiB0cnVlXG4gICAqIC0gYXV0b2hpZGU6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gaGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgYWZ0ZXIgcmUtcmVuZGVyXG4gICAqICAgICBJZ25vcmVkIHdoZW4gdXNlZCB3aXRoIHJlbmRlcjogZmFsc2VcbiAgICogICAgIGRlZmF1bHQ6IGNvbmZpZy5hdXRvaGlkZVxuICAgKiAtIHJldmVydDoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZWZyZXNoIHRoZSBpbnB1dCBmaWVsZCB3aGVuIGFsbCB0aGVcbiAgICogICAgIHBhc3NlZCBkYXRlcyBhcmUgaW52YWxpZFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHNldERhdGUoLi4uYXJncykge1xuICAgIGNvbnN0IGRhdGVzID0gWy4uLmFyZ3NdO1xuICAgIGNvbnN0IG9wdHMgPSB7fTtcbiAgICBjb25zdCBsYXN0QXJnID0gbGFzdEl0ZW1PZihhcmdzKTtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbGFzdEFyZyA9PT0gJ29iamVjdCdcbiAgICAgICYmICFBcnJheS5pc0FycmF5KGxhc3RBcmcpXG4gICAgICAmJiAhKGxhc3RBcmcgaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgJiYgbGFzdEFyZ1xuICAgICkge1xuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLCBkYXRlcy5wb3AoKSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5wdXREYXRlcyA9IEFycmF5LmlzQXJyYXkoZGF0ZXNbMF0pID8gZGF0ZXNbMF0gOiBkYXRlcztcbiAgICBzZXREYXRlKHRoaXMsIGlucHV0RGF0ZXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgZGF0ZShzKSB3aXRoIGlucHV0IGZpZWxkJ3MgdmFsdWVcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyXG4gICAqXG4gICAqIFRoZSBpbnB1dCBmaWVsZCB3aWxsIGJlIHJlZnJlc2hlZCB3aXRoIHByb3Blcmx5IGZvcm1hdHRlZCBkYXRlIHN0cmluZy5cbiAgICpcbiAgICogSW4gdGhlIGNhc2UgdGhhdCBhbGwgdGhlIGVudGVyZWQgZGF0ZXMgYXJlIGludmFsaWQgKHVucGFyc2FibGUsIHJlcGVhdGVkLFxuICAgKiBkaXNhYmxlZCBvciBvdXQtb2YtcmFuZ2UpLCB3aGl4aCBpcyBkaXN0aW5ndWlzaGVkIGZyb20gZW1wdHkgaW5wdXQgZmllbGQsXG4gICAqIHRoZSBtZXRob2QgbGVhdmVzIHRoZSBpbnB1dCBmaWVsZCB1bnRvdWNoZWQgYXMgd2VsbCBhcyB0aGUgc2VsZWN0aW9uIGJ5XG4gICAqIGRlZmF1bHQuIElmIHJldmVydDogdHJ1ZSBvcHRpb24gaXMgdXNlZCBpbiB0aGlzIGNhc2UsIHRoZSBpbnB1dCBmaWVsZCBpc1xuICAgKiByZWZyZXNoZWQgd2l0aCB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSBhdXRvaGlkZToge2Jvb2xlYW59IC0gd2hldGhlciB0byBoaWRlIHRoZSBwaWNrZXIgZWxlbWVudCBhZnRlciByZWZyZXNoXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKiAtIHJldmVydDoge2Jvb2xlYW59IC0gV2hldGhlciB0byByZWZyZXNoIHRoZSBpbnB1dCBmaWVsZCB3aGVuIGFsbCB0aGVcbiAgICogICAgIHBhc3NlZCBkYXRlcyBhcmUgaW52YWxpZFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHVwZGF0ZShvcHRpb25zID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuaW5saW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucyB8fCB7fSwge2NsZWFyOiB0cnVlLCByZW5kZXI6IHRydWV9KTtcbiAgICBjb25zdCBpbnB1dERhdGVzID0gc3RyaW5nVG9BcnJheSh0aGlzLmlucHV0RmllbGQudmFsdWUsIHRoaXMuY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xuICAgIHNldERhdGUodGhpcywgaW5wdXREYXRlcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgcGlja2VyIGVsZW1lbnQgYW5kIHRoZSBhc3NvY2lhdGVkIGlucHV0IGZpZWxkXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbdGFyZ2V0XSAtIHRhcmdldCBpdGVtIHdoZW4gcmVmcmVzaGluZyBvbmUgaXRlbSBvbmx5XG4gICAqICdwaWNrZXInIG9yICdpbnB1dCdcbiAgICogQHBhcmFtIHtCb29sZWFufSBbZm9yY2VSZW5kZXJdIC0gd2hldGhlciB0byByZS1yZW5kZXIgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqIHJlZ2FyZGxlc3Mgb2YgaXRzIHN0YXRlIGluc3RlYWQgb2Ygb3B0aW1pemVkIHJlZnJlc2hcbiAgICovXG4gIHJlZnJlc2godGFyZ2V0ID0gdW5kZWZpbmVkLCBmb3JjZVJlbmRlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykge1xuICAgICAgZm9yY2VSZW5kZXIgPSB0YXJnZXQ7XG4gICAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IG1vZGU7XG4gICAgaWYgKHRhcmdldCA9PT0gJ3BpY2tlcicpIHtcbiAgICAgIG1vZGUgPSAyO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnaW5wdXQnKSB7XG4gICAgICBtb2RlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kZSA9IDM7XG4gICAgfVxuICAgIHJlZnJlc2hVSSh0aGlzLCBtb2RlLCAhZm9yY2VSZW5kZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVudGVyIGVkaXQgbW9kZVxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXIgb3Igd2hlbiB0aGUgcGlja2VyIGVsZW1lbnQgaXMgaGlkZGVuXG4gICAqL1xuICBlbnRlckVkaXRNb2RlKCkge1xuICAgIGlmICh0aGlzLmlubGluZSB8fCAhdGhpcy5waWNrZXIuYWN0aXZlIHx8IHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lZGl0TW9kZSA9IHRydWU7XG4gICAgdGhpcy5pbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2luLWVkaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGl0IGZyb20gZWRpdCBtb2RlXG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGZ1bmN0aW9uIG9wdGlvbnNcbiAgICogLSB1cGRhdGU6IHtib29sZWFufSAtIHdoZXRoZXIgdG8gY2FsbCB1cGRhdGUoKSBhZnRlciBleGl0aW5nXG4gICAqICAgICBJZiBmYWxzZSwgaW5wdXQgZmllbGQgaXMgcmV2ZXJ0IHRvIHRoZSBleGlzdGluZyBzZWxlY3Rpb25cbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBleGl0RWRpdE1vZGUob3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmlubGluZSB8fCAhdGhpcy5lZGl0TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7dXBkYXRlOiBmYWxzZX0sIG9wdGlvbnMpO1xuICAgIGRlbGV0ZSB0aGlzLmVkaXRNb2RlO1xuICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdpbi1lZGl0Jyk7XG4gICAgaWYgKG9wdHMudXBkYXRlKSB7XG4gICAgICB0aGlzLnVwZGF0ZShvcHRzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7bGltaXRUb1JhbmdlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHthZGRNb250aHMsIGFkZFllYXJzfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KGRhdGVwaWNrZXIsIHR5cGUpIHtcbiAgY29uc3QgZGV0YWlsID0ge1xuICAgIGRhdGU6IGRhdGVwaWNrZXIuZ2V0RGF0ZSgpLFxuICAgIHZpZXdEYXRlOiBuZXcgRGF0ZShkYXRlcGlja2VyLnBpY2tlci52aWV3RGF0ZSksXG4gICAgdmlld0lkOiBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50Vmlldy5pZCxcbiAgICBkYXRlcGlja2VyLFxuICB9O1xuICBkYXRlcGlja2VyLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQodHlwZSwge2RldGFpbH0pKTtcbn1cblxuLy8gZGlyZWN0aW9uOiAtMSAodG8gcHJldmlvdXMpLCAxICh0byBuZXh0KVxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIGRpcmVjdGlvbikge1xuICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSBkYXRlcGlja2VyLmNvbmZpZztcbiAgY29uc3Qge2N1cnJlbnRWaWV3LCB2aWV3RGF0ZX0gPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgbGV0IG5ld1ZpZXdEYXRlO1xuICBzd2l0Y2ggKGN1cnJlbnRWaWV3LmlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgbmV3Vmlld0RhdGUgPSBhZGRNb250aHModmlld0RhdGUsIGRpcmVjdGlvbik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBuZXdWaWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG5ld1ZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbiAqIGN1cnJlbnRWaWV3Lm5hdlN0ZXApO1xuICB9XG4gIG5ld1ZpZXdEYXRlID0gbGltaXRUb1JhbmdlKG5ld1ZpZXdEYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgZGF0ZXBpY2tlci5waWNrZXIuY2hhbmdlRm9jdXMobmV3Vmlld0RhdGUpLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoVmlldyhkYXRlcGlja2VyKSB7XG4gIGNvbnN0IHZpZXdJZCA9IGRhdGVwaWNrZXIucGlja2VyLmN1cnJlbnRWaWV3LmlkO1xuICBpZiAodmlld0lkID09PSBkYXRlcGlja2VyLmNvbmZpZy5tYXhWaWV3KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRhdGVwaWNrZXIucGlja2VyLmNoYW5nZVZpZXcodmlld0lkICsgMSkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmZvY3VzKGRhdGVwaWNrZXIpIHtcbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnVwZGF0ZU9uQmx1cikge1xuICAgIGRhdGVwaWNrZXIudXBkYXRlKHtyZXZlcnQ6IHRydWV9KTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlcGlja2VyLnJlZnJlc2goJ2lucHV0Jyk7XG4gIH1cbiAgZGF0ZXBpY2tlci5oaWRlKCk7XG59XG4iLCJpbXBvcnQge2lzSW5SYW5nZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7aXNBY3RpdmVFbGVtZW50fSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCB7YWRkRGF5cywgYWRkTW9udGhzLCBhZGRZZWFycywgc3RhcnRPZlllYXJQZXJpb2R9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7Z29Ub1ByZXZPck5leHQsIHN3aXRjaFZpZXcsIHVuZm9jdXN9IGZyb20gJy4vZnVuY3Rpb25zLmpzJztcblxuLy8gRmluZCB0aGUgY2xvc2VzdCBkYXRlIHRoYXQgZG9lc24ndCBtZWV0IHRoZSBjb25kaXRpb24gZm9yIHVuYXZhaWxhYmxlIGRhdGVcbi8vIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vIGF2YWlsYWJsZSBkYXRlIGlzIGZvdW5kXG4vLyBhZGRGbjogZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBuZXh0IGRhdGVcbi8vICAgLSBhcmdzOiB0aW1lIHZhbHVlLCBhbW91bnRcbi8vIGluY3JlYXNlOiBhbW91bnQgdG8gcGFzcyB0byBhZGRGblxuLy8gdGVzdEZuOiBmdW5jdGlvbiB0byB0ZXN0IHRoZSB1bmF2YWlsYWJsaXR5IG9mIHRoZSBkYXRlXG4vLyAgIC0gYXJnczogdGltZSB2YWx1ZTsgcmV0dW46IHRydWUgaWYgdW5hdmFpbGFibGVcbmZ1bmN0aW9uIGZpbmROZXh0QXZhaWxhYmxlT25lKGRhdGUsIGFkZEZuLCBpbmNyZWFzZSwgdGVzdEZuLCBtaW4sIG1heCkge1xuICBpZiAoIWlzSW5SYW5nZShkYXRlLCBtaW4sIG1heCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHRlc3RGbihkYXRlKSkge1xuICAgIGNvbnN0IG5ld0RhdGUgPSBhZGRGbihkYXRlLCBpbmNyZWFzZSk7XG4gICAgcmV0dXJuIGZpbmROZXh0QXZhaWxhYmxlT25lKG5ld0RhdGUsIGFkZEZuLCBpbmNyZWFzZSwgdGVzdEZuLCBtaW4sIG1heCk7XG4gIH1cbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIGRpcmVjdGlvbjogLTEgKGxlZnQvdXApLCAxIChyaWdodC9kb3duKVxuLy8gdmVydGljYWw6IHRydWUgZm9yIHVwL2Rvd24sIGZhbHNlIGZvciBsZWZ0L3JpZ2h0XG5mdW5jdGlvbiBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgZGlyZWN0aW9uLCB2ZXJ0aWNhbCkge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3QgY3VycmVudFZpZXcgPSBwaWNrZXIuY3VycmVudFZpZXc7XG4gIGNvbnN0IHN0ZXAgPSBjdXJyZW50Vmlldy5zdGVwIHx8IDE7XG4gIGxldCB2aWV3RGF0ZSA9IHBpY2tlci52aWV3RGF0ZTtcbiAgbGV0IGFkZEZuO1xuICBsZXQgdGVzdEZuO1xuICBzd2l0Y2ggKGN1cnJlbnRWaWV3LmlkKSB7XG4gICAgY2FzZSAwOlxuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIHZpZXdEYXRlID0gYWRkRGF5cyh2aWV3RGF0ZSwgZGlyZWN0aW9uICogNyk7XG4gICAgICB9IGVsc2UgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICB2aWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlld0RhdGUgPSBhZGREYXlzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgICAgYWRkRm4gPSBhZGREYXlzO1xuICAgICAgdGVzdEZuID0gKGRhdGUpID0+IGN1cnJlbnRWaWV3LmRpc2FibGVkLmluY2x1ZGVzKGRhdGUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgdmlld0RhdGUgPSBhZGRNb250aHModmlld0RhdGUsIHZlcnRpY2FsID8gZGlyZWN0aW9uICogNCA6IGRpcmVjdGlvbik7XG4gICAgICBhZGRGbiA9IGFkZE1vbnRocztcbiAgICAgIHRlc3RGbiA9IChkYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIGNvbnN0IHt5ZWFyLCBkaXNhYmxlZH0gPSBjdXJyZW50VmlldztcbiAgICAgICAgcmV0dXJuIGR0LmdldEZ1bGxZZWFyKCkgPT09IHllYXIgJiYgZGlzYWJsZWQuaW5jbHVkZXMoZHQuZ2V0TW9udGgoKSk7XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZpZXdEYXRlID0gYWRkWWVhcnModmlld0RhdGUsIGRpcmVjdGlvbiAqICh2ZXJ0aWNhbCA/IDQgOiAxKSAqIHN0ZXApO1xuICAgICAgYWRkRm4gPSBhZGRZZWFycztcbiAgICAgIHRlc3RGbiA9IGRhdGUgPT4gY3VycmVudFZpZXcuZGlzYWJsZWQuaW5jbHVkZXMoc3RhcnRPZlllYXJQZXJpb2QoZGF0ZSwgc3RlcCkpO1xuICB9XG4gIHZpZXdEYXRlID0gZmluZE5leHRBdmFpbGFibGVPbmUoXG4gICAgdmlld0RhdGUsXG4gICAgYWRkRm4sXG4gICAgZGlyZWN0aW9uIDwgMCA/IC1zdGVwIDogc3RlcCxcbiAgICB0ZXN0Rm4sXG4gICAgY3VycmVudFZpZXcubWluRGF0ZSxcbiAgICBjdXJyZW50Vmlldy5tYXhEYXRlXG4gICk7XG4gIGlmICh2aWV3RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGlja2VyLmNoYW5nZUZvY3VzKHZpZXdEYXRlKS5yZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25LZXlkb3duKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGtleSA9IGV2LmtleTtcbiAgaWYgKGtleSA9PT0gJ1RhYicpIHtcbiAgICB1bmZvY3VzKGRhdGVwaWNrZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCB7aWQsIGlzTWluVmlld30gPSBwaWNrZXIuY3VycmVudFZpZXc7XG4gIGlmICghcGlja2VyLmFjdGl2ZSkge1xuICAgIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBwaWNrZXIuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGRhdGVwaWNrZXIudXBkYXRlKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgcGlja2VyLnNob3coKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZGF0ZXBpY2tlci5lZGl0TW9kZSkge1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGRhdGVwaWNrZXIuZXhpdEVkaXRNb2RlKHt1cGRhdGU6IHRydWUsIGF1dG9oaWRlOiBkYXRlcGlja2VyLmNvbmZpZy5hdXRvaGlkZX0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgcGlja2VyLmhpZGUoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIC0xKTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAtMSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgMSk7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgMSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgc3dpdGNoVmlldyhkYXRlcGlja2VyKTtcbiAgICAgIH0gZWxzZSBpZiAoZXYuc2hpZnRLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAtMSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBpZiAoZXYuc2hpZnRLZXkgJiYgIWV2LmN0cmxLZXkgJiYgIWV2Lm1ldGFLZXkpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1vdmVCeUFycm93S2V5KGRhdGVwaWNrZXIsIGV2LCAxLCB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKGlzTWluVmlldykge1xuICAgICAgICBkYXRlcGlja2VyLnNldERhdGUocGlja2VyLnZpZXdEYXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGlja2VyLmNoYW5nZVZpZXcoaWQgLSAxKS5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgcGlja2VyLmhpZGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ0JhY2tzcGFjZSdcbiAgICAgICAgfHwga2V5ID09PSAnRGVsZXRlJ1xuICAgICAgICB8fCAoa2V5Lmxlbmd0aCA9PT0gMSAmJiAhZXYuY3RybEtleSAmJiAhZXYubWV0YUtleSlcbiAgICAgICkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRm9jdXMoZGF0ZXBpY2tlcikge1xuICBpZiAoZGF0ZXBpY2tlci5jb25maWcuc2hvd09uRm9jdXMgJiYgIWRhdGVwaWNrZXIuX3Nob3dpbmcpIHtcbiAgICBkYXRlcGlja2VyLnNob3coKTtcbiAgfVxufVxuXG4vLyBmb3IgdGhlIHByZXZlbnRpb24gZm9yIGVudGVyaW5nIGVkaXQgbW9kZSB3aGlsZSBnZXR0aW5nIGZvY3VzIG9uIGNsaWNrXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZWRvd24oZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3QgZWwgPSBldi50YXJnZXQ7XG4gIGlmIChkYXRlcGlja2VyLnBpY2tlci5hY3RpdmUgfHwgZGF0ZXBpY2tlci5jb25maWcuc2hvd09uQ2xpY2spIHtcbiAgICBlbC5fYWN0aXZlID0gaXNBY3RpdmVFbGVtZW50KGVsKTtcbiAgICBlbC5fY2xpY2tpbmcgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRlbGV0ZSBlbC5fYWN0aXZlO1xuICAgICAgZGVsZXRlIGVsLl9jbGlja2luZztcbiAgICB9LCAyMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja0lucHV0KGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGVsID0gZXYudGFyZ2V0O1xuICBpZiAoIWVsLl9jbGlja2luZykge1xuICAgIHJldHVybjtcbiAgfVxuICBjbGVhclRpbWVvdXQoZWwuX2NsaWNraW5nKTtcbiAgZGVsZXRlIGVsLl9jbGlja2luZztcblxuICBpZiAoZWwuX2FjdGl2ZSkge1xuICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICB9XG4gIGRlbGV0ZSBlbC5fYWN0aXZlO1xuXG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy5zaG93T25DbGljaykge1xuICAgIGRhdGVwaWNrZXIuc2hvdygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblBhc3RlKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGlmIChldi5jbGlwYm9hcmREYXRhLnR5cGVzLmluY2x1ZGVzKCd0ZXh0L3BsYWluJykpIHtcbiAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtpc0FjdGl2ZUVsZW1lbnR9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IHtmaW5kRWxlbWVudEluRXZlbnRQYXRofSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHt1bmZvY3VzfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbi8vIGZvciB0aGUgYGRvY3VtZW50YCB0byBkZWxlZ2F0ZSB0aGUgZXZlbnRzIGZyb20gb3V0c2lkZSB0aGUgcGlja2VyL2lucHV0IGZpZWxkXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja091dHNpZGUoZGF0ZXBpY2tlciwgZXYpIHtcbiAgY29uc3Qge2VsZW1lbnQsIHBpY2tlcn0gPSBkYXRlcGlja2VyO1xuICAvLyBjaGVjayBib3RoIHBpY2tlcidzIGFuZCBpbnB1dCdzIGFjdGl2ZW5lc3MgdG8gbWFrZSB1cGRhdGVPbkJsdXIgd29yayBpblxuICAvLyB0aGUgY2FzZXMgd2hlcmUuLi5cbiAgLy8gLSBwaWNrZXIgaXMgaGlkZGVuIGJ5IEVTQyBrZXkgcHJlc3Mg4oaSIGlucHV0IHN0YXlzIGZvY3VzZWRcbiAgLy8gLSBpbnB1dCBpcyB1bmZvY3VzZWQgYnkgY2xvc2luZyBtb2JpbGUga2V5Ym9hcmQg4oaSIHBpa2VyIGlzIGtlcHQgc2hvd25cbiAgaWYgKCFwaWNrZXIuYWN0aXZlICYmICFpc0FjdGl2ZUVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGlja2VyRWxlbSA9IHBpY2tlci5lbGVtZW50O1xuICBpZiAoZmluZEVsZW1lbnRJbkV2ZW50UGF0aChldiwgZWwgPT4gZWwgPT09IGVsZW1lbnQgfHwgZWwgPT09IHBpY2tlckVsZW0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHVuZm9jdXMoZGF0ZXBpY2tlcik7XG59XG4iLCJpbXBvcnQge3RvZGF5LCBhZGRNb250aHMsIGFkZFllYXJzfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge2ZpbmRFbGVtZW50SW5FdmVudFBhdGh9IGZyb20gJy4uL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge2dvVG9QcmV2T3JOZXh0LCBzd2l0Y2hWaWV3fSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbmZ1bmN0aW9uIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIHNlbGVjdGlvbikge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZShwaWNrZXIudmlld0RhdGUpO1xuICBjb25zdCB2aWV3SWQgPSBwaWNrZXIuY3VycmVudFZpZXcuaWQ7XG4gIGNvbnN0IG5ld0RhdGUgPSB2aWV3SWQgPT09IDFcbiAgICA/IGFkZE1vbnRocyh2aWV3RGF0ZSwgc2VsZWN0aW9uIC0gdmlld0RhdGUuZ2V0TW9udGgoKSlcbiAgICA6IGFkZFllYXJzKHZpZXdEYXRlLCBzZWxlY3Rpb24gLSB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuICBwaWNrZXIuY2hhbmdlRm9jdXMobmV3RGF0ZSkuY2hhbmdlVmlldyh2aWV3SWQgLSAxKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tUb2RheUJ0bihkYXRlcGlja2VyKSB7XG4gIGNvbnN0IHBpY2tlciA9IGRhdGVwaWNrZXIucGlja2VyO1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IHRvZGF5KCk7XG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy50b2RheUJ0bk1vZGUgPT09IDEpIHtcbiAgICBpZiAoZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGUpIHtcbiAgICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShjdXJyZW50RGF0ZSwge3JlbmRlcjogZmFsc2V9KTtcbiAgICBwaWNrZXIudXBkYXRlKCk7XG4gIH1cbiAgaWYgKHBpY2tlci52aWV3RGF0ZSAhPT0gY3VycmVudERhdGUpIHtcbiAgICBwaWNrZXIuY2hhbmdlRm9jdXMoY3VycmVudERhdGUpO1xuICB9XG4gIHBpY2tlci5jaGFuZ2VWaWV3KDApLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja0NsZWFyQnRuKGRhdGVwaWNrZXIpIHtcbiAgZGF0ZXBpY2tlci5zZXREYXRlKHtjbGVhcjogdHJ1ZX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1ZpZXdTd2l0Y2goZGF0ZXBpY2tlcikge1xuICBzd2l0Y2hWaWV3KGRhdGVwaWNrZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja1ByZXZCdG4oZGF0ZXBpY2tlcikge1xuICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAtMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrTmV4dEJ0bihkYXRlcGlja2VyKSB7XG4gIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIDEpO1xufVxuXG4vLyBGb3IgdGhlIHBpY2tlcidzIG1haW4gYmxvY2sgdG8gZGVsZWdldGUgdGhlIGV2ZW50cyBmcm9tIGBkYXRlcGlja2VyLWNlbGxgc1xuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tWaWV3KGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsICcuZGF0ZXBpY2tlci1jZWxsJyk7XG4gIGlmICghdGFyZ2V0IHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7aWQsIGlzTWluVmlld30gPSBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50VmlldztcbiAgaWYgKGlzTWluVmlldykge1xuICAgIGRhdGVwaWNrZXIuc2V0RGF0ZShOdW1iZXIodGFyZ2V0LmRhdGFzZXQuZGF0ZSkpO1xuICB9IGVsc2UgaWYgKGlkID09PSAxKSB7XG4gICAgZ29Ub1NlbGVjdGVkTW9udGhPclllYXIoZGF0ZXBpY2tlciwgTnVtYmVyKHRhcmdldC5kYXRhc2V0Lm1vbnRoKSk7XG4gIH0gZWxzZSB7XG4gICAgZ29Ub1NlbGVjdGVkTW9udGhPclllYXIoZGF0ZXBpY2tlciwgTnVtYmVyKHRhcmdldC5kYXRhc2V0LnllYXIpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZWRvd25QaWNrZXIoZXYpIHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cbiIsIi8vIGRlZmF1bHQgbG9jYWxlc1xuZXhwb3J0IGNvbnN0IGxvY2FsZXMgPSB7XG4gIGVuOiB7XG4gICAgZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXG4gICAgZGF5c1Nob3J0OiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG4gICAgZGF5c01pbjogW1wiU3VcIiwgXCJNb1wiLCBcIlR1XCIsIFwiV2VcIiwgXCJUaFwiLCBcIkZyXCIsIFwiU2FcIl0sXG4gICAgbW9udGhzOiBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcbiAgICBtb250aHNTaG9ydDogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgIHRvZGF5OiBcIlRvZGF5XCIsXG4gICAgY2xlYXI6IFwiQ2xlYXJcIixcbiAgICB0aXRsZUZvcm1hdDogXCJNTSB5XCJcbiAgfVxufTtcbiIsImltcG9ydCB7c3RyaXBUaW1lLCB0b2RheX0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7bGFzdEl0ZW1PZn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbi8vIHBhdHRlcm4gZm9yIGZvcm1hdCBwYXJ0c1xuZXhwb3J0IGNvbnN0IHJlRm9ybWF0VG9rZW5zID0gL2RkP3xERD98bW0/fE1NP3x5eT8oPzp5eSk/Lztcbi8vIHBhdHRlcm4gZm9yIG5vbiBkYXRlIHBhcnRzXG5leHBvcnQgY29uc3QgcmVOb25EYXRlUGFydHMgPSAvW1xccyEtLzotQFstYHstfuW5tOaciOaXpV0rLztcbi8vIGNhY2hlIGZvciBwZXJzZWQgZm9ybWF0c1xubGV0IGtub3duRm9ybWF0cyA9IHt9O1xuLy8gcGFyc2UgZnVudGlvbnMgZm9yIGRhdGUgcGFydHNcbmNvbnN0IHBhcnNlRm5zID0ge1xuICB5KGRhdGUsIHllYXIpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkuc2V0RnVsbFllYXIocGFyc2VJbnQoeWVhciwgMTApKTtcbiAgfSxcbiAgbShkYXRlLCBtb250aCwgbG9jYWxlKSB7XG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGxldCBtb250aEluZGV4ID0gcGFyc2VJbnQobW9udGgsIDEwKSAtIDE7XG5cbiAgICBpZiAoaXNOYU4obW9udGhJbmRleCkpIHtcbiAgICAgIGlmICghbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9udGhOYW1lID0gbW9udGgudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGNvbXBhcmVOYW1lcyA9IG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgobW9udGhOYW1lKTtcbiAgICAgIC8vIGNvbXBhcmUgd2l0aCBib3RoIHNob3J0IGFuZCBmdWxsIG5hbWVzIGJlY2F1c2Ugc29tZSBsb2NhbGVzIGhhdmUgcGVyaW9kc1xuICAgICAgLy8gaW4gdGhlIHNob3J0IG5hbWVzIChub3QgZXF1YWwgdG8gdGhlIGZpcnN0IFggbGV0dGVycyBvZiB0aGUgZnVsbCBuYW1lcylcbiAgICAgIG1vbnRoSW5kZXggPSBsb2NhbGUubW9udGhzU2hvcnQuZmluZEluZGV4KGNvbXBhcmVOYW1lcyk7XG4gICAgICBpZiAobW9udGhJbmRleCA8IDApIHtcbiAgICAgICAgbW9udGhJbmRleCA9IGxvY2FsZS5tb250aHMuZmluZEluZGV4KGNvbXBhcmVOYW1lcyk7XG4gICAgICB9XG4gICAgICBpZiAobW9udGhJbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdEYXRlLnNldE1vbnRoKG1vbnRoSW5kZXgpO1xuICAgIHJldHVybiBuZXdEYXRlLmdldE1vbnRoKCkgIT09IG5vcm1hbGl6ZU1vbnRoKG1vbnRoSW5kZXgpXG4gICAgICA/IG5ld0RhdGUuc2V0RGF0ZSgwKVxuICAgICAgOiBuZXdEYXRlLmdldFRpbWUoKTtcbiAgfSxcbiAgZChkYXRlLCBkYXkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkuc2V0RGF0ZShwYXJzZUludChkYXksIDEwKSk7XG4gIH0sXG59O1xuLy8gZm9ybWF0IGZ1bmN0aW9ucyBmb3IgZGF0ZSBwYXJ0c1xuY29uc3QgZm9ybWF0Rm5zID0ge1xuICBkKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG4gIH0sXG4gIGRkKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldERhdGUoKSwgMik7XG4gIH0sXG4gIEQoZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5kYXlzU2hvcnRbZGF0ZS5nZXREYXkoKV07XG4gIH0sXG4gIEREKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5c1tkYXRlLmdldERheSgpXTtcbiAgfSxcbiAgbShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gIH0sXG4gIG1tKGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxLCAyKTtcbiAgfSxcbiAgTShkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0W2RhdGUuZ2V0TW9udGgoKV07XG4gIH0sXG4gIE1NKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUubW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gIH0sXG4gIHkoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH0sXG4gIHl5KGRhdGUpIHtcbiAgICByZXR1cm4gcGFkWmVybyhkYXRlLmdldEZ1bGxZZWFyKCksIDIpLnNsaWNlKC0yKTtcbiAgfSxcbiAgeXl5eShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRGdWxsWWVhcigpLCA0KTtcbiAgfSxcbn07XG5cbi8vIGdldCBtb250aCBpbmRleCBpbiBub3JtYWwgcmFuZ2UgKDAgLSAxMSkgZnJvbSBhbnkgbnVtYmVyXG5mdW5jdGlvbiBub3JtYWxpemVNb250aChtb250aEluZGV4KSB7XG4gIHJldHVybiBtb250aEluZGV4ID4gLTEgPyBtb250aEluZGV4ICUgMTIgOiBub3JtYWxpemVNb250aChtb250aEluZGV4ICsgMTIpO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvKG51bSwgbGVuZ3RoKSB7XG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5wYWRTdGFydChsZW5ndGgsICcwJyk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkge1xuICBpZiAodHlwZW9mIGZvcm1hdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcbiAgfVxuICBpZiAoZm9ybWF0IGluIGtub3duRm9ybWF0cykge1xuICAgIHJldHVybiBrbm93bkZvcm1hdHNbZm9ybWF0XTtcbiAgfVxuXG4gIC8vIHNwcml0IHRoZSBmb3JtYXQgc3RyaW5nIGludG8gcGFydHMgYW5kIHNlcHJhdG9yc1xuICBjb25zdCBzZXBhcmF0b3JzID0gZm9ybWF0LnNwbGl0KHJlRm9ybWF0VG9rZW5zKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXQubWF0Y2gobmV3IFJlZ0V4cChyZUZvcm1hdFRva2VucywgJ2cnKSk7XG4gIGlmIChzZXBhcmF0b3JzLmxlbmd0aCA9PT0gMCB8fCAhcGFydHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtcbiAgfVxuXG4gIC8vIGNvbGxlY3QgZm9ybWF0IGZ1bmN0aW9ucyB1c2VkIGluIHRoZSBmb3JtYXRcbiAgY29uc3QgcGFydEZvcm1hdHRlcnMgPSBwYXJ0cy5tYXAodG9rZW4gPT4gZm9ybWF0Rm5zW3Rva2VuXSk7XG5cbiAgLy8gY29sbGVjdCBwYXJzZSBmdW5jdGlvbiBrZXlzIHVzZWQgaW4gdGhlIGZvcm1hdFxuICAvLyBpdGVyYXRlIG92ZXIgcGFyc2VGbnMnIGtleXMgaW4gb3JkZXIgdG8ga2VlcCB0aGUgb3JkZXIgb2YgdGhlIGtleXMuXG4gIGNvbnN0IHBhcnRQYXJzZXJLZXlzID0gT2JqZWN0LmtleXMocGFyc2VGbnMpLnJlZHVjZSgoa2V5cywga2V5KSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBwYXJ0cy5maW5kKHBhcnQgPT4gcGFydFswXSAhPT0gJ0QnICYmIHBhcnRbMF0udG9Mb3dlckNhc2UoKSA9PT0ga2V5KTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBrbm93bkZvcm1hdHNbZm9ybWF0XSA9IHtcbiAgICBwYXJzZXIoZGF0ZVN0ciwgbG9jYWxlKSB7XG4gICAgICBjb25zdCBkYXRlUGFydHMgPSBkYXRlU3RyLnNwbGl0KHJlTm9uRGF0ZVBhcnRzKS5yZWR1Y2UoKGR0UGFydHMsIHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChwYXJ0Lmxlbmd0aCA+IDAgJiYgcGFydHNbaW5kZXhdKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0c1tpbmRleF1bMF07XG4gICAgICAgICAgaWYgKHRva2VuID09PSAnTScpIHtcbiAgICAgICAgICAgIGR0UGFydHMubSA9IHBhcnQ7XG4gICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiAhPT0gJ0QnKSB7XG4gICAgICAgICAgICBkdFBhcnRzW3Rva2VuXSA9IHBhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdFBhcnRzO1xuICAgICAgfSwge30pO1xuXG4gICAgICAvLyBpdGVyYXRlIG92ZXIgcGFydFBhcnNlcmtleXMgc28gdGhhdCB0aGUgcGFyc2luZyBpcyBtYWRlIGluIHRoZSBvZGVyXG4gICAgICAvLyBvZiB5ZWFyLCBtb250aCBhbmQgZGF5IHRvIHByZXZlbnQgdGhlIGRheSBwYXJzZXIgZnJvbSBjb3JyZWN0aW5nIGxhc3RcbiAgICAgIC8vIGRheSBvZiBtb250aCB3cm9uZ2x5XG4gICAgICByZXR1cm4gcGFydFBhcnNlcktleXMucmVkdWNlKChvcmlnRGF0ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBwYXJzZUZuc1trZXldKG9yaWdEYXRlLCBkYXRlUGFydHNba2V5XSwgbG9jYWxlKTtcbiAgICAgICAgLy8gaW5nbm9yZSB0aGUgcGFydCBmYWlsZWQgdG8gcGFyc2VcbiAgICAgICAgcmV0dXJuIGlzTmFOKG5ld0RhdGUpID8gb3JpZ0RhdGUgOiBuZXdEYXRlO1xuICAgICAgfSwgdG9kYXkoKSk7XG4gICAgfSxcbiAgICBmb3JtYXR0ZXIoZGF0ZSwgbG9jYWxlKSB7XG4gICAgICBsZXQgZGF0ZVN0ciA9IHBhcnRGb3JtYXR0ZXJzLnJlZHVjZSgoc3RyLCBmbiwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBgJHtzZXBhcmF0b3JzW2luZGV4XX0ke2ZuKGRhdGUsIGxvY2FsZSl9YDtcbiAgICAgIH0sICcnKTtcbiAgICAgIC8vIHNlcGFyYXRvcnMnIGxlbmd0aCBpcyBhbHdheXMgcGFydHMnIGxlbmd0aCArIDEsXG4gICAgICByZXR1cm4gZGF0ZVN0ciArPSBsYXN0SXRlbU9mKHNlcGFyYXRvcnMpO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsb2NhbGUpIHtcbiAgaWYgKGRhdGVTdHIgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBkYXRlU3RyID09PSAnbnVtYmVyJykge1xuICAgIGNvbnN0IGRhdGUgPSBzdHJpcFRpbWUoZGF0ZVN0cik7XG4gICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogZGF0ZTtcbiAgfVxuICBpZiAoIWRhdGVTdHIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChkYXRlU3RyID09PSAndG9kYXknKSB7XG4gICAgcmV0dXJuIHRvZGF5KCk7XG4gIH1cblxuICBpZiAoZm9ybWF0ICYmIGZvcm1hdC50b1ZhbHVlKSB7XG4gICAgY29uc3QgZGF0ZSA9IGZvcm1hdC50b1ZhbHVlKGRhdGVTdHIsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICByZXR1cm4gaXNOYU4oZGF0ZSkgPyB1bmRlZmluZWQgOiBzdHJpcFRpbWUoZGF0ZSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KS5wYXJzZXIoZGF0ZVN0ciwgbG9jYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsb2NhbGUpIHtcbiAgaWYgKGlzTmFOKGRhdGUpIHx8ICghZGF0ZSAmJiBkYXRlICE9PSAwKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGNvbnN0IGRhdGVPYmogPSB0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgPyBuZXcgRGF0ZShkYXRlKSA6IGRhdGU7XG5cbiAgaWYgKGZvcm1hdC50b0Rpc3BsYXkpIHtcbiAgICByZXR1cm4gZm9ybWF0LnRvRGlzcGxheShkYXRlT2JqLCBmb3JtYXQsIGxvY2FsZSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VGb3JtYXRTdHJpbmcoZm9ybWF0KS5mb3JtYXR0ZXIoZGF0ZU9iaiwgbG9jYWxlKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzdHJpcFRpbWUodGltZVZhbHVlKSB7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lVmFsdWUpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXkoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG4vLyBHZXQgdGhlIHRpbWUgdmFsdWUgb2YgdGhlIHN0YXJ0IG9mIGdpdmVuIGRhdGUgb3IgeWVhciwgbW9udGggYW5kIGRheVxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVWYWx1ZSguLi5hcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gdG9kYXkoKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gc3RyaXBUaW1lKGFyZ3NbMF0pO1xuICB9XG5cbiAgLy8gdXNlIHNldEZ1bGxZZWFyKCkgdG8ga2VlcCAyLWRpZ2l0IHllYXIgZnJvbSBiZWluZyBtYXBwZWQgdG8gMTkwMC0xOTk5XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgbmV3RGF0ZS5zZXRGdWxsWWVhciguLi5hcmdzKTtcbiAgcmV0dXJuIG5ld0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIHJldHVybiBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkV2Vla3MoZGF0ZSwgYW1vdW50KSB7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGFtb3VudCAqIDcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9udGhzKGRhdGUsIGFtb3VudCkge1xuICAvLyBJZiB0aGUgZGF5IG9mIHRoZSBkYXRlIGlzIG5vdCBpbiB0aGUgbmV3IG1vbnRoLCB0aGUgbGFzdCBkYXkgb2YgdGhlIG5ld1xuICAvLyBtb250aCB3aWxsIGJlIHJldHVybmVkLiBlLmcuIEphbiAzMSArIDEgbW9udGgg4oaSIEZlYiAyOCAobm90IE1hciAwMylcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBtb250aHNUb1NldCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIGFtb3VudDtcbiAgbGV0IGV4cGVjdGVkTW9udGggPSBtb250aHNUb1NldCAlIDEyO1xuICBpZiAoZXhwZWN0ZWRNb250aCA8IDApIHtcbiAgICBleHBlY3RlZE1vbnRoICs9IDEyO1xuICB9XG5cbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuc2V0TW9udGgobW9udGhzVG9TZXQpO1xuICByZXR1cm4gbmV3RGF0ZS5nZXRNb250aCgpICE9PSBleHBlY3RlZE1vbnRoID8gbmV3RGF0ZS5zZXREYXRlKDApIDogdGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFllYXJzKGRhdGUsIGFtb3VudCkge1xuICAvLyBJZiB0aGUgZGF0ZSBpcyBGZWIgMjkgYW5kIHRoZSBuZXcgeWVhciBpcyBub3QgYSBsZWFwIHllYXIsIEZlYiAyOCBvZiB0aGVcbiAgLy8gbmV3IHllYXIgd2lsbCBiZSByZXR1cm5lZC5cbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBleHBlY3RlZE1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpO1xuICBjb25zdCB0aW1lID0gbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyBhbW91bnQpO1xuICByZXR1cm4gZXhwZWN0ZWRNb250aCA9PT0gMSAmJiBuZXdEYXRlLmdldE1vbnRoKCkgPT09IDIgPyBuZXdEYXRlLnNldERhdGUoMCkgOiB0aW1lO1xufVxuXG4vLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHR3ZW4gMiBkYXlzIG9mIHRoZSB3ZWVrXG5mdW5jdGlvbiBkYXlEaWZmKGRheSwgZnJvbSkge1xuICByZXR1cm4gKGRheSAtIGZyb20gKyA3KSAlIDc7XG59XG5cbi8vIEdldCB0aGUgZGF0ZSBvZiB0aGUgc3BlY2lmaWVkIGRheSBvZiB0aGUgd2VlayBvZiBnaXZlbiBiYXNlIGRhdGVcbmV4cG9ydCBmdW5jdGlvbiBkYXlPZlRoZVdlZWtPZihiYXNlRGF0ZSwgZGF5T2ZXZWVrLCB3ZWVrU3RhcnQgPSAwKSB7XG4gIGNvbnN0IGJhc2VEYXkgPSBuZXcgRGF0ZShiYXNlRGF0ZSkuZ2V0RGF5KCk7XG4gIHJldHVybiBhZGREYXlzKGJhc2VEYXRlLCBkYXlEaWZmKGRheU9mV2Vlaywgd2Vla1N0YXJ0KSAtIGRheURpZmYoYmFzZURheSwgd2Vla1N0YXJ0KSk7XG59XG5cbi8vIEdldCB0aGUgSVNPIHdlZWsgb2YgYSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlKSB7XG4gIC8vIHN0YXJ0IG9mIElTTyB3ZWVrIGlzIE1vbmRheVxuICBjb25zdCB0aHVPZlRoZVdlZWsgPSBkYXlPZlRoZVdlZWtPZihkYXRlLCA0LCAxKTtcbiAgLy8gMXN0IHdlZWsgPT0gdGhlIHdlZWsgd2hlcmUgdGhlIDR0aCBvZiBKYW51YXJ5IGlzIGluXG4gIGNvbnN0IGZpcnN0VGh1ID0gZGF5T2ZUaGVXZWVrT2YobmV3IERhdGUodGh1T2ZUaGVXZWVrKS5zZXRNb250aCgwLCA0KSwgNCwgMSk7XG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aHVPZlRoZVdlZWsgLSBmaXJzdFRodSkgLyA2MDQ4MDAwMDApICsgMTtcbn1cblxuLy8gR2V0IHRoZSBzdGFydCB5ZWFyIG9mIHRoZSBwZXJpb2Qgb2YgeWVhcnMgdGhhdCBpbmNsdWRlcyBnaXZlbiBkYXRlXG4vLyB5ZWFyczogbGVuZ3RoIG9mIHRoZSB5ZWFyIHBlcmlvZFxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZZZWFyUGVyaW9kKGRhdGUsIHllYXJzKSB7XG4gIC8qIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWWVhcl96ZXJvI0lTT184NjAxICovXG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gTWF0aC5mbG9vcih5ZWFyIC8geWVhcnMpICogeWVhcnM7XG59XG5cbi8vIENvbnZlcnQgZGF0ZSB0byB0aGUgZmlyc3QvbGFzdCBkYXRlIG9mIHRoZSBtb250aC95ZWFyIG9mIHRoZSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gcmVndWxhcml6ZURhdGUoZGF0ZSwgdGltZVNwYW4sIHVzZUxhc3REYXRlKSB7XG4gIGlmICh0aW1lU3BhbiAhPT0gMSAmJiB0aW1lU3BhbiAhPT0gMikge1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgaWYgKHRpbWVTcGFuID09PSAxKSB7XG4gICAgdXNlTGFzdERhdGVcbiAgICAgID8gbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyAxLCAwKVxuICAgICAgOiBuZXdEYXRlLnNldERhdGUoMSk7XG4gIH0gZWxzZSB7XG4gICAgdXNlTGFzdERhdGVcbiAgICAgID8gbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyAxLCAwLCAwKVxuICAgICAgOiBuZXdEYXRlLnNldE1vbnRoKDAsIDEpO1xuICB9XG4gIHJldHVybiBuZXdEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuIiwiY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIVE1MKGh0bWwpIHtcbiAgcmV0dXJuIHJhbmdlLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChodG1sKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudChlbCkge1xuICByZXR1cm4gZWwucGFyZW50RWxlbWVudFxuICAgIHx8IChlbC5wYXJlbnROb2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IGVsLnBhcmVudE5vZGUuaG9zdCA6IHVuZGVmaW5lZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FjdGl2ZUVsZW1lbnQoZWwpIHtcbiAgcmV0dXJuIGVsLmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gZWw7XG59XG5cbi8vIGVxdWl2YWxlbnQgdG8galF1ZXJ5J3MgOnZpc2JsZVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbCkge1xuICByZXR1cm4gISEoZWwub2Zmc2V0V2lkdGggfHwgZWwub2Zmc2V0SGVpZ2h0IHx8IGVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYmFjayB1cCB0aGUgZXhpc3RpbmcgZGlzcGxheSBzZXR0aW5nIGluIGRhdGEtc3R5bGUtZGlzcGxheVxuICBpZiAoZWwuc3R5bGUuZGlzcGxheSkge1xuICAgIGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5ID0gZWwuc3R5bGUuZGlzcGxheTtcbiAgfVxuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VsZW1lbnQoZWwpIHtcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWwuZGF0YXNldC5zdHlsZURpc3BsYXkpIHtcbiAgICAvLyByZXN0b3JlIGJhY2tlZC11cCBkaXNwYXkgcHJvcGVydHlcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuZGF0YXNldC5zdHlsZURpc3BsYXk7XG4gICAgZGVsZXRlIGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5O1xuICB9IGVsc2Uge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZW1wdHlDaGlsZE5vZGVzKGVsKSB7XG4gIGlmIChlbC5maXJzdENoaWxkKSB7XG4gICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gICAgZW1wdHlDaGlsZE5vZGVzKGVsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNoaWxkTm9kZXMoZWwsIG5ld0NoaWxkTm9kZXMpIHtcbiAgZW1wdHlDaGlsZE5vZGVzKGVsKTtcbiAgaWYgKG5ld0NoaWxkTm9kZXMgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQobmV3Q2hpbGROb2Rlcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5ld0NoaWxkTm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQocGFyc2VIVE1MKG5ld0NoaWxkTm9kZXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbmV3Q2hpbGROb2Rlcy5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbmV3Q2hpbGROb2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBlbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3QgbGlzdGVuZXJSZWdpc3RyeSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB7YWRkRXZlbnRMaXN0ZW5lciwgcmVtb3ZlRXZlbnRMaXN0ZW5lcn0gPSBFdmVudFRhcmdldC5wcm90b3R5cGU7XG5cbi8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyB0byBhIGtleSBvYmplY3Rcbi8vIGxpc3RlbmVyczogYXJyYXkgb2YgbGlzdGVuZXIgZGVmaW5pdGlvbnM7XG4vLyAgIC0gZWFjaCBkZWZpbml0aW9uIG11c3QgYmUgYSBmbGF0IGFycmF5IG9mIGV2ZW50IHRhcmdldCBhbmQgdGhlIGFyZ3VtZW50c1xuLy8gICAgIHVzZWQgdG8gY2FsbCBhZGRFdmVudExpc3RlbmVyKCkgb24gdGhlIHRhcmdldFxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXJzKGtleU9iaiwgbGlzdGVuZXJzKSB7XG4gIGxldCByZWdpc3RlcmVkID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQoa2V5T2JqKTtcbiAgaWYgKCFyZWdpc3RlcmVkKSB7XG4gICAgcmVnaXN0ZXJlZCA9IFtdO1xuICAgIGxpc3RlbmVyUmVnaXN0cnkuc2V0KGtleU9iaiwgcmVnaXN0ZXJlZCk7XG4gIH1cbiAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lci5jYWxsKC4uLmxpc3RlbmVyKTtcbiAgICByZWdpc3RlcmVkLnB1c2gobGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJMaXN0ZW5lcnMoa2V5T2JqKSB7XG4gIGxldCBsaXN0ZW5lcnMgPSBsaXN0ZW5lclJlZ2lzdHJ5LmdldChrZXlPYmopO1xuICBpZiAoIWxpc3RlbmVycykge1xuICAgIHJldHVybjtcbiAgfVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwoLi4ubGlzdGVuZXIpO1xuICB9KTtcbiAgbGlzdGVuZXJSZWdpc3RyeS5kZWxldGUoa2V5T2JqKTtcbn1cblxuLy8gRXZlbnQuY29tcG9zZWRQYXRoKCkgcG9seWZpbGwgZm9yIEVkZ2Vcbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2tsZWluZnJldW5kL2U5Nzg3ZDczNzc2YzBlMzc1MGRjZmNkYzg5ZjEwMGVjXG5pZiAoIUV2ZW50LnByb3RvdHlwZS5jb21wb3NlZFBhdGgpIHtcbiAgY29uc3QgZ2V0Q29tcG9zZWRQYXRoID0gKG5vZGUsIHBhdGggPSBbXSkgPT4ge1xuICAgIHBhdGgucHVzaChub2RlKTtcblxuICAgIGxldCBwYXJlbnQ7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSBpZiAobm9kZS5ob3N0KSB7IC8vIFNoYWRvd1Jvb3RcbiAgICAgIHBhcmVudCA9IG5vZGUuaG9zdDtcbiAgICB9IGVsc2UgaWYgKG5vZGUuZGVmYXVsdFZpZXcpIHsgIC8vIERvY3VtZW50XG4gICAgICBwYXJlbnQgPSBub2RlLmRlZmF1bHRWaWV3O1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50ID8gZ2V0Q29tcG9zZWRQYXRoKHBhcmVudCwgcGF0aCkgOiBwYXRoO1xuICB9O1xuXG4gIEV2ZW50LnByb3RvdHlwZS5jb21wb3NlZFBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldENvbXBvc2VkUGF0aCh0aGlzLnRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRGcm9tUGF0aChwYXRoLCBjcml0ZXJpYSwgY3VycmVudFRhcmdldCkge1xuICBjb25zdCBbbm9kZSwgLi4ucmVzdF0gPSBwYXRoO1xuICBpZiAoY3JpdGVyaWEobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBpZiAobm9kZSA9PT0gY3VycmVudFRhcmdldCB8fCBub2RlLnRhZ05hbWUgPT09ICdIVE1MJyB8fCByZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIHN0b3Agd2hlbiByZWFjaGluZyBjdXJyZW50VGFyZ2V0IG9yIDxodG1sPlxuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gZmluZEZyb21QYXRoKHJlc3QsIGNyaXRlcmlhLCBjdXJyZW50VGFyZ2V0KTtcbn1cblxuLy8gU2VhcmNoIGZvciB0aGUgYWN0dWFsIHRhcmdldCBvZiBhIGRlbGVnYXRlZCBldmVudFxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGNyaXRlcmlhID0gdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nXG4gICAgPyBzZWxlY3RvclxuICAgIDogZWwgPT4gZWwgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICByZXR1cm4gZmluZEZyb21QYXRoKGV2LmNvbXBvc2VkUGF0aCgpLCBjcml0ZXJpYSwgZXYuY3VycmVudFRhcmdldCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJdGVtT2YoYXJyKSB7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufVxuXG4vLyBwdXNoIG9ubHkgdGhlIGl0ZW1zIG5vdCBpbmNsdWRlZCBpbiB0aGUgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBwdXNoVW5pcXVlKGFyciwgLi4uaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXJyLnB1c2goaXRlbSk7XG4gIH0pO1xuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9BcnJheShzdHIsIHNlcGFyYXRvcikge1xuICAvLyBjb252ZXJ0IGVtcHR5IHN0cmluZyB0byBhbiBlbXB0eSBhcnJheVxuICByZXR1cm4gc3RyID8gc3RyLnNwbGl0KHNlcGFyYXRvcikgOiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5SYW5nZSh0ZXN0VmFsLCBtaW4sIG1heCkge1xuICBjb25zdCBtaW5PSyA9IG1pbiA9PT0gdW5kZWZpbmVkIHx8IHRlc3RWYWwgPj0gbWluO1xuICBjb25zdCBtYXhPSyA9IG1heCA9PT0gdW5kZWZpbmVkIHx8IHRlc3RWYWwgPD0gbWF4O1xuICByZXR1cm4gbWluT0sgJiYgbWF4T0s7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdFRvUmFuZ2UodmFsLCBtaW4sIG1heCkge1xuICBpZiAodmFsIDwgbWluKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuICBpZiAodmFsID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFnUmVwZWF0KHRhZ05hbWUsIHJlcGVhdCwgYXR0cmlidXRlcyA9IHt9LCBpbmRleCA9IDAsIGh0bWwgPSAnJykge1xuICBjb25zdCBvcGVuVGFnU3JjID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcykucmVkdWNlKChzcmMsIGF0dHIpID0+IHtcbiAgICBsZXQgdmFsID0gYXR0cmlidXRlc1thdHRyXTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsID0gdmFsKGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NyY30gJHthdHRyfT1cIiR7dmFsfVwiYDtcbiAgfSwgdGFnTmFtZSk7XG4gIGh0bWwgKz0gYDwke29wZW5UYWdTcmN9PjwvJHt0YWdOYW1lfT5gO1xuXG4gIGNvbnN0IG5leHQgPSBpbmRleCArIDE7XG4gIHJldHVybiBuZXh0IDwgcmVwZWF0XG4gICAgPyBjcmVhdGVUYWdSZXBlYXQodGFnTmFtZSwgcmVwZWF0LCBhdHRyaWJ1dGVzLCBuZXh0LCBodG1sKVxuICAgIDogaHRtbDtcbn1cblxuLy8gUmVtb3ZlIHRoZSBzcGFjaW5nIHN1cnJvdW5kaW5nIHRhZ3MgZm9yIEhUTUwgcGFyc2VyIG5vdCB0byBjcmVhdGUgdGV4dCBub2Rlc1xuLy8gYmVmb3JlL2FmdGVyIGVsZW1lbnRzXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVUZW1wbGF0ZUhUTUwoaHRtbCkge1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKC8+XFxzKy9nLCAnPicpLnJlcGxhY2UoL1xccys8LywgJzwnKTtcbn1cbiIsIi8vIGNvbmZpZyBvcHRpb25zIHVwZGF0YWJsZSBieSBzZXRPcHRpb25zKCkgYW5kIHRoZWlyIGRlZmF1bHQgdmFsdWVzXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgYXV0b2hpZGU6IGZhbHNlLFxuICBiZWZvcmVTaG93RGF5OiBudWxsLFxuICBiZWZvcmVTaG93RGVjYWRlOiBudWxsLFxuICBiZWZvcmVTaG93TW9udGg6IG51bGwsXG4gIGJlZm9yZVNob3dZZWFyOiBudWxsLFxuICBjYWxlbmRhcldlZWtzOiBmYWxzZSxcbiAgY2xlYXJCdG46IGZhbHNlLFxuICBkYXRlRGVsaW1pdGVyOiAnLCcsXG4gIGRhdGVzRGlzYWJsZWQ6IFtdLFxuICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IFtdLFxuICBkYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6IFtdLFxuICBkZWZhdWx0Vmlld0RhdGU6IHVuZGVmaW5lZCwgLy8gcGxhY2Vob2xkZXIsIGRlZmF1bHRzIHRvIHRvZGF5KCkgYnkgdGhlIHByb2dyYW1cbiAgZGlzYWJsZVRvdWNoS2V5Ym9hcmQ6IGZhbHNlLFxuICBmb3JtYXQ6ICdtbS9kZC95eXl5JyxcbiAgbGFuZ3VhZ2U6ICdlbicsXG4gIG1heERhdGU6IG51bGwsXG4gIG1heE51bWJlck9mRGF0ZXM6IDEsXG4gIG1heFZpZXc6IDMsXG4gIG1pbkRhdGU6IG51bGwsXG4gIG5leHRBcnJvdzogJ8K7JyxcbiAgb3JpZW50YXRpb246ICdhdXRvJyxcbiAgcGlja0xldmVsOiAwLFxuICBwcmV2QXJyb3c6ICfCqycsXG4gIHNob3dEYXlzT2ZXZWVrOiB0cnVlLFxuICBzaG93T25DbGljazogdHJ1ZSxcbiAgc2hvd09uRm9jdXM6IHRydWUsXG4gIHN0YXJ0VmlldzogMCxcbiAgdGl0bGU6ICcnLFxuICB0b2RheUJ0bjogZmFsc2UsXG4gIHRvZGF5QnRuTW9kZTogMCxcbiAgdG9kYXlIaWdobGlnaHQ6IGZhbHNlLFxuICB1cGRhdGVPbkJsdXI6IHRydWUsXG4gIHdlZWtTdGFydDogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zO1xuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7ZGF0ZVZhbHVlLCByZWd1bGFyaXplRGF0ZX0gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtyZUZvcm1hdFRva2VucywgcGFyc2VEYXRlfSBmcm9tICcuLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vZGVmYXVsdE9wdGlvbnMuanMnO1xuXG5jb25zdCB7XG4gIGxhbmd1YWdlOiBkZWZhdWx0TGFuZyxcbiAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICB3ZWVrU3RhcnQ6IGRlZmF1bHRXZWVrU3RhcnQsXG59ID0gZGVmYXVsdE9wdGlvbnM7XG5cbi8vIFJlZHVjZXIgZnVuY3Rpb24gdG8gZmlsdGVyIG91dCBpbnZhbGlkIGRheS1vZi13ZWVrIGZyb20gdGhlIGlucHV0XG5mdW5jdGlvbiBzYW5pdGl6ZURPVyhkb3csIGRheSkge1xuICByZXR1cm4gZG93Lmxlbmd0aCA8IDYgJiYgZGF5ID49IDAgJiYgZGF5IDwgN1xuICAgID8gcHVzaFVuaXF1ZShkb3csIGRheSlcbiAgICA6IGRvdztcbn1cblxuZnVuY3Rpb24gY2FsY0VuZE9mV2VlayhzdGFydE9mV2Vlaykge1xuICByZXR1cm4gKHN0YXJ0T2ZXZWVrICsgNikgJSA3O1xufVxuXG4vLyB2YWxpZGF0ZSBpbnB1dCBkYXRlLiBpZiBpbnZhbGlkLCBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgdmFsdWVcbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUsIG9yaWdWYWx1ZSkge1xuICBjb25zdCBkYXRlID0gcGFyc2VEYXRlKHZhbHVlLCBmb3JtYXQsIGxvY2FsZSk7XG4gIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWQgPyBkYXRlIDogb3JpZ1ZhbHVlO1xufVxuXG4vLyBWYWxpZGF0ZSB2aWV3SWQuIGlmIGludmFsaWQsIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCB2YWx1ZVxuZnVuY3Rpb24gdmFsaWRhdGVWaWV3SWQodmFsdWUsIG9yaWdWYWx1ZSwgbWF4ID0gMykge1xuICBjb25zdCB2aWV3SWQgPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICByZXR1cm4gdmlld0lkID49IDAgJiYgdmlld0lkIDw9IG1heCA/IHZpZXdJZCA6IG9yaWdWYWx1ZTtcbn1cblxuLy8gQ3JlYXRlIERhdGVwaWNrZXIgY29uZmlndXJhdGlvbiB0byBzZXRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIGRhdGVwaWNrZXIpIHtcbiAgY29uc3QgaW5PcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG4gIGNvbnN0IGNvbmZpZyA9IHt9O1xuICBjb25zdCBsb2NhbGVzID0gZGF0ZXBpY2tlci5jb25zdHJ1Y3Rvci5sb2NhbGVzO1xuICBjb25zdCByYW5nZVNpZGVJbmRleCA9IGRhdGVwaWNrZXIucmFuZ2VTaWRlSW5kZXg7XG4gIGxldCB7XG4gICAgZm9ybWF0LFxuICAgIGxhbmd1YWdlLFxuICAgIGxvY2FsZSxcbiAgICBtYXhEYXRlLFxuICAgIG1heFZpZXcsXG4gICAgbWluRGF0ZSxcbiAgICBwaWNrTGV2ZWwsXG4gICAgc3RhcnRWaWV3LFxuICAgIHdlZWtTdGFydCxcbiAgfSA9IGRhdGVwaWNrZXIuY29uZmlnIHx8IHt9O1xuXG4gIGlmIChpbk9wdHMubGFuZ3VhZ2UpIHtcbiAgICBsZXQgbGFuZztcbiAgICBpZiAoaW5PcHRzLmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuICAgICAgaWYgKGxvY2FsZXNbaW5PcHRzLmxhbmd1YWdlXSkge1xuICAgICAgICBsYW5nID0gaW5PcHRzLmxhbmd1YWdlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgbGFuZ2F1Z2UgKyByZWdpb24gdGFnIGNhbiBmYWxsYmFjayB0byB0aGUgb25lIHdpdGhvdXRcbiAgICAgICAgLy8gcmVnaW9uIChlLmcuIGZyLUNBIOKGkiBmcilcbiAgICAgICAgbGFuZyA9IGluT3B0cy5sYW5ndWFnZS5zcGxpdCgnLScpWzBdO1xuICAgICAgICBpZiAobG9jYWxlc1tsYW5nXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbGFuZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmcpIHtcbiAgICAgIGxhbmd1YWdlID0gY29uZmlnLmxhbmd1YWdlID0gbGFuZztcblxuICAgICAgLy8gdXBkYXRlIGxvY2FsZSBhcyB3ZWxsIHdoZW4gdXBkYXRpbmcgbGFuZ3VhZ2VcbiAgICAgIGNvbnN0IG9yaWdMb2NhbGUgPSBsb2NhbGUgfHwgbG9jYWxlc1tkZWZhdWx0TGFuZ107XG4gICAgICAvLyB1c2UgZGVmYXVsdCBsYW5ndWFnZSdzIHByb3BlcnRpZXMgZm9yIHRoZSBmYWxsYmFja1xuICAgICAgbG9jYWxlID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgICAgICAgd2Vla1N0YXJ0OiBkZWZhdWx0V2Vla1N0YXJ0XG4gICAgICB9LCBsb2NhbGVzW2RlZmF1bHRMYW5nXSk7XG4gICAgICBpZiAobGFuZ3VhZ2UgIT09IGRlZmF1bHRMYW5nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obG9jYWxlLCBsb2NhbGVzW2xhbmd1YWdlXSk7XG4gICAgICB9XG4gICAgICBjb25maWcubG9jYWxlID0gbG9jYWxlO1xuICAgICAgLy8gaWYgZm9ybWF0IGFuZC9vciB3ZWVrU3RhcnQgYXJlIHRoZSBzYW1lIGFzIG9sZCBsb2NhbGUncyBkZWZhdWx0cyxcbiAgICAgIC8vIHVwZGF0ZSB0aGVtIHRvIG5ldyBsb2NhbGUncyBkZWZhdWx0c1xuICAgICAgaWYgKGZvcm1hdCA9PT0gb3JpZ0xvY2FsZS5mb3JtYXQpIHtcbiAgICAgICAgZm9ybWF0ID0gY29uZmlnLmZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gICAgICB9XG4gICAgICBpZiAod2Vla1N0YXJ0ID09PSBvcmlnTG9jYWxlLndlZWtTdGFydCkge1xuICAgICAgICB3ZWVrU3RhcnQgPSBjb25maWcud2Vla1N0YXJ0ID0gbG9jYWxlLndlZWtTdGFydDtcbiAgICAgICAgY29uZmlnLndlZWtFbmQgPSBjYWxjRW5kT2ZXZWVrKGxvY2FsZS53ZWVrU3RhcnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbk9wdHMuZm9ybWF0KSB7XG4gICAgY29uc3QgaGFzVG9EaXNwbGF5ID0gdHlwZW9mIGluT3B0cy5mb3JtYXQudG9EaXNwbGF5ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IGhhc1RvVmFsdWUgPSB0eXBlb2YgaW5PcHRzLmZvcm1hdC50b1ZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IHZhbGlkRm9ybWF0U3RyaW5nID0gcmVGb3JtYXRUb2tlbnMudGVzdChpbk9wdHMuZm9ybWF0KTtcbiAgICBpZiAoKGhhc1RvRGlzcGxheSAmJiBoYXNUb1ZhbHVlKSB8fCB2YWxpZEZvcm1hdFN0cmluZykge1xuICAgICAgZm9ybWF0ID0gY29uZmlnLmZvcm1hdCA9IGluT3B0cy5mb3JtYXQ7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMuZm9ybWF0O1xuICB9XG5cbiAgLy8qKiogcGljayBsZXZlbCAqKiovL1xuICBsZXQgbmV3UGlja0xldmVsID0gcGlja0xldmVsO1xuICBpZiAoaW5PcHRzLnBpY2tMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3UGlja0xldmVsID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLnBpY2tMZXZlbCwgMik7XG4gICAgZGVsZXRlIGluT3B0cy5waWNrTGV2ZWw7XG4gIH1cbiAgaWYgKG5ld1BpY2tMZXZlbCAhPT0gcGlja0xldmVsKSB7XG4gICAgaWYgKG5ld1BpY2tMZXZlbCA+IHBpY2tMZXZlbCkge1xuICAgICAgLy8gY29tcGxlbWVudCBjdXJyZW50IG1pbkRhdGUvbWFkRGF0ZSBzbyB0aGF0IHRoZSBleGlzdGluZyByYW5nZSB3aWxsIGJlXG4gICAgICAvLyBleHBhbmRlZCB0byBmaXQgdGhlIG5ldyBsZXZlbCBsYXRlclxuICAgICAgaWYgKGluT3B0cy5taW5EYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5PcHRzLm1pbkRhdGUgPSBtaW5EYXRlO1xuICAgICAgfVxuICAgICAgaWYgKGluT3B0cy5tYXhEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5PcHRzLm1heERhdGUgPSBtYXhEYXRlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21wbGVtZW50IGRhdGVzRGlzYWJsZWQgc28gdGhhdCBpdCB3aWxsIGJlIHJlc2V0IGxhdGVyXG4gICAgaWYgKCFpbk9wdHMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgaW5PcHRzLmRhdGVzRGlzYWJsZWQgPSBbXTtcbiAgICB9XG4gICAgcGlja0xldmVsID0gY29uZmlnLnBpY2tMZXZlbCA9IG5ld1BpY2tMZXZlbDtcbiAgfVxuXG4gIC8vKioqIGRhdGVzICoqKi8vXG4gIC8vIHdoaWxlIG1pbiBhbmQgbWF4RGF0ZSBmb3IgXCJubyBsaW1pdFwiIGluIHRoZSBvcHRpb25zIGFyZSBiZXR0ZXIgdG8gYmUgbnVsbFxuICAvLyAoZXNwZWNpYWxseSB3aGVuIHVwZGF0aW5nKSwgdGhlIG9uZXMgaW4gdGhlIGNvbmZpZyBoYXZlIHRvIGJlIHVuZGVmaW5lZFxuICAvLyBiZWNhdXNlIG51bGwgaXMgdHJlYXRlZCBhcyAwICg9IHVuaXggZXBvY2gpIHdoZW4gY29tcGFyaW5nIHdpdGggdGltZSB2YWx1ZVxuICBsZXQgbWluRHQgPSBtaW5EYXRlO1xuICBsZXQgbWF4RHQgPSBtYXhEYXRlO1xuICBpZiAoaW5PcHRzLm1pbkRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRlZmF1bHRNaW5EdCA9IGRhdGVWYWx1ZSgwLCAwLCAxKTtcbiAgICBtaW5EdCA9IGluT3B0cy5taW5EYXRlID09PSBudWxsXG4gICAgICA/IGRlZmF1bHRNaW5EdCAgLy8gc2V0IDAwMDAtMDEtMDEgdG8gcHJldmVudCBuZWdhdGl2ZSB2YWx1ZXMgZm9yIHllYXJcbiAgICAgIDogdmFsaWRhdGVEYXRlKGluT3B0cy5taW5EYXRlLCBmb3JtYXQsIGxvY2FsZSwgbWluRHQpO1xuICAgIGlmIChtaW5EdCAhPT0gZGVmYXVsdE1pbkR0KSB7XG4gICAgICBtaW5EdCA9IHJlZ3VsYXJpemVEYXRlKG1pbkR0LCBwaWNrTGV2ZWwsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5taW5EYXRlO1xuICB9XG4gIGlmIChpbk9wdHMubWF4RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWF4RHQgPSBpbk9wdHMubWF4RGF0ZSA9PT0gbnVsbFxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsaWRhdGVEYXRlKGluT3B0cy5tYXhEYXRlLCBmb3JtYXQsIGxvY2FsZSwgbWF4RHQpO1xuICAgIGlmIChtYXhEdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXhEdCA9IHJlZ3VsYXJpemVEYXRlKG1heER0LCBwaWNrTGV2ZWwsIHRydWUpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm1heERhdGU7XG4gIH1cbiAgaWYgKG1heER0IDwgbWluRHQpIHtcbiAgICBtaW5EYXRlID0gY29uZmlnLm1pbkRhdGUgPSBtYXhEdDtcbiAgICBtYXhEYXRlID0gY29uZmlnLm1heERhdGUgPSBtaW5EdDtcbiAgfSBlbHNlIHtcbiAgICBpZiAobWluRGF0ZSAhPT0gbWluRHQpIHtcbiAgICAgIG1pbkRhdGUgPSBjb25maWcubWluRGF0ZSA9IG1pbkR0O1xuICAgIH1cbiAgICBpZiAobWF4RGF0ZSAhPT0gbWF4RHQpIHtcbiAgICAgIG1heERhdGUgPSBjb25maWcubWF4RGF0ZSA9IG1heER0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbk9wdHMuZGF0ZXNEaXNhYmxlZCkge1xuICAgIGNvbmZpZy5kYXRlc0Rpc2FibGVkID0gaW5PcHRzLmRhdGVzRGlzYWJsZWQucmVkdWNlKChkYXRlcywgZHQpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZURhdGUoZHQsIGZvcm1hdCwgbG9jYWxlKTtcbiAgICAgIHJldHVybiBkYXRlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwdXNoVW5pcXVlKGRhdGVzLCByZWd1bGFyaXplRGF0ZShkYXRlLCBwaWNrTGV2ZWwsIHJhbmdlU2lkZUluZGV4KSlcbiAgICAgICAgOiBkYXRlcztcbiAgICB9LCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXRlc0Rpc2FibGVkO1xuICB9XG4gIGlmIChpbk9wdHMuZGVmYXVsdFZpZXdEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IHBhcnNlRGF0ZShpbk9wdHMuZGVmYXVsdFZpZXdEYXRlLCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgaWYgKHZpZXdEYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbmZpZy5kZWZhdWx0Vmlld0RhdGUgPSB2aWV3RGF0ZTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5kZWZhdWx0Vmlld0RhdGU7XG4gIH1cblxuICAvLyoqKiBkYXlzIG9mIHdlZWsgKioqLy9cbiAgaWYgKGluT3B0cy53ZWVrU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHdrU3RhcnQgPSBOdW1iZXIoaW5PcHRzLndlZWtTdGFydCkgJSA3O1xuICAgIGlmICghaXNOYU4od2tTdGFydCkpIHtcbiAgICAgIHdlZWtTdGFydCA9IGNvbmZpZy53ZWVrU3RhcnQgPSB3a1N0YXJ0O1xuICAgICAgY29uZmlnLndlZWtFbmQgPSBjYWxjRW5kT2ZXZWVrKHdrU3RhcnQpO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLndlZWtTdGFydDtcbiAgfVxuICBpZiAoaW5PcHRzLmRheXNPZldlZWtEaXNhYmxlZCkge1xuICAgIGNvbmZpZy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkLnJlZHVjZShzYW5pdGl6ZURPVywgW10pO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGF5c09mV2Vla0Rpc2FibGVkO1xuICB9XG4gIGlmIChpbk9wdHMuZGF5c09mV2Vla0hpZ2hsaWdodGVkKSB7XG4gICAgY29uZmlnLmRheXNPZldlZWtIaWdobGlnaHRlZCA9IGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQucmVkdWNlKHNhbml0aXplRE9XLCBbXSk7XG4gICAgZGVsZXRlIGluT3B0cy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ7XG4gIH1cblxuICAvLyoqKiBtdWx0aSBkYXRlICoqKi8vXG4gIGlmIChpbk9wdHMubWF4TnVtYmVyT2ZEYXRlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgbWF4TnVtYmVyT2ZEYXRlcyA9IHBhcnNlSW50KGluT3B0cy5tYXhOdW1iZXJPZkRhdGVzLCAxMCk7XG4gICAgaWYgKG1heE51bWJlck9mRGF0ZXMgPj0gMCkge1xuICAgICAgY29uZmlnLm1heE51bWJlck9mRGF0ZXMgPSBtYXhOdW1iZXJPZkRhdGVzO1xuICAgICAgY29uZmlnLm11bHRpZGF0ZSA9IG1heE51bWJlck9mRGF0ZXMgIT09IDE7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubWF4TnVtYmVyT2ZEYXRlcztcbiAgfVxuICBpZiAoaW5PcHRzLmRhdGVEZWxpbWl0ZXIpIHtcbiAgICBjb25maWcuZGF0ZURlbGltaXRlciA9IFN0cmluZyhpbk9wdHMuZGF0ZURlbGltaXRlcik7XG4gICAgZGVsZXRlIGluT3B0cy5kYXRlRGVsaW1pdGVyO1xuICB9XG5cbiAgLy8qKiogdmlldyAqKiovL1xuICBsZXQgbmV3TWF4VmlldyA9IG1heFZpZXc7XG4gIGlmIChpbk9wdHMubWF4VmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3TWF4VmlldyA9IHZhbGlkYXRlVmlld0lkKGluT3B0cy5tYXhWaWV3LCBtYXhWaWV3KTtcbiAgICBkZWxldGUgaW5PcHRzLm1heFZpZXc7XG4gIH1cbiAgLy8gZW5zdXJlIG1heCB2aWV3ID49IHBpY2sgbGV2ZWxcbiAgbmV3TWF4VmlldyA9IHBpY2tMZXZlbCA+IG5ld01heFZpZXcgPyBwaWNrTGV2ZWwgOiBuZXdNYXhWaWV3O1xuICBpZiAobmV3TWF4VmlldyAhPT0gbWF4Vmlldykge1xuICAgIG1heFZpZXcgPSBjb25maWcubWF4VmlldyA9IG5ld01heFZpZXc7XG4gIH1cblxuICBsZXQgbmV3U3RhcnRWaWV3ID0gc3RhcnRWaWV3O1xuICBpZiAoaW5PcHRzLnN0YXJ0VmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbmV3U3RhcnRWaWV3ID0gdmFsaWRhdGVWaWV3SWQoaW5PcHRzLnN0YXJ0VmlldywgbmV3U3RhcnRWaWV3KTtcbiAgICBkZWxldGUgaW5PcHRzLnN0YXJ0VmlldztcbiAgfVxuICAvLyBlbnN1cmUgcGljayBsZXZlbCA8PSBzdGFydCB2aWV3IDw9IG1heCB2aWV3XG4gIGlmIChuZXdTdGFydFZpZXcgPCBwaWNrTGV2ZWwpIHtcbiAgICBuZXdTdGFydFZpZXcgPSBwaWNrTGV2ZWw7XG4gIH0gZWxzZSBpZiAobmV3U3RhcnRWaWV3ID4gbWF4Vmlldykge1xuICAgIG5ld1N0YXJ0VmlldyA9IG1heFZpZXc7XG4gIH1cbiAgaWYgKG5ld1N0YXJ0VmlldyAhPT0gc3RhcnRWaWV3KSB7XG4gICAgY29uZmlnLnN0YXJ0VmlldyA9IG5ld1N0YXJ0VmlldztcbiAgfVxuXG4gIC8vKioqIHRlbXBsYXRlICoqKi8vXG4gIGlmIChpbk9wdHMucHJldkFycm93KSB7XG4gICAgY29uc3QgcHJldkFycm93ID0gcGFyc2VIVE1MKGluT3B0cy5wcmV2QXJyb3cpO1xuICAgIGlmIChwcmV2QXJyb3cuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25maWcucHJldkFycm93ID0gcHJldkFycm93LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMucHJldkFycm93O1xuICB9XG4gIGlmIChpbk9wdHMubmV4dEFycm93KSB7XG4gICAgY29uc3QgbmV4dEFycm93ID0gcGFyc2VIVE1MKGluT3B0cy5uZXh0QXJyb3cpO1xuICAgIGlmIChuZXh0QXJyb3cuY2hpbGROb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25maWcubmV4dEFycm93ID0gbmV4dEFycm93LmNoaWxkTm9kZXM7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubmV4dEFycm93O1xuICB9XG5cbiAgLy8qKiogbWlzYyAqKiovL1xuICBpZiAoaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQgPSAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCAmJiAhIWluT3B0cy5kaXNhYmxlVG91Y2hLZXlib2FyZDtcbiAgICBkZWxldGUgaW5PcHRzLmRpc2FibGVUb3VjaEtleWJvYXJkO1xuICB9XG4gIGlmIChpbk9wdHMub3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGluT3B0cy5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpO1xuICAgIGNvbmZpZy5vcmllbnRhdGlvbiA9IHtcbiAgICAgIHg6IG9yaWVudGF0aW9uLmZpbmQoeCA9PiAoeCA9PT0gJ2xlZnQnIHx8IHggPT09ICdyaWdodCcpKSB8fCAnYXV0bycsXG4gICAgICB5OiBvcmllbnRhdGlvbi5maW5kKHkgPT4gKHkgPT09ICd0b3AnIHx8IHkgPT09ICdib3R0b20nKSkgfHwgJ2F1dG8nLFxuICAgIH07XG4gICAgZGVsZXRlIGluT3B0cy5vcmllbnRhdGlvbjtcbiAgfVxuICBpZiAoaW5PcHRzLnRvZGF5QnRuTW9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc3dpdGNoKGluT3B0cy50b2RheUJ0bk1vZGUpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY29uZmlnLnRvZGF5QnRuTW9kZSA9IGluT3B0cy50b2RheUJ0bk1vZGU7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMudG9kYXlCdG5Nb2RlO1xuICB9XG5cbiAgLy8qKiogY29weSB0aGUgcmVzdCAqKiovL1xuICBPYmplY3Qua2V5cyhpbk9wdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChpbk9wdHNba2V5XSAhPT0gdW5kZWZpbmVkICYmIGhhc1Byb3BlcnR5KGRlZmF1bHRPcHRpb25zLCBrZXkpKSB7XG4gICAgICBjb25maWdba2V5XSA9IGluT3B0c1trZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbiIsImltcG9ydCB7aGFzUHJvcGVydHksIGxhc3RJdGVtT2YsIGlzSW5SYW5nZSwgbGltaXRUb1JhbmdlfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHt0b2RheX0gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUwsIGdldFBhcmVudCwgc2hvd0VsZW1lbnQsIGhpZGVFbGVtZW50LCBlbXB0eUNoaWxkTm9kZXN9IGZyb20gJy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IHtyZWdpc3Rlckxpc3RlbmVyc30gZnJvbSAnLi4vbGliL2V2ZW50LmpzJztcbmltcG9ydCBwaWNrZXJUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlcy9waWNrZXJUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgRGF5c1ZpZXcgZnJvbSAnLi92aWV3cy9EYXlzVmlldy5qcyc7XG5pbXBvcnQgTW9udGhzVmlldyBmcm9tICcuL3ZpZXdzL01vbnRoc1ZpZXcuanMnO1xuaW1wb3J0IFllYXJzVmlldyBmcm9tICcuL3ZpZXdzL1llYXJzVmlldy5qcyc7XG5pbXBvcnQge3RyaWdnZXJEYXRlcGlja2VyRXZlbnR9IGZyb20gJy4uL2V2ZW50cy9mdW5jdGlvbnMuanMnO1xuaW1wb3J0IHtcbiAgb25DbGlja1RvZGF5QnRuLFxuICBvbkNsaWNrQ2xlYXJCdG4sXG4gIG9uQ2xpY2tWaWV3U3dpdGNoLFxuICBvbkNsaWNrUHJldkJ0bixcbiAgb25DbGlja05leHRCdG4sXG4gIG9uQ2xpY2tWaWV3LFxuICBvbk1vdXNlZG93blBpY2tlcixcbn0gZnJvbSAnLi4vZXZlbnRzL3BpY2tlckxpc3RlbmVycy5qcyc7XG5cbmNvbnN0IG9yaWVudENsYXNzZXMgPSBbJ2xlZnQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbSddLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcbiAgb2JqW2tleV0gPSBgZGF0ZXBpY2tlci1vcmllbnQtJHtrZXl9YDtcbiAgcmV0dXJuIG9iajtcbn0sIHt9KTtcbmNvbnN0IHRvUHggPSBudW0gPT4gbnVtID8gYCR7bnVtfXB4YCA6IG51bTtcblxuZnVuY3Rpb24gcHJvY2Vzc1BpY2tlck9wdGlvbnMocGlja2VyLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgcGlja2VyLmNvbnRyb2xzLnRpdGxlLnRleHRDb250ZW50ID0gb3B0aW9ucy50aXRsZTtcbiAgICAgIHNob3dFbGVtZW50KHBpY2tlci5jb250cm9scy50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpY2tlci5jb250cm9scy50aXRsZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRpdGxlKTtcbiAgICB9XG4gIH1cbiAgaWYgKG9wdGlvbnMucHJldkFycm93KSB7XG4gICAgY29uc3QgcHJldkJ0biA9IHBpY2tlci5jb250cm9scy5wcmV2QnRuO1xuICAgIGVtcHR5Q2hpbGROb2RlcyhwcmV2QnRuKTtcbiAgICBvcHRpb25zLnByZXZBcnJvdy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBwcmV2QnRuLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5uZXh0QXJyb3cpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gcGlja2VyLmNvbnRyb2xzLm5leHRCdG47XG4gICAgZW1wdHlDaGlsZE5vZGVzKG5leHRCdG4pO1xuICAgIG9wdGlvbnMubmV4dEFycm93LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5leHRCdG4uYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH0pO1xuICB9XG4gIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgIHBpY2tlci5jb250cm9scy50b2RheUJ0bi50ZXh0Q29udGVudCA9IG9wdGlvbnMubG9jYWxlLnRvZGF5O1xuICAgIHBpY2tlci5jb250cm9scy5jbGVhckJ0bi50ZXh0Q29udGVudCA9IG9wdGlvbnMubG9jYWxlLmNsZWFyO1xuICB9XG4gIGlmIChvcHRpb25zLnRvZGF5QnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy50b2RheUJ0bikge1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuKTtcbiAgICB9XG4gIH1cbiAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykgfHwgaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgIGNvbnN0IHttaW5EYXRlLCBtYXhEYXRlfSA9IHBpY2tlci5kYXRlcGlja2VyLmNvbmZpZztcbiAgICBwaWNrZXIuY29udHJvbHMudG9kYXlCdG4uZGlzYWJsZWQgPSAhaXNJblJhbmdlKHRvZGF5KCksIG1pbkRhdGUsIG1heERhdGUpO1xuICB9XG4gIGlmIChvcHRpb25zLmNsZWFyQnRuICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAob3B0aW9ucy5jbGVhckJ0bikge1xuICAgICAgc2hvd0VsZW1lbnQocGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZUVsZW1lbnQocGlja2VyLmNvbnRyb2xzLmNsZWFyQnRuKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ29tcHV0ZSB2aWV3IGRhdGUgdG8gcmVzZXQsIHdoaWNoIHdpbGwgYmUuLi5cbi8vIC0gdGhlIGxhc3QgaXRlbSBvZiB0aGUgc2VsZWN0ZWQgZGF0ZXMgb3IgZGVmYXVsdFZpZXdEYXRlIGlmIG5vIHNlbGVjdGlvblxuLy8gLSBsaW1pdHRlZCB0byBtaW5EYXRlIG9yIG1heERhdGUgaWYgaXQgZXhjZWVkcyB0aGUgcmFuZ2VcbmZ1bmN0aW9uIGNvbXB1dGVSZXNldFZpZXdEYXRlKGRhdGVwaWNrZXIpIHtcbiAgY29uc3Qge2RhdGVzLCBjb25maWd9ID0gZGF0ZXBpY2tlcjtcbiAgY29uc3Qgdmlld0RhdGUgPSBkYXRlcy5sZW5ndGggPiAwID8gbGFzdEl0ZW1PZihkYXRlcykgOiBjb25maWcuZGVmYXVsdFZpZXdEYXRlO1xuICByZXR1cm4gbGltaXRUb1JhbmdlKHZpZXdEYXRlLCBjb25maWcubWluRGF0ZSwgY29uZmlnLm1heERhdGUpO1xufVxuXG4vLyBDaGFuZ2UgY3VycmVudCB2aWV3J3MgdmlldyBkYXRlXG5mdW5jdGlvbiBzZXRWaWV3RGF0ZShwaWNrZXIsIG5ld0RhdGUpIHtcbiAgY29uc3Qgb2xkVmlld0RhdGUgPSBuZXcgRGF0ZShwaWNrZXIudmlld0RhdGUpO1xuICBjb25zdCBuZXdWaWV3RGF0ZSA9IG5ldyBEYXRlKG5ld0RhdGUpO1xuICBjb25zdCB7aWQsIHllYXIsIGZpcnN0LCBsYXN0fSA9IHBpY2tlci5jdXJyZW50VmlldztcbiAgY29uc3Qgdmlld1llYXIgPSBuZXdWaWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIHBpY2tlci52aWV3RGF0ZSA9IG5ld0RhdGU7XG4gIGlmICh2aWV3WWVhciAhPT0gb2xkVmlld0RhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQocGlja2VyLmRhdGVwaWNrZXIsICdjaGFuZ2VZZWFyJyk7XG4gIH1cbiAgaWYgKG5ld1ZpZXdEYXRlLmdldE1vbnRoKCkgIT09IG9sZFZpZXdEYXRlLmdldE1vbnRoKCkpIHtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHBpY2tlci5kYXRlcGlja2VyLCAnY2hhbmdlTW9udGgnKTtcbiAgfVxuXG4gIC8vIHJldHVybiB3aGV0aGVyIHRoZSBuZXcgZGF0ZSBpcyBpbiBkaWZmZXJlbnQgcGVyaW9kIG9uIHRpbWUgZnJvbSB0aGUgb25lXG4gIC8vIGRpc3BsYXllZCBpbiB0aGUgY3VycmVudCB2aWV3XG4gIC8vIHdoZW4gdHJ1ZSwgdGhlIHZpZXcgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWQgb24gdGhlIG5leHQgVUkgcmVmcmVzaC5cbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBuZXdEYXRlIDwgZmlyc3QgfHwgbmV3RGF0ZSA+IGxhc3Q7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHZpZXdZZWFyICE9PSB5ZWFyO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdmlld1llYXIgPCBmaXJzdCB8fCB2aWV3WWVhciA+IGxhc3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGV4dERpcmVjdGlvbihlbCkge1xuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmRpcmVjdGlvbjtcbn1cblxuLy8gZmluZCB0aGUgY2xvc2V0IHNjcm9sbGFibGUgYW5jZXN0b3IgZWxlbW50IHVuZGVyIHRoZSBib2R5XG5mdW5jdGlvbiBmaW5kU2Nyb2xsUGFyZW50cyhlbCkge1xuICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnQoZWwpO1xuICBpZiAocGFyZW50ID09PSBkb2N1bWVudC5ib2R5IHx8ICFwYXJlbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBjaGVja2luZyBvdmVyZmxvdyBvbmx5IGlzIGVub3VnaCBiZWNhdXNlIGNvbXB1dGVkIG92ZXJmbG93IGNhbm5vdCBiZVxuICAvLyB2aXNpYmxlIG9yIGEgY29tYmluYXRpb24gb2YgdmlzaWJsZSBhbmQgb3RoZXIgd2hlbiBlaXRoZXIgYXhpcyBpcyBzZXRcbiAgLy8gdG8gb3RoZXIgdGhhbiB2aXNpYmxlLlxuICAvLyAoU2V0dGluZyBvbmUgYXhpcyB0byBvdGhlciB0aGFuICd2aXNpYmxlJyB3aGlsZSB0aGUgb3RoZXIgaXMgJ3Zpc2libGUnXG4gIC8vIHJlc3VsdHMgaW4gdGhlIG90aGVyIGF4aXMgdHVybmluZyB0byAnYXV0bycpXG4gIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLm92ZXJmbG93ICE9PSAndmlzaWJsZSdcbiAgICA/IHBhcmVudFxuICAgIDogZmluZFNjcm9sbFBhcmVudHMocGFyZW50KTtcbn1cblxuLy8gQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBwaWNrZXIgVUlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGVwaWNrZXIpIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRoaXMuZGF0ZXBpY2tlciA9IGRhdGVwaWNrZXI7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHBpY2tlclRlbXBsYXRlLnJlcGxhY2UoLyVidXR0b25DbGFzcyUvZywgY29uZmlnLmJ1dHRvbkNsYXNzKTtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gcGFyc2VIVE1MKHRlbXBsYXRlKS5maXJzdENoaWxkO1xuICAgIGNvbnN0IFtoZWFkZXIsIG1haW4sIGZvb3Rlcl0gPSBlbGVtZW50LmZpcnN0Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgdGl0bGUgPSBoZWFkZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgW3ByZXZCdG4sIHZpZXdTd2l0Y2gsIG5leHRCdG5dID0gaGVhZGVyLmxhc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgW3RvZGF5QnRuLCBjbGVhckJ0bl0gPSBmb290ZXIuZmlyc3RDaGlsZC5jaGlsZHJlbjtcbiAgICBjb25zdCBjb250cm9scyA9IHtcbiAgICAgIHRpdGxlLFxuICAgICAgcHJldkJ0bixcbiAgICAgIHZpZXdTd2l0Y2gsXG4gICAgICBuZXh0QnRuLFxuICAgICAgdG9kYXlCdG4sXG4gICAgICBjbGVhckJ0bixcbiAgICB9O1xuICAgIHRoaXMubWFpbiA9IG1haW47XG4gICAgdGhpcy5jb250cm9scyA9IGNvbnRyb2xzO1xuXG4gICAgY29uc3QgZWxlbWVudENsYXNzID0gZGF0ZXBpY2tlci5pbmxpbmUgPyAnaW5saW5lJyA6ICdkcm9wZG93bic7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBkYXRlcGlja2VyLSR7ZWxlbWVudENsYXNzfWApO1xuXG4gICAgcHJvY2Vzc1BpY2tlck9wdGlvbnModGhpcywgY29uZmlnKTtcbiAgICB0aGlzLnZpZXdEYXRlID0gY29tcHV0ZVJlc2V0Vmlld0RhdGUoZGF0ZXBpY2tlcik7XG5cbiAgICAvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzXG4gICAgcmVnaXN0ZXJMaXN0ZW5lcnMoZGF0ZXBpY2tlciwgW1xuICAgICAgW2VsZW1lbnQsICdtb3VzZWRvd24nLCBvbk1vdXNlZG93blBpY2tlcl0sXG4gICAgICBbbWFpbiwgJ2NsaWNrJywgb25DbGlja1ZpZXcuYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMudmlld1N3aXRjaCwgJ2NsaWNrJywgb25DbGlja1ZpZXdTd2l0Y2guYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMucHJldkJ0biwgJ2NsaWNrJywgb25DbGlja1ByZXZCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMubmV4dEJ0biwgJ2NsaWNrJywgb25DbGlja05leHRCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMudG9kYXlCdG4sICdjbGljaycsIG9uQ2xpY2tUb2RheUJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICAgIFtjb250cm9scy5jbGVhckJ0biwgJ2NsaWNrJywgb25DbGlja0NsZWFyQnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgIF0pO1xuXG4gICAgLy8gc2V0IHVwIHZpZXdzXG4gICAgdGhpcy52aWV3cyA9IFtcbiAgICAgIG5ldyBEYXlzVmlldyh0aGlzKSxcbiAgICAgIG5ldyBNb250aHNWaWV3KHRoaXMpLFxuICAgICAgbmV3IFllYXJzVmlldyh0aGlzLCB7aWQ6IDIsIG5hbWU6ICd5ZWFycycsIGNlbGxDbGFzczogJ3llYXInLCBzdGVwOiAxfSksXG4gICAgICBuZXcgWWVhcnNWaWV3KHRoaXMsIHtpZDogMywgbmFtZTogJ2RlY2FkZXMnLCBjZWxsQ2xhc3M6ICdkZWNhZGUnLCBzdGVwOiAxMH0pLFxuICAgIF07XG4gICAgdGhpcy5jdXJyZW50VmlldyA9IHRoaXMudmlld3NbY29uZmlnLnN0YXJ0Vmlld107XG5cbiAgICB0aGlzLmN1cnJlbnRWaWV3LnJlbmRlcigpO1xuICAgIHRoaXMubWFpbi5hcHBlbmRDaGlsZCh0aGlzLmN1cnJlbnRWaWV3LmVsZW1lbnQpO1xuICAgIGlmIChjb25maWcuY29udGFpbmVyKSB7XG4gICAgICBjb25maWcuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVwaWNrZXIuaW5wdXRGaWVsZC5hZnRlcih0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHByb2Nlc3NQaWNrZXJPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuICAgIHRoaXMudmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy5pbml0KG9wdGlvbnMsIGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3LnJlbmRlcigpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge2RhdGVwaWNrZXIsIGVsZW1lbnR9ID0gdGhpcztcbiAgICBpZiAoZGF0ZXBpY2tlci5pbmxpbmUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVuc3VyZSBwaWNrZXIncyBkaXJlY3Rpb24gbWF0Y2hlcyBpbnB1dCdzXG4gICAgICBjb25zdCBpbnB1dERpcmVjdGlvbiA9IGdldFRleHREaXJlY3Rpb24oZGF0ZXBpY2tlci5pbnB1dEZpZWxkKTtcbiAgICAgIGlmIChpbnB1dERpcmVjdGlvbiAhPT0gZ2V0VGV4dERpcmVjdGlvbihnZXRQYXJlbnQoZWxlbWVudCkpKSB7XG4gICAgICAgIGVsZW1lbnQuZGlyID0gaW5wdXREaXJlY3Rpb247XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuZGlyKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXInKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmxpdHkgPSAnaGlkZGVuJztcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnBsYWNlKCk7XG4gICAgICBlbGVtZW50LnN0eWxlLnZpc2libGl0eSA9ICcnO1xuXG4gICAgICBpZiAoZGF0ZXBpY2tlci5jb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5pbnB1dEZpZWxkLmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQoZGF0ZXBpY2tlciwgJ3Nob3cnKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGVwaWNrZXIuZXhpdEVkaXRNb2RlKCk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudCh0aGlzLmRhdGVwaWNrZXIsICdoaWRlJyk7XG4gIH1cblxuICBwbGFjZSgpIHtcbiAgICBjb25zdCB7Y2xhc3NMaXN0LCBvZmZzZXRQYXJlbnQsIHN0eWxlfSA9IHRoaXMuZWxlbWVudDtcbiAgICBjb25zdCB7Y29uZmlnLCBpbnB1dEZpZWxkfSA9IHRoaXMuZGF0ZXBpY2tlcjtcbiAgICBjb25zdCB7XG4gICAgICB3aWR0aDogY2FsZW5kYXJXaWR0aCxcbiAgICAgIGhlaWdodDogY2FsZW5kYXJIZWlnaHQsXG4gICAgfSA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0OiBpbnB1dExlZnQsXG4gICAgICB0b3A6IGlucHV0VG9wLFxuICAgICAgcmlnaHQ6IGlucHV0UmlnaHQsXG4gICAgICBib3R0b206IGlucHV0Qm90dG9tLFxuICAgICAgd2lkdGg6IGlucHV0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGlucHV0SGVpZ2h0XG4gICAgfSA9IGlucHV0RmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHt4OiBvcmllbnRYLCB5OiBvcmllbnRZfSA9IGNvbmZpZy5vcmllbnRhdGlvbjtcbiAgICBsZXQgbGVmdCA9IGlucHV0TGVmdDtcbiAgICBsZXQgdG9wID0gaW5wdXRUb3A7XG5cbiAgICAvLyBjYWxpY3VsYXRlIG9mZnNldExlZnQvVG9wIG9mIGlucHV0RmllbGRcbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBkb2N1bWVudC5ib2R5IHx8ICFvZmZzZXRQYXJlbnQpIHtcbiAgICAgIGxlZnQgKz0gd2luZG93LnNjcm9sbFg7XG4gICAgICB0b3AgKz0gd2luZG93LnNjcm9sbFk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9mZnNldFBhcmVudFJlY3QgPSBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZWZ0IC09IG9mZnNldFBhcmVudFJlY3QubGVmdCAtIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgdG9wIC09IG9mZnNldFBhcmVudFJlY3QudG9wIC0gb2Zmc2V0UGFyZW50LnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICAvLyBjYWxpY3VsYXRlIHRoZSBib3VuZGFyaWVzIG9mIHRoZSB2aXNpYmxlIGFyZWEgdGhhdCBjb250YWlucyBpbnB1dEZpZWxkXG4gICAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZmluZFNjcm9sbFBhcmVudHMoaW5wdXRGaWVsZCk7XG4gICAgbGV0IHNjcm9sbEFyZWFMZWZ0ID0gMDtcbiAgICBsZXQgc2Nyb2xsQXJlYVRvcCA9IDA7XG4gICAgbGV0IHtcbiAgICAgIGNsaWVudFdpZHRoOiBzY3JvbGxBcmVhUmlnaHQsXG4gICAgICBjbGllbnRIZWlnaHQ6IHNjcm9sbEFyZWFCb3R0b20sXG4gICAgfSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcm9sbFBhcmVudFJlY3QgPSBzY3JvbGxQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC50b3AgPiAwKSB7XG4gICAgICAgIHNjcm9sbEFyZWFUb3AgPSBzY3JvbGxQYXJlbnRSZWN0LnRvcDtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LmxlZnQgPiAwKSB7XG4gICAgICAgIHNjcm9sbEFyZWFMZWZ0ID0gc2Nyb2xsUGFyZW50UmVjdC5sZWZ0O1xuICAgICAgfVxuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QucmlnaHQgPCBzY3JvbGxBcmVhUmlnaHQpIHtcbiAgICAgICAgc2Nyb2xsQXJlYVJpZ2h0ID0gc2Nyb2xsUGFyZW50UmVjdC5yaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LmJvdHRvbSA8IHNjcm9sbEFyZWFCb3R0b20pIHtcbiAgICAgICAgc2Nyb2xsQXJlYUJvdHRvbSA9IHNjcm9sbFBhcmVudFJlY3QuYm90dG9tO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRldGVybWluZSB0aGUgaG9yaXpvbnRhbCBvcmllbnRhdGlvbiBhbmQgbGVmdCBwb3NpdGlvblxuICAgIGxldCBhZGp1c3RtZW50ID0gMDtcbiAgICBpZiAob3JpZW50WCA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoaW5wdXRMZWZ0IDwgc2Nyb2xsQXJlYUxlZnQpIHtcbiAgICAgICAgb3JpZW50WCA9ICdsZWZ0JztcbiAgICAgICAgYWRqdXN0bWVudCA9IHNjcm9sbEFyZWFMZWZ0IC0gaW5wdXRMZWZ0O1xuICAgICAgfSBlbHNlIGlmIChpbnB1dExlZnQgKyBjYWxlbmRhcldpZHRoID4gc2Nyb2xsQXJlYVJpZ2h0KSB7XG4gICAgICAgIG9yaWVudFggPSAncmlnaHQnO1xuICAgICAgICBpZiAoc2Nyb2xsQXJlYVJpZ2h0IDwgaW5wdXRSaWdodCkge1xuICAgICAgICAgIGFkanVzdG1lbnQgPSBzY3JvbGxBcmVhUmlnaHQgLSBpbnB1dFJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGdldFRleHREaXJlY3Rpb24oaW5wdXRGaWVsZCkgPT09ICdydGwnKSB7XG4gICAgICAgIG9yaWVudFggPSBpbnB1dFJpZ2h0IC0gY2FsZW5kYXJXaWR0aCA8IHNjcm9sbEFyZWFMZWZ0ID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWVudFggPSAnbGVmdCc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRYID09PSAncmlnaHQnKSB7XG4gICAgICBsZWZ0ICs9IGlucHV0V2lkdGggLSBjYWxlbmRhcldpZHRoO1xuICAgIH1cbiAgICBsZWZ0ICs9IGFkanVzdG1lbnQ7XG5cbiAgICAvLyBkZXRlcm1pbmUgdGhlIHZlcnRpY2FsIG9yaWVudGF0aW9uIGFuZCB0b3AgcG9zaXRpb25cbiAgICBpZiAob3JpZW50WSA9PT0gJ2F1dG8nKSB7XG4gICAgICBpZiAoaW5wdXRUb3AgLSBjYWxlbmRhckhlaWdodCA+IHNjcm9sbEFyZWFUb3ApIHtcbiAgICAgICAgb3JpZW50WSA9IGlucHV0Qm90dG9tICsgY2FsZW5kYXJIZWlnaHQgPiBzY3JvbGxBcmVhQm90dG9tID8gJ3RvcCcgOiAnYm90dG9tJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWVudFkgPSAnYm90dG9tJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudFkgPT09ICd0b3AnKSB7XG4gICAgICB0b3AgLT0gY2FsZW5kYXJIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCArPSBpbnB1dEhlaWdodDtcbiAgICB9XG5cbiAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLk9iamVjdC52YWx1ZXMob3JpZW50Q2xhc3NlcykpO1xuICAgIGNsYXNzTGlzdC5hZGQob3JpZW50Q2xhc3Nlc1tvcmllbnRYXSwgb3JpZW50Q2xhc3Nlc1tvcmllbnRZXSk7XG5cbiAgICBzdHlsZS5sZWZ0ID0gdG9QeChsZWZ0KTtcbiAgICBzdHlsZS50b3AgPSB0b1B4KHRvcCk7XG4gIH1cblxuICBzZXRWaWV3U3dpdGNoTGFiZWwobGFiZWxUZXh0KSB7XG4gICAgdGhpcy5jb250cm9scy52aWV3U3dpdGNoLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICB9XG5cbiAgc2V0UHJldkJ0bkRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5jb250cm9scy5wcmV2QnRuLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBzZXROZXh0QnRuRGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmNvbnRyb2xzLm5leHRCdG4uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIGNoYW5nZVZpZXcodmlld0lkKSB7XG4gICAgY29uc3Qgb2xkVmlldyA9IHRoaXMuY3VycmVudFZpZXc7XG4gICAgY29uc3QgbmV3VmlldyA9ICB0aGlzLnZpZXdzW3ZpZXdJZF07XG4gICAgaWYgKG5ld1ZpZXcuaWQgIT09IG9sZFZpZXcuaWQpIHtcbiAgICAgIHRoaXMuY3VycmVudFZpZXcgPSBuZXdWaWV3O1xuICAgICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gJ3JlbmRlcic7XG4gICAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHRoaXMuZGF0ZXBpY2tlciwgJ2NoYW5nZVZpZXcnKTtcbiAgICAgIHRoaXMubWFpbi5yZXBsYWNlQ2hpbGQobmV3Vmlldy5lbGVtZW50LCBvbGRWaWV3LmVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIENoYW5nZSB0aGUgZm9jdXNlZCBkYXRlICh2aWV3IGRhdGUpXG4gIGNoYW5nZUZvY3VzKG5ld1ZpZXdEYXRlKSB7XG4gICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gc2V0Vmlld0RhdGUodGhpcywgbmV3Vmlld0RhdGUpID8gJ3JlbmRlcicgOiAncmVmcmVzaEZvY3VzJztcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIHZpZXcudXBkYXRlRm9jdXMoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEFwcGx5IHRoZSBjaGFuZ2Ugb2YgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBuZXdWaWV3RGF0ZSA9IGNvbXB1dGVSZXNldFZpZXdEYXRlKHRoaXMuZGF0ZXBpY2tlcik7XG4gICAgdGhpcy5fcmVuZGVyTWV0aG9kID0gc2V0Vmlld0RhdGUodGhpcywgbmV3Vmlld0RhdGUpID8gJ3JlbmRlcicgOiAncmVmcmVzaCc7XG4gICAgdGhpcy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LnVwZGF0ZUZvY3VzKCk7XG4gICAgICB2aWV3LnVwZGF0ZVNlbGVjdGlvbigpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gUmVmcmVzaCB0aGUgcGlja2VyIFVJXG4gIHJlbmRlcihxdWlja1JlbmRlciA9IHRydWUpIHtcbiAgICBjb25zdCByZW5kZXJNZXRob2QgPSAocXVpY2tSZW5kZXIgJiYgdGhpcy5fcmVuZGVyTWV0aG9kKSB8fCAncmVuZGVyJztcbiAgICBkZWxldGUgdGhpcy5fcmVuZGVyTWV0aG9kO1xuXG4gICAgdGhpcy5jdXJyZW50Vmlld1tyZW5kZXJNZXRob2RdKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlVGFnUmVwZWF0LCBvcHRpbWl6ZVRlbXBsYXRlSFRNTH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcblxuY29uc3QgY2FsZW5kYXJXZWVrc1RlbXBsYXRlID0gb3B0aW1pemVUZW1wbGF0ZUhUTUwoYDxkaXYgY2xhc3M9XCJjYWxlbmRhci13ZWVrc1wiPlxuICA8ZGl2IGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+PHNwYW4gY2xhc3M9XCJkb3dcIj48L3NwYW4+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ3ZWVrc1wiPiR7Y3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgNiwge2NsYXNzOiAnd2Vlayd9KX08L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBjYWxlbmRhcldlZWtzVGVtcGxhdGU7XG4iLCJpbXBvcnQge2NyZWF0ZVRhZ1JlcGVhdCwgb3B0aW1pemVUZW1wbGF0ZUhUTUx9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5cbmNvbnN0IGRheXNUZW1wbGF0ZSA9IG9wdGltaXplVGVtcGxhdGVIVE1MKGA8ZGl2IGNsYXNzPVwiZGF5c1wiPlxuICA8ZGl2IGNsYXNzPVwiZGF5cy1vZi13ZWVrXCI+JHtjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCA3LCB7Y2xhc3M6ICdkb3cnfSl9PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWdyaWRcIj4ke2NyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDQyKX08L2Rpdj5cbjwvZGl2PmApO1xuXG5leHBvcnQgZGVmYXVsdCBkYXlzVGVtcGxhdGU7XG4iLCJpbXBvcnQge29wdGltaXplVGVtcGxhdGVIVE1MfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuXG5jb25zdCBwaWNrZXJUZW1wbGF0ZSA9IG9wdGltaXplVGVtcGxhdGVIVE1MKGA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPlxuICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1waWNrZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1oZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXRpdGxlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jb250cm9sc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgcHJldi1idG5cIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIHZpZXctc3dpdGNoXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSBuZXh0LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbWFpblwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIHRvZGF5LWJ0blwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgY2xlYXItYnRuXCI+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gKTtcblxuZXhwb3J0IGRlZmF1bHQgcGlja2VyVGVtcGxhdGU7XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHt0b2RheSwgZGF0ZVZhbHVlLCBhZGREYXlzLCBhZGRXZWVrcywgZGF5T2ZUaGVXZWVrT2YsIGdldFdlZWt9IGZyb20gJy4uLy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7Zm9ybWF0RGF0ZX0gZnJvbSAnLi4vLi4vbGliL2RhdGUtZm9ybWF0LmpzJztcbmltcG9ydCB7cGFyc2VIVE1MLCBzaG93RWxlbWVudCwgaGlkZUVsZW1lbnR9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IGRheXNUZW1wbGF0ZSBmcm9tICcuLi90ZW1wbGF0ZXMvZGF5c1RlbXBsYXRlLmpzJztcbmltcG9ydCBjYWxlbmRhcldlZWtzVGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL2NhbGVuZGFyV2Vla3NUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlzVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIpIHtcbiAgICBzdXBlcihwaWNrZXIsIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogJ2RheXMnLFxuICAgICAgY2VsbENsYXNzOiAnZGF5JyxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICBjb25zdCBpbm5lciA9IHBhcnNlSFRNTChkYXlzVGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgICB0aGlzLmRvdyA9IGlubmVyLmZpcnN0Q2hpbGQ7XG4gICAgICB0aGlzLmdyaWQgPSBpbm5lci5sYXN0Q2hpbGQ7XG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgbGV0IHVwZGF0ZURPVztcblxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpKSB7XG4gICAgICB0aGlzLm1pbkRhdGUgPSBvcHRpb25zLm1pbkRhdGU7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgICB0aGlzLm1heERhdGUgPSBvcHRpb25zLm1heERhdGU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IG9wdGlvbnMuZGF0ZXNEaXNhYmxlZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF5c09mV2Vla0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmRheXNPZldlZWtEaXNhYmxlZCA9IG9wdGlvbnMuZGF5c09mV2Vla0Rpc2FibGVkO1xuICAgICAgdXBkYXRlRE9XID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZGF5c09mV2Vla0hpZ2hsaWdodGVkKSB7XG4gICAgICB0aGlzLmRheXNPZldlZWtIaWdobGlnaHRlZCA9IG9wdGlvbnMuZGF5c09mV2Vla0hpZ2hsaWdodGVkO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50b2RheUhpZ2hsaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRvZGF5SGlnaGxpZ2h0ID0gb3B0aW9ucy50b2RheUhpZ2hsaWdodDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMud2Vla1N0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2Vla1N0YXJ0ID0gb3B0aW9ucy53ZWVrU3RhcnQ7XG4gICAgICB0aGlzLndlZWtFbmQgPSBvcHRpb25zLndlZWtFbmQ7XG4gICAgICB1cGRhdGVET1cgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gICAgICB0aGlzLmRheU5hbWVzID0gbG9jYWxlLmRheXNNaW47XG4gICAgICB0aGlzLnN3aXRjaExhYmVsRm9ybWF0ID0gbG9jYWxlLnRpdGxlRm9ybWF0O1xuICAgICAgdXBkYXRlRE9XID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlU2hvd0RheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2Ygb3B0aW9ucy5iZWZvcmVTaG93RGF5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5iZWZvcmVTaG93RGF5XG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNhbGVuZGFyV2Vla3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG9wdGlvbnMuY2FsZW5kYXJXZWVrcyAmJiAhdGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgIGNvbnN0IHdlZWtzRWxlbSA9IHBhcnNlSFRNTChjYWxlbmRhcldlZWtzVGVtcGxhdGUpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJXZWVrcyA9IHtcbiAgICAgICAgICBlbGVtZW50OiB3ZWVrc0VsZW0sXG4gICAgICAgICAgZG93OiB3ZWVrc0VsZW0uZmlyc3RDaGlsZCxcbiAgICAgICAgICB3ZWVrczogd2Vla3NFbGVtLmxhc3RDaGlsZCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh3ZWVrc0VsZW0sIHRoaXMuZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jYWxlbmRhcldlZWtzICYmICFvcHRpb25zLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuY2FsZW5kYXJXZWVrcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jYWxlbmRhcldlZWtzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc2hvd0RheXNPZldlZWsgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG9wdGlvbnMuc2hvd0RheXNPZldlZWspIHtcbiAgICAgICAgc2hvd0VsZW1lbnQodGhpcy5kb3cpO1xuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgICAgc2hvd0VsZW1lbnQodGhpcy5jYWxlbmRhcldlZWtzLmRvdyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhpZGVFbGVtZW50KHRoaXMuZG93KTtcbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICAgIGhpZGVFbGVtZW50KHRoaXMuY2FsZW5kYXJXZWVrcy5kb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGRheXMtb2Ytd2VlayB3aGVuIGxvY2FsZSwgZGF5c09md2Vla0Rpc2FibGVkIG9yIHdlZWtTdGFydCBpcyBjaGFuZ2VkXG4gICAgaWYgKHVwZGF0ZURPVykge1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmRvdy5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdyA9ICh0aGlzLndlZWtTdGFydCArIGluZGV4KSAlIDc7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGhpcy5kYXlOYW1lc1tkb3ddO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSB0aGlzLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhkb3cpID8gJ2RvdyBkaXNhYmxlZCcgOiAnZG93JztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGx5IHVwZGF0ZSBvbiB0aGUgZm9jdXNlZCBkYXRlIHRvIHZpZXcncyBzZXR0aW5nc1xuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICBjb25zdCB2aWV3WWVhciA9IHZpZXdEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3Qgdmlld01vbnRoID0gdmlld0RhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBmaXJzdE9mTW9udGggPSBkYXRlVmFsdWUodmlld1llYXIsIHZpZXdNb250aCwgMSk7XG4gICAgY29uc3Qgc3RhcnQgPSBkYXlPZlRoZVdlZWtPZihmaXJzdE9mTW9udGgsIHRoaXMud2Vla1N0YXJ0LCB0aGlzLndlZWtTdGFydCk7XG5cbiAgICB0aGlzLmZpcnN0ID0gZmlyc3RPZk1vbnRoO1xuICAgIHRoaXMubGFzdCA9IGRhdGVWYWx1ZSh2aWV3WWVhciwgdmlld01vbnRoICsgMSwgMCk7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZm9jdXNlZCA9IHRoaXMucGlja2VyLnZpZXdEYXRlO1xuICB9XG5cbiAgLy8gQXBwbHkgdXBkYXRlIG9uIHRoZSBzZWxlY3RlZCBkYXRlcyB0byB2aWV3J3Mgc2V0dGluZ3NcbiAgdXBkYXRlU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHtkYXRlcywgcmFuZ2VwaWNrZXJ9ID0gdGhpcy5waWNrZXIuZGF0ZXBpY2tlcjtcbiAgICB0aGlzLnNlbGVjdGVkID0gZGF0ZXM7XG4gICAgaWYgKHJhbmdlcGlja2VyKSB7XG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2VwaWNrZXIuZGF0ZXM7XG4gICAgfVxuICB9XG5cbiAgIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHVwZGF0ZSB0b2RheSBtYXJrZXIgb24gZXZlciByZW5kZXJcbiAgICB0aGlzLnRvZGF5ID0gdGhpcy50b2RheUhpZ2hsaWdodCA/IHRvZGF5KCkgOiB1bmRlZmluZWQ7XG4gICAgLy8gcmVmcmVzaCBkaXNhYmxlZCBkYXRlcyBvbiBldmVyeSByZW5kZXIgaW4gb3JkZXIgdG8gY2xlYXIgdGhlIG9uZXMgYWRkZWRcbiAgICAvLyBieSBiZWZvcmVTaG93IGhvb2sgYXQgcHJldmlvdXMgcmVuZGVyXG4gICAgdGhpcy5kaXNhYmxlZCA9IFsuLi50aGlzLmRhdGVzRGlzYWJsZWRdO1xuXG4gICAgY29uc3Qgc3dpdGNoTGFiZWwgPSBmb3JtYXREYXRlKHRoaXMuZm9jdXNlZCwgdGhpcy5zd2l0Y2hMYWJlbEZvcm1hdCwgdGhpcy5sb2NhbGUpO1xuICAgIHRoaXMucGlja2VyLnNldFZpZXdTd2l0Y2hMYWJlbChzd2l0Y2hMYWJlbCk7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMuZmlyc3QgPD0gdGhpcy5taW5EYXRlKTtcbiAgICB0aGlzLnBpY2tlci5zZXROZXh0QnRuRGlzYWJsZWQodGhpcy5sYXN0ID49IHRoaXMubWF4RGF0ZSk7XG5cbiAgICBpZiAodGhpcy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAvLyBzdGFydCBvZiB0aGUgVVRDIHdlZWsgKE1vbmRheSkgb2YgdGhlIDFzdCBvZiB0aGUgbW9udGhcbiAgICAgIGNvbnN0IHN0YXJ0T2ZXZWVrID0gZGF5T2ZUaGVXZWVrT2YodGhpcy5maXJzdCwgMSwgMSk7XG4gICAgICBBcnJheS5mcm9tKHRoaXMuY2FsZW5kYXJXZWVrcy53ZWVrcy5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gZ2V0V2VlayhhZGRXZWVrcyhzdGFydE9mV2VlaywgaW5kZXgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBjb25zdCBjdXJyZW50ID0gYWRkRGF5cyh0aGlzLnN0YXJ0LCBpbmRleCk7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudCk7XG4gICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERheSgpO1xuXG4gICAgICBlbC5jbGFzc05hbWUgPSBgZGF0ZXBpY2tlci1jZWxsICR7dGhpcy5jZWxsQ2xhc3N9YDtcbiAgICAgIGVsLmRhdGFzZXQuZGF0ZSA9IGN1cnJlbnQ7XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICBpZiAoY3VycmVudCA8IHRoaXMuZmlyc3QpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50ID4gdGhpcy5sYXN0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvZGF5ID09PSBjdXJyZW50KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA8IHRoaXMubWluRGF0ZSB8fCBjdXJyZW50ID4gdGhpcy5tYXhEYXRlIHx8IHRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhkYXkpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHB1c2hVbmlxdWUodGhpcy5kaXNhYmxlZCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQuaW5jbHVkZXMoZGF5KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2U7XG4gICAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2VzIG9mIHNlbGVjdGVkIGFuZCBmb2N1c2VkIGl0ZW1zXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2UgfHwgW107XG4gICAgdGhpcy5ncmlkXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLCAucmFuZ2Utc3RhcnQsIC5yYW5nZS1lbmQsIC5zZWxlY3RlZCwgLmZvY3VzZWQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlJywgJ3JhbmdlLXN0YXJ0JywgJ3JhbmdlLWVuZCcsICdzZWxlY3RlZCcsICdmb2N1c2VkJyk7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIoZWwuZGF0YXNldC5kYXRlKTtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZSBvZiBmb2N1c2VkIGl0ZW1cbiAgcmVmcmVzaEZvY3VzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgodGhpcy5mb2N1c2VkIC0gdGhpcy5zdGFydCkgLyA4NjQwMDAwMCk7XG4gICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1c2VkJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZSwgY3JlYXRlVGFnUmVwZWF0fSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuaW1wb3J0IHtkYXRlVmFsdWV9IGZyb20gJy4uLy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MfSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmZ1bmN0aW9uIGNvbXB1dGVNb250aFJhbmdlKHJhbmdlLCB0aGlzWWVhcikge1xuICBpZiAoIXJhbmdlIHx8ICFyYW5nZVswXSB8fCAhcmFuZ2VbMV0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBbW3N0YXJ0WSwgc3RhcnRNXSwgW2VuZFksIGVuZE1dXSA9IHJhbmdlO1xuICBpZiAoc3RhcnRZID4gdGhpc1llYXIgfHwgZW5kWSA8IHRoaXNZZWFyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBbXG4gICAgc3RhcnRZID09PSB0aGlzWWVhciA/IHN0YXJ0TSA6IC0xLFxuICAgIGVuZFkgPT09IHRoaXNZZWFyID8gZW5kTSA6IDEyLFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb250aHNWaWV3IGV4dGVuZHMgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlcikge1xuICAgIHN1cGVyKHBpY2tlciwge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnbW9udGhzJyxcbiAgICAgIGNlbGxDbGFzczogJ21vbnRoJyxcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICB0aGlzLmdyaWQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9udGhzJywgJ2RhdGVwaWNrZXItZ3JpZCcpO1xuICAgICAgdGhpcy5ncmlkLmFwcGVuZENoaWxkKHBhcnNlSFRNTChjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCAxMiwgeydkYXRhLW1vbnRoJzogaXggPT4gaXh9KSkpO1xuICAgIH1cbiAgICBzdXBlci5pbml0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICB0aGlzLm1vbnRoTmFtZXMgPSBvcHRpb25zLmxvY2FsZS5tb250aHNTaG9ydDtcbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtaW5EYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1pbkRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1pblllYXIgPSB0aGlzLm1pbk1vbnRoID0gdGhpcy5taW5EYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWluRGF0ZU9iaiA9IG5ldyBEYXRlKG9wdGlvbnMubWluRGF0ZSk7XG4gICAgICAgIHRoaXMubWluWWVhciA9IG1pbkRhdGVPYmouZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5taW5Nb250aCA9IG1pbkRhdGVPYmouZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5taW5EYXRlID0gbWluRGF0ZU9iai5zZXREYXRlKDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IHRoaXMubWF4TW9udGggPSB0aGlzLm1heERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtYXhEYXRlT2JqID0gbmV3IERhdGUob3B0aW9ucy5tYXhEYXRlKTtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gbWF4RGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1heE1vbnRoID0gbWF4RGF0ZU9iai5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLm1heERhdGUgPSBkYXRlVmFsdWUodGhpcy5tYXhZZWFyLCB0aGlzLm1heE1vbnRoICsgMSwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBvcHRpb25zLmRhdGVzRGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5iZWZvcmVTaG93TW9udGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iZWZvcmVTaG93ID0gdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2hvd01vbnRoID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gb3B0aW9ucy5iZWZvcmVTaG93TW9udGhcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSB2aWV3RGF0ZSBzZXQgb24gdGhlIHBpY2tlclxuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICB0aGlzLnllYXIgPSB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHRoaXMuZm9jdXNlZCA9IHZpZXdEYXRlLmdldE1vbnRoKCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCB7ZGF0ZXMsIHJhbmdlcGlja2VyfSA9IHRoaXMucGlja2VyLmRhdGVwaWNrZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVzLnJlZHVjZSgoc2VsZWN0ZWQsIHRpbWVWYWx1ZSkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVWYWx1ZSk7XG4gICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICBpZiAoc2VsZWN0ZWRbeWVhcl0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RlZFt5ZWFyXSA9IFttb250aF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwdXNoVW5pcXVlKHNlbGVjdGVkW3llYXJdLCBtb250aCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfSwge30pO1xuICAgIGlmIChyYW5nZXBpY2tlciAmJiByYW5nZXBpY2tlci5kYXRlcykge1xuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlcGlja2VyLmRhdGVzLm1hcCh0aW1lVmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogW2RhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgZW50aXJlIHZpZXcgVUlcbiAgcmVuZGVyKCkge1xuICAgIC8vIHJlZnJlc2ggZGlzYWJsZWQgbW9udGhzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZC5yZWR1Y2UoKGFyciwgZGlzYWJsZWQpID0+IHtcbiAgICAgIGNvbnN0IGR0ID0gbmV3IERhdGUoZGlzYWJsZWQpO1xuICAgICAgaWYgKHRoaXMueWVhciA9PT0gZHQuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICBhcnIucHVzaChkdC5nZXRNb250aCgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSwgW10pO1xuXG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKHRoaXMueWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0UHJldkJ0bkRpc2FibGVkKHRoaXMueWVhciA8PSB0aGlzLm1pblllYXIpO1xuICAgIHRoaXMucGlja2VyLnNldE5leHRCdG5EaXNhYmxlZCh0aGlzLnllYXIgPj0gdGhpcy5tYXhZZWFyKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZFt0aGlzLnllYXJdIHx8IFtdO1xuICAgIGNvbnN0IHlyT3V0T2ZSYW5nZSA9IHRoaXMueWVhciA8IHRoaXMubWluWWVhciB8fCB0aGlzLnllYXIgPiB0aGlzLm1heFllYXI7XG4gICAgY29uc3QgaXNNaW5ZZWFyID0gdGhpcy55ZWFyID09PSB0aGlzLm1pblllYXI7XG4gICAgY29uc3QgaXNNYXhZZWFyID0gdGhpcy55ZWFyID09PSB0aGlzLm1heFllYXI7XG4gICAgY29uc3QgcmFuZ2UgPSBjb21wdXRlTW9udGhSYW5nZSh0aGlzLnJhbmdlLCB0aGlzLnllYXIpO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLnllYXIsIGluZGV4LCAxKTtcblxuICAgICAgZWwuY2xhc3NOYW1lID0gYGRhdGVwaWNrZXItY2VsbCAke3RoaXMuY2VsbENsYXNzfWA7XG4gICAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgICAgZWwuZGF0YXNldC5kYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIC8vIHJlc2V0IHRleHQgb24gZXZlcnkgcmVuZGVyIHRvIGNsZWFyIHRoZSBjdXN0b20gY29udGVudCBzZXRcbiAgICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdGhpcy5tb250aE5hbWVzW2luZGV4XTtcblxuICAgICAgaWYgKFxuICAgICAgICB5ck91dE9mUmFuZ2VcbiAgICAgICAgfHwgaXNNaW5ZZWFyICYmIGluZGV4IDwgdGhpcy5taW5Nb250aFxuICAgICAgICB8fCBpc01heFllYXIgJiYgaW5kZXggPiB0aGlzLm1heE1vbnRoXG4gICAgICAgIHx8IHRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoaW5kZXgpXG4gICAgICApIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gcmFuZ2U7XG4gICAgICAgIGlmIChpbmRleCA+IHJhbmdlU3RhcnQgJiYgaW5kZXggPCByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYmVmb3JlU2hvdykge1xuICAgICAgICB0aGlzLnBlcmZvcm1CZWZvcmVIb29rKGVsLCBpbmRleCwgZGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZXMgb2Ygc2VsZWN0ZWQgYW5kIGZvY3VzZWQgaXRlbXNcbiAgcmVmcmVzaCgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRbdGhpcy55ZWFyXSB8fCBbXTtcbiAgICBjb25zdCBbcmFuZ2VTdGFydCwgcmFuZ2VFbmRdID0gY29tcHV0ZU1vbnRoUmFuZ2UodGhpcy5yYW5nZSwgdGhpcy55ZWFyKSB8fCBbXTtcbiAgICB0aGlzLmdyaWRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2UsIC5yYW5nZS1zdGFydCwgLnJhbmdlLWVuZCwgLnNlbGVjdGVkLCAuZm9jdXNlZCcpXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UnLCAncmFuZ2Utc3RhcnQnLCAncmFuZ2UtZW5kJywgJ3NlbGVjdGVkJywgJ2ZvY3VzZWQnKTtcbiAgICAgIH0pO1xuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChpbmRleCA+IHJhbmdlU3RhcnQgJiYgaW5kZXggPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKGluZGV4KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2Ugb2YgZm9jdXNlZCBpdGVtXG4gIHJlZnJlc2hGb2N1cygpIHtcbiAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgnLmZvY3VzZWQnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZCcpO1xuICAgIH0pO1xuICAgIHRoaXMuZ3JpZC5jaGlsZHJlblt0aGlzLmZvY3VzZWRdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufSIsImltcG9ydCB7cHVzaFVuaXF1ZX0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MLCByZXBsYWNlQ2hpbGROb2Rlc30gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5cbi8vIEJhc2UgY2xhc3Mgb2YgdGhlIHZpZXcgY2xhc3Nlc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyB7XG4gIGNvbnN0cnVjdG9yKHBpY2tlciwgY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcsIHtcbiAgICAgIHBpY2tlcixcbiAgICAgIGVsZW1lbnQ6IHBhcnNlSFRNTChgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItdmlld1wiPjwvZGl2PmApLmZpcnN0Q2hpbGQsXG4gICAgICBzZWxlY3RlZDogW10sXG4gICAgfSk7XG4gICAgdGhpcy5pbml0KHRoaXMucGlja2VyLmRhdGVwaWNrZXIuY29uZmlnKTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBpY2tMZXZlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmlzTWluVmlldyA9IHRoaXMuaWQgPT09IG9wdGlvbnMucGlja0xldmVsO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy51cGRhdGVGb2N1cygpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gIH1cblxuICAvLyBFeGVjdXRlIGJlZm9yZVNob3coKSBjYWxsYmFjayBhbmQgYXBwbHkgdGhlIHJlc3VsdCB0byB0aGUgZWxlbWVudFxuICAvLyBhcmdzOlxuICAvLyAtIGN1cnJlbnQgLSBjdXJyZW50IHZhbHVlIG9uIHRoZSBpdGVyYXRpb24gb24gdmlldyByZW5kZXJpbmdcbiAgLy8gLSB0aW1lVmFsdWUgLSB0aW1lIHZhbHVlIG9mIHRoZSBkYXRlIHRvIHBhc3MgdG8gYmVmb3JlU2hvdygpXG4gIHBlcmZvcm1CZWZvcmVIb29rKGVsLCBjdXJyZW50LCB0aW1lVmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5iZWZvcmVTaG93KG5ldyBEYXRlKHRpbWVWYWx1ZSkpO1xuICAgIHN3aXRjaCAodHlwZW9mIHJlc3VsdCkge1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJlc3VsdCA9IHtlbmFibGVkOiByZXN1bHR9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIHJlc3VsdCA9IHtjbGFzc2VzOiByZXN1bHR9O1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQuZW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgICAgcHVzaFVuaXF1ZSh0aGlzLmRpc2FibGVkLCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuY2xhc3Nlcykge1xuICAgICAgICBjb25zdCBleHRyYUNsYXNzZXMgPSByZXN1bHQuY2xhc3Nlcy5zcGxpdCgvXFxzKy8pO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmV4dHJhQ2xhc3Nlcyk7XG4gICAgICAgIGlmIChleHRyYUNsYXNzZXMuaW5jbHVkZXMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICBwdXNoVW5pcXVlKHRoaXMuZGlzYWJsZWQsIGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmNvbnRlbnQpIHtcbiAgICAgICAgcmVwbGFjZUNoaWxkTm9kZXMoZWwsIHJlc3VsdC5jb250ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWUsIGNyZWF0ZVRhZ1JlcGVhdH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7ZGF0ZVZhbHVlLCBzdGFydE9mWWVhclBlcmlvZH0gZnJvbSAnLi4vLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtwYXJzZUhUTUx9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuZnVuY3Rpb24gdG9UaXRsZUNhc2Uod29yZCkge1xuICByZXR1cm4gWy4uLndvcmRdLnJlZHVjZSgoc3RyLCBjaCwgaXgpID0+IHN0ciArPSBpeCA/IGNoIDogY2gudG9VcHBlckNhc2UoKSwgJycpO1xufVxuXG4vLyBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHllYXJzIGFuZCBkZWNhZGVzIHZpZXcgZWxlbWVudHNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJzVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIsIGNvbmZpZykge1xuICAgIHN1cGVyKHBpY2tlciwgY29uZmlnKTtcbiAgfVxuXG4gIGluaXQob3B0aW9ucywgb25Db25zdHJ1Y3Rpb24gPSB0cnVlKSB7XG4gICAgaWYgKG9uQ29uc3RydWN0aW9uKSB7XG4gICAgICB0aGlzLm5hdlN0ZXAgPSB0aGlzLnN0ZXAgKiAxMDtcbiAgICAgIHRoaXMuYmVmb3JlU2hvd09wdGlvbiA9IGBiZWZvcmVTaG93JHt0b1RpdGxlQ2FzZSh0aGlzLmNlbGxDbGFzcyl9YDtcbiAgICAgIHRoaXMuZ3JpZCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMubmFtZSwgJ2RhdGVwaWNrZXItZ3JpZCcpO1xuICAgICAgdGhpcy5ncmlkLmFwcGVuZENoaWxkKHBhcnNlSFRNTChjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCAxMikpKTtcbiAgICB9XG4gICAgc3VwZXIuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5taW5EYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gdGhpcy5taW5EYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gc3RhcnRPZlllYXJQZXJpb2Qob3B0aW9ucy5taW5EYXRlLCB0aGlzLnN0ZXApO1xuICAgICAgICB0aGlzLm1pbkRhdGUgPSBkYXRlVmFsdWUodGhpcy5taW5ZZWFyLCAwLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1heERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFllYXIgPSB0aGlzLm1heERhdGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1heFllYXIgPSBzdGFydE9mWWVhclBlcmlvZChvcHRpb25zLm1heERhdGUsIHRoaXMuc3RlcCk7XG4gICAgICAgIHRoaXMubWF4RGF0ZSA9IGRhdGVWYWx1ZSh0aGlzLm1heFllYXIsIDExLCAzMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTWluVmlldykge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBvcHRpb25zLmRhdGVzRGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0ZXNEaXNhYmxlZCA9IFtdO1xuICAgIH1cbiAgICBpZiAob3B0aW9uc1t0aGlzLmJlZm9yZVNob3dPcHRpb25dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNob3cgPSBvcHRpb25zW3RoaXMuYmVmb3JlU2hvd09wdGlvbl07XG4gICAgICB0aGlzLmJlZm9yZVNob3cgPSB0eXBlb2YgYmVmb3JlU2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGJlZm9yZVNob3cgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSB2aWV3RGF0ZSBzZXQgb24gdGhlIHBpY2tlclxuICB1cGRhdGVGb2N1cygpIHtcbiAgICBjb25zdCB2aWV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMucGlja2VyLnZpZXdEYXRlKTtcbiAgICBjb25zdCBmaXJzdCA9IHN0YXJ0T2ZZZWFyUGVyaW9kKHZpZXdEYXRlLCB0aGlzLm5hdlN0ZXApO1xuICAgIGNvbnN0IGxhc3QgPSBmaXJzdCArIDkgKiB0aGlzLnN0ZXA7XG5cbiAgICB0aGlzLmZpcnN0ID0gZmlyc3Q7XG4gICAgdGhpcy5sYXN0ID0gbGFzdDtcbiAgICB0aGlzLnN0YXJ0ID0gZmlyc3QgLSB0aGlzLnN0ZXA7XG4gICAgdGhpcy5mb2N1c2VkID0gc3RhcnRPZlllYXJQZXJpb2Qodmlld0RhdGUsIHRoaXMuc3RlcCk7XG4gIH1cblxuICAvLyBVcGRhdGUgdmlldydzIHNldHRpbmdzIHRvIHJlZmxlY3QgdGhlIHNlbGVjdGVkIGRhdGVzXG4gIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCB7ZGF0ZXMsIHJhbmdlcGlja2VyfSA9IHRoaXMucGlja2VyLmRhdGVwaWNrZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVzLnJlZHVjZSgoeWVhcnMsIHRpbWVWYWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHB1c2hVbmlxdWUoeWVhcnMsIHN0YXJ0T2ZZZWFyUGVyaW9kKHRpbWVWYWx1ZSwgdGhpcy5zdGVwKSk7XG4gICAgfSwgW10pO1xuICAgIGlmIChyYW5nZXBpY2tlciAmJiByYW5nZXBpY2tlci5kYXRlcykge1xuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlcGlja2VyLmRhdGVzLm1hcCh0aW1lVmFsdWUgPT4ge1xuICAgICAgICBpZiAodGltZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhcnRPZlllYXJQZXJpb2QodGltZVZhbHVlLCB0aGlzLnN0ZXApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGVudGlyZSB2aWV3IFVJXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZWZyZXNoIGRpc2FibGVkIHllYXJzIG9uIGV2ZXJ5IHJlbmRlciBpbiBvcmRlciB0byBjbGVhciB0aGUgb25lcyBhZGRlZFxuICAgIC8vIGJ5IGJlZm9yZVNob3cgaG9vayBhdCBwcmV2aW91cyByZW5kZXJcbiAgICAvLyB0aGlzLmRpc2FibGVkID0gWy4uLnRoaXMuZGF0ZXNEaXNhYmxlZF07XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZC5tYXAoZGlzYWJsZWQgPT4gbmV3IERhdGUoZGlzYWJsZWQpLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgdGhpcy5waWNrZXIuc2V0Vmlld1N3aXRjaExhYmVsKGAke3RoaXMuZmlyc3R9LSR7dGhpcy5sYXN0fWApO1xuICAgIHRoaXMucGlja2VyLnNldFByZXZCdG5EaXNhYmxlZCh0aGlzLmZpcnN0IDw9IHRoaXMubWluWWVhcik7XG4gICAgdGhpcy5waWNrZXIuc2V0TmV4dEJ0bkRpc2FibGVkKHRoaXMubGFzdCA+PSB0aGlzLm1heFllYXIpO1xuXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuc3RhcnQgKyAoaW5kZXggKiB0aGlzLnN0ZXApO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVWYWx1ZShjdXJyZW50LCAwLCAxKTtcblxuICAgICAgZWwuY2xhc3NOYW1lID0gYGRhdGVwaWNrZXItY2VsbCAke3RoaXMuY2VsbENsYXNzfWA7XG4gICAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgICAgZWwuZGF0YXNldC5kYXRlID0gZGF0ZTtcbiAgICAgIH1cbiAgICAgIGVsLnRleHRDb250ZW50ID0gZWwuZGF0YXNldC55ZWFyID0gY3VycmVudDtcblxuICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDExKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50IDwgdGhpcy5taW5ZZWFyIHx8IGN1cnJlbnQgPiB0aGlzLm1heFllYXIgfHwgdGhpcy5kaXNhYmxlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2U7XG4gICAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5iZWZvcmVTaG93KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybUJlZm9yZUhvb2soZWwsIGN1cnJlbnQsIGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2VzIG9mIHNlbGVjdGVkIGFuZCBmb2N1c2VkIGl0ZW1zXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHRoaXMucmFuZ2UgfHwgW107XG4gICAgdGhpcy5ncmlkXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLCAucmFuZ2Utc3RhcnQsIC5yYW5nZS1lbmQsIC5zZWxlY3RlZCwgLmZvY3VzZWQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlJywgJ3JhbmdlLXN0YXJ0JywgJ3JhbmdlLWVuZCcsICdzZWxlY3RlZCcsICdmb2N1c2VkJyk7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBOdW1iZXIoZWwudGV4dENvbnRlbnQpO1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgaWYgKGN1cnJlbnQgPiByYW5nZVN0YXJ0ICYmIGN1cnJlbnQgPCByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlU3RhcnQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2Utc3RhcnQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlIG9mIGZvY3VzZWQgaXRlbVxuICByZWZyZXNoRm9jdXMoKSB7XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKCh0aGlzLmZvY3VzZWQgLSB0aGlzLnN0YXJ0KSAvIHRoaXMuc3RlcCk7XG4gICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1c2VkJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQuY2hpbGRyZW5baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gU09MSUQtXG4vLyBTIC0gU0lOR1VFIFJFU1BPTlNJQklMSVRZXG4vLyBPIC0gT1BFTi9DTE9TRURcbi8vIEwgLSBMSVNLT1YgU1VCU1RJVFVUSU9OIFBSSU5DSVBMRVxuLy8gSSAtIElOVEVSRkFDRSBTRUdSRUdBVElPTlxuLy8gRCAtIERFUEVOREVOQ1kgSU5WRVJTSU9OXG4vLyBEUlkgLSBET05UIFJFUEVBVCBZT1VSU0VMRlxuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBpc1ZhbGlkIGZyb20gJ2RhdGUtZm5zL2lzVmFsaWQnXG5pbXBvcnQgaXNQYXN0IGZyb20gJ2RhdGUtZm5zL2lzUGFzdCdcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyL0RhdGVwaWNrZXInO1xuaW1wb3J0IHsga2EgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuXG5jb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluUGFnZScpXG5jb25zdCBub3Rlc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubkZvcm1XcmFwcGVyJylcbmNvbnN0IHByb2pzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wRm9ybVdyYXBwZXInKVxuY29uc3QgY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkQ29udGFpbmVyJylcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3Rlc0J0bicpXG5jb25zdCBwcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pCdG4nKVxuYWRkQnRuLm9uY2xpY2sgPSBzaG93Tm90ZXNGb3JtXG5wcm9qQnRuLm9uY2xpY2sgPSBzaG93UHJvakZvcm1cbmNvbnN0IG5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25Gb3JtJylcbmNvbnN0IHBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BGb3JtJylcbm5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHN1Ym1pdE5vdGVRdWVzdGlvbnMpXG5wRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRQcm9qc1F1ZXN0aW9ucylcbmxldCBjdXJyQ2FyZENvbnRhaW5lcjtcblxuY29uc3QgZGF0ZXBpY2tlciA9IG5ldyBEYXRlcGlja2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyksIHtcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdkZC9tbS95eXl5J1xufSlcblxuZnVuY3Rpb24gc2hvd05vdGVzRm9ybSAoKSB7XG4gICAgYXR0YWNoUHJvanMocGFnZURhdGEuZ2V0UHJvanMoKSlcbiAgICBub3Rlc0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd0Zvcm0nKVxuICAgIHJldHVyblxufVxuXG5mdW5jdGlvbiBzaG93UHJvakZvcm0gKCkge1xuICAgIHByb2pzRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Rm9ybScpXG4gICAgcmV0dXJuXG59XG5cbmZ1bmN0aW9uIGF0dGFjaFByb2pzIChwcm9qT2JqVmFsdWVzKSB7XG4gICAgY29uc3QgcHJvalNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qU2VsZWN0JylcbiAgICBjbGVhclBhZ2UocHJvalNlbGVjdClcbiAgICBsZXQgcHJvakRvbVZhbHVlcyA9IG1ha2VEb21PYmplY3QubWFrZU9wdGlvbnMocHJvak9ialZhbHVlcylcbiAgICBwcm9qRG9tVmFsdWVzLmZvckVhY2goZG9tID0+IHByb2pTZWxlY3QuYXBwZW5kQ2hpbGQoZG9tKSlcbiAgICByZXR1cm5cbn1cblxuZnVuY3Rpb24gc3VibWl0Tm90ZVF1ZXN0aW9ucyAoZXZlbnQpIHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpXG4gICAgbGV0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpXG4gICAgXG4gICAgcGFnZURhdGEuYWRkTm90ZShkYXRhKVxuICAgIG1ha2VEb21PYmplY3QudXBkYXRlUHJvalRhYkVsZShkYXRhLnByb2opXG4gICAgLy8gY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWtlRG9tT2JqZWN0Lm1ha2VOb3RlKGRhdGEpKVxuICAgIGlmKGN1cnJDYXJkQ29udGFpbmVyID09IGRhdGEucHJvaikge1xuICAgICAgICBzaG93UHJvamVjdE5vdGVzKGRhdGEucHJvailcbiAgICB9XG4gICAgbm90ZXNGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dGb3JtJylcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpXG4gICAgcmV0dXJuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2pzUXVlc3Rpb25zIChldmVudCkge1xuICAgIGNvbnN0IHByb2pTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldClcbiAgICBsZXQgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSlcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGlmKHBhZ2VEYXRhLmR1cGxpY2F0ZVByb2ooZGF0YS5uYW1lKSkgcmV0dXJuXG4gICAgcGFnZURhdGEuYWRkUHJvaihkYXRhKVxuICAgIGFkZFRvUGFnZShwcm9qU2lkZWJhciwgbWFrZURvbU9iamVjdC5tYWtlUHJvalRhYkVsZShkYXRhLm5hbWUpKVxuICAgIHByb2pzRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Rm9ybScpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC50YXJnZXQucmVzZXQoKVxuICAgIHJldHVyblxufVxuXG5mdW5jdGlvbiBhZGRUb1BhZ2UgKGNvbnRhaW5lciwgLi4uY2hpbGROb2Rlcykge1xuICAgIHJldHVybiBjaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSkpXG59XG5cbmNvbnN0IHBhZ2VEYXRhID0gKCgpID0+IHtcbiAgICBsZXQgbm90ZXNEYXRhID0gW107XG4gICAgbGV0IHByb2plY3RzRGF0YSA9IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgdG9Eb3M6IFtdLFxuICAgICAgICAgICAgaWQ6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgbm90ZUlkID0gMDtcbiAgICBsZXQgcHJvaklkID0gMTtcblxuICAgIGNvbnN0IGFkZE5vdGUgPSAoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmRhdGFJZCA9IG5vdGVJZFxuICAgICAgICBwcm9qZWN0c0RhdGFbaXRlbS5wcm9qXS50b0Rvcy5wdXNoKGl0ZW0pXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIHByb2plY3RzRGF0YSlcbiAgICAgICAgbm90ZUlkKys7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvaiA9IChwcm9qKSA9PiB7XG4gICAgICAgIGlmKHByb2plY3RzRGF0YVtwcm9qLm5hbWVdKSByZXR1cm4gZmFsc2VcbiAgICAgICAgcHJvamVjdHNEYXRhW3Byb2oubmFtZV0gPSB7XG4gICAgICAgICAgICBuYW1lOiBwcm9qLm5hbWUsXG4gICAgICAgICAgICB0b0RvczogW10sXG4gICAgICAgICAgICBpZDogcHJvaklkXG4gICAgICAgIH1cbiAgICAgICAgcHJvaklkKys7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzRGF0YSlcbiAgICAgICAgY29uc29sZS5sb2coZ2V0UHJvanMoKSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzRGF0YVxuXG4gICAgY29uc3QgZ2V0UHJvanMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qTmFtZXMgPSBbXVxuICAgICAgICBmb3IobGV0IHByb2plY3QgaW4gcHJvamVjdHNEYXRhKSB7XG4gICAgICAgICAgICBwcm9qTmFtZXMucHVzaChwcm9qZWN0c0RhdGFbcHJvamVjdF0ubmFtZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvak5hbWVzXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvak5vdGVzID0gKHByb2opID0+IHByb2plY3RzRGF0YVtwcm9qXS50b0Rvc1xuXG4gICAgY29uc3QgZ2V0UHJvakRhdGEgPSAocHJvaikgPT4gcHJvamVjdHNEYXRhW3Byb2pdXG5cbiAgICBjb25zdCBkdXBsaWNhdGVQcm9qID0gKHByb2opID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzRGF0YVtwcm9qXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZE5vdGUsIGdldE5vdGVzLCBhZGRQcm9qLCBnZXRQcm9qcywgZ2V0UHJvak5vdGVzLCBkdXBsaWNhdGVQcm9qLCBnZXRQcm9qRGF0YX1cbn0pKCk7XG5cbmNvbnN0IG1ha2VEb21PYmplY3QgPSAoKCkgPT4ge1xuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgbWFrZU5vdGUgPSAoe3RpdGxlLCBkZXNjLCBkYXRlLCBwcmlvLCBkYXRhSWR9KSA9PiB7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgY2FyZCR7ZGF0YUlkfWApXG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG5cbiAgICAgICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRUaXRsZScpXG4gICAgICAgIHQuaW5uZXJUZXh0ID0gYCR7dGl0bGV9YFxuXG4gICAgICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmREZXNjJylcbiAgICAgICAgZC5pbm5lclRleHQgPSBgJHtkZXNjfWBcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkRGF0ZWApXG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCR7ZGF0ZX1gXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdjYXJkUHJpbycpXG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGAke3ByaW99IHByaW9yaXR5YFxuICAgICAgICBcbiAgICAgICAgYWRkVG9QYWdlKG5vZGUsIHQsIGQsIGR1ZURhdGUsIHByaW9yaXR5KVxuXG4gICAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU9wdGlvbnMgPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIGxldCBkb21JdGVtcyA9IHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgbGV0IGRvbVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIGRvbVZhbHVlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSlcbiAgICAgICAgICAgIGRvbVZhbHVlLmlubmVyVGV4dCA9IGNhcGl0YWxpemVkKHZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuIGRvbVZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBkb21JdGVtc1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQcm9qVGFiRWxlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGxldCBzaWRlYmFyRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHNpZGViYXJFbGUuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApXG4gICAgICAgIHNpZGViYXJFbGUuaW5uZXJUZXh0ID0gYCR7cHJvamVjdE5hbWV9LS0tLS0tLS0ke3BhZ2VEYXRhLmdldFByb2pOb3Rlcyhwcm9qZWN0TmFtZSkubGVuZ3RofWBcbiAgICAgICAgc2lkZWJhckVsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFByb2plY3ROb3RlcylcbiAgICAgICAgcmV0dXJuIHNpZGViYXJFbGVcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qVGFiRWxlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIGxldCBzaWRlYmFyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cHJvamVjdE5hbWV9YClcbiAgICAgICAgc2lkZWJhckVsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0TmFtZX0tLS0tLS0tLSR7cGFnZURhdGEuZ2V0UHJvak5vdGVzKHByb2plY3ROYW1lKS5sZW5ndGh9YFxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpbml0U2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBwcm9qIG9mIHBhZ2VEYXRhLmdldFByb2pzKCkpIHtcbiAgICAgICAgICAgIGFkZFRvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLCBtYWtlUHJvalRhYkVsZShwcm9qKSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4ge21ha2VOb3RlLCBtYWtlT3B0aW9ucywgbWFrZVByb2pUYWJFbGUsIHVwZGF0ZVByb2pUYWJFbGUsIGluaXRTaWRlYmFyfVxufSkoKTtcblxuZnVuY3Rpb24gaXNGb3JtVmFsaWQgKHt0aXRsZSwgZGVzYywgZHVlRH0pIHtcbiAgICBsZXQgW2RheSwgbW9udGgsIHllYXJdID0gZHVlRC5zcGxpdCgnLycpXG4gICAgbW9udGgtLTtcbiAgICAvLzIzOjU5OjU5IHRvIGJlIGFibGUgdG8gZGVmaW5lIG5vdGUgZm9yIHNhbWUgZGF5XG4gICAgbGV0IGZEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLCBkYXksIDIzLCA1OSwgNTkpXG4gICAgY29uc29sZS5sb2coZkRhdGUpXG5cbiAgICBpZih0aXRsZSA9PT0gJycpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnZmFpbFRpdGxlJylcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSBlbHNlIGlmIChkZXNjID09PSAnJykge1xuICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJylcbiAgICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdmYWlsRGVzYycpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQoZkRhdGUpKSB7XG4gICAgICAgIGxldCBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZUQnKVxuICAgICAgICBkLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhc3REYXRlJylcbiAgICAgICAgZC5jbGFzc0xpc3QuYWRkKCdibGFua0RhdGUnKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGlzUGFzdChmRGF0ZSkpIHtcbiAgICAgICAgbGV0IGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRCcpXG4gICAgICAgIGQuY2xhc3NMaXN0LnJlbW92ZSgnYmxhbmtEYXRlJylcbiAgICAgICAgZC5jbGFzc0xpc3QuYWRkKCdwYXN0RGF0ZScpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVkICh2YWx1ZSkge1xuICAgIGxldCBzdHIgPSB2YWx1ZVxuICAgIGxldCBzdHIyID0gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICAgIHJldHVybiBzdHIyXG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFnZSAoZWxlbWVudCkge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3ROb3RlcyAoZXZlbnQpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZXZlbnQudGFyZ2V0LmlkXG4gICAgY3VyckNhcmRDb250YWluZXIgPSBwcm9qZWN0XG4gICAgc2hvd1Byb2plY3ROb3Rlcyhwcm9qZWN0KVxufVxuXG5mdW5jdGlvbiBzaG93UHJvamVjdE5vdGVzIChkYXRhKSB7XG4gICAgY29uc3QgcHJvamVjdERhdGEgPSBwYWdlRGF0YS5nZXRQcm9qRGF0YShkYXRhKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkQ29udGFpbmVyJylcbiAgICBjb25zdCBwcm9qQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvakNvbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2RhdGF9Q29udGFpbmVyYClcbiAgICBwcm9qQ29udC5pbm5lclRleHQgPSBgJHtkYXRhfSBQcm9qZWN0YFxuICAgIHByb2plY3REYXRhLnRvRG9zLmZvckVhY2gob2JqID0+IGFkZFRvUGFnZShwcm9qQ29udCwgbWFrZURvbU9iamVjdC5tYWtlTm90ZShvYmopKSlcbiAgICBjbGVhclBhZ2UoY29udGFpbmVyKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qQ29udClcblxufVxuXG5tYWtlRG9tT2JqZWN0LmluaXRTaWRlYmFyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=