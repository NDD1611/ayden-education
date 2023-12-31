import {
    HoverCard,
    Group,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from '@tabler/icons-react';
import classes from './Header2.module.css';
import Image from 'next/image';

const mockdata = [
    {
        icon: IconCode,
        title: 'Open source',
        description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
        icon: IconCoin,
        title: 'Free for everyone',
        description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
        icon: IconBook,
        title: 'Documentation',
        description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
        icon: IconFingerprint,
        title: 'Security',
        description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
        icon: IconChartPie3,
        title: 'Analytics',
        description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
        icon: IconNotification,
        title: 'Notifications',
        description: 'Combusken battles with the intensely hot flames it spews',
    },
];

export function Header2() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box className={classes.containerHeader}>
            <header className={classes.header}>
                <Group
                    justify='space-between'
                    h="100%"
                    px={{ sm: rem(100), base: rem(20) }}
                >
                    <Box
                        pos={'relative'}
                        h={'100%'}
                    >
                        <Image width={80} height={80} className={classes.Logo} src={"/assets/icons/logolight.svg"} alt="logo" />
                    </Box>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <a href="https://ayden.company/" target='_blank' className={classes.link}>
                            TRANG CHỦ
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href="#" className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            KHÓA HỌC
                                        </Box>
                                        <IconChevronDown
                                            style={{ width: rem(16), height: rem(16) }}
                                            color={theme.colors.blue[6]}
                                        />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                <Group justify="space-between" px="md">
                                    <Text fw={500}>KHÓA HỌC</Text>
                                    {/* <Anchor href="#" fz="xs">
                                        View all
                                    </Anchor> */}
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>
                        <a href="#" className={classes.link}>
                            CAM KẾT ĐẦU RA
                        </a>
                        <a href="#" className={classes.link}>
                            VỀ AYDEN
                        </a>
                    </Group>

                    {/* <Group visibleFrom="md">
                        <Button
                            classNames={styles}
                        >
                            Liên hệ đăng kí
                        </Button>
                        <Button
                            classNames={styles}
                        >Đăng nhập</Button>
                    </Group> */}

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="lg"
                title="Menu"
                hiddenFrom="md"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />

                    <a href="https://ayden.company/" target='_blank' className={classes.link}>
                        TRANG CHỦ
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                KHÓA HỌC
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        CAM KẾT ĐẦU RA
                    </a>
                    <a href="#" className={classes.link}>
                        VỀ AYDEN
                    </a>

                    <Divider my="sm" />

                    {/* <Group justify="center" grow pb="xl" px="md">
                        <Button
                            classNames={styles}
                        >Liên hệ đăng kí</Button>
                        <Button
                            classNames={styles}
                        >Đăng nhập</Button>
                    </Group> */}
                </ScrollArea>
            </Drawer>
        </Box >
    );
}