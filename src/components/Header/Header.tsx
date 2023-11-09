"use client";
import { useLingui } from "@lingui/react";
import { Box, Button, Container, Flex, rem } from "@mantine/core";
import Image from "next/image";
import classes from "./Header.module.scss";
import { Navbar } from "./Navbar";
import { MenuMobile } from "./MenuMobile";
import Link from "next/link";

export const Header: React.FC = () => {
  const { i18n } = useLingui();

  return (
    <>
      <Box className={classes.header_Container}>
        <Container size={"xl"}>
          <Flex
            w={"100%"}
            justify={"space-between"}
            align={"center"}
            py={{ base: rem(30), md: 0 }}
            h={{ base: rem(60), md: 96 }}
          >
            <Flex gap={rem(40)} align={"center"} h={"100%"}>
              <Box
                pos={"relative"}
                w={{ base: rem(80), md: rem(101) }}
                h={{ base: rem(42), md: rem(56) }}
              >
                <Image sizes="xxl" className={classes.Logo} src={"/assets/icons/logolight.svg"} alt="logo" fill />
              </Box>
              <Box className={classes.hideMobile}>
                <Navbar />
              </Box>
            </Flex>
            <Box className={classes.hideMobile}>
              <Button className={classes.button} size="lg" component={Link} href="#contact">
                {i18n._("Liên hệ đăng kí")}
              </Button>
            </Box>
            <Box className={classes.hideDesktop}>
              <MenuMobile />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
