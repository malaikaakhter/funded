
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50 text-black">

      <nav className="flex justify-between bg-white px-10 py-5 shadow-sm">
        <h1 className="text-xl font-bold">My Website</h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>

      <main className="flex min-h-[80vh] flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="mt-4 text-gray-500">
          Feel free to get in touch with us!
        </p>

        <p className="mt-2 text-gray-700">
          Email: example@gmail.com
        </p>

        <Link href="/" className="mt-6 text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>

    </div>
  );
}
