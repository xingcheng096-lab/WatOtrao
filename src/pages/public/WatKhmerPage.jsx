import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  MapPin,
  Landmark,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  X,
  Sparkles,
  ImageOff,
} from "lucide-react";

import { KhmerPatternBackground } from "../../components/traditional/LotusDivider";

/* =========================================================
   TEMPLE IMAGES
========================================================= */

const watImages = import.meta.glob(
  "../../assets/wats/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    import: "default",
  },
);
/* =========================================================
   IMAGE HELPERS
========================================================= */

const normalizeWatName = (value) =>
  String(value || "")
    .normalize("NFC")
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/\s+/g, "")
    .trim();

const IMAGE_NAME_ALIASES = {
  // New official name -> old image filename/name

  "វត្តកញ្ចោងកំពង់លាវ (កញ្ចោងកំពង់លាវ)":
    "វត្តកញ្ចោងកំពង់លាវ (កញ្ចោងលិច)",

  "វត្តនិគ្រោធកំពង់ក្សាន្ត (កំពង់សាយ)":
    "វត្តនិគ្រោធ (កំពង់ក្សាន្ត)",

  "វត្តបូទុំសេរីកោះកែវ (កោះទន្លាប់)":
    "វត្តបទុមកោះកែវ (កោះទន្លាប់)",

  "វត្តចម្ប៉ាបុរីសិរីតរាជ្យ (ក្រ)":
    "វត្តចម្ប៉ាបុរីសិរីតារាជ (ក្រ)",

  "វត្តគោករាជសីមារាម (គោក)":
    "វត្តគោគរាជសីមា (គោគ)",

  "វត្តប្រទក្សិលានិគ្រោធ (ចុងព្រៃ)":
    "វត្តទក្ខិណានិគ្រោធ (ចុងព្រៃ)",

  "វត្តសុវណ្ណនិគ្រោធ អូរជ្រៃ (ជ្រៃភេ)":
    "វត្តសុវណ្ណនិគ្រោធ (ជ្រៃភេ)",

  "វត្តបទុមវង្សកំពង់ថ្ម (ទ័ពថ្ម)":
    "វត្តពោធិវង្ស (ទ័ពថ្ម)",

  "វត្តកំពង់ពោធិព្រឹក្ស (បឹងរ៉ាយចាស់) (បង្រៃ)":
    "វត្តកំពង់ពោធិព្រឹក្ស (បង្រៃចាស់)",

  "វត្តព្រះពន្លាជ័យ (បន្លា) - (ពន្លា)":
    "វត្តព្រះពន្លាជ័យ (ពន្លា)",

  "វត្តសុវណ្ណមាលីព្រះប្រាង្គ (ប្រាង្គ)":
    "វត្តសុវណ្ណមាលី (ព្រះប្រាង្គ)",

  "វត្តភាគរាជដួងកែវកំពង់ដូង (ផ្នោរដូង)":
    "វត្តភាគរាជដួងកែវ (ផ្នោដូង)",

  "វត្តសិរីវង្សារាម (ផ្នោរអំពូងថ្មី)":
    "វត្តសេរីវង្សារាម (ផ្នោអំពូង)",

  "វត្តសម្បូណ៍រិទ្ធិស័ក (សម្បួរ)":
    "វត្តសម្បូណ៌សំរឹទ្ធិស័ក (សំបូរ)",

  "វត្តសម្បួររង្សី (សម្បួរ)":
    "វត្តសម្បូរង្សី (សម្បូរ)",

  "វត្តសុវណ្ណមុនីនាគារាម (ស្រះនាគ)":
    "វត្តសុវណ្ណមុនីនាគារាម (ស្រះនាគ)",

  "វត្តពោធិព្រឹកគិរីវង្ស (ស្វាយសៀមចាស់)":
    "វត្តពោធិព្រឹក្សគិរីវង្ស (ស្វាយសៀមចាស់)",

  "វត្តពោធិព្រឹកគិរីវង្សារាម (ស្វាយសៀមថ្មី)":
    "វត្តពោធិព្រឹក្សគីរីវង្សារាម (ស្វាយសៀមថ្មី)",

  "វត្តពោធិចុឡាមុនី (ឥដ្ឋ)":
    "វត្តពោធិចុឡាមណីចេតិយ (ឥដ្ឋ)",

  "វត្តមហាវន្ត (អូរសំពៅ)":
    "វត្តពោធិវ័ន (អូរសំពៅ)",

  "វត្តលាយលក្ខកងចក្ការាម (អំពាំងសាន)":
    "វត្តលាយលក្ខណ៍កងចក្ការាម (អំពាំងសាន)",

   
    

  
};

const getWatImage = (nameKh) => {
  const targetName = normalizeWatName(nameKh);

  // 1. រកតាមឈ្មោះធម្មតាមុន
  let foundImage = Object.entries(watImages).find(([path]) => {
    const fileName = decodeURIComponent(path.split("/").pop() || "");

    return normalizeWatName(fileName) === targetName;
  });

  if (foundImage) {
    return foundImage[1];
  }

  // 2. បើឈ្មោះថ្មីខុស spelling ពី filename ចាស់
  const oldImageName = IMAGE_NAME_ALIASES[targetName];

  if (oldImageName) {
    foundImage = Object.entries(watImages).find(([path]) => {
      const fileName = decodeURIComponent(path.split("/").pop() || "");

      return normalizeWatName(fileName) === normalizeWatName(oldImageName);
    });

    if (foundImage) {
      return foundImage[1];
    }
  }

  return "";
};

