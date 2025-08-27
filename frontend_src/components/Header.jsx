import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Mindful Wellness</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-900 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <Button className="bg-blue-900 hover:bg-blue-800 w-full">
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

