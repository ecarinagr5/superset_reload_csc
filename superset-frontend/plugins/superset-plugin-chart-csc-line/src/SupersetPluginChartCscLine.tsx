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
import React, { useLayoutEffect,useState } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import LogoTelcel from './assets/images/logo-telcel.png';
import LogoAltan from './assets/images/red-5g-altan-redes.png';
import LogoAtt from './assets/images/ATT.png';
import LogoBait from './assets/images/bait.png';
import LogoMega from './assets/images/megacable-logo2.png';
import { styled } from '@superset-ui/core';
import {altan, bait, telcel, mega, att}  from "./assets/constants/vendors.js"


const Styles = styled.div`
  position: relative;
  text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 0;
  }
`;

const vendorLogo:any = {
  TELCEL: LogoTelcel,
  ALTAN: LogoAltan,
  ATT: LogoAtt,
  BAIT: LogoBait,
  MEGA: LogoMega
};


const vendorData:any = {
  ALTAN: altan,
  BAIT: bait,
  ATT: att,
  TELCEL: telcel,
  MEGA: mega
};

const vendorColors:any = { 
  ALTAN: 0xff0000,
  BAIT: 0xFFBF00,
  ATT: 0x0000FF,
  TELCEL: 0x0000FF,
  MEGA: 0xC0C0C0
}


export default function SupersetPluginChartCscLine(props: any) {
const { vendor } = props;  
const numChart = Math.floor(Math.random() * 1000);
const [imageLogo,] = useState<any>(vendorLogo[vendor]);

  useLayoutEffect(() => {
    const root = am5.Root.new(`${"chartdiv"}${numChart}`);
    root.setThemes([am5themes_Animated.new(root)]);

    let data = vendorData[vendor];
    // Make sure your data format is converted properly for DateAxis
    data.forEach(function(item) {
        item.date = new Date(item.date);
    });

    root.dateFormatter.setAll({
          dateFormat: 'yyyy',
          dateFields: ['valueX'],
    });



// Create chart
let chart = root.container.children.push(am5xy.XYChart.new(root, {
  focusable: true,
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true,
  paddingLeft: 0
}));


// Create axes
let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
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
  fontSize: "8px", // Set the font size
  rotation: 45,    // Rotate the labels by 45 degrees
  centerY: am5.p50, // Adjust vertical alignment of labels
  centerX: am5.p50  // Adjust horizontal alignment of labels
});

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root, {})
}));
// Customize the labels
let series = chart.series.push(am5xy.LineSeries.new(root, {
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

series.bullets.push(function() {
  let circle = am5.Circle.new(root, {
    radius: 2,
    fill: root.interfaceColors.get("background"),
    stroke: series.get("fill"),
    strokeWidth: 1
  })

  return am5.Bullet.new(root, {
    sprite: circle
  })
});

const colorToFill = am5.color(vendorColors[vendor]);
series.set("fill",colorToFill );
series.set("stroke", colorToFill); 


// Add cursor
let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  xAxis: xAxis,
  behavior: "none"
}));
cursor.lineY.set("visible", false);
    return () => {
      root.dispose(); // Clean up on unmount
    };
  }, []);

  return (
    <Styles
    className="wrap-cscline"
  >
      <img src={imageLogo} alt={'VendorImage'} width={"80px"}  height={"auto"} />
      <div id={`${"chartdiv"}${numChart}`} style={{ width: '100%', height: '100px' }} />
    </Styles>
  );
}
