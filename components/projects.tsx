"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Fitness Tracker App",
      description:
        "A cross-platform mobile app built with React Native that helps users track their workouts, set goals, and monitor progress.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "E-commerce iOS App",
      description:
        "A native iOS app built with Swift and SwiftUI that provides a seamless shopping experience with features like product search, cart management, and secure checkout.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Swift", "SwiftUI", "Core Data", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Travel Guide Android App",
      description:
        "A Kotlin-based Android app that helps travelers discover new destinations, plan itineraries, and share their experiences with others.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Kotlin", "Jetpack Compose", "Google Maps API", "Room"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app built with React Native that helps users organize tasks, set reminders, and collaborate with team members.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React Native", "TypeScript", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of the mobile applications I've built. Each project represents my skills and expertise in
            mobile development.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="flex-1 flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
