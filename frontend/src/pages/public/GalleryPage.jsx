import React, { useState } from "react";
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Modal } from "../../components/common/UIComponents";
import { INITIAL_GALLERIES, INITIAL_MEDIA } from "../../data/data";

export function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState("all");
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    { id: "all", name: "ទាំងអស់ (All)" },
    { id: "Ceremony", name: "ពិធីបុណ្យសាសនា" },
    { id: "Monks", name: "សកម្មភាពព្រះសង្ឃ" },
    { id: "Festival", name: "បុណ្យប្រពៃណី" },
    { id: "Architecture", name: "ស្ថាបត្យកម្មវត្ត" },
    { id: "Community", name: "សហគមន៍ពុទ្ធបរិស័ទ" }
  ];

  const filteredMedia = INITIAL_MEDIA.filter(
    (m) => selectedAlbum === "all" || m.category === selectedAlbum
  );

  return (
    <div className="py-10 space-y-12">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F]">
          កម្រងរូបភាព និងទិដ្ឋភាពវត្តអារាម
        </h1>
        <LotusDivider />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          រូបថតអនុស្សាវរីយ៍នៃពិធីបុណ្យ សកម្មភាពសង្ឃ និងកេរដំណែលស្ថាបត្យកម្មខ្មែរក្រោម
        </p>
      </section>

      {/* Album Category Filter */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 p-2 bg-white rounded-2xl border border-[#E8D7A5] shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedAlbum(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedAlbum === cat.id
                  ? "bg-[#1B24C9] text-white shadow-sm"
                  : "bg-amber-50/60 text-[#11178F] hover:bg-amber-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredMedia.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-[#D4A62A]/50 shadow-md group cursor-pointer bg-white"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Royal Blue / Gold Overlay Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#11178F]/95 via-[#1B24C9]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="w-10 h-10 rounded-full bg-[#D4A62A] text-[#11178F] flex items-center justify-center mb-2 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
                <span className="text-[11px] text-[#D4A62A] font-semibold uppercase">
                  {photo.category}
                </span>
                <h3 className="font-bold text-sm font-khmer-serif leading-snug text-white">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#D4A62A] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl border-2 border-[#D4A62A] object-contain shadow-2xl"
            />

            <div className="mt-4 text-center text-white space-y-1">
              <span className="text-xs text-[#D4A62A] font-bold uppercase tracking-wider">
                {activePhoto.category}
              </span>
              <h4 className="text-lg font-bold font-khmer-serif">
                {activePhoto.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
