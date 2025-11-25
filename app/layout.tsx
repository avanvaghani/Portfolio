import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import TechBackground from '@/components/TechBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Avan Vaghani - SDET Portfolio',
  description: 'Professional portfolio showcasing my testing and automation skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-dark transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TechBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 