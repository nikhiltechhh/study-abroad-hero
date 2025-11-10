import { GraduationCap, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import studyAbroadImg from "@/assets/study-abroad.jpg";
import { Button } from "@/components/ui/button";

const StudyAbroadPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Curved Bottom */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={studyAbroadImg}
            alt="Study Abroad Counseling"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Study Abroad Counseling
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Expert guidance to help you choose the right university and country for your academic journey
            </p>
          </div>
        </div>
        
        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Your Gateway to Global Education
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Embarking on an international education journey is a life-changing decision. Our expert counselors are here to guide you through every step of the process, ensuring you make informed choices that align with your academic goals and career aspirations.
              </p>
              <p>
                With our comprehensive knowledge of universities worldwide, we help you navigate through thousands of options to find the perfect fit for your unique profile, preferences, and budget.
              </p>
              <p>
                We understand that studying abroad is not just about academics—it's about personal growth, cultural experiences, and building a global network that will benefit you throughout your life.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h3>
            <div className="space-y-4">
              {[
                {
                  title: "University Selection",
                  description: "Personalized recommendations based on your academic profile and career goals"
                },
                {
                  title: "Course Guidance",
                  description: "Expert advice on choosing the right program that aligns with your interests"
                },
                {
                  title: "Application Support",
                  description: "End-to-end assistance with university applications and documentation"
                },
                {
                  title: "Country Comparison",
                  description: "Detailed insights into education systems, costs, and opportunities across countries"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert counselors and take the first step towards your dream university
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadPage;
