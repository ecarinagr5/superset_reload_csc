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
import React, { useEffect, createRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactMapGL, { Source, Layer, LayerProps } from 'react-map-gl';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';

const SupersetPluginChartCscMap = (props: any) => {
  const [viewport, setViewport] = useState({
    latitude: 51.505,
    longitude: -0.09,
    zoom: 10,
    width: '100%',
    height: '500px',
  });

  const rootElem = createRef<HTMLDivElement>();

  // Define the GeoJSON data for the line
  const lineData: any = {
    type: 'Feature',
    properties: {}, // Add an empty properties object
    geometry: {
      type: 'LineString',
      coordinates: [
        [-0.09, 51.505], // Start point (lng, lat)
        [-0.1, 51.515], // Middle point
        [-0.11, 51.525], // End point
      ],
    },
  };

  // Layer style for the line
  const lineLayer: LayerProps = {
    id: 'line-layer',
    type: 'line',
    paint: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      'line-color': '#FF0000',
      'line-width': 3,
    },
  };

  // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.
  useEffect(() => {
    const root = rootElem.current as HTMLElement;
  });

  console.log('Plugin props -> HERE', props);
  //      <pre>${JSON.stringify(data, null, 2)}</pre>
  //      ref={rootElem}
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic3R2eiIsImEiOiJjazJ0OGsyNGMxOHZhM29udmg2NmR1ZnB6In0.a2674pyiTcN1Dl_6QM7s7w"
      onViewportChange={(
        newViewport: React.SetStateAction<{
          latitude: number;
          longitude: number;
          zoom: number;
          width: string;
          height: string;
        }>,
      ) => setViewport(newViewport)}
    >
      <Source id="line-source" type="geojson" data={lineData}>
        <Layer {...lineLayer} />
      </Source>
    </ReactMapGL>
  );
};

export default SupersetPluginChartCscMap;
