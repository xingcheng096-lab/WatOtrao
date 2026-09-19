import watOuTraoLogo from "../assets/branding/wat-ou-trao-official-logo.png";
import kru1Image from "../assets/images/kru1.png";
import ginaImage from "../assets/images/ភិ.តេជវរោ ថាច់ជីណា.png";
import datImage from "../assets/images/Dat.png";

const templeLogo = watOuTraoLogo;

// ============================================================
// MONKS
// ============================================================

export const INITIAL_MONKS = [
  {
    id: "monk-1",
    name: "Venerable Maha Thach Manh",
    khmerName: "ព្រះមហា ថាច់​ ម៉័ន",
    role: "Abbot",
    khmerRole: "ព្រះចៅអធិការ",
    vassa: "២៨",
    birthPlace: "ខេត្តព្រះត្រពាំង",
    bio: "ព្រះចៅអធិការវត្ត ដែលដឹកនាំការងារព្រះពុទ្ធសាសនា ការអប់រំ និងការអភិវឌ្ឍវត្ត។",
    image:
      kru1Image,
    portrait:
      kru1Image,
    yearsOrdained: 28,
    status: "Active",
    education: "ពុទ្ធិកសិក្សា...",

  bio: "ព្រះអង្គបានបំពេញការសិក្សាព្រះធម៌វិន័យ និងបានចូលរួមបម្រើវិស័យព្រះពុទ្ធសាសនា អប់រំ និងសង្គម...",

  responsibilities: [
    "ដឹកនាំ និងគ្រប់គ្រងកិច្ចការទូទៅក្នុងវត្ត",
    "អប់រំព្រះធម៌វិន័យដល់ព្រះសង្ឃ និងពុទ្ធបរិស័ទ",
    "ចូលរួមថែរក្សាវប្បធម៌ និងប្រពៃណីខ្មែរ",
    "ដឹកនាំការកសាង និងអភិវឌ្ឍសមិទ្ធផលនានាក្នុងវត្ត",
  ],

  quote:
    "ការសិក្សាព្រះធម៌ និងការប្រព្រឹត្តអំពើល្អ គឺជាមូលដ្ឋាននៃសេចក្តីសុខ។",
  },

  {
  id: "monk-2",
  name: "Thach Thea",
  khmerName: "ព្រះមហា ថាច់ ធា",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩២",
  vassa: "១៥",
  birthPlace: "",
  bio: "",
  image:
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=600",
  portrait:
    "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=600",
  yearsOrdained: 15,
  status: "Active",
},

{
  id: "monk-3",
  name: "Thach Ngoc Hov",
  khmerName: "ព្រះមហា ថាច់ ង៉ុកហូវ",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩៣",
  vassa: "១៤",
  birthPlace: "",
  bio: "",
  image:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  portrait:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  yearsOrdained: 14,
  status: "Active",
},

{
  id: "monk-4",
  name: "Chau Rithy",
  khmerName: "ព្រះមហា ចៅ រិទ្ធី",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩៥",
  vassa: "១១",
  birthPlace: "",
  bio: "",
  image:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
  portrait:
    "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
  yearsOrdained: 11,
  status: "Active",
},

{
  id: "monk-5",
  name: "Thach Gina",
  khmerName: "ព្រះមហា ថាច់ ជីណា",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩៦",
  vassa: "១១",
  birthPlace: "",
  bio: "",
  image:
    ginaImage,
  portrait:
    ginaImage,
  yearsOrdained: 11,
  status: "Active",
},

{
  id: "monk-6",
  name: "Kim Huynh",
  khmerName: "ព្រះមហា គឹម ហ្វាយញ៉ឹង",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩៧",
  vassa: "១០",
  birthPlace: "",
  bio: "",
  image:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  portrait:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  yearsOrdained: 10,
  status: "Active",
},

{
  id: "monk-7",
  name: "Thach Sayang",
  khmerName: "ព្រះមហា ថាច់ សាយ៉ាង",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "១៩៩៩",
  vassa: "៩",
  birthPlace: "",
  bio: "",
  image:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  portrait:
    "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600",
  yearsOrdained: 9,
  status: "Active",
},

{
  id: "monk-8",
  name: "Thach Ton Dak",
  khmerName: "ព្រះមហា ថាច់ ទន់ដាក",
  role: "Uddesacharya",
  khmerRole: "ឧទ្ទេសាចារ្យ",
  position: "ឧទ្ទេសាចារ្យ",
  title: "ឧទ្ទេសាចារ្យ",
  birthYear: "២០០០",
  vassa: "៨",
  birthPlace: "",
  bio: "",
  image:
    datImage,
  portrait:
    datImage,
  yearsOrdained: 8,
  status: "Active",
},
];

