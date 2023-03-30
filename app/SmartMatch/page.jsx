import React from 'react'
import SmartMatch from '../components/smartmatch/Main/SmartMatch'
import Footer from '/app/components/footer/Footer.jsx'
import Header from '/app/components/header/Header.jsx'

import styles from './Smart.module.css'

export default function page() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SmartMatch />
      </main>
      <Footer />
    </>
  )
}
