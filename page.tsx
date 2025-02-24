import { Github, Linkedin, Mail, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm Sarah Parker</h1>
            <p className="text-muted-foreground text-lg">
              A full-stack developer passionate about building beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-full w-64 h-64 object-cover border-4 border-primary"
              priority
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-12 bg-muted/40">
        <div className="container space-y-8">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-full h-48 mb-4"
                  />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 py-12">
        <div className="container space-y-8">
          <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <Card key={index} className="text-center p-4">
                <CardContent>
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-12 bg-muted/40">
        <div className="container max-w-xl space-y-8">
          <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool for remote teams",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring with historical data analysis",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "D3.js", "OpenWeather API"],
  },
]

const skills = [
  {
    name: "Frontend Development",
    icon: "🎨",
  },
  {
    name: "Backend Development",
    icon: "⚙️",
  },
  {
    name: "Database Design",
    icon: "🗄️",
  },
  {
    name: "Cloud Services",
    icon: "☁️",
  },
  {
    name: "UI/UX Design",
    icon: "✨",
  },
  {
    name: "Mobile Development",
    icon: "📱",
  },
  {
    name: "DevOps",
    icon: "🔄",
  },
  {
    name: "Testing",
    icon: "🧪",
  },
]

