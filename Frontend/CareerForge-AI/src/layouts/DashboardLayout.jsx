import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#09090B] text-white">
      {/* Sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-[#0D0D12] lg:block">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl">
          <Topbar />
        </header>

        {/* Page */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;