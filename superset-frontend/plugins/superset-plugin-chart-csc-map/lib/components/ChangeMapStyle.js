"use strict";

exports.__esModule = true;
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _styles = require("../styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var ChangeMapStyle = _ref => {
  var {
    options,
    setStyleMap,
    defaultValue
  } = _ref;
  var [selectedOption, setSelectedOption] = (0, _react.useState)('');
  var handleChange = event => {
    setSelectedOption(event.target.value);
    setStyleMap(_utils.typeOfView[event.target.value]);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.SelectView, {
    id: "options",
    value: selectedOption,
    onChange: handleChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, defaultValue), options == null ? void 0 : options.map((option, key) => /*#__PURE__*/_react.default.createElement("option", {
    key: key,
    value: option == null ? void 0 : option.toString()
  }, option))));
};
ChangeMapStyle.propTypes = {
  options: _propTypes.default.any.isRequired,
  setStyleMap: _propTypes.default.any.isRequired,
  defaultValue: _propTypes.default.any.isRequired
};
var _default = exports.default = ChangeMapStyle;