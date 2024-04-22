import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Example static map of country names to coordinates
const countryCoords = {
    "France": { lat: 46.2276, lon: 2.2137 },
    "USA": { lat: 37.0902, lon: -95.7129 },
    "Australia": { lat: -25.2744, lon: 133.7751 },
    "Norway": { lat: 60.4720, lon: 8.4689 },
    "Poland": { lat: 51.9194, lon: 19.1451 },
    "Germany": { lat: 51.1657, lon: 10.4515 },
    "Spain": { lat: 40.4637, lon: -3.7492 },
    "Sweden": { lat: 60.1282, lon: 18.6435 },
    "Denmark": { lat: 56.2639, lon: 9.5018 },
    "Singapore": { lat: 1.3521, lon: 103.8198 },
    "Portugal": { lat: 39.3999, lon: -8.2245 },
    "Japan": { lat: 36.2048, lon: 138.2529 },
    "Finland": { lat: 61.9241, lon: 25.7482 },
    "UK": { lat: 55.3781, lon: -3.4360 },
    "Ireland": { lat: 53.4129, lon: -8.2439 },
    "Canada": { lat: 56.1304, lon: -106.3468 },
    "Hong Kong": { lat: 22.3193, lon: 114.1694 },
    "Italy": { lat: 41.8719, lon: 12.5674 },
    "Switzerland": { lat: 46.8182, lon: 8.2275 },
    "Netherlands": { lat: 52.1326, lon: 5.2913 },
    "Belgium": { lat: 50.5039, lon: 4.4699 },
    "New Zealand": { lat: -40.9006, lon: 174.8860 },
    "South Africa": { lat: -30.5595, lon: 22.9375 },
    "Austria": { lat: 47.5162, lon: 14.5501 },
    "Philippines": { lat: 12.8797, lon: 121.7740 },
    "Russia": { lat: 61.5240, lon: 105.3188 },
    "Israel": { lat: 31.0461, lon: 34.8516 }
};

const MapChart = ({ data }) => {
    const entries = data.series[0].data.map(item => ({
        ...item,
        lat: countryCoords[item.x]?.lat,
        lon: countryCoords[item.x]?.lon
    })).filter(item => item.lat && item.lon); // Filter out entries without valid coordinates

    return (
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {entries.map((item, index) => (
                <Marker key={index} position={[item.lat, item.lon]}>
                    <Popup>
                        {item.x} has {item.y} items.
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapChart;

