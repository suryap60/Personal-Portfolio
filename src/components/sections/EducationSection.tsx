import { FaGraduationCap, FaCertificate, FaBook } from 'react-icons/fa';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-500/10 text-pink-400 rounded-full text-sm mb-4">
            <FaGraduationCap className="inline mr-2" />
            EDUCATION & MORE
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">Academic & Achievements</h2>
          <p className="text-gray-400 text-lg">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <div className="bg-[#1a2942]/50 backdrop-blur-sm border border-gray-800 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-cyan-400 mb-2">APJ Abdul Kalam Technological University</p>
                  <p className="text-gray-400 mb-3">2020 - 2024</p>
                  <p className="text-gray-300">
                    Completed Bachelor of Technology with focus on software development and modern
                    web technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="bg-[#1a2942]/50 backdrop-blur-sm border border-gray-800 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <FaCertificate className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Python Web Developer
                  </h4>
                  <p className="text-purple-400 mb-2">L&T EduTech</p>
                  <p className="text-gray-400 mb-3">2024</p>
                  <p className="text-gray-300">
                    Comprehensive certification in Python web development and frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Publications Card */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500" />
            <div className="bg-[#1a2942]/50 backdrop-blur-sm border border-gray-800 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                  <FaBook className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Publications</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    StyleRental & GlamBook: Your Fashion and Beauty Concierge
                  </h4>
                  <p className="text-orange-400 mb-2">IRJMET</p>
                  <p className="text-gray-400 mb-3">2024</p>
                  <p className="text-gray-300">
                    Research publication on fashion rental and beauty service platform development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
