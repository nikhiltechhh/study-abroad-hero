import { UserCheck, Shield, TrendingUp, Globe, HeadphonesIcon } from "lucide-react";

const Choose = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Personalized Guidance",
      description: "Tailored immigration solutions designed specifically for your unique circumstances and goals."
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Clear communication and complete transparency at every step of your visa application journey."
    },
    {
      icon: TrendingUp,
      title: "High Visa Success Rate",
      description: "Proven track record of successful applications with industry-leading approval rates."
    },
    {
      icon: Globe,
      title: "Recognized Partners Worldwide",
      description: "Trusted partnerships with immigration authorities and institutions across the globe."
    },
    {
      icon: HeadphonesIcon,
      title: "End-to-End Support",
      description: "Comprehensive assistance from initial consultation through to successful visa approval and beyond."
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted partner for seamless visa processing and immigration solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-feature-card-bg border border-feature-card-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 hover:border-primary/50"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-feature-icon-bg text-feature-icon group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 md:mt-16">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
            Get Started Today
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Choose;
