"use strict";

exports.__esModule = true;
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../styles/index");
var _index2 = require("../utils/index");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var NavCounter = _ref => {
  var {
    alarms,
    type
  } = _ref;
  var alarmCounts = (0, _react.useMemo)(() => {
    var counterAlarms = [];
    alarms == null || alarms.forEach(alarm => {
      counterAlarms.push(alarm[1]);
    });
    return counterAlarms == null ? void 0 : counterAlarms.reduce((acc, alarm) => {
      acc[alarm] = (acc[alarm] || 0) + 1;
      return acc;
    }, {});
  }, [alarms]);
  var totalAlarms = alarms == null ? void 0 : alarms.length;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type === 'alarms' ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "80%"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.HeaderNav, null, type == null ? void 0 : type.toUpperCase()), /*#__PURE__*/_react.default.createElement(_index.WrapNavBar, null, Object.keys(alarmCounts).map((key, index) => {
    var percentage = (Number(alarmCounts[key]) || 0) / totalAlarms * 100;
    return /*#__PURE__*/_react.default.createElement(_index.SideNavBar, {
      key: index,
      style: {
        width: percentage + "%",
        background: _index2.SEVERITY[key]
      }
    }, alarmCounts[key]);
  })), " ") : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "10%"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.HeaderNav, null, type == null ? void 0 : type.toUpperCase()), /*#__PURE__*/_react.default.createElement(_index.WrapNavBar, {
    style: {
      background: "#a13a73"
    }
  }, /*#__PURE__*/_react.default.createElement(_index.SideNavBar, {
    key: "ipLinks"
  }, totalAlarms))));
};
NavCounter.propTypes = {
  alarms: _propTypes.default.arrayOf(_propTypes.default.any).isRequired,
  type: _propTypes.default.string.isRequired
};
var _default = exports.default = NavCounter;