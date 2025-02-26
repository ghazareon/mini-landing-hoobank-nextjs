/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes } from "react";

import { s, IObj } from "@/src/shared/types";
import { Svg, Use } from "@/src/app/components/electrons";
import { svgPaths } from "@/src/shared/config/const/paths";
import { files } from "@/src/shared/config/const/files";

export interface SvgSpriteProps extends HTMLAttributes<HTMLOrSVGElement> {
 svgName: s;
 svgFileName?: s;
 svgFilePath?: s;
 role?: s;
 [key: string]: any;
}

export const SvgSprite: FC<SvgSpriteProps> = ({
 svgName,
 svgFilePath = "assets/svg",
 svgFileName = "sprite-icons.svg",
 role = "presentation",
 ...props
}) => {
 return (
  <Svg {...props} role={role}>
   <Use xlinkHref={`${svgFilePath}/${svgFileName}#${svgName}`}></Use>
  </Svg>
 );
};
