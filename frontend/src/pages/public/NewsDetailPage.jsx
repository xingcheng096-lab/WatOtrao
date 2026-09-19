import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  ChevronLeft,
  Facebook,
  Send,
  Link2,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { LotusDivider, KhmerDivider } from "../../components/traditional/LotusDivider";
import { Button, Card, Breadcrumb } from "../../components/common/UIComponents";
import { INITIAL_POSTS } from "../../data/data";

export function NewsDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = INITIAL_POSTS.find((p) => p.slug === slug) || INITIAL_POSTS[0] || {};

  const relatedPosts = (INITIAL_POSTS || []).filter(
    (p) => p && p.id !== post.id && p.status === "Published"
  ).slice(0, 3);

  const tagsList = Array.isArray(post?.tags)
    ? post.tags
    : typeof post?.tags === "string"
    ? post.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const contentParagraphs = (post?.content || "").split("\n\n").filter(Boolean);

  const copyShareLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "ទំព័រដើម", href: "/" },
          { label: "ព័ត៌មាន", href: "/news" },
          { label: post.khmerTitle || post.title || "ព័ត៌មាន" }
        ]}
      />

      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#6E1F1F] text-[#FFF8E7] border border-[#D4AF37]">
          {post.category || "ព័ត៌មាន"}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-khmer-serif text-[#4A1414] leading-tight">
          {post.khmerTitle}
        </h1>

        <p className="text-sm font-medium text-stone-600">
          {post.title}
        </p>

        {/* Metadata & Author Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-amber-200/80 text-xs text-stone-600">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-medium text-[#4A1414]">
              <User className="w-4 h-4 text-[#C9972B]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C9972B]" />
              <span>{post.buddhistDate || post.date}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C9972B]" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={copyShareLink}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-gray-300 hover:border-[#6E1F1F] bg-white text-xs text-stone-700 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>បានចម្លង</span>
                </>
              ) : (
                <>
                  <Link2 className="w-3.5 h-3.5" />
                  <span>ចែករំលែក</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Large Featured Image */}
      <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-md">
        <img
          src={post.coverImage}
          alt={post.khmerTitle}
          className="w-full h-80 sm:h-96 object-cover"
        />
      </div>

      {/* Excerpt Lead Box */}
      <div className="p-5 rounded-xl bg-amber-50/90 border-l-4 border-[#6E1F1F] text-sm text-[#4A1414] font-medium leading-relaxed">
        {post.excerpt}
      </div>

      {/* Main Editorial Content */}
      <article className="prose max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-6">
        {contentParagraphs.map((para, i) => (
          <p key={i} className="whitespace-pre-line">
            {para}
          </p>
        ))}
      </article>

      {/* Tags */}
      {tagsList.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-200">
          <span className="text-xs font-bold uppercase text-stone-500">ពាក្យគន្លឹះ៖</span>
          {tagsList.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-[#4A1414]"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <LotusDivider />

      {/* Related Articles Section */}
      <div className="space-y-6 pt-4">
        <h3 className="text-xl font-bold font-khmer-serif text-[#4A1414]">
          អត្ថបទពាក់ព័ន្ធផ្សេងទៀត
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedPosts.map((rel) => (
            <Card key={rel.id} className="bg-white flex flex-col justify-between">
              <img
                src={rel.coverImage}
                alt={rel.khmerTitle}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 space-y-2">
                <span className="text-[10px] text-[#C9972B] font-bold uppercase">{rel.category}</span>
                <h4 className="font-bold text-xs font-khmer-serif text-[#4A1414] line-clamp-2">
                  {rel.khmerTitle}
                </h4>
                <Link
                  to={`/news/${rel.slug}`}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6E1F1F] hover:underline pt-2"
                >
                  <span>អានបន្ត</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
