import { Hero } from "../src/components"
import React from "react"

export const Error = () => {
  return (
    <section className="container mx-auto">
      <Hero
        titleOne="404"
        titleTwo="Error"
        subtitle="Page not found."
        srcImg="https://www.jewelersmutual.com/sites/default/files/inline-images/how_to_find_a_lost_ring.png"
      />
    </section>
  )
}
