import { ActionIcon, Button, Menu } from "@mantine/core";
import { IconMenuDeep } from "@tabler/icons-react";
import { Navbar } from "./Navbar";
import { useLingui } from "@lingui/react";
export const MenuMobile: React.FC = () => {
  const { i18n } = useLingui();
  return (
    <>
      <Menu shadow="md" width={250}>
        <Menu.Target>
          <ActionIcon variant="white" color="#2339ff">
            <IconMenuDeep stroke={1.5} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <Navbar />
          </Menu.Item>
          <Menu.Item>
            <Button
              size="lg"
              fullWidth
              styles={{
                root: {
                  background: "#2339ff",
                },
              }}
            >
              {i18n._("Liên hệ đăng kí")}
            </Button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
