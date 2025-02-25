/* prettier-ignore */ import type { FC, ReactNode,
																																				ElementType } from "react";
/* prettier-ignore */ import type { CoreUiProps } from "@/src/app/components/electrons";
/* prettier-ignore */ import type { s, n, ITag, tagsNum }  from "@/src/shared/types";

/* prettier-ignore */ import { CoreUi }           from "@/src/app/components/electrons";
/* prettier-ignore */ import { ext, nextPaths }   from "@/src/shared/config/const";

/* prettier-ignore */ import { metaTagsNext }     from "@/src/shared/data/headMeta";

export interface MetaHeadProps extends CoreUiProps {
 data: tagsNum[];
 picExt?: s[];
 picPath?: s;
 children?: ReactNode;
}

export const MetaHead: FC<MetaHeadProps> = ({
 data,
 children,
 picExt = [ext.png, ext.svg, ext.ico],
 picPath = nextPaths.outDir
}) => {
 return (
  <>
   {data.map(
    ({ id, tagName, attrs: { href, content, ...restAttrs }, ...it }) => {
     if (
      typeof href === "string" &&
      picExt.includes(String(href?.split(".").pop())) === true
     ) {
      return (
       <CoreUi
        as={tagName as ElementType}
        {...restAttrs}
        href={`${picPath}/${href}`}
        key={id}
       />
      );
     }

     if (
      typeof href === "string" &&
      picExt.includes(String(content?.split(".").pop())) === true
     ) {
      return (
       <CoreUi
        as={tagName as ElementType}
        {...restAttrs}
        content={`${picPath}/${content}`}
        key={id}
       />
      );
     } else {
      return <CoreUi as={tagName as ElementType} {...restAttrs} key={id} />;
     }
    }
   )}
   {children}
  </>
 );
};
