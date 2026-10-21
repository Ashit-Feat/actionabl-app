import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer, loadEnv } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// ✅ ENV LOAD (IMPORTANT)
const env = loadEnv("", process.cwd());
const VITE_BASE_URL = env.VITE_BASE_URL;

if (!VITE_BASE_URL && process.env.NODE_ENV === "production") {
  throw new Error(
    "❌ VITE_BASE_URL is not defined in environment variables. Production build requires this for SEO meta tags."
  );
} else if (!VITE_BASE_URL) {
  console.warn(
    "⚠️ VITE_BASE_URL is not defined. Defaulting to http://localhost:3000 for development."
  );
}

console.log(`Resolved VITE_BASE_URL: ${VITE_BASE_URL}`);
const FINAL_BASE_URL = VITE_BASE_URL || "http://localhost:3000";
console.log(`Resolved Final VITE_BASE_URL: ${FINAL_BASE_URL}`);

// ─── Page Meta Map ─────────────────────────────────────────────────────────────
const PAGE_META: Record<
  string,
  {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
    canonical: string;
  }
> = {
  "/": {
    title:
      "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
    description:
      "Actionabl is a business orchestration platform that coordinates AI, automations, people, and systems across end-to-end enterprise processes with built-in control, resilience, and human oversight.",
    ogTitle:
      "Actionabl | Business Orchestration Platform for the Autonomous Enterprise",
    ogDescription:
      "Actionabl is a business orchestration platform that enables the autonomous enterprise by coordinating AI, automations, people, and systems across processes, with built-in control, resilience, and human oversight.",
    ogImage: `${FINAL_BASE_URL}/assets/og_img/actionabl-og.jpg`,
    ogUrl: `${FINAL_BASE_URL}/`,
    canonical: `${FINAL_BASE_URL}/`,
  },
  "/about": {
    title: "About Us | The Team Behind | Actionabl",
    description:
      "Know about Actionabl, built by enterprise operators for enterprise operators. Discover our story, mission, and the team behind the enterprise platform.",
    ogTitle: "About Us | The Team Behind | Actionabl",
    ogDescription:
      "Know about Actionabl, built by enterprise operators for enterprise operators. Discover our story, mission, and the team behind the enterprise platform.",
    ogImage: `${FINAL_BASE_URL}/assets/og_img/about-og.jpg`,
    ogUrl: `${FINAL_BASE_URL}/about`,
    canonical: `${FINAL_BASE_URL}/about`,
  },
  "/terms-of-use": {
    title: "Terms of Use | Actionabl",
    description:
      "Welcome to Actionabl's website! By accessing and using this site, you agree to comply with our terms and conditions of use outlined herein.",
    ogTitle: "Terms of Use | Actionabl",
    ogDescription:
      "Welcome to Actionabl's website! By accessing and using this site, you agree to comply with our terms and conditions of use outlined herein.",
    ogImage: `${FINAL_BASE_URL}/assets/og_img/terms-of-use-og.jpg`,
    ogUrl: `${FINAL_BASE_URL}/terms-of-use`,
    canonical: `${FINAL_BASE_URL}/terms-of-use`,
  },
  "/privacy-policy": {
    title: "Privacy Policy | Actionabl",
    description:
      "Actionabl prioritizes visitor privacy. Our Privacy Policy explains what information we collect, how it is recorded, and how we use it to protect and improve your experience.",
    ogTitle: "Privacy Policy | Actionabl",
    ogDescription:
      "Actionabl prioritizes visitor privacy. Our Privacy Policy explains what information we collect, how it is recorded, and how we use it to protect and improve your experience.",
    ogImage: `${FINAL_BASE_URL}/assets/og_img/privacy-policy-og.jpg`,
    ogUrl: `${FINAL_BASE_URL}/privacy-policy`,
    canonical: `${FINAL_BASE_URL}/privacy-policy`,
  },
  "/eula": {
    title: "End User License Agreement (EULA) | Actionabl",
    description:
      "Read the End User License Agreement (EULA) for Actionabl software, outlining usage rights, restrictions, licensing terms, and legal conditions for users.",
    ogTitle: "End User License Agreement (EULA) | Actionabl",
    ogDescription:
      "Read the End User License Agreement (EULA) for Actionabl software, outlining usage rights, restrictions, licensing terms, and legal conditions for users.",
    ogImage: `${FINAL_BASE_URL}/assets/og_img/eula-og.jpg`,
    ogUrl: `${FINAL_BASE_URL}/eula`,
    canonical: `${FINAL_BASE_URL}/eula`,
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function replaceOrInject(html: string, regex: RegExp, newTag: string): string {
  if (regex.test(html)) {
    return html.replace(regex, newTag);
  }
  return html.replace("</head>", `${newTag}\n</head>`);
}

function injectMeta(html: string, meta: (typeof PAGE_META)[string]): string {
  const titleMatch = html.match(/<title>[\s\S]*?<\/title>/i);
  if (titleMatch) {
    html = html.replace(
      titleMatch[0],
      `<title>${escapeHtml(meta.title)}</title>`
    );
  } else {
    html = html.replace(
      "</head>",
      `<title>${escapeHtml(meta.title)}</title>\n</head>`
    );
  }

  html = replaceOrInject(
    html,
    /<meta[^>]*name=["']description["'][^>]*>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*property=["']og:title["'][^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*property=["']og:description["'][^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*property=["']og:image["'][^>]*>/i,
    `<meta property="og:image" content="${meta.ogImage}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*property=["']og:url["'][^>]*>/i,
    `<meta property="og:url" content="${meta.ogUrl}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*name=["']twitter:title["'][^>]*>/i,
    `<meta name="twitter:title" content="${escapeHtml(meta.ogTitle)}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*name=["']twitter:description["'][^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.ogDescription)}" />`
  );

  html = replaceOrInject(
    html,
    /<meta[^>]*name=["']twitter:image["'][^>]*>/i,
    `<meta name="twitter:image" content="${meta.ogImage}" />`
  );

  html = replaceOrInject(
    html,
    /<link[^>]*rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  return html;
}

// ─── Plugin 1 ─────────────────────────────────────────────────────────────────
function vitePluginMetaInjection(): Plugin {
  return {
    name: "vite-plugin-meta-injection",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.server) return html;

        const rawUrl = ctx.originalUrl ?? ctx.filename ?? "/";
        let pathname: string;
        try {
          pathname = decodeURIComponent(rawUrl.split("?")[0]);
        } catch {
          pathname = rawUrl.split("?")[0];
        }

        const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
        const meta = PAGE_META[cleanPath] ?? PAGE_META["/"];

        // Replace the placeholder with the actual base URL
        let processedHtml = html.replace(/%VITE_BASE_URL%/g, FINAL_BASE_URL);

        return injectMeta(processedHtml, meta);
      },
    },
  };
}

// ─── Plugin 2 ─────────────────────────────────────────────────────────────────
function vitePluginGenerateRouteHtmls(): Plugin {
  return {
    name: "vite-plugin-generate-route-htmls",

    async closeBundle() {
      const distDir = path.resolve(import.meta.dirname, "dist/public");
      const indexPath = path.join(distDir, "index.html");

      if (!fs.existsSync(indexPath)) return;

      const baseHtml = fs.readFileSync(indexPath, "utf-8");
      const processedBaseHtml = baseHtml.replace(/%VITE_BASE_URL%/g, FINAL_BASE_URL);

      const homeHtml = injectMeta(processedBaseHtml, PAGE_META["/"]);

      await new Promise((resolve) => setTimeout(resolve, 300));

      fs.writeFileSync(indexPath, homeHtml, "utf-8");

      for (const [route, meta] of Object.entries(PAGE_META)) {
        if (route === "/") continue;

        const folderName = route.slice(1);
        const routeDir = path.join(distDir, folderName);

        fs.mkdirSync(routeDir, { recursive: true });

        const html = injectMeta(baseHtml, meta);

        fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
      }
    },
  };
}

// ─── DEBUG PLUGIN ─────────────────────────────────────────────────────────────
const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, "logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) return;
    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > TRIM_TARGET_BYTES) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }
    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {}
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
  if (entries.length === 0) return;
  ensureLogDir();
  const logPath = path.join(LOG_DIR, `${source}.log`);
  const lines = entries.map(
    (entry) => `[${new Date().toISOString()}] ${JSON.stringify(entry)}`
  );
  fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");
  trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",
    transformIndexHtml(html) {
      if (process.env.NODE_ENV === "production") return html;
      return {
        html,
        tags: [
          {
            tag: "script",
            attrs: { src: "/__manus__/debug-collector.js", defer: true },
            injectTo: "head",
          },
        ],
      };
    },
    configureServer(server: ViteDevServer) {
      server.middlewares.use("/__manus__/logs", (req, res, next) => {
        if (req.method !== "POST") return next();
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", () => {
          try {
            const payload = JSON.parse(body);
            if (payload.consoleLogs)
              writeToLogFile("browserConsole", payload.consoleLogs);
            if (payload.networkRequests)
              writeToLogFile("networkRequests", payload.networkRequests);
            if (payload.sessionEvents)
              writeToLogFile("sessionReplay", payload.sessionEvents);
            res.end(JSON.stringify({ success: true }));
          } catch {
            res.end(JSON.stringify({ success: false }));
          }
        });
      });
    },
  };
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginManusRuntime(),
    vitePluginMetaInjection(),
    vitePluginGenerateRouteHtmls(),
    vitePluginManusDebugCollector(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: { strict: true, deny: ["**/.*"] },
  },
});
