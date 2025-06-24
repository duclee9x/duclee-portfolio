"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Building, Calendar } from "lucide-react"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("seniorDevOps"),
      company: t("techCorp"),
      period: `2022 - ${t("present")}`,
      description: t("experienceDesc"),
    },
    {
      title: t("systemAdmin"),
      company: t("dataFlow"),
      period: "2016 - 2018",
      description: t("adminDesc"),
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("experienceTitle")}</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
