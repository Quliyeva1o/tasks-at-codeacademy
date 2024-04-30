import React, { useState } from 'react';
import styles from './index.module.scss';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



const Navbar = () => {
const [open ,setOpen]= useState(false)

    return (
        <>
            <div className={styles.container}>
                <a href=""> <img src="../../../src/assets/images/default-logo.png" alt="" /></a>
                <FaBars className={styles.fabars} onClick={() => {
                    setOpen(true)
                }} />

            </div>
            <div className={`${open ? styles.leftmenu : `${styles.leftmenu} ${styles.dnone}`}`}>
            <IoClose className={styles.IoClose} onClick={() => {
                    setOpen(false)
                }} />

                <div>
                <a href="">Home</a>
                <a href="">About Us</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
