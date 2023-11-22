import { pt_sans } from './fonts'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Pizzon App',
  description: 'Pizza Delivery App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
