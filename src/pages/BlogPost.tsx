import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import studyDestinationsImg from '@/assets/blog-study-destinations.jpg';
import visaInterviewImg from '@/assets/blog-visa-interview.jpg';
import ukWorkVisaImg from '@/assets/blog-uk-work-visa.jpg';
import scholarshipsImg from '@/assets/blog-scholarships.jpg';
import accommodationImg from '@/assets/blog-accommodation.jpg';
import englishTestsImg from '@/assets/blog-english-tests.jpg';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const blogPosts = [
    {
      id: 1,
      slug: 'top-5-countries-indian-students-2025',
      title: "Top 5 Countries for Indian Students in 2025",
      excerpt: "Discover the most popular study destinations offering world-class education, post-study work opportunities, and vibrant student communities for Indian students.",
      category: "Study Destinations",
      date: "November 8, 2025",
      readTime: "5 min read",
      image: studyDestinationsImg,
      tags: ["Countries", "Rankings", "2025"],
      content: `
        <h2>Why Choosing the Right Country Matters</h2>
        <p>Selecting the right study destination is one of the most crucial decisions in your international education journey. Each country offers unique advantages in terms of education quality, career opportunities, and cultural experiences.</p>
        
        <h2>1. United Kingdom</h2>
        <p>The UK remains a top choice for Indian students, with its prestigious universities like Oxford, Cambridge, and Imperial College London. The Graduate Route visa allows you to stay for 2 years (3 years for PhD graduates) after completing your studies.</p>
        <ul>
          <li>World-renowned universities with centuries of excellence</li>
          <li>Post-study work visa (Graduate Route) for 2-3 years</li>
          <li>Shorter course duration (1-year master's programs)</li>
          <li>Strong Indian diaspora community</li>
        </ul>

        <h2>2. Canada</h2>
        <p>Canada offers an excellent balance of quality education, affordable tuition, and clear pathways to permanent residence. Universities like Toronto, McGill, and UBC are globally recognized.</p>
        <ul>
          <li>Post-Graduation Work Permit (PGWP) up to 3 years</li>
          <li>Clear pathway to permanent residence</li>
          <li>Affordable tuition compared to UK/US</li>
          <li>Welcoming immigration policies</li>
        </ul>

        <h2>3. Australia</h2>
        <p>Known for its high quality of life and world-class universities, Australia attracts thousands of Indian students annually. The Temporary Graduate visa allows you to work after graduation.</p>

        <h2>4. United States</h2>
        <p>Home to the world's top universities including MIT, Stanford, and Harvard, the US offers unparalleled academic excellence and research opportunities.</p>

        <h2>5. Germany</h2>
        <p>Germany stands out for its tuition-free or low-cost education at public universities, making it an attractive option for budget-conscious students seeking quality education.</p>

        <h2>Making Your Decision</h2>
        <p>Consider factors like tuition costs, post-study work opportunities, quality of life, and career prospects when choosing your destination. Our counselors can help you make an informed decision based on your profile and goals.</p>
      `
    },
    {
      id: 2,
      slug: 'student-visa-interview-preparation',
      title: "How to Prepare for Your Student Visa Interview",
      excerpt: "Master your visa interview with expert tips, common questions, and essential documents checklist to maximize your approval chances.",
      category: "Visa Guide",
      date: "November 6, 2025",
      readTime: "7 min read",
      image: visaInterviewImg,
      tags: ["Visa", "Interview", "Tips"],
      content: `
        <h2>Understanding the Visa Interview Process</h2>
        <p>The student visa interview is a crucial step in your study abroad journey. Consular officers assess your intent to study, financial capability, and ties to your home country.</p>

        <h2>Essential Documents Checklist</h2>
        <ul>
          <li>Valid passport (with at least 6 months validity)</li>
          <li>DS-160 confirmation page (for US) or equivalent forms</li>
          <li>University offer letter and I-20/CAS</li>
          <li>Financial documents (bank statements, loan letters)</li>
          <li>Academic transcripts and certificates</li>
          <li>English proficiency test scores (IELTS/TOEFL)</li>
          <li>Visa application fee receipt</li>
          <li>Passport-sized photographs</li>
        </ul>

        <h2>Common Interview Questions</h2>
        <p><strong>1. Why do you want to study in [Country]?</strong><br/>
        Focus on specific academic programs, faculty expertise, and career opportunities unique to that country.</p>

        <p><strong>2. Why this university and program?</strong><br/>
        Research thoroughly and mention specific courses, professors, research facilities, or unique program features.</p>

        <p><strong>3. How will you finance your education?</strong><br/>
        Be prepared with exact figures and documentation proving sufficient funds.</p>

        <p><strong>4. What are your plans after graduation?</strong><br/>
        Demonstrate clear career goals and how you plan to utilize your education.</p>

        <h2>Expert Tips for Success</h2>
        <ul>
          <li>Be honest and confident in your answers</li>
          <li>Speak clearly and avoid memorized responses</li>
          <li>Organize documents in a neat folder</li>
          <li>Dress professionally and arrive early</li>
          <li>Show strong ties to your home country</li>
          <li>Demonstrate genuine interest in your field of study</li>
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <p>Don't provide inconsistent information, show migration intent, or appear unprepared about your course details. Always maintain eye contact and positive body language.</p>
      `
    },
    {
      id: 3,
      slug: 'uk-post-study-work-visa-changes-2025',
      title: "Latest Changes in UK Post-Study Work Visa",
      excerpt: "Stay updated with the newest regulations for UK Graduate Route visa, including eligibility criteria, application process, and timeline changes for 2025.",
      category: "Policy Updates",
      date: "November 4, 2025",
      readTime: "6 min read",
      image: ukWorkVisaImg,
      tags: ["UK", "Work Visa", "Updates"],
      content: `
        <h2>Understanding the UK Graduate Route</h2>
        <p>The UK Graduate Route, also known as the Post-Study Work Visa, allows international students who have completed an eligible course to stay and work in the UK for up to 2 years (3 years for doctoral students).</p>

        <h2>Recent Changes in 2025</h2>
        <p>The UK government has introduced several updates to the Graduate Route visa to ensure the integrity of the immigration system while supporting genuine students.</p>

        <h3>Key Updates:</h3>
        <ul>
          <li>Stricter English language requirements verification</li>
          <li>Enhanced scrutiny of student sponsor compliance</li>
          <li>Updated salary thresholds for switching to Skilled Worker visa</li>
          <li>Revised list of eligible qualifications</li>
        </ul>

        <h2>Eligibility Criteria</h2>
        <p>To be eligible for the Graduate Route visa, you must:</p>
        <ul>
          <li>Have completed an eligible course at a UK higher education institution</li>
          <li>Hold a valid Student visa or Tier 4 (General) visa</li>
          <li>Have studied in the UK for the required period</li>
          <li>Apply before your Student visa expires</li>
          <li>Meet the English language requirement</li>
        </ul>

        <h2>Application Process</h2>
        <p>The application must be made online while you're in the UK. You'll need:</p>
        <ul>
          <li>Current passport or valid travel document</li>
          <li>Proof of successful course completion</li>
          <li>Evidence of current Student visa</li>
          <li>Biometric information</li>
        </ul>

        <h2>Transitioning to Skilled Worker Visa</h2>
        <p>After your Graduate Route visa, you can switch to a Skilled Worker visa if you secure a job with a licensed sponsor. The minimum salary threshold has been updated to £38,700 (or going rate for the job, whichever is higher).</p>

        <h2>Important Deadlines</h2>
        <p>Apply for your Graduate Route visa before your Student visa expires. Processing typically takes 8 weeks, but can vary. Plan ahead to avoid visa gaps.</p>
      `
    },
    {
      id: 4,
      slug: 'scholarship-opportunities-indian-students',
      title: "Scholarship Opportunities for Indian Students",
      excerpt: "Explore fully-funded and partial scholarships available across top universities worldwide, with application deadlines and eligibility requirements.",
      category: "Scholarships",
      date: "November 1, 2025",
      readTime: "8 min read",
      image: scholarshipsImg,
      tags: ["Scholarships", "Funding", "Applications"],
      content: `
        <h2>Why Scholarships Matter</h2>
        <p>Scholarships can significantly reduce the financial burden of studying abroad, making world-class education accessible to talented students regardless of their economic background.</p>

        <h2>Fully-Funded Scholarships</h2>
        
        <h3>Chevening Scholarships (UK)</h3>
        <p>A prestigious UK government scholarship covering tuition, living expenses, and travel costs for one-year master's programs.</p>
        <ul>
          <li>Coverage: Full tuition + monthly stipend + travel</li>
          <li>Eligibility: Minimum 2 years work experience, leadership potential</li>
          <li>Application Deadline: Typically November each year</li>
        </ul>

        <h3>Australia Awards Scholarships</h3>
        <p>Funded by the Australian government for students from developing countries, including India.</p>
        <ul>
          <li>Coverage: Full tuition + stipend + health insurance + travel</li>
          <li>Eligibility: Strong academic record, commitment to return to home country</li>
          <li>Application Deadline: April-May annually</li>
        </ul>

        <h3>Fulbright-Nehru Master's Fellowships (USA)</h3>
        <p>Offers full funding for master's degree programs in the United States.</p>

        <h2>Partial Scholarships</h2>

        <h3>GREAT Scholarships (UK)</h3>
        <p>£10,000 towards tuition fees for one year of study at participating UK universities.</p>

        <h3>University-Specific Scholarships</h3>
        <p>Many universities offer merit-based and need-based scholarships ranging from 10% to 50% tuition fee waivers.</p>

        <h2>Application Tips</h2>
        <ul>
          <li>Start early - research scholarships 12-18 months before intake</li>
          <li>Tailor your application to each scholarship's specific requirements</li>
          <li>Highlight leadership experience and community involvement</li>
          <li>Get strong letters of recommendation</li>
          <li>Write compelling personal statements showing impact and vision</li>
          <li>Meet all eligibility criteria and deadlines</li>
        </ul>

        <h2>External Funding Sources</h2>
        <ul>
          <li>Inlaks Scholarships</li>
          <li>Tata Scholarships at Cornell University</li>
          <li>J.N. Tata Endowment for Higher Education</li>
          <li>Narotam Sekhsaria Foundation Scholarships</li>
        </ul>

        <h2>Maximizing Your Chances</h2>
        <p>Apply to multiple scholarships, maintain excellent academic records, and demonstrate clear career goals aligned with scholarship objectives. Our counselors can help identify scholarships matching your profile.</p>
      `
    },
    {
      id: 5,
      slug: 'student-accommodation-guide-abroad',
      title: "Student Accommodation Guide: Finding Your Perfect Home Abroad",
      excerpt: "Navigate the housing market in your study destination with insights on university halls, private rentals, costs, and essential tips for international students.",
      category: "Student Life",
      date: "October 29, 2025",
      readTime: "6 min read",
      image: accommodationImg,
      tags: ["Accommodation", "Housing", "Tips"],
      content: `
        <h2>Types of Student Accommodation</h2>
        
        <h3>1. University Halls of Residence</h3>
        <p>Managed by universities, these offer convenience and community but may be more expensive.</p>
        <p><strong>Pros:</strong></p>
        <ul>
          <li>On-campus or close to campus location</li>
          <li>All-inclusive bills (electricity, water, internet)</li>
          <li>Active social community with other students</li>
          <li>Guaranteed accommodation for first-year students</li>
        </ul>
        <p><strong>Cons:</strong></p>
        <ul>
          <li>Higher costs compared to private housing</li>
          <li>Limited kitchen facilities (often shared)</li>
          <li>Less privacy</li>
        </ul>

        <h3>2. Private Student Housing</h3>
        <p>Purpose-built student accommodation operated by private companies.</p>
        <p><strong>Average Costs:</strong></p>
        <ul>
          <li>UK: £150-300 per week</li>
          <li>USA: $800-1,500 per month</li>
          <li>Australia: AUD 200-400 per week</li>
          <li>Canada: CAD 600-1,200 per month</li>
        </ul>

        <h3>3. Private Rentals (Shared Houses/Apartments)</h3>
        <p>Often cheaper but requires more responsibility and paperwork.</p>

        <h3>4. Homestays</h3>
        <p>Living with a local family, ideal for cultural immersion and language practice.</p>

        <h2>Finding Accommodation</h2>
        <p><strong>University Resources:</strong></p>
        <ul>
          <li>University accommodation office</li>
          <li>Student union notice boards</li>
          <li>University Facebook groups</li>
        </ul>

        <p><strong>Online Platforms:</strong></p>
        <ul>
          <li>UK: Rightmove, Zoopla, Spareroom</li>
          <li>USA: Apartments.com, Zillow, Craigslist</li>
          <li>Australia: Domain, Realestate.com.au</li>
          <li>Canada: Viewit.ca, Rentals.ca</li>
        </ul>

        <h2>Essential Checklist Before Signing</h2>
        <ul>
          <li>Read the tenancy agreement carefully</li>
          <li>Check deposit protection scheme details</li>
          <li>Document property condition with photos/videos</li>
          <li>Verify included utilities and internet speed</li>
          <li>Check proximity to campus and transport links</li>
          <li>Inspect safety features (locks, fire alarms, lighting)</li>
          <li>Understand notice period and contract length</li>
        </ul>

        <h2>Money-Saving Tips</h2>
        <ul>
          <li>Share accommodation with other students</li>
          <li>Live slightly further from campus for lower rent</li>
          <li>Book early to get better rates</li>
          <li>Consider all-inclusive options to avoid surprise bills</li>
          <li>Check for student discounts on utilities</li>
        </ul>

        <h2>Safety First</h2>
        <p>Always view properties in person or via video call, never send money before seeing the place, and verify landlord credentials through official channels.</p>
      `
    },
    {
      id: 6,
      slug: 'ielts-vs-toefl-comparison-guide',
      title: "IELTS vs TOEFL: Which English Test Should You Take?",
      excerpt: "Compare the two major English proficiency tests, understand their formats, scoring systems, and which one best suits your university requirements.",
      category: "Test Preparation",
      date: "October 27, 2025",
      readTime: "5 min read",
      image: englishTestsImg,
      tags: ["IELTS", "TOEFL", "English Tests"],
      content: `
        <h2>Overview of IELTS and TOEFL</h2>
        <p>Both IELTS (International English Language Testing System) and TOEFL (Test of English as a Foreign Language) are widely accepted English proficiency tests, but they differ in format, scoring, and regional preference.</p>

        <h2>Test Format Comparison</h2>
        
        <h3>IELTS</h3>
        <ul>
          <li><strong>Duration:</strong> 2 hours 45 minutes</li>
          <li><strong>Sections:</strong> Listening (30 min), Reading (60 min), Writing (60 min), Speaking (11-14 min)</li>
          <li><strong>Format:</strong> Paper-based or computer-based</li>
          <li><strong>Speaking:</strong> Face-to-face interview with examiner</li>
          <li><strong>Accent:</strong> British English (primarily)</li>
        </ul>

        <h3>TOEFL iBT</h3>
        <ul>
          <li><strong>Duration:</strong> About 3 hours</li>
          <li><strong>Sections:</strong> Reading (54-72 min), Listening (41-57 min), Speaking (17 min), Writing (50 min)</li>
          <li><strong>Format:</strong> Internet-based test</li>
          <li><strong>Speaking:</strong> Recorded responses to computer prompts</li>
          <li><strong>Accent:</strong> American English (primarily)</li>
        </ul>

        <h2>Scoring System</h2>
        <p><strong>IELTS:</strong> Scored on a 0-9 band scale (half-band increments)<br/>
        Most universities require 6.0-7.5 overall with minimum component scores</p>

        <p><strong>TOEFL:</strong> Scored 0-120 (each section 0-30)<br/>
        Most universities require 80-100+ overall with minimum section scores</p>

        <h2>Regional Preferences</h2>
        <p><strong>IELTS is preferred in:</strong></p>
        <ul>
          <li>UK, Australia, New Zealand</li>
          <li>Canada (both IELTS and TOEFL accepted)</li>
          <li>European universities</li>
        </ul>

        <p><strong>TOEFL is preferred in:</strong></p>
        <ul>
          <li>United States</li>
          <li>Canada (both IELTS and TOEFL accepted)</li>
        </ul>

        <h2>Which Test Should You Choose?</h2>
        
        <h3>Choose IELTS if:</h3>
        <ul>
          <li>You're applying to UK, Australia, or New Zealand universities</li>
          <li>You prefer face-to-face speaking interaction</li>
          <li>You're comfortable with British English</li>
          <li>You prefer paper-based exams (option available)</li>
        </ul>

        <h3>Choose TOEFL if:</h3>
        <ul>
          <li>You're primarily applying to US universities</li>
          <li>You're comfortable with American accent and idioms</li>
          <li>You prefer computer-based testing</li>
          <li>You're comfortable speaking to a microphone rather than a person</li>
        </ul>

        <h2>Preparation Tips</h2>
        <ul>
          <li>Check specific university requirements before choosing</li>
          <li>Take official practice tests to assess your level</li>
          <li>Allocate 2-3 months for serious preparation</li>
          <li>Focus on weak sections while maintaining strong areas</li>
          <li>Practice time management - crucial for both tests</li>
          <li>Join preparation courses or study groups</li>
        </ul>

        <h2>Test Costs and Validity</h2>
        <p>Both tests cost approximately $200-250 USD and are valid for 2 years. You can retake either test as many times as needed, but universities typically accept your highest score.</p>

        <h2>Our Recommendation</h2>
        <p>Check your target universities' requirements first. If both are accepted, choose based on your comfort with the test format and speaking style. Our test preparation services can help you excel in either test.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-primary hover:underline"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image with Curved Bottom */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-background" style={{
          clipPath: 'ellipse(70% 100% at 50% 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-24 relative z-10">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        <article className="bg-card rounded-2xl shadow-card p-8 md:p-12">
          {/* Category Badge */}
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {post.readTime}
            </div>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none text-foreground
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary rounded"></span>
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <article 
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                  className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
