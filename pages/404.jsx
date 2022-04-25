import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Loader from 'components/Loader'
import Text from 'components/Text'
import Wrapper from 'components/Wrapper'

function NotFound() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => setIsLoading(false), [])
  
  return isLoading ? <Loader /> : (
    <>
      <Head>
        <title>pearOS - Page not found</title>  
      </Head>

      <Wrapper>
        <div className='min-h-screen flex flex-col items-center justify-center'>
          <Image src={'/images/404.png'} width={256} height={256} alt='404 image' className='opacity-90' />
          <Text type='small-title' styles='sm:text-base max-w-md text-center opacity-75'>We&apos;re sorry but the page you&apos;re looking for was not found</Text>
        </div>
      </Wrapper> 
    </>
  )
}

export default NotFound