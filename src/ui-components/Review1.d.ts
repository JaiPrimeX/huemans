/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Ratings } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Review1OverridesProps = {
    Review1?: PrimitiveOverrideProps<ViewProps>;
    "\u0418\u043C\u044F"?: PrimitiveOverrideProps<TextProps>;
    "\u0414\u0430\u0442\u0430 \u043E\u0442\u0437\u044B\u0432\u0430"?: PrimitiveOverrideProps<TextProps>;
    "\u0417\u0432\u0451\u0437\u0434\u044B"?: PrimitiveOverrideProps<ViewProps>;
    Vector16040?: PrimitiveOverrideProps<IconProps>;
    Vector16041?: PrimitiveOverrideProps<IconProps>;
    Vector16042?: PrimitiveOverrideProps<IconProps>;
    Vector16043?: PrimitiveOverrideProps<IconProps>;
    "\u0421\u0435\u0440\u0430\u044F \u0437\u0432\u0435\u0437\u0434\u0430"?: PrimitiveOverrideProps<ViewProps>;
    Vector16068?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 151164"?: PrimitiveOverrideProps<ImageProps>;
    "unsplash:C8Ta0gwPbQg"?: PrimitiveOverrideProps<ImageProps>;
    "The best chicken sandwich I\u2019ve ever had in life!!!"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 151179"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Review1Props = React.PropsWithChildren<Partial<ViewProps> & {
    ratings?: Ratings;
} & {
    overrides?: Review1OverridesProps | undefined | null;
}>;
export default function Review1(props: Review1Props): React.ReactElement;
