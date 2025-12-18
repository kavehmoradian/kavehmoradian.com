"use client"

import type React from "react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Sidebar } from "./sidebar"

interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const getPageTitle = () => {
    if (pathname === "/") return "Blog"
    if (pathname === "/about") return "About"
    if (pathname === "/contact") return "Contact"
    if (pathname.startsWith("/blog/")) return "Blog"
    return "Blog"
  }

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-white hover:bg-slate-700/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="text-center">
            <div className="text-white font-semibold text-lg">Kaveh Moradian</div>
            {/* <div className="text-slate-300 text-sm">Kaveh Moradian</div> */}
          </div>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="absolute top-16 left-0 w-72 h-[calc(100vh-4rem)]">
            <Sidebar onMobileClose={closeMobileMenu} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`md:hidden pt-16 ${isMobileMenuOpen ? "overflow-hidden" : ""}`}>{children}</div>

      {/* Desktop Content (unchanged) */}
      <div className="hidden md:block">{children}</div>
    </>
  )
}
