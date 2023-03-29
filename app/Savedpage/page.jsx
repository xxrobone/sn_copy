import SavedJobs from "../components/savedJobs/savedJobs";
import Header from '/app/components/header/Header.jsx'
import Footer from '/app/components/footer/Footer.jsx'

// styles
import styles from './savedpage.module.css'

export default function Savedpage() {
  return (
    <>
       <Header />
      <main className={styles.main}>       
        <SavedJobs />        
      </main>
      <Footer />
    </>
  );
}