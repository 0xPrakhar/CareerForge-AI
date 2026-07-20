import {
  LayoutDashboard,
  FileText,
  Upload,
  Sparkles,
  BarChart3,
  User,
  Settings,
  MessageSquare,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Main",
    items: [
      { icon: LayoutDashboard, label: "Dashboard" },
      { icon: FileText, label: "My Resumes" },
      { icon: Upload, label: "Upload Resume" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { icon: Sparkles, label: "AI Resume Builder" },
      { icon: BarChart3, label: "ATS Reports" },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile" },
      { icon: Settings, label: "Settings" },
      { icon: MessageSquare, label: "Feedback" },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-white/10 bg-[#09090B]">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/20">
          <Sparkles className="h-5 w-5 text-white" />
        </div>

        <div className="ml-3">
          <h2 className="text-lg font-semibold text-white">
            CareerForge
          </h2>

          <p className="text-xs text-zinc-500">
            AI Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {menuItems.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  className="group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-zinc-400 transition-all duration-300 hover:bg-zinc-800/70 hover:text-white"
                >
                  <item.icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-violet-400" />

                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade Card */}
      <div className="mx-4 mb-4 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 p-5">
        <h3 className="text-sm font-semibold text-white">
          CareerForge Pro
        </h3>

        <p className="mt-2 text-xs leading-5 text-zinc-400">
          Unlock unlimited resume analysis, AI rewriting, and premium ATS reports.
        </p>

        <button className="mt-4 w-full rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
          Upgrade
        </button>
      </div>

      {/* Logout */}
      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400">
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;