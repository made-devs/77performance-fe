"use client";

import React, { useEffect } from "react";
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

function CtrlScrollZoomGuard() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();
    const container = map.getContainer();

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (!map.scrollWheelZoom.enabled()) {
          map.scrollWheelZoom.enable();
        }
        return;
      }

      if (map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.disable();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      map.scrollWheelZoom.disable();
    };
  }, [map]);

  return null;
}

export default function MapWrapper({ branches, activeBranch, onBranchClick }) {
  // Determine custom icon outside the effect if we can, or just keep it simple.
  const customIcon =
    typeof window !== "undefined"
      ? new L.DivIcon({
          className: "custom-marker",
          html: `<div class="marker-dot"><div class="marker-pulse"></div></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })
      : null;

  return (
    <MapContainer
      center={
        activeBranch?.coords ?? branches?.[0]?.coords ?? [-6.1751, 106.865]
      }
      zoom={activeBranch ? 10 : 5}
      scrollWheelZoom={false}
      className="w-full h-full bg-[#0a0a0a]"
      style={{ background: "#0a0a0a" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {customIcon &&
        branches.map((branch) => (
          <Marker
            key={branch.id}
            position={branch.coords}
            icon={customIcon}
            eventHandlers={{
              click: () => onBranchClick(branch),
            }}
          />
        ))}

      {activeBranch && <FlyToLocation coords={activeBranch.coords} />}
      <CtrlScrollZoomGuard />
    </MapContainer>
  );
}
