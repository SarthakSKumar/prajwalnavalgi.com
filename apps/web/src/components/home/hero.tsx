'use client'

import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons'
import { useTranslations } from '@tszhong0411/i18n/client'
import { BlurImage } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { FileBadge } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import UnstyledLink from './unstyled-link'

const TEXTS = [
  {
    key: 'cutting-edge',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    key: 'engaging',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    key: 'high-performance',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    key: 'real-time',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#2ecc70] to-[#1ca085]'
  },
  {
    key: 'scalable',
    className:
      'bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]'
  }
] as const

const SPEED = 2

const variants = {
  enter: {
    y: 100,
    opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -100,
    opacity: 0
  }
}

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = useTranslations()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TEXTS.length)
    }, SPEED * 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const textItem = TEXTS[currentIndex]
  if (!textItem) return null

  return (
    <div className='my-16 space-y-6'>
      <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='flex flex-col flex-wrap gap-2 text-xl font-bold sm:text-3xl'>
            <div>{t('homepage.hero.title-top')}</div>
            <div className='flex gap-2'>
              <motion.div
                layout
                key='title-middle-left'
                className='leading-[30px] sm:leading-[45px]'
              >
                {t('homepage.hero.title-middle-left')}
              </motion.div>

              <motion.div
                layout
                key='title-middle-right'
                className='leading-[30px] sm:leading-[45px]'
              >
                {t('homepage.hero.title-middle-right')}
              </motion.div>
            </div>
            <div>{t('homepage.hero.title-bottom')}</div>
            <div className='relative overflow-hidden'>
              <AnimatePresence mode='popLayout'>
                <motion.div
                  key={currentIndex}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  layout
                  transition={{
                    type: 'tween',
                    duration: 0.3
                  }}
                  className='inline-flex items-center justify-center leading-[30px] sm:leading-[45px]'
                >
                  <span className={textItem.className}>{t(`homepage.hero.${textItem.key}`)}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>
          <div className='text-muted-foreground text-sm'>
            {t('homepage.hero.location-timezone')}
          </div>
          <div data-fade='6' className='mt-4 flex flex-wrap gap-6 gap-y-2 md:mt-8'>
            <UnstyledLink
              data-umami-event='View Resume'
              href='./Resume-Sarthak_S_Kumar.pdf'
              className={cn(
                'text-md my-1 inline-flex items-center gap-1 font-medium md:text-base',
                'text-neutral-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring',
                'transition-colors'
              )}
            >
              <FileBadge className='w-5 shrink-0 text-gray-700 dark:text-gray-100' />
              <span className='ml-1 text-sm'>My Resume</span>
            </UnstyledLink>
            <UnstyledLink
              data-umami-event='View LinkedIn Profile'
              href='https://www.linkedin.com/in/sarthakskumar'
              className={cn(
                'text-md my-1 inline-flex items-center gap-1 font-medium md:text-base',
                'group text-neutral-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring',
                'transition-colors'
              )}
            >
              <SiLinkedin className='w-5 shrink-0 text-[#00619d] transition-colors dark:text-[#1da1f2]' />
              <span className='ml-1 text-sm'>sarthakskumar</span>
            </UnstyledLink>
            <UnstyledLink
              data-umami-event='View Github Profile'
              href='https://github.com/sarthakskumar'
              className={cn(
                'text-md my-1 inline-flex items-center gap-1 font-medium md:text-base',
                'text-neutral-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring',
                'transition-colors'
              )}
            >
              <SiGithub className='w-5 shrink-0 text-gray-800 dark:text-gray-100' />
              <span className='ml-1 text-sm'>@sarthakskumar</span>
            </UnstyledLink>
          </div>
        </div>
        <motion.div
          className='relative hidden size-28 md:block'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <BlurImage
            src='/images/avatar.png'
            className='rounded-full'
            width={250}
            height={250}
            alt='Prajwal'
            lazy={false}
          />
          <div className='bg-linear-to-tl absolute inset-0 -z-10 from-purple-700 to-orange-700 opacity-50 blur-2xl' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
