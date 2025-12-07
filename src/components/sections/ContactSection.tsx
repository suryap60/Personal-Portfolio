'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'suryap6061@gmail.com',
      color: 'from-pink-500 to-red-500',
    },
    // {
    //   icon: <FaPhone className="text-2xl" />,
    //   label: 'Phone',
    //   value: '+91 81368 73866',
    //   color: 'from-green-500 to-emerald-500',
    // },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'suryap60',
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'surya-p',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#0d1b2a]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4">
            <FaPaperPlane className="inline mr-2" />
            GET IN TOUCH
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#1a2942]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all flex items-center gap-4"
              >
                <div className={`p-4 bg-gradient-to-br ${info.color} rounded-lg`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </div>
            ))}

            {/* <div className="bg-[#1a2942]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <p className="text-gray-400">Based in</p>
              </div>
              <p className="text-white font-semibold text-lg">India</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-green-400 text-sm">Available for opportunities</p>
              </div>
            </div> */}
          </div>

          <div className="bg-[#1a2942]/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0a1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-[#0a1628] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
