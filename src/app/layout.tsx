import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/providers/theme-provider'
import { NavigationMenuDemo } from '@/components/Header'
import ActiveSectionContextProvider from '@/lib/providers/active-session-context'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Francisco Fares Portfolio',
  description: 'Generated by Francisco Fares',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <ActiveSectionContextProvider >
            <NavigationMenuDemo />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
