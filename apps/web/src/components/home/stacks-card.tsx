'use client'

import {
  SiArduino,
  SiArm,
  SiArmkeil,
  SiAssemblyscript,
  SiAwsorganizations,
  SiBluetooth,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiMqtt,
  SiPython,
  SiRaspberrypi,
  SiRust
} from '@icons-pack/react-simple-icons'
import { useTranslations } from '@tszhong0411/i18n/client'
import { Marquee } from '@tszhong0411/ui'
import { ZapIcon } from 'lucide-react'

const StacksCard = () => {
  const t = useTranslations()

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex h-56 flex-col gap-2 overflow-hidden rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm'>{t('homepage.about-me.stacks')}</h2>
      </div>
      <Marquee gap='20px' className='py-4' fade pauseOnHover>
        <SiCplusplus className='size-10' />
        <SiPython className='size-10' />
        <SiRust className='size-10' />
        <SiAssemblyscript className='size-10' />
        <SiArm className='size-10' />
        <SiGit className='size-10' />
      </Marquee>
      <Marquee gap='20px' className='py-4' reverse fade pauseOnHover>
        <SiArmkeil className='size-10' />
        <SiRaspberrypi className='size-10' />
        <SiArduino className='size-10' />
        <SiGithub className='size-10' />
        <SiMqtt className='size-10' />
        <SiAwsorganizations className='size-10' />
        <SiBluetooth className='size-10' />
      </Marquee>
    </div>
  )
}

export default StacksCard
