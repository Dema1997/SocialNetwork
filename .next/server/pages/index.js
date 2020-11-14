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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: data, siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\components\\Layout.js";













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  inputRoot: {
    color: 'white',
    borderRadius: 5,
    border: '2px solid orange',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));
const name = 'Filippo De Marco';
const data = [{
  titolo: 'Covid 19 Analytics ',
  link: 'Covid19Data'
}, {
  titolo: 'Your first React App',
  link: 'firstPost'
}, {
  titolo: 'MongoDB, React Js and Typescript all in one single web application',
  link: 'MongoDBApp'
}];
const siteTitle = 'Next.js Sample Website';
/* 
 *
*/

function Layout({
  children,
  home
}) {
  const classes = useStyles();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        backgroundColor: '#131417'
      },
      position: "static",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          paddingTop: 12,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 12,
          height: 85
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
          "aria-label": "",
          style: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: "black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            width: 65,
            height: 65
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/react.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            width: 60,
            height: 60
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/tsLogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
          style: {
            width: 70,
            height: 70,
            marginRight: 11
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/material.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
          variant: "h6",
          className: classes.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/Signin",
          style: {
            marginLeft: 20,
            height: 56,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            fontSize: 14,
            textTransform: 'capitalize',
            marginRight: 2
          },
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/Login",
          style: {
            marginLeft: 20,
            height: 56,
            backgroundImage: 'linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%)',
            backgroundColor: '#7ee8fa',
            fontSize: 14,
            textTransform: 'capitalize',
            marginRight: 2
          },
          children: " Log in "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, this), search.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      style: {
        backgroundColor: '#131417',
        marginTop: 0,
        paddingBottom: 20,
        borderRadius: 10
      },
      children: data.map((sugg, i) => {
        return sugg.titolo.toLowerCase().includes(search) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: `/posts/${sugg.link}`,
              children: sugg.titolo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 36
            }, this), " "]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 23
          }, this)
        }, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/logo.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Learn how to build a personal website using Next.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:image",
          content: `https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "og:title",
          content: siteTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "twitter:card",
          content: "summary_large_image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
        children: home ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/images/logo.jpg",
            className: `${_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerHomeImage} ${_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.borderCircle}`,
            alt: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.heading2Xl,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_13___default.a, {
            placeholder: "Search\u2026",
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput
            },
            name: "search",
            inputProps: {
              'aria-label': 'search'
            },
            value: search,
            onChange: e => {
              setSearch(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/logo.jpg",
                className: `${_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerImage} ${_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.borderCircle}`,
                alt: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.poppins,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.colorInherit,
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }, this), !home && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\u2190 Back to home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "layout_container__2t4v2",
	"header": "layout_header__2rhWq",
	"headerImage": "layout_headerImage__2h5On",
	"headerHomeImage": "layout_headerHomeImage__3qo1_",
	"backToHome": "layout_backToHome__1vZsp"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\pages\\index.js";





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    padding: '0 20px'
  }
});
function Home() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    home: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "FDM"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.intro,
        children: ["Hello, I\u2019m ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Filippo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 52
        }, this), ". I\u2019m a software engineer for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "@LineApp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 106
        }, this), ". You can contact me on ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "mailto:fil97@hotmail.it",
          children: "fil97@hotmail.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 155
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.blogContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLgB,
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 8
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/Users",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Users"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 34
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                dateTime: "",
                children: "Up-to-date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/posts/Covid19Data",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Covid-19 Analitycs and Statistics "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 46
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                dateTime: "2020-11-09",
                children: "November 9, 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/posts/firstPost",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Your first React App "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 44
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                dateTime: "2020-01-02",
                children: "January 2, 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 12
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: "/posts/MongoDBApp",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Mongo DB, React js and Typescript all in one single web application "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 45
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 14
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                dateTime: "2020-05-12",
                children: "May 12, 2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 16
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 14
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 8
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 1
  }, this);
}

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

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputBase":
/*!**********************************************!*\
  !*** external "@material-ui/core/InputBase" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiaW5wdXRSb290IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5hbWUiLCJkYXRhIiwidGl0b2xvIiwibGluayIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsImNsYXNzZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmRJbWFnZSIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcCIsInN1Z2ciLCJpIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImVuY29kZVVSSSIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nMlhsIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJJbWFnZSIsInBvcHBpbnMiLCJjb2xvckluaGVyaXQiLCJiYWNrVG9Ib21lIiwiYm94U2hhZG93IiwiSG9tZSIsImhlYWRpbmdNZCIsImludHJvIiwiYmxvZ0NvbnRhaW5lciIsImhlYWRpbmdMZ0IiLCJsaXN0IiwibGlzdEl0ZW0iLCJoZWFkaW5nU20iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsNEVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFO0FBRE4sR0FEaUM7QUFJdkNDLFlBQVUsRUFBRTtBQUNWQyxlQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFESCxHQUoyQjtBQU92Q0MsT0FBSyxFQUFFO0FBQ0xKLFlBQVEsRUFBRTtBQURMLEdBUGdDO0FBVXZDSyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE9BREU7QUFFVEMsZ0JBQVksRUFBRSxDQUZMO0FBR1RDLFVBQU0sRUFBQyxrQkFIRTtBQUlUQyxjQUFVLEVBQUM7QUFKRixHQVY0QjtBQWdCdkNDLFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUViLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FEQztBQUVWO0FBQ0FTLGVBQVcsRUFBRyxjQUFhZCxLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBQWlCLEtBSGxDO0FBSVZVLGNBQVUsRUFBRWYsS0FBSyxDQUFDZ0IsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsT0FBekIsQ0FKRjtBQUtWQyxTQUFLLEVBQUUsTUFMRztBQU1WLEtBQUNsQixLQUFLLENBQUNtQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCRixXQUFLLEVBQUUsTUFEcUI7QUFFNUIsaUJBQVc7QUFDVEEsYUFBSyxFQUFFO0FBREU7QUFGaUI7QUFOcEI7QUFoQjJCLENBQVosQ0FBRCxDQUE1QjtBQStCQSxNQUFNRyxJQUFJLEdBQUcsa0JBQWI7QUFFTyxNQUFNQyxJQUFJLEdBQUMsQ0FDaEI7QUFDRUMsUUFBTSxFQUFFLHFCQURWO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRGdCLEVBS2hCO0FBQ0VELFFBQU0sRUFBRSxzQkFEVjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxnQixFQVNoQjtBQUNFRCxRQUFNLEVBQUUsb0VBRFY7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUZ0IsQ0FBWDtBQWNBLE1BQU1DLFNBQVMsR0FBRyx3QkFBbEI7QUFFUDtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0MsTUFBVCxDQUFnQjtBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBaEIsRUFBb0M7QUFDakQsUUFBTUMsT0FBTyxHQUFHL0IsU0FBUyxFQUF6QjtBQUNBLFFBQU07QUFBQSxPQUFDZ0MsTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBbUJDLHNEQUFRLENBQUMsRUFBRCxDQUFqQztBQUVBLHNCQUNFO0FBQUEsNEJBQ0E7QUFBTSxVQUFJLEVBQUMsd0VBQVg7QUFBb0YsU0FBRyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLHFFQUFDLCtEQUFEO0FBQVEsV0FBSyxFQUFFO0FBQUNDLHVCQUFlLEVBQUU7QUFBbEIsT0FBZjtBQUE2QyxjQUFRLEVBQUMsUUFBdEQ7QUFBQSw2QkFDRSxxRUFBQyxnRUFBRDtBQUFTLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFDLEVBQVo7QUFBZXBCLHFCQUFXLEVBQUMsRUFBM0I7QUFBOEJxQixzQkFBWSxFQUFDLEVBQTNDO0FBQStDQyx1QkFBYSxFQUFDLEVBQTdEO0FBQWlFQyxnQkFBTSxFQUFFO0FBQXpFLFNBQWhCO0FBQUEsZ0NBRUUscUVBQUMsbUVBQUQ7QUFBYSx3QkFBWSxFQUF6QjtBQUE0QixlQUFLLEVBQUU7QUFBQzFCLHNCQUFVLEVBQUMsa0RBQVo7QUFBK0RILGlCQUFLLEVBQUM7QUFBckUsV0FBbkM7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FLHFFQUFDLG1FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNVLGlCQUFLLEVBQUMsRUFBUDtBQUFVbUIsa0JBQU0sRUFBQztBQUFqQixXQUFuQjtBQUFBLGlDQUNHO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFVRSxxRUFBQyxtRUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDbkIsaUJBQUssRUFBQyxFQUFQO0FBQVVtQixrQkFBTSxFQUFDO0FBQWpCLFdBQW5CO0FBQUEsaUNBQ0c7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWNFLHFFQUFDLG1FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNuQixpQkFBSyxFQUFDLEVBQVA7QUFBVW1CLGtCQUFNLEVBQUMsRUFBakI7QUFBb0JqQyx1QkFBVyxFQUFDO0FBQWhDLFdBQW5CO0FBQUEsaUNBQ0c7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQWtCRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQVMsRUFBRXlCLE9BQU8sQ0FBQ3ZCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGLGVBc0JFLHFFQUFDLCtEQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFFO0FBQUVnQyxzQkFBVSxFQUFDLEVBQWI7QUFBZ0JELGtCQUFNLEVBQUMsRUFBdkI7QUFBMkIxQixzQkFBVSxFQUFDLGtEQUF0QztBQUF5RjRCLG9CQUFRLEVBQUMsRUFBbEc7QUFBcUdDLHlCQUFhLEVBQUMsWUFBbkg7QUFBaUlwQyx1QkFBVyxFQUFDO0FBQTdJLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQXVCRSxxRUFBQywrREFBRDtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGVBQUssRUFBRTtBQUFFa0Msc0JBQVUsRUFBQyxFQUFiO0FBQWdCRCxrQkFBTSxFQUFDLEVBQXZCO0FBQTJCSSwyQkFBZSxFQUFFLGtEQUE1QztBQUFnR1IsMkJBQWUsRUFBQyxTQUFoSDtBQUEySE0sb0JBQVEsRUFBQyxFQUFwSTtBQUF3SUMseUJBQWEsRUFBQyxZQUF0SjtBQUFvS3BDLHVCQUFXLEVBQUM7QUFBaEwsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxFQStCQzBCLE1BQU0sQ0FBQ1ksTUFBUCxHQUFjLENBQWQsaUJBQ0Q7QUFBSSxXQUFLLEVBQUU7QUFBQ1QsdUJBQWUsRUFBQyxTQUFqQjtBQUE0QlUsaUJBQVMsRUFBQyxDQUF0QztBQUF5Q1AscUJBQWEsRUFBQyxFQUF2RDtBQUEwRDNCLG9CQUFZLEVBQUM7QUFBdkUsT0FBWDtBQUFBLGdCQUVRYSxJQUFJLENBQUNzQixHQUFMLENBQVUsQ0FBQ0MsSUFBRCxFQUFNQyxDQUFOLEtBQVk7QUFDcEIsZUFBU0QsSUFBSSxDQUFDdEIsTUFBTCxDQUFZd0IsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNsQixNQUFuQyxDQUFGLGlCQUNEO0FBQUEsaUNBQUU7QUFBQSxvQ0FBYTtBQUFHLGtCQUFJLEVBQUksVUFBU2UsSUFBSSxDQUFDckIsSUFBSyxFQUE5QjtBQUFBLHdCQUFtQ3FCLElBQUksQ0FBQ3RCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWI7QUFBQSxhQUFTdUIsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUYseUJBRE47QUFFRCxPQUhEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDQSxlQTBDQTtBQUFLLGVBQVMsRUFBRUcseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNBO0FBQU0sY0FBSSxFQUFDLHdFQUFYO0FBQW9GLGFBQUcsRUFBQztBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxpQkFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU9FO0FBQ0Usa0JBQVEsRUFBQyxVQURYO0FBRUUsaUJBQU8sRUFBRywyQkFBMEJDLFNBQVMsQ0FDM0MxQixTQUQyQyxDQUUzQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFhRTtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFPLEVBQUVBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFjRTtBQUFNLGNBQUksRUFBQyxjQUFYO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWtCRTtBQUFRLGlCQUFTLEVBQUV3Qix5REFBTSxDQUFDRyxNQUExQjtBQUFBLGtCQUNJeEIsSUFBSSxnQkFDSjtBQUFBLGtDQUNFO0FBQ0UsZUFBRyxFQUFDLGtCQUROO0FBRUUscUJBQVMsRUFBRyxHQUFFcUIseURBQU0sQ0FBQ0ksZUFBZ0IsSUFBR0MsZ0VBQVUsQ0FBQ0MsWUFBYSxFQUZsRTtBQUdFLGVBQUcsRUFBRWxDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUkscUJBQVMsRUFBRWlDLGdFQUFVLENBQUNFLFVBQTFCO0FBQUEsc0JBQXVDbkM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FLHFFQUFDLG1FQUFEO0FBQ0UsdUJBQVcsRUFBQyxjQURkO0FBRUUsbUJBQU8sRUFBRTtBQUNQcEIsa0JBQUksRUFBRTRCLE9BQU8sQ0FBQ3RCLFNBRFA7QUFFUGtELG1CQUFLLEVBQUU1QixPQUFPLENBQUNqQjtBQUZSLGFBRlg7QUFNRSxnQkFBSSxFQUFDLFFBTlA7QUFPRSxzQkFBVSxFQUFFO0FBQUUsNEJBQWM7QUFBaEIsYUFQZDtBQVFFLGlCQUFLLEVBQUVrQixNQVJUO0FBU0Usb0JBQVEsRUFBTTRCLENBQUQsSUFBTztBQUFFM0IsdUJBQVMsQ0FBQzJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBMkI7QUFUbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBLHdCQURJLGdCQXFCSjtBQUFBLGtDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBQSxxQ0FDRTtBQUNFLG1CQUFHLEVBQUMsa0JBRE47QUFFRSx5QkFBUyxFQUFHLEdBQUVYLHlEQUFNLENBQUNZLFdBQVksSUFBR1AsZ0VBQVUsQ0FBQ0MsWUFBYSxFQUY5RDtBQUdFLG1CQUFHLEVBQUVsQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVVFO0FBQUkscUJBQVMsRUFBRWlDLGdFQUFVLENBQUNRLE9BQTFCO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUVSLGdFQUFVLENBQUNTLFlBQXpCO0FBQUEsMEJBQXdDMUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixlQTJERTtBQUFBLGtCQUFPTTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREYsRUE2REksQ0FBQ0MsSUFBRCxpQkFDQTtBQUFLLGlCQUFTLEVBQUVxQix5REFBTSxDQUFDZSxVQUF2QjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDQTtBQUFBLGtCQURGO0FBa0hELEM7Ozs7Ozs7Ozs7O0FDeExEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWxFLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkUsTUFBSSxFQUFFO0FBQ0pVLGNBQVUsRUFBRSxrREFEUjtBQUVKRCxVQUFNLEVBQUUsQ0FGSjtBQUdKRCxnQkFBWSxFQUFFLENBSFY7QUFJSndELGFBQVMsRUFBRSx1Q0FKUDtBQUtKekQsU0FBSyxFQUFFLE9BTEg7QUFNSjZCLFVBQU0sRUFBRSxFQU5KO0FBT0p4QixXQUFPLEVBQUU7QUFQTDtBQURtQixDQUFELENBQTVCO0FBWWUsU0FBU3FELElBQVQsR0FBZ0I7QUFFOUIsUUFBTXJDLE9BQU8sR0FBRy9CLFNBQVMsRUFBekI7QUFFQyxzQkFHRixxRUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNNLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRE4sZUFLTTtBQUFTLGVBQVMsRUFBRXdELCtEQUFVLENBQUNhLFNBQS9CO0FBQUEsNkJBQ0U7QUFBRyxpQkFBUyxFQUFFYiwrREFBVSxDQUFDYyxLQUF6QjtBQUFBLG9EQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBM0Msc0RBQWlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFqRywyQ0FBa0o7QUFBRyxjQUFJLEVBQUMseUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMTixlQVNNO0FBQUssZUFBUyxFQUFFZCwrREFBVSxDQUFDZSxhQUEzQjtBQUFBLDZCQUNBO0FBQVMsaUJBQVMsRUFBRWYsK0RBQVUsQ0FBQ2EsU0FBL0I7QUFBQSxnQ0FDQztBQUFJLG1CQUFTLEVBQUViLCtEQUFVLENBQUNnQixVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUVDO0FBQUksbUJBQVMsRUFBRWhCLCtEQUFVLENBQUNpQixJQUExQjtBQUFBLGtDQUVHO0FBQUkscUJBQVMsRUFBRWpCLCtEQUFVLENBQUNrQixRQUExQjtBQUFBLG9DQUNHLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxRQUFYO0FBQUEscUNBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZILGVBR0c7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUVsQiwrREFBVSxDQUFDbUIsU0FBNUI7QUFBdUMsd0JBQVEsRUFBQyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZILGVBVUc7QUFBSSxxQkFBUyxFQUFFbkIsK0RBQVUsQ0FBQ2tCLFFBQTFCO0FBQUEsb0NBQ0cscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLG9CQUFYO0FBQUEscUNBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZILGVBR0c7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUVsQiwrREFBVSxDQUFDbUIsU0FBNUI7QUFBdUMsd0JBQVEsRUFBQyxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZILGVBa0JJO0FBQUkscUJBQVMsRUFBRW5CLCtEQUFVLENBQUNrQixRQUExQjtBQUFBLG9DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxrQkFBWDtBQUFBLHFDQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUEscUNBQ0U7QUFBTSx5QkFBUyxFQUFFbEIsK0RBQVUsQ0FBQ21CLFNBQTVCO0FBQXVDLHdCQUFRLEVBQUMsWUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQkosZUEwQkc7QUFBSSxxQkFBUyxFQUFFbkIsK0RBQVUsQ0FBQ2tCLFFBQTFCO0FBQUEsb0NBQ0cscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLG1CQUFYO0FBQUEscUNBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZILGVBR0c7QUFBQSxxQ0FDRTtBQUFNLHlCQUFTLEVBQUVsQiwrREFBVSxDQUFDbUIsU0FBNUI7QUFBdUMsd0JBQVEsRUFBQyxZQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhFO0FBdURELEM7Ozs7Ozs7Ozs7O0FDN0VEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5QkEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVG9vbGJhciAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCBvcmFuZ2UnLFxyXG4gICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJ1xyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEyY2gnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBuYW1lID0gJ0ZpbGlwcG8gRGUgTWFyY28nXHJcblxyXG5leHBvcnQgY29uc3QgZGF0YT1bXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnQ292aWQgMTkgQW5hbHl0aWNzICcsXHJcbiAgICBsaW5rOiAnQ292aWQxOURhdGEnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRvbG86ICdZb3VyIGZpcnN0IFJlYWN0IEFwcCcsXHJcbiAgICBsaW5rOiAnZmlyc3RQb3N0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnTW9uZ29EQiwgUmVhY3QgSnMgYW5kIFR5cGVzY3JpcHQgYWxsIGluIG9uZSBzaW5nbGUgd2ViIGFwcGxpY2F0aW9uJyxcclxuICAgIGxpbms6ICdNb25nb0RCQXBwJ1xyXG4gIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xyXG5cclxuLyogXHJcbiAqXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3NlYXJjaCxzZXRTZWFyY2hdPXVzZVN0YXRlKCcnKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMTMxNDE3J319IHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgIDxUb29sYmFyIHN0eWxlPXt7cGFkZGluZ1RvcDoxMixwYWRkaW5nTGVmdDoyNSxwYWRkaW5nUmlnaHQ6MjUsIHBhZGRpbmdCb3R0b206MTIsIGhlaWdodDogODV9fT5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gIGFyaWEtbGFiZWw9IFwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLGNvbG9yOlwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6NjUsaGVpZ2h0OjY1fX0+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JlYWN0LnBuZ1wiLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6NjAsaGVpZ2h0OjYwfX0+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RzTG9nby5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjcwLGhlaWdodDo3MCxtYXJnaW5SaWdodDoxMX19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYXRlcmlhbC5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPVwiL1NpZ25pblwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6MjAsaGVpZ2h0OjU2LCBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLGZvbnRTaXplOjE0LHRleHRUcmFuc2Zvcm06J2NhcGl0YWxpemUnLCBtYXJnaW5SaWdodDoyfX0+U2lnbiBpbjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj1cIi9Mb2dpblwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6MjAsaGVpZ2h0OjU2LCBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2VlOGZhIDAlLCAjODBmZjcyIDc0JSknLCBiYWNrZ3JvdW5kQ29sb3I6JyM3ZWU4ZmEnLCBmb250U2l6ZToxNCwgdGV4dFRyYW5zZm9ybTonY2FwaXRhbGl6ZScsIG1hcmdpblJpZ2h0OjJ9fT4gTG9nIGluIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPC9Ub29sYmFyPiBcclxuICAgIDwvQXBwQmFyPlxyXG5cclxuICAgIHtzZWFyY2gubGVuZ3RoPjAgJiZcclxuICAgIDx1bCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzEzMTQxNycsIG1hcmdpblRvcDowLCBwYWRkaW5nQm90dG9tOjIwLGJvcmRlclJhZGl1czoxMH19PlxyXG4gICAgICAgICAgeyBcclxuICAgICAgICAgICAgZGF0YS5tYXAoIChzdWdnLGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKCBzdWdnLnRpdG9sby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpXHJcbiAgICAgICAgICAgICAgICAmJiAgPD48bGkga2V5PXtpfSA+PGEgaHJlZj0ge2AvcG9zdHMvJHtzdWdnLmxpbmt9YH0gPntzdWdnLnRpdG9sb308L2E+IDwvbGk+PC8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICA8L3VsPlxyXG4gICAgfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkxlYXJuIGhvdyB0byBidWlsZCBhIHBlcnNvbmFsIHdlYnNpdGUgdXNpbmcgTmV4dC5qc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9vZy1pbWFnZS5ub3cuc2gvJHtlbmNvZGVVUkkoXHJcbiAgICAgICAgICAgIHNpdGVUaXRsZVxyXG4gICAgICAgICAgKX0ucG5nP3RoZW1lPWxpZ2h0Jm1kPTAmZm9udFNpemU9NzVweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMudmVyY2VsLmNvbSUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICB7IGhvbWUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XHJcbiAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IChlKSA9PiB7IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSkgfSB9XHJcbiAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnBvcHBpbnN9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgeyAhaG9tZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJsYXlvdXRfY29udGFpbmVyX18ydDR2MlwiLFxuXHRcImhlYWRlclwiOiBcImxheW91dF9oZWFkZXJfXzJyaFdxXCIsXG5cdFwiaGVhZGVySW1hZ2VcIjogXCJsYXlvdXRfaGVhZGVySW1hZ2VfXzJoNU9uXCIsXG5cdFwiaGVhZGVySG9tZUltYWdlXCI6IFwibGF5b3V0X2hlYWRlckhvbWVJbWFnZV9fM3FvMV9cIixcblx0XCJiYWNrVG9Ib21lXCI6IFwibGF5b3V0X2JhY2tUb0hvbWVfXzF2WnNwXCJcbn07XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLFxyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgYm94U2hhZG93OiAnMCAzcHggNXB4IDJweCByZ2JhKDI1NSwgMTA1LCAxMzUsIC4zKScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBoZWlnaHQ6IDM4LFxyXG4gICAgICBwYWRkaW5nOiAnMCAyMHB4JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICBcclxuICAgIFxyXG48TGF5b3V0IGhvbWU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GRE08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaW50cm99PkhlbGxvLCBJ4oCZbSA8c3Ryb25nPkZpbGlwcG88L3N0cm9uZz4uIEnigJltIGEgc29mdHdhcmUgZW5naW5lZXIgZm9yIDxzdHJvbmc+QExpbmVBcHA8L3N0cm9uZz4uIFlvdSBjYW4gY29udGFjdCBtZSBvbiA8YSBocmVmPVwibWFpbHRvOmZpbDk3QGhvdG1haWwuaXRcIj5maWw5N0Bob3RtYWlsLml0PC9hPi48L3A+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJsb2dDb250YWluZXJ9PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnQn0+QmxvZzwvaDE+XHJcbiAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Vc2Vyc1wiPjxhPlVzZXJzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiXCI+VXAtdG8tZGF0ZTwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL0NvdmlkMTlEYXRhXCI+PGEgPkNvdmlkLTE5IEFuYWxpdHljcyBhbmQgU3RhdGlzdGljcyA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdTbX0gZGF0ZVRpbWU9XCIyMDIwLTExLTA5XCI+Tm92ZW1iZXIgOSwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvZmlyc3RQb3N0XCI+PGE+WW91ciBmaXJzdCBSZWFjdCBBcHAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0wMS0wMlwiPkphbnVhcnkgMiwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9Nb25nb0RCQXBwXCI+PGE+TW9uZ28gREIsIFJlYWN0IGpzIGFuZCBUeXBlc2NyaXB0IGFsbCBpbiBvbmUgc2luZ2xlIHdlYiBhcHBsaWNhdGlvbiA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdTbX0gZGF0ZVRpbWU9XCIyMDIwLTA1LTEyXCI+TWF5IDEyLCAyMDIwPC90aW1lPlxyXG4gICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgPC91bD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmcyWGxcIjogXCJ1dGlsc19oZWFkaW5nMlhsX18xSTY1bVwiLFxuXHRcImhlYWRpbmdYbFwiOiBcInV0aWxzX2hlYWRpbmdYbF9fMVhlY05cIixcblx0XCJoZWFkaW5nTGdCXCI6IFwidXRpbHNfaGVhZGluZ0xnQl9fMnRCMzRcIixcblx0XCJoZWFkaW5nTGdcIjogXCJ1dGlsc19oZWFkaW5nTGdfX2RlN3AwXCIsXG5cdFwiaGVhZGluZ01kXCI6IFwidXRpbHNfaGVhZGluZ01kX18zZGU2R1wiLFxuXHRcImhlYWRpbmdTbVwiOiBcInV0aWxzX2hlYWRpbmdTbV9fM0xGalFcIixcblx0XCJoZWFkaW5nWHNcIjogXCJ1dGlsc19oZWFkaW5nWHNfX3pFejRSXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9ySW5oZXJpdFwiOiBcInV0aWxzX2NvbG9ySW5oZXJpdF9fM0d1ZGZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwidXRpbHNfcGFkZGluZzFweF9fb0NueThcIixcblx0XCJsaXN0XCI6IFwidXRpbHNfbGlzdF9fUzdfcGVcIixcblx0XCJsaXN0SXRlbVwiOiBcInV0aWxzX2xpc3RJdGVtX18yZUpwSlwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcInV0aWxzX2xpZ2h0VGV4dF9fMTJDa21cIixcblx0XCJBcHBCYXJcIjogXCJ1dGlsc19BcHBCYXJfXzFldlZqXCIsXG5cdFwic2VhcmNoXCI6IFwidXRpbHNfc2VhcmNoX19PUnBBa1wiLFxuXHRcImZvbGxvd1wiOiBcInV0aWxzX2ZvbGxvd19fTGQ4UHdcIixcblx0XCJpbnRyb1wiOiBcInV0aWxzX2ludHJvX183cTI4NVwiLFxuXHRcImJsb2dDb250YWluZXJcIjogXCJ1dGlsc19ibG9nQ29udGFpbmVyX19oSUxqX1wiLFxuXHRcInBvcHBpbnNcIjogXCJ1dGlsc19wb3BwaW5zX19HX2hsc1wiLFxuXHRcImNvbnRhaW5lclwiOiBcInV0aWxzX2NvbnRhaW5lcl9fMkhPZnpcIixcblx0XCJtYWluXCI6IFwidXRpbHNfbWFpbl9fMUdZeGZcIixcblx0XCJmb290ZXJcIjogXCJ1dGlsc19mb290ZXJfXzNkM0VvXCIsXG5cdFwidGl0bGVcIjogXCJ1dGlsc190aXRsZV9fMncyWEtcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcInV0aWxzX2Rlc2NyaXB0aW9uX18xN3puVVwiLFxuXHRcImNvZGVcIjogXCJ1dGlsc19jb2RlX18yT3RZcFwiLFxuXHRcImdyaWRcIjogXCJ1dGlsc19ncmlkX19NRmUtTFwiLFxuXHRcImNhcmRcIjogXCJ1dGlsc19jYXJkX18yTmo2b1wiLFxuXHRcImxvZ29cIjogXCJ1dGlsc19sb2dvX19aT0ZqLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=