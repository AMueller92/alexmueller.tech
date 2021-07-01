import Head from "next/head";
import HeaderNavigation from "@components/HeaderNavigation";
import Footer from "@components/Footer";
import Testimonials from "@components/Testimonials";
import MainBase from "@components/MainBase";

export default function Home() {
  return (
    <div>
      <MainBase title="Alexander Mueller">
        <div style={{ paddingTop: 400 }}>
          {/*Only temp*/}
          <Testimonials />
        </div>
      </MainBase>
    </div>
  );
}
