/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { fileURLToPath, URL } from "node:url";
import { join } from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { ViteEjsPlugin } from "vite-plugin-ejs";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { imagetools } from "vite-imagetools";
import removeConsole from "vite-plugin-remove-console";
import FullReload from "vite-plugin-full-reload";
import viteCompression from "vite-plugin-compression";

import data from "./src/shared/data/contentDb.json";
import appData from "./src/shared/data/appDb.json";

import { dir, files, ext, vitePaths } from "./src/shared/config/const";

import { tags } from "./src/shared/data/headMeta";

const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";
const root = process.cwd();

// https://vite.dev/config/

export default defineConfig({
 root: join(root, dir.in.src),
 publicDir: join(root, dir.in.public),

 resolve: {
  alias: {
   "@": fileURLToPath(new URL("./src", import.meta.url))
  }
 },

 build: {
  outDir: join(root, dir.out.build),
  emptyOutDir: true,
  sourcemap: isDev,
  minify: isDev ? false : "terser",

  cssMinify: isDev,
  assetsInlineLimit: 0,

  terserOptions: {
   compress: {
    drop_console: true,
    drop_debugger: true
   },
   keep_classnames: true,
   keep_fnames: true,
   sourceMap: false,
   format: {
    comments: false
   }
  },

  rollupOptions: {
   input: {
    main: join(root, dir.in.src, "index.html")
   },

   output: {
    entryFileNames: `assets/js/[name].js`,

    assetFileNames: (item) => {
     if (Array.isArray(item.names)) {
      const file = item.names[0] ?? "";

      if (/\.(gif|jpe?g|png|webp|avif|ico|svg)$/.test(file)) {
       /* for .pic */
       if (file.includes(`.${ext.pic}`)) {
        return vitePaths.build.pic;
       }

       /* for img */
       if (!file.includes(`.${ext.pic}`) && !file.includes(`.${ext.fontSvg}`)) {
        return vitePaths.build.img;
       }
      }

      /* for font */
      if (/\.(woff2|woff|eot|ttf|otf|f.svg)$/.test(file)) {
       return `${vitePaths.build.fonts}`;
      }

      /* for css */
      if (/\.(css)$/.test(file)) {
       return vitePaths.build.css;
      }
     }
     return vitePaths.build.remaining;
    }
   }
  }
 },

 server: {
  // open: "/"
 },
 /* prettier-ignore */
 plugins: [
		react(),
		removeConsole(),
		imagetools(),

		FullReload([
			...vitePaths.fullReload.html,
			...vitePaths.fullReload.json,
			...vitePaths.fullReload.css,
			...vitePaths.fullReload.svg,
		]),

		ViteMinifyPlugin({
			collapseWhitespace:            true,
			html5:                         true,
			keepClosingSlash:              true,
			minifyCSS:                     true,
			minifyJS:                      true,
			removeAttributeQuotes:         false,
			removeComments:                true,
			removeRedundantAttributes:     false,
			removeScriptTypeAttributes:    false,
			removeStyleLinkTypeAttributes: false,
			useShortDoctype:               true,
			removeTagWhitespace:           false,
			sortAttributes:                true,
			sortClassName:                 true,
			trimCustomFragments:           false
		}),

		ViteEjsPlugin({
			appName:         appData.appName,
			appThemeColor:   appData.appThemeColor,
			appTitleColor:   appData.appTitleColor,
			appMaskIcon:     appData.appMaskIcon,
			data,
			files,
			dir,
			tags,
			paths: {
				in: {
					assets:         vitePaths.ejs.in.assets,
					pic:            vitePaths.ejs.in.pic,
					img:            vitePaths.ejs.in.img,
					styles:         vitePaths.ejs.in.styles,
					twStyles:       vitePaths.ejs.in.twStyles,
					svg:            vitePaths.ejs.in.svg,
					view:           vitePaths.ejs.in.view,
					viewAtoms:      vitePaths.ejs.in.viewAtoms,
					viewMolecules:  vitePaths.ejs.in.viewMolecules,
					viewOrganisms:  vitePaths.ejs.in.viewOrganisms,
					viewTemplates:  vitePaths.ejs.in.viewTemplates
				},

				out: {
					assets:         vitePaths.ejs.out.assets,
					pic:            vitePaths.ejs.out.pic,
					img:            vitePaths.ejs.out.img,
					css:            vitePaths.ejs.out.css,
					svg:            vitePaths.ejs.out.svg
				},

			}
		}),


		viteCompression({
			verbose: true,
			disable: false,
			deleteOriginFile: false,
			threshold: 10240,
			algorithm: 'gzip',
			ext: '.gz',
	})

	]
});
