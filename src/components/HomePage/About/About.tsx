import { Button, Container, Flex, rem, Text } from "@mantine/core";
import classes from "./About.module.scss";
import { useLingui } from "@lingui/react";

export const About: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Container size="xl">
        <Flex
          id="about"
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
            className={classes.text}
            styles={{
              root: {
                color: `#344054`,
              },
            }}
          >
            {i18n._("Giới thiệu chung về chúng tôi")}
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
            {i18n._(
              "Với khung chương trình bám sát yêu cầu dự án thực tế, khi tham gia khóa học, các bạn sẽ được trang bị đầy đủ kiến thức từ cơ bản tới nâng cao để trở thành một Front-end Developer."
            )}
          </Text>
          <Button className={classes.buttonMore} size="xl">
            {i18n._("Xem thêm về chúng tôi")}
          </Button>
        </Flex>
      </Container>
    </>
  );
};
