"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import smallAvatar from "@/public/small_avatar.jpg"
import avatar from "@/public/avatar.jpg"
export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Full-size Background Image with Opacity Control */}
      <div className="absolute inset-0 -z-5">
        <Image
          src={avatar}
          alt="Background"
          fill
          className={`object-scale-down  ${isHovered ? "opacity-80" : "hidden"}`}
          priority
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/56 via-background/30 to-background/70 dark:from-background/40 dark:via-background/34 dark:to-background/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 via-emerald-400/5 to-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/5 via-primary/8 to-green-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/15 via-emerald-500/10 to-green-400/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Circular Hover Area */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="relative w-40 h-40 mx-auto mb-6 cursor-pointer group"
              onMouseEnter={() => {setIsHovered(true); setIsVisible(false)}}
              onMouseLeave={() => {setIsHovered(false); setIsVisible(true)}}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-green-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-background rounded-full transition-all duration-300 group-hover:inset-1"></div>
              <Image
                src={smallAvatar}
                alt="Profile"
                fill
                style={{
                  objectFit: 'cover',         // Zoom and crop
                  objectPosition: 'center',   // Focus on center (change if needed)
                }}
                className="absolute inset-3 rounded-full object-cover transition-all duration-300 group-hover:inset-2"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background animate-pulse shadow-lg"></div>
              {/* Enhanced Hover Ring Effect */}
              <div
                className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  isHovered ? "scale-110 border-primary/60 shadow-lg shadow-primary/25" : "scale-100 border-primary/20"
                }`}
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
                {t("name")}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">{t("title")}</h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{t("description")}</p>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3 bg-gradient-to-r from-primary via-emerald-500 to-green-600 hover:from-primary/90 hover:via-emerald-500/90 hover:to-green-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t("getInTouch")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://raw.githubusercontent.com/duclee9x/duclee-portfolio/main/public/cv.pdf", "_blank")}
              className="text-lg px-8 py-3 border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:via-emerald-500/5 hover:to-green-600/5 transform hover:scale-105 transition-all duration-300 hover:border-primary/50"
            >
              {t("getMyCV")}
            </Button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: Github, href: "https://github.com/duclee9x", target: "_blank", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/duclee9x/", target: "_blank", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ledangduc7601@gmail.com", target: "_blank", label: "Email" },
            ].map(({ icon: Icon, href, target, label }) => (  
              <a
                key={label}
                href={href}
                target={target}
                className="p-3 rounded-full bg-muted hover:bg-gradient-to-r hover:from-primary/10 hover:via-emerald-500/10 hover:to-green-600/10 transition-all duration-300 hover:scale-110 group shadow-md hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={() => scrollToSection("experience")}
              className="animate-bounce hover:text-primary transition-colors duration-300 group"
            >
              <ArrowDown className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
