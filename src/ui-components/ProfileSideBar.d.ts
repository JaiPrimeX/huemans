/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileSideBarOverridesProps = {
    ProfileSideBar?: PrimitiveOverrideProps<ViewProps>;
    "side bar1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<ViewProps>;
    Vector120249?: PrimitiveOverrideProps<IconProps>;
    Vector120250?: PrimitiveOverrideProps<IconProps>;
    Notifications?: PrimitiveOverrideProps<ViewProps>;
    Vector120252?: PrimitiveOverrideProps<IconProps>;
    Vector120253?: PrimitiveOverrideProps<IconProps>;
    "Calendar today"?: PrimitiveOverrideProps<ViewProps>;
    Vector120255?: PrimitiveOverrideProps<IconProps>;
    Vector120256?: PrimitiveOverrideProps<IconProps>;
    "Show chart"?: PrimitiveOverrideProps<ViewProps>;
    Vector120258?: PrimitiveOverrideProps<IconProps>;
    Vector120259?: PrimitiveOverrideProps<IconProps>;
    Person?: PrimitiveOverrideProps<ViewProps>;
    Vector120261?: PrimitiveOverrideProps<IconProps>;
    Vector120262?: PrimitiveOverrideProps<IconProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    Settings?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector120267?: PrimitiveOverrideProps<IconProps>;
    Vector120268?: PrimitiveOverrideProps<IconProps>;
    "image 8"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type ProfileSideBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProfileSideBarOverridesProps | undefined | null;
}>;
export default function ProfileSideBar(props: ProfileSideBarProps): React.ReactElement;
