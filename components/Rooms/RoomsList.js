import { Room } from "components"

export const RoomsList = ({ rooms }) => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center">
        {rooms.map((v, i) => (
          <div key={i} className="p-12">
            <Room hoverText="Featured" {...v} />
          </div>
        ))}
        {/* filler divs */}
        <div className="h-0 px-32 mx-12 feature__card--300 feature__card--1600-425 feature__card--1920-500" />
        <div className="h-0 px-32 mx-12 feature__card--300 feature__card--1600-425 feature__card--1920-500" />
        <div className="h-0 px-32 mx-12 feature__card--300 feature__card--1600-425 feature__card--1920-500" />
      </div>
    </div>
  )
}
