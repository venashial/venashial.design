import preprocess from "svelte-preprocess";
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercel(),

    vite: {
      resolve: {
        alias: {
          $utils: path.resolve('./src/utils'),
          $components: path.resolve('./src/components')
        }
      }
    },
  },

  preprocess: [preprocess({})]
};

export default config;
