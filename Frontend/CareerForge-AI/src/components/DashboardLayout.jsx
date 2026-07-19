import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  User as UserIcon,
  MessageSquare,
  Upload,
  LogOut,
  Bell,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "My Resumes", icon: FileText },
  { label: "Upload Resume", icon: Upload },
  { label: "Profile", icon: UserIcon },
  { label: "Feedback", icon: MessageSquare },
] 

export function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const initials = "CF"; // static initials since no user data

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={
          "fixed inset-y-0 left-0 z-40 w-64 shrink-0 border-r border-border bg-background/80 backdrop-blur-xl transition-transform lg:translate-x-0 " +
          (mobileOpen ? "translate-x-0" : "-translate-x-full")
        }
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-(image:--gradient-brand)">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-[14px] font-semibold tracking-tight">
              CareerForge AI
            </span>
          </div>
          <button
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5 p-3">
          {nav.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="absolute inset-x-3 bottom-3">
          <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground">
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 h-16 border-b border-border bg-background/70 backdrop-blur-xl">
          <div className="flex h-full items-center justify-between px-5 md:px-8">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileOpen(true)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
              <h1 className="text-[15px] font-semibold tracking-tight">
                Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="relative grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground"
                aria-label="Notifications"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-(image:--gradient-brand)" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface py-1.5 pl-1.5 pr-3 text-sm hover:bg-surface-elevated"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-(image:--gradient-brand) text-xs font-semibold text-white">
                    {initials}
                  </span>
                  <span className="hidden text-sm md:block">Guest</span>
                </button>
                {menuOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-border-strong bg-popover shadow-(--shadow-card)"
                    onMouseLeave={() => setMenuOpen(false)}
                  >
                    <div className="border-b border-border px-3 py-2.5">
                      <p className="truncate text-sm font-medium">Guest User</p>
                      <p className="truncate text-xs text-muted-foreground">
                        guest@example.com
                      </p>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground">
                      <UserIcon className="h-4 w-4" /> Profile
                    </button>
                    <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-muted-foreground hover:bg-surface hover:text-foreground">
                      <LogOut className="h-4 w-4" /> Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="px-5 py-8 md:px-8 md:py-10">
          <p>Welcome to the dashboard layout demo.</p>
        </main>
      </div>
    </div>
  );
}
