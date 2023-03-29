'use client';
import Image from "next/legacy/image"
import Link from 'next/link'
import styles from '../header/Header.module.css'
import styles2 from '../header/Hamburger.module.css'
import svartLogo from '/public/images/skelleftea_logo_svart.png'
// import notIcon from '/public/images/notification-icon.png'
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.row}>
      <Link href="/">
        <span className={styles.headerIcon1}>
          <Image src={svartLogo} alt="logo" />
        </span>
      </Link>
      </div>

      {/* <div className={styles.row}>
        <span className={styles.headerIcon2}>
          <Image src={notIcon} alt="logo" />
        </span>
      </div> */}
      <div className={styles.row}>
        <div className={styles.headerIcon2}>
          <nav className={styles2.navbar}>
            <ul
              className={
                isOpen === false
                  ? styles2.navMenu
                  : styles2.navMenu + ' ' + styles2.active
              }
              >
              <li className={styles2.navItem}>
                <Link href="/">
                  <span className={styles2.navLink}>Hem</span>
                </Link>
              </li>
              <li className={styles2.navItem}>
                <Link href="/Swipe">
                  <span className={styles2.navLink}>Hitta jobb</span>
                </Link>
              </li>
              <li className={styles2.navItem}>
                <Link href="/SmartMatch">
                  <span className={styles2.navLink}>SmartMatch</span>
                </Link>
              </li>
              <li className={styles2.navItem}>
                <Link href="/Savedpage">
                  <span className={styles2.navLink}>Sparade jobb</span>
                </Link>
              </li>
              <li className={styles2.navItem}>
                <Link href="">
                  <span className={styles2.navLink}>Inställningar</span>
                </Link>
              </li>
            </ul>
            <button
              className={
                isOpen === false
                  ? styles2.hamburger
                  : styles2.hamburger + ' ' + styles2.active
              }
              onClick={openMenu}
              >
              <span className={styles2.navbarButton}></span>
              <span className={styles2.navbarButton}></span>
              <span className={styles2.navbarButton}></span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}