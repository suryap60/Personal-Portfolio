import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';

export default function AboutSection() {
  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Collaboration',
      description: 'Excellent teamwork and communication skills',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Quality',
      description: 'Delivering high-quality solutions on time',
      color: 'from-pink-500 to-cyan-500',
    },
  ];

  const stats = [
    { value: '7+', label: 'Projects' },
    { value: '1+ Year', label: 'Experience' },
    { value: '15+', label: 'Technologies' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4">
            ABOUT ME
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">
            Frontend Developer & Problem Solver
          </h2>
          <p className="text-gray-400 text-lg">
            Passionate about creating beautiful, functional web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm a MERN Stack Developer with a passion for crafting exceptional
              digital experiences. With expertise in React, Next.js, TypeScript, and
              modern web technologies, I transform ideas into scalable, performant
              applications.
            </p>
            <p className="text-lg leading-relaxed">
              My journey in web development has been driven by continuous learning
              and a commitment to excellence. I've successfully delivered 7+ live
              projects, focusing on clean architecture, reusable components, and
              performance optimization.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive in collaborative environments, working closely with backend
              teams to integrate APIs and create seamless user experiences. My
              approach combines technical expertise with creative problem-solving to
              deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a2942]/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all"
              >
                <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a2942]/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
