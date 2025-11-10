import { FileText, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import visaDocImg from "@/assets/visa-documentation.jpg";
import { Button } from "@/components/ui/button";

const VisaDocumentationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Curved Bottom */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={visaDocImg}
            alt="Visa & Documentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Visa & Documentation
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Complete assistance with visa applications and all necessary documentation for a smooth process
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
              Hassle-Free Visa Processing
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Navigating the visa application process can be complex and overwhelming. Our experienced team simplifies this journey by providing comprehensive support at every stage, ensuring your application is complete, accurate, and submitted on time.
              </p>
              <p>
                We stay updated with the latest visa regulations and requirements for all major study destinations, helping you avoid common pitfalls and maximize your chances of approval.
              </p>
              <p>
                From document preparation to interview guidance, we're with you every step of the way, making the visa process as smooth and stress-free as possible.
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">What We Offer</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Visa Processing",
                  description: "Complete assistance with visa application forms and submission procedures"
                },
                {
                  title: "Document Review",
                  description: "Thorough verification of all documents to ensure accuracy and completeness"
                },
                {
                  title: "Application Filing",
                  description: "Expert guidance on filing procedures and requirements for different countries"
                },
                {
                  title: "Status Tracking",
                  description: "Regular updates on your visa application status and next steps"
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
            Start Your Visa Application Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experts handle the complexities while you focus on preparing for your journey abroad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Document Checklist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDocumentationPage;
