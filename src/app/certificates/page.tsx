'use client';
import { certification } from '@/contents/certification';
import Image from 'next/image';
import { FaKey, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations';


export default function Certificates() {
    return (
        <div className="container max-w-7xl mx-auto py-12">
              <motion.h1 
                className="text-4xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My Certification
              </motion.h1>
              <motion.p 
                className="text-lg text-secondary mb-24 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Here are my certifications. Click on the links to verify Certificates.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {certification.map((certificate, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
                    variants={fadeInUp}
                    {...cardHoverSmall}
                  >
                    <motion.div 
                      className="aspect-video bg-gray-200 dark:bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        className="object-cover w-full h-full"
                        width={500}
                        height={500}
                      />
                    </motion.div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-semibold mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {certificate.title}
                      </motion.h3>
                      {certificate.issuer && (
                        <p className="text-sm text-primary mb-3">
                        {certificate.issuer}
                        </p>
                       )}

                      <motion.p 
                        className="text-secondary mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {certificate.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {certificate.credentialId && (
                          <div className='flex items-center gap-2 text-secondary'>
                            <FaKey className='h-5 w-5' aria-label='certificate ID'/>
                            <span>{certificate.credentialId}</span>
                          </div>
                        )}

                        {certificate.credentialUrl && (
                          <motion.a
                            href={certificate.credentialUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 text-secondary hover:text-primary'
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaExternalLinkAlt className='h-5 w-5' aria-label='verify certificate'/>
                            <span>Verify</span>
                          </motion.a>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
    )
}