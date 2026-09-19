import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Compass,
  Heart,
  Facebook,
  Youtube,
  Send,
  ArrowUp
} from "lucide-react";
import { LotusDivider } from "../traditional/LotusDivider";
import { INITIAL_SITE_SETTINGS, siteSettings } from "../../data/data";
import watOuTraoLogo from "../../assets/branding/wat-ou-trao-official-logo.png";

export function Footer({ onOpenDonationModal }) {
  const logoSrc = siteSettings.officialLogo || siteSettings.logo || watOuTraoLogo;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#11178F] text-[#FFF9EA] overflow-hidden">
      {/* Decorative Traditional Khmer Gold Top Border */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#D4A62A] via-[#F4E8C1] to-[#D4A62A]" />

      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D4A62A_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Temple Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={logoSrc}
                alt={siteSettings.logoAlt || "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ ) - WAT O TRAO Official Logo"}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain shrink-0 rounded-full shadow-lg bg-white/10 p-0.5 border border-[#D4A62A]/50 ring-2 ring-white/20"
              />
              <div>
                <h3 className="text-xl font-bold font-khmer-serif text-[#FFF9EA] leading-tight">
                  {siteSettings.templeNameKh}
                </h3>
                <p className="text-xs text-[#D4A62A] font-medium font-khmer-serif mt-0.5">
                  {siteSettings.officialFormalNameKh || "វត្តសាសនសាមគ្គរង្សី"}
                </p>
                <p className="text-[10px] text-[#F7EED8]/90 tracking-wider uppercase font-semibold mt-0.5">
                  Wat Sasana Rangsey (O Trao) 
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F7EED8]/85 leading-relaxed">
              {siteSettings.templeNameKh} ({siteSettings.templeMapName}) គឺជាបូជនីយដ្ឋានពុទ្ធសាសនាថេរវាទ និងជាមជ្ឈមណ្ឌលថែរក្សាអត្តសញ្ញាណ វប្បធម៌ អក្សរសាស្ត្រ និងទំនៀមទម្លាប់បុរាណរបស់បងប្អូនខ្មែរក្រោមគ្រប់ជំនាន់។
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={INITIAL_SITE_SETTINGS.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#FFF9EA] border border-[#1877F2]/40 text-xs font-khmer-sans transition-all"
                title="Facebook: វត្ត អូរត្រាវ"
              >
                <Facebook className="w-4 h-4 text-[#60a5fa]" />
                <span>ហ្វេសប៊ុកផ្លូវការវត្ត</span>
              </a>
              <a
                href={INITIAL_SITE_SETTINGS.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1B24C9] hover:bg-[#D4A62A] hover:text-[#11178F] border border-[#D4A62A]/40 flex items-center justify-center transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={INITIAL_SITE_SETTINGS.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#1B24C9] hover:bg-[#D4A62A] hover:text-[#11178F] border border-[#D4A62A]/40 flex items-center justify-center transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A62A] mb-4 flex items-center gap-2 font-khmer-serif">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A62A]" />
              តំណភ្ជាប់រហ័ស • Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#F7EED8]">
              <li>
                <Link to="/about" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> ប្រវត្តិ និងចក្ខុវិស័យវត្ត
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2 text-[#D4A62A] font-medium">
                  <span className="text-[#D4A62A] text-xs">›</span> សកម្មភាពវត្ត (Activities)
                </Link>
              </li>
              <li>
                <Link to="/monks" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> ព្រះសង្ឃ និងគណៈកម្មការ
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> ព័ត៌មាន និងសេចក្តីជូនដំណឹង
                </Link>
              </li>
              <li>
                <Link to="/dharma" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> ធម្មទាន និងការបដិបត្តិធម៌
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> កាលវិភាគបុណ្យសាសនា
                </Link>
              </li>
              <li>
                <Link to="/wat-khmer" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> មរតកប្រវត្តិសាស្ត្រខ្មែរក្រោម
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4A62A] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A62A] text-xs">›</span> អាល់ប៊ុមរូបភាពវត្ត
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Buddhist Hours & Dharma Classes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A62A] mb-4 flex items-center gap-2 font-khmer-serif">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A62A]" />
              ម៉ោងធម្មសភា និងបដិបត្តិធម៌
            </h4>
            <div className="space-y-3 text-xs text-[#F7EED8]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A62A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">ម៉ោងបើកទ្វារវត្តជារៀងរាល់ថ្ងៃ៖</p>
                  <p className="opacity-80">០៦:០០ ព្រឹក – ០៧:០០ យប់</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#D4A62A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">ថ្នាក់សមាធិ និងរៀនភាសាបាលី៖</p>
                  <p className="opacity-80">រៀងរាល់ថ្ងៃសៅរ៍ និងអាទិត្យ (០២:០០ រសៀល)</p>
                </div>
              </div>

              {/* <div className="pt-2">
                <button
                  onClick={onOpenDonationModal}
                  className="w-full py-2 px-3 rounded-lg bg-[#1B24C9] hover:bg-[#2934E5] border border-[#D4A62A]/50 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Heart className="w-3.5 h-3.5 fill-[#D4A62A] text-[#D4A62A]" />
                  <span>បច្ច័យបួនទ្រទ្រង់ព្រះសង្ឃ</span>
                </button>
              </div> */}
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4A62A] mb-4 flex items-center gap-2 font-khmer-serif">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A62A]" />
              ទំនាក់ទំនងវត្ត • Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#F7EED8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A62A] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white/95">{siteSettings.address}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteSettings.mapSearchQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#D4A62A] hover:underline mt-1 font-semibold"
                  >
                    <span>មើលលើ Google Maps</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A62A] shrink-0" />
                <span>{siteSettings.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A62A] shrink-0" />
                <span>{siteSettings.email}</span>
              </li>
            </ul>

            <div className="mt-4 p-3 rounded-lg bg-[#0D1252] border border-[#D4A62A]/25 text-[11px] text-[#F7EED8]/85">
              «ការថែរក្សាព្រះធម៌ គឺការថែរក្សាសេចក្តីសុខសន្តិភាពនៃមនុស្សជាតិ»
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider with Lotus */}
        <LotusDivider className="my-8 opacity-40" />

        {/* Copyright & Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7EED8]/70 pt-2">
          <p>© {new Date().getFullYear()} {siteSettings.templeNameKh} ({siteSettings.templeMapName}). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-[#D4A62A] transition-colors"
            >
              <span>ឡើងលើវិញ</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
