import { useLingui } from "@lingui/react";
import {
  Box,
  Container,
  List,
  ThemeIcon,
  rem,
  Text,
  SimpleGrid,
} from "@mantine/core";
import classes from "./InformationCourse.module.scss";
import Image from "next/image";
export const InformationCourse: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Container
        id="objectAndAdvantage"
        size={"xl"}
        py={{ base: rem(96) }}
      >
        <SimpleGrid cols={{ span: 1, md: 2 }} spacing={rem(24)}>
          <Box className={classes.boxContainer}>
            <Text
              ta={"center"}
              className={classes.title}
              styles={{
                root: {
                  color: `#344054`,
                },
              }}
            >
              {i18n._("ĐỐI TƯỢNG THAM GIA")}
            </Text>
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
                    <Image sizes="xxl" src={"/assets/icons/bullet.svg"} alt="" fill />
                  </ThemeIcon>
                }
                styles={{
                  itemLabel: {
                    color: `#333`,
                    lineHeight: 1.5,
                    fontSize: rem(16),
                  },
                }}
              >
                <List.Item>
                  {i18n._(
                    "Sinh viên ngành CNTT muốn học bài bản và nâng cao kỹ năng về Lập trình Front-End với React JS"
                  )}
                </List.Item>
                <List.Item>
                  {i18n._(
                    "Lập trình viên đang làm việc tại các doanh nghiệp muốn bổ sung kiến thức nền tảng, kỹ năng thực hành về Front-end chuyên sâu với React JS"
                  )}
                </List.Item>
                <List.Item>
                  {i18n._("Người muốn chuyển ngành sang lập trình")}
                </List.Item>
              </List>
            </Box>
          </Box>
          <Box className={classes.boxContainer}>
            <Text
              ta={"center"}
              className={classes.title}
              styles={{
                root: {
                  color: `#344054`,
                },
              }}
            >
              {i18n._("ƯU THẾ TUYỂN DỤNG")}
            </Text>
            <Box className={classes.boxList}>
              <List
                spacing="xs"
                size="sm"
                center
                styles={{
                  itemLabel: {
                    color: `#333`,
                    lineHeight: 1.5,
                    fontSize: rem(16),
                  },
                }}
                icon={
                  <ThemeIcon
                    color="'transparent"
                    size={24}
                    radius="xl"
                    pos={"relative"}
                  >
                    <Image sizes="xxl" src={"/assets/icons/bullet.svg"} alt="" fill />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  {i18n._(
                    "Apply vào tất cả công ty tuyển dụng Front-end Dev hoặc Fresher"
                  )}
                </List.Item>
                <List.Item>
                  {i18n._("Các công ty outsourcing - gia công phần mềm")}
                </List.Item>
                <List.Item>
                  {i18n._("Công ty, tập đoàn trong nước và nước ngoài...")}
                </List.Item>
                <List.Item>
                  {i18n._("Các công ty startup - khởi nghiệp")}
                </List.Item>
                <List.Item>
                  {i18n._("Nhận các job freelance về xây dựng Front-end")}
                </List.Item>
              </List>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};
