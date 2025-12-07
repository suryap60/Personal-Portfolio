import { FaExternalLinkAlt, FaGithub, FaCar, FaBriefcase, FaGraduationCap, FaUtensils, FaUsers } from 'react-icons/fa';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Neocarz',
      subtitle: 'Car Rental Platform',
      period: '08/2025 – Present',
      location: 'Saudi Arabia',
      description: [
        'Constructed the frontend experience enabling users to filter and reserve vehicles by location, date, and availability',
        'Integrated secure authentication and KYC workflows to ensure verified-user-only bookings',
        'Optimized global state using Redux to manage sessions, car availability, booking state, and real-time data',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      icon: <FaCar className="text-6xl" />,
    },
    {
      title: 'MenuStarter',
      subtitle: 'Food Ordering Platform',
      period: '08/2025 – Present',
      location: 'Saudi Arabia',
      description: [
        'Designed responsive interfaces enabling seamless browsing, ordering, and account handling',
        'Introduced features including category-based search, restaurant-wise navigation, favorites, cart flow, and order tracking',
        'Enhanced food/restaurant discovery experience by restructuring UI flows for faster decision-making',
      ],
      gradient: 'from-orange-500 to-red-600',
      icon: <FaUtensils className="text-6xl" />,
    },
    {
      title: 'Workex CRM',
      subtitle: 'Enterprise CRM System',
      period: '2024 – 2025',
      description: [
        'Architected CRM, HRM, Project Management, and Settings modules using React + TypeScript',
        'Created reusable form components, dynamic data tables, and activity logs integrated with backend APIs',
        'Leveraged Tailwind CSS to deliver clean, responsive UI across devices',
      ],
      gradient: 'from-purple-500 to-pink-600',
      icon: <FaBriefcase className="text-6xl" />,
    },
    {
      title: 'Xchool',
      subtitle: 'School Management System',
      period: '2024',
      description: [
        'Delivered portals for students, parents, teachers, and administrators with secure role-based access',
        'Managed modules for attendance, exam results, and fee tracking',
        'Applied React hooks and component patterns for scalability and maintainability',
        'Incorporated third-party integrations for notifications and secure file storage',
      ],
      gradient: 'from-green-500 to-emerald-600',
      icon: <FaGraduationCap className="text-6xl" />,
    },
    {
      title: 'ISME CRM',
      subtitle: 'CRM System',
      period: '2024',
      description: [
        'Produced fully responsive interfaces for CRM, HRM, User Profiles, and Settings',
        'Collaborated on REST API integration with attention to data flow and error handling',
      ],
      gradient: 'from-blue-500 to-indigo-600',
      icon: <FaUsers className="text-6xl" />,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0d1b2a]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4 uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1a2942]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white/20 group-hover:text-white/30 transition-colors">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                      <span>{project.period}</span>
                      {project.location && (
                        <>
                          <span>•</span>
                          <span>{project.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-colors">
                      <FaExternalLinkAlt className="text-white text-sm" />
                    </button>
                    <button className="p-2 bg-gray-800 hover:bg-cyan-500 rounded-lg transition-colors">
                      <FaGithub className="text-white text-sm" />
                    </button>
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300 text-sm mt-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
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
