import { motion } from 'motion/react';
import { Code2, Globe, Wrench, BookOpen } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-purple-600 to-purple-400',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'SQL']
    },
    {
      icon: Globe,
      title: 'Web Development',
      color: 'from-pink-600 to-pink-400',
      skills: ['HTML', 'CSS', 'MongoDB']
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'from-blue-600 to-blue-400',
      skills: ['Power BI', 'MS Excel', 'n8n', 'AWS (S3, CodePipeline)']
    },
    {
      icon: BookOpen,
      title: 'Core Subjects',
      color: 'from-indigo-600 to-indigo-400',
      skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems']
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 shadow-xl"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:text-white hover:border-purple-400/50 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
