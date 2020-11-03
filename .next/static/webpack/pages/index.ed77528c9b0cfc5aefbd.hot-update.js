webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/config */ \"./utils/config.tsx\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/Sidebar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__Wrapper\",\n  componentId: \"sc-1abzn0a-0\"\n})([\"position:fixed;top:0;bottom:0;left:0;z-index:1;@media (max-width:768px){width:min(55vw,400px);}@media (max-width:480px){width:min(60vw,400px);}\"]);\n_c = Wrapper;\nvar SideBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__SideBarWrapper\",\n  componentId: \"sc-1abzn0a-1\"\n})([\"list-style:none;background-color:var(--light-navy);height:100vh;border:0;width:min(65vw,350px);div{text-align:right;padding:30px 30px;cursor:pointer;}ul{padding:0;margin:0;width:100%;li{position:relative;margin:0 auto 60px;a{text-decoration:none;color:var(--light-slate);font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));font-size:30px;position:absolute;text-align:center;&:after{content:\\\"\\\";display:block;width:0%;height:3px;background-color:#fff;transition:width 0.3s;}&:hover:after{width:100%;transition:width 0.3s;}}}}\"]);\n_c2 = SideBarWrapper;\n\nvar Sidebar = function Sidebar(_ref) {\n  var animatedSidebar = _ref.animatedSidebar,\n      toggleSideBar = _ref.toggleSideBar,\n      toogle = _ref.toogle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n        className: toogle ? \"blur\" : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n        style: animatedSidebar,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SideBarWrapper, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_5__[\"X\"], {\n              color: \"#fff\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: _utils_config__WEBPACK_IMPORTED_MODULE_4__[\"sideLink\"].map(function (link) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"\",\n                  children: link.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 96,\n                  columnNumber: 19\n                }, _this)\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c3 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"SideBarWrapper\");\n$RefreshReg$(_c3, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD9lOGRmIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTaWRlQmFyV3JhcHBlciIsIlNpZGViYXIiLCJhbmltYXRlZFNpZGViYXIiLCJ0b2dnbGVTaWRlQmFyIiwidG9vZ2xlIiwiZXZlbnQiLCJzaWRlTGluayIsIm1hcCIsImxpbmsiLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQWI7S0FBTUYsTztBQWdCTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ2hCQUFwQjtNQUFNQyxjOztBQXFETixJQUFNQyxPQUE0QixHQUFHLFNBQS9CQSxPQUErQixPQUkvQjtBQUFBLE1BSEpDLGVBR0ksUUFISkEsZUFHSTtBQUFBLE1BRkpDLGFBRUksUUFGSkEsYUFFSTtBQUFBLE1BREpDLE1BQ0ksUUFESkEsTUFDSTtBQUNKLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsbURBQUQ7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUVBLE1BQU0sR0FBRyxNQUFILEdBQVk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxhQUFLLEVBQUVGLGVBQXJCO0FBQUEsK0JBQ0UscUVBQUMsY0FBRDtBQUFBLGtDQUNFO0FBQUssbUJBQU8sRUFBRSxpQkFBQ0csS0FBRDtBQUFBLHFCQUFXRixhQUFhLENBQUNFLEtBQUQsQ0FBeEI7QUFBQSxhQUFkO0FBQUEsbUNBQ0UscUVBQUMsK0NBQUQ7QUFBRyxtQkFBSyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFBLHNCQUNHQyxzREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLGtDQUNaO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLEVBQVI7QUFBQSw0QkFBWUEsSUFBSSxDQUFDQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURZO0FBQUEsYUFBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBdUJELENBNUJEOztNQUFNVCxPO0FBOEJTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2lkZWJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzaWRlTGluayB9IGZyb20gXCIuLi91dGlscy9jb25maWdcIjtcbmltcG9ydCB7IFggfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogbWluKDU1dncsIDQwMHB4KTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHdpZHRoOiBtaW4oNjB2dywgNDAwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBTaWRlQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LW5hdnkpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXI6IDA7XG4gIHdpZHRoOiBtaW4oNjV2dywgMzUwcHgpO1xuXG4gIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGxpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtc2xhdGUpO1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKHZhcigtLWZ6LXNtKSwgNHZ3LCB2YXIoLS1mei1sZykpO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wVHlwZXMge1xuICBhbmltYXRlZFNpZGViYXI6IGFueTtcbiAgdG9vZ2xlOiBib29sZWFuO1xuICB0b2dnbGVTaWRlQmFyOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlYmFyOiBSZWFjdC5GQzxQcm9wVHlwZXM+ID0gKHtcbiAgYW5pbWF0ZWRTaWRlYmFyLFxuICB0b2dnbGVTaWRlQmFyLFxuICB0b29nbGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDxib2R5IGNsYXNzTmFtZT17dG9vZ2xlID8gXCJibHVyXCIgOiBcIlwifSAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17YW5pbWF0ZWRTaWRlYmFyfT5cbiAgICAgICAgICA8U2lkZUJhcldyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9PlxuICAgICAgICAgICAgICA8WCBjb2xvcj1cIiNmZmZcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtzaWRlTGluay5tYXAoKGxpbms6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xpbmsuaWR9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1NpZGVCYXJXcmFwcGVyPlxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ })

})