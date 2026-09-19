import { Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AuthLayout } from "./layouts/AuthLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ModulePage, EditorPage } from "./pages/ModulePage";
import { SettingsPage } from "./pages/SettingsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ToastProvider } from "./components/ui";
const modules = ["posts", "categories", "activities", "dharma", "events", "monks", "projects", "gallery", "media", "users", "audit-logs"];
const editable = ["posts", "activities", "dharma", "events", "monks", "projects", "gallery"];
export default function App() { return <ToastProvider><AuthProvider><Routes><Route element={<AuthLayout />}><Route path="/login" element={<LoginPage />} /></Route><Route element={<ProtectedRoute />}><Route element={<AdminLayout />}><Route index element={<DashboardPage />} /><Route path="profile" element={<ProfilePage />} />{modules.map((name) => <Route key={name} path={name} element={<ModulePage name={name} />} />)}{editable.map((name) => <Route key={`${name}-new`} path={`${name}/new`} element={<EditorPage name={name} />} />)}{editable.map((name) => <Route key={`${name}-edit`} path={`${name}/:id/edit`} element={<EditorPage name={name} id />} />)}<Route path="settings" element={<SettingsPage />} /></Route></Route><Route path="*" element={<NotFoundPage />} /></Routes></AuthProvider></ToastProvider>; }
