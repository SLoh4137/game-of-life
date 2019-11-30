/**
 * Courtesy of QoP from Stack Overflow
 * https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
 * @flow
 */
import { useState, useEffect } from "react";

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    } else {
        return {
            width: 0,
            height: 0,
        };
    }
}

function convert(cellSize, spacing) {
    const { width, height } = getWindowDimensions();
    const size = cellSize + spacing * 2;
    const numRow = Math.floor(height / size);
    const numCol = Math.floor(width / size);
    return { numRow, numCol };
}

export default function useDimensions(cellSize: number, spacing: number, allowResize: boolean) {
    const [universeDimensions, setUniverseDimensions] = useState(convert(cellSize, spacing));

    useEffect(() => {
        if (allowResize) {
            const handleResize = () => {
                setUniverseDimensions(convert(cellSize, spacing));
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [cellSize, spacing, allowResize]);

    return universeDimensions;
}
