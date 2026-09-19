import "dotenv/config";
export const env = { port: Number(process.env.PORT || 4000), frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:5173", adminOrigin: process.env.ADMIN_ORIGIN || "http://localhost:3001" };
