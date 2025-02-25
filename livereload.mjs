import { join } from "node:path";

import { fileURLToPath } from "url";
import livereload from "livereload";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = livereload.createServer();

server.watch(__dirname);

console.log(`Livereload server watching for changes on port ${server.config.port}`);
