'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ClipboardCheck } from 'lucide-react'

type LeadFormData = {
  company: string
  email: string
  name?: string
  countries: string
  teamSize: string
  timeline: string
}

export function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormData>()

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting lead:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="assessment" className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <ClipboardCheck className="w-5 h-5 text-primary-500" />
        Free Global Hiring Assessment
      </h3>
      
      <p className="text-gray-600 text-sm mb-6">
        Get personalized EOR and payroll solution recommendations for your expansion plans.
      </p>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-green-600 text-lg font-semibold mb-2">✓ Assessment Submitted!</div>
          <p className="text-gray-600 text-sm">We'll send your personalized recommendations within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              {...register('company', { required: 'Company name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Your company"
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Email *
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Primary Region *
            </label>
            <select
              {...register('countries', { required: 'Please select a region' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select region</option>
              <option value="europe">Europe</option>
              <option value="asia-pacific">Asia-Pacific</option>
              <option value="latin-america">Latin America</option>
              <option value="north-america">North America</option>
              <option value="multiple">Multiple Regions</option>
            </select>
            {errors.countries && (
              <p className="text-red-500 text-xs mt-1">{errors.countries.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expected Team Size *
            </label>
            <select
              {...register('teamSize', { required: 'Please select team size' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select team size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="200+">200+ employees</option>
            </select>
            {errors.teamSize && (
              <p className="text-red-500 text-xs mt-1">{errors.teamSize.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeline *
            </label>
            <select
              {...register('timeline', { required: 'Please select timeline' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"