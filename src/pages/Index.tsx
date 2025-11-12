import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Countryh from "@/components/Countryh";
import Choose from "@/components/Choose";
// import Contact from "@/components/Contact";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Countryh />
      <Choose />
      {/* <Contact /> */}
      <Reviews />
      <Footer />
     
    </div>
  );
};

export default Index;