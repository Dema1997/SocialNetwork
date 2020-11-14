webpackHotUpdate_N_E("pages/Login",{

/***/ "./components/FormLogin.js":
/*!*********************************!*\
  !*** ./components/FormLogin.js ***!
  \*********************************/
/*! exports provided: FormLogin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLogin", function() { return FormLogin; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\components\\FormLogin.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
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
var FormLogin = function FormLogin() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: '',
    password: ''
  }),
      campi = _useState[0],
      setCampi = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var handleChange = function handleChange(e) {
    setCampi(_objectSpread(_objectSpread({}, campi), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); //validateUser()

    router.push("/userLogged");
  };

  var validateUser = function validateUser() {//
  };

  var email = campi.email,
      password = campi.password;
  var values = {
    email: email,
    password: password
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Enter details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        className: classes.titleLogin,
        children: "Sign in to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "/images/logow.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 27
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#c5cbd3',
          padding: 25,
          borderRadius: 5
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          className: classes.label,
          children: "Username or email address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 81
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          className: classes.label,
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 64
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: classes.forgotPassword,
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          fullWidth: true,
          type: "submit",
          className: classes.button,
          label: "Log in",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: classes.newToWhoPlays,
        children: ["New to WhoPlays? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/Signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: "Create an account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 90
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 69
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }, _this)]
  }, void 0, true);
};

_s(FormLogin, "vhzM2ZKykcBeur4dhB4OurPgeRg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = FormLogin;
/* harmony default export */ __webpack_exports__["default"] = (FormLogin);

var _c;

$RefreshReg$(_c, "FormLogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtTG9naW4uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0RmllbGQiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dFJvb3QiLCJoZWlnaHQiLCJsYWJlbCIsInRpdGxlTG9naW4iLCJ0ZXh0QWxpZ24iLCJmb3Jnb3RQYXNzd29yZCIsIm5ld1RvV2hvUGxheXMiLCJjdXJzb3IiLCJGb3JtTG9naW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2FtcGkiLCJzZXRDYW1waSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ2YWxpZGF0ZVVzZXIiLCJ2YWx1ZXMiLCJzdHlsZXMiLCJtYWluIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxRQUFNLEVBQUU7QUFDTkMsaUJBQWEsRUFBQyxNQURSO0FBRU5DLGlCQUFhLEVBQUMsR0FGUjtBQUdOQyxZQUFRLEVBQUMsRUFISDtBQUlOQyxjQUFVLEVBQUMsR0FKTDtBQUtOQyxhQUFTLEVBQUMsRUFMSjtBQU1OQyxtQkFBZSxFQUFFLFNBTlg7QUFPTkMsU0FBSyxFQUFDO0FBUEEsR0FEbUI7QUFVM0JDLFdBQVMsRUFBRTtB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QUNuQixNQUhyQjtBQUlFLGVBQUssRUFBQyxRQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQSxlQTJDQTtBQUFHLGlCQUFTLEVBQUVtQixPQUFPLENBQUNILGFBQXRCO0FBQUEscURBQXNELHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZIO0FBQUEsa0JBREw7QUFtREwsQ0E5RU07O0dBQU1FLFM7VUFDT3BCLFMsRUFPRDRCLHFEOzs7S0FSTlIsUztBQStFRUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvTG9naW4uZTlhNzU5Zjg5MDliNzA2NTNjMTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBidXR0b246IHtcclxuICAgIHRleHRUcmFuc2Zvcm06J25vbmUnLFxyXG4gICAgbGV0dGVyU3BhY2luZzoxLjMsXHJcbiAgICBmb250U2l6ZToxNCxcclxuICAgIGZvbnRXZWlnaHQ6NDAwLFxyXG4gICAgbWFyZ2luVG9wOjEwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJlYTQ0ZicsXHJcbiAgICBjb2xvcjpcIndoaXRlXCJcclxuICB9LFxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgbWFyZ2luVG9wOjUsXHJcbiAgICBtYXJnaW5Cb3R0b206MTFcclxuICB9LFxyXG4gIGlucHV0Um9vdDoge1xyXG4gICAgaGVpZ2h0OjEsXHJcbiAgfSxcclxuICBsYWJlbDoge1xyXG4gICAgZm9udFNpemU6MTQsXHJcbiAgICBmb250V2VpZ2h0OjYwMCxcclxuICB9LFxyXG4gIHRpdGxlTG9naW46IHtcclxuICAgIHRleHRBbGlnbjonY2VudGVyJyxcclxuICAgIGNvbG9yOid3aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OjMwMCxcclxuICAgIGxldHRlclNwYWNpbmc6MSxcclxuICAgIGZvbnRTaXplOjE5LFxyXG4gICAgbWFyZ2luVG9wOjUwLFxyXG4gICAgbWFyZ2luQm90dG9tOjE1XHJcbiAgfSxcclxuICBmb3Jnb3RQYXNzd29yZDoge1xyXG4gICAgY29sb3I6JyMwMzY2ZDYnLFxyXG4gICAgZm9udFNpemU6MTQsXHJcbiAgICBmb250V2VpZ2h0OiA1MDBcclxuICB9LFxyXG4gIG5ld1RvV2hvUGxheXM6IHtcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgZm9udFNpemU6MTRcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgW2NhbXBpLCBzZXRDYW1waV09IHVzZVN0YXRlKHtcclxuICAgICAgZW1haWw6JycsXHJcbiAgICAgIHBhc3N3b3JkOicnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+e1xyXG4gICAgICBzZXRDYW1waSh7IC4uLmNhbXBpLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpPT57XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAvL3ZhbGlkYXRlVXNlcigpXHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJMb2dnZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZVVzZXIgPSAoKSA9PiB7XHJcbiAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGNhbXBpXHJcbiAgICBjb25zdCB2YWx1ZXMgPSB7IGVtYWlsLCBwYXNzd29yZCB9XHJcblxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8QXBwQmFyIHRpdGxlPVwiRW50ZXIgZGV0YWlsc1wiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufSA+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUxvZ2lufT5TaWduIGluIHRvPC9oMj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPjxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvdy5wbmdcIj48L2ltZz48L2E+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6JyNjNWNiZDMnLCAgcGFkZGluZzoyNSwgYm9yZGVyUmFkaXVzOjV9fT5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5Vc2VybmFtZSBvciBlbWFpbCBhZGRyZXNzPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pbnB1dFJvb3RcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NhbXBpLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+UGFzc3dvcmQ8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmlucHV0Um9vdFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FtcGkucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMuZm9yZ290UGFzc3dvcmR9PkZvcmdvdCBwYXNzd29yZD88L2E+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxvZyBpblwiXHJcbiAgICAgICAgICAgICAgPlNpZ24gaW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXdUb1dob1BsYXlzfT5OZXcgdG8gV2hvUGxheXM/IDxMaW5rIGhyZWY9Jy9TaWduaW4nPjxhPkNyZWF0ZSBhbiBhY2NvdW50PC9hPjwvTGluaz48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=