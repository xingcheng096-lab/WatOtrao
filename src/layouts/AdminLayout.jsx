import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FolderTree,
  Calendar,
  Users,
  Image,
  FolderOpen,
  HeartHandshake,
  Settings,
  ExternalLink,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  ChevronRight,
  Shield
} from "lucide-react";
import { useAdminData } from "../context/AdminDataContext";
import { RoleBadge } from "../components/common/UIComponents";
import watOuTraoLogo from "../assets/branding/wat-ou-trao-official-logo.png";

export function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { currentUser, setCurrentUser, settings } = useAdminData();
  const officialLogoSrc = settings?.officialLogo || settings?.logo || watOuTraoLogo;
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "ផ្ទាំងគ្រប់គ្រង (Overview)", path: "/admin", icon: LayoutDashboard, exact: true },
    { label: "គ្រប់គ្រងអត្ថបទ (Posts)", path: "/admin/posts", icon: FileText },
    { label: "ជំពូកអត្ថបទ (Categories)", path: "/admin/categories", icon: FolderTree },
    { label: "កម្មវិធីបុណ្យ (Events)", path: "/admin/events", icon: Calendar },
    { label: "ព្រះសង្ឃ (Monks)", path: "/admin/monks", icon: Users },
    { label: "កម្រងរូបភាព (Gallery)", path: "/admin/gallery", icon: Image },
    { label: "បណ្ណាល័យមេឌា (Media)", path: "/admin/media", icon: FolderOpen },
    { label: "គម្រោងវត្ត & បច្ច័យ (Projects)", path: "/admin/projects", icon: HeartHandshake },
    { label: "ការកំណត់គេហទំព័រ (Settings)", path: "/admin/settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen flex bg-stone-100 font-khmer-sans text-stone-900">
      {/* ---------------- Desktop Sidebar ---------------- */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#350E0E] text-[#FFF8E7] border-r border-[#D4AF37]/30 shrink-0">
        {/* Sidebar Header */}
        <div className="p-5 border-b border-[#D4AF37]/20 flex items-center gap-3">
          <img
            src={officialLogoSrc}
            alt="WAT O TRAO Official Logo"
            className="w-12 h-12 rounded-full object-contain shrink-0 bg-white/10 p-0.5 border border-[#D4A62A]/60 shadow-md"
          />
          <div>
            <h2 className="font-bold text-sm font-khmer-serif text-[#FFF8E7] leading-tight">
              {settings?.templeNameKh || "វត្ត អូរត្រាវ"}
            </h2>
            <p className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
              {settings?.templeNameEn || "WAT O TRAO"}
            </p>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.exact
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#6E1F1F] text-[#FFF8E7] border border-[#D4AF37]/60 shadow-xs"
                    : "text-[#E8D7A5]/80 hover:bg-white/5 hover:text-[#FFF8E7]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37]" : "text-stone-400"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* View Public Website & Current User Card */}
        <div className="p-4 border-t border-[#D4AF37]/20 space-y-3 bg-[#2A0B0B]">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-xs font-semibold text-[#E8D7A5] border border-[#D4AF37]/40 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>ទៅកាន់គេហទំព័រដើម</span>
          </Link>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]"
            />
            <div className="overflow-hidden flex-1">
              <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
              <p className="text-[10px] text-[#D4AF37] truncate">{currentUser.role}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ---------------- Mobile Sidebar Drawer ---------------- */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-[#350E0E] text-[#FFF8E7] p-5 flex flex-col justify-between shadow-2xl z-10 animate-fade-in">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/30">
                <div className="flex items-center gap-3">
                  <img
                    src={officialLogoSrc}
                    alt="WAT O TRAO Official Logo"
                    className="w-10 h-10 rounded-full object-contain shrink-0 bg-white/10 p-0.5 border border-[#D4A62A]/60 shadow-md"
                  />
                  <div>
                    <h2 className="font-bold text-sm font-khmer-serif">{settings?.templeNameKh || "វត្ត អូរត្រាវ"}</h2>
                    <span className="text-[10px] text-[#D4AF37] uppercase">{settings?.templeNameEn || "WAT O TRAO"}</span>
                  </div>
                </div>
                <button onClick={() => setMobileSidebarOpen(false)} className="text-white p-1">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.exact
                    ? location.pathname === item.path
                    : location.pathname.startsWith(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium ${
                        isActive
                          ? "bg-[#6E1F1F] text-white border border-[#D4AF37]"
                          : "text-stone-300 hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-[#D4AF37]/30">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#D4AF37]/20 text-xs font-semibold text-[#E8D7A5]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>ទៅកាន់គេហទំព័រដើម</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Main Content Area ---------------- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-stone-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-stone-100 text-stone-700"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-[#6E1F1F]">ផ្ទាំងគ្រប់គ្រងវត្ត</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="capitalize">{location.pathname.replace("/admin", "").replace("/", "") || "ទិដ្ឋភាពទូទៅ"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4AF37] text-xs font-semibold text-[#6E1F1F] hover:bg-amber-50 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C9972B]" />
              <span>មើលគេហទំព័រវត្ត (Live)</span>
            </Link>

            <div className="h-6 w-px bg-stone-200 hidden sm:block" />

            {/* Current User Profile Indicator */}
            <div className="flex items-center gap-2.5">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]"
              />
              <div className="hidden md:block text-left">
                <p className="text-xs font-bold text-stone-800 leading-none">{currentUser.name}</p>
                <div className="mt-0.5">
                  <RoleBadge role={currentUser.role} />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
