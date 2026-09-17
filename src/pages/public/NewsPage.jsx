import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, Tag, Bookmark, Facebook, ExternalLink } from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { SectionTitle, Button, Card, Pagination } from "../../components/common/UIComponents";
import { INITIAL_POSTS, INITIAL_CATEGORIES, siteSettings } from "../../data/data";

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const publishedPosts = useMemo(() => {
    return INITIAL_POSTS.filter((p) => p.status === "Published");
  }, []);

  const featuredPost = publishedPosts.find((p) => p.featured) || publishedPosts[0];

  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post) => {
      const matchCat =
        selectedCategory === "all" ||
        post.category === selectedCategory ||
        post.categoryId === selectedCategory ||
        (selectedCategory === "cat-announcement" && (post.category.includes("ដំណឹង") || post.category.includes("Announcement"))) ||
        (selectedCategory === "cat-ceremonies" && (post.category.includes("បុណ្យ") || post.category.includes("Ceremon"))) ||
        (selectedCategory === "cat-monks" && (post.category.includes("សង្ឃ") || post.category.includes("Monk"))) ||
        (selectedCategory === "cat-community" && (post.category.includes("សហគមន៍") || post.category.includes("Community"))) ||
        (selectedCategory === "cat-development" && (post.category.includes("អភិវឌ្ឍ") || post.category.includes("Development"))) ||
        (selectedCategory === "cat-donations" && (post.category.includes("បច្ច័យ") || post.category.includes("Donation")));

      const matchSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.khmerTitle.includes(searchQuery) ||
        post.excerpt.includes(searchQuery);
      return matchCat && matchSearch;
    });
  }, [publishedPosts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="py-10 space-y-12">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold font-khmer-serif text-[#11178F]">
          ព័ត៌មាន និងព្រឹត្តិការណ៍{siteSettings.templeNameKh}
        </h1>
        <LotusDivider />
        <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          ប្រមូលផ្តុំនូវសេចក្តីប្រកាសព័ត៌មាន កម្មវិធីបុណ្យ និងអត្ថបទស្រាវជ្រាវវប្បធម៌ខ្មែរក្រោម
        </p>
      </section>

      {/* Featured News Hero Card */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#D4A62A]/60 overflow-hidden shadow-lg hover-lift grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-72 sm:h-96 relative overflow-hidden">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.khmerTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#1B24C9] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#D4A62A]">
                ព័ត៌មានសំខាន់ • Featured
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#D4A62A] font-semibold">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-khmer-serif text-[#11178F] leading-snug">
                  {featuredPost.khmerTitle}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-4">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  {featuredPost.author}
                </span>
                <Link to={`/news/${featuredPost.slug}`}>
                  <Button variant="primary" size="sm">
                    អានអត្ថបទពេញ ›
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main News Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: News Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E8D7A5] shadow-xs">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === "all"
                      ? "bg-[#1B24C9] text-white"
                      : "bg-amber-50 text-stone-700 hover:bg-amber-100"
                  }`}
                >
                  ទាំងអស់ ({publishedPosts.length})
                </button>
                {INITIAL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.name
                        ? "bg-[#1B24C9] text-white"
                        : "bg-amber-50 text-stone-700 hover:bg-amber-100"
                    }`}
                  >
                    {cat.khmerName}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#D4A62A]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="ស្វែងរកអត្ថបទ..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#D4A62A]/50 text-xs focus:outline-none focus:border-[#1B24C9]"
                />
              </div>
            </div>

            {/* Posts Grid */}
            {currentPosts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-stone-500 text-sm">មិនមានអត្ថបទត្រូវនឹងការស្វែងរករបស់អ្នកឡើយ។</p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                >
                  សម្អាតការស្វែងរក
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {currentPosts.map((post) => (
                  <Card key={post.id} className="flex flex-col h-full bg-white group">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.khmerTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#11178F]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded border border-[#D4A62A]/40">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1.5">
                          <Calendar className="w-3 h-3 text-[#D4A62A]" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="font-bold text-base text-[#11178F] font-khmer-serif leading-snug group-hover:text-[#1B24C9] transition-colors line-clamp-2">
                          {post.khmerTitle}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                        <span className="text-[11px] text-stone-500">{post.author}</span>
                        <Link
                          to={`/news/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#1B24C9] group-hover:text-[#D4A62A] transition-colors"
                        >
                          <span>អានបន្ត</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>

          {/* Right: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Category Directory Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8D7A5] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#11178F] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
                ជំពូកអត្ថបទ • Categories
              </h3>
              <div className="space-y-2">
                {INITIAL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setCurrentPage(1);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-xs font-medium transition-all ${
                      selectedCategory === cat.name
                        ? "bg-[#1B24C9] text-white font-bold"
                        : "hover:bg-amber-50 text-stone-700"
                    }`}
                  >
                    <span>{cat.khmerName}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-black/10">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular / Recommended Posts */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8D7A5] shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-[#11178F] font-khmer-serif uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
                អត្ថបទពេញនិយម • Popular Posts
              </h3>
              <div className="space-y-4">
                {publishedPosts.slice(0, 4).map((post) => (
                  <Link
                    key={post.id}
                    to={`/news/${post.slug}`}
                    className="flex gap-3 group items-center"
                  >
                    <img
                      src={post.coverImage}
                      alt={post.khmerTitle}
                      className="w-16 h-14 object-cover rounded-lg shrink-0 border border-gray-200 group-hover:opacity-90"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-[#11178F] font-khmer-serif line-clamp-2 group-hover:text-[#1B24C9] transition-colors">
                        {post.khmerTitle}
                      </h4>
                      <span className="text-[10px] text-stone-500 mt-1 block">
                        {post.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Facebook Page Live Card */}
            <div className="bg-gradient-to-br from-[#1877F2]/10 to-amber-50 rounded-2xl p-6 border border-[#1877F2]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#11178F] font-khmer-serif">
                    Facebook វត្ត អូរត្រាវ
                  </h4>
                  <p className="text-[11px] text-[#1877F2] font-semibold">
                    @Wattotrao
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                ទទួលបានដំណឹងថ្មីៗទាន់ហេតុការណ៍ និងការផ្សាយផ្ទាល់ពិធីបុណ្យនានាពីទីអារាម។
              </p>
              <a
                href={siteSettings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>ចូលទៅកាន់ Facebook វត្ត</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            {/* Facebook Page Abbot */}
            <div className="bg-gradient-to-br from-[#1877F2]/10 to-amber-50 rounded-2xl p-6 border border-[#1877F2]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Facebook className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#11178F] font-khmer-serif">
                    Abbot - ព្រះចៅអធិការ 
                  </h4>

                  <p className="text-[11px] text-[#1877F2] font-semibold">
                    @ថាច់ លឹមស៊ី «ម៉័ន»
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                តាមដានសកម្មភាព ព្រះធម៌ទេសនា និងព័ត៌មានផ្សេងៗពីព្រះចៅអធិការវត្តអូរត្រាវ។
              </p>

              <a
                href="https://www.facebook.com/watt.otrao.5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>ចូលទៅកាន់ Facebook ព្រះចៅអធិការ</span>
              </a>
            </div>

            {/* Facebook Page Admin */}
            <div className="bg-gradient-to-br from-[#1877F2]/10 to-amber-50 rounded-2xl p-6 border border-[#1877F2]/30 shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Facebook className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-bold text-sm text-[#11178F] font-khmer-serif">
                    Admin
                  </h4>

                  <p className="text-[11px] text-[#1877F2] font-semibold">
                    @Thach Thanh Dat
                  </p>
                </div>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed">
                តាមដានការផ្សព្វផ្សាយព័ត៌មាន និងមាតិកាថ្មីៗពីអ្នកគ្រប់គ្រងទំព័រផ្លូវការរបស់វត្តអូរត្រាវ។
              </p>

              <a
                href="https://www.facebook.com/thach.thanh.dat.1979/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>ចូលទៅកាន់ Facebook Admin</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
