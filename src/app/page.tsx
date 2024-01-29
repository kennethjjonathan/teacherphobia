import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className="container flex grow flex-col items-center justify-center gap-5">
      <p className="text-small font-bold sm:text-medium lg:text-large">
        TeacherPhobia is a platform for students to rate their schools, schools
        listen to their students' voices, and the upcoming students decide
        better.
      </p>
      <SearchBar />
    </main>
  );
}
