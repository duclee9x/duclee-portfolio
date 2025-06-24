"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Server, Cloud, Monitor, Settings } from "lucide-react"

export function TechStack() {
  const { t } = useLanguage()

  const techCategories = [
    {
      title: t("backend"),
      icon: <Server className="w-6 h-6" />,
      technologies: ["Node.js", "Python", "Redis"],
    },
    {
      title: t("devops"),
      icon: <Settings className="w-6 h-6" />,
      technologies: ["Kubernetes", "ArgoCD", "GitHub Actions"],
    },
    {
      title: t("monitoring"),
      icon: <Monitor className="w-6 h-6" />,
      technologies: ["Prometheus", "Grafana", "ELK Stack"],
    },
    {
      title: t("cloud"),
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["AWS EKS", "RDS", "CloudWatch"],
    },
  ]

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("technologyStack")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-2 p-3 bg-primary/10 rounded-full w-fit">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-center p-2 bg-muted rounded-md text-sm font-medium">
                        {tech}
                      </div>
                    ))}
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
