'use client'
import {useState, useEffect } from 'react'
import Image from 'next/image';
import styles from "../savedJobs/savedJobs.module.css"
import { RiCloseLine } from 'react-icons/ri';



function SavedJobs() {
  const [jobs, setJobs] = useState([])

  
    const removeElement = (index) => {
      const newJobs = jobs.filter((_, i) => i !== index);
      setJobs(newJobs);
    };

  useEffect(() => {
    const myjobs = JSON.parse(localStorage.getItem('myjobs'));
    if (myjobs) {
      setJobs(myjobs);
    } else {
        setJobs([])
    }
}, [])
   
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.info}>sparade Jobb</h2>
        {jobs.map((job, idx) => (      
          <div key={idx} className={styles.container}
          >
            {/* kan comment out this part to take img away */}
                <div className={styles.imgContainer}>
              <Image
                src={job.img}
                alt={job.employer}
                fill
                sizes='width: 76px; height: 76px;'
                priority
                className={styles.img} />
            </div>
             {/* ends here */}
            <div className={styles.jobContainer}> 
              <p className={styles.title}>Företag</p>  
              <h2 className={styles.up}>{job.employer}</h2>
              <p className={styles.title}>Tjänst</p>
              <p className={styles.down}>{job.role}</p>
            </div>
            <div className={styles.clearBoth}></div>
            <RiCloseLine className={styles.closeBtn} onClick={() => removeElement(idx)} />
            </div>
        ))}
      </div>
    )
}

export default SavedJobs;