/* =========================================================
   HELPERS
========================================================= */

const slugifyWat = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\u1780-\u17ff]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* =========================================================
   TEMPLE DATA
   PREAH TRAPEANG — 143 TEMPLES
========================================================= */

const RAW_TEMPLES = [
  [1, "វត្តពោធិសាលរាជ (កំពង់)", 1186, 642, "ទីរួមខេត្ត", "Thi Xa"],
  [2, "វត្តចម្បកមាស (ខឿន)", 1892, 1348, "ទីរួមខេត្ត", "Thi Xa"],
  [3, "វត្តនិគ្រោធ (កំពង់ក្សាន្ត)", 2287, 1743, "ទីរួមខេត្ត", "Thi Xa"],
  [4, "វត្តនាគវនារាម (ខ្ទឹង)", 2029, 1485, "ទីរួមខេត្ត", "Thi Xa"],

  [5, "វត្តពិសីវរារាម (ពិសី)", 2244, 1700, "ស្រុកកន្លង់", "Huyen Cang Long"],
  [6, "វត្តពិសេសារាម (កន្លែងសេះ)", 2044, 1500, "ស្រុកកន្លង់", "Huyen Cang Long"],
  [7, "វត្តសង្វាឫទ្ធិស័ក (ក្អែប)", 2234, 1690, "ស្រុកកន្លង់", "Huyen Cang Long"],
  [8, "វត្តពោធិចុឡាមណីចេតិយ (ឥដ្ឋ)", 2085, 1541, "ស្រុកកន្លង់", "Huyen Cang Long"],

  [9, "វត្តជោវ័នសង្វាមាស (បាត់ក្រមា)", 2302, 1758, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [10, "វត្តព្រលានមានជ័យ (ចុងព្រលាន)", 2321, 1777, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [11, "វត្តមង្គលឧទ្យាន (កិញ្ញាង)", 2504, 1960, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [12, "វត្តវេឡុវ័ន (ឫស្សីស្រុក)", 2069, 1525, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [13, "វត្តទេពឧទ្យាន (តាដេវ)", 2254, 1710, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [14, "វត្តមុនីរង្សី (មេពាំង)", 2395, 1851, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [15, "វត្តរតនទីបារាមកោះកែវ (អូរមិច)", 2201, 1657, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [16, "វត្តភិរម្យរាជ (ភិរម្យសុខ)", 1641, 1097, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],

  // FIX: 1661 -> 1667
  [17, "វត្តសង្វរថ្មមាស (អូរទទឹង)", 2211, 1667, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],

  [18, "វត្តពោធិវ័ន (អូរសំពៅ)", 2512, 1968, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [19, "វត្តសាលវ័ន (តាអោក)", 2280, 1736, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [20, "វត្តរតនសាគរ (ព្រើម)", 2516, 1972, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [21, "វត្តពោធិសិរី (ចុងផ្នោរ)", 2447, 1903, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [22, "វត្តបទុមសាគរ (កំពង់ស្ពាន)", 2362, 1818, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [23, "វត្តមហាពោធិវ័ន (តាថៀវ)", 1913, 1369, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [24, "វត្តសម្បូរង្សី (សម្បូរ)", 917, 373, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [25, "វត្តមជ្ឈិមារាម (កណ្តាល)", 1861, 1317, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [26, "វត្តពោធិភិរម្យរង្សី (ចុងបឹង)", 2431, 1887, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [27, "វត្តពោធិមានជ័យសិរីឧត្តម (ពោធិ៍ធំ)", 2300, 1756, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [28, "វត្តបទុមក្រពុំរ័ត្នកេសរបុប្ផាចម្ប៉ាមាស (សំណឹងធំ)", 1908, 1364, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [29, "វត្តសមោធារាម (កំបាំងបាត់)", 2224, 1680, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],
  [30, "វត្តជ្រោយប្រាសាទ (ចុងខ្សាច់)", 2120, 1576, "ស្រុកកំពង់ស្ពាន", "Huyen Cau Ke"],

  [31, "វត្តពោធិវង្សកំពង់ដូង (ផ្នោដូង)", 2263, 1719, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [32, "វត្តសាលតិត្ថារាម (កំពង់រាំង)", 2244, 1700, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [33, "វត្តព្រះបាទកងចក្រ (កំពង់មាស)", 2304, 1760, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [34, "វត្តកំពង់ឈូក (ផ្នោសង្គ្រម)", 2319, 1775, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [35, "វត្តសាសនសាមគ្គីរង្សី (អូរត្រាវ)", 2537, 1993, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  // FIX: 1676 -> 1859
  [36, "វត្តបទុមប្រជុំនទី (អូរឈូក)", 2403, 1859, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  // FIX: 1790 -> 1970
  [37, "វត្តសាមគ្គីមុនីសុវណ្ណនទី (ដៃទទឹង)", 2514, 1970, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  [38, "វត្តសុវណ្ណគន្ធវារីរង្សី (ព្រែកទុង)", 2417, 1873, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [39, "វត្តកញ្ចោងភ្នំពេញ (កញ្ចោងផ្សារ)", 2100, 1556, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [40, "វត្តកញ្ចោងកំពង់លាវ (កញ្ចោងលិច)", 2199, 1655, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  // FIX: 1862 -> 1826
  [41, "វត្តទិព្វមង្គលនិលឱទ្យាន (ផ្នោព្រីង)", 2370, 1826, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  // FIX: 1862 -> 1834
  [42, "វត្តអរុណរង្សី (ចាកអាគ្រោង)", 2378, 1834, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  [43, "វត្តនទីសមន្តា (អូរវែងចាស់)", 2417, 1873, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [44, "វត្តស្ទឹងមានជ័យសិរីឧត្តម (អូរវែងថ្មី)", 2536, 1992, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],
  [45, "វត្តសុវណ្ណនិគ្រោធ (ជ្រៃភេ)", 2370, 1826, "ស្រុកកញ្ចោង", "Huyen Tieu Can"],

  [46, "វត្តគោគរាជសីមា (គោគ)", 2339, 1795, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [47, "វត្តកោះកែវសិរី (កោះ)", 1157, 613, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [48, "វត្តសំរោងឯក", 1186, 642, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [49, "វត្តអង្គររាជបុរី (អង្គ)", 1534, 990, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [50, "វត្តចម្ប៉ាអង្គរជ័យ (ចំការ)", 2186, 1642, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [51, "វត្តពោធិវង្ស (ទ័ពថ្ម)", 2438, 1894, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [52, "វត្តសុវណ្ណមុនីនាគារាម (ស្រះនាគ)", 2176, 1632, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [53, "វត្តសម្បូណ៌សំរឹទ្ធិស័ក (សំបូរ)", 1965, 1421, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [54, "វត្តព្រះពន្លាជ័យ (ពន្លា)", 2100, 1556, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [55, "វត្តបទុមគង្គា (រួមមិត្ត)", 2346, 1802, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],

  // FIX: 1802 -> 1635
  [56, "វត្តពោធិវង្សារាម (ចុងទ័ព)", 2179, 1635, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],

  [57, "វត្តបិដកត្យារាម (ក្នុងស្រុក)", 1158, 614, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],

  // FIX: 1765 -> 1541
  [58, "វត្តគងជ័យរឹងឫទ្ធិស័ក (ផ្នោកំបុត)", 2085, 1541, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],

  [59, "វត្តជុំប្រាសាទ (ខ្សាច់កណ្តាល)", 2416, 1872, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [60, "វត្តសិលាជលធី (គគីរ)", 2204, 1660, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [61, "វត្តចំប៉ីសោភ័ណ (ក្រោកកើត)", 2221, 1677, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [62, "វត្តចម្ប៉ាបុរី (ត្រោកលិច)", 2156, 1612, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [63, "វត្តកំពង់និគ្រោធ (កំពង់ជ្រៃ)", 2217, 1673, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [64, "វត្តសិលាទ្រ (ថ្មទល់)", 2063, 1519, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [65, "វត្តមហិង្គទ្យារាមសំរោងធំ (ចុងក្រោម)", 2389, 1845, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [66, "វត្តក្រពុំឈូក (ក្នក)", 2199, 1655, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],
  [67, "វត្តពោធិទេពចេតិយារាម (ផ្នោអណ្តែត)", 2517, 1973, "ស្រុកកំពង់ធំ", "Huyen Chau Thanh"],

  [68, "វត្តទក្ខិណានិគ្រោធ (ចុងព្រៃ)", 2429, 1885, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [69, "វត្តកោះកែវមណីសម្បន្ន (ស្លែងថ្មី)", 2438, 1894, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [70, "វត្តស្លែងមានជ័យ (ស្លែងចាស់)", 2194, 1650, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [71, "វត្តពោធិព្រឹក្សគិរីវង្ស (ស្វាយសៀមចាស់)", 2406, 1862, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [72, "វត្តពោធិព្រឹក្សគីរីវង្សារាម (ស្វាយសៀមថ្មី)", 2449, 1905, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [73, "វត្តខេមរារចនាសម្ពន្ធ (ទួលតាថុក)", 2517, 1973, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [74, "វត្តពោធិចុឡាមណីព្រះចេតិយ (ចេតិយ)", 2032, 1488, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [75, "វត្តពោធិបឹង (បឹង)", 2168, 1624, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [76, "វត្តកំពង់ហ្លួង (កំពង់ក្តី)", 2112, 1568, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [77, "វត្តចម្ប៉ាបុរីសិរីតារាជ (ក្រ)", 2460, 1916, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [78, "វត្តមុនីរង្សីសិរីវរារាម (ស្វាយពក)", 2111, 1567, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [79, "វត្តជំនិតមានជ័យ (ជំនិត)", 2012, 1468, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [80, "វត្តកប្បព្រឹក្ស (បាឆាវ)", 2217, 1673, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [81, "វត្តពោធិព្រឹក្ស (ថ្កូវ)", 2101, 1557, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [82, "វត្តជម្ពូទ្វីបវរារាម (ជ្រោយទន្សា)", 2327, 1783, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [83, "វត្តក្រពុំឈូកច្រាល (ចារុ៍)", 2296, 1752, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  // FIX: 1899 -> 1476
  [84, "វត្តកេតុសំរោងទងកប្បព្រឹក្ស (កោះស្លា)", 2020, 1476, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  [85, "វត្តគោបាលនិគ្រោធ (ផ្នោព្រាល)", 2255, 1711, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  // FIX: 1698 -> 1674
  [86, "វត្តថ្មគោល (ក្បាលទូក)", 2218, 1674, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  [87, "វត្តសាលាពិភក្ការាម (តាសឹក)", 2242, 1698, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [88, "វត្តមជ្ឈិមសាល (ឫស្សីម្តម្ភ)", 2242, 1698, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [89, "វត្តសុវណ្ណមាលី (ព្រះប្រាង្គ)", 2463, 1919, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [90, "វត្តលតាវ័ន (ព្រៃវល្លិ៍)", 2010, 1466, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [91, "វត្តសត្ថារាម (កំពង់សាលា)", 2243, 1699, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [92, "វត្តសុរិន្ទរាជព្រឹក្សជ្រៃតាសូរ (ស្លាប៉ាង)", 2400, 1856, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  // FIX: 1806 -> 1803
  [93, "វត្តសុវណ្ណទេព្ទីឯកវិមល្លារាម (ដំបងពាក់)", 2347, 1803, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  [94, "វត្តសត្ថារាមវ័ន (តារ៉ម)", 2234, 1690, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [95, "វត្តនិគ្រោធារាម (ជ្រៃប្រាសាទ)", 1994, 1450, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [96, "វត្តតាលភីរីឧត្តុង្គមានជ័យសិរីវង្សារាម (រំដួល)", 2115, 1571, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [97, "វត្តឧត្តមភីរីរាជបូជាមន្ទីរ (បាយ៉ាម)", 2221, 1677, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [98, "វត្តសុវណ្ណវិជ័យ (ជ្រៃគោក)", 2238, 1694, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [99, "វត្តភាគរាជដួងកែវ (ផ្នោដូង)", 2222, 1678, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [100, "វត្តសិរីព័ន្ធជុំគម្ពីរសាគរ (ផ្នោសង្កែថ្មី)", 2447, 1903, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [101, "វត្តកេតុបូគម្ពីរសាគរ (ផ្នោសង្កែចាស់)", 2203, 1659, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [102, "វត្តបន្ទាយប្រជុំពល (បន្ទាយក្រ)", 2219, 1675, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [103, "វត្តព្រះឥន្ទឱទ្យាន (បង្រៃថ្មី)", 2189, 1645, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [104, "វត្តកំពង់ពោធិព្រឹក្ស (បង្រៃចាស់)", 2042, 1498, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [105, "វត្តលាវចន្ទស្សរារាម (ដីក្រហម)", 2352, 1808, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [106, "វត្តសីមារាម (ផ្នោអណ្តូង)", 2347, 1803, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [107, "វត្តពោធិភិរម្យឧត្តមសួស្តី (បាត្រាច)", 2276, 1732, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [108, "វត្តសេរីវង្សារាម (ផ្នោអំពូង)", 2379, 1835, "ស្រុកថ្កូវ", "Huyen Tra Cu"],
  [109, "វត្តមណិជោត្យារាម (ទ្រព្រះបាទ)", 2290, 1746, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  // FIX: 1783 -> 1975
  [110, "វត្តរោងពិសីជ័យឧត្តម (រោងវាល)", 2519, 1975, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  [111, "វត្តបទុមកោះកែវ (កោះទន្លាប់)", 2302, 1758, "ស្រុកថ្កូវ", "Huyen Tra Cu"],

  [112, "វត្តអរិយមុនីធម្មវង្សាបាហារីភូមិជូនជ័យគងមានបុណ្យ (វត្តធំ)", 2425, 1881, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],
  [113, "វត្តជយគិរីឧត្តុង្គមានជ័យ (ជ្រៃតាសូរ)", 2440, 1896, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],
  [114, "វត្តសត្ថារីនទី (ប្រខុប)", 2416, 1872, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],

  // FIX: 1932 -> 1857
  [115, "វត្តពោធិបឹង (ខ្នាចទទឹង)", 2401, 1857, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],

  [116, "វត្តបទុមគង្គា (ត្រពាំងឈូក)", 2508, 1964, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],
  [117, "វត្តទក្ខិណាសាគរ (ទ្រលោង)", 2473, 1929, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],
  [118, "វត្តសិរីសាគរ (អង្គោល)", 2464, 1920, "ស្រុកមាត់សមុទ្រ", "Huyen Duyen Hai"],

  [119, "វត្តពោធិនាគ (រាជមល្ល)", 2211, 1667, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [120, "វត្តជយសទ្ធារតនឧត្តម (ចេកជ្រុំ)", 2452, 1908, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [121, "វត្តកងចក្ការាម (ធ្លក)", 2043, 1499, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [122, "វត្តអង្គរជុំ (ភ្ញៀវ)", 2211, 1667, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [123, "វត្តគិរីសុវណ្ណ (ចុងមិសចាស់)", 2198, 1654, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [124, "វត្តពោធិសយ្យារាម (កាន់ស្នំ)", 2293, 1749, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [125, "វត្តកំពង់នាវា (កំពង់ទូក)", 2186, 1642, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [126, "វត្តលាយលក្ខណ៍កងចក្ការាម (អំពាំងសាន)", 1983, 1439, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [127, "វត្តព្រះពោធិវង្សទ្រង់លក្ខណ៍ផ្អោប្រសព្វកំណប់កោះកែវ (កោះស្វាយ)", 2434, 1890, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [128, "វត្តលាយលក្ខណ៍កងចក្រ (ត្រពាំងវែង)", 2186, 1642, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [129, "វត្តបទុមឈូកស (ចុងមិសថ្មី)", 2426, 1882, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [130, "វត្តទ្រព្រះបាទលាយលក្ខណ៍កងចក្រភូមិរាជឥន្ទ្រីជិត (រការចាស់)", 1896, 1352, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [131, "វត្តពោធិស្រះស្រង់កំពង់រការថ្មី (ដំបូកបី)", 2400, 1856, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [132, "វត្តកងចក្រលាយលក្ខណារាម (ផ្អោប្រហូត)", 2277, 1733, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [133, "វត្តដំបូកបីជ័យជំនះ (ទៀវថ្មី)", 2351, 1807, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [134, "វត្តទក្ខិណាមហាពោធិស្រះស្រង់ (ទៀវចាស់)", 2227, 1683, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [135, "វត្តមុនីសិនេហាសុវណ្ណាស្រះកែវ (កោះសោម)", 2412, 1868, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [136, "វត្តមុនីបញ្ញាជយសេដ្ឋាសុវណ្ណារាម (ចុងផ្នោ)", 2518, 1974, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [137, "វត្តសាគរគិរីកោះកើយ (ផ្នោរាំង)", 2227, 1683, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [138, "វត្តកំពង់មានជ័យសិរិនិគ្រោធ (កំពង់ទទឹង)", 2510, 1966, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [139, "វត្តយសមេត្រី (មេរងចាស់)", 2056, 1512, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [140, "វត្តគង់បន្ទាយជយារាម (មេរងថ្មី)", 2175, 1631, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
  [141, "វត្តបរមនិមិត្ត (វាលាក់)", 2194, 1650, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],

  // FIX district typo only
  [142, "វត្តសុវណ្ណនទីសិរីឧត្ដម (អូរតាពៅ)", 2559, 2015, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],

  [143, "វត្តជយនទីរតនារាម (អូរក្ដារ)", 2561, 2017, "ស្រុកផ្នោដាច់", "Huyen Cau Ngang"],
];

/* =========================================================
   BUILD TEMPLE OBJECTS
========================================================= */

const INITIAL_WATS = RAW_TEMPLES.map(
  ([number, nameKh, buddhistYear, christianYear, districtKh, district]) => {
    const isOTrao = number === 35;

    return {
      number,

      id: isOTrao ? "wat-o-trao" : `wat-${number}`,

      slug: isOTrao
        ? "wat-o-trao"
        : `wat-${String(number).padStart(3, "0")}-${slugifyWat(nameKh)}`,

      nameKh,
      buddhistYear,
      christianYear,
      districtKh,
      district,

      // AUTO MATCH IMAGE BY KHMER NAME
      image: getWatImage(nameKh),

      location: isOTrao ? "Tập Ngãi, Vĩnh Long, Vietnam" : "",

      featured: isOTrao,

      shortDescription: `វត្តនេះកសាងនៅ ព.ស. ${buddhistYear} ត្រូវនឹង គ.ស. ${christianYear}។`,
    };
  },
);

/* =========================================================
   DISTRICTS
========================================================= */

const DISTRICTS = Array.from(
  new Map(
    INITIAL_WATS.map((wat) => [
      wat.district,
      {
        district: wat.district,
        districtKh: wat.districtKh,
      },
    ]),
  ).values(),
);

/* =========================================================
   OLDEST TEMPLES
========================================================= */

function getOldestWats(wats, limit = 6) {
  return [...wats]
    .filter((wat) => Number.isFinite(Number(wat.christianYear)))
    .sort((a, b) => Number(a.christianYear) - Number(b.christianYear))
    .slice(0, limit);
}

/* =========================================================
   SECTION TITLE
========================================================= */

function PremiumSectionTitle({
  eyebrow,
  khmerTitle,
  englishTitle,
  description,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A62A]/40 bg-[#D4A62A]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A2727]">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      )}

      <h2 className="font-khmer-serif text-3xl font-extrabold leading-tight text-[#11178F] sm:text-4xl">
        {khmerTitle}
      </h2>

      {englishTitle && (
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8A2727]">
          {englishTitle}
        </p>
      )}

      <div className="mx-auto my-5 flex max-w-xs items-center gap-3">
        <span className="h-px flex-1 bg-[#D4A62A]/50" />
        <span className="h-2 w-2 rotate-45 bg-[#D4A62A]" />
        <span className="h-px flex-1 bg-[#D4A62A]/50" />
      </div>

      {description && (
        <p className="text-sm leading-7 text-stone-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* =========================================================
   TEMPLE IMAGE
========================================================= */

function TempleImage({ wat }) {
  const [failed, setFailed] = useState(false);

  if (!wat.image || failed) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#11178F]">
        <KhmerPatternBackground opacity="opacity-[0.07]" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#11178F] via-[#1B24C9] to-[#090E67]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D4A62A]/30 bg-white/[0.06] shadow-xl backdrop-blur">
            <span className="text-5xl text-[#D4A62A]">☸</span>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold tracking-[0.08em] text-white/50">
            <ImageOff className="h-3 w-3" />
            មិនទាន់មានរូបភាព
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={wat.image}
      alt={wat.nameKh}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
    />
  );
}

/* =========================================================
   TEMPLE CARD
========================================================= */

function WatCard({ wat, rank }) {
  return (
    <Link to={`/wats/${wat.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-stone-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A62A]/60 hover:shadow-[0_16px_40px_rgba(17,23,143,0.10)]">
        {/* IMAGE */}
        <div className="relative h-[210px] overflow-hidden bg-stone-100">
          <TempleImage wat={wat} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {rank && (
            <div className="absolute right-3 top-3 rounded-full bg-[#11178F] px-3 py-1.5 text-[11px] font-bold text-white">
              ចំណាស់ទី {rank}
            </div>
          )}

          <div className="absolute bottom-3 left-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
              <MapPin className="h-3 w-3 text-[#F5D46A]" />
              {wat.districtKh}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-4">
          {/* NAME */}
          <h3 className="line-clamp-2 min-h-[50px] font-khmer-serif text-[17px] font-extrabold leading-[1.6] text-[#11178F] transition-colors group-hover:text-[#8A2727]">
            {wat.nameKh}
          </h3>

          {/* YEARS */}
          <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
            <div className="border-r border-stone-200 px-3 py-2">
              <p className="text-[9px] text-stone-400">ពុទ្ធសករាជ</p>

              <p className="mt-1 text-xs font-extrabold text-[#11178F]">
                ព.ស. {wat.buddhistYear}
              </p>
            </div>

            <div className="px-3 py-2">
              <p className="text-[9px] text-stone-400">គ្រឹស្តសករាជ</p>

              <p className="mt-1 text-xs font-extrabold text-[#8A2727]">
                គ.ស. {wat.christianYear}
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="mt-3 flex items-center gap-2 text-xs">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#11178F]/5">
              <MapPin className="h-3.5 w-3.5 text-[#11178F]" />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] text-stone-400">ទីតាំង</p>

              <p className="truncate font-bold text-stone-700">
                {wat.districtKh}
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#11178F] px-4 py-3 text-white transition-colors group-hover:bg-[#0B106D]">
            <span className="font-khmer-serif text-xs font-bold">
              មើលព័ត៌មានលម្អិត
            </span>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* =========================================================
   OLDEST TEMPLE CAROUSEL CARD
========================================================= */

function OldestTempleCard({ wat, rank }) {
  const toKhmerNumber = (number) => {
    const khmerDigits = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];

    return String(number)
      .padStart(2, "0")
      .split("")
      .map((digit) => khmerDigits[Number(digit)])
      .join("");
  };
  return (
    <Link
      to={`/wats/${wat.slug}`}
      className="group block w-[270px] shrink-0 sm:w-[300px] lg:w-[320px]"
    >
      <article className="relative overflow-hidden rounded-t-[150px] rounded-b-[26px] border border-[#D4A62A]/40 bg-white shadow-[0_14px_40px_rgba(70,45,0,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4A62A]/70 hover:shadow-[0_24px_60px_rgba(17,23,143,0.16)]">
        <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-[286px] w-[94%] -translate-x-1/2 rounded-t-[145px] border border-[#D4A62A]/55" />
        <div className="pointer-events-none absolute left-1/2 top-4 z-20 h-[280px] w-[89%] -translate-x-1/2 rounded-t-[140px] border border-white/40" />

        <div className="relative h-[290px] overflow-hidden rounded-t-[150px] bg-[#11178F]">
          <TempleImage wat={wat} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B3E]/75 via-transparent to-black/5" />

          {/* PREMIUM KHMER RANK - TOP CENTER */}
          <div className="absolute left-1/2 top-6 z-30 -translate-x-1/2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#11178F]/90 shadow-lg backdrop-blur-md">
              <span className="font-khmer-serif text-[13px] font-extrabold text-[#F5D46A]">
                {toKhmerNumber(rank)}
              </span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-[#F5D46A]" />
              <span className="truncate">{wat.districtKh}</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white px-5 pb-5 pt-5">
          <h3 className="line-clamp-2 min-h-[58px] font-khmer-serif text-lg font-extrabold leading-[1.7] text-[#11178F] transition-colors duration-300 group-hover:text-[#8A2727]">
            {wat.nameKh}
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-[#D4A62A]" />
            <span className="truncate text-xs font-semibold text-stone-500">
              {wat.districtKh}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#D4A62A]/20 pt-4">
            <div className="flex min-w-0 items-center gap-2 text-[11px] font-bold">
              <span className="whitespace-nowrap text-[#11178F]">
                ព.ស. {wat.buddhistYear}
              </span>
              <span className="h-3 w-px bg-stone-300" />
              <span className="whitespace-nowrap text-[#8A2727]">
                គ.ស. {wat.christianYear}
              </span>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4A62A] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#11178F]">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* =========================================================
   OLDEST TEMPLES AUTO CAROUSEL
========================================================= */

function OldestTemplesCarousel({ temples }) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const carouselItems = useMemo(() => [...temples, ...temples], [temples]);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container || temples.length === 0) {
      return undefined;
    }

    const setInitialPosition = () => {
      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0 && container.scrollLeft <= 1) {
        container.scrollLeft = halfWidth;
      }
    };

    setInitialPosition();

    let previousTime = performance.now();
    const SPEED = 30;

    const animate = (currentTime) => {
      const delta = currentTime - previousTime;
      previousTime = currentTime;

      // Auto movement: left -> right.
      container.scrollLeft -= (SPEED * delta) / 1000;

      const halfWidth = container.scrollWidth / 2;
      if (halfWidth > 0 && container.scrollLeft <= 1) {
        container.scrollLeft += halfWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [temples.length]);

  const moveCarousel = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const amount =
      window.innerWidth < 640 ? 290 : window.innerWidth < 1024 ? 325 : 350;

    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (!temples.length) return null;

  return (
    <div className="relative mt-12">
      <button
        type="button"
        onClick={() => moveCarousel("prev")}
        aria-label="Previous temples"
        className="absolute left-2 top-[44%] z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A62A]/40 bg-white/95 text-[#11178F] shadow-[0_8px_25px_rgba(17,23,143,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#11178F] hover:bg-[#11178F] hover:text-white sm:flex lg:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => moveCarousel("next")}
        aria-label="Next temples"
        className="absolute right-2 top-[44%] z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4A62A]/40 bg-white/95 text-[#11178F] shadow-[0_8px_25px_rgba(17,23,143,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#11178F] hover:bg-[#11178F] hover:text-white sm:flex lg:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-30 w-8 bg-gradient-to-r from-[#FFF9EC] via-[#FFF9EC]/70 to-transparent sm:w-16" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-30 w-8 bg-gradient-to-l from-[#FFF9EC] via-[#FFF9EC]/70 to-transparent sm:w-16" />

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-6 pb-8 pt-3 sm:gap-6 sm:px-12 lg:px-16 [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {carouselItems.map((wat, index) => (
          <OldestTempleCard
            key={`${wat.id}-${index}`}
            wat={wat}
            rank={(index % temples.length) + 1}
          />
        ))}
      </div>

      <div className="mt-1 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {temples.map((wat, index) => (
            <span
              key={`dot-${wat.id}`}
              className={
                index === 0
                  ? "h-2.5 w-7 rounded-full bg-[#D4A62A]"
                  : "h-2.5 w-2.5 rounded-full bg-[#D4A62A]/30"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export function WatKhmerPage() {
  const [query, setQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [sortBy, setSortBy] = useState("oldest");

  const oldestWats = useMemo(() => getOldestWats(INITIAL_WATS, 6), []);

  const filteredWats = useMemo(() => {
    const value = query.trim().toLowerCase();

    const results = INITIAL_WATS.filter((wat) => {
      const matchesDistrict =
        selectedDistrict === "all" || wat.district === selectedDistrict;

      if (!matchesDistrict) {
        return false;
      }

      if (!value) {
        return true;
      }

      return [
        wat.number,
        wat.nameKh,
        wat.districtKh,
        wat.district,
        wat.buddhistYear,
        wat.christianYear,
        wat.location,
      ]
        .filter((field) => field !== null && field !== undefined)
        .some((field) => String(field).toLowerCase().includes(value));
    });

    return [...results].sort((a, b) => {
      if (sortBy === "oldest") {
        return Number(a.christianYear) - Number(b.christianYear);
      }

      if (sortBy === "newest") {
        return Number(b.christianYear) - Number(a.christianYear);
      }

      return Number(a.number) - Number(b.number);
    });
  }, [query, selectedDistrict, sortBy]);

  const clearFilters = () => {
    setQuery("");
    setSelectedDistrict("all");
    setSortBy("oldest");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F0DD]">
      {/* OLDEST TEMPLES */}
      <section className="bg-[#FFF9EC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <PremiumSectionTitle
            khmerTitle="វត្តដែលមានអាយុច្រើនជាងគេ"
            englishTitle="Oldest Khmer Temples"
            description="បង្ហាញវត្តដែលមានគ្រឹស្តសករាជតូចជាងគេមុន ដោយគណនាតាមឆ្នាំកសាងដែលមានក្នុងបញ្ជី។"
          />

          <OldestTemplesCarousel temples={oldestWats} />
        </div>
      </section>

      {/* DIRECTORY */}
      <section id="directory" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <PremiumSectionTitle
            eyebrow="TEMPLE DIRECTORY"
            khmerTitle="បញ្ជីវត្តខ្មែរទាំង ១៤៣"
            englishTitle="Preah Trapeang Temple Directory"
            description="ស្វែងរកតាមនាមវត្ត ស្រុក លេខរៀង ពុទ្ធសករាជ ឬគ្រឹស្តសករាជ។"
          />

          <div className="mt-12 rounded-[28px] border border-[#D4A62A]/30 bg-white p-5 shadow-[0_12px_40px_rgba(17,23,143,0.07)] sm:p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#11178F] text-white">
                  <Landmark className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-stone-400">វត្តដែលកំពុងបង្ហាញ</p>

                  <p className="font-khmer-serif text-xl font-extrabold text-[#11178F]">
                    {filteredWats.length} / 143 វត្ត
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row xl:max-w-2xl">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#11178F]" />

                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="ស្វែងរកឈ្មោះវត្ត លេខ ឬឆ្នាំ..."
                    className="w-full rounded-2xl border border-[#D4A62A]/35 bg-[#FFFDF8] py-3.5 pl-12 pr-12 text-sm text-stone-800 outline-none transition-all placeholder:text-stone-400 focus:border-[#11178F] focus:bg-white focus:ring-4 focus:ring-[#11178F]/10"
                  />

                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-[#8A2727]"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  style={{ colorScheme: "light" }}
                  className="
    rounded-2xl
    border border-[#D4A62A]/35
    bg-[#FFFDF8]
    px-4 py-3.5
    text-sm font-bold
    text-[#11178F]
    outline-none
    transition
    cursor-pointer
    focus:border-[#11178F]
    focus:ring-4
    focus:ring-[#11178F]/10
  "
                >
                  <option value="oldest" className="bg-white text-[#1C1917]">
                    វត្តចាស់ជាងគេមុន
                  </option>

                  <option value="newest" className="bg-white text-[#1C1917]">
                    វត្តថ្មីជាងគេមុន
                  </option>

                  <option value="number" className="bg-white text-[#1C1917]">
                    លេខរៀង ១ → ១៤៣
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-5 border-t border-stone-100 pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-stone-400">
                ជ្រើសរើសតាមស្រុក
              </p>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDistrict("all")}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                    selectedDistrict === "all"
                      ? "border-[#11178F] bg-[#11178F] text-white"
                      : "border-[#D4A62A]/30 bg-[#FFF9EA] text-stone-600 hover:border-[#11178F]/30 hover:text-[#11178F]"
                  }`}
                >
                  ទាំងអស់ (១៤៣)
                </button>

                {DISTRICTS.map((group) => {
                  const count = INITIAL_WATS.filter(
                    (wat) => wat.district === group.district,
                  ).length;

                  return (
                    <button
                      key={group.district}
                      type="button"
                      onClick={() => setSelectedDistrict(group.district)}
                      className={`rounded-full border px-4 py-2 text-xs font-bold transition ${
                        selectedDistrict === group.district
                          ? "border-[#11178F] bg-[#11178F] text-white"
                          : "border-[#D4A62A]/30 bg-[#FFF9EA] text-stone-600 hover:border-[#11178F]/30 hover:text-[#11178F]"
                      }`}
                    >
                      {group.districtKh} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {(query || selectedDistrict !== "all" || sortBy !== "oldest") && (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
                <div className="text-xs text-stone-500">
                  {query && (
                    <>
                      ស្វែងរក៖{" "}
                      <span className="font-bold text-[#8A2727]">
                        “{query}”
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-bold text-[#11178F] transition hover:text-[#8A2727]"
                >
                  សម្អាត Filter
                </button>
              </div>
            )}
          </div>

          {filteredWats.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredWats.map((wat) => (
                <WatCard key={wat.id} wat={wat} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[30px] border border-dashed border-[#D4A62A]/60 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#11178F]/[0.06]">
                <Search className="h-7 w-7 text-[#11178F]" />
              </div>

              <h3 className="mt-6 font-khmer-serif text-2xl font-extrabold text-[#11178F]">
                រកមិនឃើញវត្ត
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-500">
                មិនមានវត្តដែលត្រូវនឹងការស្វែងរករបស់អ្នកទេ។ សូមសាកល្បងឈ្មោះ លេខ
                ឆ្នាំ ឬស្រុកផ្សេងទៀត។
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 rounded-xl bg-[#11178F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1B24C9]"
              >
                បង្ហាញវត្តទាំងអស់
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM */}
      <section className="relative overflow-hidden bg-[#11178F] py-20">
        <KhmerPatternBackground opacity="opacity-[0.04]" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A62A]">
            PREAH TRAPEANG • WAT KHMER
          </p>

          <h2 className="mt-4 font-khmer-serif text-3xl font-extrabold text-white sm:text-4xl">
            វត្តខ្មែរនៅខេត្តព្រះត្រពាំង
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#F7EED8]/75">
            បញ្ជីវត្តខ្មែរចំនួន ១៤៣ វត្ត រៀបចំតាមស្រុក ពុទ្ធសករាជ
            និងគ្រឹស្តសករាជ។
          </p>
        </div>
      </section>
    </main>
  );
}
