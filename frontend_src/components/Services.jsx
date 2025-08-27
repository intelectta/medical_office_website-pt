import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Clock, DollarSign, Users, Brain, Heart, UserCheck } from 'lucide-react'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch services from the backend API
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services')
        const data = await response.json()
        setServices(data)
      } catch (error) {
        console.error('Error fetching services:', error)
        // Fallback data if API is not available
        setServices([
          {
            id: 1,
            title: 'Individual Therapy',
            description: 'One-on-one sessions to address personal challenges, mental health concerns, and personal growth.',
            duration: '50 minutes',
            price: '$120 per session'
          },
          {
            id: 2,
            title: 'Couples Therapy',
            description: 'Relationship counseling to improve communication, resolve conflicts, and strengthen bonds.',
            duration: '60 minutes',
            price: '$150 per session'
          },
          {
            id: 3,
            title: 'Family Therapy',
            description: 'Family-focused sessions to address family dynamics, communication issues, and behavioral concerns.',
            duration: '60 minutes',
            price: '$160 per session'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  const getServiceIcon = (title) => {
    if (title.includes('Individual')) return <UserCheck className="text-blue-900" size={32} />
    if (title.includes('Couples')) return <Heart className="text-blue-900" size={32} />
    if (title.includes('Family')) return <Users className="text-blue-900" size={32} />
    if (title.includes('Group')) return <Users className="text-blue-900" size={32} />
    if (title.includes('CBT') || title.includes('Cognitive')) return <Brain className="text-blue-900" size={32} />
    return <Heart className="text-blue-900" size={32} />
  }

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of psychological services tailored to meet your unique needs 
            and support your mental health journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              {/* Icon */}
              <div className="mb-6">
                {getServiceIcon(service.title)}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign size={16} />
                    <span>{service.price}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button className="w-full mt-6 bg-blue-900 hover:bg-blue-800">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Schedule a free 15-minute consultation to discuss your needs and find the best approach for your situation.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

