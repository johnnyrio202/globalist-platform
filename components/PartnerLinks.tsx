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