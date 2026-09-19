import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";

const HomePage = lazy(() => import("../pages/public/HomePage").then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import("../pages/public/AboutPage").then((m) => ({ default: m.AboutPage })));
const ActivitiesPage = lazy(() => import("../pages/public/ActivitiesPage").then((m) => ({ default: m.ActivitiesPage })));
const ActivityDetailPage = lazy(() => import("../pages/public/ActivityDetailPage").then((m) => ({ default: m.ActivityDetailPage })));
const MonksPage = lazy(() => import("../pages/public/MonksPage").then((m) => ({ default: m.MonksPage })));
const NewsPage = lazy(() => import("../pages/public/NewsPage").then((m) => ({ default: m.NewsPage })));
const NewsDetailPage = lazy(() => import("../pages/public/NewsDetailPage").then((m) => ({ default: m.NewsDetailPage })));
const DharmaPage = lazy(() => import("../pages/public/DharmaPage").then((m) => ({ default: m.DharmaPage })));
const EventsPage = lazy(() => import("../pages/public/EventsPage").then((m) => ({ default: m.EventsPage })));
const GalleryPage = lazy(() => import("../pages/public/GalleryPage").then((m) => ({ default: m.GalleryPage })));
const WatKhmerPage = lazy(() => import("../pages/public/WatKhmerPage").then((m) => ({ default: m.WatKhmerPage })));
const ContactPage = lazy(() => import("../pages/public/ContactPage").then((m) => ({ default: m.ContactPage })));
const WatDetailPage = lazy(() => import("../pages/public/WatDetailPage").then((m) => ({ default: m.WatDetailPage })));

function LoadingFallback() {
  return <div className="min-h-[40vh] flex items-center justify-center text-[#11178F]">Loading…</div>;
}

export function PublicRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
