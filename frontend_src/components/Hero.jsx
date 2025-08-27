import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Heart, Shield, Users } from 'lucide-react'
import officeHero from '../assets/office-hero.webp'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to
                <span className="text-blue-900 block">Mental Wellness</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional, compassionate psychological services in a safe and welcoming environment. 
                Take the first step towards a healthier, happier you.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="text-blue-900" size={20} />
                <span>Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-blue-900" size={20} />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-blue-900" size={20} />
                <span>10+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-3">
                Schedule Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-900 text-blue-900 hover:bg-blue-50">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={officeHero} 
                alt="Calming therapy office interior" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Available Today</div>
                  <div className="text-sm text-gray-600">Same-day appointments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

