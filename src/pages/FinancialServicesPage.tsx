import { Wallet, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import financialServicesImg from "@/assets/financial-services.jpg";
import { Button } from "@/components/ui/button";

const FinancialServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Curved Bottom */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={financialServicesImg}
            alt="Financial Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center mb-6">
              <Wallet className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Financial Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Guidance on scholarships, loans, and financial planning for your education abroad
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
              Smart Financial Planning for Education
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Financing your international education doesn't have to be overwhelming. Our financial services team helps you explore all available funding options and create a realistic budget for your study abroad journey.
              </p>
              <p>
                From identifying scholarship opportunities to securing education loans with favorable terms, we guide you through the entire financial planning process, ensuring you can focus on your studies without financial stress.
              </p>
              <p>
                We understand that every student's financial situation is unique, which is why we provide personalized guidance tailored to your specific needs and circumstances.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Scholarship Assistance",
                  description: "Help identifying and applying for scholarships and grants you qualify for"
                },
                {
                  title: "Education Loans",
                  description: "Guidance on securing education loans from reputable lenders with competitive rates"
                },
                {
                  title: "Budget Planning",
                  description: "Comprehensive budgeting support for tuition, living expenses, and other costs"
                },
                {
                  title: "Financial Aid",
                  description: "Information on financial aid programs and how to maximize your funding"
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
            Plan Your Education Finances Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore funding options and create a financial plan for your studies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg">
              Financial Consultation
            </Button>
            <Button size="lg" variant="outline">
              Scholarship Database
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialServicesPage;
