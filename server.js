import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

// Health endpoint for checking that the Node.js backend is running.
app.get('/api/health', (_req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    status: 'ok',
    app: 'Kelas XI TKJ',
    backend: 'Node.js + Express',
    database: 'not-connected',
    timestamp: new Date().toISOString(),
  });
});

// API namespace placeholder. Real endpoints will be added with authentication
// and PostgreSQL integration; never treat the frontend role preview as auth.
app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API endpoint belum tersedia.' });
});

// Serve the existing modular frontend.
app.use(express.static(__dirname, {
  index: 'index.html',
  etag: true,
  maxAge: process.env.NODE_ENV === 'production' ? '1h' : 0,
}));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
});

app.listen(PORT, () => {
  console.log(`Kelas XI TKJ: http://localhost:${PORT}`);
  console.log(`Tes backend: http://localhost:${PORT}/api/health`);
});
