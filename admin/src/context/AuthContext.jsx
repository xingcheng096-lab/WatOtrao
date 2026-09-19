import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
const API = import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1";
export const isAdminDemoMode = import.meta.env.VITE_ADMIN_DEMO_MODE === "true";
const DEMO_SESSION_KEY = "wat-otrao-admin-demo-session";
const DEMO_EMAIL = "admin@example.com";
const DEMO_PASSWORD = "admin123";
const demoUser = { id: "demo-admin", name: "Admin Demo", email: DEMO_EMAIL, role: "SUPER_ADMIN", isDemo: true };

export function AuthProvider({ children }) { const [user, setUser] = useState(null); const [loading, setLoading] = useState(true); useEffect(() => { if (isAdminDemoMode) { setUser(window.sessionStorage.getItem(DEMO_SESSION_KEY) === "active" ? demoUser : null); setLoading(false); return undefined; } fetch(`${API}/auth/me`, { credentials: "include" }).then((r) => r.ok ? r.json() : null).then((data) => setUser(data?.user || null)).catch(() => setUser(null)).finally(() => setLoading(false)); }, []); const login = async (email, password) => { if (isAdminDemoMode) { if (email !== DEMO_EMAIL || password !== DEMO_PASSWORD) throw new Error("Demo អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ"); window.sessionStorage.setItem(DEMO_SESSION_KEY, "active"); setUser(demoUser); return; } const response = await fetch(`${API}/auth/login`, { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Login failed"); setUser(data.user); }; const logout = async () => { if (isAdminDemoMode) { window.sessionStorage.removeItem(DEMO_SESSION_KEY); setUser(null); return; } await fetch(`${API}/auth/logout`, { method: "POST", credentials: "include" }).catch(() => {}); setUser(null); }; const value = useMemo(() => ({ user, loading, login, logout }), [user, loading]); return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>; }
export function useAuth() { return useContext(AuthContext); }
