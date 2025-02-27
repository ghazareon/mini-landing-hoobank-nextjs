/*
 * Author: Hayk Ghazaryan
 * Email: hayk.ghazaryanc@gmail.com
 */

import { FC } from "@/npm/@types/react";
import type { CoreEntityProps } from "@/src/app/components/molecules";
import { CoreEntity } from "@/src/app/components/molecules";

export const Logo: FC<CoreEntityProps> = ({ data }) => (
 <CoreEntity data={data} />
);
