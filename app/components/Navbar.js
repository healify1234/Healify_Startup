'use client'
import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="https://static.wixstatic.com/media/469f62_add9d4ae57d14bbea9feedd53b36302e~mv2.png/v1/fill/w_96,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/469f62_add9d4ae57d14bbea9feedd53b36302e~mv2.png" alt="Healify" className="w-12 h-12" />
          <div>
            <h1 className="text-teal-600 text-2xl font-semibold">Healify</h1>
            <p className="text-teal-600 text-sm">Recover. Heal. Thrive</p>
          </div>
        </Link>
      </div>
      
      <div className="flex items-center gap-6">
        <Link href="/" className="text-gray-600 hover:text-teal-600">Home</Link>
        <Link href="/programes" className="text-gray-600 hover:text-teal-600">Programes</Link>
        <Link href="/contact" className="text-gray-600 hover:text-teal-600">Contact</Link>
        <Link href="/book-online" className="text-gray-600 hover:text-teal-600">Book Online</Link>
        <Link href="/blog" className="text-gray-600 hover:text-teal-600">Blog</Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-teal-600 hover:text-teal-700">Log In</button>
        <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">
          EXPLORE
        </button>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-teal-50 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>
      </div>
    </nav>
  )
}
