import { Container, rem, Flex, Button, Text } from "@mantine/core";
import classes from "./Technology.module.scss";
import { useLingui } from "@lingui/react";
import Image from "next/image";

export const Technology: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Container
        id="useTech"
        size={"xl"}
        py={rem(50)}
      >
        <Flex
          direction={"column"}
          w={"100%"}
          justify={"center"}
          align={"center"}
          gap={rem(48)}
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
            {i18n._("CÔNG NGHỆ SỬ DỤNG")}
          </Text>
          <Flex justify={"center"} gap={rem(13)} wrap={"wrap"}>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/php.png"} alt="" fill />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image
                src={"/assets/icons/node.png"}
                alt=""
                width={115}
                height={115}
              />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image
                src={"/assets/icons/lavarel.png"}
                alt=""
                width={82}
                height={86}
              />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/mariadb.png"} alt="" fill />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/py.png"} alt="" fill />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/ts.png"} alt="" fill />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/js.png"} alt="" fill />
            </Flex>
            <Flex
              justify={"center"}
              align={"center"}
              pos={"relative"}
              className={classes.item}
            >
              <Image sizes="xxl" src={"/assets/icons/yi.png"} alt="" fill />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
