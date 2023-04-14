/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Review1Props } from "./Review1";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Review3OverridesProps = {
    Review3?: PrimitiveOverrideProps<ViewProps>;
    Review316734?: Review1Props;
} & EscapeHatchProps;
export declare type Review3Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Review3OverridesProps | undefined | null;
}>;
export default function Review3(props: Review3Props): React.ReactElement;
