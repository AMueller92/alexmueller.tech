import Head from "next/head";
import HeaderNavigation from "@components/HeaderNavigation";
import Footer from "@components/Footer";
import { Box, Grid } from "grommet";

export default function MainBase({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heroBox">
          <div className="heroBackground"></div>
          <div className="heroContent">
            <HeaderNavigation />
            <Box width="xlarge" margin="auto">
              {children}
            </Box>
          </div>
        </div>
        <div style={{ height: 500 }}>
          <p>Section 1</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
