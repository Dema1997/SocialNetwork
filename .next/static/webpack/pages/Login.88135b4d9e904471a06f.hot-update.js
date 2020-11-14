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
      lineNumber: 80,
      columnNumber: 15
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
        className: classes.titleLogin,
        children: "Sign in to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "/images/logow.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 27
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
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
          lineNumber: 86,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          className: classes.label,
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: classes.forgotPassword,
          children: "Forgot password?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          fullWidth: true,
          type: "submit",
          className: classes.button,
          label: "Log in",
          children: "Sign in"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: classes.newToWhoPlays,
        children: ["New to WhoPlays? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Link, {
          href: "/Signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: "Create an account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 90
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 69
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtTG9naW4uanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ0ZXh0RmllbGQiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dFJvb3QiLCJoZWlnaHQiLCJsYWJlbCIsInRpdGxlTG9naW4iLCJ0ZXh0QWxpZ24iLCJmb3Jnb3RQYXNzd29yZCIsIm5ld1RvV2hvUGxheXMiLCJjdXJzb3IiLCJGb3JtTG9naW4iLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2FtcGkiLCJzZXRDYW1waSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJ2YWxpZGF0ZVVzZXIiLCJ2YWx1ZXMiLCJzdHlsZXMiLCJtYWluIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLFFBQU0sRUFBRTtBQUNOQyxpQkFBYSxFQUFDLE1BRFI7QUFFTkMsaUJBQWEsRUFBQyxHQUZSO0FBR05DLFlBQVEsRUFBQyxFQUhIO0FBSU5DLGNBQVUsRUFBQyxHQUpMO0FBS05DLGFBQVMsRUFBQyxFQUxKO0FBTU5DLG1CQUFlLEVBQUUsU0FOWDtBQU9OQyxTQUFLLEVBQUM7QUFQQSxHQURtQjtBQVUzQkMsV0FBUyxFQUFFO0FBQ1RILGFBQVMsRUFBQyxDQUREO0FBRVRJLGdCQUFZLEVBQUM7QUFGSixHQVZnQjtBQWMzQkMsV0FBUyxFQUFFO0FBQ1RDLFVBQU0sRUFBQztBQURFLEdBZGdCO0FBaUIzQkMsT0FBSyxFQUFFO0FBQ0xULFlBQVEsRUFBQyxFQURKO0FBRUxDLGNBQVUsRUFBQztBQUZOLEdBakJvQjtBQXFCM0JTLFlBQVUsRUFBRTtBQUNWQyxhQUFTLEVBQUMsUUFEQTtBQUVWUCxTQUFLLEVBQUMsT0FGSTtBQUdWSCxjQUFVLEVBQUMsR0FIRDtBQUlWRixpQkFBYSxFQUFDLENBSko7QUFLVkMsWUFBUSxFQUFDLEVBTEM7QUFNVkUsYUFBUyxFQUFDLEVBTkE7QUFPVkksZ0JBQVksRUFBQztBQVBILEdBckJlO0FBOEIzQk0sZ0JBQWMsRUFBRTtBQUNkUixTQUFLLEVBQUMsU0FEUTtBQUVkSixZQUFRLEVBQUMsRUFGSztBQUdkQyxjQUFVLEVBQUU7QUFIRSxHQTlCVztBQW1DM0JZLGVBQWEsRUFBRTtBQUNiQyxVQUFNLEVBQUUsU0FESztBQUViZCxZQUFRLEVBQUM7QUFGSTtBQW5DWSxDQUFELENBQTVCO0FBeUNPLElBQU1lLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsT0FBTyxHQUFHckIsU0FBUyxFQUF6Qjs7QUFEMkIsa0JBR0ZzQixzREFBUSxDQUFDO0FBQ2hDQyxTQUFLLEVBQUMsRUFEMEI7QUFFaENDLFlBQVEsRUFBQztBQUZ1QixHQUFELENBSE47QUFBQSxNQUdwQkMsS0FIb0I7QUFBQSxNQUdiQyxRQUhhOztBQVEzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTTtBQUN6QkosWUFBUSxpQ0FBTUQsS0FBTixxR0FBY0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQXZCLEVBQThCRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsS0FBdkMsR0FBUjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0osQ0FBRCxFQUFLO0FBQ3hCQSxLQUFDLENBQUNLLGNBQUYsR0FEd0IsQ0FFeEI7O0FBQ0FSLFVBQU0sQ0FBQ1MsSUFBUCxDQUFZLGFBQVo7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU0sQ0FDekI7QUFDRCxHQUZEOztBQXBCMkIsTUF3Qm5CZCxLQXhCbUIsR0F3QkNFLEtBeEJELENBd0JuQkYsS0F4Qm1CO0FBQUEsTUF3QlpDLFFBeEJZLEdBd0JDQyxLQXhCRCxDQXdCWkQsUUF4Qlk7QUF5QjNCLE1BQU1jLE1BQU0sR0FBRztBQUFFZixTQUFLLEVBQUxBLEtBQUY7QUFBU0MsWUFBUSxFQUFSQTtBQUFULEdBQWY7QUFFRSxzQkFDSztBQUFBLDRCQUNHLHFFQUFDLGdFQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBRUc7QUFBSyxlQUFTLEVBQUVlLCtEQUFNLENBQUNDLElBQXZCO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFFbkIsT0FBTyxDQUFDTixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLCtCQUFZO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQSxlQUlBO0FBQU0sZ0JBQVEsRUFBRW1CLFlBQWhCO0FBQThCLGFBQUssRUFBRTtBQUFFMUIseUJBQWUsRUFBQyxTQUFsQjtBQUE4QmlDLGlCQUFPLEVBQUMsRUFBdEM7QUFBMENDLHNCQUFZLEVBQUM7QUFBdkQsU0FBckM7QUFBQSxnQ0FDQTtBQUFPLG1CQUFTLEVBQUVyQixPQUFPLENBQUNQLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBQ2tFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGxFLGVBRUEscUVBQUMsbUVBQUQ7QUFDRSxtQkFBUyxFQUFFTyxPQUFPLENBQUNYLFNBRHJCO0FBRUUsb0JBQVUsRUFBRTtBQUNWaUMscUJBQVMsRUFBRXRCLE9BQU8sQ0FBQ1Q7QUFEVCxXQUZkO0FBS0Usa0JBQVEsTUFMVjtBQU1FLGlCQUFPLEVBQUMsVUFOVjtBQU9FLGNBQUksRUFBQyxPQVBQO0FBUUUsY0FBSSxFQUFDLE9BUlA7QUFTRSxlQUFLLEVBQUVhLEtBQUssQ0FBQ0YsS0FUZjtBQVVFLGtCQUFRLEVBQUVNO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZEEsZUFlQTtBQUFPLG1CQUFTLEVBQUVSLE9BQU8sQ0FBQ1AsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkEsZUFlaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmakQsZUFnQkEscUVBQUMsbUVBQUQ7QUFDRSxtQkFBUyxFQUFFTyxPQUFPLENBQUNYLFNBRHJCO0FBRUUsb0JBQVUsRUFBRTtBQUNWaUMscUJBQVMsRUFBRXRCLE9BQU8sQ0FBQ1Q7QUFEVCxXQUZkO0FBS0Usa0JBQVEsTUFMVjtBQU1FLGlCQUFPLEVBQUMsVUFOVjtBQU9FLGNBQUksRUFBQyxVQVBQO0FBUUUsY0FBSSxFQUFDLFVBUlA7QUFTRSxlQUFLLEVBQUVhLEtBQUssQ0FBQ0QsUUFUZjtBQVVFLGtCQUFRLEVBQUVLO0FBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkEsZUE0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkEsZUE2QkE7QUFBRyxtQkFBUyxFQUFFUixPQUFPLENBQUNKLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCQSxlQThCQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCQSxlQStCQSxxRUFBQyxnRUFBRDtBQUNBLG1CQUFTLE1BRFQ7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFTLEVBQUVJLE9BQU8sQ0FBQ25CLE1BSHJCO0FBSUUsZUFBSyxFQUFDLFFBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBLGVBMkNBO0FBQUcsaUJBQVMsRUFBRW1CLE9BQU8sQ0FBQ0gsYUFBdEI7QUFBQSxxREFBc0QscUVBQUMsSUFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSDtBQUFBLGtCQURMO0FBbURMLENBOUVNOztHQUFNRSxTO1VBQ09wQixTLEVBT0Q0QixxRDs7O0tBUk5SLFM7QUErRUVBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0xvZ2luLjg4MTM1YjRkOWU5MDQ0NzFhMDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgdGV4dFRyYW5zZm9ybTonbm9uZScsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOjEuMyxcclxuICAgIGZvbnRTaXplOjE0LFxyXG4gICAgZm9udFdlaWdodDo0MDAsXHJcbiAgICBtYXJnaW5Ub3A6MTAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmVhNDRmJyxcclxuICAgIGNvbG9yOlwid2hpdGVcIlxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICBtYXJnaW5Ub3A6NSxcclxuICAgIG1hcmdpbkJvdHRvbToxMVxyXG4gIH0sXHJcbiAgaW5wdXRSb290OiB7XHJcbiAgICBoZWlnaHQ6MSxcclxuICB9LFxyXG4gIGxhYmVsOiB7XHJcbiAgICBmb250U2l6ZToxNCxcclxuICAgIGZvbnRXZWlnaHQ6NjAwLFxyXG4gIH0sXHJcbiAgdGl0bGVMb2dpbjoge1xyXG4gICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgY29sb3I6J3doaXRlJyxcclxuICAgIGZvbnRXZWlnaHQ6MzAwLFxyXG4gICAgbGV0dGVyU3BhY2luZzoxLFxyXG4gICAgZm9udFNpemU6MTksXHJcbiAgICBtYXJnaW5Ub3A6NTAsXHJcbiAgICBtYXJnaW5Cb3R0b206MTVcclxuICB9LFxyXG4gIGZvcmdvdFBhc3N3b3JkOiB7XHJcbiAgICBjb2xvcjonIzAzNjZkNicsXHJcbiAgICBmb250U2l6ZToxNCxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMFxyXG4gIH0sXHJcbiAgbmV3VG9XaG9QbGF5czoge1xyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250U2l6ZToxNFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1Mb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBjb25zdCBbY2FtcGksIHNldENhbXBpXT0gdXNlU3RhdGUoe1xyXG4gICAgICBlbWFpbDonJyxcclxuICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT57XHJcbiAgICAgIHNldENhbXBpKHsgLi4uY2FtcGksIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSk9PntcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIC8vdmFsaWRhdGVVc2VyKClcclxuICAgICAgcm91dGVyLnB1c2goXCIvdXNlckxvZ2dlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRlVXNlciA9ICgpID0+IHtcclxuICAgICAgLy9cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY2FtcGlcclxuICAgIGNvbnN0IHZhbHVlcyA9IHsgZW1haWwsIHBhc3N3b3JkIH1cclxuXHJcbiAgICAgIHJldHVybihcclxuICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxBcHBCYXIgdGl0bGU9XCJFbnRlciBkZXRhaWxzXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59ID5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTG9naW59PlNpZ24gaW4gdG88L2gyPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIvaW1hZ2VzL2xvZ293LnBuZ1wiPjwvaW1nPjwvYT5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjonI2M1Y2JkMycsICBwYWRkaW5nOjI1LCBib3JkZXJSYWRpdXM6NX19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlVzZXJuYW1lIG9yIGVtYWlsIGFkZHJlc3M8L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmlucHV0Um9vdFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2FtcGkuZW1haWx9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5QYXNzd29yZDwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuaW5wdXRSb290XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjYW1waS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3Jnb3RQYXNzd29yZH0+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9nIGluXCJcclxuICAgICAgICAgICAgICA+U2lnbiBpbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLm5ld1RvV2hvUGxheXN9Pk5ldyB0byBXaG9QbGF5cz8gPExpbmsgaHJlZj0nL1NpZ25pbic+PGE+Q3JlYXRlIGFuIGFjY291bnQ8L2E+PC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==