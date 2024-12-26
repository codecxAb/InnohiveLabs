'use client'

import { useEffect, useRef } from 'react'
import { Code, Palette, Wrench, Zap, Search, Smartphone } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We build responsive, scalable, and high-performance websites tailored to your needs.',
    icon: Code,
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'UX Design',
    description: 'Our creative team crafts stunning visuals and intuitive user interfaces that captivate your audience.',
    icon: Palette,
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    title: 'Maintenance',
    description: 'We provide ongoing support to keep your website secure, up-to-date, and running smoothly.',
    icon: Wrench,
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'We fine-tune your web applications for speed and efficiency, ensuring a smooth user experience.',
    icon: Zap,
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 5,
    title: 'SEO Services',
    description: 'Improve your online visibility and search rankings with our expert SEO strategies.',
    icon: Search,
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 6,
    title: 'Mobile Solutions',
    description: 'We develop responsive designs and native mobile applications to reach users on any device.',
    icon: Smartphone,
    className: 'md:col-span-1 md:row-span-1'
  }
]

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const children = servicesRef.current?.children
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Our Services
      </h2>
      <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`bg-gray-900 p-6 rounded-xl border border-blue-900 hover:border-blue-600 transition-colors opacity-0 ${service.className} flex flex-col justify-between`}
          >
            <div>
              <service.icon className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
            <div className="mt-4">
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

