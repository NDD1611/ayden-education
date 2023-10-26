import { useLingui } from "@lingui/react";
import { Flex, rem, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import classes from "./Navbar.module.scss";
import { useWindowScroll } from "@mantine/hooks";
export const Navbar: React.FC = () => {
  const { i18n } = useLingui();
  const [isScroll, setIsScroll] = useState<string>("");
  const [scroll] = useWindowScroll();

  const linkraw = useMemo(
    () => [
      { link: `/`, label: i18n._("Home"), id: "home" },
      { link: `#about`, label: i18n._("About us"), id: "about" },
      {
        link: "#course",
        label: i18n._("Courses"),
        id: "course",
      },
      { link: `#contact`, label: i18n._("Contact"), id: "contact" },
    ],
    [i18n]
  );

  const links = linkraw.map((item) => (
    <UnstyledButton
      key={item.label}
      href={item.link}
      component={Link}
      className={`${classes.button} ${isScroll == item.id ? classes.activeText : ""
        }`}
    >
      <Text size={rem(20)} fw={700} className={`${classes.text}`}>
        {item.label}
      </Text>
    </UnstyledButton>
  ));

  useEffect(() => {
    const sections = document.querySelectorAll(
      "div[id]"
    ) as NodeListOf<HTMLElement>;
    let scrollY = window.pageYOffset;
    if (sections) {
      sections.forEach((current) => {
        if (current) {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current!.offsetTop - 50;
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            let sectionId = current.getAttribute("id");
            if (sectionId) {
              setIsScroll(sectionId);
            }
          }
        }
      });
    }
  }, [scroll]);

  return (
    <Flex align={"center"} className={classes.Navbar}>
      {links}
    </Flex>
  );
};
