const http = require('http');

const port = process.env.PORT || 3000;

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#101820">
    <title>Website under construction</title>
    <style>
      :root { color-scheme: dark; }
      * { box-sizing: border-box; }
      body { align-items: center; background: radial-gradient(circle at top, #243b55, #101820 58%, #080d12); color: #f7fafc; display: flex; font-family: Arial, Helvetica, sans-serif; justify-content: center; margin: 0; min-height: 100vh; padding: 24px; }
      main { background: rgba(16, 24, 32, 0.78); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 20px; box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35); max-width: 640px; padding: 52px 40px; text-align: center; }
      .eyebrow { color: #79d7be; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.14em; margin: 0 0 18px; text-transform: uppercase; }
      h1 { font-size: clamp(2rem, 6vw, 3.5rem); letter-spacing: -0.04em; margin: 0; }
      p { color: #c8d3dc; font-size: 1.1rem; line-height: 1.65; margin: 22px auto 0; max-width: 460px; }
      @media (max-width: 480px) { main { padding: 40px 26px; } }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Coming soon</p>
      <h1>Website under construction</h1>
      <p>We&rsquo;re working on something new. Please check back soon.</p>
    </main>
  </body>
</html>`;

http
  .createServer((req, res) => {
    if (req.url !== '/' && req.url !== '/health') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }

    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(page);
  })
  .listen(port, '0.0.0.0', () => {
    console.log(`Landing page listening on port ${port}`);
  });
