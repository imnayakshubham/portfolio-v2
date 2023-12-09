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
                <Image src={logo} alt='Logo' className={styles['logo__image']} />
            </div>
            <h2 class={styles["fade-in"]}>Welcome</h2>
        </section>

    )
}
