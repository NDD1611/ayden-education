import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  rem,
  Text,
  TextInput,
} from "@mantine/core";
import Image from "next/image";
import { useLingui } from "@lingui/react";
import classes from "./Register.module.scss";
export const Register: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Flex
        align={"center"}
        mih={rem(620)}
        bg={"#2339FF"}
        py={rem(50)}
        id="contact"
      >
        <Container size={"xl"} w={"100%"}>
          <Grid columns={24}>
            <Grid.Col span={{ base: 24, md: 12 }}>
              <Box
                pos={"relative"}
                w={rem("100%")}
                h={{ base: rem(200), md: rem(440) }}
              >
                <Image src={"/assets/images/register.png"} alt="" fill />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 24, md: 12 }}>
              <form>
                <Box w={{ base: "100%", md: rem(535) }}>
                  <Text
                    className={classes.text}
                    styles={{
                      root: {
                        color: `#fff`,
                      },
                    }}
                  >
                    {i18n._("Đăng kí ngay")}
                  </Text>
                  <Text
                    mt={rem(12)}
                    className={classes.subText}
                    styles={{
                      root: {
                        color: `#fff`,
                      },
                    }}
                  >
                    {i18n._(
                      "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
                    )}
                  </Text>
                  <Flex direction={"column"} gap={rem(12)} mt={rem(12)}>
                    <TextInput
                      placeholder="Họ và tên"
                      size="lg"
                      radius={rem(8)}
                    />
                    <TextInput
                      placeholder="Số điện thoại"
                      size="lg"
                      radius={rem(8)}
                    />
                    <TextInput
                      placeholder="Địa chỉ email"
                      size="lg"
                      radius={rem(8)}
                    />
                    <Button size="xl" variant="white" color="#344054">
                      Gửi ngay
                    </Button>
                  </Flex>
                </Box>
              </form>
            </Grid.Col>
          </Grid>
        </Container>
      </Flex>
    </>
  );
};
