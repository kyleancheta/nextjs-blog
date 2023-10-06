import '../styles/global.css';
import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
    return (
    <main className={space_grotesk.className}>
      <Component {...pageProps} />
    </main>
    )
  }