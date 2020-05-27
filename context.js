import React, { useContext, useEffect, useState } from "react"

import Contentful from "./contentful"

const Context = React.createContext({})
const ContextProvider = (props) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        let entries = await Contentful.getEntries({
          content_type: "osSpaces",
          // order: "sys.createdAt",
          // order: "fields.price",
          order: "-fields.price",
        })

        let rooms = formatData(entries.items)
        let featuredRooms = rooms.filter((room) => room.featured)
        if (featuredRooms.length > 2) {
          return featuredRooms.splice(2, featuredRooms.length - 1)
        }
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
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

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
  }

  return (
    <Context.Provider value={{ ...state, handleChange, filterRooms }}>
      {props.children}
    </Context.Provider>
  )
}

const Consumer = Context.Consumer

export { Context, ContextProvider, Consumer }