export const INITIAL_USERS = [
  {
    id: "usr-1",
    name: "Venerable Maha Kim Chan",
    khmerName: "ព្រះមហា គឹម ច័ន្ទ",
    email: "kimchan@watkhmer.org",
    role: "super_admin",
    status: "active",
    avatar:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300",
    bio: "Head abbot administrator and chief custodian of the temple digital archive.",
  },
  {
    id: "usr-2",
    name: "Thach Sovann",
    khmerName: "ថាច់ សុវណ្ណ",
    email: "sovann@watkhmer.org",
    role: "admin",
    status: "active",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    bio: "Temple council coordinator and senior events manager.",
  },
  {
    id: "usr-3",
    name: "Son Dara",
    khmerName: "សឺន ដារ៉ា",
    email: "dara@watkhmer.org",
    role: "editor",
    status: "active",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    bio: "Editorial writer for temple history, Buddhist activities and community news.",
  },
  {
    id: "usr-4",
    name: "Kim Sreyneang",
    khmerName: "គឹម ស្រីនាង",
    email: "sreyneang@watkhmer.org",
    role: "author",
    status: "active",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    bio: "Cultural youth contributor documenting temple volunteerism and Dharma youth groups.",
  },
];

// ============================================================
// CATEGORIES
// ============================================================

export const INITIAL_CATEGORIES = [
  {
    id: "cat-announcement",
    name: "Announcements",
    khmerName: "សេចក្តីជូនដំណឹង",
    slug: "announcements",
    count: 8,
  },
  {
    id: "cat-ceremonies",
    name: "Ceremonies & Festivals",
    khmerName: "ពិធីបុណ្យ",
    slug: "ceremonies",
    count: 14,
  },
  {
    id: "cat-monks",
    name: "Monk Activities",
    khmerName: "សកម្មភាពព្រះសង្ឃ",
    slug: "monk-activities",
    count: 11,
  },
  {
    id: "cat-community",
    name: "Community Action",
    khmerName: "សកម្មភាពសហគមន៍",
    slug: "community",
    count: 9,
  },
  {
    id: "cat-development",
    name: "Temple Development",
    khmerName: "ការអភិវឌ្ឍវត្ត",
    slug: "development",
    count: 7,
  },
  {
    id: "cat-donations",
    name: "Donations & Merit",
    khmerName: "បច្ច័យឧបត្ថម្ភ",
    slug: "donations",
    count: 12,
  },
];

// ============================================================
// POSTS / NEWS
// ============================================================

