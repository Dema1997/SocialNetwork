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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Home.js");
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
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "@material-ui/icons/ChevronRight");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_SportsTennis__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/SportsTennis */ "@material-ui/icons/SportsTennis");
/* harmony import */ var _material_ui_icons_SportsTennis__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsTennis__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_SportsSoccer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/SportsSoccer */ "@material-ui/icons/SportsSoccer");
/* harmony import */ var _material_ui_icons_SportsSoccer__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsSoccer__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_SportsBasketball__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/SportsBasketball */ "@material-ui/icons/SportsBasketball");
/* harmony import */ var _material_ui_icons_SportsBasketball__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsBasketball__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_RecentActors__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/RecentActors */ "@material-ui/icons/RecentActors");
/* harmony import */ var _material_ui_icons_RecentActors__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RecentActors__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_SportsVolleyball__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/SportsVolleyball */ "@material-ui/icons/SportsVolleyball");
/* harmony import */ var _material_ui_icons_SportsVolleyball__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsVolleyball__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_SportsGolf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/SportsGolf */ "@material-ui/icons/SportsGolf");
/* harmony import */ var _material_ui_icons_SportsGolf__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsGolf__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_SportsRugby__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/SportsRugby */ "@material-ui/icons/SportsRugby");
/* harmony import */ var _material_ui_icons_SportsRugby__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsRugby__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/SportsFootball */ "@material-ui/icons/SportsFootball");
/* harmony import */ var _material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Mail */ "@material-ui/icons/Mail");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/InputBase */ "@material-ui/core/InputBase");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_36__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Social Network\\social-network\\components\\Layout.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 5
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: _objectSpread({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1)
  }, theme.mixins.toolbar),
  content: {
    flex: 1,
    padding: theme.spacing(3)
  },
  img: {
    marginLeft: 15,
    maxWidth: '90%',
    maxHeight: '100%',
    objectFit: 'contain',
    backgroundSize: 'cover'
  },
  imgToolbar: {
    marginLeft: 0
  },
  colorToolbar: {
    backgroundColor: '#006666'
  },
  inputRoot: {
    marginLeft: 200,
    marginRight: 200,
    flexGrow: 1,
    border: '2px solid green',
    background: 'white',
    color: 'black',
    borderRadius: 5
  },
  inputInput: {
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
const drawerWidth = 240;
const data = [{
  titolo: 'Users',
  link: 'Users'
}, {
  titolo: 'Covid 19 Analytics ',
  link: 'Covid19Data'
}, {
  titolo: 'Your first React App',
  link: 'firstPost'
}, {
  titolo: 'MongoDB, React Js and Typescript all in one single web application',
  link: 'MongoDBApp'
}];
/**
 * Return the site name
 */

const siteTitle = 'Next.js Sample Website';
/* 
 *
*/

function Layout({
  children,
  home
}) {
  const {
    0: titleToolbar,
    1: setTitleToolbar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [selectedIndex, setSelectedIndex] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleListItemClick = (e, sport) => {
    setSelectedIndex(sport);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setTitleToolbar(!titleToolbar);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setTitleToolbar(!titleToolbar);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const isMenuOpen = Boolean(anchorEl);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      position: "sticky",
      className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.appBar, {
        [classes.appBarShift]: open
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.colorToolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default.a, {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.menuButton, {
            [classes.hide]: open
          }),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_32___default.a, {
          variant: "h6",
          noWrap: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this), titleToolbar ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "",
            src: "/images/logow.png",
            className: classes.imgToolbar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 28
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_33___default.a, {
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
          lineNumber: 232,
          columnNumber: 11
        }, this), search.length < 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
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
                    lineNumber: 249,
                    columnNumber: 48
                  }, this), " "]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 35
                }, this)
              }, void 0, false);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 19
          }, this)
        }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default.a, {
          "aria-label": "show 4 new mails",
          color: "inherit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_34___default.a, {
            badgeContent: 4,
            color: "secondary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_29___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default.a, {
          "aria-label": "show 17 new notifications",
          color: "inherit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_34___default.a, {
            badgeContent: 17,
            color: "secondary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_30___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default.a, {
          edge: "end",
          "aria-label": "account of current user",
          "aria-controls": menuId,
          "aria-haspopup": "true",
          onClick: handleProfileMenuOpen,
          color: "inherit",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_28___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_36___default.a, {
          anchorEl: anchorEl,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          id: menuId,
          keepMounted: true,
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right'
          },
          open: isMenuOpen,
          onClose: handleMenuClose,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_35___default.a, {
            onClick: handleMenuClose,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: "/Profile",
              children: "Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_35___default.a, {
            onClick: handleMenuClose,
            children: "My account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "permanent",
      className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      }),
      classes: {
        paper: clsx__WEBPACK_IMPORTED_MODULE_8___default()({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "",
            src: "/images/logow.png",
            className: classes.img
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 16
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_31___default.a, {
          onClick: handleDrawerClose,
          children: theme.direction === 'rtl' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 42
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 65
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/Calcio",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Calcio',
            onClick: e => handleListItemClick(e, 'Calcio'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsSoccer__WEBPACK_IMPORTED_MODULE_20___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Calcio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Pallavvolo',
            onClick: e => handleListItemClick(e, 'Pallavvolo'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsVolleyball__WEBPACK_IMPORTED_MODULE_24___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Pallavvolo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Basket',
            onClick: e => handleListItemClick(e, 'Basket'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsBasketball__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 327,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 327,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Basket"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Rugby',
            onClick: e => handleListItemClick(e, 'Rugby'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsRugby__WEBPACK_IMPORTED_MODULE_26___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 332,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Rugby"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 331,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Football Americano',
            onClick: e => handleListItemClick(e, 'Football Americano'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsFootball__WEBPACK_IMPORTED_MODULE_27___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Football Americano"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/Tennis",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Tennis',
            onClick: e => handleListItemClick(e, 'Tennis'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsTennis__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Tennis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 343,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 34
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Paddle',
            onClick: e => handleListItemClick(e, 'Paddle'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsTennis__WEBPACK_IMPORTED_MODULE_19___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Paddle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 346,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
            button: true,
            selected: selectedIndex === 'Golf',
            onClick: e => handleListItemClick(e, 'Golf'),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_SportsGolf__WEBPACK_IMPORTED_MODULE_25___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
              primary: "Golf"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_29___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
            primary: "Contacts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RecentActors__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 30
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
            primary: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_17___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_23___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 370,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_18___default.a, {
            primary: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/logo.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Learn how to build a personal website using Next.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:image",
          content: `https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "og:title",
          content: siteTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "twitter:card",
          content: "summary_large_image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        style: {
          float: 'left'
        },
        children: home ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 402,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/images/logow.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 20
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 22
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 27
          }, this)]
        }, void 0, true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 7
      }, this), !home && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\u2190 Back to home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 416,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__oiF2U",
	"header": "Layout_header__1QKCU",
	"headerImage": "Layout_headerImage__2gQKR",
	"headerHomeImage": "Layout_headerHomeImage__1oYt-",
	"backToHome": "Layout_backToHome__33_Xf"
};


/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ImageOutlined */ "@material-ui/icons/ImageOutlined");
/* harmony import */ var _material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/EmojiEmotionsOutlined */ "@material-ui/icons/EmojiEmotionsOutlined");
/* harmony import */ var _material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\User\\Desktop\\Social Network\\social-network\\pages\\Home.js";















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root1: {
    flexGrow: 1
  },
  post: {
    letterSpacing: 1.3,
    color: 'white',
    fontSize: 11,
    fontFamily: 'Poppins',
    borderRadius: 20,
    float: 'right',
    background: 'green'
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 38,
    padding: '0 20px'
  },
  home: {
    marginBottom: 15,
    border: '1px solid gray',
    borderRadius: 4
  },
  writePost: {
    marginBottom: 15
  },
  container: {
    border: '1px solid #d9d9d9',
    borderRadius: 2
  },
  textField: {},
  card: {
    borderRadius: 20,
    background: '#f2f2f2',
    maxWidth: 345
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
        lineNumber: 71,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.root1,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: classes.card,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12___default.a, {
                component: "img",
                alt: "Contemplative Reptile",
                height: "140",
                image: "/images/logow.png",
                title: "Contemplative Reptile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "Lizard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                size: "small",
                color: "primary",
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                size: "small",
                color: "primary",
                children: "Learn More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: 7,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            align: "center",
            style: {
              marginLeft: 10
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/me.jpg",
              className: ` ${_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle}`,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              style: {
                fontFamily: 'Poppins'
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.writePost,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
              multiline: true,
              rows: 1,
              rowsMax: 20,
              className: classes.textField,
              fullWidth: true,
              variant: "outlined",
              placeholder: "What's appening ?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 12
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {
              style: {
                float: 'right',
                marginRight: 5
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
              style: {
                float: 'right',
                marginRight: 5,
                marginLeft: 10
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
              className: classes.post,
              children: "Post"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 12
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.blogContainer,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingMd,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingLgB,
                style: {
                  color: 'black'
                },
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
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
                      lineNumber: 146,
                      columnNumber: 34
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                      dateTime: "",
                      children: "Up-to-date"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 16
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 14
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: "/posts/Covid19Data",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Covid-19 Analitycs and Statistics "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 154,
                      columnNumber: 46
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                      dateTime: "2020-11-09",
                      children: "November 9, 2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 16
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 14
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: "/posts/firstPost",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Your first React App "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 44
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                      dateTime: "2020-01-02",
                      children: "January 2, 2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 16
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 14
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 12
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: "/posts/MongoDBApp",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: "Mongo DB, React js and Typescript all in one single web application "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 14
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("time", {
                      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headingSm,
                      dateTime: "2020-05-12",
                      children: "May 12, 2020"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 16
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 14
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 11
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 7
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          item: true,
          xs: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, {
            className: classes.card,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                style: {
                  fontSize: 28,
                  fontFamily: 'Poppins',
                  marginLeft: 35,
                  lineHeight: 1
                },
                children: "Trends"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "Chiellini"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "As Roma"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "Chiara Ferragni"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "Chiellini"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "As Roma"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  style: {
                    fontFamily: 'Poppins'
                  },
                  children: "Chiara Ferragni"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 13
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  style: {
                    color: 'black'
                  },
                  children: "cshdcbbsknksdmklsmc"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 187,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                size: "small",
                color: "primary",
                children: "Share"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                size: "small",
                color: "primary",
                children: "Learn More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
	"colorName": "utils_colorName__3_TUk",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"linkEmail": "utils_linkEmail__1RFAP",
	"link": "utils_link__Sf0UQ",
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

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

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

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

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

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "@material-ui/icons/ChevronRight":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChevronRight" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronRight");

/***/ }),

/***/ "@material-ui/icons/EmojiEmotionsOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/EmojiEmotionsOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EmojiEmotionsOutlined");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/ImageOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ImageOutlined" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ImageOutlined");

/***/ }),

/***/ "@material-ui/icons/Mail":
/*!******************************************!*\
  !*** external "@material-ui/icons/Mail" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Mail");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/RecentActors":
/*!**************************************************!*\
  !*** external "@material-ui/icons/RecentActors" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/RecentActors");

/***/ }),

/***/ "@material-ui/icons/SportsBasketball":
/*!******************************************************!*\
  !*** external "@material-ui/icons/SportsBasketball" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsBasketball");

/***/ }),

/***/ "@material-ui/icons/SportsFootball":
/*!****************************************************!*\
  !*** external "@material-ui/icons/SportsFootball" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsFootball");

/***/ }),

/***/ "@material-ui/icons/SportsGolf":
/*!************************************************!*\
  !*** external "@material-ui/icons/SportsGolf" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsGolf");

/***/ }),

/***/ "@material-ui/icons/SportsRugby":
/*!*************************************************!*\
  !*** external "@material-ui/icons/SportsRugby" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsRugby");

/***/ }),

/***/ "@material-ui/icons/SportsSoccer":
/*!**************************************************!*\
  !*** external "@material-ui/icons/SportsSoccer" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsSoccer");

/***/ }),

/***/ "@material-ui/icons/SportsTennis":
/*!**************************************************!*\
  !*** external "@material-ui/icons/SportsTennis" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsTennis");

/***/ }),

/***/ "@material-ui/icons/SportsVolleyball":
/*!******************************************************!*\
  !*** external "@material-ui/icons/SportsVolleyball" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsVolleyball");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Ib21lLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FbW9qaUVtb3Rpb25zT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ltYWdlT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVjZW50QWN0b3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c0Jhc2tldGJhbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzRm9vdGJhbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzR29sZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNSdWdieVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNTb2NjZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzVGVubmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c1ZvbGxleWJhbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwiYXBwQmFyU2hpZnQiLCJtYXJnaW5MZWZ0IiwiZHJhd2VyV2lkdGgiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiaGlkZSIsImZsZXhTaHJpbmsiLCJ3aGl0ZVNwYWNlIiwiZHJhd2VyT3BlbiIsImRyYXdlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4IiwiaW1nIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImltZ1Rvb2xiYXIiLCJjb2xvclRvb2xiYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbnB1dFJvb3QiLCJmbGV4R3JvdyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImlucHV0SW5wdXQiLCJwYWRkaW5nTGVmdCIsIm5hbWUiLCJkYXRhIiwidGl0b2xvIiwibGluayIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsInRpdGxlVG9vbGJhciIsInNldFRpdGxlVG9vbGJhciIsInVzZVN0YXRlIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJzZWxlY3RlZEluZGV4Iiwic2V0U2VsZWN0ZWRJbmRleCIsIm1vYmlsZU1vcmVBbmNob3JFbCIsInNldE1vYmlsZU1vcmVBbmNob3JFbCIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJlIiwic3BvcnQiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVNZW51Q2xvc2UiLCJoYW5kbGVNb2JpbGVNZW51Q2xvc2UiLCJoYW5kbGVQcm9maWxlTWVudU9wZW4iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZW51SWQiLCJpc01lbnVPcGVuIiwiQm9vbGVhbiIsImNsc3giLCJpbnB1dCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwibWFyZ2luVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcCIsInN1Z2ciLCJpIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInBhcGVyIiwiZGlyZWN0aW9uIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZW5jb2RlVVJJIiwiZmxvYXQiLCJiYWNrVG9Ib21lIiwicm9vdDEiLCJwb3N0IiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImJveFNoYWRvdyIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsIndyaXRlUG9zdCIsInRleHRGaWVsZCIsImNhcmQiLCJIb21lIiwidXRpbFN0eWxlcyIsImJvcmRlckNpcmNsZSIsImJsb2dDb250YWluZXIiLCJoZWFkaW5nTWQiLCJoZWFkaW5nTGdCIiwibGlzdCIsImxpc3RJdGVtIiwiaGVhZGluZ1NtIiwibGluZUhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuQ0EsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvSG9tZS5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IFRvb2xiYXIgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IENoZXZyb25SaWdodEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcclxuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgU3BvcnRzVGVubmlzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzVGVubmlzJztcclxuaW1wb3J0IFNwb3J0c1NvY2Nlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c1NvY2Nlcic7XHJcbmltcG9ydCBTcG9ydHNCYXNrZXRiYWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzQmFza2V0YmFsbCc7XHJcbmltcG9ydCBSZWNlbnRBY3RvcnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZWNlbnRBY3RvcnMnO1xyXG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwJztcclxuaW1wb3J0IFNwb3J0c1ZvbGxleWJhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNWb2xsZXliYWxsJztcclxuaW1wb3J0IFNwb3J0c0dvbGZJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNHb2xmJztcclxuaW1wb3J0IFNwb3J0c1J1Z2J5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzUnVnYnknO1xyXG5pbXBvcnQgU3BvcnRzRm9vdGJhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNGb290YmFsbCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QmFzZSc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBhcHBCYXJTaGlmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiA1LFxyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBkcmF3ZXJDbG9zZToge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdG9vbGJhcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OjEsXHJcbiAgICBwYWRkaW5nOnRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG1hcmdpbkxlZnQ6MTUsXHJcbiAgICBtYXhXaWR0aDonOTAlJyxcclxuICAgIG1heEhlaWdodDonMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6J2NvbnRhaW4nLFxyXG4gICAgYmFja2dyb3VuZFNpemU6J2NvdmVyJ1xyXG4gIH0sXHJcbiAgaW1nVG9vbGJhcjoge1xyXG4gICAgbWFyZ2luTGVmdDowXHJcbiAgfSxcclxuICBjb2xvclRvb2xiYXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjonIzAwNjY2NidcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgbWFyZ2luTGVmdDoyMDAsXHJcbiAgICBtYXJnaW5SaWdodDoyMDAsXHJcbiAgICBmbGV4R3JvdzoxLFxyXG4gICAgYm9yZGVyOicycHggc29saWQgZ3JlZW4nLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGNvbG9yOidibGFjaycsXHJcbiAgICBib3JkZXJSYWRpdXM6NVxyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgLy8gdmVydGljYWwgcGFkZGluZyArIGZvbnQgc2l6ZSBmcm9tIHNlYXJjaEljb25cclxuICAgIHBhZGRpbmdMZWZ0OiBgY2FsYygxZW0gKyAke3RoZW1lLnNwYWNpbmcoNCl9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnKSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTJjaCcsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIHdpZHRoOiAnMjBjaCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IG5hbWUgPSAnRmlsaXBwbyBEZSBNYXJjbydcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YT1bXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnVXNlcnMnLFxyXG4gICAgbGluazogJ1VzZXJzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnQ292aWQgMTkgQW5hbHl0aWNzICcsXHJcbiAgICBsaW5rOiAnQ292aWQxOURhdGEnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRvbG86ICdZb3VyIGZpcnN0IFJlYWN0IEFwcCcsXHJcbiAgICBsaW5rOiAnZmlyc3RQb3N0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnTW9uZ29EQiwgUmVhY3QgSnMgYW5kIFR5cGVzY3JpcHQgYWxsIGluIG9uZSBzaW5nbGUgd2ViIGFwcGxpY2F0aW9uJyxcclxuICAgIGxpbms6ICdNb25nb0RCQXBwJ1xyXG4gIH0sXHJcbl1cclxuLyoqXHJcbiAqIFJldHVybiB0aGUgc2l0ZSBuYW1lXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHQuanMgU2FtcGxlIFdlYnNpdGUnXHJcblxyXG4vKiBcclxuICpcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGhvbWUgfSkge1xyXG4gIGNvbnN0IFt0aXRsZVRvb2xiYXIsc2V0VGl0bGVUb29sYmFyXT11c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbW9iaWxlTW9yZUFuY2hvckVsLCBzZXRNb2JpbGVNb3JlQW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZSxzcG9ydCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbmRleChzcG9ydCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRUaXRsZVRvb2xiYXIoIXRpdGxlVG9vbGJhcilcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmF3ZXJDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0VGl0bGVUb29sYmFyKCF0aXRsZVRvb2xiYXIpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWVudUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBoYW5kbGVNb2JpbGVNZW51Q2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVNb3JlQW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZU1lbnVPcGVuID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SWQgPSAncHJpbWFyeS1zZWFyY2gtYWNjb3VudC1tZW51JztcclxuICBjb25zdCBpc01lbnVPcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG4gICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cInN0aWNreVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhciAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbG9yVG9vbGJhcn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5tZW51QnV0dG9uLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuaGlkZV06IG9wZW4sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7IHRpdGxlVG9vbGJhciA/IDxkaXY+PGltZyBhbHQ9XCJcIiBzcmMgPSBcIi9pbWFnZXMvbG9nb3cucG5nXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ1Rvb2xiYXJ9PjwvaW1nPjwvZGl2PjogPD48Lz59XHJcbiAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0geyAoZSkgPT4geyBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpIH0gfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlYXJjaC5sZW5ndGg8MCAmJlxyXG4gICAgICAgICAgICAgICAgPD48dWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxMzE0MTcnLCBtYXJnaW5Ub3A6MCwgcGFkZGluZ0JvdHRvbToyMCxib3JkZXJSYWRpdXM6MTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCAoc3VnZyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggc3VnZy50aXRvbG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgIDw+PGxpIGtleT17aX0gPjxhIGhyZWY9IHtgL3Bvc3RzLyR7c3VnZy5saW5rfWB9ID57c3VnZy50aXRvbG99PC9hPiA8L2xpPjwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD48Lz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgNCBuZXcgbWFpbHNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPE1haWxJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNob3cgMTcgbmV3IG5vdGlmaWNhdGlvbnNcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXsxN30gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFjY291bnQgb2YgY3VycmVudCB1c2VyXCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXttZW51SWR9XHJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVNZW51T3Blbn1cclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGUgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdyaWdodCcgfX1cclxuICAgICAgICAgICAgaWQ9e21lbnVJZH1cclxuICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICBvcGVuPXtpc01lbnVPcGVufVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVNZW51Q2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVNZW51Q2xvc2V9PjxMaW5rIGhyZWY9XCIvUHJvZmlsZVwiPlByb2ZpbGU8L0xpbms+PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcblxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcblxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZHJhd2VyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbixcclxuICAgICAgICAgIFtjbGFzc2VzLmRyYXdlckNsb3NlXTogIW9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcGFwZXI6IGNsc3goe1xyXG4gICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbixcclxuICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbixcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cclxuICAgICAgICAgIDxkaXY+PGltZyBhbHQ9XCJcIiBzcmM9XCIvaW1hZ2VzL2xvZ293LnBuZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PjwvaW1nPjwvZGl2PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IDxDaGV2cm9uUmlnaHRJY29uIC8+IDogPENoZXZyb25MZWZ0SWNvbiAvPn1cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ2FsY2lvXCI+PExpc3RJdGVtIGJ1dHRvbiBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gJ0NhbGNpbyd9IG9uQ2xpY2s9eyAoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnQ2FsY2lvJykgfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNTb2NjZXJJY29uIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdDYWxjaW8nIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48TGlzdEl0ZW0gYnV0dG9uIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSAnUGFsbGF2dm9sbyd9IG9uQ2xpY2s9eyAoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnUGFsbGF2dm9sbycpfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNWb2xsZXliYWxsSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nUGFsbGF2dm9sbycgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT48L0xpbms+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxMaXN0SXRlbSBidXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09ICdCYXNrZXQnfSBvbkNsaWNrPXsgKGUpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZSwgJ0Jhc2tldCcpIH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48U3BvcnRzQmFza2V0YmFsbEljb24gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0Jhc2tldCcgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxMaXN0SXRlbSBidXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09ICdSdWdieSd9IG9uQ2xpY2s9eyAoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnUnVnYnknKX0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48U3BvcnRzUnVnYnlJY29uIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdSdWdieScgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxMaXN0SXRlbSBidXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09ICdGb290YmFsbCBBbWVyaWNhbm8nfSBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnRm9vdGJhbGwgQW1lcmljYW5vJyl9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PFNwb3J0c0Zvb3RiYWxsSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nRm9vdGJhbGwgQW1lcmljYW5vJyAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPjwvTGluaz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVGVubmlzXCI+PExpc3RJdGVtIGJ1dHRvbiBzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gJ1Rlbm5pcyd9IG9uQ2xpY2s9eyAoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnVGVubmlzJyl9PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PFNwb3J0c1Rlbm5pc0ljb24gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J1Rlbm5pcycgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxMaXN0SXRlbSBidXR0b24gc2VsZWN0ZWQ9e3NlbGVjdGVkSW5kZXggPT09ICdQYWRkbGUnfSBvbkNsaWNrPXsgKGUpID0+IGhhbmRsZUxpc3RJdGVtQ2xpY2soZSwgJ1BhZGRsZScpfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNUZW5uaXNJY29uIC8+PC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PSdQYWRkbGUnIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48TGlzdEl0ZW0gYnV0dG9uIHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSAnR29sZid9IG9uQ2xpY2s9eyAoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCAnR29sZicpfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPjxTcG9ydHNHb2xmSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nR29sZicgLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT48L0xpbms+XHJcbiAgICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICA8TGlzdD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+IDxNYWlsSWNvbiAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT0nQ29udGFjdHMnIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj4gPFJlY2VudEFjdG9yc0ljb24gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0Fib3V0JyAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PEV4aXRUb0FwcEljb24gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9J0xvZyBvdXQnIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L0xpc3Q+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG5cclxuICBcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxyXG4gICAgICAgICAgICBzaXRlVGl0bGVcclxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyIHN0eWxlPXt7ZmxvYXQ6J2xlZnQnfX0gPlxyXG4gICAgICAgIHsgaG9tZSA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD4gIDxici8+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdy5wbmdcIj48L2ltZz48L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPjxici8+PGJyLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcblxyXG4gICAgICB7ICFob21lICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tUb0hvbWV9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxheW91dF9jb250YWluZXJfX29pRjJVXCIsXG5cdFwiaGVhZGVyXCI6IFwiTGF5b3V0X2hlYWRlcl9fMVFLQ1VcIixcblx0XCJoZWFkZXJJbWFnZVwiOiBcIkxheW91dF9oZWFkZXJJbWFnZV9fMmdRS1JcIixcblx0XCJoZWFkZXJIb21lSW1hZ2VcIjogXCJMYXlvdXRfaGVhZGVySG9tZUltYWdlX18xb1l0LVwiLFxuXHRcImJhY2tUb0hvbWVcIjogXCJMYXlvdXRfYmFja1RvSG9tZV9fMzNfWGZcIlxufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBEaXZpZGVyLEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IEltYWdlT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9JbWFnZU91dGxpbmVkJztcclxuaW1wb3J0IEVtb2ppRW1vdGlvbnNPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppRW1vdGlvbnNPdXRsaW5lZCc7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290MToge1xyXG4gICAgICBmbGV4R3JvdzoxXHJcbiAgICB9LFxyXG4gICAgcG9zdDoge1xyXG4gICAgICBsZXR0ZXJTcGFjaW5nOjEuMyxcclxuICAgICAgY29sb3I6J3doaXRlJyxcclxuICAgICAgZm9udFNpemU6MTEsXHJcbiAgICAgIGZvbnRGYW1pbHk6J1BvcHBpbnMnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6MjAsXHJcbiAgICAgIGZsb2F0OidyaWdodCcsXHJcbiAgICAgIGJhY2tncm91bmQ6J2dyZWVuJ1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKScsXHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDNweCA1cHggMnB4IHJnYmEoMjU1LCAxMDUsIDEzNSwgLjMpJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGhlaWdodDogMzgsXHJcbiAgICAgIHBhZGRpbmc6ICcwIDIwcHgnLFxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOjE1LFxyXG4gICAgICBib3JkZXI6JzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOjRcclxuICAgIH0sXHJcbiAgICB3cml0ZVBvc3Q6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOjE1XHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIGJvcmRlcjonMXB4IHNvbGlkICNkOWQ5ZDknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6MlxyXG4gICAgfSxcclxuICAgIHRleHRGaWVsZDoge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBjYXJkOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czoyMCxcclxuICAgICAgYmFja2dyb3VuZDonI2YyZjJmMicsXHJcbiAgICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICBcclxuICAgIFxyXG48TGF5b3V0IGhvbWU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5GRE08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdDF9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxHcmlkICBpdGVtIHhzPlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTQwXCJcclxuICAgICAgICAgIGltYWdlPVwiL2ltYWdlcy9sb2dvdy5wbmdcIlxyXG4gICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIExpemFyZFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICBMaXphcmRzIGFyZSBhIHdpZGVzcHJlYWQgZ3JvdXAgb2Ygc3F1YW1hdGUgcmVwdGlsZXMsIHdpdGggb3ZlciA2LDAwMCBzcGVjaWVzLCByYW5naW5nXHJcbiAgICAgICAgICAgIGFjcm9zcyBhbGwgY29udGluZW50cyBleGNlcHQgQW50YXJjdGljYVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgU2hhcmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17N30+XHJcbiAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiIHN0eWxlPXt7bWFyZ2luTGVmdDoxMH19PlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL21lLmpwZ1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPiBcclxuICAgICAgPGgyIHN0eWxlPXt7Zm9udEZhbWlseTonUG9wcGlucyd9fT5Ib21lPC9oMj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cml0ZVBvc3R9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgIFxyXG4gICAgICBtdWx0aWxpbmVcclxuICAgICAgcm93cz17MX1cclxuICAgICAgcm93c01heD17MjB9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCdzIGFwcGVuaW5nID9cIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnIvPjxici8+XHJcbiAgICAgIDxFbW9qaUVtb3Rpb25zT3V0bGluZWRJY29uIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0JyxtYXJnaW5SaWdodDo1fX0vPlxyXG4gICAgICA8SW1hZ2VPdXRsaW5lZEljb24gIHN0eWxlPXt7ZmxvYXQ6J3JpZ2h0JyxtYXJnaW5SaWdodDo1LG1hcmdpbkxlZnQ6MTB9fS8+XHJcbiAgICAgIDxCdXR0b24gIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N0fT5Qb3N0PC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnIvPjxici8+XHJcblxyXG4gICAgICA8RGl2aWRlci8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ibG9nQ29udGFpbmVyfT5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ0J9IHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PkJsb2c8L2gxPlxyXG4gICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cclxuXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXNlcnNcIj48YT5Vc2VyczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1NtfSBkYXRlVGltZT1cIlwiPlVwLXRvLWRhdGU8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICBcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9Db3ZpZDE5RGF0YVwiPjxhID5Db3ZpZC0xOSBBbmFsaXR5Y3MgYW5kIFN0YXRpc3RpY3MgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0xMS0wOVwiPk5vdmVtYmVyIDksIDIwMjA8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL2ZpcnN0UG9zdFwiPjxhPllvdXIgZmlyc3QgUmVhY3QgQXBwIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgPHNtYWxsPlxyXG4gICAgICAgICAgICAgICA8dGltZSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ1NtfSBkYXRlVGltZT1cIjIwMjAtMDEtMDJcIj5KYW51YXJ5IDIsIDIwMjA8L3RpbWU+XHJcbiAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvTW9uZ29EQkFwcFwiPjxhPk1vbmdvIERCLCBSZWFjdCBqcyBhbmQgVHlwZXNjcmlwdCBhbGwgaW4gb25lIHNpbmdsZSB3ZWIgYXBwbGljYXRpb24gPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0wNS0xMlwiPk1heSAxMiwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgIDwvdWw+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0dyaWQ+XHJcblxyXG4gICAgPEdyaWQgIGl0ZW0geHM+XHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICBcclxuICAgICAgICAgIDxoMiBzdHlsZT17e2ZvbnRTaXplOjI4LCBmb250RmFtaWx5OidQb3BwaW5zJyxtYXJnaW5MZWZ0OjM1LGxpbmVIZWlnaHQ6MX19PlRyZW5kczwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZvbnRGYW1pbHk6J1BvcHBpbnMnfX0+Q2hpZWxsaW5pPC9oND5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+Y3NoZGNiYnNrbmtzZG1rbHNtYzwvcD5cclxuXHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZvbnRGYW1pbHk6J1BvcHBpbnMnfX0+QXMgUm9tYTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PmNzaGRjYmJza25rc2Rta2xzbWM8L3A+XHJcblxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidQb3BwaW5zJ319PkNoaWFyYSBGZXJyYWduaTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PmNzaGRjYmJza25rc2Rta2xzbWM8L3A+XHJcblxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidQb3BwaW5zJ319PkNoaWVsbGluaTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PmNzaGRjYmJza25rc2Rta2xzbWM8L3A+XHJcblxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidQb3BwaW5zJ319PkFzIFJvbWE8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT5jc2hkY2Jic2tua3NkbWtsc21jPC9wPlxyXG5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTonUG9wcGlucyd9fT5DaGlhcmEgRmVycmFnbmk8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT5jc2hkY2Jic2tua3NkbWtsc21jPC9wPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICBcclxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBTaGFyZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICA8L0NhcmQ+XHJcbiAgICA8L0dyaWQ+XHJcblxyXG4gICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvTGF5b3V0PlxyXG4gIClcclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmcyWGxcIjogXCJ1dGlsc19oZWFkaW5nMlhsX18xSTY1bVwiLFxuXHRcImhlYWRpbmdYbFwiOiBcInV0aWxzX2hlYWRpbmdYbF9fMVhlY05cIixcblx0XCJoZWFkaW5nTGdCXCI6IFwidXRpbHNfaGVhZGluZ0xnQl9fMnRCMzRcIixcblx0XCJoZWFkaW5nTGdcIjogXCJ1dGlsc19oZWFkaW5nTGdfX2RlN3AwXCIsXG5cdFwiaGVhZGluZ01kXCI6IFwidXRpbHNfaGVhZGluZ01kX18zZGU2R1wiLFxuXHRcImhlYWRpbmdTbVwiOiBcInV0aWxzX2hlYWRpbmdTbV9fM0xGalFcIixcblx0XCJoZWFkaW5nWHNcIjogXCJ1dGlsc19oZWFkaW5nWHNfX3pFejRSXCIsXG5cdFwiYm9yZGVyQ2lyY2xlXCI6IFwidXRpbHNfYm9yZGVyQ2lyY2xlX18xM3FkSlwiLFxuXHRcImNvbG9yTmFtZVwiOiBcInV0aWxzX2NvbG9yTmFtZV9fM19UVWtcIixcblx0XCJjb2xvckluaGVyaXRcIjogXCJ1dGlsc19jb2xvckluaGVyaXRfXzNHdWRmXCIsXG5cdFwicGFkZGluZzFweFwiOiBcInV0aWxzX3BhZGRpbmcxcHhfX29Dbnk4XCIsXG5cdFwibGlzdFwiOiBcInV0aWxzX2xpc3RfX1M3X3BlXCIsXG5cdFwibGlzdEl0ZW1cIjogXCJ1dGlsc19saXN0SXRlbV9fMmVKcEpcIixcblx0XCJsaW5rRW1haWxcIjogXCJ1dGlsc19saW5rRW1haWxfXzFSRkFQXCIsXG5cdFwibGlua1wiOiBcInV0aWxzX2xpbmtfX1NmMFVRXCIsXG5cdFwibGlnaHRUZXh0XCI6IFwidXRpbHNfbGlnaHRUZXh0X18xMkNrbVwiLFxuXHRcIkFwcEJhclwiOiBcInV0aWxzX0FwcEJhcl9fMWV2VmpcIixcblx0XCJzZWFyY2hcIjogXCJ1dGlsc19zZWFyY2hfX09ScEFrXCIsXG5cdFwiZm9sbG93XCI6IFwidXRpbHNfZm9sbG93X19MZDhQd1wiLFxuXHRcImludHJvXCI6IFwidXRpbHNfaW50cm9fXzdxMjg1XCIsXG5cdFwiYmxvZ0NvbnRhaW5lclwiOiBcInV0aWxzX2Jsb2dDb250YWluZXJfX2hJTGpfXCIsXG5cdFwicG9wcGluc1wiOiBcInV0aWxzX3BvcHBpbnNfX0dfaGxzXCIsXG5cdFwiY29udGFpbmVyXCI6IFwidXRpbHNfY29udGFpbmVyX18ySE9melwiLFxuXHRcIm1haW5cIjogXCJ1dGlsc19tYWluX18xR1l4ZlwiLFxuXHRcInVzZXJJbmZvXCI6IFwidXRpbHNfdXNlckluZm9fXzM3ZnJDXCIsXG5cdFwidXNlckluZm9JZFwiOiBcInV0aWxzX3VzZXJJbmZvSWRfXzFnczQ0XCIsXG5cdFwiZm9vdGVyXCI6IFwidXRpbHNfZm9vdGVyX18zZDNFb1wiLFxuXHRcInRpdGxlXCI6IFwidXRpbHNfdGl0bGVfXzJ3MlhLXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJ1dGlsc19kZXNjcmlwdGlvbl9fMTd6blVcIixcblx0XCJjb2RlXCI6IFwidXRpbHNfY29kZV9fMk90WXBcIixcblx0XCJncmlkXCI6IFwidXRpbHNfZ3JpZF9fTUZlLUxcIixcblx0XCJjYXJkXCI6IFwidXRpbHNfY2FyZF9fMk5qNm9cIixcblx0XCJsb2dvXCI6IFwidXRpbHNfbG9nb19fWk9Gai1cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGV2cm9uUmlnaHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Vtb2ppRW1vdGlvbnNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhpdFRvQXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9JbWFnZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9SZWNlbnRBY3RvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c0Jhc2tldGJhbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c0Zvb3RiYWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNHb2xmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNSdWdieVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3BvcnRzU29jY2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TcG9ydHNUZW5uaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nwb3J0c1ZvbGxleWJhbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9