// app/admin/dashboard/page.tsx
// Colors used: navy #0F2137 | gold #E4C484 | cream #FBF0DC | white

const menu = ["Dashboard", "Users", "Professors Database", "Email Templates", "Email Logs", "Reports", "Settings"];

const stats = [
  { title: "Total Students", value: "14,280", note: "↑ 12.4% vs last month", icon: "🎓" },
  { title: "Professors in Database", value: "48,650", note: "↑ 850 added this week", icon: "🏛️" },
  { title: "Emails Sent Today", value: "3,842", note: "76% of daily quota", icon: "✈️" },
  { title: "Failed Emails", value: "24", note: "0.62% bounce rate", icon: "⚠️" },
];

const bars = [30, 42, 38, 55, 50, 68, 62, 80, 74, 92, 85, 100]; // height in %

const status = [
  { label: "Delivered", percent: 68, color: "bg-[#0F2137]" },
  { label: "Opened", percent: 22, color: "bg-[#E4C484]" },
  { label: "Not Opened", percent: 8, color: "bg-[#0F2137]/30" },
  { label: "Failed", percent: 2, color: "bg-[#0F2137]/60" },
];

const users = [
  { name: "Elena Rostova", uni: "Oxford", date: "Oct 28, 2024", status: "Active" },
  { name: "Marcus Chen", uni: "MIT", date: "Oct 28, 2024", status: "Active" },
  { name: "Priya Sharma", uni: "ETH Zurich", date: "Oct 27, 2024", status: "Pending" },
  { name: "Arthur Dubois", uni: "Max Planck", date: "Oct 26, 2024", status: "Blocked" },
  { name: "Sofia Lindqvist", uni: "Harvard", date: "Oct 25, 2024", status: "Inactive" },
];

const badge: Record<string, string> = {
  Active: "bg-[#0F2137] text-[#FBF0DC]",
  Pending: "bg-[#E4C484] text-[#0F2137]",
  Blocked: "border border-[#0F2137] bg-white text-[#0F2137]",
  Inactive: "bg-[#0F2137]/10 text-[#0F2137]/60",
};

const alerts = [
  { text: "5 emails failed in the last hour", time: "12m ago", color: "bg-[#0F2137] text-[#FBF0DC]" },
  { text: "Daily limit reached by 2 users", time: "34m ago", color: "bg-[#E4C484] text-[#0F2137]" },
  { text: "New student onboarded", time: "1h ago", color: "bg-[#E4C484]/30 text-[#0F2137]" },
  { text: "Database sync finished", time: "3h ago", color: "bg-[#0F2137]/10 text-[#0F2137]" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white text-[#0F2137]">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 bg-[#0F2137] p-5 text-[#FBF0DC] md:block">
        <h2 className="mb-8 text-xl font-bold">
          Prof<span className="text-[#E4C484]">Reach</span>
        </h2>
        <ul className="space-y-1">
          {menu.map((item, i) => (
            <li
              key={item}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm ${
                i === 0 ? "bg-[#E4C484] font-medium text-[#0F2137]" : "text-[#FBF0DC] hover:bg-white/10"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 space-y-6 p-6">
        {/* Top */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold">Console Overview</h1>
            <p className="text-sm text-[#0F2137]/60">System Operational (99.98%)</p>
          </div>
          <div className="flex gap-2 text-sm">
            <button className="rounded-lg border border-[#0F2137]/20 bg-white px-4 py-2">Export Report</button>
            <button className="rounded-lg border border-[#0F2137]/20 bg-white px-4 py-2">Upload CSV</button>
            <button className="rounded-lg bg-[#E4C484] px-4 py-2 font-semibold text-[#0F2137]">+ Add Professor</button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <div key={s.title} className="rounded-xl bg-[#FBF0DC] p-5 shadow">
              <div className="flex justify-between">
                <p className="text-sm text-[#0F2137]/60">{s.title}</p>
                <span className="text-xl">{s.icon}</span>
              </div>
              <p className="mt-2 text-3xl font-bold">{s.value}</p>
              <p className="mt-2 text-xs text-[#0F2137]/60">{s.note}</p>
            </div>
          ))}
        </div>

        {/* Chart + status */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-[#FBF0DC] p-5 shadow lg:col-span-2">
            <h2 className="font-semibold">Emails Sent in the Last 30 Days</h2>
            <div className="mt-6 flex h-48 items-end gap-2">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-[#0F2137]" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-[#FBF0DC] p-5 shadow">
            <h2 className="font-semibold">Email Status</h2>
            <div className="mt-5 space-y-4">
              {status.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm">
                    <span>{s.label}</span>
                    <span>{s.percent}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white">
                    <div className={`h-2 rounded-full ${s.color}`} style={{ width: `${s.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Users + alerts */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl bg-[#FBF0DC] p-5 shadow lg:col-span-2">
            <h2 className="mb-4 font-semibold">Latest Users</h2>
            <table className="w-full text-left text-sm">
              <thead className="text-[#0F2137]/60">
                <tr>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">University</th>
                  <th className="pb-3">Joined</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.name} className="border-t border-[#0F2137]/10">
                    <td className="py-3 font-medium">{u.name}</td>
                    <td className="py-3">{u.uni}</td>
                    <td className="py-3 text-[#0F2137]/60">{u.date}</td>
                    <td className="py-3">
                      <span className={`rounded-full px-3 py-1 text-xs ${badge[u.status]}`}>{u.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl bg-[#FBF0DC] p-5 shadow">
            <h2 className="mb-4 font-semibold">System Alerts</h2>
            <div className="space-y-3">
              {alerts.map((a) => (
                <div key={a.text} className={`rounded-lg p-3 text-sm ${a.color}`}>
                  <p className="font-medium">{a.text}</p>
                  <p className="text-xs opacity-70">{a.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}