export const INITIAL_POSTS = [
  {
    id: "post-1",
    title: "The Sacred Vassa Rains Retreat Observance at Wat O Trao",
    khmerTitle:
      "ពិធីបុណ្យចូលព្រះវស្សាប្រចាំឆ្នាំ ព.ស. ២៥៦៨ នៅវត្ត អូរត្រាវ",
    slug: "vassa-retreat-observance-2568",
    category: "ពិធីបុណ្យ",
    categoryId: "cat-ceremonies",
    author: "Venerable Maha Kim Chan",
    authorId: "usr-1",
    status: "Published",
    date: "2025-07-21",
    buddhistDate:
      "ថ្ងៃចន្ទ ១ រោច ខែអាសាឍ ឆ្នាំរោង ព.ស. ២៥៦៨",
    readTime: "៥ នាទី",
    coverImage:
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "ពុទ្ធបរិស័ទជិតឆ្ងាយបានមូលមតិគ្នាប្រារព្ធពិធីបុណ្យចូលព្រះវស្សា វេរប្រគេនទៀនព្រះវស្សា និងសំពត់សាដកដល់ព្រះសង្ឃដែលគង់ចាំព្រះវស្សាអស់ត្រីមាស។",
    content: `ពិធីបុណ្យចូលព្រះវស្សា គឺជាកាលបរិច្ឆេទដ៏វិសេសវិសាលក្នុងព្រះពុទ្ធសាសនាថេរវាទ។ ព្រះសង្ឃគ្រប់ព្រះអង្គគង់ចាំព្រះវស្សានៅក្នុងវត្តអារាមអស់រយៈពេល ៣ ខែ ដើម្បីបដិបត្តិធម៌ សិក្សាព្រះធម៌វិន័យ និងចម្រើនវិបស្សនាកម្មដ្ឋាន។

នៅក្នុងឱកាសនេះ វត្ត អូរត្រាវ បានរៀបចំពិធីដង្ហែទៀនព្រះវស្សាប្រកបដោយសេចក្តីជ្រះថ្លា ដោយមានការចូលរួមពីពុទ្ធបរិស័ទគ្រប់ទិសទី។

ព្រះសង្ឃ និងគណៈកម្មការវត្ត សូមអនុមោទនាចំពោះពុទ្ធបរិស័ទទាំងអស់ ដែលបានចូលរួមទាំងកម្លាំងកាយ កម្លាំងចិត្ត និងបច្ច័យ។`,
    tags: ["ព្រះវស្សា", "ពិធីបុណ្យ", "វត្តអូរត្រាវ"],
    featured: true,
  },

  {
    id: "post-2",
    title: "Temple Community Volunteer Day",
    khmerTitle:
      "ពុទ្ធបរិស័ទ និងយុវជនចូលរួមសម្អាតបរិវេណវត្ត",
    slug: "temple-community-volunteer-day",
    category: "សកម្មភាពសហគមន៍",
    categoryId: "cat-community",
    author: "Son Dara",
    authorId: "usr-3",
    status: "Published",
    date: "2025-08-20",
    buddhistDate: "ព.ស. ២៥៦៩",
    readTime: "៤ នាទី",
    coverImage:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "ពុទ្ធបរិស័ទ និងយុវជនបានចូលរួមសម្អាតបរិវេណវត្ត រៀបចំទីធ្លា និងជួយរៀបចំចង្ហាន់ប្រគេនព្រះសង្ឃ។",
    content: `ការចូលរួមរបស់សហគមន៍ គឺជាកម្លាំងដ៏សំខាន់ក្នុងការថែរក្សាវត្តអារាម។

យុវជន ពុទ្ធបរិស័ទ និងគណៈកម្មការវត្តបានរួមគ្នាបោសសម្អាតបរិវេណព្រះវិហារ សាលាឆទាន និងតំបន់ជុំវិញវត្ត។

សកម្មភាពនេះបង្ហាញពីស្មារតីសាមគ្គីភាព និងការចូលរួមថែរក្សាសម្បត្តិព្រះពុទ្ធសាសនា។`,
    tags: ["សហគមន៍", "យុវជន", "ស្ម័គ្រចិត្ត"],
    featured: true,
  },

  {
    id: "post-3",
    title: "Khmer Buddhist Literature Summer Class",
    khmerTitle:
      "បើកថ្នាក់បង្រៀនអក្សរសាស្ត្រខ្មែរ និងព្រះធម៌ដល់យុវជន",
    slug: "khmer-buddhist-literature-class",
    category: "សកម្មភាពព្រះសង្ឃ",
    categoryId: "cat-monks",
    author: "Venerable Maha Kim Chan",
    authorId: "usr-1",
    status: "Published",
    date: "2025-08-10",
    buddhistDate: "ព.ស. ២៥៦៩",
    readTime: "៦ នាទី",
    coverImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "វត្តបានរៀបចំថ្នាក់អក្សរសាស្ត្រខ្មែរ ព្រះធម៌ និងភាសាបាលីសម្រាប់កុមារ និងយុវជន។",
    content: `ការអប់រំគឺជាផ្នែកសំខាន់មួយនៃបេសកកម្មរបស់វត្ត។

ថ្នាក់សិក្សាត្រូវបានរៀបចំឡើង ដើម្បីជួយកុមារ និងយុវជនរៀនអក្សរសាស្ត្រខ្មែរ សីលធម៌ ព្រះធម៌ និងចំណេះដឹងបឋមអំពីភាសាបាលី។

កម្មវិធីនេះមានគោលបំណងជួយអភិរក្សភាសា វប្បធម៌ និងគុណតម្លៃព្រះពុទ្ធសាសនា។`,
    tags: ["អប់រំ", "អក្សរខ្មែរ", "ព្រះធម៌"],
    featured: false,
  },

  {
    id: "post-4",
    title: "Temple Development Project Progress",
    khmerTitle:
      "វឌ្ឍនភាពគម្រោងអភិវឌ្ឍ និងកែលម្អបរិវេណវត្ត",
    slug: "temple-development-progress",
    category: "ការអភិវឌ្ឍវត្ត",
    categoryId: "cat-development",
    author: "Thach Sovann",
    authorId: "usr-2",
    status: "Published",
    date: "2025-08-15",
    buddhistDate: "ព.ស. ២៥៦៩",
    readTime: "៥ នាទី",
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=1200",
    excerpt:
      "គម្រោងកែលម្អផ្លូវ បរិវេណ និងសមិទ្ធផលក្នុងវត្តកំពុងបន្តដោយមានការចូលរួមពីពុទ្ធបរិស័ទ។",
    content: `ការអភិវឌ្ឍវត្តត្រូវបានអនុវត្តជាបន្តបន្ទាប់ ដើម្បីផ្តល់ភាពងាយស្រួលដល់ព្រះសង្ឃ និងពុទ្ធបរិស័ទ។

គម្រោងរួមមានការកែលម្អផ្លូវចូលវត្ត កែលម្អបរិវេណ និងជួសជុលសំណង់ចាស់ៗ។

សូមអនុមោទនាចំពោះសប្បុរសជន និងពុទ្ធបរិស័ទដែលបានចូលរួម។`,
    tags: ["អភិវឌ្ឍ", "សំណង់", "វត្ត"],
    featured: false,
  },
];

// ============================================================
// EVENTS
// ============================================================

export const INITIAL_EVENTS = [
  {
    id: "evt-1",
    title: "Kathina Ceremony",
    khmerTitle: "ពិធីបុណ្យកឋិនទានមហាសាមគ្គី",
    description:
      "ពិធីដង្ហែអង្គកឋិន និងវេរប្រគេនត្រៃចីវរដល់ព្រះសង្ឃ។",
    date: "2025-10-15",
    endDate: "2025-10-16",
    time: "07:00",
    location: "វត្ត អូរត្រាវ",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1200",
    category: "Festival",
  },
  {
    id: "evt-2",
    title: "Pchum Ben Ceremony",
    khmerTitle: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
    description:
      "ពិធីឧទ្ទិសកុសលជូនដល់បុព្វការីជន និងញាតិការទាំងប្រាំពីរសន្តាន។",
    date: "2025-09-21",
    time: "06:00",
    location: "វត្ត អូរត្រាវ",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200",
    category: "Ceremony",
  },
  {
    id: "evt-3",
    title: "Dharma Meditation Day",
    khmerTitle: "កម្មវិធីសមាធិ និងស្តាប់ព្រះធម៌",
    description:
      "កម្មវិធីសមាធិ សូត្រមន្ត និងស្តាប់ព្រះធម៌សម្រាប់ពុទ្ធបរិស័ទ។",
    date: "2025-11-02",
    time: "08:00",
    location: "សាលាធម្មសភា វត្ត អូរត្រាវ",
    status: "Upcoming",
    image:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=1200",
    category: "Dharma",
  },
];



