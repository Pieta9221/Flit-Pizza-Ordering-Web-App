import { Roboto, Poppins } from 'next/font/google'
 
export const pt_sans = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "700"]
})
 
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ["100", "400", "700"]
})