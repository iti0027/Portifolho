import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";

import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
        <div className="container">
          <Header />
        <div className={styles.card}>
          <img src="/minhaFoto.png" width={200} height="auto"/>
          <div>
            <h1>Ítalo Cézar de Aquino Verçoza</h1>
            <p className={styles.paragraph}>Infrastructure engineer / Developer</p>
            <div>
              <FaSquareGithub size={60} color='black'/>
              <IoLogoLinkedin size={60} color='black'/>
              <FaInstagramSquare size={60} color='black'/>
            </div>
            <p>Thank you for visit my web page. Feel free to navigate on each page, but be careful, you run the risk of not wanting to leave.</p>
          </div>
        </div>
        <Footer />
    </div>
  );
}
