import { Context } from "../../context"
import Link from "next/link"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../public/assets/images/overspaces.png"
import { useContext } from "react"

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

export const MastheadRoomsFilter = ({ rooms }) => {
  const {
    loading,
    sortedRooms,
    filterRooms,
    price,
    minPrice,
    minSize,
    type,
    breakfast,
    pets,
    handleChange,
  } = useContext(Context)
  const getUniqueValues = (items, val) => {
    return [...new Set(items.map((x) => x[val]))]
  }

  let types = getUniqueValues(rooms, "type")
  types = ["all", ...types]
  const optionTypes = types.map((v, i) => (
    <option value={v} key={i}>
      {v}
    </option>
  ))

  return (
    <>
      <section className="flex bg-green-500">
        <div className="flex flex-col max-w-4xl px-2 py-8 mx-auto md:flex-row lg:max-w-full lg:px-12 lg:py-12">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col justify-center h-32 max-w-xs px-16 overflow-hidden bg-indigo-600 md:h-48 xl:mt-6">
              <img
                className="self-center object-contain w-24 md:w-40"
                src={logo}
                alt="overspaces logo"
              />
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white uppercase md:text-6xl">
              Over<span className="text-indigo-500">Spaces</span>
            </h1>
          </div>
          {/* <div className="w-full">
            <h1 className="mt-6 text-2xl font-bold leading-tight text-indigo-800">
              Search Filter
            </h1>
            <form>
              <div>
                <label htmlFor="type">Room Type</label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  onChange={handleChange}
                >
                  {optionTypes}
                </select>
              </div>
            </form>
          </div> */}
        </div>
      </section>
    </>
  )
}

MastheadRoomsFilter.propTypes = {}

MastheadRoomsFilter.defaultProps = {}
