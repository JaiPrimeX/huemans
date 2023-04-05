/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function Navs(props) {
  const {
    searchBox,
    businesses,
    prop,
    frame6,
    homeButton,
    aboutButton,
    profileButton,
    favoritesButton,
    businessesButton,
    overrides,
    ...rest
  } = props;
  const rectangleOneFiveFiveZeroTwoFourOnClick = useNavigateAction({
    type: "reload",
  });
  return (
    <View
      width="1440px"
      height="70px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,212,150,1)"
      {...getOverrideProps(overrides, "Navs")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="row"
        width="380px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="14px"
        left="899px"
        padding="12px 56px 12px 40px"
        backgroundColor="rgba(130,80,6,0)"
        children={searchBox}
        {...getOverrideProps(overrides, "Search Box")}
      ></Flex>
      <View
        padding="0px 0px 0px 0px"
        width="244px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17px"
        left="114px"
        {...getOverrideProps(overrides, "Img5023")}
      >
        <Image
          width="244px"
          height="51px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://huemanstagingimagesbucket230557-dev.s3.amazonaws.com/public/huemans-logo.PNG"
          onClick={() => {
            rectangleOneFiveFiveZeroTwoFourOnClick();
          }}
          {...getOverrideProps(overrides, "Rectangle 155024")}
        ></Image>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="127px"
        height="63px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2px"
        left="12px"
        {...getOverrideProps(overrides, "Img5416")}
      >
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
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://huemanteastbucketstore173248-dev.s3.amazonaws.com/Public/HuemansLogo.png"
          {...getOverrideProps(overrides, "Rectangle 155417")}
        ></Image>
      </View>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="35px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="22px"
        left="405px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 10")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="63px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(255,255,255,0.3)"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(200,126,14,0)"
          children={homeButton}
          {...getOverrideProps(overrides, "homeButton")}
        ></Flex>
        <Flex
          gap="10px"
          direction="row"
          width="58px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(255,255,255,0.3)"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
          backgroundColor="rgba(200,126,14,0)"
          children={aboutButton}
          {...getOverrideProps(overrides, "aboutButton")}
        ></Flex>
        <Flex
          gap="10px"
          direction="row"
          width="63px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(255,255,255,0.3)"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
          children={profileButton}
          {...getOverrideProps(overrides, "profileButton")}
        ></Flex>
        <Flex
          gap="10px"
          direction="row"
          width="80px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(255,255,255,0.3)"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
          children={favoritesButton}
          {...getOverrideProps(overrides, "favoritesButton")}
        ></Flex>
        <Flex
          gap="10px"
          direction="row"
          width="105px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="0px SOLID rgba(255,255,255,0.3)"
          borderRadius="32px"
          padding="8px 16px 8px 16px"
          children={businessesButton}
          {...getOverrideProps(overrides, "businessesButton")}
        ></Flex>
      </Flex>
    </View>
  );
}
