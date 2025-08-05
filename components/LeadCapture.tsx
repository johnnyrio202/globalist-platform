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
            <label className="block text-sm font-medium text-gray-700 mb-1"></label>