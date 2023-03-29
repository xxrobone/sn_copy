import React from 'react'
import SmartMatch from '/app/components/smartmatch/Main/SmartMatch'
import Footer from '/app/components/footer/Footer.jsx'
import Header from '/app/components/header/Header.jsx'

export default function page() {
  return (
    <div>
      <Header />
        <SmartMatch />
      <Footer />
    </div>
  )
}
