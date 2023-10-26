import {
  Box,
  Container,
  Flex,
  List,
  rem,
  ThemeIcon,
  Text,
  Button,
  Grid,
} from "@mantine/core";
import classes from "./Values.module.scss";

import Image from "next/image";
import { useLingui } from "@lingui/react";

export const Values: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Container size={"xl"} py={rem(50)}>
        <Flex justify={"space-between"}>
          <Grid columns={24}>
            <Grid.Col span={{ base: 24, md: 8 }}>
              <Flex gap={rem(24)} direction={"column"} maw={rem(425)}>
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
                  {i18n._("Giá trị học viên nhận được sau khi học")}
                </Text>
                <Text
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
                  {i18n._("Đăng kí khóa học ngay")}
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 24, md: 16 }}>
              <Box className={classes.boxList} maw={rem(824)}>
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
                    item: {
                      background: "#fff",
                      padding: `16px 24px`,
                      borderRadius: rem(9),
                    },
                    itemLabel: {
                      color: `#667085`,
                      lineHeight: 1.5,
                      fontSize: rem(16),
                    },
                  }}
                >
                  <List.Item>
                    {i18n._(
                      "Làm chủ HTML, CSS, JavaScript, thư viện Bootstrap, Jquery trong xây dựng giao diện web"
                    )}
                  </List.Item>
                  <List.Item>
                    {i18n._(
                      "Làm chủ thư viện ReactJS, các khái niệm từ cơ bản đến nâng cao"
                    )}
                  </List.Item>
                  <List.Item>
                    {i18n._(
                      "Tạo ra sản phẩm thực tế ngay trong khóa học, xây dựng projet phù hợp với yêu cầu doanh nghiệp"
                    )}
                  </List.Item>

                  <List.Item>
                    {i18n._(
                      "Hiểu về quy trình phát triển sản phẩm phần mềm khi làm việc trong doanh nghiệp"
                    )}
                  </List.Item>
                  <List.Item>
                    {i18n._(
                      "Sẵn sàng tham gia dự án ở vai trò lập trình viên Front-end với ReactJS"
                    )}
                  </List.Item>
                </List>
              </Box>
            </Grid.Col>
          </Grid>
        </Flex>
      </Container>
    </>
  );
};
