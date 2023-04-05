/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Listing(props) {
  const { businesses, overrides, ...rest } = props;
  return (
    <View
      width="748px"
      height="236.08px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Listing")}
      {...rest}
    >
      <Icon
        width="748px"
        height="236.08px"
        viewBox={{ minX: 0, minY: 0, width: 748, height: 236.075439453125 }}
        paths={[
          {
            d: "M0 16C0 7.16343 7.16344 0 16 0L732 0C740.837 0 748 7.16344 748 16L748 220.075C748 228.912 740.837 236.075 732 236.075L16 236.075C7.16345 236.075 0 228.912 0 220.075L0 16Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 42")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="238px"
        height="214px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4.69%"
        bottom="4.66%"
        left="1.74%"
        right="66.44%"
        {...getOverrideProps(overrides, "Img")}
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
          src={businesses?.BusinessImage}
          {...getOverrideProps(overrides, "Rectangle 15")}
        ></Image>
      </View>
      <Text
        fontFamily="Lexend"
        fontSize="25px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="31.25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="314px"
        height="35px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.57%"
        bottom="82.6%"
        left="34.49%"
        right="23.53%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={businesses?.Name}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Icon
        width="29px"
        height="26px"
        viewBox={{ minX: 0, minY: 0, width: 29, height: 26 }}
        paths={[
          {
            d: "M14.4901 3.08507L13.9211 3.57366C14.0635 3.73959 14.2714 3.83507 14.4901 3.83507C14.7088 3.83507 14.9166 3.73959 15.0591 3.57366L14.4901 3.08507ZM1.83309 13.8095L1.24174 14.2708C1.26354 14.2987 1.28728 14.3251 1.3128 14.3497L1.83309 13.8095ZM14.4901 26L13.9698 26.5402C14.2602 26.8199 14.7199 26.8199 15.0104 26.5402L14.4901 26ZM27.147 13.8095L27.6673 14.3497C27.6929 14.3251 27.7166 14.2987 27.7384 14.2708L27.147 13.8095ZM15.0591 2.59647C11.939 -1.03722 6.63825 -2.08354 2.63819 1.32111L3.61042 2.46337C6.87501 -0.315274 11.243 0.454817 13.9211 3.57366L15.0591 2.59647ZM2.63819 1.32111C-1.29634 4.66998 -1.86088 10.2936 1.24174 14.2708L2.42443 13.3482C-0.177916 10.0123 0.280312 5.29779 3.61042 2.46337L2.63819 1.32111ZM27.7384 14.2708C30.8344 10.3022 30.349 4.63868 26.3341 1.31455L25.3775 2.46993C28.7522 5.26405 29.1647 10.0038 26.5557 13.3482L27.7384 14.2708ZM26.3341 1.31455C22.2794 -2.04265 17.0468 -1.04378 13.9211 2.59647L15.0591 3.57366C17.7315 0.461382 22.0428 -0.291122 25.3775 2.46993L26.3341 1.31455ZM1.3128 14.3497L13.9698 26.5402L15.0104 25.4598L2.35337 13.2693L1.3128 14.3497ZM15.0104 26.5402L27.6673 14.3497L26.6268 13.2693L13.9698 25.4598L15.0104 26.5402Z",
            stroke: "rgba(55,65,81,1)",
            fillRule: "nonzero",
            strokeLinejoin: "round",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="6.39%"
        bottom="82.6%"
        left="91.71%"
        right="4.41%"
        {...getOverrideProps(overrides, "Vector70158")}
      ></Icon>
      <Text
        fontFamily="Lexend"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="404px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.34%"
        bottom="55.49%"
        left="34.76%"
        right="11.23%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={businesses?.Hours}
        {...getOverrideProps(overrides, "Hours")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="17.4%"
        bottom="68.2%"
        left="34.49%"
        right="52.54%"
        borderRadius="32px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(254,226,226,1)"
        {...getOverrideProps(overrides, "Frame 15")}
      >
        <Text
          fontFamily="Lexend"
          fontSize="14px"
          fontWeight="500"
          color="rgba(239,68,68,1)"
          textTransform="capitalize"
          lineHeight="17.5px"
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
          children={businesses?.Category}
          {...getOverrideProps(overrides, "Category")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Lexend"
        fontSize="16px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="430px"
        height="67px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="44.51%"
        bottom="27.11%"
        left="34.49%"
        right="8.02%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Review"
        {...getOverrideProps(overrides, "Review")}
      ></Text>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="84.75%"
        bottom="3.39%"
        left="88.77%"
        right="1.34%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 16")}
      >
        <View
          width="28px"
          height="28px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "bx:bxs-star")}
        >
          <Icon
            width="23.33px"
            height="23.34px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 23.3330078125,
              height: 23.33642578125,
            }}
            paths={[
              {
                d: "M23.2715 8.3778C23.1982 8.16181 23.0632 7.97202 22.8833 7.83186C22.7033 7.69171 22.4862 7.60733 22.2589 7.58913L15.6077 7.06063L12.7295 0.689462C12.6379 0.48426 12.4888 0.309971 12.3003 0.187629C12.1117 0.0652881 11.8918 0.000123526 11.6671 1.75442e-07C11.4423 -0.000123175 11.2224 0.0648 11.0337 0.186934C10.845 0.309069 10.6958 0.483194 10.6039 0.688296L7.7257 7.06063L1.07453 7.58913C0.851062 7.60683 0.637425 7.68854 0.459178 7.82448C0.280931 7.96042 0.145622 8.14484 0.0694393 8.35566C-0.00674378 8.56649 -0.0205753 8.7948 0.0295997 9.01328C0.0797747 9.23176 0.191832 9.43116 0.352364 9.58763L5.26753 14.3791L3.5292 21.9065C3.47641 22.1343 3.49333 22.3728 3.57775 22.5909C3.66218 22.809 3.81021 22.9967 4.00263 23.1296C4.19506 23.2626 4.423 23.3346 4.65688 23.3364C4.89075 23.3382 5.11977 23.2696 5.3142 23.1396L11.6667 18.9046L18.0192 23.1396C18.2179 23.2716 18.4523 23.3395 18.6908 23.3343C18.9293 23.329 19.1604 23.2509 19.3532 23.1104C19.5459 22.9698 19.691 22.7737 19.7689 22.5482C19.8469 22.3228 19.8539 22.0789 19.789 21.8493L17.6552 14.3826L22.9472 9.6203C23.2937 9.30763 23.4209 8.81996 23.2715 8.3778L23.2715 8.3778Z",
                fill: "rgba(245,158,11,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector70182")}
          ></Icon>
        </View>
        <Text
          fontFamily="Lexend"
          fontSize="20px"
          fontWeight="600"
          color="rgba(60,69,99,1)"
          lineHeight="28px"
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
          children="4.6"
          {...getOverrideProps(overrides, "4.6")}
        ></Text>
      </Flex>
    </View>
  );
}
