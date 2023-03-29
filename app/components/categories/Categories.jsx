import Link from 'next/link'
import Image from "next/image"
import styles from '../categories/Categories.module.css'
import { HiArrowLongRight } from 'react-icons/hi2'
import logo from '/public/images/skelleftea_logo_svart_no-dot.png'
import ellipse from '/public/images/ellipse.png'


export default function Categories() {
  return (
    <div className={styles.main}>

<div className={styles.logo}>
        <Image src={logo}
          alt="logo"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>

      <div className={styles.ellipse}>
        <Image src={ellipse}
          alt="ellipse"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>

      <div className={styles.paragraphStyle}>
          <p className={styles.paragraph1}>sök jonn utifrån branch</p>
        </div>

      <Link href={'/.'}>
        <button className={styles.button}>
          <p>Naturbruk och djurvård</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#fff',
              marginLeft: '80px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button2}>
          <p>Industri och tillverkning</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#000',
              marginLeft: '80px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button3}>
          <p>Servicenäring</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#000',
              marginLeft: '145px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button4}>
          <p>Pedagogik</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#000',
              marginLeft: '165px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button5}>
          <p>Sjukvård</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#fff',
              marginLeft: '179px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button6}>
          <p>Bygg och hantverk</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#fff',
              marginLeft: '110px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button7}>
          <p>Data och IT</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#fff',
              marginLeft: '160px'
            }}
          />
        </button>
      </Link>

      <Link href={'/.'}>
        <button className={styles.button8}>
          <p>Transport</p>
          <HiArrowLongRight 
            size={27}
            style={{
              color: '#fff',
              marginLeft: '160px'
            }}
          />
        </button>
      </Link>



    </div>
  )
}