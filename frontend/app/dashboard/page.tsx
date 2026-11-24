import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const student = {
  name: "Areeba",
  program: "BS Information Technology",
  city: "Lahore, Pakistan",
};

const stats = [
  { label: "Emails Sent", value: "24", note: "+3 this week", icon: "✉️" },
  { label: "Replies", value: "7", note: "29% response rate", icon: "💬" },
  { label: "Saved Professors", value: "12", note: "4 countries", icon: "🎓" },
  { label: "Scholarships", value: "5", note: "2 deadlines soon", icon: "🏆" },
];

const pipeline = [
  { label: "Sent", value: 24, width: "100%" },
  { label: "Delivered", value: 22, width: "92%" },
  { label: "Opened", value: 13, width: "54%" },
  { label: "Replied", value: 7, width: "29%" },
];

const outreach = [
  { prof: "Dr. Ahmed", uni: "University of Toronto", field: "Artificial Intelligence", status: "Replied" },
  { prof: "Dr. James Wilson", uni: "University of Waterloo", field: "Computer Science", status: "Opened" },
  { prof: "Dr. Emily Brown", uni: "University of Alberta", field: "Machine Learning", status: "Draft" },
  { prof: "Dr. Omar Siddiqui", uni: "TU Munich", field: "Data Science", status: "Sent" },
];

const followUps = [
  { prof: "Dr. James Wilson", when: "Today", note: "No reply after 7 days" },
  { prof: "Dr. Omar Siddiqui", when: "Tomorrow", note: "First follow-up" },
  { prof: "Dr. Anna Schmidt", when: "Nov 28", note: "Send research proposal" },
];

const deadlines = [
  { title: "DAAD Scholarship", date: "Dec 05" },
  { title: "Chevening Scholarship", date: "Dec 18" },
  { title: "Vanier Canada Graduate", date: "Jan 10" },
];

const activity = [
  { text: "Dr. Ahmed replied to your email", time: "2 hours ago" },
  { text: "You sent an email to Dr. Omar Siddiqui", time: "Yesterday" },
  { text: "Dr. James Wilson opened your email", time: "2 days ago" },
  { text: "You saved Dr. Anna Schmidt", time: "3 days ago" },
];

const saved = [
  { name: "Dr. Ahmed", uni: "University of Toronto", field: "AI" },
  { name: "Dr. James Wilson", uni: "University of Waterloo", field: "Computer Science" },
  { name: "Dr. Emily Brown", uni: "University of Alberta", field: "Machine Learning" },
];

const statusStyle: Record<string, string> = {
  Replied: "bg-green-100 text-green-700",
  Opened: "bg-blue-100 text-blue-700",
  Sent: "bg-[#e0b873]/30 text-[#8a6420]",
  Draft: "bg-gray-200 text-gray-600",
};
const universities = [
  { id: "uoft", name: "University of Toronto", country: "Canada" },
  { id: "waterloo", name: "University of Waterloo", country: "Canada" },
  { id: "tum", name: "TU Munich", country: "Germany" },
  { id: "eth", name: "ETH Zurich", country: "Switzerland" },
  { id: "melbourne", name: "University of Melbourne", country: "Australia" },
  { id: "edinburgh", name: "University of Edinburgh", country: "United Kingdom" },
];

