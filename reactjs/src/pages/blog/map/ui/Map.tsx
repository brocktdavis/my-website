import { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const USE_MAPBOX = false;

const MAPBOX_ACCESS_TOKEN = 'sk.eyJ1IjoiYnJvY2t0ZGF2aXMiLCJhIjoiY20zNDE0bTdmMXdobzJqcHVjZ3NwNGh3OSJ9.yZprsZ0o9GT4BRoy7CrJwA';
const MAPBOX_STYLE_ID = 'mapbox/outdoors-v12';
// Use either mapbox/outdoors-v12 (light) or mapbox-dark-v11

export const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = 51.505;
  const longitude = -0.09;

  const url = USE_MAPBOX ?
    `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}` :
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  
  const attribution = USE_MAPBOX ?
    '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>' :
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return ( 
    <MapContainer
      center={[latitude, longitude]}
      zoom={12}
      ref={mapRef}
      style={{height: "100vh", width: "100vw"}}
    >
      <TileLayer
        url={url}
        attribution={attribution}
        tileSize={512}
        zoomOffset={-1}
      />
    </MapContainer>
  );
};
