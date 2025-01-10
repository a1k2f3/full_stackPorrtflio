"use client"
import Link from 'next/link';
import Image from 'next/image';
import Header from './Component/Component';
import Form from './Component/Form';
import ProjectShowcase from './Component/Project';
import Footer from './Component/Footer';
import { Poppins } from 'next/font/google';
import { motion, useScroll, useSpring } from 'framer-motion';
const poppins = Poppins({ subsets: ['latin'], weight: '400' });
function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        originX: 0,
        backgroundColor: '#4F46E5',
        zIndex: 50,
      }}
    />
  );
}

const fadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gray-900 text-white`}>
      {/* Scroll Indicator */}
      <ScrollIndicator />
      <Header />

      {/* Hero Section */}
      <motion.div
        className="flex  items-center justify-center mx-auto max-w-screen-xl py-20 space-y-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <Image
            src="/WhatsApp Image 2024-09-24 at 19.46.40_d9a0a352.jpg"
            alt="Akif - Full Stack Developer"
            className="object-cover object-center rounded-full"
            width={320}
            height={320}
          />
        </div>
        <main className="space-y-5">
          <motion.h2 className="font-bold text-xl md:text-2xl">
            Assalam o Alaikum, I'm Akif,
          </motion.h2>
          <motion.h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            MERN Stack Developer
          </motion.h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I specialize in building high-quality, full-stack web applications using modern technologies. With experience in developing scalable backend services, interactive user interfaces, and real-time applications, I ensure that my solutions meet the latest industry standards.
          </p>
          <motion.div>
            <Link
              href="#contact"
              className="text-blue-400 underline hover:text-blue-300 text-lg transition-colors duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          <div className="flex space-x-4 pt-5">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              View Resume
            </Link>
          </div>
        </main>
      </motion.div>

      {/* About Section */}
      <motion.section
        id="about"
        className="p-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <motion.h2 className="text-4xl font-bold mb-5 ">About Me</motion.h2>
        <motion.p className="text-gray-400 leading-relaxed max-w-prose mx-auto text-center">
          With expertise in web development, Python, and Machine Learning, I am continuously learning new skills to enhance my technical knowledge and provide value to projects.
        </motion.p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="py-20 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="flex justify-center sm:justify-around flex-wrap gap-10 max-w-screen-xl mx-auto">
          <motion.div
            className="text-center p-5 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold">Web Development</h3>
            <p className="text-gray-400 mt-2">1 Year Experience</p>
          </motion.div>
          <motion.div
            className="text-center p-5 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold">Python</h3>
            <p className="text-gray-400 mt-2">120+ Hours Experience</p>
          </motion.div>
          <motion.div
            className="text-center p-5 bg-gray-700 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold">Machine Learning</h3>
            <p className="text-gray-400 mt-2">120+ Hours Experience</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <ProjectShowcase />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="p-10 bg-gray-800 rounded-tl-3xl rounded-tr-3xl mt-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInAnimation}
      >
        <motion.h2 className="text-4xl font-bold mb-5 text-center">Contact Me</motion.h2>
        <Form id="contact" />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