// Placeholder emails. Replace with real emails from official university pages.
const professorList = [
  { name: "Dr. Sarah Ahmed", universityId: "uoft", field: "Artificial Intelligence", email: "sarah.ahmed@uoft.example" },
  { name: "Dr. Michael Chen", universityId: "uoft", field: "Computer Vision", email: "michael.chen@uoft.example" },
  { name: "Dr. James Wilson", universityId: "waterloo", field: "Computer Science", email: "james.wilson@waterloo.example" },
  { name: "Dr. Omar Siddiqui", universityId: "tum", field: "Data Science", email: "omar.siddiqui@tum.example" },
  { name: "Dr. Lukas Weber", universityId: "tum", field: "Cyber Security", email: "lukas.weber@tum.example" },
  { name: "Dr. Anna Schmidt", universityId: "eth", field: "Robotics", email: "anna.schmidt@eth.example" },
  { name: "Dr. Liam Carter", universityId: "melbourne", field: "Cyber Security", email: "liam.carter@melbourne.example" },
  { name: "Dr. Daniel Moore", universityId: "edinburgh", field: "Natural Language Processing", email: "daniel.moore@edinburgh.example" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f8ecd4] lg:flex">
      <Sidebar active="Dashboard" />

      <div className="min-w-0 flex-1">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search professor, university or research area..."
              className="flex-1 bg-transparent text-sm text-black outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-[#0f1d38]">{student.name}</p>
              <p className="text-xs text-gray-500">{student.city}</p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f1d38] font-bold text-[#e0b873] ring-2 ring-[#e0b873]">
              {student.name[0]}
            </div>
          </div>
        </header>

        <main className="space-y-6 px-6 pb-10">
          {/* Hero banner */}
          <section
            className="relative overflow-hidden rounded-3xl bg-[#0f1d38] p-8 text-white shadow"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#e0b873]/20" />
            <div className="absolute -bottom-20 right-24 h-48 w-48 rounded-full border-4 border-[#e0b873]/30" />

            <div className="relative max-w-xl">
              <span className="rounded-full bg-[#e0b873] px-3 py-1 text-xs font-bold text-[#0f1d38]">
                STUDY ABROAD PLATFORM
              </span>
              <h2 className="mt-4 text-3xl font-bold">
                Welcome back, <span className="text-[#e0b873]">{student.name}</span>
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                {student.program}. You have 2 follow-ups due and 2 scholarship
                deadlines coming up. Keep going, your next reply is close.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/my-emails"
                  className="rounded-xl bg-[#e0b873] px-5 py-2 text-sm font-semibold text-[#0f1d38] hover:bg-[#d4a85c]"
                >
                  Write New Email
                </Link>
                <Link
                  href="/professors"
                  className="rounded-xl border border-[#e0b873] px-5 py-2 text-sm font-semibold text-[#e0b873] hover:bg-[#e0b873] hover:text-[#0f1d38]"
                >
                  Find Professors
                </Link>
              </div>
            </div>
          </section>

          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border-t-4 border-[#e0b873] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{s.label}</p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0f1d38] text-sm">
                    {s.icon}
                  </span>
                </div>
                <p className="mt-2 text-3xl font-bold text-[#0f1d38]">{s.value}</p>
                <p className="mt-1 text-xs text-[#8a6420]">{s.note}</p>
              </div>
            ))}
          </div>

          {/* Universities and Professors */}
            <section className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                 <div>
                    <h3 className="text-lg font-bold text-[#0f1d38]">Universities and Professors</h3>
                    <p className="text-xs text-gray-500">
                      {universities.length} universities · {professorList.length} professors
                    </p>
                 </div>
                 <Link href="/professors" className="text-sm font-semibold text-[#8a6420] hover:underline">
                    Open full directory →
                  </Link>
             </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
               {universities.map((u) => {
                const profs = professorList.filter((p) => p.universityId === u.id);
                 return (
            <div key={u.id} className="rounded-xl bg-[#0f1d38] p-5 text-white">
               <div className="flex items-start justify-between gap-2">
                   <div>
                      <p className="font-semibold text-[#e0b873]">{u.name}</p>
                     <p className="text-xs text-gray-300">{u.country}</p>
                    </div>
                     <span className="rounded-full bg-[#e0b873] px-2 py-0.5 text-xs font-bold text-[#0f1d38]">
                       {profs.length}
                      </span>
                 </div>

                    <ul className="mt-3 space-y-2">
                       {profs.map((p) => (
                      <li key={p.email} className="rounded-lg bg-white/10 p-2">
                        <p className="text-sm font-medium">{p.name}</p>
                        <p className="text-xs text-gray-300">{p.field}</p>
                        <p className="truncate text-xs text-[#e0b873]">{p.email}</p>
                      </li>
                      ))}
                   </ul>
                 </div>
                  );
                 })}
              </div>
            </section>

          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left column */}
            <div className="space-y-6 xl:col-span-2">
              {/* Pipeline */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f1d38]">Outreach Pipeline</h3>
                <p className="text-xs text-gray-500">
                  Status is based on what the email service reports. Opened does
                  not prove the email was read.
                </p>
                <div className="mt-5 space-y-4">
                  {pipeline.map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-[#0f1d38]">{p.label}</span>
                        <span className="text-gray-500">{p.value}</span>
                      </div>
                      <div className="mt-1 h-3 w-full rounded-full bg-[#f8ecd4]">
                        <div
                          className="h-3 rounded-full bg-[#0f1d38]"
                          style={{ width: p.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recent outreach */}
              <section className="overflow-x-auto rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#0f1d38]">Recent Outreach</h3>
                  <Link
                    href="/my-emails"
                    className="text-sm font-semibold text-[#8a6420] hover:underline"
                  >
                    View all →
                  </Link>
                </div>
                <table className="mt-4 w-full min-w-120 text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-2 font-medium">Professor</th>
                      <th className="py-2 font-medium">Field</th>
                      <th className="py-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outreach.map((o) => (
                      <tr key={o.prof} className="border-b border-gray-100 last:border-0">
                        <td className="py-3">
                          <p className="font-semibold text-[#0f1d38]">{o.prof}</p>
                          <p className="text-xs text-gray-500">{o.uni}</p>
                        </td>
                        <td className="py-3 text-gray-700">{o.field}</td>
                        <td className="py-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[o.status]}`}
                          >
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <section className="rounded-2xl bg-[#0f1d38] p-6 text-white shadow-sm">
                <h3 className="text-lg font-bold text-[#e0b873]">Follow-ups Due</h3>
                <ul className="mt-4 space-y-4">
                  {followUps.map((f) => (
                    <li key={f.prof} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{f.prof}</p>
                        <p className="text-xs text-gray-300">{f.note}</p>
                      </div>
                      <span className="whitespace-nowrap rounded-md bg-[#e0b873] px-2 py-1 text-xs font-bold text-[#0f1d38]">
                        {f.when}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f1d38]">Scholarship Deadlines</h3>
                <ul className="mt-4 space-y-3">
                  {deadlines.map((d) => (
                    <li key={d.title} className="flex items-center justify-between">
                      <p className="text-sm text-[#0f1d38]">{d.title}</p>
                      <span className="rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-600">
                        {d.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#0f1d38]">Recent Activity</h3>
                <ul className="mt-4 space-y-4 border-l-2 border-[#e0b873] pl-4">
                  {activity.map((a) => (
                    <li key={a.text} className="relative">
                      <span className="absolute -left-5.25 top-1 h-2.5 w-2.5 rounded-full bg-[#0f1d38]" />
                      <p className="text-sm text-[#0f1d38]">{a.text}</p>
                      <p className="text-xs text-gray-500">{a.time}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* Saved professors */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#0f1d38]">Saved Professors</h3>
              <Link
                href="/professors"
                className="text-sm font-semibold text-[#8a6420] hover:underline"
              >
                See all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {saved.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl bg-[#0f1d38] p-5 text-center text-white shadow-sm"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e0b873] text-xl font-bold text-[#0f1d38] ring-4 ring-[#e0b873]/30">
                    {p.name.split(" ")[1][0]}
                  </div>
                  <p className="mt-3 font-semibold">{p.name}</p>
                  <p className="text-xs text-gray-300">{p.uni}</p>
                  <span className="mt-2 inline-block rounded-full bg-[#f8ecd4] px-3 py-1 text-xs font-medium text-[#0f1d38]">
                    {p.field}
                  </span>
                  <div>
                    <Link
                      href="/my-emails"
                      className="mt-3 inline-block rounded-lg bg-[#e0b873] px-4 py-1.5 text-sm font-semibold text-[#0f1d38] hover:bg-[#d4a85c]"
                    >
                      Send Email →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}