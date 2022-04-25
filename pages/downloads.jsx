import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from 'components/Button'
import Popup from 'components/Popup'
import Text from 'components/Text'
import Wrapper from 'components/Wrapper'
import Loader from 'components/Loader'
import data from 'data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import disableScroll from 'disable-scroll'
import { isMobile } from 'react-device-detect'

function Downloads() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => setIsLoading(false), [])

  return isLoading ? <Loader /> : (
    <>
      <Head>
        <title>pearOS - Downloads</title>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pearos.xyz/downloads' />
        <meta property='og:title' content='pearOS - Downloads' />
        <meta property='og:description' content='Download here pearOS, a linux distribution that aims for UI and UX, offering a mac like feeling, now even on older PCs. Why hackintosh when you can pearintosh? Try our latest version Nicec0re now, it&#39s free!' />
        <meta property='description' content='Download here pearOS, a linux distribution that aims for UI and UX, offering a mac like feeling, now even on older PCs. Why hackintosh when you can pearintosh? Try our latest version Nicec0re now, it&#39s free!' />
      </Head>

      <Popup 
        text='Looks like you are trying to download pearOS from a mobile device. Please try again from a laptop or PC' 
        buttonText='OK'
        openState={isOpen} 
        onPress={() => {setIsOpen(false), disableScroll.off()}} 
      />
      <Wrapper>
        <div className='min-h-screen flex flex-col items-center'>
          <Text type='title' styles='mt-48'>{data.downloads.title}</Text>
          <Text type='paragraph' styles='max-w-2xl sm:max-w-xl opacity-70 mt-5 text-center'>{data.downloads.description}</Text>
          <Button type='primary' styles='mt-8' onClick={!isMobile ? () => router.push('https://nicec0re.pearos.xyz/get') : () => {setIsOpen(true), disableScroll.on()}}>Download NiceC0re</Button>
          <div className='mt-10 opacity-50 transition-opacity hover:opacity-80 cursor-pointer'>
            <Link href={'https://archive.org/details/pearos'} passHref>
              <a className='flex items-center'>
                <a className='font-open-sans text-white hover:opacity-100 transition-opacity opacity-90 text-sm mr-2'>See other pearOS versions</a>
                <FontAwesomeIcon icon={faAngleRight} className='text-white' />
              </a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Downloads