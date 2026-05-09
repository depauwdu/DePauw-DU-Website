"use client";

import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet with webpack/Next.js
const mapMarkerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Origin {
  id: string;
  label: string;
  shortLabel?: string;
  lat: number;
  lng: number;
  count: string;
  blurb: string;
  examples: string[];
}

interface SetMapViewOnSelectionProps {
  selectedOrigin: Origin | null;
}

function SetMapViewOnSelection({ selectedOrigin }: SetMapViewOnSelectionProps) {
  const map = useMap();

  useEffect(() => {
    if (!selectedOrigin?.lat || !selectedOrigin?.lng) return;

    map.flyTo([selectedOrigin.lat, selectedOrigin.lng], 7, {
      duration: 0.8,
    });
  }, [map, selectedOrigin]);

  return null;
}

interface BrotherhoodMapProps {
  origins: Origin[];
  selectedOrigin: Origin | null;
  onSelectOrigin: (id: string) => void;
}

export default function BrotherhoodMap({
  origins,
  selectedOrigin,
  onSelectOrigin,
}: BrotherhoodMapProps) {
  const mapCenter: [number, number] = selectedOrigin
    ? [selectedOrigin.lat, selectedOrigin.lng]
    : [39.7, -86.2];

  return (
    <MapContainer
      center={mapCenter}
      zoom={5}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[400px]"
    >
      <SetMapViewOnSelection selectedOrigin={selectedOrigin} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {origins.map((origin) => (
        <Marker
          key={origin.id}
          position={[origin.lat, origin.lng]}
          icon={mapMarkerIcon}
          eventHandlers={{
            click: () => onSelectOrigin(origin.id),
          }}
        >
          <Popup>
            <strong>{origin.label}</strong>
            <br />
            {origin.count}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
