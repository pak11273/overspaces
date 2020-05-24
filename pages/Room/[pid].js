import { MastheadRoom, NotFound } from "../../components"

import { Context } from "../../context"
import { useContext } from "react"
import { useRouter } from "next/router"

const Room = (props) => {
  let { rooms } = useContext(Context)
  const router = useRouter()
  const { pid } = router.query
  let room = rooms.find((x) => x.id === pid)
  if (room) {
    return (
      <div className="justify-center mx-auto flex-column ">
        <MastheadRoom {...room} />
        <section className="flex flex-wrap justify-center mx-auto">
          {room.images.map((url, i) => {
            if (i !== 0) {
              return (
                <div key={url} className="flex items-center w-64 h-64 mx-12">
                  <img src={url} />
                </div>
              )
            }
          })}
        </section>
        <h1>Features</h1>
        <section>
          {room.extras.map((val, i) => {
            return <article key={i}>{val}</article>
          })}
        </section>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <NotFound thing={pid} />
    </div>
  )
}

export default Room
