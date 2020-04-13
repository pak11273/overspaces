import { FeaturedRooms, Services } from "../components"

import Head from "next/head"
import Link from "next/link"
import React from "react"
import logo from "../public/assets/images/overspaces.jpg"

// const Home = () => (
//   <div className="container">
//     <Head>
//       <title>OverSpaces</title>
//       <link rel="icon" href="/favicon.ico" />
//     </Head>
//     <Navbar />

//     <main>
//       <div className="p-4 shadow rounded bg-bg-indigo-700">
//         <h1 className="text-2xl text-indigo-500 leading-normal">Next.js</h1>
//         <p className="text-gray-500">with Tailwind CSS</p>
//       </div>
//     </main>

//   </div>
// )
const Home = () => {
  return (
    <>
      <section className="flex bg-green-500">
        <div className="flex flex-col max-w-4xl px-2 py-8 mx-auto lg:w-1/2 lg:max-w-full lg:px-12 lg:py-12">
          <img
            className="self-center object-cover object-bottom w-full h-64"
            src={logo}
            alt="overspaces logo"
          />
          <img
            className="self-center object-cover w-full mt-6 rounded-lg shadow-xl lg:hidden h-72 object:center"
            src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="house"
          />
          <h1 className="mt-6 text-2xl font-bold leading-tight text-bg-whi">
            Find<span className="text-brand-blue">properties</span> everywhere.
          </h1>
          <p className="mt-2 text-gray-700">
            Looking for a rental or real estate?
          </p>
          <div className="flex justify-start">
            <div className="mt-4">
              <input value="zipcode" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="house"
          />
        </div>
      </section>
      <FeaturedRooms />
      <Services
        subtitle="Look for the best properties"
        title="Find the best properties in your location!"
        description="Property listings are subject to change"
      />
    </>
  )
}

export default Home
