"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaggerTextReveal = exports.StaggerTextChange = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

var _excluded = ["text", "triggerAfter"],
    _excluded2 = ["text", "triggerAfter", "changeTo"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StaggerTextReveal = function StaggerTextReveal(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? "<text placeholder>" : _ref$text,
      _ref$triggerAfter = _ref.triggerAfter,
      triggerAfter = _ref$triggerAfter === void 0 ? 0 : _ref$triggerAfter,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setAnimate = _useState2[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setAnimate(true);
    }, triggerAfter);
  });

  if (typeof text !== 'string' || text.length === 0) {
    throw new Error('Wrong text property');
  }

  var letters = [];

  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      letters.push("&nbsp;");
    } else {
      letters.push([text[i]]);
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "stagger-animation-text",
    style: {
      height: "".concat(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * letters.length : props.fontSize * letters.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
      width: "".concat(props.width == 0 || props.width == null ? "" : props.width).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      overflow: "hidden"
    }
  }, letters.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        transform: props.reverse == null || props.reverse == "" || props.reverse == false || props.reverse !== true ? animate ? "translateY(0".concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")") : "translateY(".concat(props.direction == null || props.direction == "" || props.direction !== "down" ? props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize : props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")") : animate ? "translateY(".concat(props.direction == null || props.direction == "" || props.direction !== "down" ? props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize : props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")") : "translateY(0".concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")"),
        transitionDelay: "".concat((props.duration == null || props.duration == 0 ? 0.7 : props.duration) / (props.stagger == null || props.stagger == 0 ? 60 : props.stagger) * i, "s"),
        transitionDuration: "".concat(props.duration == null || props.duration == 0 ? 0.7 : props.duration, "s"),
        transitionTimingFunction: "ease-in-out",
        transitionProperty: "transform",
        color: "".concat(props.color == "" || props.color == null ? "#282828" : props.color),
        fontSize: "".concat(props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
        fontWeight: "".concat(props.color == "" || props.fontWeight == null ? "bold" : props.fontWeight),
        fontFamily: "".concat(props.fontFamily == "" || props.fontFamily == null ? "" : props.fontFamily)
      },
      className: "stagger-animation-character"
    }, item == "&nbsp;" ? /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        fontSize: "".concat(props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
      }
    }, "\xA0") : item);
  }));
};

exports.StaggerTextReveal = StaggerTextReveal;

var StaggerTextChange = function StaggerTextChange(_ref2) {
  var _ref2$text = _ref2.text,
      text = _ref2$text === void 0 ? "<TEXT PLACEHOLDER>" : _ref2$text,
      _ref2$triggerAfter = _ref2.triggerAfter,
      triggerAfter = _ref2$triggerAfter === void 0 ? 0 : _ref2$triggerAfter,
      _ref2$changeTo = _ref2.changeTo,
      changeTo = _ref2$changeTo === void 0 ? "<CHANGED TEXT>" : _ref2$changeTo,
      props = _objectWithoutProperties(_ref2, _excluded2);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      animate = _useState4[0],
      setAnimate = _useState4[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setAnimate(true);
    }, triggerAfter);
  });

  if (typeof text !== 'string' || text.length === 0) {
    throw new Error('Wrong text property');
  }

  if (typeof changeTo !== 'string' || text.length === 0) {
    throw new Error('Wrong text property');
  }

  var letters = [];

  for (var i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      letters.push("&nbsp;");
    } else {
      letters.push([text[i]]);
    }
  }

  var changeToLetters = [];

  for (var _i2 = 0; _i2 < changeTo.length; _i2++) {
    if (changeTo[_i2] === " ") {
      changeToLetters.push("&nbsp;");
    } else {
      changeToLetters.push([changeTo[_i2]]);
    }
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: "".concat(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * letters.length : props.fontSize * letters.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
      width: "".concat(props.width == 0 || props.width == null ? "" : props.width).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "stagger-change-top",
    style: {
      height: "".concat(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * letters.length : props.fontSize * letters.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
      width: "".concat(props.width == 0 || props.width == null ? "" : props.width).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
    }
  }, letters.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        transform: animate ? "translateY(".concat(props.direction == null || props.direction == "" || props.direction !== "down" ? props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize : props.fontSize == null || props.fontSize == 0 ? 48 : props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")") : "translateY(0".concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")"),
        transitionDelay: "".concat((props.duration == null || props.duration == 0 ? 0.7 : props.duration) / (props.stagger == null || props.stagger == 0 ? 60 : props.stagger) * i, "s"),
        transitionDuration: "".concat(props.duration == null || props.duration == 0 ? 0.7 : props.duration, "s"),
        transitionTimingFunction: "ease-in-out",
        transitionProperty: "transform",
        color: "".concat(props.color == "" || props.color == null ? "#282828" : props.color),
        fontSize: "".concat(props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
        fontWeight: "".concat(props.color == "" || props.fontWeight == null ? "bold" : props.fontWeight),
        fontFamily: "".concat(props.fontFamily == "" || props.fontFamily == null ? "" : props.fontFamily)
      },
      className: "stagger-animation-character"
    }, item == "&nbsp;" ? /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        fontSize: "".concat(props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
      }
    }, "\xA0") : item);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "stagger-change-bottom",
    style: {
      height: "".concat(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * letters.length : props.fontSize * letters.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
      width: "".concat(props.width == 0 || props.width == null ? "" : props.width).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
    }
  }, changeToLetters.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        transform: animate ? "translateY(".concat(props.direction == null || props.direction == "" || props.direction !== "down" ? props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize : props.fontSize == null || props.fontSize == 0 ? -48 : -props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")") : "translateY(".concat(props.direction == null || props.direction == "" || props.direction !== "down" ? 0 : props.fontSize == null || props.fontSize == 0 ? -48 * 2 : -props.fontSize * 2).concat(props.unit == null || props.unit == "" ? "px" : props.unit, ")"),
        transitionDelay: "".concat((props.duration == null || props.duration == 0 ? 0.7 : props.duration) / (props.stagger == null || props.stagger == 0 ? 60 : props.stagger) * i, "s"),
        transitionDuration: "".concat(props.duration == null || props.duration == 0 ? 0.7 : props.duration, "s"),
        transitionTimingFunction: "ease-in-out",
        transitionProperty: "transform",
        color: "".concat(props.color == "" || props.color == null ? "#282828" : props.color),
        fontSize: "".concat(props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
        fontWeight: "".concat(props.color == "" || props.fontWeight == null ? "bold" : props.fontWeight),
        fontFamily: "".concat(props.fontFamily == "" || props.fontFamily == null ? "" : props.fontFamily)
      },
      className: "stagger-animation-character"
    }, item == "&nbsp;" ? /*#__PURE__*/_react["default"].createElement("span", {
      key: i,
      style: {
        fontSize: "".concat(props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
      }
    }, "\xA0") : item);
  })));
};

exports.StaggerTextChange = StaggerTextChange;