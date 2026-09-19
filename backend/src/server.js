import app from "./app.js";
import { env } from "./config/env.js";
app.listen(env.port, () => console.log(`Wat Otrao API listening on ${env.port}`));
process.on("SIGTERM", async () => { await import("./db/prisma.js").then(({ prisma }) => prisma.$disconnect()); process.exit(0); });
