import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied homeowners and investors who found their dream properties through AbodeAtlas. 
            Start your journey today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/listings">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <Search className="h-5 w-5 mr-2" />
                Browse Properties
              </Button>
            </Link>
            <Link to="/list-property">
              <Button size="lg" variant="outline" className="min-w-[200px] border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Plus className="h-5 w-5 mr-2" />
                List Your Property
              </Button>
            </Link>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            No hidden fees • Trusted agents • Secure transactions
          </p>
        </div>
      </div>
    </section>
  );
}