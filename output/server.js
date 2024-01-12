import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import { pathss } from './paths.js';
export const app = express();

const DIRNAME = dirname(fileURLToPath(import.meta.url));

pathss(app);

if (!process.env['VITE']) {
  const frontendFiles = DIRNAME + '/dist';

  app.use(express.static(frontendFiles));

  const PORT = process.env['PORT'] || 3000;

  app.listen(PORT);
  console.log(PORT);
}
