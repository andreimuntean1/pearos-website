import { useRouter } from 'next/router'
import { useEffect } from 'react'

function PrivacyPolicy() {
  const router = useRouter()
  useEffect(() => router.push('https://privacy.pearos.xyz'))
  return null
}

export default PrivacyPolicy