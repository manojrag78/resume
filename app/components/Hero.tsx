import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-50"></div>

      <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center max-w-lg">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image 
            src="/progilePic.jpeg"
            alt="Profile"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>

        {/* Info */}
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Manoj Kumar B A</h1>
        <p className="text-lg text-gray-600">Full Stack Developer</p>

        {/* Contact */}
        <div className="mt-4 text-gray-600 space-y-1">
          <p>Email: <span className="text-gray-900 font-medium">manojkumarba32@gmail.com</span></p>
          <p>Phone: <span className="text-gray-900 font-medium">+91 6361257080</span></p>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <IconBrandTwitter size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <IconBrandLinkedin size={28} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
            <IconBrandGithub size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
