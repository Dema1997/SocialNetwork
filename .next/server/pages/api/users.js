module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst UserSchema = new mongoose.Schema({\n  firstName: {\n    type: String,\n    required: [true, 'Please add a title'],\n    unique: true,\n    trim: true,\n    maxlength: [20, 'First Name cannot be more than 20 characters']\n  },\n  lastName: {\n    type: String,\n    required: true,\n    maxlength: [20, 'Last Name cannot be more than 20 characters']\n  },\n  email: {\n    type: String,\n    required: true,\n    maxlength: [20, 'Email cannot be more than 20 characters']\n  },\n  city: {\n    type: String,\n    required: true,\n    maxlength: [20, 'City Name cannot be more than 20 characters']\n  },\n  address: {\n    type: String,\n    required: true,\n    maxlength: [20, 'Address cannot be more than 20 characters']\n  },\n  date: {\n    type: String,\n    required: true\n  }\n});\nmodule.exports = mongoose.models.User || mongoose.model('User', UserSchema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvVXNlci5qcz8zYTIwIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0cmltIiwibWF4bGVuZ3RoIiwibGFzdE5hbWUiLCJlbWFpbCIsImNpdHkiLCJhZGRyZXNzIiwiZGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFiLENBQW9CO0FBQ25DQyxXQUFTLEVBQUU7QUFDUEMsUUFBSSxFQUFFQyxNQURDO0FBRVBDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxvQkFBUCxDQUZIO0FBR1BDLFVBQU0sRUFBRSxJQUhEO0FBSVBDLFFBQUksRUFBRSxJQUpDO0FBS1BDLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyw4Q0FBTDtBQUxKLEdBRHdCO0FBUW5DQyxVQUFRLEVBQUU7QUFDTk4sUUFBSSxFQUFFQyxNQURBO0FBRU5DLFlBQVEsRUFBRSxJQUZKO0FBR05HLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyw2Q0FBTDtBQUhMLEdBUnlCO0FBYW5DRSxPQUFLLEVBQUU7QUFDSFAsUUFBSSxFQUFFQyxNQURIO0FBRUhDLFlBQVEsRUFBRSxJQUZQO0FBR0hHLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSyx5Q0FBTDtBQUhSLEdBYjRCO0FBa0JuQ0csTUFBSSxFQUFFO0FBQ0ZSLFFBQUksRUFBRUMsTUFESjtBQUVGQyxZQUFRLEVBQUUsSUFGUjtBQUdGRyxhQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUssNkNBQUw7QUFIVCxHQWxCNkI7QUF1Qm5DSSxTQUFPLEVBQUU7QUFDTFQsUUFBSSxFQUFFQyxNQUREO0FBRUxDLFlBQVEsRUFBRSxJQUZMO0FBR0xHLGFBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSywyQ0FBTDtBQUhOLEdBdkIwQjtBQTRCbkNLLE1BQUksRUFBRTtBQUNGVixRQUFJLEVBQUVDLE1BREo7QUFFRkMsWUFBUSxFQUFFO0FBRlI7QUE1QjZCLENBQXBCLENBQW5CO0FBa0NBUyxNQUFNLENBQUNDLE9BQVAsR0FBaUJqQixRQUFRLENBQUNrQixNQUFULENBQWdCQyxJQUFoQixJQUF3Qm5CLFFBQVEsQ0FBQ29CLEtBQVQsQ0FBZSxNQUFmLEVBQXNCbEIsVUFBdEIsQ0FBekMiLCJmaWxlIjoiLi9tb2RlbHMvVXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSB0aXRsZSddLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgICB0cmltOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzIwLCAnRmlyc3QgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzIwLCAnTGFzdCBOYW1lIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMjAsICdFbWFpbCBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGNpdHk6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMjAsICdDaXR5IE5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBhZGRyZXNzOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIG1heGxlbmd0aDogWzIwLCAnQWRkcmVzcyBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGRhdGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLFVzZXJTY2hlbWEpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/User.js\n");

/***/ }),

/***/ "./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\nObject(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    method\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      try {\n        const users = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.find({});\n        res.status(200).json({\n          success: true,\n          data: users\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    case 'POST':\n      try {\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);\n        res.status(201).json({\n          success: true,\n          data: user\n        });\n      } catch (error) {\n        res.status(400).json({\n          success: false\n        });\n      }\n\n      break;\n\n    default:\n      res.status(400).json({\n        success: false\n      });\n      break;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/YzVmYyJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VycyIsIlVzZXIiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJ1c2VyIiwiY3JlYXRlIiwiYm9keSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLGdFQUFTO0FBRU0sc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixRQUFNO0FBQUVDO0FBQUYsTUFBYUYsR0FBbkI7O0FBRUEsVUFBT0UsTUFBUDtBQUNJLFNBQUssS0FBTDtBQUNJLFVBQUk7QUFDQSxjQUFNQyxLQUFLLEdBQUcsTUFBTUMsbURBQUksQ0FBQ0MsSUFBTCxDQUFVLEVBQVYsQ0FBcEI7QUFDQUosV0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsaUJBQU8sRUFBRSxJQUFYO0FBQWlCQyxjQUFJLEVBQUNOO0FBQXRCLFNBQXJCO0FBQ0gsT0FIRCxDQUdDLE9BQU1PLEtBQU4sRUFBYTtBQUNWVCxXQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFO0FBQVgsU0FBckI7QUFDSDs7QUFDRDs7QUFDSixTQUFLLE1BQUw7QUFDSSxVQUFJO0FBQ0EsY0FBTUcsSUFBSSxHQUFHLE1BQU1QLG1EQUFJLENBQUNRLE1BQUwsQ0FBWVosR0FBRyxDQUFDYSxJQUFoQixDQUFuQjtBQUNBWixXQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDQyxpQkFBTyxFQUFFLElBQVY7QUFBZ0JDLGNBQUksRUFBQ0U7QUFBckIsU0FBckI7QUFDSCxPQUhELENBR0MsT0FBTUQsS0FBTixFQUFZO0FBQ1RULFdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGlCQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNIOztBQUNEOztBQUNKO0FBQ0lQLFNBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0E7QUFuQlI7QUFxQkgsQ0F4QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInXHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgICBzd2l0Y2gobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKHt9KTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTp1c2Vyc30pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6dXNlcn0pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users/index.js\n");

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