/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutOverridesProps = {
    About?: PrimitiveOverrideProps<ViewProps>;
    "about me"?: PrimitiveOverrideProps<ViewProps>;
    "Our Mission"?: PrimitiveOverrideProps<TextProps>;
    "HUEMANS is a curated avenue that provides a platform to both discover and discuss minority-owned alternatives to necessary services. You can not only search for the services you require, you can also see reviews, photos, and FAQs surrounding the added business. This will help provide a spotlight, and build a sense of community to support local businesses. Business owners can list deals at their own discretion, to encourage customers to support their business, continue their patronage, and refer more people to do the same."?: PrimitiveOverrideProps<TextProps>;
    "image 9"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ImageProps>;
    "startup 1"?: PrimitiveOverrideProps<ImageProps>;
    "In the United States, the average Black and Hispanic or Latino households earn about half as much as the average White household and own only about 15 to 20 percent as much net wealth. To combat the racial wealth gap, support is needed for minority businesses. There is very limited to no software or tools that exclusively supports searching up and reviewing minority-owned businesses. Due to this, excess time is spent searching and vetting for services by people of color and Huemans is to help aid in combating this issue."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AboutProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AboutOverridesProps | undefined | null;
}>;
export default function About(props: AboutProps): React.ReactElement;
