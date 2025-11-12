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
    description:
      "The United Kingdom offers a rich academic heritage with globally recognized qualifications.",
    highlights: [
      "World-class education system",
      "Post-study work visa opportunities",
      "Rich cultural diversity",
      "Strong research facilities",
    ],
    topUniversities: [
      "University of Birmingham",
      "University of Leeds",
      "University of Nottingham",
    ],
    requirements: [
      "IELTS Score",
      "Offer Letter from University",
      "Proof of Funds",
      "Valid Passport",
    ],
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Study in Canada",
    tagline: "Affordable education, PR opportunities, friendly environment",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070",
    description:
      "Canada is renowned for its welcoming atmosphere and high-quality education at affordable costs.",
    highlights: [
      "Affordable tuition fees",
      "Permanent residency pathways",
      "Safe and welcoming environment",
      "Excellent work opportunities",
    ],
    topUniversities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
    ],
    requirements: [
      "IELTS/TOEFL Score",
      "University Acceptance",
      "Financial Proof",
      "Study Permit",
    ],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Study in Australia",
    tagline: "High employability, flexible stay options, top research universities",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2070",
    description:
      "Australia combines academic excellence with a high quality of life.",
    highlights: [
      "High graduate employability",
      "Flexible visa options",
      "World-class research facilities",
      "Beautiful lifestyle and climate",
    ],
    topUniversities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
    ],
    requirements: [
      "IELTS/PTE Score",
      "CoE from University",
      "Overseas Student Health Cover",
      "Financial Evidence",
    ],
  },
  {
    id: "usa",
    flag: "🇺🇸",
    name: "Study in the USA",
    tagline: "Global exposure, wide range of courses, innovation-driven culture",
    image:
      "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070",
    description:
      "The United States is home to the world's most prestigious universities.",
    highlights: [
      "Home to top-ranked universities",
      "Diverse course offerings",
      "Innovation and research hub",
      "Strong industry connections",
    ],
    topUniversities: ["Harvard University", "Stanford University", "MIT"],
    requirements: [
      "TOEFL/IELTS Score",
      "University Acceptance Letter",
      "Financial Documentation",
      "F-1 Visa",
    ],
  },
  {
    id: "newzealand",
    flag: "🇳🇿",
    name: "Study in New Zealand",
    tagline: "Quality education, stunning landscapes, work opportunities",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071",
    description:
      "New Zealand offers a unique blend of academic excellence and natural beauty.",
    highlights: [
      "High-quality education system",
      "Safe and peaceful environment",
      "Post-study work rights",
      "Spectacular natural scenery",
    ],
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
    ],
    requirements: [
      "IELTS Score",
      "Offer of Place",
      "Proof of Funds",
      "Student Visa",
    ],
  },
  {
    id: "germany",
    flag: "🇩🇪",
    name: "Study in Germany",
    tagline: "Tuition-free education, strong economy, engineering excellence",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070",
    description:
      "Germany is known for its tuition-free or low-cost education at public universities.",
    highlights: [
      "Tuition-free public universities",
      "Strong engineering programs",
      "Robust economy and job market",
      "Rich cultural heritage",
    ],
    topUniversities: [
      "Technical University of Munich",
      "University of Heidelberg",
      "Humboldt University",
    ],
    requirements: [
      "TestDaF/IELTS",
      "University Admission",
      "Blocked Account",
      "Student Visa",
    ],
  },
  {
    id: "ireland",
    flag: "🇮🇪",
    name: "Study in Ireland",
    tagline:
      "English-speaking, tech hub, friendly culture, post-study work visa",
    image:
      "https://i.pinimg.com/736x/5b/7f/98/5b7f9853c9925610f9de93e4f9176e07.jpg",
    description:
      "Ireland offers a vibrant education system with strong industry connections in the tech sector.",
    highlights: [
      "English-speaking nation",
      "Tech and pharmaceutical hub",
      "Welcoming culture",
      "Post-study work opportunities",
    ],
    topUniversities: [
      "Trinity College Dublin",
      "University College Dublin",
      "National University of Ireland",
    ],
    requirements: [
      "IELTS/TOEFL Score",
      "University Acceptance",
      "Financial Proof",
      "Student Visa",
    ],
  },
  {
    id: "dubai",
    flag: "🇦🇪",
    name: "Study in Dubai",
    tagline: "Modern infrastructure, tax-free income, multicultural environment",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    description:
      "Dubai provides world-class education with a unique blend of Eastern and Western cultures.",
    highlights: [
      "State-of-the-art facilities",
      "Tax-free income",
      "Gateway to Middle East",
      "International campus branches",
    ],
    topUniversities: [
      "American University in Dubai",
      "Heriot-Watt University Dubai",
      "University of Wollongong Dubai",
    ],
    requirements: [
      "IELTS/TOEFL Score",
      "University Acceptance",
      "Financial Documentation",
      "Student Visa",
    ],
  },
];

export default function Countries() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Premium Study Destinations
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
            Study Abroad Destinations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
            Explore world-class education opportunities across the globe. Choose
            your dream destination and unlock your future.
          </p>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {countries.map((country, index) => {
            const isDisabled =
              country.id === "ireland" || country.id === "dubai";
            return (
              <div
                key={country.id}
                className={`group ${
                  isDisabled
                    ? "cursor-not-allowed opacity-90"
                    : "cursor-pointer"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (!isDisabled) navigate(`/country/${country.id}`);
                }}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 h-full">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-xl sm:text-2xl shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3
                      className={`text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300 ${
                        isDisabled
                          ? "text-slate-400"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {country.name}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2">
                      {country.tagline}
                    </p>

                    <div className="flex items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-slate-600 flex-wrap">
                      <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-blue-50">
                        <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">
                          {country.topUniversities.length} Top Unis
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-blue-50">
                        <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                        <span className="font-medium whitespace-nowrap">
                          {country.requirements.length} Requirements
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div
                        className={`flex items-center justify-between transition-colors ${
                          isDisabled
                            ? "text-slate-400"
                            : "group-hover:text-blue-600"
                        }`}
                      >
                        <span className="text-sm sm:text-base font-semibold">
                          {isDisabled ? "Coming Soon" : "Explore Details"}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                            isDisabled
                              ? "text-slate-400"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
