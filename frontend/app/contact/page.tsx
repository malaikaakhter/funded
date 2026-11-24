
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-10 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-teal-600">
          My Website
        </h1>

        <div className="flex gap-8 font-medium">
          <Link href="/" className="hover:text-teal-600">
            Home
          </Link>
          <Link href="/contact" className="text-teal-600">
            Contact
          </Link>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="mx-auto max-w-6xl px-6 py-16">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-500">
            Have questions? We would love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-teal-600 p-10 text-white shadow-lg">
            <h3 className="mb-6 text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mb-8 text-teal-100">
              Feel free to contact us through the following details.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold">Email Address</h4>
                <p className="text-teal-100">
                  example@gmail.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Phone Number</h4>
                <p className="text-teal-100">
                  +92 300 1234567
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-teal-100">
                  Pakistan
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-10 shadow-md">
            <h3 className="mb-6 text-2xl font-bold">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="font-medium text-teal-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </main>
    </div>
  );
}