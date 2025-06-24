"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t("featuredProjects")}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{t("ecommercePlatform")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t("projectDesc")}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["AWS", "Kubernetes", "Node.js", "React", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-background text-foreground border-primary/20 hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("viewSource")}
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("liveDemo")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Additional project placeholder */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Infrastructure Automation"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Infrastructure Automation Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive automation toolkit for infrastructure provisioning and management across multi-cloud
                  environments.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Terraform", "Ansible", "Python", "AWS", "Azure"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-background text-foreground border-primary/20 hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("viewSource")}
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("liveDemo")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
