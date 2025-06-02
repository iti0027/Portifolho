import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"
import styles from "./page.module.css"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="container">
      <Header />
      <div className="card">
        <h1>Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div className="card" style={{ width: '200px' }}>
            <p>🎲 Jogo do Dado</p>
            <a href="https://dado-practice.vercel.app/" target="_blank" className={styles.link}>Play</a>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>🔐 Jogo da Senha</p>
            <Link href="/game" className={styles.link}>Play</Link>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>🔢 Conversor de Medidas</p>
            <a href="https://conversor-one-rust.vercel.app/" target="_blank" className={styles.link}>Play</a>
          </div>
          <div className="card" style={{ width: '200px' }}>
            <p>GitHub</p>
            <a href="https://github.com/iti0027" target="_blank" className={styles.link}>Play</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}