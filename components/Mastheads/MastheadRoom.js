import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"

const ButtonOne = ({ srcOne, LabelOne }) => (
  <div className="rounded-md shadow">
    <Link
      href={srcOne}
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primary-600 hover:bg-primary-400 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10"
    >
      {LabelOne}
    </Link>
  </div>
)

const ButtonTwo = ({ srcTwo, LabelTwo }) => (
  <div className="mt-3 sm:mt-0 sm:ml-3">
    <Link
      href={srcTwo}
      className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 transition duration-150 ease-in-out border border-transparent rounded-md text-primary-700 bg-primary-100 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:shadow-outline focus:border-primary-300 md:py-4 md:text-lg md:px-10"
    >
      {LabelTwo}
    </Link>
  </div>
)

const Buttons = ({
  srcOne,
  srcTwo,
  buttonOne,
  buttonTwo,
  LabelOne,
  LabelTwo,
}) => {
  return (
    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
      {buttonOne && buttonTwo ? (
        <>
          <ButtonOne LabelOne={LabelOne} srcOne={srcOne} />
          <ButtonTwo LabelTwo={LabelTwo} srcTwo={srcTwo} />
        </>
      ) : (
        <ButtonOne LabelOne={LabelOne} srcOne={srcOne} />
      )}
    </div>
  )
}

export const MastheadRoom = ({
  id,
  breakfast,
  images,
  name,
  capacity,
  description,
  info,
  pets,
  price,
  size,
}) => (
  <>
    <section className="flex bg-green-500">
      <div className="flex flex-col max-w-4xl px-2 py-8 mx-auto lg:w-1/2 lg:max-w-full lg:px-12 lg:py-12">
        <img
          className="self-center object-cover w-full mt-6 rounded-lg shadow-xl lg:hidden h-72 object:center"
          src={images[0]}
          alt="house"
        />
        <h1 className="mt-6 text-2xl font-bold leading-tight text-indigo-800">
          {name}
        </h1>
        <article className="mt-2 text-indigo-800">{description}</article>
        <article className="mt-2 text-2xl text-indigo-800">
          ${price}/mo.
        </article>
        <article className="mt-2 text-2xl text-indigo-800">
          Max capacity: {capacity > 1 ? capacity + " people" : " person"}
        </article>
        <article className="mt-2 text-2xl text-indigo-800">
          Pets: {pets ? "Yes" : "No pets allowed"}
        </article>
        <article className="mt-2 text-2xl text-indigo-800">
          {breakfast && "free breakfast included"}
        </article>
        <article className="mt-2 text-2xl text-indigo-800">{size} sqft</article>
        <div className="relative w-4/6 mx-auto mt-6 sm:mx-0 sm:w-1/2 text-primary-500">
          {/* <input
            min="0"
            max="10"
            type="number"
            placeholder="ZIPCODE"
            className="w-full h-10 px-5 pr-10 text-sm bg-white rounded-full focus:outline-none"
          /> */}
          <button type="submit" className="absolute top-0 right-0 mt-3 mr-4">
            <svg
              className="w-4 h-4 fill-current"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="inset-0 object-cover w-full h-full"
          src={images[0]}
          alt="house"
        />
      </div>
    </section>
  </>
)

MastheadRoom.propTypes = {}

MastheadRoom.defaultProps = {}
