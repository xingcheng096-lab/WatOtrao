import React, { useState } from "react";
import { Plus, Trash2, Edit2, Users, MapPin, Award } from "lucide-react";
import { Button, Modal, ConfirmDialog, ImageUploaderPreview } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminMonks() {
  const { monks = [], addMonk, deleteMonk, updateMonk } = useAdminData() || {};
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingMonkId, setDeletingMonkId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    khmerName: "",
    title: "ព្រះថេរៈ",
    vassa: "១០ វស្សា",
    role: "គ្រូសូត្រ",
    portrait: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
    birthPlace: "ខេត្តព្រះត្រពាំង កម្ពុជាក្រោម",
    education: "ពុទ្ធិកវិទ្យាល័យ",
    bio: "",
    quote: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.khmerName) {
      alert("សូមបញ្ចូលព្រះនាមព្រះសង្ឃជាភាសាខ្មែរ!");
      return;
    }
    addMonk(formData);
    setIsAddModalOpen(false);
    setFormData({
      name: "",
      khmerName: "",
      title: "ព្រះថេរៈ",
      vassa: "១០ វស្សា",
      role: "គ្រូសូត្រ",
      portrait: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
      birthPlace: "ខេត្តព្រះត្រពាំង កម្ពុជាក្រោម",
      education: "ពុទ្ធិកវិទ្យាល័យ",
      bio: "",
      quote: ""
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងបញ្ជីព្រះសង្ឃ (Monks Management)
          </h1>
          <p className="text-xs text-stone-500">
            គ្រប់គ្រងប្រវត្តិរូបព្រះគ្រូចៅអធិការ គ្រូសូត្រ និងព្រះសង្ឃសាវ័កក្នុងវត្ត
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          <span>បន្ថែមព្រះសង្ឃ</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(monks || []).map((monk) => (
          <div
            key={monk.id}
            className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between group hover:border-[#D4AF37]"
          >
            <div>
              <div className="w-28 h-36 mx-auto mb-3 rounded-xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-sm">
                <img
                  src={monk.portrait}
                  alt={monk.khmerName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E1F1F] bg-amber-50 px-2 py-0.5 rounded">
                  {monk.vassa}
                </span>
                <h3 className="font-bold text-base font-khmer-serif text-stone-900 mt-1">
                  {monk.khmerName}
                </h3>
                <p className="text-xs text-[#C9972B] font-semibold">{monk.title}</p>
                <p className="text-[11px] text-stone-400">{monk.birthPlace}</p>
              </div>

              <p className="text-xs text-stone-600 line-clamp-3 mt-3 leading-relaxed">
                {monk.bio}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setDeletingMonkId(monk.id)}
                className="p-1.5 rounded-lg hover:bg-red-50 text-stone-400 hover:text-red-600 transition-colors"
                title="លុប"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Monk Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="បន្ថែមព្រះសង្ឃក្នុងវត្ត (Add Monk Profile)"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ព្រះនាមជាភាសាខ្មែរ *
              </label>
              <input
                type="text"
                required
                value={formData.khmerName}
                onChange={(e) => setFormData({ ...formData, khmerName: e.target.value })}
                placeholder="ឧ. ព្រះមហា គឹម ច័ន្ទ"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ព្រះនាមជាភាសាឡាតាំង
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Ven. Kim Chan"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                សមណស័ក្តិ / ឋានៈ *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="ឧ. ព្រះគ្រូចៅអធិការ"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                វស្សា (Vassa) *
              </label>
              <input
                type="text"
                required
                value={formData.vassa}
                onChange={(e) => setFormData({ ...formData, vassa: e.target.value })}
                placeholder="ឧ. ២២ វស្សា"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ស្រុកកំណើត
              </label>
              <input
                type="text"
                value={formData.birthPlace}
                onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                placeholder="ខេត្តព្រះត្រពាំង កម្ពុជាក្រោម"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                កម្រិតពុទ្ធិកសិក្សា
              </label>
              <input
                type="text"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                placeholder="ពុទ្ធិកមហាវិទ្យាល័យ"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              រូបថតព្រះសង្ឃ (Portrait URL)
            </label>
            <ImageUploaderPreview
              imageUrl={formData.portrait}
              onChange={(url) => setFormData({ ...formData, portrait: url })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ប្រវត្តិរូបសង្ខេប (Biography)
            </label>
            <textarea
              rows={3}
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="សរសេរប្រវត្តិការបួសរៀន និងភារកិច្ចក្នុងវត្ត..."
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setIsAddModalOpen(false)}>
              បោះបង់
            </Button>
            <Button variant="primary" size="sm" type="submit">
              រក្សាទុកប្រវត្តិរូប
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Monk Dialog */}
      <ConfirmDialog
        isOpen={!!deletingMonkId}
        onClose={() => setDeletingMonkId(null)}
        onConfirm={() => {
          deleteMonk(deletingMonkId);
          setDeletingMonkId(null);
        }}
        title="បញ្ជាក់ការលុបប្រវត្តិរូបព្រះសង្ឃ"
        message="តើអ្នកប្រាកដជាចង់លុបប្រវត្តិរូបព្រះសង្ឃអង្គនេះមែនទេ?"
      />
    </div>
  );
}
