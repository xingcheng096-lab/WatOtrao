import React, { useState } from "react";
import { Plus, Trash2, Image as ImageIcon, ZoomIn, Upload, Check } from "lucide-react";
import { Button, Modal, ConfirmDialog, ImageUploaderPreview } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminGallery() {
  const { media = [], addMedia, deleteMedia } = useAdminData() || {};
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "Ceremony",
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
  });

  const categories = [
    { id: "all", name: "ទាំងអស់ (All)" },
    { id: "Ceremony", name: "ពិធីបុណ្យសាសនា" },
    { id: "Monks", name: "សកម្មភាពព្រះសង្ឃ" },
    { id: "Festival", name: "បុណ្យប្រពៃណី" },
    { id: "Architecture", name: "ស្ថាបត្យកម្មវត្ត" },
    { id: "Community", name: "សហគមន៍ពុទ្ធបរិស័ទ" }
  ];

  const safeMedia = Array.isArray(media) ? media : [];
  const filteredMedia = safeMedia.filter(
    (m) => selectedCategory === "all" || m.category === selectedCategory
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.url) {
      alert("សូមបញ្ចូលចំណងជើងរូបថត និង URL រូបភាព!");
      return;
    }
    addMedia(formData);
    setIsAddModalOpen(false);
    setFormData({
      title: "",
      category: "Ceremony",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងកម្រងរូបភាពវត្ត (Gallery Management)
          </h1>
          <p className="text-xs text-stone-500">
            ផ្ទុករូបថតពិធីបុណ្យ ព្រះសង្ឃ និងស្ថាបត្យកម្មវត្តចូលក្នុងអាល់ប៊ុម
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          <span>បញ្ចូលរូបភាពថ្មី</span>
        </Button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-[#6E1F1F] text-white shadow-xs"
                : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedia.map((photo) => (
          <div
            key={photo.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs group flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden bg-stone-100">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                {photo.category}
              </span>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-xs text-stone-800 font-khmer-serif line-clamp-1">
                  {photo.title}
                </h4>
                <span className="text-[10px] text-stone-400">{photo.date || "ថ្មីៗនេះ"}</span>
              </div>

              <button
                onClick={() => setDeletingId(photo.id)}
                className="p-1.5 rounded-md text-stone-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                title="លុបចេញ"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Photo Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="បញ្ចូលរូបភាពក្នុងអាល់ប៊ុម"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ចំណងជើងរូបភាព *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="ឧ. ពិធីស្រង់ព្រះក្នុងថ្ងៃបុណ្យចូលឆ្នាំថ្មី"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ជំពូកអាល់ប៊ុម
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 bg-white"
            >
              <option value="Ceremony">ពិធីបុណ្យសាសនា (Ceremony)</option>
              <option value="Monks">សកម្មភាពព្រះសង្ឃ (Monks)</option>
              <option value="Festival">បុណ្យប្រពៃណី (Festival)</option>
              <option value="Architecture">ស្ថាបត្យកម្មវត្ត (Architecture)</option>
              <option value="Community">សហគមន៍ពុទ្ធបរិស័ទ (Community)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              រូបភាព (Image Preview / URL)
            </label>
            <ImageUploaderPreview
              imageUrl={formData.url}
              onChange={(url) => setFormData({ ...formData, url })}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setIsAddModalOpen(false)}>
              បោះបង់
            </Button>
            <Button variant="primary" size="sm" type="submit">
              បញ្ចូលរូបភាព
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          deleteMedia(deletingId);
          setDeletingId(null);
        }}
        title="បញ្ជាក់ការលុបរូបភាព"
        message="តើអ្នកប្រាកដជាចង់លុបរូបថតនេះចេញពីកម្រងរូបភាពមែនទេ?"
      />
    </div>
  );
}
