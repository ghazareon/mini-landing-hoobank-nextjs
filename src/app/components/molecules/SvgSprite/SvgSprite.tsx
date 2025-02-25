/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { FC } from "react";

import { s, IObj } from "@/src/shared/types";
import { Svg, Use } from "@/src/app/components/electrons";
import { svgPaths } from "@/src/shared/config/const/paths";
import { files } from "@/src/shared/config/const/files";

export interface SvgSpriteProps {
 svgName: s;
 svgFileName?: s;
 svgFilePath?: s;
 data?: IObj<s>;
}

export const SvgSprite: FC<SvgSpriteProps> = ({
 svgName,
 svgFileName = files.svgSpriteName,
 svgFilePath = svgPaths.svgSpriteIn,
 data
}) => {
 return (
  <Svg {...data}>
   <Use xlinkHref={`${svgFilePath}/${svgFileName}#${svgName}`}></Use>
  </Svg>
 );
};
