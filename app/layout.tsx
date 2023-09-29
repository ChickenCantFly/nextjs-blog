import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog tutorial',
  description: 'Blog tutorial by pixegami',
}
const header = (
  <header className="text-center bg-slate-800 p-6 my-6 rounded-md">
    <div>
      <Image src="/logo.png" width={60} height={60} className='mx-auto' alt="logo"></Image>
      <Link href="/">
        <h1 className="text-3xl font-bold underline text-white font-blod">Blog tutorial</h1>
      </Link>
      <p className='text-slate-300'>Welcome to the jungle.</p>
      
    </div>
  </header>
)

const footer = (
  <footer>
    <div className='text-center text-slate-400 border-t border-slate-500 mt-6 py-6'>
      <p>Developed by Vitaminless</p>
    </div>
  </footer>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-2xl px-6">
          {header}      
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
