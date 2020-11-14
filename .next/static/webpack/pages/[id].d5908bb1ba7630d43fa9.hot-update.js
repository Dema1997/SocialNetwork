webpackHotUpdate_N_E("pages/[id]",{

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/*! exports provided: User, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");





var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\pages\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();




var User = function User(_ref) {
  _s();

  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isDeleting = _useState[0],
      setIsDeleting = _useState[1];

  var handleClick = function handleClick() {
    setIsDeleting(!isDeleting);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isDeleting) {
      deleteUser();
    }
  }, [isDeleting]);

  var deleteUser = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var id, deleted;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = router.query.id;
              _context.prev = 1;
              _context.next = 4;
              return fetch("http://localhost:3000/api/users/".concat(id), {
                method: 'DELETE'
              });

            case 4:
              deleted = _context.sent;
              router.push("/Users");
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log("Error:", _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function deleteUser() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: isDeleting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 44
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 71
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Full Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: [user.firstName, "\xA0", user.lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 48
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 100
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Birth Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 50
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 76
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "City"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.city
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 69
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 75
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onClick: handleClick,
          variant: "outlined",
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }, _this)
    }, void 0, false)
  }, void 0, false);
};

_s(User, "YriJNh+vwZfua+X4IY01Jx06Zxw=");

_c = User;
/* harmony default export */ __webpack_exports__["default"] = (User);

User.getInitialProps = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var id, res, _yield$res$json, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref3.query.id;
            _context2.next = 3;
            return fetch("http://localhost:3000/api/users/".concat(id));

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            _yield$res$json = _context2.sent;
            data = _yield$res$json.data;
            console.log(res);
            return _context2.abrupt("return", {
              user: data
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref4.apply(this, arguments);
  };
}();

var _c;

$RefreshReg$(_c, "User");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwidXNlU3RhdGUiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwiZGVsZXRlVXNlciIsImlkIiwicm91dGVyIiwicXVlcnkiLCJmZXRjaCIsIm1ldGhvZCIsImRlbGV0ZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInVzZXJJbmZvIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjaXR5IiwiYWRkcmVzcyIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSxrQkFFTUMsc0RBQVEsQ0FBQyxLQUFELENBRmQ7QUFBQSxNQUVyQkMsVUFGcUI7QUFBQSxNQUVWQyxhQUZVOztBQUk1QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCRCxpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNILEdBRkQ7O0FBSUFHLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQUdILFVBQUgsRUFBYztBQUNWSSxnQkFBVTtBQUNiO0FBQ0osR0FKUSxFQUlOLENBQUNKLFVBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQU1JLFVBQVU7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMsZ0JBRFMsR0FDSkMsTUFBTSxDQUFDQyxLQUFQLENBQWFGLEVBRFQ7QUFBQTtBQUFBO0FBQUEscUJBR1VHLEtBQUssMkNBQW9DSCxFQUFwQyxHQUEwQztBQUNwRUksc0JBQU0sRUFBRTtBQUQ0RCxlQUExQyxD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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXIgPSAoe3VzZXJ9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsc2V0SXNEZWxldGluZ109IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcoIWlzRGVsZXRpbmcpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaXNEZWxldGluZyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZVVzZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0RlbGV0aW5nXSlcclxuXHJcbiAgICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9Vc2Vyc1wiKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNEZWxldGluZyA/IDw+PC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPD4gICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5FbWFpbDwvbGFiZWw+PC9iPjxsYWJlbD57dXNlci5lbWFpbH08L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+RnVsbCBOYW1lPC9sYWJlbD48L2I+PGxhYmVsPnt1c2VyLmZpcnN0TmFtZX0mbmJzcDt7dXNlci5sYXN0TmFtZX08L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+QmlydGggRGF0ZTwvbGFiZWw+PC9iPiA8bGFiZWw+e3VzZXIuZGF0ZX08L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+Q2l0eTwvbGFiZWw+PC9iPjxsYWJlbD57dXNlci5jaXR5fTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5BZGRyZXNzPC9sYWJlbD48L2I+PGxhYmVsPnt1c2VyLmFkZHJlc3N9PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cIm91dGxpbmVkXCI+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfWApXHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICByZXR1cm4ge3VzZXI6IGRhdGF9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9