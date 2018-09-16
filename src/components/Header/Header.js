//Core Dependencies
import React from 'react'
import Link from 'gatsby-link'

//Styles
import styles from './styles.module.scss'

import BookIcon from '../../assets/book.png'
import AboutIcon from '../../assets/smiling-girl.png'
import HomeIcon from '../../assets/house.png'

const Header = ({ siteTitle }) => (
  <div className={styles.header}>
    <Link to="/">
      <img className={styles.navIcon} src={HomeIcon}></img>
    </Link>
    {/* <div className={styles.navButtons}>
      <Link className={styles.navButton} to="/about/">
        <img className={styles.navIcon} src={AboutIcon}></img>
        <h3 className={styles.navText}>About</h3>
      </Link>
      <Link className={styles.navButton} to="/books/">
        <img className={styles.navIcon} src={BookIcon}></img>
        <h3 className={styles.navText}>Books</h3>
      </Link>
    </div> */}
  </div>
)

export default Header
