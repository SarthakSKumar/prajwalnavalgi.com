'use client'

import { useTranslations } from '@tszhong0411/i18n/client'
import { ZapIcon } from 'lucide-react'

const CodingHours = () => {
  const t = useTranslations()

  return (
    <div className='shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-6 rounded-xl p-4 lg:p-6'>
      <div className='flex items-center gap-2'>
        <ZapIcon className='size-[18px]' />
        <h2 className='text-sm'>{t('homepage.about-me.coding-hours')}</h2>
      </div>
      <div className='grid grow grid-cols-2 items-start justify-center font-semibold'>
        <div className='col-span-2 my-3'>
          <h3 className='mb-2 text-lg'>Programming Languages</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>C/C++</li>
            <li className=''>Python</li>
            <li className=''>Rust</li>
            <li className=''>Assembly</li>
          </ul>
        </div>
        <div className='my-3'>
          <h3 className='mb-2 text-wrap text-lg'>MicroControllers</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>ESP32</li>
            <li className=''>NRF Series</li>
            <li className=''>ARM Cortex-M</li>
            <li className=''>Arduino</li>
            <li className=''>Raspberry Pi</li>
          </ul>
        </div>

        <div className='my-3'>
          <h3 className='mb-2 text-wrap text-lg'>Hardware Tools</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>Oscilloscopes </li>
            <li className=''>Logic Analyzers</li>
            <li className=''>Multimeters</li>
            <li className=''>PCB Design Tool</li>
          </ul>
        </div>
        <div className='my-3 col-span-2'>
          <h3 className='text-wrap text-lg mb-2'>Communication Protocols</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>MQTT </li>
            <li className=''>I2C, SPI, UART</li>
            <li className=''>Bluetooth & Wi-Fi</li>
          </ul>
        </div>
        <div className='my-3'>
          <h3 className='text-wrap text-lg mb-2'>Development</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>Keil uVision </li>
            <li className=''>OpenOCD</li>
            <li className=''>JTAG/SWD Debugging</li>
            <li className=''>AWS IOT Core</li>
            <li className=''>VS Code</li>
            <li className=''>ESP IDF</li>
            <li className=''>Git and Github</li>
          </ul>
        </div>

        <div className='my-3'>
          <h3 className='text-wrap text-lg mb-2'>RTOS (Real-Time Operating System)</h3>
          <ul className='list-inside list-disc text-sm font-normal'>
            <li className=''>FreeRTOS</li>
            <li className=''>Zephyr</li>
          </ul>
        </div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default CodingHours
