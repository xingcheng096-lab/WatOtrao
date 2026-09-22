import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/public/Header";
import { Footer } from "../components/public/Footer";
import { Modal, Button } from "../components/common/UIComponents";
import { ScrollToHash } from "../components/common/ScrollToHash";
import {
  Search,
  CheckCircle2,
  Copy,
  MapPin,
  Landmark,
  ArrowRight,
  Newspaper,
  CalendarDays,
  UserRound,
  Images,
  Activity,
} from "lucide-react";

import {
  INITIAL_POSTS,
  INITIAL_EVENTS,
  INITIAL_MONKS,
  INITIAL_GALLERIES,
  INITIAL_MEDIA,
  templeActivities,
  siteSettings,
} from "../data/data";

import { INITIAL_WATS } from "../pages/public/WatKhmerPage";

import donationQrImage from "../assets/payment/photo_2026-09-14_20-18-22.jpg";
import {
  getEventHashId,
  getMonkHashId,
  getMediaHashId,
} from "../utils/searchNavigation";
/* =========================================================
   SEARCH HELPERS
========================================================= */

const KHMER_DIGITS = "០១២៣៤៥៦៧៨៩";

const toKhmerNumber = (value) =>
  String(value ?? "").replace(/[0-9]/g, (n) => KHMER_DIGITS[n]);

const khmerToEnglishNumber = (value) =>
  String(value ?? "").replace(/[០-៩]/g, (digit) =>
    String(KHMER_DIGITS.indexOf(digit))
  );

const normalizeSearch = (value) =>
  khmerToEnglishNumber(value)
    .normalize("NFC")
    .toLowerCase()
    .replace(/\s+/g, "")
    .trim();

const containsSearch = (query, values = []) =>
  values.some((value) => normalizeSearch(value).includes(query));

/* =========================================================
   PUBLIC LAYOUT
========================================================= */

