/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 引入样式表
	__webpack_require__(2);

	// 引入组件
	__webpack_require__(6);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/.0.14.5@css-loader/index.js!./../node_modules/.1.0.4@sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/.0.14.5@css-loader/index.js!./../node_modules/.1.0.4@sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "body {\n  background: #f5f5f5; }\n\nheader h1 {\n  text-align: center;\n  text-decoration: underline; }\n\n.container {\n  width: 760px;\n  margin: 0 auto; }\n\na {\n  text-decoration: none; }\n\n.clear {\n  clear: both; }\n  .clear:after {\n    display: block;\n    content: \"\";\n    clear: both; }\n\n.hidden_list {\n  text-decoration: line-through; }\n\n.dn {\n  display: none; }\n\nul, li {\n  list-style: none; }\n\n.container {\n  max-width: 750px;\n  margin: 0 auto;\n  padding-top: 50px;\n  background: url(\"/img/bg.jpg\") no-repeat; }\n\n#remind {\n  border-radius: 5px;\n  padding: 10px 10px 0;\n  border: 1px #ccc solid; }\n\n.head {\n  position: relative; }\n  .head h2 {\n    margin: 0;\n    padding-right: 100px;\n    border-bottom: 1px #ccc solid;\n    height: 60px;\n    line-height: 60px;\n    color: #cc73e1; }\n  .head .right {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100px;\n    text-align: center; }\n  .head .num {\n    font-size: 24px;\n    color: #cc73e1; }\n  .head .edit {\n    display: block;\n    color: blue;\n    font-size: 14px; }\n\n.main {\n  overflow: hidden; }\n  .main ul {\n    padding-left: 20px;\n    margin: 0; }\n  .main li {\n    position: relative;\n    padding: 10px 0;\n    border-bottom: 1px #ccc solid; }\n  .main .inp {\n    position: absolute;\n    left: -20px;\n    top: 50%;\n    margin-top: -8px; }\n  .main .text {\n    line-height: 20px;\n    font-size: 14px;\n    color: #000;\n    word-break: break-all; }\n  .main .entry_li {\n    padding: 0; }\n  .main .entry_inp {\n    padding: 10px 0;\n    border: none;\n    width: 100%;\n    background-color: #f5f5f5; }\n\n.footer {\n  padding: 10px 0;\n  border-top: 1px #ccc dashed; }\n  .footer a {\n    display: block;\n    font-size: 14px;\n    line-height: 20px;\n    width: 100%;\n    text-align: center;\n    color: blue; }\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _RemindHeaderJs = __webpack_require__(8);

	var _RemindHeaderJs2 = _interopRequireDefault(_RemindHeaderJs);

	var _RemindMainJs = __webpack_require__(9);

	var _RemindMainJs2 = _interopRequireDefault(_RemindMainJs);

	var _RemindFooterJs = __webpack_require__(10);

	var _RemindFooterJs2 = _interopRequireDefault(_RemindFooterJs);

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
	        this.state = {
	            isShowAll: true, //是否显示所有的提醒事项
	            remind: [{
	                text: "456",
	                isDone: false
	            }, {
	                text: "789",
	                isDone: true
	            }]
	        };
	    }

	    //改变任务状态,

	    _createClass(App, [{
	        key: 'changeRemindState',
	        value: function changeRemindState(index, isDone) {
	            this.state.remind[index].isDone = isDone;
	            this.setState(this.state);
	        }

	        //添加新的提醒项
	    }, {
	        key: 'addRemindItem',
	        value: function addRemindItem(newRemindItem) {
	            this.state.remind.push(newRemindItem);
	            this.setState(this.state);
	        }

	        //显示/隐藏 所有的提醒事项
	    }, {
	        key: 'showAll',
	        value: function showAll(e) {
	            this.state.isShowAll = !this.state.isShowAll;
	            this.setState(this.state);
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var props = {
	                remindAllCount: this.state.remind.length || 0,
	                remindCount: (this.state.remind && this.state.remind.filter(function (remind) {
	                    return remind.isDone;
	                })).length || 0
	            };

	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_RemindHeaderJs2['default'], props),
	                _react2['default'].createElement(_RemindMainJs2['default'], { remind: this.state, changeRemindState: this.changeRemindState.bind(this),
	                    addRemindItem: this.addRemindItem.bind(this) }),
	                _react2['default'].createElement(_RemindFooterJs2['default'], { isShowAll: this.state.isShowAll, showAll: this.showAll.bind(this) })
	            );
	        }
	    }]);

	    return App;
	})(_react2['default'].Component);

	ReactDOM.render(_react2['default'].createElement(App, null), document.getElementById('remind'));

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var RemindHeader = (function (_React$Component) {
	    _inherits(RemindHeader, _React$Component);

	    function RemindHeader() {
	        _classCallCheck(this, RemindHeader);

	        _get(Object.getPrototypeOf(RemindHeader.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(RemindHeader, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'head clear' },
	                _react2['default'].createElement(
	                    'h2',
	                    null,
	                    '提醒事项'
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'right' },
	                    _react2['default'].createElement(
	                        'span',
	                        { className: 'num' },
	                        this.props.remindCount
	                    )
	                )
	            );
	        }
	    }]);

	    return RemindHeader;
	})(_react2['default'].Component);

	exports['default'] = RemindHeader;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var ReminMain = (function (_React$Component) {
	    _inherits(ReminMain, _React$Component);

	    function ReminMain() {
	        _classCallCheck(this, ReminMain);

	        _get(Object.getPrototypeOf(ReminMain.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(ReminMain, [{
	        key: 'handleChange',

	        //checkbox 勾选
	        value: function handleChange(e) {
	            var isDone = e.target.checked;
	            var index = e.target.getAttribute("data-index");
	            this.props.changeRemindState(index, isDone);
	        }

	        // 输入框回车 添加数据
	    }, {
	        key: 'handleKeyUp',
	        value: function handleKeyUp(e) {
	            if (e.keyCode === 13) {
	                var v = e.target.value;
	                if (!v) return false;
	                var newRemindItem = {
	                    text: v, isDone: false
	                };
	                e.target.value = "";
	                this.props.addRemindItem(newRemindItem);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            return _react2['default'].createElement(
	                'div',
	                { className: 'main' },
	                _react2['default'].createElement(
	                    'ul',
	                    null,
	                    this.props.remind.remind.map(function (item, index) {
	                        var isShowAll = !_this.props.remind.isShowAll && item.isDone ? "dn" : "";
	                        var doneStyle = item.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
	                        return _react2['default'].createElement(
	                            'li',
	                            { key: index, className: isShowAll, style: doneStyle },
	                            _react2['default'].createElement('input', { className: 'inp ', type: 'checkbox', checked: item.isDone, onChange: _this.handleChange.bind(_this), 'data-index': index }),
	                            _react2['default'].createElement(
	                                'div',
	                                { className: 'text' },
	                                item.text
	                            )
	                        );
	                    }),
	                    _react2['default'].createElement(
	                        'li',
	                        { className: 'entry_li' },
	                        _react2['default'].createElement('input', { type: 'text', className: 'entry_inp', onKeyUp: this.handleKeyUp.bind(this), placeholder: '来添加一个提醒事项吧' })
	                    )
	                )
	            );
	        }
	    }]);

	    return ReminMain;
	})(_react2['default'].Component);

	exports['default'] = ReminMain;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var RemindFooter = (function (_React$Component) {
	    _inherits(RemindFooter, _React$Component);

	    function RemindFooter() {
	        _classCallCheck(this, RemindFooter);

	        _get(Object.getPrototypeOf(RemindFooter.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(RemindFooter, [{
	        key: 'render',
	        value: function render() {
	            var str = this.props.isShowAll ? "隐藏" : "显示";
	            return _react2['default'].createElement(
	                'div',
	                { className: 'footer' },
	                _react2['default'].createElement(
	                    'a',
	                    { href: 'javascript:;', onClick: this.props.showAll.bind(this), className: 'showbtn' },
	                    str,
	                    '已完成的项目'
	                )
	            );
	        }
	    }]);

	    return RemindFooter;
	})(_react2['default'].Component);

	exports['default'] = RemindFooter;
	module.exports = exports['default'];

/***/ }
/******/ ]);