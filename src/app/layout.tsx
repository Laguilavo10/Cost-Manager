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
    'Servicio diseñado para simplificar el seguimiento de tus gastos diarios y ayudarte a alcanzar tus metas financieras con facilidad',
  manifest: '/manifest.json'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' translate='no'>
      <link rel='shortcut icon' href='./icon-512x512.png' type='image' />
      <Providers>
        <body
          className={`${inter.className} bg-primary text-white dark overflow-x-hidden relative h-full w-full min-h-screen`}
        >
          {/* <div className="absolute -z-10 top-16 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(33,196,138,0.3),rgba(255,255,255,0))]"></div> */}
          <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#21c48a0d_1px,transparent_1px),linear-gradient(to_bottom,#21c48a0d_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10'></div>
          <Toaster richColors />
          <div className='w-full hx-full pb-10'>
          {children}

          </div>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
