import React from "react";
import { Footer, Box, Text, Anchor } from "grommet";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@components/ContactForm";

export default function CustomFooter() {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <div>
      <Footer
        background="dark-1"
        pad={{ horizontal: "large", vertical: "small" }}
        justify="between"
      >
        <Box>
          <Image src="/LogoSmallWhite.png" alt="logo" width={165} height={79} />
        </Box>

        <Box direction="row" gap="xlarge">
          <Box gap="xsmall" key="website" alignSelf="start">
            <Text weight="bold" size="medium" color="brand">
              Website
            </Text>
            <Box>
              <Link href="/" passHref>
                <Anchor size="small" color="white" label="Home" />
              </Link>
              <Anchor
                href="https://blog.alexmueller.tech"
                label="Blog"
                size="small"
                color="white"
              />
              <Link href="/authenticate" passHref>
                <Anchor size="small" color="white" label="Login" />
              </Link>
            </Box>
          </Box>
          <Box gap="xsmall" key="legal" alignSelf="start">
            <Text weight="bold" size="medium" color="brand">
              Company
            </Text>
            <Box>
              <Link href="/imprint" passHref>
                <Anchor size="small" color="white" label="Imprint" />
              </Link>

              <Anchor href="/" size="small" color="white" label="About" />
              <Anchor
                onClick={onOpen}
                size="small"
                color="white"
                label="Contact"
              />
            </Box>
          </Box>
        </Box>
      </Footer>
      <Footer
        background="dark-2"
        pad={{ horizontal: "large", vertical: "xsmall" }}
      >
        <Box direction="row" gap="small">
          <Text alignSelf="center">alexmueller.tech</Text>
        </Box>

        <Text textAlign="center" size="small">
          ?? {new Date().getFullYear()} Copyright
        </Text>
      </Footer>
      {open && <ContactForm onClose={onClose} />}
    </div>
  );
}
