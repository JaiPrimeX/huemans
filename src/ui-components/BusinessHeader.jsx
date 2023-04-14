/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function BusinessHeader(props) {
  const { businesses, overrides, ...rest } = props;
  return (
    <View
      width="1528px"
      height="488px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BusinessHeader")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="827.53px"
        height="239px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="47.13%"
        bottom="3.89%"
        left="22.99%"
        right="22.85%"
        boxShadow="0px 11px 48px rgba(0.20000000298023224, 0.20000000298023224, 0.20000000298023224, 0.05999999865889549)"
        borderRadius="32px"
        padding="24px 0px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame")}
      ></Flex>
      <Image
        width="100%"
        height="100%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://huemanteastbucketstore173248-dev.s3.amazonaws.com/BusinessPhotos/RoamingRoosterHeader.png"
        {...getOverrideProps(overrides, "image 11")}
      ></Image>
      <Image
        width="19.36%"
        height="57.17%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="42.83%"
        bottom="0%"
        left="2.1%"
        right="78.55%"
        borderRadius="500px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={businesses?.BusinessImage}
        {...getOverrideProps(overrides, "unsplash:C8Ta0gwPbQg")}
      ></Image>
      <View
        width="788.03px"
        height="211px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50%"
        bottom="6.76%"
        left="24.18%"
        right="24.25%"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 23")}
      ></View>
      <Image
        width="62.43%"
        height="71.31%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="28.69%"
        left="18.78%"
        right="18.78%"
        borderRadius="24px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://huemanteastbucketstore173248-dev.s3.amazonaws.com/BusinessPhotos/RoamingRoosterLogo.png"
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></Image>
    </View>
  );
}
