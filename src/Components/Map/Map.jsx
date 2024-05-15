
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import or create an icon for the marker
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Map = () => {
    const hotelPosition = [51.505, -0.09];
    return (
        <div className='my-10'>
            <div className='mt-14 mb-10'>
                <h2 className='text-5xl slab text-center font-semibold '>Our Hotel Location</h2>
                <p className='text-center'>Customer service is of utmost importance in every industry, but no more so than within the travel industry, including travel operators and hotels. <br /> SMS travel and hotel solutions are an effective way to maximise customer service and consumer satisfaction, allowing service providers.</p>
            </div>
            <MapContainer center={hotelPosition} zoom={13} style={{ height: "70vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={hotelPosition} icon={customIcon}>
                    <Popup>
                        Hotel Borcelle <br /> Your wishable stay spot .
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;