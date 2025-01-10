import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-10 px-5 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      <div className="flex justify-center items-center gap-6 mb-5">
        {/* Social Media Links */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="hover:text-white transition-colors duration-300"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm mb-5">&copy; {new Date().getFullYear()} Akif. All Rights Reserved.</p>
      {/* Back to Top Button */}
      <a
        href="#"
        className="flex justify-center items-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 mx-auto"
      >
        <FaArrowUp size={20} />
      </a>
    </motion.footer>
  );
}
