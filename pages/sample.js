import Navbar from '../components/Navbar'
import Dynamic from '../components/Dynamic'
import React from 'react'
import Head from 'next/head'
import Engine from '../components/Engine'
import Footer from '../components/Footer'

const sample = () => {
  return (
    <>

<Head>
        <title>
          Fight Ticket Booking , Cheap Flight Ticket || BookEasyflights
        </title>
        <meta
          name="description"
          content="Fight Ticket Booking , Cheap Flight Ticket"
        />
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

<Dynamic/>
<Footer />


    </>
  )
}

export default sample