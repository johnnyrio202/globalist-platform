'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-primary-500 to-primary-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Globe className="w-6 h-6" />
            Globalist Pro
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/resources" className="hover:text-blue-200 transition-colors">
              Resources
            </Link>
            <Link href="/news" className="hover:text-blue-200 transition-colors">
              News
            </Link>
            <Link href="/tools" className="hover:text-blue-200 transition-colors">
              Tools
            </Link>
            <Link href="/countries" className="hover:text-blue-200 transition-colors">
              Countries
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#assessment"
              className="bg-accent-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-400">
            <nav className="flex flex-col space-y-4">
              <Link href="/resources" className="hover:text-blue-200 transition-colors">
                Resources
              </Link>
              <Link href="/news" className="hover:text-blue-200 transition-colors">
                News
              </Link>
              <Link href="/tools" className="hover:text-blue-200 transition-colors">
                Tools
              </Link>
              <Link href="/countries" className="hover:text-blue-200 transition-colors">
                Countries
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}