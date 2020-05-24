import { Loading, RoomsFilter, RoomsList } from "../components"

import { Context } from "../context"
import { useContext } from "react"

export default () => {
  const { loading, rooms, sortedRooms } = useContext(Context)
  if (loading) {
    return (
      <>
        <div className="m-20">
          <Loading color="primary-600" />
        </div>
      </>
    )
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )
}
