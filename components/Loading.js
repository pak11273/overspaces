import { FaCircleNotch } from "react-icons/fa"
import PropTypes from "prop-types"
import React from "react"

export const Loading = ({ color, custom, size }) => {
  return (
    <div className="loading">
      <FaCircleNotch
        className={`transform rotate-45 text-${color} rotate-center mx-auto`}
        color={custom}
        size={size}
      />
    </div>
  )
}

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  custom: PropTypes.string,
}

Loading.defaultProps = {
  color: "gray",
  size: 30,
}
