import { Link } from "react-router-dom";

export function Button({ children, variant = "primary", ...props }) { return <button className={`btn btn-${variant}`} {...props}>{children}</button>; }
export function Badge({ children, tone = "default" }) { return <span className={`badge badge-${tone}`}>{children}</span>; }
export function PageHeader({ eyebrow = "ADMIN CMS", title, description, action }) { return <div className="page-header"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>{action}</div>; }
export function StatCard({ label, value, tone = "blue" }) { return <div className={`stat-card stat-${tone}`}><span>{label}</span><strong>{value}</strong><small>ធៀបនឹងខែមុន ↑</small></div>; }
export function SearchInput({ value, onChange, placeholder = "ស្វែងរក..." }) { return <input className="search-input" value={value} onChange={onChange} placeholder={`⌕  ${placeholder}`} />; }
export function EmptyState({ children = "មិនទាន់មានទិន្នន័យ" }) { return <div className="empty-state">{children}</div>; }
export function Modal({ open, title, onClose, children }) { if (!open) return null; return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(e) => e.stopPropagation()}><div className="modal-head"><h2>{title}</h2><button className="icon-btn" onClick={onClose}>×</button></div>{children}</div></div>; }
export function LinkButton({ to, children }) { return <Link className="btn btn-primary" to={to}>{children}</Link>; }
