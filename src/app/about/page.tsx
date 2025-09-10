'use client';
import { motion } from 'motion/react';
import { 
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaNodeJs, 
  FaGitAlt, 
  FaSyncAlt 
} from "react-icons/fa";
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer, 
  cardHover, 
  cardHoverSmall 
} from '@/utils/animations';
import { SiReact, 
        SiNextdotjs, 
        SiAngular, 
        SiTypescript, 
        SiTailwindcss, 
        SiHtml5,
        SiCss3,
        SiExpress,
        SiMongodb,
        SiMysql,
        SiBootstrap,
        SiKubernetes,
        SiDocker,
       } from "react-icons/si";


export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>
      
      {/* Bio Section */}
      <motion.section 
        className="mb-16"
        {...fadeInUp}
      >
        <motion.p 
          className="text-lg text-secondary max-w-3xl mx-auto text-center"
          {...fadeInUp}
        >
          &quot; I&apos;m  <span className="text-primary font-semibold">Full Stack Developer</span> passionate about creating scalable web apps.
           With a strong foundation in both frontend and backend technologies, I bring a self-driven mindset, a curiosity for 
           new tech, and a love for building projects that solve real problems.
          I&apos;m proficient in technologies such as React, Next.js, Node.js, Express, MySQL, MongoDB and Docker. &quot;
        </motion.p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-20"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-10"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li className="flex items-center gap-2"><SiReact className="text-blue-500" /> React</li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-black dark:text-white" /> Next.Js</li>
              <li className="flex items-center gap-2"><SiAngular className="text-red-500" /> Angular</li>
              <li className="flex items-center gap-2"><SiTypescript className="text-blue-600" /> TypeScript</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-sky-500" /> Tailwind CSS</li>
              <li className="flex items-center gap-2"><SiBootstrap className="text-indigo-800" /> Bootstrap</li>
              <li className="flex items-center gap-2"><SiHtml5 className="text-orange-500" /> + <SiCss3 className='text-blue-600'/> HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li className="flex items-center gap-2">
                <FaNodeJs className="text-green-500" /> Node.js
              </li>
              <li className="flex items-center gap-2">
                <SiExpress className="text-gray-700 dark:text-gray-300" /> Express
              </li>
              <li className="flex items-center gap-2">
                <SiMongodb className="text-green-600" /> MongoDB
              </li>
              <li className="flex items-center gap-2">
                <SiMysql className="text-blue-500" /> MySQL
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li className='flex items-center gap-2'>
                <FaGitAlt className='text-orange-600'/> Git / GitHub
              </li>
               <li className="flex items-center gap-2">
                <SiDocker className="text-blue-400" /> Docker
               </li>
               <li className="flex items-center gap-2">
                <SiKubernetes className="text-blue-600" /> Kubernetes
               </li>
               <li className="flex items-center gap-2">
                <FaSyncAlt className="text-purple-500" /> CI/CD
               </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Self-Driven Learning and Development</h3>
            <p className="text-primary mb-2">April 2025 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and deployed <strong>full-stack applications</strong> including an <strong>E-commerce Platform</strong>, <strong>Social Media App</strong>, and <strong>Expense Tracker</strong> using Next.js, TypeScript, PostgreSQL, Prisma, Payment integration(Stripe) and Tailwind CSS.</li>
              <li>Created responsive UIs like <strong>Blomma</strong> to demonstrate React, Redux, and vanilla JavaScript expertise.</li>
              <li>Implemented authentication, third-party API integration, and CI/CD pipelines with GitHub Actions, Docker, and cloud hosting (Vercel, Render).</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Bootcamp/Course Project</h3>
            <p className="text-primary mb-2">May 2025 - present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Built and deployed multiple front-end app and back-end app using React, Node.js, Express, MongoDB, 
                  with tools like Git, Docker, Kubernetes.
              </li>
              <li>Built responsive user interfaces with modern frameworks like React, Next.js</li>
              <li>Collaborated with peers, coducted project and code review with peers,
                  managed version control with git/github to deliver production ready apps
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 