import Link from "next/link";
import MyButton from "@/components/MyButton";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow-sm">
        <h1 className="text-xl font-bold text-black">My Website</h1>

        <div className="flex gap-6 text-black">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="font-semibold text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>

      {/* About Content */}
      <main className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold text-black">About Me</h1>

        <p className="mt-4 text-lg text-gray-600">
          Hi! I'm a beginner web developer learning Next.js and Tailwind CSS.
          This website is my first project, built to practice routing,
          components, and styling.
        </p>

        <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-black">Learning</h2>
            <p className="mt-1 text-sm text-gray-500">Next.js & React</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-black">Styling</h2>
            <p className="mt-1 text-sm text-gray-500">Tailwind CSS</p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-black">Goal</h2>
            <p className="mt-1 text-sm text-gray-500">Build real projects</p>
          </div>
        </div>

        <div className="mt-8">
          <MyButton text="Back to Home" color="blue" />
        </div>
      </main>
    </div>
  );
}