import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SavedJobs from "../components/savedJobs/savedJobs";
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
