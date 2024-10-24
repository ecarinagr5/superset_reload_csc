function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* eslint-disable import/no-extraneous-dependencies */
/**
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
 */
// eslint-disable-next-line no-restricted-syntax
import React, { useEffect, useState } from 'react';
import ReactMapGL, { Source, Layer, Marker, FullscreenControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { typeOfView, TOKEN, mapStyle } from './utils';
import NavCounter from './components/NavCounter';
import { Container } from './styles';
import ChangeMapStyle from './components/ChangeMapStyle';
var SupersetPluginChartCscMap = props => {
  var {
    data_iplinks,
    data
  } = props;
  var [viewport, setViewport] = useState({
    latitude: 17.000,
    longitude: -102.552784,
    zoom: 3.2,
    width: '100%',
    height: '500px'
  });
  var [alarms, setAlarms] = useState([]);
  var [ipLinks, setIpLinks] = useState([]);
  var [styleMap, setStyleMap] = useState(typeOfView[mapStyle[7]]);
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement(Container, {
    id: "cscmap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(ChangeMapStyle, {
    options: mapStyle,
    setStyleMap: setStyleMap,
    defaultValue: mapStyle[5]
  }), /*#__PURE__*/React.createElement(NavCounter, {
    alarms: alarms,
    type: "alarms"
  }), /*#__PURE__*/React.createElement(NavCounter, {
    alarms: ipLinks,
    type: "iplinks"
  })), /*#__PURE__*/React.createElement(ReactMapGL, _extends({}, viewport, {
    mapboxApiAccessToken: TOKEN,
    mapStyle: styleMap,
    onViewportChange: newViewport => setViewport(newViewport)
  }), Object.values(uniqueMarkers).map((marker, index) => /*#__PURE__*/React.createElement(Marker, {
    key: "marker-" + index,
    latitude: marker.latitude,
    longitude: marker.longitude
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      background: "#45bed6",
      height: '6px',
      width: '6px',
      borderRadius: '50%'
    }
  }))), alarms == null ? void 0 : alarms.map((marker, index) => /*#__PURE__*/React.createElement(Marker, {
    key: "marker-" + index,
    latitude: marker[4],
    longitude: marker[5]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      background: "" + (marker[1] === 'Warning' ? '#B6BF43' : marker[1] === 'Cleared' ? '#79A9C1' : 'red'),
      height: '6px',
      width: '6px',
      borderRadius: '50%'
    }
  }))), /*#__PURE__*/React.createElement(Source, {
    id: "line-source",
    type: "geojson",
    data: geojsonData
  }, /*#__PURE__*/React.createElement(Layer, lineLayerStyle)), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px"
    }
  }, /*#__PURE__*/React.createElement(FullscreenControl, null), /*#__PURE__*/React.createElement(NavigationControl, null)), /*#__PURE__*/React.createElement("div", null)));
};
export default SupersetPluginChartCscMap;