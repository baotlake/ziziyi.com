import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ziziyi —— 孜孜以求',
  description: '我们以认真、孜孜不倦的态度，精心打造每一个应用和网页，助推无数梦想翱翔远方',
  icons: {
    icon: '/ziziyi.png',
    shortcut: '/ziziyi.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
