import { createClient } from "contentful"

console.log(process.env.CONTENTFUL_SPACE)
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
export default createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  // space: "nit232368zlm",
  // accessToken: "a73Mlw8OsuqbAQ3DSoJzQ5AGDQWRyeCxn4tUUUass4A",
})
