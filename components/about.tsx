"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Yunus Emre"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4">
              <p>
                Hello! I'm Yunus Emre, a passionate mobile developer striving to
                specialize in Swift, C#, JavaScript, and React. I focus on
                building beautiful, functional, and problem-solving mobile
                applications.
              </p>
              <p>
                With several years of experience in mobile development, I've
                worked on a variety of projects ranging from small business apps
                to complex enterprise solutions. I'm dedicated to writing clean,
                maintainable code and staying up-to-date with the latest mobile
                development trends and technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