// ============================================================
// PROJECTS
// ============================================================

export const INITIAL_PROJECTS = [
  {
    id: "project-1",
    title: "Temple Road Improvement",
    khmerTitle: "គម្រោងកែលម្អផ្លូវចូលវត្ត",
    description:
      "កែលម្អផ្លូវចូលវត្ត ដើម្បីផ្តល់ភាពងាយស្រួលដល់ពុទ្ធបរិស័ទ។",
    target: 12000,
    raised: 9360,
    currency: "USD",
    progress: 78,
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "project-2",
    title: "Temple Boundary Restoration",
    khmerTitle: "គម្រោងជួសជុលរបង និងខ្លោងទ្វារ",
    description:
      "ជួសជុលរបង និងកែលម្អខ្លោងទ្វារវត្ត។",
    target: 8500,
    raised: 5270,
    currency: "USD",
    progress: 62,
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "project-3",
    title: "Buddhist Education Library",
    khmerTitle: "គម្រោងបណ្ណាល័យពុទ្ធិកសិក្សា",
    description:
      "រៀបចំបណ្ណាល័យ និងសម្ភារៈសិក្សាសម្រាប់ព្រះសង្ឃ និងយុវជន។",
    target: 7500,
    raised: 5250,
    currency: "USD",
    progress: 70,
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
  },
];

// ============================================================
// GALLERY ALBUMS
// ============================================================

export const INITIAL_GALLERIES = [
  {
    id: "gal-1",
    title: "Temple Ceremonies",
    khmerTitle: "កម្រងរូបភាពពិធីបុណ្យ",
    album: "ceremonies",
    albumName: "ពិធីបុណ្យសាសនា",
    year: "២០២៥",
    cover:
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=800",
    imagesCount: 12,
    photos: [
      {
        url:
          "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1000",
        caption: "ពិធីបុណ្យក្នុងបរិវេណវត្ត",
      },
      {
        url:
          "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
        caption: "ពុទ្ធបរិស័ទចូលរួមកម្មវិធីសាសនា",
      },
    ],
  },
  {
    id: "gal-2",
    title: "Monk Activities",
    khmerTitle: "សកម្មភាពព្រះសង្ឃ",
    album: "monks",
    albumName: "សកម្មភាពព្រះសង្ឃ",
    year: "២០២៥",
    cover:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800",
    imagesCount: 10,
    photos: [
      {
        url:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
        caption: "សកម្មភាពសិក្សាព្រះធម៌",
      },
    ],
  },
  {
    id: "gal-3",
    title: "Temple Architecture",
    khmerTitle: "ស្ថាបត្យកម្ម និងសមិទ្ធផលវត្ត",
    album: "architecture",
    albumName: "ស្ថាបត្យកម្មវត្ត",
    year: "២០២៥",
    cover:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    imagesCount: 16,
    photos: [
      {
        url:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
        caption: "ស្ថាបត្យកម្មវត្ត",
      },
    ],
  },
];

// ============================================================
// MEDIA
// IMPORTANT: GalleryPage requires url, title and category.
// ============================================================

export const INITIAL_MEDIA = [
  {
    id: "med-1",
    name: "temple-ceremony.jpg",
    title: "ទិដ្ឋភាពពិធីបុណ្យក្នុងវត្ត",
    type: "image",
    category: "Ceremony",
    size: "2.4 MB",
    date: "2025-07-20",
    url:
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1200",
    alt: "Temple ceremony",
  },
  {
    id: "med-2",
    name: "monk-activity.jpg",
    title: "សកម្មភាពព្រះសង្ឃ",
    type: "image",
    category: "Monks",
    size: "1.8 MB",
    date: "2025-07-15",
    url:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=900",
    alt: "Monk activity",
  },
  {
    id: "med-3",
    name: "temple-architecture.jpg",
    title: "ស្ថាបត្យកម្ម និងដំបូលវត្ត",
    type: "image",
    category: "Architecture",
    size: "3.1 MB",
    date: "2025-06-10",
    url:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    alt: "Temple architecture",
  },
  {
    id: "med-4",
    name: "buddha-statue.jpg",
    title: "ព្រះពុទ្ធបដិមា",
    type: "image",
    category: "Architecture",
    size: "2.1 MB",
    date: "2025-05-18",
    url:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    alt: "Buddha statue",
  },
  {
    id: "med-5",
    name: "festival.jpg",
    title: "ពិធីបុណ្យប្រពៃណី",
    type: "image",
    category: "Festival",
    size: "2.9 MB",
    date: "2025-04-12",
    url:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000",
    alt: "Traditional festival",
  },
  {
    id: "med-6",
    name: "community.jpg",
    title: "សកម្មភាពសហគមន៍ពុទ្ធបរិស័ទ",
    type: "image",
    category: "Community",
    size: "2.2 MB",
    date: "2025-08-20",
    url:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    alt: "Temple community",
  },
];

// ============================================================
// SITE SETTINGS
// ============================================================

