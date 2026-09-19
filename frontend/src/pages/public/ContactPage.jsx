import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Info,
  Facebook
} from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Card } from "../../components/common/UIComponents";
import { siteSettings } from "../../data/data";
import { TempleMapCard } from "../../components/traditional/TempleMapCard";
import watOuTraoLogo from "../../assets/branding/wat-ou-trao-official-logo.png";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "ceremony",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("សូមបំពេញឈ្មោះ និងលេខទូរស័ព្ទរបស់លោកអ្នក!");
      return;
    }
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "តើខ្ញុំអាចនិមន្តព្រះសង្ឃសូត្រមន្ត ឬរៀបចំពិធីបុណ្យយ៉ាងដូចម្តេច?",
      a: "លោកអ្នកអាចមកជួបផ្ទាល់នៅការិយាល័យវត្ត ឬទូរស័ព្ទមកលេខ +855 23 998 877 យ៉ាងតិច ២ សប្តាហ៍មុនថ្ងៃប្រារព្ធពិធី ដើម្បីពិភាក្សាអំពីកាលវិភាគ និងពិធីការសាសនា។"
    },
    {
      q: "តើវត្តបើកទទួលពុទ្ធបរិស័ទមកថ្វាយបង្គំព្រះនៅម៉ោងណាខ្លះ?",
      a: "វត្តបើកទ្វាររៀងរាល់ថ្ងៃចាប់ពីម៉ោង ០៦:០០ ព្រឹក រហូតដល់ ០៧:០០ យប់។ នៅថ្ងៃឧបោសថសីល (៨រោច ៨កើត ១៥កើត...) ព្រះវិហារ និងសាលាឆទានបើកជូនពុទ្ធបរិស័ទសមាទានសីលរហូតដល់ម៉ោង ០៩:៣០ យប់។"
    },
    {
      q: "តើមានការណែនាំអំពីការស្លៀកពាក់ពេលមកកាន់វត្តអារាមដែរឬទេ?",
      a: "សូមពុទ្ធបរិស័ទ និងភ្ញៀវទាំងអស់ស្លៀកសម្លៀកបំពាក់សមរម្យ គួរស្លៀកសំពត់វែង ឬខោវែង អាវមានដៃ ពណ៌ស ឬពណ៌ស្រទន់។ សូមដោះស្បែកជើង និងមួក មុនពេលចូលក្នុងព្រះវិហារ ឬកុដិព្រះសង្ឃ។"
    },
    {
      q: "តើបច្ច័យបរិច្ចាគតាម KHQR នឹងទទួលបានវិក្កយបត្រ ឬលិខិតថ្លែងអំណរគុណទេ?",
      a: "ពិតប្រាកដណាស់! លោកអ្នកអាចផ្ញើស្លីបផ្ទេរប្រាក់មកកាន់ Telegram របស់វត្ត ដើម្បីគណៈកម្មការចេញប័ណ្ណថ្លែងអំណរគុណជាផ្លូវការជូនលោកអ្នក។"
    }
  ];

  return (
    <div className="py-10 space-y-16">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F]">
          ទំនាក់ទំនង និងការសាកសួរព័ត៌មាន
        </h1>
        <LotusDivider />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          គណៈកម្មការ {siteSettings.templeNameKh} ({siteSettings.templeMapName}) និងព្រះសង្ឃរង់ចាំស្វាគមន៍រាល់ចម្ងល់ ការនិមន្តព្រះសង្ឃ និងការចូលរួមបុណ្យកុសល
        </p>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8D7A5] shadow-md space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold font-khmer-serif text-[#11178F]">
              ផ្ញើសារសាកសួរ ឬនិមន្តព្រះសង្ឃ
            </h2>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-bold text-emerald-900 font-khmer-serif">
                  សាររបស់លោកអ្នកត្រូវបានផ្ញើដោយជោគជ័យ!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  សូមអរព្រះគុណ និងអរគុណ។ គណៈកម្មការវត្តនឹងឆ្លើយតបមកកាន់លេខទូរស័ព្ទ {formData.phone} ក្នុងពេលឆាប់ៗនេះ។
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", email: "", topic: "ceremony", message: "" });
                  }}
                >
                  ផ្ញើសារថ្មីមួយទៀត
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#11178F] mb-1.5">
                      ឈ្មោះរបស់អ្នក (Name) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="ឧ. សុខ ចាន់ថន"
                      className="w-full p-2.5 rounded-xl border border-[#D4A62A]/60 text-xs focus:outline-none focus:border-[#1B24C9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#11178F] mb-1.5">
                      លេខទូរស័ព្ទ (Phone) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="ឧ. 012 345 678"
                      className="w-full p-2.5 rounded-xl border border-[#D4A62A]/60 text-xs focus:outline-none focus:border-[#1B24C9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#11178F] mb-1.5">
                      អ៊ីមែល (Email)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full p-2.5 rounded-xl border border-[#D4A62A]/60 text-xs focus:outline-none focus:border-[#1B24C9]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#11178F] mb-1.5">
                      ប្រធានបទសាកសួរ (Topic)
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full p-2.5 rounded-xl border border-[#D4A62A]/60 text-xs bg-white focus:outline-none focus:border-[#1B24C9]"
                    >
                      <option value="ceremony">និមន្តព្រះសង្ឃក្នុងពិធីបុណ្យ</option>
                      <option value="donation">សាកសួរព័ត៌មានបច្ច័យសាងសង់</option>
                      <option value="meditation">ចុះឈ្មោះរៀនសមាធិ / ភាវនា</option>
                      <option value="general">ព័ត៌មានទូទៅផ្សេងៗ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#11178F] mb-1.5">
                    ខ្លឹមសារសារ (Message)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="សូមសរសេរព័ត៌មានលម្អិតនៃកម្មវិធី ឬសំណួររបស់អ្នកនៅទីនេះ..."
                    className="w-full p-2.5 rounded-xl border border-[#D4A62A]/60 text-xs focus:outline-none focus:border-[#1B24C9]"
                  />
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="md" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-1.5" />
                    <span>ផ្ញើសារទៅកាន់វត្ត (Submit Message)</span>
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Contact Information & Visiting Etiquette */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#11178F] via-[#1B24C9] to-[#11178F] text-[#FFF9EA] rounded-3xl p-6 sm:p-8 border border-[#D4A62A] space-y-6 shadow-md">
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#D4A62A]/40">
                <img
                  src={siteSettings.officialLogo || watOuTraoLogo}
                  alt={siteSettings.logoAlt || "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )"}
                  className="w-16 h-16 rounded-full object-contain shrink-0 bg-white/10 p-0.5 border border-[#D4A62A] shadow-md"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-khmer-serif text-[#D4A62A]">
                    ព័ត៌មានទំនាក់ទំនងផ្លូវការវត្ត
                  </h3>
                  <p className="text-xs text-[#FFF9EA] font-medium font-khmer-serif">
                    {siteSettings.officialFormalNameKh || "វត្តសាសនសាមគ្គរង្សី ( អូរត្រាវ )"}
                  </p>
                  <p className="text-[10px] text-[#F7EED8]/80 uppercase">
                    WAT O TRAO • {siteSettings.templeMapName}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-[#F7EED8]">
                <div className="flex items-start gap-3 pb-3.5 border-b border-[#D4A62A]/30">
                  <MapPin className="w-5 h-5 text-[#D4A62A] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                      ទីតាំងវត្ត
                    </span>
                    <span className="font-khmer-serif font-bold text-[#FFF9EA] text-sm block">
                      {siteSettings.templeNameKh}
                    </span>
                    <div className="text-xs text-[#D4A62A]">
                      <span className="text-blue-100">ឈ្មោះសម្រាប់ស្វែងរកលើផែនទី:</span>{" "}
                      <span className="font-bold text-white">{siteSettings.templeMapName}</span>
                    </div>
                    <div className="text-xs text-[#F7EED8]">
                      <span className="text-blue-100">អាសយដ្ឋាន:</span>{" "}
                      <span className="font-mono text-white/95">{siteSettings.address}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          siteSettings.mapSearchQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4A62A] hover:bg-[#c49b25] text-[#11178F] font-bold text-xs transition-colors shadow-xs"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>មើលលើផែនទី</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>

                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          siteSettings.mapSearchQuery
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#11178F] hover:bg-[#0d1270] text-white border border-[#D4A62A] text-xs font-semibold transition-colors"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[#D4A62A]" />
                        <span>ទទួលទិសដៅ</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4A62A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">លេខទូរស័ព្ទ៖</span>
                    <span>{siteSettings.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4A62A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">អ៊ីមែល៖</span>
                    <span>{siteSettings.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4A62A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">ម៉ោងទទួលពុទ្ធបរិស័ទ៖</span>
                    <span>រៀងរាល់ថ្ងៃ ០៦:០០ ព្រឹក - ០៧:០០ យប់</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#D4A62A]/30">
                  <Facebook className="w-5 h-5 text-[#D4A62A] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-white block">ហ្វេសប៊ុកផ្លូវការ (Official Facebook)៖</span>
                    <a
                      href={siteSettings.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4A62A] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>facebook.com/Wattotrao</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visiting Etiquette Card */}
            <div className="bg-blue-50/70 rounded-2xl p-6 border border-[#1B24C9]/20 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#11178F]">
                <Info className="w-4 h-4 text-[#1B24C9]" />
                <span>វិន័យ និងការគួរសមពេលមកកាន់វត្ត</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B24C9] mt-1.5 shrink-0" />
                  <span>ស្លៀកសម្លៀកបំពាក់សមរម្យ អាវមានដៃ សំពត់ឬខោវែងក្រោមជង្គង់</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B24C9] mt-1.5 shrink-0" />
                  <span>ដោះស្បែកជើង និងមួកមុនពេលឡើងព្រះវិហារ ឬកុដិ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B24C9] mt-1.5 shrink-0" />
                  <span>គោរពព្រះសង្ឃដោយលើកដៃសំពះ និងរក្សាភាពស្ងប់ស្ងាត់ក្នុងបរិវេណវត្ត</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-[#1B24C9]/10 text-[#1B24C9] border border-[#1B24C9]/20 mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#D4A62A]" />
            <span>ទីតាំងភូមិសាស្ត្រអារាមដ្ឋាន • LOCATION & DIRECTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-khmer-serif text-[#11178F]">
            ផែនទី និងទិសដៅមកកាន់វត្ត
          </h2>
          <KhmerDivider />
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            ស្វែងរកទីតាំងអារាមដ្ឋានតាមរយៈឈ្មោះ <span className="font-bold text-[#11178F]">«{siteSettings.templeMapName}»</span> ឬអាសយដ្ឋានលើ Google Maps
          </p>
        </div>

        <TempleMapCard showEmbed={true} />
      </section>

      {/* FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="FREQUENTLY ASKED QUESTIONS"
          khmerTitle="សំណួរដែលសួរញឹកញាប់"
          subtitle={`ចម្លើយចំពោះសំណួរទូទៅទាក់ទងនឹងការចូលរួមបុណ្យ និងការមកកាន់ ${siteSettings.templeNameKh}`}
        />

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8D7A5] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-amber-50/50 transition-colors"
                >
                  <span className="font-bold text-sm text-[#11178F] font-khmer-serif">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#1B24C9] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
