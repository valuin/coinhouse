import Image from "next/image"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-violet-50 py-8 px-14">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="flex-shrink-0">
        <Image src="/LogoCoinhouse.svg" alt="Coinhouse Logo" width={250} height={40} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Buy Properties</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Selling</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">Follow us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
};