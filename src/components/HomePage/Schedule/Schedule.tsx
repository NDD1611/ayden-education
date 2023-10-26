import {
  Box,
  Flex,
  rem,
  Text,
  List,
  Container,
  ActionIcon,
  ThemeIcon,
} from "@mantine/core";
import classes from "./Schedule.module.scss";
import { useLingui } from "@lingui/react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useCallback, useMemo, useRef } from "react";
import React from "react";
export const Schedule: React.FC = () => {
  const { i18n } = useLingui();
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const handleNextSlide = useCallback(() => {
    if (nextRef.current) {
      nextRef.current.click();
    }
  }, [nextRef]);
  const handlePreviousSlide = useCallback(() => {
    if (prevRef.current) {
      prevRef.current.click();
    }
  }, [prevRef]);
  const dataraw = useMemo(
    () => [
      {
        title: "HTML - CSS",
        list: [
          i18n._("UI UX"),
          i18n._("HTML - CSS"),
          i18n._("BỐ CỤC"),
          i18n._("MÀU SẮC"),
          i18n._("Dự án Web"),
          i18n._("Dự án Coffee"),
          i18n._("CÔNG CỤ"),
        ],
      },
      {
        title: "HTML - CSS3",
        list: [
          i18n._("UI UX"),
          i18n._("HTML - CSS"),
          i18n._("BỐ CỤC"),
          i18n._("MÀU SẮC"),
          i18n._("Dự án Web"),
          i18n._("Dự án Coffee"),
          i18n._("CÔNG CỤ"),
        ],
      },
      {
        title: "BOOTSTRAP",
        list: [
          i18n._("UI UX"),
          i18n._("HTML - CSS"),
          i18n._("BỐ CỤC"),
          i18n._("MÀU SẮC"),
          i18n._("Dự án Web"),
          i18n._("Dự án Coffee"),
          i18n._("CÔNG CỤ"),
        ],
      },
      {
        title: "SAAS",
        list: [
          i18n._("UI UX"),
          i18n._("HTML - CSS"),
          i18n._("BỐ CỤC"),
          i18n._("MÀU SẮC"),
          i18n._("Dự án Web"),
          i18n._("Dự án Coffee"),
          i18n._("CÔNG CỤ"),
        ],
      },
      {
        title: "Reactjs",
        list: [
          i18n._("UI UX"),
          i18n._("HTML - CSS"),
          i18n._("BỐ CỤC"),
          i18n._("MÀU SẮC"),
          i18n._("Dự án Web"),
          i18n._("Dự án Coffee"),
          i18n._("CÔNG CỤ"),
        ],
      },
    ],
    [i18n]
  );

  const boxCarousel = useMemo(() => {
    return (
      <>
        <Carousel
          w={"100%"}
          withIndicators
          slideSize={{ base: "100%", md: "25%" }}
          slideGap="md"
          loop
          align="start"
          styles={{
            control: {
              visibility: "hidden",
            },
          }}
          slidesToScroll={1}
          nextControlIcon={<Box ref={nextRef}>next</Box>}
          previousControlIcon={<Box ref={prevRef}>Prev</Box>}
        >
          {dataraw.map((item, index) => {
            return (
              <Carousel.Slide key={index}>
                <Box className={classes.boxHeader}>
                  <Text
                    size={rem(24)}
                    fw={700}
                    lh={rem(38)}
                    styles={{
                      root: {
                        color: "#fff",
                      },
                    }}
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box className={classes.boxList}>
                  <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                      <ThemeIcon
                        color="'transparent"
                        size={24}
                        radius="xl"
                        pos={"relative"}
                      >
                        <Image src={"/assets/icons/bullet.svg"} alt="" fill />
                      </ThemeIcon>
                    }
                    styles={{
                      itemLabel: {
                        color: `#667085`,
                        lineHeight: rem(30),
                        fontSize: rem(20),
                        fontWeight: 700,
                      },
                    }}
                  >
                    {item.list.map((subItem, subIndex) => {
                      return (
                        <React.Fragment key={subIndex}>
                          <List.Item>{subItem}</List.Item>
                        </React.Fragment>
                      );
                    })}
                  </List>
                </Box>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </>
    );
  }, [dataraw]);

  return (
    <>
      <Container
        size={"xl"}
        mt={rem(50)}
        py={{ base: rem(50), md: 0 }}
        id="course"
      >
        <Flex w={"100%"} gap={"md"}>
          <ActionIcon
            variant="filled"
            w={rem(77)}
            h={rem(77)}
            bg={"#2339FF"}
            className={classes.hideMobile}
            onClick={handlePreviousSlide}
          >
            <IconArrowLeft size={"2rem"} stroke={1.5} />
          </ActionIcon>
          <Box w={"100%"} style={{ flex: 1 }}>
            {boxCarousel}
          </Box>
          <ActionIcon
            variant="filled"
            w={rem(77)}
            h={rem(77)}
            bg={"#2339FF"}
            className={classes.hideMobile}
            onClick={handleNextSlide}
          >
            <IconArrowRight size={"2rem"} stroke={1.5} />
          </ActionIcon>
        </Flex>
        <Flex mt={rem(20)} gap={rem(10)} justify={"end"}>
          <ActionIcon
            variant="filled"
            w={rem(40)}
            h={rem(24)}
            bg={"#2339FF"}
            className={classes.hideDesktop}
            onClick={handlePreviousSlide}
          >
            <IconArrowLeft size={"1rem"} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            w={rem(40)}
            h={rem(24)}
            bg={"#2339FF"}
            className={classes.hideDesktop}
            onClick={handleNextSlide}
          >
            <IconArrowRight size={"1rem"} stroke={1.5} />
          </ActionIcon>
        </Flex>
      </Container>
    </>
  );
};
