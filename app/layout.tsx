import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import AnimatePresenceProvider from './components/AnimatePresenceProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
        <body className={inter.className}>
            <AnimatePresenceProvider>
                <NavBar />
                <main className='flex flex-col w-full h-full pt-[100px]'>
                    {children}
                </main>
                <Footer />
            </AnimatePresenceProvider>
        </body>
    </html>
  )
}
