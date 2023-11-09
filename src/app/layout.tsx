import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import NavBar from '@/components/NavBar'
import { Footer } from './components/Footer'
// import MaxWidthWrapper from './components/MaxWidthWrapper'
import Providers from './components/Providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cost Manager',
  description:
    'Servicio diseñado para simplificar el seguimiento de tus gastos diarios y ayudarte a alcanzar tus metas financieras con facilidad'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='shortcut icon' href='./favicon.svg' type='image/x-icon' />
      <Providers>
        <body
          className={`${inter.className} bg-primary text-white dark overflow-x-hidden`}
        >
          <Toaster richColors />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
