import { Header, Anchor, Box, ResponsiveContext, Menu, Button } from "grommet";
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
                    label: (
                      <Box pad="small" color="light-1">
                        Blog
                      </Box>
                    ),

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
                  {
                    label: (
                      <Box pad="small">
                        <Link href="/authenticate" passHref>
                          <Anchor label="Contact" />
                        </Link>
                      </Box>
                    ),
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor
                href="https://blog.alexmueller.tech"
                label="Blog"
                color="light-1"
              />
              <Link href="/authenticate" passHref>
                <Anchor label="Login" color="light-1" />
              </Link>
              <Link href="/authenticate" passHref>
                <Button
                  primary
                  size="small"
                  style={{ borderRadius: "7px" }}
                  label="Contact"
                />
              </Link>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}
