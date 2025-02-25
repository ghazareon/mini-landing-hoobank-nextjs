import type { ElementType, HTMLAttributes, JSX, FC, ReactNode } from "react";

import type { b, n, s } from "@/src/shared/types";

type TagName = keyof JSX.IntrinsicElements;

export interface CoreUiProps extends HTMLAttributes<HTMLOrSVGElement> {
 as?: TagName | s;
 [key: string]: any;
}

export const CoreUi: FC<CoreUiProps> = ({
 as: TagName,
 children,
 ...props
}) => {
 TagName = TagName === undefined ? "div" : TagName;
 return <TagName {...props}>{children}</TagName>;
};

export const Img: FC<CoreUiProps> = ({ as, ...props }) => (
 <CoreUi {...props} as={as} />
);
