'use client';
import { motion } from 'motion/react';
import { 
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaNodeJs, 
  FaGitAlt, 
  FaJava,
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
        SiPostgresql,
        SiMongodb,
        SiMysql,
        SiSpringboot,
        SiKubernetes,
        SiDocker 
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
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          &quot; I&apos;m Full Stack Developer with expertise in designing, developing, and deploying modern web applications.
           With a strong foundation in both frontend and backend technologies, I specialize in creating scalable, high-performance solutions that deliver exceptional user experiences.
          I&apos;m proficient in technologies such as React, Next.js, Angular, Node.js, Spring Boot, PostgreSQL, and Docker, 
          and I have hands-on experience implementing CI/CD pipelines, optimizing database performance, and building secure, maintainable architectures. &quot;
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="mb-16"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
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
              <li className="flex items-center gap-2"><SiHtml5 className="text-orange-500" /> + <SiCss3 className='text-blue-600'/> HTML5 / CSS3</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
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
                <SiPostgresql className="text-blue-600" /> PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <SiMongodb className="text-green-600" /> MongoDB
              </li>
              <li className="flex items-center gap-2">
                <SiMysql className="text-blue-500" /> MySQL
              </li>
              <li className="flex items-center gap-2">
                <FaJava className="text-red-500" /> Java
              </li>
              <li className="flex items-center gap-2">
                <SiSpringboot className="text-green-500" /> Spring Boot
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
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
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-2">Company Name • 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">Previous Company • 2018 - 2020</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs</li>
              <li>Built responsive user interfaces with modern JavaScript frameworks</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 
          className="section-title"
          {...fadeInUp}
        >
          Education
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">Vocation School SORE Tulungagung</h3>
            <p className="text-primary mb-2">2016 - 2019</p>
            <p className="text-secondary">
              Graduated with honors.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
} 