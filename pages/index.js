import { FeaturedRooms, Services } from "../components"

import React from "react"
import logo from "../public/assets/images/overspaces.png"

const Home = () => {
  return (
    <>
      <section className="flex bg-green-500">
        <div className="flex flex-col max-w-4xl px-2 py-8 mx-auto lg:w-1/2 lg:max-w-full lg:px-12 lg:py-12">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col justify-center h-32 max-w-xs px-16 overflow-hidden bg-indigo-600 md:h-48">
              <img
                className="self-center object-contain w-24 md:w-40"
                src={logo}
                alt="overspaces logo"
              />
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white uppercase md:text-6xl">
              Over<span className="text-indigo-500">Spaces</span>
            </h1>
          </div>
          <img
            className="self-center object-cover w-full mt-6 rounded-lg shadow-xl lg:hidden h-72 object:center"
            src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="house"
          />
          <h1 className="mt-6 text-2xl font-bold leading-tight text-indigo-800">
            Find <span className="text-brand-blue">properties</span> everywhere.
          </h1>
          <p className="mt-2 text-indigo-800">
            Looking for a rental or real estate?
          </p>
          <div className="flex justify-start">
            <div className="mt-4">
              <input
                value="zipcode"
                onChange={() => console.log("change me")}
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
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
