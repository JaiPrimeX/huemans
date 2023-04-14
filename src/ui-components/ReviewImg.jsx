/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
export default function ReviewImg(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1161px"
      height="237px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ReviewImg")}
      {...rest}
    >
      <Image
        width="74.85%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="25.15%"
        right="0%"
        borderRadius="24px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src="https://huemanteastbucketstore173248-dev.s3.amazonaws.com/BusinessPhotos/ReviewHeader.png"
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></Image>
    </View>
  );
}