export function PublicLayout() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [donationModalOpen, setDonationModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationCause, setDonationCause] = useState("tipitaka-library");
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  /* =========================================================
     GLOBAL SEARCH
  ========================================================= */

  const query = normalizeSearch(searchQuery);

  /* -------------------------
     1. TEMPLES
  ------------------------- */

  const filteredTemples = query
    ? INITIAL_WATS.filter((wat) =>
        containsSearch(query, [
          wat.number,
          toKhmerNumber(wat.number),
          wat.nameKh,
          wat.nameEn,
          wat.districtKh,
          wat.district,
          wat.buddhistYear,
          toKhmerNumber(wat.buddhistYear),
          wat.christianYear,
          toKhmerNumber(wat.christianYear),
          wat.location,
          wat.slug,
        ])
      )
    : [];

  /* -------------------------
     2. NEWS / DHARMA POSTS
  ------------------------- */

  const filteredPosts = query
    ? INITIAL_POSTS.filter((post) =>
        containsSearch(query, [
          post.title,
          post.khmerTitle,
          post.excerpt,
          post.content,
          post.category,
          post.author,
          post.buddhistDate,
          post.date,
          ...(Array.isArray(post.tags) ? post.tags : []),
        ])
      )
    : [];

  /* -------------------------
     3. EVENTS
  ------------------------- */

  const filteredEvents = query
    ? INITIAL_EVENTS.filter((event) =>
        containsSearch(query, [
          event.title,
          event.khmerTitle,
          event.description,
          event.location,
          event.category,
          event.buddhistDate,
          event.date,
        ])
      )
    : [];

  /* -------------------------
     4. MONKS
  ------------------------- */

  const filteredMonks = query
    ? INITIAL_MONKS.filter((monk) =>
        containsSearch(query, [
          monk.name,
          monk.nameEn,
          monk.khmerName,
          monk.nameKh,
          monk.role,
          monk.khmerRole,
          monk.roleKh,
          monk.position,
          monk.title,
          monk.birthYear,
          monk.birthPlace,
          monk.bio,
          monk.vassa,
          monk.yearsOrdained,
        ])
      )
    : [];

  /* -------------------------
     5. ACTIVITIES
  ------------------------- */

  const filteredActivities = query
    ? templeActivities.filter((activity) =>
        containsSearch(query, [
          activity.title,
          activity.titleKh,
          activity.titleEn,
          activity.category,
          activity.categoryLabelKh,
          activity.description,
          activity.descriptionKh,
          activity.location,
          activity.date,
          activity.year,
          activity.type,
        ])
      )
    : [];

  /* -------------------------
     6. GALLERIES
  ------------------------- */

  const filteredGalleries = query
    ? INITIAL_GALLERIES.filter((gallery) =>
        containsSearch(query, [
          gallery.title,
          gallery.khmerTitle,
          gallery.titleKh,
          gallery.album,
          gallery.albumName,
          gallery.description,
          gallery.year,
          ...(Array.isArray(gallery.photos)
            ? gallery.photos.flatMap((photo) => [
                photo?.caption,
                photo?.title,
                photo?.alt,
              ])
            : []),
        ])
      )
    : [];

  /* -------------------------
     7. MEDIA
  ------------------------- */

  const filteredMedia = query
    ? INITIAL_MEDIA.filter((media) =>
        containsSearch(query, [
          media.title,
          media.name,
          media.khmerTitle,
          media.category,
          media.alt,
          media.caption,
          media.date,
          media.year,
        ])
      )
    : [];

  const totalSearchResults =
    filteredTemples.length +
    filteredPosts.length +
    filteredEvents.length +
    filteredMonks.length +
    filteredActivities.length +
    filteredGalleries.length +
    filteredMedia.length;

  /* =========================================================
     SEARCH ACTIONS
  ========================================================= */

  const closeSearch = () => {
    setSearchModalOpen(false);
    setSearchQuery("");
  };

  const goToSearchResult = (path) => {
    closeSearch();
    navigate(path);
  };

  const openTemple = (wat) => {
    goToSearchResult(`/wats/${wat.slug}`);
  };

  /* =========================================================
     COPY BANK INFO
  ========================================================= */

  const copyBankInfo = () => {
    navigator.clipboard?.writeText(
      `ABA Bank: 001 889 772 (${
        siteSettings.templeNameEn || "WAT O TRAO"
      })`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#1F1F1F] font-khmer-sans">
      <ScrollToHash />
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header
        onOpenSearch={() => {
          setSearchQuery("");
          setSearchModalOpen(true);
        }}
        onOpenDonationModal={() => setDonationModalOpen(true)}
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <main className="flex-1">
        <Outlet
          context={{
            onOpenDonationModal: () => setDonationModalOpen(true),
          }}
        />
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer
        onOpenDonationModal={() => setDonationModalOpen(true)}
      />

      {/* =====================================================
          GLOBAL SEARCH MODAL
      ===================================================== */}

      <Modal
        isOpen={searchModalOpen}
        onClose={closeSearch}
        title="ស្វែងរកក្នុងគេហទំព័រ"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-4">
          {/* SEARCH INPUT */}

          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D4A62A]" />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ស្វែងរកវត្ត ព័ត៌មាន ព្រះធម៌ ព្រះសង្ឃ សកម្មភាព ឬរូបភាព..."
              className="
                w-full
                rounded-xl
                border-2 border-[#D4A62A]/40
                bg-white
                py-3.5 pl-12 pr-4
                text-sm text-stone-800
                outline-none
                transition-all
                placeholder:text-stone-400
                focus:border-[#11178F]
                focus:ring-4
                focus:ring-[#11178F]/5
              "
              autoFocus
            />
          </div>

          {/* SEARCH INTRO */}

          {!searchQuery.trim() && (
            <div className="rounded-2xl border border-[#D4A62A]/25 bg-gradient-to-br from-[#FFFDF7] to-[#FFF8E7] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#11178F] text-white shadow-sm">
                  <Search className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-khmer-serif text-sm font-extrabold text-[#11178F]">
                    ស្វែងរកទូទាំងគេហទំព័រ
                  </h3>

                  <p className="mt-1 text-xs leading-6 text-stone-600">
                    ស្វែងរកវត្តខ្មែរ{" "}
                    <strong className="text-[#11178F]">
                      {toKhmerNumber(INITIAL_WATS.length)} វត្ត
                    </strong>
                    , ព័ត៌មាន, អត្ថបទព្រះធម៌, ព្រះសង្ឃ,
                    កម្មវិធីបុណ្យ, សកម្មភាពវត្ត និងបណ្ណសាររូបភាព។
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "វត្តខ្មែរ",
                  "ព័ត៌មាន",
                  "ព្រះធម៌",
                  "ព្រះសង្ឃ",
                  "កម្មវិធីបុណ្យ",
                  "សកម្មភាព",
                  "រូបភាព",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D4A62A]/30 bg-white px-3 py-1 text-[10px] font-semibold text-stone-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              RESULTS
          ================================================= */}

          {searchQuery.trim() && (
            <div className="max-h-[62vh] overflow-y-auto pr-1">
              {/* RESULT COUNT */}

              {totalSearchResults > 0 && (
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="min-w-0 truncate text-xs text-stone-500">
                    លទ្ធផលសម្រាប់{" "}
                    <span className="font-bold text-[#11178F]">
                      “{searchQuery}”
                    </span>
                  </p>

                  <span className="shrink-0 rounded-full bg-[#11178F]/10 px-3 py-1 text-[11px] font-bold text-[#11178F]">
                    {toKhmerNumber(totalSearchResults)} លទ្ធផល
                  </span>
                </div>
              )}

              {/* NO RESULT */}

              {totalSearchResults === 0 && (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100">
                    <Search className="h-5 w-5 text-stone-400" />
                  </div>

                  <p className="font-khmer-serif text-sm font-bold text-stone-700">
                    រកមិនឃើញលទ្ធផល
                  </p>

                  <p className="mt-1 text-xs text-stone-500">
                    មិនមានលទ្ធផលសម្រាប់ “{searchQuery}”
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* =============================================
                    TEMPLES
                ============================================= */}

                {filteredTemples.length > 0 && (
                  <SearchSection
                    icon={Landmark}
                    title="វត្តខ្មែរ"
                    subtitle="Khmer Buddhist Temples"
                    count={filteredTemples.length}
                  >
                    {filteredTemples.slice(0, 10).map((wat) => (
                      <button
                        key={wat.id}
                        type="button"
                        onClick={() => openTemple(wat)}
                        className="
                          group
                          flex w-full
                          items-center gap-3
                          rounded-xl
                          border border-[#D4A62A]/25
                          bg-white p-3
                          text-left
                          transition-all duration-200
                          hover:-translate-y-0.5
                          hover:border-[#D4A62A]
                          hover:bg-[#FFFDF7]
                          hover:shadow-sm
                        "
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#11178F] text-xs font-extrabold text-white">
                          {toKhmerNumber(wat.number)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate font-khmer-serif text-sm font-extrabold text-[#11178F] group-hover:text-[#9A741A]">
                            {wat.nameKh}
                          </p>

                          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-stone-500">
                            {wat.districtKh && (
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-[#D4A62A]" />
                                {wat.districtKh}
                              </span>
                            )}

                            {wat.buddhistYear && (
                              <span>
                                ព.ស.{" "}
                                {toKhmerNumber(wat.buddhistYear)}
                              </span>
                            )}

                            {wat.christianYear && (
                              <span>
                                គ.ស.{" "}
                                {toKhmerNumber(wat.christianYear)}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#11178F]/5 text-[#11178F] transition-all group-hover:bg-[#11178F] group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </button>
                    ))}

                    {filteredTemples.length > 10 && (
                      <ViewAllButton
                        text={`មើលបញ្ជីវត្តទាំងអស់ (${toKhmerNumber(
                          filteredTemples.length
                        )})`}
                        onClick={() => goToSearchResult("/wat-khmer")}
                      />
                    )}
                  </SearchSection>
                )}

                {/* =============================================
                    NEWS / DHARMA
                ============================================= */}

                {filteredPosts.length > 0 && (
                  <SearchSection
                    icon={Newspaper}
                    title="ព័ត៌មាន និងអត្ថបទព្រះធម៌"
                    subtitle="News & Dharma"
                    count={filteredPosts.length}
                  >
                    {filteredPosts.slice(0, 6).map((post) => (
                      <SearchResult
                        key={post.id}
                        title={post.khmerTitle || post.title}
                        subtitle={
                          post.excerpt ||
                          post.buddhistDate ||
                          post.date ||
                          ""
                        }
                        badge={post.category || "ព័ត៌មាន"}
                        onClick={() =>
                          goToSearchResult(`/news/${post.slug}`)
                        }
                      />
                    ))}
                  </SearchSection>
                )}

                {/* =============================================
                    EVENTS
                ============================================= */}

                {filteredEvents.length > 0 && (
                  <SearchSection
                    icon={CalendarDays}
                    title="កម្មវិធីបុណ្យ"
                    subtitle="Events"
                    count={filteredEvents.length}
                  >
                    {filteredEvents.slice(0, 6).map((event) => (
                      <SearchResult
                        key={event.id}
                        title={event.khmerTitle || event.title}
                        subtitle={[
                          event.buddhistDate || event.date,
                          event.location,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                        badge="កម្មវិធី"
onClick={() =>
  goToSearchResult(`/events#event-${String(event.id).replace(/^event-/, "")}`)
}                      />
                    ))}
                  </SearchSection>
                )}

                {/* =============================================
                    MONKS
                ============================================= */}

                {filteredMonks.length > 0 && (
                  <SearchSection
                    icon={UserRound}
                    title="ព្រះសង្ឃ"
                    subtitle="Monastic Community"
                    count={filteredMonks.length}
                  >
                    {filteredMonks.slice(0, 6).map((monk) => (
                      <SearchResult
                        key={monk.id}
                        title={
                          monk.khmerName ||
                          monk.nameKh ||
                          monk.name ||
                          monk.nameEn
                        }
                        subtitle={[
                          monk.khmerRole ||
                            monk.roleKh ||
                            monk.role ||
                            monk.position,
                          monk.vassa
                            ? `${toKhmerNumber(monk.vassa)} វស្សា`
                            : null,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                        badge="ព្រះសង្ឃ"
onClick={() =>
  goToSearchResult(`/monks#monk-${String(monk.id).replace(/^monk-/, "")}`)
}                      />
                    ))}
                  </SearchSection>
                )}

                {/* =============================================
                    ACTIVITIES
                ============================================= */}

                {filteredActivities.length > 0 && (
                  <SearchSection
                    icon={Activity}
                    title="សកម្មភាពវត្ត"
                    subtitle="Temple Activities"
                    count={filteredActivities.length}
                  >
                    {filteredActivities.slice(0, 6).map((activity) => (
                      <SearchResult
                        key={activity.id}
                        title={
                          activity.titleKh ||
                          activity.title ||
                          activity.titleEn
                        }
                        subtitle={[
                          activity.categoryLabelKh ||
                            activity.category,
                          activity.date,
                          activity.location,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                        badge="សកម្មភាព"
                        onClick={() =>
  goToSearchResult(`/activities/${activity.id}`)
}
                      />
                    ))}
                  </SearchSection>
                )}

                {/* =============================================
                    GALLERY
                ============================================= */}

                {filteredGalleries.length > 0 && (
                  <SearchSection
                    icon={Images}
                    title="បណ្ណសាររូបភាព"
                    subtitle="Gallery Albums"
                    count={filteredGalleries.length}
                  >
                    {filteredGalleries.slice(0, 5).map((gallery) => (
                      <SearchResult
                        key={gallery.id}
                        title={
                          gallery.khmerTitle ||
                          gallery.titleKh ||
                          gallery.title ||
                          gallery.albumName ||
                          "បណ្ណសាររូបភាព"
                        }
                        subtitle={[
                          gallery.albumName,
                          gallery.year,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                        badge="Album"
                        onClick={() =>
                          goToSearchResult(`/gallery`)
                        }
                      />
                    ))}
                  </SearchSection>
                )}

                {/* =============================================
                    MEDIA
                ============================================= */}

                {filteredMedia.length > 0 && (
                  <SearchSection
                    icon={Images}
                    title="រូបភាព និងមេឌៀ"
                    subtitle="Media"
                    count={filteredMedia.length}
                  >
                    {filteredMedia.slice(0, 5).map((media) => (
                      <SearchResult
                        key={media.id}
                        title={
                          media.khmerTitle ||
                          media.title ||
                          media.name ||
                          media.alt ||
                          "រូបភាព"
                        }
                        subtitle={[
                          media.category,
                          media.date,
                          media.year,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                        badge="Media"
                        onClick={() =>
  goToSearchResult(`/gallery#media-${String(media.id).replace(/^media-/, "")}`)
}
                      />
                    ))}
                  </SearchSection>
                )}
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* =====================================================
          DONATION MODAL
      ===================================================== */}

      <Modal
        isOpen={donationModalOpen}
        onClose={() => setDonationModalOpen(false)}
        title={`ចូលរួមបរិច្ចាគបច្ច័យបួនកសាង${
          siteSettings.templeNameKh || "វត្ត អូរត្រាវ"
        }`}
        maxWidth="max-w-xl"
      >
        <div className="space-y-5">
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            «ទានំ ទេតិ សីលំ រក្ខតិ ភាវនំ ភាវេតិ» —
            ការបរិច្ចាគទានគឺជាការបណ្តុះនូវសេចក្តីល្អ និងបុណ្យកុសល។
            សូមអនុមោទនាបច្ច័យបួន និងសទ្ធាជ្រះថ្លារបស់លោកអ្នក។
          </p>

          {/* CAUSE */}

          <div>
            <label className="block text-xs font-bold uppercase text-[#4A1414] mb-2">
              ជ្រើសរើសគម្រោងបុណ្យ / Select Cause
            </label>

            <select
              value={donationCause}
              onChange={(e) => setDonationCause(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-[#D4AF37] bg-white text-sm focus:outline-none"
            >
              <option value="tipitaka-library">
                សាងសង់បណ្ណាល័យព្រះត្រៃបិដក (Tipitaka Library)
              </option>

              <option value="vihara-restoration">
                ជួសជុលព្រះវិហារ និងក្លោងទ្វារវត្ត
              </option>

              <option value="monks-education">
                ឧបត្ថម្ភការសិក្សាព្រះសង្ឃ និងបាលី
              </option>

              <option value="general-temple">
                បច្ច័យបួនចង្ហាន់ និងភ្លើងទឹកវត្តទូទៅ
              </option>
            </select>
          </div>

          {/* AMOUNT */}

          <div>
            <label className="block text-xs font-bold uppercase text-[#4A1414] mb-2">
              ចំនួនបច្ច័យចូលរួម ($ USD)
            </label>

            <div className="grid grid-cols-4 gap-2">
              {[20, 50, 100, 200].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setDonationAmount(amount)}
                  className={`py-2 rounded-lg text-sm font-semibold border transition-all ${
                    donationAmount === amount
                      ? "bg-[#6E1F1F] text-white border-[#D4AF37] shadow-sm"
                      : "bg-white text-[#4A1414] border-gray-300 hover:border-[#D4AF37]"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* QR + BANK */}

          <div className="p-4 rounded-xl bg-amber-50/60 border border-[#D4AF37]/50 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-32 h-32 bg-white rounded-lg p-2 border border-[#D4AF37] flex items-center justify-center shrink-0 shadow-inner">
              <img
                src={donationQrImage}
                alt="ABA KHQR - WAT O TRAO"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1.5 text-xs text-stone-700 w-full">
              <p className="font-bold text-sm text-[#4A1414]">
                គណនីធនាគារ {siteSettings.templeNameKh} (
                {siteSettings.templeNameEn})
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
                type="button"
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

          {/* BUTTONS */}

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="secondary"
              onClick={() => setDonationModalOpen(false)}
            >
              បិទ / Close
            </Button>

            <Button
              variant="gold"
              onClick={() => {
                alert(
                  `សូមអរព្រះគុណ និងអរគុណយ៉ាងជ្រាលជ្រៅចំពោះសទ្ធាជ្រះថ្លាចំនួន $${donationAmount}! គណៈកម្មការវត្តបានកត់ត្រាការចូលរួមរបស់លោកអ្នក។`
                );

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

/* =========================================================
   SEARCH SECTION
========================================================= */

function SearchSection({
  icon: Icon,
  title,
  subtitle,
  count,
  children,
}) {
  return (
    <section>
      <div className="mb-2.5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#11178F] text-white">
            {Icon && <Icon className="h-4 w-4" />}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-khmer-serif text-sm font-extrabold text-[#11178F]">
              {title}
            </h3>

            {subtitle && (
              <p className="text-[10px] text-stone-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-[#D4A62A]/15 px-2.5 py-1 text-[10px] font-bold text-[#8A6518]">
          {toKhmerNumber(count)}
        </span>
      </div>

      <div className="space-y-2">{children}</div>
    </section>
  );
}

/* =========================================================
   SEARCH RESULT
========================================================= */

function SearchResult({
  title,
  subtitle,
  badge,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex w-full
        items-center gap-3
        rounded-xl
        border border-[#D4A62A]/25
        bg-white
        p-3
        text-left
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-[#D4A62A]
        hover:bg-[#FFFDF7]
        hover:shadow-sm
      "
    >
      <div className="min-w-0 flex-1">
        <p className="truncate font-khmer-serif text-sm font-bold text-[#30251F] transition-colors group-hover:text-[#11178F]">
          {title || "មិនមានចំណងជើង"}
        </p>

        {subtitle && (
          <p className="mt-1 line-clamp-1 text-[11px] text-stone-500">
            {subtitle}
          </p>
        )}
      </div>

      {badge && (
        <span className="shrink-0 rounded-full bg-[#11178F]/10 px-2.5 py-1 text-[10px] font-bold text-[#11178F]">
          {badge}
        </span>
      )}

      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#11178F]/5 text-[#11178F] transition-all group-hover:bg-[#11178F] group-hover:text-white">
        <ArrowRight className="h-4 w-4" />
      </div>
    </button>
  );
}

/* =========================================================
   VIEW ALL
========================================================= */

function ViewAllButton({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        mt-2
        w-full
        rounded-xl
        border border-[#D4A62A]/40
        bg-[#FFF9EA]
        px-4 py-2.5
        font-khmer-serif
        text-xs font-bold
        text-[#11178F]
        transition-all
        hover:border-[#11178F]
        hover:bg-[#11178F]
        hover:text-white
      "
    >
      {text}
    </button>
  );
}
