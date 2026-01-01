import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* About Me Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-3 text-slate-100">About Me</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mb-6"></div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            I’m a DevOps Engineer with 3+ years of hands-on experience building and running production infrastructure across cloud and bare-metal environments. I focus on automation, observability, and reliability, helping teams keep their systems stable, scalable, and easy to operate.
          </p>
          <p>
            I’ve worked with scale-ups and enterprise teams, supporting mission-critical platforms and collaborating with distributed teams. I enjoy digging into complex infrastructure problems, automating away repetitive work, and continuously improving how systems perform and scale as products grow.

          </p>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">What I'm Doing</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">DevOps</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I enjoy improving the speed and quality of delivery, automate processes and achieve CI/CD excellence
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-orange-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Cloud Engineer</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I design, secure and maintain scalable cloud-based infrastructure and applications
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Infrastructure Automation</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I implement Infrastructure as Code using Terraform and Ansible for consistent deployments
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">Monitoring & Observability</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                I ensure system reliability with comprehensive monitoring using Prometheus, Grafana, and Loki
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Cloud & Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "ESXi", "Proxmox"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Containers & Orchestration</h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "Docker Swarm", "CRI-O", "CapRover", "Portainer"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Observability & Monitoring</h3>
            <div className="flex flex-wrap gap-2">
              {["Grafana", "Prometheus", "ELK", "Zabbix", "Loki", "Sentry", "Mimir"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Automation & IaC</h3>
            <div className="flex flex-wrap gap-2">
              {["Ansible", "Terraform", "Bash", "ArgoCD", "Helm"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">CI/CD</h3>
            <div className="flex flex-wrap gap-2">
              {["GitHub Actions", "GitLab CI", "Nexus"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Security</h3>
            <div className="flex flex-wrap gap-2">
              {["Vault", "Teleport", "Iptables", "Safeline WAF", "Fail2Ban", "Lynis"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Networking & Edge</h3>
            <div className="flex flex-wrap gap-2">
              {["Traefik", "NGINX", "HAProxy", "Keepalived"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Databases & Messaging</h3>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "MariaDB", "MongoDB", "Redis", "RabbitMQ"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Scripting & Programming</h3>
            <div className="flex flex-wrap gap-2">
              {["Bash", "Python", "Node.js"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">Work Experience</h2>

        <div className="space-y-8">
          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">CityDI (City Development and Innovation), Tehran, Iran</p>
                </div>
                <span className="text-slate-400 text-sm">Feb 2025 – Present</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Automated and standardized operations across 130+ production servers</li>
                <li>• Built CI/CD automation for 40+ projects to streamline deployments</li>
                <li>• Implemented enterprise monitoring using Prometheus, Grafana, Zabbix, and ELK</li>
                <li>• Maintained 99.9%+ uptime for mission-critical banking systems</li>
                <li>• Improved incident response through centralized metrics and logging</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">PerfettoGruppo, Rende, Italy</p>
                </div>
                <span className="text-slate-400 text-sm">March 2023 – September 2025</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Built and maintained CI/CD pipelines using GitHub Actions</li>
                <li>• Provisioned AWS infrastructure using Terraform and Ansible</li>
                <li>• Operated Kubernetes clusters with GitOps deployments via ArgoCD</li>
                <li>• Implemented monitoring and dashboards with Prometheus and Grafana</li>
                <li>• Managed database clusters ensuring availability and data safety</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">ZanjireTamin, Tehran, Iran</p>
                </div>
                <span className="text-slate-400 text-sm">October 2024 – December 2024</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Deployed and managed Kubernetes clusters on bare-metal servers</li>
                <li>• Automated deployments using GitLab CI pipelines</li>
                <li>• Secured infrastructure with Safeline WAF and Teleport</li>
                <li>• Optimized performance and availability in production environments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">Education</h2>

        <Card className="bg-slate-900/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">Bachelor of Computer Engineering</h3>
                <p className="text-orange-400">Kharazmi University, Tehran</p>
                <p className="text-slate-400 text-sm">2021 - 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
