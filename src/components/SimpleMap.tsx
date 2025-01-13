'use client'

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface SimpleMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ onLocationSelect }) => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationSelect(latitude, longitude);

          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 13); // Centrar el mapa en la ubicación del usuario
          }

          if (markerRef.current) {
            markerRef.current.setLatLng([latitude, longitude]);
          } else {
            markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current!);
          }
        },
        (error) => {
          console.error('Error al obtener la ubicación:', error);
        }
      );
    } else {
      console.error('La geolocalización no es compatible con este navegador.');
    }
  };

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [0, 0],
        zoom: 12,
        scrollWheelZoom: false
      }).setView([4.7110, -74.0721], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      mapRef.current.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        onLocationSelect(lat, lng);

        if (markerRef.current) {
          markerRef.current.setLatLng(e.latlng);
        } else {
          markerRef.current = L.marker(e.latlng).addTo(mapRef.current!);
        }
      });

      // Llamar a locateUser al cargar el mapa
      locateUser();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={locateUser}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px', // Cambiado para que esté a la derecha
          zIndex: 1000,
          backgroundColor: '#000', // Fondo negro
          color: '#fff',
          border: 'none',
          borderRadius: '50%', // Hace que el botón sea circular
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
      >
      <FontAwesomeIcon icon={faMapMarkerAlt} />

      </button>
      <div id="map" style={{ height: '200px', width: '100%' }} />
    </div>
  );
};

export default React.memo(SimpleMap);
