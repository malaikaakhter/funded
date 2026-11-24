import Link from "next/link";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Professors", href: "/professors", icon: "🎓" },
  { name: "My Emails", href: "/my-emails", icon: "✉️" },
  { name: "Scholarships", href: "/scholarships", icon: "🏆" },
  { name: "Profile", href: "/profile", icon: "👤" },
];

export default function Sidebar({ active }: { active: string }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col bg-[#0f1d38] p-6 text-white lg:flex">
        <Link href="/" className="block">
          <h1 className="text-2xl font-bold text-[#e0b873]">ProfConnect</h1>
          <p className="text-xs text-gray-300">Email Professor Outreach</p>
        </Link>

        <div className="mt-6 h-px bg-[#e0b873]/30" />

        <nav className="mt-6 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                active === item.name
                  ? "bg-[#e0b873] text-[#0f1d38] shadow"
                  : "text-gray-200 hover:bg-white/10"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-[#e0b873]/40 p-4 text-xs text-gray-300">
          <p className="font-semibold text-[#e0b873]">Tip of the day</p>
          <p className="mt-1">Follow up after 7 days if a professor has not replied.</p>
        </div>

        <Link
          href="/"
          className="mt-4 rounded-xl border border-[#e0b873] px-4 py-2 text-center text-sm text-[#e0b873] hover:bg-[#e0b873] hover:text-[#0f1d38]"
        >
          Logout
        </Link>
      </aside>

      {/* Mobile menu */}
      <nav className="flex gap-2 overflow-x-auto bg-[#0f1d38] p-3 lg:hidden">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ${
              active === item.name
                ? "bg-[#e0b873] text-[#0f1d38]"
                : "text-gray-200"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}