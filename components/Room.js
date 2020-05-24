import React, { useState } from "react"
// import { withLayout } from "../components"

import PropTypes from "prop-types"

// import  Link  from "next/link"

const defaultImg = "https://picsum.photos/245/245"

export const Room = ({
  featured,
  hoverText,
  name,
  id,
  images,
  price,
  rider2,
}) => {
  const [hover, setHover] = useState(false)

  return (
    <a href={`/room/${id}`}>
      <article
        className="relative mx-auto overflow-hidden bg-white rounded-lg shadow-lg feature__card--300 feature__card--1600-425 feature__card--1920-500 h-72"
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={images[0] || defaultImg}
          alt="main image"
          className={`object-cover w-full h-full transition duration-500 ease-in-out transform ${
            hover ? "scale-150" : null
          }`}
        />
        <div className="absolute top-0 left-0 max-w-xs p-2 leading-5 text-left text-yellow-600 bg-primary-alpha-50">
          <h6 className="text-xl font-bold text-yellow-400">${price}</h6>
          <p className="">{rider2}</p>
        </div>
        <div
          className="absolute items-center justify-center w-1/2 mx-auto text-lg text-yellow-400 border-2 border-yellow-400 border-solid flex-grow-3 bg-primary-alpha-20 hover:cursor-pointer h-1/3"
          style={{
            top: 0,
            left: "25%",
            marginTop: "20%",
            // fontSize: "1rem",
            // fontSize: "3vw",
          }}
        >
          <h1 className="text-yellow-400 uppercase xl:text-3xl">{hoverText}</h1>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-50 pt-2 pb-2 text-2xl font-semibold text-center text-yellow-400 uppercase bg-primary-alpha-50">
          {name}
        </div>
      </article>
    </a>
  )
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
    rider2: PropTypes.number.isRequired,
  }),
}

// export default withLayout(Room)
