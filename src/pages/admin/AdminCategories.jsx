import React, { useState } from "react";
import { Plus, Trash2, Edit2, FolderTree, CheckCircle2 } from "lucide-react";
import { Button, Modal, ConfirmDialog } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminCategories() {
  const { categories = [], addCategory, deleteCategory } = useAdminData() || {};
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCat, setNewCat] = useState({ name: "", khmerName: "", description: "" });
  const [deletingCatId, setDeletingCatId] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newCat.name || !newCat.khmerName) {
      alert("សូមបំពេញឈ្មោះជំពូកទាំងជាភាសាខ្មែរ និងអង់គ្លេស!");
      return;
    }
    addCategory(newCat.name, newCat.khmerName, newCat.description);
    setNewCat({ name: "", khmerName: "", description: "" });
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងជំពូកអត្ថបទ (Categories Management)
          </h1>
          <p className="text-xs text-stone-500">
            ចាត់ថ្នាក់ព័ត៌មាន ព្រះធម៌ ពិធីបុណ្យ និងវប្បធម៌ខ្មែរក្រោម
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-1.5" />
          <span>បង្កើតជំពូកថ្មី</span>
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-600">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] border-b border-stone-200">
              <tr>
                <th className="px-5 py-3">ឈ្មោះជំពូកខ្មែរ</th>
                <th className="px-4 py-3">ឈ្មោះអង់គ្លេស</th>
                <th className="px-4 py-3">URL Slug</th>
                <th className="px-4 py-3">ការពិពណ៌នា</th>
                <th className="px-4 py-3">ចំនួនអត្ថបទ</th>
                <th className="px-4 py-3 text-right">សកម្មភាព</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {(categories || []).map((cat) => (
                <tr key={cat.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-stone-900 font-khmer-serif">
                    {cat.khmerName}
                  </td>
                  <td className="px-4 py-3.5 text-stone-700">{cat.name}</td>
                  <td className="px-4 py-3.5 font-mono text-[11px] text-stone-500">{cat.slug}</td>
                  <td className="px-4 py-3.5 text-stone-500 max-w-xs truncate">{cat.description}</td>
                  <td className="px-4 py-3.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-[#6E1F1F] font-bold text-[11px]">
                      {cat.count || 0} អត្ថបទ
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right whitespace-nowrap">
                    <button
                      onClick={() => setDeletingCatId(cat.id)}
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

      {/* Add Category Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="បង្កើតជំពូកអត្ថបទថ្មី (Add Category)"
        maxWidth="max-w-lg"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ឈ្មោះជំពូកជាភាសាខ្មែរ *
            </label>
            <input
              type="text"
              required
              value={newCat.khmerName}
              onChange={(e) => setNewCat({ ...newCat, khmerName: e.target.value })}
              placeholder="ឧ. ពិធីបុណ្យសាសនា"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ឈ្មោះជំពូកជាភាសាអង់គ្លេស *
            </label>
            <input
              type="text"
              required
              value={newCat.name}
              onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
              placeholder="Ex: Buddhist Ceremonies"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
              ការពិពណ៌នាសង្ខេប
            </label>
            <textarea
              rows={3}
              value={newCat.description}
              onChange={(e) => setNewCat({ ...newCat, description: e.target.value })}
              placeholder="ពិពណ៌នាអំពីខ្លឹមសារនៃជំពូកនេះ..."
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setIsAddModalOpen(false)}>
              បោះបង់
            </Button>
            <Button variant="primary" size="sm" type="submit">
              បង្កើតជំពូក
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={!!deletingCatId}
        onClose={() => setDeletingCatId(null)}
        onConfirm={() => {
          deleteCategory(deletingCatId);
          setDeletingCatId(null);
        }}
        title="បញ្ជាក់ការលុបជំពូកអត្ថបទ"
        message="តើអ្នកប្រាកដជាចង់លុបជំពូកនេះមែនទេ?"
      />
    </div>
  );
}
