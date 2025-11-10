import { GraduationCap, FileText, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface Country {
  id: string;
  flag: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  topUniversities: string[];
  requirements: string[];
}

const countries: Country[] = [
  {
    id: "uk",
    flag: "🇬🇧",
    name: "Study in the UK",
    tagline: "World-class education, post-study work visa, diverse culture",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070",
    description: "The United Kingdom offers a rich academic heritage with globally recognized qualifications.",
    highlights: ["World-class education system", "Post-study work visa opportunities", "Rich cultural diversity", "Strong research facilities"],
    topUniversities: ["University of Birmingham", "University of Leeds", "University of Nottingham"],
    requirements: ["IELTS Score", "Offer Letter from University", "Proof of Funds", "Valid Passport"],
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Study in Canada",
    tagline: "Affordable education, PR opportunities, friendly environment",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070",
    description: "Canada is renowned for its welcoming atmosphere and high-quality education at affordable costs.",
    highlights: ["Affordable tuition fees", "Permanent residency pathways", "Safe and welcoming environment", "Excellent work opportunities"],
    topUniversities: ["University of Toronto", "McGill University", "University of British Columbia"],
    requirements: ["IELTS/TOEFL Score", "University Acceptance", "Financial Proof", "Study Permit"],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Study in Australia",
    tagline: "High employability, flexible stay options, top research universities",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070",
    description: "Australia combines academic excellence with a high quality of life.",
    highlights: ["High graduate employability", "Flexible visa options", "World-class research facilities", "Beautiful lifestyle and climate"],
    topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney"],
    requirements: ["IELTS/PTE Score", "CoE from University", "Overseas Student Health Cover", "Financial Evidence"],
  },
  {
    id: "usa",
    flag: "🇺🇸",
    name: "Study in the USA",
    tagline: "Global exposure, wide range of courses, innovation-driven culture",
    image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070",
    description: "The United States is home to the world's most prestigious universities.",
    highlights: ["Home to top-ranked universities", "Diverse course offerings", "Innovation and research hub", "Strong industry connections"],
    topUniversities: ["Harvard University", "Stanford University", "MIT"],
    requirements: ["TOEFL/IELTS Score", "University Acceptance Letter", "Financial Documentation", "F-1 Visa"],
  },
  {
    id: "newzealand",
    flag: "🇳🇿",
    name: "Study in New Zealand",
    tagline: "Quality education, stunning landscapes, work opportunities",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071",
    description: "New Zealand offers a unique blend of academic excellence and natural beauty.",
    highlights: ["High-quality education system", "Safe and peaceful environment", "Post-study work rights", "Spectacular natural scenery"],
    topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington"],
    requirements: ["IELTS Score", "Offer of Place", "Proof of Funds", "Student Visa"],
  },
  {
    id: "germany",
    flag: "🇩🇪",
    name: "Study in Germany",
    tagline: "Tuition-free education, strong economy, engineering excellence",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
    description: "Germany is known for its tuition-free or low-cost education at public universities.",
    highlights: ["Tuition-free public universities", "Strong engineering programs", "Robust economy and job market", "Rich cultural heritage"],
    topUniversities: ["Technical University of Munich", "University of Heidelberg", "Humboldt University"],
    requirements: ["TestDaF/IELTS", "University Admission", "Blocked Account", "Student Visa"],
  },
];

export default function Countries() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section with Background Image */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          {/* Gradient Overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Premium Study Destinations</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
                Study Abroad Destinations
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
                Explore world-class education opportunities across the globe. Choose your dream destination and unlock your future.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="w-full h-12 sm:h-16 md:h-20 fill-current text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      {/* Country Cards Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Country Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {countries.map((country, index) => (
              <div
                key={country.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(`/country/${country.id}`)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 h-full">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Flag Badge */}
                    <div className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>

                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {country.name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2">
                      {country.tagline}
                    </p>

                    {/* Quick Info Icons */}
                    <div className="flex items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-slate-600 flex-wrap">
                      <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-blue-50">
                        <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">{country.topUniversities.length} Top Unis</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-blue-50">
                        <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">{country.requirements.length} Requirements</span>
                      </div>
                    </div>

                    {/* Learn More */}
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                        <span className="text-sm sm:text-base font-semibold">Explore Details</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}