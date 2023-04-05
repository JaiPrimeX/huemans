/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditprofileOverridesProps = {
    Editprofile?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 10"?: PrimitiveOverrideProps<IconProps>;
    "Hueman Logo 4"?: PrimitiveOverrideProps<ImageProps>;
    Vector327?: PrimitiveOverrideProps<IconProps>;
    Vector328?: PrimitiveOverrideProps<IconProps>;
    Vector329?: PrimitiveOverrideProps<IconProps>;
    Vector3210?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 11"?: PrimitiveOverrideProps<IconProps>;
    "Change Profile Picture"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 37"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 38"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 39"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 40"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 41"?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    Bio?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EditprofileProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EditprofileOverridesProps | undefined | null;
}>;
export default function Editprofile(props: EditprofileProps): React.ReactElement;
