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
  "default": () => (/* binding */ new_endpoint_test),
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
;// ./src/config.ts
var BASE_URL = 'http://localhost:6003';
var DEFAULT_HEADERS = {
  'Accept': 'application/json'
};
;// ./src/endpoints/new-endpoint.test.ts
function new_endpoint_test_typeof(o) { "@babel/helpers - typeof"; return new_endpoint_test_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, new_endpoint_test_typeof(o); }
function new_endpoint_test_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function new_endpoint_test_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? new_endpoint_test_ownKeys(Object(t), !0).forEach(function (r) { new_endpoint_test_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : new_endpoint_test_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function new_endpoint_test_defineProperty(e, r, t) { return (r = new_endpoint_test_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function new_endpoint_test_toPropertyKey(t) { var i = new_endpoint_test_toPrimitive(t, "string"); return "symbol" == new_endpoint_test_typeof(i) ? i : i + ""; }
function new_endpoint_test_toPrimitive(t, r) { if ("object" != new_endpoint_test_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != new_endpoint_test_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var options = {
  thresholds: {
    'http_req_duration': ['p(95)<300'],
    'http_req_failed': ['rate<0.05']
  },
  //   vus: 10,
  //   duration: '30s',
  stages: [{
    duration: '10s',
    target: 10
  }, {
    duration: '30s',
    target: 5000
  }, {
    duration: '10s',
    target: 0
  }]
};
/* harmony default export */ function new_endpoint_test() {
  makeRequest({
    method: 'GET',
    endpoint: "".concat(BASE_URL, "/v1/auth/me/profile"),
    headers: new_endpoint_test_objectSpread(new_endpoint_test_objectSpread({}, DEFAULT_HEADERS), {}, {
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGJmODlhZDhjNDA0MGEyMzQwZDA1MCIsInN1YiI6IjY1OGJmODlhZDhjNDA0MGEyMzQwZDA1MCIsInVzZXJuYW1lIjoieW91c3NlZmJvdXJvdXJvdTkwIiwid29ya3NwYWNlIjoiNjU5OWJjMjNiZGE4ZWUwMGQ2ZDdmMzljIiwid29ya3NwYWNlTmFtZSI6IlNvZnR5bGluZXMgNjU5OWJjMjNiZGE4ZWUwMGQ2ZDdmMzljIiwiaXNWZXJpZmllZCI6dHJ1ZSwibGFuZyI6ImVuIiwiaWF0IjoxNzM4MjQ2Njg4LCJleHAiOjE3MzgzMjU4ODh9.JjwMm-j0B2XSObq5bVQes91KjPDEXQ2qMU0qtnM8-twzJFddIzU0G9Ndfi3USfScWbwrtOCKa1k-LGfwTgwCQdsz4rP6rQVOV0-7uA1BrBDbznFbWMSr44HF-SFOFieH8xW7rdEAWt0UDCwhmNf-fou8B0aJanC11XQubgVZCy4-uMpnfSjKUchbOAtRbRqImT7ZMPtnGPBvJxfTcPXHNaZ1Gx2kWRiaDwpfQsbTGxcCmMbNn8HZUa6qEeGhSbmNeq9v4NYdbrOAzw7w2NN4TIPtAKApa-c3vC8O5GPmmx_9TdBZHxfgmFXsalzc5MUDphFlZ51xIB_GiihJiO58wQ3M8oZtLMBAMVt4G5JpH2MGbXKPmYrrpQeR0iEDu1etdLJKqir_66ttW11osCnHDSaZ-L1vB7dIg9UeCP05cZ1CIWv_tPKbYWUIsBkLmcCjcF29EDFgomVumRj5-m8-LldAdUVje-hHQNeTvJX29RgRODW1fZo-ccnJv-EIAM3EpDHGyoTw6BcGhNDovepG8FCvMtGrWfAsTf-0KkOA6vRzmXtIVfceIUg01FDIKp_8M9GEac2mkDW7Hduga923ULbPqPpaX3JG-kjE7oGBnzG8XigiKGDovW3Ry1BCNMd-ZqPOaXDUasZQ7FpZIWB7W7XzaUHbUcFAIUv_nakq6rE',
      'X-Workspace': '6599bc23bda8ee00d6d7f39c'
    })
    // body: JSON.stringify({
    //   key: 'value'
    // })
  });
}
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;