import type { Metadata } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from "react-hot-toast";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Golden Resort GKP - Best Resort Near Medical College Gorakhpur',
  description: 'Golden Resort GKP - the best resort in Gorakhpur near Medical College. Experience luxury and comfort with world-class amenities, exceptional service, and unforgettable experiences.',
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
    <html lang="en">
      <body className={`${cormorant.variable} ${poppins.variable} font-sans antialiased`}>
        <Toaster position="top-right" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
