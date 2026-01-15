'use client';
import React from 'react';
import { DottedMap } from "@/registry/magicui/dotted-map"
import { TypingAnimation } from "@/registry/magicui/typing-animation"

const markers = [
    { name: 'Arusha', lat: -3.3731, lng: 36.6853, size: 0.3 },
    { name: 'Nairobi', lat: -1.2921, lng: 36.8219, size: 0.3 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357, size: 0.3 },
    { name: 'Cape Town', lat: -33.9249, lng: 18.4241, size: 0.3 },
    { name: 'Lagos', lat: 6.5244, lng: 3.3792, size: 0.3 },
    { name: 'Addis Ababa', lat: 9.0333, lng: 38.75, size: 0.3 },
    { name: 'Casablanca', lat: 33.5731, lng: -7.5898, size: 0.3 },
    { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, size: 0.3 },
    { name: 'Dakar', lat: 14.7167, lng: -17.4677, size: 0.3 },
]

const highlights = [
    {
        lat: -6.0,
        lng: 35.0,
        radius: 4,
        color: "#947846",
    } // East Africa / Tanzania
]

const africanCountries = [
    "DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CPV", "CMR", "CAF", "TCD", "COM",
    "COG", "COD", "DJI", "EGY", "GNQ", "ERI", "SWZ", "ETH", "GAB", "GMB", "GHA",
    "GIN", "GNB", "CIV", "KEN", "LSO", "LBR", "LBY", "MDG", "MWI", "MLI", "MRT",
    "MUS", "MAR", "MOZ", "NAM", "NER", "NGA", "RWA", "STP", "SEN", "SYC", "SLE",
    "SOM", "ZAF", "SSD", "SDN", "TZA", "TGO", "TUN", "UGA", "ZMB", "ZWE"
]

export default function MapPage() {
    return (
        <div className="w-full h-auto p-8 bg-white flex flex-col items-center">
            <div className="relative h-[850px] w-full overflow-hidden shadow-inner">
                <div className="to-background absolute inset-0 bg-radial from-transparent to-70% pointer-events-none" />
                <DottedMap
                    markers={markers}
                    highlights={highlights}
                    countries={africanCountries}
                    dotColor="#d6d3d1"
                    markerColor="#947846"
                    dotRadius={0.15}
                    initialViewBox="87 38 5 5"
                    style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <TypingAnimation className="text-[#947846] text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)] px-4 text-center">
                        Tanzania the Unforgettable
                    </TypingAnimation>
                </div>
            </div>
        </div>
    )
}


