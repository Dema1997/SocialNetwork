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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[id]/index.js":
/*!*****************************!*\
  !*** ./pages/[id]/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/filippo/Desktop/Blog/Blog/pages/[id]/index.js\";\n\n\n\n\n\n\n\nconst User = ({\n  user\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  const {\n    0: isDeleting,\n    1: setIsDeleting\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const handleClick = () => {\n    setIsDeleting(!isDeleting);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (isDeleting) {\n      deleteUser();\n    }\n  }, [isDeleting]); //UserTruthy.js\n\n  const UserTruthy = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userInfoId,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Id\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 18\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }, undefined), user._id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.userInfo,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Email\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: user.email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 44\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 71\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Full Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [user.firstName, \"\\xA0\", user.lastName]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 48\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 100\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Birth Date\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: user.date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 50\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 76\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"City\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: user.city\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 43\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 69\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: \"Address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: user.address\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 46\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 75\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        style: {\n          fontSize: 13\n        },\n        startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 58\n        }, undefined),\n        variant: \"contained\",\n        color: \"secondary\",\n        onClick: handleClick,\n        children: \"Delete\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.backToHome,\n      style: {\n        marginTop: 15\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_Link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          style: {\n            marginLeft: 25\n          },\n          children: \"\\u2190 Back to home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n\n  const deleteUser = async () => {\n    const id = router.query.id;\n\n    try {\n      const deleted = await fetch(`http://localhost:3000/api/users/${id}`, {\n        method: 'DELETE'\n      });\n      router.push(\"/Users\");\n    } catch (error) {\n      console.log(\"Error:\", error);\n    }\n  };\n\n  return isDeleting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(UserTruthy, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 40\n  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: \"User is falsy\"\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\nUser.getInitialProps = async ctx => {\n  const {\n    id\n  } = ctx.query;\n  const res = await fetch(`http://localhost:3000/api/users/${id}`);\n  const {\n    data\n  } = await res.json();\n  /*\n  * Viene chiamata quando parte l'applicazione.\n  * E' un comportamento non desiderato\n  * Deve essere chiamata solo qusndo richiedo i dati di un utente.\n  */\n\n  return {\n    user: data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy8vaW5kZXguanM/ZTJmOCJdLCJuYW1lcyI6WyJVc2VyIiwidXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsInVzZUVmZmVjdCIsImRlbGV0ZVVzZXIiLCJVc2VyVHJ1dGh5Iiwic3R5bGVzIiwidXNlckluZm9JZCIsIl9pZCIsInVzZXJJbmZvIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImRhdGUiLCJjaXR5IiwiYWRkcmVzcyIsImZvbnRTaXplIiwiYmFja1RvSG9tZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJpZCIsInF1ZXJ5IiwiZGVsZXRlZCIsImZldGNoIiwibWV0aG9kIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImRhdGEiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFFdkIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3RCRixpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNILEdBRkQ7O0FBSUFJLHlEQUFTLENBQUMsTUFBSTtBQUNWLFFBQUdKLFVBQUgsRUFBYztBQUNWSyxnQkFBVTtBQUNiO0FBQ0osR0FKUSxFQUlOLENBQUNMLFVBQUQsQ0FKTSxDQUFULENBVnVCLENBZ0J2Qjs7QUFDQSxRQUFNTSxVQUFVLEdBQUcsbUJBQ2pCO0FBQUEsNEJBQ0E7QUFBSyxlQUFT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QUF2QyxFQUEwQztBQUNwRUksY0FBTSxFQUFFO0FBRDRELE9BQTFDLENBQTNCO0FBR0QzQixZQUFNLENBQUM0QixJQUFQLENBQVksUUFBWjtBQUNELEtBTEQsQ0FLQyxPQUFNQyxLQUFOLEVBQVk7QUFDWEMsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsS0FBdEI7QUFDRDtBQUNGLEdBVkg7O0FBWUEsU0FBTzNCLFVBQVUsZ0JBQUcsdUpBQUgsR0FBV0gsSUFBSSxnQkFBRyxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxnQkFBb0I7QUFBQTtBQUFBLG1CQUFwRDtBQUVILENBdEREOztBQXVEZUQsbUVBQWY7O0FBRUFBLElBQUksQ0FBQ2tDLGVBQUwsR0FBdUIsTUFBT0MsR0FBUCxJQUFlO0FBQ2xDLFFBQU07QUFBRVY7QUFBRixNQUFTVSxHQUFHLENBQUNULEtBQW5CO0FBQ0EsUUFBTVUsR0FBRyxHQUFHLE1BQU1SLEtBQUssQ0FBRSxtQ0FBa0NILEVBQUcsRUFBdkMsQ0FBdkI7QUFDQSxRQUFNO0FBQUNZO0FBQUQsTUFBUyxNQUFNRCxHQUFHLENBQUNFLElBQUosRUFBckI7QUFDQTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUNJLFNBQU87QUFBQ3JDLFFBQUksRUFBRW9DO0FBQVAsR0FBUDtBQUNILENBVkQiLCJmaWxlIjoiLi9wYWdlcy9baWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cblxuY29uc3QgVXNlciA9ICh7IHVzZXIgfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IFtpc0RlbGV0aW5nLHNldElzRGVsZXRpbmddPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0RlbGV0aW5nKCFpc0RlbGV0aW5nKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZihpc0RlbGV0aW5nKXtcbiAgICAgICAgICAgIGRlbGV0ZVVzZXIoKVxuICAgICAgICB9XG4gICAgfSwgW2lzRGVsZXRpbmddKVxuXG4gICAgLy9Vc2VyVHJ1dGh5LmpzXG4gICAgY29uc3QgVXNlclRydXRoeSA9ICgpID0+IChcbiAgICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvSWR9PlxuICAgICAgICAgICAgICA8Yj48bGFiZWw+SWQ8L2xhYmVsPjwvYj57dXNlci5faWR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+RW1haWw8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuZW1haWx9PC9sYWJlbD48YnIvPlxuICAgICAgICAgICAgICAgIDxiPjxsYWJlbD5GdWxsIE5hbWU8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuZmlyc3ROYW1lfSZuYnNwO3t1c2VyLmxhc3ROYW1lfTwvbGFiZWw+PGJyLz5cbiAgICAgICAgICAgICAgICA8Yj48bGFiZWw+QmlydGggRGF0ZTwvbGFiZWw+PC9iPiA8bGFiZWw+e3VzZXIuZGF0ZX08L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkNpdHk8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuY2l0eX08L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgPGI+PGxhYmVsPkFkZHJlc3M8L2xhYmVsPjwvYj48bGFiZWw+e3VzZXIuYWRkcmVzc308L2xhYmVsPjxici8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2ZvbnRTaXplOjEzfX0gc3RhcnRJY29uPXs8RGVsZXRlSWNvbiAvPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9ID5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RvSG9tZX0gc3R5bGU9e3ttYXJnaW5Ub3A6MTV9fT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e21hcmdpbkxlZnQ6MjV9fT7ihpAgQmFjayB0byBob21lPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcblxuICAgIGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzLyR7aWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1VzZXJzXCIpXG4gICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjpcIiwgZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIHJldHVybiBpc0RlbGV0aW5nID8gPD48Lz4gOiB1c2VyID8gPFVzZXJUcnV0aHkgLz4gOiA8PlVzZXIgaXMgZmFsc3k8Lz5cblxufVxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMvJHtpZH1gKVxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAvKlxuICAgICogVmllbmUgY2hpYW1hdGEgcXVhbmRvIHBhcnRlIGwnYXBwbGljYXppb25lLlxuICAgICogRScgdW4gY29tcG9ydGFtZW50byBub24gZGVzaWRlcmF0b1xuICAgICogRGV2ZSBlc3NlcmUgY2hpYW1hdGEgc29sbyBxdXNuZG8gcmljaGllZG8gaSBkYXRpIGRpIHVuIHV0ZW50ZS5cbiAgICAqL1xuICAgIHJldHVybiB7dXNlcjogZGF0YX1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id]/index.js\n");

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"heading2Xl\": \"utils_heading2Xl__1I65m\",\n\t\"headingXl\": \"utils_headingXl__1XecN\",\n\t\"headingLgB\": \"utils_headingLgB__2tB34\",\n\t\"headingLg\": \"utils_headingLg__de7p0\",\n\t\"headingMd\": \"utils_headingMd__3de6G\",\n\t\"headingSm\": \"utils_headingSm__3LFjQ\",\n\t\"headingXs\": \"utils_headingXs__zEz4R\",\n\t\"borderCircle\": \"utils_borderCircle__13qdJ\",\n\t\"colorInherit\": \"utils_colorInherit__3Gudf\",\n\t\"padding1px\": \"utils_padding1px__oCny8\",\n\t\"list\": \"utils_list__S7_pe\",\n\t\"listItem\": \"utils_listItem__2eJpJ\",\n\t\"lightText\": \"utils_lightText__12Ckm\",\n\t\"AppBar\": \"utils_AppBar__1evVj\",\n\t\"search\": \"utils_search__ORpAk\",\n\t\"follow\": \"utils_follow__Ld8Pw\",\n\t\"intro\": \"utils_intro__7q285\",\n\t\"blogContainer\": \"utils_blogContainer__hILj_\",\n\t\"poppins\": \"utils_poppins__G_hls\",\n\t\"container\": \"utils_container__2HOfz\",\n\t\"main\": \"utils_main__1GYxf\",\n\t\"userInfo\": \"utils_userInfo__37frC\",\n\t\"userInfoId\": \"utils_userInfoId__1gs44\",\n\t\"footer\": \"utils_footer__3d3Eo\",\n\t\"title\": \"utils_title__2w2XK\",\n\t\"description\": \"utils_description__17znU\",\n\t\"code\": \"utils_code__2OtYp\",\n\t\"grid\": \"utils_grid__MFe-L\",\n\t\"card\": \"utils_card__2Nj6o\",\n\t\"logo\": \"utils_logo__ZOFj-\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcz9lNWUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGluZzJYbFwiOiBcInV0aWxzX2hlYWRpbmcyWGxfXzFJNjVtXCIsXG5cdFwiaGVhZGluZ1hsXCI6IFwidXRpbHNfaGVhZGluZ1hsX18xWGVjTlwiLFxuXHRcImhlYWRpbmdMZ0JcIjogXCJ1dGlsc19oZWFkaW5nTGdCX18ydEIzNFwiLFxuXHRcImhlYWRpbmdMZ1wiOiBcInV0aWxzX2hlYWRpbmdMZ19fZGU3cDBcIixcblx0XCJoZWFkaW5nTWRcIjogXCJ1dGlsc19oZWFkaW5nTWRfXzNkZTZHXCIsXG5cdFwiaGVhZGluZ1NtXCI6IFwidXRpbHNfaGVhZGluZ1NtX18zTEZqUVwiLFxuXHRcImhlYWRpbmdYc1wiOiBcInV0aWxzX2hlYWRpbmdYc19fekV6NFJcIixcblx0XCJib3JkZXJDaXJjbGVcIjogXCJ1dGlsc19ib3JkZXJDaXJjbGVfXzEzcWRKXCIsXG5cdFwiY29sb3JJbmhlcml0XCI6IFwidXRpbHNfY29sb3JJbmhlcml0X18zR3VkZlwiLFxuXHRcInBhZGRpbmcxcHhcIjogXCJ1dGlsc19wYWRkaW5nMXB4X19vQ255OFwiLFxuXHRcImxpc3RcIjogXCJ1dGlsc19saXN0X19TN19wZVwiLFxuXHRcImxpc3RJdGVtXCI6IFwidXRpbHNfbGlzdEl0ZW1fXzJlSnBKXCIsXG5cdFwibGlnaHRUZXh0XCI6IFwidXRpbHNfbGlnaHRUZXh0X18xMkNrbVwiLFxuXHRcIkFwcEJhclwiOiBcInV0aWxzX0FwcEJhcl9fMWV2VmpcIixcblx0XCJzZWFyY2hcIjogXCJ1dGlsc19zZWFyY2hfX09ScEFrXCIsXG5cdFwiZm9sbG93XCI6IFwidXRpbHNfZm9sbG93X19MZDhQd1wiLFxuXHRcImludHJvXCI6IFwidXRpbHNfaW50cm9fXzdxMjg1XCIsXG5cdFwiYmxvZ0NvbnRhaW5lclwiOiBcInV0aWxzX2Jsb2dDb250YWluZXJfX2hJTGpfXCIsXG5cdFwicG9wcGluc1wiOiBcInV0aWxzX3BvcHBpbnNfX0dfaGxzXCIsXG5cdFwiY29udGFpbmVyXCI6IFwidXRpbHNfY29udGFpbmVyX18ySE9melwiLFxuXHRcIm1haW5cIjogXCJ1dGlsc19tYWluX18xR1l4ZlwiLFxuXHRcInVzZXJJbmZvXCI6IFwidXRpbHNfdXNlckluZm9fXzM3ZnJDXCIsXG5cdFwidXNlckluZm9JZFwiOiBcInV0aWxzX3VzZXJJbmZvSWRfXzFnczQ0XCIsXG5cdFwiZm9vdGVyXCI6IFwidXRpbHNfZm9vdGVyX18zZDNFb1wiLFxuXHRcInRpdGxlXCI6IFwidXRpbHNfdGl0bGVfXzJ3MlhLXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJ1dGlsc19kZXNjcmlwdGlvbl9fMTd6blVcIixcblx0XCJjb2RlXCI6IFwidXRpbHNfY29kZV9fMk90WXBcIixcblx0XCJncmlkXCI6IFwidXRpbHNfZ3JpZF9fTUZlLUxcIixcblx0XCJjYXJkXCI6IFwidXRpbHNfY2FyZF9fMk5qNm9cIixcblx0XCJsb2dvXCI6IFwidXRpbHNfbG9nb19fWk9Gai1cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/utils.module.css\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCI/YTQzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Delete\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIj9lYzk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/Link\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });