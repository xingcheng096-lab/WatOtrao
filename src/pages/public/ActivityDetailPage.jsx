import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Share2,
  Facebook,
  ExternalLink,
  Tag,
  Clock,
  Heart,
  ChevronRight,
  Sparkles,
  Camera
} from "lucide-react";
import { LotusDivider, KhmerCornerDecor } from "../../components/traditional/LotusDivider";
import { Button } from "../../components/common/UIComponents";
import { templeActivities, siteSettings } from "../../data/data";

export function ActivityDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = templeActivities.find(
    (act) => String(act.id) === String(id)
  );

  if (!activity) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-bold font-khmer-serif text-[#4A1414]">
          មិនបានរកឃើញសកម្មភាពនេះទេ
        </h2>
        <p className="text-stone-600 text-sm">
          សកម្មភាពដែលលោកអ្នកកំពុងស្វែងរក ប្រហែលជាត្រូវបានផ្លាស់ប្តូរ ឬមិនមាននៅក្នុងបញ្ជី។
        </p>
        <Link to="/activities">
          <Button variant="primary" size="md">
            ត្រឡប់ទៅទំព័រសកម្មភាពទាំងអស់
          </Button>
        </Link>
      </div>
    );
  }

  const relatedActivities = templeActivities
    .filter((a) => String(a.id) !== String(activity.id))
    .slice(0, 3);

  const handleFacebookShare = () => {
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=450"
    );
  };

  return (
    <div className="py-10 space-y-12">
      {/* ---------------------------------------------------- */}
      {/* Breadcrumb Navigation */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 text-xs text-stone-500 border-b border-amber-100 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link to="/" className="hover:text-[#1B24C9]">ទំព័រដើម</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link to="/activities" className="hover:text-[#1B24C9]">សកម្មភាពវត្ត</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#1B24C9] font-semibold truncate max-w-[200px] sm:max-w-xs">
              {activity.titleKh}
            </span>
          </div>

          <button
            onClick={() => navigate("/activities")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B24C9] hover:text-[#D4A62A] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ត្រឡប់ក្រោយ</span>
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Main Activity Detail Content */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-[#D4A62A]/50 shadow-sm">
          {/* Header Title & Badges */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-[#1B24C9] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#D4A62A]/40">
                {activity.categoryLabelKh}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                <Calendar className="w-3.5 h-3.5 text-[#D4A62A]" />
                <span>{activity.date}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                <MapPin className="w-3.5 h-3.5 text-[#D4A62A]" />
                <span>{activity.location || "វត្ត អូរត្រាវ"}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-khmer-serif text-[#11178F] leading-snug">
              {activity.titleKh}
            </h1>

            <p className="text-sm font-medium text-stone-500">
              {activity.titleEn}
            </p>
          </div>

          {/* Hero Image with Traditional Corner Embellishments */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4A62A]/50 shadow-md">
            <img
              src={activity.image}
              alt={activity.titleKh}
              className="w-full h-80 sm:h-[480px] object-cover"
            />
            <KhmerCornerDecor position="top-left" className="top-3 left-3" />
            <KhmerCornerDecor position="top-right" className="top-3 right-3" />
            <KhmerCornerDecor position="bottom-left" className="bottom-3 left-3" />
            <KhmerCornerDecor position="bottom-right" className="bottom-3 right-3" />
          </div>

          {/* Content Description */}
          <div className="space-y-6 text-stone-800 text-sm sm:text-base leading-relaxed pt-2">
            <div className="p-4 rounded-xl bg-blue-50/50 border-l-4 border-[#D4A62A] font-khmer-serif text-[#11178F] text-base sm:text-lg italic">
              {activity.descriptionKh}
            </div>

            <p>
              វត្ត អូរត្រាវ ({siteSettings.templeMapName}) តែងតែរៀបចំ និងប្រារព្ធកិច្ចការទាំងនេះ
              ស្របតាមពុទ្ធោវាទ និងទំនៀមទម្លាប់បុរាណរបស់ដូនតាខ្មែរក្រោម។ ព្រះគ្រូចៅអធិការ
              ព្រះសង្ឃ និងគណៈកម្មការវត្ត សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះពុទ្ធបរិស័ទជិតឆ្ងាយ
              ដែលតែងតែចំណាយពេលវេលា និងសទ្ធាជ្រះថ្លាក្នុងការជួយទ្រទ្រង់កិច្ចការវត្តអារាម។
            </p>

            {/* Additional Photo Gallery of this activity */}
            {activity.gallery && activity.gallery.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-amber-100">
                <h3 className="text-base font-bold font-khmer-serif text-[#11178F] flex items-center gap-2">
                  <Camera className="w-4 h-4 text-[#D4A62A]" />
                  <span>កម្រងរូបភាពបន្ថែមនៃសកម្មភាពនេះ</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activity.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden border border-[#D4A62A]/40 shadow-xs h-60"
                    >
                      <img
                        src={imgUrl}
                        alt={`${activity.titleKh} - ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Facebook Connection & Share Action Bar */}
          <div className="pt-6 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleFacebookShare}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors w-full sm:w-auto"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>ចែករំលែកលើ Facebook</span>
              </button>

              <a
                href={siteSettings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors w-full sm:w-auto"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>មើលទំព័រហ្វេសប៊ុកវត្ត</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>

            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" size="sm" className="w-full sm:w-auto">
                <Heart className="w-3.5 h-3.5 mr-1" />
                <span>ចូលរួមបុណ្យ / ឧបត្ថម្ភ</span>
              </Button>
            </Link>
          </div>
        </article>
      </section>

      {/* ---------------------------------------------------- */}
      {/* Related Activities Section */}
      {/* ---------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-xl font-bold font-khmer-serif text-[#11178F] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#D4A62A]" />
          <span>សកម្មភាពផ្សេងៗទៀតពីវត្ត អូរត្រាវ</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedActivities.map((rel) => (
            <Link
              key={rel.id}
              to={`/activities/${rel.id}`}
              className="bg-white rounded-xl border border-[#D4A62A]/30 overflow-hidden shadow-xs hover-lift flex flex-col justify-between group"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={rel.image}
                  alt={rel.titleKh}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[10px] font-bold text-[#1B24C9] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {rel.categoryLabelKh}
                  </span>
                  <h4 className="font-bold text-sm text-[#11178F] font-khmer-serif mt-2 line-clamp-2 group-hover:text-[#1B24C9] transition-colors">
                    {rel.titleKh}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-amber-50">
                  <span>{rel.date}</span>
                  <span className="text-[#1B24C9] font-bold group-hover:translate-x-1 transition-transform">›</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
