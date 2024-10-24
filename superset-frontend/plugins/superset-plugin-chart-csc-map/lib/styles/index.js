"use strict";

exports.__esModule = true;
exports.WrapNavBar = exports.SideNavBar = exports.SelectView = exports.HeaderNav = exports.Container = void 0;
var _core = require("@superset-ui/core");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
var Container = exports.Container = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: absolute; \n  top:10px;\n  z-index: 1;  \n  height: 400px;\n  width: 100%;\n"])));
var SideNavBar = exports.SideNavBar = _core.styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  color: #fff;\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 2px;\n  padding: 2px;\n"])));
var WrapNavBar = exports.WrapNavBar = _core.styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  position:relative;\n  border-radius: 2px;\n  border: 1px solid #bcbcbc;\n  padding:2px;\n"])));
var SelectView = exports.SelectView = _core.styled.select(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  justify-content: center;\n  align-items: center;\n  position:relative;\n  border-radius: 2px;\n  border: 1px solid #bcbcbc;\n  padding: 5px 2px;\n  font-size: 10px;\n  margin-top: 16px;\n"])));
var HeaderNav = exports.HeaderNav = _core.styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  font-size: 10px;\n"])));