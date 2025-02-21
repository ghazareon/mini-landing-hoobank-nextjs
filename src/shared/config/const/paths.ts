/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { join } from "node:path";

import { dir } from "./dir";
import { files } from "./files";
import { ext } from "./ext";

export const manifestPaths = {
 outFile: `./${dir.in.public}/${files.manifest}`,
 picDir: `${dir.in.assets}/${dir.in.img}/${dir.in.pic}`
};

export const browserConfigPaths = {
 outFile: `./${dir.in.public}/${files.browserConfig}`,
 picInDir: `${dir.in.assets}/${dir.in.img}/${dir.in.pic}`
};

export const picPaths = {
 inDir: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.img}/${dir.in.picSrc}`,
 outDir: `${dir.in.public}/${dir.in.assets}/${dir.in.img}/${dir.in.pic}`,
 outDir2: `${dir.in.assets}/${dir.in.img}/${dir.in.pic}`
};

export const mediaQueryPaths = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.base}/${files.mq}`
};

export const sidesPaths = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.base}/${files.sides}`
};

export const gapPaths = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.base}/${files.gap}`
};

export const tmpPaths = {
 inDir: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.img}/${dir.in.tmp}/${dir.in.sections}`,
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.common}/${dir.in.dev}/${files.sections}`
};

export const rootCssPaths = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.base}/${files.rootCss}`
};

export const svgPaths = {
 inDir: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.svg}`,
 outDir: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.svg}`,
 styleOutDir: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.base}`,

 svgSpriteIn: `${dir.in.assets}/${dir.in.svg}`
};

export const twColorPath = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.config}/${dir.in.designTokens}/${files.coloursGenerate}`
};

export const nextPaths = {
 outDir: `${dir.in.assets}/${dir.in.img}/${dir.in.pic}`
};

export const nextFonts = {
 inDir: `${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.fonts}`
};

export const fixGenerate = {
 outFile: `${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.styles}/${dir.in.tailwind}/${dir.in.components}/${dir.in.atoms}/${dir.in.fix}/${files.fixGenerate}`
};

/* prettier-ignore */
export const vitePaths = {
		ejs: {
			in: {
				assets:         join(dir.in.shared, dir.in.ui, dir.in.assets).replace(/\\/g, "/"),
				pic:            join(dir.in.shared, dir.in.ui, dir.in.assets, dir.in.img, dir.in.pic).replace(/\\/g, "/"),
				img:            join(dir.in.shared, dir.in.ui, dir.in.assets, dir.in.img).replace(/\\/g, "/"),
				svg:            join(dir.in.shared, dir.in.ui, dir.in.assets, dir.in.svg).replace(/\\/g, "/"),
				styles:         join(dir.in.shared, dir.in.ui, dir.in.styles).replace(/\\/g, "/"),
				twStyles:       join(dir.in.shared, dir.in.ui, dir.in.styles, dir.in.tailwind).replace(/\\/g, "/"),
				view:           join(dir.in.shared, dir.in.ui, dir.in.view).replace(/\\/g, "/"),

				viewAtoms:      join(dir.in.shared, dir.in.ui, dir.in.view, dir.in.atoms).replace(/\\/g, "/"),
				viewMolecules:  join(dir.in.shared, dir.in.ui, dir.in.view, dir.in.molecules).replace(/\\/g, "/"),
				viewOrganisms:  join(dir.in.shared, dir.in.ui, dir.in.view, dir.in.organisms).replace(/\\/g, "/"),
				viewTemplates:  join(dir.in.shared, dir.in.ui, dir.in.view, dir.in.templates).replace(/\\/g, "/"),

			},
			out: {
				assets:         join(dir.in.assets).replace(/\\/g, "/"),
				pic:            join(dir.in.assets, dir.in.img, dir.in.pic).replace(/\\/g, "/"),
				img:            join(dir.in.assets, dir.in.img).replace(/\\/g, "/"),
				css:            join(dir.in.assets, dir.in.css).replace(/\\/g, "/"),
				svg:            join(dir.in.assets, dir.in.svg).replace(/\\/g, "/"),
			}
		},

  build: {
			// [name]-[hash].[ext]
			entryFileNames:  `${dir.out.assets}/${dir.out.js}/[name].[ext]`,
			chunkFileNames:  `${dir.out.assets}/${dir.out.js}/[name].[ext]`,
			pic:             `${dir.out.assets}/${dir.out.img}/${dir.out.pic}/[name].[ext]`,
			img:             `${dir.out.assets}/${dir.out.img}/[name].[ext]`,
			fonts:           `${dir.out.assets}/${dir.out.fonts}/[name].[ext]`,
			css:             `${dir.out.assets}/${dir.out.css}/[name].[ext]`,
			js:              `${dir.out.assets}/${dir.out.js}/[name].[ext]`,
			remaining:       `${dir.out.assets}/[name].[ext]`,
	},

		copy: {
			in: {
				pic:            join(dir.in.shared, dir.in.ui, dir.in.assets, dir.in.pic).replace(/\\/g, "/"),
				img:            join(dir.in.shared, dir.in.ui, dir.in.assets, dir.in.img).replace(/\\/g, "/"),
				browserConfig:  join(dir.in.shared, dir.in.ui, dir.in.assets, files.browserConfig).replace(/\\/g, "/"),
				favicon:        join(dir.in.shared, dir.in.ui, dir.in.assets, files.favicon).replace(/\\/g, "/"),
				manifest:       join(dir.in.shared, dir.in.ui, dir.in.assets, files.manifest).replace(/\\/g, "/"),
				robots:         join(dir.in.shared, dir.in.ui, dir.in.assets, files.robots).replace(/\\/g, "/"),
			},

			out: {
				assets:         join(dir.out.assets).replace(/\\/g, "/"),
				img:            join(dir.out.assets, dir.out.img).replace(/\\/g, "/"),
				root:           join(".").replace(/\\/g, "/"),
			}
		},

		fullReload: {
			html:            [`${dir.in.src}/index.html`, `src/shared/ui/view/**/*.html`],
			json:            [`${dir.in.src}/${dir.in.shared}/${dir.in.data}/**/*.${ext.json}`],
			css:             [`${dir.in.src}/${dir.in.shared}/${dir.in.ui}/${dir.in.assets}/${dir.in.css}/${dir.in.transpiled}/**/*.${ext.css}`,],
			svg:             [`${dir.in.public}/${dir.in.assets}/${dir.in.svg}/**/*.${ext.svg}`]
		}
};
