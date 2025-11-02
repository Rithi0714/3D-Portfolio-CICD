import { motion } from 'motion/react';
import { Linkedin, Github, FileDown, Code } from 'lucide-react';

export function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-6xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Rithika Venkatesh</span> 👋
          </motion.h1>
          
          <motion.p
            className="text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            A passionate Computer Science Engineering student specializing in innovation and web development.
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            "I enjoy building user-friendly digital experiences and solving real-world problems with technology."
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/rithika-venkatesh-aa3b88328"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotateZ: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg text-white hover:shadow-lg hover:shadow-gray-500/50 transition-all"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, rotateZ: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <FileDown className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="relative w-full h-96 flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <Code className="w-64 h-64 text-purple-400 drop-shadow-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
