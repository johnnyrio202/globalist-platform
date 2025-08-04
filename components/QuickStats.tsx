'use client'

import { useEffect, useState } from 'react'

const stats = [
  { number: '180+', label: 'Countries Covered' },
  { number: '24hr', label: 'Setup Time' },
  { number: '$7.8B', label: 'EOR Market by 2033' },
  { number: '48%', label: 'Companies Hiring Globally' },
]

export function QuickStats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}