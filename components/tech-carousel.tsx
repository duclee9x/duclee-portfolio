"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

interface TechItem {
  name: string
  category: string
  icon: StaticImageData
  link: string
}
import Image, { StaticImageData } from "next/image"
import AWS from "@/components/svg/AWS.svg"
import Azure from "@/components/svg/Azure.svg"
import Docker from "@/components/svg/Docker.svg"
import Kubernetes from "@/components/svg/Kubernetes.svg"
import Python from "@/components/svg/Python.svg"
import Typescript from "@/components/svg/ts-language.svg"
import Bun from "@/components/svg/Bun.svg"
import Terraform from "@/components/svg/Terraform.svg"
import Action from "@/components/svg/GitHub-Actions.svg"
import Ansible from "@/components/svg/Ansible.svg"
import Newrelic from "@/components/svg/newrelic.svg"
import MySQL from "@/components/svg/MySQL.svg"
import Helm from "@/components/svg/helm.svg"
import ArgoCD from "@/components/svg/Argo-CD.svg"
import Dagger from "@/components/svg/dagger.png"
import Dapr from "@/components/svg/dapr.svg"
import Istio from "@/components/svg/istio.svg"
import Snyk from "@/components/svg/snyk.svg"
import Eslint from "@/components/svg/eslint.svg"
import Vault from "@/components/svg/HashiCorp-Vault.svg"
import SMTP from "@/components/svg/smtp.svg"
export function TechCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const techStack: TechItem[] = [
    { name: "AWS", category: "Cloud", icon: AWS, link: "https://aws.amazon.com/" },
    { name: "Azure", category: "Cloud", icon: Azure, link: "https://azure.microsoft.com/" },
    { name: "Docker", category: "Containerization", icon: Docker, link: "https://www.docker.com/" },
    { name: "Kubernetes", category: "Container Orchestration", icon: Kubernetes, link: "https://kubernetes.io/" },
    { name: "Python", category: "Programming", icon: Python, link: "https://www.python.org/" },
    { name: "Typescript", category: "Programming", icon: Typescript, link: "https://www.typescriptlang.org/" },
    { name: "Bun", category: "Typescript Runtime", icon: Bun, link: "https://bun.sh/" },
    { name: "MySQL", category: "Relational Database", icon: MySQL, link: "https://mysql.com/" },
    { name: "Terraform", category: "IaC", icon: Terraform, link: "https://www.terraform.io/" },
    { name: "Github Action", category: "CI/CD", icon: Action, link: "https://github.com/features/actions/" },
    { name: "NewRelic", category: "Monitoring SaaS", icon: Newrelic, link: "https://newrelic.com/" },
    { name: "Ansible", category: "Automation", icon: Ansible, link: "https://www.ansible.com/" },
    { name: "Action", category: "CI/CD", icon: Action, link: "https://github.com/features/actions" },
    { name: "Helm", category: "Package Manager", icon: Helm, link: "https://helm.sh/" },
    { name: "ArgoCD", category: "GitOps Platform", icon: ArgoCD, link: "https://argoproj.io/" },
    { name: "Dagger", category: "Container Workflow Runtime", icon: Dagger, link: "https://dagger.io/" },
    { name: "Dapr", category: "Distributed App Runtime", icon: Dapr, link: "https://dapr.io/" },
    { name: "Istio", category: "Service Mesh", icon: Istio, link: "https://istio.io/" },
    { name: "Snyk", category: "Security", icon: Snyk, link: "https://snyk.io/" },
    { name: "Eslint", category: "Code Quality", icon: Eslint, link: "https://eslint.org/" },
    { name: "Vault", category: "Secrets Management", icon: Vault, link: "https://www.vaultproject.io/" },
    { name: "SMTP", category: "Email", icon: SMTP, link: "https://www.smtp.com/" },
  ]

  // Create multiple copies for seamless infinite scroll
  const infiniteItems = [...techStack, ...techStack, ...techStack]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 1 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= techStack.length * 280) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [techStack.length])

  return (
    <section
      id="skills"
      className="py-20 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background"
    >
      <div className="mx-auto px-4">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
            {t("technologyStack")}
          </h2>

          <div className="relative">
            {/* Enhanced Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/90 to-transparent z-10 pointer-events-none"></div>

            {/* Infinite Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {infiniteItems.map((tech, index) => (
                <Card
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-64 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center justify-center">
                    <a href={tech.link} target="_blank" rel="noopener noreferrer">
                      <div className="mb-4 flex justify-center"><Image src={tech.icon} alt={tech.name} width={50} height={50} /></div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{tech.category}</p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
