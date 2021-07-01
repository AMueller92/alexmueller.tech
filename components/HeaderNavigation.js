import { Header, Anchor, Box, ResponsiveContext, Menu } from "grommet";
import { HomeOption, Menu as MenuIcon } from "grommet-icons";
import Image from "next/image";
import Logo from "../public/LogoSmallWhite.png";
import Link from "next/link";

export default function HeaderNavigation() {
  return (
    <Header pad="medium" height="xsmall">
      <Link href="/" passHref>
        <Anchor icon={<HomeOption color="brand" />} label="Home" />
      </Link>
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
                    label: (
                      <Box pad="small">
                        <Link href="/authenticate" passHref>
                          <Anchor label="Login" />
                        </Link>
                      </Box>
                    ),
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://blog.alexmueller.tech" label="Blog" />
              <Link href="/authenticate" passHref>
                <Anchor label="Login" />
              </Link>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}
