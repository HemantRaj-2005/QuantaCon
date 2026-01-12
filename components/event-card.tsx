import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface EventCardProps {
  title: string;
  description: string;
  features: string[];
  internalLink: string;
  icon: LucideIcon;
  variant: "spice" | "space";
}

export function EventCard({
  title,
  description,
  features,
  internalLink,
  icon: Icon,
  variant,
}: EventCardProps) {
  const isSpice = variant === "spice";

  return (
    <Card className="relative overflow-hidden border-dune-sand/20 bg-card/80 backdrop-blur-sm transition-all hover:border-dune-sand/50 hover:shadow-[0_0_30px_rgba(212,167,106,0.1)] group">
      <div
        className={`absolute top-0 left-0 w-1 h-full ${
          isSpice ? "bg-dune-spice" : "bg-dune-space"
        }`}
      />
      <div className="absolute -right-12 -top-12 opacity-5 rotate-12 transition-transform group-hover:rotate-45 group-hover:scale-110">
        <Icon size={180} className="text-foreground/5" />
      </div>

      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`p-2 rounded-lg ${
              isSpice ? "bg-dune-spice/20" : "bg-dune-space/20"
            }`}
          >
            <Icon
              className={isSpice ? "text-dune-spice" : "text-blue-400"}
              size={24}
            />
          </div>
          <Badge
            variant="outline"
            className="border-dune-sand/30 text-dune-sand"
          >
            {isSpice ? "Hardware" : "Software"}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold tracking-wide">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSpice ? "bg-dune-spice" : "bg-blue-400"
                }`}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full"
          variant={isSpice ? "spice" : "space"}
        >
          <Link href={internalLink}>View Protocol: {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
