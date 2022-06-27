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
___CSS_LOADER_EXPORT___.push([module.id, ".datepicker {\n  display: none;\n}\n.datepicker.active {\n  display: block;\n}\n\n.datepicker-dropdown {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-top: 4px;\n}\n.datepicker-dropdown.datepicker-orient-top {\n  padding-top: 0;\n  padding-bottom: 4px;\n}\n\n.datepicker-picker {\n  display: inline-block;\n  border-radius: 4px;\n  background-color: hsl(0deg, 0%, 100%);\n}\n.datepicker-dropdown .datepicker-picker {\n  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);\n}\n.datepicker-picker span {\n  display: block;\n  flex: 1;\n  border: 0;\n  border-radius: 4px;\n  cursor: default;\n  text-align: center;\n  -webkit-touch-callout: none;\n  user-select: none;\n}\n\n.datepicker-main {\n  padding: 2px;\n}\n\n.datepicker-footer {\n  box-shadow: inset 0 1px 1px rgba(10, 10, 10, 0.1);\n  background-color: hsl(0deg, 0%, 96%);\n}\n\n.datepicker-grid, .datepicker-view .days-of-week, .datepicker-view, .datepicker-controls {\n  display: flex;\n}\n\n.datepicker-grid {\n  flex-wrap: wrap;\n}\n\n.datepicker-view .days .datepicker-cell, .datepicker-view .dow {\n  flex-basis: 14.2857142857%;\n}\n\n.datepicker-view.datepicker-grid .datepicker-cell {\n  flex-basis: 25%;\n}\n\n.datepicker-cell, .datepicker-view .week {\n  height: 2.25rem;\n  line-height: 2.25rem;\n}\n\n.datepicker-title {\n  box-shadow: inset 0 -1px 1px rgba(10, 10, 10, 0.1);\n  background-color: hsl(0deg, 0%, 96%);\n  padding: 0.375rem 0.75rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.datepicker-header .datepicker-controls {\n  padding: 2px 2px 0;\n}\n.datepicker-controls .button {\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  box-shadow: none;\n  background-color: hsl(0deg, 0%, 100%);\n  cursor: pointer;\n  padding: calc(0.375em - 1px) 0.75em;\n  height: 2.25em;\n  vertical-align: top;\n  text-align: center;\n  line-height: 1.5;\n  white-space: nowrap;\n  color: hsl(0deg, 0%, 21%);\n  font-size: 1rem;\n}\n.datepicker-controls .button:focus, .datepicker-controls .button:active {\n  outline: none;\n}\n.datepicker-controls .button:hover {\n  border-color: #b5b5b5;\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button:focus {\n  border-color: hsl(217deg, 71%, 53%);\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button:focus:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);\n}\n.datepicker-controls .button:active {\n  border-color: #4a4a4a;\n  color: hsl(0deg, 0%, 21%);\n}\n.datepicker-controls .button[disabled] {\n  cursor: not-allowed;\n}\n.datepicker-header .datepicker-controls .button {\n  border-color: transparent;\n  font-weight: bold;\n}\n.datepicker-header .datepicker-controls .button:hover {\n  background-color: #f9f9f9;\n}\n.datepicker-header .datepicker-controls .button:focus:not(:active) {\n  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);\n}\n.datepicker-header .datepicker-controls .button:active {\n  background-color: #f2f2f2;\n}\n.datepicker-header .datepicker-controls .button[disabled] {\n  box-shadow: none;\n}\n.datepicker-footer .datepicker-controls .button {\n  margin: calc(0.375rem - 1px) 0.375rem;\n  border-radius: 2px;\n  width: 100%;\n  font-size: 0.75rem;\n}\n.datepicker-controls .view-switch {\n  flex: auto;\n}\n.datepicker-controls .prev-btn,\n.datepicker-controls .next-btn {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem;\n  width: 2.25rem;\n}\n.datepicker-controls .prev-btn.disabled,\n.datepicker-controls .next-btn.disabled {\n  visibility: hidden;\n}\n\n.datepicker-view .dow {\n  height: 1.5rem;\n  line-height: 1.5rem;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.datepicker-view .week {\n  width: 2.25rem;\n  color: #b5b5b5;\n  font-size: 0.75rem;\n}\n@media (max-width: 22.5rem) {\n  .datepicker-view .week {\n    width: 1.96875rem;\n  }\n}\n\n.datepicker-grid {\n  width: 15.75rem;\n}\n@media (max-width: 22.5rem) {\n  .calendar-weeks + .days .datepicker-grid {\n    width: 13.78125rem;\n  }\n}\n\n.datepicker-cell:not(.disabled):hover {\n  background-color: #f9f9f9;\n  cursor: pointer;\n}\n.datepicker-cell.focused:not(.selected) {\n  background-color: #e8e8e8;\n}\n.datepicker-cell.selected, .datepicker-cell.selected:hover {\n  background-color: hsl(217deg, 71%, 53%);\n  color: #fff;\n  font-weight: 600;\n}\n.datepicker-cell.disabled {\n  color: #dbdbdb;\n}\n.datepicker-cell.prev:not(.disabled), .datepicker-cell.next:not(.disabled) {\n  color: hsl(0deg, 0%, 48%);\n}\n.datepicker-cell.prev.selected, .datepicker-cell.next.selected {\n  color: #e6e6e6;\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today) {\n  border-radius: 0;\n  background-color: hsl(0deg, 0%, 96%);\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today):not(.disabled):hover {\n  background-color: #eeeeee;\n}\n.datepicker-cell.highlighted:not(.selected):not(.range):not(.today).focused {\n  background-color: #e8e8e8;\n}\n.datepicker-cell.today:not(.selected) {\n  background-color: hsl(171deg, 100%, 41%);\n}\n.datepicker-cell.today:not(.selected):not(.disabled) {\n  color: #fff;\n}\n.datepicker-cell.today.focused:not(.selected) {\n  background-color: #00c4a7;\n}\n.datepicker-cell.range-end:not(.selected), .datepicker-cell.range-start:not(.selected) {\n  background-color: #b5b5b5;\n  color: #fff;\n}\n.datepicker-cell.range-end.focused:not(.selected), .datepicker-cell.range-start.focused:not(.selected) {\n  background-color: #afafaf;\n}\n.datepicker-cell.range-start {\n  border-radius: 4px 0 0 4px;\n}\n.datepicker-cell.range-end {\n  border-radius: 0 4px 4px 0;\n}\n.datepicker-cell.range {\n  border-radius: 0;\n  background-color: #dbdbdb;\n}\n.datepicker-cell.range:not(.disabled):not(.focused):not(.today):hover {\n  background-color: #d5d5d5;\n}\n.datepicker-cell.range.disabled {\n  color: #c2c2c2;\n}\n.datepicker-cell.range.focused {\n  background-color: #cfcfcf;\n}\n.datepicker-view.datepicker-grid .datepicker-cell {\n  height: 4.5rem;\n  line-height: 4.5rem;\n}\n\n.datepicker-input.in-edit {\n  border-color: #2366d1;\n}\n.datepicker-input.in-edit:focus, .datepicker-input.in-edit:active {\n  box-shadow: 0 0 0.25em 0.25em rgba(35, 102, 209, 0.2);\n}\n\n#header {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  grid-area: header;\n}\n\n#formContainer, .nFormWrapper, .pFormWrapper {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n}\n\n#nForm, #pForm {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 300px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  padding: 2rem;\n}\n\n.mainPage {\n  display: grid;\n  grid-template-areas: \"header  header header header header\" \"sidebar card   card   card   card  \" \"sidebar card   card   card   card  \";\n}\n\n.sidebar {\n  display: grid;\n  grid-area: sidebar;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n}\n\n.cardContainer {\n  grid-area: card;\n}\n\n.showForm {\n  display: block !important;\n}\n\n.formTitle {\n  grid-column: 1/-1;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./node_modules/vanillajs-datepicker/sass/datepicker.scss","webpack://./src/style.css","webpack://./node_modules/vanillajs-datepicker/sass/_mixins.scss","webpack://./src/style.scss"],"names":[],"mappings":"AA0DA;EACE,aAAA;ACzDF;AD2DE;EACE,cAAA;ACzDJ;;AD6DA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WA7Cc;EA8Cd,gBAhDmB;ACVrB;AD4DE;EACE,cAAA;EACA,mBApDiB;ACNrB;;AD8DA;EACE,qBAAA;EACA,kBAjEiB;EAkEjB,qCA9EM;ACmBR;AD6DE;EACE,4EA7DiB;ACErB;AD8DE;EACE,cAAA;EACA,OAAA;EACA,SAAA;EACA,kBA5Ee;EA6Ef,eAAA;EACA,kBAAA;EACA,2BAAA;EACA,iBAAA;AC5DJ;;ADgEA;EACE,YAAA;AC7DF;;ADgEA;EACE,iDAAA;EACA,oCArGM;ACwCR;;ADgEA;EACE,aAAA;AC7DF;;ADgEA;EACE,eAAA;AC7DF;;ADgEA;EACE,0BAAA;AC7DF;;ADgEA;EACE,eAAA;AC7DF;;ADgEA;EACE,eAjGkB;EAkGlB,oBAlGkB;ACqCpB;;ADgEA;EACE,kDAAA;EACA,oCA/HM;EAgIN,yBAAA;EACA,kBAAA;EACA,gBAjHoB;ACoDtB;;ADmEE;EACE,kBAAA;AChEJ;ADsEI;EAqBE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,yBAAA;EACA,kBA/Ja;EAgKb,gBAAA;EACA,qCA7KE;EA8KF,eAAA;EACA,mCAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBArKgB;EAsKhB,mBAAA;EACA,yBAnLC;EAoLD,eAvKgB;AC+EtB;AD0FM;EAEE,aAAA;ACzFR;AD4FM;EACE,qBAxLK;EAyLL,yBA7LD;ACmGP;AD6FM;EACE,mCAhMD;EAiMC,yBAlMD;ACuGP;AD6FQ;EACE,kDAAA;AC3FV;AD+FM;EACE,qBAvMI;EAwMJ,yBA3MD;AC8GP;ADgGM;EACE,mBAAA;AC9FR;ADiGM;EEtNJ,yBAAA;EACA,iBAAA;ADwHF;ADgGQ;EACE,yBAAA;AC9FV;ADkGU;EACE,mDAAA;AChGZ;ADoGQ;EACE,yBAAA;AClGV;ADqGQ;EACE,gBAAA;ACnGV;ADuGM;EEvOJ,qCAAA;EACA,kBFSuB;EERvB,WAAA;EACA,kBFUmB;ACyHrB;ADuGE;EACE,UAAA;ACrGJ;ADwGE;;EAEE,uBAAA;EACA,sBAAA;EACA,cA/NgB;ACyHpB;ADwGI;;EACE,kBAAA;ACrGN;;ADiHE;EAEE,cAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBA1PkB;AC2ItB;ADkHE;EAEE,cAxPgB;EAyPhB,cA5QS;EA6QT,kBAnQiB;ACkJrB;ADmHI;EANF;IAOI,iBAtOmB;ECsHvB;AACF;;ADoHA;EAIE,eAAA;ACpHF;ADsHE;EACE;IACE,kBAAA;ECpHJ;AACF;;AD2HE;EACE,yBAAA;EACA,eAAA;ACxHJ;AD2HE;EACE,yBAvR6B;AC8JjC;AD6HI;EAEE,uCApTC;EAqTD,WA1RmB;EA2RnB,gBA1RyB;AC8J/B;ADgIE;EACE,cAvTW;ACyLf;ADmII;EACE,yBAzSmB;ACwKzB;ADoII;EACE,cAAA;AClIN;ADsIE;EACE,gBAAA;EACA,oCA7UI;ACyMR;ADsII;EACE,yBAAA;ACpIN;ADuII;EACE,yBA3T2B;ACsLjC;AD0II;EACE,wCA3T2B;ACmLjC;AD0IM;EACE,WA7Tc;ACqLtB;AD4II;EACE,yBAAA;AC1IN;AD8IE;EACE,yBAlWS;EAmWT,WA3UqB;AC+LzB;AD+IE;EACE,yBAAA;AC7IJ;ADgJE;EACE,0BAAA;AC9IJ;ADyJE;EACE,0BAAA;ACvJJ;ADkKE;EACE,gBAAA;EACA,yBAnYW;ACmOf;ADkKI;EACE,yBAAA;AChKN;ADmKI;EACE,cAAA;ACjKN;ADoKI;EACE,yBAAA;AClKN;ADgLE;EAEE,cAAA;EACA,mBAAA;AC/KJ;;ADmLA;EACE,qBAhY8B;ACgNhC;ADkLE;EAEE,qDAAA;ACjLJ;;AEhQA;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,iBAAA;AFmQJ;;AEhQA;EACI,aAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,UAAA;AFmQJ;;AEhQA;EACI,eAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AFmQJ;;AEhQA;EACI,aAAA;EACA,sIAAA;AFmQJ;;AE9PA;EACI,aAAA;EACA,kBAAA;EACA,8BAAA;EACA,mBAAA;AFiQJ;;AE9PA;EACI,eAAA;AFiQJ;;AE9PA;EACI,yBAAA;AFiQJ;;AE9PA;EACI,iBAAA;AFiQJ;;AAEA,oCAAoC","sourceRoot":""}]);
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
/* harmony import */ var vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanillajs-datepicker/Datepicker */ "./node_modules/vanillajs-datepicker/js/Datepicker.js");
// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF


// import isValid from 'date-fns/isValid';
// import isPast from 'date-fns/isPast';

// import { ka } from 'date-fns/locale';

const notesForm = document.querySelector('.nFormWrapper');
const projsForm = document.querySelector('.pFormWrapper');
const addBtn = document.querySelector('#notesBtn');
const projBtn = document.querySelector('#projBtn');
const nForm = document.querySelector('#nForm');
const pForm = document.querySelector('#pForm');
let currCardContainer;

// eslint-disable-next-line no-unused-vars
const datepicker = new vanillajs_datepicker_Datepicker__WEBPACK_IMPORTED_MODULE_1__["default"](document.querySelector('#date'), {
    autohide: true,
    format: 'dd/mm/yyyy'
});

function showNotesForm () {
    attachProjs(pageData.getProjs());
    notesForm.classList.toggle('showForm');
    return;
}

function showProjForm () {
    projsForm.classList.toggle('showForm');
    return;
}

function attachProjs (projObjValues) {
    const projSelector = document.querySelector('#projSelect');
    clearDom(projSelector);
    let projDomValues = makeDomObject.makeOptions(projObjValues);
    projDomValues.forEach(dom => projSelector.appendChild(dom));
    return;
}

function addNote (event) {
    event.preventDefault();

    let data = Object.fromEntries(new FormData(event.target));

    pageData.addNote(data)
      .then(makeDomObject.updateProjTabEle);

    if (currCardContainer === data.proj) showProjectNotes(pageData.getProject(data.proj));

    notesForm.classList.toggle('showForm');
    event.target.reset();
    return;
}

function addProject (event) {
    event.preventDefault();

    if (pageData.duplicateProj(event.target.name.value)) {
        projsForm.classList.toggle('showForm');
        event.target.reset();
        return;
    }

    const projSidebar = document.querySelector('.sidebar');

    let data = Object.fromEntries(new FormData(event.target));

    pageData.addProj(data)
      .then(addToPage(projSidebar, makeDomObject.makeProjTabEle(data.name)))

    projsForm.classList.toggle('showForm');
    event.target.reset();
    return;
}

function addToPage (container, ...childNodes) {
    return childNodes.forEach(node => container.appendChild(node));
}

const pageData = (() => {
    let projectsData = {
        default: {
            name: 'default',
            toDos: [],
            id: 0
        }
    };
    let noteId = 0;
    let projId = 1;

    const addNote = (item) => {
        return new Promise((resolve, reject) => {
            if(projectsData[item.proj]) {
                item.dataId = noteId;
                projectsData[item.proj].toDos.push(item);
                noteId++;
                resolve(item.proj)
            }
            else reject('Error: project not found')
        })

    };

    const addProj = (proj) => {
        return new Promise((resolve, reject) => {
            if(projectsData[proj.name]) reject('Project already on page')

            projectsData[proj.name] = {
                name: proj.name,
                toDos: [],
                id: projId
            };
            projId++;
            resolve(proj.name)
        })


    };

    const getProjs = () => {
        let projNames = [];
        for(let project in projectsData) {
            projNames.push(projectsData[project].name);
        }
        return projNames;
    };

    const getProjNotes = (proj) => projectsData[proj].toDos;

    const getProject = (proj) => projectsData[proj];

    const duplicateProj = (proj) => {
        if (projectsData[proj]) {
            return true;
            //add error message
        }
        return false;
    };

    return {addNote, addProj, getProjs, getProjNotes, duplicateProj, getProject};
})();

