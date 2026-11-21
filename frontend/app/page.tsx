import Link from "next/link";
import MyButton from "@/components/MyButton";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow-sm">

        <h1 className="text-xl font-bold text-black">
          My Website
        </h1>

        <div className="flex gap-6 text-black">
         <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
        </div>

      </nav>

      {/* Homepage Content */}
      <main className="flex min-h-[80vh] flex-col items-center justify-center text-center">

        <h1 className="text-4xl font-bold text-black">
          Welcome to My Website!
        </h1>

        <p className="mt-4 text-gray-500">
          Hey, this is my first Next.js project.
        </p>
        


<MyButton text="Get Started" color="blue" />

      </main>

    </div>
  );
}
