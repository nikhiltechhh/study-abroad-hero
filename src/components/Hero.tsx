import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, MapPin, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [countryCount, setCountryCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    // Animate student count
    const studentInterval = setInterval(() => {
      setStudentCount((prev) => {
        if (prev >= 500) {
          clearInterval(studentInterval);
          return 500;
        }
        return prev + 10;
      });
    }, 20);

    // Animate country count
    const countryInterval = setInterval(() => {
      setCountryCount((prev) => {
        if (prev >= 25) {
          clearInterval(countryInterval);
          return 25;
        }
        return prev + 1;
      });
    }, 50);

    // Animate success rate
    const rateInterval = setInterval(() => {
      setSuccessRate((prev) => {
        if (prev >= 98) {
          clearInterval(rateInterval);
          return 98;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(studentInterval);
      clearInterval(countryInterval);
      clearInterval(rateInterval);
    };
  }, []);

  const features = [
    {
      title: "Expert Counselling",
      description: "Professional guidance from experienced counsellors"
    },
    {
      title: "Visa Assistance",
      description: "Complete visa support and documentation"
    },
    {
      title: "Scholarship Guidance",
      description: "Find and apply for scholarships"
    },
    {
      title: "Test Preparation",
      description: "IELTS, TOEFL, GRE & SAT coaching"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden -mt-10">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20"
            >
              <Award className="h-4 w-4" />
              <span>Trusted by 500+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Study Abroad with
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-white">
                  Confidence & Support
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-xl">
                Unlock your potential with personalized guidance for studying at world-class universities. 
                Your dream education is just one step away.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
              size="lg"
              onClick={() => window.open("https://forms.gle/df4Y4wG7yZ2ChV9X9", "_blank")}
              className="bg-accent hover:bg-accent-light text-white shadow-2xl hover:shadow-accent/50 transition-all duration-300 text-base md:text-lg px-8 py-6 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://forms.gle/eLWzUmkXFB1YWdQ69", "_blank")}
                className="border-2 border-white text-white bg-white/5 hover:bg-white hover:text-primary transition-all duration-300 text-base md:text-lg px-8 py-6 backdrop-blur-sm"
              >
                Book Free Consultation
              </Button>

            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-xl">
              <div className="transition-all duration-300 hover:scale-105 -mt-10">
                <div className="flex items-start gap-2 mb-2">
                  {/* <Users className="h-5 w-5 text-accent mt-1" /> */}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{studentCount}+</div>
                <div className="text-sm text-white/80">Students Placed</div>
              </div>
              
              <div className="transition-all duration-300 hover:scale-105 -mt-10">
                <div className="flex items-start gap-2 mb-2">
                  {/* <MapPin className="h-5 w-5 text-accent mt-1" /> */}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{countryCount}+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              
              <div className="transition-all duration-300 hover:scale-105 -mt-10">
                <div className="flex items-start gap-2 mb-2">
                  {/* <Award className="h-5 w-5 text-accent mt-1" /> */}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{successRate}%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 -mt-16">
              <p className="text-white/70 text-sm mb-3">Trusted Partner for Top Universities</p>
              <div className="flex flex-wrap gap-3 items-center opacity-70">
                <div className="text-white/60 text-xs font-medium px-3 py-1.5 bg-white/5 rounded-lg backdrop-blur-sm">
                  UK Universities
                </div>
                <div className="text-white/60 text-xs font-medium px-3 py-1.5 bg-white/5 rounded-lg backdrop-blur-sm">
                  USA Colleges
                </div>
                <div className="text-white/60 text-xs font-medium px-3 py-1.5 bg-white/5 rounded-lg backdrop-blur-sm">
                  Canada Institutes
                </div>
                <div className="text-white/60 text-xs font-medium px-3 py-1.5 bg-white/5 rounded-lg backdrop-blur-sm">
                  Australia Programs
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
         <div className="hidden md:grid grid-cols-2 gap-6 animate-fade-in delay-300">
  {features.map((feature, index) => (
    <div
      key={index}
      className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 bg-accent/20 rounded-xl group-hover:bg-accent/30 transition-colors duration-300">
          <CheckCircle className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;