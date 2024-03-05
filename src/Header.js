import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import styles from './css/Header.module.css'

export default function 
() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logoContainer}>
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo' className={styles.logo}/>
      </Link>
      <form className={styles.searchBar}>
        <input type="text" placeholder='Search' className={styles.searchInput}/>
        <button className={styles.searchButton}>Search</button>
      </form>
      <Link to="/login"  className={styles.headerButton}>
        <span className={styles.headerBtnText}>Login/Sign Up</span>
      </Link>
      <Link to="/login"  className={styles.headerButton}>
        <span className={styles.headerBtnText}>Login/Sign Up</span>
      </Link>
    </div>
  )
}
