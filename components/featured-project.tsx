"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import diagram from "/public/diagram.png"
import Kind from "/public/svg/kind.png"
import Bun from "/public/svg/bun.svg"
import Nextjs from "/public/svg/nextjs.svg"
import MySQL from "/public/svg/mysql.svg"
import LetsEncrypt from "/public/svg/letsencrypt.svg"
import Helm from "/public/svg/helm.svg"
import ArgoCD from "/public/svg/argocd.svg"
import Dagger from "/public/svg/dagger.png"
import Dapr from "/public/svg/dapr.svg"
import Istio from "/public/svg/istio.svg"
import Snyk from "/public/svg/snyk.svg"
import Eslint from "/public/svg/eslint.svg"
import Typescript from "/public/svg/ts-language.svg"
import Vault from "/public/svg/vault.svg"
import Action from "/public/svg/action.svg"
import SMTP from "/public/svg/smtp.svg"
import Grafana from "/public/svg/grafana.svg"
export function FeaturedProject() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const techStack = [
    {
      name: "Kind",
      icon: Kind,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Bun",
      icon: Bun,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Typescript",
      icon: Typescript,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Next",
      icon: Nextjs,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "ESlint",
      icon: Eslint,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    
    {
      name: "MySQL",
      icon: MySQL,
      color:
        "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Github Action",
      icon: Action,
      link: "https://github.com/duclee9x/nexura-ecommerce/actions",
      color:
        "bg-gradient-to-r from-green-100 to-lime-100 text-green-900 dark:from-green-900/70 dark:to-green-900/90 dark:text-green-300 hover:text-green-600 hover:dark:text-green-400 border border-green-200 dark:border-green-800",
    },
    {
      name: "Dagger",
      icon: Dagger,
      color:
        "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Helm",
      icon: Helm,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "ArgoCD",
      icon: ArgoCD,
      link: "https://argocd.duclee.store",
      color:
      "bg-gradient-to-r from-green-100 to-lime-100 text-green-900 dark:from-green-900/70 dark:to-green-900/90 dark:text-green-300 hover:text-green-600 hover:dark:text-green-400 border border-green-200 dark:border-green-800",
    },
    {
      name: "Let's Encrypt",
      icon: LetsEncrypt,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Dapr",
      icon: Dapr,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Istio",
      icon: Istio,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Snyk",
      icon: Snyk,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "Hashicorp Vault",
      icon: Vault,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "SMTP",
      icon: SMTP,
      color:
      "bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 dark:from-teal-900/50 dark:to-emerald-900/50 dark:text-teal-300 border border-teal-200 dark:border-teal-800",
    },
    {
      name: "LGTM stack",
      icon: Grafana,
      link: "https://grafana.duclee.store",
      color:
      "bg-gradient-to-r from-green-100 to-lime-100 text-green-900 dark:from-green-900/70 dark:to-green-900/90 dark:text-green-300 hover:text-green-600 hover:dark:text-green-400 border border-green-200 dark:border-green-800",
    },
  ]

  const features = [
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
    t("feature6")
  ]

  return (
    <section id="project" className="py-20 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {t("featuredProject")}
            </h2>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image/Demo */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
                <div className="relative">
                  <a href="https://github.com/duclee9x/nexura-ecommerce" target="_blank">
                  <Image
                    src={diagram}
                    alt="E-commerce Platform Architecture"
                    width={600}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-2">Cloud-Native E-commerce Platform</h3>
                    <p className="text-white/90 text-sm">Scalable microservices architecture on AWS</p>
                  </div>
                  </a>
                </div>
              </Card>
            </div>

            {/* Project Details */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                    {t("projectOverview")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{t("projectDesc")}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      
                      <a
                        href={tech.link}
                        
                        key={tech.name}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${tech.color}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Image src={tech.icon} alt={tech.name} width={24} height={24} />
                        {tech.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">{t("keyFeatures")}</h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-muted-foreground"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-gradient-to-r from-primary via-emerald-500 to-green-600 hover:from-primary/90 hover:via-emerald-500/90 hover:to-green-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <a href="https://duclee.store" target="_blank"> 
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("liveDemo")}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/30 hover:bg-gradient-to-r hover:from-primary/5 hover:via-emerald-500/5 hover:to-green-600/5 transform hover:scale-105 transition-all duration-300 hover:border-primary/50"
                  >
                    <a href="https://github.com/duclee9x/nexura-ecommerce" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    {t("viewCode")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
