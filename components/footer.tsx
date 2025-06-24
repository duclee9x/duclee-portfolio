"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full bg-gradient-to-r from-primary/10 via-emerald-500/10 to-green-600/10 hover:from-primary/20 hover:via-emerald-500/20 hover:to-green-600/20 transform hover:scale-110 transition-all duration-300 border border-primary/20"
            >
              <ArrowUp className="w-4 h-4 text-primary" />
            </Button>

            <div className="space-y-2">
              <p className="text-muted-foreground">
                © 2025 {t("name")}. {t("allRightsReserved")}
              </p>
              <p className="text-sm text-muted-foreground">{t("builtWith")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
