"use strict";

exports.__esModule = true;
exports.default = SupersetPluginChartCscLine;
var _react = _interopRequireWildcard(require("react"));
var am5 = _interopRequireWildcard(require("@amcharts/amcharts5"));
var am5xy = _interopRequireWildcard(require("@amcharts/amcharts5/xy"));
var _Animated = _interopRequireDefault(require("@amcharts/amcharts5/themes/Animated"));
var _logoTelcel = _interopRequireDefault(require("./assets/images/logo-telcel.png"));
var _red5gAltanRedes = _interopRequireDefault(require("./assets/images/red-5g-altan-redes.png"));
var _ATT = _interopRequireDefault(require("./assets/images/ATT.png"));
var _bait = _interopRequireDefault(require("./assets/images/bait.png"));
var _megacableLogo = _interopRequireDefault(require("./assets/images/megacable-logo2.png"));
var _core = require("@superset-ui/core");
var _vendors = require("./assets/constants/vendors.js");
var _templateObject;
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
// @ts-ignore
// @ts-ignore
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteralLoose(e, t) { return t || (t = e.slice(0)), e.raw = t, e; }
var Styles = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  text-align: center;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    padding: 0 0;\n  }\n"])));
var vendorLogo = {
  TELCEL: _logoTelcel.default,
  ALTAN: _red5gAltanRedes.default,
  ATT: _ATT.default,
  BAIT: _bait.default,
  MEGA: _megacableLogo.default
};
var vendorData = {
  ALTAN: _vendors.altan,
  BAIT: _vendors.bait,
  ATT: _vendors.att,
  TELCEL: _vendors.telcel,
  MEGA: _vendors.mega
};
var vendorColors = {
  ALTAN: 0xff0000,
  BAIT: 0xFFBF00,
  ATT: 0x0000FF,
  TELCEL: 0x0000FF,
  MEGA: 0xC0C0C0
};
function SupersetPluginChartCscLine(props) {
  var {
    vendor
  } = props;
  var numChart = Math.floor(Math.random() * 1000);
  var [imageLogo] = (0, _react.useState)(vendorLogo[vendor]);
  (0, _react.useLayoutEffect)(() => {
    var root = am5.Root.new("chartdiv" + numChart);
    root.setThemes([_Animated.default.new(root)]);
    var data = vendorData[vendor];
    // Make sure your data format is converted properly for DateAxis
    data.forEach(function (item) {
      item.date = new Date(item.date);
    });
    root.dateFormatter.setAll({
      dateFormat: 'yyyy',
      dateFields: ['valueX']
    });

    // Create chart
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      paddingLeft: 0
    }));

    // Create axes
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0,
      groupData: false,
      baseInterval: {
        timeUnit: "minute",
        count: 15
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true,
        minGridDistance: 1
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    // Customize the labels
    xAxis.get("renderer").labels.template.setAll({
      fontSize: "8px",
      // Set the font size
      rotation: 45,
      // Rotate the labels by 45 degrees
      centerY: am5.p50,
      // Adjust vertical alignment of labels
      centerX: am5.p50 // Adjust horizontal alignment of labels
    });
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0.2,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    // Customize the labels
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      minBulletDistance: 1,
      connect: false,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));
    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });
    series.strokes.template.setAll({
      strokeWidth: 2
    });

    // Set up data processor to parse string dates
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });
    series.data.setAll(data);
    series.bullets.push(function () {
      var circle = am5.Circle.new(root, {
        radius: 2,
        fill: root.interfaceColors.get("background"),
        stroke: series.get("fill"),
        strokeWidth: 1
      });
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });
    var colorToFill = am5.color(vendorColors[vendor]);
    series.set("fill", colorToFill);
    series.set("stroke", colorToFill);

    // Add cursor
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis,
      behavior: "none"
    }));
    cursor.lineY.set("visible", false);
    return () => {
      root.dispose(); // Clean up on unmount
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(Styles, {
    className: "wrap-cscline"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageLogo,
    alt: 'VendorImage',
    width: "80px",
    height: "auto"
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "chartdiv" + numChart,
    style: {
      width: '100%',
      height: '100px'
    }
  }));
}