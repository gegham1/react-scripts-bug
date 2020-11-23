import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const proxy = require('http-proxy-middleware');

const target = process.env.PROXY_TARGET;

if (!target) {
  throw new Error('Please specify the proxy target in your environment variables.');
}

export default (app) => {
  app.use(
    '/api/v1',
    proxy({
      target,
      changeOrigin: true,
      secure: false,
    }),
  );
};
