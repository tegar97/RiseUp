import Navbar from './component/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RiseUp',
  description: 'RiseUp is a crowdfunding platform for UKM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
