import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { EventCard } from "@/components/event-card";
import { CoordinatorCard } from "@/components/coordinator-card";
import { Separator } from "@/components/ui/separator";
import { Cpu, Globe } from "lucide-react";
import About from "@/components/About";

export default function Home() {
  const professors = [
    {
      name: "Dr. Basant Kumar",
      role: "Faculty Advisor",
      instagramLink: "#",
      linkedinLink:
        "https://www.linkedin.com/in/basant-kumar-9808476b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/images/coordinators/basantkumar.png",
    },
    // Add more professors if needed
  ];

  const finalYearCoordinators = [
    {
      name: "Soumya Das",
      role: "Final Year Coordinator",
      instagramLink: "https://www.instagram.com/so.me.ai/",
      linkedinLink: "https://www.linkedin.com/in/soumya-das-nit/",
      image: "/images/coordinators/Soumya.jpg",
    },
    {
      name: "Nandre Harish",
      role: "Final Year Coordinator",
      instagramLink: "https://www.instagram.com/harish_varma____/",
      linkedinLink: "https://www.linkedin.com/in/harishnandre/",
      image: "/images/coordinators/harish.jpeg",
    },
    {
      name: "Shreyansh Shah",
      role: "Final Year Coordinator",
      instagramLink:
        "https://www.instagram.com/mister__dude?igsh=MWdqdG40enYxc280dA==",
      linkedinLink:
        "https://www.linkedin.com/in/shreyans-shah-a2707b261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/images/coordinators/shreyansh.jpeg",
    },
  ];

  const preFinalCoordinators = [
    {
      name: "Hemant Raj",
      role: "Pre-Final Year Coordinator",
      instagramLink: "https://www.instagram.com/too_lazy_to_raj",
      linkedinLink: "https://www.linkedin.com/in/hemantraj-mnnit/",
      image: "/images/coordinators/HemantRaj.jpg",
    },
    {
      name: "Akash Singh",
      role: "Pre-final year coordinator",
      instagramLink:
        "https://www.instagram.com/singh___akash___?utm_source=qr&igsh=ZzNvMGh0dTd0enJm",
      linkedinLink: "https://www.linkedin.com/in/akash-singh-7bba5a298/",
      image: "/images/coordinators/AkashSingh.jpeg",
    },
    {
      name: "Harsh Singhal",
      role: "Pre-Final Year Coordinator",
      instagramLink: "https://www.instagram.com/the.harsh.singhal/harsh1611/",
      linkedinLink: "https://www.linkedin.com/in/singhalharsh1611/",
      image: "/images/coordinators/HarshSinghal.jpeg",
    },
    {
      name: "Ayush Tiwari",
      role: "Pre-Final Year Coordinator",
      instagramLink: "https://www.instagram.com/ayushtiwari5071/",
      linkedinLink:
        "https://www.linkedin.com/in/ayush-tiwari-84a823281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image: "/images/coordinators/AyushTiwari.jpeg",
    },

    {
      name: "Kallol Mondal",
      role: "Pre-final year coordinator",
      instagramLink: "#",
      linkedinLink: "https://www.linkedin.com/in/kallol-mondal-814370289",
      image: "/images/coordinators/kallol.jpeg",
    },
    {
      name: "Aditya Raj Ojha",
      role: "Pre-final year coordinator",
      instagramLink: "https://www.instagram.com/adxtya047",
      linkedinLink: "https://www.linkedin.com/in/aditya-raj-ojha-11b618289/",
      image: "/images/coordinators/adityaojha.jpeg",
    },
    {
      name: "Shudhanshu Bhandana",
      role: "Pre-final year coordinator",
      instagramLink: "#",
      linkedinLink: "https://www.linkedin.com/in/shudhanshu-bhadana-59868526b",
      image: "/images/coordinators/shudhanshu.jpeg",
    },
    {
      name: "Rishabh Saxena",
      role: "Pre-final year coordinator",
      instagramLink: "#",
      linkedinLink: "https://www.linkedin.com/in/rishabhsaxena4136",
      image: "/images/coordinators/risabh.jpeg",
    },
    {
      name: "Asoo Singh",
      role: "Pre-final year coordinator",
      instagramLink: "https://www.instagram.com/asoosingh2023/",
      linkedinLink: "https://www.linkedin.com/in/asoo-singh-73b5b8289",
      image: "/images/coordinators/asoo.png",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-dune-spice selection:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <About />

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
        className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground/80">
            Final Year Coordinators
          </h2>
          <p className="text-muted-foreground mt-2">
            Leading the charge with senior expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <a
              href="https://www.instagram.com/electronics_society_mnnit"
              className="hover:text-dune-sand transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/mnnit-electronics-society#"
              className="hover:text-dune-sand transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
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
