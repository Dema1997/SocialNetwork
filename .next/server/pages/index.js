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
        backgroundColor: '#1a1a1a'
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "Signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "Login",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
            columnNumber: 28
          }, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiaW5wdXRSb290IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5hbWUiLCJkYXRhIiwidGl0b2xvIiwibGluayIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsImNsYXNzZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJ1c2VTdGF0ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmRJbWFnZSIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcCIsInN1Z2ciLCJpIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImVuY29kZVVSSSIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nMlhsIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJJbWFnZSIsInBvcHBpbnMiLCJjb2xvckluaGVyaXQiLCJiYWNrVG9Ib21lIiwiYm94U2hhZG93IiwiSG9tZSIsImhlYWRpbmdNZCIsImludHJvIiwiYmxvZ0NvbnRhaW5lciIsImhlYWRpbmdMZ0IiLCJsaXN0IiwibGlzdEl0ZW0iLCJoZWFkaW5nU20iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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b250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbGF5b3V0Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUb29sYmFyICBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIGJvcmRlcjonMnB4IHNvbGlkIG9yYW5nZScsXHJcbiAgICBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknXHJcbiAgfSxcclxuICBpbnB1dElucHV0OiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApLFxyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTJjaCcsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIHdpZHRoOiAnMjBjaCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IG5hbWUgPSAnRmlsaXBwbyBEZSBNYXJjbydcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhPVtcclxuICB7XHJcbiAgICB0aXRvbG86ICdDb3ZpZCAxOSBBbmFseXRpY3MgJyxcclxuICAgIGxpbms6ICdDb3ZpZDE5RGF0YSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdG9sbzogJ1lvdXIgZmlyc3QgUmVhY3QgQXBwJyxcclxuICAgIGxpbms6ICdmaXJzdFBvc3QnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRvbG86ICdNb25nb0RCLCBSZWFjdCBKcyBhbmQgVHlwZXNjcmlwdCBhbGwgaW4gb25lIHNpbmdsZSB3ZWIgYXBwbGljYXRpb24nLFxyXG4gICAgbGluazogJ01vbmdvREJBcHAnXHJcbiAgfSxcclxuXVxyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHQuanMgU2FtcGxlIFdlYnNpdGUnXHJcblxyXG4vKiBcclxuICpcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGhvbWUgfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF09dXNlU3RhdGUoJycpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgPEFwcEJhciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyMxYTFhMWEnfX0gcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgPFRvb2xiYXIgc3R5bGU9e3twYWRkaW5nVG9wOjEyLHBhZGRpbmdMZWZ0OjI1LHBhZGRpbmdSaWdodDoyNSwgcGFkZGluZ0JvdHRvbToxMiwgaGVpZ2h0OiA4NX19PlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiAgYXJpYS1sYWJlbD0gXCJcIiBzdHlsZT17e2JhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsY29sb3I6XCJibGFja1wiIH19PlxyXG4gICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDo2NSxoZWlnaHQ6NjV9fT5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcmVhY3QucG5nXCIvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDo2MCxoZWlnaHQ6NjB9fT5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvdHNMb2dvLnBuZ1wiLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6NzAsaGVpZ2h0OjcwLG1hcmdpblJpZ2h0OjExfX0+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL21hdGVyaWFsLnBuZ1wiLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICBcclxuICAgICAgICA8TGluayBocmVmPVwiU2lnbmluXCI+PEJ1dHRvbiAgc3R5bGU9e3sgbWFyZ2luTGVmdDoyMCxoZWlnaHQ6NTYsIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsZm9udFNpemU6MTQsdGV4dFRyYW5zZm9ybTonY2FwaXRhbGl6ZScsIG1hcmdpblJpZ2h0OjJ9fT5TaWduIGluPC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJMb2dpblwiPjxCdXR0b24gIHN0eWxlPXt7IG1hcmdpbkxlZnQ6MjAsaGVpZ2h0OjU2LCBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2VlOGZhIDAlLCAjODBmZjcyIDc0JSknLCBiYWNrZ3JvdW5kQ29sb3I6JyM3ZWU4ZmEnLCBmb250U2l6ZToxNCwgdGV4dFRyYW5zZm9ybTonY2FwaXRhbGl6ZScsIG1hcmdpblJpZ2h0OjJ9fT4gTG9nIGluIDwvQnV0dG9uPjwvTGluaz5cclxuXHJcbiAgICAgIDwvVG9vbGJhcj4gXHJcbiAgICA8L0FwcEJhcj5cclxuXHJcbiAgICB7c2VhcmNoLmxlbmd0aD4wICYmXHJcbiAgICA8dWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxMzE0MTcnLCBtYXJnaW5Ub3A6MCwgcGFkZGluZ0JvdHRvbToyMCxib3JkZXJSYWRpdXM6MTB9fT5cclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCAoc3VnZyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICggc3VnZy50aXRvbG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKVxyXG4gICAgICAgICAgICAgICAgJiYgIDw+PGxpIGtleT17aX0gPjxhIGhyZWY9IHtgL3Bvc3RzLyR7c3VnZy5saW5rfWB9ID57c3VnZy50aXRvbG99PC9hPiA8L2xpPjwvPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgPC91bD5cclxuICAgIH1cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxyXG4gICAgICAgICAgICBzaXRlVGl0bGVcclxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgeyBob21lID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0geyAoZSkgPT4geyBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpIH0gfVxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5wb3BwaW5zfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbG9ySW5oZXJpdH0+e25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuXHJcbiAgICAgIHsgIWhvbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGF5b3V0X2NvbnRhaW5lcl9fMnQ0djJcIixcblx0XCJoZWFkZXJcIjogXCJsYXlvdXRfaGVhZGVyX18ycmhXcVwiLFxuXHRcImhlYWRlckltYWdlXCI6IFwibGF5b3V0X2hlYWRlckltYWdlX18yaDVPblwiLFxuXHRcImhlYWRlckhvbWVJbWFnZVwiOiBcImxheW91dF9oZWFkZXJIb21lSW1hZ2VfXzNxbzFfXCIsXG5cdFwiYmFja1RvSG9tZVwiOiBcImxheW91dF9iYWNrVG9Ib21lX18xdlpzcFwiXG59O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDMsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgM3B4IDVweCAycHggcmdiYSgyNTUsIDEwNSwgMTM1LCAuMyknLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgaGVpZ2h0OiAzOCxcclxuICAgICAgcGFkZGluZzogJzAgMjBweCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgXHJcbiAgICBcclxuPExheW91dCBob21lPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RkRNPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmludHJvfT5IZWxsbywgSeKAmW0gPHN0cm9uZz5GaWxpcHBvPC9zdHJvbmc+LiBJ4oCZbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGZvciA8c3Ryb25nPkBMaW5lQXBwPC9zdHJvbmc+LiBZb3UgY2FuIGNvbnRhY3QgbWUgb24gPGEgaHJlZj1cIm1haWx0bzpmaWw5N0Bob3RtYWlsLml0XCI+ZmlsOTdAaG90bWFpbC5pdDwvYT4uPC9wPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ibG9nQ29udGFpbmVyfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ0J9PkJsb2c8L2gxPlxyXG4gICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXNlcnNcIj48YT5Vc2VyczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1NtfSBkYXRlVGltZT1cIlwiPlVwLXRvLWRhdGU8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICBcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9Db3ZpZDE5RGF0YVwiPjxhID5Db3ZpZC0xOSBBbmFsaXR5Y3MgYW5kIFN0YXRpc3RpY3MgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0xMS0wOVwiPk5vdmVtYmVyIDksIDIwMjA8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL2ZpcnN0UG9zdFwiPjxhPllvdXIgZmlyc3QgUmVhY3QgQXBwIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1NtfSBkYXRlVGltZT1cIjIwMjAtMDEtMDJcIj5KYW51YXJ5IDIsIDIwMjA8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvTW9uZ29EQkFwcFwiPjxhPk1vbmdvIERCLCBSZWFjdCBqcyBhbmQgVHlwZXNjcmlwdCBhbGwgaW4gb25lIHNpbmdsZSB3ZWIgYXBwbGljYXRpb24gPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0wNS0xMlwiPk1heSAxMiwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgIDwvdWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L0xheW91dD5cclxuICApXHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nMlhsXCI6IFwidXRpbHNfaGVhZGluZzJYbF9fMUk2NW1cIixcblx0XCJoZWFkaW5nWGxcIjogXCJ1dGlsc19oZWFkaW5nWGxfXzFYZWNOXCIsXG5cdFwiaGVhZGluZ0xnQlwiOiBcInV0aWxzX2hlYWRpbmdMZ0JfXzJ0QjM0XCIsXG5cdFwiaGVhZGluZ0xnXCI6IFwidXRpbHNfaGVhZGluZ0xnX19kZTdwMFwiLFxuXHRcImhlYWRpbmdNZFwiOiBcInV0aWxzX2hlYWRpbmdNZF9fM2RlNkdcIixcblx0XCJoZWFkaW5nU21cIjogXCJ1dGlsc19oZWFkaW5nU21fXzNMRmpRXCIsXG5cdFwiaGVhZGluZ1hzXCI6IFwidXRpbHNfaGVhZGluZ1hzX196RXo0UlwiLFxuXHRcImJvcmRlckNpcmNsZVwiOiBcInV0aWxzX2JvcmRlckNpcmNsZV9fMTNxZEpcIixcblx0XCJjb2xvckluaGVyaXRcIjogXCJ1dGlsc19jb2xvckluaGVyaXRfXzNHdWRmXCIsXG5cdFwicGFkZGluZzFweFwiOiBcInV0aWxzX3BhZGRpbmcxcHhfX29Dbnk4XCIsXG5cdFwibGlzdFwiOiBcInV0aWxzX2xpc3RfX1M3X3BlXCIsXG5cdFwibGlzdEl0ZW1cIjogXCJ1dGlsc19saXN0SXRlbV9fMmVKcEpcIixcblx0XCJsaWdodFRleHRcIjogXCJ1dGlsc19saWdodFRleHRfXzEyQ2ttXCIsXG5cdFwiQXBwQmFyXCI6IFwidXRpbHNfQXBwQmFyX18xZXZWalwiLFxuXHRcInNlYXJjaFwiOiBcInV0aWxzX3NlYXJjaF9fT1JwQWtcIixcblx0XCJmb2xsb3dcIjogXCJ1dGlsc19mb2xsb3dfX0xkOFB3XCIsXG5cdFwiaW50cm9cIjogXCJ1dGlsc19pbnRyb19fN3EyODVcIixcblx0XCJibG9nQ29udGFpbmVyXCI6IFwidXRpbHNfYmxvZ0NvbnRhaW5lcl9faElMal9cIixcblx0XCJwb3BwaW5zXCI6IFwidXRpbHNfcG9wcGluc19fR19obHNcIixcblx0XCJjb250YWluZXJcIjogXCJ1dGlsc19jb250YWluZXJfXzJIT2Z6XCIsXG5cdFwibWFpblwiOiBcInV0aWxzX21haW5fXzFHWXhmXCIsXG5cdFwidXNlckluZm9cIjogXCJ1dGlsc191c2VySW5mb19fMzdmckNcIixcblx0XCJ1c2VySW5mb0lkXCI6IFwidXRpbHNfdXNlckluZm9JZF9fMWdzNDRcIixcblx0XCJmb290ZXJcIjogXCJ1dGlsc19mb290ZXJfXzNkM0VvXCIsXG5cdFwidGl0bGVcIjogXCJ1dGlsc190aXRsZV9fMncyWEtcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcInV0aWxzX2Rlc2NyaXB0aW9uX18xN3puVVwiLFxuXHRcImNvZGVcIjogXCJ1dGlsc19jb2RlX18yT3RZcFwiLFxuXHRcImdyaWRcIjogXCJ1dGlsc19ncmlkX19NRmUtTFwiLFxuXHRcImNhcmRcIjogXCJ1dGlsc19jYXJkX18yTmo2b1wiLFxuXHRcImxvZ29cIjogXCJ1dGlsc19sb2dvX19aT0ZqLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=