export const metadata = {
  title: 'Ítalo Cézar Portfolio',
  description: 'Personal Portfolio',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <a href="/about">About me</a>
          <a href="/abilities">Abilities</a>
          <a href="/projects">Projects</a>
        </header>
        {children}
        <footer className="footer">
          © 2025 Ítalo Cézar — italovercoza27@gmail.com
        </footer>
      </body>
    </html>
  )
}
