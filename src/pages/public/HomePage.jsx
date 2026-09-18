import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  ArrowRight,
  BookOpen,
  Volume2,
  Video,
  Award,
  Users,
  Compass,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Facebook,
  Eye,
  CheckCircle2
} from "lucide-react";
import {
  LotusDivider,
  KhmerDivider,
  KhmerCornerDecor,
  KhmerPatternBackground
} from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Card, StatusBadge } from "../../components/common/UIComponents";
import { TempleMapCard } from "../../components/traditional/TempleMapCard";
import { WatCard } from "../../components/public/WatCard";
import {
  INITIAL_POSTS,
  INITIAL_EVENTS,
  INITIAL_MONKS,
  INITIAL_PROJECTS,
  INITIAL_GALLERIES,
  KHMER_KROM_HERITAGE_DATA,
  INITIAL_SITE_SETTINGS,
  INITIAL_WATS,
  siteSettings,
  templeActivities,
  donorRecords,
  templeDevelopments
} from "../../data/data";
import { formatCurrency } from "../../utils/helpers";
// ============================================================
// MONK IMAGES
// ============================================================

import kruImage from "../../assets/images/kru.jpg";

import monkImage1 from "../../assets/images/ថាច់ ធា.png";
import monkImage2 from "../../assets/images/ថាច់ ង៉ុកហូវ.png";
import monkImage3 from "../../assets/images/ថាច់ សាយ៉ាង.png";
import monkImage4 from "../../assets/images/ចៅ រិទ្ធី.png";
import monkImage5 from "../../assets/images/គឹម ហ្វាយញ៉ឹង.png";
import khaiThachImage from "../../assets/images/ខាយ ថាច់.png";

