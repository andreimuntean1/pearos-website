import { useRouter } from 'next/router'
import { useEffect } from 'react'

function HowToInstall() {
  const router = useRouter()
  useEffect(() => router.push('https://youtu.be/BpUZhMOAo04'))
  return null
}

export default HowToInstall