"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Search,
  Smartphone,
  Database,
} from "lucide-react";

const floatingIcons = [
  { Icon: Code, top: "10%", left: "5%" },
  { Icon: Palette, top: "20%", right: "10%" },
  { Icon: Zap, bottom: "15%", left: "15%" },
  { Icon: Search, top: "15%", left: "80%" },
  { Icon: Smartphone, bottom: "20%", right: "20%" },
  { Icon: Database, top: "80%", left: "10%" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 opacity-0 overflow-hidden"
    >
      {floatingIcons.map(({ Icon, top, left, right, bottom }, index) => (
        <div
          key={index}
          className="absolute text-blue-400 opacity-20 animate-float"
          style={{
            top,
            left,
            right,
            bottom,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <Icon size={32} />
        </div>
      ))}
      <div className="text-center max-w-5xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Elevate Your Digital Presence with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            InnohiveLabs
          </span>
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          We craft innovative web solutions that drive growth and transform
          businesses. From stunning designs to powerful functionality, we bring
          your digital vision to life.
        </p>
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf7JvpW-JygmHE_1RUKWPU07qW1Wy-KKOqr9k8oIH5hhzpqyQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Start Project <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
