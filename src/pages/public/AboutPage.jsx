import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Calendar,
  Heart,
  Home,
  Image as ImageIcon,
  Landmark,
  ScrollText,
  Sparkles,
  Users,
  MapPin,
  Quote,
  History,
  Church,
} from "lucide-react";

import {
  LotusDivider,
  KhmerDivider,
  KhmerCornerDecor,
} from "../../components/traditional/LotusDivider";

import { SectionTitle } from "../../components/common/UIComponents";
import { siteSettings } from "../../data/data";
import watOuTraoLogo from "../../assets/branding/wat-ou-trao-official-logo.png";
import elephantTuskImage from "../../assets/images/elephant-tusk.jpg";
/* =========================================================
   HISTORY IMAGES
   public/assets/history/
========================================================= */

const historyImages = {
  family: "/assets/history/family/family-01.jpeg",

  oldHall: "/assets/history/temple/old-hall-01.png",
  oldBuilding: "/assets/history/temple/old-building-01.png",
  templeComplex: "/assets/history/temple/temple-complex-01.png",
  templeDamage: "/assets/history/temple/temple-damage-01.jpg",

  heritageTowers: "/assets/history/artifacts/heritage-towers-01.png",
  heritageObject: "/assets/history/artifacts/heritage-object-01.png",

  genealogy: "/assets/history/documents/genealogy-01.png",

  compiler: "/assets/history/people/compiler-01.jpg",
  historicalPortrait:
    "/assets/history/people/historical-portrait-01.png",
};

/* =========================================================
   HISTORICAL TIMELINE
========================================================= */

const milestones = [
  {
    year: "ព.ស. ២៤០២ • គ.ស. ១៨៥៨",
    shortYear: "១៨៥៨",
    title: "កំណើតលោកតាថាច់ ទឹត",
    description:
      "លោកតាថាច់ ទឹត ជាបុត្រទី៦របស់លោកតាថាច់ ចាន់ និងលោកយាយនាម ជ័យ កើតនៅភូមិកញ្ចោងផ្សារ ស្រុកកញ្ចោង ខេត្តព្រះត្រពាំង។",
  },
  {
    year: "ព.ស. ២៤២៣ • គ.ស. ១៨៧៩",
    shortYear: "១៨៧៩",
    title: "ជីវិតគ្រួសាររបស់លោកតាទឹត និងលោកយាយម៉ង់",
    description:
      "នៅវ័យប្រមាណ ២២ ឆ្នាំ លោកតាថាច់ ទឹត បានរៀបអាពាហ៍ពិពាហ៍ជាមួយលោកយាយថាច់ ធី ម៉ង់ តាមទំនៀមទម្លាប់ខ្មែរ។",
  },
  {
    year: "ព.ស. ២៤២៧ • គ.ស. ១៨៨៣",
    shortYear: "១៨៨៣",
    title: "ការកកើតភូមិអូរត្រាវ",
    description:
      "ក្រោយការមកតាំងទីលំនៅ និងប្រកបរបរកសិកម្មនៅតំបន់ក្បែរមាត់អូរដែលមានត្រាវដុះច្រើន ភូមិនេះត្រូវបានកំណត់ឈ្មោះថា «ភូមិអូរត្រាវ»។",
  },
  {
    year: "ព.ស. ២៤៦០ • គ.ស. ១៩១៦",
    shortYear: "១៩១៦",
    title: "ការរួមចំណែកក្នុងព្រះពុទ្ធសាសនា",
    description:
      "គ្រួសារលោកតាទឹត និងលោកយាយម៉ង់បានចូលរួមឧបត្ថម្ភការកសាងព្រះវិហារថ្មីពីថ្ម និងឥដ្ឋ ជំនួសព្រះវិហារចាស់ដែលធ្វើពីឈើ។",
  },
  {
    year: "ព.ស. ២៤៦៩ • គ.ស. ១៩២៥",
    shortYear: "១៩២៥",
    title: "ការកសាងសាលាទាន",
    description:
      "បានរួមវិភាគទានក្នុងការកសាងសាលាទានមួយខ្នង ដែលប្រើសម្រាប់តម្កល់ព្រះត្រៃបិដក គម្ពីរ សាស្ត្រាស្លឹករឹត និងក្រាំង។",
  },
  {
    year: "ព.ស. ២៤៦៧ • គ.ស. ១៩២៣",
    shortYear: "១៩២៣",
    title: "អនិច្ចកម្មលោកតាថាច់ ទឹត",
    description:
      "តាមឯកសារ លោកតាថាច់ ទឹត បានទទួលអនិច្ចកម្មក្នុងជន្មាយុ ៦៧ ឆ្នាំ ហើយគ្រួសារបានធ្វើបុណ្យទក្ខិណានុប្បទាន ៣ យប់ ៣ ថ្ងៃ។",
  },
  {
    year: "ព.ស. ២៤៧០ • គ.ស. ១៩២៦",
    shortYear: "១៩២៦",
    title: "បុណ្យដារ និងការចាប់ផ្ដើមបុណ្យប្រចាំវត្ត",
    description:
      "ក្រោយតម្កល់សពគម្រប់ ៣ ឆ្នាំ គ្រួសារបានធ្វើបុណ្យដារ និងតម្កល់អដ្ឋិធាតុ។ លោកយាយម៉ង់ និងកូនៗក៏បានរៀបចំការធ្វើបុណ្យឧទ្ទិសកុសលមួយឆ្នាំមួយវត្ត។",
  },
  {
    year: "ព.ស. ២៤៧៣ • គ.ស. ១៩២៩",
    shortYear: "១៩២៩",
    title: "ការឧបត្ថម្ភសមណកុដិ",
    description:
      "ឯកសារកត់ត្រាការកសាងសមណកុដិ «សាលាឆនេត្រ» នៅវត្តឧណ្ណាលោម រាជធានីភ្នំពេញ។",
  },
  {
    year: "ព.ស. ២៤៨៥ • គ.ស. ១៩៤១",
    shortYear: "១៩៤១",
    title: "មរណភាពលោកយាយថាច់ ធី ម៉ង់",
    description:
      "លោកយាយថាច់ ធី ម៉ង់ បានទទួលមរណភាពក្នុងជន្មាយុ ៧៧ ឆ្នាំ បន្ទាប់ពីជីវិតដែលបានឧទ្ទិសដល់គ្រួសារ កសិកម្ម និងព្រះពុទ្ធសាសនា។",
  },
  {
    year: "ព.ស. ២៥១១ • គ.ស. ១៩៦៧",
    shortYear: "១៩៦៧",
    title: "សាលាទានរងការបំផ្លាញដោយសង្គ្រាម",
    description:
      "តាមឯកសារប្រវត្តិ សាលាទានដែលបានកសាងពីមុនត្រូវបានភ្លើងសង្គ្រាមបំផ្លាញ។",
  },
  {
    year: "ព.ស. ២៥២៤ • គ.ស. ១៩៨០",
    shortYear: "១៩៨០",
    title: "ការរៀបចំកសាងទីអារាម",
    description:
      "លោកតាពៅ និងលោកតាម៉ិចបានពិភាក្សាអំពីការកសាងវត្ត ហើយបានរៀបចំសុំធ្វើសាលាឧបោសថ។",
  },
  {
    year: "ព.ស. ២៥៣៧ • ២៣ កក្កដា ១៩៩៣",
    shortYear: "១៩៩៣",
    title: "វត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ)",
    description:
      "សាលាឧបោសថបានក្លាយជាព្រះវិហារនៃវត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ) ដែលជាព្រឹត្តិការណ៍សំខាន់មួយក្នុងប្រវត្តិវត្ត។",
  },
];

/* =========================================================
   CHILDREN / GENEALOGY
========================================================= */

const children = [
  "១. លោកតានាម នេត្រ",
  "២. លោកតានាម គង់",
  "៣. លោកយាយនាម ម៉ា",
  "៤. លោកតានាម មាឃ",
  "៥. លោកយាយនាម ឡាយ",
  "៦. លោកតានាម ពៅ",
  "៧. លោកតានាម ពេជ្រ",
  "៨. លោកតានាម ពូក",
  "៩. លោកយាយនាម យ៉ូវ",
  "១០. លោកយាយនាម សៅរ៍",
  "១១. លោកយាយនាម ទន់",
];

