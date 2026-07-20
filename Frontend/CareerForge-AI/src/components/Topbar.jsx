import {
  Bell,
  Search,
  SunMoon,
  ChevronDown,
} from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#09090B]/80 px-8 backdrop-blur-xl">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Welcome back. Ready to improve your resume?
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="hidden lg:flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 w-80">
          <Search className="h-4 w-4 text-zinc-500" />

          <input
            type="text"
            placeholder="Search resumes..."
            className="w-full bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
          />
        </div>

        {/* Theme */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
          <SunMoon className="h-5 w-5 text-zinc-400" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10">
          <Bell className="h-5 w-5 text-zinc-400" />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-violet-500"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10">
          <img
            src="https://ui-avatars.com/api/?name=User"
            alt="avatar"
            className="h-10 w-10 rounded-full"
          />

          <div className="hidden text-left lg:block">
            <h4 className="text-sm font-medium text-white">
              Prakhar
            </h4>

            <p className="text-xs text-zinc-500">
              Free Plan
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;