import { Outlet } from "react-router-dom";
export function AuthLayout() { return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}><Outlet /></main>; }
