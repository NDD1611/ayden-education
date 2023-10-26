import {
  Flex,
  rem,
  Box,
  Text,
  Container,
  Button,
  SimpleGrid,
} from "@mantine/core";
import classes from "./WhyChoose.module.scss";
import Image from "next/image";
import { useLingui } from "@lingui/react";
export const WhyChoose: React.FC = () => {
  const { i18n } = useLingui();

  return (
    <>
      <Container size={"xl"}>
        <Flex
          justify={"center"}
          align={"center"}
          direction={"column"}
          gap={rem(48)}
          className={classes.WhyChooseContainer}
        >
          <Button size="lg" className={classes.button}>
            {i18n._("AYDEN COMPANY")}
          </Button>
          <Text
            className={classes.text}
            styles={{
              root: {
                color: `#344054`,
              },
            }}
          >
            {i18n._("Lý do nên lựa chọn chúng tôi")}
          </Text>
          <Text
            w={{ base: rem(320), md: rem(904) }}
            ta={"center"}
            className={classes.subText}
            styles={{
              root: {
                color: `#667085`,
              },
            }}
          >
            {i18n._(
              "Với khung chương trình bám sát yêu cầu dự án thực tế, khi tham gia khóa học, các bạn sẽ được trang bị đầy đủ kiến thức từ cơ bản tới nâng cao để trở thành một Front-end Developer."
            )}
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              gap={rem(32)}
              p={rem(24)}
              className={classes.boxCard}
            >
              <Box pos={"relative"} w={rem(80)} h={rem(80)}>
                <Image src={"/assets/icons/progress.png"} alt="" fill />
              </Box>
              <Box>
                <Text
                  ta={"center"}
                  className={classes.cardTitle}
                  styles={{
                    root: {
                      color: `#101828`,
                    },
                  }}
                >
                  {i18n._("Chương trình đào tạo chất lượng")}
                </Text>
                <Text
                  ta={"center"}
                  size={rem(16)}
                  fw={600}
                  lh={rem(24)}
                  styles={{
                    root: {
                      color: `#475467`,
                    },
                  }}
                >
                  {i18n._("Speak to our friendly team.")}
                </Text>
              </Box>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              gap={rem(32)}
              p={rem(24)}
              className={classes.boxCard}
            >
              <Box pos={"relative"} w={rem(80)} h={rem(80)}>
                <Image src={"/assets/icons/progress.png"} alt="" fill />
              </Box>
              <Box>
                <Text
                  ta={"center"}
                  className={classes.cardTitle}
                  styles={{
                    root: {
                      color: `#101828`,
                    },
                  }}
                >
                  {i18n._("Chương trình đào tạo chất lượng")}
                </Text>
                <Text
                  ta={"center"}
                  size={rem(16)}
                  fw={600}
                  lh={rem(24)}
                  styles={{
                    root: {
                      color: `#475467`,
                    },
                  }}
                >
                  {i18n._("Speak to our friendly team.")}
                </Text>
              </Box>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              gap={rem(32)}
              p={rem(24)}
              className={classes.boxCard}
            >
              <Box pos={"relative"} w={rem(80)} h={rem(80)}>
                <Image src={"/assets/icons/progress.png"} alt="" fill />
              </Box>
              <Box>
                <Text
                  ta={"center"}
                  className={classes.cardTitle}
                  styles={{
                    root: {
                      color: `#101828`,
                    },
                  }}
                >
                  {i18n._("Chương trình đào tạo chất lượng")}
                </Text>
                <Text
                  ta={"center"}
                  size={rem(16)}
                  fw={600}
                  lh={rem(24)}
                  styles={{
                    root: {
                      color: `#475467`,
                    },
                  }}
                >
                  {i18n._("Speak to our friendly team.")}
                </Text>
              </Box>
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              gap={rem(32)}
              p={rem(24)}
              className={classes.boxCard}
            >
              <Box pos={"relative"} w={rem(80)} h={rem(80)}>
                <Image src={"/assets/icons/progress.png"} alt="" fill />
              </Box>
              <Box>
                <Text
                  ta={"center"}
                  className={classes.cardTitle}
                  styles={{
                    root: {
                      color: `#101828`,
                    },
                  }}
                >
                  {i18n._("Chương trình đào tạo chất lượng")}
                </Text>
                <Text
                  ta={"center"}
                  size={rem(16)}
                  fw={600}
                  lh={rem(24)}
                  styles={{
                    root: {
                      color: `#475467`,
                    },
                  }}
                >
                  {i18n._("Speak to our friendly team.")}
                </Text>
              </Box>
            </Flex>
          </SimpleGrid>
          <Button className={classes.buttonMore} size="xl">
            {i18n._("Đăng kí khóa học ngay")}
          </Button>
        </Flex>
      </Container>
    </>
  );
};
