import React from "react";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";
import { siteSettings } from "../../data/data";

export function TempleMapCard({ className = "", showEmbed = true, compact = false }) {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteSettings.mapSearchQuery || "WAT O TRAO, Tập Ngãi, Vĩnh Long, Vietnam"
  )}`;

  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    siteSettings.mapSearchQuery || "WAT O TRAO, Tập Ngãi, Vĩnh Long, Vietnam"
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    siteSettings.mapSearchQuery || "WAT O TRAO, Tập Ngãi, Vĩnh Long, Vietnam"
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className={`relative bg-[#FFFBF0] rounded-3xl border-2 border-[#D4AF37] shadow-xl overflow-hidden ${className}`}
    >
      {/* Traditional Ornate Header Bar */}
      <div className="bg-gradient-to-r from-[#4A1414] via-[#6E1F1F] to-[#4A1414] p-4 sm:p-5 text-[#FFF8E7] border-b-2 border-[#D4AF37] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Temple Stupa / Pagoda Icon Motif */}
          <div className="w-12 h-12 rounded-2xl bg-[#350E0E] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-md shrink-0">
            <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
              {/* Pagoda Stupa Spire Motif */}
              <path d="M24 3V9" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="24" cy="4" r="2" fill="#D4AF37" />
              <path d="M21 9H27L25 14H23L21 9Z" fill="#D4AF37" />
              <path d="M16 17C16 17 20 14 24 14C28 14 32 17 32 17L30 22H18L16 17Z" fill="#D4AF37" />
              <path d="M12 25C12 25 18 21 24 21C30 21 36 25 36 25L34 31H14L12 25Z" fill="#D4AF37" />
              <path d="M10 33C10 33 17 29 24 29C31 29 38 33 38 33L36 41H12L10 33Z" fill="#D4AF37" />
              <rect x="8" y="41" width="32" height="4" rx="1" fill="#D4AF37" />
              <circle cx="24" cy="36" r="2.5" fill="#4A1414" />
            </svg>
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
              <span>ផែនទីទីតាំងអារាមដ្ឋាន • TEMPLE LOCATION</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold font-khmer-serif text-[#FFF8E7] leading-tight">
              {siteSettings.templeNameKh}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] tracking-wide">
              {siteSettings.templeMapName}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1 text-[#D4AF37]/60 text-xs">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>Vĩnh Long</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Address Banner Card */}
        <div className="p-4 rounded-2xl bg-white border border-[#E8D7A5] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6E1F1F]/10 border border-[#6E1F1F]/20 text-[#6E1F1F] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5 text-[#6E1F1F]" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#6E1F1F]">
                អាសយដ្ឋានពិតប្រាកដ (Exact Address)
              </div>
              <div className="text-sm sm:text-base font-bold text-[#4A1414] font-khmer-serif mt-0.5">
                {siteSettings.templeNameKh}
              </div>
              <div className="text-xs text-stone-600 font-medium">
                ឈ្មោះសម្រាប់ស្វែងរកលើផែនទី៖{" "}
                <span className="font-bold text-[#4A1414]">{siteSettings.templeMapName}</span>
              </div>
              <div className="text-xs text-stone-700 font-mono mt-1 bg-stone-100 px-2 py-1 rounded inline-block">
                {siteSettings.address}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#6E1F1F] hover:bg-[#4A1414] text-white text-xs font-bold transition-all shadow-sm border border-[#D4AF37]"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>មើលលើផែនទី</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-amber-50 text-[#6E1F1F] text-xs font-bold transition-all shadow-xs border border-[#6E1F1F]"
            >
              <Navigation className="w-4 h-4 text-[#6E1F1F]" />
              <span>ទទួលទិសដៅ</span>
            </a>
          </div>
        </div>

        {/* Interactive Google Map Embed */}
        {showEmbed && (
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-md bg-stone-200">
            <iframe
              title={`Google Map - ${siteSettings.templeMapName}`}
              src={embedUrl}
              width="100%"
              height={compact ? "240" : "320"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
            {/* Quick floating action pill */}
            <div className="absolute bottom-3 right-3 z-10 flex gap-2">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#4A1414]/90 hover:bg-[#4A1414] backdrop-blur-xs text-[#FFF8E7] text-xs font-semibold shadow-lg border border-[#D4AF37] transition-all"
              >
                <span>ពង្រីកផែនទី</span>
                <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
