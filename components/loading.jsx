import React from 'react'
import styles from "../styles/Loading.module.scss"
import logo from "../public/ns.png"
import Image from 'next/image'

export const Loading = () => {
    return (
        <section class={styles["banner"]}>
            <div className={styles["loader__container"]}>
                <div className={styles['loader']}>
                </div>
            </div>
            <h2 className={styles["banner__title"]}>Hi there</h2>
            <h3 className={styles["banner__sub__title"]}>Welcome</h3>

        </section>

    )
}
