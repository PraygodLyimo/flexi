(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/flexi/app/destinations/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DestinationsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flexi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/flexi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function DestinationsPage() {
    const fadeInUp = {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.6
        }
    };
    const staggerContainer = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        },
        viewport: {
            once: true
        }
    };
    const staggerItem = {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6
        }
    };
    const destinations = [
        {
            id: 1,
            name: 'Serengeti',
            description: 'Experience the world\'s greatest wildlife spectacle - the Serengeti ecosystem spans 14,750 square kilometers of pristine African wilderness.',
            fullDescription: 'The Serengeti is home to the largest terrestrial mammal migration on Earth. Witness the Great Migration as over 2 million wildebeest and zebras traverse the plains. The park is famous for its exceptional concentration of predators and the Big Five.',
            icon: '🦁',
            highlights: [
                'Big Five',
                'Great Migration',
                'Wildebeest Herds',
                'Lion Prides',
                'Scenic Drives'
            ],
            bestTime: 'June - September (Migration)',
            visitors: '100,000+/year',
            color: 'from-amber-600 to-amber-700',
            activities: [
                'Game Drives',
                'Hot Air Balloon Safari',
                'Walking Safaris',
                'Photography Tours'
            ]
        },
        {
            id: 2,
            name: 'Ngorongoro',
            description: 'Africa\'s largest intact caldera, this UNESCO World Heritage Site is a nature reserve of unparalleled beauty and biodiversity.',
            fullDescription: 'The Ngorongoro Conservation Area features the famous volcanic crater, one of the most densely concentrated wildlife populations in Africa. The crater floor hosts a remarkable ecosystem with predators and prey in close proximity.',
            icon: '🦓',
            highlights: [
                'Crater Views',
                'Black Rhinos',
                'Flamingos',
                'Leopards',
                'Scenic Overlooks'
            ],
            bestTime: 'Year-round',
            visitors: '80,000+/year',
            color: 'from-green-600 to-green-700',
            activities: [
                'Crater Tours',
                'Cultural Visits',
                'Nature Walks',
                'Photography'
            ]
        },
        {
            id: 3,
            name: 'Tarangire',
            description: 'Known as "Land of Elephants," Tarangire National Park is home to some of Africa\'s largest elephant herds.',
            fullDescription: 'Tarangire is famous for its iconic baobab trees and the Tarangire River, which attracts massive elephant herds during the dry season. The park offers exceptional wildlife viewing opportunities with fewer tourists than other parks.',
            icon: '🐘',
            highlights: [
                'Elephant Herds',
                'Baobab Trees',
                'Lion Prides',
                'Giraffes',
                'Bird Paradise'
            ],
            bestTime: 'June - October (Dry Season)',
            visitors: '60,000+/year',
            color: 'from-yellow-600 to-yellow-700',
            activities: [
                'Game Drives',
                'Bush Walks',
                'Bird Watching',
                'Photography'
            ]
        },
        {
            id: 4,
            name: 'Lake Manyara',
            description: 'Famous for tree-climbing lions and stunning landscapes, Lake Manyara is a compact park with great wildlife diversity.',
            fullDescription: 'Lake Manyara National Park is a rift valley lake surrounded by steep cliffs and riverine forests. The park is famous for its tree-climbing lions and massive flocks of flamingos that can number in the millions.',
            icon: '🦅',
            highlights: [
                'Tree Lions',
                'Flamingos',
                'Hippos',
                'Giraffes',
                'Scenic Views'
            ],
            bestTime: 'Year-round',
            visitors: '40,000+/year',
            color: 'from-blue-600 to-blue-700',
            activities: [
                'Game Drives',
                'Bird Watching',
                'Nature Walks',
                'Photography'
            ]
        },
        {
            id: 5,
            name: 'Kilimanjaro',
            description: 'Africa\'s highest peak at 5,895 meters, Mount Kilimanjaro is the world\'s highest free-standing mountain.',
            fullDescription: 'Climbing Kilimanjaro is the ultimate African adventure. The trek passes through five distinct ecological zones from rainforest to alpine desert, offering trekkers an incredible journey with stunning views and the challenge of summiting Africa\'s tallest peak.',
            icon: '⛰️',
            highlights: [
                'Summit Trek',
                '5 Ecological Zones',
                'Alpine Meadows',
                'Snow Peak',
                'Uhuru Peak'
            ],
            bestTime: 'January - March, July - September',
            visitors: '45,000+/year',
            color: 'from-indigo-600 to-indigo-700',
            activities: [
                'Mountain Trekking',
                'Guided Climbs',
                'Acclimatization Hikes'
            ]
        },
        {
            id: 6,
            name: 'Zanzibar',
            description: 'The spice islands offer pristine beaches, historical Stone Town, and world-class diving.',
            fullDescription: 'Zanzibar is a tropical paradise with white sand beaches, turquoise waters, and a rich cultural heritage. Explore the historic Stone Town with its narrow streets and Arab architecture, or relax on pristine beaches and enjoy water sports.',
            icon: '🏝️',
            highlights: [
                'Beaches',
                'Stone Town',
                'Spice Tours',
                'Diving',
                'Snorkeling'
            ],
            bestTime: 'June - October',
            visitors: '120,000+/year',
            color: 'from-cyan-600 to-cyan-700',
            activities: [
                'Beach Relaxation',
                'Snorkeling',
                'Diving',
                'Spice Tours',
                'Cultural Tours'
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white pt-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-linear-to-br from-gray-900 to-gray-800 text-white py-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-bold mb-4",
                                children: "Explore Our Destinations"
                            }, void 0, false, {
                                fileName: "[project]/flexi/app/destinations/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-300",
                                children: "Discover Tanzania's most iconic safari and adventure locations"
                            }, void 0, false, {
                                fileName: "[project]/flexi/app/destinations/page.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/flexi/app/destinations/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/flexi/app/destinations/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                            variants: staggerContainer,
                            initial: "initial",
                            whileInView: "whileInView",
                            viewport: {
                                once: true
                            },
                            children: destinations.map((destination)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `bg-linear-to-br ${destination.color} rounded-xl overflow-hidden shadow-lg transition-all duration-300 text-white`,
                                    variants: staggerItem,
                                    whileHover: {
                                        y: -5,
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-6xl mb-4",
                                                    children: destination.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-4xl font-bold mb-3",
                                                    children: destination.name
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/90 mb-6 text-lg",
                                                    children: destination.description
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 mb-6 leading-relaxed",
                                                    children: destination.fullDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/20 rounded-lg p-4 mb-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-white/70 mb-1",
                                                                        children: "BEST TIME TO VISIT"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-medium",
                                                                        children: destination.bestTime
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-semibold text-white/70 mb-1",
                                                                        children: "ANNUAL VISITORS"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-medium",
                                                                        children: destination.visitors
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/flexi/app/destinations/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white/70 mb-3",
                                                            children: "HIGHLIGHTS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: destination.highlights.map((highlight, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full",
                                                                    children: highlight
                                                                }, idx, false, {
                                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                    lineNumber: 168,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-white/70 mb-3",
                                                            children: "ACTIVITIES"
                                                        }, void 0, false, {
                                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2",
                                                            children: destination.activities.map((activity, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center text-white",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mr-2",
                                                                            style: {
                                                                                color: '#947846'
                                                                            },
                                                                            children: "✓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                            lineNumber: 184,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        activity
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "bg-black/20 px-8 py-4 flex justify-between items-center transition-colors cursor-pointer",
                                            whileHover: {
                                                backgroundColor: 'rgba(0, 0, 0, 0.4)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Plan Your Trip"
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$flexi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: "→"
                                                }, void 0, false, {
                                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/flexi/app/destinations/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, destination.id, true, {
                                    fileName: "[project]/flexi/app/destinations/page.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/flexi/app/destinations/page.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/flexi/app/destinations/page.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/flexi/app/destinations/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/flexi/app/destinations/page.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = DestinationsPage;
var _c;
__turbopack_context__.k.register(_c, "DestinationsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=flexi_app_destinations_page_tsx_861d8021._.js.map