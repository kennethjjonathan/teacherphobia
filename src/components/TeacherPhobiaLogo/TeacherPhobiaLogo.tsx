import Image from "next/image";
import Link from "next/link";

const TeacherPhobiaLogo = () => {
  return (
    <Link className="flex items-center justify-center gap-1" href="/">
      <Image
        src="/apple.svg"
        height={20}
        width={20}
        alt="TeacherPhobia's logo"
      />
      <p className="hidden text-sm font-bold text-foreground sm:block">
        TeacherPhobia
      </p>
    </Link>
  );
};

export default TeacherPhobiaLogo;
