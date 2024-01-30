import CONSTANTS from "@/constants/constants";
import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../shadcn/ui/hover-card";

const GithubLink = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger
        target="_blank"
        rel="noreferrer nofollow"
        href={CONSTANTS.GITHUB_URL}
      >
        <Github
          absoluteStrokeWidth
          height={20}
          width={20}
          strokeWidth={1}
          className="text-muted-foreground transition-colors hover:text-primary"
        />
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-xs">
          TeacherPhobia is an open source project.{" "}
          <strong>We want your contribution!</strong>
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default GithubLink;
