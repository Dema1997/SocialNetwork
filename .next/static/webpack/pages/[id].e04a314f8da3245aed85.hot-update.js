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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);





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
            lineNumber: 39,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 44
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 71
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Full Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: [user.firstName, "\xA0", user.lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 48
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 100
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Birth Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 50
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 76
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "City"
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
          children: user.city
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 69
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 75
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          color: "secondary",
          onClick: handleClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwidXNlU3RhdGUiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwiZGVsZXRlVXNlciIsImlkIiwicm91dGVyIiwicXVlcnkiLCJmZXRjaCIsIm1ldGhvZCIsImRlbGV0ZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInVzZXJJbmZvIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjaXR5IiwiYWRkcmVzcyIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUMsS0FBRCxDQUZkO0FBQUEsTUFFckJDLFVBRnFCO0FBQUEsTUFFVkMsYUFGVTs7QUFJNUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkQsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDSCxHQUZEOztBQUlBRyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHSCxVQUFILEVBQWM7QUFDVkksZ0JBQVU7QUFDYjtBQUNKLEdBSlEsRUFJTixDQUFDSixVQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFNSSxVQUFVO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLGdCQURTLEdBQ0pDLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhRixFQURUO0FBQUE7QUFBQTtBQUFBLHFCQUdVRyxLQUFLLDJDQUFvQ0gsRUFBcEMsR0FBMEM7QUFDcEVJLHNCQUFNLEVBQUU7QUFENEQs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YWVkODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0RlbGV0aW5nLHNldElzRGVsZXRpbmddPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0RlbGV0aW5nKCFpc0RlbGV0aW5nKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGlzRGVsZXRpbmcpe1xyXG4gICAgICAgICAgICBkZWxldGVVc2VyKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNEZWxldGluZ10pXHJcblxyXG4gICAgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMvJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvVXNlcnNcIilcclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzRGVsZXRpbmcgPyA8PjwvPlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDw+ICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+RW1haWw8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuZW1haWx9PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkZ1bGwgTmFtZTwvbGFiZWw+PC9iPjxsYWJlbD57dXNlci5maXJzdE5hbWV9Jm5ic3A7e3VzZXIubGFzdE5hbWV9PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkJpcnRoIERhdGU8L2xhYmVsPjwvYj4gPGxhYmVsPnt1c2VyLmRhdGV9PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkNpdHk8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuY2l0eX08L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+QWRkcmVzczwvbGFiZWw+PC9iPjxsYWJlbD57dXNlci5hZGRyZXNzfTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30gPkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcblxyXG5Vc2VyLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5OiB7IGlkIH0gfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMvJHtpZH1gKVxyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgcmV0dXJuIHt1c2VyOiBkYXRhfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==