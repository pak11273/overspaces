import { FeaturedRooms, Masthead, Services } from "../components"

import React from "react"
import logo from "../public/assets/images/overspaces.png"

const Home = () => {
  return (
    <>
      <Masthead />
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
