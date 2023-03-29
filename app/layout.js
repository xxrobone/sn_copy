import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Swipe North - Team 1',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}