import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Instrument_Sans } from 'next/font/google'
import { site } from '@/content/site'
import Loader from '@/components/layout/Loader'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/motion/SmoothScroll'
import './styles/globals.css'

/*
  The reference site pairs a high-contrast display serif with a neutral
  grotesque. These two are the closest open-licence equivalents, so the
  template can ship the fonts in the repo without a licence problem —
  swap the imports for the client's licensed faces when there are any.
*/
const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Instrument_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: site.brand.fullName,
    template: `%s — ${site.brand.titleSuffix}`,
  },
  description: site.brand.description,
  openGraph: {
    title: site.brand.fullName,
    description: site.brand.description,
    locale: site.brand.locale,
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f4f1ec',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.brand.lang} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Loader />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