export const siteSettings = {
  templeNameKh: "វត្ត អូរត្រាវ",
  officialFormalNameKh: "វត្តសាសនសាមគ្គរង្សី",
  templeNameEn: "WAT O TRAO",

  // Keep this field for compatibility with AdminDataContext.
  templeNameVi: "WAT O TRAO",

  subtitleKh: "វត្តព្រះពុទ្ធសាសនាខ្មែរ",
  khmerTempleName: "វត្ត អូរត្រាវ",

  templeName: "WAT O TRAO",
  templeMapName: "WAT O TRAO",

  subtitleKhmer: "វត្តព្រះពុទ្ធសាសនាខ្មែរ",
  subtitleEn: "WAT O TRAO • Tập Ngãi, Vĩnh Long, Vietnam",

  address: "R6Q9+22J, Tập Ngãi, Vĩnh Long, Vietnam",

  mapSearchQuery:
    "WAT O TRAO, Tập Ngãi, Vĩnh Long, Vietnam",

  logo: templeLogo,
  officialLogo: templeLogo,

  logoAlt:
    "វត្តសាសនសាមគ្គរង្សី - វត្ត អូរត្រាវ - WAT O TRAO",

  brandColors: {
    watBlue: "#1717D8",
    watBlueDeep: "#10109F",
    templeGold: "#D4A62A",
    templeCream: "#FFF8E7",
    templeRed: "#8A2525",
    textDark: "#2D2723",
  },

  phone: "+84 294 385 123",
  email: "contact@watotrao.org",

  facebook: "https://www.facebook.com/Wattotrao",
  facebookName: "វត្ត អូរត្រាវ",

  youtube: "",
  telegram: "",

  siteTitle:
    "វត្តសាសនសាមគ្គរង្សី | វត្ត អូរត្រាវ | WAT O TRAO",

  metaDescription:
    "គេហទំព័រវត្តសាសនសាមគ្គរង្សី (វត្ត អូរត្រាវ) សម្រាប់ផ្សព្វផ្សាយព័ត៌មាន ព្រះធម៌ សកម្មភាព និងប្រវត្តិវត្ត។",

  heroImage:
    "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1600",

  primaryTheme: "#11178F",
  goldTheme: "#D4A62A",

  // Keep verified legal/bank information unchanged until confirmed.
  bankAccount: {
    bankName: "ABA Bank (Cambodia) / Vietcombank (Vietnam)",
    accountNumber:
      "001 889 772 (USD) / 102 384 9912 (VND)",
    accountName: "CHÙA Ô TRAO (WAT OV TRAO ACCOUNT)",
    instructions:
      "សូមបញ្ជាក់គោលបំណងនៃការចូលរួមបច្ច័យក្នុងកំណត់ចំណាំផ្ទេរប្រាក់។",
  },

  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=WAT%20O%20TRAO%2C%20T%E1%BA%ADp%20Ng%C3%A3i%2C%20V%C4%A9nh%20Long%2C%20Vietnam",

  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=WAT%20O%20TRAO%2C%20T%E1%BA%ADp%20Ng%C3%A3i%2C%20V%C4%A9nh%20Long%2C%20Vietnam",
};

export const INITIAL_SITE_SETTINGS = siteSettings;

// ============================================================
// TEMPLE ACTIVITIES
// ============================================================

export const templeActivities = [
  {
    id: 1,
    type: "ceremony",
    categoryLabelKh: "ពិធីបុណ្យ",
    titleKh:
      "ពិធីបុណ្យចូលព្រះវស្សា និងដង្ហែទៀនវស្សាប្រចាំឆ្នាំ",
    titleEn:
      "Annual Vassa Rains Retreat Candle Procession",
    date: "2025-07-21",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "ពុទ្ធបរិស័ទជិតឆ្ងាយបានមូលមតិគ្នារៀបចំក្បួនដង្ហែទៀនព្រះវស្សា សំពត់សាដក និងបរិក្ខារផ្សេងៗ វេរប្រគេនដល់ព្រះសង្ឃ។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    id: 2,
    type: "monk_activity",
    categoryLabelKh: "សកម្មភាពព្រះសង្ឃ",
    titleKh:
      "ព្រះសង្ឃនិមន្តបិណ្ឌបាត និងសិក្សាព្រះធម៌វិន័យ",
    titleEn:
      "Monks Morning Alms Round and Scripture Studies",
    date: "2025-08-04",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "ព្រះសង្ឃនិមន្តចេញបិណ្ឌបាត និងបន្តការសិក្សាព្រះធម៌វិន័យ និងភាសាបាលីប្រចាំថ្ងៃ។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    id: 3,
    type: "construction",
    categoryLabelKh: "ការអភិវឌ្ឍវត្ត",
    titleKh:
      "វឌ្ឍនភាពការកែលម្អផ្លូវចូល និងបរិវេណវត្ត",
    titleEn:
      "Temple Access Road and Grounds Improvement",
    date: "2025-08-15",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "គម្រោងកែលម្អផ្លូវចូល និងបរិវេណវត្តកំពុងបន្តដោយមានការចូលរួមពីពុទ្ធបរិស័ទ និងសប្បុរសជន។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    id: 4,
    type: "community",
    categoryLabelKh: "សកម្មភាពសហគមន៍",
    titleKh:
      "ពុទ្ធបរិស័ទជួយរៀបចំចង្ហាន់ និងសម្អាតបរិវេណវត្ត",
    titleEn:
      "Community Volunteer Kitchen and Temple Cleaning",
    date: "2025-08-20",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "ពុទ្ធបរិស័ទ និងយុវជនបានចូលរួមរៀបចំចង្ហាន់ និងសម្អាតបរិវេណវត្តក្នុងស្មារតីសាមគ្គីភាព។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    id: 5,
    type: "donation",
    categoryLabelKh: "បច្ច័យឧបត្ថម្ភ",
    titleKh:
      "ទទួលបច្ច័យពីសប្បុរសជនសម្រាប់ការអភិវឌ្ឍវត្ត",
    titleEn:
      "Merit Offering for Temple Development",
    date: "2025-08-28",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "គណៈកម្មការវត្តបានទទួលបច្ច័យពីសប្បុរសជនសម្រាប់ការអភិវឌ្ឍ និងថែរក្សាសមិទ្ធផលនានា។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1000",
    ],
  },
  {
    id: 6,
    type: "announcement",
    categoryLabelKh: "សេចក្តីជូនដំណឹង",
    titleKh:
      "សេចក្តីជូនដំណឹងអំពីកាលវិភាគពិធីបុណ្យកឋិនទាន",
    titleEn:
      "Kathina Festival Schedule Announcement",
    date: "2025-09-02",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    descriptionKh:
      "គណៈកម្មការវត្តសូមអញ្ជើញពុទ្ធបរិស័ទជិតឆ្ងាយចូលរួមពិធីបុណ្យកឋិនទានមហាសាមគ្គី។",
    location: "វត្ត អូរត្រាវ",
    featured: true,
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1000",
    ],
  },
];

