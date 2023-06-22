import '../Home.css';
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import geoJSONData from '../world_countries_geojson.geo.json';
import { negative, positive } from '../countryList.js';

function Map() {
  useEffect(() => {
    let isMounted = true;

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const redCountries = negative; // Modify this array with the desired red countries
  const greenCountries = positive; // Modify this array with the desired green countries

  const redGeoJSONStyle = {
    fillColor: 'red',
    fillOpacity: 0.6,
    color: 'red',
    weight: 2,
  };

  const greenGeoJSONStyle = {
    fillColor: 'green',
    fillOpacity: 0.6,
    color: 'green',
    weight: 2,
  };

  const onEachRedFeature = (feature, layer) => {
    layer.on({
      mouseover: () => {
        layer.setStyle({ fillColor: 'red' });
        const countryName = feature.properties.name;
        layer.bindTooltip(`Negative population growth in ${countryName}`).openTooltip();
      },
      mouseout: () => {
        layer.setStyle({ fillColor: 'red' });
        layer.unbindTooltip();
      },
    });
  };

  const onEachGreenFeature = (feature, layer) => {
    layer.on({
      mouseover: () => {
        layer.setStyle({ fillColor: 'green' });
        const countryName = feature.properties.name;
        layer.bindTooltip(`Positive population growth in ${countryName}`).openTooltip();
      },
      mouseout: () => {
        layer.setStyle({ fillColor: 'green' });
        layer.unbindTooltip();
      },
    });
  };

  const redFilterFeature = (feature) => {
    return redCountries.includes(feature.properties.name);
  };

  const greenFilterFeature = (feature) => {
    return greenCountries.includes(feature.properties.name);
  };

  return (
    <MapContainer center={[41.6086, 21.7453]} zoom={7} style={{ height: '800px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={geoJSONData} style={redGeoJSONStyle} onEachFeature={onEachRedFeature} filter={redFilterFeature} />
      <GeoJSON data={geoJSONData} style={greenGeoJSONStyle} onEachFeature={onEachGreenFeature} filter={greenFilterFeature} />
    </MapContainer>
  );
}

export default Map;
