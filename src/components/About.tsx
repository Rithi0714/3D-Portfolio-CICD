import { motion } from 'motion/react';
import { GraduationCap, Award, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-10 shadow-2xl"
          style={{ transform: 'perspective(1000px) rotateX(2deg)' }}
        >
          <div className="space-y-6 text-lg text-gray-300">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <p>
                I'm a 3rd-year <span className="text-purple-400">Computer Science Engineering student</span> at Koneru Lakshmaiah Deemed to be University, Hyderabad, specializing in Innovation.
                With a CGPA of <span className="text-pink-400">9.2</span>, I've developed a strong foundation in data structures, algorithms, and web development (HTML, CSS, JavaScript).
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
              <p>
                I'm passionate about creating <span className="text-purple-400">impactful digital solutions</span> and currently exploring areas like automation, cloud deployment, and AI-driven technologies.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <p>
                I believe in <span className="text-purple-400">learning by building</span> — and I love turning ideas into practical tools.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
