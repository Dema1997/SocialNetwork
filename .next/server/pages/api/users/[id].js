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

/***/ "./pages/api/users/[id].js":
/*!*********************************!*\
  !*** ./pages/api/users/[id].js ***!
  \*********************************/
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
    query: {
      id
    },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.findById(id);

        if (!user) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: user
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'PUT':
      try {
        const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!user) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: user
        });
      } catch (error) {
        res.status(400).json({
          success: false
        });
      }

      break;

    case 'DELETE':
      try {
        const deletedUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default.a.deleteOne({
          _id: id
        });

        if (!deletedUser) {
          return res.status(400).json({
            success: false
          });
        }

        res.status(200).json({
          success: true,
          data: {}
        });
      } catch (error) {
        res.status(400).json({
          success: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXJzLy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9kYkNvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwiZmlyc3ROYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwidHJpbSIsIm1heGxlbmd0aCIsImxhc3ROYW1lIiwiZW1haWwiLCJjaXR5IiwiYWRkcmVzcyIsImRhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIiwiZGJDb25uZWN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsInVzZXIiLCJmaW5kQnlJZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJib2R5IiwibmV3IiwicnVuVmFsaWRhdG9ycyIsImRlbGV0ZWRVc2VyIiwiZGVsZXRlT25lIiwiX2lkIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztR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QUFwQixTQUFyQjtBQUNILE9BUEQsQ0FPQyxPQUFNQyxLQUFOLEVBQVk7QUFDVFYsV0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsaUJBQU8sRUFBQztBQUFULFNBQXJCO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSVIsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFDO0FBQVQsT0FBckI7QUFDQTtBQXhDUjtBQTBDSCxDQWhERCxFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1VLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlcEIsU0FBZixHQUEyQjtBQUV2QixNQUFHb0IsVUFBVSxDQUFDQyxXQUFkLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBRUQsUUFBTUMsRUFBRSxHQUFHLE1BQU0zQywrQ0FBUSxDQUFDNEMsT0FBVCxDQUFpQkMseUdBQWpCLEVBQXdDO0FBQ3JEQyxtQkFBZSxFQUFFLElBRG9DO0FBRXJEQyxzQkFBa0IsRUFBQztBQUZrQyxHQUF4QyxDQUFqQjtBQUtBTixZQUFVLENBQUNDLFdBQVgsR0FBeUJDLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlLENBQWYsRUFBa0JDLFVBQTNDO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixVQUFVLENBQUNDLFdBQXZCO0FBQ0g7O0FBRWNyQix3RUFBZixFOzs7Ozs7Ozs7OztBQ3BCQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvdXNlcnMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3VzZXJzL1tpZF0uanNcIik7XG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIGZpcnN0TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgdGl0bGUnXSxcclxuICAgICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyNSwgJ0ZpcnN0IE5hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAyMCBjaGFyYWN0ZXJzJ11cclxuICAgIH0sXHJcbiAgICBsYXN0TmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyNSwgJ0xhc3QgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXSxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFszNSwgJ0VtYWlsIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgY2l0eToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBtYXhsZW5ndGg6IFsyMCwgJ0NpdHkgTmFtZSBjYW5ub3QgYmUgbW9yZSB0aGFuIDIwIGNoYXJhY3RlcnMnXVxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgbWF4bGVuZ3RoOiBbMzUsICdBZGRyZXNzIGNhbm5vdCBiZSBtb3JlIHRoYW4gMjAgY2hhcmFjdGVycyddXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsVXNlclNjaGVtYSkiLCJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInXHJcblxyXG5kYkNvbm5lY3QoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PntcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBxdWVyeTogeyBpZCB9LFxyXG4gICAgICAgIG1ldGhvZFxyXG4gICAgfSA9IHJlcVxyXG5cclxuICAgIHN3aXRjaChtZXRob2QpIHtcclxuICAgICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpXHJcbiAgICAgICAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLCBkYXRhOiB1c2VyfSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdQVVQnOlxyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZShpZCwgcmVxLmJvZHksIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZighdXNlcil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLCBkYXRhOnVzZXJ9KVxyXG4gICAgICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6ZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0RFTEVURSc6XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRVc2VyPWF3YWl0IFVzZXIuZGVsZXRlT25lKHtfaWQ6IGlkfSlcclxuXHJcbiAgICAgICAgICAgICAgICBpZighZGVsZXRlZFVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2Vzczp0cnVlLCBkYXRhOnt9fSlcclxuICAgICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOmZhbHNlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczpmYWxzZX0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gICAgXHJcbiAgICBpZihjb25uZWN0aW9uLmlzQ29ubmVjdGVkKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9