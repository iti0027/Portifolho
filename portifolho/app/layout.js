export const metadata = {
  title: 'Ítalo Cézar Portfolio',
  description: 'Personal Portfolio',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
