/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Businesses } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListingOverridesProps = {
    Listing?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 42"?: PrimitiveOverrideProps<IconProps>;
    Img?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Vector70158?: PrimitiveOverrideProps<IconProps>;
    Hours?: PrimitiveOverrideProps<TextProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    Category?: PrimitiveOverrideProps<TextProps>;
    Review?: PrimitiveOverrideProps<TextProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "bx:bxs-star"?: PrimitiveOverrideProps<ViewProps>;
    Vector70182?: PrimitiveOverrideProps<IconProps>;
    "4.6"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListingProps = React.PropsWithChildren<Partial<ViewProps> & {
    businesses?: Businesses;
} & {
    overrides?: ListingOverridesProps | undefined | null;
}>;
export default function Listing(props: ListingProps): React.ReactElement;
