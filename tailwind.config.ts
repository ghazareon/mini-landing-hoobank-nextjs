/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

/* prettier-ignore */ import type { Config }           from "tailwindcss";
/* prettier-ignore */ import fluid, { extract }        from "fluid-tailwind";
/* prettier-ignore */ import { toCssVar, removeSpaces,
																															toRem, maxItem }        from "./src/shared/utils";
/* prettier-ignore */ import { dir, ext, layoutGrid }  from "./src/shared/config/const";
/* prettier-ignore */ import * as dt                   from "./src/shared/config/designTokens";

const {
 in: { src: srcIn, shared: sharedIn, ui: uiIn, components: componentsIn }
} = dir;

const scriptExt = removeSpaces(
 `${ext.js},
		${ext.ts},
		${ext.jsx},
		${ext.tsx}`
);

export default {
 content: {
  files: [
   `./${srcIn}/index.html`,
   `./${srcIn}/${sharedIn}/${uiIn}/${componentsIn}/**/*.{${scriptExt},${ext.pug},${ext.html}}`,
   `./${srcIn}/pages/**/*.{${scriptExt}}`,
   `./${srcIn}/app/**/*.{${scriptExt}}`,
   `./src/shared/ui/view/**/*.${ext.html}`
  ],
  extract
 },

 plugins: [
  fluid
  /* require("tw-bootstrap-grid-optimizer") */
  /*
		require("tailwind-bootstrap-grid")({
   generateContainer: false,
   gridGutterWidth: "3.2rem",
   gridGutters: {
    1: "3rem",
    2: "2.4rem",
    3: "2rem"
   }
  })
		*/
 ],

 /* prettier-ignore */
 theme: {
  extend: {
   fluid: {
    defaultScreens: ["0", String(toRem(maxItem(layoutGrid)))],
   },

   borderRadius:             toCssVar(dt.borderRadius,             "border-radius"),
   opacity:                  toCssVar(dt.opacity,                  "opacity"),
   fontSize:                 toCssVar(dt.fontSize,                 "font-size"),
   fontFamily:               toCssVar(dt.fontFamily,               "font-family"),
   fontWeight:               toCssVar(dt.fontWeight,               "font-weight"),
   lineHeight:               toCssVar(dt.lineHeight,               "line-height"),
   letterSpacing:            toCssVar(dt.letterSpacing,            "letter-spacing"),
   maxWidth:                 toCssVar(dt.maxWidth,                 "max-width"),
   minWidth:                 toCssVar(dt.minWidth,                 "min-width"),
   width:                    toCssVar(dt.width,                    "width"),
   height:                   toCssVar(dt.height,                   "height"),
   minHeight:                toCssVar(dt.minHeight,                "min-height"),
   backgroundPosition:       toCssVar(dt.backgroundPosition,       "background-position"),
   backgroundImage:          toCssVar(dt.backgroundImage,          "background-image"),
   boxShadow:                toCssVar(dt.boxShadow,                "box-shadow"),
   // boxShadow:                dt.boxShadow,
   dropShadow:               toCssVar(dt.dropShadow,               "drop-shadow"),
   //dropShadow:               dt.dropShadow,
   transitionProperty:       toCssVar(dt.transitionProperty,       "transition-property"),
   transitionDuration:       toCssVar(dt.transitionDuration,       "transition-duration"),
   transitionTimingFunction: toCssVar(dt.transitionTimingFunction, "transition-timing-function"),
   zIndex:                   toCssVar(dt.zIndex,                   "z-index"),
   gridTemplateColumns:      toCssVar(dt.gridTemplateColumns,      "grid-template-columns"),
   willChange:               toCssVar(dt.willChange,               "will-change"),
   strokeWidth:              toCssVar(dt.strokeWidth,              "stroke-width"),
			colors:                   dt.colors,
			screens:                  JSON.parse(JSON.stringify(dt.screens)),
   spacing:                  dt.spacing,
  }
 }
} satisfies Config;
