/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

/** @type {import('postcss-load-config').Config} */

/* prettier-ignore */ import tailwindcss              from "tailwindcss";
/* prettier-ignore */ import autoprefixer             from "autoprefixer";
/* prettier-ignore */ import postcssNested            from "postcss-nested";
/* prettier-ignore */ import postcssFlexbugs          from "postcss-flexbugs-fixes";
/* prettier-ignore */ import postcssImport            from "postcss-import";
/* prettier-ignore */ import postcssDiscardComments   from "postcss-discard-comments";
/* prettier-ignore */ import postcssSimpleVars        from "postcss-simple-vars";
/* prettier-ignore */ import postcssConsole           from "@postcss-plugins/console";
/* prettier-ignore */ import postcssMixins            from "postcss-mixins";

/* prettier-ignore */ import twNested                 from "tailwindcss/nesting";
/* prettier-ignore */ import postcssPresetEnv         from "postcss-preset-env";
/* prettier-ignore */ import postcssCascadeLayers     from "@csstools/postcss-cascade-layers";
/* prettier-ignore */ import postcssSvgBg             from "postcss-inline-svg";
/* prettier-ignore */ import cssvariables             from "postcss-css-variables";
// @ts-ignore
/* prettier-ignore */ import postcssEach              from "postcss-each";
// @ts-ignore
/* prettier-ignore */ import jsonToRoot               from "@daltontan/postcss-import-json";
// @ts-ignore
/* prettier-ignore */ import postcssDropunusedvars    from "postcss-dropunusedvars";
// @ts-ignore
/* prettier-ignore */ import postcssSortMediaQueries  from "postcss-sort-media-queries";
// @ts-ignore
/* prettier-ignore */ import postcssCombineMediaQuery from "postcss-combine-media-query";
// @ts-ignore
/* prettier-ignore */ import postcssVar               from "postcss-variables";
// @ts-ignore
/* prettier-ignore */ import postcssCommentParser     from "postcss-comment";

// @ts-ignore
/* prettier-ignore */ import postcssMin               from "postcss-minify";
/* prettier-ignore */ import postcssMinifyParams      from "postcss-minify-params";
/* prettier-ignore */ import postcssMinifySelectors   from "postcss-minify-selectors";
/* prettier-ignore */ import postcssScss              from "postcss-scss";

// @ts-ignore
/* prettier-ignore */ import postcssAdvancedVar       from "postcss-advanced-variables";

/* prettier-ignore */ import postcssMinify            from "@csstools/postcss-minify";

/* prettier-ignore */ import { screens }              from "./src/shared/config/designTokens";
/* prettier-ignore */ import { files }                from "./src/shared/config/const";

/* prettier-ignore */ import { postcssMediaQuery }    from "./src/shared/utils";

/* prettier-ignore */ import postcssAdvancedVariables from "postcss-advanced-variables";

/* prettier-ignore */ import postcssCustomProperties from "postcss-custom-properties";

const NODE_ENV = process.env.NODE_ENV || "development";
const isDev = NODE_ENV === "development";

export default {
 syntax: postcssScss,
 parser: postcssScss,

 plugins: [
  // cssvariables,

  postcssCustomProperties,
  postcssImport,
  postcssCascadeLayers,
  postcssSvgBg,
  jsonToRoot,

  postcssEach,

  postcssFlexbugs,
  twNested,
  postcssConsole,

  postcssVar({
   globals: {
    mq: postcssMediaQuery(screens)
   }
  }),

  tailwindcss({ config: files.twConfig }),
  postcssMixins,
  postcssSimpleVars,
  postcssNested,
  postcssCombineMediaQuery,
  postcssSortMediaQueries,
  postcssDiscardComments,

  postcssPresetEnv({
   autoprefixer: {
    flexbox: "no-2009"
   },
   stage: 3,
   features: {
    "custom-properties": true,
    "nesting-rules": true
   }
  }),

  postcssDropunusedvars({ fix: true }),
  autoprefixer(),

  (() => (!isDev ? postcssMinify() : null))()
 ]
};
