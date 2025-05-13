"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Code, Database, GitBranch, Layout, Terminal } from "lucide-react"
import Image from "next/image"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      items: [
        { name: "Swift", icon: "/icons/swift.png" },
        { name: "Kotlin", icon: "/icons/kotlin.png" },
        { name: "React Native", icon: "/icons/react.png" },
        { name: "Flutter", icon: "/icons/flutter.png" },
        { name: "iOS", icon: "/icons/apple.png" },
        { name: "Android", icon: "/icons/android.png" },
      ],
    },
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      items: [
        { name: "React", icon: "/icons/react.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
        { name: "HTML", icon: "/icons/html.png" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      ],
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6" />,
      items: [
        { name: "Node.js", icon: "/icons/nodejs.png" },
        { name: "Express", icon: "/icons/express.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "REST APIs", icon: "/icons/api.png" },
        { name: "GraphQL", icon: "/icons/graphql.png" },
      ],
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      items: [
        { name: "Swift", icon: "/icons/swift.png" },
        { name: "Kotlin", icon: "/icons/kotlin.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "TypeScript", icon: "/icons/typescript.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "Java", icon: "/icons/java.png" },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <Terminal className="h-6 w-6" />,
      items: [
        { name: "Xcode", icon: "/icons/xcode.png" },
        { name: "Android Studio", icon: "/icons/android-studio.png" },
        { name: "VS Code", icon: "/icons/vscode.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
        { name: "AWS", icon: "/icons/aws.png" },
        { name: "Heroku", icon: "/icons/heroku.png" },
      ],
    },
    {
      category: "Version Control & CI/CD",
      icon: <GitBranch className="h-6 w-6" />,
      items: [
        { name: "Git", icon: "/icons/git.png" },
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "GitLab", icon: "/icons/gitlab.png" },
        { name: "CI/CD", icon: "/icons/cicd.png" },
        { name: "Fastlane", icon: "/icons/fastlane.png" },
        { name: "App Store Connect", icon: "/icons/appstore.png" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing mobile applications
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">{skill.icon}</div>
                    <h3 className="font-semibold text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full text-sm bg-secondary flex items-center gap-1.5">
                        <div className="relative w-4 h-4">
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.name}
                            width={16}
                            height={16}
                            className="object-contain"
                            onError={(e) => {
                              // Fallback if icon doesn't load
                              e.currentTarget.style.display = "none"
                            }}
                          />
                        </div>
                        {item.name}
                      </span>
                    ))}
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
