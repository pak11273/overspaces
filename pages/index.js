import { FeaturedRooms, MastheadHome, Services } from "../components"

import React from "react"

const Home = () => {
  return (
    <>
      <MastheadHome />
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
