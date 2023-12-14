import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react'
import styles from './Paragraph.module.scss';

const Paragraph = ({ paragraph }) => {
    const paraGraphContainer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: paraGraphContainer,
        offset: ["start 0.9", "start 0.5"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <motion.p
            ref={paraGraphContainer}
            className={styles.paragraph}
            style={{ opacity }}
        >
            {paragraph}
        </motion.p>
    )
}


export default Paragraph