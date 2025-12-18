import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { BackgroundShapes } from "@/components/background-shapes"
import { MobileLayout } from "@/components/mobile-layout"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Kaveh Moradian - DevOps Engineer",
  description: "DevOps, SRE, and Cloud Engineer specializing in infrastructure automation and monitoring",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className}`}>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          <BackgroundShapes />
          <div className="relative z-10">
            {/* Desktop Sidebar - Fixed */}
            <div className="hidden md:block">
              <Sidebar />
            </div>
            <MobileLayout>
              {/* Main Content - Added left margin to account for fixed sidebar */}
              <main className="md:ml-80 min-h-screen">{children}</main>
            </MobileLayout>
          </div>
        </div>
      </body>
    </html>
  )
}
