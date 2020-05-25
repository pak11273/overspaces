import { MastheadGeneric } from "../components"
import React from "react"

export default () => {
  return (
    <section className="container mx-auto">
      <MastheadGeneric
        titleOne="404"
        titleTwo="Error"
        subtitle="Page not found."
        srcImg="https://www.jewelersmutual.com/sites/default/files/inline-images/how_to_find_a_lost_ring.png"
      />
    </section>
  )
}
