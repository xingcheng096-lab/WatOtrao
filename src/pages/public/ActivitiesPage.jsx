import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Search,
  Filter,
  ArrowRight,
  Facebook,
  ExternalLink,
  Share2,
  Sparkles,
  Layers,
  Heart,
  ChevronRight,
  Eye
} from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { Button, Card, StatusBadge } from "../../components/common/UIComponents";
import { templeActivities, siteSettings } from "../../data/data";

export function ActivitiesPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest"); // "newest", "oldest"

  const activityTypes = [
    { id: "all", labelKh: "សកម្មភាពទាំងអស់", labelEn: "All Activities" },
    { id: "ceremony", labelKh: "ពិធីបុណ្យសាសនា", labelEn: "Ceremonies" },
    { id: "monks", labelKh: "សកម្មភាពព្រះសង្ឃ", labelEn: "Monk Life" },
    { id: "community", labelKh: "សកម្មភាពសហគមន៍", labelEn: "Community" },
    { id: "construction", labelKh: "ការកសាង និងអភិវឌ្ឍន៍", labelEn: "Development" },
    { id: "charity", labelKh: "បច្ច័យ & សប្បុរសធម៌", labelEn: "Charity & Merit" },
    { id: "dharma", labelKh: "ធម្មទាន & ព្រះធម៌", labelEn: "Dharma" },
    { id: "video", labelKh: "វីដេអូ & រូបភាព", labelEn: "Media" }
  ];

  const filteredActivities = useMemo(() => {
    let list = templeActivities.filter((act) => {
      const matchType = selectedType === "all" || act.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        act.titleKh.toLowerCase().includes(q) ||
        act.titleEn.toLowerCase().includes(q) ||
        act.descriptionKh.toLowerCase().includes(q) ||
        (act.location && act.location.toLowerCase().includes(q));
      return matchType && matchSearch;
    });

    list.sort((a, b) => {
      if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      return new Date(b.date) - new Date(a.date);
    });

    return list;
  }, [selectedType, searchQuery, sortBy]);

  const getTypeColor = (type) => {
    switch (type) {
      case "ceremony":
        return "bg-amber-700/90 text-amber-100 border-amber-500/50";
      case "monks":
        return "bg-[#1B24C9] text-white border-[#D4A62A]/50";
      case "community":
        return "bg-emerald-800 text-emerald-100 border-emerald-600/50";
      case "construction":
        return "bg-blue-900 text-blue-100 border-blue-500/50";
      case "charity":
        return "bg-rose-900 text-rose-100 border-rose-400/50";
      case "dharma":
        return "bg-purple-900 text-purple-100 border-purple-400/50";
      default:
        return "bg-[#11178F] text-[#FFF9EA] border-[#D4A62A]/40";
    }
  };

  return (
    <div className="py-10 space-y-12">
      {/* ---------------------------------------------------- */}
      {/* Header & Introduction */}
      {/* ---------------------------------------------------- */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F] leading-tight">
          សកម្មភាព និងព្រឹត្តិការណ៍ {siteSettings.templeNameKh}
        </h1>
        <p className="text-sm font-semibold text-[#1B24C9] tracking-wide uppercase mt-1">
          {siteSettings.templeMapName} • WAT O TRAO
        </p>
        <LotusDivider className="my-5" />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          ប្រមូលផ្តុំនូវរាល់ទិដ្ឋភាពជាក់ស្តែងនៃពិធីបុណ្យសាសនា កិច្ចប្រតិបត្តិរបស់ព្រះសង្ឃ
          សកម្មភាពពុទ្ធបរិស័ទចំណុះជើងវត្ត និងវឌ្ឍនភាពនៃការកសាងអភិវឌ្ឍន៍វត្ត អូរត្រាវ។
        </p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Facebook Direction Banner */}
      {/* ---------------------------------------------------- */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1877F2]/15 via-[#1B24C9]/10 to-blue-50 border border-[#1877F2]/30 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-md">
              <Facebook className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-khmer-serif text-[#11178F]">
                  ទំព័រហ្វេសប៊ុកផ្លូវការវត្ត អូរត្រាវ (Wattotrao)
                </h3>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Verified Page
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-1 max-w-2xl">
                តាមដានការផ្សាយផ្ទាល់ពិធីបុណ្យ រូបភាពសកម្មភាពប្រចាំថ្ងៃ និងសេចក្តីជូនដំណឹងទាន់ហេតុការណ៍ពីព្រះគ្រូចៅអធិការ និងគណៈកម្មការវត្ត។
              </p>
            </div>
          </div>

          <a
            href={siteSettings.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 shrink-0"
          >
            <Facebook className="w-4 h-4" />
            <span>ចូលមើលទំព័រហ្វេសប៊ុក</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section> */}

      {/* ---------------------------------------------------- */}
      {/* Filters, Categories & Search */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {activityTypes.map((type) => {
            const active = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  active
                    ? "bg-[#1B24C9] text-white shadow-md border border-[#D4A62A]/50"
                    : "bg-white text-[#11178F] hover:bg-blue-50 border border-[#E8D7A5]"
                }`}
              >
                <span>{type.labelKh}</span>
              </button>
            );
          })}
        </div>

        {/* Toolbar: Search and Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E8D7A5] shadow-xs">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3 text-[#D4A62A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ស្វែងរកតាមចំណងជើង ឬខ្លឹមសារ..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#D4A62A]/50 text-xs focus:outline-none focus:border-[#1B24C9]"
            />
          </div>

          {/* Result Count and Sort Selector */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 text-xs">
            <span className="text-stone-500">
              បង្ហាញ <strong className="text-[#1B24C9]">{filteredActivities.length}</strong> សកម្មភាព
            </span>

            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">តម្រៀប៖</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-3 rounded-lg border border-[#D4A62A]/40 bg-white text-stone-700 text-xs focus:outline-none"
              >
                <option value="newest">ថ្មីបំផុត (Newest)</option>
                <option value="oldest">ចាស់ជាងគេ (Oldest)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Activities Grid */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredActivities.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300 space-y-4">
            <Layers className="w-12 h-12 text-[#D4A62A] mx-auto opacity-50" />
            <p className="text-stone-600 font-khmer-serif text-base">
              មិនមានសកម្មភាពត្រូវនឹងពាក្យស្វែងរករបស់អ្នកឡើយ។
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedType("all");
                setSearchQuery("");
              }}
            >
              សម្អាតការស្វែងរក
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act) => {
              return (
                <div
                  key={act.id}
                  className="bg-white rounded-2xl border border-[#D4A62A]/40 overflow-hidden shadow-sm hover-lift flex flex-col justify-between group"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={act.image}
                      alt={act.titleKh}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div
                      className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md border shadow-xs ${getTypeColor(
                        act.type
                      )}`}
                    >
                      {act.categoryLabelKh}
                    </div>

                    {/* Year / Featured Indicator */}
                    {act.featured && (
                      <div className="absolute top-3 right-3 bg-[#D4A62A] text-[#11178F] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                        សំខាន់ • Featured
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      {/* Meta: Date & Location */}
                      <div className="flex items-center gap-3 text-xs text-stone-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#D4A62A]" />
                          <span>{act.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#D4A62A]" />
                          <span>{act.location}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link to={`/activities/${act.id}`}>
                        <h3 className="font-bold text-lg text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors line-clamp-2">
                          {act.titleKh}
                        </h3>
                      </Link>

                      <p className="text-[11px] text-stone-500 font-medium line-clamp-1">
                        {act.titleEn}
                      </p>

                      {/* Excerpt */}
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {act.descriptionKh}
                      </p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-amber-100/80 flex items-center justify-between">
                      <Link
                        to={`/activities/${act.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B24C9] group-hover:text-[#D4A62A] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>មើលពិស្តារ</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={siteSettings.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-[#1877F2] hover:underline font-semibold"
                        title="មើលការបង្ហោះលើ Facebook"
                      >
                        <Facebook className="w-3 h-3" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      
    </div>
  );
}
