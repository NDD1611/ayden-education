import { Container, Flex, Text, Box } from "@mantine/core";
import classes from "./About.module.scss";

export const About: React.FC = () => {
  return <Container size="xxl"
    className={classes.aboutContainer}>
    <Container size={'xl'}
      className={classes.aboutContent}
    >
      <Text className={classes.headTitle}>AYDEN - ĐÀO TẠO CHUYÊN GIA LẬP TRÌNH</Text>

      <Flex
        gap={20}
        className={classes.middle}
      >
        <Box
          component="div"
          className={classes.left}
        >
          <Text className={classes.leftTitle}>Cung ứng nhân sự LẬP TRÌNH LÀNH NGHỀ <br /> cho Việt Nam & Thế giới</Text>
          <Text className={classes.leftDescription}>
            Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp.
            Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.
          </Text>
        </Box>
        <Box
          component="div"
          className={classes.right}
        >
          <Box
            component="div"
            className={classes.slideImage}
          >
            <div className={classes.moverX}></div>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Container>
};
