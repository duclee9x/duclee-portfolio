"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-background/90 via-background/95 to-background/90 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
            <a href="https://cv.duclee.store" target="_blank">{"<DucLee />"}</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { key: "home", id: "home" },
              { key: "experience", id: "experience" },
              { key: "skills", id: "skills" },
              { key: "project", id: "project" },
              { key: "certificates", id: "certificates" },
              { key: "contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="relative hover:text-primary transition-all duration-300 group font-medium"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative overflow-hidden hover:bg-primary/10"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 border-border/50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className={`${
                      language === lang.code
                        ? "bg-gradient-to-r from-primary/10 to-emerald-500/10 text-primary"
                        : "hover:bg-primary/5"
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <Sun
                  className={`h-4 w-4 transition-all duration-500 ${
                    resolvedTheme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute h-4 w-4 transition-all duration-500 ${
                    resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                  }`}
                />
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-4 h-4">
                <Menu
                  className={`absolute w-4 h-4 transition-all duration-300 ${
                    isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  className={`absolute w-4 h-4 transition-all duration-300 ${
                    isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4 border-t border-border/50 pt-4 bg-gradient-to-b from-background/50 to-background/80 backdrop-blur-sm rounded-lg">
            {[
              { key: "home", id: "home" },
              { key: "experience", id: "experience" },
              { key: "skills", id: "skills" },
              { key: "project", id: "project" },
              { key: "certificates", id: "certificates" },
              { key: "contact", id: "contact" },
            ].map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-left hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-md hover:bg-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
