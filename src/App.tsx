import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";
import CountryDetail from "./pages/CountryDetail";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Service pages
import StudyAbroad from "./pages/StudyAbroadPage";
import VisaDocumentation from "./pages/VisaDocumentationPage";
import InterviewPrep from "./pages/InterviewPrepPage";
import CareerGuidance from "./pages/CareerGuidancePage";
import TestPrep from "./pages/TestPrepPage";
import FinancialServices from "./pages/FinancialServicesPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Countries from "./components/Countries";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/"; // Hide only on Index

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/visa-documentation" element={<VisaDocumentation />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/test-prep" element={<TestPrep />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/country/:countryId" element={<CountryDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/countries" element={<Countries />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
      
      <WhatsAppFloat />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;