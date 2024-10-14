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
import ReactMapGL, {
  Source,
  Layer,
  LayerProps,
  Marker,
  FullscreenControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { typeOfView, TOKEN } from './utils';
import NavCounter from './components/NavCounter';
import { Container } from './styles';


const SupersetPluginChartCscMap = (props: any) => {
  const { data_iplinks, data } = props;
  const [viewport, setViewport] = useState({
    latitude: 23.634501,
    longitude: -102.552784,
    zoom: 3.5,
    width: '100%',
    height: '500px',
  });
  const [alarms, setAlarms] = useState<any>([]);
  const [ipLinks, setIpLinks] = useState<any>([]);

  useEffect(() => {
    setAlarms(data?.data?.content);
    setIpLinks(data_iplinks);
  }, [data]);

  // Create a unique set of markers from the data
  const uniqueMarkers: {
    [key: string]: { latitude: number; longitude: number };
  } = {};
  ipLinks?.forEach(
    (link: {
      SideA_Lon: any;
      SideA_Lat: any;
      SideB_Lon: any;
      SideB_Lat: any;
    }) => {
      uniqueMarkers[`${link.SideA_Lon},${link.SideA_Lat}`] = {
        latitude: link.SideA_Lat,
        longitude: link.SideA_Lon,
      };
      uniqueMarkers[`${link.SideB_Lon},${link.SideB_Lat}`] = {
        latitude: link.SideB_Lat,
        longitude: link.SideB_Lon,
      };
    },
  );

  // Transform the data into GeoJSON format for lines
  const lineFeatures = data_iplinks?.map(
    (link: {
      SideA_Lon: any;
      SideA_Lat: any;
      SideB_Lon: any;
      SideB_Lat: any;
      LinkName: any;
    }) => ({
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
    }),
  );

  const geojsonData = {
    type: 'FeatureCollection',
    features: lineFeatures,
  };


  // Define layer style for the lines
  const lineLayerStyle: LayerProps = {
    id: 'line-layer',
    type: 'line',
    paint: {
      // eslint-disable-next-line theme-colors/no-literal-colors
      'line-color': "#45bed6",
      'line-width': 1,
    },
  };


  return (
    <Container>
      <NavCounter alarms={alarms}/>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle={typeOfView?.lightv11}
        onViewportChange={(newViewport: any) => setViewport(newViewport)}
      >
        {/* Render unique markers for */}
        {Object.values(uniqueMarkers).map(
          (marker: { latitude: number; longitude: number }, index: number) => (
            <Marker
              key={`marker-${index}`}
              latitude={marker.latitude}
              longitude={marker.longitude}
            >
              <div
                style={{
                  // eslint-disable-next-line theme-colors/no-literal-colors
                  background: "#45bed6",
                  height: '6px',
                  width: '6px',
                  borderRadius: '50%',
                }}
              />
            </Marker>
          ),
        )}

        {/* Render unique markers for alarms */}
        {alarms?.map((marker: any[], index: number) => (
          <Marker
            key={`marker-${index}`}
            latitude={marker[4]}
            longitude={marker[5]}
          >
            <div
              style={{
                // eslint-disable-next-line theme-colors/no-literal-colors
                background: `${marker[1] === 'Warning' ? '#B6BF43' : marker[1] === 'Cleared' ? '#79A9C1' : 'red'}`,
                height: '6px',
                width: '6px',
                borderRadius: '50%',
              }}
            />
          </Marker>
        ))}

        {/* Render lines */}
        <Source id="line-source" type="geojson" data={geojsonData}>
          <Layer {...lineLayerStyle} />
        </Source>
        <FullscreenControl />
        <div>
        </div>
      </ReactMapGL>
    </Container>
  );
};

export default SupersetPluginChartCscMap;
