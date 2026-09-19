import "dotenv/config";
export const env = { port: Number(process.env.PORT || 4000), frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:5173", adminOrigin: process.env.ADMIN_ORIGIN || "http://localhost:3001", sessionSecret: process.env.SESSION_SECRET || "development-only-secret", isProduction: process.env.NODE_ENV === "production" };
