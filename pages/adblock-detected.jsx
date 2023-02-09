import { useEffect } from "react"
import Head from "next/head"
import Button from "components/Button"
import Text from "components/Text"
import Wrapper from "components/Wrapper"
import { useRouter } from "next/router"
import { detectAdblock } from "utils/AdBlockDetect"

function AdblockDetected() {
  const router = useRouter()

  useEffect(() => {
    detectAdblock((usingAdblock) => !usingAdblock && router.push("/"))
  }, [router])

  return (
    <>
      <Head>
        <title>pearOS - Adblock detected</title>
      </Head>

      <Wrapper>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <Text type="title" styles="mb-4 text-center">
            Oops, looks like you have Adblock on
          </Text>
          <Text type="paragraph" styles="mb-8 sm:text-base max-w-lg text-center opacity-75">
            This project is free to use, but servers, hosts, domains cost money, so please, help this project and
            disable your AdBlock or whitelist our website
          </Text>
          <Button type="primary" onClick={() => router.reload(window.location.pathname)}>
            I disabled it
          </Button>
        </div>
      </Wrapper>
    </>
  )
}

export default AdblockDetected
