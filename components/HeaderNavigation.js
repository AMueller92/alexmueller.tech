import React from "react";
import { Header, Anchor, Box, ResponsiveContext, Menu, Button } from "grommet";
import { HomeOption, Menu as MenuIcon } from "grommet-icons";
import Image from "next/image";
import Logo from "../public/LogoSmallWhite.png";
import Link from "next/link";
import ContactForm from "@components/ContactForm";

export default function HeaderNavigation() {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <div>
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
                            <Anchor label="Contact" onClick={onOpen} />
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

                <Button
                  primary
                  size="small"
                  style={{ borderRadius: "7px" }}
                  label="Contact"
                  onClick={onOpen}
                />
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
      {open && <ContactForm onClose={onClose} />}
    </div>
  );
}
