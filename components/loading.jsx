import React from 'react'
import { useEffect, useState } from 'react';
import styles from "../styles/Loading.module.scss"
import { motion } from 'framer-motion';
import { opacity, slideUp } from '../utils/animation';

const words = ["नमस्ते", "Hello", "Guten tag", "Hallo", "Bonjour", "Ciao", "Olà", "やあ", "Hallå"]


export const Loading = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1500 : 200)
    }, [index])

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        // <section className={styles["banner"]}>
        //     <div className={styles["loader__container"]}>
        //         <div className={styles['loader']}>
        //         </div>
        //     </div>
        //     <h2 className={styles["banner__title"]}>Hi there</h2>
        //     <h3 className={styles["banner__sub__title"]}>Welcome</h3>
        // </section>

        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    )
}
