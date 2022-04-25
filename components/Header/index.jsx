import { useState } from 'react'
import Link from 'next/link'
import Button from 'components/Button'
import Logo from 'components/Logo'
import { isMobile } from 'react-device-detect'

function Header({styles}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className={`${styles} backdrop-blur-md bg-zinc-900/40 w-full p-5 sm:px-5 sm:py-3 flex justify-center fixed top-0 z-30 transition-all`}>
      <div className='flex flex-col w-full'>
        <div className="flex items-center justify-between w-full lg:max-w-7xl">
          <Link href={'/'} passHref>
            <a><Logo width={isMobile ? 20 : undefined} height={isMobile ? 29 : undefined} /></a>
          </Link>
          <ul className='flex gap-10 sm:hidden'>
              <li className='font-poppins text-white opacity-75 cursor-pointer tracking-wide hover:opacity-100 transition-all duration-500'>
                <Link href={'/downloads'} passHref>
                  <a>Downloads</a>
                </Link>
              </li>
              <li className='font-poppins text-white opacity-75 cursor-pointer tracking-wide hover:opacity-100 transition-all duration-500'>
                <Link href={'/support'} passHref>
                  <a>Support</a>
                </Link>
              </li>
              <li className='font-poppins text-white opacity-75 cursor-pointer tracking-wide hover:opacity-100 transition-all duration-500'>
                <Link href={'/how-to-install'} passHref>
                  <a>How to install</a>
                </Link>
              </li>
          </ul>
          <Link href={'https://id.pearos.xyz/'} passHref>
            <a><Button type='secondary' styles='sm:hidden'>Login</Button></a>
          </Link>
          <div className={`${isOpen ? 'open' : ''} burger opacity-75 hidden sm:block`} onClick={() => setIsOpen(!isOpen)}>
            <div className="burger-lines"></div>
          </div>
        </div>
        <div className={`${isOpen ? '' : 'hidden'} mt-3 p-3 flex flex-col w-full items-center`}>
          <ul className='text-center flex flex-col gap-3'>
            <li>
              <Link href={'/downloads'} passHref>
                <a className='font-poppins text-white text-lg opacity-75'>Downloads</a>
              </Link>
            </li>
            <li>
              <Link href={'/support'} passHref>
                <a className='font-poppins text-white text-lg opacity-75'>Support</a>
              </Link>
            </li>
            <li>
              <Link href={'/how-to-install'} passHref>
                <a className='font-poppins text-white text-lg opacity-75'>How to install</a>
              </Link>
            </li>
          </ul>
          <Link href={'https://id.pearos.xyz/'} passHref>
            <a><Button type='secondary' styles='mt-8'>Login</Button></a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;