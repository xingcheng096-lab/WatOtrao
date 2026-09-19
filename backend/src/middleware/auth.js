export function authenticate(req, res, next) { if (!req.session?.userId) return res.status(401).json({ error: "Authentication required" }); next(); }
export function authorize(...roles) { return (req, res, next) => roles.includes(req.session?.role) ? next() : res.status(403).json({ error: "Forbidden" }); }
