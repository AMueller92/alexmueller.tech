import { Grommet, Header, Anchor, Box, ResponsiveContext, Menu } from "grommet";
import { Grommet as GrommetIcon, Menu as MenuIcon } from "grommet-icons";
import Image from "next/image";
import Logo from "../public/LogoSmall.png";

export default function HeaderNavigation() {
  return (
    <Header pad="medium" height="xsmall">
      <Anchor
        href="https://tools.grommet.io/"
        icon={<GrommetIcon color="brand" />}
        label="Home"
      />
      <Image src={Logo} alt="logo" />
      <ResponsiveContext.Consumer>
        {(size) =>
          size === "small" ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: "bottom", right: "right" } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Blog</Box>,

                    href: "https://blog.alexmueller.tech",
                  },

                  {
                    label: <Box pad="small">Login</Box>,

                    href: "https://github.com/grommet/grommet/issues",
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://blog.alexmueller.tech" label="Blog" />

              <Anchor
                href="https://github.com/grommet/grommet/issues"
                label="Login"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}
