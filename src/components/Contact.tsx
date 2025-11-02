import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-5xl text-white mb-4">Contact</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Let's connect or collaborate on new ideas!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 rounded-xl"
            >
              <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-1">Email</h3>
                <a href="mailto:venkyrit14@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  venkyrit14@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 rounded-xl"
            >
              <div className="p-3 bg-gradient-to-r from-pink-600 to-pink-400 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-1">Location</h3>
                <p className="text-gray-300">Hyderabad</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/30 rounded-xl"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/rithika-venkatesh-aa3b88328" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  linkedin.com/in/rithika-venkatesh-aa3b88328
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-lg border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-purple-500/50"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-purple-500/30 text-center text-gray-400"
        >
          <p>© 2025 Rithika Venkatesh. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
