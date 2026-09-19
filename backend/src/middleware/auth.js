import crypto from "node:crypto";
import { prisma } from "../db/prisma.js";
const COOKIE = "wat_otrao_session";
export const sessionCookie = COOKIE;
export function hashToken(token) { return crypto.createHash("sha256").update(token).digest("hex"); }
export async function authenticate(req, res, next) {
  try {
    const token = req.cookies[COOKIE];
    if (!token) return res.status(401).json({ error: "Authentication required" });
    const session = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) }, include: { user: true } });
    if (!session || session.revokedAt || session.expiresAt <= new Date() || session.user.status !== "ACTIVE") return res.status(401).json({ error: "Authentication required" });
    req.auth = { session, user: session.user };
    await prisma.session.update({ where: { id: session.id }, data: { lastUsedAt: new Date() } });
    next();
  } catch (error) { next(error); }
}
export function authorize(...roles) { return (req, res, next) => roles.includes(req.auth?.user?.role) ? next() : res.status(403).json({ error: "Forbidden" }); }
