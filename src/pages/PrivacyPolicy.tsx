import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy and the security of your personal information are of utmost importance to us.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Information Collection */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Schedule an appointment or contact us through our website</li>
                  <li>Complete patient forms or questionnaires</li>
                  <li>Participate in surveys or provide feedback</li>
                  <li>Subscribe to our newsletter or communications</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This may include your name, email address, phone number, address, medical history, and other relevant health information necessary for providing dental care.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide, maintain, and improve our dental services</li>
                  <li>Schedule and manage appointments</li>
                  <li>Communicate with you about your treatment</li>
                  <li>Send you relevant health information and updates</li>
                  <li>Process payments and insurance claims</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect the rights, property, or safety of our patients and staff</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To healthcare providers involved in your care</li>
                  <li>To insurance companies for claim processing</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety, or that of others</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We require all third parties to respect the security of your personal information and treat it in accordance with applicable laws.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, restricted access, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Object to or restrict the processing of your information</li>
                  <li>Withdraw your consent where processing is based on consent</li>
                  <li>Request a copy of your information in a portable format</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookies through your browser settings, but disabling them may affect the functionality of our website.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Our services are not directed to children under 13 years of age, and we do not knowingly collect personal information from children under 13 without parental consent. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </div>
            </div>

            {/* Policy Changes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and indicating the date of the latest revision. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="text-gray-700">
                  <p><strong>Sakthi Dental Clinic</strong></p>
                  <p>Hosur, Tamil Nadu, India</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Email: info@sakthidental.com</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
              <p>Last updated: January 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;