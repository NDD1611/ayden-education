
import { Container, Accordion, rem, Text, Flex, List, ThemeIcon, Box, Button } from '@mantine/core'
import { IconCircleCheck, IconChevronsDown, IconChevronsUp } from '@tabler/icons-react';
import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useLingui } from "@lingui/react";
import classes from './Summary2.module.scss'
import Image from 'next/image';
type phase = {
    src: string,
    value: string,
    name: string,
    title: string,
    description: string,
    details: string[]
}


let showSpoiler = false
export const Summary2: React.FC = () => {
    const { i18n } = useLingui();
    let datas: phase[] = useMemo(
        () => [
            {
                src: '/assets/summary/decuong1.png',
                value: 'phase1',
                name: 'phase 1',
                title: 'TUYỆT CHIÊU UI-UX & BÍ QUYẾT TẠO GIAO DIỆN LÔI KÉO NGƯỜI DÙNG',
                description: 'Tìm hiểu đối tượng người dùng, nguyên tắc sắp xếp, đơn giản hóa, màu sắc và Typography, điều hướng, nhất quán, tương tác, thiết kế đáp ứng, tối ưu hóa tốc độ',
                details: [
                    'UI, UX cho nghề lập trình Front-End',
                    'Tốc độ web, công cụ hỗ trợ, bí quyết gỡ rối chương trình',
                    'Màu sắc cho website',
                    'Làm sao để tạo web ấn tượng cho người dùng',
                    'Tính tiện dụng, tính hiệu quả của website, ứng dụng',
                    'Bí quyết UX để giữ người dùng cho web, ứng dụng'
                ]
            }, {
                src: '/assets/summary/decuong2.png',
                value: 'phase2',
                name: 'phase 2',
                title: 'LẬP KẾ HOẠCH, PHÁT HỌA NHU CẦU WEBSITE',
                description: 'Nghiên cứu và Định rõ Mục tiêu, Xác định Yêu cầu Cụ thể, Thiết kế Giao diện, Phát triển và Kiểm tra, Theo dõi và Cải thiện',
                details: [
                    'Xác định mục tiêu của sản phẩm',
                    'Lên ý tưởng cho website',
                    'Chọn template cho website',
                    'Liệt kê các tính năng cần thiết'
                ]
            }, {
                src: '/assets/summary/decuong3.png',
                value: 'phase3',
                name: 'phase 3',
                title: 'LÊN Ý TƯỞNG & DỰNG WIREFRAME',
                description: 'Nghiên cứu và Hiểu Rõ Mục tiêu, Thu thập Ý tưởng, Vẽ Sơ đồ tay (Sketch), Sử dụng Công cụ Wireframing, Xác định Cấu trúc Cơ bản, Thêm Các Yếu Tố Giao diện',
                details: [
                    'Xác định mục tiêu',
                    'Tạo danh sách chức năng',
                    'Vẽ bố cục tổng quan',
                    'Xác định cấu trúc trang',
                    'Sắp xếp yếu tố giao diện',
                    'Hoàn thiện wireframe'
                ]
            }, {
                src: '/assets/summary/decuong4.png',
                value: 'phase4',
                name: 'phase 4',
                title: 'CÔNG CỤ LẬP TRÌNH / TEAMWORK',
                description: 'Các mẹo hay giúp code nhanh, Các công cụ lập trình khi làm việc, Git, Github, Gitlab, Postman , Visual Studio Code',
                details: [
                    'Các mẹo hay giúp code nhanh',
                    'Quản lý Dự án',
                    'Hệ thống Phiên bản (Version Control)',
                    'Quản lý mã nguồn (Code Management)',
                    'Tạo mã cùng nhau (Collaborative Coding)',
                    'Quản lý Tài liệu và Tri thức (Documentation)',
                    'Quản lý Nhiệm vụ và Thời gian (Task and Time Management)',
                    'Quản lý Test và Continuous Integration (CI)'
                ]
            }, {
                src: '/assets/summary/decuong5.png',
                value: 'phase5',
                name: 'phase 5',
                title: 'NỀN TẢNG CỐT LÕI CỦA LẬP TRÌNH FRONT-END',
                description: 'Responsive Design (Thiết kế đáp ứng), Framework và Thư viện, Web APIs (Application Programming Interfaces) ...',
                details: [
                    'HTML (HyperText Markup Language)',
                    'CSS (Cascading Style Sheets)',
                    'JavaScript',
                    'DOM (Document Object Model)',
                    'Package Managers : yarn , mpm, pnpm',
                    'Build Tools : webpack, gulp',
                    'Tối ưu hóa hiệu suất trang web, bao gồm tải nhanh, tối ưu hóa hình ảnh và kích thước tệp.',
                    'Cross-Browser Compatibility: Hiểu cách xây dựng giao diện sao cho hoạt động trên nhiều trình duyệt khác nhau.'
                ]
            }, {
                src: '/assets/summary/decuong6.png',
                value: 'phase6',
                name: 'phase 6',
                title: 'RESPONSIVE & BOOTSTRAP & HTML5 & CSS3 & ANIMATION',
                description: 'HTML, CSS, Boostrap, Jquery, Project: Xây dựng sản phẩm giao diện trang chủ hoàn thiện',
                details: [
                    'Responsive website, website tương thích cho tất cả thiết bị',
                    'Bootstrap & thực hành chia layout',
                    'Các thẻ HTML5 & CSS3 chính yếu',
                    'HTML5 Validation',
                    'Media Query',
                    'Animation'
                ]
            }, {
                src: '/assets/summary/decuong7.png',
                value: 'phase7',
                name: 'phase 7',
                title: 'CSS CHUYÊN SÂU, XỬ LÝ ĐẶC BIỆT – PREPROCESSER',
                description: '',
                details: [
                    'Preprocessor CSS / SASS (LESS)',
                    'BEM CSS Methodnology',
                    'Xây dựng dự án thực tế sử dụng SASS/BEM',
                    'PostCSS , Tailwind CSS ..',
                ]
            }, {
                src: '/assets/summary/ts.jpg',
                value: 'phase8',
                name: 'phase 8',
                title: 'DOM và JAVASCRIPT NỀN TẢNG CẦN PHẢI BIẾT',
                description: 'getElementById(), querySelector(), innerHTML, addEventListener() ...',
                details: [
                    'DOM là gì?',
                    'Cấu trúc của DOM',
                    'Tương tác với DOM',
                    'JavaScript là gì?',
                    'Tương tác với DOM bằng JavaScript',
                    'Xử lý Sự kiện (Event Handling)',
                    'AJAX (Asynchronous JavaScript and XML)',
                    'Thư viện và Frameworks'
                ]
            },
            {
                src: '/assets/summary/decuong9.png',
                value: 'phase9',
                name: 'phase 9',
                title: 'TƯ DUY LẬP TRÌNH',
                description: 'Rèn luyện tư duy lập trình trên Javascript, Phân tích bài toán thực tế và áp dụng trên Javascript, Tách vấn đề',
                details: [
                    'Tư duy logic',
                    'Sáng tạo và sẵn sàng học hỏi',
                    'Kiên nhẫn',
                    'Tư duy trừu tượng',
                    'Khả năng tìm kiếm thông tin',
                    'Phân tích và quản lý dự án',
                    'Khả năng làm việc nhóm',
                    'Kiểm tra và gỡ lỗi'
                ]
            },
            {
                src: '/assets/summary/decuong10.png',
                value: 'phase10',
                name: 'phase 10',
                title: 'XỬ LÝ LẬP TRÌNH NỀN TẢNG MẢNG, CHUỖI CĂN BẢN NÂNG CAO',
                description: 'Khởi tạo Mảng, Truy cập Phần tử Mảng, Duyệt Mảng, Thêm và Xóa Phần tử, Sắp xếp Mảng, Lọc và Biến đổi',
                details: [
                    'Lập trình xử lý Mảng, Chuỗi',
                    'Hàm, lệnh điều kiện, vòng lặp',
                    'Mảng 1 chiều Mảng 2 chiều',
                ]
            },
            {
                src: '/assets/summary/decuong11.png',
                value: 'phase11',
                name: 'phase 11',
                title: 'THUẬT TOÁN NỀN TẢNG TRONG LẬP TRÌNH',
                description: 'Thuật toán nền tảng qua các dự án, Tổng, Tích lũy, Đếm, Lính canh, Cờ hiệu, Các thuật toán tìm kiếm, sắp xếp',
                details: [
                    'Thuật toán Sắp xếp',
                    'Thuật toán Tìm kiếm',
                    'Thuật toán Đệ quy',
                    'Thuật toán Lập lịch (Scheduling Algorithms)',
                    'Thuật toán nền tảng qua các dự án',
                    'Tổng, Tích lũy, Đếm, Lính canh, Cờ hiệu',
                    'Thuật toán Tìm số nguyên tố',
                    'Thuật toán Kiểm tra chuỗi (String Matching)',
                ]
            },
            {
                src: '/assets/summary/nextjs.png',
                value: 'phase12',
                name: 'phase 12',
                title: 'LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG NỀN TẢNG CHUYÊN SÂU',
                description: 'Xây dựng tổ chức lưu trữ dữ liệu theo đối tượng, Giao tiếp với Backend End thông qua API, Xử lý dữ liệu JSON trả về từ Backend API, Sơ đồ lớp, Phân tích thực tế',
                details: [
                    'Lớp và Đối tượng (Class and Object)',
                    'Kế thừa (Inheritance)',
                    'Đóng gói (Encapsulation)',
                    'Đa hình (Polymorphism)',
                    'Giao diện (Interfaces)',
                    'Lớp trừu tượng (Abstract Classes)',
                    'Tính kế thừa đa cấp (Multilevel Inheritance)',
                    'Tính đóng gói và che dấu thông tin (Encapsulation and Information Hiding)',
                    'Ví dụ thực tế với TypeScript',
                ]
            },
            {
                src: '/assets/summary/decuong13.png',
                value: 'phase13',
                name: 'phase 13',
                title: 'ES6 NỀN TẢNG CHUYÊN SÂU',
                description: 'ES6 nền tảng chuyên sâu qua các ví dụ trên dự án thực tế lấy từ Công Ty , để bạn nắm rõ hơn về các ví dụ',
                details: [
                    'Let và Const',
                    'Arrow Functions',
                    'Template Literals',
                    'Default Parameters',
                    'Destructuring Assignment',
                    'Spread và Rest Operators',
                    'Classes và Modules',
                    'Promises',
                    'Async/Await',
                    'Map và Set',
                    'Symbol',
                    'Iterator và Generator',
                    'Array Methods',
                    'Thực hiện Dự án thực tế với ES6 & JSON, Axios, Fetch API, Async/Await ...',
                ]
            },
            {
                src: '/assets/summary/decuong14.png',
                value: 'phase14',
                name: 'phase 14',
                title: 'NODE.JS CƠ SỞ',
                description: 'Runtime Environment, Hệ thống mô-đun (Module System), Asynchronous I/O',
                details: [
                    'Giới thiệu Node.js',
                    'Cài đặt gói sử dụng npm và khởi tạo dự án với npm',
                    'npm vs npx',
                    'Module',
                    'Error Handling',
                    'Asynchronus Program',
                    'Làm việc với API : jsonwebtoken , passport.js',
                ]
            },
            {
                src: '/assets/summary/decuong15.png',
                value: 'phase15',
                name: 'phase 15',
                title: 'FRAMEWORK JAVASCRIPT - REACTJS NỀN TẢNG',
                description: 'Thuật toán nền tảng qua các dự án, Tổng, Tích lũy, Đếm, Lính canh, Cờ hiệu, Các thuật toán tìm kiếm, sắp xếp',
                details: [
                    'Tìm hiểu về ReactJS qua các ví dụ',
                    'Khởi tạo dự án với create-react-app',
                    'Thành tạo Component-Based Development',
                    'JSX (JavaScript XML)',
                    'State và Props',
                    'Lifecycle Methods',
                    'Routing',
                    'State Management',
                    'Class Component vs Functional Component',
                    'Component Styling',
                    'API Calls',
                    'Build and Deployment',
                    'Debugging',
                    'Best Practices',
                ]
            },
            {
                src: '/assets/summary/decuong16.png',
                value: 'phase16',
                name: 'phase 16',
                title: 'FRAMEWORK JAVASCRIPT - REACTJS CHUYÊN SÂU',
                description: 'Khái niệm về Component, Routing, Quản lý Trạng thái (State Management), Server-Side Rendering (SSR)...',
                details: [
                    'React Hooks vs React Hook Form',
                    'Server-Side Rendering (SSR)',
                    'Composition',
                    'React Router Advanced',
                    'Serverless và Microservices',
                    'State Management Libraries : Redux , MobX',
                    'React Testing: Jest, React Testing Library, và Enzyme, Vitest',
                    'Performance Optimization',
                    'Internationalization (i18n) và Localization (l10n)',
                    'Web Accessibility (a11y)',
                    'Code Splitting và Lazy Loading',
                    'GraphQL',
                    'Webpack và Babel Loader',
                ]
            },
            {
                src: '/assets/summary/decuong23.png',
                value: 'phase17',
                name: 'phase 17',
                title: 'ỨNG DỤNG TYPESCRIPT VỚI DỰ ÁN REACTJS',
                description: 'Khái niệm về Component, Routing, Quản lý Trạng thái (State Management), Server-Side Rendering (SSR)...',
                details: [
                    'Nắm vững Kiến Thức Cơ Bản',
                    'Học TypeScript trong Dự Án Thực Tế',
                    'Sử dụng TypeScript với React',
                    'TypeScript Compiler và Tùy chỉnh tsconfig.json',
                    'TypeScript Declaration Files: d.ts',
                    'Phát triển ứng dụng lớn và phức tạp từ công ty',
                    'Sử dụng Thư viện và Mô-đun Bên Ngoài',
                    'Thực Hành Liên Tục',
                ]
            },
            {
                src: '/assets/summary/decuong24.png',
                value: 'phase18',
                name: 'phase 18',
                title: 'TỐ CHẤT LẬP TRÌNH VIÊN',
                description: 'Phần này giúp cho học viên về kỹ năng mêm, và những thói quen thường thấy ở 1 lập trình viên',
                details: [
                    'Kiên nhẫn',
                    'Sáng tạo',
                    'Kiến thức kỹ thuật',
                    'Kỹ năng giao tiếp',
                    'Sự tự-discipline',
                    'Khả năng giải quyết vấn đề',
                    'Tinh thần học hỏi',
                ]
            },
            {
                src: '/assets/summary/decuong25.png',
                value: 'phase19',
                name: 'phase 19',
                title: 'THỰC HIỆN ĐỒ ÁN TỐT NGHIỆP',
                description: 'Tổng hợp lại kiến thức đã học và làm đồ án thực tế tương tác backend và qui trình phát triển phần mềm chuyên nghiệp',
                details: [
                    'Áp dụng tất cả kiến thức đã học',
                    'Xây dựng Full dự án có tương tác Backend',
                    'Phân tích yêu cầu',
                    'Xây dựng giao diện',
                    'Tổ chức ứng dụng',
                    'Tổ chức sơ đồ lớp',
                    'Qui trình thực hiện',
                    'Performance Optimization',
                    'Áp dụng SASS, Bootstrap, Webpack, PostCSS',
                    'Vấn đáp đồ án',
                    'CẤP CHỨNG NHẬN KHÓA HỌC',
                ]
            },
            {
                src: '/assets/summary/decuong26.png',
                value: 'phase20',
                name: 'phase 20',
                title: 'DOANH NGHIỆP PHỎNG VẤN',
                description: 'Phỏng vấn và giới thiệu việc làm ngay sau khi ra trường dựa trên sự hợp tác giữa đào tạo và việc làm',
                details: [
                    'Hướng dẫn viết CV',
                    'Tham quan doanh nghiệp',
                    'Ngày hội việc làm',
                    'KẾT NỐI VIỆC LÀM TỚI DOANH NGHIỆP',
                ]
            },
        ], [i18n])


    let accordionItems = datas.map((phase, index) => {
        return (
            <Accordion.Item key={index} value={phase.value}>
                <Accordion.Control
                    icon={
                        <div className={classes.sectionIcon}>Phần {index + 1}</div>
                    }
                    className={classes.phaseTitle}
                >
                    {phase.title}
                </Accordion.Control>
                <Accordion.Panel>
                    <Flex>
                        <Container
                            className={classes.phaseLeft}
                        >
                            <List
                                spacing="xs"
                                size="sm"
                                pl={rem(30)}
                                pt={rem(30)}
                                center
                                icon={
                                    <ThemeIcon
                                        variant="gradient"
                                        color="teal"
                                        size={24}
                                        // radius="xl"
                                        gradient={{ from: '#106198', to: '#172860', deg: 90 }}
                                    >
                                        <IconCircleCheck size="1rem" />
                                    </ThemeIcon>
                                }
                            >
                                {phase.details.map((detail, index) => {
                                    return <List.Item key={index}>{detail}</List.Item>
                                })}
                            </List>
                        </Container>
                        <Container className={classes.phaseRight}>
                            <div className={classes.backgroundImage}>
                                <div className={classes.bg}></div>
                            </div>
                            <div className={classes.imageContainer}>
                                <Image
                                    className={classes.image}
                                    src={phase.src}
                                    alt='image'
                                    width={250}
                                    height={250}
                                />
                            </div>
                        </Container>

                    </Flex>
                </Accordion.Panel>
            </Accordion.Item>
        )
    })
    const handleShowSpoiler = () => {
        showSpoiler = true
        let spoiler = document.getElementById('spoiler')
        let hideBtn = document.getElementById('hideBtn')
        let showBtn = document.getElementById('showBtn')
        if (spoiler && showBtn && hideBtn) {
            spoiler.style.height = spoiler.scrollHeight + 'px'
            showBtn.style.display = 'none'
            hideBtn.style.display = 'block'
        }
    }
    const handleHideSpoiler = () => {
        showSpoiler = false
        let spoiler = document.getElementById('spoiler')
        let hideBtn = document.getElementById('hideBtn')
        let showBtn = document.getElementById('showBtn')
        if (spoiler && showBtn && hideBtn) {
            spoiler.style.height = 250 + 'px'
            showBtn.style.display = 'block'
            hideBtn.style.display = 'none'
        }
    }
    const handleChangeAccordion = () => {
        setTimeout(() => {
            let spoiler = document.getElementById('spoiler')
            let Accordion = document.getElementById('Accordion')
            if (spoiler && Accordion && showSpoiler) {
                spoiler.style.height = Accordion.clientHeight + 'px'
            }
        }, 400)
    }

    useEffect(() => {
        let hideBtn = document.getElementById('hideBtn')
        let showBtn = document.getElementById('showBtn')
        if (showSpoiler == true && showBtn && hideBtn) {
            showBtn.style.display = 'none'
            hideBtn.style.display = 'block'
        } else if (showSpoiler == false && showBtn && hideBtn) {
            showBtn.style.display = 'block'
            hideBtn.style.display = 'none'
        }
    }, [])
    return <>
        <Container
            size={'lg'}
            id='details'
            pt={rem(90)}
        >
            <Text
                className={classes.headTitle}
            >
                ĐỀ CƯƠNG CHI TIẾT
            </Text>
            <Box
                component='div'
                id='spoiler'
                className={classes.mySpoiler}
            >
                <Accordion
                    id='Accordion'
                    onChange={handleChangeAccordion}
                    variant="contained"
                    transitionDuration={300}
                >
                    {accordionItems}
                </Accordion>
            </Box>
            <Flex
                pt={20}
                justify={'center'}
            >
                <Button
                    id='showBtn'
                    onClick={handleShowSpoiler}
                    className={classes.viewMoreButton}
                    // variant="light"
                    rightSection={<IconChevronsDown size={14} />}
                >
                    Xem thêm
                </Button>
                <Button
                    id='hideBtn'
                    onClick={handleHideSpoiler}
                    className={classes.viewMoreButton}
                    // variant="light"
                    rightSection={<IconChevronsUp size={14} />}
                >
                    Ẩn bớt
                </Button>
            </Flex>
        </Container >
    </>
}