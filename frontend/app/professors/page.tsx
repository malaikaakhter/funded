"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const professors = [
  { name: "Dr. Ahmed", uni: "University of Toronto", country: "Canada", field: "Artificial Intelligence", email: "sarah.ahmed@utoronto.example" },
  { name: "Dr. James Wilson", uni: "University of Waterloo", country: "Canada", field: "Computer Science", email: "james.wilson@uwaterloo.example" },
  { name: "Dr. Emily Brown", uni: "University of Alberta", country: "Canada", field: "Machine Learning", email: "emily.brown@ualberta.example" },
  { name: "Dr. Omar Siddiqui", uni: "TU Munich", country: "Germany", field: "Data Science", email: "omar.siddiqui@tum.example" },
  { name: "Dr. Anna Schmidt", uni: "ETH Zurich", country: "Switzerland", field: "Robotics", email: "anna.schmidt@ethz.example" },
  { name: "Dr. Liam Carter", uni: "University of Melbourne", country: "Australia", field: "Cyber Security", email: "liam.carter@unimelb.example" },
  { name: "Dr. Hannah Fischer", uni: "RWTH Aachen", country: "Germany", field: "Software Engineering", email: "hannah.fischer@rwth.example" },
  { name: "Dr. Daniel Moore", uni: "University of Edinburgh", country: "United Kingdom", field: "Natural Language Processing", email: "daniel.moore@ed.example" },
  { name: "Dr. Ayesha Malik", uni: "McGill University", country: "Canada", field: "Computer Vision", email: "ayesha.malik@mcgill.example" },
];

const countries = ["All", "Canada", "Germany", "Switzerland", "Australia", "United Kingdom"];

export default function Professors() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("All");
  const [saved, setSaved] = useState<string[]>([
    "Dr. Ahmed",
    "Dr. James Wilson",
  ]);
  const [copied, setCopied] = useState("");

  const filtered = professors.filter((p) => {
    const text = `${p.name} ${p.uni} ${p.field}`.toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    const matchesCountry = country === "All" || p.country === country;
    return matchesQuery && matchesCountry;
  });

  function toggleSave(name: string) {
    setSaved((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  async function copyEmail(email: string) {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(email);
      setTimeout(() => setCopied(""), 1500);
    } catch {
      setCopied("");
    }
  }

  return (
    <div className="min-h-screen bg-[#f8ecd4] lg:flex">
      <Sidebar active="Professors" />

      <div className="min-w-0 flex-1 p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#0f1d38]">Professor Directory</h1>
            <p className="text-sm text-gray-600">
              All professor emails in one place. No need to search websites one by one.
            </p>
          </div>
          <div className="rounded-xl bg-[#0f1d38] px-4 py-2 text-sm text-white">
            Saved: <span className="font-bold text-[#e0b873]">{saved.length}</span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-6 flex gap-2 rounded-xl bg-white p-2 shadow-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, university or research area..."
            className="flex-1 bg-transparent px-3 text-sm text-black outline-none"
          />
          <button
            onClick={() => setQuery("")}
            className="rounded-lg bg-[#0f1d38] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1a2f57]"
          >
            Clear
          </button>
        </div>

        {/* Country filter */}
        <div className="mt-4 flex flex-wrap gap-2">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setCountry(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                country === c
                  ? "bg-[#0f1d38] text-[#e0b873]"
                  : "bg-white text-[#0f1d38] hover:bg-[#e0b873]/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Showing {filtered.length} of {professors.length} professors
        </p>

        {/* Cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.name} className="rounded-2xl bg-[#0f1d38] p-5 text-white shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0b873] text-xl font-bold text-[#0f1d38] ring-4 ring-[#e0b873]/30">
                  {p.name.split(" ")[1][0]}
                </div>
                <button
                  onClick={() => toggleSave(p.name)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    saved.includes(p.name)
                      ? "bg-[#e0b873] text-[#0f1d38]"
                      : "border border-[#e0b873] text-[#e0b873]"
                  }`}
                >
                  {saved.includes(p.name) ? "★ Saved" : "☆ Save"}
                </button>
              </div>

              <p className="mt-3 text-lg font-semibold">{p.name}</p>
              <p className="text-sm text-gray-300">{p.uni}</p>
              <p className="text-xs text-gray-400">{p.country}</p>

              <span className="mt-3 inline-block rounded-full bg-[#f8ecd4] px-3 py-1 text-xs font-medium text-[#0f1d38]">
                {p.field}
              </span>

              <div className="mt-4 flex items-center justify-between gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs">
                <span className="truncate">{p.email}</span>
                <button
                  onClick={() => copyEmail(p.email)}
                  className="font-semibold text-[#e0b873] hover:underline"
                >
                  {copied === p.email ? "Copied" : "Copy"}
                </button>
              </div>

              <Link
                href="/my-emails"
                className="mt-4 block rounded-lg bg-[#e0b873] py-2 text-center text-sm font-semibold text-[#0f1d38] hover:bg-[#d4a85c]"
              >
                Send Email →
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-6 rounded-xl bg-white p-8 text-center text-gray-600">
            No professors found. Try a different search or country.
          </div>
        )}
      </div>
    </div>
  );
}