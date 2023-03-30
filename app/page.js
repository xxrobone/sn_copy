// import Image from 'next/image'
'use client'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import Landing from './components/landing/Landing'
import styles from './page.module.css'
import { Jobs } from '@/data/jobsArray'

const inter = Inter({
  subsets: ['latin'],
  style: 'normal',
  weight: ['200', '400', '600', '700', '800'],
})

export default function Home() {
 
  useEffect(() => {
    if (Jobs) {
      window.localStorage.setItem('newJobs', JSON.stringify(Jobs))
    } else {
      window.localStorage.setItem('newJobs', JSON.stringify([]))
  }
  }, [])
  
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Landing />
    </main>
  )
}