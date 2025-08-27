import { Award, BookOpen, Heart, Users } from 'lucide-react'
import officeInterior from '../assets/office-interior.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={officeInterior} 
                alt="Dr. Sarah Johnson in her office" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Credentials Card */}
            <div className="absolute -top-6 -right-6 bg-blue-900 text-white rounded-xl p-6 max-w-xs">
              <div className="text-center">
                <Award className="mx-auto mb-2" size={32} />
                <div className="font-semibold">Licensed Psychologist</div>
                <div className="text-sm opacity-90">Ph.D. Clinical Psychology</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Dr. Sarah Johnson
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 10 years of experience in clinical psychology, Dr. Johnson is dedicated to 
                helping individuals, couples, and families navigate life's challenges with compassion 
                and evidence-based therapeutic approaches.
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">My Therapeutic Approach</h3>
              <p className="text-gray-600">
                I believe in creating a safe, non-judgmental space where clients can explore their 
                thoughts and feelings. My approach integrates cognitive-behavioral therapy, mindfulness 
                techniques, and humanistic principles to provide personalized care for each individual.
              </p>
            </div>

            {/* Qualifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <BookOpen className="text-blue-900 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Education</div>
                  <div className="text-sm text-gray-600">Ph.D. Clinical Psychology, Stanford University</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-blue-900 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Certifications</div>
                  <div className="text-sm text-gray-600">Licensed Clinical Psychologist (CA)</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-blue-900 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Specializations</div>
                  <div className="text-sm text-gray-600">Anxiety, Depression, Trauma, Relationships</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="text-blue-900 mt-1" size={20} />
                <div>
                  <div className="font-semibold text-gray-900">Philosophy</div>
                  <div className="text-sm text-gray-600">Holistic, client-centered care</div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-900">
              <blockquote className="text-gray-700 italic">
                "Every person has the capacity for growth and healing. My role is to provide the 
                support, tools, and safe space needed for that transformation to occur."
              </blockquote>
              <cite className="text-sm text-gray-600 mt-2 block">- Dr. Sarah Johnson</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

