import { GraduationCap, FileText, MessageSquare, Briefcase, BookOpen, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import studyAbroadImg from "@/assets/study-abroad.jpg";
import visaDocImg from "@/assets/visa-documentation.jpg";
import interviewPrepImg from "@/assets/interview-prep.jpg";
import careerGuidanceImg from "@/assets/career-guidance.jpg";
import testPrepImg from "@/assets/test-prep.jpg";
import financialServicesImg from "@/assets/financial-services.jpg";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

const services: Service[] = [
  {
    icon: GraduationCap,
    title: "Study Abroad Counseling",
    description: "Expert guidance to help you choose the right university and country for your academic journey.",
    image: studyAbroadImg,
    features: ["University Selection", "Course Guidance", "Application Support", "Country Comparison"],
    link: "/study-abroad"
  },
  {
    icon: FileText,
    title: "Visa & Documentation",
    description: "Complete assistance with visa applications and all necessary documentation for a smooth process.",
    image: visaDocImg,
    features: ["Visa Processing", "Document Review", "Application Filing", "Status Tracking"],
    link: "/visa-documentation"
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Comprehensive training to ace your visa and university admission interviews with confidence.",
    image: interviewPrepImg,
    features: ["Mock Interviews", "Expert Feedback", "Confidence Building", "Tips & Strategies"],
    link: "/interview-prep"
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Strategic career counseling to align your education with your professional aspirations.",
    image: careerGuidanceImg,
    features: ["Career Planning", "Industry Insights", "Job Market Trends", "Profile Building"],
    link: "/career-guidance"
  },
  {
    icon: BookOpen,
    title: "Test Prep (IELTS, TOEFL, PTE)",
    description: "Targeted preparation programs to help you achieve top scores in language proficiency tests.",
    image: testPrepImg,
    features: ["Practice Tests", "Study Materials", "Expert Instructors", "Score Improvement"],
    link: "/test-prep"
  },
  {
    icon: Wallet,
    title: "Financial Services",
    description: "Guidance on scholarships, loans, and financial planning for your education abroad.",
    image: financialServicesImg,
    features: ["Scholarship Assistance", "Education Loans", "Budget Planning", "Financial Aid"],
    link: "/financial-services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for your international education journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group relative bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-2 block"
            >
              {/* Image Container */}
             {/* Image Container */}
<div className="relative h-48 overflow-hidden">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
  
  {/* Removed faded overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" /> */}
  
  {/* Icon Badge */}
  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
    <service.icon className="w-6 h-6 text-primary-foreground" />
  </div>
</div>


              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => window.open("https://forms.gle/df4Y4wG7yZ2ChV9X9", "_blank")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>

            <button
              onClick={() => window.open("https://forms.gle/eLWzUmkXFB1YWdQ69", "_blank")}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
