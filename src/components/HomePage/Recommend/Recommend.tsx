import {
  Text,
  Box,
  rem,
  Flex,
  Container,
  Button,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Recommend.module.scss";
import { useMemo } from "react";
import { useLingui } from "@lingui/react";
import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";

export const Recommend: React.FC = () => {
  const { i18n } = useLingui();
  const dataRaw = useMemo(
    () => [
      {
        name: "Shaun Stevens",
        position: "Founder @CraftLab",
        comment: i18n._(
          "“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”"
        ),
        avatar: "/assets/images/av1.png",
      },
      {
        name: "James Smith",
        position: "Founder @LabLess",
        comment: i18n._(
          "“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”"
        ),
        avatar: "/assets/images/av2.png",
      },
      {
        name: "Laryssa Stone",
        position: "Marketing Manager @Samsung",
        comment: i18n._(
          "“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”"
        ),
        avatar: "/assets/images/av3.png",
      },
      {
        name: "Ersad Samuel",
        position: "Design Lead @Apple",
        comment: i18n._(
          "“Blaze.io did a great job! My new website is so much more professional, good looking and easier to work with than my old site.”"
        ),
        avatar: "/assets/images/av4.png",
      },
    ],
    [i18n]
  );

  const itemCard = useMemo(() => {
    return (
      <>
        {dataRaw.map((item, index) => {
          return (
            <Box key={index} className={classes.card}>
              <Flex gap={rem(20)} align={"center"}>
                <Box
                  pos={"relative"}
                  w={rem(88)}
                  h={rem(88)}
                  className={classes.cardImg}
                >
                  <Image sizes="xxl" src={item.avatar} alt="" fill />
                </Box>
                <Box>
                  <Text
                    size={rem(24)}
                    fw={700}
                    lh={rem(31.2)}
                    lts={rem(-0.72)}
                    styles={{
                      root: {
                        color: `#344054`,
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    size={rem(16)}
                    fw={600}
                    lh={rem(24)}
                    styles={{
                      root: {
                        color: `#667085`,
                      },
                    }}
                  >
                    {item.name}
                  </Text>
                  <Flex gap={rem(2)}>
                    <IconStarFilled
                      style={{ color: "yellow", width: "12px" }}
                    />
                    <IconStarFilled
                      style={{ color: "yellow", width: "12px" }}
                    />
                    <IconStarFilled
                      style={{ color: "yellow", width: "12px" }}
                    />
                    <IconStarFilled
                      style={{ color: "yellow", width: "12px" }}
                    />
                    <IconStarFilled
                      style={{ color: "yellow", width: "12px" }}
                    />
                  </Flex>
                </Box>
              </Flex>
              <Text
                className={classes.text}
                size={rem(18)}
                lh={rem(26)}
                m="10px 0px 20px"
              >
                {item.comment}
              </Text>
            </Box>
          );
        })}
      </>
    );
  }, [dataRaw]);

  return (
    <Container
      id="feelOfStudent"
      size={"xl"}
      py={rem(100)}
    >
      <Flex
        justify={"center"}
        align={"center"}
        direction={"column"}
        gap={rem(24)}
        className={classes.aboutContainer}
      >
        <Button size="lg" className={classes.button}>
          {i18n._("AYDEN COMPANY")}
        </Button>
        <Text
          className={classes.title}
          styles={{
            root: {
              color: `#344054`,
            },
          }}
        >
          {i18n._("CẢM NHẬN HỌC VIÊN")}
        </Text>
        <Text
          w={{ base: rem(320), md: rem(1133) }}
          ta={"center"}
          className={classes.subText}
          styles={{
            root: {
              color: `#667085`,
            },
          }}
        >
          {/* {i18n._(
            "Với khung chương trình bám sát yêu cầu dự án thực tế, khi tham gia khóa học, các bạn sẽ được trang bị đầy đủ kiến thức từ cơ bản tới nâng cao để trở thành một Front-end Developer."
          )} */}
        </Text>
        <SimpleGrid
          cols={{ base: 1, md: 2 }}
          spacing="xl"
          className={classes.cardContainer}
        >
          {itemCard}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
