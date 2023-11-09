
import { Box, Button, Container, Image } from '@mantine/core';
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
        let menuIconJS: HTMLDivElement | HTMLElement | null = document.getElementById('menuIconJS')
        if (menuIconJS != null) {
            if (opened) {
                menuIconJS.style.transform = 'rotate(0deg)'
                menuIconJS.style.opacity = '1'
            } else {
                menuIconJS.style.transform = 'rotate(180deg)'
                menuIconJS.style.opacity = '0'
            }
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

                <Box component='div'
                    style={{
                        // border: '1px solid blue',
                        position: 'fixed',
                        right: 0,
                        top: '170px',
                    }}
                    w={50}
                    h={50}
                    hiddenFrom='sm'
                >
                    <Box component='div'
                        style={{
                            position: 'absolute',
                            // border: '1px solid #ccc',
                            borderRadius: '50%',
                            backgroundColor: '#ccc',
                            zIndex: -1,
                            top: 0,
                            right: 0,
                        }}
                        hiddenFrom='sm'
                        w={50}
                        h={50}>
                    </Box>
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
                    <Box component='div'
                        hiddenFrom='sm'
                        className={classes.menuIcon}
                        id='menuIconJS'
                    >
                        {/* top */}
                        <a href='#aboutAyden'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 'calc(50% - 15px)',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/002-who.svg'} />
                            </Box>
                        </a>
                        {/* top-left 1 */}
                        <a href='#WhyChoose'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '7px',
                                    left: '52px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/005-project.svg'} />
                            </Box>
                        </a>
                        {/* top-left 2*/}
                        <a href='#objectAndAdvantage'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '25px',
                                    left: '24px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/006-benefit.svg'} />
                            </Box>
                        </a>
                        {/* top-left 3*/}
                        <a href='#valueReceive'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '53px',
                                    left: '7px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/007-teacher.svg'} />
                            </Box>
                        </a>
                        {/* left */}
                        <a href='#course'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: 'calc(50% - 15px)',
                                    left: 0,
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/008-certificate.svg'} />
                            </Box>
                        </a>

                        {/* left-bottom 1 */}
                        <a href='#details'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '115px',
                                    left: '5px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/009-images.svg'} />
                            </Box>
                        </a>
                        {/* left-bottom 2 */}
                        <a href='#feelOfStudent'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '142px',
                                    left: '25px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={' https://cybersoft.edu.vn/wp-content/svgimages/icon/010-comment.svg'} />
                            </Box>
                        </a>
                        {/* left-bottom 3 */}
                        <a href='#useTech'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    top: '162px',
                                    left: '52px',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/011-enroll.svg'} />
                            </Box>
                        </a>
                        {/* bottom */}
                        <a href='#register'>
                            <Box
                                className={classes.bgMain}
                                component='div'
                                w={30}
                                h={30}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 'calc(50% - 15px)',
                                    // border: '1px solid green',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%'
                                }}
                            >
                                <Image alt="icon" w={'60%'} src={'https://cybersoft.edu.vn/wp-content/svgimages/icon/001-info.svg'} />
                            </Box>
                        </a>
                    </Box>
                </Box>
            </div>
            <Box component='div' visibleFrom='sm' id='menuList' className={classes.menuList}>
                {links}
            </Box>
        </Container>
    );
}