webpackHotUpdate_N_E("pages/_app",{

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
        backgroundColor: '#252830'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRpdGxlIiwiaW5wdXRSb290IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiaW5wdXRJbnB1dCIsInBhZGRpbmciLCJwYWRkaW5nTGVmdCIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5hbWUiLCJkYXRhIiwidGl0b2xvIiwibGluayIsInNpdGVUaXRsZSIsIkxheW91dCIsImNoaWxkcmVuIiwiaG9tZSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0IiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwidGV4dFRyYW5zZm9ybSIsImJhY2tncm91bmRJbWFnZSIsImxlbmd0aCIsIm1hcmdpblRvcCIsIm1hcCIsInN1Z2ciLCJpIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN0eWxlcyIsImNvbnRhaW5lciIsImVuY29kZVVSSSIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJoZWFkaW5nMlhsIiwiaW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJJbWFnZSIsInBvcHBpbnMiLCJjb2xvckluaGVyaXQiLCJiYWNrVG9Ib21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBOURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDQTtBQUFBLGtCQURGO0FBa0hEOztHQXRIdUJ0QyxNO1VBQ041QixTOzs7S0FETTRCLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZTgyODkzYjhjZGNkMDAzNzY1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVG9vbGJhciAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcidcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IElucHV0QmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEJhc2UnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBtZW51QnV0dG9uOiB7XHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBib3JkZXI6JzJweCBzb2xpZCBvcmFuZ2UnLFxyXG4gICAgYmFja2dyb3VuZDonbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjRkU2QjhCIDMwJSwgI0ZGOEU1MyA5MCUpJ1xyXG4gIH0sXHJcbiAgaW5wdXRJbnB1dDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAxLCAxLCAwKSxcclxuICAgIC8vIHZlcnRpY2FsIHBhZGRpbmcgKyBmb250IHNpemUgZnJvbSBzZWFyY2hJY29uXHJcbiAgICBwYWRkaW5nTGVmdDogYGNhbGMoMWVtICsgJHt0aGVtZS5zcGFjaW5nKDQpfXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJyksXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEyY2gnLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICB3aWR0aDogJzIwY2gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBuYW1lID0gJ0ZpbGlwcG8gRGUgTWFyY28nXHJcblxyXG5leHBvcnQgY29uc3QgZGF0YT1bXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnQ292aWQgMTkgQW5hbHl0aWNzICcsXHJcbiAgICBsaW5rOiAnQ292aWQxOURhdGEnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRvbG86ICdZb3VyIGZpcnN0IFJlYWN0IEFwcCcsXHJcbiAgICBsaW5rOiAnZmlyc3RQb3N0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0b2xvOiAnTW9uZ29EQiwgUmVhY3QgSnMgYW5kIFR5cGVzY3JpcHQgYWxsIGluIG9uZSBzaW5nbGUgd2ViIGFwcGxpY2F0aW9uJyxcclxuICAgIGxpbms6ICdNb25nb0RCQXBwJ1xyXG4gIH0sXHJcbl1cclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xyXG5cclxuLyogXHJcbiAqXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW3NlYXJjaCxzZXRTZWFyY2hdPXVzZVN0YXRlKCcnKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICcjMjUyODMwJ319IHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgIDxUb29sYmFyIHN0eWxlPXt7cGFkZGluZ1RvcDoxMixwYWRkaW5nTGVmdDoyNSxwYWRkaW5nUmlnaHQ6MjUsIHBhZGRpbmdCb3R0b206MTIsIGhlaWdodDogODV9fT5cclxuXHJcbiAgICAgICAgPEljb25CdXR0b24gIGFyaWEtbGFiZWw9IFwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLGNvbG9yOlwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6NjUsaGVpZ2h0OjY1fX0+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3JlYWN0LnBuZ1wiLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgIDxJY29uQnV0dG9uIHN0eWxlPXt7d2lkdGg6NjAsaGVpZ2h0OjYwfX0+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3RzTG9nby5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17e3dpZHRoOjcwLGhlaWdodDo3MCxtYXJnaW5SaWdodDoxMX19PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tYXRlcmlhbC5wbmdcIi8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPVwiL1NpZ25pblwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6MjAsaGVpZ2h0OjU2LCBiYWNrZ3JvdW5kOidsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLGZvbnRTaXplOjE0LHRleHRUcmFuc2Zvcm06J2NhcGl0YWxpemUnLCBtYXJnaW5SaWdodDoyfX0+U2lnbiBpbjwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj1cIi9Mb2dpblwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6MjAsaGVpZ2h0OjU2LCBiYWNrZ3JvdW5kSW1hZ2U6ICdsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjN2VlOGZhIDAlLCAjODBmZjcyIDc0JSknLCBiYWNrZ3JvdW5kQ29sb3I6JyM3ZWU4ZmEnLCBmb250U2l6ZToxNCwgdGV4dFRyYW5zZm9ybTonY2FwaXRhbGl6ZScsIG1hcmdpblJpZ2h0OjJ9fT4gTG9nIGluIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPC9Ub29sYmFyPiBcclxuICAgIDwvQXBwQmFyPlxyXG5cclxuICAgIHtzZWFyY2gubGVuZ3RoPjAgJiZcclxuICAgIDx1bCBzdHlsZT17e2JhY2tncm91bmRDb2xvcjonIzEzMTQxNycsIG1hcmdpblRvcDowLCBwYWRkaW5nQm90dG9tOjIwLGJvcmRlclJhZGl1czoxMH19PlxyXG4gICAgICAgICAgeyBcclxuICAgICAgICAgICAgZGF0YS5tYXAoIChzdWdnLGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKCBzdWdnLnRpdG9sby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaCkpXHJcbiAgICAgICAgICAgICAgICAmJiAgPD48bGkga2V5PXtpfSA+PGEgaHJlZj0ge2AvcG9zdHMvJHtzdWdnLmxpbmt9YH0gPntzdWdnLnRpdG9sb308L2E+IDwvbGk+PC8+XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICA8L3VsPlxyXG4gICAgfVxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbG9nby5qcGdcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkxlYXJuIGhvdyB0byBidWlsZCBhIHBlcnNvbmFsIHdlYnNpdGUgdXNpbmcgTmV4dC5qc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXHJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9vZy1pbWFnZS5ub3cuc2gvJHtlbmNvZGVVUkkoXHJcbiAgICAgICAgICAgIHNpdGVUaXRsZVxyXG4gICAgICAgICAgKX0ucG5nP3RoZW1lPWxpZ2h0Jm1kPTAmZm9udFNpemU9NzVweCZpbWFnZXM9aHR0cHMlM0ElMkYlMkZhc3NldHMudmVyY2VsLmNvbSUyRmltYWdlJTJGdXBsb2FkJTJGZnJvbnQlMkZhc3NldHMlMkZkZXNpZ24lMkZuZXh0anMtYmxhY2stbG9nby5zdmdgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnRpdGxlXCIgY29udGVudD17c2l0ZVRpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICB7IGhvbWUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGVySG9tZUltYWdlfSAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XHJcbiAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmcyWGx9PntuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxJbnB1dEJhc2VcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaOKAplwiXHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogY2xhc3Nlcy5pbnB1dFJvb3QsXHJcbiAgICAgICAgICAgICAgICBpbnB1dDogY2xhc3Nlcy5pbnB1dElucHV0LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgbmFtZT0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VhcmNoJyB9fVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IChlKSA9PiB7IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSkgfSB9XHJcbiAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5oZWFkZXJJbWFnZX0gJHt1dGlsU3R5bGVzLmJvcmRlckNpcmNsZX1gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnBvcHBpbnN9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgeyAhaG9tZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9