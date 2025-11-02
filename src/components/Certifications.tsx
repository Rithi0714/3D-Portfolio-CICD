import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: 'Foundations of Large Language Models',
      provider: 'NVIDIA',
      color: 'from-green-600 to-green-400',
    },
    {
      title: 'Automation Anywhere',
      provider: 'Automation Anywhere',
      color: 'from-orange-600 to-orange-400',
    },
    {
      title: 'MongoDB Certified Associate',
      provider: 'MongoDB',
      id: 'MDBnrxlgr5i7i',
      color: 'from-green-600 to-green-400',
    },
    {
      title: 'Cambridge LingualSkill Certification',
      provider: 'Cambridge',
      level: 'B2 Level',
      color: 'from-blue-600 to-blue-400',
    },
    {
      title: 'Introduction to Artificial Intelligence (AI)',
      provider: 'Online Course',
      color: 'from-purple-600 to-purple-400',
    },
  ];

  return (
    <section
      id="certifications"
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
          <h2 className="text-5xl text-white mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                rotateX: 10,
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-purple-500/30 rounded-xl p-6 shadow-xl hover:shadow-purple-500/20 transition-all"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg text-white mb-2">{cert.title}</h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <span>{cert.provider}</span>
              </div>

              {cert.level && (
                <p className="text-sm text-purple-400">{cert.level}</p>
              )}

              {cert.id && (
                <p className="text-xs text-gray-500 mt-2">ID: {cert.id}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
