/**
 * Helpers & Utilities for WAT KHMER
 */

export const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("km-KH", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch (e) {
    return dateString;
  }
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount || 0);
};

export const getStatusColor = (status) => {
  switch (status) {
    case "Published":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
    case "Draft":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Pending Review":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "Rejected":
      return "bg-rose-100 text-rose-800 border-rose-300";
    case "Active":
      return "bg-emerald-100 text-emerald-800 border-emerald-300";
    case "Upcoming":
      return "bg-amber-100 text-amber-800 border-amber-300";
    case "Completed":
      return "bg-stone-100 text-stone-700 border-stone-300";
    case "Past":
      return "bg-stone-100 text-stone-600 border-stone-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export const getRoleBadgeColor = (role) => {
  switch (role) {
    case "super_admin":
      return "bg-[#6E1F1F] text-[#FFF8E7] border-[#D4AF37]";
    case "admin":
      return "bg-[#4A1414] text-[#E8D7A5] border-[#C9972B]";
    case "editor":
      return "bg-amber-800 text-amber-100 border-amber-500";
    case "author":
      return "bg-stone-700 text-stone-100 border-stone-400";
    default:
      return "bg-gray-700 text-gray-100 border-gray-400";
  }
};

export const getRoleDisplayName = (role) => {
  switch (role) {
    case "super_admin":
      return "Super Admin (ព្រះចៅអធិការ)";
    case "admin":
      return "Admin (គណៈកម្មការ)";
    case "editor":
      return "Editor (និពន្ធនាយក)";
    case "author":
      return "Author (អ្នកនិពន្ធ)";
    default:
      return role;
  }
};
