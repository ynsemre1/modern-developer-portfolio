"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Code,
  Database,
  GitBranch,
  Layout,
  Terminal,
} from "lucide-react";

import {
  SiReact,
  SiKotlin,
  SiSwift,
  SiAndroid,
  SiApple,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiXcode,
  SiGit,
  SiGithub,
  SiAmazon,
  SiGooglecloud,
  SiRider,
  SiDotnet,
  SiCoursera,
  SiCplusplus,
  SiCplusplusbuilder,
} from "react-icons/si";

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      items: [
        { name: "Swift", icon: <SiSwift className="w-4 h-4 text-blue-500" /> },
        { name: "Kotlin", icon: <SiKotlin className="w-4 h-4 text-blue-500" /> },
        { name: "React Native", icon: <SiReact className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      category: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      items: [
        { name: "React", icon: <SiReact className="w-4 h-4 text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-blue-500" /> },
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4 text-blue-500" /> },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6" />,
      items: [
        { name: ".NET", icon: <SiDotnet className="w-4 h-4 text-blue-500" /> },
        { name: "ASP.NET", icon: <SiDotnet className="w-4 h-4 text-blue-500" /> },
        { name: ".NET CORE", icon: <SiDotnet className="w-4 h-4 text-blue-500" /> },
        { name: "REST APIs", icon: <SiFirebase className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      items: [
        { name: "C#", icon: <SiCoursera className="w-4 h-4 text-blue-500" /> },
        { name: "Swift", icon: <SiSwift className="w-4 h-4 text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-blue-500" /> },
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4 text-blue-500" /> },
        { name: "CSS", icon: <SiCss3 className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <Terminal className="h-6 w-6" />,
      items: [
        { name: "Android Studio", icon: <SiAndroid className="w-4 h-4 text-blue-500" /> },
        { name: "Xcode", icon: <SiXcode className="w-4 h-4 text-blue-500" /> },
        { name: "VS Code", icon: <SiCplusplus className="w-4 h-4 text-blue-500" /> },
        { name: "Visual Studio", icon: <SiCplusplusbuilder className="w-4 h-4 text-blue-500" /> },
        { name: "Rider", icon: <SiRider className="w-4 h-4 text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-blue-500" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-4 h-4 text-blue-500" /> },
        { name: "AWS", icon: <SiAmazon className="w-4 h-4 text-blue-500" /> },
      ],
    },
    {
      category: "Version Control & CI/CD",
      icon: <GitBranch className="h-6 w-6" />,
      items: [
        { name: "Git", icon: <SiGit className="w-4 h-4 text-blue-500" /> },
        { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-blue-500" /> },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

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
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm bg-secondary flex items-center gap-1.5"
                      >
                        {item.icon}
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
  );
}