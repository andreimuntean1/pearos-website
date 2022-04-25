import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcon({icon, url}) {
	return (
		<li className='text-xl sm:text-base opacity-40 transition-opacity hover:opacity-100'>
			<Link href={url} passHref>
				<a>
					<FontAwesomeIcon icon={icon} />
				</a>
			</Link>
		</li>
	)
}

export default SocialIcon