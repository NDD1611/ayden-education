"use client";
import classes from "./Hero.module.scss";
import { Box, Button, Container, Flex, Text, rem } from "@mantine/core";
import { useLingui } from "@lingui/react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Flex h={"100%"} className={classes.homeContainer} id="home">
        <Container size={"xl"} h={"100%"} w={'100%'}>
          <Flex
            justify={"center"}
            align={"center"}
            direction={"column"}
            h={"100%"}
          >
            <Button size="lg" className={classes.button}>
              {i18n._("AYDEN COMPANY")}
            </Button>
            <Text
              mt={rem(8)}
              styles={{
                root: {
                  color: `#344054`,
                },
              }}
              className={classes.title}
            >
              {i18n._("KHÓA HỌC FRONT-END THỰC CHIẾN")}
            </Text>
            <Text
              className={classes.text}
              styles={{
                root: {
                  color: `#2339FF`,
                },
              }}
            >
              {i18n._("DÀNH CHO BẤT KÌ AI")}
            </Text>
            <Box
              pos="relative"
              w={{ base: rem(340), md: rem(866) }}
              h={{ base: rem(223), md: rem(553) }}
              className={classes.imagesContainer}
            >
              <Image sizes="xxl" src={"/assets/images/heroimg.png"} alt="" fill />
              <Flex
                pos={"absolute"}
                justify={"center"}
                align={"center"}
                direction={"column"}
                top={rem(100)}
                left={rem(-150)}
                gap={rem(20)}
                className={classes.hideMobile}
              >
                <Box pos={"relative"} w={rem(197)} h={rem(173)}>
                  <Image sizes="xxl" src={"/assets/images/left1.png"} alt="" fill />
                </Box>
                <Box pos={"relative"} w={rem(308)} h={rem(235)}>
                  <Image sizes="xxl" src={"/assets/images/left2.png"} alt="" fill />
                </Box>
              </Flex>
              <Flex
                pos={"absolute"}
                justify={"center"}
                align={"center"}
                direction={"column"}
                top={rem(100)}
                right={rem(-150)}
                gap={rem(20)}
                className={classes.hideMobile}
              >
                <Box pos={"relative"} w={rem(234)} h={rem(164)}>
                  <Image sizes="xxl" src={"/assets/images/right1.png"} alt="" fill />
                </Box>
                <Box pos={"relative"} w={rem(194)} h={rem(212)}>
                  <Image sizes="xxl" src={"/assets/images/right2.png"} alt="" fill />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
