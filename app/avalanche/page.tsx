import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cpu,
  ArrowRight,
  ShieldCheck,
  Timer,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const PROBLEM_STATEMENTS = Array.from({ length: 10 }).map((_, i) => ({
  id: `ps-${i + 1}`,
  title: `Avalanche Protocol ${i + 1}: ${
    [
      "Signal Degredation",
      "Power Failure",
      "Sandstorm Navigation",
      "Water Reclamation",
      "Shield Generator",
      "Spice Harvester Control",
      "Ornithopter Stabilization",
      "Stillsuit Telemetry",
      "Seismic Monitor",
      "Communication Relay",
    ][i]
  }`,
  description:
    "A critical system failure has occurred. Your engineering team must design a hardware solution to restore functionality before critical failure.",
  basicFeatures: [
    "Microcontroller interfacing (ESP32/Arduino)",
    "Sensor data acquisition",
    "Basic LED status indication",
  ],
  advancedFeatures: [
    "Wireless telemetry (WiFi/LoRa)",
    "Power efficiency optimization (<100mA)",
    "Fail-safe redundancy mechanisms",
  ],
}));

export default function AvalanchePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-dune-spice via-background to-background" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <Badge
            variant="outline"
            className="border-dune-spice/50 text-dune-spice px-4 py-1"
          >
            Hardware Division
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-dune-spice/90 drop-shadow-sm">
            AVALANCHE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            &quot;The heat of the desert destroys the weak. Only the most
            efficient circuits survive.&quot;
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-24 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-12">
          {/* Problem Statements Accordion */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <AlertTriangle className="text-dune-spice" />
              Active Hardware Protocols
            </h2>
            <p className="text-muted-foreground">
              Select a protocol to view detailed mission parameters.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {PROBLEM_STATEMENTS.map((ps) => (
                <AccordionItem
                  key={ps.id}
                  value={ps.id}
                  className="border border-dune-spice/20 rounded-lg bg-card/50 px-4"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-dune-spice transition-colors">
                    {ps.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 space-y-6">
                    <p className="text-muted-foreground">{ps.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-dune-spice text-sm uppercase tracking-wide">
                          Basic Features
                        </h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                          {ps.basicFeatures.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-dune-spice text-sm uppercase tracking-wide">
                          Advanced Features
                        </h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                          {ps.advancedFeatures.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Rules & Judging */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-dune-spice/80">
              <ShieldCheck />
              Judgement Criteria
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Circuit Efficiency</h3>
                <p className="text-sm text-muted-foreground">
                  Cleanliness of wiring and optimal component usage.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Code Logic</h3>
                <p className="text-sm text-muted-foreground">
                  Algorithms for sensor data processing and signal timing.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Survival Features</h3>
                <p className="text-sm text-muted-foreground">
                  Bonus points for innovative power-saving modes.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Demo Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  System must work consistently under &quot;simulated
                  stress&quot;.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl border border-dune-spice/20 bg-dune-spice/5 space-y-6 sticky top-24">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Timer className="w-5 h-5 text-dune-spice" />
                Timeline
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium">15th Jan 2026</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Hacking Ends</span>
                  <span className="font-medium">29th Jan 2026</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-medium">3-4 members</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-dune-spice/20" />

            <div className="space-y-4">
              <h3 className="font-bold">Ready to deploy?</h3>
              <Button
                className="w-full bg-dune-spice hover:bg-dune-spice/90 text-white"
                size="lg"
                asChild
              >
                <Link href="https://forms.gle/11tghw9o4j6JvKKD6">
                  Register Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
