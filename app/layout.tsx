import type { Metadata } from 'next'
import { Sora, Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ModalProvider } from '@/context/modal-context'
import { ModalContainer } from '@/components/modals/modal-container'
import './globals.css'

const sora = Sora({ subsets: ["latin"], variable: '--font-sora' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Aanya - Enterprise Transformation & Digital Solutions',
  description: 'Delivering world-class enterprise transformation, digital solutions, and strategic consulting to global organizations',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ModalProvider>
          {children}
          <ModalContainer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ModalProvider>
      </body>
    </html>
  )
}