export function HomePage() {
  const { onOpenDonationModal } = useOutletContext() || {};
// ============================================================
  // LOCAL MONK IMAGE MAPPING
  // ============================================================

  const monkLocalImages = [
    kruImage,
    monkImage1,
    monkImage2,
    monkImage3,
    monkImage4,
    monkImage5,
  ];

  const getHomeMonkImage = (monk, index) => {
    // Use local image first
    if (monkLocalImages[index]) {
      return monkLocalImages[index];
    }

    // Fallback
    return monk?.portrait || monk?.image || kruImage;
  };
  const recentActivities = templeActivities.slice(0, 6);
  const featuredPosts = INITIAL_POSTS.filter((p) => p.status === "Published").slice(0, 3);
  const upcomingEvents = INITIAL_EVENTS.filter((e) => e.status === "Upcoming").slice(0, 3);
  const homeOnlyMonk = {
  id: "home-khai-thach",
  khmerName: "ខាយ ថាច់",
  name: "Khai Thach",
  title: "ព្រះសង្ឃ",
  birthYear: "១៩៩១",
  vassa: "២០",
  portrait: khaiThachImage,
};

// Keep 4 monks only
// Remove ព្រះមហា ចៅ រិទ្ធី → replace with ខាយ ថាច់
// ============================================================
// HOME MONKS — SHOW ALL 6
// ============================================================

const leadingMonks = [
  ...INITIAL_MONKS.filter(
    (monk) =>
      !(
        monk.khmerName?.includes("ចៅ រិទ្ធី") ||
        monk.name?.toLowerCase().includes("chao ritthy") ||
        monk.name?.toLowerCase().includes("chau ritthy")
      )
  ),
  homeOnlyMonk,
];


  const activeDevelopments = templeDevelopments.slice(0, 4);
  const recentDonors = donorRecords.slice(0, 6);
  const galleryPreview = INITIAL_GALLERIES.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-[#11178F]">
        {/* Background Image with Natural Photography */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom opacity-80 filter contrast-105"
          style={{
      backgroundImage: `url('src/assets/images/wat-otrao.png')`,
    }}
        />

        {/* Subtle Dark & Deep Blue Gradient Overlay (No red overlay) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11178F]/90 via-black/45 to-black/25" />
        <KhmerPatternBackground opacity="opacity-[0.04]" />

        {/* Decorative Gold Frame Border */}
        <div className="absolute inset-4 sm:inset-8 border border-[#D4A62A]/40 pointer-events-none rounded-2xl">
          <KhmerCornerDecor position="top-left" className="top-2 left-2" />
          <KhmerCornerDecor position="top-right" className="top-2 right-2" />
          <KhmerCornerDecor position="bottom-left" className="bottom-2 left-2" />
          <KhmerCornerDecor position="bottom-right" className="bottom-2 right-2" />
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center text-[#FFF9EA] z-10">
          
          {/* Main Khmer Temple Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-khmer-serif text-[#FFF9EA] tracking-tight leading-tight drop-shadow-md">
            ស្វែងយល់អំពី
            <br />
            វត្តខ្មែរ
          </h1>

          <p className="text-lg sm:text-2xl font-medium text-[#D4A62A] mt-3 drop-shadow-xs">Discover Khmer Buddhist Temples</p>

          <LotusDivider className="my-14 opacity-85" goldColor="#D4A62A" maroon="#1B24C9" />

          {/* Short Welcome Message */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FFF9EA]/90 leading-relaxed mb-8 font-normal">
            ស្វាគមន៍មកកាន់គេហទំព័រ {siteSettings.templeNameKh} ជាទីសក្ការបូជាពុទ្ធសាសនា និងជាជង្រុកថែរក្សាអក្សរសាស្ត្រ វប្បធម៌ និងទំនៀមទម្លាប់ប្រពៃណីដូនតាខ្មែរក្រោមដ៏ពិសិដ្ឋ។
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/about">
              <Button variant="gold" size="lg" className="min-w-[180px]">
                ស្វែងយល់អំពីវត្ត
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="outline" size="lg" className="min-w-[180px] border-[#FFF9EA] text-[#FFF9EA] hover:bg-white/15">
                មើលកម្មវិធីបុណ្យ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. TEMPLE WELCOME (Two-Column Section) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Temple Image with Traditional Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-[#D4A62A]/25 to-[#1B24C9]/15 shadow-xl border border-[#D4A62A]/40">
              <img
                src="src/assets/images/srong-preah.JPG"
                alt={`${siteSettings.templeNameKh} Pagoda`}
                className="w-full h-96 object-cover rounded-xl shadow-inner filter brightness-[0.98]"
              />
              <KhmerCornerDecor position="top-left" className="top-4 left-4" />
              <KhmerCornerDecor position="bottom-right" className="bottom-4 right-4" />

              {/* Floating Badge in Deep Blue and Gold */}
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-[#11178F] text-[#FFF9EA] p-3.5 rounded-xl border border-[#D4A62A] shadow-xl text-center max-w-[200px]">
                <p className="text-[11px] text-[#D4A62A] uppercase font-bold tracking-wider">ពុទ្ធសករាជ</p>
                <p className="text-xl font-bold font-khmer-serif text-white">ព.ស. ២៥៧០</p>
              </div>
            </div>
          </div>

          {/* Right Column: Welcome Message & Monk Signature */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#11178F]">
              <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
              <span>ស្វាគមន៍មកកាន់ទីអារាម • TEMPLE WELCOME</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-khmer-serif text-[#11178F] leading-snug">
              ទីសក្ការបូជាពុទ្ធសាសនា និងម្លប់សន្តិភាពនៃដួងចិត្ត
            </h2>

            <KhmerDivider />

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {siteSettings.templeNameKh} មិនត្រឹមតែជាកន្លែងសមាទានសីល និងបំពេញកុសលធម៌ប៉ុណ្ណោះទេ ប៉ុន្តែគឺជាដួងព្រលឹង និងជាមជ្ឈមណ្ឌលសហគមន៍ដែលតភ្ជាប់កូនចៅខ្មែរក្រោមពីគ្រប់ទិសទី។ នៅទីនេះ យើងរួមគ្នាថែរក្សាអក្សរខ្មែរ ភាសាបាលី សិល្បៈចម្លាក់ និងប្រពៃណីដូនតាឱ្យស្ថិតស្ថេរគង់វង្សជានិរន្តរ៍។
            </p>

            <blockquote className="p-4 rounded-xl bg-[#F7EED8] border-l-4 border-[#D4A62A] text-sm text-[#30251F] italic">
              «ការថែរក្សាព្រះពុទ្ធសាសនា គឺការថែរក្សាដួងវិញ្ញាណ និងសីលធម៌របស់មនុស្សជាតិ។ សូមឱ្យពុទ្ធបរិស័ទគ្រប់រូបស្គាល់នូវសេចក្តីសុខស្ងប់ក្នុងចិត្ត។»
            </blockquote>

            <div className="flex items-center justify-between pt-2 border-t border-[#D4A62A]/30">
              <div>
                <p className="font-bold text-sm text-[#11178F] font-khmer-serif">ព្រះអង្គគ្រូ ថាច់ ម័ុន</p>
                <p className="text-xs text-stone-600">ចៅអធិការ{siteSettings.templeNameKh}</p>
              </div>
              <Link to="/about">
                <Button variant="primary" size="md">
                  ស្វែងយល់បន្ថែម
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. RECENT TEMPLE ACTIVITIES FROM WAT OU TRAO */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-amber-50/50 via-white to-amber-50/20 rounded-3xl border border-[#D4A62A]/30 shadow-xs">
        <SectionTitle
          title="WAT OU TRAO RECENT ACTIVITIES"
          khmerTitle="សកម្មភាពថ្មីៗពីវត្ត អូរត្រាវ"
          subtitle="កម្រងរូបភាព និងទិដ្ឋភាពពិធីបុណ្យ កិច្ចការព្រះសង្ឃ និងសកម្មភាពពុទ្ធបរិស័ទចំណុះជើងវត្ត"
        />

        {/* 6 Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentActivities.map((act) => {
            return (
              <div
                key={act.id}
                className="bg-white rounded-2xl border border-[#D4A62A]/35 overflow-hidden shadow-sm hover-lift flex flex-col justify-between group"
              >
                {/* Image & Badges */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.titleKh}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#1B24C9] text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#11178F] shadow-xs">
                    {act.categoryLabelKh}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-[#FFF9EA] text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D4A62A]" />
                    <span>{act.location}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <Calendar className="w-3.5 h-3.5 text-[#C99624]" />
                      <span>{act.date}</span>
                      <span>•</span>
                      <span className="text-[#11178F] font-semibold">{act.year}</span>
                    </div>

                    <Link to={`/activities/${act.id}`}>
                      <h3 className="font-bold text-base sm:text-lg text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors line-clamp-2">
                        {act.titleKh}
                      </h3>
                    </Link>

                    <p className="text-[11px] text-stone-500 font-medium line-clamp-1">
                      {act.titleEn}
                    </p>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {act.descriptionKh}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                    <Link
                      to={`/activities/${act.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#11178F] group-hover:text-[#D4A62A] transition-colors"
                    >
                      <span>មើលពិស្តារ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={siteSettings.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#1877F2] hover:underline font-semibold"
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

        
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. LATEST NEWS (News Cards with Staggered Entrance) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-[#FFF9EA] to-[#F7EED8]/40 rounded-3xl">
        <SectionTitle
          title="LATEST NEWS & UPDATES"
          khmerTitle="ព័ត៌មាន និងសកម្មភាពវត្តថ្មីៗ"
          subtitle={`តាមដាននូវព្រឹត្តិការណ៍សាសនា សកម្មភាពព្រះសង្ឃ និងសេចក្តីប្រកាសសំខាន់ៗរបស់${siteSettings.templeNameKh}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full bg-white group">
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.coverImage}
                  alt={post.khmerTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1B24C9] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#11178F]">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <Calendar className="w-3.5 h-3.5 text-[#C99624]" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors line-clamp-2">
                    {post.khmerTitle}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">{post.author}</span>
                  <Link
                    to={`/news/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#11178F] group-hover:text-[#D4A62A] transition-colors"
                  >
                    <span>អានបន្ត</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/news">
            <Button variant="secondary" size="md">
              មើលព័ត៌មានទាំងអស់ (View All News)
            </Button>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. UPCOMING EVENTS (Temple Calendar Design) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          title="TEMPLE CEREMONIES & CALENDAR"
          khmerTitle="កម្មវិធីបុណ្យសាសនាខាងមុខ"
          subtitle="សូមអញ្ជើញពុទ្ធបរិស័ទជិតឆ្ងាយចូលរួមបំពេញបុណ្យកុសលតាមកាលបរិច្ឆេទ"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((evt, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={evt.id}
                className={`rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isFirst
                    ? "bg-[#11178F] text-[#FFF9EA] border-2 border-[#D4A62A] shadow-xl lg:scale-105"
                    : "bg-white text-[#30251F] border border-[#D4A62A]/40 shadow-md hover-lift"
                }`}
              >
                {isFirst && (
                  <div className="absolute top-3 right-3 bg-[#8A2727] text-[#FFF9EA] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#D4A62A]/60">
                    ពិធីបុណ្យពិសេស • Featured
                  </div>
                )}

                <div className="space-y-4">
                  {/* Vertical Date Badge */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold shrink-0 shadow-md ${
                        isFirst
                          ? "bg-gradient-to-br from-[#D4A62A] to-[#C99624] text-[#11178F]"
                          : "bg-gradient-to-br from-[#1B24C9] to-[#11178F] text-white"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-tighter">
                        {new Date(evt.date).toLocaleString("en-US", { month: "short" })}
                      </span>
                      <span className="text-2xl leading-none font-extrabold">
                        {new Date(evt.date).getDate()}
                      </span>
                    </div>

                    <div>
                      <span className={`text-xs font-khmer-serif block ${isFirst ? "text-[#D4A62A]" : "text-stone-500"}`}>
                        {evt.buddhistDate}
                      </span>
                      <h3
                        className={`text-lg font-bold font-khmer-serif line-clamp-2 mt-1 ${
                          isFirst ? "text-[#FFF9EA]" : "text-[#11178F]"
                        }`}
                      >
                        {evt.khmerTitle}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-xs leading-relaxed line-clamp-3 ${
                      isFirst ? "text-[#FFF9EA]/90" : "text-stone-600"
                    }`}
                  >
                    {evt.description}
                  </p>

                  <div
                    className={`space-y-1.5 text-xs pt-2 border-t ${
                      isFirst ? "text-[#FFF9EA]/80 border-[#D4A62A]/30" : "text-stone-600 border-amber-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#D4A62A]" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D4A62A]" />
                      <span>{evt.location}</span>
                    </div>
                  </div>
                </div>

                <div
                  className={`pt-5 mt-4 border-t flex items-center justify-between ${
                    isFirst ? "border-[#D4A62A]/30" : "border-amber-100"
                  }`}
                >
                  <span className={`text-xs font-semibold ${isFirst ? "text-[#D4A62A]" : "text-[#11178F]"}`}>
                    {evt.category}
                  </span>
                  <Link to="/events">
                    <button
                      className={`text-xs font-bold inline-flex items-center gap-1 transition-colors ${
                        isFirst ? "text-[#FFF9EA] hover:text-[#D4A62A]" : "text-[#11178F] hover:text-[#1B24C9]"
                      }`}
                    >
                      <span>មើលកាលវិភាគពិស្តារ</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link to="/events">
            <Button variant="secondary" size="md">
              មើលប្រតិទិនបុណ្យទាំងអស់ (All Events)
            </Button>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. DHARMA SECTION (Warm Cream & Royal Blue Accents) */}
      {/* ---------------------------------------------------- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7EED8]/60 via-[#FFF9EA] to-white border-y border-[#D4A62A]/30 overflow-hidden">
        <KhmerPatternBackground opacity="opacity-[0.03]" />

        <div className="relative max-w-7xl mx-auto z-10">
          <SectionTitle
            title="DHAMMA & BUDDHIST TEACHINGS"
            khmerTitle="ធម្មទាន និងការអប់រំដួងចិត្ត"
            subtitle="ស្តាប់ និងសិក្សាព្រះធម៌វិន័យតាមពុទ្ធោវាទ ដើម្បីសេចក្តីស្ងប់ និងបញ្ញាក្នុងជីវិតប្រចាំថ្ងៃ"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#D4A62A]/40 shadow-xs hover-lift flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1B24C9]/10 border border-[#1B24C9]/30 flex items-center justify-center text-[#1B24C9] mb-4">
                  <Volume2 className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#11178F] uppercase font-bold tracking-wider">សំឡេងព្រះធម៌ (Audio)</span>
                <h3 className="text-lg font-bold font-khmer-serif text-[#11178F] mt-2 mb-2">
                  ការបដិបត្តិសតិ និងការបង្កើតសន្តិភាពក្នុងដួងចិត្ត
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  សម្តែងដោយព្រះមហា គឹម ច័ន្ទ អំពីវិធីសាស្រ្តចម្រើនអានាបានស្សតិភាវនា។
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#11178F] pt-3 border-t border-amber-100">
                <span>រយៈពេល៖ ៤៥ នាទី</span>
                <Link to="/dharma" className="hover:text-[#D4A62A] font-bold">ស្តាប់ធម៌ ›</Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D4A62A]/40 shadow-xs hover-lift flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1B24C9]/10 border border-[#1B24C9]/30 flex items-center justify-center text-[#1B24C9] mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#11178F] uppercase font-bold tracking-wider">អត្ថបទធម៌ (Article)</span>
                <h3 className="text-lg font-bold font-khmer-serif text-[#11178F] mt-2 mb-2">
                  អានិសង្សនៃទាន សីល និងភាវនា ក្នុងព្រះពុទ្ធសាសនា
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  ការពន្យល់លម្អិតអំពីបុញ្ញកិរិយាវត្ថុ ១០ ប្រការ សម្រាប់ពុទ្ធសាសនិកទូទៅ។
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#11178F] pt-3 border-t border-amber-100">
                <span>៧ នាទីអាន</span>
                <Link to="/dharma" className="hover:text-[#D4A62A] font-bold">អានអត្ថបទ ›</Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D4A62A]/40 shadow-xs hover-lift flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#1B24C9]/10 border border-[#1B24C9]/30 flex items-center justify-center text-[#1B24C9] mb-4">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-xs text-[#11178F] uppercase font-bold tracking-wider">វីដេអូធម្មទេសនា (Video)</span>
                <h3 className="text-lg font-bold font-khmer-serif text-[#11178F] mt-2 mb-2">
                  ពិធីបុណ្យកឋិនទាន និងក្បួនដង្ហែត្រៃចីវរមហាសាមគ្គី
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  ទិដ្ឋភាពនៃការសម្តែងព្រះធម៌ទេសនា និងការបកស្រាយពីគម្ពីរវិន័យបិដក។
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-[#11178F] pt-3 border-t border-amber-100">
                <span>រយៈពេល៖ ៣០ នាទី</span>
                <Link to="/dharma" className="hover:text-[#D4A62A] font-bold">ទស្សនា ›</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
{/* 6. MONKS SECTION — 4 CARDS */}
{/* ---------------------------------------------------- */}
<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF9EA] overflow-hidden">
  {/* Decorative background */}
  <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#D4A62A]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#11178F]/5 blur-3xl" />

  <div className="relative z-10 w-full max-w-[1500px] mx-auto">
    {/* Section Title */}
  
    {/* =========================
        4 MONK CARDS
    ========================= */}
    <div
  className="
    mt-10
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    max-w-6xl
    mx-auto
  "
>
      {leadingMonks.map((monk, index) => (
        <Card
  key={monk.id}
  className="
    monk-card-motion
    group
    relative
    overflow-hidden
    h-full
    p-4
    sm:p-5
    bg-white
    text-center
    flex
    flex-col
    rounded-[22px]
    border
    border-[#D4A62A]/35
    shadow-[0_8px_30px_rgba(74,20,20,0.06)]
    hover:border-[#D4A62A]
    hover:shadow-[0_20px_50px_rgba(74,20,20,0.15)]
    transition-all
    duration-500
    ease-out
  "
>
          {/* Gold top decoration */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-24
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-[#D4A62A]
              to-transparent
            "
          />

          {/* =========================
              MONK IMAGE
          ========================= */}
          <div
            className="
              relative
              w-full
              aspect-[4/5]
              mb-5

              overflow-hidden
              temple-arch-top
              rounded-b-[18px]

              bg-[#F7F1E2]

              border-2
              border-[#D4A62A]/50

              group-hover:border-[#D4A62A]

              shadow-sm

              transition-all
              duration-300
            "
          >
            <img
  src={
    monk.id === "home-khai-thach"
      ? khaiThachImage
      : getHomeMonkImage(monk, index)
  }
  alt={monk.khmerName || monk.name || "ព្រះសង្ឃ"}
  loading="lazy"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = kruImage;
  }}
  className="
    w-full
    h-full
    object-cover
    object-top
    group-hover:scale-[1.04]
    transition-transform
    duration-500
    ease-out
  "
/>

            {/* Bottom image gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                h-20

                bg-gradient-to-t
                from-[#3B1010]/25
                to-transparent
              "
            />
          </div>

          {/* =========================
              MONK INFORMATION
          ========================= */}
          <div className="flex-1 flex flex-col">
            {/* Khmer Name */}
            <h3
              className="
                font-bold
                text-base
                xl:text-lg
                text-[#4A1414]
                font-khmer-serif
                leading-8
              "
            >
              {monk.khmerName}
            </h3>

            {/* Position */}
            {(monk.title || monk.khmerRole || monk.position) && (
              <p
                className="
                  mt-1
                  text-xs
                  text-[#C99624]
                  font-bold
                  font-khmer-serif
                "
              >
                {monk.title || monk.khmerRole || monk.position}
              </p>
            )}

            {/* English Name */}
            {monk.name && (
              <p className="mt-1.5 text-[11px] text-stone-400 font-medium">
                {monk.name}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <span className="w-8 h-px bg-[#D4A62A]/30" />

              <span className="w-1.5 h-1.5 rotate-45 bg-[#D4A62A]" />

              <span className="w-8 h-px bg-[#D4A62A]/30" />
            </div>

            {/* =========================
                YEAR + VASSA
            ========================= */}
            <div
              className="
                grid
                grid-cols-2
                gap-2
                mb-4
              "
            >
              {/* Birth Year */}
              <div
                className="
                  rounded-xl
                  bg-[#FFF9EA]
                  border
                  border-[#D4A62A]/20
                  px-2
                  py-2.5
                "
              >
                <p className="text-[10px] text-stone-400 font-khmer-serif">
                  ឆ្នាំកំណើត
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    font-bold
                    text-[#4A1414]
                    font-khmer-serif
                  "
                >
                  {monk.birthYear || "—"}
                </p>
              </div>

              {/* Vassa */}
              <div
                className="
                  rounded-xl
                  bg-[#FFF9EA]
                  border
                  border-[#D4A62A]/20
                  px-2
                  py-2.5
                "
              >
                <p className="text-[10px] text-stone-400 font-khmer-serif">
                  វស្សា
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    font-bold
                    text-[#4A1414]
                    font-khmer-serif
                  "
                >
                  {monk.vassa || monk.yearsOrdained || "—"} វស្សា
                </p>
              </div>
            </div>

            {/* Biography */}
            {monk.bio && (
              <p
                className="
                  text-xs
                  text-stone-600
                  leading-6
                  line-clamp-2
                  font-khmer-serif
                  mb-4
                "
              >
                {monk.bio}
              </p>
            )}

            {/* Button always bottom */}
            <div className="mt-auto pt-4 border-t border-[#D4A62A]/20">
              <Link to="/monks" className="block">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  មើលប្រវត្តិរូប
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* =========================
        VIEW ALL BUTTON
    ========================= */}
    <div className="text-center mt-10">
      <Link to="/monks">
        <Button variant="secondary" size="md">
          មើលព្រះសង្ឃទាំងអស់
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* ---------------------------------------------------- */}
      {/* 7. WAT KHMER SECTION (Warm Ivory & Royal Blue) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7EED8]/70 border-y border-[#D4A62A]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#11178F]">
                <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
                <span>វត្តខ្មែរ • WAT KHMER</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-khmer-serif text-[#11178F] leading-snug">
                {KHMER_KROM_HERITAGE_DATA.khmerTitle}
              </h2>

              <KhmerDivider />

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed">
                {KHMER_KROM_HERITAGE_DATA.lead}
              </p>

              {/* Timeline Preview */}
              <div className="space-y-4 pt-2">
                {KHMER_KROM_HERITAGE_DATA.historyChapters.map((chap, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-[#11178F] text-[#FFF9EA] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#D4A62A]">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#11178F] tracking-wide">
                        {chap.period}
                      </h4>
                      <p className="text-sm font-semibold text-[#30251F] font-khmer-serif">
                        {chap.title}
                      </p>
                      <p className="text-xs text-stone-700 mt-1 line-clamp-2">
                        {chap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/wat-khmer">
                  <Button variant="primary" size="md">
                    ស្វែងយល់ប្រវត្តិសាស្ត្រខ្មែរក្រោមពិស្តារ
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="src/assets/wats/មរតកវប្បធម៌ និងវត្តអារាមខ្មែរ.png"
                  alt="Ancient Pagoda"
                  className="rounded-2xl border-2 border-[#D4A62A]/50 shadow-lg object-cover h-64 w-full"
                />
                <div className="p-4 bg-white rounded-xl border border-[#D4A62A]/40 shadow-xs">
                  <p className="text-xs font-bold text-[#11178F] font-khmer-serif">វត្តអង្គររាជបូរី (វត្តអង្គ)</p>
                  <p className="text-[11px] text-stone-600 mt-1">កសាងឡើងក្នុង គ.ស. ៩៩០ ខេត្តព្រះត្រពាំង</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-[#11178F] text-[#FFF9EA] rounded-xl border border-[#D4A62A] shadow-xs">
                  <p className="text-xs font-bold text-[#D4A62A] uppercase">វត្តអារាមខ្មែរក្រោម</p>
                  <p className="text-2xl font-bold font-khmer-serif mt-1 text-white">៤៦០+ វត្ត</p>
                  <p className="text-[11px] text-[#FFF9EA]/80 mt-1">ថែរក្សាអក្សរ និងពុទ្ធសាសនា</p>
                </div>
                <img
                  src="src/assets/wats/មរតកវប្បធម៌ និងវត្តអារាមខ្មែរ1.png"
                  alt="Traditional Boat Race"
                  className="rounded-2xl border-2 border-[#D4A62A]/50 shadow-lg object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. GALLERY (Masonry Layout with Hover Zoom) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          
          khmerTitle="កម្រងរូបភាពទិដ្ឋភាពវត្ត"
          subtitle={`ទិដ្ឋភាពពិធីបុណ្យ ស្ថាបត្យកម្មប្រាសាទ និងសកម្មភាពពុទ្ធបរិស័ទនៅ${siteSettings.templeNameKh}`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryPreview.map((album) => (
            <Link key={album.id} to="/gallery" className="group block relative overflow-hidden rounded-2xl border border-[#D4AF37]/40 shadow-sm hover-lift">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={album.cover}
                  alt={album.khmerTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">
                    {album.albumName} • {album.imagesCount} រូប
                  </span>
                  <h3 className="font-bold text-sm font-khmer-serif leading-snug text-[#FFF8E7] group-hover:text-[#D4AF37] transition-colors">
                    {album.khmerTitle}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery">
            <Button variant="secondary" size="md">
              មើលរូបភាពទាំងអស់ (View Gallery)
            </Button>
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. TEMPLE DEVELOPMENT PROJECTS (Infrastructure & Construction) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/50 border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
          
            khmerTitle="ការអភិវឌ្ឍវត្ត និងគម្រោងកសាង"
            subtitle={`រួមចំណែកជាកម្លាំងសទ្ធាក្នុងការកសាងសមិទ្ធផលនានាក្នុង${siteSettings.templeNameKh} ដើម្បីតម្កល់ទុកជាប្រយោជន៍សាសនា`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeDevelopments.map((proj) => {
              const percent = proj.progressPercentage || 0;

              return (
                <div key={proj.id} className="bg-white rounded-2xl border border-[#D4A62A]/50 overflow-hidden shadow-md flex flex-col justify-between hover-lift">
                  <div className="relative h-56">
                    <img
                      src={proj.image}
                      alt={proj.titleKh}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-[#1B24C9] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#11178F]">
                      {proj.status}
                    </div>
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-[#FFF9EA] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold font-khmer-serif text-[#11178F] leading-snug">
                        {proj.titleKh}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {proj.titleEn}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {proj.descriptionKh}
                    </p>

                    {/* Progress Bar UI */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-[#11178F]">វឌ្ឍនភាព៖ {percent}%</span>
                        <span className="text-stone-600">
                          {proj.raisedAmount} / {proj.targetAmount}
                        </span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D4A62A] to-[#1B24C9] rounded-full transition-all duration-1000"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-stone-500">
                        <span>កាលបរិច្ឆេទ៖ {proj.startDate} – {proj.targetDate}</span>
                        <span className="font-semibold text-[#11178F]">{proj.status}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={onOpenDonationModal}
                        className="text-xs font-bold text-[#11178F] hover:text-[#D4A62A] flex items-center gap-1 transition-colors"
                      >
                        <Heart className="w-3.5 h-3.5 fill-[#11178F] text-[#11178F]" />
                        <span>ចូលរួមបច្ច័យគម្រោងនេះ</span>
                      </button>
                      <Link to="/activities" className="text-xs text-stone-500 hover:text-stone-800">
                        ព័ត៌មានលម្អិតសកម្មភាព ›
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      

      {/* ---------------------------------------------------- */}
      {/* 11. CONTACT SECTION (2-Column Elegant Design) */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#11178F]">
              <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
              <span>ព័ត៌មានទំនាក់ទំនង • CONTACT & VISIT</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold font-khmer-serif text-[#11178F] leading-snug">
              សូមអញ្ជើញមកកាន់ {siteSettings.templeNameKh}
            </h2>

            <p className="text-stone-700 text-sm leading-relaxed">
              {siteSettings.templeNameKh} ({siteSettings.templeMapName}) បើកទ្វារស្វាគមន៍ពុទ្ធបរិស័ទ និងភ្ញៀវទេសចរជាតិ-អន្តរជាតិរៀងរាល់ថ្ងៃ។ ប្រសិនបើលោកអ្នកមានបំណងរៀបចំពិធីសាសនា ឬសួរសុខទុក្ខព្រះសង្ឃ សូមអញ្ជើញមកកាន់ទីអារាមដ្ឋានដោយផ្ទាល់។
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A62A]/40 shadow-xs">
                <MapPin className="w-5 h-5 text-[#11178F] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase text-[#11178F]">អាសយដ្ឋានវត្ត (Temple Address)</h4>
                  <p className="text-sm font-bold font-khmer-serif text-[#11178F]">
                    {siteSettings.templeNameKh}
                  </p>
                  <p className="text-xs font-semibold text-[#1B24C9]">
                    {siteSettings.templeMapName}
                  </p>
                  <div className="text-xs text-stone-700 leading-relaxed font-medium">
                    R6Q9+22J, Tập Ngãi,<br />
                    Vĩnh Long, Vietnam
                  </div>
                  <div className="pt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        siteSettings.mapSearchQuery
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#11178F] hover:text-[#1B24C9] group"
                    >
                      <span>មើលទីតាំងលើផែនទី</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#D4A62A]/40 shadow-xs">
                <Clock className="w-5 h-5 text-[#11178F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#11178F]">ម៉ោងបើកទ្វារទទួលពុទ្ធបរិស័ទ</h4>
                  <p className="text-xs sm:text-sm text-stone-700 mt-1">រៀងរាល់ថ្ងៃ៖ ០៦:០០ ព្រឹក – ០៧:០០ យប់ (ថ្ងៃសីលបើករហូតដល់ ០៩:៣០ យប់)</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button variant="primary" size="md">
                  ផ្ញើសារមកកាន់វត្ត (Send Inquiry)
                </Button>
              </Link>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  siteSettings.mapSearchQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md" className="border-[#11178F] text-[#11178F] hover:bg-amber-50">
                  ទទួលទិសដៅធ្វើដំណើរ
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Khmer Traditional Map Card */}
          <div className="lg:col-span-6">
            <TempleMapCard compact={true} showEmbed={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
