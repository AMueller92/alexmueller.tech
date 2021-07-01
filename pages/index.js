import Head from "next/head";
import HeaderNavigation from "@components/HeaderNavigation";
import Footer from "@components/Footer";
import Testimonials from "@components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexander Mueller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heroBox" style={{ backgroundColor: "#FBFBFC" }}>
          <div className="heroBackground"></div>
          <div className="heroContent">
            <HeaderNavigation />
            <div style={{ paddingTop: 200 }}>
              {/*Only temp*/}
              <Testimonials />
            </div>
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
