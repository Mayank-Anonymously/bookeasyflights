import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/Navbar";
import Why from "../components/Why";
import Destination from "../components/Destination";
import Deals from "../components/Deals";
import About from "../components/About";
import Footer from "../components/Footer";
import Engine from "../components/Engine";
import Mobile from "../components/Mobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Easy Trips</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Mobile/>
      <section
        className="banner"
        style={{
          backgroundImage: "url(../images/admin/airline_image/841258saddf.jpg)",
        }}
      >
        <div className="heading-container text-center">
        <h1>Explore Beyond Boundaries</h1>
        <h4>Your Next Adventure Awaits!</h4>
        </div>
        <Engine/>
      </section>
      
      <Why />
      <Destination />
      <Deals />
      <About />
      <Footer />
    </>
  );
}
