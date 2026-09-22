import React from "react";
import { X, AlertCircle, CheckCircle2, ChevronRight, Upload, Trash2 } from "lucide-react";
import { getStatusColor, getRoleBadgeColor, getRoleDisplayName } from "../../utils/helpers";
import { LotusDivider } from "../traditional/LotusDivider";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  icon: Icon,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-4 py-2 text-sm rounded-lg gap-2",
    lg: "px-6 py-3 text-base rounded-xl gap-2.5 shadow-md"
  }[size] || "px-4 py-2 text-sm rounded-lg gap-2";

  const variantClasses = {
    primary:
      "bg-[#1B24C9] hover:bg-[#11178F] text-white font-medium border border-[#11178F] hover:shadow-md shadow-xs active:translate-y-0.5",
    gold:
      "bg-[#D4A62A] hover:bg-[#C99624] text-[#11178F] font-bold border border-[#C99624] hover:shadow-md shadow-xs active:translate-y-0.5",
    secondary:
      "bg-[#FFF9EA] hover:bg-[#F7EED8] text-[#11178F] font-semibold border border-[#D4A62A]/50 shadow-xs active:translate-y-0.5",
    outline:
      "bg-transparent hover:bg-[#1B24C9]/10 text-[#11178F] border border-[#11178F]/60",
    danger:
      "bg-[#8A2727] hover:bg-[#721E1E] text-white border border-[#8A2727] shadow-xs",
    ghost:
      "bg-transparent hover:bg-[#1B24C9]/8 text-[#30251F] hover:text-[#11178F]"
  }[variant] || "bg-[#1B24C9] text-white";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
}

export function SectionTitle({
  title,
  khmerTitle,
  subtitle,
  centered = true,
  theme = "light",
  className = ""
}) {
  const isDark = theme === "dark";

  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"} ${className}`}>
      {/* Decorative Eyebrow */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3 ${
        isDark ? "bg-[#D4A62A]/20 text-[#FFF9EA] border border-[#D4A62A]/40" : "bg-[#1B24C9]/10 text-[#11178F] border border-[#1B24C9]/25"
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
        <span>{title}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A62A]" />
      </div>

      {/* Main Khmer Heading */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-khmer-serif leading-snug ${
        isDark ? "text-[#FFF9EA]" : "text-[#11178F]"
      }`}>
        {khmerTitle}
      </h2>

      {/* Optional Lotus Divider */}
      {centered && (
        <LotusDivider
          className="my-3"
          goldColor="#D4A62A"
          maroon={isDark ? "#D4A62A" : "#1B24C9"}
        />
      )}

      {/* Subtitle / Excerpt */}
      {subtitle && (
        <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
          centered ? "mx-auto" : ""
        } ${isDark ? "text-[#FFF9EA]/80" : "text-[#30251F]/80"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function StatusBadge({ status, className = "" }) {
  const color = getStatusColor(status);
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${color} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full mr-1.5 bg-current opacity-75" />
      {status}
    </span>
  );
}

export function RoleBadge({ role, className = "" }) {
  const colorClass = getRoleBadgeColor(role);
  const name = getRoleDisplayName(role);
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colorClass} ${className}`}
    >
      {name}
    </span>
  );
}

export function Card({ children, className = "", hover = true, onClick, ...props }) {
  return (
    <div
      {...props}
      onClick={onClick}
      className={`bg-white rounded-2xl border border-[#D4A62A]/25 overflow-hidden shadow-xs ${
        hover ? "hover-lift transition-all duration-300 hover:border-[#D4A62A] hover:shadow-md" : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-xl" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div
        className={`relative bg-[#FFF9EA] rounded-2xl border-2 border-[#D4A62A]/50 shadow-2xl w-full ${maxWidth} overflow-hidden animate-scale-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with WAT O TRAO deep blue styling */}
        <div className="bg-[#11178F] text-[#FFF9EA] px-6 py-4 flex items-center justify-between border-b border-[#D4A62A]/40">
          <h3 className="text-lg font-bold font-khmer-serif flex items-center gap-2">
            <span className="w-2 h-2 rotate-45 bg-[#D4A62A]" />
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#FFF9EA]/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto text-[#30251F]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed with this action?",
  confirmLabel = "Confirm",
  confirmVariant = "danger"
}) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} maxWidth="max-w-md">
      <div className="text-center py-2">
        <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <p className="text-sm text-[#30251F] mb-6 leading-relaxed">{message}</p>
        <div className="flex items-center justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant={confirmVariant}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-[#30251F]/70 py-2">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#D4A62A]" />}
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="hover:text-[#1B24C9] font-medium transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className={isLast ? "font-semibold text-[#11178F]" : ""}>
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md text-xs font-semibold transition-colors ${
              currentPage === page
                ? "bg-[#11178F] text-[#FFF9EA] border border-[#D4A62A]"
                : "bg-white hover:bg-[#F7EED8] text-[#30251F] border border-stone-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}

export function ImageUploaderPreview({ label, value, onChange, placeholderText = "Click or drag image to upload" }) {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onChange(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold text-[#11178F] uppercase tracking-wider">{label}</label>}
      {value ? (
        <div className="relative rounded-lg overflow-hidden border border-[#D4A62A]/50 max-h-48 group">
          <img src={value} alt="Preview" className="w-full h-44 object-cover" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <label className="cursor-pointer bg-white/90 hover:bg-white text-xs px-3 py-1.5 rounded-md font-medium text-stone-900 flex items-center gap-1">
              <Upload className="w-3.5 h-3.5" /> Change
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
            <button
              type="button"
              onClick={() => onChange("")}
              className="bg-rose-600 hover:bg-rose-700 text-white text-xs px-3 py-1.5 rounded-md font-medium flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Remove
            </button>
          </div>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#D4A62A]/40 rounded-xl hover:border-[#D4A62A] bg-[#FFF9EA]/60 hover:bg-[#FFF9EA] cursor-pointer transition-colors">
          <Upload className="w-8 h-8 text-[#C99624] mb-2" />
          <span className="text-xs font-medium text-[#11178F]">{placeholderText}</span>
          <span className="text-[11px] text-stone-500 mt-1">Supports PNG, JPG, WebP</span>
          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
      )}
    </div>
  );
}

export function StatCard({ label, value, subtext, icon: Icon, color = "blue" }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-[#D4A62A]/30 shadow-xs hover-lift relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">{label}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#11178F] font-khmer-serif">{value}</h3>
          {subtext && <p className="text-xs text-stone-500 mt-1.5">{subtext}</p>}
        </div>
        {Icon && (
          <div className="w-11 h-11 rounded-lg bg-[#1B24C9]/10 border border-[#1B24C9]/25 flex items-center justify-center text-[#1B24C9]">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#11178F] via-[#D4A62A] to-[#11178F]" />
    </div>
  );
}
