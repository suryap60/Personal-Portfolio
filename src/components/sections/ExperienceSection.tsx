import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'React Developer',
      company: 'Brandstrek',
      location: 'Calicut, India',
      period: 'Present',
      type: 'Full-time',
      description: [
        'Built and deployed 7+ live React projects for real-time platforms, scalable front-end solutions',
        'Implemented scalable UI with Next.js, TypeScript, and Tailwind CSS for performance optimization',
        'Collaborated with backend teams to integrate APIs and improve user experience',
        'Focused on clean architecture, reusable components, and optimization techniques',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm mb-4">
            <FaBriefcase className="inline mr-2" />
            EXPERIENCE
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-400 text-lg">
            Building expertise through hands-on experience and continuous growth
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative md:pl-12 mb-12">
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0a1628] hidden md:block" />
              
              <div className="bg-[#1a2942]/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-cyan-400 text-lg font-semibold mb-3">{exp.company}</p>
                  </div>
                  <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
