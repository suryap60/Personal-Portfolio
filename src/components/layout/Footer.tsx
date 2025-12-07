import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Surya P. Built with{' '}
            <FaHeart className="inline text-red-500 mx-1" />
            using Next.js & Tailwind CSS
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/suryap60"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-p-a690b32b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:suryap6061@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
