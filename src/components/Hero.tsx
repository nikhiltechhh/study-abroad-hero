import { ArrowRight, CheckCircle, MapPin, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const features = [
    "Expert Counselling",
    "Visa Assistance",
    "Scholarship Guidance",
    "Test Preparation"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Students studying abroad" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/40"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20 animate-fade-in"
          >
            <Award className="h-4 w-4" />
            <span>Trusted by 500+ Students Worldwide</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in delay-200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Study Abroad with
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-white">
                Confidence & Support
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Unlock your potential with personalized guidance for studying at world-class universities. 
              Your dream education is just one step away.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in delay-300">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in delay-500">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-light text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 backdrop-blur-sm"
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 max-w-3xl mx-auto animate-fade-in delay-700">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Students Placed</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-white/80">Countries</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 animate-fade-in delay-1000">
            <p className="text-white/70 text-sm mb-4">Trusted Partner for Top Universities</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center opacity-70">
              <div className="text-white/60 text-xs md:text-sm font-medium px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                UK Universities
              </div>
              <div className="text-white/60 text-xs md:text-sm font-medium px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                USA Colleges
              </div>
              <div className="text-white/60 text-xs md:text-sm font-medium px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                Canada Institutes
              </div>
              <div className="text-white/60 text-xs md:text-sm font-medium px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                Australia Programs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
