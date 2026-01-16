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
  Timer,
  AlertTriangle,
  Users,
  Zap,
  CircuitBoard,
  FileCode,
  Waves,
  Cog,
  Target,
  FileText,
} from "lucide-react";
import Link from "next/link";

// Import the JSON data
import PROBLEM_STATEMENTS from "./avalanche_ps.json";

interface ProblemStatement {
  id: string;
  title: string;
  description: string;
  objective: string;
  eligibility: string;
}

const problemStatements = PROBLEM_STATEMENTS as ProblemStatement[];

// Helper function to parse bold text
const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="font-bold text-dune-spice">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

export default function AvalanchePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background to-gray-900 text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-dune-spice via-gray-900 to-background" />
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          <Badge
            variant="outline"
            className="border-dune-spice/50 text-dune-spice px-6 py-2 text-base backdrop-blur-sm"
          >
            <CircuitBoard className="w-4 h-4 mr-2" />
            Hardware & Core Division
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-dune-spice drop-shadow-lg">
            AVALANCHE
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto italic">
            &quot;The heat of the desert destroys the weak. Only the most
            efficient circuits survive.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Badge className="bg-dune-spice/20 text-dune-spice border-dune-spice/30">
              <Cpu className="w-3 h-3 mr-1" /> Analog Design
            </Badge>
            <Badge className="bg-dune-spice/20 text-dune-spice border-dune-spice/30">
              <FileCode className="w-3 h-3 mr-1" /> Verilog HDL
            </Badge>
            <Badge className="bg-dune-spice/20 text-dune-spice border-dune-spice/30">
              <Waves className="w-3 h-3 mr-1" /> Signal Processing
            </Badge>
            <Badge className="bg-dune-spice/20 text-dune-spice border-dune-spice/30">
              <Cog className="w-3 h-3 mr-1" /> C Programming
            </Badge>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem Statements Accordion */}
            <section className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold flex items-center gap-3">
                  <AlertTriangle className="text-dune-spice w-8 h-8" />
                  Active Hardware Protocols
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select a protocol to view detailed mission parameters and
                  technical specifications.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-6">
                {problemStatements.map((ps) => (
                  <AccordionItem
                    key={ps.id}
                    value={ps.id}
                    className="border-2 border-dune-spice/30 rounded-xl bg-linear-to-br from-gray-900 to-gray-950 shadow-xl shadow-dune-spice/5 overflow-hidden"
                  >
                    <AccordionTrigger className="text-xl font-bold hover:text-dune-spice transition-colors text-left px-6 py-5 hover:bg-dune-spice/5">
                      <div className="flex items-start gap-4 w-full">
                        <div className="bg-dune-spice/10 text-dune-spice font-mono rounded-lg px-3 py-1 text-sm shrink-0">
                          {ps.id.toUpperCase()}
                        </div>
                        <div className="flex-1 text-left">
                          <span>{ps.title}</span>
                          <div className="mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs border-dune-spice/30 text-dune-spice/80"
                            >
                              {ps.eligibility}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8 space-y-8">
                      {/* Description */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-dune-spice" />
                          <h3 className="font-semibold text-lg">
                            Mission Brief
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {parseBoldText(ps.description)}
                        </p>
                      </div>

                      {/* Objective */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Zap className="w-5 h-5 text-dune-spice" />
                          <h3 className="font-semibold text-lg">
                            Primary Objective
                          </h3>
                        </div>
                        <div className="bg-dune-spice/5 border border-dune-spice/20 rounded-lg p-4">
                          <p className="text-foreground leading-relaxed font-medium">
                            {parseBoldText(ps.objective)}
                          </p>
                        </div>
                      </div>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2">
                        {ps.title.includes("Miller") && (
                          <>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              Cadence Virtuoso
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              CMOS Design
                            </Badge>
                            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                              Analog Simulation
                            </Badge>
                          </>
                        )}
                        {ps.title.includes("Serial") && (
                          <>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              Verilog HDL
                            </Badge>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              UART Protocol
                            </Badge>
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              FSM Design
                            </Badge>
                          </>
                        )}
                        {ps.title.includes("Echoes") && (
                          <>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              DSP Hardware
                            </Badge>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              Fixed-Point
                            </Badge>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              Pipelining
                            </Badge>
                          </>
                        )}
                        {ps.title.includes("Scheduler") && (
                          <>
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              C Programming
                            </Badge>
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              OS Concepts
                            </Badge>
                            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                              Algorithms
                            </Badge>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar Info - 1/3 width */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border-2 border-dune-spice/30 bg-linear-to-b from-dune-spice/10 to-gray-900 shadow-xl sticky top-24">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Timer className="w-6 h-6 text-dune-spice" />
                  Timeline & Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-dune-spice/5 border border-dune-spice/20">
                    <Timer className="w-5 h-5 text-dune-spice" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">15th Jan - 29th Jan, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-dune-spice/5 border border-dune-spice/20">
                    <Users className="w-5 h-5 text-dune-spice" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-semibold">3-4 Members</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-dune-spice/5 border border-dune-spice/20">
                    <CircuitBoard className="w-5 h-5 text-dune-spice" />
                    <div>
                      <p className="text-sm text-muted-foreground">Platform</p>
                      <p className="font-semibold">Hardware/EDA/C</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-dune-spice/30 to-transparent" />

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Ready to Engineer?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join the elite hardware engineers shaping the future of
                      core systems.
                    </p>
                  </div>

                  {/* PDF Button */}
                  <Button
                    className="w-full bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white h-14 text-lg shadow-lg shadow-gray-500/25"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link
                      href="https://drive.google.com/file/d/1F0XkTGnA_DbFzPAnaLcREojUrs8CI96F/view?usp=sharing"
                      target="_blank"
                    >
                      <FileText className="mr-3 w-5 h-5" />
                      Download PS (PDF)
                    </Link>
                  </Button>

                  {/* Registration Button */}
                  <Button
                    className="w-full bg-linear-to-r from-dune-spice to-dune-spice/90 hover:from-dune-spice/90 hover:to-dune-spice text-white h-14 text-lg shadow-lg shadow-dune-spice/25"
                    size="lg"
                    onClick={() => alert("Registration Closed")}
                  >
                    
                      Register Now <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>

                  {/* Submit Abstract Button */}
                  <Button
                    className="w-full bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white h-14 text-lg shadow-lg shadow-amber-500/25"
                    size="lg"
                    asChild
                  >
                    <Link href="https://forms.gle/BoXiq5kAyubzxNp48" target="_blank">
                      Submit Abstract <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </Button>

                  <div className="text-center p-3 rounded-lg bg-dune-spice/10 border border-dune-spice/20">
                    <p className="text-sm font-medium">
                      ⏰ Registration closes:{" "}
                      <span className="text-dune-spice">16th Jan, 2026</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
