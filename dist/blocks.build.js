/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bs-last-articles-zig-zag\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar TextControl = wp.components.TextControl;\n\nregisterBlockType('bonseo/block-bs-last-articles-zig-zag', {\n\ttitle: __('Last Articles Zig-Zag'),\n\ticon: 'editor-ol',\n\tcategory: 'bonseo-blocks',\n\tkeywords: [__('bs-last-articles-zig-zag'), __('BonSeo'), __('BonSeo Block')],\n\tedit: function edit(_ref) {\n\t\tvar posts = _ref.posts,\n\t\t    className = _ref.className,\n\t\t    attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t' \\xDAltimos Posts ZigZag'\n\t\t\t),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__title',\n\t\t\t\tlabel: __('Encabezado del bloque:'),\n\t\t\t\tvalue: attributes.content != undefined ? attributes.content : 'Últimos Artículos',\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__number',\n\t\t\t\tlabel: __('Entradas a mostrar:'),\n\t\t\t\tvalue: attributes.max_posts != undefined ? attributes.max_posts : 5,\n\t\t\t\tonChange: function onChange(max_posts) {\n\t\t\t\t\treturn setAttributes({ max_posts: max_posts });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__cta',\n\t\t\t\tlabel: __('Boton CTA'),\n\t\t\t\tvalue: attributes.cta != undefined ? attributes.cta : __('Más'),\n\t\t\t\tonChange: function onChange(cta) {\n\t\t\t\t\treturn setAttributes({ cta: cta });\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(TextControl, {\n\t\t\t\tclassName: className + '__words',\n\t\t\t\tlabel: __('Palabras'),\n\t\t\t\tvalue: attributes.words != undefined ? attributes.words : 40,\n\t\t\t\tonChange: function onChange(words) {\n\t\t\t\t\treturn setAttributes({ words: words });\n\t\t\t\t}\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save() {\n\t\treturn null;\n\t}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJzLWxhc3QtYXJ0aWNsZXMtemlnLXphZ1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIFRleHRDb250cm9sID0gd3AuY29tcG9uZW50cy5UZXh0Q29udHJvbDtcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2JvbnNlby9ibG9jay1icy1sYXN0LWFydGljbGVzLXppZy16YWcnLCB7XG5cdHRpdGxlOiBfXygnTGFzdCBBcnRpY2xlcyBaaWctWmFnJyksXG5cdGljb246ICdlZGl0b3Itb2wnLFxuXHRjYXRlZ29yeTogJ2JvbnNlby1ibG9ja3MnLFxuXHRrZXl3b3JkczogW19fKCdicy1sYXN0LWFydGljbGVzLXppZy16YWcnKSwgX18oJ0JvblNlbycpLCBfXygnQm9uU2VvIEJsb2NrJyldLFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgcG9zdHMgPSBfcmVmLnBvc3RzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCcgXFx4REFsdGltb3MgUG9zdHMgWmlnWmFnJ1xuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRjbGFzc05hbWU6IGNsYXNzTmFtZSArICdfX3RpdGxlJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdFbmNhYmV6YWRvIGRlbCBibG9xdWU6JyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmNvbnRlbnQgIT0gdW5kZWZpbmVkID8gYXR0cmlidXRlcy5jb250ZW50IDogJ8OabHRpbW9zIEFydMOtY3Vsb3MnLFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUgKyAnX19udW1iZXInLFxuXHRcdFx0XHRsYWJlbDogX18oJ0VudHJhZGFzIGEgbW9zdHJhcjonKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMubWF4X3Bvc3RzICE9IHVuZGVmaW5lZCA/IGF0dHJpYnV0ZXMubWF4X3Bvc3RzIDogNSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG1heF9wb3N0cykge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgbWF4X3Bvc3RzOiBtYXhfcG9zdHMgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fY3RhJyxcblx0XHRcdFx0bGFiZWw6IF9fKCdCb3RvbiBDVEEnKSxcblx0XHRcdFx0dmFsdWU6IGF0dHJpYnV0ZXMuY3RhICE9IHVuZGVmaW5lZCA/IGF0dHJpYnV0ZXMuY3RhIDogX18oJ03DoXMnKSxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGN0YSkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY3RhOiBjdGEgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdGNsYXNzTmFtZTogY2xhc3NOYW1lICsgJ19fd29yZHMnLFxuXHRcdFx0XHRsYWJlbDogX18oJ1BhbGFicmFzJyksXG5cdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLndvcmRzICE9IHVuZGVmaW5lZCA/IGF0dHJpYnV0ZXMud29yZHMgOiA0MCxcblx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHdvcmRzKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyB3b3Jkczogd29yZHMgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);