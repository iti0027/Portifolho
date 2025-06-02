import styles from "./Footer.module.css"

import { CgMail } from "react-icons/cg";

export default function Footer(){
    return(<footer className={styles.contain}>
        <div className={styles.divFooter}>
            <CgMail color="black" size={30}/>
            <p>italovercoza27@gmail.com</p>
        </div>
        <p>
            © 2025 Ítalo Cézar
        </p>
    </footer>);
}