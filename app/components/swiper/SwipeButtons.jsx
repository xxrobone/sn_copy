import React from 'react'
import { VscRefresh } from 'react-icons/vsc'
import { BsBookmark } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { MdOutlineRefresh } from 'react-icons/md';
import styles from './SwipeButtons.module.css'

const SwipeButtons = ({ setJobData, saveJob, jobData }) => {
  
  const { employer, role, desc, quali, img, id, link } = jobData

    const Refresh = () => {
      console.log('to refresh jobs / cards');
      setJobData(Jobs)
      };
    
      const doSomething = () => {
        console.log('function to remove job from array goes here');
      };
    
      function handleSave() {
        console.log('Function for saving job to db or localstorage, cookie etc');
        saveJob(employer, role, desc, quali, img, id, link)
    }
    
  return (
    <div className={styles.iconsWrapper}>
    <div className={styles.iconWrapper}>
      <VscRefresh onClick={() => Refresh()} />
    </div>
    <div className={styles.iconWrapper}>
      <BsBookmark onClick={() => handleSave(employer, role, desc, quali, img, id, link)} />
    </div>
    <div className={styles.iconWrapper}>
      <VscClose onClick={() => doSomething()} />
    </div>
  </div>
  )
}

export default SwipeButtons