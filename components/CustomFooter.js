import styles from "./Footer.module.css";
import { Footer, Box, Text, Anchor } from "grommet";
import Logo from "../public/LogoSmallWhite.png";
import Image from "next/image";
import Link from "next/link";

export default function CustomFooter() {
  return (
    <div>
      <Footer background="dark-1" pad="small" justify="around">
        <Box>
          <Image src={Logo} alt="logo" />
        </Box>

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
            <Anchor href="/" size="small" color="white" label="Imprint" />
            <Anchor href="/" size="small" color="white" label="About" />
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
          © {new Date().getFullYear()} Copyright
        </Text>
      </Footer>
    </div>
  );
}
