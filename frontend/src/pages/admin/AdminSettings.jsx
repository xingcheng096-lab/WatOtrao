import React, { useState } from "react";
import { Save, CheckCircle2, Building, Phone, Mail, MapPin, CreditCard, Sparkles, ShieldCheck, Image as ImageIcon } from "lucide-react";
import { Button, ImageUploaderPreview } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";
import watOuTraoLogo from "../../assets/branding/wat-ou-trao-official-logo.png";

export function AdminSettings() {
  const { settings, updateSettings } = useAdminData();
  const [formData, setFormData] = useState({ ...settings });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = {
      ...formData,
      templeNameKh: formData.khmerTempleName || formData.templeNameKh,
      khmerTempleName: formData.khmerTempleName || formData.templeNameKh,
      templeNameEn: formData.templeName || formData.templeNameEn,
      templeName: formData.templeName || formData.templeNameEn
    };
    updateSettings(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            ការកំណត់គេហទំព័រ (Website Settings)
          </h1>
          <p className="text-xs text-stone-500">
            គ្រប់គ្រងឈ្មោះវត្ត ព័ត៌មានទំនាក់ទំនង និងគណនីបច្ច័យបួន
          </p>
        </div>

        <Button variant="primary" size="sm" onClick={handleSubmit}>
          <Save className="w-4 h-4 mr-1.5" />
          <span>រក្សាទុកការកំណត់</span>
        </Button>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-semibold text-emerald-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>ការកំណត់ត្រូវបានរក្សាទុកដោយជោគជ័យ និងធ្វើបច្ចុប្បន្នភាពលើគេហទំព័រ!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Official Temple Logo & Brand Identity Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-[#4A1414] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1717D8]" />
              និមិត្តសញ្ញាផ្លូវការរបស់វត្ត (Official Temple Logo)
            </h3>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>រូបសញ្ញាផ្លូវការមានសុពលភាព</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 p-5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="relative shrink-0">
              <img
                src={formData.officialLogo || formData.logo || watOuTraoLogo}
                alt="វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )"
                className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-full shadow-lg border-2 border-[#D4A62A] bg-white p-1"
              />
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#1717D8] text-white flex items-center justify-center text-[10px] font-bold border-2 border-white shadow-xs">
                ✓
              </span>
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div>
                <h4 className="text-base font-bold font-khmer-serif text-[#4A1414]">
                  វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )
                </h4>
                <p className="text-xs text-stone-600 font-khmer-sans">
                  និមិត្តសញ្ញាផ្លូវការបឋមរបស់វត្ត អូរត្រាវ (WAT O TRAO)
                </p>
              </div>

              <div className="text-xs text-stone-500 font-mono bg-white p-2.5 rounded-lg border border-stone-200 inline-block">
                <span>ទីតាំងឯកសារ: </span>
                <span className="text-[#10109F] font-semibold">src/assets/branding/wat-ou-trao-official-logo.png</span>
              </div>

              {/* Brand Colors Swatch */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1.5">
                  ក្ដារពណ៌អត្តសញ្ញាណ (Logo Brand Colors):
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold text-white bg-[#1717D8]">
                    #1717D8 Wat Blue
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold text-white bg-[#10109F]">
                    #10109F Deep Blue
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold text-[#4A1414] bg-[#D4A62A]">
                    #D4A62A Temple Gold
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold text-[#4A1414] bg-[#FFF8E7] border border-stone-300">
                    #FFF8E7 Temple Cream
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[10px] font-bold text-white bg-[#8A2525]">
                    #8A2525 Temple Red
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temple Identity */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-[#4A1414] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
            <Building className="w-4 h-4 text-[#C9972B]" />
            អត្តសញ្ញាណវត្ត (Temple Identity)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ឈ្មោះវត្តជាភាសាខ្មែរ *
              </label>
              <input
                type="text"
                required
                value={formData.khmerTempleName}
                onChange={(e) => setFormData({ ...formData, khmerTempleName: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ឈ្មោះវត្តជាភាសាអង់គ្លេស *
              </label>
              <input
                type="text"
                required
                value={formData.templeName}
                onChange={(e) => setFormData({ ...formData, templeName: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ពាក្យស្លោក/រងជាភាសាខ្មែរ
              </label>
              <input
                type="text"
                value={formData.subtitleKhmer}
                onChange={(e) => setFormData({ ...formData, subtitleKhmer: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ពាក្យស្លោកជាភាសាអង់គ្លេស
              </label>
              <input
                type="text"
                value={formData.subtitleEn}
                onChange={(e) => setFormData({ ...formData, subtitleEn: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-[#4A1414] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C9972B]" />
            ព័ត៌មានទំនាក់ទំនង (Contact Information)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                អាសយដ្ឋានវត្ត (Temple Address)
              </label>
              <input
                type="text"
                value={formData.address || ""}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ឈ្មោះសម្រាប់ស្វែងរកលើផែនទី (Map Search Name)
              </label>
              <input
                type="text"
                value={formData.templeMapName || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    templeMapName: e.target.value,
                    mapSearchQuery: `${e.target.value}, ${formData.address || ""}`
                  })
                }
                placeholder="ឧ. WAT O TRAO"
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                លេខទូរស័ព្ទទាក់ទង
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                អ៊ីមែលផ្លូវការ
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>
        </div>

        {/* Donation Bank Details */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="font-bold text-sm text-[#4A1414] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#C9972B]" />
            ព័ត៌មានគណនីបច្ច័យបួនវត្ត (Donation Account)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ធនាគារ (Bank Name)
              </label>
              <input
                type="text"
                value={formData.bankAccount?.bankName || "ABA BANK"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bankAccount: { ...formData.bankAccount, bankName: e.target.value }
                  })
                }
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                ឈ្មោះគណនី (Account Name)
              </label>
              <input
                type="text"
                value={formData.bankAccount?.accountName || "WAT KHMER"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bankAccount: { ...formData.bankAccount, accountName: e.target.value }
                  })
                }
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1">
                លេខគណនី (Account Number)
              </label>
              <input
                type="text"
                value={formData.bankAccount?.accountNumber || "001 889 772"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bankAccount: { ...formData.bankAccount, accountNumber: e.target.value }
                  })
                }
                className="w-full p-2.5 text-xs font-mono rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>
        </div>

        {/* Hero Banner Visual */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700">
            រូបភាពផ្ទាំងធំខាងមុខ (Hero Banner Background)
          </h3>
          <ImageUploaderPreview
            imageUrl={formData.heroImage}
            onChange={(url) => setFormData({ ...formData, heroImage: url })}
          />
        </div>

        <div className="flex justify-end">
          <Button variant="primary" size="md" type="submit">
            <Save className="w-4 h-4 mr-2" />
            <span>រក្សាទុកព័ត៌មានទាំងអស់ (Save Settings)</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
