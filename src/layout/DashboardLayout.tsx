import { useState } from "react";
import { Menu } from "lucide-react";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className={`transition-[margin] duration-300 md:ml-64`}>
        {children}
      </main>
    </div>
  );
}
