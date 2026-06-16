import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const port = Number(process.env.PORT || 8000);
const host = process.env.HOST || "localhost";

const MIME = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".mp3", "audio/mpeg"],
  [".mp4", "video/mp4"],
  [".wav", "audio/wav"],
  [".webm", "video/webm"]
]);

function safeResolveUrlPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const cleaned = decoded.replaceAll("\u0000", "");
  const joined = path.join(rootDir, cleaned);
  const normalized = path.normalize(joined);
  if (!normalized.startsWith(rootDir)) return null;
  return normalized;
}

function pickFile(p) {
  if (!p) return null;
  if (!existsSync(p)) return null;
  const st = statSync(p);
  if (st.isFile()) return p;
  if (st.isDirectory()) {
    const idx = path.join(p, "index.html");
    if (existsSync(idx) && statSync(idx).isFile()) return idx;
  }
  return null;
}

function send(res, code, body, headers = {}) {
  res.writeHead(code, { "Cache-Control": "no-store", ...headers });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (!req.url) return send(res, 400, "Bad Request");

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return send(res, 405, "Method Not Allowed");
  }

  const rawPath = req.url.split("?")[0] || "/";
  const resolved = safeResolveUrlPath(rawPath);
  if (!resolved) return send(res, 403, "Forbidden");

  const filePath = pickFile(resolved) || pickFile(path.join(rootDir, "index.html"));
  if (!filePath) return send(res, 404, "Not Found");

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME.get(ext) || "application/octet-stream";

  const st = statSync(filePath);
  res.writeHead(200, {
    "Content-Type": mime,
    "Content-Length": st.size,
    "Cache-Control": "no-store"
  });

  if (req.method === "HEAD") return res.end();
  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Aurora Shop dev server running: http://${host}:${port}/`);
});

