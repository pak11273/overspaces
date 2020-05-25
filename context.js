import React, { useContext, useEffect, useState } from "react"

import data from "./data"

// import Contentful from "./contentful"


// Contentful.getEntries().then((res) => console.log("res: ", res.items))

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

  const handleChange = (e) => {
    const value = e.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name
    setState({ ...state, [name]: value })
  }

  useEffect(() => {
    filterRooms()
  }, [state])

  const filterRooms = (e) => {
    let {
      rooms,
      type,
      capacity,
      price,
      size,
      maxSize,
      maxPrice,
      breakfast,
      pets,
    } = state
    console.log("filter rooms!")
  }

  useEffect(() => {
    let rooms = formatData(data)
    let featuredRooms = rooms.filter((room) => room.featured)
    let maxPrice = Math.max(...rooms.map((v) => v.price))
    let maxSize = Math.max(...rooms.map((v) => v.size))
    setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      type: "all",
      capacity: 1,
      price: 0,
      minPrice: 0,
      price: maxPrice,
      minSize: 0,
      size: maxSize,
      breakfast: false,
      pets: false,
    })
  }, [])

  return (
    <Context.Provider value={{ ...state, handleChange, filterRooms }}>
      {props.children}
    </Context.Provider>
  )
}

const Consumer = Context.Consumer

export { Context, ContextProvider, Consumer }
