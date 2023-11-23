import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  rem,
  Text,
  TextInput,
  Group,
  Textarea,
  Input,
} from "@mantine/core";
import Image from "next/image";
import { useLingui } from "@lingui/react";
import classes from "./Register.module.scss";
import { useForm, isEmail, hasLength } from "@mantine/form";
import { IMaskInput } from "react-imask";
export const Register: React.FC = () => {
  const { i18n } = useLingui();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      consult: "",
    },

    validate: {
      name: hasLength({ min: 2, max: 30 }, "Tên có độ dài từ 2 đến 10"),
      email: isEmail("Email không chính xác"),
      phone: hasLength({ min: 10, max: 13 }, "Số điện thoại không chính xác"),
    },
  });

  // const submitForm = (values: any, event: any) => {
  const submitForm = async (event: any) => {
    console.log(form.values)
    let formData = new FormData()
    formData.append('name', form.values.name)
    formData.append('Phone Number', form.values.phone)
    formData.append('subject', 'Form khóa học')
    formData.append('description', form.values.consult)
    formData.append('email_from', form.values.email)
    formData.append('email_to', 'mihnthu@ayden.company')
    const response = await fetch('https://erp.ayden.company/website/form', {
      method: "POST",
      body: formData,
    });
    console.log(response)
    // var data = new FormData(event.target);
    // data.append("consult", values["consult"]);
    // fetch(event.target.action, {
    //   method: event.target.method,
    //   body: data,
    //   headers: {
    //     Accept: "application/json",
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("ok");
    //       form.reset();
    //     } else {
    //       response.json().then((data) => {
    //         if (Object.hasOwn(data, "errors")) {
    //           console.log(
    //             data["errors"].map((error: any) => error["message"]).join(", ")
    //           );
    //         } else {
    //           console.log("Oops! There was a problem submitting your form");
    //         }
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Oops! There was a problem submitting your form", error);
    //   });
  };
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
                <Image
                  sizes="xxl"
                  src={"/assets/images/register.png"}
                  alt=""
                  fill
                />
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 24, md: 12 }}>
              <Flex justify={"center"}>
                <Box
                  component="form"
                  maw={600}
                  className={classes.form}
                  w={{ base: "90%" }}
                  action="https://formspree.io/f/mbjvedze"
                  method="POST"
                  onSubmit={form.onSubmit(
                    (
                      // values,
                      _event
                    ) => {
                      // submitForm(values, _event);
                      submitForm(_event);
                    }
                  )}
                >
                  <Text className={classes.text}>{i18n._("GHI DANH")}</Text>
                  <TextInput
                    name="Họ và tên"
                    label="Họ và tên"
                    placeholder="Họ và tên"
                    withAsterisk
                    {...form.getInputProps("name")}
                  />

                  <TextInput
                    name="Email"
                    label="Email"
                    placeholder="Email"
                    withAsterisk
                    mt="md"
                    {...form.getInputProps("email")}
                  />
                  <Input.Wrapper label="Số điện thoại" mt={"md"} withAsterisk>
                    <Input<any>
                      name="Số điện thoại"
                      placeholder="Số điện thoại"
                      type="number"
                      component={IMaskInput}
                      mask="0000000000"
                      {...form.getInputProps("phone")}
                    />
                  </Input.Wrapper>
                  <Input.Wrapper>
                    <Textarea
                      name="Tư vấn"
                      mt={rem(20)}
                      classNames={classes}
                      placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây"
                      {...form.getInputProps("consult")}
                    />
                  </Input.Wrapper>

                  <Group justify="center" mt="xl">
                    <Button className={classes.registerButton} type="submit">
                      GHI DANH NGAY
                    </Button>
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
