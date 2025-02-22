"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Agency site",
    image: "/images/agency.png",
    link: "https://innohivelabs.github.io/Demo_PRO/",
  },
  {
    id: 2,
    title: "Agency Education site",
    image: "/images/edu.png",
    link: "https://innohivelabs.github.io/Education_demo/",
  },
  {
    id: 3,
    title: "Gym site",
    image: "/images/gym.png",
    link: "https://innohivelabs.github.io/GYM_DEMO/",
  },

  {
    id: 4,
    title: "Real state site",
    image: "/images/realstate.png",
    link: "/realstate",
  },
  {
    id: 5,
    title: "Restaurant Site",
    image: "/images/restaurant.png",
    link: "/restaurant",
  },
];

export default function Works() {
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = portfolioRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="works"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">
          Our Latest Work
          <Star className="inline-block ml-2 text-blue-400" size={20} />
        </h2>
      </div>
      <div ref={portfolioRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative group opacity-0">
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 rounded-xl flex items-center justify-center">
              <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  <Link href={project.link}>View Project</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
