import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Calendar,
  Users,
  Image,
  TrendingUp,
  Heart,
  Plus,
  ArrowRight,
  Clock,
  Eye,
  CheckCircle2
} from "lucide-react";
import { StatCard, Button, StatusBadge } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";
import { formatCurrency } from "../../utils/helpers";
import watOuTraoLogo from "../../assets/branding/wat-ou-trao-official-logo.png";

export function AdminDashboard() {
  const { posts = [], events = [], monks = [], projects = [], media = [], settings } = useAdminData() || {};

  const safeProjects = Array.isArray(projects) ? projects : [];
  const safePosts = Array.isArray(posts) ? posts : [];
  const safeEvents = Array.isArray(events) ? events : [];

  const totalDonations = safeProjects.reduce((acc, p) => acc + (p?.currentAmount || 0), 0);
  const recentPosts = safePosts.slice(0, 5);
  const upcomingEvents = safeEvents.filter((e) => e?.status === "Upcoming").slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#4A1414] via-[#5C1616] to-[#10109F]/80 rounded-2xl p-6 sm:p-8 text-[#FFF8E7] border border-[#D4AF37]/50 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <img
            src={settings?.officialLogo || settings?.logo || watOuTraoLogo}
            alt="Official Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-contain shrink-0 bg-white/10 p-1 border-2 border-[#D4A62A] shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                ផ្ទាំងគ្រប់គ្រងរដ្ឋបាលវត្ត
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#1717D8]/60 text-white border border-[#D4A62A]/40 font-khmer-sans">
                {settings?.officialFormalNameKh || "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-khmer-serif mt-1">
              សូមស្វាគមន៍មកកាន់ប្រព័ន្ធគ្រប់គ្រង{settings?.templeNameKh || "វត្ត អូរត្រាវ"}
            </h1>
            <p className="text-xs sm:text-sm text-[#E8D7A5] mt-1">
              {settings?.templeMapName || "WAT O TRAO"} • តាមដានព័ត៌មាន កម្មវិធីបុណ្យសាសនា និងបច្ច័យកសាងវត្តអារាម
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/admin/posts/new">
            <Button variant="gold" size="sm" className="whitespace-nowrap">
              <Plus className="w-4 h-4 mr-1" />
              <span>សរសេរអត្ថបទថ្មី</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="អត្ថបទផ្សាយសរុប"
          value={posts.length}
          subtitle="អត្ថបទ និងសារព័ត៌មាន"
          icon={FileText}
        />
        <StatCard
          title="កម្មវិធីបុណ្យសាសនា"
          value={events.length}
          subtitle="ក្នុងប្រតិទិនឆ្នាំនេះ"
          icon={Calendar}
        />
        <StatCard
          title="ព្រះសង្ឃក្នុងវត្ត"
          value={monks.length}
          subtitle="គណៈសង្ឃ និងគ្រូសូត្រ"
          icon={Users}
        />
        <StatCard
          title="បច្ច័យកសាងប្រមូលបាន"
          value={formatCurrency(totalDonations)}
          subtitle="តាមគម្រោងអភិវឌ្ឍន៍"
          icon={Heart}
        />
      </div>

      {/* Grid: Recent Posts & Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left (8 cols): Recent Posts Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
          <div className="p-5 border-b border-stone-100 flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base text-stone-800 font-khmer-serif">
                អត្ថបទដែលបានផ្សាយថ្មីៗ (Recent Posts)
              </h2>
              <p className="text-xs text-stone-500">អត្ថបទ ៥ ចុងក្រោយដែលបានបញ្ចូលក្នុងប្រព័ន្ធ</p>
            </div>
            <Link to="/admin/posts">
              <button className="text-xs font-bold text-[#6E1F1F] hover:underline flex items-center gap-1">
                <span>មើលទាំងអស់</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-600">
              <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] border-b border-stone-100">
                <tr>
                  <th className="px-5 py-3">ចំណងជើង</th>
                  <th className="px-4 py-3">ជំពូក</th>
                  <th className="px-4 py-3">ស្ថានភាព</th>
                  <th className="px-4 py-3">កាលបរិច្ឆេទ</th>
                  <th className="px-4 py-3 text-right">សកម្មភាព</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-stone-50/70 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.coverImage}
                          alt=""
                          className="w-10 h-10 rounded-lg object-cover border border-stone-200 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-stone-800 font-khmer-serif line-clamp-1 max-w-xs">
                            {post.khmerTitle}
                          </p>
                          <p className="text-[11px] text-stone-400 truncate">{post.author}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">{post.category}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <StatusBadge status={post.status} />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-500">{post.date}</td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <Link
                        to={`/admin/posts/edit/${post.id}`}
                        className="text-xs font-semibold text-[#6E1F1F] hover:underline mr-3"
                      >
                        កែប្រែ
                      </Link>
                      <Link
                        to={`/news/${post.slug}`}
                        target="_blank"
                        className="text-xs text-stone-400 hover:text-stone-700"
                      >
                        មើល
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right (4 cols): Upcoming Events Mini List */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-stone-200 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div>
              <h2 className="font-bold text-base text-stone-800 font-khmer-serif">
                កម្មវិធីបុណ្យខាងមុខ
              </h2>
              <p className="text-xs text-stone-500">ប្រតិទិនសាសនា</p>
            </div>
            <Link to="/admin/events" className="text-xs text-[#6E1F1F] font-bold hover:underline">
              គ្រប់គ្រង
            </Link>
          </div>

          <div className="space-y-3">
            {upcomingEvents.map((evt) => (
              <div
                key={evt.id}
                className="p-3 rounded-xl bg-amber-50/60 border border-[#E8D7A5] space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] text-[#6E1F1F] font-bold">
                  <span>{evt.buddhistDate}</span>
                  <span className="text-stone-500 font-normal">{evt.date}</span>
                </div>
                <h4 className="font-bold text-xs text-stone-900 font-khmer-serif line-clamp-1">
                  {evt.khmerTitle}
                </h4>
                <div className="text-[11px] text-stone-500 flex items-center gap-2">
                  <Clock className="w-3 h-3 text-[#C9972B]" />
                  <span>{evt.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions Card */}
          <div className="pt-4 border-t border-stone-100 space-y-2">
            <h3 className="text-xs font-bold uppercase text-stone-400 tracking-wider">
              ផ្លូវកាត់រហ័ស (Quick Actions)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/admin/events"
                className="p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 text-center border border-stone-200 transition-colors"
              >
                + បន្ថែមពិធីបុណ្យ
              </Link>
              <Link
                to="/admin/media"
                className="p-2.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 text-center border border-stone-200 transition-colors"
              >
                + បង្ហោះរូបភាព
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
