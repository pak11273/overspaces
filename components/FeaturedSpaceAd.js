import React, { useState } from "react"

import { FaEthereum } from "react-icons/fa"
import PropTypes from "prop-types"
import img1 from "../public/assets/images/room-1.jpeg"
import room2 from "../public/assets/images/details-2.jpeg"
import room3 from "../public/assets/images/details-3.jpeg"
import room4 from "../public/assets/images/details-4.jpeg"

// import { withLayout } from "../components"

// import  Link  from "next/link"

const defaultImg = "https://picsum.photos/245/245"

export const FeaturedSpaceAd = {
  name: "Your Space Here",
  slug: "single-economy",
  type: "single",
  price: "Get more views!",
  size: 200,
  capacity: 1,
  pets: false,
  breakfast: false,
  featured: false,
  description:
    "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  extras: [
    "Plush pillows and breathable bed linens",
    "Soft, oversized bath towels",
    "Full-sized, pH-balanced toiletries",
    "Complimentary refreshments",
    "Adequate safety/security",
    "Internet",
    "Comfortable beds",
  ],
  images: [img1, room2, room3, room4],
}
