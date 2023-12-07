import Engine from "@/components/Engine";
import Navbar from "@/components/Navbar";
import { host, siteId } from "@/static";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = ({ url }) => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    console.log(`${host}dynamic/get-pages-by-siteid-url/${siteId}/${url}`);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const apiFetch = await fetch(
      `${host}dynamic/get-pages-by-siteid-url/${siteId}/${url}`,
      requestOptions
    );
    const response = await apiFetch.json();
    setData(response.response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>
          {data.metaTitle}, Fight Ticket Booking , Cheap Flight Ticket ||
          BookEasyflights
        </title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywoirds" content={data.metaKeywords} />
        <meta name="canonical" content={router.asPath} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />

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
        <Engine />
      </section>
      <div
        className="container page-content"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </>
  );
};
export async function getServerSideProps({ res, query }) {
  const { url } = query;

  return {
    props: { url },
  };
}
export default index;
