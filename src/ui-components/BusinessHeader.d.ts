/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Businesses } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessHeaderOverridesProps = {
    BusinessHeader?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "image 11"?: PrimitiveOverrideProps<ImageProps>;
    "unsplash:C8Ta0gwPbQg"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 23"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type BusinessHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    businesses?: Businesses;
} & {
    overrides?: BusinessHeaderOverridesProps | undefined | null;
}>;
export default function BusinessHeader(props: BusinessHeaderProps): React.ReactElement;
