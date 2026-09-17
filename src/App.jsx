import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminDataProvider } from "./context/AdminDataContext";

// Public Pages
import { HomePage } from "./pages/public/HomePage";
import { AboutPage } from "./pages/public/AboutPage";
import { ActivitiesPage } from "./pages/public/ActivitiesPage";
import { ActivityDetailPage } from "./pages/public/ActivityDetailPage";
import { MonksPage } from "./pages/public/MonksPage";
import { NewsPage } from "./pages/public/NewsPage";
import { NewsDetailPage } from "./pages/public/NewsDetailPage";
import { DharmaPage } from "./pages/public/DharmaPage";
import { EventsPage } from "./pages/public/EventsPage";
import { GalleryPage } from "./pages/public/GalleryPage";
import { WatKhmerPage } from "./pages/public/WatKhmerPage";
import { ContactPage } from "./pages/public/ContactPage";
import { WatDetailPage } from "./pages/public/WatDetailPage";

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
    </AdminDataProvider>
  );
}
