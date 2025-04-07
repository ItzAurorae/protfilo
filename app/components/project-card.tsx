import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, Link as ExternalLink } from "lucide-react"; // Ensure you import the ExternalLink icon
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  repository: string;  // Changed from 'link' to 'repository' to reflect your prop name
  website: string;     // Assuming website prop now correctly used
  tags: string[];
}

export default function ProjectCard({ title, description, image, repository, website, tags }: ProjectCardProps) { // Correct prop destructuring
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Link href={repository} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
        <Link 
          href={website} 
          target="_blank" 
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          <ExternalLink className="h-4 w-4 mr-2" /> {/* Correctly placed external link icon */}
          Website Link
        </Link>
      </CardFooter>
    </Card>
  );
}
