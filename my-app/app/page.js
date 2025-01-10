'use client';

import Link from 'next/link';
import Header from './Component/Component';
import Form from './Component/Form';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import ProjectShowcase from './Component/Project';
import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';

// Load Google Font
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

// Scroll Linked Component for Scroll Indicator
function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        originX: 0,
        backgroundColor: '#ff0088',
        zIndex: 9999,
      }}
    />
  );
}

// Fade-in Animation Variants
const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-900 text-white`}>
      {/* Scroll Indicator */}
      <ScrollLinked />
      <Header />

      <motion.div
        className="flex  justify-center items-center flex-wrap mx-auto max-w-screen-xl py-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <div className="w-50 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/WhatsApp Image 2024-09-24 at 19.46.40_d9a0a352.jpg"
            alt="Akif - Full Stack Developer"
            className=" object-cover object-center rounded-full w-full "
            width={320}
            height={520}
          />
        </div>
        <main className="flex flex-col items-center justify-center text-center md:text-left space-y-5">
          <motion.h2
            className="font-bold text-xl md:text-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            Assalam o Alaikum, I'm Akif,
          </motion.h2>
          <motion.h1
            className="text-4xl font-extrabold md:text-5xl lg:text-6xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            MERN Stack Developer
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            <Link
              href="#contact"
              className="text-blue-400 underline hover:text-blue-300 text-lg transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </main>
      </motion.div>

      <motion.section
        className="p-10 flex flex-col"
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <motion.h2 className="text-4xl font-bold mb-5">About</motion.h2>
        <motion.p className="text-gray-400 leading-relaxed max-w-prose">
          With expertise in web development, Python, and Machine Learning, I am continuously learning new skills to enhance my technical knowledge and provide value to projects.
        </motion.p>
        <div className="w-50 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/WhatsApp Image 2024-09-24 at 19.46.40_d9a0a352.jpg"
            alt="Akif - Full Stack Developer"
            className=" object-cover object-center rounded-full w-full "
            width={320}
            height={520}
          />
        </div>
      </motion.section>

      <motion.section
        id="Experience"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <div className="flex justify-center sm:justify-around mt-10 flex-wrap gap-10 max-w-screen-xl mx-auto">
          <motion.div
            className="text-center p-5 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="text-gray-400 mt-2">1 Year Experience</p>
          </motion.div>
          <motion.div
            className="text-center p-5 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            <h3 className="text-2xl font-bold">Python</h3>
            <p className="text-gray-400 mt-2">120+ Hours Experience</p>
          </motion.div>
          <motion.div
            className="text-center p-5 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            <h3 className="text-2xl font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-2">120+ Hours Experience</p>
          </motion.div>
        </div>
      </motion.section>

      <ProjectShowcase />

      <motion.section
        id="contact"
        className="p-10 bg-gray-800 rounded-tl-3xl rounded-tr-3xl mt-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <motion.h2 className="text-4xl font-bold mb-5">Contact</motion.h2>
        <Form id="contact" />
      </motion.section>
    </div>
  );
}
