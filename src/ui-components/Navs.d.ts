/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavsOverridesProps = {
    Navs?: PrimitiveOverrideProps<ViewProps>;
    "Search Box"?: PrimitiveOverrideProps<FlexProps>;
    "  "?: PrimitiveOverrideProps<ViewProps>;
    Img5023?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 155024"?: PrimitiveOverrideProps<ImageProps>;
    Img5416?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 155417"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 10"?: PrimitiveOverrideProps<FlexProps>;
    homeButton?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    aboutButton?: PrimitiveOverrideProps<FlexProps>;
    About?: PrimitiveOverrideProps<TextProps>;
    profileButton?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    favoritesButton?: PrimitiveOverrideProps<FlexProps>;
    Favorites?: PrimitiveOverrideProps<TextProps>;
    businessesButton?: PrimitiveOverrideProps<FlexProps>;
    Businesses?: PrimitiveOverrideProps<TextProps>;
    "eva:arrow-ios-forward-fill"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavsProps = React.PropsWithChildren<Partial<ViewProps> & {
    searchBox?: React.ReactNode;
    businesses?: String;
    prop?: String;
    frame6?: React.ReactNode;
    homeButton?: React.ReactNode;
    aboutButton?: React.ReactNode;
    profileButton?: React.ReactNode;
    favoritesButton?: React.ReactNode;
    businessesButton?: React.ReactNode;
} & {
    overrides?: NavsOverridesProps | undefined | null;
}>;
export default function Navs(props: NavsProps): React.ReactElement;
