import { GraduationCap, FileText, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  {
    id: "ireland",
    flag: "🇮🇪",
    name: "Study in Ireland",
    tagline: "English-speaking, tech hub, friendly culture, post-study work visa",
    image: "https://i.pinimg.com/736x/5b/7f/98/5b7f9853c9925610f9de93e4f9176e07.jpg",
    description: "Ireland offers a vibrant education system with strong industry connections in the tech sector.",
    highlights: ["English-speaking nation", "Tech and pharmaceutical hub", "Welcoming culture", "Post-study work opportunities"],
    topUniversities: ["Trinity College Dublin", "University College Dublin", "National University of Ireland"],
    requirements: ["IELTS/TOEFL Score", "University Acceptance", "Financial Proof", "Student Visa"],
  },
  {
    id: "dubai",
    flag: "🇦🇪",
    name: "Study in Dubai",
    tagline: "Modern infrastructure, tax-free income, multicultural environment",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    description: "Dubai provides world-class education with a unique blend of Eastern and Western cultures.",
    highlights: ["State-of-the-art facilities", "Tax-free income", "Gateway to Middle East", "International campus branches"],
    topUniversities: ["American University in Dubai", "Heriot-Watt University Dubai", "University of Wollongong Dubai"],
    requirements: ["IELTS/TOEFL Score", "University Acceptance", "Financial Documentation", "Student Visa"],
  },
];

export default function Countries() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useState(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const maxIndex = countries.length - visibleCards;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Study Abroad Destinations
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-3">
            Explore world-class education opportunities across the globe. Choose your dream destination and unlock your future.
          </p>
          <p className="text-base sm:text-lg text-blue-600 font-semibold">
            We also process applications for all countries worldwide
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white hover:shadow-xl"
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div
                    // ✅ Disable navigation for Ireland & Dubai
                    onClick={() => {
                      if (country.id !== "ireland" && country.id !== "dubai") {
                        navigate(`/country/${country.id}`);
                      }
                    }}
                    className={`group h-full ${
                      country.id === "ireland" || country.id === "dubai"
                        ? "cursor-not-allowed opacity-90"
                        : "cursor-pointer"
                    }`}
                  >
                    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-blue-300 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden flex-shrink-0">
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Flag Badge */}
                        <div className="absolute top-4 right-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg z-20 group-hover:scale-110 transition-transform duration-300">
                          {country.flag}
                        </div>

                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {country.name}
                        </h3>
                        <p className="text-base text-slate-600 mb-6 leading-relaxed line-clamp-2 flex-grow">
                          {country.tagline}
                        </p>

                        {/* Quick Info Icons */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 flex-wrap">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50">
                            <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium whitespace-nowrap">{country.topUniversities.length} Top Unis</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50">
                            <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="font-medium whitespace-nowrap">{country.requirements.length} Requirements</span>
                          </div>
                        </div>

                        {/* Learn More */}
                        <div className="mt-auto pt-4 border-t border-slate-200">
                          <div
                            className={`flex items-center justify-between transition-colors ${
                              country.id === "ireland" || country.id === "dubai"
                                ? "text-slate-400"
                                : "group-hover:text-blue-600"
                            }`}
                          >
                            <span className="text-base font-semibold">
                              {country.id === "ireland" || country.id === "dubai"
                                ? "Coming Soon"
                                : "Explore Details"}
                            </span>
                            <ArrowRight
                              className={`w-5 h-5 transition-transform ${
                                country.id === "ireland" || country.id === "dubai"
                                  ? "text-slate-400"
                                  : "group-hover:translate-x-1"
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 hover:text-white hover:shadow-xl"
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-blue-600"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
