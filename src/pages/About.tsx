import React from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Anupriya',
      designation: 'Founder & Chief Dental Surgeon',
      image: 'https://i.postimg.cc/brkMBJQR/Dr-Anupriya.jpg',
      description: 'Founder of Sakthi Dental Clinic with over 10 years of experience in comprehensive dental care and cosmetic dentistry.'
    },
    {
      name: 'Dr. Ananya Iyer',
      designation: 'Prosthodontist',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialist in prosthetic dentistry, dental crowns, bridges, and complete oral rehabilitation.'
    },
    {
      name: 'Dr. Meera Subramanian',
      designation: 'Endodontist',
      image: 'https://images.pexels.com/photos/6627022/pexels-photo-6627022.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in root canal therapy, endodontic treatments, and dental trauma management.'
    },
    {
      name: 'Dr. Arvind Kumar',
      designation: 'Dental Surgeon',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experienced in general dentistry, oral surgery, and preventive dental care.'
    },
    {
      name: 'Dr. Sneha N',
      designation: 'Orthodontist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialist in orthodontic treatments, braces, and teeth alignment procedures.'
    },
    {
      name: 'Dr. Srinivas Rohit Ramanujam',
      designation: 'Implantologist',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in dental implants, oral surgery, and advanced implantology procedures.'
    },
    {
      name: 'Dr. Balu',
      designation: 'Laser Surgeon',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialist in laser dentistry and minimally invasive dental procedures.'
    },
    {
      name: 'Dr. Vikram Raj Kishore',
      designation: 'Aligners Partner',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in clear aligner therapy and invisible orthodontic treatments.'
    },
    {
      name: 'Dr. Ajay Kumar',
      designation: 'Oral & Maxillofacial Surgeon',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialist in complex oral surgery, jaw surgery, and facial trauma treatment.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get to Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Dr. Anupriya</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in compassionate dental care with expertise, innovation, and a patient-first approach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Dr. Anupriya</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dr. Anupriya is the founder and chief dental surgeon of Sakthi Dental Clinic with over a decade of experience in providing comprehensive dental care. She completed her Bachelor of Dental Surgery (BDS) from a prestigious institution and has since dedicated her career to helping patients achieve optimal oral health.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Her expertise spans across various dental specialties including cosmetic dentistry, oral surgery, and preventive care. Dr. Anupriya believes in staying updated with the latest advancements in dental technology and techniques to provide the best possible care to her patients.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://i.postimg.cc/brkMBJQR/Dr-Anupriya.jpg"
                alt="Dr. Anupriya"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional dental care that combines advanced technology with compassionate service, ensuring every patient receives personalized treatment in a comfortable and welcoming environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading dental clinic in Hosur, recognized for our commitment to excellence, innovation in dental care, and our dedication to improving the oral health and overall well-being of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced dental professionals dedicated to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-pink-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-rose-500 font-medium mb-4">{member.designation}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Sakthi Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">We treat every patient with empathy, understanding, and genuine care.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in all aspects of dental care.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient-Centered</h3>
              <p className="text-gray-600">Your needs and comfort are at the center of everything we do.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;