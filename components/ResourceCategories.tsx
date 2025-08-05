'use client'

import { Users, Calculator, ShieldCheck, Plane, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const resourceCategories = [
  {
    icon: Users,
    title: 'HR Management',
    description: 'Complete guides for managing international teams, from onboarding to performance management.',
    links: [
      { title: 'Global Onboarding Guide', href: '/resources/global-onboarding' },
      { title: 'Performance Management Templates', href: '/resources/performance-templates' },
      { title: 'Employee Handbook Templates', href: '/resources/employee-handbooks' },
    ]
  },
  {
    icon: Calculator,
    title: 'Payroll & Benefits',
    description: 'Navigate complex international payroll requirements and benefit structures across different countries.',
    links: [
      { title: 'Country-Specific Payroll Guides', href: '/resources/payroll-guides' },
      { title: 'Tax Calculator Tools', href: '/tools/tax-calculator' },
      { title: 'Benefits Comparison Charts', href: '/resources/benefits-comparison' },
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Legal',
    description: 'Stay compliant with employment laws, data protection regulations, and tax requirements worldwide.',
    links: [
      { title: 'Employment Law Database', href: '/resources/employment-laws' },
      { title: 'GDPR Compliance Checklist', href: '/resources/gdpr-checklist' },
      { title: 'Contract Templates', href: '/resources/contract-templates' },
    ]
  },
  {
    icon: Plane,
    title: 'Immigration & Visas',
    description: 'Comprehensive immigration support and visa guidance for relocating employees globally.',
    links: [
      { title: 'Visa Requirements Database', href: '/resources/visa-requirements' },
      { title: 'Work Permit Guides', href: '/resources/work-permits' },
      { title: 'Immigration Checklists', href: '/resources/immigration-checklists' },
    ]
  },
]

export function ResourceCategories() {
  return (
    <section id="resources" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Global HR Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resourceCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-primary-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}