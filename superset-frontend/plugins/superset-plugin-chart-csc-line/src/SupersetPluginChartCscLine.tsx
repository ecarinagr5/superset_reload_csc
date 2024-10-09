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


export default function SupersetPluginChartCscLine(props: any) {
const { vendor } = props;  
const numChart = Math.floor(Math.random() * 1000);
const [imageLogo,] = useState<any>(vendorLogo[vendor]);
  useLayoutEffect(() => {
    // Create root element
    const root = am5.Root.new(`${"chartdiv"}${numChart}`);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);


    root.dateFormatter.setAll({
          dateFormat: 'yyyy',
          dateFields: ['valueX'],
    });

let data = [{
  "date": "2012-07-27",
  "value": 13
}, {
  "date": "2012-07-28",
  "value": 11
}, {
  "date": "2012-07-29",
  "value": 15
}, {
  "date": "2012-07-30",
  "value": 16
}, {
  "date": "2012-07-31",
  "value": 18
}, {
  "date": "2012-08-01",
  "value": 13
}, {
  "date": "2012-08-02",
  "value": 22
}, {
  "date": "2012-08-03",
  "value": 23
}, {
  "date": "2012-08-04",
  "value": 20
}, {
  "date": "2012-08-05",
  "value": 17
}, {
  "date": "2012-08-06",
  "value": 16
}, {
  "date": "2012-08-07",
  "value": 18
}, {
  "date": "2012-08-08",
  "value": 21
}, {
  "date": "2012-08-09",
  "value": 26
}, {
  "date": "2012-08-10",
  "value": 24
}, {
  "date": "2012-08-11",
  "value": 29
}, {
  "date": "2012-08-12",
  "value": 32
}, {
  "date": "2012-08-13",
  "value": 18
}, {
  "date": "2012-08-14",
  "value": 24
}, {
  "date": "2012-08-15",
  "value": 22
}, {
  "date": "2012-08-16",
  "value": 18
}, {
  "date": "2012-08-17",
  "value": 19
}, {
  "date": "2012-08-18",
  "value": 14
}, {
  "date": "2012-08-19",
  "value": 15
}, {
  "date": "2012-08-20",
  "value": 12
}, {
  "date": "2012-08-21",
  "value": 8
}, {
  "date": "2012-08-22",
  "value": 9
}, {
  "date": "2012-08-23",
  "value": 8
}, {
  "date": "2012-08-24",
  "value": 7
}, {
  "date": "2012-08-25",
  "value": 5
}, {
  "date": "2012-08-26",
  "value": 11
}, {
  "date": "2012-08-27",
  "value": 13
}, {
  "date": "2012-08-28",
  "value": 18
}, {
  "date": "2012-08-29",
  "value": 20
}, {
  "date": "2012-08-30",
  "value": 29
}, {
  "date": "2012-08-31",
  "value": 33
}, {
  "date": "2012-09-01",
  "value": 42
}, {
  "date": "2012-09-02",
  "value": 35
}, {
  "date": "2012-09-03",
  "value": 31
}, {
  "date": "2012-09-04",
  "value": 47
}, {
  "date": "2012-09-05",
  "value": 52
}, {
  "date": "2012-09-06",
  "value": 46
}, {
  "date": "2012-09-07",
  "value": 41
}, {
  "date": "2012-09-08",
  "value": 43
}, {
  "date": "2012-09-09",
  "value": 40
}, {
  "date": "2012-09-10",
  "value": 39
}, {
  "date": "2012-09-11",
  "value": 34
}, {
  "date": "2012-09-12",
  "value": 29
}, {
  "date": "2012-09-13",
  "value": 34
}, {
  "date": "2012-09-14",
  "value": 37
}, {
  "date": "2012-09-15",
  "value": 42
}, {
  "date": "2012-09-16",
  "value": 49
}, {
  "date": "2012-09-17",
  "value": 46
}, {
  "date": "2012-09-18",
  "value": 47
}, {
  "date": "2012-09-19",
  "value": 55
}, {
  "date": "2012-09-20",
  "value": 59
}, {
  "date": "2012-09-21",
  "value": 58
}, {
  "date": "2012-09-22",
  "value": 57
}, {
  "date": "2012-09-23",
  "value": 61
}, {
  "date": "2012-09-24",
  "value": 59
}, {
  "date": "2012-09-25",
  "value": 67
}, {
  "date": "2012-09-26",
  "value": 65
}, {
  "date": "2012-09-27",
  "value": 61
}, {
  "date": "2012-09-28",
  "value": 66
}, {
  "date": "2012-09-29",
  "value": 69
}, {
  "date": "2012-09-30",
  "value": 71
}, {
  "date": "2012-10-01",
  "value": 67
}, {
  "date": "2012-10-02",
  "value": 63
}, {
  "date": "2012-10-03",
  "value": 46
}, {
  "date": "2012-10-04",
  "value": 32
}, {
  "date": "2012-10-05",
  "value": 21
}, {
  "date": "2012-10-06",
  "value": 18
}, {
  "date": "2012-10-07",
  "value": 21
}, {
  "date": "2012-10-08",
  "value": 28
}, {
  "date": "2012-10-09",
  "value": 27
}, {
  "date": "2012-10-10",
  "value": 36
}, {
  "date": "2012-10-11",
  "value": 33
}, {
  "date": "2012-10-12",
  "value": 31
}, {
  "date": "2012-10-13",
  "value": 30
}, {
  "date": "2012-10-14",
  "value": 34
}, {
  "date": "2012-10-15",
  "value": 38
}, {
  "date": "2012-10-16",
  "value": 37
}, {
  "date": "2012-10-17",
  "value": 44
}, {
  "date": "2012-10-18",
  "value": 49
}, {
  "date": "2012-10-19",
  "value": 53
}, {
  "date": "2012-10-20",
  "value": 57
}, {
  "date": "2012-10-21",
  "value": 60
}, {
  "date": "2012-10-22",
  "value": 61
}, {
  "date": "2012-10-23",
  "value": 69
}, {
  "date": "2012-10-24",
  "value": 67
}, {
  "date": "2012-10-25",
  "value": 72
}, {
  "date": "2012-10-26",
  "value": 77
}, {
  "date": "2012-10-27",
  "value": 75
}, {
  "date": "2012-10-28",
  "value": 70
}, {
  "date": "2012-10-29",
  "value": 72
}, {
  "date": "2012-10-30",
  "value": 70
}, {
  "date": "2012-10-31",
  "value": 72
}, {
  "date": "2012-11-01",
  "value": 73
}, {
  "date": "2012-11-02",
  "value": 67
}, {
  "date": "2012-11-03",
  "value": 68
}, {
  "date": "2012-11-04",
  "value": 65
}, {
  "date": "2012-11-05",
  "value": 71
}, {
  "date": "2012-11-06",
  "value": 75
}, {
  "date": "2012-11-07",
  "value": 74
}, {
  "date": "2012-11-08",
  "value": 71
}, {
  "date": "2012-11-09",
  "value": 76
}, {
  "date": "2012-11-10",
  "value": 77
}, {
  "date": "2012-11-11",
  "value": 81
}, {
  "date": "2012-11-12",
  "value": 83
}, {
  "date": "2012-11-13",
  "value": 80
}, {
  "date": "2012-11-14",
  "value": 81
}, {
  "date": "2012-11-15",
  "value": 87
}, {
  "date": "2012-11-16",
  "value": 82
}, {
  "date": "2012-11-17",
  "value": 86
}, {
  "date": "2012-11-18",
  "value": 80
}, {
  "date": "2012-11-19",
  "value": 87
}, {
  "date": "2012-11-20",
  "value": 83
}, {
  "date": "2012-11-21",
  "value": 85
}, {
  "date": "2012-11-22",
  "value": 84
}, {
  "date": "2012-11-23",
  "value": 82
}, {
  "date": "2012-11-24",
  "value": 73
}, {
  "date": "2012-11-25",
  "value": 71
}, {
  "date": "2012-11-26",
  "value": 75
}, {
  "date": "2012-11-27",
  "value": 79
}, {
  "date": "2012-11-28",
  "value": 70
}, {
  "date": "2012-11-29",
  "value": 73
}, {
  "date": "2012-11-30",
  "value": 61
}, {
  "date": "2012-12-01",
  "value": 62
}, {
  "date": "2012-12-02",
  "value": 66
}, {
  "date": "2012-12-03",
  "value": 65
}, {
  "date": "2012-12-04",
  "value": 73
}, {
  "date": "2012-12-05",
  "value": 79
}, {
  "date": "2012-12-06",
  "value": 78
}, {
  "date": "2012-12-07",
  "value": 78
}, {
  "date": "2012-12-08",
  "value": 78
}, {
  "date": "2012-12-09",
  "value": 74
}, {
  "date": "2012-12-10",
  "value": 73
}, {
  "date": "2012-12-11",
  "value": 75
}, {
  "date": "2012-12-12",
  "value": 70
}, {
  "date": "2012-12-13",
  "value": 77
}, {
  "date": "2012-12-14",
  "value": 67
}, {
  "date": "2012-12-15",
  "value": 62
}, {
  "date": "2012-12-16",
  "value": 64
}, {
  "date": "2012-12-17",
  "value": 61
}, {
  "date": "2012-12-18",
  "value": 59
}, {
  "date": "2012-12-19",
  "value": 53
}, {
  "date": "2012-12-20",
  "value": 54
}, {
  "date": "2012-12-21",
  "value": 56
}, {
  "date": "2012-12-22",
  "value": 59
}, {
  "date": "2012-12-23",
  "value": 58
}, {
  "date": "2012-12-24",
  "value": 55
}, {
  "date": "2012-12-25",
  "value": 52
}, {
  "date": "2012-12-26",
  "value": 54
}, {
  "date": "2012-12-27",
  "value": 50
}, {
  "date": "2012-12-28",
  "value": 50
}, {
  "date": "2012-12-29",
  "value": 51
}, {
  "date": "2012-12-30",
  "value": 52
}, {
  "date": "2012-12-31",
  "value": 58
}, {
  "date": "2013-01-01",
  "value": 60
}, {
  "date": "2013-01-02",
  "value": 67
}, {
  "date": "2013-01-03",
  "value": 64
}, {
  "date": "2013-01-04",
  "value": 66
}, {
  "date": "2013-01-05",
  "value": 60
}, {
  "date": "2013-01-06",
  "value": 63
}, {
  "date": "2013-01-07",
  "value": 61
}, {
  "date": "2013-01-08",
  "value": 60
}, {
  "date": "2013-01-09",
  "value": 65
}, {
  "date": "2013-01-10",
  "value": 75
}, {
  "date": "2013-01-11",
  "value": 77
}, {
  "date": "2013-01-12",
  "value": 78
}, {
  "date": "2013-01-13",
  "value": 70
}, {
  "date": "2013-01-14",
  "value": 70
}, {
  "date": "2013-01-15",
  "value": 73
}, {
  "date": "2013-01-16",
  "value": 71
}, {
  "date": "2013-01-17",
  "value": 74
}, {
  "date": "2013-01-18",
  "value": 78
}, {
  "date": "2013-01-19",
  "value": 85
}, {
  "date": "2013-01-20",
  "value": 82
}, {
  "date": "2013-01-21",
  "value": 83
}, {
  "date": "2013-01-22",
  "value": 88
}, {
  "date": "2013-01-23",
  "value": 85
}, {
  "date": "2013-01-24",
  "value": 85
}, {
  "date": "2013-01-25",
  "value": 80
}, {
  "date": "2013-01-26",
  "value": 87
}, {
  "date": "2013-01-27",
  "value": 84
}, {
  "date": "2013-01-28",
  "value": 83
}, {
  "date": "2013-01-29",
  "value": 84
}, {
  "date": "2013-01-30",
  "value": 81
}];


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
  maxDeviation: 0.1,
  groupData: false,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {
    minorGridEnabled: true,
    minGridDistance: 70
  }),
  tooltip: am5.Tooltip.new(root, {})
}));

let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.2,
  renderer: am5xy.AxisRendererY.new(root, {})
}));


let series = chart.series.push(am5xy.LineSeries.new(root, {
  minBulletDistance: 10,
  connect: false,
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    pointerOrientation: "horizontal",
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
    radius: 4,
    fill: root.interfaceColors.get("background"),
    stroke: series.get("fill"),
    strokeWidth: 2
  })

  return am5.Bullet.new(root, {
    sprite: circle
  })
});


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
      <div id={`${"chartdiv"}${numChart}`} style={{ width: '100%', height: '100px' }} />;
    </Styles>
  );
}
