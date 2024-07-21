import type { AppProps } from 'next/app'
import "./globals.css"
import {Inter} from "@next/font/google"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
})

 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.variable}>
      <Component {...pageProps} />
    </main>
  )
}