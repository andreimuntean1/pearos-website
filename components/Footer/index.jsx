import Link from 'next/link'
import SocialIcon from './SocialIcon'
import Button from 'components/Button'
import Logo from 'components/Logo'
import Text from 'components/Text'
import data from 'data/data.json'
import { faInstagram, faTwitter, faYoutube, faGithub, faDiscord, faReddit, faPaypal } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <div className='bg-zinc-800 px-10 py-14'>
      <div>
        <div className='flex justify-between'>
          <div>
            <div className='flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity'>
              <Logo width={28} height={38} />
              <Text type='small-title' styles='text-base sm:text-sm'>pearOS project</Text>
            </div>
            <ul className='flex gap-4 mt-12 sm:mt-10 text-white'>
              <SocialIcon icon={faInstagram} url={'https://www.instagram.com/pear_os/'} />
              <SocialIcon icon={faTwitter} url={'https://twitter.com/PearLinux'} />
              <SocialIcon icon={faYoutube} url={'https://www.youtube.com/channel/UCPDoVlbiFrjrfqNpPMh__sA'} />
              <SocialIcon icon={faGithub} url={'https://github.com/Pear-Project'} />
              <SocialIcon icon={faDiscord} url={'https://discord.gg/FYGBBgJ3Xx'} />
              <SocialIcon icon={faReddit} url={'https://www.reddit.com/r/pearos/'} />
              <SocialIcon icon={faPaypal} url={'https://paypal.me/alxb421'} />
            </ul>
            <div className='mt-16 sm:mt-12'>
              <Text type='small-title' styles='text-base opacity-80'>{data.footer.contact.title}</Text>
              <Link href={'mailto:alex@pearos.xyz'} passHref><a><Button type='secondary' styles='text-sm mt-4'>Contact us</Button></a></Link>
            </div>
          </div>
          <div className='flex gap-20'>
            <div className=''>
              <Text type='small-title' styles='opacity-75'>{data.footer.links.col1.title}</Text>
              <ul className='mt-2 flex flex-col gap-1'>
                {data.footer.links.col1.links.map((link, index) => <li key={index}><Link href={link.url}><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 text-sm underline'>{link.text}</a></Link></li>)}
              </ul>
            </div>
            <div className=''>
              <Text type='small-title' styles='opacity-75'>{data.footer.links.col2.title}</Text>
              <ul className='mt-2 flex flex-col gap-1'>
                {data.footer.links.col2.links.map((link, index) => <li key={index}><Link href={link.url}><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 text-sm underline'>{link.text}</a></Link></li>)}
              </ul>
            </div>
            <div className=''>
              <Text type='small-title' styles='opacity-75'>{data.footer.links.col3.title}</Text>
              <ul className='mt-2 flex flex-col gap-1'>
                {data.footer.links.col3.links.map((link, index) => <li key={index}><Link href={link.url}><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 text-sm underline'>{link.text}</a></Link></li>)}
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center gap-2 mt-10'>
          <Text type='small-title' styles='text-center text-base sm:text-sm text-light-gray transition-opacity'>pearOS project &copy; 2019-{currentYear} <Link href={'mailto:alex@pearos.xyz'} passHref><a className='underline hover:text-white duration-200 transition-color'>Alexandru Bălan</a></Link></Text>
          <Text type='small-title' styles='text-center text-base sm:text-sm text-light-gray transition-opacity'>Website &copy; 2021-{currentYear} <Link href={'https://andreimuntean.dev'} passHref><a className='underline hover:text-white duration-200 transition-color'>Andrei Muntean</a></Link></Text>
          <Text type='paragraph' styles='max-w-sm text-center sm:text-sm opacity-40 mt-5'>All rights reserved. Any trademarks or logos used on this site are property of their respective owners.</Text>
          <div className='flex sm:flex-col text-center gap-8 sm:gap-3 mt-10 sm:mt-5'>
            <Link href={'/legal/terms-of-service'} passHref><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 underline text-sm'>Terms of service</a></Link>
            <Link href={'/legal/privacy-policy'} passHref><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 underline text-sm'>Privacy policy</a></Link>
            <Link href={'#'} passHref><a className='font-open-sans text-white hover:opacity-75 transition-opacity opacity-50 underline text-sm'>Cookies policy</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer