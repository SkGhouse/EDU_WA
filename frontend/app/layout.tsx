import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Educational Platform - Andhra Pradesh',
  description: 'Interactive educational platform with 3D learning experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  )
} 