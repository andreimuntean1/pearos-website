import "../styles/globals.css"
import "../styles/burger.css"
import "../styles/loading.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { detectAdblock } from "utils/AdBlockDetect"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    detectAdblock((usingAdblock) => usingAdblock && router.push("/adblock-detected"))
  }, [router])

  return <Component {...pageProps} />
}

export default MyApp
