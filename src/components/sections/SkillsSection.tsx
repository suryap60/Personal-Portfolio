import { FaCode, FaServer } from 'react-icons/fa';

export default function SkillsSection() {
  const frontendSkills = [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 92 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 93 },
    { name: 'HTML & CSS', level: 95 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 87 },
    { name: 'MongoDB', level: 85 },
    { name: 'Mongoose', level: 86 },
    { name: 'REST API', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[#0d1b2a]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4 uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-400 text-lg">
            Comprehensive skill set across the full development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a2942]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                <FaCode className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
            </div>

            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a2942]/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <FaServer className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Backend Development</h3>
            </div>

            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
