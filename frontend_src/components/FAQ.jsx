import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or enhance their overall well-being. If you're experiencing persistent stress, anxiety, depression, relationship issues, or simply want to grow personally, therapy can provide valuable support and tools."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session is an opportunity for us to get to know each other. We'll discuss your concerns, goals, and what brought you to therapy. I'll explain my approach and answer any questions you have. This session helps us determine if we're a good fit and develop a treatment plan together."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length of therapy varies greatly depending on your individual needs and goals. Some people benefit from short-term therapy (6-12 sessions), while others prefer longer-term support. We'll regularly check in about your progress and adjust our approach as needed."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealth. I also offer a sliding scale fee structure for those without insurance or with financial constraints. Please contact our office to verify your specific coverage."
    },
    {
      question: "Is everything I share in therapy confidential?",
      answer: "Yes, confidentiality is a cornerstone of therapy. Everything you share is protected by law and professional ethics. There are only a few exceptions, such as if there's imminent danger to yourself or others, or if there's suspected abuse of a child or vulnerable adult."
    },
    {
      question: "Can I schedule sessions outside of regular business hours?",
      answer: "I understand that traditional business hours don't work for everyone. I offer some evening and weekend appointments to accommodate different schedules. Please let me know your preferred times when scheduling, and I'll do my best to accommodate your needs."
    },
    {
      question: "What if I need to cancel or reschedule an appointment?",
      answer: "Life happens, and I understand that sometimes you need to reschedule. Please provide at least 24 hours notice when possible. Late cancellations or no-shows may be subject to a fee, but I'm always willing to work with you on scheduling challenges."
    },
    {
      question: "Do you offer online/virtual therapy sessions?",
      answer: "Yes, I offer secure video therapy sessions for your convenience and safety. Online therapy can be just as effective as in-person sessions and provides flexibility for those with busy schedules, transportation challenges, or who prefer the comfort of their own space."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about therapy and our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.has(index) ? (
                  <ChevronUp className="text-blue-900 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-900 flex-shrink-0" size={20} />
                )}
              </button>
              
              {openItems.has(index) && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Don't hesitate to reach out. I'm here to help and answer any additional questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="tel:+15551234567" 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-900 text-blue-900 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

