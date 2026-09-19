import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AuthLayout } from "./layouts/AuthLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ModulePage } from "./pages/ModulePage";
const modules = ["posts", "activities", "dharma", "events", "monks", "projects", "gallery", "media", "users", "settings", "audit-logs"];
export default function App() { return <AuthProvider><Routes><Route element={<AuthLayout />}><Route path="/login" element={<LoginPage />} /></Route><Route element={<ProtectedRoute />}><Route element={<AdminLayout />}><Route index element={<DashboardPage />} />{modules.map((name) => <Route key={name} path={name} element={<ModulePage name={name} />} />)}</Route></Route><Route path="*" element={<Navigate to="/" replace />} /></Routes></AuthProvider>; }
