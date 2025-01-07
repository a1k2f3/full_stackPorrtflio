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
        height: 10,
        originX: 0,
        backgroundColor: '#ff0088',
        zIndex: 9999,
      }}
    />
  );
}

export default function Home() {
  // Scroll effect: Fade in elements when they come into view
  const fadeInAnimation = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  };

  return (
    <div className={`${poppins.className} min-h-screen bg-gray-900 text-white`}>
      {/* Scroll Indicator */}
      <ScrollLinked />
      <Header />
      <motion.div
        className="flex gap-5 justify-center items-center flex-wrap"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <main className="flex flex-col items-center justify-center h-screen space-y-5 text-center md:text-left">
          <motion.h2
            className="font-bold text-xl md:text-2xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            Assalam o Alaikum, I'm Akif,
          </motion.h2>
          <motion.h1
            className="text-5xl font-extrabold md:text-6xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInAnimation}
          >
            Full Stack Developer
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
        <div className="w-1/3 md:w-1/3 lg:w-1/5">
          <Image
            src="/premium_photo-1683309565422-77818a287060.jpeg"
            alt="Akif - Full Stack Developer"
            className="rounded-full shadow-lg w-full h-auto"
            width={200}
            height={300}
          />
        </div>
      </motion.div>

      <motion.section
        className="p-10"
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <motion.h2 className="text-4xl font-bold mb-5">About</motion.h2>
        <motion.p className="text-gray-400 leading-relaxed">
          With·expertise·in·web·development,·Python,·and·Machine·Learning,·I·am·continuously·learning␍⏎··········new·skills·to·enhance·my·technical·knowledge·and·provide·value·to·projects.␍`
          with
          `·problems.·With·expertise·in·web·development,·Python,·and·Machine⏎··········Learning,·I·am·continuously·learning·new·skills·to·enhance·my⏎··········technical·knowledge·and·p
        </motion.p>

        <motion.section
          id="Experience"
          initial="hidden"
          whileInView="visible"
          variants={fadeInAnimation}
        >
          <div className="flex justify-around mt-10 flex-wrap gap-10">
            <motion.div
              className="text-center p-5 bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={fadeInAnimation}
            >
              <h3 className="text-2xl font-bold">Web Development</h3>
              <p className="text-gray-400 mt-2">1 Year Experience</p>
            </motion.div>
            <motion.div
              className="text-center p-5 bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={fadeInAnimation}
            >
              <h3 className="text-2xl font-bold">Python</h3>
              <p className="text-gray-400 mt-2">120+ Hours Experience</p>
            </motion.div>
            <motion.div
              className="text-center p-5 bg-gray-800 rounded-xl shadow-md transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={fadeInAnimation}
            >
              <h3 className="text-2xl font-bold">Machine Learning</h3>
              <p className="text-gray-400 mt-2">120+ Hours Experience</p>
            </motion.div>
          </div>
        </motion.section>
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
