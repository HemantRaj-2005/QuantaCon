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
  ArrowRight,
  Zap,
  AlertTriangle,
  Clock,
  Users,
  Code,
  Target,
  Sparkles,
  FileText,
} from "lucide-react";
import Link from "next/link";

// Import the JSON data
import PROBLEM_STATEMENTS from "./websprint_ps.json";

interface ProblemStatement {
  id: string;
  title: string;
  description: string;
  objective: string;
  basicFeatures: string[];
  advancedFeatures: string[];
}

const problemStatements = PROBLEM_STATEMENTS as ProblemStatement[];

// Helper function to parse bold text
const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span
          key={index}
          className="font-bold text-blue-500 dark:text-blue-400"
        >
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

export default function WebsprintPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 mt-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-500 via-background to-background" />
        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          <Badge
            variant="outline"
            className="border-blue-500/50 text-blue-500 px-6 py-2 text-base"
          >
            Software Division
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-blue-600 dark:text-blue-400 drop-shadow-lg">
            WEBSPRINT
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto italic">
            &quot;He who controls the interface controls the universe.&quot;
          </p>
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
                  <AlertTriangle className="text-blue-500 w-8 h-8" />
                  Active Software Protocols
                </h2>
                <p className="text-lg text-muted-foreground">
                  Select a protocol to view detailed mission parameters and
                  challenges.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-6">
                {problemStatements.map((ps) => (
                  <AccordionItem
                    key={ps.id}
                    value={ps.id}
                    className="border-2 border-blue-500/30 rounded-xl bg-linear-to-br from-card to-card/70 shadow-lg overflow-hidden"
                  >
                    <AccordionTrigger className="text-xl font-bold hover:text-blue-500 transition-colors text-left px-6 py-5 hover:bg-blue-500/5">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono rounded-lg px-3 py-1 text-sm">
                          {ps.id.toUpperCase()}
                        </div>
                        <span className="text-left">{ps.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-8 space-y-8">
                      {/* Description */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-blue-500" />
                          <h3 className="font-semibold text-lg">
                            Mission Context
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          {parseBoldText(ps.description)}
                        </p>
                      </div>

                      {/* Objective */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-blue-500" />
                          <h3 className="font-semibold text-lg">
                            Primary Objective
                          </h3>
                        </div>
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                          <p className="text-foreground leading-relaxed">
                            {parseBoldText(ps.objective)}
                          </p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                              Basic Requirements
                            </h4>
                          </div>
                          <ul className="space-y-3 pl-1">
                            {ps.basicFeatures.map((f, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="bg-blue-500/10 rounded-full p-1 mt-1">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                </div>
                                <span className="text-muted-foreground">
                                  {parseBoldText(f)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                            <h4 className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                              Advanced Challenges
                            </h4>
                          </div>
                          <ul className="space-y-3 pl-1">
                            {ps.advancedFeatures.map((f, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="bg-purple-500/10 rounded-full p-1 mt-1">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                                </div>
                                <span className="text-muted-foreground">
                                  {parseBoldText(f)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar Info - 1/3 width */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border-2 border-blue-500/30 bg-linear-to-b from-blue-500/10 to-background shadow-xl sticky top-24">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-500" />
                  Sprint Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">15th Jan - 29th Jan, 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-semibold">3-4 Members</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                    <Code className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Platform & Stack
                      </p>
                      <p className="font-semibold">Web • Any Modern Stack</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Accept the Challenge?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join the elite developers shaping the future of web
                      interfaces.
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
                      href="https://drive.google.com/file/d/1AnCYTxI2sDXAd3TLVzYkoTbLBp40BhaP/view?usp=sharing"
                      target="_blank"
                    >
                      <FileText className="mr-3 w-5 h-5" />
                      Download PS (PDF)
                    </Link>
                  </Button>

                  {/* Registration Button */}
                  <Button
                    className="w-full bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-14 text-lg shadow-lg shadow-blue-500/25"
                    size="lg"
                    asChild
                  >
                    <Link
                      href="https://forms.gle/11tghw9o4j6JvKKD6"
                      target="_blank"
                    >
                      Register Now <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </Button>

                  <div className="text-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-medium">
                      ⏰ Registration closes:{" "}
                      <span className="text-blue-500">14th Jan, 2026</span>
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