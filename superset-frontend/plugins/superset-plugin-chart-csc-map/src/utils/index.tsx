
export const TOKEN =
  'pk.eyJ1Ijoic3R2eiIsImEiOiJjazJ0OGsyNGMxOHZhM29udmg2NmR1ZnB6In0.a2674pyiTcN1Dl_6QM7s7w';

export const typeOfView: { [key: string]: string } = {
  streets9: 'mapbox://styles/mapbox/streets-v9',
  streetsv12: 'mapbox://styles/mapbox/streets-v12',
  outdoorsv12: 'mapbox://styles/mapbox/outdoors-v12',
  lightv11: 'mapbox://styles/mapbox/light-v11',
  darkv11: 'mapbox://styles/mapbox/dark-v11',
  satellitev9: 'mapbox://styles/mapbox/satellite-v9',
  satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v12',
  navigationDay: 'mapbox://styles/mapbox/navigation-day-v1',
  navigationNight: 'mapbox://styles/mapbox/navigation-night-v1',
};

export const mapStyle = [
  "streets9",
  "streetsv12",
  "outdoorsv12",
  "lightv11",
  "darkv11",
  "satellitev9",
  "satelliteStreets",
  "navigationDay",
  "navigationNight"]



export const SEVERITY: { [key: string]: string } = {
  Indeterminate: "#7b7b7b",
  Critical: "#c41f30",
  Major: "#e48d13;",
  Minor: "#edbf07",
  Warning: "#79a9c1",
  Cleared: "#b6bf43",
};