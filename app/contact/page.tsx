"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Github, Linkedin, Youtube, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Contact Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-3 text-slate-100">Contact</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6"></div>
        <p className="text-slate-400 text-lg leading-relaxed">
          Have a project in mind or want to discuss DevOps and cloud engineering? I'd love to hear from you. Let's build
          something amazing together.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-slate-200">Get In Touch</h2>

        <div className="space-y-6">
          {/* Contact Details */}
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Email</h3>
                    <p className="text-orange-400">kave.moradian@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-orange-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Location</h3>
                    <p className="text-slate-400">Tehran, Iran</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Phone</h3>
                    <p className="text-slate-400">+98-902-123-2701</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">Telegram</h3>
                    <p className="text-slate-400">@kavehmoradian</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-slate-100">Connect With Me</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 bg-transparent"
                  asChild
                >
                  <Link href="https://github.com/kavehmoradian/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 bg-transparent"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/kaveh-moradian/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 bg-transparent"
                  asChild
                >
                  <Link href="https://youtube.com/@kavehmoradian" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 bg-transparent"
                  asChild
                >
                  <Link href="https://t.me/kavehmoradian" target="_blank" rel="noopener noreferrer">
                    <Send className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Availability Status */}
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-slate-100">Currently Available</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm open to new opportunities and interesting projects. Whether you need help with DevOps
                implementation, cloud migration, or infrastructure optimization, let's discuss how I can help.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-slate-200">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-100">What services do you offer?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I specialize in DevOps consulting, cloud infrastructure design, CI/CD pipeline implementation,
                monitoring setup, and infrastructure automation using tools like Terraform and Ansible.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-100">How do you approach new projects?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I start with understanding your current infrastructure, business goals, and pain points. Then I create a
                tailored strategy focusing on reliability, scalability, and cost optimization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-100">What's your typical project timeline?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Project timelines vary based on complexity. Small automation tasks might take 1-2 weeks, while complete
                infrastructure overhauls can take 2-3 months. I always provide detailed estimates upfront.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-slate-100">Do you work with remote teams?</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I have extensive experience working with distributed teams across different time zones. I use modern
                collaboration tools and maintain clear communication throughout projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
