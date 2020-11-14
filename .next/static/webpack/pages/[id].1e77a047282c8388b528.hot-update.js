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
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\User\\Desktop\\Blog\\Blog\\pages\\[id]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var User = function User(_ref) {
  _s();

  var user = _ref.user;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo,
        children: [user.firstName, "\xA0", user.lastName]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.email
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 44
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 71
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Full Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: [user.firstName, "\xA0", user.lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 48
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 100
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Birth Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 50
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 76
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "City"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.city
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 43
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 69
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 46
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 75
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("b", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 20
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
          children: user._id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 41
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 66
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          style: {
            fontSize: 13
          },
          startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 58
          }, _this),
          variant: "contained",
          color: "secondary",
          onClick: handleClick,
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }, _this)]
    }, void 0, true)
  }, void 0, false);
};

_s(User, "aYm/Q1ydbw071AfM2/swe19zzZo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvL2luZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsImhhbmRsZUNsaWNrIiwidXNlRWZmZWN0IiwiZGVsZXRlVXNlciIsImlkIiwicXVlcnkiLCJmZXRjaCIsIm1ldGhvZCIsImRlbGV0ZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInVzZXJJbmZvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImRhdGUiLCJjaXR5IiwiYWRkcmVzcyIsIl9pZCIsImZvbnRTaXplIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFFNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFGNEIsa0JBSU1DLHNEQUFRLENBQUMsS0FBRCxDQUpkO0FBQUEsTUFJckJDLFVBSnFCO0FBQUEsTUFJVkMsYUFKVTs7QUFNNUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkQsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDSCxHQUZEOztBQUlBRyx5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFHSCxVQUFILEVBQWM7QUFDVkksZ0JBQVU7QUFDYjtBQUNKLEdBSlEsRUFJTixDQUFDSixVQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFNSSxVQUFVO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLGdCQURTLEdBQ0pSLE1BQU0sQ0FBQ1MsS0FBUCxDQUFhRCxFQURU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QTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUpKLG1CQURKO0FBdUJILENBbkRNOztHQUFNUCxJO1VBRU1HLHFEOzs7S0FGTkgsSTtBQW9ERUEsbUVBQWY7O0FBRUFBLElBQUksQ0FBQzRCLGVBQUw7QUFBQSwrTEFBdUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQmxCLGNBQWxCLFNBQVNDLEtBQVQsQ0FBa0JELEVBQWxCO0FBQUE7QUFBQSxtQkFDREUsS0FBSywyQ0FBb0NGLEVBQXBDLEVBREo7O0FBQUE7QUFDYm1CLGVBRGE7QUFBQTtBQUFBLG1CQUVFQSxHQUFHLENBQUNDLElBQUosRUFGRjs7QUFBQTtBQUFBO0FBRVpDLGdCQUZZLG1CQUVaQSxJQUZZO0FBR25CZixtQkFBTyxDQUFDQyxHQUFSLENBQVlZLEdBQVo7QUFIbUIsOENBSVo7QUFBQzVCLGtCQUFJLEVBQUU4QjtBQUFQLGFBSlk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2lkXS4xZTc3YTA0NzI4MmM4Mzg4YjUyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gKHt1c2VyfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2lzRGVsZXRpbmcsc2V0SXNEZWxldGluZ109IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzRGVsZXRpbmcoIWlzRGVsZXRpbmcpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoaXNEZWxldGluZyl7XHJcbiAgICAgICAgICAgIGRlbGV0ZVVzZXIoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0RlbGV0aW5nXSlcclxuXHJcbiAgICBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgIGNvbnN0IGRlbGV0ZWQgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9Vc2Vyc1wiKVxyXG4gICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOlwiLCBlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgaXNEZWxldGluZyA/IDw+PC8+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPD4gXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgIHt1c2VyLmZpcnN0TmFtZX0mbmJzcDt7dXNlci5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckluZm99PlxyXG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkVtYWlsPC9sYWJlbD48L2I+PGxhYmVsPnt1c2VyLmVtYWlsfTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5GdWxsIE5hbWU8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuZmlyc3ROYW1lfSZuYnNwO3t1c2VyLmxhc3ROYW1lfTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5CaXJ0aCBEYXRlPC9sYWJlbD48L2I+IDxsYWJlbD57dXNlci5kYXRlfTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5DaXR5PC9sYWJlbD48L2I+PGxhYmVsPnt1c2VyLmNpdHl9PC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkFkZHJlc3M8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuYWRkcmVzc308L2xhYmVsPjxici8+XHJcbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+SWQ8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuX2lkfTwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250U2l6ZToxM319IHN0YXJ0SWNvbj17PERlbGV0ZUljb24gLz59IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuXHJcblVzZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8ke2lkfWApXHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICByZXR1cm4ge3VzZXI6IGRhdGF9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9