import "../public/assets/css/styles.css"

import { ContextProvider } from "../context"
import { Navbar } from "../components"

export default function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </ContextProvider>
  )
}
