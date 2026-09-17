import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/public/Header";
import { Footer } from "../components/public/Footer";
import { Modal, Button } from "../components/common/UIComponents";
import { Search, Heart, QrCode, CheckCircle2, Copy } from "lucide-react";
import { INITIAL_POSTS, INITIAL_EVENTS, INITIAL_MONKS, siteSettings } from "../data/data";

export function PublicLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationCause, setDonationCause] = useState("tipitaka-library");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  // Filter search items
  const filteredPosts = searchQuery.trim()
    ? INITIAL_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.khmerTitle.includes(searchQuery) ||
          p.excerpt.includes(searchQuery)
      )
    : [];

  const filteredEvents = searchQuery.trim()
    ? INITIAL_EVENTS.filter(
        (e) =>
          e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          e.khmerTitle.includes(searchQuery)
      )
    : [];

  const copyBankInfo = () => {
    navigator.clipboard?.writeText(
      `ABA Bank: 001 889 772 (${siteSettings.templeNameEn || "WAT O TRAO"})`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#1F1F1F] font-khmer-sans">
      <Header
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenDonationModal={() => setDonationModalOpen(true)}
      />

      <main className="flex-1">
        <Outlet context={{ onOpenDonationModal: () => setDonationModalOpen(true) }} />
      </main>

      <Footer onOpenDonationModal={() => setDonationModalOpen(true)} />

      {/* Global Search Modal */}
      <Modal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        title={`ស្វែងរកក្នុងគេហទំព័រ${siteSettings.templeNameKh || "វត្ត អូរត្រាវ"}`}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-[#C9972B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="វាយពាក្យគន្លឹះ (ឧទាហរណ៍៖ កឋិនទាន, ព្រះវស្សា, បណ្ណាល័យ...)"
              className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-[#D4AF37]/50 focus:border-[#6E1F1F] focus:outline-none bg-white text-sm"
              autoFocus
            />
          </div>

          {searchQuery && (
            <div className="max-h-96 overflow-y-auto space-y-4 pt-2">
              {filteredPosts.length === 0 && filteredEvents.length === 0 ? (
                <div className="text-center py-8 text-stone-500 text-sm">
                  រកមិនឃើញលទ្ធផលសម្រាប់ "{searchQuery}"
                </div>
              ) : (
                <>
                  {filteredPosts.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#6E1F1F] mb-2">
                        ព័ត៌មាន និងអត្ថបទព្រះធម៌ ({filteredPosts.length})
                      </h4>
                      <div className="space-y-2">
                        {filteredPosts.map((post) => (
                          <div
                            key={post.id}
                            onClick={() => {
                              setSearchModalOpen(false);
                              navigate(`/news/${post.slug}`);
                            }}
                            className="p-3 bg-white hover:bg-amber-50 rounded-lg border border-[#E8D7A5] cursor-pointer transition-colors"
                          >
                            <p className="font-semibold text-sm text-[#4A1414] font-khmer-serif">
                              {post.khmerTitle}
                            </p>
                            <p className="text-xs text-stone-600 line-clamp-1 mt-1">
                              {post.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredEvents.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase text-[#6E1F1F] mb-2">
                        កម្មវិធីបុណ្យ ({filteredEvents.length})
                      </h4>
                      <div className="space-y-2">
                        {filteredEvents.map((evt) => (
                          <div
                            key={evt.id}
                            onClick={() => {
                              setSearchModalOpen(false);
                              navigate("/events");
                            }}
                            className="p-3 bg-white hover:bg-amber-50 rounded-lg border border-[#E8D7A5] cursor-pointer transition-colors"
                          >
                            <p className="font-semibold text-sm text-[#4A1414] font-khmer-serif">
                              {evt.khmerTitle}
                            </p>
                            <p className="text-xs text-stone-600 mt-0.5">
                              {evt.buddhistDate} • {evt.location}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </Modal>

      {/* Global Buddhist Donation Modal */}
      <Modal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        title={`ចូលរួមបរិច្ចាគបច្ច័យបួនកសាង${siteSettings.templeNameKh || "វត្ត អូរត្រាវ"}`}
        maxWidth="max-w-xl"
      >
        <div className="space-y-5">
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            «ទានំ ទេតិ សីលំ រក្ខតិ ភាវនំ ភាវេតិ» — ការបរិច្ចាគទានគឺជាការបណ្តុះនូវសេចក្តីល្អ និងបុណ្យកុសល។ សូមអនុមោទនាបច្ច័យបួន និងសទ្ធាជ្រះថ្លារបស់លោកអ្នក។
          </p>

          <div>
            <label className="block text-xs font-bold uppercase text-[#4A1414] mb-2">
              ជ្រើសរើសគម្រោងបុណ្យ / Select Cause
            </label>
            <select
              value={donationCause}
              onChange={(e) => setDonationCause(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#D4AF37] bg-white text-sm focus:outline-none"
            >
              <option value="tipitaka-library">សាងសង់បណ្ណាល័យព្រះត្រៃបិដក (Tipitaka Library)</option>
              <option value="vihara-restoration">ជួសជុលព្រះវិហារ និងក្លោងទ្វារវត្ត</option>
              <option value="monks-education">ឧបត្ថម្ភការសិក្សាព្រះសង្ឃ និងបាលី</option>
              <option value="general-temple">បច្ច័យបួនចង្ហាន់ និងភ្លើងទឹកវត្តទូទៅ</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-[#4A1414] mb-2">
              ចំនួនបច្ច័យចូលរួម ($ USD)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[20, 50, 100, 200].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setDonationAmount(amt)}
                  className={`py-2 rounded-lg text-sm font-semibold border transition-all ${
                    donationAmount === amt
                      ? "bg-[#6E1F1F] text-white border-[#D4AF37] shadow-sm"
                      : "bg-white text-[#4A1414] border-gray-300 hover:border-[#D4AF37]"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* QR Code Placeholder UI */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center gap-4">
  {/* ABA KHQR */}
  <div className="w-32 h-32 bg-white rounded-lg p-2 border border-[#D4AF37] flex items-center justify-center shrink-0 shadow-inner">
    <img
      src="src/assets/payment/photo_2026-09-14_20-18-22.jpg"
      alt="ABA KHQR - WAT O TRAO"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Bank Information */}
  <div className="space-y-1.5 text-xs text-stone-700 w-full">
    <p className="font-bold text-sm text-[#4A1414]">
      គណនីធនាគារ {siteSettings.templeNameKh} ({siteSettings.templeNameEn})
    </p>

    <p>
      ឈ្មោះគណនី៖{" "}
      <span className="font-semibold text-black">
        WAT O TRAO (WAT O TRAO)
      </span>
    </p>

    <p>
      លេខគណនី៖{" "}
      <span className="font-mono font-bold text-emerald-800">
        001 889 772
      </span>{" "}
      (USD)
    </p>

    <p>
      លេខទូរស័ព្ទទទួលបច្ច័យ៖{" "}
      <span className="font-semibold">
        {siteSettings.phone}
      </span>
    </p>

    <button
      onClick={copyBankInfo}
      className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white hover:bg-amber-100 text-xs font-semibold text-[#6E1F1F] border border-[#D4AF37]/60 transition-colors"
    >
      {copied ? (
        <>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>បានចម្លងព័ត៌មាន!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>ចម្លងព័ត៌មានគណនី</span>
        </>
      )}
    </button>
  </div>
</div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" onClick={() => setDonationModalOpen(false)}>
              បិទ / Close
            </Button>
            <Button
              variant="gold"
              onClick={() => {
                alert(`សូមអរព្រះគុណ និងអរគុណយ៉ាងជ្រាលជ្រៅចំពោះសទ្ធាជ្រះថ្លាចំនួន $${donationAmount}! គណៈកម្មការវត្តបានកត់ត្រាការចូលរួមរបស់លោកអ្នក។`);
                setDonationModalOpen(false);
              }}
            >
              អនុមោទនា / Confirm Donation
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
