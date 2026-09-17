import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle2,
  Clock
} from "lucide-react";
import { StatusBadge, Button, Pagination, ConfirmDialog } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminPosts() {
  const { posts = [], deletePost, categories = [] } = useAdminData() || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [deletingPostId, setDeletingPostId] = useState(null);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    const list = Array.isArray(posts) ? posts : [];
    return list.filter((p) => {
      if (!p) return false;
      const matchSearch =
        !searchQuery.trim() ||
        (p.khmerTitle && p.khmerTitle.includes(searchQuery)) ||
        (p.title && p.title.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchStatus = selectedStatus === "all" || p.status === selectedStatus;
      return matchSearch && matchCat && matchStatus;
    });
  }, [posts, searchQuery, selectedCategory, selectedStatus]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleDelete = () => {
    if (deletingPostId) {
      deletePost(deletingPostId);
      setDeletingPostId(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900">
            គ្រប់គ្រងអត្ថបទ និងព័ត៌មាន (Posts Management)
          </h1>
          <p className="text-xs text-stone-500">
            បង្កើត កែប្រែ និងផ្សព្វផ្សាយអត្ថបទព្រះធម៌ និងសកម្មភាពវត្ត
          </p>
        </div>

        <Link to="/admin/posts/new">
          <Button variant="primary" size="sm">
            <Plus className="w-4 h-4 mr-1.5" />
            <span>បង្កើតអត្ថបទថ្មី</span>
          </Button>
        </Link>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="ស្វែងរកតាមចំណងជើង..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="text-xs py-1.5 px-3 rounded-lg border border-stone-300 bg-white focus:outline-none"
          >
            <option value="all">គ្រប់ជំពូក (All Categories)</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.khmerName}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => {
              setSelectedStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="text-xs py-1.5 px-3 rounded-lg border border-stone-300 bg-white focus:outline-none"
          >
            <option value="all">គ្រប់ស្ថានភាព (All Status)</option>
            <option value="Published">ផ្សាយជាសាធារណៈ (Published)</option>
            <option value="Draft">ព្រាងទុក (Draft)</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-stone-600">
            <thead className="bg-stone-50 text-stone-500 font-bold uppercase text-[10px] border-b border-stone-200">
              <tr>
                <th className="px-5 py-3">រូបគម្រប & ចំណងជើង</th>
                <th className="px-4 py-3">ជំពូក</th>
                <th className="px-4 py-3">អ្នកសរសេរ</th>
                <th className="px-4 py-3">ស្ថានភាព</th>
                <th className="px-4 py-3">កាលបរិច្ឆេទ</th>
                <th className="px-4 py-3 text-right">សកម្មភាព</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {displayedPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-stone-400">
                    រកមិនឃើញអត្ថបទដែលត្រូវនឹងលក្ខខណ្ឌស្វែងរក
                  </td>
                </tr>
              ) : (
                displayedPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-stone-50/70 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.coverImage}
                          alt=""
                          className="w-12 h-12 rounded-lg object-cover border border-stone-200 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-stone-900 font-khmer-serif line-clamp-1 max-w-sm">
                            {post.khmerTitle}
                          </p>
                          <p className="text-[11px] text-stone-400 font-sans truncate max-w-xs">
                            {post.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[11px]">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-700">{post.author}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <StatusBadge status={post.status} />
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-stone-500">{post.date}</td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap space-x-2">
                      <Link
                        to={`/admin/posts/edit/${post.id}`}
                        className="inline-flex p-1.5 rounded-md hover:bg-stone-100 text-stone-600 hover:text-[#6E1F1F]"
                        title="កែប្រែ"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => setDeletingPostId(post.id)}
                        className="inline-flex p-1.5 rounded-md hover:bg-red-50 text-stone-400 hover:text-red-600"
                        title="លុប"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="p-4 border-t border-stone-100">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deletingPostId}
        onClose={() => setDeletingPostId(null)}
        onConfirm={handleDelete}
        title="បញ្ជាក់ការលុបអត្ថបទ"
        message="តើអ្នកពិតជាចង់លុបអត្ថបទនេះមែនទេ? សកម្មភាពនេះមិនអាចត្រឡប់ក្រោយវិញបានឡើយ។"
      />
    </div>
  );
}
