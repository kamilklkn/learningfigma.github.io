webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SellingPoint.js":
/*!************************************!*\
  !*** ./components/SellingPoint.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ \"./components/Tile/index.js\");\n/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass/styled-components */ \"./node_modules/rebass/styled-components/index.js\");\n/* harmony import */ var rebass_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rebass_styled_components__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/philipdavis/Documents/learningfigma/learningfigma.github.io/components/SellingPoint.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar SellingPoint = function SellingPoint(props) {\n  return __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n    mb: [3, 4],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(rebass_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(Numeral, {\n    color: props.color,\n    size: 34,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, props.number)), __jsx(StyledHeading, {\n    fontSize: [2, 3],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, props.label));\n};\n\n_c = SellingPoint;\nvar Numeral = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"SellingPoint__Numeral\",\n  componentId: \"r3f57u-0\"\n})([\"width:34px;height:34px;border-radius:100px;background-color:\", \";display:inline-block;font-weight:bold;color:\", \";text-align:center;padding-top:3px;flex-grow:0;@media (max-width:500px){width:24px;height:24px;font-size:16px;padding-top:2px;line-height:1;}\"], function (props) {\n  return props.color;\n}, _Tile__WEBPACK_IMPORTED_MODULE_2__[\"color\"].black);\n_c2 = Numeral;\nvar StyledHeading = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rebass_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"Text\"]).withConfig({\n  displayName: \"SellingPoint__StyledHeading\",\n  componentId: \"r3f57u-1\"\n})([\"position:relative;top:0px;left:20px;display:inline-block;color:white;@media (max-width:500px){left:10px;}\"]);\n_c3 = StyledHeading;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SellingPoint);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SellingPoint\");\n$RefreshReg$(_c2, \"Numeral\");\n$RefreshReg$(_c3, \"StyledHeading\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlbGxpbmdQb2ludC5qcz9jZjNkIl0sIm5hbWVzIjpbIlNlbGxpbmdQb2ludCIsInByb3BzIiwiY29sb3IiLCJudW1iZXIiLCJsYWJlbCIsIk51bWVyYWwiLCJzdHlsZWQiLCJkaXYiLCJibGFjayIsIlN0eWxlZEhlYWRpbmciLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxLQUFWLEVBQWlCO0FBQ3BDLFNBQ0UsTUFBQyw2REFBRDtBQUFNLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFNBQUssRUFBRUEsS0FBSyxDQUFDQyxLQUF0QjtBQUE2QixRQUFJLEVBQUUsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLE1BRFQsQ0FERixDQURGLEVBTUUsTUFBQyxhQUFEO0FBQWUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0YsS0FBSyxDQUFDRyxLQUF4QyxDQU5GLENBREY7QUFVRCxDQVhEOztLQUFNSixZO0FBYU4sSUFBTUssT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVRQUlTLFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQWpCO0FBQUEsQ0FKVCxFQU9GQSwyQ0FBSyxDQUFDTSxLQVBKLENBQWI7TUFBTUgsTztBQXFCTixJQUFNSSxhQUFhLEdBQUdILGlFQUFNLENBQUNJLDZEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUhBQW5CO01BQU1ELGE7QUFZU1QsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGxpbmdQb2ludC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjb2xvciB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IEZsZXgsIEJveCwgVGV4dCB9IGZyb20gXCJyZWJhc3Mvc3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU2VsbGluZ1BvaW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZsZXggbWI9e1szLCA0XX0+XG4gICAgICA8Qm94PlxuICAgICAgICA8TnVtZXJhbCBjb2xvcj17cHJvcHMuY29sb3J9IHNpemU9ezM0fT5cbiAgICAgICAgICB7cHJvcHMubnVtYmVyfVxuICAgICAgICA8L051bWVyYWw+XG4gICAgICA8L0JveD5cbiAgICAgIDxTdHlsZWRIZWFkaW5nIGZvbnRTaXplPXtbMiwgM119Pntwcm9wcy5sYWJlbH08L1N0eWxlZEhlYWRpbmc+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuY29uc3QgTnVtZXJhbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJHtjb2xvci5ibGFja307XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZmxleC1ncm93OiAwO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSGVhZGluZyA9IHN0eWxlZChUZXh0KWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMjBweDtcblxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2VsbGluZ1BvaW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SellingPoint.js\n");

/***/ })

})