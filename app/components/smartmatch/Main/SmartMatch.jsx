'use client'
import Image from 'next/image'
import styles from '../Main/SmartMatch.module.css'
import UploadCV from '../UploadCV'
import halfEllipse from '/public/images/circlesImage/ellipse-half.png'

export default function SmartMatch() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.halfCircle}>
        <Image
          src={halfEllipse}
          alt="half circle"
          priority='true'
          /> 
      </div>
        <h1>SmartMatch©</h1>
        <p>
           Ladda upp ditt CV och hämta in LinkedIn för att förfina dina matchningar
        </p>
        <div>
          <UploadCV />
        </div>
    </div>
  )
}
