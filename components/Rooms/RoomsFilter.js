import { MastheadRoomsFilter } from "components"

export const RoomsFilter = ({ rooms }) => {
  if (rooms.length !== 0) {
    return (
      <div>
        <MastheadRoomsFilter rooms={rooms} />
      </div>
    )
  }
  return <h1>No rooms returned from your search.</h1>
}
