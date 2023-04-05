/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavsProps } from "./Navs";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Navs2OverridesProps = {
    Navs2?: PrimitiveOverrideProps<ViewProps>;
    Navs?: NavsProps;
} & EscapeHatchProps;
export declare type Navs2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Navs2OverridesProps | undefined | null;
}>;
export default function Navs2(props: Navs2Props): React.ReactElement;
