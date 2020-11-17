webpackHotUpdate_N_E("pages/Home",{

/***/ "./node_modules/@material-ui/icons/EmojiEmotionsOutlined.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/icons/EmojiEmotionsOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("circle", {
  cx: "15.5",
  cy: "9.5",
  r: "1.5"
}), _react.default.createElement("circle", {
  cx: "8.5",
  cy: "9.5",
  r: "1.5"
}), _react.default.createElement("path", {
  d: "M12 18c2.28 0 4.22-1.66 5-4H7c.78 2.34 2.72 4 5 4z"
}), _react.default.createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), 'EmojiEmotionsOutlined');

exports.default = _default;

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ImageOutlined */ "./node_modules/@material-ui/icons/ImageOutlined.js");
/* harmony import */ var _material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/EmojiEmotionsOutlined */ "./node_modules/@material-ui/icons/EmojiEmotionsOutlined.js");
/* harmony import */ var _material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\Social Network\\social-network\\pages\\Home.js",
    _s = $RefreshSig$();
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root1: {
    flexGrow: 1
  },
  post: {
    letterSpacing: 1.3,
    color: 'white',
    fontSize: 11,
    fontFamily: 'Poppins',
    borderRadius: 20,
    "float": 'right',
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
  _s();

  var classes = useStyles();
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.card,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__["default"], {
                component: "img",
                alt: "Contemplative Reptile",
                height: "140",
                image: "/images/logow.png",
                title: "Contemplative Reptile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: "Lizard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 11
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 7,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginLeft: 10
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/images/logo.jpg",
              className: " ".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.borderCircle),
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_EmojiEmotionsOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ImageOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.card,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                style: {
                  fontSize: 28,
                  fontFamily: 'Poppins',
                  marginLeft: 35
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

_s(Home, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9FbW9qaUVtb3Rpb25zT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWUuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QxIiwiZmxleEdyb3ciLCJwb3N0IiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsInJvb3QiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJoZWlnaHQiLCJwYWRkaW5nIiwiaG9tZSIsIm1hcmdpbkJvdHRvbSIsIndyaXRlUG9zdCIsImNvbnRhaW5lciIsInRleHRGaWVsZCIsImNhcmQiLCJtYXhXaWR0aCIsIkhvbWUiLCJjbGFzc2VzIiwibWFyZ2luTGVmdCIsInV0aWxTdHlsZXMiLCJib3JkZXJDaXJjbGUiLCJibG9nQ29udGFpbmVyIiwiaGVhZGluZ01kIiwiaGVhZGluZ0xnQiIsImxpc3QiLCJsaXN0SXRlbSIsImhlYWRpbmdTbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsdUZBQXVCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxTQUFTLEdB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFIRTtBQThKRDs7R0FsS3VCaUIsSTtVQUVQdkIsUzs7O0tBRk91QixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0hvbWUuMzNlY2Y2ZDI1NTZiYzA2MjhmZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwge1xuICBjeDogXCIxNS41XCIsXG4gIGN5OiBcIjkuNVwiLFxuICByOiBcIjEuNVwiXG59KSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gIGN4OiBcIjguNVwiLFxuICBjeTogXCI5LjVcIixcbiAgcjogXCIxLjVcIlxufSksIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMThjMi4yOCAwIDQuMjItMS42NiA1LTRIN2MuNzggMi4zNCAyLjcyIDQgNSA0elwiXG59KSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMS45OSAyQzYuNDcgMiAyIDYuNDggMiAxMnM0LjQ3IDEwIDkuOTkgMTBDMTcuNTIgMjIgMjIgMTcuNTIgMjIgMTJTMTcuNTIgMiAxMS45OSAyek0xMiAyMGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCJcbn0pKSwgJ0Vtb2ppRW1vdGlvbnNPdXRsaW5lZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgRGl2aWRlcixCdXR0b24sIFRleHRGaWVsZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBJbWFnZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1hZ2VPdXRsaW5lZCc7XHJcbmltcG9ydCBFbW9qaUVtb3Rpb25zT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FbW9qaUVtb3Rpb25zT3V0bGluZWQnO1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDE6IHtcclxuICAgICAgZmxleEdyb3c6MVxyXG4gICAgfSxcclxuICAgIHBvc3Q6IHtcclxuICAgICAgbGV0dGVyU3BhY2luZzoxLjMsXHJcbiAgICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICAgIGZvbnRTaXplOjExLFxyXG4gICAgICBmb250RmFtaWx5OidQb3BwaW5zJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOjIwLFxyXG4gICAgICBmbG9hdDoncmlnaHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kOidncmVlbidcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNGRTZCOEIgMzAlLCAjRkY4RTUzIDkwJSknLFxyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMyxcclxuICAgICAgYm94U2hhZG93OiAnMCAzcHggNXB4IDJweCByZ2JhKDI1NSwgMTA1LCAxMzUsIC4zKScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBoZWlnaHQ6IDM4LFxyXG4gICAgICBwYWRkaW5nOiAnMCAyMHB4JyxcclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbToxNSxcclxuICAgICAgYm9yZGVyOicxcHggc29saWQgZ3JheScsXHJcbiAgICAgIGJvcmRlclJhZGl1czo0XHJcbiAgICB9LFxyXG4gICAgd3JpdGVQb3N0OiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbToxNVxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBib3JkZXI6JzFweCBzb2xpZCAjZDlkOWQ5JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOjJcclxuICAgIH0sXHJcbiAgICB0ZXh0RmllbGQ6IHtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgY2FyZDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6MjAsXHJcbiAgICAgIGJhY2tncm91bmQ6JyNmMmYyZjInLFxyXG4gICAgICBtYXhXaWR0aDogMzQ1LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcbiBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgXHJcbiAgICBcclxuPExheW91dCBob21lPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RkRNPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3QxfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8R3JpZCAgaXRlbSB4cz5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxyXG4gICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjE0MFwiXHJcbiAgICAgICAgICBpbWFnZT1cIi9pbWFnZXMvbG9nb3cucG5nXCJcclxuICAgICAgICAgIHRpdGxlPVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBMaXphcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgTGl6YXJkcyBhcmUgYSB3aWRlc3ByZWFkIGdyb3VwIG9mIHNxdWFtYXRlIHJlcHRpbGVzLCB3aXRoIG92ZXIgNiwwMDAgc3BlY2llcywgcmFuZ2luZ1xyXG4gICAgICAgICAgICBhY3Jvc3MgYWxsIGNvbnRpbmVudHMgZXhjZXB0IEFudGFyY3RpY2FcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIFNoYXJlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIExlYXJuIE1vcmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezd9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OjEwfX0+XHJcbiAgICAgICAgICA8aW1nIFxyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17YCAke3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfWB9XHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz4gXHJcbiAgICAgIDxoMiBzdHlsZT17e2ZvbnRGYW1pbHk6J1BvcHBpbnMnfX0+SG9tZTwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JpdGVQb3N0fT5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICBcclxuICAgICAgbXVsdGlsaW5lXHJcbiAgICAgIHJvd3M9ezF9XHJcbiAgICAgIHJvd3NNYXg9ezIwfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyBhcHBlbmluZyA/XCJcclxuICAgICAgLz5cclxuICAgICAgPGJyLz48YnIvPlxyXG4gICAgICA8RW1vamlFbW90aW9uc091dGxpbmVkSWNvbiAvPlxyXG4gICAgICA8SW1hZ2VPdXRsaW5lZEljb24gLz5cclxuICAgICAgPEJ1dHRvbiAgY2xhc3NOYW1lPXtjbGFzc2VzLnBvc3R9PlBvc3Q8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxici8+PGJyLz5cclxuXHJcbiAgICAgIDxEaXZpZGVyLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmJsb2dDb250YWluZXJ9PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cclxuICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnQn0gc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+QmxvZzwvaDE+XHJcbiAgICAgICA8dWwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3R9PlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9Vc2Vyc1wiPjxhPlVzZXJzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiXCI+VXAtdG8tZGF0ZTwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0+XHJcbiAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL0NvdmlkMTlEYXRhXCI+PGEgPkNvdmlkLTE5IEFuYWxpdHljcyBhbmQgU3RhdGlzdGljcyA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdTbX0gZGF0ZVRpbWU9XCIyMDIwLTExLTA5XCI+Tm92ZW1iZXIgOSwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvZmlyc3RQb3N0XCI+PGE+WW91ciBmaXJzdCBSZWFjdCBBcHAgPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c21hbGw+XHJcbiAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nU219IGRhdGVUaW1lPVwiMjAyMC0wMS0wMlwiPkphbnVhcnkgMiwgMjAyMDwvdGltZT5cclxuICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdEl0ZW19PlxyXG4gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9Nb25nb0RCQXBwXCI+PGE+TW9uZ28gREIsIFJlYWN0IGpzIGFuZCBUeXBlc2NyaXB0IGFsbCBpbiBvbmUgc2luZ2xlIHdlYiBhcHBsaWNhdGlvbiA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgIDxzbWFsbD5cclxuICAgICAgICAgICAgICAgPHRpbWUgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdTbX0gZGF0ZVRpbWU9XCIyMDIwLTA1LTEyXCI+TWF5IDEyLCAyMDIwPC90aW1lPlxyXG4gICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgPC91bD5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuXHJcbiAgICA8R3JpZCAgaXRlbSB4cz5cclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7Zm9udFNpemU6MjgsIGZvbnRGYW1pbHk6J1BvcHBpbnMnLG1hcmdpbkxlZnQ6MzV9fT5UcmVuZHM8L2gyPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidQb3BwaW5zJ319PkNoaWVsbGluaTwvaDQ+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6J2JsYWNrJ319PmNzaGRjYmJza25rc2Rta2xzbWM8L3A+XHJcblxyXG4gICAgICAgICAgICA8aDQgc3R5bGU9e3tmb250RmFtaWx5OidQb3BwaW5zJ319PkFzIFJvbWE8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT5jc2hkY2Jic2tua3NkbWtsc21jPC9wPlxyXG5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTonUG9wcGlucyd9fT5DaGlhcmEgRmVycmFnbmk8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT5jc2hkY2Jic2tua3NkbWtsc21jPC9wPlxyXG5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTonUG9wcGlucyd9fT5DaGllbGxpbmk8L2g0PlxyXG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOidibGFjayd9fT5jc2hkY2Jic2tua3NkbWtsc21jPC9wPlxyXG5cclxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7Zm9udEZhbWlseTonUG9wcGlucyd9fT5BcyBSb21hPC9oND5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+Y3NoZGNiYnNrbmtzZG1rbHNtYzwvcD5cclxuXHJcbiAgICAgICAgICAgIDxoNCBzdHlsZT17e2ZvbnRGYW1pbHk6J1BvcHBpbnMnfX0+Q2hpYXJhIEZlcnJhZ25pPC9oND5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonYmxhY2snfX0+Y3NoZGNiYnNrbmtzZG1rbHNtYzwvcD5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgU2hhcmVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgTGVhcm4gTW9yZVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgPC9DYXJkPlxyXG4gICAgPC9HcmlkPlxyXG5cclxuICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L0xheW91dD5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9