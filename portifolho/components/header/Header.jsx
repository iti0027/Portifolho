import styles from "./Header.module.css";
import Link from "next/link"

import { IoMdHome } from "react-icons/io";

export default function Header(){
    return(<header className={styles.header}>
        <Link href="/">        
            <IoMdHome size={40} color='#1c1c1c' style={{backgroundColor : 'black', borderRadius : '50%', padding : '4px'}}/>
        </Link>
        <div className={styles.link}>
          <Link href="/aboutMe" className={styles.Link}>About me</Link>
          <Link href="/abilities" className={styles.Link}>Abilities</Link>
          <Link href="/projects" className={styles.Link}>Projects</Link>
          <Link href="/api" className={styles.Link}>API</Link>
        </div>
    </header>)
}