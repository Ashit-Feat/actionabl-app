import "./env";
import express, { type Request, type Response, type NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { Resend } from "resend";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── CONFIG ────────────────────────────────────────────────
const PORT = parseInt(process.env.PORT || "3000", 10);
const NODE_ENV = process.env.NODE_ENV || "development";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const FROM_EMAIL = "Website Inquiry <inquiry@actionabl.wiki>";
const RECIPIENTS = [
  "hiren.panchani@featsystems.com",
];

if (!RESEND_API_KEY) {
  console.error("FATAL: RESEND_API_KEY environment variable is not set.");
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

const BASE_URL =
  process.env.VITE_BASE_URL ||
  process.env.BASE_URL ||
  (NODE_ENV === "production"
    ? "https://actionabl.ai"
    : "http://localhost:3000");

// ─── APP ────────────────────────────────────────────────────
const app = express();
const server = createServer(app);

// ─── CORS ───────────────────────────────────────────────────
const ALLOWED_ORIGINS = new Set([
  "https://actionabl.ai",
  "https://www.actionabl.ai",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5173",
]);

app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: "100kb" }));

// ─── RATE LIMITER (in-memory, per IP) ──────────────────────
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimit(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  let entry = requestCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    entry = { count: 0, resetAt: now + WINDOW_MS };
    requestCounts.set(ip, entry);
  }

  entry.count++;

  res.setHeader("X-RateLimit-Limit", String(MAX_PER_WINDOW));
  res.setHeader("X-RateLimit-Remaining", String(Math.max(0, MAX_PER_WINDOW - entry.count)));
  res.setHeader("X-RateLimit-Reset", String(Math.ceil(entry.resetAt / 1000)));

  if (entry.count > MAX_PER_WINDOW) {
    return res.status(429).json({ message: "Too many requests. Please try again later." });
  }

  next();
}

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of requestCounts) {
    if (now > entry.resetAt) requestCounts.delete(ip);
  }
}, 300_000);

// ─── PAGE META ─────────────────────────────────────────────
const PAGE_META: Record<string, {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  canonical: string;
}> = {
  "/": {
    title: "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
    description: "Actionabl is a business orchestration platform that coordinates AI, automations, people, and systems across end-to-end enterprise processes with built-in control, resilience, and human oversight.",
    ogTitle: "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
    ogDescription: "Actionabl is a business orchestration platform that enables the autonomous enterprise by coordinating AI, automations, people, and systems across processes, with built-in control, resilience, and human oversight.",
    ogImage: `${BASE_URL}/assets/og_img/actionabl-og.jpg`,
    ogUrl: `${BASE_URL}/`,
    canonical: `${BASE_URL}/`,
  },
  "/about": {
    title: "About Us | The Team Behind | Actionabl",
    description: "Know about Actionabl, built by enterprise operators for enterprise operators. Discover our story, mission, and the team behind the enterprise platform.",
    ogTitle: "About Us | The Team Behind | Actionabl",
    ogDescription: "Know about Actionabl, built by enterprise operators for enterprise operators. Discover our story, mission, and the team behind the enterprise platform.",
    ogImage: `${BASE_URL}/assets/og_img/about-og.jpg`,
    ogUrl: `${BASE_URL}/about`,
    canonical: `${BASE_URL}/about`,
  },
  "/terms-of-use": {
    title: "Terms of Use | Actionabl",
    description: "Welcome to Actionabl's website! By accessing and using this site, you agree to comply with our terms and conditions of use outlined herein.",
    ogTitle: "Terms of Use | Actionabl",
    ogDescription: "Welcome to Actionabl's website! By accessing and using this site, you agree to comply with our terms and conditions of use outlined herein.",
    ogImage: `${BASE_URL}/assets/og_img/terms-of-use-og.jpg`,
    ogUrl: `${BASE_URL}/terms-of-use`,
    canonical: `${BASE_URL}/terms-of-use`,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Actionabl",
    description: "Actionabl prioritizes visitor privacy. Our Privacy Policy explains what information we collect, how it is recorded, and how we use it to protect and improve your experience.",
    ogTitle: "Privacy Policy | Actionabl",
    ogDescription: "Actionabl prioritizes visitor privacy. Our Privacy Policy explains what information we collect, how it is recorded, and how we use it to protect and improve your experience.",
    ogImage: `${BASE_URL}/assets/og_img/privacy-policy-og.jpg`,
    ogUrl: `${BASE_URL}/privacy-policy`,
    canonical: `${BASE_URL}/privacy-policy`,
  },
  "/eula": {
    title: "End User License Agreement (EULA) | Actionabl",
    description: "Read the End User License Agreement (EULA) for Actionabl software, outlining usage rights, restrictions, licensing terms, and legal conditions for users.",
    ogTitle: "End User License Agreement (EULA) | Actionabl",
    ogDescription: "Read the End User License Agreement (EULA) for Actionabl software, outlining usage rights, restrictions, licensing terms, and legal conditions for users.",
    ogImage: `${BASE_URL}/assets/og_img/eula-og.jpg`,
    ogUrl: `${BASE_URL}/eula`,
    canonical: `${BASE_URL}/eula`,
  },
};

