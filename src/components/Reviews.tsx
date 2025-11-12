import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const reviews = [
    {
      text: "Global Pathway Overseas made my dream of studying in the UK a reality. The loan guidance was exceptional and they helped me secure funding within weeks. Forever grateful!",
      author: "Priya Sharma",
      location: "India",
      date: "March 2025",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      text: "The team's expertise in visa processing and loan assistance is outstanding. They guided me through every step and I got my unconditional offer letter on time. Highly recommended!",
      author: "Rahul Menon",
      location: "India",
      date: "April 2025",
      color: "from-blue-600 to-blue-700"
    },
    {
      text: "I was overwhelmed with the study abroad process, but Global Pathway Overseas simplified everything. Their loan guidance helped me focus on my studies without financial stress.",
      author: "Ananya Reddy",
      location: "India",
      date: "May 2025",
      color: "from-orange-600 to-orange-700"
    },
    {
      text: "Excellent service! From university selection to loan processing, everything was handled professionally. My counselor was available 24/7 to answer all my queries.",
      author: "Vikram Singh",
      location: "India",
      date: "February 2025",
      color: "from-purple-600 to-purple-700"
    },
    {
      text: "The loan guidance team at Global Pathway Overseas is phenomenal. They secured the best interest rates for me and made the entire documentation process seamless and stress-free.",
      author: "Sneha Patel",
      location: "India",
      date: "June 2025",
      color: "from-pink-600 to-pink-700"
    },
    {
      text: "I cannot thank Global Pathway Overseas enough for their dedication. They not only helped me get admission to my dream university but also arranged education loan at competitive rates.",
      author: "Arjun Kumar",
      location: "India",
      date: "January 2025",
      color: "from-teal-600 to-teal-700"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet: 2 cards
      } else {
        setItemsPerPage(3); // Desktop: 3 cards
      }
      setCurrentIndex(0); // Reset to first page on resize
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const startIdx = currentIndex * itemsPerPage;
  const visibleReviews = reviews.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
            Why students trust Global Pathway Overseas
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl">
            Hear from students who chose and trusted Global Pathway Overseas to guide their study abroad journey.
          </p>
        </div>

        {/* Reviews Section */}
        <div className="relative">
          {/* Reviews Container - Horizontal Flex */}
          <div className="flex gap-4 sm:gap-5 mb-5 sm:mb-6 overflow-hidden">
            {visibleReviews.map((review, index) => (
              <div
                key={startIdx + index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6 flex-1 min-w-0 transform hover:-translate-y-0.5"
              >
                {/* Quote Icon */}
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${review.color} mb-3 sm:mb-4 shadow-md`}>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 min-h-[90px] sm:min-h-[100px]">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-2.5 sm:pt-3">
                  <p className="text-gray-900 font-semibold text-sm sm:text-base mb-0.5">
                    {review.author}
                  </p>
                  <p className="text-gray-500 text-xs italic">
                    Global Pathway Student, {review.location}, {review.date}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">Student</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end items-center gap-2.5 sm:gap-3">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>

          {/* Page Indicator */}
          <div className="flex justify-center mt-4 sm:mt-5">
            <p className="text-xs sm:text-sm text-gray-500">
              {currentIndex + 1} / {totalPages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;