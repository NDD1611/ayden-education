import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  rem,
  Text,
  TextInput, Group, NumberInput, Textarea
} from "@mantine/core";
import Image from "next/image";
import { useLingui } from "@lingui/react";
import classes from "./Register.module.scss";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
export const Register: React.FC = () => {
  const { i18n } = useLingui();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Tên có độ dài từ 2 đến 10'),
      email: isEmail('email không chính xác'),
      phone: matches(/^#([0-9a-f]{3}){1,2}$/, 'số điện thoại không chính xác'),
    },
  });
  return (
    <>
      <Flex
        align={"center"}
        mih={rem(620)}
        // bg={"#2339FF"}
        py={rem(50)}
        id="contact"
        className={classes.contact}
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
              <Flex
                justify={'center'}
              >
                <Box
                  component="form"
                  maw={600}
                  className={classes.form}
                  w={{ base: '80%' }}
                  onSubmit={form.onSubmit(() => { })}
                >
                  <Text
                    className={classes.text}
                  >
                    {i18n._("GHI DANH")}
                  </Text>
                  <TextInput label="Họ và tên" placeholder="Họ và tên" withAsterisk {...form.getInputProps('name')} />

                  <TextInput
                    label="Email"
                    placeholder="Email"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('email')}
                  />
                  <TextInput
                    label="Số điện thoại"
                    placeholder="Số điện thoại"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps('phone')}
                  />
                  <Textarea
                    mt={rem(20)}
                    classNames={classes}
                    placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lịa tin nhăn tại đây"
                  />

                  <Group
                    justify="center"
                    mt="xl"
                  >
                    <Button
                      className={classes.registerButton}
                      type="submit"
                    >GHI DANH NGAY</Button>
                  </Group>
                </Box>
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </Flex>
    </>
  );
};
