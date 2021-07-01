import Head from "next/head";
import HeaderNavigation from "@components/HeaderNavigation";
import { Box, Grid } from "grommet";

export default function HeroBase({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="heroBox">
        <div className="heroBackground"></div>
        <div className="heroContent">
          <Box width="xlarge" margin="auto">
            <HeaderNavigation />
            {children}
          </Box>
        </div>
      </div>
    </div>
  );
}
