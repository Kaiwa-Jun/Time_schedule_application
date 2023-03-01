"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[userId]/timecard";
exports.ids = ["pages/[userId]/timecard"];
exports.modules = {

/***/ "./pages/[userId]/timecard.tsx":
/*!*************************************!*\
  !*** ./pages/[userId]/timecard.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TimeCard = ()=>{\n    const [showStartButton, setShowStartButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [showEndButton, setShowEndButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleStartClick = ()=>{\n        setShowStartButton(false);\n        setShowEndButton(false);\n        setMessage(\"学習を開始しました！頑張りましょう！\");\n        setTimeout(()=>{\n            setMessage(\"\");\n            setShowStartButton(true);\n            setShowEndButton(true);\n        }, 3000);\n    };\n    const handleEndClick = ()=>{\n        setShowStartButton(false);\n        setShowEndButton(false);\n        setMessage(\"学習を終了しました！次回も頑張りましょう！\");\n        setTimeout(()=>{\n            setMessage(\"\");\n            setShowStartButton(true);\n            setShowEndButton(true);\n        }, 3000);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.title = \"打刻画面\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"打刻画面\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"打刻画面\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            showStartButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleStartClick,\n                children: \"開始\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                lineNumber: 41,\n                columnNumber: 27\n            }, undefined),\n            showEndButton && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleEndClick,\n                children: \"終了\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                lineNumber: 42,\n                columnNumber: 25\n            }, undefined),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/usr/src/app/app/pages/[userId]/timecard.tsx\",\n                lineNumber: 43,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeCard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bdXNlcklkXS90aW1lY2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFFN0IsTUFBTUksV0FBVyxJQUFNO0lBQ3JCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0osK0NBQVFBLENBQUMsSUFBSTtJQUMzRCxNQUFNLENBQUNLLGVBQWVDLGlCQUFpQixHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3ZELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxtQkFBbUIsSUFBTTtRQUM3QkwsbUJBQW1CLEtBQUs7UUFDeEJFLGlCQUFpQixLQUFLO1FBQ3RCRSxXQUFXO1FBQ1hFLFdBQVcsSUFBTTtZQUNmRixXQUFXO1lBQ1hKLG1CQUFtQixJQUFJO1lBQ3ZCRSxpQkFBaUIsSUFBSTtRQUN2QixHQUFHO0lBQ0w7SUFFQSxNQUFNSyxpQkFBaUIsSUFBTTtRQUMzQlAsbUJBQW1CLEtBQUs7UUFDeEJFLGlCQUFpQixLQUFLO1FBQ3RCRSxXQUFXO1FBQ1hFLFdBQVcsSUFBTTtZQUNmRixXQUFXO1lBQ1hKLG1CQUFtQixJQUFJO1lBQ3ZCRSxpQkFBaUIsSUFBSTtRQUN2QixHQUFHO0lBQ0w7SUFFQVAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYSxTQUFTQyxLQUFLLEdBQUc7SUFDbkIsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDWixrREFBSUE7MEJBQ0gsNEVBQUNZOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIWCxpQ0FBbUIsOERBQUNZO2dCQUFPQyxTQUFTUDswQkFBa0I7Ozs7OztZQUN0REosK0JBQWlCLDhEQUFDVTtnQkFBT0MsU0FBU0w7MEJBQWdCOzs7Ozs7WUFDbERKLHlCQUFXLDhEQUFDVTswQkFBR1Y7Ozs7Ozs7O0FBR3RCO0FBRUEsaUVBQWVMLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9bdXNlcklkXS90aW1lY2FyZC50c3g/NmYyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBUaW1lQ2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dTdGFydEJ1dHRvbiwgc2V0U2hvd1N0YXJ0QnV0dG9uXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2hvd0VuZEJ1dHRvbiwgc2V0U2hvd0VuZEJ1dHRvbl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3RhcnRDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93U3RhcnRCdXR0b24oZmFsc2UpO1xuICAgIHNldFNob3dFbmRCdXR0b24oZmFsc2UpO1xuICAgIHNldE1lc3NhZ2UoXCLlrabnv5LjgpLplovlp4vjgZfjgb7jgZfjgZ/vvIHpoJHlvLXjgorjgb7jgZfjgofjgYbvvIFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgICAgc2V0U2hvd1N0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgc2V0U2hvd0VuZEJ1dHRvbih0cnVlKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbmRDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93U3RhcnRCdXR0b24oZmFsc2UpO1xuICAgIHNldFNob3dFbmRCdXR0b24oZmFsc2UpO1xuICAgIHNldE1lc3NhZ2UoXCLlrabnv5LjgpLntYLkuobjgZfjgb7jgZfjgZ/vvIHmrKHlm57jgoLpoJHlvLXjgorjgb7jgZfjgofjgYbvvIFcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICAgICAgc2V0U2hvd1N0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgc2V0U2hvd0VuZEJ1dHRvbih0cnVlKTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LnRpdGxlID0gXCLmiZPliLvnlLvpnaJcIjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+5omT5Yi755S76Z2iPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT7miZPliLvnlLvpnaI8L2gxPlxuICAgICAge3Nob3dTdGFydEJ1dHRvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0YXJ0Q2xpY2t9PumWi+WnizwvYnV0dG9uPn1cbiAgICAgIHtzaG93RW5kQnV0dG9uICYmIDxidXR0b24gb25DbGljaz17aGFuZGxlRW5kQ2xpY2t9Pue1guS6hjwvYnV0dG9uPn1cbiAgICAgIHttZXNzYWdlICYmIDxwPnttZXNzYWdlfTwvcD59XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIlRpbWVDYXJkIiwic2hvd1N0YXJ0QnV0dG9uIiwic2V0U2hvd1N0YXJ0QnV0dG9uIiwic2hvd0VuZEJ1dHRvbiIsInNldFNob3dFbmRCdXR0b24iLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZVN0YXJ0Q2xpY2siLCJzZXRUaW1lb3V0IiwiaGFuZGxlRW5kQ2xpY2siLCJkb2N1bWVudCIsInRpdGxlIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[userId]/timecard.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[userId]/timecard.tsx"));
module.exports = __webpack_exports__;

})();