import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ericzxchen.com'),
  title: 'Eric Chen',
  description: 'Personal Website and Portfolio of Eric Chen.',
  openGraph: {
    title: 'Eric Chen',
    description: 'Personal Website and Portfolio of Eric Chen.',
    url: 'https://ericzxchen.com',
    siteName: 'Eric Chen',
    locale: 'en_US',
    type: 'website',
    images: ['/icons.png']
  },
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
        <footer className="w-full pt-4 pb-8 mt-auto">
          <div className="max-w-3xl mx-auto px-4 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; ericzxchen.com 2026
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <a
                href="https://cs.uwatering.com/#https://ericzxchen.com?nav=prev"
                className="hover:text-foreground transition-colors"
                aria-label="Previous site in the CS webring"
              >
                ←
              </a>
              <a
                href="https://cs.uwatering.com/#https://ericzxchen.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CS Webring"
              >
                <img
                  src="https://cs.uwatering.com/icon.black.svg"
                  alt="CS Webring"
                  className="w-6 h-auto opacity-80 dark:invert"
                />
              </a>
              <a
                href="https://cs.uwatering.com/#https://ericzxchen.com?nav=next"
                className="hover:text-foreground transition-colors"
                aria-label="Next site in the CS webring"
              >
                →
              </a>
            </div>
          </div>
        </footer>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
