const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT) || 3000;
const root = __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp"
};

function safeJoin(base, target) {
  const targetPath = path.posix.normalize(`/${target}`);
  return path.join(base, targetPath);
}

const server = http.createServer((req, res) => {
  const rawPath = (req.url || "/").split("?")[0];
  const reqPath = rawPath === "/" ? "/index.html" : rawPath;
  const tryPaths = [reqPath];

  // Support clean routes on Render, e.g. /products -> /products.html
  if (!path.extname(reqPath)) {
    tryPaths.push(`${reqPath}.html`);
    tryPaths.push(path.posix.join(reqPath, "index.html"));
  }

  const candidatePaths = tryPaths
    .map((p) => safeJoin(root, p))
    .filter((p) => p.startsWith(root));

  if (!candidatePaths.length) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  const tryServe = (index) => {
    if (index >= candidatePaths.length) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not Found");
      return;
    }

    const filePath = candidatePaths[index];
    fs.stat(filePath, (statErr, stat) => {
      if (statErr || !stat.isFile()) {
        tryServe(index + 1);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(filePath).pipe(res);
    });
  };

  tryServe(0);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
