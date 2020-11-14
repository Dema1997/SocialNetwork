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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Users.js");
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

/***/ "./pages/Users.js":
/*!************************!*\
  !*** ./pages/Users.js ***!
  \************************/
/*! exports provided: Users, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\pages\\Users.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Users = ({
  users
}) => {
  const {
    0: creating,
    1: setCreating
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: submit,
    1: setSubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const {
    0: campi,
    1: setCampi
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({
    email: '',
    firstName: '',
    lastName: '',
    city: '',
    address: '',
    date: ''
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  const handleChange = e => {
    setCampi(_objectSpread(_objectSpread({}, campi), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(!submit);
  };

  const handleClick = () => {
    setCreating(!creating);
  };

  const createNote = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(campi)
      });
      router.push("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (submit) {
      createNote();
    } else {
      setSubmit(false);
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title,
          children: [users.length, " users"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: handleClick,
          variant: "outlined",
          children: "Create User"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, undefined), creating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a, {
            fullWidth: true,
            open: "true",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
              style: {
                textAlign: 'center',
                marginTop: 10
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  children: "Adding new user..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 13
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: handleSubmit,
              style: {
                padding: 50,
                paddingTop: 30
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.email,
                onChange: handleChange,
                name: "email",
                type: "email",
                placeholder: "email"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 132
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 137
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.firstName,
                onChange: handleChange,
                name: "firstName",
                type: "text",
                placeholder: "firstName"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 143
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 148
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.lastName,
                onChange: handleChange,
                name: "lastName",
                type: "text",
                placeholder: "lastName"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 140
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 145
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.city,
                onChange: handleChange,
                name: "city",
                type: "text",
                placeholder: "city"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 128
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 133
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.address,
                onChange: handleChange,
                name: "address",
                type: "text",
                placeholder: "address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 137
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 142
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
                fullWidth: true,
                required: true,
                value: campi.date,
                onChange: handleChange,
                name: "date",
                type: "text",
                placeholder: "date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 11
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 128
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 133
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 138
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  variant: "outlined",
                  type: "submit",
                  style: {
                    float: 'right',
                    borderColor: '#47cf73'
                  },
                  children: "Confirm"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  color: "secondary",
                  onClick: handleClick,
                  variant: "outlined",
                  style: {
                    float: 'right',
                    marginRight: 8
                  },
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 11
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 9
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, undefined)
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.grid,
          children: users.map((user, i) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                href: user._id,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  id: i + user.email,
                  className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: [user.firstName, " ", user.lastName, " \u2192"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: user.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: user.address
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: user.date
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: user.city
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 38
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 16
              }, undefined)
            }, void 0, false);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 4
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Users);

Users.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/users');
  const {
    data
  } = await res.json();
  return {
    users: data
  };
};

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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImlucHV0Um9vdCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImlucHV0SW5wdXQiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJuYW1lIiwiZGF0YSIsInRpdG9sbyIsImxpbmsiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhvbWUiLCJjbGFzc2VzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidXNlU3RhdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJsZW5ndGgiLCJtYXJnaW5Ub3AiLCJtYXAiLCJzdWdnIiwiaSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlbmNvZGVVUkkiLCJoZWFkZXIiLCJoZWFkZXJIb21lSW1hZ2UiLCJ1dGlsU3R5bGVzIiwiYm9yZGVyQ2lyY2xlIiwiaGVhZGluZzJYbCIsImlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVySW1hZ2UiLCJwb3BwaW5zIiwiY29sb3JJbmhlcml0IiwiYmFja1RvSG9tZSIsIlVzZXJzIiwidXNlcnMiLCJjcmVhdGluZyIsInNldENyZWF0aW5nIiwic3VibWl0Iiwic2V0U3VibWl0IiwiY2FtcGkiLCJzZXRDYW1waSIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjaXR5IiwiYWRkcmVzcyIsImRhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwiY3JlYXRlTm90ZSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm1haW4iLCJ0ZXh0QWxpZ24iLCJmbG9hdCIsImJvcmRlckNvbG9yIiwiZ3JpZCIsInVzZXIiLCJfaWQiLCJjYXJkIiwiZ2V0SW5pdGlhbFByb3BzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDakU7QUFBRCxNQUFRLE1BQU1nRSxHQUFHLENBQUNxQixJQUFKLEVBQXBCO0FBRUEsU0FBTztBQUFDekMsU0FBSyxFQUFFNUM7QUFBUixHQUFQO0FBQ0QsQ0FMRCxDOzs7Ozs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Vc2Vycy5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IFRvb2xiYXIgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgYm9yZGVyOicycHggc29saWQgb3JhbmdlJyxcclxuICAgIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKSdcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMmNoJyxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgbmFtZSA9ICdGaWxpcHBvIERlIE1hcmNvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGE9W1xyXG4gIHtcclxuICAgIHRpdG9sbzogJ0NvdmlkIDE5IEFuYWx5dGljcyAnLFxyXG4gICAgbGluazogJ0NvdmlkMTlEYXRhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnWW91ciBmaXJzdCBSZWFjdCBBcHAnLFxyXG4gICAgbGluazogJ2ZpcnN0UG9zdCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdG9sbzogJ01vbmdvREIsIFJlYWN0IEpzIGFuZCBUeXBlc2NyaXB0IGFsbCBpbiBvbmUgc2luZ2xlIHdlYiBhcHBsaWNhdGlvbicsXHJcbiAgICBsaW5rOiAnTW9uZ29EQkFwcCdcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnTmV4dC5qcyBTYW1wbGUgV2Vic2l0ZSdcclxuXHJcbi8qIFxyXG4gKlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXT11c2VTdGF0ZSgnJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICA8QXBwQmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzEzMTQxNyd9fSBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICA8VG9vbGJhciBzdHlsZT17e3BhZGRpbmdUb3A6MTIscGFkZGluZ0xlZnQ6MjUscGFkZGluZ1JpZ2h0OjI1LCBwYWRkaW5nQm90dG9tOjEyLCBoZWlnaHQ6IDg1fX0+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uICBhcmlhLWxhYmVsPSBcIlwiIHN0eWxlPXt7YmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxjb2xvcjpcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjY1LGhlaWdodDo2NX19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9yZWFjdC5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjYwLGhlaWdodDo2MH19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy90c0xvZ28ucG5nXCIvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDo3MCxoZWlnaHQ6NzAsbWFyZ2luUmlnaHQ6MTF9fT5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWF0ZXJpYWwucG5nXCIvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gaHJlZj1cIi9TaWduaW5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OjIwLGhlaWdodDo1NiwgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxmb250U2l6ZToxNCx0ZXh0VHJhbnNmb3JtOidjYXBpdGFsaXplJywgbWFyZ2luUmlnaHQ6Mn19PlNpZ24gaW48L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9XCIvTG9naW5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OjIwLGhlaWdodDo1NiwgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdlZThmYSAwJSwgIzgwZmY3MiA3NCUpJywgYmFja2dyb3VuZENvbG9yOicjN2VlOGZhJywgZm9udFNpemU6MTQsIHRleHRUcmFuc2Zvcm06J2NhcGl0YWxpemUnLCBtYXJnaW5SaWdodDoyfX0+IExvZyBpbiA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDwvVG9vbGJhcj4gXHJcbiAgICA8L0FwcEJhcj5cclxuXHJcbiAgICB7c2VhcmNoLmxlbmd0aD4wICYmXHJcbiAgICA8dWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxMzE0MTcnLCBtYXJnaW5Ub3A6MCwgcGFkZGluZ0JvdHRvbToyMCxib3JkZXJSYWRpdXM6MTB9fT5cclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCAoc3VnZyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICggc3VnZy50aXRvbG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKVxyXG4gICAgICAgICAgICAgICAgJiYgIDw+PGxpIGtleT17aX0gPjxhIGhyZWY9IHtgL3Bvc3RzLyR7c3VnZy5saW5rfWB9ID57c3VnZy50aXRvbG99PC9hPiA8L2xpPjwvPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgPC91bD5cclxuICAgIH1cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxyXG4gICAgICAgICAgICBzaXRlVGl0bGVcclxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgeyBob21lID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0geyAoZSkgPT4geyBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpIH0gfVxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5wb3BwaW5zfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbG9ySW5oZXJpdH0+e25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuXHJcbiAgICAgIHsgIWhvbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwibGF5b3V0X2NvbnRhaW5lcl9fMnQ0djJcIixcblx0XCJoZWFkZXJcIjogXCJsYXlvdXRfaGVhZGVyX18ycmhXcVwiLFxuXHRcImhlYWRlckltYWdlXCI6IFwibGF5b3V0X2hlYWRlckltYWdlX18yaDVPblwiLFxuXHRcImhlYWRlckhvbWVJbWFnZVwiOiBcImxheW91dF9oZWFkZXJIb21lSW1hZ2VfXzNxbzFfXCIsXG5cdFwiYmFja1RvSG9tZVwiOiBcImxheW91dF9iYWNrVG9Ib21lX18xdlpzcFwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQge0J1dHRvbiwgRGlhbG9nVGl0bGUsIFRleHRGaWVsZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlcnMgPSAoe3VzZXJzfSkgPT57XHJcblxyXG4gIGNvbnN0IFtjcmVhdGluZyxzZXRDcmVhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc3VibWl0LCBzZXRTdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NhbXBpLCBzZXRDYW1waV09IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOicnLFxyXG4gICAgZmlyc3ROYW1lOicnLFxyXG4gICAgbGFzdE5hbWU6JycsXHJcbiAgICBjaXR5OicnLFxyXG4gICAgYWRkcmVzczonJyxcclxuICAgIGRhdGU6JycsXHJcbiAgfSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q2FtcGkoeyAuLi5jYW1waSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0U3VibWl0KCFzdWJtaXQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljaz0oKT0+e1xyXG4gICAgc2V0Q3JlYXRpbmcoIWNyZWF0aW5nKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY3JlYXRlTm90ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeXtcclxuICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhbXBpKVxyXG4gICAgICB9KVxyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6XCIsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICBpZihzdWJtaXQpe1xyXG4gICAgICBjcmVhdGVOb3RlKClcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXRTdWJtaXQoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VXNlcnM8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICBcclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAge3VzZXJzLmxlbmd0aH0gdXNlcnNcclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxici8+XHJcblxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHZhcmlhbnQgPVwib3V0bGluZWRcIj5DcmVhdGUgVXNlcjwvQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICB7IGNyZWF0aW5nID9cclxuICAgICAgPD5cclxuICAgICAgICA8RGlhbG9nIGZ1bGxXaWR0aCBvcGVuPSd0cnVlJz5cclxuICAgICAgICAgIDxEaWFsb2dUaXRsZSBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJyxtYXJnaW5Ub3A6MTB9fT5cclxuICAgICAgICAgICAgPGgyPjxiPkFkZGluZyBuZXcgdXNlci4uLjwvYj48L2gyPlxyXG4gICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17e3BhZGRpbmc6NTAscGFkZGluZ1RvcDozMH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZCBmdWxsV2lkdGggcmVxdWlyZWQgdmFsdWU9e2NhbXBpLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIvPjxici8+PGJyLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHJlcXVpcmVkIHZhbHVlPXtjYW1waS5maXJzdE5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IG5hbWU9XCJmaXJzdE5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZmlyc3ROYW1lXCIvPjxici8+PGJyLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHJlcXVpcmVkIHZhbHVlPXtjYW1waS5sYXN0TmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT1cImxhc3ROYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImxhc3ROYW1lXCIvPjxici8+PGJyLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHJlcXVpcmVkIHZhbHVlPXtjYW1waS5jaXR5fSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJjaXR5XCIvPjxici8+PGJyLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHJlcXVpcmVkIHZhbHVlPXtjYW1waS5hZGRyZXNzfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiYWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZGRyZXNzXCIvPjxici8+PGJyLz5cclxuICAgICAgICAgIDxUZXh0RmllbGQgZnVsbFdpZHRoIHJlcXVpcmVkIHZhbHVlPXtjYW1waS5kYXRlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBuYW1lPVwiZGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJkYXRlXCIvPjxici8+PGJyLz48YnIvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b24gIHZhcmlhbnQgPVwib3V0bGluZWRcIiAgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0Jyxib3JkZXJDb2xvcjonIzQ3Y2Y3Myd9fT5Db25maXJtPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IHZhcmlhbnQgPVwib3V0bGluZWRcIiBzdHlsZT17e2Zsb2F0OidyaWdodCcsbWFyZ2luUmlnaHQ6OH19PkNsb3NlPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgOiA8PjwvPiBcclxuICAgICAgfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyLGkpID0+e1xyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VzZXIuX2lkfT48YSBpZD17aSArIHVzZXIuZW1haWx9ICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPnt1c2VyLmZpcnN0TmFtZX0ge3VzZXIubGFzdE5hbWV9ICZyYXJyOzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e3VzZXIuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD57dXNlci5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+ICAgXHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcblxyXG5Vc2Vycy5nZXRJbml0aWFsUHJvcHM9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXM9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzJylcclxuICBjb25zdCB7ZGF0YX09IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHt1c2VyczogZGF0YX1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmcyWGxcIjogXCJ1dGlsc19oZWFkaW5nMlhsX18xSTY1bVwiLFxuXHRcImhlYWRpbmdYbFwiOiBcInV0aWxzX2hlYWRpbmdYbF9fMVhlY05cIixcblx0XCJoZWFkaW5nTGdCXCI6IFwidXRpbHNfaGVhZGluZ0xnQl9fMnRCMzRcIixcblx0XCJoZWFkaW5nTGdcIjogXCJ1dGlsc19oZWFkaW5nTGdfX2RlN3AwXCIsXG5cdFwiaGVhZGluZ01kXCI6IFwidXRpbHNfaGVhZGluZ01kX18zZGU2R1wiLFxuXHRcImhlYWRpbmdTbVwiOiBcInV0aWxzX2hlYWRpbmdTbV9fM0xGalFcIixcblx0XCJoZWFkaW5nWHNcIjogXCJ1dGlsc19oZWFkaW5nWHNfX3pFejRSXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9ySW5oZXJpdFwiOiBcInV0aWxzX2NvbG9ySW5oZXJpdF9fM0d1ZGZcIixcblx0XCJwYWRkaW5nMXB4XCI6IFwidXRpbHNfcGFkZGluZzFweF9fb0NueThcIixcblx0XCJsaXN0XCI6IFwidXRpbHNfbGlzdF9fUzdfcGVcIixcblx0XCJsaXN0SXRlbVwiOiBcInV0aWxzX2xpc3RJdGVtX18yZUpwSlwiLFxuXHRcImxpZ2h0VGV4dFwiOiBcInV0aWxzX2xpZ2h0VGV4dF9fMTJDa21cIixcblx0XCJBcHBCYXJcIjogXCJ1dGlsc19BcHBCYXJfXzFldlZqXCIsXG5cdFwic2VhcmNoXCI6IFwidXRpbHNfc2VhcmNoX19PUnBBa1wiLFxuXHRcImZvbGxvd1wiOiBcInV0aWxzX2ZvbGxvd19fTGQ4UHdcIixcblx0XCJpbnRyb1wiOiBcInV0aWxzX2ludHJvX183cTI4NVwiLFxuXHRcImJsb2dDb250YWluZXJcIjogXCJ1dGlsc19ibG9nQ29udGFpbmVyX19oSUxqX1wiLFxuXHRcInBvcHBpbnNcIjogXCJ1dGlsc19wb3BwaW5zX19HX2hsc1wiLFxuXHRcImNvbnRhaW5lclwiOiBcInV0aWxzX2NvbnRhaW5lcl9fMkhPZnpcIixcblx0XCJtYWluXCI6IFwidXRpbHNfbWFpbl9fMUdZeGZcIixcblx0XCJmb290ZXJcIjogXCJ1dGlsc19mb290ZXJfXzNkM0VvXCIsXG5cdFwidGl0bGVcIjogXCJ1dGlsc190aXRsZV9fMncyWEtcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcInV0aWxzX2Rlc2NyaXB0aW9uX18xN3puVVwiLFxuXHRcImNvZGVcIjogXCJ1dGlsc19jb2RlX18yT3RZcFwiLFxuXHRcImdyaWRcIjogXCJ1dGlsc19ncmlkX19NRmUtTFwiLFxuXHRcImNhcmRcIjogXCJ1dGlsc19jYXJkX18yTmo2b1wiLFxuXHRcImxvZ29cIjogXCJ1dGlsc19sb2dvX19aT0ZqLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9