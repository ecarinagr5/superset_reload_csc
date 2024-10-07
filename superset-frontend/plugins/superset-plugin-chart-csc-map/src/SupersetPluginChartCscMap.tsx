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
import ReactMapGL, { Source, Layer, LayerProps, Marker } from 'react-map-gl';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'mapbox-gl/dist/mapbox-gl.css';
const TOKEN = "pk.eyJ1Ijoic3R2eiIsImEiOiJjazJ0OGsyNGMxOHZhM29udmg2NmR1ZnB6In0.a2674pyiTcN1Dl_6QM7s7w"

const SupersetPluginChartCscMap = (props: any) => {
  const { data_iplinks } = props;
  const [viewport, setViewport] = React.useState({
    latitude: 19.629971,
    longitude: -99.149725,
    zoom: 5,
    width: '100%',
    height: '500px',
  });

  // Create a unique set of markers from the data
  const uniqueMarkers = {};
  data_iplinks?.forEach((link) => {
    uniqueMarkers[`${link.SideA_Lon},${link.SideA_Lat}`] = {
      latitude: link.SideA_Lat,
      longitude: link.SideA_Lon,
    };
    uniqueMarkers[`${link.SideB_Lon},${link.SideB_Lat}`] = {
      latitude: link.SideB_Lat,
      longitude: link.SideB_Lon,
    };
  });

  // Transform the data into GeoJSON format for lines
  const lineFeatures = data_iplinks?.map((link) => ({
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [link.SideA_Lon, link.SideA_Lat], // [longitude, latitude]
        [link.SideB_Lon, link.SideB_Lat],
      ],
    },
    properties: {
      name: link.LinkName,
    },
  }));

  const geojsonData = {
    type: 'FeatureCollection',
    features: lineFeatures,
  };

  // Define layer style for the lines
  const lineLayerStyle: LayerProps = {
    id: 'line-layer',
    type: 'line',
    paint: {
      'line-color': '#FF0000',
      'line-width': 2,
    },
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {/* Render unique markers */}
      {Object.values(uniqueMarkers).map((marker, index) => (
        <Marker
          key={`marker-${index}`}
          latitude={marker.latitude}
          longitude={marker.longitude}
        >
          <div style={{ background: 'blue', height: '10px', width: '10px', borderRadius: '50%' }} />
        </Marker>
      ))}

      {/* Render lines */}
      <Source id="line-source" type="geojson" data={geojsonData}>
        <Layer {...lineLayerStyle} />
      </Source>
    </ReactMapGL>
  );
};

export default SupersetPluginChartCscMap;
