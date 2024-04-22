import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import closeIcon from '../../images/closeIcon.png'
import menuIcon from '../../images/menuIcon.png'
function Navbar() {

    const[menuOpen, setMenuopen]=useState(false);
    const iconSrc=menuOpen? closeIcon:menuIcon;
  return (
    <div className={styles.navbar}>
      <Link className={styles.title} to='/'>SP</Link>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={iconSrc} onClick={()=>setMenuopen(!menuOpen)}></img>
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuopen(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
