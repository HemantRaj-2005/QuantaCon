import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CoordinatorCardProps {
  name: string;
  role: string;
  instagramLink: string;
  linkedinLink: string;
  image?: string;
}

export function CoordinatorCard({
  name,
  role,
  instagramLink,
  linkedinLink,
  image,
}: CoordinatorCardProps) {
  // Better validation: check if image exists and is not empty
  const hasValidImage = image && image.trim() !== "";

  return (
    <Card className="border-dune-sand/20 bg-dune-deep/60 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-dune-spice/40">
      <CardHeader className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-dune-space border-2 border-dune-spice/20 flex items-center justify-center overflow-hidden">
          {hasValidImage ? (
            <Image
              src={image}
              alt={`${name}'s profile`}
              width={96}
              height={125}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-dune-sand/50 w-12 h-12" />
          )}
        </div>
        <CardTitle className="text-xl font-bold text-white">{name}</CardTitle>
        <CardDescription className="text-dune-sand">{role}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-dune-spice hover:bg-dune-spice/10"
          asChild
        >
          <Link href={instagramLink} target="_blank">
            <Instagram size={20} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-blue-400 hover:bg-blue-400/10"
          asChild
        >
          <Link href={linkedinLink} target="_blank">
            <Linkedin size={20} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}