/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SankofaOverridesProps = {
    Sankofa?: PrimitiveOverrideProps<ViewProps>;
    "228759_bda711054618494b892c828dc740fe58_mv2 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SankofaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SankofaOverridesProps | undefined | null;
}>;
export default function Sankofa(props: SankofaProps): React.ReactElement;
