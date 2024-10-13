

import { useEffect, useState } from "react";
import { cn } from "../../../utils";


export const Meteors = ({ number = 20 }) => {
    const [meteorStyles, setMeteorStyles] = useState([]);

    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            bottom: -200,
            left: Math.floor(Math.random() * window.innerWidth) + "px",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <>
            {[...meteorStyles].map((style, idx) => (
                // Meteor Head
                <span
                    key={idx}
                    className={cn(
                        "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[90deg] animate-meteor rounded-full bg-slate-500 ",
                    )}
                    style={style}
                >
                    {/* Meteor Tail */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                </span>
            ))}
        </>
    );
};
