import React, { useContext } from "react"

import { Context } from "../context"
import { Loading } from "./Loading"
import { Room } from "../components"

export const FeaturedRooms = () => {
  let { loading, featuredRooms: rooms } = useContext(Context)

  rooms = rooms.map((room) => {
    console.log(room)
    return (
      <Room key={room.id} {...room}>
        {room}
      </Room>
    )
  })

  return (
    <section className="mx-auto mt-24 text-center">
      <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-bg-whi sm:text-4xl sm:leading-10">
        Featured Properties
      </h3>
      <section className="grid gap-8 p-12 md:grid-cols-2 lg:grid-cols-3 xl:px-40">
        {loading ? <Loading color="primary-500" /> : rooms}
      </section>
    </section>
  )
}
