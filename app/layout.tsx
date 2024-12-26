import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'InnohiveLabs - Premium Web Development & Design',
  description: 'Elevate your digital presence with InnohiveLabs. We create stunning websites and user experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

