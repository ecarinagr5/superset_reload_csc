"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactMapGl = _interopRequireWildcard(require("react-map-gl"));
require("mapbox-gl/dist/mapbox-gl.css");
var _utils = require("./utils");
var _NavCounter = _interopRequireDefault(require("./components/NavCounter"));
var _styles = require("./styles");
var _ChangeMapStyle = _interopRequireDefault(require("./components/ChangeMapStyle"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } /* eslint-disable import/no-extraneous-dependencies */ /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */ // eslint-disable-next-line no-restricted-syntax
var SupersetPluginChartCscMap = props => {
  var {
    data_iplinks,
    data
  } = props;
  var [viewport, setViewport] = (0, _react.useState)({
    latitude: 17.000,
    longitude: -102.552784,
    zoom: 3.2,
    width: '100%',
    height: '500px'
  });
  var [alarms, setAlarms] = (0, _react.useState)([]);
  var [ipLinks, setIpLinks] = (0, _react.useState)([]);
  var [styleMap, setStyleMap] = (0, _react.useState)(_utils.typeOfView[_utils.mapStyle[7]]);
  (0, _react.useEffect)(() => {
    var _data$data;
    setAlarms(data == null || (_data$data = data.data) == null ? void 0 : _data$data.content);
    setIpLinks(data_iplinks);
  }, [data]);

  // Create a unique set of markers from the data
  var uniqueMarkers = {};
  ipLinks == null || ipLinks.forEach(link => {
    uniqueMarkers[link.SideA_Lon + "," + link.SideA_Lat] = {
      latitude: link.SideA_Lat,
      longitude: link.SideA_Lon
    };
    uniqueMarkers[link.SideB_Lon + "," + link.SideB_Lat] = {
      latitude: link.SideB_Lat,
      longitude: link.SideB_Lon
    };
  });

  // Transform the data into GeoJSON format for lines
  var lineFeatures = data_iplinks == null ? void 0 : data_iplinks.map(link => ({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [[link.SideA_Lon, link.SideA_Lat],
      // [longitude, latitude]
      [link.SideB_Lon, link.SideB_Lat]]
    },
    properties: {
      name: link.LinkName
    }
  }));
  var geojsonData = {
    type: 'FeatureCollection',
    features: lineFeatures
  };

  // Define layer style for the lines
  var lineLayerStyle = {
    id: 'line-layer',
    type: 'line',
    paint: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      'line-color': "#a13a73",
      'line-width': 1
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "cscmap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_ChangeMapStyle.default, {
    options: _utils.mapStyle,
    setStyleMap: setStyleMap,
    defaultValue: _utils.mapStyle[5]
  }), /*#__PURE__*/_react.default.createElement(_NavCounter.default, {
    alarms: alarms,
    type: "alarms"
  }), /*#__PURE__*/_react.default.createElement(_NavCounter.default, {
    alarms: ipLinks,
    type: "iplinks"
  })), /*#__PURE__*/_react.default.createElement(_reactMapGl.default, _extends({}, viewport, {
    mapboxApiAccessToken: _utils.TOKEN,
    mapStyle: styleMap,
    onViewportChange: newViewport => setViewport(newViewport)
  }), Object.values(uniqueMarkers).map((marker, index) => /*#__PURE__*/_react.default.createElement(_reactMapGl.Marker, {
    key: "marker-" + index,
    latitude: marker.latitude,
    longitude: marker.longitude
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      background: "#45bed6",
      height: '6px',
      width: '6px',
      borderRadius: '50%'
    }
  }))), alarms == null ? void 0 : alarms.map((marker, index) => /*#__PURE__*/_react.default.createElement(_reactMapGl.Marker, {
    key: "marker-" + index,
    latitude: marker[4],
    longitude: marker[5]
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      background: "" + (marker[1] === 'Warning' ? '#B6BF43' : marker[1] === 'Cleared' ? '#79A9C1' : 'red'),
      height: '6px',
      width: '6px',
      borderRadius: '50%'
    }
  }))), /*#__PURE__*/_react.default.createElement(_reactMapGl.Source, {
    id: "line-source",
    type: "geojson",
    data: geojsonData
  }, /*#__PURE__*/_react.default.createElement(_reactMapGl.Layer, lineLayerStyle)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "10px"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactMapGl.FullscreenControl, null), /*#__PURE__*/_react.default.createElement(_reactMapGl.NavigationControl, null)), /*#__PURE__*/_react.default.createElement("div", null)));
};
var _default = exports.default = SupersetPluginChartCscMap;