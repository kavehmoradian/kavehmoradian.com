"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Github,
  Instagram,
  Linkedin,
  ExternalLink,
  User,
  BookOpen,
  Mail,
  MapPin,
  Download,
  Circle,
  Copy,
  Check,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface SidebarProps {
  onMobileClose?: () => void
}

export function Sidebar({ onMobileClose }: SidebarProps) {
  const pathname = usePathname()
  const [emailCopied, setEmailCopied] = useState(false)

  const navItems = [
    { href: "/", icon: BookOpen, label: "BLOG" },
    { href: "/about", icon: User, label: "ABOUT" },
    { href: "/contact", icon: Mail, label: "CONTACT" },
  ]

  const handleNavClick = () => {
    if (onMobileClose) {
      onMobileClose()
    }
  }

  const isActiveNavItem = (href: string) => {
    if (href === "/") {
      // Blog section is active for homepage and all blog posts
      return pathname === "/" || pathname.startsWith("/blog/")
    }
    return pathname === href
  }

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("kave.moradian@gmail.com")
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email: ", err)
    }
  }

  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border pt-20 md:pt-6 px-4 md:px-6 pb-4 md:pb-6 flex flex-col overflow-y-auto z-40">
      {/* Profile Section */}
      <div className="mb-6 md:mb-8">
        <Avatar className="w-16 md:w-24 h-16 md:h-24 mb-3 md:mb-4 ring-2 ring-sidebar-border">
          <AvatarImage src="/kaveh-profile-photo.jpeg" alt="Profile" />
          <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">KM</AvatarFallback>
        </Avatar>
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-sidebar-foreground">Kaveh Moradian</h1>
        <p className="text-muted-foreground text-sm mb-4 md:mb-6">DevOps | SRE | Cloud Engineer</p>

        {/* Social Links */}
        <div className="flex gap-2 mb-6 md:mb-8">
          <Link href="https://github.com/kavehmoradian/" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="ghost"
              className="p-2 hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
            >
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
            onClick={copyEmailToClipboard}
          >
            <Mail className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
          >
            <Instagram className="w-4 h-4" />
          </Button>
          <Link href="https://www.linkedin.com/in/kaveh-moradian/" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="ghost"
              className="p-2 hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
          </Link>
          <Button
            size="sm"
            variant="ghost"
            className="p-2 hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-foreground"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 md:space-y-4 text-sm">
          <div>
            <p className="text-muted-foreground uppercase text-xs mb-1 font-medium">EMAIL</p>
            <button
              onClick={copyEmailToClipboard}
              className="flex items-center gap-2 text-sidebar-primary hover:text-sidebar-primary/80 transition-colors cursor-pointer group"
            >
              <span className="break-all">kave.moradian@gmail.com</span>
              {emailCopied ? (
                <Check className="w-3 h-3 text-emerald-500" />
              ) : (
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
            {emailCopied && (
              <p className="text-emerald-500 text-xs mt-1 animate-fade-in">✨ Email copied to clipboard!</p>
            )}
          </div>
          <div>
            <p className="text-muted-foreground uppercase text-xs mb-1 font-medium">CV</p>
            <Link href="/Kaveh_Moradian_CV.pdf" download="Kaveh_Moradian_CV.pdf" target="_blank">
              <Button variant="link" className="p-0 h-auto text-sidebar-primary text-sm hover:text-sidebar-primary/80">
                Download <Download className="w-3 h-3 ml-1" />
              </Button>
            </Link>
          </div>
          <div>
            <p className="text-muted-foreground uppercase text-xs mb-1 font-medium">LOCATION</p>
            <div className="flex items-center gap-1 text-sidebar-foreground">
              <span>Tehran, Iran</span>
              <MapPin className="w-3 h-3" />
            </div>
          </div>
          <div>
            <p className="text-muted-foreground uppercase text-xs mb-1 font-medium">STATUS</p>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-emerald-500 text-emerald-500" />
              <span className="text-sidebar-foreground text-xs">Available for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = isActiveNavItem(item.href)

            return (
              <Link key={item.href} href={item.href} onClick={handleNavClick}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    isActive
                      ? "bg-sidebar-primary/20 hover:bg-sidebar-primary/30 text-sidebar-primary border border-sidebar-primary/20"
                      : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
