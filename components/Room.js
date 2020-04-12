import React, { useEffect, useState } from "react"

import PropTypes from "prop-types"

// import  Link  from "next/link"


const defaultImg = "https://picsum.photos/245/245"

export const Room = ({ hoverText, name, slug, images, price, rider2 }) => {
  const [hover, setHover] = useState(false)

  return (
    <article
      className="relative flex max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg h-72"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={images[0] || defaultImg}
        alt="main"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 max-w-xs p-2 leading-5 text-left text-yellow-600 bg-primary-alpha-50">
        <h6 className="text-xl font-bold text-yellow-400">$ {price}</h6>
        <p className="">{rider2}</p>
      </div>
      <a href={`/${slug}`}>
        <div
          className="absolute inset-0 items-center justify-center w-1/2 px- mx-auto mt-16 text-yellow-400 border-2 border-yellow-400 border-solid bg-primary-alpha-20 hover:cursor-pointer h-1/3"
          style={{ display: hover ? "flex" : "none" }}
        >
          <h1 className="text-5xl text-yellow-400 uppercase">Featured</h1>
        </div>
      </a>
      <div className="absolute inset-x-0 bottom-0 z-50 p-4 text-2xl font-semibold text-center text-yellow-400 uppercase bg-primary-alpha-50">
        {name}
      </div>
    </article>
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
