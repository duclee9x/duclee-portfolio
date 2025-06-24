"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background/95 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-emerald-500 to-green-600 bg-clip-text text-transparent">
              {t("contactTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("letsConnect")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                  {t("letsConnect")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{t("contactDesc")}</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: t("email"),
                    value: "ledangduc7601@gmail.com",
                    href: "mailto:ledangduc7601@gmail.com",
                  },
                  {
                    icon: <Linkedin className="w-5 h-5" />,
                    label: "LinkedIn",
                    value: "linkedin.com/in/duclee9x",
                    href: "https://linkedin.com/in/duclee9x",
                  },
                  {
                    icon: <Github className="w-5 h-5" />,
                    label: "GitHub",
                    value: "github.com/duclee9x",
                    href: "https://github.com/duclee9x",
                  },
                ].map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-muted/50 hover:via-primary/5 hover:to-emerald-500/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                  >
                    <div className="p-3 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-green-600/10 rounded-full group-hover:from-primary/20 group-hover:via-emerald-500/20 group-hover:to-green-600/20 transition-all duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="hover:shadow-xl transition-all duration-500 border-border/50 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                        {t("yourName")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t("yourName")}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105 border-border/50 focus:border-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                        {t("email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t("yourEmail")}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:scale-105 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-primary">
                      {t("subject")}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder={t("projectDiscussion")}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:scale-105 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                      {t("message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("messagePlaceholder")}
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-105 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <Alert className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800 dark:text-green-200">
                        Message sent successfully! I'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-red-200 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/50 dark:to-pink-950/50">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800 dark:text-red-200">
                        Failed to send message. Please try again or contact me directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary via-emerald-500 to-green-600 hover:from-primary/90 hover:via-emerald-500/90 hover:to-green-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("sendMessage")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
