import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  GraduationCap,
  FileText,
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const countries = [
  {
    id: "uk",
    flag: "🇬🇧",
    name: "Study in the UK",
    tagline: "World-class education, post-study work visa, diverse culture",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop",
    description:
      "The United Kingdom offers a rich academic heritage with globally recognized qualifications. Home to world-leading institutions and a multicultural environment, the UK provides excellent opportunities for international students.",
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
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1600&h=900&fit=crop",
    description:
      "Canada is renowned for its welcoming atmosphere and high-quality education at affordable costs. With strong immigration pathways and diverse programs, it's an ideal destination for international students.",
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
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1600&h=900&fit=crop",
    description:
      "Australia combines academic excellence with a high quality of life. Known for cutting-edge research and innovation, Australian universities offer world-class education in a stunning environment.",
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
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop",
    description:
      "The United States is home to the world's most prestigious universities and offers unparalleled opportunities for academic and professional growth. Experience cutting-edge research and innovation in every field.",
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
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&h=900&fit=crop",
    description:
      "New Zealand offers a unique blend of academic excellence and natural beauty. With a focus on practical learning and research, it provides a safe and supportive environment for international students.",
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
      "https://wallpapercat.com/w/full/e/d/b/1527763-3840x2160-desktop-4k-berlin-background-photo.jpg",
    description:
      "Germany is known for its tuition-free or low-cost education at public universities. With a strong focus on engineering, technology, and research, Germany offers exceptional opportunities for international students.",
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
];

export default function CountryDetail() {
  const { countryId } = useParams();
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  useEffect(() => {
    const found = countries.find((c) => c.id === countryId);
    setSelectedCountry(found || countries[0]);
  }, [countryId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[75vh] md:h-[80vh] overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent z-10" />

          <img
            src={selectedCountry.image}
            alt={selectedCountry.name}
            className="w-full h-full object-cover scale-105 animate-in zoom-in duration-1000"
          />

          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="rgb(248 250 252)"
              />
            </svg>
          </div>

          {/* Country Info Badge */}
          <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-2 mt-20">
            <div className="backdrop-blur-2xl bg-white/95 rounded-3xl md:rounded-[2rem] px-6 md:px-10 py-6 md:py-2 shadow-2xl border border-white/50 animate-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6">
                <span className="text-5xl md:text-7xl animate-in zoom-in duration-500">
                  {selectedCountry.flag}
                </span>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-1xl md:text-1xl lg:text-2xl font-bold text-slate-900 mb-2">
                    {selectedCountry.name}
                  </h1>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {selectedCountry.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative -mt-1 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="space-y-12">
              {/* About */}
              <section>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      About Studying Here
                    </h2>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {selectedCountry.description}
                  </p>
                </div>
              </section>

              {/* Highlights */}
              <section>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Key Highlights
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {selectedCountry.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50  hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-lg">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Top Universities */}
              <section>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Top Universities
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedCountry.topUniversities.map((uni, i) => (
                      <div
                        key={i}
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl hover:-translate-y-1"
                      >
                        <div className="absolute top-4 right-4 text-6xl font-bold text-purple-100">
                          {(i + 1).toString().padStart(2, "0")}
                        </div>
                        <div className="relative">
                          <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center mb-4">
                            <span className="text-white font-bold text-lg">
                              {i + 1}
                            </span>
                          </div>
                          <p className="text-slate-800 font-semibold text-lg leading-snug">
                            {uni}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Requirements */}
              <section>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">
                      Requirements
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCountry.requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
                        <span className="text-slate-700 font-medium text-base">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              {/* <section>
                <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
                  <div className="relative">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Ready to Start Your Journey?
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                      Take the first step towards your international education.
                      Contact us to learn more about studying in{" "}
                      {selectedCountry.name.replace("Study in ", "")}.
                    </p>
                    <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                      Get Started
                    </button>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
