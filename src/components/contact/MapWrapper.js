"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function FlyToLocation({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 10, { duration: 2 });
    }
  }, [coords, map]);
  return null;
}

export default function MapWrapper({ branches, activeBranch, onBranchClick }) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const customIcon = new L.DivIcon({
      className: "custom-marker",
      html: `<div class="marker-dot"><div class="marker-pulse"></div></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
    setIcon(customIcon);
  }, []);

  return (
    <MapContainer
      center={[-2.5, 118]}
      zoom={5}
      // UBAH DISINI: scrollWheelZoom={true} agar bisa zoom pakai mouse
      scrollWheelZoom={true}
      className="w-full h-full bg-[#0a0a0a]"
      style={{ background: "#0a0a0a" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {icon &&
        branches.map((branch) => (
          <Marker
            key={branch.id}
            position={branch.coords}
            icon={icon}
            eventHandlers={{
              click: () => onBranchClick(branch),
            }}
          />
        ))}

      {activeBranch && <FlyToLocation coords={activeBranch.coords} />}
    </MapContainer>
  );
}
