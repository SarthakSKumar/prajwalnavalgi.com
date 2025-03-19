'use client'

import { useTranslations } from '@tszhong0411/i18n/client'
import { buttonVariants } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'

import Link from '../link'

import CodingHours from './coding-hours'
import Connect from './connect'
import LocationCard from './location-card'
import StacksCard from './stacks-card'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
    >
      <motion.h2
        className='text-center text-3xl font-semibold'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        {t('homepage.about-me.title')}
      </motion.h2>

      <div className='flex flex-col items-center'>
        <motion.h2
          className={cn(
            'py-4 text-center transition-all duration-300',
            !isExpanded && 'max-md:line-clamp-4'
          )}
          initial={{
            y: 30,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          {t('homepage.about-me.description')}
        </motion.h2>

        <button
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
          className='mt-2 text-sm text-blue-500 hover:text-blue-600 md:hidden'
        >
          {isExpanded ? t('homepage.about-me.show-less') : t('homepage.about-me.read-more')}
        </button>
      </div>

      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <div className='grid gap-4'>
          <LocationCard />
          <StacksCard />
          <Connect />
        </div>
        <div className='grid gap-4'>
          <CodingHours />
        </div>
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link href='/about' className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}>
          {t('homepage.about-me.more')}
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
