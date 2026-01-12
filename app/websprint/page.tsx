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
  Globe,
  Code2,
  ArrowRight,
  Layout,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

const PROBLEM_STATEMENTS = Array.from({ length: 10 }).map((_, i) => ({
  id: `ws-${i + 1}`,
  title: `WebSprint Protocol ${i + 1}: ${
    [
      "Guild Dashboard",
      "Spice Trading Interface",
      "Ornithopter Flight Log",
      "Sietch Management System",
      "Bene Gesserit Archives",
      "Planetary Warning System",
      "Water Allocation Tracker",
      "Smuggler's Market",
      "Crysknife Inventory",
      "Sandworm Migration Map",
    ][i]
  }`,
  description:
    "The Emperor requires a new digital interface. Construct a responsive and accessible web module.",
  basicFeatures: [
    "Responsive Design (Mobile/Desktop)",
    "Clean & Modern UI/UX",
    "Basic Form Validation",
  ],
  advancedFeatures: [
    "Dark/Light Mode Toggle",
    "Real-time Data Visualization",
    "Micro-animations (Framer Motion)",
  ],
}));

export default function WebsprintPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500 via-background to-background" />
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <Badge
            variant="outline"
            className="border-blue-500/50 text-blue-500 px-4 py-1"
          >
            Software Division
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-blue-600 dark:text-blue-400 drop-shadow-sm">
            WEBSPRINT
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            &quot;He who controls the interface controls the universe.&quot;
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-24 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-12">
          {/* Problem Statements Accordion */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <AlertTriangle className="text-blue-500" />
              Active Software Protocols
            </h2>
            <p className="text-muted-foreground">
              Select a protocol to view detailed mission parameters.
            </p>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {PROBLEM_STATEMENTS.map((ps) => (
                <AccordionItem
                  key={ps.id}
                  value={ps.id}
                  className="border border-blue-500/20 rounded-lg bg-card/50 px-4"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-blue-500 transition-colors">
                    {ps.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 space-y-6">
                    <p className="text-muted-foreground">{ps.description}</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-500 text-sm uppercase tracking-wide">
                          Basic Features
                        </h4>
                        <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
                          {ps.basicFeatures.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-500 text-sm uppercase tracking-wide">
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
            <h2 className="text-2xl font-bold flex items-center gap-3 text-blue-500/80">
              <Layout />
              Judgement Criteria
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Visual Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Does the design WOW the user? Use of color, typography, and
                  space.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">User Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Navigation flow, responsiveness on mobile devices.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Code Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Clean architecture, component reuse, and semantic HTML.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Unique micro-interactions or creative layouts.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-6 sticky top-24">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-500" />
                Sprint Details
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">15th Jan,2026 - 29th Jan,2026</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Team Size</span>
                  <span className="font-medium">3-4 Members</span>
                </li>
              </ul>
            </div>

            <div className="h-px bg-blue-500/20" />

            <div className="space-y-4">
              <h3 className="font-bold">Accept the Challenge?</h3>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
