import React, { useEffect, useState } from "react"

import data from "./data"

const Context = React.createContext({})

const ContextProvider = (props) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  })

  const formatData = (data) => {
    let tempItems = data.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)
      let rooms = { ...item.fields, images, id }
      return rooms
    })
    return tempItems
  }

  useEffect(() => {
    let rooms = formatData(data)
    let featuredRooms = rooms.filter((room) => room.featured)
    setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    })
  }, [])

  return <Context.Provider value={state}>{props.children}</Context.Provider>
}

const Consumer = Context.Consumer

export { Context, ContextProvider, Consumer }
