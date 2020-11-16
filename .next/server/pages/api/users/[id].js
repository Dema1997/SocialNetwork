module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UserSchema = new mongoose.Schema({\n  firstName: {\n    type: String,\n    required: [true, 'Please add a title'],\n    unique: true,\n    trim: true,\n    maxlength: [25, 'First Name cannot be more than 20 characters']\n  },\n  lastName: {\n    type: String,\n    required: true,\n    maxlength: [25, 'Last Name cannot be more than 20 characters']\n  },\n  email: {\n    type: String,\n    required: true,\n    maxlength: [35, 'Email cannot be more than 20 characters']\n  },\n  city: {\n    type: String,\n    required: true,\n    maxlength: [20, 'City Name cannot be more than 20 characters']\n  },\n  address: {\n    type: String,\n    required: true,\n    maxlength: [35, 'Address cannot be more than 20 characters']\n  },\n  date: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = mongoose.models.User || mongoose.model('User', UserSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvVXNlci5qcz8zYTIwIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0cmltIiwibWF4bGVuZ3RoIiwibGFzdE5hbWUiLCJlbWFpbCIsImNpdHkiLCJhZGRyZXNzIiwiZGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ25DQyxXQUFTLEVBQUU7QUFDUEMsUUFBSSxFQUFFQyxNQURDO0FBRVBDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxvQkFBUCxDQUZIO0FBR1BDLFVBQU0sRUFBRSxJQUhEO0FBSVBDLFFBQUksRUFBRSxJQUpDO0FBS1BDLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyw4Q0FBTDtBQUxKLEdBRHdCO0FBUW5DQyxVQUFRLEVBQUU7QUFDTk4sUUFBSSxFQUFFQyxNQURBO0FBRU5DLFlBQVEsRUFBRSxJQUZKO0FBR05HLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyw2Q0FBTDtBQUhMLEdBUnlCO0FBYW5DRSxPQUFLLEVBQUU7QUFDSFAsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxJQUZQO0FBR0hHLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyx5Q0FBTDtBQUhSLEdBYjRCO0FBa0JuQ0csTUFBSSxFQUFFO0FBQ0ZSLFFBQUksRUFBRUMsTUFESjtBQUVGQyxZQUFRLEVBQUUsSUFGUjtBQUdGRyxhQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssNkNBQUw7QUFIVCxHQWxCNkI7QUF1Qm5DSSxTQUFPLEVBQUU7QUFDTFQsUUFBSSxFQUFFQyxNQUREO0FBRUxDLFlBQVEsRUFBRSxJQUZMO0FBR0xHLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSywyQ0FBTDtBQUhOLEdBdkIwQjtBQTRCbkNLLE1BQUksRUFBRTtBQUNGVixRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlI7QUE1QjZCLENBQXBCLENBQW5CO0FBa0NBUyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixRQUFRLENBQUNrQixNQUFULENBQWdCQyxJQUFoQixJQUF3Qm5CLFFBQVEsQ0FBQ29CLEtBQVQsQ0FBZSxNQUFmLEVBQXNCbEIsVUFBdEIsQ0FBekMiLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSB0aXRsZSddLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgICB0cmltOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzI1LCAnRmlyc3QgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzI1LCAnTGFzdCBOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzM1LCAnRW1haWwgY2Fubm90IGJlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBjaXR5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzIwLCAnQ2l0eSBOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgYWRkcmVzczoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFszNSwgJ0FkZHJlc3MgY2Fubm90IGJlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBkYXRlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJyxVc2VyU2NoZW1hKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/users/[id].js":
/*!*********************************!*\
  !*** ./pages/api/users/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    query: {\n      id\n    },\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);\n\n        if (!user) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: user\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'PUT':\n      try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {\n          new: true,\n          runValidators: true\n        });\n\n        if (!user) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: user\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'DELETE':\n      try {\n        const deletedUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({\n          _id: id\n        });\n\n        if (!deletedUser) {\n          return res.status(400).json({\n            success: false\n          });\n        }\n\n        res.status(200).json({\n          success: true,\n          data: {}\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvLmpzPzYxZTkiXSwibmFtZXMiOlsiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInVzZXIiLCJVc2VyIiwiZmluZEJ5SWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsInJ1blZhbGlkYXRvcnMiLCJkZWxldGVkVXNlciIsImRlbGV0ZU9uZSIsIl9pZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFtQjtBQUM5QixRQUFNO0FBQ0ZDLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBREw7QUFFRkM7QUFGRSxNQUdGSixHQUhKOztBQUtBLFVBQU9JLE1BQVA7QUFDSSxTQUFLLEtBQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUMsSUFBSSxHQUFHLE1BQU1DLG1EQUFJLENBQUNDLFFBQUwsQ0FBY0osRUFBZCxDQUFuQjs7QUFDQSxZQUFHLENBQUNFLElBQUosRUFBUztBQUNMLGlCQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxtQkFBTyxFQUFDO0FBQVYsV0FBckIsQ0FBUDtBQUNIOztBQUNEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxpQkFBTyxFQUFDLElBQVQ7QUFBZUMsY0FBSSxFQUFFTjtBQUFyQixTQUFyQjtBQUNILE9BTkQsQ0FNQyxPQUFNTyxLQUFOLEVBQVk7QUFDVFgsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0osU0FBSyxLQUFMO0FBQ0ksVUFBRztBQUNDLGNBQU1MLElBQUksR0FBRyxNQUFNQyxtREFBSSxDQUFDTyxpQkFBTCxDQUF1QlYsRUFBdkIsRUFBMkJILEdBQUcsQ0FBQ2MsSUFBL0IsRUFBcUM7QUFDcERDLGFBQUcsRUFBRSxJQUQrQztBQUVwREMsdUJBQWEsRUFBRTtBQUZxQyxTQUFyQyxDQUFuQjs7QUFJQSxZQUFHLENBQUNYLElBQUosRUFBUztBQUNMLGlCQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxtQkFBTyxFQUFFO0FBQVYsV0FBckIsQ0FBUDtBQUNIOztBQUNEVCxXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxpQkFBTyxFQUFDLElBQVQ7QUFBZUMsY0FBSSxFQUFDTjtBQUFwQixTQUFyQjtBQUNILE9BVEQsQ0FTQyxPQUFNTyxLQUFOLEVBQVk7QUFDVFgsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksVUFBRztBQUNDLGNBQU1PLFdBQVcsR0FBQyxNQUFNWCxtREFBSSxDQUFDWSxTQUFMLENBQWU7QUFBQ0MsYUFBRyxFQUFFaEI7QUFBTixTQUFmLENBQXhCOztBQUVBLFlBQUcsQ0FBQ2MsV0FBSixFQUFnQjtBQUNaLGlCQUFPaEIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsbUJBQU8sRUFBQztBQUFULFdBQXJCLENBQVA7QUFDSDs7QUFDRFQsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQyxJQUFUO0FBQWVDLGNBQUksRUFBQztBQUFwQixTQUFyQjtBQUNILE9BUEQsQ0FPQyxPQUFNQyxLQUFOLEVBQVk7QUFDVFgsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSVQsU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQXhDUjtBQTBDSCxDQWhERCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2Vycy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi8uLi91dGlscy9kYkNvbm5lY3QnXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcidcblxuZGJDb25uZWN0KClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PntcbiAgICBjb25zdCB7XG4gICAgICAgIHF1ZXJ5OiB7IGlkIH0sXG4gICAgICAgIG1ldGhvZFxuICAgIH0gPSByZXFcblxuICAgIHN3aXRjaChtZXRob2QpIHtcbiAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpXG4gICAgICAgICAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOmZhbHNlfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6dHJ1ZSwgZGF0YTogdXNlcn0pXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQVVQnOlxuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKGlkLCByZXEuYm9keSwge1xuICAgICAgICAgICAgICAgICAgICBuZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZighdXNlcil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLCBkYXRhOnVzZXJ9KVxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVkVXNlcj1hd2FpdCBVc2VyLmRlbGV0ZU9uZSh7X2lkOiBpZH0pXG5cbiAgICAgICAgICAgICAgICBpZighZGVsZXRlZFVzZXIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLCBkYXRhOnt9fSlcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users/[id].js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function dbConnect() {\n  if (connection.isConnected) {\n    return;\n  }\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\" mongodb+srv://Filippo:6m40giw5hfwT6d9V@cluster0.3vmxp.mongodb.net/Filippo?retryWrites=true&w=majority \", {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  connection.isConnected = db.connections[0].readyState;\n  console.log(connection.isConnected);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbConnect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanM/NDZlMiJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBRXZCLE1BQUdELFVBQVUsQ0FBQ0UsV0FBZCxFQUEwQjtBQUN0QjtBQUNIOztBQUVELFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyx5R0FBakIsRUFBd0M7QUFDckRDLG1CQUFlLEVBQUUsSUFEb0M7QUFFckRDLHNCQUFrQixFQUFDO0FBRmtDLEdBQXhDLENBQWpCO0FBS0FSLFlBQVUsQ0FBQ0UsV0FBWCxHQUF5QkMsRUFBRSxDQUFDTSxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlaLFVBQVUsQ0FBQ0UsV0FBdkI7QUFDSDs7QUFFY0Qsd0VBQWYiLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgICBcclxuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCB7XHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTp0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2coY29ubmVjdGlvbi5pc0Nvbm5lY3RlZClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });