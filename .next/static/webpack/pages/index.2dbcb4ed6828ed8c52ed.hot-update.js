webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: data, siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\components\\Layout.js",
    _s = $RefreshSig$();














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__["makeStyles"])(function (theme) {
  return {
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
    inputInput: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), "px)"),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    })
  };
});
var name = 'Filippo De Marco';
var data = [{
  titolo: 'Covid 19 Analytics ',
  link: 'Covid19Data'
}, {
  titolo: 'Your first React App',
  link: 'firstPost'
}, {
  titolo: 'MongoDB, React Js and Typescript all in one single web application',
  link: 'MongoDBApp'
}];
var siteTitle = 'Next.js Sample Website';
/* 
 *
*/

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children,
      home = _ref.home;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      search = _useState[0],
      setSearch = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
      rel: "stylesheet"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        backgroundColor: '#333333'
      },
      position: "static",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        style: {
          paddingTop: 12,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 12,
          height: 85
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          "aria-label": "",
          style: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: "black"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: {
            width: 65,
            height: 65
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: {
            width: 60,
            height: 60
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: {
            width: 70,
            height: 70,
            marginRight: 11
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          variant: "h6",
          className: classes.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    }, this), search.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      style: {
        backgroundColor: '#131417',
        marginTop: 0,
        paddingBottom: 20,
        borderRadius: 10
      },
      children: data.map(function (sugg, i) {
        return sugg.titolo.toLowerCase().includes(search) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              href: "/posts/".concat(sugg.link),
              children: sugg.titolo
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 36
            }, _this), " "]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 23
          }, _this)
        }, void 0, false);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "icon",
          href: "/logo.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          name: "description",
          content: "Learn how to build a personal website using Next.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          property: "og:image",
          content: "https://og-image.now.sh/".concat(encodeURI(siteTitle), ".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          name: "og:title",
          content: siteTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
        children: home ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            src: "/images/logo.jpg",
            className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerHomeImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.borderCircle),
            alt: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.heading2Xl,
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
            onChange: function onChange(e) {
              setSearch(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                src: "/images/logo.jpg",
                className: "".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerImage, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.borderCircle),
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
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.poppins,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.colorInherit,
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }, this), !home && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backToHome,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
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

_s(Layout, "DDgK46c9J4weAT+OgZf2pjKB5tQ=", false, function () {
  return [useStyles];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiaW5wdXRSb290IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5hbWUiLCJkYXRhIiwidGl0b2xvIiwibGluayIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmRJbWFnZSIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcCIsInN1Z2ciLCJpIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImVuY29kZVVSSSIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nMlhsIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJJbWFnZSIsInBvcHBpbnMiLCJjb2xvckluaGVyaXQiLCJiYWNrVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDRFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUU7QUFETixLQURpQztBQUl2Q0MsY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQ7QUFESCxLQUoyQjtBQU92Q0MsU0FBSyxFQUFFO0FBQ0xKLGNBQVEsRUFBRTtBQURMLEtBUGdDO0FBVXZDSyxhQUFTLEVBQUU7QUFDVEMsV0FBSyxFQUFFLE9BREU7QUFFVEMsa0JBQVksRUFBRSxDQUZMO0FBR1RDLFlBQU0sRUFBQyxrQkFIRTtBQUlUQyxnQkFBVSxFQUFDO0FBSkYsS0FWNEI7QUFnQnZDQyxjQUFVLEVBQUU7QUFDVkMsYUFBTyxFQUFFYixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBREQ7QUFFUjtBQUNBUyxpQkFBVyx1QkFBZ0JkLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FBaEIsUUFISDtBQUlSVSxnQkFBVSxFQUFFZixLQUFLLENBQUNnQixXQUFOLENBQWtCQyxNQUFsQixDQUF5QixPQUF6QixDQUpKO0FBS1JDLFdBQUssRUFBRTtBQUxDLE9BTVBsQixLQUFLLENBQUNtQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQU5PLEVBTXNCO0FBQzVCRixXQUFLLEVBQUUsTUFEcUI7QUFFNUIsaUJBQVc7QUFDVEEsYUFBSyxFQUFFO0FBREU7QUFGaUIsS0FOdEI7QUFoQjZCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBK0JBLElBQU1HLElBQUksR0FBRyxrQkFBYjtBQUVPLElBQU1DLElBQUksR0FBQyxDQUNoQjtBQUNFQyxRQUFNLEVBQUUscUJBRFY7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEZ0IsRUFLaEI7QUFDRUQsUUFBTSxFQUFFLHNCQURWO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTGdCLEVBU2hCO0FBQ0VELFFBQU0sRUFBRSxvRUFEVjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRnQixDQUFYO0FBY0EsSUFBTUMsU0FBUyxHQUFHLHdCQUFsQjtBQUVQO0FBQ0E7QUFDQTs7QUFDZSxTQUFTQyxNQUFULE9BQW9DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNqRCxNQUFNQyxPQUFPLEdBQUcvQixTQUFTLEVBQXpCOztBQURpRCxrQkFFeEJnQyxzREFBUSxDQUFDLEVBQUQsQ0FGZ0I7QUFBQSxNQUUxQ0MsTUFGMEM7QUFBQSxNQUVuQ0MsU0FGbUM7O0FBSWpELHNCQUNFO0FBQUEsNEJBQ0E7QUFBTSxVQUFJLEVBQUMsd0VBQVg7QUFBb0YsU0FBRyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLHFFQUFDLGdFQUFEO0FBQVEsV0FBSyxFQUFFO0FBQUNDLHVCQUFlLEVBQUU7QUFBbEIsT0FBZjtBQUE2QyxjQUFRLEVBQUMsUUFBdEQ7QUFBQSw2QkFDRSxxRUFBQyxpRUFBRDtBQUFTLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFDLEVBQVo7QUFBZXBCLHFCQUFXLEVBQUMsRUFBM0I7QUFBOEJxQixzQkFBWSxFQUFDLEVBQTNDO0FBQStDQyx1QkFBYSxFQUFDLEVBQTdEO0FBQWlFQyxnQkFBTSxFQUFFO0FBQXpFLFNBQWhCO0FBQUEsZ0NBRUUscUVBQUMsb0VBQUQ7QUFBYSx3QkFBWSxFQUF6QjtBQUE0QixlQUFLLEVBQUU7QUFBQzFCLHNCQUFVLEVBQUMsa0RBQVo7QUFBK0RILGlCQUFLLEVBQUM7QUFBckUsV0FBbkM7QUFBQSxpQ0FDRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQU1FLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNVLGlCQUFLLEVBQUMsRUFBUDtBQUFVbUIsa0JBQU0sRUFBQztBQUFqQixXQUFuQjtBQUFBLGlDQUNHO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFVRSxxRUFBQyxvRUFBRDtBQUFZLGVBQUssRUFBRTtBQUFDbkIsaUJBQUssRUFBQyxFQUFQO0FBQVVtQixrQkFBTSxFQUFDO0FBQWpCLFdBQW5CO0FBQUEsaUNBQ0c7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWNFLHFFQUFDLG9FQUFEO0FBQVksZUFBSyxFQUFFO0FBQUNuQixpQkFBSyxFQUFDLEVBQVA7QUFBVW1CLGtCQUFNLEVBQUMsRUFBakI7QUFBb0JqQyx1QkFBVyxFQUFDO0FBQWhDLFdBQW5CO0FBQUEsaUNBQ0c7QUFBSyxlQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRixlQWtCRSxxRUFBQyxxRUFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQVMsRUFBRXlCLE9BQU8sQ0FBQ3ZCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGLGVBc0JFLHFFQUFDLGdFQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsZUFBSyxFQUFFO0FBQUVnQyxzQkFBVSxFQUFDLEVBQWI7QUFBZ0JELGtCQUFNLEVBQUMsRUFBdkI7QUFBMkIxQixzQkFBVSxFQUFDLGtEQUF0QztBQUF5RjRCLG9CQUFRLEVBQUMsRUFBbEc7QUFBcUdDLHlCQUFhLEVBQUMsWUFBbkg7QUFBaUlwQyx1QkFBVyxFQUFDO0FBQTdJLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRCRixlQXVCRSxxRUFBQyxnRUFBRDtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGVBQUssRUFBRTtBQUFFa0Msc0JBQVUsRUFBQyxFQUFiO0FBQWdCRCxrQkFBTSxFQUFDLEVBQXZCO0FBQTJCSSwyQkFBZSxFQUFFLGtEQUE1QztBQUFnR1IsMkJBQWUsRUFBQyxTQUFoSDtBQUEySE0sb0JBQVEsRUFBQyxFQUFwSTtBQUF3SUMseUJBQWEsRUFBQyxZQUF0SjtBQUFvS3BDLHVCQUFXLEVBQUM7QUFBaEwsV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxFQStCQzJCLE1BQU0sQ0FBQ1csTUFBUCxHQUFjLENBQWQsaUJBQ0Q7QUFBSSxXQUFLLEVBQUU7QUFBQ1QsdUJBQWUsRUFBQyxTQUFqQjtBQUE0QlUsaUJBQVMsRUFBQyxDQUF0QztBQUF5Q1AscUJBQWEsRUFBQyxFQUF2RDtBQUEwRDNCLG9CQUFZLEVBQUM7QUFBdkUsT0FBWDtBQUFBLGdCQUVRYSxJQUFJLENBQUNzQixHQUFMLENBQVUsVUFBQ0MsSUFBRCxFQUFNQyxDQUFOLEVBQVk7QUFDcEIsZUFBU0QsSUFBSSxDQUFDdEIsTUFBTCxDQUFZd0IsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNqQixNQUFuQyxDQUFGLGlCQUNEO0FBQUEsaUNBQUU7QUFBQSxvQ0FBYTtBQUFHLGtCQUFJLG1CQUFhYyxJQUFJLENBQUNyQixJQUFsQixDQUFQO0FBQUEsd0JBQW1DcUIsSUFBSSxDQUFDdEI7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBYjtBQUFBLGFBQVN1QixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBRix5QkFETjtBQUVELE9BSEQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENBLGVBMENBO0FBQUssZUFBUyxFQUFFRyx5REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0E7QUFBTSxjQUFJLEVBQUMsd0VBQVg7QUFBb0YsYUFBRyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFDRSxjQUFJLEVBQUMsYUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBT0U7QUFDRSxrQkFBUSxFQUFDLFVBRFg7QUFFRSxpQkFBTyxvQ0FBNkJDLFNBQVMsQ0FDM0MxQixTQUQyQyxDQUF0QztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFhRTtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQXNCLGlCQUFPLEVBQUVBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFjRTtBQUFNLGNBQUksRUFBQyxjQUFYO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQWtCRTtBQUFRLGlCQUFTLEVBQUV3Qix5REFBTSxDQUFDRyxNQUExQjtBQUFBLGtCQUNJeEIsSUFBSSxnQkFDSjtBQUFBLGtDQUNFO0FBQ0UsZUFBRyxFQUFDLGtCQUROO0FBRUUscUJBQVMsWUFBS3FCLHlEQUFNLENBQUNJLGVBQVosY0FBK0JDLGdFQUFVLENBQUNDLFlBQTFDLENBRlg7QUFHRSxlQUFHLEVBQUVsQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFJLHFCQUFTLEVBQUVpQyxnRUFBVSxDQUFDRSxVQUExQjtBQUFBLHNCQUF1Q25DO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsZUFPRSxxRUFBQyxvRUFBRDtBQUNFLHVCQUFXLEVBQUMsY0FEZDtBQUVFLG1CQUFPLEVBQUU7QUFDUHBCLGtCQUFJLEVBQUU0QixPQUFPLENBQUN0QixTQURQO0FBRVBrRCxtQkFBSyxFQUFFNUIsT0FBTyxDQUFDakI7QUFGUixhQUZYO0FBTUUsZ0JBQUksRUFBQyxRQU5QO0FBT0Usc0JBQVUsRUFBRTtBQUFFLDRCQUFjO0FBQWhCLGFBUGQ7QUFRRSxpQkFBSyxFQUFFbUIsTUFSVDtBQVNFLG9CQUFRLEVBQUssa0JBQUMyQixDQUFELEVBQU87QUFBRTFCLHVCQUFTLENBQUMwQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQTJCO0FBVG5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQSx3QkFESSxnQkFxQko7QUFBQSxrQ0FDRSxxRUFBQyxpREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFDRSxtQkFBRyxFQUFDLGtCQUROO0FBRUUseUJBQVMsWUFBS1gseURBQU0sQ0FBQ1ksV0FBWixjQUEyQlAsZ0VBQVUsQ0FBQ0MsWUFBdEMsQ0FGWDtBQUdFLG1CQUFHLEVBQUVsQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVVFO0FBQUkscUJBQVMsRUFBRWlDLGdFQUFVLENBQUNRLE9BQTFCO0FBQUEsbUNBQ0UscUVBQUMsaURBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUVSLGdFQUFVLENBQUNTLFlBQXpCO0FBQUEsMEJBQXdDMUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCRixlQTJERTtBQUFBLGtCQUFPTTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzREYsRUE2REksQ0FBQ0MsSUFBRCxpQkFDQTtBQUFLLGlCQUFTLEVBQUVxQix5REFBTSxDQUFDZSxVQUF2QjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDQTtBQUFBLGtCQURGO0FBa0hEOztHQXRIdUJ0QyxNO1VBQ041QixTOzs7S0FETTRCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmRiY2I0ZWQ2ODI4ZWQ4YzUyZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sYXlvdXQubW9kdWxlLmNzcydcclxuaW1wb3J0IFRvb2xiYXIgIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRCYXNlJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBpbnB1dFJvb3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgYm9yZGVyOicycHggc29saWQgb3JhbmdlJyxcclxuICAgIGJhY2tncm91bmQ6J2xpbmVhci1ncmFkaWVudCg0NWRlZywgI0ZFNkI4QiAzMCUsICNGRjhFNTMgOTAlKSdcclxuICB9LFxyXG4gIGlucHV0SW5wdXQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMCksXHJcbiAgICAvLyB2ZXJ0aWNhbCBwYWRkaW5nICsgZm9udCBzaXplIGZyb20gc2VhcmNoSWNvblxyXG4gICAgcGFkZGluZ0xlZnQ6IGBjYWxjKDFlbSArICR7dGhlbWUuc3BhY2luZyg0KX1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcpLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMmNoJyxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgd2lkdGg6ICcyMGNoJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgbmFtZSA9ICdGaWxpcHBvIERlIE1hcmNvJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGE9W1xyXG4gIHtcclxuICAgIHRpdG9sbzogJ0NvdmlkIDE5IEFuYWx5dGljcyAnLFxyXG4gICAgbGluazogJ0NvdmlkMTlEYXRhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnWW91ciBmaXJzdCBSZWFjdCBBcHAnLFxyXG4gICAgbGluazogJ2ZpcnN0UG9zdCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdG9sbzogJ01vbmdvREIsIFJlYWN0IEpzIGFuZCBUeXBlc2NyaXB0IGFsbCBpbiBvbmUgc2luZ2xlIHdlYiBhcHBsaWNhdGlvbicsXHJcbiAgICBsaW5rOiAnTW9uZ29EQkFwcCdcclxuICB9LFxyXG5dXHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnTmV4dC5qcyBTYW1wbGUgV2Vic2l0ZSdcclxuXHJcbi8qIFxyXG4gKlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXT11c2VTdGF0ZSgnJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICA8QXBwQmFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzMzMzMzMyd9fSBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICA8VG9vbGJhciBzdHlsZT17e3BhZGRpbmdUb3A6MTIscGFkZGluZ0xlZnQ6MjUscGFkZGluZ1JpZ2h0OjI1LCBwYWRkaW5nQm90dG9tOjEyLCBoZWlnaHQ6IDg1fX0+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uICBhcmlhLWxhYmVsPSBcIlwiIHN0eWxlPXt7YmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxjb2xvcjpcImJsYWNrXCIgfX0+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjY1LGhlaWdodDo2NX19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9yZWFjdC5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjYwLGhlaWdodDo2MH19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy90c0xvZ28ucG5nXCIvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gc3R5bGU9e3t3aWR0aDo3MCxoZWlnaHQ6NzAsbWFyZ2luUmlnaHQ6MTF9fT5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWF0ZXJpYWwucG5nXCIvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxCdXR0b24gaHJlZj1cIi9TaWduaW5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OjIwLGhlaWdodDo1NiwgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJyxmb250U2l6ZToxNCx0ZXh0VHJhbnNmb3JtOidjYXBpdGFsaXplJywgbWFyZ2luUmlnaHQ6Mn19PlNpZ24gaW48L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGhyZWY9XCIvTG9naW5cIiBzdHlsZT17eyBtYXJnaW5MZWZ0OjIwLGhlaWdodDo1NiwgYmFja2dyb3VuZEltYWdlOiAnbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzdlZThmYSAwJSwgIzgwZmY3MiA3NCUpJywgYmFja2dyb3VuZENvbG9yOicjN2VlOGZhJywgZm9udFNpemU6MTQsIHRleHRUcmFuc2Zvcm06J2NhcGl0YWxpemUnLCBtYXJnaW5SaWdodDoyfX0+IExvZyBpbiA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDwvVG9vbGJhcj4gXHJcbiAgICA8L0FwcEJhcj5cclxuXHJcbiAgICB7c2VhcmNoLmxlbmd0aD4wICYmXHJcbiAgICA8dWwgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6JyMxMzE0MTcnLCBtYXJnaW5Ub3A6MCwgcGFkZGluZ0JvdHRvbToyMCxib3JkZXJSYWRpdXM6MTB9fT5cclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIGRhdGEubWFwKCAoc3VnZyxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICggc3VnZy50aXRvbG8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpKVxyXG4gICAgICAgICAgICAgICAgJiYgIDw+PGxpIGtleT17aX0gPjxhIGhyZWY9IHtgL3Bvc3RzLyR7c3VnZy5saW5rfWB9ID57c3VnZy50aXRvbG99PC9hPiA8L2xpPjwvPlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgPC91bD5cclxuICAgIH1cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28uanBnXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2Uubm93LnNoLyR7ZW5jb2RlVVJJKFxyXG4gICAgICAgICAgICBzaXRlVGl0bGVcclxuICAgICAgICAgICl9LnBuZz90aGVtZT1saWdodCZtZD0wJmZvbnRTaXplPTc1cHgmaW1hZ2VzPWh0dHBzJTNBJTJGJTJGYXNzZXRzLnZlcmNlbC5jb20lMkZpbWFnZSUyRnVwbG9hZCUyRmZyb250JTJGYXNzZXRzJTJGZGVzaWduJTJGbmV4dGpzLWJsYWNrLWxvZ28uc3ZnYH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3NpdGVUaXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgeyBob21lID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nMlhsfT57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2jigKZcIlxyXG4gICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuaW5wdXRSb290LFxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGNsYXNzZXMuaW5wdXRJbnB1dCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG5hbWU9J3NlYXJjaCdcclxuICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlYXJjaCcgfX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlID0geyAoZSkgPT4geyBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpIH0gfVxyXG4gICAgICAgICAgICAvPiBcclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySW1hZ2V9ICR7dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5wb3BwaW5zfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmNvbG9ySW5oZXJpdH0+e25hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuXHJcbiAgICAgIHsgIWhvbWUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==