/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Navs from "./Navs";
import { View } from "@aws-amplify/ui-react";
export default function Navs2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="84px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Navs2")}
      {...rest}
    >
      <Navs
        width="1440px"
        height="84px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,212,150,1)"
        {...getOverrideProps(overrides, "Navs")}
      ></Navs>
    </View>
  );
}
