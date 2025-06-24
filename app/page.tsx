"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"
import { TechCarousel } from "@/components/tech-carousel"
import { FeaturedProject } from "@/components/featured-project"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { Certificates } from "@/components/certificates"

export default function Portfolio() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="portfolio-theme"
    >
      <LanguageProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 transition-all duration-500">
          <ScrollProgress />
          <Header />
          <main>
            <Hero />
            <Timeline />
            <TechCarousel />
            <FeaturedProject />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
