import { Search, Heart, Key } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Properties",
    description: "Browse through thousands of properties using our advanced search filters. Find homes that match your specific needs and budget."
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Create a personalized list of properties you love. Compare features, prices, and locations to make informed decisions."
  },
  {
    icon: Key,
    title: "Get the Keys",
    description: "Connect with verified agents, schedule tours, and complete your purchase or rental process with our trusted partners."
  }
];

export function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect home is easier than ever. Follow our simple three-step process 
            to discover and secure your dream property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}