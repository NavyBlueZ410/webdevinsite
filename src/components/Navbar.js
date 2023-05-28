import React from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from './css/Navbar.module.css'
import { BiCustomize } from "react-icons/bi";

function Navbar() {
  return (
    <div className={styles.content}> 
        <div className={styles.logoContent}>
          <BiCustomize className={styles.logo}/>
        </div>
        <div className={styles.menuContent}>
          <Link className={styles.active} to="/">Home</Link>
          {/* <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/packgate">Packgate</Link> */}
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar