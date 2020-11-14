module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FormLogin.js":
/*!*********************************!*\
  !*** ./components/FormLogin.js ***!
  \*********************************/
/*! exports provided: FormLogin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLogin", function() { return FormLogin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\components\\FormLogin.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  button: {
    textTransform: 'none',
    letterSpacing: 1.3,
    fontSize: 14,
    fontWeight: 400,
    marginTop: 10,
    backgroundColor: '#2ea44f',
    color: "white"
  },
  textField: {
    marginTop: 5,
    marginBottom: 11
  },
  inputRoot: {
    height: 1
  },
  label: {
    fontSize: 14,
    fontWeight: 600
  },
  titleLogin: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 300,
    letterSpacing: 1,
    fontSize: 19,
    marginTop: 50,
    marginBottom: 15
  },
  forgotPassword: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 500
  },
  newToWhoPlays: {
    cursor: 'pointer',
    fontSize: 14
  }
});
const FormLogin = () => {
  const classes = useStyles();
  const {
    0: campi,
    1: setCampi
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: ''
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  const handleChange = e => {
    setCampi(_objectSpread(_objectSpread({}, campi), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault(); //validateUser()

    router.push("/userLogged");
  };

  const validateUser = () => {//
  };

  const {
    email,
    password
  } = campi;
  const values = {
    email,
    password
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: "Enter details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: classes.titleLogin,
        children: "Sign in to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/logow.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 30
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#c5cbd3',
          padding: 25,
          borderRadius: 5
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: classes.label,
          children: "Username or email address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 81
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.textField,
          inputProps: {
            className: classes.inputRoot
          },
          required: true,
          variant: "outlined",
          name: "email",
          type: "email",
          value: campi.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          className: classes.label,
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 64
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
          className: classes.textField,
          inputProps: {
            className: classes.inputRoot
          },
          required: true,
          variant: "outlined",
          name: "password",
          type: "password",
          value: campi.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: classes.forgotPassword,
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
          fullWidth: true,
          type: "submit",
          className: classes.button,
          label: "Log in",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.newToWhoPlays,
        children: ["New to WhoPlays? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/Signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Create an account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 90
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 69
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }, undefined)]
  }, void 0, true);
};
/* harmony default export */ __webpack_exports__["default"] = (FormLogin);

/***/ }),

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: Login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormLogin */ "./components/FormLogin.js");

var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\pages\\Login.js";


