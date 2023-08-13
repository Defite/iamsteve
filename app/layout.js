import Link from 'next/link'
import './global.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

import Sprite from '@/components/icon/sprite'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bvl2qse.css" />
      </head>
      <body
        className={`antialiased min-h-screen bg-neutral-01-100 dark:bg-slate-950 text-slate-900 dark:text-slate-50`}
      >
        <Sprite />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="grid layout gap-x-8 gap-y-0">
            <div className="col-content flex items-center justify-between py-12 px-8 -mx-8">
              <ModeToggle />
              <nav className="ml-auto text-sm font-medium space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
          </header>
          <main className="grid layout gap-x-8 gap-y-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
