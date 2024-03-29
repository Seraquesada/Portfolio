import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Serafin Quesada',
  description: 'Mi Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-ES">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
