export const mockStats = [
  { label: "អត្ថបទសរុប", value: "24", tone: "blue" },
  { label: "សកម្មភាព", value: "12", tone: "gold" },
  { label: "ព្រឹត្តិការណ៍", value: "8", tone: "green" },
  { label: "ព្រះសង្ឃ", value: "18", tone: "purple" },
  { label: "រូបភាព", value: "156", tone: "orange" },
  { label: "គម្រោង", value: "6", tone: "teal" },
];

export const mockPosts = [
  { id: 1, title: "ពិធីបុណ្យចូលឆ្នាំខ្មែរ", category: "បុណ្យប្រពៃណី", author: "Admin", status: "បានផ្សព្វផ្សាយ", date: "18 មេសា 2026" },
  { id: 2, title: "សកម្មភាពសិក្សាព្រះធម៌ប្រចាំសប្តាហ៍", category: "ព្រះធម៌", author: "អ្នកនិពន្ធ", status: "ព្រាង", date: "12 មេសា 2026" },
  { id: 3, title: "ការអភិវឌ្ឍបរិវេណវត្តអូរត្រាវ", category: "សហគមន៍", author: "Admin", status: "កំពុងពិនិត្យ", date: "08 មេសា 2026" },
  { id: 4, title: "ដំណឹងសម្រាប់ពុទ្ធបរិស័ទ", category: "ដំណឹង", author: "Editor", status: "បានផ្សព្វផ្សាយ", date: "02 មេសា 2026" },
];

export const mockRows = {
  categories: [
    { id: 1, name: "ដំណឹង", en: "Announcements", slug: "announcements", count: 8, status: "សកម្ម" },
    { id: 2, name: "ព្រះធម៌", en: "Dharma", slug: "dharma", count: 6, status: "សកម្ម" },
    { id: 3, name: "សហគមន៍", en: "Community", slug: "community", count: 10, status: "សកម្ម" },
  ],
  activities: [
    { id: 1, name: "សម្អាតបរិវេណវត្ត", date: "20 មេសា 2026", location: "វត្តអូរត្រាវ", status: "សកម្ម", featured: "បាទ/ចាស" },
    { id: 2, name: "ថ្នាក់ព្រះធម៌សម្រាប់កុមារ", date: "រៀងរាល់អាទិត្យ", location: "សាលាឆាន់", status: "សកម្ម", featured: "ទេ" },
  ],
  dharma: [
    { id: 1, name: "ការរស់នៅដោយសតិ", type: "អត្ថបទ", speaker: "ព្រះចៅអធិការ", status: "បានផ្សព្វផ្សាយ", date: "15 មេសា 2026" },
    { id: 2, name: "ធម៌ទេសនាថ្ងៃអាទិត្យ", type: "វីដេអូ", speaker: "ព្រះសង្ឃវត្ត", status: "ព្រាង", date: "10 មេសា 2026" },
  ],
  events: [
    { id: 1, name: "បុណ្យវិសាខបូជា", date: "11 ឧសភា 2026", location: "វត្តអូរត្រាវ", status: "កំពុងមកដល់" },
    { id: 2, name: "ពិធីកាន់បិណ្ឌ", date: "22 កញ្ញា 2026", location: "វត្តអូរត្រាវ", status: "ព្រាង" },
  ],
  monks: [
    { id: 1, name: "ព្រះតេជព្រះគុណ ថាច់ លឹមស៊ី", en: "Thach Lim Sy", role: "ព្រះចៅអធិការ", status: "សកម្ម" },
    { id: 2, name: "ព្រះតេជព្រះគុណ ថាច់ សាយ៉ាង", en: "Thach Sayang", role: "ព្រះលេខា", status: "សកម្ម" },
  ],
  projects: [
    { id: 1, name: "ជួសជុលព្រះវិហារ", progress: 68, status: "កំពុងអនុវត្ត", date: "ធ្នូ 2026" },
    { id: 2, name: "បណ្ណាល័យព្រះធម៌", progress: 32, status: "កំពុងប្រមូលថវិកា", date: "មិថុនា 2027" },
  ],
  gallery: [
    { id: 1, name: "បុណ្យចូលឆ្នាំខ្មែរ 2026", count: 24, status: "បានផ្សព្វផ្សាយ", date: "18 មេសា 2026" },
    { id: 2, name: "ជីវិតប្រចាំថ្ងៃនៅវត្ត", count: 18, status: "ព្រាង", date: "01 មេសា 2026" },
  ],
  media: [
    { id: 1, name: "wat-otrao-main.jpg", type: "រូបភាព", size: "2.4 MB", date: "18 មេសា 2026" },
    { id: 2, name: "dharma-sermon.mp4", type: "វីដេអូ", size: "48 MB", date: "10 មេសា 2026" },
  ],
  users: [
    { id: 1, name: "Admin Wat O Trao", email: "admin@watotrao.org", role: "SUPER ADMIN", status: "សកម្ម", last: "ថ្ងៃនេះ" },
    { id: 2, name: "អ្នកនិពន្ធ", email: "editor@watotrao.org", role: "EDITOR", status: "សកម្ម", last: "ម្សិលមិញ" },
  ],
  audit: [
    { id: 1, user: "Admin Wat O Trao", action: "ចូលប្រព័ន្ធ", module: "Authentication", description: "បានចូលប្រព័ន្ធដោយជោគជ័យ", date: "ថ្ងៃនេះ 09:42" },
    { id: 2, user: "Admin Wat O Trao", action: "កែប្រែអត្ថបទ", module: "Posts", description: "បានកែប្រែព័ត៌មានពិធីបុណ្យ", date: "ម្សិលមិញ 16:20" },
  ],
};
