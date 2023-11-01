import {
    rem,
    Box,
    Text,
    Container,
    Button
} from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import classes from "./WhyChoose2.module.scss";
import Image from "next/image";
import { IconChevronsLeft, IconChevronsRight, IconBell, IconDeviceDesktopAnalytics, IconFileDescription, IconHeartHandshake, IconMessages, IconUser } from '@tabler/icons-react';
import React, { useEffect, useState, useRef, useCallback } from "react";
export const WhyChoose2: React.FC = () => {
    const [widthMainItem, setWidthMainItem] = useState<number>(300)
    const [heightMainItem, setHeightMainItem] = useState<number>(150) // height = width / 2

    const [widthItem, setWidthItem] = useState<number>(240) // 80% of widthMainItem
    const [heightItem, setHeightItem] = useState<number>(120) // height = width / 2

    const [widthIcon, setWidthIcon] = useState<number>(30)

    const [slideCurrentId, setSlideCurrentId] = useState<string>('item0')
    const [space, setSpace] = useState<number>(20)
    const nextRef = useRef<HTMLDivElement>(null);
    const prevRef = useRef<HTMLDivElement>(null);

    const setPositionForItem = () => {
        let mainContainer = document.getElementById('mainContainer') as HTMLDivElement | null;
        let mainItem = document.getElementById('mainItem') as HTMLDivElement | null;
        let item0 = document.getElementById('item0') as HTMLDivElement | null;
        let item1 = document.getElementById('item1') as HTMLDivElement | null;
        let item2 = document.getElementById('item2') as HTMLDivElement | null;
        let item3 = document.getElementById('item3') as HTMLDivElement | null;
        let item4 = document.getElementById('item4') as HTMLDivElement | null;
        let item5 = document.getElementById('item5') as HTMLDivElement | null;
        let hypotenuseLength = (heightMainItem / 2) + space + (heightItem / 2)
        if (mainContainer != null) {
            let pointCenterX: number | undefined = mainContainer?.clientWidth / 2
            let pointCenterY: number | undefined = mainContainer?.clientHeight / 2
            if (mainItem != null) {
                mainItem.style.width = `${widthMainItem}px`
                mainItem.style.height = `${heightMainItem}px`
                mainItem.style.top = `${(mainContainer.clientHeight / 2) - (heightMainItem / 2)}px`
                mainItem.style.left = `${(mainContainer.clientWidth / 2) - (widthMainItem / 2)}px`
            }
            if (item0 != null) {
                let edgeX = hypotenuseLength * Math.cos(30)
                let edgeY = hypotenuseLength * Math.sin(30)
                if (edgeX < 0) edgeX = -edgeX
                if (edgeY < 0) edgeY = -edgeY
                item0.style.width = `${widthItem}px`
                item0.style.height = `${heightItem}px`
                item0.style.top = `${(pointCenterY - edgeY) + (space / 2)}px`
                item0.style.left = `${pointCenterX + edgeX}px`
            }
            if (item1 != null) {
                let edgeX = hypotenuseLength * Math.cos(30)
                let edgeY = hypotenuseLength * Math.sin(330)
                if (edgeX < 0) edgeX = -edgeX
                if (edgeY < 0) edgeY = -edgeY
                item1.style.width = `${widthItem}px`
                item1.style.height = `${heightItem}px`
                item1.style.top = `${(pointCenterY + edgeY)}px`
                item1.style.left = `${pointCenterX + edgeX}px`
            }
            if (item2 != null) {
                item2.style.width = `${widthItem}px`
                item2.style.height = `${heightItem}px`
                item2.style.top = `${(pointCenterY + (heightMainItem / 2) + space * 1.5)}px`
                item2.style.left = `${pointCenterX - (widthItem / 2)}px`
            }
            if (item3 != null) {
                let edgeX = hypotenuseLength * Math.cos(30)
                let edgeY = hypotenuseLength * Math.sin(30)
                if (edgeX < 0) edgeX = -edgeX
                if (edgeY < 0) edgeY = -edgeY
                item3.style.width = `${widthItem}px`
                item3.style.height = `${heightItem}px`
                item3.style.top = `${(pointCenterY + edgeY) - heightItem - space / 2}px`
                item3.style.left = `${pointCenterX - edgeX - widthItem}px`
            }
            if (item4 != null) {
                let edgeX = hypotenuseLength * Math.cos(30)
                let edgeY = hypotenuseLength * Math.sin(30)
                if (edgeX < 0) edgeX = -edgeX
                if (edgeY < 0) edgeY = -edgeY
                item4.style.width = `${widthItem}px`
                item4.style.height = `${heightItem}px`
                item4.style.top = `${(pointCenterY - edgeY) + (space / 2)}px`
                item4.style.left = `${pointCenterX - edgeX - widthItem}px`
            }
            if (item5 != null) {
                item5.style.width = `${widthItem}px`
                item5.style.height = `${heightItem}px`
                item5.style.top = `${pointCenterY - heightMainItem / 2 - space * 1.5 - heightItem}px`
                item5.style.left = `${pointCenterX - (widthItem / 2)}px`
            }
        }
    }

    const caculatorSizeItem = () => {
        let mainContainer = document.getElementById('mainContainer') as HTMLDivElement | null;
        if (mainContainer != null && window.innerWidth < 750) {
            console.log(mainContainer.clientWidth)
            setWidthMainItem(220)
            setHeightMainItem(110)
            setWidthItem(176)
            setHeightItem(88)
            setWidthIcon(20)
        } else {
            setWidthMainItem(300)
            setHeightMainItem(150)
            setWidthItem(240)
            setHeightItem(120)
            setWidthIcon(30)
        }
    }
    useEffect(() => {
        setPositionForItem()
        caculatorSizeItem()
        window.addEventListener('resize', setPositionForItem)
        window.addEventListener('resize', caculatorSizeItem)
        return () => {
            window.removeEventListener('resize', setPositionForItem)
            window.removeEventListener('resize', caculatorSizeItem)
        }
    }, [])
    useEffect(() => {
        setPositionForItem()
    })
    const handleNextSlide = useCallback(() => {
        if (nextRef.current) {
            nextRef.current.click();
        }
    }, [nextRef]);
    const handlePreSlide = useCallback(() => {
        if (prevRef.current) {
            prevRef.current.click();
        }
    }, [prevRef]);
    const handleSlideChange = (index: number) => {
        // console.log(index)
        setSlideCurrentId('item' + index)
    }
    return <Container
        size={'xxl'}
        style={{
            backgroundColor: '#f4f4f4',
            overflow: 'hidden'
        }}
    >
        <Container
            size={'xl'}
            className={classes.whyChoosesContainer}
            id="WhyChoose2"
        >
            <Text
                size={rem(48)}
                className={classes.title}
            >
                Lý do nên lựa chọn chúng tôi
            </Text>
            <Box
                component="div"
                className={classes.contentContainer}
            >
                <Box
                    component="div"
                    className={classes.left}
                >
                    <div className={classes.background}>
                        <Image
                            src={'/assets/whyChooses/bg_hive2.png'}
                            alt="bg"
                            width={widthMainItem * 2}
                            height={widthMainItem * 2}
                        />
                    </div>
                    <div id="mainContainer" className={classes.mainContainer}>
                        <div id="mainItem" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={classes.mainItem2}>
                                    <Image
                                        className={classes.imageMainItem}
                                        src={'/assets/whyChooses/IMG_1001.jpg'}
                                        alt="jds"
                                        width={widthMainItem}
                                        height={heightMainItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mainContainer" className={classes.mainContainer}>
                        <div id="item0" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item0' && classes.active}`}>
                                    <div className={classes.itemContent} >
                                        <IconDeviceDesktopAnalytics width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Hệ thống <br /> E-Learning
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item1" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item1' && classes.active}`}>
                                    <div className={classes.itemContent} >
                                        <IconUser width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Hỗ trợ<br /> học tập
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item2" className={classes.mainItem} >
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item2' && classes.active}`}>
                                    <div className={classes.itemContent}>
                                        <IconFileDescription width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Dự án<br /> thực tế
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item3" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item3' && classes.active}`}>
                                    <div className={classes.itemContent}>
                                        <IconMessages width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Thảo luận<br /> ngoài giờ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item4" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item4' && classes.active}`}>
                                    <div className={classes.itemContent}>
                                        <IconHeartHandshake width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Kết nối<br /> việc làm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="item5" className={classes.mainItem}>
                            <div className={classes.mainItem1}>
                                <div className={`${classes.mainItem2} ${slideCurrentId == 'item5' && classes.active}`}>
                                    <div className={classes.itemContent}>
                                        <IconBell width={widthIcon} height={widthIcon} />
                                        <div className={classes.textHexagon}>
                                            Theo dõi<br /> học tập
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>

                <Box
                    component="div"
                    className={classes.right}
                    pt={50}
                >
                    <Carousel
                        w={'80%'}
                        // height={180}
                        pt={40}
                        pb={10}
                        nextControlIcon={<Box ref={nextRef}>next</Box>}
                        previousControlIcon={<Box ref={prevRef}>Prev</Box>}
                        classNames={classes}
                        slidesToScroll={1}
                        onSlideChange={handleSlideChange}
                        // withIndicators
                        loop

                    >
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Hệ thống học tập </Text>
                            <Box component="p" className={classes.slideDescription}>Ayden sử dụng hệ thống video trực tuyến và hệ thống LMS ( Learning Management System) hiện đại để hỗ trợ học tập cho các khóa học.
                            </Box>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Giảng viên - Mentor hỗ trợ</Text>
                            <Box component="p" className={classes.slideDescription}>
                                Trong suốt khóa học, học viên được hỗ trợ nhiệt tình từ các giảng viên và các mentor. Giảng viên chia sẻ tất cả các kinh nghiệm có được từ các dự án giảng viên đang làm.
                                Mentor tích cực đôn đốc việc code, hỗ trợ sửa lỗi code và góp ý code đúng chuẩn.
                            </Box>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Dự án - bài tập thực tế</Text>
                            <Box component="p" className={classes.slideDescription}>
                                Hệ thống bài tập - dự án thực tế được áp dụng vào từng buổi học. Ngay sau buổi học, học viên đã có thể code các phần của dự án, bài luyện tập chuyên sâu.
                            </Box>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Nhóm thảo luận - tương tác</Text>
                            <Box component="p" className={classes.slideDescription}>
                                Ngoài giờ học tại lớp, học viên còn được hỗ trợ tích cực từ Giảng viên, Mentor và các bạn cùng lớp trên kênh thảo luận và kênh chat cực kì sôi nổi. Bạn luôn có được động lực học tập cao nhất từ các nhóm thảo luận này.
                            </Box>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Hệ thống hỗ trợ việc làm</Text>
                            <Box component="p" className={classes.slideDescription}>
                                Ngay từ khi bắt đầu học, học viên sẽ được hỗ trợ kết nối với hệ thống việc làm. Hệ thống sẽ hỗ trợ đánh giá kỹ năng, tạo CV tự động, truy cập trọn đời. Khi kết thúc khoá học sẽ được hướng dẫn kỹ năng phỏng vấn và kết nối với các doanh nghiệp
                            </Box>
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Text
                                className={classes.slideTitle}
                            >Hệ thống theo dõi học tập thông minh</Text>
                            <Box component="p" className={classes.slideDescription}>
                                Hệ thống ứng dụng công nghệ AI, giúp tự động nhắc nhở các hạn nộp bài tập, xem lại code và video bài học. Ngoài ra, mỗi lớp sẽ có một chủ nhiệm thường xuyên theo sát tiến độ học tập giúp học viên dễ dàng xây dựng thói quen học lập trình.
                            </Box>
                        </Carousel.Slide>
                    </Carousel>

                    <Box component="div">
                        <Button
                            className={classes.controlButton}
                            onClick={handlePreSlide}
                        >
                            <IconChevronsLeft />
                        </Button>
                        <Button
                            className={classes.controlButton}
                            onClick={handleNextSlide}
                        >
                            <IconChevronsRight />
                        </Button>
                    </Box>
                </Box>
            </Box>

        </Container>
    </Container>
};
