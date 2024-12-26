'use client'

import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const teamMembers = [
  {
    name: "Anurag Basu",
    role: "Frontend Developer & UI/UX Designer",
    description: "Specializing in building intuitive interfaces and designing exceptional user experiences."
  },
  {
    name: "Rohit Roychaudhury",
    role: "Backend Developer & CI/CD Engineer",
    description: "Expert in building scalable server-side applications and managing seamless CI/CD pipelines."
  },
  {
    name: "Arkaprabha Banerjee",
    role: "Data Scientist",
    description: "Harnessing the power of data to unlock insights and drive impactful decisions for our clients."
  }
]

export default function AboutUs() {
  const headerRef = useRef<HTMLDivElement>(null)
  const teamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      once: true
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)

    if (headerRef.current) fadeInObserver.observe(headerRef.current)
    
    const teamMembers = teamRef.current?.children
    if (teamMembers) {
      Array.from(teamMembers).forEach((member, index) => {
        fadeInObserver.observe(member)
      })
    }

    return () => fadeInObserver.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16 opacity-0">
            <h1 className="text-5xl font-bold text-white mb-6">
              Meet Our Talented Team
            </h1>
            <p className="text-gray-400 text-lg">
              The driving force behind our innovations and solutions. Our team of
              experts ensures top-notch quality and unparalleled dedication.
            </p>
          </div>

          {/* Team Members */}
          <div ref={teamRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-gray-900 p-8 rounded-xl border border-blue-900 hover:border-blue-600 shadow-lg group hover:shadow-2xl transition-all duration-300 opacity-0"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {member.name}
                </h2>
                <p className="text-blue-400">{member.role}</p>
                <p className="text-gray-400 mt-4">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

