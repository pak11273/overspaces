import { Context } from "../../context"
import { NotFound } from "../../components"
import { useContext } from "react"
import { useRouter } from "next/router"

const Room = (props) => {
  let { rooms } = useContext(Context)
  const router = useRouter()
  const { pid } = router.query
  if (rooms.find((x) => x.id === pid)) {
    return (
      <>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
        <h1>{pid}</h1>
      </>
    )
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <NotFound thing={pid} />
    </div>
  )
}

export default Room
