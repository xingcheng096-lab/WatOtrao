import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Globe,
  Compass,
  Shield,
  Heart,
  ChevronDown,
  Sparkles,
  Facebook,
} from "lucide-react";
import { LotusDivider } from "../traditional/LotusDivider";
import { siteSettings } from "../../data/data";
import { useAdminData } from "../../context/AdminDataContext";
export function Header({ onOpenSearch, onOpenDonationModal }) {
  const adminData = useAdminData();
  const currentSettings = adminData?.settings || siteSettings;
  const logoSrc = "/assets/logo/logo-wat-ortrao.png";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("km");
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toKhmerNumber = (value) =>
    String(value).replace(/[0-9]/g, (n) => "០១២៣៤៥៦៧៨៩"[n]);

  const getCurrentBuddhistYear = () => {
    const now = new Date();
    const year = now.getFullYear();

    // Khmer Buddhist Era changes around Vesak.
    // For website display, use May 1 as practical rollover.
    const buddhistYear = now.getMonth() >= 4 ? year + 544 : year + 543;

    return toKhmerNumber(buddhistYear);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "ទំព័រដើម", enLabel: "Home", path: "/" },
    { label: "អំពីវត្ត", enLabel: "About", path: "/about" },
    { label: "សកម្មភាពវត្ត", enLabel: "Activities", path: "/activities" },
    { label: "ព្រះសង្ឃ", enLabel: "Monks", path: "/monks" },
    { label: "ព័ត៌មាន", enLabel: "News", path: "/news" },
    { label: "ព្រះធម៌", enLabel: "Dharma", path: "/dharma" },
    { label: "កម្មវិធីបុណ្យ", enLabel: "Events", path: "/events" },
    { label: "រូបភាព", enLabel: "Gallery", path: "/gallery" },
    { label: "វត្តខ្មែរ", enLabel: "WAT KHMER", path: "/wat-khmer" },
    { label: "ទំនាក់ទំនង", enLabel: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Ceremonial Top Banner: Deep Wat Blue (#11178F) */}
      <div className="bg-[#11178F] text-[#FFF9EA] text-xs py-1.5 px-4 border-b border-[#D4A62A]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-khmer-serif">
            <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
            <span className="hidden sm:inline text-[#FFF9EA]/90">
              ពុទ្ធសាសនាថេរវាទ និងមរតកវប្បធម៌ខ្មែរក្រោម
            </span>
            <span className="sm:hidden">
              {currentSettings.templeNameKh || "វត្ត អូរត្រាវ"} •{" "}
              {currentSettings.templeNameEn || "WAT O TRAO"}
            </span>
            <span className="text-[#D4A62A] text-[10px] hidden md:inline">
              • ព.ស. {getCurrentBuddhistYear()}
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Official Facebook Link */}
            {/* <a
              href="https://www.facebook.com/Wattotrao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded bg-white/15 hover:bg-[#1877F2] text-[#FFF9EA] border border-white/25 transition-colors"
              title="ទំព័រហ្វេសប៊ុកផ្លូវការវត្ត អូរត្រាវ"
            >
              <Facebook className="w-3 h-3 text-[#93c5fd]" />
              <span className="font-khmer-sans">Facebook: វត្ត អូរត្រាវ</span>
            </a> */}

            {/* Direct Admin Link for reviewer convenience */}
            {/* <Link
              to="/admin"
              className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded bg-[#1B24C9] text-white border border-[#D4A62A]/50 hover:bg-[#2934E5] transition-all"
            >
              <Shield className="w-3 h-3 text-[#D4A62A]" />
              <span>ប្រព័ន្ធគ្រប់គ្រង (Admin CMS)</span>
            </Link> */}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center gap-1 hover:text-white px-1.5 py-0.5 rounded text-xs transition-colors"
              >
                <Globe className="w-3 h-3 text-[#D4A62A]" />
                <span className="uppercase font-semibold text-[#FFF9EA]">
                  {lang === "km" ? "ខ្មែរ" : "ENG"}
                </span>
                <ChevronDown className="w-3 h-3 text-[#D4A62A]" />
              </button>

              {langDropdown && (
                <div className="absolute right-0 mt-1 w-28 bg-[#11178F] border border-[#D4A62A]/60 rounded-lg shadow-xl py-1 z-50 text-xs">
                  <button
                    onClick={() => {
                      setLang("km");
                      setLangDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#1B24C9] flex items-center justify-between ${
                      lang === "km"
                        ? "text-[#D4A62A] font-bold"
                        : "text-[#FFF9EA]"
                    }`}
                  >
                    <span>ភាសាខ្មែរ</span>
                  </button>
                  <button
                    onClick={() => {
                      setLang("en");
                      setLangDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 hover:bg-[#1B24C9] flex items-center justify-between ${
                      lang === "en"
                        ? "text-[#D4A62A] font-bold"
                        : "text-[#FFF9EA]"
                    }`}
                  >
                    <span>English</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand Header Navigation: Cream / Light Warm Background */}
      <div
        className={`w-full transition-all duration-300 border-b border-[#D4A62A] ${
          isScrolled
            ? "bg-[#FFF9EA]/95 backdrop-blur-md shadow-md py-2"
            : "bg-[#FFF9EA] py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Area: Official WAT O TRAO Logo - Natural display, no artificial wrapper circle */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group shrink-0 py-1"
          >
            <img
              src={logoSrc}
              alt={
                currentSettings.logoAlt ||
                "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ ) - WAT O TRAO Official Logo"
              }
              className="h-11 w-auto sm:h-16 sm:w-auto max-h-[66px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-102"
            />

            {/* Typography Branding: Deep Blue + Gold */}
            <div className="flex flex-col justify-center">
  <div className="flex flex-col items-center justify-center">
  <span className="text-xl sm:text-2xl font-extrabold text-[#11178F] font-khmer-serif tracking-tight leading-tight group-hover:text-[#1B24C9] transition-colors">
    វត្ត អូរត្រាវ
  </span>

  <span className="text-[11px] sm:text-xs text-[#11178F] font-extrabold tracking-wider uppercase mt-0.5 text-center">
    WAT O TRAO
  </span>
</div>
  
</div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#11178F] text-[#FFF9EA] font-semibold shadow-xs"
                      : "text-[#30251F] hover:text-[#1B24C9] hover:bg-[#1B24C9]/10"
                  }`}
                >
                  <span className="font-khmer-sans">{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D4A62A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg text-[#30251F] hover:text-[#11178F] hover:bg-[#1B24C9]/10 transition-colors"
              title="ស្វែងរក / Search"
            >
              <Search className="w-5 h-5" />
            </button>

            

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#11178F] hover:bg-[#1B24C9]/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation: Light Cream Canvas */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[90px] bottom-0 z-50 bg-[#FFF9EA]/98 backdrop-blur-md border-b border-[#D4A62A] overflow-y-auto animate-fade-in p-6 shadow-2xl">
          <div className="flex items-center gap-3 p-3 mb-4 rounded-xl bg-white border border-[#D4A62A]/40 shadow-xs">
            <img
              src={logoSrc}
              alt={
                currentSettings.logoAlt || "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )"
              }
              className="h-12 w-auto max-h-12 object-contain shrink-0"
            />
            <div>
              <p className="font-khmer-serif font-bold text-[#8f7211] text-base leading-tight">
                {currentSettings.templeNameKh || "វត្ត អូរត្រាវ"}
              </p>
              <p className="text-[11px] text-[#30251F]/80 font-semibold uppercase">
                WAT O TRAO • {currentSettings.templeNameEn || "WAT O TRAO"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="text-xs uppercase tracking-widest text-[#11178F] font-bold mb-2">
              មាតិការុករក • Navigation
            </div>
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-base transition-colors ${
                    active
                      ? "bg-[#11178F] text-[#FFF9EA] font-bold border-l-4 border-[#D4A62A]"
                      : "text-[#30251F] hover:bg-[#1B24C9]/10"
                  }`}
                >
                  <span className="font-khmer-serif text-base">
                    {link.label}
                  </span>
                  <span className="text-xs opacity-70">{link.enLabel}</span>
                </Link>
              );
            })}

            
          </div>
        </div>
      )}
    </header>
  );
}
