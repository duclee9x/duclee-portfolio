"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface TimelineItem {
  titleKey: string
  companyKey: string
  location: string
  period: string
  descriptionKey: string
  achievements: string[]
}

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLanguage()

  const timelineData: TimelineItem[] = [
    {
      titleKey: "Army Soldier",
      companyKey: "Mechanized Infantry Regiment No.48",
      location: "Bien Ho, Gia Lai Province",
      period: `2023 - 2025`,
      descriptionKey: "armyDesc",
      achievements: [
        t("achievement1"),
        t("achievement2"),
        t("achievement3"),
      ],
    },
    {
      titleKey: "devOpsEngineer",
      companyKey: "Ominext JSC",
      location: "Binh Thanh, Ho Chi Minh City",
      period: `2022 - 2023 `,
      descriptionKey: "experienceDesc",
      achievements: [
        t("achievement4"),
        t("achievement5"),
        t("achievement6"),
      ],
    },
    {
      titleKey: "devOpsEngineer",
      companyKey: "FPT Software",
      location: "Thu Duc, Ho Chi Minh City",
      period: "2021 - 2022",
      descriptionKey: "devOpsDesc",
      achievements: [
        t("achievement7"),
        t("achievement8"),
        t("achievement9"),
      ],
    },
    {
      titleKey: "dataItern",
      companyKey: "Flow Tech",
      location: "Dist 4, Ho Chi Minh City",
      period: "2020 - 2021",
      descriptionKey: "iternDesc",
      achievements: [
        t("achievement10"),
        t("achievement11"),
        t("achievement12"),
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => prev.includes(index) ? prev : [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    // Fallback: if not all items are visible after mount, show all after a short delay
    const fallback = setTimeout(() => {
      setVisibleItems((prev) =>
        timelineData.map((_, idx) => (prev.includes(idx) ? prev[prev.indexOf(idx)] : idx))
      )
    }, 1200) // adjust delay as needed

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [timelineData.length])

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
            {t("experienceTitle")}
          </h2>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-emerald-500 to-green-600 transform md:-translate-x-1/2 opacity-60"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative transition-all duration-1000 ${
                    visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-emerald-500 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-1/2 md:pl-0" : "md:pl-1/2 md:pr-0"}`}>
                    <Card className="hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                              {t(item.titleKey)}
                            </h3>

                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Building className="w-4 h-4 text-primary" />
                                <span>{t(item.companyKey)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-emerald-500" />
                                <span>{item.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4 text-green-600" />
                                <span>{item.period}</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">{t(item.descriptionKey)}</p>

                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                              <ul className="space-y-1">
                                {item.achievements.map((achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
