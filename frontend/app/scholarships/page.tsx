import Sidebar from "@/components/Sidebar";

const scholarships = [
  { title: "DAAD Scholarship", country: "Germany", level: "MS / PhD", funding: "Full funding", deadline: "Dec 05", status: "Closing soon" },
  { title: "Chevening Scholarship", country: "United Kingdom", level: "MS", funding: "Full funding", deadline: "Dec 18", status: "Closing soon" },
  { title: "Vanier Canada Graduate", country: "Canada", level: "PhD", funding: "Stipend", deadline: "Jan 10", status: "Open" },
  { title: "Fulbright Program", country: "United States", level: "MS / PhD", funding: "Full funding", deadline: "Feb 01", status: "Open" },
  { title: "Swedish Institute Scholarship", country: "Sweden", level: "MS", funding: "Full funding", deadline: "Feb 15", status: "Open" },
  { title: "Australia Awards", country: "Australia", level: "MS / PhD", funding: "Full funding", deadline: "Apr 30", status: "Upcoming" },
];

const checklist = [
  { item: "Updated CV", done: true },
  { item: "Statement of purpose", done: true },
  { item: "Two recommendation letters", done: false },
  { item: "English test score (IELTS / TOEFL)", done: false },
  { item: "Transcripts and degree copies", done: true },
];

const badge: Record<string, string> = {
  "Closing soon": "bg-red-100 text-red-600",
  Open: "bg-green-100 text-green-700",
  Upcoming: "bg-gray-200 text-gray-600",
};

export default function Scholarships() {
  const doneCount = checklist.filter((c) => c.done).length;
  const percent = Math.round((doneCount / checklist.length) * 100);

  return (
    <div className="min-h-screen bg-[#f8ecd4] lg:flex">
      <Sidebar active="Scholarships" />

      <div className="min-w-0 flex-1 p-6">
        <h1 className="text-2xl font-bold text-[#0f1d38]">Scholarships</h1>
        <p className="text-sm text-gray-600">
          Apply on your own and save the high fees of consultants.
        </p>

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          {/* List */}
          <div className="grid gap-4 sm:grid-cols-2 xl:col-span-2">
            {scholarships.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border-l-4 border-[#e0b873] bg-[#0f1d38] p-5 text-white shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold">{s.title}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${badge[s.status]}`}>
                    {s.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-300">{s.country}</p>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-white/10 p-2">
                    <p className="text-gray-400">Level</p>
                    <p className="font-semibold">{s.level}</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-2">
                    <p className="text-gray-400">Funding</p>
                    <p className="font-semibold">{s.funding}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-md bg-[#e0b873] px-2 py-1 text-xs font-bold text-[#0f1d38]">
                    Deadline: {s.deadline}
                  </span>
                  <button className="text-sm font-semibold text-[#e0b873] hover:underline">
                    View details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <section className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0f1d38]">Application Checklist</h2>
            <p className="text-xs text-gray-500">
              {doneCount} of {checklist.length} documents ready
            </p>

            <div className="mt-3 h-3 w-full rounded-full bg-[#f8ecd4]">
              <div
                className="h-3 rounded-full bg-[#0f1d38]"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="mt-1 text-right text-xs font-semibold text-[#8a6420]">{percent}%</p>

            <ul className="mt-4 space-y-3">
              {checklist.map((c) => (
                <li key={c.item} className="flex items-center gap-3 text-sm">
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold ${
                      c.done ? "bg-[#0f1d38] text-[#e0b873]" : "border border-gray-300 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                  <span className={c.done ? "text-gray-500 line-through" : "text-[#0f1d38]"}>
                    {c.item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}