"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

var _excluded = ["text", "triggerAfter", "height", "fontSize", "unit", "width", "reverse", "direction", "duration", "stagger", "wordSpacing", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StaggerTextLetter = function StaggerTextLetter(_ref) {
  var letter = _ref.letter,
      index = _ref.index,
      reverse = _ref.reverse,
      animate = _ref.animate,
      unit = _ref.unit,
      direction = _ref.direction,
      fontSize = _ref.fontSize,
      wordSpacing = _ref.wordSpacing,
      stagger = _ref.stagger,
      duration = _ref.duration;
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      transform: reverse == null || reverse == "" || reverse == false || reverse !== true ? animate ? "translateY(0".concat(unit == null || unit == "" ? "px" : unit, ")") : "translateY(".concat(direction == null || direction == "" || direction !== "down" ? fontSize == null || fontSize == 0 ? 48 : fontSize : fontSize == null || fontSize == 0 ? -48 : -fontSize).concat(unit == null || unit == "" ? "px" : unit, ")") : animate ? "translateY(".concat(direction == null || direction == "" || direction !== "down" ? fontSize == null || fontSize == 0 ? -48 : -fontSize : fontSize == null || fontSize == 0 ? 48 : fontSize).concat(unit == null || unit == "" ? "px" : unit, ")") : "translateY(0".concat(unit == null || unit == "" ? "px" : unit, ")"),
      transitionDelay: "".concat((duration == null || duration == 0 ? 0.7 : duration) / (stagger == null || stagger == 0 ? 60 : stagger) * index, "s"),
      transitionDuration: "".concat(duration == null || duration == 0 ? 0.7 : duration, "s"),
      transitionTimingFunction: "ease-in-out",
      transitionProperty: "transform",
      fontSize: "".concat(fontSize == 0 || fontSize == null ? 48 : fontSize).concat(unit == null || unit == "" ? "px" : unit)
    },
    className: "stagger-animation-character"
  }, letter === " " ? /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      fontSize: "".concat(wordSpacing == null || wordSpacing == 0 ? fontSize == 0 || fontSize == null ? 48 : fontSize : wordSpacing).concat(unit == null || unit == "" ? "px" : unit)
    }
  }, "\xA0") : letter);
};

var StaggerTextReveal = function StaggerTextReveal(_ref2) {
  var _ref2$text = _ref2.text,
      text = _ref2$text === void 0 ? "<text placeholder>" : _ref2$text,
      _ref2$triggerAfter = _ref2.triggerAfter,
      triggerAfter = _ref2$triggerAfter === void 0 ? 0 : _ref2$triggerAfter,
      height = _ref2.height,
      fontSize = _ref2.fontSize,
      unit = _ref2.unit,
      width = _ref2.width,
      reverse = _ref2.reverse,
      direction = _ref2.direction,
      duration = _ref2.duration,
      stagger = _ref2.stagger,
      wordSpacing = _ref2.wordSpacing,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, _excluded);

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

  var lettersComponents = [];

  for (var i = 0; i < text.length; i++) {
    lettersComponents.push( /*#__PURE__*/_react["default"].createElement(StaggerTextLetter, {
      key: i,
      letter: text[i],
      index: i,
      reverse: reverse,
      animate: animate,
      unit: unit,
      direction: direction,
      fontSize: fontSize,
      wordSpacing: wordSpacing,
      stagger: stagger,
      duration: duration
    }));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    //className="stagger-animation-text"
    style: _objectSpread(_objectSpread({}, style), {}, {
      overflow: 'hidden',
      height: "".concat(height == 0 || height == null ? fontSize == 0 || fontSize == null ? 48 : fontSize : height).concat(unit == null || unit == "" ? "px" : unit),
      width: "".concat(width == 0 || width == null ? "" : width).concat(unit == null || unit == "" ? "px" : unit),
      display: 'flex'
    })
  }, lettersComponents);
};

var _default = StaggerTextReveal;
exports["default"] = _default;