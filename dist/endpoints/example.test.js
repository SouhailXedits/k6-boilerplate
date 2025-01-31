/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ example_test),
  options: () => (/* binding */ options)
});

;// external "k6/http"
const http_namespaceObject = require("k6/http");
var http_default = /*#__PURE__*/__webpack_require__.n(http_namespaceObject);
;// ./src/lib/baseRequest.ts
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function makeRequest(config) {
  var method = config.method,
    endpoint = config.endpoint,
    _config$headers = config.headers,
    headers = _config$headers === void 0 ? {} : _config$headers,
    body = config.body;
  var response = http_default().request(method, endpoint, body, {
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, headers)
  });
  console.log(response.status);

  //   check(response, {
  //     'status is 200': (r) => r.status === 200,
  //   });

  return response;
}
;// ./src/lib/testBuilder.ts
function createTestConfig(config) {
  var _config$thresholds = config.thresholds,
    thresholds = _config$thresholds === void 0 ? {} : _config$thresholds,
    _config$vus = config.vus,
    vus = _config$vus === void 0 ? 1 : _config$vus,
    _config$duration = config.duration,
    duration = _config$duration === void 0 ? '30s' : _config$duration,
    _config$sleep = config.sleep,
    sleep = _config$sleep === void 0 ? 1 : _config$sleep,
    _config$stages = config.stages,
    stages = _config$stages === void 0 ? [] : _config$stages;
  return {
    thresholds: thresholds,
    vus: vus,
    duration: !stages.length ? duration : undefined,
    stages: stages
  };
}
;// ./src/config.ts
var BASE_URL = 'http://localhost:6003';
var DEFAULT_HEADERS = {
  'Accept': 'application/json'
};
;// ./src/endpoints/example.test.ts



var options = createTestConfig({
  name: 'Get User Profile',
  request: {
    method: 'GET',
    endpoint: "".concat(BASE_URL),
    headers: DEFAULT_HEADERS
  },
  thresholds: {
    'http_req_duration': ['p(95)<500', 'p(99)<1000'],
    // 95% of requests should be below 500ms, 99% of requests should be below 1000ms
    'http_req_failed': ['rate<0.01'] // Less than 1% of requests should fail
  },
  //   vus: 10,
  //   duration: '2s',
  tags: {
    'test': 'example'
  },
  sleep: 1,
  stages: [{
    duration: '10s',
    target: 10
  }, {
    duration: '10s',
    target: 0
  }]
});
/* harmony default export */ function example_test() {
  makeRequest({
    method: 'GET',
    endpoint: "".concat(BASE_URL),
    headers: DEFAULT_HEADERS
  });
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;