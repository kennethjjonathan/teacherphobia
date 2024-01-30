import SearchBar from "@/components/SearchBar/SearchBar";
import { Badge } from "@/components/shadcn/ui/badge";

export default function Home() {
  return (
    <main className="container flex grow flex-col items-center justify-center gap-5">
      <Badge
        variant={"secondary"}
        className="text-center text-base font-bold sm:text-2xl md:text-3xl"
      >
        This time, we grade them! ✊
      </Badge>
      <p className="text-center text-sm text-muted-foreground sm:text-lg md:text-xl">
        TeacherPhobia is a platform to evaluate educational institutions. It
        serves parents, students, and educators with insightful reviews for
        better-informed decisions and academic development.
      </p>
      <SearchBar />
    </main>
  );
}
