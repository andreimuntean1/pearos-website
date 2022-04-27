import '../styles/globals.css'
import '../styles/burger.css'
import '../styles/loading.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { detectAdblock } from 'utils/AdBlockDetect'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    detectAdblock(a => console.log(a))
    detectAdblock((usingAdblock) => usingAdblock && router.push('/adblock-detected'))
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
