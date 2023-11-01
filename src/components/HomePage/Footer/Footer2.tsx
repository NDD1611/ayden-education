import { Container, Flex, Text, rem } from "@mantine/core";
import Image from "next/image";
import classes from "./Footer2.module.scss";
import Link from 'next/link'
export const Footer2: React.FC = () => {
    return (
        <Container className={classes.footer} size={"xxl"} py={rem(80)}>
            <Flex
                align={"center"}
                justify={'center'}
            >
                <Image src='/logo.svg' alt="logo ayden" width={200} height={50} />
            </Flex>
            <Flex
                align={"center"}
                justify={'center'}
                my={10}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: '200'
                    }}
                >Sáng tạo đến thành công</Text>
            </Flex>
            <Flex
                align={"center"}
                justify={'center'}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: '200'
                    }}
                >Đường số 10, KDC Tràng An, TP Bạc Liêu</Text>
            </Flex>

            <Flex
                className={classes.containerLink}
                align={"center"}
                justify={'center'}
                gap='md'
                my={20}
            >
                <Link href='https://ayden.company/'
                    className={classes.footerLink}
                >
                    Trang Chủ
                </Link>
                <Link href='https://ayden.company/services/web-development'
                    className={classes.footerLink}
                >
                    Dịch Vụ
                </Link>
                <Link href='https://ayden.company/blog/'
                    className={classes.footerLink}
                >
                    Blog
                </Link>
                <Link href='https://ayden.company/contact/'
                    className={classes.footerLink}
                >
                    Liên Hệ
                </Link>
                <Link href='https://ayden.company/contact-qoute/'
                    className={classes.footerLink}
                >
                    Báo Giá
                </Link>
                <Link href='https://ayden.company/privacy/'
                    className={classes.footerLink}
                >
                    Chính Sách Riêng Tư
                </Link>
                <Link href='https://ayden.company/terms-of-use/'
                    className={classes.footerLink}
                >
                    Điều Khoản Dịch Vụ
                </Link>
            </Flex>
        </Container >
    );
};
