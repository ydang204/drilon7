webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n //*Components\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;#Menu{position:fixed;cursor:pointer;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(35px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 35px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    marginLeft: toggle ? 0 : -100\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"body\", {\n        className: toggle ? \"blur\" : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"Menu\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 145,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 153,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_6__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_6__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 168,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 167,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A. Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 171,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 172,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 170,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 175,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 174,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 181,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 180,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"Xv1HnMOfur0YFwP/B47l3SMo+0M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsImFuaW1hdGVkU2lkZWJhciIsInVzZVNwcmluZyIsInRyYW5zZm9ybSIsIm1hcmdpbkxlZnQiLCJzb2NpYWxNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHl0QkFBaEI7S0FBTUYsVTs7QUFvRU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBR3hCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJDLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDZCQUF2QjtBQUNELEdBTkQ7O0FBUUEsTUFBTUMsY0FBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkwsS0FEb0IsRUFFakI7QUFDSEEsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUksQ0FBQ0osTUFBTCxFQUFhO0FBQ1hDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxNQUFNUSxlQUFlLEdB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QUFBLG1DQUNFO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFPLEVBQUUsaUJBQUNHLEtBQUQ7QUFBQSx1QkFBV0QsYUFBYSxDQUFDQyxLQUFELENBQXhCO0FBQUEsZUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUEsa0JBREY7QUFvRkQsQ0FoSEQ7O0dBQU1MLFc7VUF1Qm9CWSxzRDs7O01BdkJwQlosVztBQWtIU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3ByaW5nIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcbi8vKkNvbXBvbmVudHNcbmltcG9ydCBTb2NpYWwgZnJvbSBcIi4vU29jaWFsXCI7XG5pbXBvcnQgeyBzb2NpYWxNZWRpYSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xuXG5jb25zdCBEaXZXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgI01lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuc29jaWFsTWVkaWEge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2N1cnZlZFN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAtMTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA2MHB4IDEwMHB4O1xuICAgIGNvbG9yOiAjZGJjZmNmO1xuICAgIGxpbmUtaGVpZ2h0OiA5O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gICAgICBtYXJnaW46IDBweCAwcHggMTVweCA0cHg7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDVweCwgNXZ3LCAyMHB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMzVweCwgNXZ3LCA4MHB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuXG4gICAgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMTBweCwgNXZ3LCAyMHB4KTtcbiAgICAgIG1heC13aWR0aDogNDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZWRpcmVjdEVtYWlsID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haWx0bzppYW5kcmlsb24yQGdtYWlsLmNvbVwiO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGVCYXIgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRvZ2dsZSkge1xuICAgICAgc2V0VG9nZ2xlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUb2dnbGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRvZ2dsZSA/IDAgOiAtMTAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8Ym9keSBjbGFzc05hbWU9e3RvZ2dsZSA/IFwiYmx1clwiIDogXCJcIn0gLz5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgYW5pbWF0ZWRTaWRlYmFyPXthbmltYXRlZFNpZGViYXJ9XG4gICAgICAgIHRvb2dsZT17dG9nZ2xlfVxuICAgICAgICB0b2dnbGVTaWRlQmFyPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxEaXZXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwiY3VydmVkU3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1NzlcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1NzVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OSA1NzVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTU3OSAwSDAuNjEzODMxQzE5LjE1MzUgNTcuMzA0MSA2MC4xMjM4IDEwMS41MDcgMTI5Ljk4NSAxMjAuMjA3QzI4My40ODYgMTYxLjI5NSAyODcuNTExIDI1OC4xNjUgMjkxLjQwOCAzNTEuOTMxQzI5Ni4xNzcgNDY2LjcgMzAwLjc1MiA1NzYuODIgNTc5IDU3NC4zMDlWMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMjkyRjRGXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJNZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDI5XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDcuMjQzOThDMi41IDYuNTc5NCAzLjA1NzUgNi4wNDE2OSAzLjc0Mzc1IDYuMDQxNjlIMTMuNzU2M0MxNC4wODYxIDYuMDQxNjkgMTQuNDAyNSA2LjE2ODM2IDE0LjYzNTcgNi4zOTM4M0MxNC44NjkgNi42MTkzIDE1IDYuOTI1MTEgMTUgNy4yNDM5OEMxNSA3LjU2Mjg1IDE0Ljg2OSA3Ljg2ODY1IDE0LjYzNTcgOC4wOTQxM0MxNC40MDI1IDguMzE5NiAxNC4wODYxIDguNDQ2MjcgMTMuNzU2MyA4LjQ0NjI3SDMuNzQzNzVDMy40MTM4OSA4LjQ0NjI3IDMuMDk3NTMgOC4zMTk2IDIuODY0MjkgOC4wOTQxM0MyLjYzMTA0IDcuODY4NjUgMi41IDcuNTYyODUgMi41IDcuMjQzOThaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDE0LjVDMi41IDEzLjgzNTQgMy4wNTc1IDEzLjI5NzcgMy43NDM3NSAxMy4yOTc3SDI2LjI1NjNDMjYuNTg2MSAxMy4yOTc3IDI2LjkwMjUgMTMuNDI0NCAyNy4xMzU3IDEzLjY0OTlDMjcuMzY5IDEzLjg3NTMgMjcuNSAxNC4xODEyIDI3LjUgMTQuNUMyNy41IDE0LjgxODkgMjcuMzY5IDE1LjEyNDcgMjcuMTM1NyAxNS4zNTAyQzI2LjkwMjUgMTUuNTc1NiAyNi41ODYxIDE1LjcwMjMgMjYuMjU2MyAxNS43MDIzSDMuNzQzNzVDMy40MTM4OSAxNS43MDIzIDMuMDk3NTMgMTUuNTc1NiAyLjg2NDI5IDE1LjM1MDJDMi42MzEwNCAxNS4xMjQ3IDIuNSAxNC44MTg5IDIuNSAxNC41WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTMuNzQzNzUgMjAuNTUzOEMzLjQxMzg5IDIwLjU1MzggMy4wOTc1MyAyMC42ODA0IDIuODY0MjkgMjAuOTA1OUMyLjYzMTA0IDIxLjEzMTQgMi41IDIxLjQzNzIgMi41IDIxLjc1NjFDMi41IDIyLjA3NDkgMi42MzEwNCAyMi4zODA3IDIuODY0MjkgMjIuNjA2MkMzLjA5NzUzIDIyLjgzMTcgMy40MTM4OSAyMi45NTg0IDMuNzQzNzUgMjIuOTU4NEgxOC43NTYzQzE5LjA4NjEgMjIuOTU4NCAxOS40MDI1IDIyLjgzMTcgMTkuNjM1NyAyMi42MDYyQzE5Ljg2OSAyMi4zODA3IDIwIDIyLjA3NDkgMjAgMjEuNzU2MUMyMCAyMS40MzcyIDE5Ljg2OSAyMS4xMzE0IDE5LjYzNTcgMjAuOTA1OUMxOS40MDI1IDIwLjY4MDQgMTkuMDg2MSAyMC41NTM4IDE4Ljc1NjMgMjAuNTUzOEgzLjc0Mzc1WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhXCI+XG4gICAgICAgICAgICAgICAge3NvY2lhbE1lZGlhICYmIChcbiAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfSB0b2dnbGU9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+SGksIG15IG5hbWUgaXM8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+SWFuIEEuIERyaWxvbi48L2gyPlxuICAgICAgICAgICAgICA8aDI+SSBidWlsZCB0aGluZ3MgZm9yIHdlYi48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSxcbiAgICAgICAgICAgICAgICB0YWtpbmcgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIENvbXB1dGVyIFNjaWVuY2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2ZW50KSA9PiByZWRpcmVjdEVtYWlsKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0RpdldyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})