// ============================================================
// DONORS
// ============================================================

export const donorRecords = [
  {
    id: "dn-001",
    donorName: "ឧបាសក ថាច់ ចាន់ថន & ឧបាសិកា គឹម ស្រីនាង",
    family: "គ្រួសារ ថាច់-គឹម",
    amount: "20,000,000 VND ($800)",
    purpose: "ចូលរួមកែលម្អផ្លូវ និងបរិវេណវត្ត",
    date: "2025-08-28",
    meritBlessing:
      "សូមអនុមោទនាបុណ្យកុសល សូមបានសម្រេចនូវសេចក្តីសុខ សេចក្តីចម្រើន អាយុ វណ្ណៈ សុខៈ ពលៈ។",
  },
  {
    id: "dn-002",
    donorName: "លោក សឺន វណ្ណា & អ្នកស្រី លី ផល្លា",
    family: "ពុទ្ធបរិស័ទនៅក្រៅប្រទេស",
    amount: "$1,200",
    purpose: "ឧបត្ថម្ភសាលាឆទាន និងចង្ហាន់ព្រះសង្ឃ",
    date: "2025-08-20",
    meritBlessing:
      "សូមឱ្យក្រុមគ្រួសារជួបតែសេចក្តីសុខ សុភមង្គល និងចម្រុងចម្រើនគ្រប់ទិវារាត្រី។",
  },
  {
    id: "dn-003",
    donorName: "ឧបាសិកា ត្រឹង ធីរ៉ា និងកូនចៅ",
    family: "គ្រួសារ ត្រឹង",
    amount: "15,000,000 VND",
    purpose: "ជួយជួសជុលកុដិព្រះសង្ឃ",
    date: "2025-08-15",
    meritBlessing:
      "សូមអនុមោទនាកុសលចេតនាជ្រះថ្លា និងសូមឱ្យមានសុខភាពបរិបូរណ៍។",
  },
];

// ============================================================
// TEMPLE DEVELOPMENT
// ============================================================

export const templeDevelopments = [
  {
    id: "dev-1",
    category: "temple construction",
    titleKh: "គម្រោងកែលម្អផ្លូវធំចូលវត្ត អូរត្រាវ",
    titleEn: "Temple Main Entrance Road Improvement",
    status: "កំពុងដំណើរការ (In Progress)",
    progressPercentage: 78,
    targetAmount: "$12,000",
    raisedAmount: "$9,360",
    startDate: "2025-05",
    targetDate: "2025-11",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&q=80&w=800",
    descriptionKh:
      "កែលម្អផ្លូវចូលវត្ត ដើម្បីសម្រួលដល់ការធ្វើដំណើររបស់ពុទ្ធបរិស័ទ។",
  },
  {
    id: "dev-2",
    category: "restoration",
    titleKh: "គម្រោងជួសជុលរបង និងខ្លោងទ្វារវត្ត",
    titleEn: "Temple Gate and Boundary Restoration",
    status: "កំពុងដំណើរការ (In Progress)",
    progressPercentage: 62,
    targetAmount: "$8,500",
    raisedAmount: "$5,270",
    startDate: "2025-06",
    targetDate: "2025-12",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    descriptionKh:
      "ជួសជុលរបង និងកែលម្អខ្លោងទ្វារដើម្បីលើកកម្ពស់សោភ័ណភាពវត្ត។",
  },
  {
    id: "dev-3",
    category: "infrastructure",
    titleKh: "ប្រព័ន្ធភ្លើង និងទឹកស្អាតក្នុងវត្ត",
    titleEn: "Temple Lighting and Clean Water",
    status: "ជិតរួចរាល់ (Near Completion)",
    progressPercentage: 90,
    targetAmount: "$6,000",
    raisedAmount: "$5,400",
    startDate: "2025-04",
    targetDate: "2025-09",
    image:
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800",
    descriptionKh:
      "កែលម្អប្រព័ន្ធភ្លើង និងទឹកស្អាតសម្រាប់ព្រះសង្ឃ និងពុទ្ធបរិស័ទ។",
  },
];

