
import { Carousel } from '@mantine/carousel'
import { Container, Text, Box, rem, Flex } from '@mantine/core'
import classes from './Schedule2.module.scss'
import { IconArrowBadgeRightFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { IconCaretLeft, IconCaretRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
type phase = {
    title: string,
    image: string,
    descriptions: string[]
}
let imgSize: number = 130
export const Schedule2 = () => {

    const [numSlideScroll, setSlideScroll] = useState<number>(5)

    useEffect(() => {
        const windowResize = () => {
            if (window.innerHeight < 760) {
                setSlideScroll(2)
            } else {
                setSlideScroll(5)
            }
        }
        windowResize()
        window.addEventListener('resize', windowResize)
        return () => {
            window.removeEventListener('resize', windowResize)
        }
    }, [])

    let data: phase[] = [
        {
            title: 'HTML-CSS',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/html-css.jpg',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping',
            ]
        }, {
            title: 'HTML5-CSS3',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/HTML5-CSS3.jpg',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Dự án web coffee',
                'Dự án web Camping',
                'Công cụ lập trình'
            ]
        }, {
            title: 'BOOTSTRAP',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/bs.jpg',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'CAPSTONE BOOTSTRAP',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/capstoneBS.png',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'GIT',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/git.jpg',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'JS',
            image: 'https://apicrm.cybersoft.edu.vn/images/JS.png',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'SASS',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/SASS.png',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'API',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/07/decuong21.png',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'CAPSTONE JS',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/08/capstoneJS.jpg',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        }, {
            title: 'ES6',
            image: 'https://cybersoft.edu.vn/wp-content/uploads/2022/07/decuong13.png',
            descriptions: [
                'UI-UX',
                'HTML, CSS',
                'Phân tích bố cục',
                'Công cụ lập trình',
                'Phương pháp học',
                'Dự án web coffee',
                'Dự án web Camping'
            ]
        },
    ]


    let roadMaps = data.map((phase, index) => {
        if (index % 2 === 0) {
            return <Carousel.Slide key={index} className={classes.slide0}>
                <Container className={classes.roadmapTop}>
                    <Flex
                        justify={'center'}
                    >
                        <Image
                            src={phase.image}
                            alt='image'
                            width={imgSize}
                            height={imgSize}
                            className={classes.image}
                        ></Image>
                    </Flex>
                    <div className={classes.lineVertical}>
                        <div className={classes.line}>
                        </div>
                    </div>
                </Container>
                <Text
                    className={classes.title}
                    py={rem(5)}
                    mb={20}
                    style={{
                        textAlign: 'center',
                        clipPath: 'polygon(90% 0px,100% 50%,90% 100%,0% 100%,10% 50%,0% 0%)',
                        color: '#fff'
                    }}
                >
                    {phase.title}
                </Text>

                <Box >
                    {phase.descriptions.map((item, index) => {
                        return <Text
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            className={classes.textItem}
                        >
                            <IconArrowBadgeRightFilled
                                style={{
                                    height: '20px'
                                }}
                            />
                            {item}
                        </Text>
                    })}
                </Box>
            </Carousel.Slide>
        }

        return <Carousel.Slide key={index} className={classes.slide1}>
            <Box className={classes.roadmapTop}>
                {phase.descriptions.map((item, index) => {
                    return <Text
                        key={index}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        className={classes.textItem}
                    >
                        <IconArrowBadgeRightFilled
                            style={{
                                height: '20px'
                            }}
                        />
                        {item}
                    </Text>
                })}
            </Box>

            <Text
                className={classes.title}
                py={rem(5)}
                style={{
                    textAlign: 'center',
                    clipPath: 'polygon(90% 0px,100% 50%,90% 100%,0% 100%,10% 50%,0% 0%)',
                    color: '#fff'
                }}
            >
                {phase.title}
            </Text>
            <div className={classes.lineVertical}>
                <div className={classes.line}>
                </div>
            </div>
            <Flex
                justify={'center'}
            >
                <Image
                    src={phase.image}
                    alt='image'
                    width={imgSize}
                    height={imgSize}
                    className={classes.image}
                ></Image>
            </Flex>
        </Carousel.Slide>
    })

    return (
        <Container
            size={"xl"}
            className={classes.scheduleContainer}
            id="course"
        >
            <Text className={classes.scheduleTitle}>LỘ TRÌNH TỔNG QUAN</Text>
            <Carousel
                withIndicators
                classNames={classes}
                // height={600}
                pb={40}
                slideSize={{ base: '50%', sm: '20%' }}
                slideGap="md"
                // loop
                align="start"
                slidesToScroll={numSlideScroll}
            >
                {roadMaps}

            </Carousel>
            {/* <Box className={classes.myControls}>
                <Box >
                    <IconCaretLeft className={classes.controlLeft} />
                </Box>
                <Box>
                    <IconCaretRight />
                </Box>
            </Box> */}
        </Container>
    )
}