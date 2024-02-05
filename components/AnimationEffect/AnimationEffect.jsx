import React from 'react'
import { motion } from "framer-motion";


export const AnimationEffect = ({ position = "top", children, delay = 1 }) => {
    const positons = {
        top: -50,
        bottom: 50
    }
    const ypositon = positons[position]
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration: 1.2,
                ease: [0.17, 0.67, 0.83, 0.91],
                delay: delay,
            }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: ypositon, opacity: 0 },
            }}
        >
            {children}
        </motion.div>
    )
}
