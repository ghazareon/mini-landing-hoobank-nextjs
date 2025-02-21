/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import fs from "node:fs/promises";
import prettier from "prettier";
import { toCustomPropertiesString } from "object-to-css-variables";

import * as dt from "@/src/shared/config/designTokens";
import { removeSubStrObj } from "@/src/shared/utils";
import { rootCssPaths } from "@/src/shared/config/const/paths";

import type { s } from "@/src/shared/types";

/* prettier-ignore */
export const createRootCss = () =>
 toCustomPropertiesString({
		screens:                  dt.screens,
		color:                    removeSubStrObj(dt.colors),
		fontWeight:               dt.fontWeight,
		borderRadius:             dt.borderRadius,
		opacity:                  dt.opacity,
		fontSize:                 dt.fontSize,
		fontFamily:               dt.fontFamily,
		lineHeight:               dt.lineHeight,
		letterSpacing:            dt.letterSpacing,
		maxWidth:                 dt.maxWidth,
		minWidth:                 dt.minWidth,
		width:                    dt.width,
		height:                   dt.height,
		minHeight:                dt.minHeight,
		spacing:                  dt.spacing,
		backgroundPosition:       dt.backgroundPosition,
		backgroundImage:          dt.backgroundImage,
		boxShadow:                dt.boxShadow,
		transitionProperty:       dt.transitionProperty,
		transitionDuration:       dt.transitionDuration,
		transitionTimingFunction: dt.transitionTimingFunction,
		zIndex:                   dt.zIndex,
		willChange:               dt.willChange,
		content:                  dt.content,
		gridTemplateColumns:      dt.gridTemplateColumns,
		strokeWidth:              dt.strokeWidth
});

const writeToFile = async (result: s, pathToFile: s) => {
 fs.writeFile(pathToFile, await prettier.format(`:root{${result}}`, { parser: "scss" }));
};

writeToFile(createRootCss(), rootCssPaths.outFile);
