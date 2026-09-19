import { prisma } from "../db/prisma.js";
export function audit(action, data = {}) { return prisma.auditLog.create({ data: { action, entity: data.entity || "AUTH", entityId: data.entityId, userId: data.userId, metadata: data.metadata } }).catch(() => undefined); }
