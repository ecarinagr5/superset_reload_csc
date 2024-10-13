
export const TOKEN =
  'pk.eyJ1Ijoic3R2eiIsImEiOiJjazJ0OGsyNGMxOHZhM29udmg2NmR1ZnB6In0.a2674pyiTcN1Dl_6QM7s7w';

export const typeOfView: { [key: string]: string } = {
    streets9: 'mapbox://styles/mapbox/streets-v9',
    standard: 'mapbox://styles/mapbox/standard',
    satellite: 'mapbox://styles/mapbox/standard-satellite',
    streetsv12: 'mapbox://styles/mapbox/streets-v12',
    outdoorsv12: 'mapbox://styles/mapbox/outdoors-v12',
    lightv11: 'mapbox://styles/mapbox/light-v11',
    darkv11: 'mapbox://styles/mapbox/dark-v11',
    satellitev9: 'mapbox://styles/mapbox/satellite-v9',
    satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v12',
    navigationDay: 'mapbox://styles/mapbox/navigation-day-v1',
    navigationNight: 'mapbox://styles/mapbox/navigation-night-v1',
  };

  // Transform the data into GeoJSON format for lines
  export const lineFeatures = (data_iplinks: { SideA_Lon: any; SideA_Lat: any; SideB_Lon: any; SideB_Lat: any; LinkName: any; }[]) => { 
     return data_iplinks?.map(
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
}

  export const geojsonData = {
    type: 'FeatureCollection',
    features: lineFeatures,
  };
