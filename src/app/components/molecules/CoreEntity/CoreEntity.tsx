/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import type { ElementType, FC, HTMLAttributes, JSX, ReactNode } from "react";
import type { CoreUiProps } from "@/src/app/components/electrons";
import { CoreUi } from "@/src/app/components/electrons";
import { s } from "@/src/shared/types";

export interface INestedData {
 tagName: keyof JSX.IntrinsicElements | s;
 tagNest?: INestedData | INestedData[] | s;
 tagAttrs?: Record<s, any>;
}

export interface CoreEntityProps {
 data: INestedData;
}

export const CoreEntity: FC<CoreEntityProps> = ({ data }) => {
 const { tagName, tagAttrs, tagNest } = data;

 if (typeof tagNest === "string") {
  return <CoreUi as={tagName} {...tagAttrs} children={tagNest} />;
 } else if (Array.isArray(tagNest)) {
  return (
   <CoreUi as={tagName} {...tagAttrs}>
    {tagNest.map((it, index) => (
     <CoreEntity key={index} data={it} />
    ))}
   </CoreUi>
  );
 } else if (typeof tagNest === "object") {
  return (
   <CoreUi as={tagName} {...tagAttrs}>
    <CoreEntity data={tagNest} />
   </CoreUi>
  );
 } else {
  return <CoreUi as={tagName} {...tagAttrs} />;
 }
};
