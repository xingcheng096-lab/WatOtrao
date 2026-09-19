import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Save, ArrowLeft, Image as ImageIcon, Sparkles, CheckCircle2 } from "lucide-react";
import { Button, Breadcrumb, ImageUploaderPreview } from "../../components/common/UIComponents";
import { useAdminData } from "../../context/AdminDataContext";

export function AdminPostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts = [], addPost, updatePost, categories = [], currentUser } = useAdminData() || {};

  const isEditing = Boolean(id);
  const existingPost = isEditing ? (posts || []).find((p) => p.id === id) : null;

  const [formData, setFormData] = useState({
    title: "",
    khmerTitle: "",
    slug: "",
    categoryId: "cat-1",
    category: "News",
    status: "Published",
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800",
    excerpt: "",
    content: "",
    tags: "វត្តខ្មែរក្រោម, ព្រះពុទ្ធសាសនា",
    buddhistDate: "ព.ស. ២៥៦៨"
  });

  useEffect(() => {
    if (existingPost) {
      setFormData({
        title: existingPost.title || "",
        khmerTitle: existingPost.khmerTitle || "",
        slug: existingPost.slug || "",
        categoryId: existingPost.categoryId || "cat-1",
        category: existingPost.category || "News",
        status: existingPost.status || "Published",
        featured: existingPost.featured || false,
        coverImage: existingPost.coverImage || "",
        excerpt: existingPost.excerpt || "",
        content: existingPost.content || "",
        tags: Array.isArray(existingPost.tags) ? existingPost.tags.join(", ") : existingPost.tags || "",
        buddhistDate: existingPost.buddhistDate || "ព.ស. ២៥៦៨"
      });
    }
  }, [existingPost]);

  const handleTitleChange = (val) => {
    const slug = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: slug || prev.slug
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedCat = categories.find((c) => c.name === e.target.value);
    setFormData((prev) => ({
      ...prev,
      category: e.target.value,
      categoryId: selectedCat ? selectedCat.id : "cat-1"
    }));
  };

  const handleSubmit = (e, targetStatus) => {
    e.preventDefault();
    if (!formData.khmerTitle.trim()) {
      alert("សូមបញ្ចូលចំណងជើងអត្ថបទជាភាសាខ្មែរ!");
      return;
    }

    const payload = {
      ...formData,
      status: targetStatus || formData.status,
      tags: typeof formData.tags === "string" ? formData.tags.split(",").map((t) => t.trim()).filter(Boolean) : formData.tags
    };

    if (isEditing) {
      updatePost(id, payload);
      alert("អត្ថបទត្រូវបានធ្វើបច្ចុប្បន្នភាពដោយជោគជ័យ!");
    } else {
      addPost(payload);
      alert("បានបង្កើត និងផ្សព្វផ្សាយអត្ថបទថ្មីដោយជោគជ័យ!");
    }

    navigate("/admin/posts");
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Breadcrumb
            items={[
              { label: "ផ្ទាំងគ្រប់គ្រង", href: "/admin" },
              { label: "អត្ថបទ", href: "/admin/posts" },
              { label: isEditing ? "កែប្រែអត្ថបទ" : "សរសេរអត្ថបទថ្មី" }
            ]}
          />
          <h1 className="text-2xl font-bold font-khmer-serif text-stone-900 mt-1">
            {isEditing ? "កែប្រែអត្ថបទ (Edit Post)" : "សរសេរអត្ថបទថ្មី (Create New Post)"}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/admin/posts">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>ថយក្រោយ</span>
            </Button>
          </Link>
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => handleSubmit(e, "Published")}
          >
            <Save className="w-4 h-4 mr-1" />
            <span>{isEditing ? "រក្សាទុកការកែប្រែ" : "ផ្សាយអត្ថបទ"}</span>
          </Button>
        </div>
      </div>

      <form onSubmit={(e) => handleSubmit(e, "Published")} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols): Main Content Fields */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              ចំណងជើងជាភាសាខ្មែរ (Khmer Title) *
            </label>
            <input
              type="text"
              required
              value={formData.khmerTitle}
              onChange={(e) => setFormData({ ...formData, khmerTitle: e.target.value })}
              placeholder="ឧទាហរណ៍៖ ពិធីបុណ្យចូលព្រះវស្សា និងការដង្ហែទៀនព្រះវស្សា..."
              className="w-full p-3 text-sm rounded-xl border border-stone-300 font-khmer-serif focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                ចំណងជើងជាភាសាអង់គ្លេស (English Title)
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Ex: Rains Retreat Ceremony..."
                className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
                តំណភ្ជាប់ Slug (URL Slug)
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="rains-retreat-ceremony"
                className="w-full p-2.5 text-xs font-mono rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              សង្ខេបអត្ថបទ (Excerpt / Lead Summary)
            </label>
            <textarea
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="សង្ខេបខ្លឹមសារសំខាន់ៗ ២-៣ បន្ទាត់..."
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              ខ្លឹមសារអត្ថបទពិស្តារ (Full Content)
            </label>
            <textarea
              rows={12}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="សរសេរខ្លឹមសារអត្ថបទនៅទីនេះ..."
              className="w-full p-3 text-xs leading-relaxed rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-stone-700 mb-1.5">
              ពាក្យគន្លឹះ (Tags - បំបែកដោយសញ្ញាក្បៀស)
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="វត្ត អូរត្រាវ, កឋិនទាន, ព្រះវស្សា"
              className="w-full p-2.5 text-xs rounded-xl border border-stone-300 focus:outline-none focus:border-[#6E1F1F]"
            />
          </div>
        </div>

        {/* Right Column (4 cols): Meta Settings, Cover & Publish */}
        <div className="lg:col-span-4 space-y-6">
          {/* Publishing Box */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700">
              ការផ្សាយ (Publish Settings)
            </h3>

            <div>
              <label className="block text-xs text-stone-600 mb-1">ស្ថានភាពអត្ថបទ</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full p-2 text-xs rounded-lg border border-stone-300 bg-white"
              >
                <option value="Published">ផ្សាយជាសាធារណៈ (Published)</option>
                <option value="Draft">ព្រាងទុក (Draft)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-stone-600 mb-1">កាលបរិច្ឆេទពុទ្ធសករាជ</label>
              <input
                type="text"
                value={formData.buddhistDate}
                onChange={(e) => setFormData({ ...formData, buddhistDate: e.target.value })}
                className="w-full p-2 text-xs rounded-lg border border-stone-300"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-stone-100">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="rounded text-[#6E1F1F] focus:ring-[#6E1F1F]"
              />
              <span className="text-xs font-semibold text-stone-800">
                កំណត់ជាអត្ថបទសំខាន់ (Featured Post)
              </span>
            </label>

            <div className="pt-3 border-t border-stone-100 flex gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={(e) => handleSubmit(e, "Draft")}
              >
                រក្សាទុកជាព្រាង
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                className="flex-1"
              >
                ផ្សាយអត្ថបទ
              </Button>
            </div>
          </div>

          {/* Category Selector */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700">
              ជំពូកអត្ថបទ (Category)
            </h3>
            <select
              value={formData.category}
              onChange={handleCategoryChange}
              className="w-full p-2.5 text-xs rounded-lg border border-stone-300 bg-white"
            >
              {(categories || []).map((c) => (
                <option key={c.id} value={c.name}>
                  {c.khmerName} ({c.name})
                </option>
              ))}
            </select>
          </div>

          {/* Cover Image Uploader Preview */}
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-stone-700">
              រូបភាពគម្រប (Cover Image)
            </h3>
            <ImageUploaderPreview
              imageUrl={formData.coverImage}
              onChange={(url) => setFormData({ ...formData, coverImage: url })}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
