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
      { title: 'Employment Law Database