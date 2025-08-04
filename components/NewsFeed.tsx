'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  createdAt: string
  author: {
    name: string
  }
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'POLICY', label: 'Policy' },
  { key: 'COMPLIANCE', label: 'Compliance' },
  { key: 'MARKET_TRENDS', label: 'Market Trends' },
  { key: 'TECHNOLOGY', label: 'Technology' },
]

// Sample data for demo
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'New EU Pay Transparency Directive Takes Effect',
    slug: 'eu-pay-transparency-directive',
    excerpt: 'The European Union\'s Pay Transparency Directive officially comes into force, requiring companies with 100+ employees to disclose salary ranges in job postings and provide pay gap reports.',
    category: 'POLICY',
    createdAt: '2025-08-02',
    author: { name: 'Sarah Johnson' }
  },
  {
    id: '2',
    title: 'Remote Work Adoption Stabilizes at 22.8% in Q2 2025',
    slug: 'remote-work-q2-2025',
    excerpt: 'Latest data from Robert Half shows remote work patterns are stabilizing, with hybrid arrangements becoming the dominant flexible work model.',
    category: 'MARKET_TRENDS',
    createdAt: '2025-07-31',
    author: { name: 'Michael Chen' }
  },
  {
    id: '3',
    title: 'Singapore Updates Employment Pass Requirements',
    slug: 'singapore-employment-pass-2025',
    excerpt: 'Singapore\'s Ministry of Manpower announces new Employment Pass criteria effective September 2025, including higher salary thresholds.',
    category: 'COMPLIANCE',
    createdAt: '2025-07-28',
    author: { name: 'Lisa Wang' }
  }
]

export function NewsFeed() {
  const [posts, setPosts] = useState<Post[]>(samplePosts)
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      // For now, using sample data. In production, this would fetch from API
      const filteredPosts = activeFilter === 'all' 
        ? samplePosts 
        : samplePosts.filter(post => post.category === activeFilter)
      
      setPosts(filteredPosts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [activeFilter])

  const getCategoryColor = (category: string) => {
    const colors = {
      POLICY: 'bg-blue-100 text-blue-800',
      COMPLIANCE: 'bg-red-100 text-red-800',
      MARKET_TRENDS: 'bg-green-100 text-green-800',
      TECHNOLOGY: 'bg-purple-100 text-purple-800',
      HR_MANAGEMENT: 'bg-orange-100 text-orange-800',
      PAYROLL: 'bg-yellow-100 text-yellow-800',
      IMMIGRATION: 'bg-indigo-100 text-indigo-800',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Global HR & Payroll News</h2>
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
              <span className={`px-3