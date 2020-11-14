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

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a title'],
    unique: true,
    trim: true,
    maxlength: [25, 'First Name cannot be more than 20 characters']
  },
  lastName: {
    type: String,
    required: true,
    maxlength: [25, 'Last Name cannot be more than 20 characters']
  },
  email: {
    type: String,
    required: true,
    maxlength: [35, 'Email cannot be more than 20 characters']
  },
  city: {
    type: String,
    required: true,
    maxlength: [20, 'City Name cannot be more than 20 characters']
  },
  address: {
    type: String,
    required: true,
    maxlength: [35, 'Address cannot be more than 20 characters']
  },
  date: {
    type: String,
    required: true
  }
});
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

/***/ }),

/***/ "./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ "./utils/dbConnect.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ "./models/User.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);


Object(_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    method
  } = req;
  console.log(method);

  switch (method) {
    case 'GET':
      try {
        const users = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.find({});
        res.status(200).json({
          success: true,
          data: users
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'POST':
      try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.create(req.body);
        res.status(201).json({
          success: true,
          data: user
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          reason: error
        });
      }

      break;

    default:
      res.status(400).json({
        success: false
      });
      break;
  }
});

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(" mongodb+srv://Filippo:6m40giw5hfwT6d9V@cluster0.3vmxp.mongodb.net/Filippo?retryWrites=true&w=majority ", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
}

/* harmony default export */ __webpack_exports__["default"] = (dbConnect);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIlVzZXJTY2hlbWEiLCJTY2hlbWEiLCJmaXJzdE5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0cmltIiwibWF4bGVuZ3RoIiwibGFzdE5hbWUiLCJlbWFpbCIsImNpdHkiLCJhZGRyZXNzIiwiZGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiLCJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwidXNlcnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJ1c2VyIiwiY3JlYXRlIiwiYm9keSIsInJlYXNvbiIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImRiIiwiY29ubmVjdCIsInByb2Nlc3MiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBRSxJQUFWO0FBQWdCQyxjQUFJLEVBQUNFO0FBQXJCLFNBQXJCO0FBQ0gsT0FIRCxDQUdDLE9BQU1ELEtBQU4sRUFBWTtBQUNUVixXQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxpQkFBTyxFQUFFLEtBQVg7QUFBbUJNLGdCQUFNLEVBQUVKO0FBQTNCLFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSVYsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDQTtBQW5CUjtBQXFCSCxDQXpCRCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1PLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlakIsU0FBZixHQUEyQjtBQUV2QixNQUFHaUIsVUFBVSxDQUFDQyxXQUFkLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU14QywrQ0FBUSxDQUFDeUMsT0FBVCxDQUFpQkMseUdBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBQztBQUZrQyxHQUF4QyxDQUFqQjtBQUtBTixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBRUFyQixTQUFPLENBQUNDLEdBQVIsQ0FBWVksVUFBVSxDQUFDQyxXQUF2QjtBQUNIOztBQUVjbEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanNcIik7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGZpcnN0TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcclxuICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyNSwgJ0ZpcnN0IE5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBsYXN0TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyNSwgJ0xhc3QgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFszNSwgJ0VtYWlsIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgY2l0eToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyMCwgJ0NpdHkgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMzUsICdBZGRyZXNzIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsVXNlclNjaGVtYSkiLCJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInXHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtZXRob2QpXHJcbiAgICBzd2l0Y2gobWV0aG9kKSB7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKHt9KTtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTp1c2Vyc30pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KVxyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6dXNlcn0pXHJcbiAgICAgICAgICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlICwgcmVhc29uOiBlcnJvcn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICAgIFxyXG4gICAgaWYoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OnRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjb25uZWN0aW9uLmlzQ29ubmVjdGVkKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==