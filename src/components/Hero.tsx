import { ArrowRight, Globe, Award, Users, FileCheck, BookOpen, Plane, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Study Abroad Counselling",
      description: "Expert guidance for your educational journey",
    },
    {
      icon: FileCheck,
      title: "Admission & Application",
      description: "Complete application support",
    },
    {
      icon: Globe,
      title: "Visa & Documentation",
      description: "Hassle-free visa assistance",
    },
    {
      icon: Award,
      title: "Test Preparation",
      description: "IELTS, TOEFL, PTE coaching",
    },
    {
      icon: Users,
      title: "Scholarship Guidance",
      description: "Maximize your funding opportunities",
    },
    {
      icon: Plane,
      title: "Pre & Post Departure",
      description: "Complete travel support",
    },
    {
      icon: Home,
      title: "Accommodation",
      description: "Find your home abroad",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Globe className="h-4 w-4" />
              <span>Your Gateway to Global Education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
                Educational Dreams
              </span>
              Into Reality
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Expert guidance for studying abroad. From university selection to visa processing,
              we're with you every step of the way to ensure your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-light hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300 text-base sm:text-lg px-8 py-6"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Placed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-primary-light">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
