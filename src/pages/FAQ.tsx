import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are your operating hours?',
      answer: 'We are open from 9 AM to 9 PM, all days of the week including weekends and holidays for your convenience.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Please contact our office to verify your specific insurance coverage.'
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting the dentist every 6 months for regular check-ups and cleanings to maintain optimal oral health.'
    },
    {
      question: 'Do you provide emergency dental services?',
      answer: 'Yes, we provide emergency dental services. Please call our clinic immediately if you have a dental emergency.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'During your first visit, we will conduct a comprehensive oral examination, take necessary X-rays, and discuss your treatment plan.'
    },
    {
      question: 'Are your treatments painless?',
      answer: 'We use modern techniques and anesthesia to ensure all procedures are as comfortable and painless as possible.'
    },
    {
      question: 'Do you treat children?',
      answer: 'Yes, we specialize in pediatric dentistry and provide child-friendly dental care in a comfortable environment.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and offer flexible payment plans for major treatments.'
    },
    {
      question: 'How long does a typical appointment take?',
      answer: 'Appointment duration varies by treatment. Regular check-ups take 30-45 minutes, while complex procedures may take longer.'
    },
    {
      question: 'Do you provide teeth whitening services?',
      answer: 'Yes, we offer professional teeth whitening services that are safe and effective for brightening your smile.'
    },
    {
      question: 'What should I do if I have a dental emergency after hours?',
      answer: 'Call our emergency line. We provide after-hours emergency care for urgent dental issues.'
    },
    {
      question: 'Do you offer orthodontic treatments?',
      answer: 'Yes, we provide various orthodontic treatments including traditional braces and clear aligners.'
    },
    {
      question: 'How do I prepare for my dental appointment?',
      answer: 'Arrive 10 minutes early, bring your insurance cards and ID, and inform us of any medications you are taking.'
    },
    {
      question: 'What makes Sakthi Dental Clinic different?',
      answer: 'We combine advanced technology with compassionate care, offering personalized treatment plans in a modern, comfortable environment.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our dental services, procedures, and clinic policies.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-pink-50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-rose-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our friendly team is here to help. Contact us directly for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;