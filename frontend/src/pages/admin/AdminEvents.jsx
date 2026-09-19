import React, { useState } from "react";
import { Plus, Trash2, Edit2, Calendar, Clock, MapPin } from "lucide-react";
import { Button, Modal, ConfirmDialog, StatusBadge } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminEvents() {
  const { events = [], addEvent, updateEvent, deleteEvent } = useAdminData() || {};
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [deletingEventId, setDeletingEventId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    khmerTitle: "",
    date: new Date().toISOString().split("T")[0],
    buddhistDate: "១៥ កើត ខែអស្សុជ ព.ស. ២៥៦៨",
    time: "០៧:០០ ព្រឹក - ១១:៣០ ថ្ងៃត្រង់",
    location: "សាលាធម្មសភា និងព្រះវិហារវត្តខ្មែរក្រោម",
    category: "Ceremony",
    status: "Upcoming",
    description: "",
    coverImage: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=800"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.khmerTitle) {
      alert("សូមបញ្ចូលឈ្មោះពិធីបុណ្យជាភាសាខ្មែរ!");
      return;
    }
    addEvent(formData);
    setIsAddModalOpen(false);
    setFormData({
      title: "",
      khmerTitle: "",
      date: new Date().toISOString().split("T")[0],
      buddhistDate: "១៥ កើត ខែអស្សុជ ព.ស. ២៥៦៨",
      time: "០៧:០០ ព្រឹក - ១១:៣០ ថ្ងៃត្រង់",
      location: "សាលាធម្មសភា និងព្រះវិហារវត្តខ្មែរក្រោម",
      category: "Ceremony",
      status: "Upcoming",
      description: "",
      coverImage: "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=800"
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងកម្មវិធីបុណ្យ (Events Management)
          </h1>
          <p className="text-xs text-stone-500">
            រៀបចំប្រតិទិនបុណ្យសាសនា និងពិធីប្រពៃណីរបស់វត្ត
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          <span>បន្ថែមពិធីបុណ្យថ្មី</span>
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-600">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] border-b border-stone-200">
              <tr>
                <th className="px-5 py-3">ពិធីបុណ្យ</th>
                <th className="px-4 py-3">កាលបរិច្ឆេទពុទ្ធសករាជ</th>
                <th className="px-4 py-3">កាលបរិច្ឆេទសុរិយគតិ</th>
                <th className="px-4 py-3">ទីតាំង & ម៉ោង</th>
                <th className="px-4 py-3">ស្ថានភាព</th>
                <th className="px-4 py-3 text-right">សកម្មភាព</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {(events || []).map((evt) => (
                <tr key={evt.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="px-5 py-3.5">
                    <div>
                      <p className="font-bold text-stone-900 font-khmer-serif">
                        {evt.khmerTitle}
                      </p>
                      <p className="text-[11px] text-stone-400">{evt.title}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap font-khmer-serif text-[#6E1F1F] font-semibold">
                    {evt.buddhistDate}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap text-stone-700">{evt.date}</td>
                  <td className="px-4 py-3.5">
                    <p className="text-stone-700">{evt.location}</p>
                    <p className="text-[11px] text-stone-400">{evt.time}</p>
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    <button
                      onClick={() =>
                        updateEvent(evt.id, {
                          status: evt.status === "Upcoming" ? "Past" : "Upcoming"
                        })
                      }
                      title="ចុចដើម្បីប្តូរស្ថានភាព"
                    >
                      <StatusBadge status={evt.status} />
                    </button>
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => setDeletingEventId(evt.id)}
                      className="p-1.5 rounded-md hover:bg-red-50 text-stone-400 hover:text-red-600"
                      title="លុប"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Event Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="បន្ថែមពិធីបុណ្យសាសនាថ្មី"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ឈ្មោះពិធីបុណ្យជាភាសាខ្មែរ *
            </label>
            <input
              type="text"
              required
              value={formData.khmerTitle}
              onChange={(e) => setFormData({ ...formData, khmerTitle: e.target.value })}
              placeholder="ឧ. ពិធីបុណ្យកឋិនទានមហាសាមគ្គី"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                កាលបរិច្ឆេទពុទ្ធសករាជ *
              </label>
              <input
                type="text"
                required
                value={formData.buddhistDate}
                onChange={(e) => setFormData({ ...formData, buddhistDate: e.target.value })}
                placeholder="ឧ. ១៥ កើត ខែអស្សុជ ព.ស. ២៥៦៨"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                កាលបរិច្ឆេទសុរិយគតិ *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ម៉ោងប្រារព្ធពិធី
              </label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                placeholder="ឧ. ០៧:០០ ព្រឹក - ១១:៣០ ថ្ងៃត្រង់"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ប្រភេទពិធីបុណ្យ
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 bg-white"
              >
                <option value="Ceremony">ពិធីបុណ្យសាសនា (Ceremony)</option>
                <option value="Cultural">បុណ្យប្រពៃណី (Cultural)</option>
                <option value="Dharma">ធម្មទាន / សមាធិ (Dharma)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ទីតាំងក្នុងវត្ត
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="ព្រះវិហារ និងសាលាធម្មសភាវត្តខ្មែរក្រោម"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ការពិពណ៌នាកម្មវិធីបុណ្យ
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="ព័ត៌មានលម្អិតអំពីពិធីបុណ្យ..."
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setIsAddModalOpen(false)}>
              បោះបង់
            </Button>
            <Button variant="primary" size="sm" type="submit">
              រក្សាទុកកម្មវិធីបុណ្យ
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Dialog */}
      <ConfirmDialog
        isOpen={!!deletingEventId}
        onClose={() => setDeletingEventId(null)}
        onConfirm={() => {
          deleteEvent(deletingEventId);
          setDeletingEventId(null);
        }}
        title="បញ្ជាក់ការលុបកម្មវិធីបុណ្យ"
        message="តើអ្នកពិតជាចង់លុបកម្មវិធីបុណ្យនេះមែនទេ?"
      />
    </div>
  );
}
