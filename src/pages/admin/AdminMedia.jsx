import React, { useState } from "react";
import { FolderOpen, Copy, Check, Trash2, Eye, Upload, ExternalLink } from "lucide-react";
import { Button, Modal, ConfirmDialog, ImageUploaderPreview } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminMedia() {
  const { media = [], addMedia, deleteMedia } = useAdminData() || {};
  const [selectedItem, setSelectedItem] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const [newMedia, setNewMedia] = useState({
    title: "",
    category: "General",
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
  });

  const copyUrl = (url, id) => {
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!newMedia.title || !newMedia.url) {
      alert("សូមបញ្ចូលឈ្មោះឯកសារ និង URL រូបភាព!");
      return;
    }
    addMedia(newMedia);
    setIsUploadOpen(false);
    setNewMedia({
      title: "",
      category: "General",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            បណ្ណាល័យមេឌា (Media Library)
          </h1>
          <p className="text-xs text-stone-500">
            រក្សាទុក និងចាត់ចែងរូបភាពសម្រាប់ប្រើប្រាស់ក្នុងអត្ថបទ និងគេហទំព័រ
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={() => setIsUploadOpen(true)}>
          <Upload className="w-4 h-4 mr-1.5" />
          <span>ផ្ទុកឯកសារឡើង</span>
        </Button>
      </div>

      {/* Grid of Media Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(media || []).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs group relative flex flex-col justify-between"
          >
            <div
              className="h-32 bg-stone-100 cursor-pointer overflow-hidden relative"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Eye className="w-5 h-5" />
              </div>
            </div>

            <div className="p-2.5 flex items-center justify-between border-t border-stone-100">
              <span className="text-[11px] font-medium text-stone-700 truncate max-w-[90px]">
                {item.title}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => copyUrl(item.url, item.id)}
                  className="p-1 rounded text-stone-400 hover:text-stone-800"
                  title="ចម្លង URL"
                >
                  {copiedId === item.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => setDeletingId(item.id)}
                  className="p-1 rounded text-stone-400 hover:text-red-600"
                  title="លុប"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Details Modal */}
      {selectedItem && (
        <Modal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          title={selectedItem.title}
          maxWidth="max-w-2xl"
        >
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-stone-200 max-h-80 flex items-center justify-center bg-stone-50">
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-h-80 w-auto object-contain"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs text-stone-600 bg-stone-50 p-4 rounded-xl">
              <div>
                <span className="font-bold text-stone-800 block">ជំពូក៖</span>
                <span>{selectedItem.category}</span>
              </div>
              <div>
                <span className="font-bold text-stone-800 block">កាលបរិច្ឆេទផ្ទុកឡើង៖</span>
                <span>{selectedItem.date || "២០២៤"}</span>
              </div>
              <div className="col-span-2">
                <span className="font-bold text-stone-800 block mb-1">URL រូបភាព៖</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={selectedItem.url}
                    className="w-full p-2 rounded border border-stone-200 bg-white font-mono text-[11px]"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => copyUrl(selectedItem.url, selectedItem.id)}
                  >
                    ចម្លង
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Upload Media Modal */}
      <Modal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        title="ផ្ទុកឡើងរូបភាពក្នុងបណ្ណាល័យមេឌា"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleUploadSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ឈ្មោះរូបភាព (File Title) *
            </label>
            <input
              type="text"
              required
              value={newMedia.title}
              onChange={(e) => setNewMedia({ ...newMedia, title: e.target.value })}
              placeholder="ឧ. ព្រះវិហារវត្តខ្មែរក្រោមពេលព្រឹក"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ជំពូក
            </label>
            <select
              value={newMedia.category}
              onChange={(e) => setNewMedia({ ...newMedia, category: e.target.value })}
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 bg-white"
            >
              <option value="General">ទូទៅ (General)</option>
              <option value="Ceremony">ពិធីបុណ្យ (Ceremony)</option>
              <option value="Monks">ព្រះសង្ឃ (Monks)</option>
              <option value="Architecture">ស្ថាបត្យកម្ម (Architecture)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              រូបភាព
            </label>
            <ImageUploaderPreview
              imageUrl={newMedia.url}
              onChange={(url) => setNewMedia({ ...newMedia, url })}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setIsUploadOpen(false)}>
              បិទ
            </Button>
            <Button variant="primary" size="sm" type="submit">
              រក្សាទុកក្នុងបណ្ណាល័យ
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <ConfirmDialog
        isOpen={!!deletingId}
        onClose={() => setDeletingId(null)}
        onConfirm={() => {
          deleteMedia(deletingId);
          setDeletingId(null);
        }}
        title="បញ្ជាក់ការលុបរូបភាព"
        message="តើអ្នកប្រាកដជាចង់លុបរូបភាពនេះចេញពីបណ្ណាល័យមែនទេ?"
      />
    </div>
  );
}
