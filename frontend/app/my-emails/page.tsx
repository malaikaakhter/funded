"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

type Email = {
  to: string;
  subject: string;
  date: string;
  status: string;
  followUp: string;
};

const initialEmails: Email[] = [
  { to: "Dr. Ahmed", subject: "Research opportunity in AI", date: "Nov 20", status: "Replied", followUp: "-" },
  { to: "Dr. James Wilson", subject: "MS admission inquiry", date: "Nov 18", status: "Opened", followUp: "Nov 25" },
  { to: "Dr. Omar Siddiqui", subject: "PhD supervision request", date: "Nov 17", status: "Delivered", followUp: "Nov 24" },
  { to: "Dr. Emily Brown", subject: "Machine learning project", date: "Nov 15", status: "Draft", followUp: "-" },
  { to: "Dr. Liam Carter", subject: "Cyber security research", date: "Nov 10", status: "Unknown", followUp: "Nov 26" },
];

const professorNames = [
  "Dr. Ahmed",
  "Dr. James Wilson",
  "Dr. Emily Brown",
  "Dr. Omar Siddiqui",
  "Dr. Anna Schmidt",
  "Dr. Liam Carter",
];

const templates: Record<string, { subject: string; body: string }> = {
  "Admission inquiry": {
    subject: "MS admission inquiry for Fall 2027",
    body: "Dear Professor,\n\nI hope you are well. My name is Areeba Khan and I am a BS Information Technology student at the University of the Punjab, Lahore. I am interested in your research and would like to ask about MS admission opportunities in your group.\n\nThank you for your time.\n\nSincerely,\nAreeba Khan",
  },
  "Research opportunity": {
    subject: "Research opportunity in your lab",
    body: "Dear Professor,\n\nI read your recent work and found it very interesting. I would like to ask whether there are research assistant or internship positions available in your lab.\n\nI have attached my CV for your review.\n\nSincerely,\nAreeba Khan",
  },
  "Follow-up": {
    subject: "Follow-up on my previous email",
    body: "Dear Professor,\n\nI am writing to follow up on my previous email. I understand you are busy and I would be grateful for any guidance you can share.\n\nThank you for your time.\n\nSincerely,\nAreeba Khan",
  },
};

const statusStyle: Record<string, string> = {
  Replied: "bg-green-100 text-green-700",
  Opened: "bg-blue-100 text-blue-700",
  Delivered: "bg-purple-100 text-purple-700",
  Sent: "bg-[#e0b873]/30 text-[#8a6420]",
  Draft: "bg-gray-200 text-gray-600",
  Unknown: "bg-red-100 text-red-600",
};

const tabs = ["All", "Sent", "Delivered", "Opened", "Replied", "Draft", "Unknown"];

export default function MyEmails() {
  const [emails, setEmails] = useState<Email[]>(initialEmails);
  const [tab, setTab] = useState("All");
  const [to, setTo] = useState(professorNames[0]);
  const [template, setTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [message, setMessage] = useState("");

  const visible = emails.filter((e) => tab === "All" || e.status === tab);

  function chooseTemplate(name: string) {
    setTemplate(name);
    if (templates[name]) {
      setSubject(templates[name].subject);
      setBody(templates[name].body);
    }
  }

  function submit(status: "Sent" | "Draft") {
    if (!subject.trim() || !body.trim()) {
      setMessage("Please write a subject and a message first.");
      return;
    }
    const newEmail: Email = {
      to,
      subject,
      date: "Today",
      status,
      followUp: followUp || "-",
    };
    setEmails([newEmail, ...emails]);
    setMessage(status === "Sent" ? "Email added as Sent." : "Draft saved.");
    setTemplate("");
    setSubject("");
    setBody("");
    setFollowUp("");
  }

  return (
    <div className="min-h-screen bg-[#f8ecd4] lg:flex">
      <Sidebar active="My Emails" />

      <div className="min-w-0 flex-1 p-6">
        <h1 className="text-2xl font-bold text-[#0f1d38]">My Emails</h1>
        <p className="text-sm text-gray-600">
          Write emails, track their status and plan follow-ups.
        </p>

        <div className="mt-6 grid gap-6 xl:grid-cols-5">
          {/* Compose */}
          <section className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
            <h2 className="text-lg font-bold text-[#0f1d38]">Compose Email</h2>

            <label className="mt-4 block text-sm font-medium text-[#0f1d38]">To</label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-[#0f1d38]"
            >
              {professorNames.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-medium text-[#0f1d38]">Template</label>
            <select
              value={template}
              onChange={(e) => chooseTemplate(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-[#0f1d38]"
            >
              <option value="">Choose a template (optional)</option>
              {Object.keys(templates).map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-medium text-[#0f1d38]">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-[#0f1d38]"
            />

            <label className="mt-4 block text-sm font-medium text-[#0f1d38]">Message</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              placeholder="Write your email here..."
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-[#0f1d38]"
            />

            <label className="mt-4 block text-sm font-medium text-[#0f1d38]">
              Follow-up date (optional)
            </label>
            <input
              type="date"
              value={followUp}
              onChange={(e) => setFollowUp(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-black outline-none focus:border-[#0f1d38]"
            />

            {message && (
              <p className="mt-4 rounded-md bg-[#f8ecd4] px-3 py-2 text-sm text-[#0f1d38]">
                {message}
              </p>
            )}

            <div className="mt-4 flex gap-3">
              <button
                onClick={() => submit("Sent")}
                className="flex-1 rounded-lg bg-[#0f1d38] py-2 text-sm font-semibold text-white hover:bg-[#1a2f57]"
              >
                Send
              </button>
              <button
                onClick={() => submit("Draft")}
                className="flex-1 rounded-lg border border-[#0f1d38] py-2 text-sm font-semibold text-[#0f1d38] hover:bg-[#f8ecd4]"
              >
                Save Draft
              </button>
            </div>
          </section>

          {/* List */}
          <section className="space-y-6 xl:col-span-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#0f1d38]">Email History</h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      tab === t
                        ? "bg-[#0f1d38] text-[#e0b873]"
                        : "bg-[#f8ecd4] text-[#0f1d38] hover:bg-[#e0b873]/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-120 text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500">
                      <th className="py-2 font-medium">To</th>
                      <th className="py-2 font-medium">Subject</th>
                      <th className="py-2 font-medium">Date</th>
                      <th className="py-2 font-medium">Follow-up</th>
                      <th className="py-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((e, i) => (
                      <tr key={`${e.subject}-${i}`} className="border-b border-gray-100 last:border-0">
                        <td className="py-3 font-semibold text-[#0f1d38]">{e.to}</td>
                        <td className="py-3 text-gray-700">{e.subject}</td>
                        <td className="py-3 text-gray-500">{e.date}</td>
                        <td className="py-3 text-gray-500">{e.followUp}</td>
                        <td className="py-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[e.status]}`}
                          >
                            {e.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {visible.length === 0 && (
                  <p className="py-6 text-center text-sm text-gray-500">
                    No emails with this status.
                  </p>
                )}
              </div>
            </div>

            {/* Tracking info */}
            <div className="rounded-2xl bg-[#0f1d38] p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold text-[#e0b873]">About email status</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li><b className="text-white">Sent:</b> your email left the system.</li>
                <li><b className="text-white">Delivered:</b> shown only if the email service confirms it.</li>
                <li><b className="text-white">Opened:</b> shown if the tracking image loads. It does not prove the email was read.</li>
                <li><b className="text-white">Replied:</b> the professor answered.</li>
                <li><b className="text-white">Unknown:</b> no information is available.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}