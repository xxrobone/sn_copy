import React from 'react'
import Image from 'next/image'
import styles from './TopBar.module.css'
import { motion } from 'framer-motion'
import swipeHandIcon from '/public/images/swipe-hand-icon.png'

// swipe up arrow

const SwipeUpArrow = () => {
    return (
        <motion.div
          className={styles.arrow_icon}                 
                    animate={{y: [0, 0, -5, 0, 0, 0, -5, 0], scale: 0.75}}
                    transition={{ repeat: Infinity, repeatDelay: 4 }}
      >
        <Image 
          className={styles.swipeHandIcon}
          src={swipeHandIcon} 
          alt="project" 
          width={47} 
          height={47} 
          />
                      {/* <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="30" fill="black"/>
  <path d="M17 36.0435L30.0435 23L43.087 36.0435" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg> */}
                    </motion.div>
      
    )
  }

const TopBar = () => {
  return (
      <div className={styles.topbar}>
          <h3>swipe</h3>
          <SwipeUpArrow />
          <h3>north</h3>
    </div>
  )
}

export default TopBar