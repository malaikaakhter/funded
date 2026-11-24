import Sidebar from "@/components/Sidebar";

const details = [
  { label: "Full Name", value: "Areeba" },
  { label: "Roll Number", value: "102309" },
  { label: "Email", value: "areeba@example.com" },
  { label: "Program", value: "BS Information Technology" },
  { label: "University", value: "University of the Punjab, Lahore" },
  { label: "City", value: "Lahore, Pakistan" },
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Computer Vision",
];

const goals = [
  { label: "Target Degree", value: "MS Computer Science" },
  { label: "Preferred Countries", value: "Canada, Germany, UK" },
  { label: "Intake", value: "Fall 2027" },
];

const completion = [
  { item: "Personal details", done: true },
  { item: "Research interests", done: true },
  { item: "CV uploaded", done: false },
  { item: "Email account connected", done: false },
];

export default function Profile() {
  const done = completion.filter((c) => c.done).length;
  const percent = Math.round((done / completion.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8ecd4] lg:flex">
      <Sidebar active="Profile" />

      <div className="min-w-0 flex-1 p-6">
        <h1 className="text-2xl font-bold text-[#0f1d38]">My Profile</h1>

        {/* Profile header */}
        <section className="relative mt-6 overflow-hidden rounded-3xl bg-[#0f1d38] p-8 text-white shadow">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#e0b873]/20" />
          <div className="relative flex flex-wrap items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e0b873] text-3xl font-bold text-[#0f1d38] ring-4 ring-[#e0b873]/30">
              A
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold">Areeba</p>
              <p className="text-sm text-gray-300">BS Information Technology · Lahore, Pakistan</p>
              <span className="mt-2 inline-block rounded-full bg-[#e0b873] px-3 py-1 text-xs font-bold text-[#0f1d38]">
                STUDENT
              </span>
            </div>
            <button className="rounded-xl bg-[#e0b873] px-5 py-2 text-sm font-semibold text-[#0f1d38] hover:bg-[#d4a85c]">
              Edit Profile
            </button>
          </div>
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            {/* Personal details */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0f1d38]">Personal Details</h2>
              <dl className="mt-4 divide-y divide-gray-100">
                {details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-gray-500">{d.label}</dt>
                    <dd className="text-right font-medium text-[#0f1d38]">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Interests and goals */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0f1d38]">Research Interests</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <span
                    key={i}
                    className="rounded-full bg-[#0f1d38] px-3 py-1 text-xs font-medium text-[#e0b873]"
                  >
                    {i}
                  </span>
                ))}
              </div>

              <h2 className="mt-6 text-lg font-bold text-[#0f1d38]">Study Goals</h2>
              <dl className="mt-2 divide-y divide-gray-100">
                {goals.map((g) => (
                  <div key={g.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-gray-500">{g.label}</dt>
                    <dd className="text-right font-medium text-[#0f1d38]">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>

          <div className="space-y-6">
            {/* Completion */}
            <section className="rounded-2xl bg-[#0f1d38] p-6 text-white shadow-sm">
              <h2 className="text-lg font-bold text-[#e0b873]">Profile Completion</h2>
              <div className="mt-3 h-3 w-full rounded-full bg-white/20">
                <div
                  className="h-3 rounded-full bg-[#e0b873]"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="mt-1 text-right text-xs text-gray-300">{percent}% complete</p>
              <ul className="mt-4 space-y-3 text-sm">
                {completion.map((c) => (
                  <li key={c.item} className="flex items-center gap-3">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                        c.done ? "bg-[#e0b873] text-[#0f1d38]" : "border border-gray-400 text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    {c.item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Email connection */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0f1d38]">Email Connection</h2>
              <p className="mt-1 text-sm text-gray-600">
                Connect an approved email account to send emails from the system.
              </p>
              <div className="mt-4 space-y-2">
                <button className="w-full rounded-lg border border-[#0f1d38] py-2 text-sm font-semibold text-[#0f1d38] hover:bg-[#f8ecd4]">
                  Connect Gmail
                </button>
                <button className="w-full rounded-lg border border-[#0f1d38] py-2 text-sm font-semibold text-[#0f1d38] hover:bg-[#f8ecd4]">
                  Connect Outlook
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Open tracking is best effort only. It is not a guaranteed read receipt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}