import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Globalist Pro</h3>
            <p className="text-gray-400 mb-4">
              Empowering global workforce expansion through expert guidance and trusted partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/resources/hr-management" className="hover:text-white transition-colors">HR Management</Link></li>
              <li><Link href="/resources/payroll" className="hover:text-white transition-colors">Payroll & Benefits</Link></li>
              <li><Link href="/resources/compliance" className="hover:text-white transition-colors">Compliance</Link></li>
              <li><Link href="/resources/immigration" className="hover:text-white transition-colors">Immigration</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/tools/salary-calculator" className="hover:text-white transition-colors">Salary Calculator</Link></li>
              <li><Link href="/tools/country-comparison" className="hover:text-white transition-colors">Country Comparison</Link></li>
              <li><Link href="/tools/contract-generator" className="hover:text-white transition-colors">Contract Generator</Link></li>
              <li><Link href="#assessment" className="hover:text-white transition-colors">Free Assessment</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Globalist Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}