'use client'
import Link from 'next/link';
import {useState, useEffect } from 'react'
import Image from 'next/image';
import styles from "../savedJobs/savedJobs.module.css"
import { RiCloseLine } from 'react-icons/ri';



function SavedJobs() {
  const [jobs, setJobs] = useState([])
  
  const removeElement = (id, index) => {
      // remove from state
      const newJobs = jobs.filter((_, i) => i !== index);
      setJobs(newJobs);


      // remove from ls
    const j = JSON.parse(localStorage.getItem('myjobs'));
    
      const filteredJobs = j.filter(job => job.id !== id);
      window.localStorage.setItem('myjobs', JSON.stringify(filteredJobs))
      
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
            <Link href={'/' + job.id} key={idx} className={styles.linkToJob} 
            >
              </Link>
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
            <RiCloseLine className={styles.closeBtn} onClick={() => removeElement(job.id, idx)} />
            </div>
        ))}
      </div>
    )
}

export default SavedJobs;