// ─── HELPERS ───────────────────────────────────────────────
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#039;");
}

function injectMeta(html: string, meta: typeof PAGE_META[string]): string {
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.description)}$2`);
  html = html.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.ogTitle)}$2`);
  html = html.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.ogDescription)}$2`);
  html = html.replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/, `$1${meta.ogImage}$2`);
  html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${meta.ogUrl}$2`);
  html = html.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.ogTitle)}$2`);
  html = html.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${escapeHtml(meta.ogDescription)}$2`);
  html = html.replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, `$1${meta.ogImage}$2`);
  html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${meta.canonical}$2`);
  return html;
}

// ─── API ROUTES ────────────────────────────────────────────
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", rateLimit, async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, company, designation, country, message, consent } = req.body;

    const errors: string[] = [];
    if (!fullName?.trim()) errors.push("Full name is required");
    if (!email?.trim()) errors.push("Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email format");
    if (!message?.trim()) errors.push("Message is required");
    if (!consent) errors.push("Privacy consent is required");

    if (errors.length > 0) {
      return res.status(400).json({ message: errors.join("; ") });
    }

    const safe = {
      fullName: escapeHtml(fullName.trim()),
      email: escapeHtml(email.trim()),
      phone: escapeHtml(phone?.trim() || "-"),
      company: escapeHtml(company?.trim() || "-"),
      designation: escapeHtml(designation?.trim() || "-"),
      country: escapeHtml(country?.trim() || "-"),
      message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
    };

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENTS,
      replyTo: email.trim(),
      subject: `New contact form submission for actionabl.ai from ${fullName.trim()}`,
      text: [
        `Name: ${fullName.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone?.trim() || "-"}`,
        `Company: ${company?.trim() || "-"}`,
        `Designation: ${designation?.trim() || "-"}`,
        `Country: ${country?.trim() || "-"}`,
        `Consent: ${consent ? "Yes" : "No"}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
      html: `
        <h2>New contact form submission for actionabl.ai</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;">Name</td><td style="padding:8px 12px;border:1px solid #ddd;">${safe.fullName}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;background:#f9f9f9;">Email</td><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;">${safe.email}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;">Phone</td><td style="padding:8px 12px;border:1px solid #ddd;">${safe.phone}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;background:#f9f9f9;">Company</td><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;">${safe.company}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;">Designation</td><td style="padding:8px 12px;border:1px solid #ddd;">${safe.designation}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;background:#f9f9f9;">Country</td><td style="padding:8px 12px;border:1px solid #ddd;background:#f9f9f9;">${safe.country}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:700;">Consent</td><td style="padding:8px 12px;border:1px solid #ddd;">${consent ? "Yes" : "No"}</td></tr>
        </table>
        <h3>Message:</h3>
        <p style="padding:12px;background:#f5f5f5;border-radius:4px;">${safe.message}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error));
      const message = typeof error === "object" && error !== null && "message" in error
        ? String(error.message)
        : "Failed to send message";
      return res.status(500).json({ message });
    }

    console.log(`Email sent from ${email.trim()}, id: ${data?.id || "unknown"}`);
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact API exception:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── STATIC FILES ──────────────────────────────────────────
const staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath, { index: false }));

// ─── SPA FALLBACK WITH META INJECTION ──────────────────────
app.get("*", (req: Request, res: Response) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ error: "Not found" });
  }

  const indexPath = path.resolve(__dirname, "public", "index.html");
  if (!fs.existsSync(indexPath)) {
    return res.status(500).send("index.html not found");
  }

  const cleanPath = req.path === "/" ? "/" : req.path.replace(/\/$/, "");
  const meta = PAGE_META[cleanPath] ?? PAGE_META["/"];
  let html = fs.readFileSync(indexPath, "utf-8");
  html = injectMeta(html, meta);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  return res.send(html);
});

// ─── START ──────────────────────────────────────────────────
server.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL} (port ${PORT})`);
});
