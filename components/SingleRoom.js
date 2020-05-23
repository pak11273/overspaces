import { useEffect, useState } from "react"

import { Context } from "context"

export const Singleroom = (props) => {
  const [slug, changeSlug] = useState("")
  const [Bcg, changeBcg] = useState("")

  useEffect(() => {
    changeSlug(props.match.params.slug)
    // return () => {
    //     cleanup
    // }
  }, [])

  let constext = Context
  const { getRoom } = context
  const room = getRoom(slug)
  console.log("room: ", room)

  return <div>hello from single room</div>
}
