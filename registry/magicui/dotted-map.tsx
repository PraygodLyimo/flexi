import * as React from "react"
import { createMap } from "svg-dotted-map"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Marker {
    lat: number
    lng: number
    size?: number
}

interface Highlight {
    lat: number
    lng: number
    radius: number
    color: string
}

export interface DottedMapProps extends React.SVGProps<SVGSVGElement> {
    width?: number
    height?: number
    mapSamples?: number
    markers?: Marker[]
    highlights?: Highlight[]
    countries?: string[]
    dotColor?: string
    markerColor?: string
    dotRadius?: number
    stagger?: boolean
    initialViewBox?: string
}

export function DottedMap({
    width = 150,
    height = 75,
    mapSamples = 5000,
    markers = [],
    highlights = [],
    countries = [],
    markerColor = "#FF6900",
    dotRadius = 0.2,
    stagger = true,

    className,
    style,
    initialViewBox,
    ...props
}: DottedMapProps) {
    const { points, addMarkers } = React.useMemo(() => createMap({
        width,
        height,
        mapSamples,
        // ...(countries.length > 0 ? { countries } : {}),
    }), [width, height, mapSamples])

    const processedMarkers = React.useMemo(() => addMarkers(markers), [addMarkers, markers])
    const processedHighlights = React.useMemo(() => addMarkers(highlights.map(h => ({ lat: h.lat, lng: h.lng }))), [addMarkers, highlights])

    // Compute stagger helpers in a single, simple pass
    const { xStep, yToRowIndex } = React.useMemo(() => {
        const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x)
        const rowMap = new Map<number, number>()
        let step = 0
        let prevY = Number.NaN
        let prevXInRow = Number.NaN

        for (const p of sorted) {
            if (p.y !== prevY) {
                // new row
                prevY = p.y
                prevXInRow = Number.NaN
                if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size)
            }
            if (!Number.isNaN(prevXInRow)) {
                const delta = p.x - prevXInRow
                if (delta > 0) step = step === 0 ? delta : Math.min(step, delta)
            }
            prevXInRow = p.x
        }

        return { xStep: step || 1, yToRowIndex: rowMap }
    }, [points])

    const pointsBounds = React.useMemo(() => {
        if (points.length === 0) return { x: 0, y: 0, w: width, h: height }
        const minX = Math.min(...points.map(p => p.x))
        const minY = Math.min(...points.map(p => p.y))
        const maxX = Math.max(...points.map(p => p.x))
        const maxY = Math.max(...points.map(p => p.y))
        return { x: minX, y: minY, w: maxX - minX, h: maxY - minY }
    }, [points, width, height])

    const finalViewBox = countries.length > 0
        ? `${pointsBounds.x - 10} ${pointsBounds.y - 10} ${pointsBounds.w + 20} ${pointsBounds.h + 20}`
        : `0 0 ${width} ${height}`

    return (
        <motion.svg
            viewBox={initialViewBox || finalViewBox}
            animate={{ viewBox: finalViewBox }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
            className={cn("text-gray-500 dark:text-gray-500", className)}
            style={{ width: "100%", height: "100%", ...style }}
            {...(props as any)}
        >

            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="0.2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            {points.map((point, index) => {
                const rowIndex = yToRowIndex.get(point.y) ?? 0
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0

                // Find if this point is within any highlight region
                const activeHighlightIndex = processedHighlights.findIndex((h, hIdx) => {
                    const dx = h.x - point.x
                    const dy = h.y - point.y
                    return Math.sqrt(dx * dx + dy * dy) < highlights[hIdx].radius
                })

                const isHighlighted = activeHighlightIndex !== -1
                const color = isHighlighted ? highlights[activeHighlightIndex].color : "currentColor"

                return (
                    <motion.circle
                        key={`${point.x}-${point.y}-${index}`}
                        cx={point.x + offsetX}
                        cy={point.y}
                        r={isHighlighted ? dotRadius * 1.5 : dotRadius}
                        fill={color}
                        filter={isHighlighted ? "url(#glow)" : undefined}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: (index % 100) * 0.005 + 0.5,
                        }}
                    />
                )
            })}
            {processedMarkers.map((marker, index) => {
                const rowIndex = yToRowIndex.get(marker.y) ?? 0
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0
                return (
                    <React.Fragment key={`marker-group-${index}`}>
                        {/* Pulse effect for marker */}
                        <motion.circle
                            cx={marker.x + offsetX}
                            cy={marker.y}
                            r={marker.size ? marker.size * 2.5 : dotRadius * 5}
                            fill={markerColor}
                            initial={{ opacity: 0.5, scale: 0.5 }}
                            animate={{ opacity: 0, scale: 2 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                        />
                        {/* Core marker */}
                        <motion.circle
                            cx={marker.x + offsetX}
                            cy={marker.y}
                            r={marker.size ?? dotRadius * 2}
                            fill={markerColor}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 2.5 + index * 0.1 }}
                        />
                    </React.Fragment>
                )
            })}
        </motion.svg>
    )
}


