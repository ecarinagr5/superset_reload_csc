import _pt from "prop-types";
import React, { useState } from 'react';
import { typeOfView } from '../utils';
import { SelectView } from '../styles';
var ChangeMapStyle = _ref => {
  var {
    options,
    setStyleMap,
    defaultValue
  } = _ref;
  var [selectedOption, setSelectedOption] = useState('');
  var handleChange = event => {
    setSelectedOption(event.target.value);
    setStyleMap(typeOfView[event.target.value]);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SelectView, {
    id: "options",
    value: selectedOption,
    onChange: handleChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, defaultValue), options == null ? void 0 : options.map((option, key) => /*#__PURE__*/React.createElement("option", {
    key: key,
    value: option == null ? void 0 : option.toString()
  }, option))));
};
ChangeMapStyle.propTypes = {
  options: _pt.any.isRequired,
  setStyleMap: _pt.any.isRequired,
  defaultValue: _pt.any.isRequired
};
export default ChangeMapStyle;