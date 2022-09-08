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
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\koorz\\\\Documents\\\\Workspace\\\\Indecision\\\\node_modules\\\\react\\\\react.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AddOption = __webpack_require__(185);\n\nvar _AddOption2 = _interopRequireDefault(_AddOption);\n\nvar _Header = __webpack_require__(186);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Action = __webpack_require__(187);\n\nvar _Action2 = _interopRequireDefault(_Action);\n\nvar _Options = __webpack_require__(188);\n\nvar _Options2 = _interopRequireDefault(_Options);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// https://reactjs.org/docs/events.html for all React events\n\nvar IndecisionApp = function (_React$Component) {\n    _inherits(IndecisionApp, _React$Component);\n\n    function IndecisionApp(props) {\n        _classCallCheck(this, IndecisionApp);\n\n        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));\n\n        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);\n        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);\n        _this.handlePick = _this.handlePick.bind(_this);\n        _this.addOptionHandler = _this.addOption.bind(_this);\n        _this.state = {\n            options: []\n        };\n        return _this;\n    }\n\n    _createClass(IndecisionApp, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            try {\n                var jsonData = localStorage.getItem(\"options\");\n                var options = JSON.parse(jsonData);\n\n                if (options) {\n                    this.setState(function () {\n                        return { options: options };\n                    });\n                }\n            } catch (error) {\n                // Do nothing            \n            }\n        }\n    }, {\n        key: 'componentDidUpdate',\n        value: function componentDidUpdate(prevProps, prevState) {\n            if (prevState.options.length != this.state.options.length) {\n                var jsonData = JSON.stringify(this.state.options);\n                localStorage.setItem(\"options\", jsonData);\n            }\n        }\n    }, {\n        key: 'handleDeleteOptions',\n        value: function handleDeleteOptions() {\n            this.setState(function () {\n                return { options: [] };\n            });\n        }\n    }, {\n        key: 'handleDeleteOption',\n        value: function handleDeleteOption(option) {\n            this.setState(function (prevState) {\n                return { options: prevState.options.filter(function (_) {\n                        return _ !== option;\n                    }) };\n            });\n        }\n    }, {\n        key: 'handlePick',\n        value: function handlePick() {\n            var randomIndex = Math.floor(Math.random() * this.state.options.length);\n            var option = this.state.options[randomIndex];\n            this.setState(function () {\n                return { optionPicked: option };\n            }); // not necesary to remember \n\n            alert(option);\n        }\n    }, {\n        key: 'addOption',\n        value: function addOption(option) {\n            if (!option) {\n                return \"type valid value\";\n            } else if (this.state.options.indexOf(option) > -1) {\n                return 'type a unique value';\n            }\n\n            // do not use push -> will manipulate original array -> not what you want to do\n            this.setState(function (prevState) {\n                return { options: prevState.options.concat(option) };\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var title = \"Indecision\";\n            var subTitle = \"Put your life in the hands of dees numbercruncher...\";\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Header2.default, { title: title, subTitle: subTitle }),\n                _react2.default.createElement(_Action2.default, { hasOptions: this.state.options.length > 0, optionPicked: this.handlePick }),\n                _react2.default.createElement(_Options2.default, {\n                    options: this.state.options,\n                    handleDeleteOptions: this.handleDeleteOptions,\n                    handleDeleteOption: this.handleDeleteOption\n                }),\n                _react2.default.createElement(_AddOption2.default, {\n                    options: this.state.options,\n                    handleAddOption: this.addOptionHandler\n                })\n            );\n        }\n    }]);\n\n    return IndecisionApp;\n}(_react2.default.Component);\n\nexports.default = IndecisionApp;\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0luZGVjaXNpb25BcHAuanM/MWQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQWRkT3B0aW9uIGZyb20gJy4vQWRkT3B0aW9uJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xyXG5cclxuLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2V2ZW50cy5odG1sIGZvciBhbGwgUmVhY3QgZXZlbnRzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRlY2lzaW9uQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlT3B0aW9ucyA9IHRoaXMuaGFuZGxlRGVsZXRlT3B0aW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlT3B0aW9uID0gdGhpcy5oYW5kbGVEZWxldGVPcHRpb24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVBpY2sgPSB0aGlzLmhhbmRsZVBpY2suYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZE9wdGlvbkhhbmRsZXIgPSB0aGlzLmFkZE9wdGlvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3B0aW9uc1wiKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IEpTT04ucGFyc2UoanNvbkRhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtvcHRpb25zfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90aGluZyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAocHJldlN0YXRlLm9wdGlvbnMubGVuZ3RoICE9IHRoaXMuc3RhdGUub3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm9wdGlvbnNcIiwganNvbkRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVEZWxldGVPcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtvcHRpb25zOiBbXX0pKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRGVsZXRlT3B0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+XHJcbiAgICAgICAgICAgICh7b3B0aW9uczogcHJldlN0YXRlLm9wdGlvbnMuZmlsdGVyKF8gPT4gXyAhPT0gb3B0aW9uKX0pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5zdGF0ZS5vcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuc3RhdGUub3B0aW9uc1tyYW5kb21JbmRleF07XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe29wdGlvblBpY2tlZDogb3B0aW9ufSkpOyAvLyBub3QgbmVjZXNhcnkgdG8gcmVtZW1iZXIgXHJcblxyXG4gICAgICAgIGFsZXJ0KG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT3B0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIGlmICghb3B0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInR5cGUgdmFsaWQgdmFsdWVcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUub3B0aW9ucy5pbmRleE9mKG9wdGlvbikgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3R5cGUgYSB1bmlxdWUgdmFsdWUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZG8gbm90IHVzZSBwdXNoIC0+IHdpbGwgbWFuaXB1bGF0ZSBvcmlnaW5hbCBhcnJheSAtPiBub3Qgd2hhdCB5b3Ugd2FudCB0byBkb1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtvcHRpb25zOiBwcmV2U3RhdGUub3B0aW9ucy5jb25jYXQob3B0aW9uKX0pKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IFwiSW5kZWNpc2lvblwiO1xyXG4gICAgICAgIGNvbnN0IHN1YlRpdGxlID0gXCJQdXQgeW91ciBsaWZlIGluIHRoZSBoYW5kcyBvZiBkZWVzIG51bWJlcmNydW5jaGVyLi4uXCI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXt0aXRsZX0gc3ViVGl0bGU9e3N1YlRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEFjdGlvbiBoYXNPcHRpb25zPXt0aGlzLnN0YXRlLm9wdGlvbnMubGVuZ3RoID4gMH0gb3B0aW9uUGlja2VkPXt0aGlzLmhhbmRsZVBpY2t9IC8+XHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGUub3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVPcHRpb25zPXt0aGlzLmhhbmRsZURlbGV0ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlT3B0aW9uPXt0aGlzLmhhbmRsZURlbGV0ZU9wdGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QWRkT3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkZE9wdGlvbj17dGhpcy5hZGRPcHRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSW5kZWNpc2lvbkFwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTkE7QUFTQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFjQTs7OztBQW5GQTtBQUNBO0FBREE7QUFvRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///184\n");

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AddOption = function (_React$Component) {\n    _inherits(AddOption, _React$Component);\n\n    function AddOption(props) {\n        _classCallCheck(this, AddOption);\n\n        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));\n\n        _this.handleAddOption = _this.handleSubmit.bind(_this);\n        _this.state = {\n            error: undefined\n        };\n        return _this;\n    }\n\n    _createClass(AddOption, [{\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            e.preventDefault();\n\n            var option = e.target.elements.option.value.trim();\n            var error = this.props.handleAddOption(option);\n\n            this.setState(function () {\n                return { error: error };\n            });\n\n            if (!error) e.target.elements.option.value = '';\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: this.handleAddOption },\n                    this.state.error && _react2.default.createElement(\n                        'p',\n                        null,\n                        this.state.error\n                    ),\n                    _react2.default.createElement('input', { type: 'text', name: 'option', placeholder: 'type an option' }),\n                    _react2.default.createElement(\n                        'button',\n                        null,\n                        'Add Option'\n                    )\n                )\n            );\n        }\n    }]);\n\n    return AddOption;\n}(_react2.default.Component);\n\nexports.default = AddOption;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FkZE9wdGlvbi5qcz85OGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVBZGRPcHRpb24gPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBvcHRpb24gPSBlLnRhcmdldC5lbGVtZW50cy5vcHRpb24udmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5wcm9wcy5oYW5kbGVBZGRPcHRpb24ob3B0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe2Vycm9yfSkpO1xyXG5cclxuICAgICAgICBpZiAoIWVycm9yKSBlLnRhcmdldC5lbGVtZW50cy5vcHRpb24udmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUFkZE9wdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgPHA+e3RoaXMuc3RhdGUuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nb3B0aW9uJyBwbGFjZWhvbGRlcj0ndHlwZSBhbiBvcHRpb24nIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+QWRkIE9wdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0FkZE9wdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVNBOzs7O0FBL0JBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///185\n");

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            \"h1\",\n            null,\n            props.title\n        ),\n        props.subTitle && _react2.default.createElement(\n            \"h2\",\n            null,\n            props.subTitle\n        )\n    );\n};\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz82ZjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdWJUaXRsZSAmJiA8aDI+e3Byb3BzLnN1YlRpdGxlfTwvaDI+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///186\n");

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Action = function Action(props) {\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n            \"button\",\n            {\n                onClick: props.optionPicked,\n                disabled: !props.hasOptions\n            },\n            \" What should I do?\"\n        )\n    );\n};\n\nexports.default = Action;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FjdGlvbi5qcz9lZTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vcHRpb25QaWNrZWR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmhhc09wdGlvbnN9XHJcbiAgICAgICAgICAgID4gV2hhdCBzaG91bGQgSSBkbz9cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BY3Rpb24uanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBREE7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Option = __webpack_require__(189);\n\nvar _Option2 = _interopRequireDefault(_Option);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Options = function Options(props) {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'button',\n            { onClick: props.handleDeleteOptions },\n            'Remove all'\n        ),\n        props.options.length === 0 && _react2.default.createElement(\n            'p',\n            null,\n            'Please add option'\n        ),\n        _react2.default.createElement(\n            'ol',\n            null,\n            props.options.map(function (option) {\n                return _react2.default.createElement(_Option2.default, {\n                    key: option,\n                    optionText: option,\n                    handleDeleteOption: props.handleDeleteOption\n                });\n            })\n        )\n    );\n};\n\nexports.default = Options;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL09wdGlvbnMuanM/MjkyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcclxuXHJcbmNvbnN0IE9wdGlvbnMgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlRGVsZXRlT3B0aW9uc30+UmVtb3ZlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7cHJvcHMub3B0aW9ucy5sZW5ndGggPT09IDAgJiYgPHA+UGxlYXNlIGFkZCBvcHRpb248L3A+fVxyXG4gICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblRleHQ9e29wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZU9wdGlvbj17cHJvcHMuaGFuZGxlRGVsZXRlT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvT3B0aW9ucy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFGQTtBQUhBO0FBZ0JBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///188\n");

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Option = function Option(props) {\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        props.optionText,\n        _react2.default.createElement(\n            \"button\",\n            {\n                onClick: function onClick(e) {\n                    props.handleDeleteOption(props.optionText);\n                }\n            },\n            \"remove\"\n        )\n    );\n};\n\nexports.default = Option;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL09wdGlvbi5qcz8zMmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE9wdGlvbiA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLm9wdGlvblRleHR9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlRGVsZXRlT3B0aW9uKHByb3BzLm9wdGlvblRleHQpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL09wdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBRkE7QUFZQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///189\n");

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(98);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _IndecisionApp = __webpack_require__(184);\n\nvar _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById(\"app\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwcC5qcz9iZDljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBJbmRlY2lzaW9uQXBwIGZyb20gJy4vY29tcG9uZW50cy9JbmRlY2lzaW9uQXBwJztcblxuUmVhY3RET00ucmVuZGVyKDxJbmRlY2lzaW9uQXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///82\n");

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

"use strict";
eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\koorz\\\\Documents\\\\Workspace\\\\Indecision\\\\node_modules\\\\react-dom\\\\index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98\n");

/***/ })

/******/ });