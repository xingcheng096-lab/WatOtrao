import React, { useState } from "react";
import {
  Volume2,
  BookOpen,
  Video,
  Play,
  Pause,
  Clock,
  User,
  Heart,
  Headphones,
  Download,
  Sparkles
} from "lucide-react";
import { LotusDivider, KhmerDivider, KhmerCornerDecor } from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Card, Modal } from "../../components/common/UIComponents";
import { INITIAL_POSTS, siteSettings } from "../../data/data";

export function DharmaPage() {
  const [activeTab, setActiveTab] = useState("articles");
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const dharmaArticles = INITIAL_POSTS.filter(
    (p) => p.category === "Dharma Teachings" || p.category === "Buddhist Ceremonies"
  );

  const audioTalks = [
    {
      id: "aud-1",
      title: "ការបដិបត្តិសតិ និងការបង្កើតសន្តិភាពក្នុងដួងចិត្ត",
      speaker: "ព្រះមហា គឹម ច័ន្ទ",
      duration: "45:20",
      category: "វិបស្សនាកម្មដ្ឋាន",
      desc: "វិធីសាស្រ្តអប់រំចិត្ត រំងាប់សេចក្តីក្រោធ និងការរស់នៅក្នុងបច្ចុប្បន្នភាព។"
    },
    {
      id: "aud-2",
      title: "អានិសង្សនៃការរក្សាសីល ៥ និងសីល ៨ ក្នុងជីវិតប្រចាំថ្ងៃ",
      speaker: "ព្រះថេរ ថាច់ សាម៉ាង",
      duration: "38:15",
      category: "វិន័យ និងសីលធម៌",
      desc: "សារៈសំខាន់នៃសីល ជារបងការពារកាយវិការ និងពាក្យសម្តីឱ្យបរិសុទ្ធ។"
    },
    {
      id: "aud-3",
      title: "បទស្មូត្រធម៌បុរាណខ្មែរ៖ រតនសូត្រ និងមង្គលសូត្រ",
      speaker: "ព្រះភិក្ខុ សឺន វីរៈ",
      duration: "25:40",
      category: "ស្មូត្រធម៌បុរាណ",
      desc: "សំឡេងស្មូត្រធម៌ចម្រើនព្រះបរិត្ត ដើម្បីសិរីសួស្តី និងសេចក្តីសុខក្នុងគ្រួសារ។"
    },
    {
      id: "aud-4",
      title: "ទស្សនវិជ្ជាកម្មផល និងការសន្សំបុណ្យកុសល",
      speaker: "ព្រះភិក្ខុ ចៅ សុភ័ក្ត្រ",
      duration: "52:10",
      category: "ព្រះអភិធម្ម",
      desc: "ការពន្យល់អំពីហេតុ និងផលនៃអំពើល្អ និងអំពើអាក្រក់តាមពុទ្ធវចនៈ។"
    }
  ];

  const videoLectures = [
    {
      id: "vid-1",
      title: "ពិធីបុណ្យកឋិនទាន និងក្បួនដង្ហែត្រៃចីវរមហាសាមគ្គី",
      speaker: "សម្តែងដោយព្រះសង្ឃវត្តខ្មែរក្រោម",
      duration: "32:15",
      thumbnail: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "vid-2",
      title: "ការបង្រៀនសមាធិអានាបានស្សតិសម្រាប់អ្នកចាប់ផ្តើមដំបូង",
      speaker: "ព្រះមហា គឹម ច័ន្ទ",
      duration: "40:00",
      thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "vid-3",
      title: "ទិដ្ឋភាពពិធីស្រង់ព្រះ និងពូនភ្នំខ្សាច់ក្នុងពិធីបុណ្យចូលឆ្នាំថ្មី",
      speaker: `ទិដ្ឋភាពបុណ្យ${siteSettings.templeNameKh}`,
      duration: "18:45",
      thumbnail: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="py-10 space-y-12">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F]">
          ធម្មទាន និងការអប់រំដួងចិត្ត
        </h1>
        <LotusDivider />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          «សព្វទានំ ធម្មទានំ ជិនាតិ» — ធម្មទានឈ្នះអស់ទានទាំងពួង។ សិក្សាព្រះធម៌តាមរយៈអត្ថបទ សំឡេង និងវីដេអូ។
        </p>
      </section>

      {/* Tabs Control */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center p-1.5 bg-[#F7F0DD] rounded-2xl border border-[#D4A62A]/50 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("articles")}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "articles"
                ? "bg-[#1B24C9] text-white shadow-md"
                : "text-[#11178F] hover:bg-white/50"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>អត្ថបទធម៌</span>
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "audio"
                ? "bg-[#1B24C9] text-white shadow-md"
                : "text-[#11178F] hover:bg-white/50"
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>សំឡេងធម៌</span>
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              activeTab === "video"
                ? "bg-[#1B24C9] text-white shadow-md"
                : "text-[#11178F] hover:bg-white/50"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>វីដេអូទេសនា</span>
          </button>
        </div>
      </section>

      {/* Tab 1: Articles */}
      {activeTab === "articles" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dharmaArticles.map((art) => (
              <Card key={art.id} className="p-6 bg-white flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1B24C9] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors">
                    {art.khmerTitle}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{art.author}</span>
                  <a
                    href={`/news/${art.slug}`}
                    className="text-xs font-bold text-[#1B24C9] hover:underline"
                  >
                    អានអត្ថបទ ›
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Tab 2: Audio Talks */}
      {activeTab === "audio" && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-4">
            {audioTalks.map((talk) => {
              const isPlaying = playingAudioId === talk.id;

              return (
                <div
                  key={talk.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isPlaying
                      ? "bg-gradient-to-r from-[#11178F] to-[#1B24C9] text-[#FFF9EA] border-[#D4A62A] shadow-lg"
                      : "bg-white border-[#E8D7A5] hover:border-[#D4A62A] shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPlayingAudioId(isPlaying ? null : talk.id)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105 ${
                        isPlaying
                          ? "bg-[#D4A62A] text-[#11178F] shadow-md"
                          : "bg-[#1B24C9] text-white"
                      }`}
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>

                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${
                        isPlaying ? "text-[#D4A62A]" : "text-[#D4A62A]"
                      }`}>
                        {talk.category} • {talk.duration}
                      </span>
                      <h3 className={`font-bold text-base font-khmer-serif leading-snug ${
                        isPlaying ? "text-white" : "text-[#11178F]"
                      }`}>
                        {talk.title}
                      </h3>
                      <p className={`text-xs mt-1 line-clamp-1 ${
                        isPlaying ? "text-[#F7EED8]" : "text-stone-600"
                      }`}>
                        {talk.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className={`text-xs font-medium ${isPlaying ? "text-[#F7EED8]" : "text-stone-500"}`}>
                      {talk.speaker}
                    </span>
                    <button
                      onClick={() => alert(`ទាញយកឯកសារសំឡេង៖ "${talk.title}"`)}
                      className={`p-2 rounded-lg border text-xs transition-colors ${
                        isPlaying
                          ? "border-[#D4A62A]/50 text-[#D4A62A] hover:bg-white/10"
                          : "border-gray-200 text-stone-600 hover:bg-gray-100"
                      }`}
                      title="ទាញយកសំឡេង"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Tab 3: Video Lectures */}
      {activeTab === "video" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoLectures.map((vid) => (
              <div
                key={vid.id}
                onClick={() => setActiveVideoModal(vid)}
                className="bg-white rounded-2xl border border-[#D4A62A]/50 overflow-hidden shadow-xs hover-lift cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#D4A62A] text-[#11178F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {vid.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-bold text-sm text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-stone-500">{vid.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video Modal Preview */}
      {activeVideoModal && (
        <Modal
          isOpen={!!activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          title={activeVideoModal.title}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-4">
            <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden bg-black flex items-center justify-center border border-[#D4A62A]">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute text-center text-white space-y-2 p-4">
                <div className="w-16 h-16 rounded-full bg-[#D4A62A] text-[#11178F] flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#F7EED8]">
                  វីដេអូផ្សាយផ្ទាល់ពីវត្តខ្មែរក្រោម ({activeVideoModal.duration})
                </p>
                <p className="text-xs opacity-75">
                  (ការចាក់ផ្សាយគំរូសាសនា • Sample Video Broadcast)
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-stone-600 pt-2">
              <span>{activeVideoModal.speaker}</span>
              <Button variant="secondary" size="sm" onClick={() => setActiveVideoModal(null)}>
                បិទ / Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