const makeDomObject = (() => {
    let node;

    const makeNote = ({title, desc, date, prio, dataId}) => {
        node = document.createElement('div');
        node.setAttribute('id', `card${dataId}`);
        node.classList.add('card');

        const t = document.createElement('h2');
        t.setAttribute('id', 'cardTitle');
        t.innerText = `${title}`;

        const d = document.createElement('p');
        d.setAttribute('id', 'cardDesc');
        d.innerText = `${desc}`;

        const dueDate = document.createElement('p');
        dueDate.setAttribute('id', `cardDate`);
        dueDate.innerText = `${date}`;

        const priority = document.createElement('p');
        priority.setAttribute('id', 'cardPrio');
        priority.innerText = `${prio} priority`;
        
        addToPage(node, t, d, dueDate, priority);

        return node;
    };

    const makeOptions = (values) => {
        let domItems = values.map(value => {
            let domValue = document.createElement('option');
            domValue.setAttribute('value', value);
            domValue.innerText = capitalized(value);
            return domValue;
        });
        return domItems;
    };

    const makeProjTabEle = (projectName) => {
        let sidebarEle = document.createElement('p');
        sidebarEle.setAttribute('id', `${projectName}`);
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`;
        sidebarEle.addEventListener('click', getProjectNotes);
        return sidebarEle;
    };

    const updateProjTabEle = (projectName) => {
        let sidebarEle = document.querySelector(`#${projectName}`);
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`;
        return;
    };

    const initSidebar = () => {
        for(let proj of pageData.getProjs()) {
            addToPage(document.querySelector('.sidebar'), makeProjTabEle(proj));
        }
        return;
    };

    return {makeNote, makeOptions, makeProjTabEle, updateProjTabEle, initSidebar};
})();

// function isFormValid ({title, desc, dueD}) {
//     let [day, month, year] = dueD.split('/');
//     month--;
//     //23:59:59 to be able to define note for same day
//     let fDate = new Date(year, month , day, 23, 59, 59);

//     if(title === '') {
//         let title = document.querySelector('#title');
//         title.classList.add('failTitle');
//         return false;
//     } else if (desc === '') {
//         let desc = document.querySelector('#desc');
//         desc.classList.add('failDesc');
//         return false;
//     } else if (!isValid(fDate)) {
//         let d = document.querySelector('#dueD');
//         d.classList.remove('pastDate');
//         d.classList.add('blankDate');
//         return false;
//     } else if (isPast(fDate)) {
//         let d = document.querySelector('#dueD');
//         d.classList.remove('blankDate');
//         d.classList.add('pastDate');
//         return false;
//     }

//     return true;
// }

function capitalized (value) {
    let str = value;
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

function clearDom (element) {
    while (element.firstChild) {
       element.removeChild(element.firstChild);
    }
}

function getProjectNotes (event) {
    const project = event.target.id;
    currCardContainer = project;
    showProjectNotes(pageData.getProject(project));
}

function showProjectNotes ({name, toDos}) {

    const container = document.querySelector('.cardContainer');
    const projCont = document.createElement('div');
    projCont.setAttribute('id', `${name}Container`);
    projCont.innerText = `${name} Project`;
    toDos.forEach(obj => addToPage(projCont, makeDomObject.makeNote(obj)));
    clearDom(container);
    container.appendChild(projCont);

}

nForm.addEventListener('submit', addNote);
pForm.addEventListener('submit', addProject)
projBtn.onclick = showProjForm;
addBtn.onclick = showNotesForm;

makeDomObject.initSidebar();
showProjectNotes(pageData.getProject('default'));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGtCQUFrQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRywwQkFBMEIsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IscUJBQXFCLEdBQUcsOENBQThDLG1CQUFtQix3QkFBd0IsR0FBRyx3QkFBd0IsMEJBQTBCLHVCQUF1QiwwQ0FBMEMsR0FBRywyQ0FBMkMsaUZBQWlGLEdBQUcsMkJBQTJCLG1CQUFtQixZQUFZLGNBQWMsdUJBQXVCLG9CQUFvQix1QkFBdUIsZ0NBQWdDLHNCQUFzQixHQUFHLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0Isc0RBQXNELHlDQUF5QyxHQUFHLDhGQUE4RixrQkFBa0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsb0VBQW9FLCtCQUErQixHQUFHLHVEQUF1RCxvQkFBb0IsR0FBRyw4Q0FBOEMsb0JBQW9CLHlCQUF5QixHQUFHLHVCQUF1Qix1REFBdUQseUNBQXlDLDhCQUE4Qix1QkFBdUIscUJBQXFCLEdBQUcsNkNBQTZDLHVCQUF1QixHQUFHLGdDQUFnQyx5QkFBeUIsdUJBQXVCLHdCQUF3Qiw0QkFBNEIsY0FBYyw4QkFBOEIsdUJBQXVCLHFCQUFxQiwwQ0FBMEMsb0JBQW9CLHdDQUF3QyxtQkFBbUIsd0JBQXdCLHVCQUF1QixxQkFBcUIsd0JBQXdCLDhCQUE4QixvQkFBb0IsR0FBRywyRUFBMkUsa0JBQWtCLEdBQUcsc0NBQXNDLDBCQUEwQiw4QkFBOEIsR0FBRyxzQ0FBc0Msd0NBQXdDLDhCQUE4QixHQUFHLG1EQUFtRCx1REFBdUQsR0FBRyx1Q0FBdUMsMEJBQTBCLDhCQUE4QixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRyxtREFBbUQsOEJBQThCLHNCQUFzQixHQUFHLHlEQUF5RCw4QkFBOEIsR0FBRyxzRUFBc0Usd0RBQXdELEdBQUcsMERBQTBELDhCQUE4QixHQUFHLDZEQUE2RCxxQkFBcUIsR0FBRyxtREFBbUQsMENBQTBDLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcscUNBQXFDLGVBQWUsR0FBRyxtRUFBbUUsNEJBQTRCLDJCQUEyQixtQkFBbUIsR0FBRyxxRkFBcUYsdUJBQXVCLEdBQUcsMkJBQTJCLG1CQUFtQix3QkFBd0Isd0JBQXdCLHFCQUFxQixHQUFHLDBCQUEwQixtQkFBbUIsbUJBQW1CLHVCQUF1QixHQUFHLCtCQUErQiw0QkFBNEIsd0JBQXdCLEtBQUssR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsK0JBQStCLDhDQUE4Qyx5QkFBeUIsS0FBSyxHQUFHLDJDQUEyQyw4QkFBOEIsb0JBQW9CLEdBQUcsMkNBQTJDLDhCQUE4QixHQUFHLDhEQUE4RCw0Q0FBNEMsZ0JBQWdCLHFCQUFxQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyw4RUFBOEUsOEJBQThCLEdBQUcsa0VBQWtFLG1CQUFtQixHQUFHLHVFQUF1RSxxQkFBcUIseUNBQXlDLEdBQUcsNEZBQTRGLDhCQUE4QixHQUFHLCtFQUErRSw4QkFBOEIsR0FBRyx5Q0FBeUMsNkNBQTZDLEdBQUcsd0RBQXdELGdCQUFnQixHQUFHLGlEQUFpRCw4QkFBOEIsR0FBRywwRkFBMEYsOEJBQThCLGdCQUFnQixHQUFHLDBHQUEwRyw4QkFBOEIsR0FBRyxnQ0FBZ0MsK0JBQStCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLDBCQUEwQixxQkFBcUIsOEJBQThCLEdBQUcseUVBQXlFLDhCQUE4QixHQUFHLG1DQUFtQyxtQkFBbUIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcscURBQXFELG1CQUFtQix3QkFBd0IsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcscUVBQXFFLDBEQUEwRCxHQUFHLGFBQWEsa0JBQWtCLHdCQUF3QixrQ0FBa0Msc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQixvQkFBb0IsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIseUNBQXlDLGVBQWUsR0FBRyxvQkFBb0Isb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsaUJBQWlCLGtCQUFrQiw0QkFBNEIsa0JBQWtCLG1DQUFtQywwQkFBMEIsd0JBQXdCLGtCQUFrQixHQUFHLGVBQWUsa0JBQWtCLGlKQUFpSixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1QixtQ0FBbUMsd0JBQXdCLEdBQUcsb0JBQW9CLG9CQUFvQixHQUFHLGVBQWUsOEJBQThCLEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLGtEQUFrRCxxUEFBcVAsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxjQUFjLE1BQU0sTUFBTSxVQUFVLGFBQWEsT0FBTyxNQUFNLFdBQVcsYUFBYSxjQUFjLE1BQU0sTUFBTSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sWUFBWSxlQUFlLFFBQVEsTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLGFBQWEsUUFBUSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsY0FBYyxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLDZCQUE2QjtBQUN2Z1U7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0U7QUFDaEI7QUFDTztBQUNkO0FBQ3lCO0FBQ3ZCO0FBQ1U7QUFDQTtBQUNqQjtBQUNxQjtBQUMwQztBQUM3Qzs7QUFFMUQ7QUFDQTtBQUNBLGVBQWUsK0RBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1Q0FBdUM7QUFDbkQsU0FBUywwQ0FBMEM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsOERBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBYztBQUN6QjtBQUNBLE1BQU0sd0RBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEVBQXNCO0FBQzFCLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFLO0FBQzVCO0FBQ0E7QUFDQSxLQUFLLEVBQUUsc0VBQWMsQ0FBQyxrRUFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsc0VBQWM7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw0REFBYTtBQUNsQztBQUNBLE1BQU07QUFDTixxQkFBcUIsNERBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLHlEQUFNOztBQUUzQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDLDJFQUFtQjtBQUNyRDtBQUNBLGdDQUFnQywyRUFBYztBQUM5Qyw4QkFBOEIseUVBQVk7QUFDMUMsa0NBQWtDLDZFQUFnQjtBQUNsRCw4QkFBOEIsOEVBQWlCO0FBQy9DLDhCQUE4Qix5RUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQWlCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQixjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBLGdCQUFnQixNQUFNO0FBQ3RCLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLFdBQVcsK0RBQVUsdUJBQXVCLDBEQUFPLFVBQVUsNkRBQVU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDLGtCQUFrQixRQUFRO0FBQzFCLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBLFdBQVcsOERBQVMsMEJBQTBCLDBEQUFPLFVBQVUsNkRBQVU7QUFDekU7O0FBRUE7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVywwREFBTztBQUNsQjs7QUFFQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNFQUFjO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBVTtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixrQkFBa0IsU0FBUztBQUMzQjtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxHQUFHLDBCQUEwQjtBQUN6RSx1QkFBdUIsNERBQWE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JmNkM7QUFDTTs7QUFFNUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsT0FBTztBQUNqRTs7QUFFQTtBQUNPO0FBQ1AsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVEQUFTO0FBQzdCO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVE7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixzREFBUTtBQUM1QjtBQUNBLGdCQUFnQiwyREFBWTtBQUM1QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx1QkFBdUIsYUFBYTtBQUNwQyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0MwQztBQUNJO0FBQ2lDO0FBQ1o7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU8sd0RBQVM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQU87QUFDMUIsUUFBUTtBQUNSLG1CQUFtQixzREFBUTtBQUMzQixRQUFRO0FBQ1IsbUJBQW1CLHFEQUFPO0FBQzFCO0FBQ0EsY0FBYyxpREFBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQVM7QUFDMUIsY0FBYyxtREFBUztBQUN2QjtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVE7QUFDekIsY0FBYyxrREFBUTtBQUN0QixxREFBcUQsK0RBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLElBQUksc0RBQU87QUFDWDtBQUNBOztBQUVBO0FBQ0EsU0FBUyxlQUFlO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsK0JBQStCLG1EQUFtRDtBQUNsRixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxRQUFRLDZEQUFjO0FBQ3RCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLDZEQUFjO0FBQ3RCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxRQUFRLHlEQUFVO0FBQ2xCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLDREQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xNOEM7QUFDUztBQUNoQjs7QUFFdkM7QUFDTztBQUNQLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0scUVBQXNCO0FBQzVCO0FBQ0E7QUFDQSxFQUFFLHNEQUFPO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMEQ7QUFDSDtBQUNHOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1REFBUztBQUNmLE1BQU0sc0RBQVE7O0FBRWQ7QUFDQTs7QUFFTztBQUNQO0FBQ0Esc0JBQXNCLG1EQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNCQUFzQixZQUFZO0FBQ2xDOztBQUVPO0FBQ1AsRUFBRSx5REFBVTtBQUNaOztBQUVPO0FBQ1AsRUFBRSw2REFBYztBQUNoQjs7QUFFTztBQUNQLEVBQUUsNkRBQWM7QUFDaEI7O0FBRUE7QUFDTztBQUNQLGlCQUFpQixxRUFBc0I7QUFDdkM7QUFDQTtBQUNBOztBQUVBLFNBQVMsZUFBZTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMkM7QUFDTDs7QUFFdEM7QUFDTztBQUNQO0FBQ08scUNBQXFDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sRUFBRSwrQ0FBSztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQixFQUFFLGlCQUFpQjtBQUM5RCxPQUFPO0FBQ1A7QUFDQSx3QkFBd0IscURBQVU7QUFDbEMsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGlCQUFpQixtREFBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtDQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsbURBQVM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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QTtBQUNBO0FBQ0EseUJBQXlCLE1BQU07O0FBRS9CO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSzs7QUFFOUI7QUFDQTtBQUNBLCtCQUErQixLQUFLOztBQUVwQztBQUNBO0FBQ0EsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRCxrQ0FBa0MsWUFBWSxVQUFVLDBDQUEwQztBQUNsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsWUFBWTtBQUNoRSxrQ0FBa0MsWUFBWSxVQUFVLDBDQUEwQztBQUNsRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLFlBQVk7O0FBRXhDO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSztBQUN4Qyw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL0RhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9ldmVudHMvaW5wdXRGaWVsZExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9ldmVudHMvb3RoZXJMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvZXZlbnRzL3BpY2tlckxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9pMThuL2Jhc2UtbG9jYWxlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9saWIvZGF0ZS1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9saWIvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL29wdGlvbnMvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvb3B0aW9ucy9wcm9jZXNzT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy92YW5pbGxhanMtZGF0ZXBpY2tlci9qcy9waWNrZXIvUGlja2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvY2FsZW5kYXJXZWVrc1RlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvZGF5c1RlbXBsYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci90ZW1wbGF0ZXMvcGlja2VyVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvanMvcGlja2VyL3ZpZXdzL0RheXNWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9Nb250aHNWaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9WaWV3LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL2pzL3BpY2tlci92aWV3cy9ZZWFyc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZGF0ZXBpY2tlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZGF0ZXBpY2tlci5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kYXRlcGlja2VyLWRyb3Bkb3duIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyMDtcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxufVxcbi5kYXRlcGlja2VyLWRyb3Bkb3duLmRhdGVwaWNrZXItb3JpZW50LXRvcCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcblxcbi5kYXRlcGlja2VyLXBpY2tlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDEwMCUpO1xcbn1cXG4uZGF0ZXBpY2tlci1kcm9wZG93biAuZGF0ZXBpY2tlci1waWNrZXIge1xcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKSwgMCAwIDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG59XFxuLmRhdGVwaWNrZXItcGlja2VyIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kYXRlcGlja2VyLW1haW4ge1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1mb290ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgOTYlKTtcXG59XFxuXFxuLmRhdGVwaWNrZXItZ3JpZCwgLmRhdGVwaWNrZXItdmlldyAuZGF5cy1vZi13ZWVrLCAuZGF0ZXBpY2tlci12aWV3LCAuZGF0ZXBpY2tlci1jb250cm9scyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1ncmlkIHtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmRhdGVwaWNrZXItdmlldyAuZGF5cyAuZGF0ZXBpY2tlci1jZWxsLCAuZGF0ZXBpY2tlci12aWV3IC5kb3cge1xcbiAgZmxleC1iYXNpczogMTQuMjg1NzE0Mjg1NyU7XFxufVxcblxcbi5kYXRlcGlja2VyLXZpZXcuZGF0ZXBpY2tlci1ncmlkIC5kYXRlcGlja2VyLWNlbGwge1xcbiAgZmxleC1iYXNpczogMjUlO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1jZWxsLCAuZGF0ZXBpY2tlci12aWV3IC53ZWVrIHtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci10aXRsZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwZGVnLCAwJSwgOTYlKTtcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMge1xcbiAgcGFkZGluZzogMnB4IDJweCAwO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMGRlZywgMCUsIDEwMCUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogY2FsYygwLjM3NWVtIC0gMXB4KSAwLjc1ZW07XFxuICBoZWlnaHQ6IDIuMjVlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDIxJSk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b246Zm9jdXMsIC5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b246YWN0aXZlIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMjElKTtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6IGhzbCgyMTdkZWcsIDcxJSwgNTMlKTtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDIxJSk7XFxufVxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b246Zm9jdXM6bm90KDphY3RpdmUpIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1ZW0gcmdiYSg1MCwgMTE1LCAyMjAsIDAuMjUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmFjdGl2ZSB7XFxuICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAyMSUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kYXRlcGlja2VyLWhlYWRlciAuZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcbi5kYXRlcGlja2VyLWhlYWRlciAuZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmZvY3VzOm5vdCg6YWN0aXZlKSB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwLjEyNWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XFxufVxcbi5kYXRlcGlja2VyLWhlYWRlciAuZGF0ZXBpY2tlci1jb250cm9scyAuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG4uZGF0ZXBpY2tlci1oZWFkZXIgLmRhdGVwaWNrZXItY29udHJvbHMgLmJ1dHRvbltkaXNhYmxlZF0ge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmRhdGVwaWNrZXItZm9vdGVyIC5kYXRlcGlja2VyLWNvbnRyb2xzIC5idXR0b24ge1xcbiAgbWFyZ2luOiBjYWxjKDAuMzc1cmVtIC0gMXB4KSAwLjM3NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4uZGF0ZXBpY2tlci1jb250cm9scyAudmlldy1zd2l0Y2gge1xcbiAgZmxleDogYXV0bztcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLnByZXYtYnRuLFxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5uZXh0LWJ0biB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjM3NXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4zNzVyZW07XFxuICB3aWR0aDogMi4yNXJlbTtcXG59XFxuLmRhdGVwaWNrZXItY29udHJvbHMgLnByZXYtYnRuLmRpc2FibGVkLFxcbi5kYXRlcGlja2VyLWNvbnRyb2xzIC5uZXh0LWJ0bi5kaXNhYmxlZCB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5kYXRlcGlja2VyLXZpZXcgLmRvdyB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmRhdGVwaWNrZXItdmlldyAud2VlayB7XFxuICB3aWR0aDogMi4yNXJlbTtcXG4gIGNvbG9yOiAjYjViNWI1O1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMjIuNXJlbSkge1xcbiAgLmRhdGVwaWNrZXItdmlldyAud2VlayB7XFxuICAgIHdpZHRoOiAxLjk2ODc1cmVtO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZXBpY2tlci1ncmlkIHtcXG4gIHdpZHRoOiAxNS43NXJlbTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDIyLjVyZW0pIHtcXG4gIC5jYWxlbmRhci13ZWVrcyArIC5kYXlzIC5kYXRlcGlja2VyLWdyaWQge1xcbiAgICB3aWR0aDogMTMuNzgxMjVyZW07XFxuICB9XFxufVxcblxcbi5kYXRlcGlja2VyLWNlbGw6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5mb2N1c2VkOm5vdCguc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwuc2VsZWN0ZWQsIC5kYXRlcGlja2VyLWNlbGwuc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIxN2RlZywgNzElLCA1MyUpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLmRpc2FibGVkIHtcXG4gIGNvbG9yOiAjZGJkYmRiO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnByZXY6bm90KC5kaXNhYmxlZCksIC5kYXRlcGlja2VyLWNlbGwubmV4dDpub3QoLmRpc2FibGVkKSB7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCA0OCUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnByZXYuc2VsZWN0ZWQsIC5kYXRlcGlja2VyLWNlbGwubmV4dC5zZWxlY3RlZCB7XFxuICBjb2xvcjogI2U2ZTZlNjtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5oaWdobGlnaHRlZDpub3QoLnNlbGVjdGVkKTpub3QoLnJhbmdlKTpub3QoLnRvZGF5KSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDBkZWcsIDAlLCA5NiUpO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLmhpZ2hsaWdodGVkOm5vdCguc2VsZWN0ZWQpOm5vdCgucmFuZ2UpOm5vdCgudG9kYXkpOm5vdCguZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwuaGlnaGxpZ2h0ZWQ6bm90KC5zZWxlY3RlZCk6bm90KC5yYW5nZSk6bm90KC50b2RheSkuZm9jdXNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnRvZGF5Om5vdCguc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzFkZWcsIDEwMCUsIDQxJSk7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwudG9kYXk6bm90KC5zZWxlY3RlZCk6bm90KC5kaXNhYmxlZCkge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwudG9kYXkuZm9jdXNlZDpub3QoLnNlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjNGE3O1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLWVuZDpub3QoLnNlbGVjdGVkKSwgLmRhdGVwaWNrZXItY2VsbC5yYW5nZS1zdGFydDpub3QoLnNlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwucmFuZ2UtZW5kLmZvY3VzZWQ6bm90KC5zZWxlY3RlZCksIC5kYXRlcGlja2VyLWNlbGwucmFuZ2Utc3RhcnQuZm9jdXNlZDpub3QoLnNlbGVjdGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLXN0YXJ0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xcbn1cXG4uZGF0ZXBpY2tlci1jZWxsLnJhbmdlLWVuZCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5yYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuLmRhdGVwaWNrZXItY2VsbC5yYW5nZTpub3QoLmRpc2FibGVkKTpub3QoLmZvY3VzZWQpOm5vdCgudG9kYXkpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwucmFuZ2UuZGlzYWJsZWQge1xcbiAgY29sb3I6ICNjMmMyYzI7XFxufVxcbi5kYXRlcGlja2VyLWNlbGwucmFuZ2UuZm9jdXNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZjZmNmO1xcbn1cXG4uZGF0ZXBpY2tlci12aWV3LmRhdGVwaWNrZXItZ3JpZCAuZGF0ZXBpY2tlci1jZWxsIHtcXG4gIGhlaWdodDogNC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcXG59XFxuXFxuLmRhdGVwaWNrZXItaW5wdXQuaW4tZWRpdCB7XFxuICBib3JkZXItY29sb3I6ICMyMzY2ZDE7XFxufVxcbi5kYXRlcGlja2VyLWlucHV0LmluLWVkaXQ6Zm9jdXMsIC5kYXRlcGlja2VyLWlucHV0LmluLWVkaXQ6YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjI1ZW0gMC4yNWVtIHJnYmEoMzUsIDEwMiwgMjA5LCAwLjIpO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuI2Zvcm1Db250YWluZXIsIC5uRm9ybVdyYXBwZXIsIC5wRm9ybVdyYXBwZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbiNuRm9ybSwgI3BGb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5tYWluUGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciAgaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBcXFwic2lkZWJhciBjYXJkICAgY2FyZCAgIGNhcmQgICBjYXJkICBcXFwiIFxcXCJzaWRlYmFyIGNhcmQgICBjYXJkICAgY2FyZCAgIGNhcmQgIFxcXCI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZENvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IGNhcmQ7XFxufVxcblxcbi5zaG93Rm9ybSB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9ybVRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbn1cXG5cXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3ZhbmlsbGFqcy1kYXRlcGlja2VyL3Nhc3MvZGF0ZXBpY2tlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvdmFuaWxsYWpzLWRhdGVwaWNrZXIvc2Fzcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBEQTtFQUNFLGFBQUE7QUN6REY7QUQyREU7RUFDRSxjQUFBO0FDekRKOztBRDZEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQTdDYztFQThDZCxnQkFoRG1CO0FDVnJCO0FENERFO0VBQ0UsY0FBQTtFQUNBLG1CQXBEaUI7QUNOckI7O0FEOERBO0VBQ0UscUJBQUE7RUFDQSxrQkFqRWlCO0VBa0VqQixxQ0E5RU07QUNtQlI7QUQ2REU7RUFDRSw0RUE3RGlCO0FDRXJCO0FEOERFO0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBNUVlO0VBNkVmLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUM1REo7O0FEZ0VBO0VBQ0UsWUFBQTtBQzdERjs7QURnRUE7RUFDRSxpREFBQTtFQUNBLG9DQXJHTTtBQ3dDUjs7QURnRUE7RUFDRSxhQUFBO0FDN0RGOztBRGdFQTtFQUNFLGVBQUE7QUM3REY7O0FEZ0VBO0VBQ0UsMEJBQUE7QUM3REY7O0FEZ0VBO0VBQ0UsZUFBQTtBQzdERjs7QURnRUE7RUFDRSxlQWpHa0I7RUFrR2xCLG9CQWxHa0I7QUNxQ3BCOztBRGdFQTtFQUNFLGtEQUFBO0VBQ0Esb0NBL0hNO0VBZ0lOLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFqSG9CO0FDb0R0Qjs7QURtRUU7RUFDRSxrQkFBQTtBQ2hFSjtBRHNFSTtFQXFCRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFB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QSw4QkFBQTtFQUNBLG1CQUFBO0FGaVFKOztBRTlQQTtFQUNJLGVBQUE7QUZpUUo7O0FFOVBBO0VBQ0kseUJBQUE7QUZpUUo7O0FFOVBBO0VBQ0ksaUJBQUE7QUZpUUo7O0FBRUEsb0NBQW9DXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7bGFzdEl0ZW1PZiwgc3RyaW5nVG9BcnJheSwgaXNJblJhbmdlfSBmcm9tICcuL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3RvZGF5LCByZWd1bGFyaXplRGF0ZX0gZnJvbSAnLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlRGF0ZSwgZm9ybWF0RGF0ZX0gZnJvbSAnLi9saWIvZGF0ZS1mb3JtYXQuanMnO1xuaW1wb3J0IHtpc0FjdGl2ZUVsZW1lbnR9IGZyb20gJy4vbGliL2RvbS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTGlzdGVuZXJzLCB1bnJlZ2lzdGVyTGlzdGVuZXJzfSBmcm9tICcuL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQge2xvY2FsZXN9IGZyb20gJy4vaTE4bi9iYXNlLWxvY2FsZXMuanMnO1xuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gJy4vb3B0aW9ucy9kZWZhdWx0T3B0aW9ucy5qcyc7XG5pbXBvcnQgcHJvY2Vzc09wdGlvbnMgZnJvbSAnLi9vcHRpb25zL3Byb2Nlc3NPcHRpb25zLmpzJztcbmltcG9ydCBQaWNrZXIgZnJvbSAnLi9waWNrZXIvUGlja2VyLmpzJztcbmltcG9ydCB7dHJpZ2dlckRhdGVwaWNrZXJFdmVudH0gZnJvbSAnLi9ldmVudHMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7b25LZXlkb3duLCBvbkZvY3VzLCBvbk1vdXNlZG93biwgb25DbGlja0lucHV0LCBvblBhc3RlfSBmcm9tICcuL2V2ZW50cy9pbnB1dEZpZWxkTGlzdGVuZXJzLmpzJztcbmltcG9ydCB7b25DbGlja091dHNpZGV9IGZyb20gJy4vZXZlbnRzL290aGVyTGlzdGVuZXJzLmpzJztcblxuZnVuY3Rpb24gc3RyaW5naWZ5RGF0ZXMoZGF0ZXMsIGNvbmZpZykge1xuICByZXR1cm4gZGF0ZXNcbiAgICAubWFwKGR0ID0+IGZvcm1hdERhdGUoZHQsIGNvbmZpZy5mb3JtYXQsIGNvbmZpZy5sb2NhbGUpKVxuICAgIC5qb2luKGNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbn1cblxuLy8gcGFyc2UgaW5wdXQgZGF0ZXMgYW5kIGNyZWF0ZSBhbiBhcnJheSBvZiB0aW1lIHZhbHVlcyBmb3Igc2VsZWN0aW9uXG4vLyByZXR1cm5zIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbm8gdmFsaWQgZGF0ZXMgaW4gaW5wdXREYXRlc1xuLy8gd2hlbiBvcmlnRGF0ZXMgKGN1cnJlbnQgc2VsZWN0aW9uKSBpcyBwYXNzZWQsIHRoZSBmdW5jdGlvbiB3b3JrcyB0byBtaXhcbi8vIHRoZSBpbnB1dCBkYXRlcyBpbnRvIHRoZSBjdXJyZW50IHNlbGVjdGlvblxuZnVuY3Rpb24gcHJvY2Vzc0lucHV0RGF0ZXMoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBjb25zdCB7Y29uZmlnLCBkYXRlczogb3JpZ0RhdGVzLCByYW5nZXBpY2tlcn0gPSBkYXRlcGlja2VyO1xuICBjb25zdCB7Y29uZmlnLCBkYXRlczogb3JpZ0RhdGVzLCByYW5nZVNpZGVJbmRleH0gPSBkYXRlcGlja2VyO1xuICBpZiAoaW5wdXREYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBlbXB0eSBpbnB1dCBpcyBjb25zaWRlcmVkIHZhbGlkIHVubGVzcyBvcmlnaURhdGVzIGlzIHBhc3NlZFxuICAgIHJldHVybiBjbGVhciA/IFtdIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gY29uc3QgcmFuZ2VFbmQgPSByYW5nZXBpY2tlciAmJiBkYXRlcGlja2VyID09PSByYW5nZXBpY2tlci5kYXRlcGlja2Vyc1sxXTtcbiAgbGV0IG5ld0RhdGVzID0gaW5wdXREYXRlcy5yZWR1Y2UoKGRhdGVzLCBkdCkgPT4ge1xuICAgIGxldCBkYXRlID0gcGFyc2VEYXRlKGR0LCBjb25maWcuZm9ybWF0LCBjb25maWcubG9jYWxlKTtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGF0ZXM7XG4gICAgfVxuICAgIC8vIGFkanVzdCB0byAxc3Qgb2YgdGhlIG1vbnRoL0phbiAxc3Qgb2YgdGhlIHllYXJcbiAgICAvLyBvciB0byB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbmgvRGVjIDMxc3Qgb2YgdGhlIHllYXIgaWYgdGhlIGRhdGVwaWNrZXJcbiAgICAvLyBpcyB0aGUgcmFuZ2UtZW5kIHBpY2tlciBvZiBhIHJhbmdlcGlja2VyXG4gICAgZGF0ZSA9IHJlZ3VsYXJpemVEYXRlKGRhdGUsIGNvbmZpZy5waWNrTGV2ZWwsIHJhbmdlU2lkZUluZGV4KTtcbiAgICBpZiAoXG4gICAgICBpc0luUmFuZ2UoZGF0ZSwgY29uZmlnLm1pbkRhdGUsIGNvbmZpZy5tYXhEYXRlKVxuICAgICAgJiYgIWRhdGVzLmluY2x1ZGVzKGRhdGUpXG4gICAgICAmJiAhY29uZmlnLmRhdGVzRGlzYWJsZWQuaW5jbHVkZXMoZGF0ZSlcbiAgICAgICYmIChjb25maWcucGlja0xldmVsID4gMCB8fCAhY29uZmlnLmRheXNPZldlZWtEaXNhYmxlZC5pbmNsdWRlcyhuZXcgRGF0ZShkYXRlKS5nZXREYXkoKSkpXG4gICAgKSB7XG4gICAgICBkYXRlcy5wdXNoKGRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0ZXM7XG4gIH0sIFtdKTtcbiAgaWYgKG5ld0RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoY29uZmlnLm11bHRpZGF0ZSAmJiAhY2xlYXIpIHtcbiAgICAvLyBnZXQgdGhlIHN5bm1ldHJpYyBkaWZmZXJlbmNlIGJldHdlZW4gb3JpZ0RhdGVzIGFuZCBuZXdEYXRlc1xuICAgIG5ld0RhdGVzID0gbmV3RGF0ZXMucmVkdWNlKChkYXRlcywgZGF0ZSkgPT4ge1xuICAgICAgaWYgKCFvcmlnRGF0ZXMuaW5jbHVkZXMoZGF0ZSkpIHtcbiAgICAgICAgZGF0ZXMucHVzaChkYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRlcztcbiAgICB9LCBvcmlnRGF0ZXMuZmlsdGVyKGRhdGUgPT4gIW5ld0RhdGVzLmluY2x1ZGVzKGRhdGUpKSk7XG4gIH1cbiAgLy8gZG8gbGVuZ3RoIGNoZWNrIGFsd2F5cyBiZWNhdXNlIHVzZXIgY2FuIGlucHV0IG11bHRpcGxlIGRhdGVzIHJlZ2FyZGxlc3Mgb2YgdGhlIG1vZGVcbiAgcmV0dXJuIGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzICYmIG5ld0RhdGVzLmxlbmd0aCA+IGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzXG4gICAgPyBuZXdEYXRlcy5zbGljZShjb25maWcubWF4TnVtYmVyT2ZEYXRlcyAqIC0xKVxuICAgIDogbmV3RGF0ZXM7XG59XG5cbi8vIHJlZnJlc2ggdGhlIFVJIGVsZW1lbnRzXG4vLyBtb2RlczogMTogaW5wdXQgb25seSwgMiwgcGlja2VyIG9ubHksIDMgYm90aFxuZnVuY3Rpb24gcmVmcmVzaFVJKGRhdGVwaWNrZXIsIG1vZGUgPSAzLCBxdWlja1JlbmRlciA9IHRydWUpIHtcbiAgY29uc3Qge2NvbmZpZywgcGlja2VyLCBpbnB1dEZpZWxkfSA9IGRhdGVwaWNrZXI7XG4gIGlmIChtb2RlICYgMikge1xuICAgIGNvbnN0IG5ld1ZpZXcgPSBwaWNrZXIuYWN0aXZlID8gY29uZmlnLnBpY2tMZXZlbCA6IGNvbmZpZy5zdGFydFZpZXc7XG4gICAgcGlja2VyLnVwZGF0ZSgpLmNoYW5nZVZpZXcobmV3VmlldykucmVuZGVyKHF1aWNrUmVuZGVyKTtcbiAgfVxuICBpZiAobW9kZSAmIDEgJiYgaW5wdXRGaWVsZCkge1xuICAgIGlucHV0RmllbGQudmFsdWUgPSBzdHJpbmdpZnlEYXRlcyhkYXRlcGlja2VyLmRhdGVzLCBjb25maWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZXBpY2tlciwgaW5wdXREYXRlcywgb3B0aW9ucykge1xuICBsZXQge2NsZWFyLCByZW5kZXIsIGF1dG9oaWRlLCByZXZlcnR9ID0gb3B0aW9ucztcbiAgaWYgKHJlbmRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmVuZGVyID0gdHJ1ZTtcbiAgfVxuICBpZiAoIXJlbmRlcikge1xuICAgIGF1dG9oaWRlID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoYXV0b2hpZGUgPT09IHVuZGVmaW5lZCkge1xuICAgIGF1dG9oaWRlID0gZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGU7XG4gIH1cblxuICBjb25zdCBuZXdEYXRlcyA9IHByb2Nlc3NJbnB1dERhdGVzKGRhdGVwaWNrZXIsIGlucHV0RGF0ZXMsIGNsZWFyKTtcbiAgaWYgKCFuZXdEYXRlcyAmJiAhcmV2ZXJ0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChuZXdEYXRlcyAmJiBuZXdEYXRlcy50b1N0cmluZygpICE9PSBkYXRlcGlja2VyLmRhdGVzLnRvU3RyaW5nKCkpIHtcbiAgICBkYXRlcGlja2VyLmRhdGVzID0gbmV3RGF0ZXM7XG4gICAgcmVmcmVzaFVJKGRhdGVwaWNrZXIsIHJlbmRlciA/IDMgOiAxKTtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KGRhdGVwaWNrZXIsICdjaGFuZ2VEYXRlJyk7XG4gIH0gZWxzZSB7XG4gICAgcmVmcmVzaFVJKGRhdGVwaWNrZXIsIDEpO1xuICB9XG5cbiAgaWYgKGF1dG9oaWRlKSB7XG4gICAgZGF0ZXBpY2tlci5oaWRlKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBkYXRlIHBpY2tlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIGRhdGUgcGlja2VyXG4gICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmQgYSBkYXRlIHBpY2tlclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IFtvcHRpb25zXSAtIGNvbmZpZyBvcHRpb25zXG4gICAqIEBwYXJhbSAge0RhdGVSYW5nZVBpY2tlcn0gW3JhbmdlcGlja2VyXSAtIERhdGVSYW5nZVBpY2tlciBpbnN0YW5jZSB0aGVcbiAgICogZGF0ZSBwaWNrZXIgYmVsb25ncyB0by4gVXNlIHRoaXMgb25seSB3aGVuIGNyZWF0aW5nIGRhdGUgcGlja2VyIGFzIGEgcGFydFxuICAgKiBvZiBkYXRlIHJhbmdlIHBpY2tlclxuICAgKi9cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9LCByYW5nZXBpY2tlciA9IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuZGF0ZXBpY2tlciA9IHRoaXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBidXR0b25DbGFzczogKG9wdGlvbnMuYnV0dG9uQ2xhc3MgJiYgU3RyaW5nKG9wdGlvbnMuYnV0dG9uQ2xhc3MpKSB8fCAnYnV0dG9uJyxcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICAgIGRlZmF1bHRWaWV3RGF0ZTogdG9kYXkoKSxcbiAgICAgIG1heERhdGU6IHVuZGVmaW5lZCxcbiAgICAgIG1pbkRhdGU6IHVuZGVmaW5lZCxcbiAgICB9LCBwcm9jZXNzT3B0aW9ucyhkZWZhdWx0T3B0aW9ucywgdGhpcykpO1xuICAgIC8vIGNvbmZpZ3VyZSBieSB0eXBlXG4gICAgY29uc3QgaW5saW5lID0gdGhpcy5pbmxpbmUgPSBlbGVtZW50LnRhZ05hbWUgIT09ICdJTlBVVCc7XG4gICAgbGV0IGlucHV0RmllbGQ7XG4gICAgaWYgKGlubGluZSkge1xuICAgICAgY29uZmlnLmNvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICAvLyBvbWl0IHN0cmluZyB0eXBlIGNoZWNrIGJlY2F1c2UgaXQgZG9lc24ndCBndWFyYW50ZWUgdG8gYXZvaWQgZXJyb3JzXG4gICAgICAgIC8vIChpbnZhbGlkIHNlbGVjdG9yIHN0cmluZyBjYXVzZXMgYWJlbmQgd2l0aCBzeXRheCBlcnJvcilcbiAgICAgICAgY29uZmlnLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICAgICAgICA/IG9wdGlvbnMuY29udGFpbmVyXG4gICAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuY29udGFpbmVyKTtcbiAgICAgIH1cbiAgICAgIGlucHV0RmllbGQgPSB0aGlzLmlucHV0RmllbGQgPSBlbGVtZW50O1xuICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdkYXRlcGlja2VyLWlucHV0Jyk7XG4gICAgfVxuICAgIGlmIChyYW5nZXBpY2tlcikge1xuICAgICAgLy8gY2hlY2sgdmFsaWRpcnlcbiAgICAgIGNvbnN0IGluZGV4ID0gcmFuZ2VwaWNrZXIuaW5wdXRzLmluZGV4T2YoaW5wdXRGaWVsZCk7XG4gICAgICBjb25zdCBkYXRlcGlja2VycyA9IHJhbmdlcGlja2VyLmRhdGVwaWNrZXJzO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IDEgfHwgIUFycmF5LmlzQXJyYXkoZGF0ZXBpY2tlcnMpKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIHJhbmdlcGlja2VyIG9iamVjdC4nKTtcbiAgICAgIH1cbiAgICAgIC8vIGF0dGFjaCBpdGFlbGYgdG8gdGhlIHJhbmdlcGlja2VyIGhlcmUgc28gdGhhdCBwcm9jZXNzSW5wdXREYXRlcygpIGNhblxuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoaXMgaXMgdGhlIHJhbmdlLWVuZCBwaWNrZXIgb2YgdGhlIHJhbmdlcGlja2VyIHdoaWxlXG4gICAgICAvLyBzZXR0aW5nIGluaXRhbCB2YWx1ZXMgd2hlbiBwaWNrTGV2ZWwgPiAwXG4gICAgICBkYXRlcGlja2Vyc1tpbmRleF0gPSB0aGlzO1xuICAgICAgLy8gYWRkIGdldHRlciBmb3IgcmFuZ2VwaWNrZXJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmFuZ2VwaWNrZXInLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gcmFuZ2VwaWNrZXI7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncmFuZ2VTaWRlSW5kZXgnLCB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdXAgY29uZmlnXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgT2JqZWN0LmFzc2lnbihjb25maWcsIHByb2Nlc3NPcHRpb25zKG9wdGlvbnMsIHRoaXMpKTtcblxuICAgIC8vIHNldCBpbml0aWFsIGRhdGVzXG4gICAgbGV0IGluaXRpYWxEYXRlcztcbiAgICBpZiAoaW5saW5lKSB7XG4gICAgICBpbml0aWFsRGF0ZXMgPSBzdHJpbmdUb0FycmF5KGVsZW1lbnQuZGF0YXNldC5kYXRlLCBjb25maWcuZGF0ZURlbGltaXRlcik7XG4gICAgICBkZWxldGUgZWxlbWVudC5kYXRhc2V0LmRhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxEYXRlcyA9IHN0cmluZ1RvQXJyYXkoaW5wdXRGaWVsZC52YWx1ZSwgY29uZmlnLmRhdGVEZWxpbWl0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmRhdGVzID0gW107XG4gICAgLy8gcHJvY2VzcyBpbml0aWFsIHZhbHVlXG4gICAgY29uc3QgaW5wdXREYXRlVmFsdWVzID0gcHJvY2Vzc0lucHV0RGF0ZXModGhpcywgaW5pdGlhbERhdGVzKTtcbiAgICBpZiAoaW5wdXREYXRlVmFsdWVzICYmIGlucHV0RGF0ZVZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmRhdGVzID0gaW5wdXREYXRlVmFsdWVzO1xuICAgIH1cbiAgICBpZiAoaW5wdXRGaWVsZCkge1xuICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHN0cmluZ2lmeURhdGVzKHRoaXMuZGF0ZXMsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGlja2VyID0gdGhpcy5waWNrZXIgPSBuZXcgUGlja2VyKHRoaXMpO1xuXG4gICAgaWYgKGlubGluZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnMgaW4gb3RoZXIgbW9kZXNcbiAgICAgIGNvbnN0IG9uTW91c2Vkb3duRG9jdW1lbnQgPSBvbkNsaWNrT3V0c2lkZS5iaW5kKG51bGwsIHRoaXMpO1xuICAgICAgY29uc3QgbGlzdGVuZXJzID0gW1xuICAgICAgICBbaW5wdXRGaWVsZCwgJ2tleWRvd24nLCBvbktleWRvd24uYmluZChudWxsLCB0aGlzKV0sXG4gICAgICAgIFtpbnB1dEZpZWxkLCAnZm9jdXMnLCBvbkZvY3VzLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ21vdXNlZG93bicsIG9uTW91c2Vkb3duLmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ2NsaWNrJywgb25DbGlja0lucHV0LmJpbmQobnVsbCwgdGhpcyldLFxuICAgICAgICBbaW5wdXRGaWVsZCwgJ3Bhc3RlJywgb25QYXN0ZS5iaW5kKG51bGwsIHRoaXMpXSxcbiAgICAgICAgW2RvY3VtZW50LCAnbW91c2Vkb3duJywgb25Nb3VzZWRvd25Eb2N1bWVudF0sXG4gICAgICAgIFtkb2N1bWVudCwgJ3RvdWNoc3RhcnQnLCBvbk1vdXNlZG93bkRvY3VtZW50XSxcbiAgICAgICAgW3dpbmRvdywgJ3Jlc2l6ZScsIHBpY2tlci5wbGFjZS5iaW5kKHBpY2tlcildXG4gICAgICBdO1xuICAgICAgcmVnaXN0ZXJMaXN0ZW5lcnModGhpcywgbGlzdGVuZXJzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IERhdGUgb2JqZWN0IG9yIHRpbWUgdmFsdWUgaW4gZ2l2ZW4gZm9ybWF0IGFuZCBsYW5ndWFnZVxuICAgKiBAcGFyYW0gIHtEYXRlfE51bWJlcn0gZGF0ZSAtIGRhdGUgb3IgdGltZSB2YWx1ZSB0byBmb3JtYXRcbiAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gZm9ybWF0IC0gZm9ybWF0IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB0b0Rpc3BsYXkoKSBjdXN0b20gZm9ybWF0dGVyLCB3aG9zZSBzaWduYXR1cmUgaXNcbiAgICogLSBhcmdzOlxuICAgKiAgIC0gZGF0ZToge0RhdGV9IC0gRGF0ZSBpbnN0YW5jZSBvZiB0aGUgZGF0ZSBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gZm9ybWF0OiB7T2JqZWN0fSAtIHRoZSBmb3JtYXQgb2JqZWN0IHBhc3NlZCB0byB0aGUgbWV0aG9kXG4gICAqICAgLSBsb2NhbGU6IHtPYmplY3R9IC0gbG9jYWxlIGZvciB0aGUgbGFuZ3VhZ2Ugc3BlY2lmaWVkIGJ5IGBsYW5nYFxuICAgKiAtIHJldHVybjpcbiAgICogICAgIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2xhbmc9ZW5dIC0gbGFuZ3VhZ2UgY29kZSBmb3IgdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHJldHVybiB7U3RyaW5nfSBmb3JtYXR0ZWQgZGF0ZVxuICAgKi9cbiAgc3RhdGljIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsYW5nKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsYW5nICYmIGxvY2FsZXNbbGFuZ10gfHwgbG9jYWxlcy5lbik7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgZGF0ZSBzdHJpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfERhdGV8TnVtYmVyfSBkYXRlU3RyIC0gZGF0ZSBzdHJpbmcsIERhdGUgb2JqZWN0IG9yIHRpbWVcbiAgICogdmFsdWUgdG8gcGFyc2VcbiAgICogQHBhcmFtICB7U3RyaW5nfE9iamVjdH0gZm9ybWF0IC0gZm9ybWF0IHN0cmluZyBvciBvYmplY3QgdGhhdCBjb250YWluc1xuICAgKiB0b1ZhbHVlKCkgY3VzdG9tIHBhcnNlciwgd2hvc2Ugc2lnbmF0dXJlIGlzXG4gICAqIC0gYXJnczpcbiAgICogICAtIGRhdGVTdHI6IHtTdHJpbmd8RGF0ZXxOdW1iZXJ9IC0gdGhlIGRhdGVTdHIgcGFzc2VkIHRvIHRoZSBtZXRob2RcbiAgICogICAtIGZvcm1hdDoge09iamVjdH0gLSB0aGUgZm9ybWF0IG9iamVjdCBwYXNzZWQgdG8gdGhlIG1ldGhvZFxuICAgKiAgIC0gbG9jYWxlOiB7T2JqZWN0fSAtIGxvY2FsZSBmb3IgdGhlIGxhbmd1YWdlIHNwZWNpZmllZCBieSBgbGFuZ2BcbiAgICogLSByZXR1cm46XG4gICAqICAgICB7RGF0ZXxOdW1iZXJ9IHBhcnNlZCBkYXRlIG9yIGl0cyB0aW1lIHZhbHVlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW2xhbmc9ZW5dIC0gbGFuZ3VhZ2UgY29kZSBmb3IgdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHJldHVybiB7TnVtYmVyfSB0aW1lIHZhbHVlIG9mIHBhcnNlZCBkYXRlXG4gICAqL1xuICBzdGF0aWMgcGFyc2VEYXRlKGRhdGVTdHIsIGZvcm1hdCwgbGFuZykge1xuICAgIHJldHVybiBwYXJzZURhdGUoZGF0ZVN0ciwgZm9ybWF0LCBsYW5nICYmIGxvY2FsZXNbbGFuZ10gfHwgbG9jYWxlcy5lbik7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge09iamVjdH0gLSBJbnN0YWxsZWQgbG9jYWxlcyBpbiBgW2xhbmd1YWdlQ29kZV06IGxvY2FsZU9iamVjdGAgZm9ybWF0XG4gICAqIGVuYDpfRW5nbGlzaCAoVVMpXyBpcyBwcmUtaW5zdGFsbGVkLlxuICAgKi9cbiAgc3RhdGljIGdldCBsb2NhbGVzKCkge1xuICAgIHJldHVybiBsb2NhbGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufSAtIFdoZXRoZXIgdGhlIHBpY2tlciBlbGVtZW50IGlzIHNob3duLiBgdHJ1ZWAgd2huZSBzaG93blxuICAgKi9cbiAgZ2V0IGFjdGl2ZSgpIHtcbiAgICByZXR1cm4gISEodGhpcy5waWNrZXIgJiYgdGhpcy5waWNrZXIuYWN0aXZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9IC0gRE9NIG9iamVjdCBvZiBwaWNrZXIgZWxlbWVudFxuICAgKi9cbiAgZ2V0IHBpY2tlckVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGlja2VyID8gdGhpcy5waWNrZXIuZWxlbWVudCA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbmV3IHZhbHVlcyB0byB0aGUgY29uZmlnIG9wdGlvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBjb25maWcgb3B0aW9ucyB0byB1cGRhdGVcbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IHBpY2tlciA9IHRoaXMucGlja2VyO1xuICAgIGNvbnN0IG5ld09wdGlvbnMgPSBwcm9jZXNzT3B0aW9ucyhvcHRpb25zLCB0aGlzKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIG5ld09wdGlvbnMpO1xuICAgIHBpY2tlci5zZXRPcHRpb25zKG5ld09wdGlvbnMpO1xuXG4gICAgcmVmcmVzaFVJKHRoaXMsIDMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqL1xuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmlucHV0RmllbGQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0RmllbGQuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFpc0FjdGl2ZUVsZW1lbnQodGhpcy5pbnB1dEZpZWxkKSAmJiAhdGhpcy5jb25maWcuZGlzYWJsZVRvdWNoS2V5Ym9hcmQpIHtcbiAgICAgICAgdGhpcy5fc2hvd2luZyA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZC5mb2N1cygpO1xuICAgICAgICBkZWxldGUgdGhpcy5fc2hvd2luZztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5waWNrZXIuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBpY2tlciBlbGVtZW50XG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5waWNrZXIuaGlkZSgpO1xuICAgIHRoaXMucGlja2VyLnVwZGF0ZSgpLmNoYW5nZVZpZXcodGhpcy5jb25maWcuc3RhcnRWaWV3KS5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBEYXRlcGlja2VyIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RldGVwaWNrZXJ9IC0gdGhlIGluc3RhbmNlIGRlc3Ryb3llZFxuICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXJzKHRoaXMpO1xuICAgIHRoaXMucGlja2VyLmRldGFjaCgpO1xuICAgIGlmICghdGhpcy5pbmxpbmUpIHtcbiAgICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdkYXRlcGlja2VyLWlucHV0Jyk7XG4gICAgfVxuICAgIGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0ZXBpY2tlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbGVjdGVkIGRhdGUocylcbiAgICpcbiAgICogVGhlIG1ldGhvZCByZXR1cm5zIGEgRGF0ZSBvYmplY3Qgb2Ygc2VsZWN0ZWQgZGF0ZSBieSBkZWZhdWx0LCBhbmQgcmV0dXJuc1xuICAgKiBhbiBhcnJheSBvZiBzZWxlY3RlZCBkYXRlcyBpbiBtdWx0aWRhdGUgbW9kZS4gSWYgZm9ybWF0IHN0cmluZyBpcyBwYXNzZWQsXG4gICAqIGl0IHJldHVybnMgZGF0ZSBzdHJpbmcocykgZm9ybWF0dGVkIGluIGdpdmVuIGZvcm1hdC5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbZm9ybWF0XSAtIEZvcm1hdCBzdHJpbmcgdG8gc3RyaW5naWZ5IHRoZSBkYXRlKHMpXG4gICAqIEByZXR1cm4ge0RhdGV8U3RyaW5nfERhdGVbXXxTdHJpbmdbXX0gLSBzZWxlY3RlZCBkYXRlKHMpLCBvciBpZiBub25lIGlzXG4gICAqIHNlbGVjdGVkLCBlbXB0eSBhcnJheSBpbiBtdWx0aWRhdGUgbW9kZSBhbmQgdW50aXRsZWQgaW4gc2lnbGVkYXRlIG1vZGVcbiAgICovXG4gIGdldERhdGUoZm9ybWF0ID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSBmb3JtYXRcbiAgICAgID8gZGF0ZSA9PiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgdGhpcy5jb25maWcubG9jYWxlKVxuICAgICAgOiBkYXRlID0+IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLm11bHRpZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZXMubWFwKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKHRoaXMuZGF0ZXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2VsZWN0ZWQgZGF0ZShzKVxuICAgKlxuICAgKiBJbiBtdWx0aWRhdGUgbW9kZSwgeW91IGNhbiBwYXNzIG11bHRpcGxlIGRhdGVzIGFzIGEgc2VyaWVzIG9mIGFyZ3VtZW50c1xuICAgKiBvciBhbiBhcnJheS4gKFNpbmNlIGVhY2ggZGF0ZSBpcyBwYXJzZWQgaW5kaXZpZHVhbGx5LCB0aGUgdHlwZSBvZiB0aGVcbiAgICogZGF0ZXMgZG9lc24ndCBoYXZlIHRvIGJlIHRoZSBzYW1lLilcbiAgICogVGhlIGdpdmVuIGRhdGVzIGFyZSB1c2VkIHRvIHRvZ2dsZSB0aGUgc2VsZWN0IHN0YXR1cyBvZiBlYWNoIGRhdGUuIFRoZVxuICAgKiBudW1iZXIgb2Ygc2VsZWN0ZWQgZGF0ZXMgaXMga2VwdCBmcm9tIGV4Y2VlZGluZyB0aGUgbGVuZ3RoIHNldCB0b1xuICAgKiBtYXhOdW1iZXJPZkRhdGVzLlxuICAgKlxuICAgKiBXaXRoIGNsZWFyOiB0cnVlIG9wdGlvbiwgdGhlIG1ldGhvZCBjYW4gYmUgdXNlZCB0byBjbGVhciB0aGUgc2VsZWN0aW9uXG4gICAqIGFuZCB0byByZXBsYWNlIHRoZSBzZWxlY3Rpb24gaW5zdGVhZCBvZiB0b2dnbGluZyBpbiBtdWx0aWRhdGUgbW9kZS5cbiAgICogSWYgdGhlIG9wdGlvbiBpcyBwYXNzZWQgd2l0aCBubyBkYXRlIGFyZ3VtZW50cyBvciBhbiBlbXB0eSBkYXRlcyBhcnJheSxcbiAgICogaXQgd29ya3MgYXMgXCJjbGVhclwiIChjbGVhciB0aGUgc2VsZWN0aW9uIHRoZW4gc2V0IG5vdGhpbmcpLCBhbmQgaWYgdGhlXG4gICAqIG9wdGlvbiBpcyBwYXNzZWQgd2l0aCBuZXcgZGF0ZXMgdG8gc2VsZWN0LCBpdCB3b3JrcyBhcyBcInJlcGxhY2VcIiAoY2xlYXJcbiAgICogdGhlIHNlbGVjdGlvbiB0aGVuIHNldCB0aGUgZ2l2ZW4gZGF0ZXMpXG4gICAqXG4gICAqIFdoZW4gcmVuZGVyOiBmYWxzZSBvcHRpb24gaXMgdXNlZCwgdGhlIG1ldGhvZCBvbWl0cyByZS1yZW5kZXJpbmcgdGhlXG4gICAqIHBpY2tlciBlbGVtZW50LiBJbiB0aGlzIGNhc2UsIHlvdSBuZWVkIHRvIGNhbGwgcmVmcmVzaCgpIG1ldGhvZCBsYXRlciBpblxuICAgKiBvcmRlciBmb3IgdGhlIHBpY2tlciBlbGVtZW50IHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMuIFRoZSBpbnB1dCBmaWVsZCBpc1xuICAgKiByZWZyZXNoZWQgYWx3YXlzIHJlZ2FyZGxlc3Mgb2YgdGhpcyBvcHRpb24uXG4gICAqXG4gICAqIFdoZW4gaW52YWxpZCAodW5wYXJzYWJsZSwgcmVwZWF0ZWQsIGRpc2FibGVkIG9yIG91dC1vZi1yYW5nZSkgZGF0ZXMgYXJlXG4gICAqIHBhc3NlZCwgdGhlIG1ldGhvZCBpZ25vcmVzIHRoZW0gYW5kIGFwcGxpZXMgb25seSB2YWxpZCBvbmVzLiBJbiB0aGUgY2FzZVxuICAgKiB0aGF0IGFsbCB0aGUgZ2l2ZW4gZGF0ZXMgYXJlIGludmFsaWQsIHdoaWNoIGlzIGRpc3Rpbmd1aXNoZWQgZnJvbSBwYXNzaW5nXG4gICAqIG5vIGRhdGVzLCB0aGUgbWV0aG9kIGNvbnNpZGVycyBpdCBhcyBhbiBlcnJvciBhbmQgbGVhdmVzIHRoZSBzZWxlY3Rpb25cbiAgICogdW50b3VjaGVkLiAoVGhlIGlucHV0IGZpZWxkIGFsc28gcmVtYWlucyB1bnRvdWNoZWQgdW5sZXNzIHJldmVydDogdHJ1ZVxuICAgKiBvcHRpb24gaXMgdXNlZC4pXG4gICAqXG4gICAqIEBwYXJhbSB7Li4uKERhdGV8TnVtYmVyfFN0cmluZyl8QXJyYXl9IFtkYXRlc10gLSBEYXRlIHN0cmluZ3MsIERhdGVcbiAgICogb2JqZWN0cywgdGltZSB2YWx1ZXMgb3IgbWl4IG9mIHRob3NlIGZvciBuZXcgc2VsZWN0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gY2xlYXI6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gY2xlYXIgdGhlIGV4aXN0aW5nIHNlbGVjdGlvblxuICAgKiAgICAgZGVmdWFsdDogZmFsc2VcbiAgICogLSByZW5kZXI6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmUtcmVuZGVyIHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKiAgICAgZGVmYXVsdDogdHJ1ZVxuICAgKiAtIGF1dG9oaWRlOiB7Ym9vbGVhbn0gLSBXaGV0aGVyIHRvIGhpZGUgdGhlIHBpY2tlciBlbGVtZW50IGFmdGVyIHJlLXJlbmRlclxuICAgKiAgICAgSWdub3JlZCB3aGVuIHVzZWQgd2l0aCByZW5kZXI6IGZhbHNlXG4gICAqICAgICBkZWZhdWx0OiBjb25maWcuYXV0b2hpZGVcbiAgICogLSByZXZlcnQ6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmVmcmVzaCB0aGUgaW5wdXQgZmllbGQgd2hlbiBhbGwgdGhlXG4gICAqICAgICBwYXNzZWQgZGF0ZXMgYXJlIGludmFsaWRcbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBzZXREYXRlKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBkYXRlcyA9IFsuLi5hcmdzXTtcbiAgICBjb25zdCBvcHRzID0ge307XG4gICAgY29uc3QgbGFzdEFyZyA9IGxhc3RJdGVtT2YoYXJncyk7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIGxhc3RBcmcgPT09ICdvYmplY3QnXG4gICAgICAmJiAhQXJyYXkuaXNBcnJheShsYXN0QXJnKVxuICAgICAgJiYgIShsYXN0QXJnIGluc3RhbmNlb2YgRGF0ZSlcbiAgICAgICYmIGxhc3RBcmdcbiAgICApIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ob3B0cywgZGF0ZXMucG9wKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGlucHV0RGF0ZXMgPSBBcnJheS5pc0FycmF5KGRhdGVzWzBdKSA/IGRhdGVzWzBdIDogZGF0ZXM7XG4gICAgc2V0RGF0ZSh0aGlzLCBpbnB1dERhdGVzLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHNlbGVjdGVkIGRhdGUocykgd2l0aCBpbnB1dCBmaWVsZCdzIHZhbHVlXG4gICAqIE5vdCBhdmFpbGFibGUgb24gaW5saW5lIHBpY2tlclxuICAgKlxuICAgKiBUaGUgaW5wdXQgZmllbGQgd2lsbCBiZSByZWZyZXNoZWQgd2l0aCBwcm9wZXJseSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcuXG4gICAqXG4gICAqIEluIHRoZSBjYXNlIHRoYXQgYWxsIHRoZSBlbnRlcmVkIGRhdGVzIGFyZSBpbnZhbGlkICh1bnBhcnNhYmxlLCByZXBlYXRlZCxcbiAgICogZGlzYWJsZWQgb3Igb3V0LW9mLXJhbmdlKSwgd2hpeGggaXMgZGlzdGluZ3Vpc2hlZCBmcm9tIGVtcHR5IGlucHV0IGZpZWxkLFxuICAgKiB0aGUgbWV0aG9kIGxlYXZlcyB0aGUgaW5wdXQgZmllbGQgdW50b3VjaGVkIGFzIHdlbGwgYXMgdGhlIHNlbGVjdGlvbiBieVxuICAgKiBkZWZhdWx0LiBJZiByZXZlcnQ6IHRydWUgb3B0aW9uIGlzIHVzZWQgaW4gdGhpcyBjYXNlLCB0aGUgaW5wdXQgZmllbGQgaXNcbiAgICogcmVmcmVzaGVkIHdpdGggdGhlIGV4aXN0aW5nIHNlbGVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gYXV0b2hpZGU6IHtib29sZWFufSAtIHdoZXRoZXIgdG8gaGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgYWZ0ZXIgcmVmcmVzaFxuICAgKiAgICAgZGVmYXVsdDogZmFsc2VcbiAgICogLSByZXZlcnQ6IHtib29sZWFufSAtIFdoZXRoZXIgdG8gcmVmcmVzaCB0aGUgaW5wdXQgZmllbGQgd2hlbiBhbGwgdGhlXG4gICAqICAgICBwYXNzZWQgZGF0ZXMgYXJlIGludmFsaWRcbiAgICogICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICB1cGRhdGUob3B0aW9ucyA9IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmlubGluZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMgfHwge30sIHtjbGVhcjogdHJ1ZSwgcmVuZGVyOiB0cnVlfSk7XG4gICAgY29uc3QgaW5wdXREYXRlcyA9IHN0cmluZ1RvQXJyYXkodGhpcy5pbnB1dEZpZWxkLnZhbHVlLCB0aGlzLmNvbmZpZy5kYXRlRGVsaW1pdGVyKTtcbiAgICBzZXREYXRlKHRoaXMsIGlucHV0RGF0ZXMsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIHBpY2tlciBlbGVtZW50IGFuZCB0aGUgYXNzb2NpYXRlZCBpbnB1dCBmaWVsZFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3RhcmdldF0gLSB0YXJnZXQgaXRlbSB3aGVuIHJlZnJlc2hpbmcgb25lIGl0ZW0gb25seVxuICAgKiAncGlja2VyJyBvciAnaW5wdXQnXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlUmVuZGVyXSAtIHdoZXRoZXIgdG8gcmUtcmVuZGVyIHRoZSBwaWNrZXIgZWxlbWVudFxuICAgKiByZWdhcmRsZXNzIG9mIGl0cyBzdGF0ZSBpbnN0ZWFkIG9mIG9wdGltaXplZCByZWZyZXNoXG4gICAqL1xuICByZWZyZXNoKHRhcmdldCA9IHVuZGVmaW5lZCwgZm9yY2VSZW5kZXIgPSBmYWxzZSkge1xuICAgIGlmICh0YXJnZXQgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGZvcmNlUmVuZGVyID0gdGFyZ2V0O1xuICAgICAgdGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBtb2RlO1xuICAgIGlmICh0YXJnZXQgPT09ICdwaWNrZXInKSB7XG4gICAgICBtb2RlID0gMjtcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ2lucHV0Jykge1xuICAgICAgbW9kZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vZGUgPSAzO1xuICAgIH1cbiAgICByZWZyZXNoVUkodGhpcywgbW9kZSwgIWZvcmNlUmVuZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnRlciBlZGl0IG1vZGVcbiAgICogTm90IGF2YWlsYWJsZSBvbiBpbmxpbmUgcGlja2VyIG9yIHdoZW4gdGhlIHBpY2tlciBlbGVtZW50IGlzIGhpZGRlblxuICAgKi9cbiAgZW50ZXJFZGl0TW9kZSgpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUgfHwgIXRoaXMucGlja2VyLmFjdGl2ZSB8fCB0aGlzLmVkaXRNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdpbi1lZGl0Jyk7XG4gIH1cblxuICAvKipcbiAgICogRXhpdCBmcm9tIGVkaXQgbW9kZVxuICAgKiBOb3QgYXZhaWxhYmxlIG9uIGlubGluZSBwaWNrZXJcbiAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc10gLSBmdW5jdGlvbiBvcHRpb25zXG4gICAqIC0gdXBkYXRlOiB7Ym9vbGVhbn0gLSB3aGV0aGVyIHRvIGNhbGwgdXBkYXRlKCkgYWZ0ZXIgZXhpdGluZ1xuICAgKiAgICAgSWYgZmFsc2UsIGlucHV0IGZpZWxkIGlzIHJldmVydCB0byB0aGUgZXhpc3Rpbmcgc2VsZWN0aW9uXG4gICAqICAgICBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZXhpdEVkaXRNb2RlKG9wdGlvbnMgPSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5pbmxpbmUgfHwgIXRoaXMuZWRpdE1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0cyA9IE9iamVjdC5hc3NpZ24oe3VwZGF0ZTogZmFsc2V9LCBvcHRpb25zKTtcbiAgICBkZWxldGUgdGhpcy5lZGl0TW9kZTtcbiAgICB0aGlzLmlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW4tZWRpdCcpO1xuICAgIGlmIChvcHRzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUob3B0cyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge2xpbWl0VG9SYW5nZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7YWRkTW9udGhzLCBhZGRZZWFyc30gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlckRhdGVwaWNrZXJFdmVudChkYXRlcGlja2VyLCB0eXBlKSB7XG4gIGNvbnN0IGRldGFpbCA9IHtcbiAgICBkYXRlOiBkYXRlcGlja2VyLmdldERhdGUoKSxcbiAgICB2aWV3RGF0ZTogbmV3IERhdGUoZGF0ZXBpY2tlci5waWNrZXIudmlld0RhdGUpLFxuICAgIHZpZXdJZDogZGF0ZXBpY2tlci5waWNrZXIuY3VycmVudFZpZXcuaWQsXG4gICAgZGF0ZXBpY2tlcixcbiAgfTtcbiAgZGF0ZXBpY2tlci5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtkZXRhaWx9KSk7XG59XG5cbi8vIGRpcmVjdGlvbjogLTEgKHRvIHByZXZpb3VzKSwgMSAodG8gbmV4dClcbmV4cG9ydCBmdW5jdGlvbiBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCBkaXJlY3Rpb24pIHtcbiAgY29uc3Qge21pbkRhdGUsIG1heERhdGV9ID0gZGF0ZXBpY2tlci5jb25maWc7XG4gIGNvbnN0IHtjdXJyZW50Vmlldywgdmlld0RhdGV9ID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGxldCBuZXdWaWV3RGF0ZTtcbiAgc3dpdGNoIChjdXJyZW50Vmlldy5pZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIG5ld1ZpZXdEYXRlID0gYWRkTW9udGhzKHZpZXdEYXRlLCBkaXJlY3Rpb24pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAxOlxuICAgICAgbmV3Vmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBuZXdWaWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24gKiBjdXJyZW50Vmlldy5uYXZTdGVwKTtcbiAgfVxuICBuZXdWaWV3RGF0ZSA9IGxpbWl0VG9SYW5nZShuZXdWaWV3RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGRhdGVwaWNrZXIucGlja2VyLmNoYW5nZUZvY3VzKG5ld1ZpZXdEYXRlKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFZpZXcoZGF0ZXBpY2tlcikge1xuICBjb25zdCB2aWV3SWQgPSBkYXRlcGlja2VyLnBpY2tlci5jdXJyZW50Vmlldy5pZDtcbiAgaWYgKHZpZXdJZCA9PT0gZGF0ZXBpY2tlci5jb25maWcubWF4Vmlldykge1xuICAgIHJldHVybjtcbiAgfVxuICBkYXRlcGlja2VyLnBpY2tlci5jaGFuZ2VWaWV3KHZpZXdJZCArIDEpLnJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5mb2N1cyhkYXRlcGlja2VyKSB7XG4gIGlmIChkYXRlcGlja2VyLmNvbmZpZy51cGRhdGVPbkJsdXIpIHtcbiAgICBkYXRlcGlja2VyLnVwZGF0ZSh7cmV2ZXJ0OiB0cnVlfSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZXBpY2tlci5yZWZyZXNoKCdpbnB1dCcpO1xuICB9XG4gIGRhdGVwaWNrZXIuaGlkZSgpO1xufVxuIiwiaW1wb3J0IHtpc0luUmFuZ2V9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2lzQWN0aXZlRWxlbWVudH0gZnJvbSAnLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQge2FkZERheXMsIGFkZE1vbnRocywgYWRkWWVhcnMsIHN0YXJ0T2ZZZWFyUGVyaW9kfSBmcm9tICcuLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge2dvVG9QcmV2T3JOZXh0LCBzd2l0Y2hWaWV3LCB1bmZvY3VzfSBmcm9tICcuL2Z1bmN0aW9ucy5qcyc7XG5cbi8vIEZpbmQgdGhlIGNsb3Nlc3QgZGF0ZSB0aGF0IGRvZXNuJ3QgbWVldCB0aGUgY29uZGl0aW9uIGZvciB1bmF2YWlsYWJsZSBkYXRlXG4vLyBSZXR1cm5zIHVuZGVmaW5lZCBpZiBubyBhdmFpbGFibGUgZGF0ZSBpcyBmb3VuZFxuLy8gYWRkRm46IGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgbmV4dCBkYXRlXG4vLyAgIC0gYXJnczogdGltZSB2YWx1ZSwgYW1vdW50XG4vLyBpbmNyZWFzZTogYW1vdW50IHRvIHBhc3MgdG8gYWRkRm5cbi8vIHRlc3RGbjogZnVuY3Rpb24gdG8gdGVzdCB0aGUgdW5hdmFpbGFibGl0eSBvZiB0aGUgZGF0ZVxuLy8gICAtIGFyZ3M6IHRpbWUgdmFsdWU7IHJldHVuOiB0cnVlIGlmIHVuYXZhaWxhYmxlXG5mdW5jdGlvbiBmaW5kTmV4dEF2YWlsYWJsZU9uZShkYXRlLCBhZGRGbiwgaW5jcmVhc2UsIHRlc3RGbiwgbWluLCBtYXgpIHtcbiAgaWYgKCFpc0luUmFuZ2UoZGF0ZSwgbWluLCBtYXgpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0ZXN0Rm4oZGF0ZSkpIHtcbiAgICBjb25zdCBuZXdEYXRlID0gYWRkRm4oZGF0ZSwgaW5jcmVhc2UpO1xuICAgIHJldHVybiBmaW5kTmV4dEF2YWlsYWJsZU9uZShuZXdEYXRlLCBhZGRGbiwgaW5jcmVhc2UsIHRlc3RGbiwgbWluLCBtYXgpO1xuICB9XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBkaXJlY3Rpb246IC0xIChsZWZ0L3VwKSwgMSAocmlnaHQvZG93bilcbi8vIHZlcnRpY2FsOiB0cnVlIGZvciB1cC9kb3duLCBmYWxzZSBmb3IgbGVmdC9yaWdodFxuZnVuY3Rpb24gbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIGRpcmVjdGlvbiwgdmVydGljYWwpIHtcbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IGN1cnJlbnRWaWV3ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBjb25zdCBzdGVwID0gY3VycmVudFZpZXcuc3RlcCB8fCAxO1xuICBsZXQgdmlld0RhdGUgPSBwaWNrZXIudmlld0RhdGU7XG4gIGxldCBhZGRGbjtcbiAgbGV0IHRlc3RGbjtcbiAgc3dpdGNoIChjdXJyZW50Vmlldy5pZCkge1xuICAgIGNhc2UgMDpcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICB2aWV3RGF0ZSA9IGFkZERheXModmlld0RhdGUsIGRpcmVjdGlvbiAqIDcpO1xuICAgICAgfSBlbHNlIGlmIChldi5jdHJsS2V5IHx8IGV2Lm1ldGFLZXkpIHtcbiAgICAgICAgdmlld0RhdGUgPSBhZGRZZWFycyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXdEYXRlID0gYWRkRGF5cyh2aWV3RGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICAgIGFkZEZuID0gYWRkRGF5cztcbiAgICAgIHRlc3RGbiA9IChkYXRlKSA9PiBjdXJyZW50Vmlldy5kaXNhYmxlZC5pbmNsdWRlcyhkYXRlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHZpZXdEYXRlID0gYWRkTW9udGhzKHZpZXdEYXRlLCB2ZXJ0aWNhbCA/IGRpcmVjdGlvbiAqIDQgOiBkaXJlY3Rpb24pO1xuICAgICAgYWRkRm4gPSBhZGRNb250aHM7XG4gICAgICB0ZXN0Rm4gPSAoZGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICBjb25zdCB7eWVhciwgZGlzYWJsZWR9ID0gY3VycmVudFZpZXc7XG4gICAgICAgIHJldHVybiBkdC5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGRpc2FibGVkLmluY2x1ZGVzKGR0LmdldE1vbnRoKCkpO1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB2aWV3RGF0ZSA9IGFkZFllYXJzKHZpZXdEYXRlLCBkaXJlY3Rpb24gKiAodmVydGljYWwgPyA0IDogMSkgKiBzdGVwKTtcbiAgICAgIGFkZEZuID0gYWRkWWVhcnM7XG4gICAgICB0ZXN0Rm4gPSBkYXRlID0+IGN1cnJlbnRWaWV3LmRpc2FibGVkLmluY2x1ZGVzKHN0YXJ0T2ZZZWFyUGVyaW9kKGRhdGUsIHN0ZXApKTtcbiAgfVxuICB2aWV3RGF0ZSA9IGZpbmROZXh0QXZhaWxhYmxlT25lKFxuICAgIHZpZXdEYXRlLFxuICAgIGFkZEZuLFxuICAgIGRpcmVjdGlvbiA8IDAgPyAtc3RlcCA6IHN0ZXAsXG4gICAgdGVzdEZuLFxuICAgIGN1cnJlbnRWaWV3Lm1pbkRhdGUsXG4gICAgY3VycmVudFZpZXcubWF4RGF0ZVxuICApO1xuICBpZiAodmlld0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHBpY2tlci5jaGFuZ2VGb2N1cyh2aWV3RGF0ZSkucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uS2V5ZG93bihkYXRlcGlja2VyLCBldikge1xuICBjb25zdCBrZXkgPSBldi5rZXk7XG4gIGlmIChrZXkgPT09ICdUYWInKSB7XG4gICAgdW5mb2N1cyhkYXRlcGlja2VyKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3Qge2lkLCBpc01pblZpZXd9ID0gcGlja2VyLmN1cnJlbnRWaWV3O1xuICBpZiAoIXBpY2tlci5hY3RpdmUpIHtcbiAgICBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgcGlja2VyLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBkYXRlcGlja2VyLnVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHBpY2tlci5zaG93KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGVwaWNrZXIuZWRpdE1vZGUpIHtcbiAgICBpZiAoa2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBkYXRlcGlja2VyLmV4aXRFZGl0TW9kZSh7dXBkYXRlOiB0cnVlLCBhdXRvaGlkZTogZGF0ZXBpY2tlci5jb25maWcuYXV0b2hpZGV9KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHBpY2tlci5oaWRlKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgaWYgKGV2LmN0cmxLZXkgfHwgZXYubWV0YUtleSkge1xuICAgICAgICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAtMSk7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgLTEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIGdvVG9QcmV2T3JOZXh0KGRhdGVwaWNrZXIsIDEpO1xuICAgICAgfSBlbHNlIGlmIChldi5zaGlmdEtleSkge1xuICAgICAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW92ZUJ5QXJyb3dLZXkoZGF0ZXBpY2tlciwgZXYsIDEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBpZiAoZXYuY3RybEtleSB8fCBldi5tZXRhS2V5KSB7XG4gICAgICAgIHN3aXRjaFZpZXcoZGF0ZXBpY2tlcik7XG4gICAgICB9IGVsc2UgaWYgKGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgLTEsIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgaWYgKGV2LnNoaWZ0S2V5ICYmICFldi5jdHJsS2V5ICYmICFldi5tZXRhS2V5KSB7XG4gICAgICAgIGRhdGVwaWNrZXIuZW50ZXJFZGl0TW9kZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtb3ZlQnlBcnJvd0tleShkYXRlcGlja2VyLCBldiwgMSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChpc01pblZpZXcpIHtcbiAgICAgICAgZGF0ZXBpY2tlci5zZXREYXRlKHBpY2tlci52aWV3RGF0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBpY2tlci5jaGFuZ2VWaWV3KGlkIC0gMSkucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHBpY2tlci5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdCYWNrc3BhY2UnXG4gICAgICAgIHx8IGtleSA9PT0gJ0RlbGV0ZSdcbiAgICAgICAgfHwgKGtleS5sZW5ndGggPT09IDEgJiYgIWV2LmN0cmxLZXkgJiYgIWV2Lm1ldGFLZXkpXG4gICAgICApIHtcbiAgICAgICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkZvY3VzKGRhdGVwaWNrZXIpIHtcbiAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLnNob3dPbkZvY3VzICYmICFkYXRlcGlja2VyLl9zaG93aW5nKSB7XG4gICAgZGF0ZXBpY2tlci5zaG93KCk7XG4gIH1cbn1cblxuLy8gZm9yIHRoZSBwcmV2ZW50aW9uIGZvciBlbnRlcmluZyBlZGl0IG1vZGUgd2hpbGUgZ2V0dGluZyBmb2N1cyBvbiBjbGlja1xuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2Vkb3duKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IGVsID0gZXYudGFyZ2V0O1xuICBpZiAoZGF0ZXBpY2tlci5waWNrZXIuYWN0aXZlIHx8IGRhdGVwaWNrZXIuY29uZmlnLnNob3dPbkNsaWNrKSB7XG4gICAgZWwuX2FjdGl2ZSA9IGlzQWN0aXZlRWxlbWVudChlbCk7XG4gICAgZWwuX2NsaWNraW5nID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkZWxldGUgZWwuX2FjdGl2ZTtcbiAgICAgIGRlbGV0ZSBlbC5fY2xpY2tpbmc7XG4gICAgfSwgMjAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tJbnB1dChkYXRlcGlja2VyLCBldikge1xuICBjb25zdCBlbCA9IGV2LnRhcmdldDtcbiAgaWYgKCFlbC5fY2xpY2tpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYXJUaW1lb3V0KGVsLl9jbGlja2luZyk7XG4gIGRlbGV0ZSBlbC5fY2xpY2tpbmc7XG5cbiAgaWYgKGVsLl9hY3RpdmUpIHtcbiAgICBkYXRlcGlja2VyLmVudGVyRWRpdE1vZGUoKTtcbiAgfVxuICBkZWxldGUgZWwuX2FjdGl2ZTtcblxuICBpZiAoZGF0ZXBpY2tlci5jb25maWcuc2hvd09uQ2xpY2spIHtcbiAgICBkYXRlcGlja2VyLnNob3coKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25QYXN0ZShkYXRlcGlja2VyLCBldikge1xuICBpZiAoZXYuY2xpcGJvYXJkRGF0YS50eXBlcy5pbmNsdWRlcygndGV4dC9wbGFpbicpKSB7XG4gICAgZGF0ZXBpY2tlci5lbnRlckVkaXRNb2RlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7aXNBY3RpdmVFbGVtZW50fSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCB7ZmluZEVsZW1lbnRJbkV2ZW50UGF0aH0gZnJvbSAnLi4vbGliL2V2ZW50LmpzJztcbmltcG9ydCB7dW5mb2N1c30gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG4vLyBmb3IgdGhlIGBkb2N1bWVudGAgdG8gZGVsZWdhdGUgdGhlIGV2ZW50cyBmcm9tIG91dHNpZGUgdGhlIHBpY2tlci9pbnB1dCBmaWVsZFxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tPdXRzaWRlKGRhdGVwaWNrZXIsIGV2KSB7XG4gIGNvbnN0IHtlbGVtZW50LCBwaWNrZXJ9ID0gZGF0ZXBpY2tlcjtcbiAgLy8gY2hlY2sgYm90aCBwaWNrZXIncyBhbmQgaW5wdXQncyBhY3RpdmVuZXNzIHRvIG1ha2UgdXBkYXRlT25CbHVyIHdvcmsgaW5cbiAgLy8gdGhlIGNhc2VzIHdoZXJlLi4uXG4gIC8vIC0gcGlja2VyIGlzIGhpZGRlbiBieSBFU0Mga2V5IHByZXNzIOKGkiBpbnB1dCBzdGF5cyBmb2N1c2VkXG4gIC8vIC0gaW5wdXQgaXMgdW5mb2N1c2VkIGJ5IGNsb3NpbmcgbW9iaWxlIGtleWJvYXJkIOKGkiBwaWtlciBpcyBrZXB0IHNob3duXG4gIGlmICghcGlja2VyLmFjdGl2ZSAmJiAhaXNBY3RpdmVFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHBpY2tlckVsZW0gPSBwaWNrZXIuZWxlbWVudDtcbiAgaWYgKGZpbmRFbGVtZW50SW5FdmVudFBhdGgoZXYsIGVsID0+IGVsID09PSBlbGVtZW50IHx8IGVsID09PSBwaWNrZXJFbGVtKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB1bmZvY3VzKGRhdGVwaWNrZXIpO1xufVxuIiwiaW1wb3J0IHt0b2RheSwgYWRkTW9udGhzLCBhZGRZZWFyc30gZnJvbSAnLi4vbGliL2RhdGUuanMnO1xuaW1wb3J0IHtmaW5kRWxlbWVudEluRXZlbnRQYXRofSBmcm9tICcuLi9saWIvZXZlbnQuanMnO1xuaW1wb3J0IHtnb1RvUHJldk9yTmV4dCwgc3dpdGNoVmlld30gZnJvbSAnLi9mdW5jdGlvbnMuanMnO1xuXG5mdW5jdGlvbiBnb1RvU2VsZWN0ZWRNb250aE9yWWVhcihkYXRlcGlja2VyLCBzZWxlY3Rpb24pIHtcbiAgY29uc3QgcGlja2VyID0gZGF0ZXBpY2tlci5waWNrZXI7XG4gIGNvbnN0IHZpZXdEYXRlID0gbmV3IERhdGUocGlja2VyLnZpZXdEYXRlKTtcbiAgY29uc3Qgdmlld0lkID0gcGlja2VyLmN1cnJlbnRWaWV3LmlkO1xuICBjb25zdCBuZXdEYXRlID0gdmlld0lkID09PSAxXG4gICAgPyBhZGRNb250aHModmlld0RhdGUsIHNlbGVjdGlvbiAtIHZpZXdEYXRlLmdldE1vbnRoKCkpXG4gICAgOiBhZGRZZWFycyh2aWV3RGF0ZSwgc2VsZWN0aW9uIC0gdmlld0RhdGUuZ2V0RnVsbFllYXIoKSk7XG5cbiAgcGlja2VyLmNoYW5nZUZvY3VzKG5ld0RhdGUpLmNoYW5nZVZpZXcodmlld0lkIC0gMSkucmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrVG9kYXlCdG4oZGF0ZXBpY2tlcikge1xuICBjb25zdCBwaWNrZXIgPSBkYXRlcGlja2VyLnBpY2tlcjtcbiAgY29uc3QgY3VycmVudERhdGUgPSB0b2RheSgpO1xuICBpZiAoZGF0ZXBpY2tlci5jb25maWcudG9kYXlCdG5Nb2RlID09PSAxKSB7XG4gICAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICBkYXRlcGlja2VyLnNldERhdGUoY3VycmVudERhdGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRlcGlja2VyLnNldERhdGUoY3VycmVudERhdGUsIHtyZW5kZXI6IGZhbHNlfSk7XG4gICAgcGlja2VyLnVwZGF0ZSgpO1xuICB9XG4gIGlmIChwaWNrZXIudmlld0RhdGUgIT09IGN1cnJlbnREYXRlKSB7XG4gICAgcGlja2VyLmNoYW5nZUZvY3VzKGN1cnJlbnREYXRlKTtcbiAgfVxuICBwaWNrZXIuY2hhbmdlVmlldygwKS5yZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tDbGVhckJ0bihkYXRlcGlja2VyKSB7XG4gIGRhdGVwaWNrZXIuc2V0RGF0ZSh7Y2xlYXI6IHRydWV9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tWaWV3U3dpdGNoKGRhdGVwaWNrZXIpIHtcbiAgc3dpdGNoVmlldyhkYXRlcGlja2VyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2tQcmV2QnRuKGRhdGVwaWNrZXIpIHtcbiAgZ29Ub1ByZXZPck5leHQoZGF0ZXBpY2tlciwgLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DbGlja05leHRCdG4oZGF0ZXBpY2tlcikge1xuICBnb1RvUHJldk9yTmV4dChkYXRlcGlja2VyLCAxKTtcbn1cblxuLy8gRm9yIHRoZSBwaWNrZXIncyBtYWluIGJsb2NrIHRvIGRlbGVnZXRlIHRoZSBldmVudHMgZnJvbSBgZGF0ZXBpY2tlci1jZWxsYHNcbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWNrVmlldyhkYXRlcGlja2VyLCBldikge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kRWxlbWVudEluRXZlbnRQYXRoKGV2LCAnLmRhdGVwaWNrZXItY2VsbCcpO1xuICBpZiAoIXRhcmdldCB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qge2lkLCBpc01pblZpZXd9ID0gZGF0ZXBpY2tlci5waWNrZXIuY3VycmVudFZpZXc7XG4gIGlmIChpc01pblZpZXcpIHtcbiAgICBkYXRlcGlja2VyLnNldERhdGUoTnVtYmVyKHRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgfSBlbHNlIGlmIChpZCA9PT0gMSkge1xuICAgIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIE51bWJlcih0YXJnZXQuZGF0YXNldC5tb250aCkpO1xuICB9IGVsc2Uge1xuICAgIGdvVG9TZWxlY3RlZE1vbnRoT3JZZWFyKGRhdGVwaWNrZXIsIE51bWJlcih0YXJnZXQuZGF0YXNldC55ZWFyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTW91c2Vkb3duUGlja2VyKGV2KSB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG4iLCIvLyBkZWZhdWx0IGxvY2FsZXNcbmV4cG9ydCBjb25zdCBsb2NhbGVzID0ge1xuICBlbjoge1xuICAgIGRheXM6IFtcIlN1bmRheVwiLCBcIk1vbmRheVwiLCBcIlR1ZXNkYXlcIiwgXCJXZWRuZXNkYXlcIiwgXCJUaHVyc2RheVwiLCBcIkZyaWRheVwiLCBcIlNhdHVyZGF5XCJdLFxuICAgIGRheXNTaG9ydDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgIGRheXNNaW46IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICAgIG1vbnRoczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG4gICAgbW9udGhzU2hvcnQ6IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXSxcbiAgICB0b2RheTogXCJUb2RheVwiLFxuICAgIGNsZWFyOiBcIkNsZWFyXCIsXG4gICAgdGl0bGVGb3JtYXQ6IFwiTU0geVwiXG4gIH1cbn07XG4iLCJpbXBvcnQge3N0cmlwVGltZSwgdG9kYXl9IGZyb20gJy4vZGF0ZS5qcyc7XG5pbXBvcnQge2xhc3RJdGVtT2Z9IGZyb20gJy4vdXRpbHMuanMnO1xuXG4vLyBwYXR0ZXJuIGZvciBmb3JtYXQgcGFydHNcbmV4cG9ydCBjb25zdCByZUZvcm1hdFRva2VucyA9IC9kZD98REQ/fG1tP3xNTT98eXk/KD86eXkpPy87XG4vLyBwYXR0ZXJuIGZvciBub24gZGF0ZSBwYXJ0c1xuZXhwb3J0IGNvbnN0IHJlTm9uRGF0ZVBhcnRzID0gL1tcXHMhLS86LUBbLWB7LX7lubTmnIjml6VdKy87XG4vLyBjYWNoZSBmb3IgcGVyc2VkIGZvcm1hdHNcbmxldCBrbm93bkZvcm1hdHMgPSB7fTtcbi8vIHBhcnNlIGZ1bnRpb25zIGZvciBkYXRlIHBhcnRzXG5jb25zdCBwYXJzZUZucyA9IHtcbiAgeShkYXRlLCB5ZWFyKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnNldEZ1bGxZZWFyKHBhcnNlSW50KHllYXIsIDEwKSk7XG4gIH0sXG4gIG0oZGF0ZSwgbW9udGgsIGxvY2FsZSkge1xuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBsZXQgbW9udGhJbmRleCA9IHBhcnNlSW50KG1vbnRoLCAxMCkgLSAxO1xuXG4gICAgaWYgKGlzTmFOKG1vbnRoSW5kZXgpKSB7XG4gICAgICBpZiAoIW1vbnRoKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vbnRoTmFtZSA9IG1vbnRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjb21wYXJlTmFtZXMgPSBuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKG1vbnRoTmFtZSk7XG4gICAgICAvLyBjb21wYXJlIHdpdGggYm90aCBzaG9ydCBhbmQgZnVsbCBuYW1lcyBiZWNhdXNlIHNvbWUgbG9jYWxlcyBoYXZlIHBlcmlvZHNcbiAgICAgIC8vIGluIHRoZSBzaG9ydCBuYW1lcyAobm90IGVxdWFsIHRvIHRoZSBmaXJzdCBYIGxldHRlcnMgb2YgdGhlIGZ1bGwgbmFtZXMpXG4gICAgICBtb250aEluZGV4ID0gbG9jYWxlLm1vbnRoc1Nob3J0LmZpbmRJbmRleChjb21wYXJlTmFtZXMpO1xuICAgICAgaWYgKG1vbnRoSW5kZXggPCAwKSB7XG4gICAgICAgIG1vbnRoSW5kZXggPSBsb2NhbGUubW9udGhzLmZpbmRJbmRleChjb21wYXJlTmFtZXMpO1xuICAgICAgfVxuICAgICAgaWYgKG1vbnRoSW5kZXggPCAwKSB7XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3RGF0ZS5zZXRNb250aChtb250aEluZGV4KTtcbiAgICByZXR1cm4gbmV3RGF0ZS5nZXRNb250aCgpICE9PSBub3JtYWxpemVNb250aChtb250aEluZGV4KVxuICAgICAgPyBuZXdEYXRlLnNldERhdGUoMClcbiAgICAgIDogbmV3RGF0ZS5nZXRUaW1lKCk7XG4gIH0sXG4gIGQoZGF0ZSwgZGF5KSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnNldERhdGUocGFyc2VJbnQoZGF5LCAxMCkpO1xuICB9LFxufTtcbi8vIGZvcm1hdCBmdW5jdGlvbnMgZm9yIGRhdGUgcGFydHNcbmNvbnN0IGZvcm1hdEZucyA9IHtcbiAgZChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpO1xuICB9LFxuICBkZChkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXREYXRlKCksIDIpO1xuICB9LFxuICBEKGRhdGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUuZGF5c1Nob3J0W2RhdGUuZ2V0RGF5KCldO1xuICB9LFxuICBERChkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmRheXNbZGF0ZS5nZXREYXkoKV07XG4gIH0sXG4gIG0oZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICB9LFxuICBtbShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRNb250aCgpICsgMSwgMik7XG4gIH0sXG4gIE0oZGF0ZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFtkYXRlLmdldE1vbnRoKCldO1xuICB9LFxuICBNTShkYXRlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICB9LFxuICB5KGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB9LFxuICB5eShkYXRlKSB7XG4gICAgcmV0dXJuIHBhZFplcm8oZGF0ZS5nZXRGdWxsWWVhcigpLCAyKS5zbGljZSgtMik7XG4gIH0sXG4gIHl5eXkoZGF0ZSkge1xuICAgIHJldHVybiBwYWRaZXJvKGRhdGUuZ2V0RnVsbFllYXIoKSwgNCk7XG4gIH0sXG59O1xuXG4vLyBnZXQgbW9udGggaW5kZXggaW4gbm9ybWFsIHJhbmdlICgwIC0gMTEpIGZyb20gYW55IG51bWJlclxuZnVuY3Rpb24gbm9ybWFsaXplTW9udGgobW9udGhJbmRleCkge1xuICByZXR1cm4gbW9udGhJbmRleCA+IC0xID8gbW9udGhJbmRleCAlIDEyIDogbm9ybWFsaXplTW9udGgobW9udGhJbmRleCArIDEyKTtcbn1cblxuZnVuY3Rpb24gcGFkWmVybyhudW0sIGxlbmd0aCkge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkucGFkU3RhcnQobGVuZ3RoLCAnMCcpO1xufVxuXG5mdW5jdGlvbiBwYXJzZUZvcm1hdFN0cmluZyhmb3JtYXQpIHtcbiAgaWYgKHR5cGVvZiBmb3JtYXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XG4gIH1cbiAgaWYgKGZvcm1hdCBpbiBrbm93bkZvcm1hdHMpIHtcbiAgICByZXR1cm4ga25vd25Gb3JtYXRzW2Zvcm1hdF07XG4gIH1cblxuICAvLyBzcHJpdCB0aGUgZm9ybWF0IHN0cmluZyBpbnRvIHBhcnRzIGFuZCBzZXByYXRvcnNcbiAgY29uc3Qgc2VwYXJhdG9ycyA9IGZvcm1hdC5zcGxpdChyZUZvcm1hdFRva2Vucyk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0Lm1hdGNoKG5ldyBSZWdFeHAocmVGb3JtYXRUb2tlbnMsICdnJykpO1xuICBpZiAoc2VwYXJhdG9ycy5sZW5ndGggPT09IDAgfHwgIXBhcnRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRlIGZvcm1hdC5cIik7XG4gIH1cblxuICAvLyBjb2xsZWN0IGZvcm1hdCBmdW5jdGlvbnMgdXNlZCBpbiB0aGUgZm9ybWF0XG4gIGNvbnN0IHBhcnRGb3JtYXR0ZXJzID0gcGFydHMubWFwKHRva2VuID0+IGZvcm1hdEZuc1t0b2tlbl0pO1xuXG4gIC8vIGNvbGxlY3QgcGFyc2UgZnVuY3Rpb24ga2V5cyB1c2VkIGluIHRoZSBmb3JtYXRcbiAgLy8gaXRlcmF0ZSBvdmVyIHBhcnNlRm5zJyBrZXlzIGluIG9yZGVyIHRvIGtlZXAgdGhlIG9yZGVyIG9mIHRoZSBrZXlzLlxuICBjb25zdCBwYXJ0UGFyc2VyS2V5cyA9IE9iamVjdC5rZXlzKHBhcnNlRm5zKS5yZWR1Y2UoKGtleXMsIGtleSkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gcGFydHMuZmluZChwYXJ0ID0+IHBhcnRbMF0gIT09ICdEJyAmJiBwYXJ0WzBdLnRvTG93ZXJDYXNlKCkgPT09IGtleSk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4ga25vd25Gb3JtYXRzW2Zvcm1hdF0gPSB7XG4gICAgcGFyc2VyKGRhdGVTdHIsIGxvY2FsZSkge1xuICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0ci5zcGxpdChyZU5vbkRhdGVQYXJ0cykucmVkdWNlKChkdFBhcnRzLCBwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAocGFydC5sZW5ndGggPiAwICYmIHBhcnRzW2luZGV4XSkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gcGFydHNbaW5kZXhdWzBdO1xuICAgICAgICAgIGlmICh0b2tlbiA9PT0gJ00nKSB7XG4gICAgICAgICAgICBkdFBhcnRzLm0gPSBwYXJ0O1xuICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4gIT09ICdEJykge1xuICAgICAgICAgICAgZHRQYXJ0c1t0b2tlbl0gPSBwYXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZHRQYXJ0cztcbiAgICAgIH0sIHt9KTtcblxuICAgICAgLy8gaXRlcmF0ZSBvdmVyIHBhcnRQYXJzZXJrZXlzIHNvIHRoYXQgdGhlIHBhcnNpbmcgaXMgbWFkZSBpbiB0aGUgb2RlclxuICAgICAgLy8gb2YgeWVhciwgbW9udGggYW5kIGRheSB0byBwcmV2ZW50IHRoZSBkYXkgcGFyc2VyIGZyb20gY29ycmVjdGluZyBsYXN0XG4gICAgICAvLyBkYXkgb2YgbW9udGggd3JvbmdseVxuICAgICAgcmV0dXJuIHBhcnRQYXJzZXJLZXlzLnJlZHVjZSgob3JpZ0RhdGUsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRlID0gcGFyc2VGbnNba2V5XShvcmlnRGF0ZSwgZGF0ZVBhcnRzW2tleV0sIGxvY2FsZSk7XG4gICAgICAgIC8vIGluZ25vcmUgdGhlIHBhcnQgZmFpbGVkIHRvIHBhcnNlXG4gICAgICAgIHJldHVybiBpc05hTihuZXdEYXRlKSA/IG9yaWdEYXRlIDogbmV3RGF0ZTtcbiAgICAgIH0sIHRvZGF5KCkpO1xuICAgIH0sXG4gICAgZm9ybWF0dGVyKGRhdGUsIGxvY2FsZSkge1xuICAgICAgbGV0IGRhdGVTdHIgPSBwYXJ0Rm9ybWF0dGVycy5yZWR1Y2UoKHN0ciwgZm4sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYCR7c2VwYXJhdG9yc1tpbmRleF19JHtmbihkYXRlLCBsb2NhbGUpfWA7XG4gICAgICB9LCAnJyk7XG4gICAgICAvLyBzZXBhcmF0b3JzJyBsZW5ndGggaXMgYWx3YXlzIHBhcnRzJyBsZW5ndGggKyAxLFxuICAgICAgcmV0dXJuIGRhdGVTdHIgKz0gbGFzdEl0ZW1PZihzZXBhcmF0b3JzKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHIsIGZvcm1hdCwgbG9jYWxlKSB7XG4gIGlmIChkYXRlU3RyIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgZGF0ZVN0ciA9PT0gJ251bWJlcicpIHtcbiAgICBjb25zdCBkYXRlID0gc3RyaXBUaW1lKGRhdGVTdHIpO1xuICAgIHJldHVybiBpc05hTihkYXRlKSA/IHVuZGVmaW5lZCA6IGRhdGU7XG4gIH1cbiAgaWYgKCFkYXRlU3RyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoZGF0ZVN0ciA9PT0gJ3RvZGF5Jykge1xuICAgIHJldHVybiB0b2RheSgpO1xuICB9XG5cbiAgaWYgKGZvcm1hdCAmJiBmb3JtYXQudG9WYWx1ZSkge1xuICAgIGNvbnN0IGRhdGUgPSBmb3JtYXQudG9WYWx1ZShkYXRlU3RyLCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgcmV0dXJuIGlzTmFOKGRhdGUpID8gdW5kZWZpbmVkIDogc3RyaXBUaW1lKGRhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkucGFyc2VyKGRhdGVTdHIsIGxvY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbG9jYWxlKSB7XG4gIGlmIChpc05hTihkYXRlKSB8fCAoIWRhdGUgJiYgZGF0ZSAhPT0gMCkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBkYXRlT2JqID0gdHlwZW9mIGRhdGUgPT09ICdudW1iZXInID8gbmV3IERhdGUoZGF0ZSkgOiBkYXRlO1xuXG4gIGlmIChmb3JtYXQudG9EaXNwbGF5KSB7XG4gICAgcmV0dXJuIGZvcm1hdC50b0Rpc3BsYXkoZGF0ZU9iaiwgZm9ybWF0LCBsb2NhbGUpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlRm9ybWF0U3RyaW5nKGZvcm1hdCkuZm9ybWF0dGVyKGRhdGVPYmosIGxvY2FsZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3RyaXBUaW1lKHRpbWVWYWx1ZSkge1xuICByZXR1cm4gbmV3IERhdGUodGltZVZhbHVlKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cblxuLy8gR2V0IHRoZSB0aW1lIHZhbHVlIG9mIHRoZSBzdGFydCBvZiBnaXZlbiBkYXRlIG9yIHllYXIsIG1vbnRoIGFuZCBkYXlcbmV4cG9ydCBmdW5jdGlvbiBkYXRlVmFsdWUoLi4uYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHRvZGF5KCk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHN0cmlwVGltZShhcmdzWzBdKTtcbiAgfVxuXG4gIC8vIHVzZSBzZXRGdWxsWWVhcigpIHRvIGtlZXAgMi1kaWdpdCB5ZWFyIGZyb20gYmVpbmcgbWFwcGVkIHRvIDE5MDAtMTk5OVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoMCk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoLi4uYXJncyk7XG4gIHJldHVybiBuZXdEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICByZXR1cm4gbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtzKGRhdGUsIGFtb3VudCkge1xuICByZXR1cm4gYWRkRGF5cyhkYXRlLCBhbW91bnQgKiA3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vbnRocyhkYXRlLCBhbW91bnQpIHtcbiAgLy8gSWYgdGhlIGRheSBvZiB0aGUgZGF0ZSBpcyBub3QgaW4gdGhlIG5ldyBtb250aCwgdGhlIGxhc3QgZGF5IG9mIHRoZSBuZXdcbiAgLy8gbW9udGggd2lsbCBiZSByZXR1cm5lZC4gZS5nLiBKYW4gMzEgKyAxIG1vbnRoIOKGkiBGZWIgMjggKG5vdCBNYXIgMDMpXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGhzVG9TZXQgPSBuZXdEYXRlLmdldE1vbnRoKCkgKyBhbW91bnQ7XG4gIGxldCBleHBlY3RlZE1vbnRoID0gbW9udGhzVG9TZXQgJSAxMjtcbiAgaWYgKGV4cGVjdGVkTW9udGggPCAwKSB7XG4gICAgZXhwZWN0ZWRNb250aCArPSAxMjtcbiAgfVxuXG4gIGNvbnN0IHRpbWUgPSBuZXdEYXRlLnNldE1vbnRoKG1vbnRoc1RvU2V0KTtcbiAgcmV0dXJuIG5ld0RhdGUuZ2V0TW9udGgoKSAhPT0gZXhwZWN0ZWRNb250aCA/IG5ld0RhdGUuc2V0RGF0ZSgwKSA6IHRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRZZWFycyhkYXRlLCBhbW91bnQpIHtcbiAgLy8gSWYgdGhlIGRhdGUgaXMgRmViIDI5IGFuZCB0aGUgbmV3IHllYXIgaXMgbm90IGEgbGVhcCB5ZWFyLCBGZWIgMjggb2YgdGhlXG4gIC8vIG5ldyB5ZWFyIHdpbGwgYmUgcmV0dXJuZWQuXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgZXhwZWN0ZWRNb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgdGltZSA9IG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgYW1vdW50KTtcbiAgcmV0dXJuIGV4cGVjdGVkTW9udGggPT09IDEgJiYgbmV3RGF0ZS5nZXRNb250aCgpID09PSAyID8gbmV3RGF0ZS5zZXREYXRlKDApIDogdGltZTtcbn1cblxuLy8gQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR0d2VuIDIgZGF5cyBvZiB0aGUgd2Vla1xuZnVuY3Rpb24gZGF5RGlmZihkYXksIGZyb20pIHtcbiAgcmV0dXJuIChkYXkgLSBmcm9tICsgNykgJSA3O1xufVxuXG4vLyBHZXQgdGhlIGRhdGUgb2YgdGhlIHNwZWNpZmllZCBkYXkgb2YgdGhlIHdlZWsgb2YgZ2l2ZW4gYmFzZSBkYXRlXG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZUaGVXZWVrT2YoYmFzZURhdGUsIGRheU9mV2Vlaywgd2Vla1N0YXJ0ID0gMCkge1xuICBjb25zdCBiYXNlRGF5ID0gbmV3IERhdGUoYmFzZURhdGUpLmdldERheSgpO1xuICByZXR1cm4gYWRkRGF5cyhiYXNlRGF0ZSwgZGF5RGlmZihkYXlPZldlZWssIHdlZWtTdGFydCkgLSBkYXlEaWZmKGJhc2VEYXksIHdlZWtTdGFydCkpO1xufVxuXG4vLyBHZXQgdGhlIElTTyB3ZWVrIG9mIGEgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSkge1xuICAvLyBzdGFydCBvZiBJU08gd2VlayBpcyBNb25kYXlcbiAgY29uc3QgdGh1T2ZUaGVXZWVrID0gZGF5T2ZUaGVXZWVrT2YoZGF0ZSwgNCwgMSk7XG4gIC8vIDFzdCB3ZWVrID09IHRoZSB3ZWVrIHdoZXJlIHRoZSA0dGggb2YgSmFudWFyeSBpcyBpblxuICBjb25zdCBmaXJzdFRodSA9IGRheU9mVGhlV2Vla09mKG5ldyBEYXRlKHRodU9mVGhlV2Vlaykuc2V0TW9udGgoMCwgNCksIDQsIDEpO1xuICByZXR1cm4gTWF0aC5yb3VuZCgodGh1T2ZUaGVXZWVrIC0gZmlyc3RUaHUpIC8gNjA0ODAwMDAwKSArIDE7XG59XG5cbi8vIEdldCB0aGUgc3RhcnQgeWVhciBvZiB0aGUgcGVyaW9kIG9mIHllYXJzIHRoYXQgaW5jbHVkZXMgZ2l2ZW4gZGF0ZVxuLy8geWVhcnM6IGxlbmd0aCBvZiB0aGUgeWVhciBwZXJpb2RcbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhclBlcmlvZChkYXRlLCB5ZWFycykge1xuICAvKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1llYXJfemVybyNJU09fODYwMSAqL1xuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoZGF0ZSkuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoeWVhciAvIHllYXJzKSAqIHllYXJzO1xufVxuXG4vLyBDb252ZXJ0IGRhdGUgdG8gdGhlIGZpcnN0L2xhc3QgZGF0ZSBvZiB0aGUgbW9udGgveWVhciBvZiB0aGUgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHJlZ3VsYXJpemVEYXRlKGRhdGUsIHRpbWVTcGFuLCB1c2VMYXN0RGF0ZSkge1xuICBpZiAodGltZVNwYW4gIT09IDEgJiYgdGltZVNwYW4gIT09IDIpIHtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGlmICh0aW1lU3BhbiA9PT0gMSkge1xuICAgIHVzZUxhc3REYXRlXG4gICAgICA/IG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpICsgMSwgMClcbiAgICAgIDogbmV3RGF0ZS5zZXREYXRlKDEpO1xuICB9IGVsc2Uge1xuICAgIHVzZUxhc3REYXRlXG4gICAgICA/IG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgMSwgMCwgMClcbiAgICAgIDogbmV3RGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgfVxuICByZXR1cm4gbmV3RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn1cbiIsImNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSFRNTChodG1sKSB7XG4gIHJldHVybiByYW5nZS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoaHRtbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnQoZWwpIHtcbiAgcmV0dXJuIGVsLnBhcmVudEVsZW1lbnRcbiAgICB8fCAoZWwucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBlbC5wYXJlbnROb2RlLmhvc3QgOiB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBY3RpdmVFbGVtZW50KGVsKSB7XG4gIHJldHVybiBlbC5nZXRSb290Tm9kZSgpLmFjdGl2ZUVsZW1lbnQgPT09IGVsO1xufVxuXG4vLyBlcXVpdmFsZW50IHRvIGpRdWVyeSdzIDp2aXNibGVcbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgcmV0dXJuICEhKGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRWxlbWVudChlbCkge1xuICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGJhY2sgdXAgdGhlIGV4aXN0aW5nIGRpc3BsYXkgc2V0dGluZyBpbiBkYXRhLXN0eWxlLWRpc3BsYXlcbiAgaWYgKGVsLnN0eWxlLmRpc3BsYXkpIHtcbiAgICBlbC5kYXRhc2V0LnN0eWxlRGlzcGxheSA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gIH1cbiAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5KSB7XG4gICAgLy8gcmVzdG9yZSBiYWNrZWQtdXAgZGlzcGF5IHByb3BlcnR5XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLmRhdGFzZXQuc3R5bGVEaXNwbGF5O1xuICAgIGRlbGV0ZSBlbC5kYXRhc2V0LnN0eWxlRGlzcGxheTtcbiAgfSBlbHNlIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Q2hpbGROb2RlcyhlbCkge1xuICBpZiAoZWwuZmlyc3RDaGlsZCkge1xuICAgIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuICAgIGVtcHR5Q2hpbGROb2RlcyhlbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZE5vZGVzKGVsLCBuZXdDaGlsZE5vZGVzKSB7XG4gIGVtcHR5Q2hpbGROb2RlcyhlbCk7XG4gIGlmIChuZXdDaGlsZE5vZGVzIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudCkge1xuICAgIGVsLmFwcGVuZENoaWxkKG5ld0NoaWxkTm9kZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBuZXdDaGlsZE5vZGVzID09PSAnc3RyaW5nJykge1xuICAgIGVsLmFwcGVuZENoaWxkKHBhcnNlSFRNTChuZXdDaGlsZE5vZGVzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG5ld0NoaWxkTm9kZXMuZm9yRWFjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG5ld0NoaWxkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgZWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IGxpc3RlbmVyUmVnaXN0cnkgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qge2FkZEV2ZW50TGlzdGVuZXIsIHJlbW92ZUV2ZW50TGlzdGVuZXJ9ID0gRXZlbnRUYXJnZXQucHJvdG90eXBlO1xuXG4vLyBSZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgdG8gYSBrZXkgb2JqZWN0XG4vLyBsaXN0ZW5lcnM6IGFycmF5IG9mIGxpc3RlbmVyIGRlZmluaXRpb25zO1xuLy8gICAtIGVhY2ggZGVmaW5pdGlvbiBtdXN0IGJlIGEgZmxhdCBhcnJheSBvZiBldmVudCB0YXJnZXQgYW5kIHRoZSBhcmd1bWVudHNcbi8vICAgICB1c2VkIHRvIGNhbGwgYWRkRXZlbnRMaXN0ZW5lcigpIG9uIHRoZSB0YXJnZXRcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVycyhrZXlPYmosIGxpc3RlbmVycykge1xuICBsZXQgcmVnaXN0ZXJlZCA9IGxpc3RlbmVyUmVnaXN0cnkuZ2V0KGtleU9iaik7XG4gIGlmICghcmVnaXN0ZXJlZCkge1xuICAgIHJlZ2lzdGVyZWQgPSBbXTtcbiAgICBsaXN0ZW5lclJlZ2lzdHJ5LnNldChrZXlPYmosIHJlZ2lzdGVyZWQpO1xuICB9XG4gIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCguLi5saXN0ZW5lcik7XG4gICAgcmVnaXN0ZXJlZC5wdXNoKGxpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyTGlzdGVuZXJzKGtleU9iaikge1xuICBsZXQgbGlzdGVuZXJzID0gbGlzdGVuZXJSZWdpc3RyeS5nZXQoa2V5T2JqKTtcbiAgaWYgKCFsaXN0ZW5lcnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKC4uLmxpc3RlbmVyKTtcbiAgfSk7XG4gIGxpc3RlbmVyUmVnaXN0cnkuZGVsZXRlKGtleU9iaik7XG59XG5cbi8vIEV2ZW50LmNvbXBvc2VkUGF0aCgpIHBvbHlmaWxsIGZvciBFZGdlXG4vLyBiYXNlZCBvbiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9rbGVpbmZyZXVuZC9lOTc4N2Q3Mzc3NmMwZTM3NTBkY2ZjZGM4OWYxMDBlY1xuaWYgKCFFdmVudC5wcm90b3R5cGUuY29tcG9zZWRQYXRoKSB7XG4gIGNvbnN0IGdldENvbXBvc2VkUGF0aCA9IChub2RlLCBwYXRoID0gW10pID0+IHtcbiAgICBwYXRoLnB1c2gobm9kZSk7XG5cbiAgICBsZXQgcGFyZW50O1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuaG9zdCkgeyAvLyBTaGFkb3dSb290XG4gICAgICBwYXJlbnQgPSBub2RlLmhvc3Q7XG4gICAgfSBlbHNlIGlmIChub2RlLmRlZmF1bHRWaWV3KSB7ICAvLyBEb2N1bWVudFxuICAgICAgcGFyZW50ID0gbm9kZS5kZWZhdWx0VmlldztcbiAgICB9XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldENvbXBvc2VkUGF0aChwYXJlbnQsIHBhdGgpIDogcGF0aDtcbiAgfTtcblxuICBFdmVudC5wcm90b3R5cGUuY29tcG9zZWRQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRDb21wb3NlZFBhdGgodGhpcy50YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kRnJvbVBhdGgocGF0aCwgY3JpdGVyaWEsIGN1cnJlbnRUYXJnZXQpIHtcbiAgY29uc3QgW25vZGUsIC4uLnJlc3RdID0gcGF0aDtcbiAgaWYgKGNyaXRlcmlhKG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgaWYgKG5vZGUgPT09IGN1cnJlbnRUYXJnZXQgfHwgbm9kZS50YWdOYW1lID09PSAnSFRNTCcgfHwgcmVzdC5sZW5ndGggPT09IDApIHtcbiAgICAvLyBzdG9wIHdoZW4gcmVhY2hpbmcgY3VycmVudFRhcmdldCBvciA8aHRtbD5cbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGZpbmRGcm9tUGF0aChyZXN0LCBjcml0ZXJpYSwgY3VycmVudFRhcmdldCk7XG59XG5cbi8vIFNlYXJjaCBmb3IgdGhlIGFjdHVhbCB0YXJnZXQgb2YgYSBkZWxlZ2F0ZWQgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRWxlbWVudEluRXZlbnRQYXRoKGV2LCBzZWxlY3Rvcikge1xuICBjb25zdCBjcml0ZXJpYSA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2VsZWN0b3JcbiAgICA6IGVsID0+IGVsIGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgcmV0dXJuIGZpbmRGcm9tUGF0aChldi5jb21wb3NlZFBhdGgoKSwgY3JpdGVyaWEsIGV2LmN1cnJlbnRUYXJnZXQpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXN0SXRlbU9mKGFycikge1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn1cblxuLy8gcHVzaCBvbmx5IHRoZSBpdGVtcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gcHVzaFVuaXF1ZShhcnIsIC4uLml0ZW1zKSB7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyci5wdXNoKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvQXJyYXkoc3RyLCBzZXBhcmF0b3IpIHtcbiAgLy8gY29udmVydCBlbXB0eSBzdHJpbmcgdG8gYW4gZW1wdHkgYXJyYXlcbiAgcmV0dXJuIHN0ciA/IHN0ci5zcGxpdChzZXBhcmF0b3IpIDogW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luUmFuZ2UodGVzdFZhbCwgbWluLCBtYXgpIHtcbiAgY29uc3QgbWluT0sgPSBtaW4gPT09IHVuZGVmaW5lZCB8fCB0ZXN0VmFsID49IG1pbjtcbiAgY29uc3QgbWF4T0sgPSBtYXggPT09IHVuZGVmaW5lZCB8fCB0ZXN0VmFsIDw9IG1heDtcbiAgcmV0dXJuIG1pbk9LICYmIG1heE9LO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGltaXRUb1JhbmdlKHZhbCwgbWluLCBtYXgpIHtcbiAgaWYgKHZhbCA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH1cbiAgaWYgKHZhbCA+IG1heCkge1xuICAgIHJldHVybiBtYXg7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhZ1JlcGVhdCh0YWdOYW1lLCByZXBlYXQsIGF0dHJpYnV0ZXMgPSB7fSwgaW5kZXggPSAwLCBodG1sID0gJycpIHtcbiAgY29uc3Qgb3BlblRhZ1NyYyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLnJlZHVjZSgoc3JjLCBhdHRyKSA9PiB7XG4gICAgbGV0IHZhbCA9IGF0dHJpYnV0ZXNbYXR0cl07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhbCA9IHZhbChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBgJHtzcmN9ICR7YXR0cn09XCIke3ZhbH1cImA7XG4gIH0sIHRhZ05hbWUpO1xuICBodG1sICs9IGA8JHtvcGVuVGFnU3JjfT48LyR7dGFnTmFtZX0+YDtcblxuICBjb25zdCBuZXh0ID0gaW5kZXggKyAxO1xuICByZXR1cm4gbmV4dCA8IHJlcGVhdFxuICAgID8gY3JlYXRlVGFnUmVwZWF0KHRhZ05hbWUsIHJlcGVhdCwgYXR0cmlidXRlcywgbmV4dCwgaHRtbClcbiAgICA6IGh0bWw7XG59XG5cbi8vIFJlbW92ZSB0aGUgc3BhY2luZyBzdXJyb3VuZGluZyB0YWdzIGZvciBIVE1MIHBhcnNlciBub3QgdG8gY3JlYXRlIHRleHQgbm9kZXNcbi8vIGJlZm9yZS9hZnRlciBlbGVtZW50c1xuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplVGVtcGxhdGVIVE1MKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPlxccysvZywgJz4nKS5yZXBsYWNlKC9cXHMrPC8sICc8Jyk7XG59XG4iLCIvLyBjb25maWcgb3B0aW9ucyB1cGRhdGFibGUgYnkgc2V0T3B0aW9ucygpIGFuZCB0aGVpciBkZWZhdWx0IHZhbHVlc1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGF1dG9oaWRlOiBmYWxzZSxcbiAgYmVmb3JlU2hvd0RheTogbnVsbCxcbiAgYmVmb3JlU2hvd0RlY2FkZTogbnVsbCxcbiAgYmVmb3JlU2hvd01vbnRoOiBudWxsLFxuICBiZWZvcmVTaG93WWVhcjogbnVsbCxcbiAgY2FsZW5kYXJXZWVrczogZmFsc2UsXG4gIGNsZWFyQnRuOiBmYWxzZSxcbiAgZGF0ZURlbGltaXRlcjogJywnLFxuICBkYXRlc0Rpc2FibGVkOiBbXSxcbiAgZGF5c09mV2Vla0Rpc2FibGVkOiBbXSxcbiAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiBbXSxcbiAgZGVmYXVsdFZpZXdEYXRlOiB1bmRlZmluZWQsIC8vIHBsYWNlaG9sZGVyLCBkZWZhdWx0cyB0byB0b2RheSgpIGJ5IHRoZSBwcm9ncmFtXG4gIGRpc2FibGVUb3VjaEtleWJvYXJkOiBmYWxzZSxcbiAgZm9ybWF0OiAnbW0vZGQveXl5eScsXG4gIGxhbmd1YWdlOiAnZW4nLFxuICBtYXhEYXRlOiBudWxsLFxuICBtYXhOdW1iZXJPZkRhdGVzOiAxLFxuICBtYXhWaWV3OiAzLFxuICBtaW5EYXRlOiBudWxsLFxuICBuZXh0QXJyb3c6ICfCuycsXG4gIG9yaWVudGF0aW9uOiAnYXV0bycsXG4gIHBpY2tMZXZlbDogMCxcbiAgcHJldkFycm93OiAnwqsnLFxuICBzaG93RGF5c09mV2VlazogdHJ1ZSxcbiAgc2hvd09uQ2xpY2s6IHRydWUsXG4gIHNob3dPbkZvY3VzOiB0cnVlLFxuICBzdGFydFZpZXc6IDAsXG4gIHRpdGxlOiAnJyxcbiAgdG9kYXlCdG46IGZhbHNlLFxuICB0b2RheUJ0bk1vZGU6IDAsXG4gIHRvZGF5SGlnaGxpZ2h0OiBmYWxzZSxcbiAgdXBkYXRlT25CbHVyOiB0cnVlLFxuICB3ZWVrU3RhcnQ6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0T3B0aW9ucztcbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWV9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2RhdGVWYWx1ZSwgcmVndWxhcml6ZURhdGV9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cmVGb3JtYXRUb2tlbnMsIHBhcnNlRGF0ZX0gZnJvbSAnLi4vbGliL2RhdGUtZm9ybWF0LmpzJztcbmltcG9ydCB7cGFyc2VIVE1MfSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuL2RlZmF1bHRPcHRpb25zLmpzJztcblxuY29uc3Qge1xuICBsYW5ndWFnZTogZGVmYXVsdExhbmcsXG4gIGZvcm1hdDogZGVmYXVsdEZvcm1hdCxcbiAgd2Vla1N0YXJ0OiBkZWZhdWx0V2Vla1N0YXJ0LFxufSA9IGRlZmF1bHRPcHRpb25zO1xuXG4vLyBSZWR1Y2VyIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXQgaW52YWxpZCBkYXktb2Ytd2VlayBmcm9tIHRoZSBpbnB1dFxuZnVuY3Rpb24gc2FuaXRpemVET1coZG93LCBkYXkpIHtcbiAgcmV0dXJuIGRvdy5sZW5ndGggPCA2ICYmIGRheSA+PSAwICYmIGRheSA8IDdcbiAgICA/IHB1c2hVbmlxdWUoZG93LCBkYXkpXG4gICAgOiBkb3c7XG59XG5cbmZ1bmN0aW9uIGNhbGNFbmRPZldlZWsoc3RhcnRPZldlZWspIHtcbiAgcmV0dXJuIChzdGFydE9mV2VlayArIDYpICUgNztcbn1cblxuLy8gdmFsaWRhdGUgaW5wdXQgZGF0ZS4gaWYgaW52YWxpZCwgZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIHZhbHVlXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUodmFsdWUsIGZvcm1hdCwgbG9jYWxlLCBvcmlnVmFsdWUpIHtcbiAgY29uc3QgZGF0ZSA9IHBhcnNlRGF0ZSh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUpO1xuICByZXR1cm4gZGF0ZSAhPT0gdW5kZWZpbmVkID8gZGF0ZSA6IG9yaWdWYWx1ZTtcbn1cblxuLy8gVmFsaWRhdGUgdmlld0lkLiBpZiBpbnZhbGlkLCBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgdmFsdWVcbmZ1bmN0aW9uIHZhbGlkYXRlVmlld0lkKHZhbHVlLCBvcmlnVmFsdWUsIG1heCA9IDMpIHtcbiAgY29uc3Qgdmlld0lkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgcmV0dXJuIHZpZXdJZCA+PSAwICYmIHZpZXdJZCA8PSBtYXggPyB2aWV3SWQgOiBvcmlnVmFsdWU7XG59XG5cbi8vIENyZWF0ZSBEYXRlcGlja2VyIGNvbmZpZ3VyYXRpb24gdG8gc2V0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9jZXNzT3B0aW9ucyhvcHRpb25zLCBkYXRlcGlja2VyKSB7XG4gIGNvbnN0IGluT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICBjb25zdCBjb25maWcgPSB7fTtcbiAgY29uc3QgbG9jYWxlcyA9IGRhdGVwaWNrZXIuY29uc3RydWN0b3IubG9jYWxlcztcbiAgY29uc3QgcmFuZ2VTaWRlSW5kZXggPSBkYXRlcGlja2VyLnJhbmdlU2lkZUluZGV4O1xuICBsZXQge1xuICAgIGZvcm1hdCxcbiAgICBsYW5ndWFnZSxcbiAgICBsb2NhbGUsXG4gICAgbWF4RGF0ZSxcbiAgICBtYXhWaWV3LFxuICAgIG1pbkRhdGUsXG4gICAgcGlja0xldmVsLFxuICAgIHN0YXJ0VmlldyxcbiAgICB3ZWVrU3RhcnQsXG4gIH0gPSBkYXRlcGlja2VyLmNvbmZpZyB8fCB7fTtcblxuICBpZiAoaW5PcHRzLmxhbmd1YWdlKSB7XG4gICAgbGV0IGxhbmc7XG4gICAgaWYgKGluT3B0cy5sYW5ndWFnZSAhPT0gbGFuZ3VhZ2UpIHtcbiAgICAgIGlmIChsb2NhbGVzW2luT3B0cy5sYW5ndWFnZV0pIHtcbiAgICAgICAgbGFuZyA9IGluT3B0cy5sYW5ndWFnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGxhbmdhdWdlICsgcmVnaW9uIHRhZyBjYW4gZmFsbGJhY2sgdG8gdGhlIG9uZSB3aXRob3V0XG4gICAgICAgIC8vIHJlZ2lvbiAoZS5nLiBmci1DQSDihpIgZnIpXG4gICAgICAgIGxhbmcgPSBpbk9wdHMubGFuZ3VhZ2Uuc3BsaXQoJy0nKVswXTtcbiAgICAgICAgaWYgKGxvY2FsZXNbbGFuZ10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGxhbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLmxhbmd1YWdlO1xuICAgIGlmIChsYW5nKSB7XG4gICAgICBsYW5ndWFnZSA9IGNvbmZpZy5sYW5ndWFnZSA9IGxhbmc7XG5cbiAgICAgIC8vIHVwZGF0ZSBsb2NhbGUgYXMgd2VsbCB3aGVuIHVwZGF0aW5nIGxhbmd1YWdlXG4gICAgICBjb25zdCBvcmlnTG9jYWxlID0gbG9jYWxlIHx8IGxvY2FsZXNbZGVmYXVsdExhbmddO1xuICAgICAgLy8gdXNlIGRlZmF1bHQgbGFuZ3VhZ2UncyBwcm9wZXJ0aWVzIGZvciB0aGUgZmFsbGJhY2tcbiAgICAgIGxvY2FsZSA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBmb3JtYXQ6IGRlZmF1bHRGb3JtYXQsXG4gICAgICAgIHdlZWtTdGFydDogZGVmYXVsdFdlZWtTdGFydFxuICAgICAgfSwgbG9jYWxlc1tkZWZhdWx0TGFuZ10pO1xuICAgICAgaWYgKGxhbmd1YWdlICE9PSBkZWZhdWx0TGFuZykge1xuICAgICAgICBPYmplY3QuYXNzaWduKGxvY2FsZSwgbG9jYWxlc1tsYW5ndWFnZV0pO1xuICAgICAgfVxuICAgICAgY29uZmlnLmxvY2FsZSA9IGxvY2FsZTtcbiAgICAgIC8vIGlmIGZvcm1hdCBhbmQvb3Igd2Vla1N0YXJ0IGFyZSB0aGUgc2FtZSBhcyBvbGQgbG9jYWxlJ3MgZGVmYXVsdHMsXG4gICAgICAvLyB1cGRhdGUgdGhlbSB0byBuZXcgbG9jYWxlJ3MgZGVmYXVsdHNcbiAgICAgIGlmIChmb3JtYXQgPT09IG9yaWdMb2NhbGUuZm9ybWF0KSB7XG4gICAgICAgIGZvcm1hdCA9IGNvbmZpZy5mb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICAgICAgfVxuICAgICAgaWYgKHdlZWtTdGFydCA9PT0gb3JpZ0xvY2FsZS53ZWVrU3RhcnQpIHtcbiAgICAgICAgd2Vla1N0YXJ0ID0gY29uZmlnLndlZWtTdGFydCA9IGxvY2FsZS53ZWVrU3RhcnQ7XG4gICAgICAgIGNvbmZpZy53ZWVrRW5kID0gY2FsY0VuZE9mV2Vlayhsb2NhbGUud2Vla1N0YXJ0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW5PcHRzLmZvcm1hdCkge1xuICAgIGNvbnN0IGhhc1RvRGlzcGxheSA9IHR5cGVvZiBpbk9wdHMuZm9ybWF0LnRvRGlzcGxheSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBoYXNUb1ZhbHVlID0gdHlwZW9mIGluT3B0cy5mb3JtYXQudG9WYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCB2YWxpZEZvcm1hdFN0cmluZyA9IHJlRm9ybWF0VG9rZW5zLnRlc3QoaW5PcHRzLmZvcm1hdCk7XG4gICAgaWYgKChoYXNUb0Rpc3BsYXkgJiYgaGFzVG9WYWx1ZSkgfHwgdmFsaWRGb3JtYXRTdHJpbmcpIHtcbiAgICAgIGZvcm1hdCA9IGNvbmZpZy5mb3JtYXQgPSBpbk9wdHMuZm9ybWF0O1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLmZvcm1hdDtcbiAgfVxuXG4gIC8vKioqIHBpY2sgbGV2ZWwgKioqLy9cbiAgbGV0IG5ld1BpY2tMZXZlbCA9IHBpY2tMZXZlbDtcbiAgaWYgKGluT3B0cy5waWNrTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld1BpY2tMZXZlbCA9IHZhbGlkYXRlVmlld0lkKGluT3B0cy5waWNrTGV2ZWwsIDIpO1xuICAgIGRlbGV0ZSBpbk9wdHMucGlja0xldmVsO1xuICB9XG4gIGlmIChuZXdQaWNrTGV2ZWwgIT09IHBpY2tMZXZlbCkge1xuICAgIGlmIChuZXdQaWNrTGV2ZWwgPiBwaWNrTGV2ZWwpIHtcbiAgICAgIC8vIGNvbXBsZW1lbnQgY3VycmVudCBtaW5EYXRlL21hZERhdGUgc28gdGhhdCB0aGUgZXhpc3RpbmcgcmFuZ2Ugd2lsbCBiZVxuICAgICAgLy8gZXhwYW5kZWQgdG8gZml0IHRoZSBuZXcgbGV2ZWwgbGF0ZXJcbiAgICAgIGlmIChpbk9wdHMubWluRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluT3B0cy5taW5EYXRlID0gbWluRGF0ZTtcbiAgICAgIH1cbiAgICAgIGlmIChpbk9wdHMubWF4RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluT3B0cy5tYXhEYXRlID0gbWF4RGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29tcGxlbWVudCBkYXRlc0Rpc2FibGVkIHNvIHRoYXQgaXQgd2lsbCBiZSByZXNldCBsYXRlclxuICAgIGlmICghaW5PcHRzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgIGluT3B0cy5kYXRlc0Rpc2FibGVkID0gW107XG4gICAgfVxuICAgIHBpY2tMZXZlbCA9IGNvbmZpZy5waWNrTGV2ZWwgPSBuZXdQaWNrTGV2ZWw7XG4gIH1cblxuICAvLyoqKiBkYXRlcyAqKiovL1xuICAvLyB3aGlsZSBtaW4gYW5kIG1heERhdGUgZm9yIFwibm8gbGltaXRcIiBpbiB0aGUgb3B0aW9ucyBhcmUgYmV0dGVyIHRvIGJlIG51bGxcbiAgLy8gKGVzcGVjaWFsbHkgd2hlbiB1cGRhdGluZyksIHRoZSBvbmVzIGluIHRoZSBjb25maWcgaGF2ZSB0byBiZSB1bmRlZmluZWRcbiAgLy8gYmVjYXVzZSBudWxsIGlzIHRyZWF0ZWQgYXMgMCAoPSB1bml4IGVwb2NoKSB3aGVuIGNvbXBhcmluZyB3aXRoIHRpbWUgdmFsdWVcbiAgbGV0IG1pbkR0ID0gbWluRGF0ZTtcbiAgbGV0IG1heER0ID0gbWF4RGF0ZTtcbiAgaWYgKGluT3B0cy5taW5EYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkZWZhdWx0TWluRHQgPSBkYXRlVmFsdWUoMCwgMCwgMSk7XG4gICAgbWluRHQgPSBpbk9wdHMubWluRGF0ZSA9PT0gbnVsbFxuICAgICAgPyBkZWZhdWx0TWluRHQgIC8vIHNldCAwMDAwLTAxLTAxIHRvIHByZXZlbnQgbmVnYXRpdmUgdmFsdWVzIGZvciB5ZWFyXG4gICAgICA6IHZhbGlkYXRlRGF0ZShpbk9wdHMubWluRGF0ZSwgZm9ybWF0LCBsb2NhbGUsIG1pbkR0KTtcbiAgICBpZiAobWluRHQgIT09IGRlZmF1bHRNaW5EdCkge1xuICAgICAgbWluRHQgPSByZWd1bGFyaXplRGF0ZShtaW5EdCwgcGlja0xldmVsLCBmYWxzZSk7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMubWluRGF0ZTtcbiAgfVxuICBpZiAoaW5PcHRzLm1heERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIG1heER0ID0gaW5PcHRzLm1heERhdGUgPT09IG51bGxcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IHZhbGlkYXRlRGF0ZShpbk9wdHMubWF4RGF0ZSwgZm9ybWF0LCBsb2NhbGUsIG1heER0KTtcbiAgICBpZiAobWF4RHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWF4RHQgPSByZWd1bGFyaXplRGF0ZShtYXhEdCwgcGlja0xldmVsLCB0cnVlKTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy5tYXhEYXRlO1xuICB9XG4gIGlmIChtYXhEdCA8IG1pbkR0KSB7XG4gICAgbWluRGF0ZSA9IGNvbmZpZy5taW5EYXRlID0gbWF4RHQ7XG4gICAgbWF4RGF0ZSA9IGNvbmZpZy5tYXhEYXRlID0gbWluRHQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1pbkRhdGUgIT09IG1pbkR0KSB7XG4gICAgICBtaW5EYXRlID0gY29uZmlnLm1pbkRhdGUgPSBtaW5EdDtcbiAgICB9XG4gICAgaWYgKG1heERhdGUgIT09IG1heER0KSB7XG4gICAgICBtYXhEYXRlID0gY29uZmlnLm1heERhdGUgPSBtYXhEdDtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5PcHRzLmRhdGVzRGlzYWJsZWQpIHtcbiAgICBjb25maWcuZGF0ZXNEaXNhYmxlZCA9IGluT3B0cy5kYXRlc0Rpc2FibGVkLnJlZHVjZSgoZGF0ZXMsIGR0KSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gcGFyc2VEYXRlKGR0LCBmb3JtYXQsIGxvY2FsZSk7XG4gICAgICByZXR1cm4gZGF0ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcHVzaFVuaXF1ZShkYXRlcywgcmVndWxhcml6ZURhdGUoZGF0ZSwgcGlja0xldmVsLCByYW5nZVNpZGVJbmRleCkpXG4gICAgICAgIDogZGF0ZXM7XG4gICAgfSwgW10pO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGF0ZXNEaXNhYmxlZDtcbiAgfVxuICBpZiAoaW5PcHRzLmRlZmF1bHRWaWV3RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3Qgdmlld0RhdGUgPSBwYXJzZURhdGUoaW5PcHRzLmRlZmF1bHRWaWV3RGF0ZSwgZm9ybWF0LCBsb2NhbGUpO1xuICAgIGlmICh2aWV3RGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25maWcuZGVmYXVsdFZpZXdEYXRlID0gdmlld0RhdGU7XG4gICAgfVxuICAgIGRlbGV0ZSBpbk9wdHMuZGVmYXVsdFZpZXdEYXRlO1xuICB9XG5cbiAgLy8qKiogZGF5cyBvZiB3ZWVrICoqKi8vXG4gIGlmIChpbk9wdHMud2Vla1N0YXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCB3a1N0YXJ0ID0gTnVtYmVyKGluT3B0cy53ZWVrU3RhcnQpICUgNztcbiAgICBpZiAoIWlzTmFOKHdrU3RhcnQpKSB7XG4gICAgICB3ZWVrU3RhcnQgPSBjb25maWcud2Vla1N0YXJ0ID0gd2tTdGFydDtcbiAgICAgIGNvbmZpZy53ZWVrRW5kID0gY2FsY0VuZE9mV2Vlayh3a1N0YXJ0KTtcbiAgICB9XG4gICAgZGVsZXRlIGluT3B0cy53ZWVrU3RhcnQ7XG4gIH1cbiAgaWYgKGluT3B0cy5kYXlzT2ZXZWVrRGlzYWJsZWQpIHtcbiAgICBjb25maWcuZGF5c09mV2Vla0Rpc2FibGVkID0gaW5PcHRzLmRheXNPZldlZWtEaXNhYmxlZC5yZWR1Y2Uoc2FuaXRpemVET1csIFtdKTtcbiAgICBkZWxldGUgaW5PcHRzLmRheXNPZldlZWtEaXNhYmxlZDtcbiAgfVxuICBpZiAoaW5PcHRzLmRheXNPZldlZWtIaWdobGlnaHRlZCkge1xuICAgIGNvbmZpZy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQgPSBpbk9wdHMuZGF5c09mV2Vla0hpZ2hsaWdodGVkLnJlZHVjZShzYW5pdGl6ZURPVywgW10pO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGF5c09mV2Vla0hpZ2hsaWdodGVkO1xuICB9XG5cbiAgLy8qKiogbXVsdGkgZGF0ZSAqKiovL1xuICBpZiAoaW5PcHRzLm1heE51bWJlck9mRGF0ZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG1heE51bWJlck9mRGF0ZXMgPSBwYXJzZUludChpbk9wdHMubWF4TnVtYmVyT2ZEYXRlcywgMTApO1xuICAgIGlmIChtYXhOdW1iZXJPZkRhdGVzID49IDApIHtcbiAgICAgIGNvbmZpZy5tYXhOdW1iZXJPZkRhdGVzID0gbWF4TnVtYmVyT2ZEYXRlcztcbiAgICAgIGNvbmZpZy5tdWx0aWRhdGUgPSBtYXhOdW1iZXJPZkRhdGVzICE9PSAxO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm1heE51bWJlck9mRGF0ZXM7XG4gIH1cbiAgaWYgKGluT3B0cy5kYXRlRGVsaW1pdGVyKSB7XG4gICAgY29uZmlnLmRhdGVEZWxpbWl0ZXIgPSBTdHJpbmcoaW5PcHRzLmRhdGVEZWxpbWl0ZXIpO1xuICAgIGRlbGV0ZSBpbk9wdHMuZGF0ZURlbGltaXRlcjtcbiAgfVxuXG4gIC8vKioqIHZpZXcgKioqLy9cbiAgbGV0IG5ld01heFZpZXcgPSBtYXhWaWV3O1xuICBpZiAoaW5PcHRzLm1heFZpZXcgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld01heFZpZXcgPSB2YWxpZGF0ZVZpZXdJZChpbk9wdHMubWF4VmlldywgbWF4Vmlldyk7XG4gICAgZGVsZXRlIGluT3B0cy5tYXhWaWV3O1xuICB9XG4gIC8vIGVuc3VyZSBtYXggdmlldyA+PSBwaWNrIGxldmVsXG4gIG5ld01heFZpZXcgPSBwaWNrTGV2ZWwgPiBuZXdNYXhWaWV3ID8gcGlja0xldmVsIDogbmV3TWF4VmlldztcbiAgaWYgKG5ld01heFZpZXcgIT09IG1heFZpZXcpIHtcbiAgICBtYXhWaWV3ID0gY29uZmlnLm1heFZpZXcgPSBuZXdNYXhWaWV3O1xuICB9XG5cbiAgbGV0IG5ld1N0YXJ0VmlldyA9IHN0YXJ0VmlldztcbiAgaWYgKGluT3B0cy5zdGFydFZpZXcgIT09IHVuZGVmaW5lZCkge1xuICAgIG5ld1N0YXJ0VmlldyA9IHZhbGlkYXRlVmlld0lkKGluT3B0cy5zdGFydFZpZXcsIG5ld1N0YXJ0Vmlldyk7XG4gICAgZGVsZXRlIGluT3B0cy5zdGFydFZpZXc7XG4gIH1cbiAgLy8gZW5zdXJlIHBpY2sgbGV2ZWwgPD0gc3RhcnQgdmlldyA8PSBtYXggdmlld1xuICBpZiAobmV3U3RhcnRWaWV3IDwgcGlja0xldmVsKSB7XG4gICAgbmV3U3RhcnRWaWV3ID0gcGlja0xldmVsO1xuICB9IGVsc2UgaWYgKG5ld1N0YXJ0VmlldyA+IG1heFZpZXcpIHtcbiAgICBuZXdTdGFydFZpZXcgPSBtYXhWaWV3O1xuICB9XG4gIGlmIChuZXdTdGFydFZpZXcgIT09IHN0YXJ0Vmlldykge1xuICAgIGNvbmZpZy5zdGFydFZpZXcgPSBuZXdTdGFydFZpZXc7XG4gIH1cblxuICAvLyoqKiB0ZW1wbGF0ZSAqKiovL1xuICBpZiAoaW5PcHRzLnByZXZBcnJvdykge1xuICAgIGNvbnN0IHByZXZBcnJvdyA9IHBhcnNlSFRNTChpbk9wdHMucHJldkFycm93KTtcbiAgICBpZiAocHJldkFycm93LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uZmlnLnByZXZBcnJvdyA9IHByZXZBcnJvdy5jaGlsZE5vZGVzO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLnByZXZBcnJvdztcbiAgfVxuICBpZiAoaW5PcHRzLm5leHRBcnJvdykge1xuICAgIGNvbnN0IG5leHRBcnJvdyA9IHBhcnNlSFRNTChpbk9wdHMubmV4dEFycm93KTtcbiAgICBpZiAobmV4dEFycm93LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uZmlnLm5leHRBcnJvdyA9IG5leHRBcnJvdy5jaGlsZE5vZGVzO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLm5leHRBcnJvdztcbiAgfVxuXG4gIC8vKioqIG1pc2MgKioqLy9cbiAgaWYgKGluT3B0cy5kaXNhYmxlVG91Y2hLZXlib2FyZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uZmlnLmRpc2FibGVUb3VjaEtleWJvYXJkID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQgJiYgISFpbk9wdHMuZGlzYWJsZVRvdWNoS2V5Ym9hcmQ7XG4gICAgZGVsZXRlIGluT3B0cy5kaXNhYmxlVG91Y2hLZXlib2FyZDtcbiAgfVxuICBpZiAoaW5PcHRzLm9yaWVudGF0aW9uKSB7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBpbk9wdHMub3JpZW50YXRpb24udG9Mb3dlckNhc2UoKS5zcGxpdCgvXFxzKy9nKTtcbiAgICBjb25maWcub3JpZW50YXRpb24gPSB7XG4gICAgICB4OiBvcmllbnRhdGlvbi5maW5kKHggPT4gKHggPT09ICdsZWZ0JyB8fCB4ID09PSAncmlnaHQnKSkgfHwgJ2F1dG8nLFxuICAgICAgeTogb3JpZW50YXRpb24uZmluZCh5ID0+ICh5ID09PSAndG9wJyB8fCB5ID09PSAnYm90dG9tJykpIHx8ICdhdXRvJyxcbiAgICB9O1xuICAgIGRlbGV0ZSBpbk9wdHMub3JpZW50YXRpb247XG4gIH1cbiAgaWYgKGluT3B0cy50b2RheUJ0bk1vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHN3aXRjaChpbk9wdHMudG9kYXlCdG5Nb2RlKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNvbmZpZy50b2RheUJ0bk1vZGUgPSBpbk9wdHMudG9kYXlCdG5Nb2RlO1xuICAgIH1cbiAgICBkZWxldGUgaW5PcHRzLnRvZGF5QnRuTW9kZTtcbiAgfVxuXG4gIC8vKioqIGNvcHkgdGhlIHJlc3QgKioqLy9cbiAgT2JqZWN0LmtleXMoaW5PcHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoaW5PcHRzW2tleV0gIT09IHVuZGVmaW5lZCAmJiBoYXNQcm9wZXJ0eShkZWZhdWx0T3B0aW9ucywga2V5KSkge1xuICAgICAgY29uZmlnW2tleV0gPSBpbk9wdHNba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBsYXN0SXRlbU9mLCBpc0luUmFuZ2UsIGxpbWl0VG9SYW5nZX0gZnJvbSAnLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7dG9kYXl9IGZyb20gJy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MLCBnZXRQYXJlbnQsIHNob3dFbGVtZW50LCBoaWRlRWxlbWVudCwgZW1wdHlDaGlsZE5vZGVzfSBmcm9tICcuLi9saWIvZG9tLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJMaXN0ZW5lcnN9IGZyb20gJy4uL2xpYi9ldmVudC5qcyc7XG5pbXBvcnQgcGlja2VyVGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZXMvcGlja2VyVGVtcGxhdGUuanMnO1xuaW1wb3J0IERheXNWaWV3IGZyb20gJy4vdmlld3MvRGF5c1ZpZXcuanMnO1xuaW1wb3J0IE1vbnRoc1ZpZXcgZnJvbSAnLi92aWV3cy9Nb250aHNWaWV3LmpzJztcbmltcG9ydCBZZWFyc1ZpZXcgZnJvbSAnLi92aWV3cy9ZZWFyc1ZpZXcuanMnO1xuaW1wb3J0IHt0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50fSBmcm9tICcuLi9ldmVudHMvZnVuY3Rpb25zLmpzJztcbmltcG9ydCB7XG4gIG9uQ2xpY2tUb2RheUJ0bixcbiAgb25DbGlja0NsZWFyQnRuLFxuICBvbkNsaWNrVmlld1N3aXRjaCxcbiAgb25DbGlja1ByZXZCdG4sXG4gIG9uQ2xpY2tOZXh0QnRuLFxuICBvbkNsaWNrVmlldyxcbiAgb25Nb3VzZWRvd25QaWNrZXIsXG59IGZyb20gJy4uL2V2ZW50cy9waWNrZXJMaXN0ZW5lcnMuanMnO1xuXG5jb25zdCBvcmllbnRDbGFzc2VzID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXS5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XG4gIG9ialtrZXldID0gYGRhdGVwaWNrZXItb3JpZW50LSR7a2V5fWA7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5jb25zdCB0b1B4ID0gbnVtID0+IG51bSA/IGAke251bX1weGAgOiBudW07XG5cbmZ1bmN0aW9uIHByb2Nlc3NQaWNrZXJPcHRpb25zKHBpY2tlciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucy50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9wdGlvbnMudGl0bGUpIHtcbiAgICAgIHBpY2tlci5jb250cm9scy50aXRsZS50ZXh0Q29udGVudCA9IG9wdGlvbnMudGl0bGU7XG4gICAgICBzaG93RWxlbWVudChwaWNrZXIuY29udHJvbHMudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwaWNrZXIuY29udHJvbHMudGl0bGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIGhpZGVFbGVtZW50KHBpY2tlci5jb250cm9scy50aXRsZSk7XG4gICAgfVxuICB9XG4gIGlmIChvcHRpb25zLnByZXZBcnJvdykge1xuICAgIGNvbnN0IHByZXZCdG4gPSBwaWNrZXIuY29udHJvbHMucHJldkJ0bjtcbiAgICBlbXB0eUNoaWxkTm9kZXMocHJldkJ0bik7XG4gICAgb3B0aW9ucy5wcmV2QXJyb3cuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgcHJldkJ0bi5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMubmV4dEFycm93KSB7XG4gICAgY29uc3QgbmV4dEJ0biA9IHBpY2tlci5jb250cm9scy5uZXh0QnRuO1xuICAgIGVtcHR5Q2hpbGROb2RlcyhuZXh0QnRuKTtcbiAgICBvcHRpb25zLm5leHRBcnJvdy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBuZXh0QnRuLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucy5sb2NhbGUpIHtcbiAgICBwaWNrZXIuY29udHJvbHMudG9kYXlCdG4udGV4dENvbnRlbnQgPSBvcHRpb25zLmxvY2FsZS50b2RheTtcbiAgICBwaWNrZXIuY29udHJvbHMuY2xlYXJCdG4udGV4dENvbnRlbnQgPSBvcHRpb25zLmxvY2FsZS5jbGVhcjtcbiAgfVxuICBpZiAob3B0aW9ucy50b2RheUJ0biAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9wdGlvbnMudG9kYXlCdG4pIHtcbiAgICAgIHNob3dFbGVtZW50KHBpY2tlci5jb250cm9scy50b2RheUJ0bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVFbGVtZW50KHBpY2tlci5jb250cm9scy50b2RheUJ0bik7XG4gICAgfVxuICB9XG4gIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpIHx8IGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICBjb25zdCB7bWluRGF0ZSwgbWF4RGF0ZX0gPSBwaWNrZXIuZGF0ZXBpY2tlci5jb25maWc7XG4gICAgcGlja2VyLmNvbnRyb2xzLnRvZGF5QnRuLmRpc2FibGVkID0gIWlzSW5SYW5nZSh0b2RheSgpLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgfVxuICBpZiAob3B0aW9ucy5jbGVhckJ0biAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9wdGlvbnMuY2xlYXJCdG4pIHtcbiAgICAgIHNob3dFbGVtZW50KHBpY2tlci5jb250cm9scy5jbGVhckJ0bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVFbGVtZW50KHBpY2tlci5jb250cm9scy5jbGVhckJ0bik7XG4gICAgfVxuICB9XG59XG5cbi8vIENvbXB1dGUgdmlldyBkYXRlIHRvIHJlc2V0LCB3aGljaCB3aWxsIGJlLi4uXG4vLyAtIHRoZSBsYXN0IGl0ZW0gb2YgdGhlIHNlbGVjdGVkIGRhdGVzIG9yIGRlZmF1bHRWaWV3RGF0ZSBpZiBubyBzZWxlY3Rpb25cbi8vIC0gbGltaXR0ZWQgdG8gbWluRGF0ZSBvciBtYXhEYXRlIGlmIGl0IGV4Y2VlZHMgdGhlIHJhbmdlXG5mdW5jdGlvbiBjb21wdXRlUmVzZXRWaWV3RGF0ZShkYXRlcGlja2VyKSB7XG4gIGNvbnN0IHtkYXRlcywgY29uZmlnfSA9IGRhdGVwaWNrZXI7XG4gIGNvbnN0IHZpZXdEYXRlID0gZGF0ZXMubGVuZ3RoID4gMCA/IGxhc3RJdGVtT2YoZGF0ZXMpIDogY29uZmlnLmRlZmF1bHRWaWV3RGF0ZTtcbiAgcmV0dXJuIGxpbWl0VG9SYW5nZSh2aWV3RGF0ZSwgY29uZmlnLm1pbkRhdGUsIGNvbmZpZy5tYXhEYXRlKTtcbn1cblxuLy8gQ2hhbmdlIGN1cnJlbnQgdmlldydzIHZpZXcgZGF0ZVxuZnVuY3Rpb24gc2V0Vmlld0RhdGUocGlja2VyLCBuZXdEYXRlKSB7XG4gIGNvbnN0IG9sZFZpZXdEYXRlID0gbmV3IERhdGUocGlja2VyLnZpZXdEYXRlKTtcbiAgY29uc3QgbmV3Vmlld0RhdGUgPSBuZXcgRGF0ZShuZXdEYXRlKTtcbiAgY29uc3Qge2lkLCB5ZWFyLCBmaXJzdCwgbGFzdH0gPSBwaWNrZXIuY3VycmVudFZpZXc7XG4gIGNvbnN0IHZpZXdZZWFyID0gbmV3Vmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBwaWNrZXIudmlld0RhdGUgPSBuZXdEYXRlO1xuICBpZiAodmlld1llYXIgIT09IG9sZFZpZXdEYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KHBpY2tlci5kYXRlcGlja2VyLCAnY2hhbmdlWWVhcicpO1xuICB9XG4gIGlmIChuZXdWaWV3RGF0ZS5nZXRNb250aCgpICE9PSBvbGRWaWV3RGF0ZS5nZXRNb250aCgpKSB7XG4gICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudChwaWNrZXIuZGF0ZXBpY2tlciwgJ2NoYW5nZU1vbnRoJyk7XG4gIH1cblxuICAvLyByZXR1cm4gd2hldGhlciB0aGUgbmV3IGRhdGUgaXMgaW4gZGlmZmVyZW50IHBlcmlvZCBvbiB0aW1lIGZyb20gdGhlIG9uZVxuICAvLyBkaXNwbGF5ZWQgaW4gdGhlIGN1cnJlbnQgdmlld1xuICAvLyB3aGVuIHRydWUsIHRoZSB2aWV3IG5lZWRzIHRvIGJlIHJlLXJlbmRlcmVkIG9uIHRoZSBuZXh0IFVJIHJlZnJlc2guXG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3RGF0ZSA8IGZpcnN0IHx8IG5ld0RhdGUgPiBsYXN0O1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB2aWV3WWVhciAhPT0geWVhcjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHZpZXdZZWFyIDwgZmlyc3QgfHwgdmlld1llYXIgPiBsYXN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRleHREaXJlY3Rpb24oZWwpIHtcbiAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5kaXJlY3Rpb247XG59XG5cbi8vIGZpbmQgdGhlIGNsb3NldCBzY3JvbGxhYmxlIGFuY2VzdG9yIGVsZW1udCB1bmRlciB0aGUgYm9keVxuZnVuY3Rpb24gZmluZFNjcm9sbFBhcmVudHMoZWwpIHtcbiAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50KGVsKTtcbiAgaWYgKHBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCAhcGFyZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY2hlY2tpbmcgb3ZlcmZsb3cgb25seSBpcyBlbm91Z2ggYmVjYXVzZSBjb21wdXRlZCBvdmVyZmxvdyBjYW5ub3QgYmVcbiAgLy8gdmlzaWJsZSBvciBhIGNvbWJpbmF0aW9uIG9mIHZpc2libGUgYW5kIG90aGVyIHdoZW4gZWl0aGVyIGF4aXMgaXMgc2V0XG4gIC8vIHRvIG90aGVyIHRoYW4gdmlzaWJsZS5cbiAgLy8gKFNldHRpbmcgb25lIGF4aXMgdG8gb3RoZXIgdGhhbiAndmlzaWJsZScgd2hpbGUgdGhlIG90aGVyIGlzICd2aXNpYmxlJ1xuICAvLyByZXN1bHRzIGluIHRoZSBvdGhlciBheGlzIHR1cm5pbmcgdG8gJ2F1dG8nKVxuICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KS5vdmVyZmxvdyAhPT0gJ3Zpc2libGUnXG4gICAgPyBwYXJlbnRcbiAgICA6IGZpbmRTY3JvbGxQYXJlbnRzKHBhcmVudCk7XG59XG5cbi8vIENsYXNzIHJlcHJlc2VudGluZyB0aGUgcGlja2VyIFVJXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrZXIge1xuICBjb25zdHJ1Y3RvcihkYXRlcGlja2VyKSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSB0aGlzLmRhdGVwaWNrZXIgPSBkYXRlcGlja2VyO1xuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBwaWNrZXJUZW1wbGF0ZS5yZXBsYWNlKC8lYnV0dG9uQ2xhc3MlL2csIGNvbmZpZy5idXR0b25DbGFzcyk7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudCA9IHBhcnNlSFRNTCh0ZW1wbGF0ZSkuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBbaGVhZGVyLCBtYWluLCBmb290ZXJdID0gZWxlbWVudC5maXJzdENoaWxkLmNoaWxkcmVuO1xuICAgIGNvbnN0IHRpdGxlID0gaGVhZGVyLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IFtwcmV2QnRuLCB2aWV3U3dpdGNoLCBuZXh0QnRuXSA9IGhlYWRlci5sYXN0RWxlbWVudENoaWxkLmNoaWxkcmVuO1xuICAgIGNvbnN0IFt0b2RheUJ0biwgY2xlYXJCdG5dID0gZm9vdGVyLmZpcnN0Q2hpbGQuY2hpbGRyZW47XG4gICAgY29uc3QgY29udHJvbHMgPSB7XG4gICAgICB0aXRsZSxcbiAgICAgIHByZXZCdG4sXG4gICAgICB2aWV3U3dpdGNoLFxuICAgICAgbmV4dEJ0bixcbiAgICAgIHRvZGF5QnRuLFxuICAgICAgY2xlYXJCdG4sXG4gICAgfTtcbiAgICB0aGlzLm1haW4gPSBtYWluO1xuICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcblxuICAgIGNvbnN0IGVsZW1lbnRDbGFzcyA9IGRhdGVwaWNrZXIuaW5saW5lID8gJ2lubGluZScgOiAnZHJvcGRvd24nO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgZGF0ZXBpY2tlci0ke2VsZW1lbnRDbGFzc31gKTtcblxuICAgIHByb2Nlc3NQaWNrZXJPcHRpb25zKHRoaXMsIGNvbmZpZyk7XG4gICAgdGhpcy52aWV3RGF0ZSA9IGNvbXB1dGVSZXNldFZpZXdEYXRlKGRhdGVwaWNrZXIpO1xuXG4gICAgLy8gc2V0IHVwIGV2ZW50IGxpc3RlbmVyc1xuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKGRhdGVwaWNrZXIsIFtcbiAgICAgIFtlbGVtZW50LCAnbW91c2Vkb3duJywgb25Nb3VzZWRvd25QaWNrZXJdLFxuICAgICAgW21haW4sICdjbGljaycsIG9uQ2xpY2tWaWV3LmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLnZpZXdTd2l0Y2gsICdjbGljaycsIG9uQ2xpY2tWaWV3U3dpdGNoLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLnByZXZCdG4sICdjbGljaycsIG9uQ2xpY2tQcmV2QnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLm5leHRCdG4sICdjbGljaycsIG9uQ2xpY2tOZXh0QnRuLmJpbmQobnVsbCwgZGF0ZXBpY2tlcildLFxuICAgICAgW2NvbnRyb2xzLnRvZGF5QnRuLCAnY2xpY2snLCBvbkNsaWNrVG9kYXlCdG4uYmluZChudWxsLCBkYXRlcGlja2VyKV0sXG4gICAgICBbY29udHJvbHMuY2xlYXJCdG4sICdjbGljaycsIG9uQ2xpY2tDbGVhckJ0bi5iaW5kKG51bGwsIGRhdGVwaWNrZXIpXSxcbiAgICBdKTtcblxuICAgIC8vIHNldCB1cCB2aWV3c1xuICAgIHRoaXMudmlld3MgPSBbXG4gICAgICBuZXcgRGF5c1ZpZXcodGhpcyksXG4gICAgICBuZXcgTW9udGhzVmlldyh0aGlzKSxcbiAgICAgIG5ldyBZZWFyc1ZpZXcodGhpcywge2lkOiAyLCBuYW1lOiAneWVhcnMnLCBjZWxsQ2xhc3M6ICd5ZWFyJywgc3RlcDogMX0pLFxuICAgICAgbmV3IFllYXJzVmlldyh0aGlzLCB7aWQ6IDMsIG5hbWU6ICdkZWNhZGVzJywgY2VsbENsYXNzOiAnZGVjYWRlJywgc3RlcDogMTB9KSxcbiAgICBdO1xuICAgIHRoaXMuY3VycmVudFZpZXcgPSB0aGlzLnZpZXdzW2NvbmZpZy5zdGFydFZpZXddO1xuXG4gICAgdGhpcy5jdXJyZW50Vmlldy5yZW5kZXIoKTtcbiAgICB0aGlzLm1haW4uYXBwZW5kQ2hpbGQodGhpcy5jdXJyZW50Vmlldy5lbGVtZW50KTtcbiAgICBpZiAoY29uZmlnLmNvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlcGlja2VyLmlucHV0RmllbGQuYWZ0ZXIodGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBwcm9jZXNzUGlja2VyT3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLnZpZXdzLmZvckVhY2goKHZpZXcpID0+IHtcbiAgICAgIHZpZXcuaW5pdChvcHRpb25zLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50Vmlldy5yZW5kZXIoKTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtkYXRlcGlja2VyLCBlbGVtZW50fSA9IHRoaXM7XG4gICAgaWYgKGRhdGVwaWNrZXIuaW5saW5lKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlbnN1cmUgcGlja2VyJ3MgZGlyZWN0aW9uIG1hdGNoZXMgaW5wdXQnc1xuICAgICAgY29uc3QgaW5wdXREaXJlY3Rpb24gPSBnZXRUZXh0RGlyZWN0aW9uKGRhdGVwaWNrZXIuaW5wdXRGaWVsZCk7XG4gICAgICBpZiAoaW5wdXREaXJlY3Rpb24gIT09IGdldFRleHREaXJlY3Rpb24oZ2V0UGFyZW50KGVsZW1lbnQpKSkge1xuICAgICAgICBlbGVtZW50LmRpciA9IGlucHV0RGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmRpcikge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlyJyk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUudmlzaWJsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5wbGFjZSgpO1xuICAgICAgZWxlbWVudC5zdHlsZS52aXNpYmxpdHkgPSAnJztcblxuICAgICAgaWYgKGRhdGVwaWNrZXIuY29uZmlnLmRpc2FibGVUb3VjaEtleWJvYXJkKSB7XG4gICAgICAgIGRhdGVwaWNrZXIuaW5wdXRGaWVsZC5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0cmlnZ2VyRGF0ZXBpY2tlckV2ZW50KGRhdGVwaWNrZXIsICdzaG93Jyk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRlcGlja2VyLmV4aXRFZGl0TW9kZSgpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRyaWdnZXJEYXRlcGlja2VyRXZlbnQodGhpcy5kYXRlcGlja2VyLCAnaGlkZScpO1xuICB9XG5cbiAgcGxhY2UoKSB7XG4gICAgY29uc3Qge2NsYXNzTGlzdCwgb2Zmc2V0UGFyZW50LCBzdHlsZX0gPSB0aGlzLmVsZW1lbnQ7XG4gICAgY29uc3Qge2NvbmZpZywgaW5wdXRGaWVsZH0gPSB0aGlzLmRhdGVwaWNrZXI7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGg6IGNhbGVuZGFyV2lkdGgsXG4gICAgICBoZWlnaHQ6IGNhbGVuZGFySGVpZ2h0LFxuICAgIH0gPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdDogaW5wdXRMZWZ0LFxuICAgICAgdG9wOiBpbnB1dFRvcCxcbiAgICAgIHJpZ2h0OiBpbnB1dFJpZ2h0LFxuICAgICAgYm90dG9tOiBpbnB1dEJvdHRvbSxcbiAgICAgIHdpZHRoOiBpbnB1dFdpZHRoLFxuICAgICAgaGVpZ2h0OiBpbnB1dEhlaWdodFxuICAgIH0gPSBpbnB1dEZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB7eDogb3JpZW50WCwgeTogb3JpZW50WX0gPSBjb25maWcub3JpZW50YXRpb247XG4gICAgbGV0IGxlZnQgPSBpbnB1dExlZnQ7XG4gICAgbGV0IHRvcCA9IGlucHV0VG9wO1xuXG4gICAgLy8gY2FsaWN1bGF0ZSBvZmZzZXRMZWZ0L1RvcCBvZiBpbnB1dEZpZWxkXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCAhb2Zmc2V0UGFyZW50KSB7XG4gICAgICBsZWZ0ICs9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgdG9wICs9IHdpbmRvdy5zY3JvbGxZO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGVmdCAtPSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQgLSBvZmZzZXRQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgIHRvcCAtPSBvZmZzZXRQYXJlbnRSZWN0LnRvcCAtIG9mZnNldFBhcmVudC5zY3JvbGxUb3A7XG4gICAgfVxuXG4gICAgLy8gY2FsaWN1bGF0ZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgdmlzaWJsZSBhcmVhIHRoYXQgY29udGFpbnMgaW5wdXRGaWVsZFxuICAgIGNvbnN0IHNjcm9sbFBhcmVudCA9IGZpbmRTY3JvbGxQYXJlbnRzKGlucHV0RmllbGQpO1xuICAgIGxldCBzY3JvbGxBcmVhTGVmdCA9IDA7XG4gICAgbGV0IHNjcm9sbEFyZWFUb3AgPSAwO1xuICAgIGxldCB7XG4gICAgICBjbGllbnRXaWR0aDogc2Nyb2xsQXJlYVJpZ2h0LFxuICAgICAgY2xpZW50SGVpZ2h0OiBzY3JvbGxBcmVhQm90dG9tLFxuICAgIH0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBpZiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxQYXJlbnRSZWN0ID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKHNjcm9sbFBhcmVudFJlY3QudG9wID4gMCkge1xuICAgICAgICBzY3JvbGxBcmVhVG9wID0gc2Nyb2xsUGFyZW50UmVjdC50b3A7XG4gICAgICB9XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC5sZWZ0ID4gMCkge1xuICAgICAgICBzY3JvbGxBcmVhTGVmdCA9IHNjcm9sbFBhcmVudFJlY3QubGVmdDtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxQYXJlbnRSZWN0LnJpZ2h0IDwgc2Nyb2xsQXJlYVJpZ2h0KSB7XG4gICAgICAgIHNjcm9sbEFyZWFSaWdodCA9IHNjcm9sbFBhcmVudFJlY3QucmlnaHQ7XG4gICAgICB9XG4gICAgICBpZiAoc2Nyb2xsUGFyZW50UmVjdC5ib3R0b20gPCBzY3JvbGxBcmVhQm90dG9tKSB7XG4gICAgICAgIHNjcm9sbEFyZWFCb3R0b20gPSBzY3JvbGxQYXJlbnRSZWN0LmJvdHRvbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmUgdGhlIGhvcml6b250YWwgb3JpZW50YXRpb24gYW5kIGxlZnQgcG9zaXRpb25cbiAgICBsZXQgYWRqdXN0bWVudCA9IDA7XG4gICAgaWYgKG9yaWVudFggPT09ICdhdXRvJykge1xuICAgICAgaWYgKGlucHV0TGVmdCA8IHNjcm9sbEFyZWFMZWZ0KSB7XG4gICAgICAgIG9yaWVudFggPSAnbGVmdCc7XG4gICAgICAgIGFkanVzdG1lbnQgPSBzY3JvbGxBcmVhTGVmdCAtIGlucHV0TGVmdDtcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRMZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHNjcm9sbEFyZWFSaWdodCkge1xuICAgICAgICBvcmllbnRYID0gJ3JpZ2h0JztcbiAgICAgICAgaWYgKHNjcm9sbEFyZWFSaWdodCA8IGlucHV0UmlnaHQpIHtcbiAgICAgICAgICBhZGp1c3RtZW50ID0gc2Nyb2xsQXJlYVJpZ2h0IC0gaW5wdXRSaWdodDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChnZXRUZXh0RGlyZWN0aW9uKGlucHV0RmllbGQpID09PSAncnRsJykge1xuICAgICAgICBvcmllbnRYID0gaW5wdXRSaWdodCAtIGNhbGVuZGFyV2lkdGggPCBzY3JvbGxBcmVhTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmllbnRYID0gJ2xlZnQnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50WCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgbGVmdCArPSBpbnB1dFdpZHRoIC0gY2FsZW5kYXJXaWR0aDtcbiAgICB9XG4gICAgbGVmdCArPSBhZGp1c3RtZW50O1xuXG4gICAgLy8gZGV0ZXJtaW5lIHRoZSB2ZXJ0aWNhbCBvcmllbnRhdGlvbiBhbmQgdG9wIHBvc2l0aW9uXG4gICAgaWYgKG9yaWVudFkgPT09ICdhdXRvJykge1xuICAgICAgaWYgKGlucHV0VG9wIC0gY2FsZW5kYXJIZWlnaHQgPiBzY3JvbGxBcmVhVG9wKSB7XG4gICAgICAgIG9yaWVudFkgPSBpbnB1dEJvdHRvbSArIGNhbGVuZGFySGVpZ2h0ID4gc2Nyb2xsQXJlYUJvdHRvbSA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmllbnRZID0gJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnRZID09PSAndG9wJykge1xuICAgICAgdG9wIC09IGNhbGVuZGFySGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgKz0gaW5wdXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgY2xhc3NMaXN0LnJlbW92ZSguLi5PYmplY3QudmFsdWVzKG9yaWVudENsYXNzZXMpKTtcbiAgICBjbGFzc0xpc3QuYWRkKG9yaWVudENsYXNzZXNbb3JpZW50WF0sIG9yaWVudENsYXNzZXNbb3JpZW50WV0pO1xuXG4gICAgc3R5bGUubGVmdCA9IHRvUHgobGVmdCk7XG4gICAgc3R5bGUudG9wID0gdG9QeCh0b3ApO1xuICB9XG5cbiAgc2V0Vmlld1N3aXRjaExhYmVsKGxhYmVsVGV4dCkge1xuICAgIHRoaXMuY29udHJvbHMudmlld1N3aXRjaC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgfVxuXG4gIHNldFByZXZCdG5EaXNhYmxlZChkaXNhYmxlZCkge1xuICAgIHRoaXMuY29udHJvbHMucHJldkJ0bi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgc2V0TmV4dEJ0bkRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5jb250cm9scy5uZXh0QnRuLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBjaGFuZ2VWaWV3KHZpZXdJZCkge1xuICAgIGNvbnN0IG9sZFZpZXcgPSB0aGlzLmN1cnJlbnRWaWV3O1xuICAgIGNvbnN0IG5ld1ZpZXcgPSAgdGhpcy52aWV3c1t2aWV3SWRdO1xuICAgIGlmIChuZXdWaWV3LmlkICE9PSBvbGRWaWV3LmlkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gbmV3VmlldztcbiAgICAgIHRoaXMuX3JlbmRlck1ldGhvZCA9ICdyZW5kZXInO1xuICAgICAgdHJpZ2dlckRhdGVwaWNrZXJFdmVudCh0aGlzLmRhdGVwaWNrZXIsICdjaGFuZ2VWaWV3Jyk7XG4gICAgICB0aGlzLm1haW4ucmVwbGFjZUNoaWxkKG5ld1ZpZXcuZWxlbWVudCwgb2xkVmlldy5lbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBDaGFuZ2UgdGhlIGZvY3VzZWQgZGF0ZSAodmlldyBkYXRlKVxuICBjaGFuZ2VGb2N1cyhuZXdWaWV3RGF0ZSkge1xuICAgIHRoaXMuX3JlbmRlck1ldGhvZCA9IHNldFZpZXdEYXRlKHRoaXMsIG5ld1ZpZXdEYXRlKSA/ICdyZW5kZXInIDogJ3JlZnJlc2hGb2N1cyc7XG4gICAgdGhpcy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiB7XG4gICAgICB2aWV3LnVwZGF0ZUZvY3VzKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBBcHBseSB0aGUgY2hhbmdlIG9mIHRoZSBzZWxlY3RlZCBkYXRlc1xuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgbmV3Vmlld0RhdGUgPSBjb21wdXRlUmVzZXRWaWV3RGF0ZSh0aGlzLmRhdGVwaWNrZXIpO1xuICAgIHRoaXMuX3JlbmRlck1ldGhvZCA9IHNldFZpZXdEYXRlKHRoaXMsIG5ld1ZpZXdEYXRlKSA/ICdyZW5kZXInIDogJ3JlZnJlc2gnO1xuICAgIHRoaXMudmlld3MuZm9yRWFjaCgodmlldykgPT4ge1xuICAgICAgdmlldy51cGRhdGVGb2N1cygpO1xuICAgICAgdmlldy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFJlZnJlc2ggdGhlIHBpY2tlciBVSVxuICByZW5kZXIocXVpY2tSZW5kZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgcmVuZGVyTWV0aG9kID0gKHF1aWNrUmVuZGVyICYmIHRoaXMuX3JlbmRlck1ldGhvZCkgfHwgJ3JlbmRlcic7XG4gICAgZGVsZXRlIHRoaXMuX3JlbmRlck1ldGhvZDtcblxuICAgIHRoaXMuY3VycmVudFZpZXdbcmVuZGVyTWV0aG9kXSgpO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZVRhZ1JlcGVhdCwgb3B0aW1pemVUZW1wbGF0ZUhUTUx9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5cbmNvbnN0IGNhbGVuZGFyV2Vla3NUZW1wbGF0ZSA9IG9wdGltaXplVGVtcGxhdGVIVE1MKGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItd2Vla3NcIj5cbiAgPGRpdiBjbGFzcz1cImRheXMtb2Ytd2Vla1wiPjxzcGFuIGNsYXNzPVwiZG93XCI+PC9zcGFuPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwid2Vla3NcIj4ke2NyZWF0ZVRhZ1JlcGVhdCgnc3BhbicsIDYsIHtjbGFzczogJ3dlZWsnfSl9PC9kaXY+XG48L2Rpdj5gKTtcblxuZXhwb3J0IGRlZmF1bHQgY2FsZW5kYXJXZWVrc1RlbXBsYXRlO1xuIiwiaW1wb3J0IHtjcmVhdGVUYWdSZXBlYXQsIG9wdGltaXplVGVtcGxhdGVIVE1MfSBmcm9tICcuLi8uLi9saWIvdXRpbHMuanMnO1xuXG5jb25zdCBkYXlzVGVtcGxhdGUgPSBvcHRpbWl6ZVRlbXBsYXRlSFRNTChgPGRpdiBjbGFzcz1cImRheXNcIj5cbiAgPGRpdiBjbGFzcz1cImRheXMtb2Ytd2Vla1wiPiR7Y3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgNywge2NsYXNzOiAnZG93J30pfTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1ncmlkXCI+JHtjcmVhdGVUYWdSZXBlYXQoJ3NwYW4nLCA0Mil9PC9kaXY+XG48L2Rpdj5gKTtcblxuZXhwb3J0IGRlZmF1bHQgZGF5c1RlbXBsYXRlO1xuIiwiaW1wb3J0IHtvcHRpbWl6ZVRlbXBsYXRlSFRNTH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcblxuY29uc3QgcGlja2VyVGVtcGxhdGUgPSBvcHRpbWl6ZVRlbXBsYXRlSFRNTChgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXJcIj5cbiAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItcGlja2VyXCI+XG4gICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci10aXRsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY29udHJvbHNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIHByZXYtYnRuXCI+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSB2aWV3LXN3aXRjaFwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiVidXR0b25DbGFzcyUgbmV4dC1idG5cIj48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLW1haW5cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1mb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNvbnRyb2xzXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJWJ1dHRvbkNsYXNzJSB0b2RheS1idG5cIj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIlYnV0dG9uQ2xhc3MlIGNsZWFyLWJ0blwiPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBpY2tlclRlbXBsYXRlO1xuIiwiaW1wb3J0IHtoYXNQcm9wZXJ0eSwgcHVzaFVuaXF1ZX0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7dG9kYXksIGRhdGVWYWx1ZSwgYWRkRGF5cywgYWRkV2Vla3MsIGRheU9mVGhlV2Vla09mLCBnZXRXZWVrfSBmcm9tICcuLi8uLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge2Zvcm1hdERhdGV9IGZyb20gJy4uLy4uL2xpYi9kYXRlLWZvcm1hdC5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTCwgc2hvd0VsZW1lbnQsIGhpZGVFbGVtZW50fSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcbmltcG9ydCBkYXlzVGVtcGxhdGUgZnJvbSAnLi4vdGVtcGxhdGVzL2RheXNUZW1wbGF0ZS5qcyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrc1RlbXBsYXRlIGZyb20gJy4uL3RlbXBsYXRlcy9jYWxlbmRhcldlZWtzVGVtcGxhdGUuanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi9WaWV3LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5c1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyKSB7XG4gICAgc3VwZXIocGlja2VyLCB7XG4gICAgICBpZDogMCxcbiAgICAgIG5hbWU6ICdkYXlzJyxcbiAgICAgIGNlbGxDbGFzczogJ2RheScsXG4gICAgfSk7XG4gIH1cblxuICBpbml0KG9wdGlvbnMsIG9uQ29uc3RydWN0aW9uID0gdHJ1ZSkge1xuICAgIGlmIChvbkNvbnN0cnVjdGlvbikge1xuICAgICAgY29uc3QgaW5uZXIgPSBwYXJzZUhUTUwoZGF5c1RlbXBsYXRlKS5maXJzdENoaWxkO1xuICAgICAgdGhpcy5kb3cgPSBpbm5lci5maXJzdENoaWxkO1xuICAgICAgdGhpcy5ncmlkID0gaW5uZXIubGFzdENoaWxkO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICB9XG4gICAgc3VwZXIuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGxldCB1cGRhdGVET1c7XG5cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSkge1xuICAgICAgdGhpcy5taW5EYXRlID0gb3B0aW9ucy5taW5EYXRlO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21heERhdGUnKSkge1xuICAgICAgdGhpcy5tYXhEYXRlID0gb3B0aW9ucy5tYXhEYXRlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kYXRlc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBvcHRpb25zLmRhdGVzRGlzYWJsZWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRheXNPZldlZWtEaXNhYmxlZCkge1xuICAgICAgdGhpcy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBvcHRpb25zLmRheXNPZldlZWtEaXNhYmxlZDtcbiAgICAgIHVwZGF0ZURPVyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRheXNPZldlZWtIaWdobGlnaHRlZCkge1xuICAgICAgdGhpcy5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQgPSBvcHRpb25zLmRheXNPZldlZWtIaWdobGlnaHRlZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudG9kYXlIaWdobGlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50b2RheUhpZ2hsaWdodCA9IG9wdGlvbnMudG9kYXlIaWdobGlnaHQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLndlZWtTdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndlZWtTdGFydCA9IG9wdGlvbnMud2Vla1N0YXJ0O1xuICAgICAgdGhpcy53ZWVrRW5kID0gb3B0aW9ucy53ZWVrRW5kO1xuICAgICAgdXBkYXRlRE9XID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubG9jYWxlKSB7XG4gICAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICAgICAgdGhpcy5kYXlOYW1lcyA9IGxvY2FsZS5kYXlzTWluO1xuICAgICAgdGhpcy5zd2l0Y2hMYWJlbEZvcm1hdCA9IGxvY2FsZS50aXRsZUZvcm1hdDtcbiAgICAgIHVwZGF0ZURPVyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJlZm9yZVNob3dEYXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iZWZvcmVTaG93ID0gdHlwZW9mIG9wdGlvbnMuYmVmb3JlU2hvd0RheSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wdGlvbnMuYmVmb3JlU2hvd0RheVxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jYWxlbmRhcldlZWtzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChvcHRpb25zLmNhbGVuZGFyV2Vla3MgJiYgIXRoaXMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICBjb25zdCB3ZWVrc0VsZW0gPSBwYXJzZUhUTUwoY2FsZW5kYXJXZWVrc1RlbXBsYXRlKS5maXJzdENoaWxkO1xuICAgICAgICB0aGlzLmNhbGVuZGFyV2Vla3MgPSB7XG4gICAgICAgICAgZWxlbWVudDogd2Vla3NFbGVtLFxuICAgICAgICAgIGRvdzogd2Vla3NFbGVtLmZpcnN0Q2hpbGQsXG4gICAgICAgICAgd2Vla3M6IHdlZWtzRWxlbS5sYXN0Q2hpbGQsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUod2Vla3NFbGVtLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2FsZW5kYXJXZWVrcyAmJiAhb3B0aW9ucy5jYWxlbmRhcldlZWtzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmNhbGVuZGFyV2Vla3MuZWxlbWVudCk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJXZWVrcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnNob3dEYXlzT2ZXZWVrICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChvcHRpb25zLnNob3dEYXlzT2ZXZWVrKSB7XG4gICAgICAgIHNob3dFbGVtZW50KHRoaXMuZG93KTtcbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgICAgIHNob3dFbGVtZW50KHRoaXMuY2FsZW5kYXJXZWVrcy5kb3cpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRlRWxlbWVudCh0aGlzLmRvdyk7XG4gICAgICAgIGlmICh0aGlzLmNhbGVuZGFyV2Vla3MpIHtcbiAgICAgICAgICBoaWRlRWxlbWVudCh0aGlzLmNhbGVuZGFyV2Vla3MuZG93KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBkYXlzLW9mLXdlZWsgd2hlbiBsb2NhbGUsIGRheXNPZndlZWtEaXNhYmxlZCBvciB3ZWVrU3RhcnQgaXMgY2hhbmdlZFxuICAgIGlmICh1cGRhdGVET1cpIHtcbiAgICAgIEFycmF5LmZyb20odGhpcy5kb3cuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBkb3cgPSAodGhpcy53ZWVrU3RhcnQgKyBpbmRleCkgJSA3O1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHRoaXMuZGF5TmFtZXNbZG93XTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gdGhpcy5kYXlzT2ZXZWVrRGlzYWJsZWQuaW5jbHVkZXMoZG93KSA/ICdkb3cgZGlzYWJsZWQnIDogJ2Rvdyc7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBBcHBseSB1cGRhdGUgb24gdGhlIGZvY3VzZWQgZGF0ZSB0byB2aWV3J3Mgc2V0dGluZ3NcbiAgdXBkYXRlRm9jdXMoKSB7XG4gICAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnBpY2tlci52aWV3RGF0ZSk7XG4gICAgY29uc3Qgdmlld1llYXIgPSB2aWV3RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IHZpZXdNb250aCA9IHZpZXdEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgZmlyc3RPZk1vbnRoID0gZGF0ZVZhbHVlKHZpZXdZZWFyLCB2aWV3TW9udGgsIDEpO1xuICAgIGNvbnN0IHN0YXJ0ID0gZGF5T2ZUaGVXZWVrT2YoZmlyc3RPZk1vbnRoLCB0aGlzLndlZWtTdGFydCwgdGhpcy53ZWVrU3RhcnQpO1xuXG4gICAgdGhpcy5maXJzdCA9IGZpcnN0T2ZNb250aDtcbiAgICB0aGlzLmxhc3QgPSBkYXRlVmFsdWUodmlld1llYXIsIHZpZXdNb250aCArIDEsIDApO1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmZvY3VzZWQgPSB0aGlzLnBpY2tlci52aWV3RGF0ZTtcbiAgfVxuXG4gIC8vIEFwcGx5IHVwZGF0ZSBvbiB0aGUgc2VsZWN0ZWQgZGF0ZXMgdG8gdmlldydzIHNldHRpbmdzXG4gIHVwZGF0ZVNlbGVjdGlvbigpIHtcbiAgICBjb25zdCB7ZGF0ZXMsIHJhbmdlcGlja2VyfSA9IHRoaXMucGlja2VyLmRhdGVwaWNrZXI7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGRhdGVzO1xuICAgIGlmIChyYW5nZXBpY2tlcikge1xuICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlcGlja2VyLmRhdGVzO1xuICAgIH1cbiAgfVxuXG4gICAvLyBVcGRhdGUgdGhlIGVudGlyZSB2aWV3IFVJXG4gIHJlbmRlcigpIHtcbiAgICAvLyB1cGRhdGUgdG9kYXkgbWFya2VyIG9uIGV2ZXIgcmVuZGVyXG4gICAgdGhpcy50b2RheSA9IHRoaXMudG9kYXlIaWdobGlnaHQgPyB0b2RheSgpIDogdW5kZWZpbmVkO1xuICAgIC8vIHJlZnJlc2ggZGlzYWJsZWQgZGF0ZXMgb24gZXZlcnkgcmVuZGVyIGluIG9yZGVyIHRvIGNsZWFyIHRoZSBvbmVzIGFkZGVkXG4gICAgLy8gYnkgYmVmb3JlU2hvdyBob29rIGF0IHByZXZpb3VzIHJlbmRlclxuICAgIHRoaXMuZGlzYWJsZWQgPSBbLi4udGhpcy5kYXRlc0Rpc2FibGVkXTtcblxuICAgIGNvbnN0IHN3aXRjaExhYmVsID0gZm9ybWF0RGF0ZSh0aGlzLmZvY3VzZWQsIHRoaXMuc3dpdGNoTGFiZWxGb3JtYXQsIHRoaXMubG9jYWxlKTtcbiAgICB0aGlzLnBpY2tlci5zZXRWaWV3U3dpdGNoTGFiZWwoc3dpdGNoTGFiZWwpO1xuICAgIHRoaXMucGlja2VyLnNldFByZXZCdG5EaXNhYmxlZCh0aGlzLmZpcnN0IDw9IHRoaXMubWluRGF0ZSk7XG4gICAgdGhpcy5waWNrZXIuc2V0TmV4dEJ0bkRpc2FibGVkKHRoaXMubGFzdCA+PSB0aGlzLm1heERhdGUpO1xuXG4gICAgaWYgKHRoaXMuY2FsZW5kYXJXZWVrcykge1xuICAgICAgLy8gc3RhcnQgb2YgdGhlIFVUQyB3ZWVrIChNb25kYXkpIG9mIHRoZSAxc3Qgb2YgdGhlIG1vbnRoXG4gICAgICBjb25zdCBzdGFydE9mV2VlayA9IGRheU9mVGhlV2Vla09mKHRoaXMuZmlyc3QsIDEsIDEpO1xuICAgICAgQXJyYXkuZnJvbSh0aGlzLmNhbGVuZGFyV2Vla3Mud2Vla3MuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGdldFdlZWsoYWRkV2Vla3Moc3RhcnRPZldlZWssIGluZGV4KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWwuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgY3VycmVudCA9IGFkZERheXModGhpcy5zdGFydCwgaW5kZXgpO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQpO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgICAgZWwuY2xhc3NOYW1lID0gYGRhdGVwaWNrZXItY2VsbCAke3RoaXMuY2VsbENsYXNzfWA7XG4gICAgICBlbC5kYXRhc2V0LmRhdGUgPSBjdXJyZW50O1xuICAgICAgZWwudGV4dENvbnRlbnQgPSBkYXRlLmdldERhdGUoKTtcblxuICAgICAgaWYgKGN1cnJlbnQgPCB0aGlzLmZpcnN0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA+IHRoaXMubGFzdCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50b2RheSA9PT0gY3VycmVudCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCd0b2RheScpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPCB0aGlzLm1pbkRhdGUgfHwgY3VycmVudCA+IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kYXlzT2ZXZWVrRGlzYWJsZWQuaW5jbHVkZXMoZGF5KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICBwdXNoVW5pcXVlKHRoaXMuZGlzYWJsZWQsIGN1cnJlbnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF5c09mV2Vla0hpZ2hsaWdodGVkLmluY2x1ZGVzKGRheSkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSB0aGlzLnJhbmdlO1xuICAgICAgICBpZiAoY3VycmVudCA+IHJhbmdlU3RhcnQgJiYgY3VycmVudCA8IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYmVmb3JlU2hvdykge1xuICAgICAgICB0aGlzLnBlcmZvcm1CZWZvcmVIb29rKGVsLCBjdXJyZW50LCBjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlcyBvZiBzZWxlY3RlZCBhbmQgZm9jdXNlZCBpdGVtc1xuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSB0aGlzLnJhbmdlIHx8IFtdO1xuICAgIHRoaXMuZ3JpZFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZSwgLnJhbmdlLXN0YXJ0LCAucmFuZ2UtZW5kLCAuc2VsZWN0ZWQsIC5mb2N1c2VkJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZScsICdyYW5nZS1zdGFydCcsICdyYW5nZS1lbmQnLCAnc2VsZWN0ZWQnLCAnZm9jdXNlZCcpO1xuICAgICAgfSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gTnVtYmVyKGVsLmRhdGFzZXQuZGF0ZSk7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoY3VycmVudCA+IHJhbmdlU3RhcnQgJiYgY3VycmVudCA8IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlRW5kKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSB0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZm9jdXNlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2Ugb2YgZm9jdXNlZCBpdGVtXG4gIHJlZnJlc2hGb2N1cygpIHtcbiAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKHRoaXMuZm9jdXNlZCAtIHRoaXMuc3RhcnQpIC8gODY0MDAwMDApO1xuICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9jdXNlZCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLmNoaWxkcmVuW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7aGFzUHJvcGVydHksIHB1c2hVbmlxdWUsIGNyZWF0ZVRhZ1JlcGVhdH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzLmpzJztcbmltcG9ydCB7ZGF0ZVZhbHVlfSBmcm9tICcuLi8uLi9saWIvZGF0ZS5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTH0gZnJvbSAnLi4vLi4vbGliL2RvbS5qcyc7XG5pbXBvcnQgVmlldyBmcm9tICcuL1ZpZXcuanMnO1xuXG5mdW5jdGlvbiBjb21wdXRlTW9udGhSYW5nZShyYW5nZSwgdGhpc1llYXIpIHtcbiAgaWYgKCFyYW5nZSB8fCAhcmFuZ2VbMF0gfHwgIXJhbmdlWzFdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgW1tzdGFydFksIHN0YXJ0TV0sIFtlbmRZLCBlbmRNXV0gPSByYW5nZTtcbiAgaWYgKHN0YXJ0WSA+IHRoaXNZZWFyIHx8IGVuZFkgPCB0aGlzWWVhcikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gW1xuICAgIHN0YXJ0WSA9PT0gdGhpc1llYXIgPyBzdGFydE0gOiAtMSxcbiAgICBlbmRZID09PSB0aGlzWWVhciA/IGVuZE0gOiAxMixcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhzVmlldyBleHRlbmRzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIpIHtcbiAgICBzdXBlcihwaWNrZXIsIHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ21vbnRocycsXG4gICAgICBjZWxsQ2xhc3M6ICdtb250aCcsXG4gICAgfSk7XG4gIH1cblxuICBpbml0KG9wdGlvbnMsIG9uQ29uc3RydWN0aW9uID0gdHJ1ZSkge1xuICAgIGlmIChvbkNvbnN0cnVjdGlvbikge1xuICAgICAgdGhpcy5ncmlkID0gdGhpcy5lbGVtZW50O1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vbnRocycsICdkYXRlcGlja2VyLWdyaWQnKTtcbiAgICAgIHRoaXMuZ3JpZC5hcHBlbmRDaGlsZChwYXJzZUhUTUwoY3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgMTIsIHsnZGF0YS1tb250aCc6IGl4ID0+IGl4fSkpKTtcbiAgICB9XG4gICAgc3VwZXIuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmxvY2FsZSkge1xuICAgICAgdGhpcy5tb250aE5hbWVzID0gb3B0aW9ucy5sb2NhbGUubW9udGhzU2hvcnQ7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWluRGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5taW5EYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5taW5ZZWFyID0gdGhpcy5taW5Nb250aCA9IHRoaXMubWluRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1pbkRhdGVPYmogPSBuZXcgRGF0ZShvcHRpb25zLm1pbkRhdGUpO1xuICAgICAgICB0aGlzLm1pblllYXIgPSBtaW5EYXRlT2JqLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMubWluTW9udGggPSBtaW5EYXRlT2JqLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubWluRGF0ZSA9IG1pbkRhdGVPYmouc2V0RGF0ZSgxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BlcnR5KG9wdGlvbnMsICdtYXhEYXRlJykpIHtcbiAgICAgIGlmIChvcHRpb25zLm1heERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLm1heFllYXIgPSB0aGlzLm1heE1vbnRoID0gdGhpcy5tYXhEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWF4RGF0ZU9iaiA9IG5ldyBEYXRlKG9wdGlvbnMubWF4RGF0ZSk7XG4gICAgICAgIHRoaXMubWF4WWVhciA9IG1heERhdGVPYmouZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5tYXhNb250aCA9IG1heERhdGVPYmouZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gZGF0ZVZhbHVlKHRoaXMubWF4WWVhciwgdGhpcy5tYXhNb250aCArIDEsIDApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gb3B0aW9ucy5kYXRlc0Rpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBbXTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuYmVmb3JlU2hvd01vbnRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYmVmb3JlU2hvdyA9IHR5cGVvZiBvcHRpb25zLmJlZm9yZVNob3dNb250aCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wdGlvbnMuYmVmb3JlU2hvd01vbnRoXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgdmlld0RhdGUgc2V0IG9uIHRoZSBwaWNrZXJcbiAgdXBkYXRlRm9jdXMoKSB7XG4gICAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnBpY2tlci52aWV3RGF0ZSk7XG4gICAgdGhpcy55ZWFyID0gdmlld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICB0aGlzLmZvY3VzZWQgPSB2aWV3RGF0ZS5nZXRNb250aCgpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSBzZWxlY3RlZCBkYXRlc1xuICB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qge2RhdGVzLCByYW5nZXBpY2tlcn0gPSB0aGlzLnBpY2tlci5kYXRlcGlja2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlcy5yZWR1Y2UoKHNlbGVjdGVkLCB0aW1lVmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lVmFsdWUpO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgaWYgKHNlbGVjdGVkW3llYXJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRbeWVhcl0gPSBbbW9udGhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHVzaFVuaXF1ZShzZWxlY3RlZFt5ZWFyXSwgbW9udGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH0sIHt9KTtcbiAgICBpZiAocmFuZ2VwaWNrZXIgJiYgcmFuZ2VwaWNrZXIuZGF0ZXMpIHtcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZXBpY2tlci5kYXRlcy5tYXAodGltZVZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVWYWx1ZSk7XG4gICAgICAgIHJldHVybiBpc05hTihkYXRlKSA/IHVuZGVmaW5lZCA6IFtkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGVudGlyZSB2aWV3IFVJXG4gIHJlbmRlcigpIHtcbiAgICAvLyByZWZyZXNoIGRpc2FibGVkIG1vbnRocyBvbiBldmVyeSByZW5kZXIgaW4gb3JkZXIgdG8gY2xlYXIgdGhlIG9uZXMgYWRkZWRcbiAgICAvLyBieSBiZWZvcmVTaG93IGhvb2sgYXQgcHJldmlvdXMgcmVuZGVyXG4gICAgLy8gdGhpcy5kaXNhYmxlZCA9IFsuLi50aGlzLmRhdGVzRGlzYWJsZWRdO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQucmVkdWNlKChhcnIsIGRpc2FibGVkKSA9PiB7XG4gICAgICBjb25zdCBkdCA9IG5ldyBEYXRlKGRpc2FibGVkKTtcbiAgICAgIGlmICh0aGlzLnllYXIgPT09IGR0LmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgYXJyLnB1c2goZHQuZ2V0TW9udGgoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0sIFtdKTtcblxuICAgIHRoaXMucGlja2VyLnNldFZpZXdTd2l0Y2hMYWJlbCh0aGlzLnllYXIpO1xuICAgIHRoaXMucGlja2VyLnNldFByZXZCdG5EaXNhYmxlZCh0aGlzLnllYXIgPD0gdGhpcy5taW5ZZWFyKTtcbiAgICB0aGlzLnBpY2tlci5zZXROZXh0QnRuRGlzYWJsZWQodGhpcy55ZWFyID49IHRoaXMubWF4WWVhcik7XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRbdGhpcy55ZWFyXSB8fCBbXTtcbiAgICBjb25zdCB5ck91dE9mUmFuZ2UgPSB0aGlzLnllYXIgPCB0aGlzLm1pblllYXIgfHwgdGhpcy55ZWFyID4gdGhpcy5tYXhZZWFyO1xuICAgIGNvbnN0IGlzTWluWWVhciA9IHRoaXMueWVhciA9PT0gdGhpcy5taW5ZZWFyO1xuICAgIGNvbnN0IGlzTWF4WWVhciA9IHRoaXMueWVhciA9PT0gdGhpcy5tYXhZZWFyO1xuICAgIGNvbnN0IHJhbmdlID0gY29tcHV0ZU1vbnRoUmFuZ2UodGhpcy5yYW5nZSwgdGhpcy55ZWFyKTtcblxuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlVmFsdWUodGhpcy55ZWFyLCBpbmRleCwgMSk7XG5cbiAgICAgIGVsLmNsYXNzTmFtZSA9IGBkYXRlcGlja2VyLWNlbGwgJHt0aGlzLmNlbGxDbGFzc31gO1xuICAgICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICAgIGVsLmRhdGFzZXQuZGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICAvLyByZXNldCB0ZXh0IG9uIGV2ZXJ5IHJlbmRlciB0byBjbGVhciB0aGUgY3VzdG9tIGNvbnRlbnQgc2V0XG4gICAgICAvLyBieSBiZWZvcmVTaG93IGhvb2sgYXQgcHJldmlvdXMgcmVuZGVyXG4gICAgICBlbC50ZXh0Q29udGVudCA9IHRoaXMubW9udGhOYW1lc1tpbmRleF07XG5cbiAgICAgIGlmIChcbiAgICAgICAgeXJPdXRPZlJhbmdlXG4gICAgICAgIHx8IGlzTWluWWVhciAmJiBpbmRleCA8IHRoaXMubWluTW9udGhcbiAgICAgICAgfHwgaXNNYXhZZWFyICYmIGluZGV4ID4gdGhpcy5tYXhNb250aFxuICAgICAgICB8fCB0aGlzLmRpc2FibGVkLmluY2x1ZGVzKGluZGV4KVxuICAgICAgKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHJhbmdlO1xuICAgICAgICBpZiAoaW5kZXggPiByYW5nZVN0YXJ0ICYmIGluZGV4IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4ID09PSByYW5nZUVuZCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLWVuZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmJlZm9yZVNob3cpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQmVmb3JlSG9vayhlbCwgaW5kZXgsIGRhdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB2aWV3IFVJIGJ5IGFwcGx5aW5nIHRoZSBjaGFuZ2VzIG9mIHNlbGVjdGVkIGFuZCBmb2N1c2VkIGl0ZW1zXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkW3RoaXMueWVhcl0gfHwgW107XG4gICAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IGNvbXB1dGVNb250aFJhbmdlKHRoaXMucmFuZ2UsIHRoaXMueWVhcikgfHwgW107XG4gICAgdGhpcy5ncmlkXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLCAucmFuZ2Utc3RhcnQsIC5yYW5nZS1lbmQsIC5zZWxlY3RlZCwgLmZvY3VzZWQnKVxuICAgICAgLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JhbmdlJywgJ3JhbmdlLXN0YXJ0JywgJ3JhbmdlLWVuZCcsICdzZWxlY3RlZCcsICdmb2N1c2VkJyk7XG4gICAgICB9KTtcbiAgICBBcnJheS5mcm9tKHRoaXMuZ3JpZC5jaGlsZHJlbikuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3Q7XG4gICAgICBpZiAoaW5kZXggPiByYW5nZVN0YXJ0ICYmIGluZGV4IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1zdGFydCcpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSByYW5nZUVuZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdyYW5nZS1lbmQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhpbmRleCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlIG9mIGZvY3VzZWQgaXRlbVxuICByZWZyZXNoRm9jdXMoKSB7XG4gICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb2N1c2VkJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICB0aGlzLmdyaWQuY2hpbGRyZW5bdGhpcy5mb2N1c2VkXS5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gIH1cbn0iLCJpbXBvcnQge3B1c2hVbmlxdWV9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge3BhcnNlSFRNTCwgcmVwbGFjZUNoaWxkTm9kZXN9IGZyb20gJy4uLy4uL2xpYi9kb20uanMnO1xuXG4vLyBCYXNlIGNsYXNzIG9mIHRoZSB2aWV3IGNsYXNzZXNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3RvcihwaWNrZXIsIGNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnLCB7XG4gICAgICBwaWNrZXIsXG4gICAgICBlbGVtZW50OiBwYXJzZUhUTUwoYDxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXZpZXdcIj48L2Rpdj5gKS5maXJzdENoaWxkLFxuICAgICAgc2VsZWN0ZWQ6IFtdLFxuICAgIH0pO1xuICAgIHRoaXMuaW5pdCh0aGlzLnBpY2tlci5kYXRlcGlja2VyLmNvbmZpZyk7XG4gIH1cblxuICBpbml0KG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5waWNrTGV2ZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pc01pblZpZXcgPSB0aGlzLmlkID09PSBvcHRpb25zLnBpY2tMZXZlbDtcbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIHRoaXMudXBkYXRlRm9jdXMoKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgLy8gRXhlY3V0ZSBiZWZvcmVTaG93KCkgY2FsbGJhY2sgYW5kIGFwcGx5IHRoZSByZXN1bHQgdG8gdGhlIGVsZW1lbnRcbiAgLy8gYXJnczpcbiAgLy8gLSBjdXJyZW50IC0gY3VycmVudCB2YWx1ZSBvbiB0aGUgaXRlcmF0aW9uIG9uIHZpZXcgcmVuZGVyaW5nXG4gIC8vIC0gdGltZVZhbHVlIC0gdGltZSB2YWx1ZSBvZiB0aGUgZGF0ZSB0byBwYXNzIHRvIGJlZm9yZVNob3coKVxuICBwZXJmb3JtQmVmb3JlSG9vayhlbCwgY3VycmVudCwgdGltZVZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuYmVmb3JlU2hvdyhuZXcgRGF0ZSh0aW1lVmFsdWUpKTtcbiAgICBzd2l0Y2ggKHR5cGVvZiByZXN1bHQpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXN1bHQgPSB7ZW5hYmxlZDogcmVzdWx0fTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXN1bHQgPSB7Y2xhc3NlczogcmVzdWx0fTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAocmVzdWx0LmVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHB1c2hVbmlxdWUodGhpcy5kaXNhYmxlZCwgY3VycmVudCk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LmNsYXNzZXMpIHtcbiAgICAgICAgY29uc3QgZXh0cmFDbGFzc2VzID0gcmVzdWx0LmNsYXNzZXMuc3BsaXQoL1xccysvKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCguLi5leHRyYUNsYXNzZXMpO1xuICAgICAgICBpZiAoZXh0cmFDbGFzc2VzLmluY2x1ZGVzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgcHVzaFVuaXF1ZSh0aGlzLmRpc2FibGVkLCBjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5jb250ZW50KSB7XG4gICAgICAgIHJlcGxhY2VDaGlsZE5vZGVzKGVsLCByZXN1bHQuY29udGVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge2hhc1Byb3BlcnR5LCBwdXNoVW5pcXVlLCBjcmVhdGVUYWdSZXBlYXR9IGZyb20gJy4uLy4uL2xpYi91dGlscy5qcyc7XG5pbXBvcnQge2RhdGVWYWx1ZSwgc3RhcnRPZlllYXJQZXJpb2R9IGZyb20gJy4uLy4uL2xpYi9kYXRlLmpzJztcbmltcG9ydCB7cGFyc2VIVE1MfSBmcm9tICcuLi8uLi9saWIvZG9tLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldy5qcyc7XG5cbmZ1bmN0aW9uIHRvVGl0bGVDYXNlKHdvcmQpIHtcbiAgcmV0dXJuIFsuLi53b3JkXS5yZWR1Y2UoKHN0ciwgY2gsIGl4KSA9PiBzdHIgKz0gaXggPyBjaCA6IGNoLnRvVXBwZXJDYXNlKCksICcnKTtcbn1cblxuLy8gQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSB5ZWFycyBhbmQgZGVjYWRlcyB2aWV3IGVsZW1lbnRzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyc1ZpZXcgZXh0ZW5kcyBWaWV3IHtcbiAgY29uc3RydWN0b3IocGlja2VyLCBjb25maWcpIHtcbiAgICBzdXBlcihwaWNrZXIsIGNvbmZpZyk7XG4gIH1cblxuICBpbml0KG9wdGlvbnMsIG9uQ29uc3RydWN0aW9uID0gdHJ1ZSkge1xuICAgIGlmIChvbkNvbnN0cnVjdGlvbikge1xuICAgICAgdGhpcy5uYXZTdGVwID0gdGhpcy5zdGVwICogMTA7XG4gICAgICB0aGlzLmJlZm9yZVNob3dPcHRpb24gPSBgYmVmb3JlU2hvdyR7dG9UaXRsZUNhc2UodGhpcy5jZWxsQ2xhc3MpfWA7XG4gICAgICB0aGlzLmdyaWQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm5hbWUsICdkYXRlcGlja2VyLWdyaWQnKTtcbiAgICAgIHRoaXMuZ3JpZC5hcHBlbmRDaGlsZChwYXJzZUhUTUwoY3JlYXRlVGFnUmVwZWF0KCdzcGFuJywgMTIpKSk7XG4gICAgfVxuICAgIHN1cGVyLmluaXQob3B0aW9ucyk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBpZiAoaGFzUHJvcGVydHkob3B0aW9ucywgJ21pbkRhdGUnKSkge1xuICAgICAgaWYgKG9wdGlvbnMubWluRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubWluWWVhciA9IHRoaXMubWluRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWluWWVhciA9IHN0YXJ0T2ZZZWFyUGVyaW9kKG9wdGlvbnMubWluRGF0ZSwgdGhpcy5zdGVwKTtcbiAgICAgICAgdGhpcy5taW5EYXRlID0gZGF0ZVZhbHVlKHRoaXMubWluWWVhciwgMCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNQcm9wZXJ0eShvcHRpb25zLCAnbWF4RGF0ZScpKSB7XG4gICAgICBpZiAob3B0aW9ucy5tYXhEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gdGhpcy5tYXhEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXhZZWFyID0gc3RhcnRPZlllYXJQZXJpb2Qob3B0aW9ucy5tYXhEYXRlLCB0aGlzLnN0ZXApO1xuICAgICAgICB0aGlzLm1heERhdGUgPSBkYXRlVmFsdWUodGhpcy5tYXhZZWFyLCAxMSwgMzEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc01pblZpZXcpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGVzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5kYXRlc0Rpc2FibGVkID0gb3B0aW9ucy5kYXRlc0Rpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGVzRGlzYWJsZWQgPSBbXTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnNbdGhpcy5iZWZvcmVTaG93T3B0aW9uXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBiZWZvcmVTaG93ID0gb3B0aW9uc1t0aGlzLmJlZm9yZVNob3dPcHRpb25dO1xuICAgICAgdGhpcy5iZWZvcmVTaG93ID0gdHlwZW9mIGJlZm9yZVNob3cgPT09ICdmdW5jdGlvbicgPyBiZWZvcmVTaG93IDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSB2aWV3J3Mgc2V0dGluZ3MgdG8gcmVmbGVjdCB0aGUgdmlld0RhdGUgc2V0IG9uIHRoZSBwaWNrZXJcbiAgdXBkYXRlRm9jdXMoKSB7XG4gICAgY29uc3Qgdmlld0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnBpY2tlci52aWV3RGF0ZSk7XG4gICAgY29uc3QgZmlyc3QgPSBzdGFydE9mWWVhclBlcmlvZCh2aWV3RGF0ZSwgdGhpcy5uYXZTdGVwKTtcbiAgICBjb25zdCBsYXN0ID0gZmlyc3QgKyA5ICogdGhpcy5zdGVwO1xuXG4gICAgdGhpcy5maXJzdCA9IGZpcnN0O1xuICAgIHRoaXMubGFzdCA9IGxhc3Q7XG4gICAgdGhpcy5zdGFydCA9IGZpcnN0IC0gdGhpcy5zdGVwO1xuICAgIHRoaXMuZm9jdXNlZCA9IHN0YXJ0T2ZZZWFyUGVyaW9kKHZpZXdEYXRlLCB0aGlzLnN0ZXApO1xuICB9XG5cbiAgLy8gVXBkYXRlIHZpZXcncyBzZXR0aW5ncyB0byByZWZsZWN0IHRoZSBzZWxlY3RlZCBkYXRlc1xuICB1cGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qge2RhdGVzLCByYW5nZXBpY2tlcn0gPSB0aGlzLnBpY2tlci5kYXRlcGlja2VyO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBkYXRlcy5yZWR1Y2UoKHllYXJzLCB0aW1lVmFsdWUpID0+IHtcbiAgICAgIHJldHVybiBwdXNoVW5pcXVlKHllYXJzLCBzdGFydE9mWWVhclBlcmlvZCh0aW1lVmFsdWUsIHRoaXMuc3RlcCkpO1xuICAgIH0sIFtdKTtcbiAgICBpZiAocmFuZ2VwaWNrZXIgJiYgcmFuZ2VwaWNrZXIuZGF0ZXMpIHtcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZXBpY2tlci5kYXRlcy5tYXAodGltZVZhbHVlID0+IHtcbiAgICAgICAgaWYgKHRpbWVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXJ0T2ZZZWFyUGVyaW9kKHRpbWVWYWx1ZSwgdGhpcy5zdGVwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBlbnRpcmUgdmlldyBVSVxuICByZW5kZXIoKSB7XG4gICAgLy8gcmVmcmVzaCBkaXNhYmxlZCB5ZWFycyBvbiBldmVyeSByZW5kZXIgaW4gb3JkZXIgdG8gY2xlYXIgdGhlIG9uZXMgYWRkZWRcbiAgICAvLyBieSBiZWZvcmVTaG93IGhvb2sgYXQgcHJldmlvdXMgcmVuZGVyXG4gICAgLy8gdGhpcy5kaXNhYmxlZCA9IFsuLi50aGlzLmRhdGVzRGlzYWJsZWRdO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQubWFwKGRpc2FibGVkID0+IG5ldyBEYXRlKGRpc2FibGVkKS5nZXRGdWxsWWVhcigpKTtcblxuICAgIHRoaXMucGlja2VyLnNldFZpZXdTd2l0Y2hMYWJlbChgJHt0aGlzLmZpcnN0fS0ke3RoaXMubGFzdH1gKTtcbiAgICB0aGlzLnBpY2tlci5zZXRQcmV2QnRuRGlzYWJsZWQodGhpcy5maXJzdCA8PSB0aGlzLm1pblllYXIpO1xuICAgIHRoaXMucGlja2VyLnNldE5leHRCdG5EaXNhYmxlZCh0aGlzLmxhc3QgPj0gdGhpcy5tYXhZZWFyKTtcblxuICAgIEFycmF5LmZyb20odGhpcy5ncmlkLmNoaWxkcmVuKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnN0YXJ0ICsgKGluZGV4ICogdGhpcy5zdGVwKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkYXRlVmFsdWUoY3VycmVudCwgMCwgMSk7XG5cbiAgICAgIGVsLmNsYXNzTmFtZSA9IGBkYXRlcGlja2VyLWNlbGwgJHt0aGlzLmNlbGxDbGFzc31gO1xuICAgICAgaWYgKHRoaXMuaXNNaW5WaWV3KSB7XG4gICAgICAgIGVsLmRhdGFzZXQuZGF0ZSA9IGRhdGU7XG4gICAgICB9XG4gICAgICBlbC50ZXh0Q29udGVudCA9IGVsLmRhdGFzZXQueWVhciA9IGN1cnJlbnQ7XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxMSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA8IHRoaXMubWluWWVhciB8fCBjdXJyZW50ID4gdGhpcy5tYXhZZWFyIHx8IHRoaXMuZGlzYWJsZWQuaW5jbHVkZXMoY3VycmVudCkpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSB0aGlzLnJhbmdlO1xuICAgICAgICBpZiAoY3VycmVudCA+IHJhbmdlU3RhcnQgJiYgY3VycmVudCA8IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VTdGFydCkge1xuICAgICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IHJhbmdlRW5kKSB7XG4gICAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmluY2x1ZGVzKGN1cnJlbnQpKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYmVmb3JlU2hvdykge1xuICAgICAgICB0aGlzLnBlcmZvcm1CZWZvcmVIb29rKGVsLCBjdXJyZW50LCBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgdmlldyBVSSBieSBhcHBseWluZyB0aGUgY2hhbmdlcyBvZiBzZWxlY3RlZCBhbmQgZm9jdXNlZCBpdGVtc1xuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IFtyYW5nZVN0YXJ0LCByYW5nZUVuZF0gPSB0aGlzLnJhbmdlIHx8IFtdO1xuICAgIHRoaXMuZ3JpZFxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZSwgLnJhbmdlLXN0YXJ0LCAucmFuZ2UtZW5kLCAuc2VsZWN0ZWQsIC5mb2N1c2VkJylcbiAgICAgIC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZScsICdyYW5nZS1zdGFydCcsICdyYW5nZS1lbmQnLCAnc2VsZWN0ZWQnLCAnZm9jdXNlZCcpO1xuICAgICAgfSk7XG4gICAgQXJyYXkuZnJvbSh0aGlzLmdyaWQuY2hpbGRyZW4pLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gTnVtYmVyKGVsLnRleHRDb250ZW50KTtcbiAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjdXJyZW50ID4gcmFuZ2VTdGFydCAmJiBjdXJyZW50IDwgcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50ID09PSByYW5nZVN0YXJ0KSB7XG4gICAgICAgIGNsYXNzTGlzdC5hZGQoJ3JhbmdlLXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudCA9PT0gcmFuZ2VFbmQpIHtcbiAgICAgICAgY2xhc3NMaXN0LmFkZCgncmFuZ2UtZW5kJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50KSkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnQgPT09IHRoaXMuZm9jdXNlZCkge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIHZpZXcgVUkgYnkgYXBwbHlpbmcgdGhlIGNoYW5nZSBvZiBmb2N1c2VkIGl0ZW1cbiAgcmVmcmVzaEZvY3VzKCkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgodGhpcy5mb2N1c2VkIC0gdGhpcy5zdGFydCkgLyB0aGlzLnN0ZXApO1xuICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9jdXNlZCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgfSk7XG4gICAgdGhpcy5ncmlkLmNoaWxkcmVuW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkJyk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIFNPTElELVxuLy8gUyAtIFNJTkdVRSBSRVNQT05TSUJJTElUWVxuLy8gTyAtIE9QRU4vQ0xPU0VEXG4vLyBMIC0gTElTS09WIFNVQlNUSVRVVElPTiBQUklOQ0lQTEVcbi8vIEkgLSBJTlRFUkZBQ0UgU0VHUkVHQVRJT05cbi8vIEQgLSBERVBFTkRFTkNZIElOVkVSU0lPTlxuLy8gRFJZIC0gRE9OVCBSRVBFQVQgWU9VUlNFTEZcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgaXNWYWxpZCBmcm9tICdkYXRlLWZucy9pc1ZhbGlkJztcbi8vIGltcG9ydCBpc1Bhc3QgZnJvbSAnZGF0ZS1mbnMvaXNQYXN0JztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3ZhbmlsbGFqcy1kYXRlcGlja2VyL0RhdGVwaWNrZXInO1xuLy8gaW1wb3J0IHsga2EgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuXG5jb25zdCBub3Rlc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubkZvcm1XcmFwcGVyJyk7XG5jb25zdCBwcm9qc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucEZvcm1XcmFwcGVyJyk7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90ZXNCdG4nKTtcbmNvbnN0IHByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvakJ0bicpO1xuY29uc3QgbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbkZvcm0nKTtcbmNvbnN0IHBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BGb3JtJyk7XG5sZXQgY3VyckNhcmRDb250YWluZXI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgZGF0ZXBpY2tlciA9IG5ldyBEYXRlcGlja2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyksIHtcbiAgICBhdXRvaGlkZTogdHJ1ZSxcbiAgICBmb3JtYXQ6ICdkZC9tbS95eXl5J1xufSk7XG5cbmZ1bmN0aW9uIHNob3dOb3Rlc0Zvcm0gKCkge1xuICAgIGF0dGFjaFByb2pzKHBhZ2VEYXRhLmdldFByb2pzKCkpO1xuICAgIG5vdGVzRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Rm9ybScpO1xuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gc2hvd1Byb2pGb3JtICgpIHtcbiAgICBwcm9qc0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd0Zvcm0nKTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFByb2pzIChwcm9qT2JqVmFsdWVzKSB7XG4gICAgY29uc3QgcHJvalNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2pTZWxlY3QnKTtcbiAgICBjbGVhckRvbShwcm9qU2VsZWN0b3IpO1xuICAgIGxldCBwcm9qRG9tVmFsdWVzID0gbWFrZURvbU9iamVjdC5tYWtlT3B0aW9ucyhwcm9qT2JqVmFsdWVzKTtcbiAgICBwcm9qRG9tVmFsdWVzLmZvckVhY2goZG9tID0+IHByb2pTZWxlY3Rvci5hcHBlbmRDaGlsZChkb20pKTtcbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGFkZE5vdGUgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpKTtcblxuICAgIHBhZ2VEYXRhLmFkZE5vdGUoZGF0YSlcbiAgICAgIC50aGVuKG1ha2VEb21PYmplY3QudXBkYXRlUHJvalRhYkVsZSk7XG5cbiAgICBpZiAoY3VyckNhcmRDb250YWluZXIgPT09IGRhdGEucHJvaikgc2hvd1Byb2plY3ROb3RlcyhwYWdlRGF0YS5nZXRQcm9qZWN0KGRhdGEucHJvaikpO1xuXG4gICAgbm90ZXNGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dGb3JtJyk7XG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0IChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAocGFnZURhdGEuZHVwbGljYXRlUHJvaihldmVudC50YXJnZXQubmFtZS52YWx1ZSkpIHtcbiAgICAgICAgcHJvanNGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dGb3JtJyk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvalNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgbGV0IGRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCkpO1xuXG4gICAgcGFnZURhdGEuYWRkUHJvaihkYXRhKVxuICAgICAgLnRoZW4oYWRkVG9QYWdlKHByb2pTaWRlYmFyLCBtYWtlRG9tT2JqZWN0Lm1ha2VQcm9qVGFiRWxlKGRhdGEubmFtZSkpKVxuXG4gICAgcHJvanNGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3dGb3JtJyk7XG4gICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4gICAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBhZGRUb1BhZ2UgKGNvbnRhaW5lciwgLi4uY2hpbGROb2Rlcykge1xuICAgIHJldHVybiBjaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSkpO1xufVxuXG5jb25zdCBwYWdlRGF0YSA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzRGF0YSA9IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgdG9Eb3M6IFtdLFxuICAgICAgICAgICAgaWQ6IDBcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IG5vdGVJZCA9IDA7XG4gICAgbGV0IHByb2pJZCA9IDE7XG5cbiAgICBjb25zdCBhZGROb3RlID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKHByb2plY3RzRGF0YVtpdGVtLnByb2pdKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kYXRhSWQgPSBub3RlSWQ7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNEYXRhW2l0ZW0ucHJval0udG9Eb3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBub3RlSWQrKztcbiAgICAgICAgICAgICAgICByZXNvbHZlKGl0ZW0ucHJvailcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmVqZWN0KCdFcnJvcjogcHJvamVjdCBub3QgZm91bmQnKVxuICAgICAgICB9KVxuXG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFByb2ogPSAocHJvaikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYocHJvamVjdHNEYXRhW3Byb2oubmFtZV0pIHJlamVjdCgnUHJvamVjdCBhbHJlYWR5IG9uIHBhZ2UnKVxuXG4gICAgICAgICAgICBwcm9qZWN0c0RhdGFbcHJvai5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qLm5hbWUsXG4gICAgICAgICAgICAgICAgdG9Eb3M6IFtdLFxuICAgICAgICAgICAgICAgIGlkOiBwcm9qSWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwcm9qSWQrKztcbiAgICAgICAgICAgIHJlc29sdmUocHJvai5uYW1lKVxuICAgICAgICB9KVxuXG5cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJvanMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qTmFtZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IGluIHByb2plY3RzRGF0YSkge1xuICAgICAgICAgICAgcHJvak5hbWVzLnB1c2gocHJvamVjdHNEYXRhW3Byb2plY3RdLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qTmFtZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByb2pOb3RlcyA9IChwcm9qKSA9PiBwcm9qZWN0c0RhdGFbcHJval0udG9Eb3M7XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2opID0+IHByb2plY3RzRGF0YVtwcm9qXTtcblxuICAgIGNvbnN0IGR1cGxpY2F0ZVByb2ogPSAocHJvaikgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHNEYXRhW3Byb2pdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vYWRkIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB7YWRkTm90ZSwgYWRkUHJvaiwgZ2V0UHJvanMsIGdldFByb2pOb3RlcywgZHVwbGljYXRlUHJvaiwgZ2V0UHJvamVjdH07XG59KSgpO1xuXG5jb25zdCBtYWtlRG9tT2JqZWN0ID0gKCgpID0+IHtcbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IG1ha2VOb3RlID0gKHt0aXRsZSwgZGVzYywgZGF0ZSwgcHJpbywgZGF0YUlkfSkgPT4ge1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBjYXJkJHtkYXRhSWR9YCk7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZFRpdGxlJyk7XG4gICAgICAgIHQuaW5uZXJUZXh0ID0gYCR7dGl0bGV9YDtcblxuICAgICAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FyZERlc2MnKTtcbiAgICAgICAgZC5pbm5lclRleHQgPSBgJHtkZXNjfWA7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGNhcmREYXRlYCk7XG4gICAgICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYCR7ZGF0ZX1gO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhcmRQcmlvJyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IGAke3ByaW99IHByaW9yaXR5YDtcbiAgICAgICAgXG4gICAgICAgIGFkZFRvUGFnZShub2RlLCB0LCBkLCBkdWVEYXRlLCBwcmlvcml0eSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VPcHRpb25zID0gKHZhbHVlcykgPT4ge1xuICAgICAgICBsZXQgZG9tSXRlbXMgPSB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGxldCBkb21WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgZG9tVmFsdWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgICAgICAgIGRvbVZhbHVlLmlubmVyVGV4dCA9IGNhcGl0YWxpemVkKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBkb21WYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb21JdGVtcztcbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZVByb2pUYWJFbGUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgbGV0IHNpZGViYXJFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHNpZGViYXJFbGUuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Byb2plY3ROYW1lfWApO1xuICAgICAgICBzaWRlYmFyRWxlLmlubmVyVGV4dCA9IGAke3Byb2plY3ROYW1lfS0tLS0tLS0tJHtwYWdlRGF0YS5nZXRQcm9qTm90ZXMocHJvamVjdE5hbWUpLmxlbmd0aH1gO1xuICAgICAgICBzaWRlYmFyRWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0UHJvamVjdE5vdGVzKTtcbiAgICAgICAgcmV0dXJuIHNpZGViYXJFbGU7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVByb2pUYWJFbGUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgbGV0IHNpZGViYXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwcm9qZWN0TmFtZX1gKTtcbiAgICAgICAgc2lkZWJhckVsZS5pbm5lclRleHQgPSBgJHtwcm9qZWN0TmFtZX0tLS0tLS0tLSR7cGFnZURhdGEuZ2V0UHJvak5vdGVzKHByb2plY3ROYW1lKS5sZW5ndGh9YDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0U2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBwcm9qIG9mIHBhZ2VEYXRhLmdldFByb2pzKCkpIHtcbiAgICAgICAgICAgIGFkZFRvUGFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLCBtYWtlUHJvalRhYkVsZShwcm9qKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICByZXR1cm4ge21ha2VOb3RlLCBtYWtlT3B0aW9ucywgbWFrZVByb2pUYWJFbGUsIHVwZGF0ZVByb2pUYWJFbGUsIGluaXRTaWRlYmFyfTtcbn0pKCk7XG5cbi8vIGZ1bmN0aW9uIGlzRm9ybVZhbGlkICh7dGl0bGUsIGRlc2MsIGR1ZUR9KSB7XG4vLyAgICAgbGV0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IGR1ZUQuc3BsaXQoJy8nKTtcbi8vICAgICBtb250aC0tO1xuLy8gICAgIC8vMjM6NTk6NTkgdG8gYmUgYWJsZSB0byBkZWZpbmUgbm90ZSBmb3Igc2FtZSBkYXlcbi8vICAgICBsZXQgZkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAsIGRheSwgMjMsIDU5LCA1OSk7XG5cbi8vICAgICBpZih0aXRsZSA9PT0gJycpIHtcbi8vICAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG4vLyAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZhaWxUaXRsZScpO1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfSBlbHNlIGlmIChkZXNjID09PSAnJykge1xuLy8gICAgICAgICBsZXQgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjJyk7XG4vLyAgICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZmFpbERlc2MnKTtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQoZkRhdGUpKSB7XG4vLyAgICAgICAgIGxldCBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZUQnKTtcbi8vICAgICAgICAgZC5jbGFzc0xpc3QucmVtb3ZlKCdwYXN0RGF0ZScpO1xuLy8gICAgICAgICBkLmNsYXNzTGlzdC5hZGQoJ2JsYW5rRGF0ZScpO1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfSBlbHNlIGlmIChpc1Bhc3QoZkRhdGUpKSB7XG4vLyAgICAgICAgIGxldCBkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZUQnKTtcbi8vICAgICAgICAgZC5jbGFzc0xpc3QucmVtb3ZlKCdibGFua0RhdGUnKTtcbi8vICAgICAgICAgZC5jbGFzc0xpc3QuYWRkKCdwYXN0RGF0ZScpO1xuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHRydWU7XG4vLyB9XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVkICh2YWx1ZSkge1xuICAgIGxldCBzdHIgPSB2YWx1ZTtcbiAgICBsZXQgc3RyMiA9IHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgICByZXR1cm4gc3RyMjtcbn1cblxuZnVuY3Rpb24gY2xlYXJEb20gKGVsZW1lbnQpIHtcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdE5vdGVzIChldmVudCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgY3VyckNhcmRDb250YWluZXIgPSBwcm9qZWN0O1xuICAgIHNob3dQcm9qZWN0Tm90ZXMocGFnZURhdGEuZ2V0UHJvamVjdChwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0Tm90ZXMgKHtuYW1lLCB0b0Rvc30pIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvakNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qQ29udC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bmFtZX1Db250YWluZXJgKTtcbiAgICBwcm9qQ29udC5pbm5lclRleHQgPSBgJHtuYW1lfSBQcm9qZWN0YDtcbiAgICB0b0Rvcy5mb3JFYWNoKG9iaiA9PiBhZGRUb1BhZ2UocHJvakNvbnQsIG1ha2VEb21PYmplY3QubWFrZU5vdGUob2JqKSkpO1xuICAgIGNsZWFyRG9tKGNvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pDb250KTtcblxufVxuXG5uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROb3RlKTtcbnBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFByb2plY3QpXG5wcm9qQnRuLm9uY2xpY2sgPSBzaG93UHJvakZvcm07XG5hZGRCdG4ub25jbGljayA9IHNob3dOb3Rlc0Zvcm07XG5cbm1ha2VEb21PYmplY3QuaW5pdFNpZGViYXIoKTtcbnNob3dQcm9qZWN0Tm90ZXMocGFnZURhdGEuZ2V0UHJvamVjdCgnZGVmYXVsdCcpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==