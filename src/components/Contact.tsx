import React from 'react';
import { Calendar, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image with Curve Cut */}
      <div className="relative h-[400px] md:h-[500px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-800/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Let's Start Your Journey
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Connect with our expert counselors to make your study abroad dream a reality
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
              {/* Schedule Meet */}
              <a
                href="#schedule"
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Schedule a Meeting
                  </h3>
                  {/* <p className="text-gray-600">
                    Book a free consultation with our counselors at your convenience
                  </p> */}
                  <span className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    Book Now
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>

              {/* Call Us */}
              <a
                href="tel:+1234567890"
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Call Us Now
                  </h3>
                  {/* <p className="text-gray-600">
                    Speak directly with our team for immediate assistance
                  </p> */}
                  <span className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700">
                    +1 (234) 567-890
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Curved Bottom Cut */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C360,20 720,20 1080,64 C1260,86 1350,96 1440,96 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contact;