// ============================================================
// FAQ
// ============================================================

export const INITIAL_FAQS = [
  {
    q: "តើវត្តបើកទទួលពុទ្ធបរិស័ទនៅពេលណា?",
    a:
      "វត្តបើកទទួលពុទ្ធបរិស័ទជារៀងរាល់ថ្ងៃ។ នៅថ្ងៃសីល និងថ្ងៃបុណ្យធំៗ អាចមានកម្មវិធីពិសេសបន្ថែម។",
  },
  {
    q: "តើអាចចូលរួមស្តាប់ព្រះធម៌បានដែរឬទេ?",
    a:
      "អាចចូលរួមបាន។ កម្មវិធីព្រះធម៌ និងសកម្មភាពពុទ្ធសាសនាត្រូវបានរៀបចំតាមកាលវិភាគរបស់វត្ត។",
  },
  {
    q: "តើការស្លៀកពាក់ចូលវត្តគួរធ្វើដូចម្តេច?",
    a:
      "សូមស្លៀកពាក់សមរម្យ និងគោរពទីសក្ការៈ ព្រះសង្ឃ និងពុទ្ធបរិស័ទដទៃទៀត។",
  },
];

// ============================================================
// HERITAGE DATA
// Kept for HomePage compatibility.
// ============================================================

export const KHMER_KROM_HERITAGE_DATA = {
  title: "Khmer Buddhist Heritage",
  khmerTitle: "មរតកវប្បធម៌ និងវត្តអារាមខ្មែរ",

  lead:
    "វត្តអារាមជាមជ្ឈមណ្ឌលសាសនា អប់រំ អក្សរសាស្ត្រ វប្បធម៌ និងសាមគ្គីភាពរបស់សហគមន៍។",

  historyChapters: [
    {
      period: "សម័យបុរាណ",
      title: "ព្រះពុទ្ធសាសនា និងវត្តអារាម",
      description:
        "វត្តអារាមបានដើរតួនាទីសំខាន់ក្នុងការថែរក្សាព្រះពុទ្ធសាសនា អក្សរសាស្ត្រ និងវប្បធម៌ខ្មែរ។",
    },
    {
      period: "សម័យបន្តបន្ទាប់",
      title: "វត្តជាមជ្ឈមណ្ឌលសហគមន៍",
      description:
        "ក្រៅពីជាទីសក្ការៈ វត្តក៏ជាកន្លែងសិក្សា ជួបជុំ និងធ្វើសកម្មភាពសង្គមរបស់ពុទ្ធបរិស័ទ។",
    },
  ],

  famousPagodas: [],

  historicPagodas: [],

  traditionalFestivals: [
    {
      name: "ពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិខ្មែរ",
      period: "ខែមេសា",
      description:
        "ពិធីបុណ្យប្រពៃណីដែលពុទ្ធបរិស័ទចូលវត្ត ប្រគេនចង្ហាន់ និងសុំសេចក្តីសុខក្នុងឆ្នាំថ្មី។",
    },
    {
      name: "ពិធីបុណ្យភ្ជុំបិណ្ឌ",
      period: "ខែភទ្របទ",
      description:
        "ពិធីឧទ្ទិសកុសលជូនបុព្វការីជន និងញាតិការដែលបានចែកឋាន។",
    },
    {
      name: "ពិធីបុណ្យកឋិនទាន",
      period: "ក្រោយចេញព្រះវស្សា",
      description:
        "ពិធីវេរប្រគេនត្រៃចីវរ និងបរិក្ខារដល់ព្រះសង្ឃក្រោយបញ្ចប់ការគង់ចាំព្រះវស្សា។",
    },
  ],

  cultureFeatures: [
    {
      title: "អក្សរសាស្ត្រ និងការអប់រំ",
      icon: "BookOpen",
      description:
        "វត្តជួយលើកស្ទួយការសិក្សាអក្សរសាស្ត្រ ព្រះធម៌ និងសីលធម៌។",
    },
    {
      title: "ពិធីបុណ្យប្រពៃណី",
      icon: "Award",
      description:
        "វត្តជាទីតាំងសំខាន់សម្រាប់ការរៀបចំពិធីបុណ្យព្រះពុទ្ធសាសនា និងប្រពៃណី។",
    },
    {
      title: "សិល្បៈ និងស្ថាបត្យកម្ម",
      icon: "Sparkles",
      description:
        "ស្ថាបត្យកម្មវត្តបង្ហាញពីក្បាច់រចនា និងសិល្បៈព្រះពុទ្ធសាសនាខ្មែរ។",
    },
  ],

  culturalPillars: [
    {
      title: "ព្រះពុទ្ធសាសនា",
      icon: "BookOpen",
      description:
        "ថែរក្សា និងផ្សព្វផ្សាយព្រះធម៌ និងសីលធម៌។",
    },
    {
      title: "អប់រំ",
      icon: "Award",
      description:
        "លើកស្ទួយការសិក្សា និងការអប់រំយុវជន។",
    },
    {
      title: "វប្បធម៌",
      icon: "Sparkles",
      description:
        "ថែរក្សាភាសា សិល្បៈ និងប្រពៃណីខ្មែរ។",
    },
  ],
};

