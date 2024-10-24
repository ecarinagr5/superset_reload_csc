import _pt from "prop-types";
import React, { useMemo } from "react";
import { WrapNavBar, SideNavBar, HeaderNav } from "../styles/index";
import { SEVERITY } from "../utils/index";
var NavCounter = _ref => {
  var {
    alarms,
    type
  } = _ref;
  var alarmCounts = useMemo(() => {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'alarms' ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "80%"
    }
  }, /*#__PURE__*/React.createElement(HeaderNav, null, type == null ? void 0 : type.toUpperCase()), /*#__PURE__*/React.createElement(WrapNavBar, null, Object.keys(alarmCounts).map((key, index) => {
    var percentage = (Number(alarmCounts[key]) || 0) / totalAlarms * 100;
    return /*#__PURE__*/React.createElement(SideNavBar, {
      key: index,
      style: {
        width: percentage + "%",
        background: SEVERITY[key]
      }
    }, alarmCounts[key]);
  })), " ") : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "10%"
    }
  }, /*#__PURE__*/React.createElement(HeaderNav, null, type == null ? void 0 : type.toUpperCase()), /*#__PURE__*/React.createElement(WrapNavBar, {
    style: {
      background: "#a13a73"
    }
  }, /*#__PURE__*/React.createElement(SideNavBar, {
    key: "ipLinks"
  }, totalAlarms))));
};
NavCounter.propTypes = {
  alarms: _pt.arrayOf(_pt.any).isRequired,
  type: _pt.string.isRequired
};
export default NavCounter;