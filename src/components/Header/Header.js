//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <Link to="/">
      <h3 className={styles.navText}>Home</h3>
    </Link>
    <div className={styles.navButtons}>
      <Link className={styles.navButton} to="/about/">
        <h3 className={styles.navText}>Philosophy</h3>
      </Link>
      <Link className={styles.navButton} to="/books/">
        <h3 className={styles.navText}>Books</h3>
      </Link>
    </div>
  </div>
)

export default Header
