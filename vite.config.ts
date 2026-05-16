import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

import fs from 'node:fs';

function base64(): Plugin {
  const query = '?base64';
  const cache = new Map<string, string>();

  return {
    name: 'vite-plugin-base64',
    transform: {
      filter: {
        id: /\?base64$/
      },
      handler(_, id) {
        console.log('transforming', id);
        let base64 = fs.readFileSync(id.replace(query, ''), { encoding: 'base64' });
        return {
          code: `export default '${base64}';`,
          moduleType: 'js',
        }
      }
    }
  }
}

export default defineConfig({
  plugins: [base64()],
});
