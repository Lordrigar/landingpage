# Landing page

Minimal Node.js landing page for a reverse proxy.

## Run with Docker

```sh
docker compose up -d --build
```

The service listens on `127.0.0.1:3000`, ready for an Nginx `proxy_pass http://127.0.0.1:3000` configuration.
