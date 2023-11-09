import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  rem,
  Text,
  TextInput, Group, Textarea
} from "@mantine/core";
import Image from "next/image";
import { useLingui } from "@lingui/react";
import classes from "./Register.module.scss";
import { useForm, isEmail, hasLength } from '@mantine/form';
export const Register: React.FC = () => {
  const { i18n } = useLingui();
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },

    validate: {
      name: hasLength({ min: 2, max: 30 }, 'Tên có độ dài từ 2 đến 10'),
      email: isEmail('email không chính xác'),
      phone: hasLength({ min: 10, max: 13 }, 'Số điện thoại không chính xác'),
    },
  });

  const submitForm = () => {
    console.log(form.values)
  }
  return (
    <>
      <Flex
        align={"center"}
        mih={rem(620)}
        // bg={"#2339FF"}
        py={rem(100)}
        id="register"
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
                <Image sizes="xxl" src={"/assets/images/register.png"} alt="" fill />
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
                  w={{ base: '90%' }}
                  onSubmit={form.onSubmit(() => { submitForm() })}
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
                    placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây"
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
