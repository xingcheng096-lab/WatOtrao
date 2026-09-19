import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const links = ["posts", "activities", "dharma", "events", "monks", "projects", "gallery", "media", "users", "settings", "audit-logs"];
export function AdminLayout() { const { logout } = useAuth(); return <div style={{ display: "flex", minHeight: "100vh" }}><aside style={{ width: 240, background: "#11178f", color: "white", padding: 24 }}><h2>Wat Ô Trao</h2>{links.map((link) => <NavLink key={link} to={`/${link}`} style={{ display: "block", padding: "10px 0", opacity: .9 }}>{link}</NavLink>)}<button onClick={logout} style={{ marginTop: 20 }}>Log out</button></aside><main style={{ flex: 1, padding: 32 }}><Outlet /></main></div>; }
