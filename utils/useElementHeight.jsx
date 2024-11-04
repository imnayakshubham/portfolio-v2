import { useState, useEffect } from 'react';

const useElementHeight = (elementId) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const element = document.getElementById(elementId);
        const updateHeight = () => {
            setHeight(element.offsetHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [elementId]);

    return height;
};

export default useElementHeight