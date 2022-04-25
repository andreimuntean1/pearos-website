import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from 'components/Button'
import Loader from 'components/Loader'
import Text from 'components/Text'
import Wrapper from 'components/Wrapper'
import data from 'data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faRedditAlien } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

function Support() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => setIsLoading(false), [])

  return isLoading ? <Loader /> : (
    <>
      <Head>
        <title>pearOS - Support</title>
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pearos.xyz/support' />
        <meta property='og:title' content='pearOS - Support' />
        <meta property='og:description' content='Did found a bug? Do you want a new features? Do you have any questions? This is the right place to ask. Contact us on one of the two options available below' />
        <meta property='description' content='Did found a bug? Do you want a new features? Do you have any questions? This is the right place to ask. Contact us on one of the two options available below' />
      </Head>

      <Wrapper>
        <div className='min-h-screen flex flex-col items-center pt-48'>
          <Text type='title'>{data.support.title}</Text>
          <Text type='paragraph' styles='max-w-2xl opacity-70 mt-5 text-center'>{data.support.description}</Text>
          <div className='flex sm:flex-col sm:items-center gap-6 sm:gap-5 mt-12'>
            <Link href={'https://discord.gg/FYGBBgJ3Xx'} passHref>
              <a>
                <Button type='secondary' styles='flex gap-2 items-center justify-center'>
                  <FontAwesomeIcon icon={faDiscord} />
                  Discord
                </Button>
              </a>
            </Link>
            <Link href={'#'} passHref>
              <a>
                <Button type='secondary' styles='flex gap-2 items-center justify-center'>
                  <FontAwesomeIcon icon={faRedditAlien} />
                  Reddit
                </Button>
              </a>
            </Link>
            <Link href={'mailto:alex@pearos.xyz'} passHref>
              <a>
                <Button type='secondary' styles='flex gap-2 items-center justify-center'>
                  <FontAwesomeIcon icon={faAt} />
                  E-mail
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Support