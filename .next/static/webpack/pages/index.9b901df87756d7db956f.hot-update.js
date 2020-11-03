webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/config */ \"./utils/config.tsx\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/Sidebar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__Wrapper\",\n  componentId: \"sc-1abzn0a-0\"\n})([\"position:fixed;top:0;bottom:0;left:0;z-index:1;@media (max-width:768px){width:min(55vw,400px);}@media (max-width:480px){width:min(60vw,400px);}\"]);\n_c = Wrapper;\nvar SideBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__SideBarWrapper\",\n  componentId: \"sc-1abzn0a-1\"\n})([\"list-style:none;background-color:var(--light-navy);height:100vh;border:0;width:min(65vw,350px);div{text-align:right;padding:30px 30px;cursor:pointer;}ul{padding:0;margin:0;width:100%;text-align:center;li{position:relative;a{color:var(--lightest-navy);text-decoration:none;margin:0 auto 60px;font-size:clamp(var(--fz-sm),4vw,var(--fz-lg));font-size:30px;}}}\"]);\n_c2 = SideBarWrapper;\n\nvar Sidebar = function Sidebar(_ref) {\n  var animatedSidebar = _ref.animatedSidebar,\n      toggleSideBar = _ref.toggleSideBar,\n      toogle = _ref.toogle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_helmet__WEBPACK_IMPORTED_MODULE_6__[\"Helmet\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n        className: toogle ? \"blur\" : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Wrapper, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n        style: animatedSidebar,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SideBarWrapper, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_5__[\"X\"], {\n              color: \"#fff\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n            children: _utils_config__WEBPACK_IMPORTED_MODULE_4__[\"sideLink\"].map(function (link) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"\",\n                  children: link.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 81,\n                  columnNumber: 19\n                }, _this)\n              }, link.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_c3 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"SideBarWrapper\");\n$RefreshReg$(_c3, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD9lOGRmIl0sIm5hbWVzIjpbIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTaWRlQmFyV3JhcHBlciIsIlNpZGViYXIiLCJhbmltYXRlZFNpZGViYXIiLCJ0b2dnbGVTaWRlQmFyIiwidG9vZ2xlIiwiZXZlbnQiLCJzaWRlTGluayIsIm1hcCIsImxpbmsiLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUpBQWI7S0FBTUYsTztBQWdCTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFdBQXBCO01BQU1DLGM7O0FBc0NOLElBQU1DLE9BQTRCLEdBQUcsU0FBL0JBLE9BQStCLE9BSS9CO0FBQUEsTUFISkMsZUFHSSxRQUhKQSxlQUdJO0FBQUEsTUFGSkMsYUFFSSxRQUZKQSxhQUVJO0FBQUEsTUFESkMsTUFDSSxRQURKQSxNQUNJO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxtREFBRDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBRUEsTUFBTSxHQUFHLE1BQUgsR0FBWTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsT0FBRDtBQUFBLDZCQUNFLHFFQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLGFBQUssRUFBRUYsZUFBckI7QUFBQSwrQkFDRSxxRUFBQyxjQUFEO0FBQUEsa0NBQ0U7QUFBSyxtQkFBTyxFQUFFLGlCQUFDRyxLQUFEO0FBQUEscUJBQVdGLGFBQWEsQ0FBQ0UsS0FBRCxDQUF4QjtBQUFBLGFBQWQ7QUFBQSxtQ0FDRSxxRUFBQywrQ0FBRDtBQUFHLG1CQUFLLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUEsc0JBQ0dDLHNEQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxJQUFEO0FBQUEsa0NBQ1o7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsRUFBUjtBQUFBLDRCQUFZQSxJQUFJLENBQUNDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0QsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFk7QUFBQSxhQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUF1QkQsQ0E1QkQ7O01BQU1ULE87QUE4QlNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNpZGVMaW5rIH0gZnJvbSBcIi4uL3V0aWxzL2NvbmZpZ1wiO1xuaW1wb3J0IHsgWCB9IGZyb20gXCJyZWFjdC1mZWF0aGVyXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiBtaW4oNTV2dywgNDAwcHgpO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgd2lkdGg6IG1pbig2MHZ3LCA0MDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IFNpZGVCYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbmF2eSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IG1pbig2NXZ3LCAzNTBweCk7XG5cbiAgZGl2IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGxpIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtbmF2eSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCh2YXIoLS1mei1zbSksIDR2dywgdmFyKC0tZnotbGcpKTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIFByb3BUeXBlcyB7XG4gIGFuaW1hdGVkU2lkZWJhcjogYW55O1xuICB0b29nbGU6IGJvb2xlYW47XG4gIHRvZ2dsZVNpZGVCYXI6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFByb3BUeXBlcz4gPSAoe1xuICBhbmltYXRlZFNpZGViYXIsXG4gIHRvZ2dsZVNpZGVCYXIsXG4gIHRvb2dsZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPGJvZHkgY2xhc3NOYW1lPXt0b29nbGUgPyBcImJsdXJcIiA6IFwiXCJ9IC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXthbmltYXRlZFNpZGViYXJ9PlxuICAgICAgICAgIDxTaWRlQmFyV3JhcHBlcj5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgICAgIDxYIGNvbG9yPVwiI2ZmZlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge3NpZGVMaW5rLm1hcCgobGluazogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bGluay5pZH0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvU2lkZUJhcldyYXBwZXI+XG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ })

})