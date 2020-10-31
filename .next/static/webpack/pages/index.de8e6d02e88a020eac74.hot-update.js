webpackHotUpdate_N_E("pages/index",{

/***/ "./css/GlobalStyles.tsx":
/*!******************************!*\
  !*** ./css/GlobalStyles.tsx ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body {\\n        padding : 0;\\n        margin : 0;\\n        background: #0A192F;\\n    }\\n\\n    button {\\n        padding: 15px 30px;\\n        margin : 50px 0px 0px;\\n        border : solid 1px;\\n        border-radius : 3px;\\n        border-color : #FAF3F3;\\n        color : #FAF3F3;\\n        font-size : 15px;\\n        font-weight : lighter;\\n        font-family : var(--font-mono);\\n        background-color : #0A192F;\\n        cursor: pointer;\\n    }\\n\\n    :root {\\n    --dark-navy: #020c1b;\\n    --navy: #0a192f;\\n    --light-navy: #172a45;\\n    --lightest-navy: #303C55;\\n    --navy-shadow: rgba(2, 12, 27, 0.7);\\n    --slate: #8690B0;\\n    --light-slate: #a8b2d1;\\n    --lightest-slate: #ccd6f6;\\n    --white: #e6f1ff;\\n    --green: #64ffda;\\n    --green-tint: rgba(100, 255, 218, 0.1);\\n\\n    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;\\n    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;\\n    \\n    --fz-xxs: 12px;\\n    --fz-xs: 13px;\\n    --fz-sm: 14px;\\n    --fz-md: 16px;\\n    --fz-lg: 18px;\\n    --fz-xl: 20px;\\n    --fz-xxl: 22px;\\n    --fz-heading: 32px;\\n\\n    --border-radius: 4px;\\n    --nav-height: 100px;\\n    --nav-scroll-height: 70px;\\n\\n    --tab-height: 42px;\\n    --tab-width: 120px;\\n\\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\\n\\n    --hamburger-width: 30px;\\n\\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\\n  }\\n\\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  h5,\\n  h6 {\\n    margin: 0 0 10px 0;\\n    font-weight: 500;\\n    color: var(--lightest-slate);\\n    line-height: 1.1;\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL0dsb2JhbFN0eWxlcy50c3g/NjE0NyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtBQThFQSIsImZpbGUiOiIuL2Nzcy9HbG9iYWxTdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZyA6IDA7XG4gICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwQTE5MkY7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICBtYXJnaW4gOiA1MHB4IDBweCAwcHg7XG4gICAgICAgIGJvcmRlciA6IHNvbGlkIDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDNweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yIDogI0ZBRjNGMztcbiAgICAgICAgY29sb3IgOiAjRkFGM0YzO1xuICAgICAgICBmb250LXNpemUgOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodCA6IGxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5IDogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICMwQTE5MkY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICA6cm9vdCB7XG4gICAgLS1kYXJrLW5hdnk6ICMwMjBjMWI7XG4gICAgLS1uYXZ5OiAjMGExOTJmO1xuICAgIC0tbGlnaHQtbmF2eTogIzE3MmE0NTtcbiAgICAtLWxpZ2h0ZXN0LW5hdnk6ICMzMDNDNTU7XG4gICAgLS1uYXZ5LXNoYWRvdzogcmdiYSgyLCAxMiwgMjcsIDAuNyk7XG4gICAgLS1zbGF0ZTogIzg2OTBCMDtcbiAgICAtLWxpZ2h0LXNsYXRlOiAjYThiMmQxO1xuICAgIC0tbGlnaHRlc3Qtc2xhdGU6ICNjY2Q2ZjY7XG4gICAgLS13aGl0ZTogI2U2ZjFmZjtcbiAgICAtLWdyZWVuOiAjNjRmZmRhO1xuICAgIC0tZ3JlZW4tdGludDogcmdiYSgxMDAsIDI1NSwgMjE4LCAwLjEpO1xuXG4gICAgLS1mb250LXNhbnM6ICdDYWxpYnJlJywgJ1NhbiBGcmFuY2lzY28nLCAnU0YgUHJvIFRleHQnLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gICAgLS1mb250LW1vbm86ICdTRiBNb25vJywgJ0ZpcmEgQ29kZScsICdGaXJhIE1vbm8nLCAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XG4gICAgXG4gICAgLS1mei14eHM6IDEycHg7XG4gICAgLS1mei14czogMTNweDtcbiAgICAtLWZ6LXNtOiAxNHB4O1xuICAgIC0tZnotbWQ6IDE2cHg7XG4gICAgLS1mei1sZzogMThweDtcbiAgICAtLWZ6LXhsOiAyMHB4O1xuICAgIC0tZnoteHhsOiAyMnB4O1xuICAgIC0tZnotaGVhZGluZzogMzJweDtcblxuICAgIC0tYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC0tbmF2LWhlaWdodDogMTAwcHg7XG4gICAgLS1uYXYtc2Nyb2xsLWhlaWdodDogNzBweDtcblxuICAgIC0tdGFiLWhlaWdodDogNDJweDtcbiAgICAtLXRhYi13aWR0aDogMTIwcHg7XG5cbiAgICAtLWVhc2luZzogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC0tdHJhbnNpdGlvbjogYWxsIDAuMjVzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcblxuICAgIC0taGFtYnVyZ2VyLXdpZHRoOiAzMHB4O1xuXG4gICAgLS1oYW0tYmVmb3JlOiB0b3AgMC4xcyBlYXNlLWluIDAuMjVzLCBvcGFjaXR5IDAuMXMgZWFzZS1pbjtcbiAgICAtLWhhbS1iZWZvcmUtYWN0aXZlOiB0b3AgMC4xcyBlYXNlLW91dCwgb3BhY2l0eSAwLjFzIGVhc2Utb3V0IDAuMTJzO1xuICAgIC0taGFtLWFmdGVyOiBib3R0b20gMC4xcyBlYXNlLWluIDAuMjVzLCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gICAgLS1oYW0tYWZ0ZXItYWN0aXZlOiBib3R0b20gMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDAuMTJzO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNsYXRlKTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbmA7XG5cbmV4cG9ydCB7IEdsb2JhbFN0eWxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./css/GlobalStyles.tsx\n");

/***/ })

})