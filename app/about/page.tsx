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
            A dedicated DevOps engineer with 3 years of experience, specializing in automation, monitoring, Linux, and
            containerization. Skilled in designing and deploying CI/CD pipelines, leveraging tools like Docker,
            Kubernetes, and Ansible to streamline infrastructure and application delivery.
          </p>
          <p>
            Experience in proactive monitoring with Prometheus and Grafana, ensuring high availability and reliability
            of services. Known for solving complex operational challenges and driving continuous improvement in system
            performance.
          </p>
          <p>
            My expertise includes managing Kubernetes clusters, implementing infrastructure security with tools like
            Vault and Teleport, and optimizing system performance in both cloud and bare-metal environments. With a
            Bachelor's degree in Computer Engineering from Kharazmi University, I am committed to continuous learning
            and professional growth.
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
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Cloud & Virtualization</h3>
            <div className="flex flex-wrap gap-2">
              {["AWS", "ESXi"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Monitoring & Observability</h3>
            <div className="flex flex-wrap gap-2">
              {["Grafana", "Prometheus", "Loki", "Tempo", "Mimir"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Automation & Configuration</h3>
            <div className="flex flex-wrap gap-2">
              {["Ansible", "Linux Shell", "Helm", "ArgoCD", "Terraform"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Containerization & Orchestration</h3>
            <div className="flex flex-wrap gap-2">
              {["Docker", "Kubernetes", "Docker Swarm", "CRI-O", "CapRover", "Portainer"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">CI/CD & Security</h3>
            <div className="flex flex-wrap gap-2">
              {["GitHub Actions", "GitLab CI", "Nexus", "Vault", "Teleport", "OpenVPN"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-400 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">Databases & Programming</h3>
            <div className="flex flex-wrap gap-2">
              {["MariaDB", "MongoDB", "PostgreSQL", "Bash", "Python", "Node.js"].map((skill) => (
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
          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">CityDI (City Development and Innovation), Tehran, Iran</p>
                </div>
                <span className="text-slate-400 text-sm">Feb 2025 – Present</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Leading DevOps initiatives for city development and innovation projects</li>
                <li>• Implementing scalable infrastructure solutions for municipal services</li>
                <li>• Developing automation frameworks for smart city applications</li>
                <li>• Ensuring high availability and security for critical city systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">PerfettoGruppo, Rende, Italy</p>
                </div>
                <span className="text-slate-400 text-sm">March 2023 – Present</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Designed and implemented automated CI/CD pipelines using GitHub Actions</li>
                <li>• Developed and managed automated backup solutions for critical systems</li>
                <li>• Implemented robust monitoring solutions for infrastructure and applications</li>
                <li>• Managed MongoDB and MySQL database clusters ensuring high availability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">AllBrains Clinic, Vancouver, Canada</p>
                </div>
                <span className="text-slate-400 text-sm">August 2023 – January 2025</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Designed scalable, secure infrastructure on AWS using Terraform and Ansible</li>
                <li>• Managed Kubernetes clusters with ArgoCD for continuous delivery</li>
                <li>• Implemented secure access with OpenVPN and Vault for secrets management</li>
                <li>• Deployed monitoring solutions using Prometheus and Grafana</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">DevOps Engineer</h3>
                  <p className="text-orange-400 font-medium">ZanjireTamin, Tehran, Iran</p>
                </div>
                <span className="text-slate-400 text-sm">October 2024 – December 2024</span>
              </div>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li>• Created and managed Kubernetes clusters on bare-metal servers</li>
                <li>• Built CI/CD pipelines using GitLab CI for automated deployments</li>
                <li>• Secured infrastructure with Safeline WAF and Teleport access management</li>
                <li>• Optimized system performance in bare-metal environments</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-slate-100">Education</h2>

        <Card className="bg-slate-900/40 border-slate-700/30 backdrop-blur-sm">
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
                <p className="text-slate-400 text-sm">2021</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
