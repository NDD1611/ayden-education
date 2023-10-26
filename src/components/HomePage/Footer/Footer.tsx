import { Container, Divider, Flex, SimpleGrid, Text, rem } from "@mantine/core";
import Image from "next/image";
import classes from "./Footer.module.scss";
export const Footer: React.FC = () => {
  return (
    <>
      <Container size={"xl"} py={rem(80)}>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing={"xl"}>
          <Flex direction={"column"} gap={rem(12)}>
            <Text
              size={rem(18)}
              fw={600}
              lh={rem(28)}
              styles={{
                root: {
                  color: "#2339FF",
                },
              }}
            >
              Resources
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Blog
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Newsletter
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Events
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Help centre
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Tutorials
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Support
            </Text>
          </Flex>
          <Flex direction={"column"} gap={rem(12)}>
            <Text
              size={rem(18)}
              fw={600}
              lh={rem(28)}
              styles={{
                root: {
                  color: "#2339FF",
                },
              }}
            >
              Resources
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Blog
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Newsletter
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Events
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Help centre
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Tutorials
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Support
            </Text>
          </Flex>
          <Flex direction={"column"} gap={rem(12)}>
            <Text
              size={rem(18)}
              fw={600}
              lh={rem(28)}
              styles={{
                root: {
                  color: "#2339FF",
                },
              }}
            >
              Resources
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Blog
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Newsletter
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Events
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Help centre
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Tutorials
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Support
            </Text>
          </Flex>
          <Flex direction={"column"} gap={rem(12)}>
            <Text
              size={rem(18)}
              fw={600}
              lh={rem(28)}
              styles={{
                root: {
                  color: "#2339FF",
                },
              }}
            >
              Resources
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Blog
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Newsletter
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Events
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Help centre
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Tutorials
            </Text>
            <Text
              size={rem(16)}
              fw={600}
              lh={rem(24)}
              styles={{
                root: {
                  color: "#344054",
                },
              }}
            >
              Support
            </Text>
          </Flex>
        </SimpleGrid>
        <Divider mt={rem(64)} mb="sm" />
        <Flex className={classes.FooterContent} align={"center"}>
          <Image src={"/assets/icons/logo.svg"} alt="" width={92} height={51} />
          <Text size={rem(16)} fw={400} styles={{ root: { color: "#667085" } }}>
            &copy; 2077 Untitled UI. All rights reserved.{" "}
          </Text>
        </Flex>
      </Container>
    </>
  );
};
