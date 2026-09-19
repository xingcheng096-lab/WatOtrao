import React, { createContext, useContext, useState, useEffect } from "react";
import {
  INITIAL_POSTS,
  INITIAL_CATEGORIES,
  INITIAL_EVENTS,
  INITIAL_MONKS,
  INITIAL_GALLERIES,
  INITIAL_MEDIA,
  INITIAL_PROJECTS,
  INITIAL_USERS,
  INITIAL_SITE_SETTINGS
} from "../data/data";

const AdminDataContext = createContext();

// Helper for safe localStorage loading
function getInitialArray(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === "undefined" || saved === "null") return fallback;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : fallback;
  } catch (e) {
    return fallback;
  }
}

function getInitialObject(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === "undefined" || saved === "null") return fallback;
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== "object") return fallback;
    // Automatically modernize settings if old name or address is stored
    if (key === "wat_admin_settings") {
      // Ensure official logo and brand colors are always present
      if (!parsed.officialLogo || !parsed.brandColors || parsed.logo?.includes(".svg")) {
        parsed.officialLogo = fallback.officialLogo;
        parsed.logo = fallback.logo;
        parsed.logoAlt = fallback.logoAlt;
        parsed.brandColors = fallback.brandColors;
      }
      if (
        parsed.templeNameKh !== fallback.templeNameKh ||
        parsed.officialFormalNameKh !== fallback.officialFormalNameKh ||
        parsed.templeNameEn !== fallback.templeNameEn ||
        parsed.templeNameVi !== fallback.templeNameVi ||
        parsed.templeName !== fallback.templeName ||
        parsed.templeMapName !== fallback.templeMapName ||
        parsed.address?.includes("Phum Preah Trapeang") ||
        parsed.khmerTempleName === "វត្តខ្មែរក្រោម"
      ) {
        return {
          ...fallback,
          ...parsed,
          templeNameKh: fallback.templeNameKh,
          officialFormalNameKh: fallback.officialFormalNameKh,
          templeNameVi: fallback.templeNameVi,
          templeNameEn: fallback.templeNameEn,
          subtitleKh: fallback.subtitleKh,
          khmerTempleName: fallback.khmerTempleName,
          templeName: fallback.templeName,
          templeMapName: fallback.templeMapName,
          address: fallback.address,
          mapSearchQuery: fallback.mapSearchQuery,
          siteTitle: fallback.siteTitle,
          bankAccount: fallback.bankAccount,
          logo: fallback.logo,
          officialLogo: fallback.officialLogo,
          logoAlt: fallback.logoAlt,
          brandColors: fallback.brandColors
        };
      }
    }
    return parsed;
  } catch (e) {
    return fallback;
  }
}

export function AdminDataProvider({ children }) {
  // Initialize state from localStorage or initial mock data
  const [currentUser, setCurrentUser] = useState(() =>
    getInitialObject("wat_admin_user", INITIAL_USERS[0])
  );

  const [posts, setPosts] = useState(() =>
    getInitialArray("wat_admin_posts", INITIAL_POSTS)
  );

  const [categories, setCategories] = useState(() =>
    getInitialArray("wat_admin_categories", INITIAL_CATEGORIES)
  );

  const [events, setEvents] = useState(() =>
    getInitialArray("wat_admin_events", INITIAL_EVENTS)
  );

  const [monks, setMonks] = useState(() =>
    getInitialArray("wat_admin_monks", INITIAL_MONKS)
  );

  const [media, setMedia] = useState(() =>
    getInitialArray("wat_admin_media", INITIAL_MEDIA)
  );

  const [projects, setProjects] = useState(() =>
    getInitialArray("wat_admin_projects", INITIAL_PROJECTS)
  );

  const [settings, setSettings] = useState(() =>
    getInitialObject("wat_admin_settings", INITIAL_SITE_SETTINGS)
  );

  // Save to localStorage when updated
  useEffect(() => {
    localStorage.setItem("wat_admin_posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("wat_admin_categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("wat_admin_events", JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem("wat_admin_monks", JSON.stringify(monks));
  }, [monks]);

  useEffect(() => {
    localStorage.setItem("wat_admin_media", JSON.stringify(media));
  }, [media]);

  useEffect(() => {
    localStorage.setItem("wat_admin_projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("wat_admin_settings", JSON.stringify(settings));
  }, [settings]);

  // Actions
  const addPost = (newPost) => {
    const post = {
      id: `post-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      author: currentUser.name,
      readTime: "5 នាទី",
      ...newPost
    };
    setPosts([post, ...posts]);
    return post;
  };

  const updatePost = (id, updatedFields) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, ...updatedFields } : p)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const addCategory = (name, khmerName, description) => {
    const newCat = {
      id: `cat-${Date.now()}`,
      name,
      khmerName,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      description,
      count: 0
    };
    setCategories([...categories, newCat]);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  const addEvent = (newEvent) => {
    const evt = {
      id: `evt-${Date.now()}`,
      status: "Upcoming",
      ...newEvent
    };
    setEvents([evt, ...events]);
  };

  const updateEvent = (id, fields) => {
    setEvents(events.map((e) => (e.id === id ? { ...e, ...fields } : e)));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const addMonk = (newMonk) => {
    const monk = {
      id: `monk-${Date.now()}`,
      ...newMonk
    };
    setMonks([...monks, monk]);
  };

  const updateMonk = (id, fields) => {
    setMonks(monks.map((m) => (m.id === id ? { ...m, ...fields } : m)));
  };

  const deleteMonk = (id) => {
    setMonks(monks.filter((m) => m.id !== id));
  };

  const addMedia = (newMedia) => {
    const item = {
      id: `media-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      ...newMedia
    };
    setMedia([item, ...media]);
  };

  const deleteMedia = (id) => {
    setMedia(media.filter((m) => m.id !== id));
  };

  const updateSettings = (newSettings) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <AdminDataContext.Provider
      value={{
        currentUser: currentUser || INITIAL_USERS[0],
        setCurrentUser,
        posts: Array.isArray(posts) ? posts : INITIAL_POSTS,
        addPost,
        updatePost,
        deletePost,
        categories: Array.isArray(categories) ? categories : INITIAL_CATEGORIES,
        addCategory,
        deleteCategory,
        events: Array.isArray(events) ? events : INITIAL_EVENTS,
        addEvent,
        updateEvent,
        deleteEvent,
        monks: Array.isArray(monks) ? monks : INITIAL_MONKS,
        addMonk,
        updateMonk,
        deleteMonk,
        media: Array.isArray(media) ? media : INITIAL_MEDIA,
        addMedia,
        deleteMedia,
        projects: Array.isArray(projects) ? projects : INITIAL_PROJECTS,
        settings: settings || INITIAL_SITE_SETTINGS,
        updateSettings
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error("useAdminData must be used within an AdminDataProvider");
  }
  return context;
}
