import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminDataProvider } from "./context/AdminDataContext";

// Public Pages
const HomePage = lazy(() => import("./pages/public/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("./pages/public/AboutPage").then((m) => ({ default: m.AboutPage })));
const ActivitiesPage = lazy(() => import("./pages/public/ActivitiesPage").then((m) => ({ default: m.ActivitiesPage })));
const ActivityDetailPage = lazy(() => import("./pages/public/ActivityDetailPage").then((m) => ({ default: m.ActivityDetailPage })));
const MonksPage = lazy(() => import("./pages/public/MonksPage").then((m) => ({ default: m.MonksPage })));
const NewsPage = lazy(() => import("./pages/public/NewsPage").then((m) => ({ default: m.NewsPage })));
const NewsDetailPage = lazy(() => import("./pages/public/NewsDetailPage").then((m) => ({ default: m.NewsDetailPage })));
const DharmaPage = lazy(() => import("./pages/public/DharmaPage").then((m) => ({ default: m.DharmaPage })));
const EventsPage = lazy(() => import("./pages/public/EventsPage").then((m) => ({ default: m.EventsPage })));
const GalleryPage = lazy(() => import("./pages/public/GalleryPage").then((m) => ({ default: m.GalleryPage })));
const WatKhmerPage = lazy(() => import("./pages/public/WatKhmerPage").then((m) => ({ default: m.WatKhmerPage })));
const ContactPage = lazy(() => import("./pages/public/ContactPage").then((m) => ({ default: m.ContactPage })));
const WatDetailPage = lazy(() => import("./pages/public/WatDetailPage").then((m) => ({ default: m.WatDetailPage })));

// Admin Pages
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminPosts } from "./pages/admin/AdminPosts";
import { AdminPostForm } from "./pages/admin/AdminPostForm";
import { AdminCategories } from "./pages/admin/AdminCategories";
import { AdminEvents } from "./pages/admin/AdminEvents";
import { AdminMonks } from "./pages/admin/AdminMonks";
import { AdminGallery } from "./pages/admin/AdminGallery";
import { AdminMedia } from "./pages/admin/AdminMedia";
import { AdminProjects } from "./pages/admin/AdminProjects";
import { AdminSettings } from "./pages/admin/AdminSettings";

export default function App() {
  return (
    <AdminDataProvider>
      <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center text-[#11178F]">Loading…</div>}>
      <Routes>
        {/* Public Website Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="activities/:id" element={<ActivityDetailPage />} />
          <Route path="monks" element={<MonksPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route path="dharma" element={<DharmaPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="wat-khmer" element={<WatKhmerPage />} />
          <Route path="khmer-krom" element={<Navigate to="/wat-khmer" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="wats/:slug" element={<WatDetailPage />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="posts/new" element={<AdminPostForm />} />
          <Route path="posts/edit/:id" element={<AdminPostForm />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="monks" element={<AdminMonks />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="media" element={<AdminMedia />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </AdminDataProvider>
  );
}
