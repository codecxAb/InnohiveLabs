import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              className="h-16 w-auto"
              src="images/logo_reverse_bgrm.png"
              alt=""
            />
            <p className="text-gray-400">
              Crafting exceptional digital experiences for forward-thinking
              businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf7JvpW-JygmHE_1RUKWPU07qW1Wy-KKOqr9k8oIH5hhzpqyQ/viewform"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/innohivelabs/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} InnohiveLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
