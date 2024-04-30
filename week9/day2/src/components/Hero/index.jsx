import React from 'react'
import styles from './index.module.scss'
import HeroCardd from './HeroCardd'
const Hero = () => {
    return (
        <>
            <div className={styles["hero-section"]}> 
            <div className={styles.hero}></div>
                <HeroCardd />
            </div>
        </>
    )
}

export default Hero
