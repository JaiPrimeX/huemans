/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1431px"
      height="119px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,206,136,1)"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="57px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="30px"
        left="24px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="57px"
          height="57px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "logo")}
        >
          <View
            width="50.67px"
            height="50.67px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="4px 4px 24px 4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,226,185,1)"
            {...getOverrideProps(overrides, "Rectangle 8")}
          ></View>
          <View
            width="50.67px"
            height="50.67px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.33px"
            left="6.33px"
            borderRadius="4px 4px 24px 4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(174,115,75,1)"
            {...getOverrideProps(overrides, "Rectangle 9")}
          ></View>
        </View>
      </View>
      <Image
        width="17.81%"
        height="37.12%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.61%"
        bottom="29.27%"
        left="4.82%"
        right="77.37%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Hueman Logo 2")}
      ></Image>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="36px"
        left="1300px"
        borderRadius="32px"
        padding="12px 24px 12px 24px"
        backgroundColor="rgba(209,250,229,1)"
        {...getOverrideProps(overrides, "Frame 10")}
      >
        <Text
          fontFamily="Lexend"
          fontSize="14px"
          fontWeight="600"
          color="rgba(4,120,87,1)"
          lineHeight="22px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign Up"
          {...getOverrideProps(overrides, "Sign Up")}
        ></Text>
      </Flex>
    </View>
  );
}