/* =========================================================
   GALLERY
========================================================= */

const gallery = [
  {
    src: historyImages.family,
    title: "រូបភាពគ្រួសារប្រវត្តិសាស្ត្រ",
  },
  {
    src: historyImages.historicalPortrait,
    title: "រូបថតបុគ្គលក្នុងឯកសារប្រវត្តិសាស្ត្រ",
  },
  {
    src: historyImages.oldHall,
    title: "សំណង់ប្រវត្តិសាស្ត្រ",
  },
  {
    src: historyImages.oldBuilding,
    title: "សំណង់ចាស់ក្នុងបណ្ណសារ",
  },
  {
    src: historyImages.templeComplex,
    title: "ទីអារាម និងសំណង់",
  },
  {
    src: historyImages.templeDamage,
    title: "រូបភាពប្រវត្តិសាស្ត្រនៃសំណង់",
  },
  {
    src: historyImages.heritageTowers,
    title: "មរតកស្ថាបត្យកម្ម",
  },
  {
    src: historyImages.heritageObject,
    title: "វត្ថុមរតកប្រវត្តិសាស្ត្រ",
  },
  {
    src: historyImages.genealogy,
    title: "ឯកសារពង្សាវតារ",
  },
];

const archiveImages = [
  { src: "/assets/history/archive/s1_image1.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 01" },
  { src: "/assets/history/archive/s1_image10.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 02" },
  { src: "/assets/history/archive/s1_image2.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 03" },
  { src: "/assets/history/archive/s1_image3.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 04" },
  { src: "/assets/history/archive/s1_image4.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 05" },
  { src: "/assets/history/archive/s1_image8.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 09" },
  { src: "/assets/history/archive/s1_image9.png", category: "source1", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 10" },
  { src: "/assets/history/archive/s2_image1.jpg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 11" },
  { src: "/assets/history/archive/s2_image10.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 12" },
  { src: "/assets/history/archive/s2_image11.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 13" },
  { src: "/assets/history/archive/s2_image12.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 14" },
  { src: "/assets/history/archive/s2_image13.jpg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 15" },
  { src: "/assets/history/archive/s2_image14.jpeg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 16" },
  { src: "/assets/history/archive/s2_image14.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 17" },
  { src: "/assets/history/archive/s2_image15.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 18" },
  { src: "/assets/history/archive/s2_image16.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 19" },
  { src: "/assets/history/archive/s2_image17.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 20" },
  { src: "/assets/history/archive/s2_image18.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 21" },
  { src: "/assets/history/archive/s2_image19.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 22" },
  { src: "/assets/history/archive/s2_image2.jpeg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 23" },
  { src: "/assets/history/archive/s2_image2.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 24" },
  { src: "/assets/history/archive/s2_image20.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 25" },
  { src: "/assets/history/archive/s2_image21.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 26" },
  { src: "/assets/history/archive/s2_image22.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 27" },
  { src: "/assets/history/archive/s2_image23.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 28" },
  { src: "/assets/history/archive/s2_image230.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 29" },
  { src: "/assets/history/archive/s2_image24.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 30" },
  { src: "/assets/history/archive/s2_image25.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 31" },
  { src: "/assets/history/archive/s2_image26.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 32" },
  { src: "/assets/history/archive/s2_image27.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 33" },
  { src: "/assets/history/archive/s2_image28.jpg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 34" },
  { src: "/assets/history/archive/s2_image29.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 35" },
  { src: "/assets/history/archive/s2_image3.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 36" },
  { src: "/assets/history/archive/s2_image30.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 37" },
  { src: "/assets/history/archive/s2_image300.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 38" },
  { src: "/assets/history/archive/s2_image31.jpeg", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 39" },
  { src: "/assets/history/archive/s2_image32.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 40" },
  { src: "/assets/history/archive/s2_image33.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 41" },
  { src: "/assets/history/archive/s2_image34.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 42" },
  { src: "/assets/history/archive/s2_image35.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 43" },
  { src: "/assets/history/archive/s2_image36.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 44" },
  { src: "/assets/history/archive/s2_image37.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 45" },
  { src: "/assets/history/archive/s2_image38.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 46" },
  { src: "/assets/history/archive/s2_image39.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 47" },
  { src: "/assets/history/archive/s2_image4.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 48" },
  { src: "/assets/history/archive/s2_image40.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 49" },
  { src: "/assets/history/archive/s2_image41.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 50" },
  { src: "/assets/history/archive/s2_image42.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 51" },
  { src: "/assets/history/archive/s2_image5.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 52" },
  { src: "/assets/history/archive/s2_image6.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 53" },
  { src: "/assets/history/archive/s2_image7.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 54" },
  { src: "/assets/history/archive/s2_image8.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 55" },
  { src: "/assets/history/archive/s2_image9.png", category: "source2", title: "រូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ 56" },
];

/* =========================================================
   REUSABLE HISTORY IMAGE
========================================================= */

function HistoryImage({ src, alt, className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}

/* =========================================================
   PAGE
========================================================= */

export function AboutPage() {
  const [archiveFilter, setArchiveFilter] = useState("all");
  const [selectedArchiveImage, setSelectedArchiveImage] = useState(null);

  const filteredArchiveImages = useMemo(() => {
    if (archiveFilter === "all") return archiveImages;
    return archiveImages.filter((image) => image.category === archiveFilter);
  }, [archiveFilter]);

  const templeName =
    siteSettings.templeNameKh || "វត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ)";

  return (
    <div className="overflow-hidden bg-[#FFFDF8] text-stone-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[650px] flex items-center overflow-hidden bg-[#080D67] text-white">
        <div className="absolute inset-0">
          <HistoryImage
            src={historyImages.family}
            alt="ប្រវត្តិភូមិអូរត្រាវ"
            className="w-full h-full object-cover opacity-30 scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050947]/95 via-[#11178F]/90 to-[#11178F]/60" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050947] via-transparent to-transparent" />
        </div>

        <div className="absolute top-8 left-8 opacity-30 hidden lg:block">
          <KhmerCornerDecor position="top-left" />
        </div>

        <div className="absolute bottom-8 right-8 opacity-30 hidden lg:block">
          <KhmerCornerDecor position="bottom-right" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src={siteSettings.officialLogo || watOuTraoLogo}
              alt={templeName}
              className="mx-auto w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full bg-white p-1.5 border-[3px] border-[#D4A62A] shadow-2xl"
            />

        

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-extrabold font-khmer-serif leading-[1.35]">
              ប្រវត្តិភូមិអូរត្រាវ

              <span className="block mt-3 text-[#F0C75E] text-2xl sm:text-4xl lg:text-5xl">
                និង {templeName}
              </span>
            </h1>

            <div className="max-w-xl mx-auto mt-5">
              <LotusDivider
                goldColor="#D4A62A"
                maroon="#D4A62A"
              />
            </div>

            <p className="max-w-3xl mx-auto mt-6 text-sm sm:text-lg text-[#F7EED8] leading-8 sm:leading-9">
              កំណត់ត្រាប្រវត្តិសាស្ត្រនៃការកកើតភូមិអូរត្រាវ
              ជីវប្រវត្តិបុព្វបុរស ប្រវត្តិវត្ត
              និងមរតកដែលបានរក្សាទុកសម្រាប់កូនចៅជំនាន់ក្រោយ។
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="min-w-[170px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <History className="w-5 h-5 mx-auto text-[#F0C75E]" />

                <div className="mt-2 text-[#F0C75E] font-black text-2xl">
                  ១៨៨៣
                </div>

                <div className="text-xs mt-1 text-white/80">
                  កំណើតភូមិអូរត្រាវ
                </div>
              </div>

              <div className="min-w-[170px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <Church className="w-5 h-5 mx-auto text-[#F0C75E]" />

                <div className="mt-2 text-[#F0C75E] font-black text-2xl">
                  ១៩៩៣
                </div>

                <div className="text-xs mt-1 text-white/80">
                  វត្តសាសនសាមគ្គីរង្សី
                </div>
              </div>

              <div className="min-w-[170px] px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <Users className="w-5 h-5 mx-auto text-[#F0C75E]" />

                <div className="mt-2 text-[#F0C75E] font-black text-2xl">
                  ៤០០+
                </div>

                <div className="text-xs mt-1 text-white/80">
                  គ្រួសារ តាមកំណត់ត្រា ២០២២
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <SectionTitle
          title="ORIGIN OF O TRAO"
          khmerTitle="ប្រវត្តិនៃការកកើតភូមិអូរត្រាវ"
          subtitle="ដើមកំណើតនៃសហគមន៍ និងជីវភាពរបស់បុព្វបុរស"
        />

        <div className="mt-12 grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-[#1B24C9] text-sm font-bold">
              <MapPin className="w-5 h-5" />
              ភូមិអូរត្រាវ
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#11178F] font-khmer-serif leading-relaxed">
              សហគមន៍ដែលបានចាប់ផ្ដើមពីការតាំងទីលំនៅ
              របស់បុព្វបុរស
            </h2>

            <div className="mt-6 space-y-5 text-stone-700 leading-8 text-sm sm:text-base">
              <p>
                ភូមិអូរត្រាវ ស្ថិតនៅឃុំហ៊ីវតឺ ស្រុកកញ្ចោង
                ខេត្តត្រាវិញ។ តាមឯកសារប្រវត្តិ
                ភូមិអូរត្រាវបានកកើតឡើងនៅឆ្នាំមមែ បញ្ចស័ក
                ព.ស. ២៤២៧ ត្រូវនឹង គ.ស. ១៨៨៣។
              </p>

              <p>
                ការកកើតភូមិនេះមានទំនាក់ទំនងយ៉ាងជិតស្និទ្ធ
                ជាមួយការមកតាំងទីលំនៅរបស់គ្រួសារបុព្វបុរស
                ដែលបានមករស់នៅលើតំបន់ដីទំនាបក្បែរមាត់អូរ។
              </p>

              <p>
                នៅជុំវិញមាត់អូរមានដើមត្រាវដុះជាច្រើន
                ហើយឈ្មោះ «អូរត្រាវ»
                ក៏ត្រូវបានប្រើជាឈ្មោះភូមិតាំងពីពេលនោះមក។
              </p>

              <p>
                ប្រជាជនបានពឹងផ្អែកជាចម្បងលើរបរកសិកម្ម
                និងធនធានធម្មជាតិ។ តាមកំណត់ត្រាឆ្នាំ ២០២២
                ភូមិមានប្រមាណជាង ៤០០ គ្រួសារ។
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#11178F]/5 to-[#D4A62A]/10 border-l-4 border-[#D4A62A]">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#11178F] flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-[#F0C75E]" />
                </div>

                <div>
                  <p className="text-xs text-stone-500 font-bold">
                    ឆ្នាំកំណើតភូមិ
                  </p>

                  <h3 className="mt-1 text-xl font-black text-[#11178F]">
                    ព.ស. ២៤២៧ • គ.ស. ១៨៨៣
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-3 sm:-inset-5 rounded-[2rem] border border-[#D4A62A]/30" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#F7F1E2] border border-[#D4A62A]/50 shadow-2xl">
              <HistoryImage
                src={historyImages.family}
                alt="រូបគ្រួសារប្រវត្តិសាស្ត្រភូមិអូរត្រាវ"
                className="w-full min-h-[350px] max-h-[560px] object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xs text-[#F0C75E] font-bold">
                  HISTORICAL ARCHIVE
                </p>

                <p className="mt-1 font-bold font-khmer-serif">
                  រូបភាពគ្រួសារប្រវត្តិសាស្ត្រអូរត្រាវ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAMILY HISTORY
      ===================================================== */}

      <section className="relative py-20 lg:py-24 bg-[#F7F1E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="FAMILY HISTORY"
            khmerTitle="លោកតាថាច់ ទឹត និងលោកយាយថាច់ ធី ម៉ង់"
            subtitle="ជីវប្រវត្តិគ្រួសារដែលមានទំនាក់ទំនងនឹងការកកើតភូមិអូរត្រាវ"
          />

          <div className="mt-12 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#D4A62A]/30" />

              <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-[#E8D7A5]">
                <HistoryImage
                  src={historyImages.family}
                  alt="រូបគ្រួសារប្រវត្តិសាស្ត្រអូរត្រាវ"
                  className="w-full min-h-[420px] max-h-[600px] object-contain bg-[#EEE8DA]"
                />

                <div className="p-5 text-center border-t border-[#E8D7A5]">
                  <p className="text-xs text-[#D4A62A] font-bold tracking-wider">
                    FAMILY ARCHIVE
                  </p>

                  <p className="mt-1 font-bold text-[#11178F] font-khmer-serif">
                    រូបភាពគ្រួសារក្នុងឯកសារប្រវត្តិសាស្ត្រ
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <article className="group bg-white p-7 rounded-3xl border border-[#E8D7A5] shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#11178F] text-[#F0C75E] flex items-center justify-center font-black">
                    ១
                  </span>

                  <div>
                    <p className="text-xs font-bold text-[#D4A62A]">
                      ព.ស. ២៤០២ • គ.ស. ១៨៥៨
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#11178F] font-khmer-serif">
                      លោកតាថាច់ ទឹត
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-8 text-stone-700">
                  លោកតាថាច់ ទឹត កើតនៅភូមិកញ្ចោងផ្សារ
                  ស្រុកកញ្ចោង ខេត្តព្រះត្រពាំង។
                  លោកជាបុត្រទី៦របស់លោកតាថាច់ ចាន់
                  និងលោកយាយនាម ជ័យ
                  និងបានប្រកបរបរកសិកម្មតាំងពីយុវវ័យ។
                </p>
              </article>

              <article className="group bg-white p-7 rounded-3xl border border-[#E8D7A5] shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-[#D4A62A] text-[#11178F] flex items-center justify-center font-black">
                    ២
                  </span>

                  <div>
                    <p className="text-xs font-bold text-[#D4A62A]">
                      ព.ស. ២៤០៨ • គ.ស. ១៨៦៤
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-[#11178F] font-khmer-serif">
                      លោកយាយថាច់ ធី ម៉ង់
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-8 text-stone-700">
                  លោកយាយថាច់ ធី ម៉ង់ បានរួមរស់
                  និងប្រកបជីវភាពកសិកម្មជាមួយលោកតាថាច់ ទឹត
                  ព្រមទាំងចូលរួមកសាងគ្រួសារ
                  និងសហគមន៍អូរត្រាវ។
                </p>
              </article>

              <div className="p-6 rounded-3xl bg-[#11178F] text-white shadow-xl">
                <div className="flex gap-4">
                  <Heart className="w-7 h-7 text-[#F0C75E] shrink-0" />

                  <div>
                    <h3 className="font-bold text-[#F0C75E] font-khmer-serif">
                      គ្រួសារ និងសហគមន៍
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/80">
                      គ្រួសារនេះមានទំនាក់ទំនងយ៉ាងសំខាន់
                      ជាមួយប្រវត្តិនៃការតាំងទីលំនៅ
                      ការកសាងសហគមន៍ និងការឧបត្ថម្ភព្រះពុទ្ធសាសនា។
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FULL BIOGRAPHY & SETTLEMENT
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="FULL BIOGRAPHY"
            khmerTitle="ជីវប្រវត្តិ និងការកសាងជីវភាព"
            subtitle="ពីកុមារភាព រហូតដល់ការតាំងទីលំនៅនៅអូរត្រាវ"
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-7">
            <article className="rounded-[2rem] border border-[#E8D7A5] bg-[#FFFDF8] p-7 sm:p-9 shadow-sm">
              <div className="text-xs font-black tracking-widest text-[#D4A62A]">លោកតាថាច់ ទឹត</div>
              <h3 className="mt-3 text-2xl font-bold text-[#11178F] font-khmer-serif">
                កុមារភាព និងការអប់រំក្នុងគ្រួសារ
              </h3>
              <div className="mt-5 space-y-4 text-stone-700 leading-8">
                <p>
                  លោកតាថាច់ ទឹត កើតនៅ ព.ស. ២៤០២ ត្រូវនឹង គ.ស. ១៨៥៨
                  នៅភូមិកញ្ចោងផ្សារ ស្រុកកញ្ចោង ខេត្តព្រះត្រពាំង។
                  លោកជាបុត្រទី៦របស់លោកតាថាច់ ចាន់ និងលោកយាយនាម ជ័យ។
                </p>
                <p>
                  តាមឯកសារ លោកមានបងប្អូនរួមឧទរ ៨ នាក់ និងតាំងពីកុមារភាព
                  ត្រូវបានអប់រំឲ្យមានភាពស្លូតបូត សុភាពរាបសា គោរពមាតាបិតា
                  និងចេះជួយការងារកសិកម្មរបស់គ្រួសារ។
                </p>
                <p>
                  នៅ ព.ស. ២៤២៣ / គ.ស. ១៨៧៩ ក្នុងវ័យប្រមាណ ២២ ឆ្នាំ
                  លោកបានរៀបអាពាហ៍ពិពាហ៍ជាមួយលោកយាយថាច់ ធី ម៉ង់
                  តាមទំនៀមទម្លាប់ខ្មែរ។
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#E8D7A5] bg-[#F7F1E2] p-7 sm:p-9 shadow-sm">
              <div className="text-xs font-black tracking-widest text-[#D4A62A]">លោកយាយថាច់ ធី ម៉ង់</div>
              <h3 className="mt-3 text-2xl font-bold text-[#11178F] font-khmer-serif">
                ជីវិត ការងារ និងគុណធម៌
              </h3>
              <div className="mt-5 space-y-4 text-stone-700 leading-8">
                <p>
                  លោកយាយថាច់ ធី ម៉ង់ កើតនៅឆ្នាំជូត ឆស័ក ព.ស. ២៤០៨
                  ត្រូវនឹង គ.ស. ១៨៦៤។ ឯកសាររៀបរាប់ថា លោកយាយមាន
                  អត្តចរិតស្លូតបូត សុភាពរាបសា និងគោរពដំបូន្មានអ្នកមានគុណ។
                </p>
                <p>
                  លោកយាយបានប្រកបជីវភាពកសិកម្ម រួមសុខរួមទុក្ខជាមួយ
                  លោកតាទឹត និងខិតខំអប់រំបុត្រាបុត្រីឲ្យស្គាល់ទាំង
                  ប្រយោជន៍ក្នុងបច្ចុប្បន្ន និងប្រយោជន៍ក្នុងលោកខាងមុខ។
                </p>
                <p>
                  ជីវិតរបស់លោកយាយត្រូវបានកត់ត្រាថា មានទាំងការងារស្រែស្រូវ
                  និងការបរិច្ចាគទ្រព្យដើម្បីធ្វើបុណ្យ និងឧបត្ថម្ភព្រះពុទ្ធសាសនា។
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-[2rem] bg-[#080D67] text-white p-7 sm:p-10">
            <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 items-center">
              <div>
                <p className="text-[#F0C75E] text-xs font-bold tracking-widest">ការតាំងទីលំនៅ</p>
                <h3 className="mt-3 text-2xl sm:text-3xl font-bold font-khmer-serif leading-relaxed">
                  ពីខ្ទមក្បែរមាត់អូរ ទៅជាភូមិអូរត្រាវ
                </h3>
              </div>
              <div className="space-y-4 text-[#F7EED8] leading-8">
                <p>
                  ក្រោយរៀបការបានប្រមាណ ៣–៤ ឆ្នាំ គ្រួសារថ្មីបានចាកចេញ
                  ដើម្បីកសាងជីវភាពដោយខ្លួនឯង និងសង់ខ្ទមលើដីទួលភ្លឺស្រែ
                  ក្បែរមាត់អូរដែលមានត្រាវដុះដេរដាស។
                </p>
                <p>
                  ក្រោយខិតខំប្រឹងប្រែងជាច្រើនឆ្នាំ ជីវភាពកាន់តែប្រសើរ
                  មានស្បៀង សម្ភារៈ និងឧបករណ៍ប្រើប្រាស់គ្រប់គ្រាន់
                  ហើយចាប់ផ្ដើមស្ថាបនាគេហដ្ឋានធំជាងមុន។
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["ឧដ្ឋានសម្បទា", "ដល់ព្រមដោយការខិតខំប្រឹងប្រែងព្យាយាម"],
              ["អារក្ខសម្បទា", "ដល់ព្រមដោយការចេះរក្សា"],
              ["សមជីវិតា", "ចិញ្ចឹមជីវិតដោយសមរម្យ និងស្មើភាព"],
              ["កល្យាណមិត្តតា", "គប់រកមនុស្សល្អជាមិត្ត"],
            ].map(([title, desc], index) => (
              <div key={title} className="rounded-3xl border border-[#E8D7A5] bg-white p-6 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#D4A62A] text-[#11178F] flex items-center justify-center font-black">
                  {index + 1}
                </div>
                <h4 className="mt-4 font-bold text-[#11178F] font-khmer-serif">{title}</h4>
                <p className="mt-2 text-sm leading-7 text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FIRST FAMILIES
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[#F7F1E2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="EARLY SETTLERS"
            khmerTitle="គ្រួសារដំបូងៗនៃភូមិអូរត្រាវ"
            subtitle="ក្រុមគ្រួសារដែលឯកសារកត់ត្រាថាបានមកតាំងទីលំនៅដំបូង"
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "លោកតាចាន់ • យាយផែម",
              "លោកតាចាន់ • យាយញ៉ៀវ",
              "លោកតាសោ • យាយទេព",
              "លោកតាទឹត • យាយម៉ង់",
              "លោកតាគង់ • យាយចាប",
            ].map((family, index) => (
              <div key={family} className="rounded-3xl bg-white p-6 border border-[#E8D7A5] text-center shadow-sm">
                <div className="mx-auto w-11 h-11 rounded-full bg-[#11178F] text-[#F0C75E] flex items-center justify-center font-black">
                  {index + 1}
                </div>
                <p className="mt-4 text-sm font-bold text-[#11178F] leading-7 font-khmer-serif">{family}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <SectionTitle
          title="HISTORICAL TIMELINE"
          khmerTitle="ព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្រសំខាន់ៗ"
          subtitle="ពីជីវប្រវត្តិបុព្វបុរស រហូតដល់ការកកើតវត្តសាសនសាមគ្គីរង្សី"
        />

        <div className="mt-14 relative">
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4A62A] via-[#11178F] to-[#D4A62A]" />

          <div className="space-y-10 md:space-y-14">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={item.year}
                  className="relative grid md:grid-cols-2 gap-8"
                >
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft
                        ? "md:pr-14"
                        : "md:col-start-2 md:pl-14"
                    }`}
                  >
                    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8D7A5] shadow-sm hover:shadow-xl transition-all">
                      <div className="inline-flex px-3 py-1 rounded-full bg-[#11178F]/5 text-[#11178F] text-xs font-bold">
                        {item.year}
                      </div>

                      <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#11178F] font-khmer-serif">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm text-stone-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0">
                    <div className="w-12 h-12 rounded-full bg-[#11178F] border-4 border-[#F0C75E] shadow-lg flex items-center justify-center text-[10px] text-white font-bold">
                      {item.shortYear}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TEMPLE HISTORY
      ===================================================== */}

      <section className="relative py-20 lg:py-24 overflow-hidden bg-[#080D67] text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1B24C9]/30 blur-3xl" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4A62A]/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            theme="dark"
            title="WAT O TRAO"
            khmerTitle="ប្រវត្តិវត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ)"
            subtitle="មជ្ឈមណ្ឌលព្រះពុទ្ធសាសនារបស់សហគមន៍អូរត្រាវ"
          />

          <div className="mt-12 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
            <div>
              <div className="p-3 rounded-[2rem] border border-[#D4A62A]/40 bg-white/5 backdrop-blur">
                <HistoryImage
                  src={historyImages.oldHall}
                  alt="សំណង់ប្រវត្តិសាស្ត្រអូរត្រាវ"
                  className="w-full min-h-[350px] max-h-[500px] object-contain rounded-[1.5rem] bg-white/10"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {/* <HistoryImage
                  src={historyImages.oldBuilding}
                  alt="សំណង់ចាស់ក្នុងបណ្ណសារ"
                  className="w-full h-48 object-contain rounded-2xl bg-white/10 border border-white/10"
                /> */}

                {/* <HistoryImage
                  src={historyImages.templeComplex}
                  alt="ទីអារាម និងសំណង់"
                  className="w-full h-48 object-contain rounded-2xl bg-white/10 border border-white/10"
                /> */}
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A62A]/15 border border-[#D4A62A]/40 text-[#F0C75E] text-xs font-bold">
                <Church className="w-4 h-4" />
                ប្រវត្តិទីអារាម
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl font-bold font-khmer-serif leading-relaxed">
                ពីសាលាឧបោសថ
                <span className="block text-[#F0C75E]">
                  ទៅជាព្រះវិហារវត្តអូរត្រាវ
                </span>
              </h2>

              <div className="mt-7 space-y-5 leading-8 text-[#F7EED8]">
                <p>
                  ក្នុង ព.ស. ២៥២៤ គ.ស. ១៩៨០
                  មានការពិភាក្សាអំពីការកសាងវត្ត
                  និងការរៀបចំសាលាឧបោសថ។
                </p>

                <p>
                  សាលាឧបោសថត្រូវបានសង់ពីឥដ្ឋ ប្រក់ក្បឿង
                  មានបណ្តោយ និងទទឹងប្រមាណ ១០ ម៉ែត្រ
                  និងកម្ពស់ប្រមាណ ១៣ ម៉ែត្រ។
                </p>
              </div>

              {/* <div className="mt-8 p-7 rounded-3xl bg-white/10 backdrop-blur border border-[#D4A62A]/40">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A62A] flex items-center justify-center shrink-0">
                    <Calendar className="w-7 h-7 text-[#11178F]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/60 font-bold">
                      ព្រឹត្តិការណ៍សំខាន់
                    </p>

                    <h3 className="mt-1 text-xl sm:text-2xl font-black text-[#F0C75E] font-khmer-serif">
                      ២៣ កក្កដា ១៩៩៣
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/80">
                      សាលានេះបានក្លាយជាព្រះវិហារ
                      នៃវត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ)។
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUDDHIST CONTRIBUTION
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <SectionTitle
          title="BUDDHIST HERITAGE"
          khmerTitle="ការចូលរួមកសាង និងឧបត្ថម្ភព្រះពុទ្ធសាសនា"
          subtitle="សកម្មភាពសំខាន់ៗដែលបានកត់ត្រាទុកក្នុងប្រវត្តិ"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <article className="p-7 rounded-3xl bg-white border border-[#E8D7A5] shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#11178F] flex items-center justify-center">
              <Landmark className="w-7 h-7 text-[#F0C75E]" />
            </div>

            <p className="mt-5 text-xs font-bold text-[#D4A62A]">
              គ.ស. ១៩១៦
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#11178F] font-khmer-serif">
              ការកសាងព្រះវិហារ
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              គ្រួសារលោកតាទឹត និងលោកយាយម៉ង់
              បានចូលរួមឧបត្ថម្ភការកសាងព្រះវិហារថ្មី
              ពីថ្ម និងឥដ្ឋ។
            </p>
          </article>

          <article className="p-7 rounded-3xl bg-white border border-[#E8D7A5] shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#11178F] flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-[#F0C75E]" />
            </div>

            <p className="mt-5 text-xs font-bold text-[#D4A62A]">
              គ.ស. ១៩២៥
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#11178F] font-khmer-serif">
              ការកសាងសាលាទាន
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              សាលាទានត្រូវបានប្រើសម្រាប់តម្កល់ព្រះត្រៃបិដក
              គម្ពីរ សាស្ត្រាស្លឹករឹត និងក្រាំង។
            </p>
          </article>

          <article className="p-7 rounded-3xl bg-white border border-[#E8D7A5] shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#11178F] flex items-center justify-center">
              <Heart className="w-7 h-7 text-[#F0C75E]" />
            </div>

            <p className="mt-5 text-xs font-bold text-[#D4A62A]">
              មរតកសាសនា
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#11178F] font-khmer-serif">
              ការរក្សាកេរដំណែល
            </h3>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              ការចូលរួមរបស់បុព្វបុរសបានក្លាយជាផ្នែកមួយ
              នៃប្រវត្តិសាសនា និងសហគមន៍អូរត្រាវ។
            </p>
          </article>
        </div>
      </section>


      {/* =====================================================
          110 TEMPLES & CHARITY LEGACY
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[#11178F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            theme="dark"
            title="MERIT & LEGACY"
            khmerTitle="បុណ្យ ១១០ វត្ត និងកេរដំណែលសាសនា"
            subtitle="ការធ្វើបុណ្យឧទ្ទិសកុសល និងការបរិច្ចាគដែលបានកត់ត្រាទុក"
          />

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            <article className="lg:col-span-2 rounded-[2rem] bg-white/10 border border-white/15 p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A62A] text-[#11178F] flex items-center justify-center">
                  <Church className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[#F0C75E] text-xs font-bold">បន្ទាប់ពី គ.ស. ១៩២៦</p>
                  <h3 className="mt-1 text-2xl font-bold font-khmer-serif">ការធ្វើបុណ្យ ១១០ វត្ត</h3>
                </div>
              </div>
              <div className="mt-6 space-y-4 leading-8 text-[#F7EED8]">
                <p>
                  ក្រោយលោកតាទឹតអនិច្ចកម្មបាន ៣ ឆ្នាំ លោកយាយម៉ង់បានប្រមូល
                  កូនចៅមកពិភាក្សាអំពីការធ្វើបុណ្យឧទ្ទិសកុសលជូនបុព្វការីជន។
                </p>
                <p>
                  តាមឯកសារ ខេត្តព្រះត្រពាំងនៅសម័យនោះមាន ១១០ វត្ត។
                  គ្រួសារបានរៀបចំស្លាកលេខពី ១ ដល់ ១១០ ហើយធ្វើបុណ្យ
                  មួយឆ្នាំមួយវត្ត ដោយអារាធនាព្រះសង្ឃពីវត្តដែលត្រូវលេខ
                  មកកាន់គេហដ្ឋាន។
                </p>
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#D4A62A] text-[#080D67] p-7 sm:p-9">
              <Landmark className="w-9 h-9" />
              <div className="mt-5 text-5xl font-black">១០</div>
              <div className="mt-1 text-xl font-black font-khmer-serif">ហិកតា</div>
              <p className="mt-5 leading-8 text-sm font-medium">
                លោកយាយ និងកូនៗបានសម្រេចទុកដីកេរកោះ ១០ ហិកតា
                (១០០ កុងដី) សម្រាប់ធ្វើបុណ្យពុទ្ធាភិសេក
                និងដារបង្សុកូលជាប្រចាំ។
              </p>
            </article>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <article className="rounded-3xl bg-white/10 border border-white/15 p-7">
              <p className="text-[#F0C75E] font-bold text-sm">គ.ស. ១៩២៩</p>
              <h3 className="mt-2 text-xl font-bold font-khmer-serif">សមណកុដិ «សាលាឆនេត្រ»</h3>
              <p className="mt-4 text-sm leading-8 text-white/80">
                ឯកសារកត់ត្រាថា លោកយាយបានចូលរួមកសាងសមណកុដិ
                ឈ្មោះ «សាលាឆនេត្រ» នៅវត្តឧណ្ណាលោម រាជធានីភ្នំពេញ។
              </p>
            </article>
            <article className="rounded-3xl bg-white/10 border border-white/15 p-7">
              <p className="text-[#F0C75E] font-bold text-sm">ព.ស. ២៤៨៥ • គ.ស. ១៩៤១</p>
              <h3 className="mt-2 text-xl font-bold font-khmer-serif">បច្ឆិមវ័យលោកយាយម៉ង់</h3>
              <p className="mt-4 text-sm leading-8 text-white/80">
                លោកយាយថាច់ ធី ម៉ង់ បានទទួលមរណភាពក្នុងជន្មាយុ
                ៧៧ ឆ្នាំ។ ឯកសាររំលឹកជីវិតលោកយាយតាមរយៈការងារ
                កសិកម្ម ការអប់រំកូនចៅ និងការឧបត្ថម្ភព្រះពុទ្ធសាសនា។
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          TREASURE ORAL ACCOUNT
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#D4A62A]/50 bg-gradient-to-br from-[#FFFDF8] to-[#F7F1E2] p-7 sm:p-10 shadow-sm">
            <div className="flex items-start gap-5">
              <Quote className="w-10 h-10 text-[#D4A62A] shrink-0" />
              <div>
                <p className="text-xs font-black tracking-widest text-[#D4A62A]">ORAL / FAMILY ACCOUNT</p>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#11178F] font-khmer-serif">
                  រឿងកំណប់ទ្រព្យតាមការរៀបរាប់ក្នុងឯកសារ
                </h2>
                <div className="mt-6 space-y-4 text-stone-700 leading-8">
                  <p>
                    ឯកសារមានកំណត់ត្រាមួយដែលបានបន្តតាមការរៀបរាប់របស់សាច់ញាតិថា
                    ថ្ងៃមួយលោកតាទឹតចុះទៅរែកទឹកពីអណ្ដូងសម្រាប់ស្រោចដំណាំ
                    ហើយបានប្រទះដុំមាសមួយដុំធំ។
                  </p>
                  <p>
                    តាមការរៀបរាប់នោះ ព្រឹត្តិការណ៍នេះបានធ្វើឲ្យជីវភាពគ្រួសារ
                    កាន់តែមានទ្រព្យ ហើយគ្រួសារបានលៃលកទ្រព្យមួយផ្នែក
                    សម្រាប់ធ្វើបុណ្យ និងការកសាងព្រះពុទ្ធសាសនា។
                  </p>
                </div>
                <div className="mt-6 rounded-2xl bg-[#11178F]/5 border border-[#11178F]/10 p-5 text-sm leading-7 text-stone-600">
                  កំណត់សម្គាល់៖ ផ្នែកនេះត្រូវបានបង្ហាញជាការរៀបរាប់ក្នុងឯកសារ
                  មិនមែនជាការអះអាងថាបានផ្ទៀងផ្ទាត់ដោយប្រភពឯករាជ្យទេ។
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      // ============================================================
// ប្រវត្តិភ្លុកដំរី
// ============================================================

<section className="py-20 lg:py-24 bg-[#F7F1E2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT — HISTORY CONTENT */}
      <div>
        <div className="inline-flex items-center gap-2 text-[#1B24C9] font-bold text-sm">
          <Landmark className="w-5 h-5" />
          មរតកប្រវត្តិសាស្ត្រ
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#11178F] font-khmer-serif">
          ប្រវត្តិភ្លុកដំរី
        </h2>

        <KhmerDivider className="justify-start" />

        <div className="mt-7 space-y-5 text-stone-700 leading-8">
          <p>
            តាមឯកសារប្រវត្តិ មានភ្លុកដំរីចំនួន ៣ គូ។
            មួយគូត្រូវបានប្រគេនទៅវត្តកញ្ចោងភ្នំពេញ
            និងមួយគូទៀតប្រគេនទៅវត្តចម្បកមាសខឿន។
          </p>

          <p>
            ភ្លុកទាំងពីរគូនោះត្រូវបានបាត់បង់ដោយភ្លើង
            ក្នុងសម័យសង្គ្រាម។
          </p>

          <p>
            ភ្លុកមួយគូទៀតត្រូវបានរក្សាទុកក្នុងគ្រួសារ
            ហើយក្រោយមកត្រូវបាននាំមកតម្កល់ទុក
            នៅវត្តអូរត្រាវ ដើម្បីរក្សាទុកជាមរតកប្រវត្តិសាស្ត្រ។
          </p>
        </div>

        <div className="mt-7 flex items-start gap-3 p-5 rounded-2xl bg-white border border-[#E8D7A5]">
          <ScrollText className="w-6 h-6 text-[#D4A62A] shrink-0" />

          <p className="text-sm text-stone-600 leading-7">
            រូបភាពខាងស្តាំជារូបក្នុងបណ្ណសារប្រវត្តិសាស្ត្រ។
            Caption ត្រូវបានរក្សាទុកជាទូទៅ
            ដើម្បីជៀសវាងការកំណត់អត្តសញ្ញាណវត្ថុខុសពីឯកសារដើម។
          </p>
        </div>
      </div>

      {/* RIGHT — ELEPHANT TUSK IMAGE */}
      <div className="relative">
        <div className="absolute -inset-3 rounded-[2rem] border border-[#D4A62A]/30" />

        <div className="relative p-5 bg-white rounded-[2rem] border border-[#D4A62A]/50 shadow-xl">

          <div className="overflow-hidden rounded-2xl bg-[#F7F1E2]">
            <img
              src={elephantTuskImage}
              alt="ភ្លុកដំរី វត្តអូរត្រាវ"
              className="w-full aspect-video object-cover rounded-2xl"
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs font-bold tracking-wider text-[#D4A62A]">
              HISTORICAL OBJECT
            </p>

            <p className="mt-1 font-bold text-[#11178F] font-khmer-serif">
              ភ្លុកដំរី មរតកប្រវត្តិសាស្ត្រ
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          TA KHLA
      ===================================================== */}

      <section className="relative py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="ORAL HISTORY"
            khmerTitle="ប្រវត្តិសង្ខេប «តាខ្លា»"
            subtitle="រឿងដែលបានបន្តប្រាប់តាមមនុស្សចាស់ក្នុងភូមិ"
          />

          <article className="relative mt-12 overflow-hidden bg-[#11178F] text-white p-7 sm:p-10 lg:p-12 rounded-[2rem] shadow-xl">
            <Quote className="absolute -right-5 -top-5 w-40 h-40 text-white/5" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#D4A62A] flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-[#11178F]" />
              </div>

              <div className="mt-7 space-y-5 text-[#F7EED8] leading-8">
                <p>
                  តាមការរៀបរាប់ក្នុងឯកសារ នៅសម័យបារាំងគ្រប់គ្រង
                  តំបន់ព្រៃ និងភូមិនានានៅពេលនោះ
                  មានសត្វសាហាវ រួមទាំងសត្វខ្លា។
                </p>

                <p>
                  បុរសម្នាក់ឈ្មោះ សុខ
                  បានឃើញខ្លាមួយក្បាលកំពុងដេក
                  ហើយបានទៅប្រាប់លោកតាទឹត។
                  លោកតាទឹត និងលោកតាម៉ក់
                  បានធ្វើដំណើរតាមផ្លូវទឹកទៅកាន់ទីនោះ។
                </p>

                <p>
                  តាមរឿងដែលចាស់ៗក្នុងភូមិបន្តប្រាប់តៗគ្នា
                  លោកតាទឹតបានវាយខ្លានោះបានជោគជ័យ។
                  ដំណឹងនេះបានឮដល់អាជ្ញាធរនាសម័យនោះ
                  ហើយឯកសារក៏បានកត់ត្រារឿងនេះទុកជាផ្នែកមួយ
                  នៃប្រវត្តិរបស់លោកតា។
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 text-sm text-white/60">
                កំណត់សម្គាល់៖ ផ្នែកនេះជាប្រវត្តិដែលបានបន្តប្រាប់
                តាមមនុស្សចាស់ក្នុងភូមិ និងត្រូវបានកត់ត្រាក្នុងឯកសារ។
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          GENEALOGY
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[#F7F1E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="GENEALOGY"
            khmerTitle="ពង្សាវតារ និងកូនចៅ"
            subtitle="បុត្រា និងបុត្រីរបស់លោកតាថាច់ ទឹត និងលោកយាយថាច់ ធី ម៉ង់"
          />

          <div className="mt-12 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-start">
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 border border-[#E8D7A5] shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#11178F] flex items-center justify-center">
                  <Users className="w-7 h-7 text-[#F0C75E]" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#11178F] font-khmer-serif">
                    បុត្រា បុត្រី ១១ នាក់
                  </h3>

                  <p className="text-sm text-stone-500 mt-1">
                    ប្រុស ៦ នាក់ • ស្រី ៥ នាក់
                  </p>
                </div>
              </div>

              <div className="mt-7 grid sm:grid-cols-2 gap-3">
                {children.map((child, index) => (
                  <div
                    key={child}
                    className="group flex items-center gap-3 p-4 rounded-2xl bg-[#11178F]/5 border border-[#11178F]/10 hover:bg-[#11178F] transition-all"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#D4A62A] flex items-center justify-center text-[10px] font-black text-[#11178F] shrink-0">
                      {index + 1}
                    </span>

                    <span className="text-sm text-stone-700 group-hover:text-white transition-colors">
                      {child.replace(/^[០-៩\d]+\.\s*/, "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#D4A62A]/30" />

              <div className="relative p-4 bg-white rounded-[2rem] border border-[#D4A62A]/50 shadow-xl">
                <HistoryImage
                  src={historyImages.genealogy}
                  alt="ឯកសារពង្សាវតាររបស់គ្រួសារ"
                  className="w-full min-h-[450px] max-h-[680px] object-contain rounded-2xl bg-stone-50"
                />

                <div className="p-4 text-center">
                  <p className="text-xs font-bold text-[#D4A62A]">
                    GENEALOGY ARCHIVE
                  </p>

                  <p className="mt-1 font-bold text-[#11178F] font-khmer-serif">
                    ឯកសារពង្សាវតារ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SALA CHHANET — WAT OUNALOM, PHNOM PENH
      ===================================================== */}

      <section className="py-20 lg:py-24 bg-[#07106F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E9B91F]/40 bg-[#E9B91F]/10">
                <Landmark className="w-4 h-4 text-[#F0C75E]" />
                <span className="text-xs font-black tracking-[0.18em] text-[#F0C75E]">
                  ព.ស. ២៤៧៣ • គ.ស. ១៩២៩
                </span>
              </div>

              <p className="mt-7 text-xs font-black tracking-[0.24em] text-[#F0C75E]">
                SALA CHHANET • WAT OUNALOM
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-khmer-serif">
                សាលាឆនេត្រ
              </h2>

              <h3 className="mt-3 text-xl sm:text-2xl font-bold text-[#F0C75E] font-khmer-serif">
                មរតករបស់អ្នកភូមិអូរត្រាវនៅវត្តឧណ្ណាលោម
              </h3>

              <div className="mt-7 space-y-5 text-sm sm:text-base leading-8 text-white/82">
                <p>
                  តាមឯកសារប្រវត្តិសាស្ត្រ នៅពុទ្ធសករាជ
                  <strong className="text-white"> ២៤៧៣ </strong>
                  ត្រូវនឹងគ្រឹស្តសករាជ
                  <strong className="text-white"> ១៩២៩ </strong>
                  អ្នកភូមិអូរត្រាវបានរួមគ្នាកសាង
                  <strong className="text-[#F0C75E]"> កុដិចំនួន ១ </strong>
                  ដែលមានឈ្មោះថា
                  <strong className="text-[#F0C75E]"> «សាលាឆនេត្រ» </strong>។
                </p>

                <p>
                  កុដិនេះស្ថិតនៅ
                  <strong className="text-white">
                    {" "}វត្តឧណ្ណាលោម រាជធានីភ្នំពេញ
                  </strong>
                  ។ ប្រវត្តិនេះបង្ហាញពីការរួមសាមគ្គី និងការចូលរួមរបស់
                  អ្នកភូមិអូរត្រាវក្នុងការឧបត្ថម្ភ និងទ្រទ្រង់ព្រះពុទ្ធសាសនា។
                </p>

                <p className="text-white/65">
                  រូបភាពខាងស្តាំជារូបដែលភ្ជាប់មកជាមួយឯកសារប្រវត្តិសាស្ត្រ
                  ស្តីពីកុដិ និងទីតាំងនៅវត្តឧណ្ណាលោម។
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  ["ឆ្នាំកសាង", "ព.ស. ២៤៧៣ / គ.ស. ១៩២៩"],
                  ["សំណង់", "កុដិ ១"],
                  ["ឈ្មោះ", "សាលាឆនេត្រ"],
                  ["អ្នកកសាង", "អ្នកភូមិអូរត្រាវ"],
                  ["ទីតាំង", "វត្តឧណ្ណាលោម"],
                  ["រាជធានី", "ភ្នំពេញ"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/[0.07] p-4"
                  >
                    <div className="text-[10px] font-black tracking-wider text-[#F0C75E]">
                      {label}
                    </div>
                    <div className="mt-2 text-sm font-bold text-white font-khmer-serif">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <figure className="overflow-hidden rounded-[2rem] border border-[#D4A62A]/45 bg-white/10 shadow-2xl">
                <div className="bg-white p-3">
                  <HistoryImage
                    src="/assets/history/archive/s1_image6.png"
                    alt="ទីតាំងកុដិសាលាឆនេត្រនៅវត្តឧណ្ណាលោម"
                    className="w-full max-h-[390px] object-contain rounded-2xl"
                  />
                </div>
                <figcaption className="px-5 py-4 text-center text-xs sm:text-sm leading-6 text-white/75">
                  ទីតាំងកុដិ «សាលាឆនេត្រ» ស្ថិតនៅវត្តឧណ្ណាលោម
                  រាជធានីភ្នំពេញ
                </figcaption>
              </figure>

              <div className="grid grid-cols-2 gap-4">
                <figure className="overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                  <div className="aspect-[4/3] bg-white p-2">
                    <HistoryImage
                      src="/assets/history/archive/s1_image5.png"
                      alt="រូបសំណង់ដែលភ្ជាប់ក្នុងឯកសារសាលាឆនេត្រ"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <figcaption className="p-3 text-[11px] leading-5 text-white/65">
                    រូបសំណង់ក្នុងឯកសារប្រវត្តិសាលាឆនេត្រ
                  </figcaption>
                </figure>

                <figure className="overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                  <div className="aspect-[4/3] bg-white p-2">
                    <HistoryImage
                      src="/assets/history/archive/s1_image7.png"
                      alt="ស្លាកដែលភ្ជាប់ក្នុងឯកសារសាលាឆនេត្រ"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <figcaption className="p-3 text-[11px] leading-5 text-white/65">
                    ស្លាក/ភស្តុតាងរូបភាពដែលភ្ជាប់ក្នុងឯកសារ
                  </figcaption>
                </figure>
              </div>

              <div className="rounded-2xl border border-[#D4A62A]/35 bg-[#D4A62A]/10 p-4 flex gap-3">
                <ScrollText className="w-5 h-5 shrink-0 text-[#F0C75E] mt-0.5" />
                <p className="text-xs leading-6 text-white/70">
                  ប្រភព៖ ឯកសារប្រវត្តិសាស្ត្រដែលបានរក្សាទុក និងរូបភាពភ្ជាប់
                  ក្នុងផ្នែកស្តីពីសាលាឆនេត្រ។
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOURCE / COMPILER
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.3rem] border border-[#D4A62A]/30" />

          <div className="relative bg-white rounded-[2rem] border border-[#D4A62A]/50 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-[320px_1fr]">
              <div className="relative bg-[#F7F1E2]">
                <HistoryImage
                  src={historyImages.compiler}
                  alt="ភិក្ខុរក្ខិតមនោ ថាច់ លឹមស៊ី ម៉័ន"
                  className="w-full h-full min-h-[360px] object-contain"
                />

                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm font-bold font-khmer-serif">
                    អ្នករៀបរៀងឯកសារប្រវត្តិ
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="w-14 h-14 rounded-2xl bg-[#11178F] flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-[#F0C75E]" />
                </div>

                <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#1B24C9]">
                  HISTORICAL SOURCE
                </p>

                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#11178F] font-khmer-serif">
                  ប្រភពឯកសារ និងអ្នករៀបរៀង
                </h2>

                <p className="mt-6 text-stone-700 leading-8">
                  ប្រវត្តិនេះត្រូវបានរក្សាទុក និងបន្តចម្លងពីឯកសារ
                  របស់បុព្វបុរស និងព្រឹទ្ធាចារ្យ
                  ដើម្បីរក្សាព័ត៌មានអំពីត្រកូល
                  ភូមិអូរត្រាវ និងប្រវត្តិសាសនា
                  សម្រាប់កូនចៅជំនាន់ក្រោយ។
                </p>

                <div className="mt-7 p-6 rounded-2xl bg-gradient-to-r from-[#11178F]/5 to-[#D4A62A]/10 border border-[#D4A62A]/30">
                  <p className="text-xs font-bold text-[#D4A62A]">
                    អ្នករៀបរៀងប្រវត្តិ និងបោះពុម្ព
                  </p>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#11178F] font-khmer-serif">
                    ចៅអធិការ ភិក្ខុរក្ខិតមនោ ថាច់ លឹមស៊ី «ម៉័ន»
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#1B24C9]">
                    ព.ស. ២៥៦៦ • គ.ស. ២០២៣
                  </p>
                </div>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    ["១៩៦៦", "ព្រះព្រឹទ្ធាចារ្យ ថាច់ ហ័យ ស្រាវជ្រាវ និងកត់ត្រាពង្សាវតារ"],
                    ["១៩៩៦", "ឧបាសក ថាច់ សុខ បានចម្លងឯកសារបន្ត"],
                    ["២០០៨", "ភិក្ខុរក្ខិតមនោ ថាច់ លឹមស៊ី «ម៉័ន» បានចម្លងបន្ត"],
                    ["២០០៩", "ឯកសារត្រូវបានរៀបចំជាអក្សរពុម្ពកុំព្យូទ័រ"],
                    ["២០២៣", "រៀបរៀង និងបោះពុម្ពជំនាន់ដែលប្រើជាប្រភពនេះ"],
                  ].map(([year, note]) => (
                    <div key={year} className="rounded-2xl border border-[#E8D7A5] bg-[#FFFDF8] p-4">
                      <div className="font-black text-[#D4A62A]">{year}</div>
                      <p className="mt-2 text-xs leading-6 text-stone-600">{note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-start gap-4">
                  <Heart className="w-6 h-6 text-[#D4A62A] shrink-0 mt-1" />

                  <p className="text-sm text-stone-600 leading-7">
                    សូមរក្សាឯកសារ រូបភាព និងពង្សាវតារទាំងនេះ
                    ជាមរតកសម្រាប់សហគមន៍
                    និងកូនចៅជំនាន់ក្រោយ។
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* COMPLETE HISTORICAL PHOTO ARCHIVE */}
      <section className="py-20 lg:py-24 bg-[#050947] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-[#D4A62A]/15 border border-[#D4A62A]/40 flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-[#F0C75E]" />
            </div>
            <p className="mt-5 text-xs font-black tracking-[0.25em] text-[#F0C75E]">HISTORICAL PHOTO ARCHIVE</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold font-khmer-serif">
              បណ្ណសាររូបភាពប្រវត្តិសាស្ត្រ
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base leading-8 text-white/75">
              បណ្ណសាររូបភាពតែមួយសម្រាប់ទំព័រនេះ។ រូបដែលមិនមានព័ត៌មានកំណត់ច្បាស់
              ត្រូវបានដាក់ចំណងជើងទូទៅ ដើម្បីមិនកំណត់ឈ្មោះមនុស្ស ទីកន្លែង ឬវត្ថុខុសពីប្រភព។
            </p>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-2">
            {[["all","ទាំងអស់"],["source1","ឯកសារ ១"],["source2","ឯកសារ ២"]].map(([value,label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setArchiveFilter(value)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold border transition ${
                  archiveFilter === value
                    ? "bg-[#D4A62A] border-[#D4A62A] text-[#080D67]"
                    : "bg-white/5 border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredArchiveImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedArchiveImage(image)}
                className="group text-left overflow-hidden rounded-2xl bg-white/10 border border-white/10 hover:border-[#D4A62A]/70 transition shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <HistoryImage
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-3">
                  <div className="text-[10px] font-bold text-[#F0C75E]">
                    ARCHIVE {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-1 text-xs leading-5 text-white/80 line-clamp-2">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center text-xs text-white/50">
            បង្ហាញ {filteredArchiveImages.length} រូប
          </div>
        </div>
      </section>

      {selectedArchiveImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setSelectedArchiveImage(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] rounded-3xl overflow-hidden bg-[#111] border border-white/20 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <button
              type="button"
              onClick={() => setSelectedArchiveImage(null)}
              className="absolute z-10 top-4 right-4 w-11 h-11 rounded-full bg-black/70 border border-white/20 text-white text-2xl"
              aria-label="បិទរូបភាព"
            >
              ×
            </button>
            <div className="p-3 sm:p-5 bg-black flex items-center justify-center">
              <HistoryImage
                src={selectedArchiveImage.src}
                alt={selectedArchiveImage.title}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-5 bg-[#080D67] text-center">
              <p className="text-xs font-bold text-[#F0C75E]">HISTORICAL ARCHIVE</p>
              <p className="mt-2 text-sm sm:text-base font-bold text-white font-khmer-serif">
                {selectedArchiveImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CONTINUING RESEARCH
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-[2rem] bg-[#080D67] text-white p-8 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-[1fr_.8fr] gap-10 items-center">
            <div>
              <p className="text-xs font-black tracking-[0.2em] text-[#F0C75E]">
                CONTINUING RESEARCH
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold font-khmer-serif">
                ប្រវត្តិដែលត្រូវបន្តស្រាវជ្រាវ
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-8 text-white/80">
                ឯកសារប្រភពផ្ទាល់បានបញ្ជាក់ថា ពង្សាវតារមិនទាន់អាចប្រមូល
                ចៅទួតគ្រប់សាខាបានពេញលេញទេ។ ដូច្នេះគេហទំព័រនេះរក្សា
                ផ្នែកនេះជាបណ្ណសារបើកចំហសម្រាប់បន្ថែមព័ត៌មានដែលមានប្រភពច្បាស់លាស់
                នៅពេលក្រោយ។
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["១១", "បុត្រាបុត្រី"],
                ["១១០", "វត្តក្នុងកំណត់ត្រា"],
                ["១០", "ហិកតាដីកេរកោះ"],
                ["១៨៨៣", "កំណើតភូមិ"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-white/10 border border-white/15 p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#F0C75E]">{value}</div>
                  <div className="mt-2 text-xs text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#11178F] to-[#1B24C9] text-white text-center p-10 sm:p-14 shadow-xl">
          <img
            src={siteSettings.officialLogo || watOuTraoLogo}
            alt={templeName}
            className="w-20 h-20 mx-auto object-contain rounded-full bg-white p-1 border-2 border-[#D4A62A]"
          />

          <h2 className="mt-6 text-2xl sm:text-3xl font-bold font-khmer-serif">
            រក្សាប្រវត្តិសាស្ត្រ ដើម្បីកូនចៅជំនាន់ក្រោយ
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-white/80 leading-8">
            ប្រវត្តិ រូបភាព ឯកសារ និងមរតកទាំងនេះ
            ជាផ្នែកមួយនៃការចងចាំរបស់សហគមន៍អូរត្រាវ
            និង {templeName}។
          </p>

          <div className="max-w-md mx-auto mt-6">
            <LotusDivider
              goldColor="#D4A62A"
              maroon="#D4A62A"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;