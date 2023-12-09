import React, { useEffect, useState } from 'react'

export const useZoom = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    useEffect(() => {
        const handleZoomChange = () => {
            const currentZoom = window.devicePixelRatio;
            setZoomLevel(currentZoom > 1 ? currentZoom / 2 : currentZoom * 2);
        };

        // Listen for zoom changes
        window.addEventListener('resize', handleZoomChange);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleZoomChange);
        };
    }, []);
    return { zoomLevel }
}
