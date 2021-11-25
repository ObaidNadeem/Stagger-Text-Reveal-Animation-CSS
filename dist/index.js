"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StaggerText = function StaggerText(props) {
  var text = props.text == null || props.text == "" ? "STAGGER TEXT" : props.text;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setanimate = _useState2[1];

  var array = [];

  for (var i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      array.push("&nbsp;");
    } else {
      array.push([text[i]]);
    }
  }

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      setanimate(true);
    }, props.triggerAfter == 0 || props.triggerAfter == null ? 0 : props.triggerAfter * 1000);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "stagger-animation-text",
    style: {
      height: "".concat(props.height == 0 || props.height == null ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.height).concat(props.unit == null || props.unit == "" ? "px" : props.unit),
      // width: `${props.width == 0 || props.width == null ? props.fontSize == 0 || props.fontSize == null ? 48 * array.length : props.fontSize * array.length : props.width}${props.unit == null || props.unit == "" ? "px" : props.unit}`
      width: "".concat(props.width == 0 || props.width == null ? "" : props.width).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
    }
  }, array.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("h1", {
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
    }, item == "&nbsp;" ? /*#__PURE__*/_react["default"].createElement("p", {
      key: i,
      style: {
        fontSize: "".concat(props.wordSpacing == null || props.wordSpacing == 0 ? props.fontSize == 0 || props.fontSize == null ? 48 : props.fontSize : props.wordSpacing).concat(props.unit == null || props.unit == "" ? "px" : props.unit)
      }
    }, "\xA0") : item);
  }));
};

var _default = StaggerText;
exports["default"] = _default;