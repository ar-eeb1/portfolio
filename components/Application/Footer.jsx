"use client";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Areeb</h2>
          <p className="mt-3 text-sm">
            MERN Stack Developer passionate about building modern web
            applications and solving real-world problems with code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/#about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/#skills" className="hover:text-white">Skills</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/ar-eeb1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-white transition-colors"></i>
            </a>
            <a href="https://www.linkedin.com/in/areeb-amir-1a8208286/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl hover:text-white transition-colors"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl hover:text-white transition-colors"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Areeb. All rights reserved.
      </div>
    </footer>
  );
}