const Login = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FormLogin__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 21
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl__1I65m",
	"headingXl": "utils_headingXl__1XecN",
	"headingLgB": "utils_headingLgB__2tB34",
	"headingLg": "utils_headingLg__de7p0",
	"headingMd": "utils_headingMd__3de6G",
	"headingSm": "utils_headingSm__3LFjQ",
	"headingXs": "utils_headingXs__zEz4R",
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm",
	"AppBar": "utils_AppBar__1evVj",
	"search": "utils_search__ORpAk",
	"follow": "utils_follow__Ld8Pw",
	"intro": "utils_intro__7q285",
	"blogContainer": "utils_blogContainer__hILj_",
	"poppins": "utils_poppins__G_hls",
	"container": "utils_container__2HOfz",
	"main": "utils_main__1GYxf",
	"userInfo": "utils_userInfo__37frC",
	"userInfoId": "utils_userInfoId__1gs44",
	"footer": "utils_footer__3d3Eo",
	"title": "utils_title__2w2XK",
	"description": "utils_description__17znU",
	"code": "utils_code__2OtYp",
	"grid": "utils_grid__MFe-L",
	"card": "utils_card__2Nj6o",
	"logo": "utils_logo__ZOFj-"
};


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3JtTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJidXR0b24iLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dEZpZWxkIiwibWFyZ2luQm90dG9tIiwiaW5wdXRSb290IiwiaGVpZ2h0IiwibGFiZWwiLCJ0aXRsZUxvZ2luIiwidGV4dEFsaWduIiwiZm9yZ290UGFzc3dvcmQiLCJuZXdUb1dob1BsYXlzIiwiY3Vyc29yIiwiRm9ybUxvZ2luIiwiY2xhc3NlcyIsImNhbXBpIiwic2V0Q2FtcGkiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidmFsaWRhdGVVc2VyIiwidmFsdWVzIiwic3R5bGVzIiwibWFpbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLFFBQU0sRUFBRTtBQUNOQyxpQkFBYSxFQUFDLE1BRFI7QUFFTkMsaUJBQWEsRUFBQyxHQUZSO0FBR05DLFlBQVEsRUFBQyxFQUhIO0FBSU5DLGNBQVUsRUFBQyxHQUpMO0FBS05D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QUFPLENBQUNuQixNQUhyQjtBQUlFLGVBQUssRUFBQyxRQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkEsZUEyQ0E7QUFBRyxpQkFBUyxFQUFFbUIsT0FBTyxDQUFDSCxhQUF0QjtBQUFBLHFEQUFzRCxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZIO0FBQUEsa0JBREw7QUFtREwsQ0E5RU07QUErRVFFLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUNBO0FBRU8sTUFBTXdCLEtBQUssR0FBRyxNQUFNO0FBRVgsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR2YsQ0FMTTtBQU1RQSxvRUFBZixFOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaENBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL0xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Mb2dpbi5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBidXR0b246IHtcclxuICAgIHRleHRUcmFuc2Zvcm06J25vbmUnLFxyXG4gICAgbGV0dGVyU3BhY2luZzoxLjMsXHJcbiAgICBmb250U2l6ZToxNCxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbWFyZ2luVG9wOjEwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJlYTQ0ZicsXHJcbiAgICBjb2xvcjpcIndoaXRlXCJcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgbWFyZ2luVG9wOjUsXHJcbiAgICBtYXJnaW5Cb3R0b206MTFcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgaGVpZ2h0OjEsXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZm9udFNpemU6MTQsXHJcbiAgICBmb250V2VpZ2h0OjYwMCxcclxuICB9LFxyXG4gIHRpdGxlTG9naW46IHtcclxuICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OjMwMCxcclxuICAgIGxldHRlclNwYWNpbmc6MSxcclxuICAgIGZvbnRTaXplOjE5LFxyXG4gICAgbWFyZ2luVG9wOjUwLFxyXG4gICAgbWFyZ2luQm90dG9tOjE1XHJcbiAgfSxcclxuICBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgY29sb3I6JyMwMzY2ZDYnLFxyXG4gICAgZm9udFNpemU6MTQsXHJcbiAgICBmb250V2VpZ2h0OiA1MDBcclxuICB9LFxyXG4gIG5ld1RvV2hvUGxheXM6IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgZm9udFNpemU6MTRcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW2NhbXBpLCBzZXRDYW1waV09IHVzZVN0YXRlKHtcclxuICAgICAgZW1haWw6JycsXHJcbiAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xyXG4gICAgICBzZXRDYW1waSh7IC4uLmNhbXBpLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAvL3ZhbGlkYXRlVXNlcigpXHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJMb2dnZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZVVzZXIgPSAoKSA9PiB7XHJcbiAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNhbXBpXHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7IGVtYWlsLCBwYXNzd29yZCB9XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QXBwQmFyIHRpdGxlPVwiRW50ZXIgZGV0YWlsc1wiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSA+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUxvZ2lufT5TaWduIGluIHRvPC9oMj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdy5wbmdcIj48L2ltZz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOicjYzVjYmQzJywgIHBhZGRpbmc6MjUsIGJvcmRlclJhZGl1czo1fX0+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+VXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzczwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuaW5wdXRSb290XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjYW1waS5lbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlBhc3N3b3JkPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pbnB1dFJvb3RcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhbXBpLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcmdvdFBhc3N3b3JkfT5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMb2cgaW5cIlxyXG4gICAgICAgICAgICAgID5TaWduIGluPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubmV3VG9XaG9QbGF5c30+TmV3IHRvIFdob1BsYXlzPyA8TGluayBocmVmPScvU2lnbmluJz48YT5DcmVhdGUgYW4gYWNjb3VudDwvYT48L0xpbms+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Mb2dpbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtTG9naW4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxvZ2luIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZzJYbFwiOiBcInV0aWxzX2hlYWRpbmcyWGxfXzFJNjVtXCIsXG5cdFwiaGVhZGluZ1hsXCI6IFwidXRpbHNfaGVhZGluZ1hsX18xWGVjTlwiLFxuXHRcImhlYWRpbmdMZ0JcIjogXCJ1dGlsc19oZWFkaW5nTGdCX18ydEIzNFwiLFxuXHRcImhlYWRpbmdMZ1wiOiBcInV0aWxzX2hlYWRpbmdMZ19fZGU3cDBcIixcblx0XCJoZWFkaW5nTWRcIjogXCJ1dGlsc19oZWFkaW5nTWRfXzNkZTZHXCIsXG5cdFwiaGVhZGluZ1NtXCI6IFwidXRpbHNfaGVhZGluZ1NtX18zTEZqUVwiLFxuXHRcImhlYWRpbmdYc1wiOiBcInV0aWxzX2hlYWRpbmdYc19fekV6NFJcIixcblx0XCJib3JkZXJDaXJjbGVcIjogXCJ1dGlsc19ib3JkZXJDaXJjbGVfXzEzcWRKXCIsXG5cdFwiY29sb3JJbmhlcml0XCI6IFwidXRpbHNfY29sb3JJbmhlcml0X18zR3VkZlwiLFxuXHRcInBhZGRpbmcxcHhcIjogXCJ1dGlsc19wYWRkaW5nMXB4X19vQ255OFwiLFxuXHRcImxpc3RcIjogXCJ1dGlsc19saXN0X19TN19wZVwiLFxuXHRcImxpc3RJdGVtXCI6IFwidXRpbHNfbGlzdEl0ZW1fXzJlSnBKXCIsXG5cdFwibGlnaHRUZXh0XCI6IFwidXRpbHNfbGlnaHRUZXh0X18xMkNrbVwiLFxuXHRcIkFwcEJhclwiOiBcInV0aWxzX0FwcEJhcl9fMWV2VmpcIixcblx0XCJzZWFyY2hcIjogXCJ1dGlsc19zZWFyY2hfX09ScEFrXCIsXG5cdFwiZm9sbG93XCI6IFwidXRpbHNfZm9sbG93X19MZDhQd1wiLFxuXHRcImludHJvXCI6IFwidXRpbHNfaW50cm9fXzdxMjg1XCIsXG5cdFwiYmxvZ0NvbnRhaW5lclwiOiBcInV0aWxzX2Jsb2dDb250YWluZXJfX2hJTGpfXCIsXG5cdFwicG9wcGluc1wiOiBcInV0aWxzX3BvcHBpbnNfX0dfaGxzXCIsXG5cdFwiY29udGFpbmVyXCI6IFwidXRpbHNfY29udGFpbmVyX18ySE9melwiLFxuXHRcIm1haW5cIjogXCJ1dGlsc19tYWluX18xR1l4ZlwiLFxuXHRcInVzZXJJbmZvXCI6IFwidXRpbHNfdXNlckluZm9fXzM3ZnJDXCIsXG5cdFwidXNlckluZm9JZFwiOiBcInV0aWxzX3VzZXJJbmZvSWRfXzFnczQ0XCIsXG5cdFwiZm9vdGVyXCI6IFwidXRpbHNfZm9vdGVyX18zZDNFb1wiLFxuXHRcInRpdGxlXCI6IFwidXRpbHNfdGl0bGVfXzJ3MlhLXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJ1dGlsc19kZXNjcmlwdGlvbl9fMTd6blVcIixcblx0XCJjb2RlXCI6IFwidXRpbHNfY29kZV9fMk90WXBcIixcblx0XCJncmlkXCI6IFwidXRpbHNfZ3JpZF9fTUZlLUxcIixcblx0XCJjYXJkXCI6IFwidXRpbHNfY2FyZF9fMk5qNm9cIixcblx0XCJsb2dvXCI6IFwidXRpbHNfbG9nb19fWk9Gai1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=