import BlogCard from "@/components/BlogCard";
import { Feather } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-y-4 items-center justify-center">
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <Link href={"/blogs/new"}>
        <div className="fixed bottom-10 right-10 bg-main h-20 w-20 rounded-full cursor-pointer flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out">
            <Feather className="text-white h-7 w-7 font-bold"/>
        </div>
      </Link>
    </main>
  );
}
