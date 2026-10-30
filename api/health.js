export default function handler(_req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    status: "ok",
    app: "Kelas XI TKJ",
    backend: "Vercel Serverless Function",
    database: "not-connected",
    timestamp: new Date().toISOString()
  });
}
