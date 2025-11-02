import { motion } from 'motion/react';
import { ExternalLink, Calendar, Wrench, Shield, Cloud } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Event Management System',
      description: 'A web-based app to streamline event planning and coordination. Includes features like registration, scheduling, participant management, and real-time updates. Improved efficiency and user experience through an intuitive interface and automated workflows.',
      tech: ['HTML', 'CSS', 'JavaScript', 'MongoDB'],
      icon: Calendar,
      gradient: 'from-purple-600 to-purple-400',
      status: 'Completed'
    },
    {
      title: 'Cyber Quest',
      description: 'A gamified cybersecurity awareness app designed to educate users through interactive challenges and simulations. Aims to make learning about digital safety engaging and accessible to all age groups. Focus: Game-based learning, user engagement, and awareness.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      icon: Shield,
      gradient: 'from-pink-600 to-pink-400',
      status: 'In Progress'
    },
    {
      title: 'CI/CD – Auto-Deploy Personal Portfolio Website',
      description: 'Implemented a continuous integration and deployment pipeline using AWS CodeCommit, S3, and CodePipeline to automate portfolio deployment. Demonstrated practical understanding of cloud infrastructure and DevOps concepts.',
      tech: ['AWS S3', 'AWS CodePipeline', 'AWS CodeCommit', 'HTML', 'CSS'],
      icon: Cloud,
      gradient: 'from-blue-600 to-blue-400',
      status: 'Completed'
    }
  ];

  return (
    <section
      id="projects"
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
          <h2 className="text-5xl text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: index % 2 === 0 ? -3 : 3,
              }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/20 transition-all"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 bg-gradient-to-r ${project.gradient} rounded-xl flex-shrink-0`}
                >
                  <project.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === 'Completed' 
                        ? 'bg-green-600/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-400">Tech Stack:</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/40 rounded-lg text-sm text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white hover:from-purple-500 hover:to-pink-500 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
