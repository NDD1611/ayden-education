
import { Box, Button, Container } from '@mantine/core';
import classes from './MenuScroll.module.scss'
import { IconMenu2, IconX } from '@tabler/icons-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
type link = {
    id: string,
    text: string
}

export const MenuScroll = () => {
    const [scroll] = useWindowScroll();
    const [opened, { toggle }] = useDisclosure(true);
    const showListMenu = () => {
        let menuList = document.getElementById('menuList')
        if (menuList) {
            menuList.style.height = menuList.scrollHeight + 'px'
        }
    }
    const hideListMenu = () => {
        let menuList = document.getElementById('menuList')
        if (menuList) {
            menuList.style.height = 0 + 'px'
        }
    }
    useEffect(() => {
        if (opened) {
            showListMenu()
        } else {
            hideListMenu()
        }
    }, [opened])

    let dataLinks: link[] = useMemo(() => {
        return [
            {
                id: 'aboutAyden',
                text: 'Giới thiệu về Ayden'
            },
            {
                id: 'WhyChoose',
                text: 'Lý do chọn Ayden'
            },
            {
                id: 'objectAndAdvantage',
                text: 'Đối tượng và ưu thế'
            },
            {
                id: 'valueReceive',
                text: 'Giá trị'
            },
            {
                id: 'course',
                text: 'Lộ trình tổng quan'
            },
            {
                id: 'details',
                text: 'Đề cương chi tiết'
            },
            {
                id: 'feelOfStudent',
                text: 'Cảm nhận học viên'
            },
            {
                id: 'useTech',
                text: 'Công nghệ sử dụng'
            },
            {
                id: 'register',
                text: 'Ghi danh'
            },
        ]
    }, [])
    let [sectionId, setSectionId] = useState<string>('')
    useEffect(() => {
        let sections = dataLinks.map((link) => {
            return document.getElementById(link.id)
        })
        let scrollY = window.pageYOffset;
        if (sections) {
            sections.forEach((current) => {
                if (current) {
                    const sectionHeight = current.offsetHeight;
                    const sectionTop = current!.offsetTop - 50;
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        let sectionId = current.getAttribute("id");
                        if (sectionId) {
                            setSectionId(sectionId)
                        }
                    }
                }
            });
        }
    }, [scroll])

    let links = dataLinks.map((link) => {
        return <a key={link.id} href={'#' + link.id}>
            <div className={`${classes.item} ${sectionId == link.id && classes.backgroundSection}`}>
                <div className={classes.textItem}>{link.text}</div>
                <div className={classes.backgroundItem}></div>
            </div>
        </a>
    })

    return (
        <Container className={classes.menuScroll}>
            <div className={classes.containerBtn}>
                <Button
                    className={classes.menuBtn}
                    size={'sm'}
                    visibleFrom='sm'
                    onClick={toggle}
                    aria-label="Toggle navigation"
                >
                    {!opened && <IconMenu2 />}
                    {opened && <IconX />}
                </Button>
                <Box
                    component='div'
                    style={{
                        border: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '50%',
                        backgroundColor: '#ccc'
                    }}
                    hiddenFrom='sm'
                    w={50}
                    h={50}
                >
                    <Button
                        className={classes.menuBtnCircle}
                        size={'sm'}
                        hiddenFrom='sm'
                        onClick={toggle}
                        aria-label="Toggle navigation"
                        w={40}
                        h={40}
                    >
                    </Button>
                </Box>
            </div>
            <div id='menuList' className={classes.menuList}>
                {links}
            </div>
        </Container>
    );
}