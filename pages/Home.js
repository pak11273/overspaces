import { FeaturedRooms, Services } from "../components"

import Link from "next/link"
import React from "react"
import logo from "../public/assets/images/overspaces.png"

export function Home() {
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
            Spammage <span className="text-brand-blue">properties</span>{" "}
            anywhere.
          </h1>
          <p className="mt-2 text-gray-700">
            Enjoy managing your properties while your in a remote place that
            isn't near your office.
          </p>
          <div className="flex justify-start">
            <div className="mt-4">
              <Link
                className="mr-2 font-semibold shadow-lg btn bg-secondary-500 text-bg-sec sm:text-base"
                href="/properties"
              >
                Find properties
              </Link>
            </div>
            <div className="mt-4">
              <Link
                className="shadow-lg btn bg-tertiary-600 text-bg-ter sm:text-base"
                href="/properties"
              >
                Rent properties
              </Link>
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
