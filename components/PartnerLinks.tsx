'use client'

import { useState } from 'react'
import { ExternalLink, Calculator, FileText, MapPin } from 'lucide-react'
import Link from 'next/link'

type Partner = {
  id: string
  name: string
  logo: string
  description: string
  affiliateUrl: string
  category: string
  featured: boolean
}

const samplePartners: Partner[] = [
  {
    id: '1',
    name: 'Oyster HR',
    logo: '🦪',
    description: '180+ countries coverage',
    affiliateUrl: 'https://bit.ly/3FeHq57',
    category: 'EOR',
    featured: true
  },
  {
    id: '2',
    name: 'Deel',
    logo: '🌍',
    description: 'Mixed contractor/employee teams',
    affiliateUrl: 'https://bit.ly/4d1hG8G',
    category: 'EOR',
    featured: true
  },
  {
    id: '3',
    name: 'Multiplier',
    logo: '⚡',
    description: 'AI-powered global compliance',
    affiliateUrl: 'https://affiliate.usemultiplier.com/cz9gjuvbrhdv',
    category: 'EOR',
    featured: true
  },
  {
    id: '4',
    name: 'Lano',
    logo: '🚀',
    description: 'Payroll consolidation',
    affiliateUrl: 'https://bit.ly/4d1h5DY',
    category: 'Payroll',
    featured: true
  }
]

export function PartnerLinks() {
  const [partners] = useState<Partner[]>(samplePartners)

  const handlePartnerClick = async (partnerId: string, url: string) => {
    try {
      await fetch('/api/partners/click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ partnerId })
      })
    } catch (error) {
      console.error('Error tracking click:', error)
    }
    
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured EOR Partners</h3>
      <p className="text-gray-600 text-sm mb-6">Trusted solutions for global hiring</p>
      
      <div className="space-y-3">
        {partners.map((partner) => (
          <button
            key={partner.id}
            onClick={() => handlePartnerClick(partner.id, partner.affiliateUrl)}
            className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-primary-50 hover:border-primary-200 transition-colors text-left"
          >
            <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white font-bold text-sm">
              {partner.logo}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{partner.name}</div>
              <div className="text-sm text-gray-600">{partner.description}</div>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </button>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Quick Tools</h4>
        <div className="space-y-2">
          <Link href="/tools/salary-calculator" className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
            <Calculator className="w-4 h-4" />
            Salary Calculator
          </Link>
          <Link href="/tools/contract-generator" className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
            <FileText className="w-4 h-4" />
            Contract Generator
          </Link>
          <Link href="/tools/country-comparison" className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
            <MapPin className="w-4 h-4" />
            Country Comparison
          </Link>
        </div>
      </div>
    </div>
  )
}