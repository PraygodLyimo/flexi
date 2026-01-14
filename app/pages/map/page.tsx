'use client';
import React, { useEffect, useRef } from 'react';

export default function MapPage() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        let cancelled = false;

        (async function init() {
            // Dynamically load Leaflet in the browser only
            const Lmod = await import('leaflet');
            const L = (Lmod as any).default ?? Lmod;

            // Add Leaflet CSS if missing
            const cssId = 'leaflet-css';
            if (!document.getElementById(cssId)) {
                const link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
                document.head.appendChild(link);
            }

            // Ensure default icon images are available (use CDN)
            const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
            const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
            const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';
            if (L && L.Icon && L.Icon.Default) {
                L.Icon.Default.mergeOptions({
                    iconUrl,
                    iconRetinaUrl,
                    shadowUrl,
                });
            }

            if (cancelled) return;

            // Initialize map focused on Serengeti
            mapRef.current = L.map(mapContainer.current!, {
                scrollWheelZoom: false,
            }).setView([-2.3333, 34.8333], 10);

            // Restrict the map to a focused bounding box
            const focusedBounds = [[-4.0, 33.0], [-1.0, 36.5]] as any;
            mapRef.current.setMaxBounds(focusedBounds);
            mapRef.current.setMinZoom(8);

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 19,
            }).addTo(mapRef.current);

            // Add markers for major northern parks
            const parks = [
                { name: 'Kilimanjaro National Park', coords: [-3.0674, 37.3556] },
                { name: 'Mount Meru National Park', coords: [-3.2333, 36.75] },
                { name: 'Arusha National Park', coords: [-3.3558, 36.2081] },
                { name: 'Serengeti National Park', coords: [-2.3333, 34.8333] },
                { name: 'Ngorongoro Conservation Area', coords: [-2.5, 35.2833] },
            ];

            parks.forEach((park) => {
                L.marker(park.coords as any).bindPopup(park.name).addTo(mapRef.current);
            });
        })();

        return () => {
            cancelled = true;
            if (mapRef.current) {
                try {
                    mapRef.current.remove();
                } catch (e) {
                    // ignore
                }
            }
        };
    }, []);

    return (
        <div className="w-full h-screen p-6">
            <div ref={mapContainer} className="w-full h-full rounded-lg overflow-hidden shadow-lg" />
        </div>
    );
}