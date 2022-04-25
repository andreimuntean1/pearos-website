import '../styles/globals.css'
import '../styles/burger.css'
import '../styles/loading.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { detectAnyAdblocker } from 'just-detect-adblock'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    detectAnyAdblocker().then((detected) => {
      if(detected) {
        router.push('/adblock-detected')
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
