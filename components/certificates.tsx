"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { Calendar, Award, CheckCircle } from "lucide-react"
import toeic from "/public/svg/toeic.png"
import aws from "/public/svg/aws.svg"
import jlpt from "/public/svg/jlpt.jpg"
import Image, { StaticImageData } from "next/image"
export function Certificates() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const { t } = useLanguage()

  const certificates = [
    {
      title: t("awsCert"),
      subtitle: t("associateLevel"),
      period: `${t("valid")}: 2025 - 2028`,
      borderColor: "border-white-200",
      link: "https://www.credly.com/badges/2c69ea39-d918-4cea-af61-a38dbb431dd3",
      icon: aws,
      status: "active",
    },
    {
      title: "JLPT N2",
      subtitle: t("jlptCert"),
      period: `${t("passed")}: 2020`,
      borderColor: "border-white-200",
      icon: jlpt,
      status: "completed",
    },
    {
      title: "TOEIC",
      subtitle: t("toeicCert"),
      period: t("score") + " (2018)",
      borderColor: "border-white-200",
      icon: toeic,
      status: "completed",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  type CertificateType = {
    title: string,
    subtitle: string,
    period: string,
    borderColor: string,
    icon: StaticImageData,
    status: string,
    link?: string,
  }
  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {t("certificatesTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and achievements demonstrating expertise and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const card = (
                <Card
                  className={`hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105  ${cert.borderColor} border relative overflow-hidden group`}
                >
                  {/* Status indicator */}
                  {cert.status === "active" && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="relative mx-auto mb-4">
                      <div
                        className={`w-20 h-20 mx-auto p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <div className="w-full h-full flex items-center justify-center text-white"><Image src={cert.icon} alt="" width={60} height={60} /></div>
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {cert.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm font-medium">{cert.subtitle}</p>
                  </CardHeader>

                  <CardContent className="text-center pt-0">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>

                    {/* Achievement badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-green-600/10 rounded-full text-xs font-medium text-primary border border-primary/20">
                      <CheckCircle className="w-3 h-3" />
                      {cert.status === "active" ? "Active Certification" : "Certified"}
                    </div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              )

              return (
                <div key={index} data-index={index} ref={ref => { itemRefs.current[index] = ref; }}>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </div>
              )
            })}
          </div>

          {/* Additional info section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-muted/50 via-primary/5 to-emerald-500/5 rounded-full border border-primary/20">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {t("commitment")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
