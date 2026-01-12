import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { EventCard } from "@/components/event-card";
import { CoordinatorCard } from "@/components/coordinator-card";
import { Separator } from "@/components/ui/separator";
import { Cpu, Globe } from "lucide-react";

export default function Home() {
  const mentors = [
    { name: "Paul Atreides", role: "Muad'Dib of Architecture" },
    { name: "Chani Kynes", role: "Frontend Fedaykin" },
    { name: "Stilgar", role: "Hardware Sietch Leader" },
    { name: "Duncan Idaho", role: "Swordmaster of Security" },
    { name: "Gurney Halleck", role: "Backend Warmaster" },
    { name: "Lady Jessica", role: "Reverend Mother of UX" },
    { name: "Thufir Hawat", role: "Master of Computation" },
    { name: "Liet Kynes", role: "Planetologist of Data" },
    { name: "Alia Atreides", role: "Saint of Syntax" },
    { name: "Shadout Mapes", role: "Keeper of the Code" },
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

      {/* Coordinators Section */}
      <section
        id="mentors"
        className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
            High Council Mentors
          </h2>
          <p className="text-muted-foreground mt-2">
            Guiding the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mentors.map((mentor, i) => (
            <CoordinatorCard
              key={i}
              name={mentor.name}
              role={mentor.role}
              instagramLink="#"
              linkedinLink="#"
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
