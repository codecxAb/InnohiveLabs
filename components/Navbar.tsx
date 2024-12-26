"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="logo">
            <img
              className="h-16 w-auto"
              src="images/logo_reverse_bgrm.png"
              alt=""
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("services")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("works")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Works
            </button>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7JvpW-JygmHE_1RUKWPU07qW1Wy-KKOqr9k8oIH5hhzpqyQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => scrollTo("services")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("works")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Works
            </button>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7JvpW-JygmHE_1RUKWPU07qW1Wy-KKOqr9k8oIH5hhzpqyQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
