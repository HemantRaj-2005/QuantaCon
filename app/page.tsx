import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { EventCard } from "@/components/event-card";
import { CoordinatorCard } from "@/components/coordinator-card";
import { Separator } from "@/components/ui/separator";
import { Cpu, Globe } from "lucide-react";

export default function Home() {
  const professors = [
    {
      name: "Dr. Example Professor",
      role: "Faculty Advisor",
      instagramLink: "#",
      linkedinLink: "#",
      image: "",
    },
    // Add more professors if needed
  ];

  const finalYearCoordinators = [
    {
      name: "Soumya",
      role: "Final Year Coordinator",
      instagramLink: "https://www.instagram.com/so.me.ai/",
      linkedinLink: "https://www.linkedin.com/in/soumya-das-nit/",
      image: "",
    },
    {
      name: "Nandre Harish",
      role: "Final Year Coordinator",
      instagramLink: "https://www.instagram.com/harish_varma__",
      linkedinLink: "https://www.linkedin.com/in/harishnandre/",
      image: "",
    },
  ];

  const preFinalCoordinators = [
    {
      name: "Hemant Raj",
      role: "Pre-Final Year Coordinator of Web Sprint",
      instagramLink: "https://www.instagram.com/too_lazy_to_raj",
      linkedinLink: "https://www.linkedin.com/in/hemantraj-mnnit/",
      image: "/images/coordinators/HemantRaj.jpg",
    },
    {
      name: "Stilgar",
      role: "Hardware Sietch Leader",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Gurney Halleck",
      role: "Backend Warmaster",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Lady Jessica",
      role: "Reverend Mother of UX",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Thufir Hawat",
      role: "Master of Computation",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Liet Kynes",
      role: "Planetologist of Data",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Alia Atreides",
      role: "Saint of Syntax",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
    {
      name: "Shadout Mapes",
      role: "Keeper of the Code",
      instagramLink: "#",
      linkedinLink: "#",
      image: "", // Will show User icon
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-dune-spice selection:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />

      {/* Events Section */}
      <section
        id="events"
        className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-dune-sand">
            The Challenges of Arrakis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your path. Will you maximize hardware efficiency or weave the
            digital web?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <EventCard
            title="AVALANCHE"
            description="The ultimate hardware hackathon. Optimize circuits, minimize latency, and survive the heat."
            features={[
              "Circuit Design Challenges",
              "Microcontroller Programming",
              "Signal Processing Tasks",
              "Real-time Debugging",
            ]}
            internalLink="/avalanche"
            icon={Cpu}
            variant="spice"
          />
          <EventCard
            title="WEBSPRINT"
            description="A race against time to build the most responsive and beautiful web interfaces."
            features={[
              "Frontend Development",
              "UI/UX Design Implementation",
              "API Integration",
              "Performance Optimization",
            ]}
            internalLink="/websprint"
            icon={Globe}
            variant="space"
          />
        </div>
      </section>

      <Separator className="bg-dune-sand/10 max-w-7xl mx-auto" />

      {/* Professors Section */}
      <section
        id="professors"
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
            Faculty Advisors
          </h2>
          <p className="text-muted-foreground mt-2">
            Guiding mentors with wisdom and experience.
          </p>
        </div>

        <div className="sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {professors.map((professor, i) => (
            <CoordinatorCard
              key={`prof-${i}`}
              name={professor.name}
              role={professor.role}
              instagramLink={professor.instagramLink}
              linkedinLink={professor.linkedinLink}
              image={professor.image}
            />
          ))}
        </div>
      </section>

      {/* Final Year Coordinators Section */}
      <section
        id="final-year"
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10 bg-muted/10 rounded-3xl my-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
            Final Year Coordinators
          </h2>
          <p className="text-muted-foreground mt-2">
            Leading the charge with senior expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {finalYearCoordinators.map((coordinator, i) => (
            <CoordinatorCard
              key={`final-${i}`}
              name={coordinator.name}
              role={coordinator.role}
              instagramLink={coordinator.instagramLink}
              linkedinLink={coordinator.linkedinLink}
              image={coordinator.image}
            />
          ))}
        </div>
      </section>

      {/* Pre-Final Coordinators Section */}
      <section
        id="pre-final"
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
            Pre-Final Year Coordinators
          </h2>
          <p className="text-muted-foreground mt-2">
            The rising stars managing event operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {preFinalCoordinators.map((coordinator, i) => (
            <CoordinatorCard
              key={`prefinal-${i}`}
              name={coordinator.name}
              role={coordinator.role}
              instagramLink={coordinator.instagramLink}
              linkedinLink={coordinator.linkedinLink}
              image={coordinator.image}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-dune-sand/10 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-dune-spice">
              Electronics Society
            </h3>
            <p className="text-sm text-muted-foreground">
              Department of Electronics & Communication Engineering
            </p>
          </div>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground/80">
            <a href="#" className="hover:text-dune-sand transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-dune-sand transition-colors">
              LinkedIn
            </a>
            <a
              href="https://electronics-society.com"
              target="_blank"
              className="hover:text-dune-sand transition-colors"
            >
              Website
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            © 2026 QuantaCon. All rights reserved. The spice must flow.
          </p>
        </div>
      </footer>
    </main>
  );
}