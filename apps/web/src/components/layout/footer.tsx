'use client'

import {
  type IconType,
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons'
import React from 'react'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

import Accent from '../home/accent'
import UnstyledLink from '../home/unstyled-link'

type Social = {
  href: string
  icon: IconType
  id: string
  text: React.ReactNode
}

export const FOOTER_LINKS: Array<{
  href: string
  text: string
}> = [
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/blog',
    text: 'Blog'
  },
  {
    href: '/dashboard',
    text: 'Dashboard'
  },
  {
    href: '/projects',
    text: 'Projects'
  },
  {
    href: '/about',
    text: 'About Me'
  },
  {
    href: '',
    text: 'My Resume'
  },
  {
    href: '/contact',
    text: 'Contact Me'
  }
]

export const FOOTER_SOCIAL_LINKS: Social[] = [
  {
    href: 'https://github.com/sarthakskumar',
    icon: SiGithub,
    id: 'Github',
    text: (
      <>
        See my projects on <Accent className='font-medium'>Github</Accent>
      </>
    )
  },
  {
    href: 'https://www.linkedin.com/in/sarthakskumar',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    )
  },
  {
    href: 'https://instagram.com/sarthakskumar',
    icon: SiInstagram,
    id: 'Instagram',
    text: (
      <>
        Follow me on <Accent className='font-medium'>Instagram</Accent>
      </>
    )
  },
  {
    href: 'https://instagram.com/sarthakskumar',
    icon: SiX,
    id: 'Instagram',
    text: (
      <>
        Follow me on <Accent className='font-medium'>Instagram</Accent>
      </>
    )
  },
  {
    href: 'https://instagram.com/sarthakskumar',
    icon: SiYoutube,
    id: 'Instagram',
    text: (
      <>
        Follow me on <Accent className='font-medium'>Instagram</Accent>
      </>
    )
  }
]

export default function Footer() {
  return (
    <footer className='my-4 pb-2'>
      <main className='layout flex flex-col items-center justify-center gap-y-4 border-t pt-6 dark:border-neutral-600/40'>
        <FooterLinks />
        <SocialLinks />
        <p className='justify-centern flex w-full items-center border-t pt-5 text-xs font-semibold text-gray-800 dark:border-neutral-600/40 dark:text-gray-300'>
          <span>©️ {new Date().getFullYear()}, Prajwal Navalagi</span>
        </p>
      </main>
    </footer>
  )
}

function FooterLinks() {
  return (
    <div className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
      {FOOTER_LINKS.map(({ href, text }) => (
        <UnstyledLink
          key={href}
          className='focus-visible:ring-primary-300 rounded-sm text-sm font-medium hover:brightness-125 focus:outline-none focus-visible:ring dark:text-gray-200'
          href={href}
        >
          {text}
        </UnstyledLink>
      ))}
    </div>
  )
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle')

  const [copy] = useCopyToClipboard()

  return (
    <div className='mt-2 flex space-x-5'>
      <div className='flex items-center justify-center'>
        <button
          aria-label='Copy Email'
          data-umami-event='Copied Email'
          onClick={() => {
            copy('sarthakskumar7@gmail.com').then(() => {
              setCopyStatus('copied')
              setTimeout(() => {
                setCopyStatus('idle')
              }, 1500)
            })
          }}
          className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
        >
          <SiGmail className='hover:text-primary-300 dark:hover:text-primary-300 my-auto h-5 w-5 align-middle text-neutral-600 transition-colors dark:text-gray-300' />
        </button>
      </div>
      {FOOTER_SOCIAL_LINKS.map((social) => (
        <UnstyledLink
          key={social.href}
          ariaLabel={String(social.text)}
          data-umami-event={`View ${social.text}`}
          className='focus-visible:ring-primary-300 inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring'
          href={social.href}
        >
          <social.icon className='hover:text-primary-400 dark:hover:text-primary-300 my-auto h-5 w-5 align-middle text-neutral-600 transition-colors duration-200 dark:text-gray-300' />
        </UnstyledLink>
      ))}
    </div>
  )
}
