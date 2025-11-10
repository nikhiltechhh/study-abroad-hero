import { GraduationCap, Globe, Building2, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: "100+",
      label: "Students Placed",
    },
    {
      icon: Globe,
      value: "20+",
      label: "Global Destinations",
    },
    {
      icon: Building2,
      value: "60+",
      label: "University Partners",
    },
    {
      icon: Clock,
      value: "05+",
      label: "Years of Experience",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Global Pathway Overseas
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Global Pathway Overseas, we empower students to explore world-class 
              education opportunities abroad. With years of expertise and partnerships 
              with top universities worldwide, we guide you at every step — from 
              counseling to visa approval.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative bg-primary/10 rounded-full p-4 group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>

                  {/* Decorative element */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
