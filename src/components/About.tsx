import React from 'react';
import { GraduationCap, Globe, Building2, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      value: "100+",
      label: "Students Placed"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: "20+",
      label: "Global Destinations"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      value: "60+",
      label: "University Partners"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "05+",
      label: "Years of Experience"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8fafc] to-[#e6ecf5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#143C6E]">Global Pathway Overseas</span>
          </h2>
          <div className="w-24 h-1 bg-[#143C6E] mx-auto mb-6"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-[#143C6E]">Global Pathway Overseas</span>, we empower students to explore world-class education opportunities abroad. With years of expertise and partnerships with top universities worldwide, we guide you at every step — from counseling to visa approval.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#143C6E] rounded-full mt-2"></div>
                <p className="text-gray-600">Expert guidance from experienced counselors</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#143C6E] rounded-full mt-2"></div>
                <p className="text-gray-600">Partnerships with prestigious institutions globally</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#143C6E] rounded-full mt-2"></div>
                <p className="text-gray-600">End-to-end support throughout your journey</p>
              </div>
            </div>

            {/* <button className="mt-6 px-8 py-3 bg-[#143C6E] text-white font-semibold rounded-lg hover:bg-[#0f2f56] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More About Us
            </button> */}
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#143C6E] to-[#1e4d8f] rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-3 text-white/90">
                  <p className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Personalized career counseling</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Visa assistance & documentation</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Scholarship guidance</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-2xl">✓</span>
                    <span>Pre-departure orientation</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7FA4D2] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default About;
