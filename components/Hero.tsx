import Link from 'next/link'
import { ClipboardCheck, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Global HR & Payroll Hub
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Your comprehensive resource for international hiring, payroll compliance, and EOR solutions. 
          Stay ahead of global employment trends and regulations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#assessment" className="btn-primary text-lg px-8 py-4">
            <ClipboardCheck className="w-5 h-5" />
            Free Assessment
          </Link>
          <Link href="#resources" className="btn-secondary text-lg px-8 py-4">
            Explore Resources
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}