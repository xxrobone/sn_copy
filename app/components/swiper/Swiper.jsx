"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import dynamic from "next/dynamic"
import Link from "next/link"
import { RiArrowRightLine } from 'react-icons/ri'
// components 
import SwipeButtons from "./SwipeButtons"
// styles
import styles from './Swiper.module.css'


const Swiper = () => {
  const [jobData, setJobData] = useState([])

  const removeJob = (id) => {
      const newJobs = jobData.filter(job => job.id !== id);
      setJobData(newJobs);
  }

  const removeJobFromLS = (id) => {
      const filteredJobs = jobData.filter(job => job.id !== id);
      window.localStorage.setItem('newJobs', JSON.stringify(filteredJobs))
  }

    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
    });
  

    
    const saveJob = ( employer, role, desc, quali, img, id, link) => {
                    
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        console.log(myjobs)
        let newJob;    
          if (id) {
            newJob = {
                employer, role, desc, quali, img, id, link
            }
          } else {
            return
          }
    
        myjobs.push(newJob)                
        window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
    }

      const onCardLeftScreen = (myIdentifier) => {
        console.log('id: ' + myIdentifier + ' left the screen')
  }

    
    const swiped = (dir,  employer, role, desc, quali, img, id, link) => {
       /*  console.log('id is : ' + id, ' direction is : ' + dir) */
        if (dir == 'up') {
           /*  console.log('direction is up') */
          saveJob(employer, role, desc, quali, img, id, link)
          removeJob(id)
          removeJobFromLS(id)
      } 
      if(dir == 'down') {
        removeJob(id)
        removeJobFromLS(id)
         /*  console.log('swiped down') */
      }
      if(dir == 'left') {
        removeJob(id)
        removeJobFromLS(id)
         /*  console.log('swiped left') */
      }
      if(dir == 'right') {
        removeJob(id)
        removeJobFromLS(id)
         /*  console.log('swiped right') */
      }
  }

  useEffect(() => {
    const newJobs = JSON.parse(localStorage.getItem('newJobs'));
    if (newJobs) {
      setJobData(newJobs);
    } else {
        setJobData([])
    }
}, [])
  
    return (
        <>            
        <div className={styles.cardContainer}>
                {
                jobData.map(({  employer, role, desc, quali, img, id, link }) => (
                  <div key={id}>
                    <TinderCard                            
                    className={styles.swiper}
                    onSwipe={(dir) => swiped(dir,  employer, role, desc, quali, img, id, link)}
                    onCardLeftScreen={() => onCardLeftScreen(id)}            
                    >
                      <div className={`${styles.arrowIcon} pressable`}>
                      <Link href={'/' + id}>
                        <RiArrowRightLine />
                      </Link>
              </div> 
                    <div className={styles.swiperImage} >
                        <Image
                            className={styles.img}
                            src={img}
                            alt={role}
                            priority
                            fill
                            />
                      </div>
                      <div className={styles.overlay}></div>
                        <div className={styles.info}>
                                <h2 className={styles.employer}>{employer}</h2>
                                <h4 className={styles.role}>{role}</h4>
                            
                        </div>            
                    </TinderCard>
                </div>                        
                ))
          } 
          <SwipeButtons setJobData={setJobData} saveJob={saveJob} jobData={jobData} />
        </div>
        </>
    )
}

export default Swiper
