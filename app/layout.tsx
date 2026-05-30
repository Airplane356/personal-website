import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eric Chen',
  description: 'Personal Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <div className="max-w-3xl mx-auto px-4 flex-1 w-full">
          <Header />
          <main>{children}</main>
        </div>
        <footer className="w-full py-8 mt-auto">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-sm text-muted-foreground">
              &copy; ericzxchen.com 2026
            </p>
          </div>
        </footer>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
