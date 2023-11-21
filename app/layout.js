import { PT_Sans } from 'next/font/google'
import './globals.css'

const pt = PT_Sans({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata = {
  title: 'Pizzon App',
  description: 'Pizza Delivery App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt.className}>{children}</body>
    </html>
  )
}
