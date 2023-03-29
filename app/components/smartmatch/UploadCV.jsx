import React,{useState} from 'react'
import styles from '../smartmatch/Main/SmartMatch.module.css'
import {CgSoftwareUpload} from 'react-icons/cg'
import {FaLinkedin} from 'react-icons/fa'
import { HiArrowLongRight } from 'react-icons/hi2'


export default function UploadCV() {
  const [pdfFile,setPdfFile] = useState(null)
  const [pdfError, setPdfError] = useState('')

 console.log(pdfFile)
 const allowedFiles = ['application/pdf']
 const uploadCV = (e) =>{
 let file = e.target.files[0]
     if(file){
       if(file&&allowedFiles.includes(file.type)){
         let reader = new FileReader()
           reader.readAsDataURL(file)
           reader.onloadend=(e)=>{
             setPdfError('')
             setPdfFile(e.target.result)
             console.log(e.target.result)
           }
       }else{
         setPdfError('Inte en giltig pdf: Vänligen välj endast PDF')
       }
     }else{
     console.log('Please select a PDF file format!')
     }
 }

  return (
    <div>
        <div className={styles.viewBox}>
            {pdfFile&&(
              <div>Din fil har laddats upp!</div>
            )}
            {!pdfFile&&<>Ingen fil har valts!</>}
        </div>
        <div className={styles.errorMsg}> {pdfError&&<span className={styles.danger}>{pdfError}</span>}</div>
        
        <div className={styles.buttons}>
          <input type='file' className={styles.fileInput} placeholder='file'
          onChange={uploadCV}
          />
          <button className={styles.button1}>
            <p>Ladda upp CV</p> 
            <CgSoftwareUpload size={24}/>
          </button>
          <button className={styles.button2}>
            <FaLinkedin size={20}/>
              <p>Connecta med LinkedIn</p> 
            <HiArrowLongRight size={20}/>
          </button>
        </div>
    </div>
  )
}
