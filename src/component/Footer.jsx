import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className=" text-slate-300 rounded-t-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-semibold text-white">YouStore</h3>
            </div>
            <p className="text-slate-400 max-w-sm">
              Your one-stop shop for premium office and tech essentials. Quality guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="#" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Items</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="#" className="hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Shipping Info</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Returns</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
                <div className="flex gap-4 items-center text-slate-400">
                    <Facebook className='hover:text-gray-50' />
                    <Instagram className='hover:text-gray-50' />
                    <Twitter className='hover:text-gray-50' />
                    <Linkedin className='hover:text-gray-50' />
                </div>
            </div>

            <div className="pt-6">
              <hr className="border-slate-800 mb-6" />
              <p className="text-center text-slate-400">© 2025 YouStore. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