// ============================================================
// WAT IMAGES
// Automatically load temple images from src/assets/wats/
// ============================================================

const watImageModules = import.meta.glob(
  [
    "../assets/wats/*.png",
    "../assets/wats/*.jpg",
    "../assets/wats/*.jpeg",
    "../assets/wats/*.webp",
    "../assets/wats/*.PNG",
    "../assets/wats/*.JPG",
    "../assets/wats/*.JPEG",
    "../assets/wats/*.WEBP",
  ],
  {
    eager: true,
    import: "default",
  }
);

function normalizeWatName(value = "") {
  return String(value)
    .normalize("NFC")
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .replace(/\s+/g, "")
    .trim();
}

function getWatImage(nameKh) {
  const target = normalizeWatName(nameKh);

  const found = Object.entries(watImageModules).find(([path]) => {
    const filename = decodeURIComponent(
      path.split("/").pop() || ""
    );

    return normalizeWatName(filename) === target;
  });

  return found?.[1] || "";
}

function slugifyWat(name, number) {
  return `wat-${number}-${String(name || "")
    .normalize("NFC")
    .replace(/\s+/g, "-")}`;
}

// ============================================================
// 142 WATS
//
// IMPORTANT:
// Your WatKhmerPage already contains the authoritative RAW_TEMPLES
// list of all 142 names/years. To avoid maintaining two conflicting
// lists, we expose INITIAL_WATS here with the temple detail records
// needed by WatDetailPage.
//
// Add/replace individual records here when linking cards to detail.
// ============================================================

const CORE_WATS = [
  {
    number: 1,
    nameKh: "វត្តពោធិសាលរាជ (កំពង់)",
    fullNameKh: "វត្តពោធិសាលរាជ (កំពង់)",
    nameEn: "Wat Bodhisalaraja",
    buddhistYear: 1186,
    christianYear: 642,
    districtKh: "ទីរួមខេត្ត",
    district: "Thi Xa",
  },
  {
    number: 2,
    nameKh: "វត្តចម្បកមាស (ខឿន)",
    fullNameKh: "វត្តចម្បកមាស (ខឿន)",
    nameEn: "Wat Champa Meas",
    buddhistYear: 1892,
    christianYear: 1348,
    districtKh: "ទីរួមខេត្ត",
    district: "Thi Xa",
  },
  {
    number: 3,
    nameKh: "វត្តនិគ្រោធ (កំពង់ក្សាន្ត)",
    fullNameKh: "វត្តនិគ្រោធ (កំពង់ក្សាន្ត)",
    nameEn: "Wat Nigrodha",
    buddhistYear: 2287,
    christianYear: 1743,
    districtKh: "ទីរួមខេត្ត",
    district: "Thi Xa",
  },
  {
    number: 4,
    nameKh: "វត្តនាគវនារាម (ខ្ទឹង)",
    fullNameKh: "វត្តនាគវនារាម (ខ្ទឹង)",
    nameEn: "Wat Nagavanaram",
    buddhistYear: 2029,
    christianYear: 1485,
    districtKh: "ទីរួមខេត្ត",
    district: "Thi Xa",
  },
];

export const INITIAL_WATS = CORE_WATS.map((wat) => ({
  ...wat,

  id: `wat-${wat.number}`,

  slug: slugifyWat(wat.nameKh, wat.number),

  location: `${wat.districtKh} (${wat.district})`,

  shortDescription:
    `${wat.nameKh} ជាវត្តព្រះពុទ្ធសាសនាខ្មែរមួយ ដែលមានតួនាទីសំខាន់ក្នុងការថែរក្សាព្រះពុទ្ធសាសនា វប្បធម៌ និងសហគមន៍។`,

  history:
    wat.christianYear
      ? `តាមបញ្ជីប្រវត្តិ វត្តនេះមានកាលបរិច្ឆេទកំណើតនៅ គ.ស. ${wat.christianYear}។`
      : "",

  architecture:
    "ស្ថាបត្យកម្មវត្តមានលក្ខណៈព្រះពុទ្ធសាសនាខ្មែរ និងមានសមិទ្ធផលសាសនាជាច្រើន។",

  image: getWatImage(wat.nameKh),

  coverImage: getWatImage(wat.nameKh),
}));

// ============================================================
// DEFAULT EXPORT
// Optional compatibility helper.
// ============================================================

export default {
  INITIAL_USERS,
  INITIAL_CATEGORIES,
  INITIAL_POSTS,
  INITIAL_EVENTS,
  INITIAL_MONKS,
  INITIAL_PROJECTS,
  INITIAL_GALLERIES,
  INITIAL_MEDIA,
  INITIAL_FAQS,
  INITIAL_SITE_SETTINGS,
  INITIAL_WATS,
  KHMER_KROM_HERITAGE_DATA,
  siteSettings,
  templeActivities,
  donorRecords,
  templeDevelopments,
};
