import { cn } from '@tszhong0411/utils'
import * as React from 'react'

type AccentType = React.ComponentPropsWithoutRef<'span'>

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={cn(
        className,
        'transition-colors',
        'from-primary-300/50 via-primary-300/50 to-primary-400/50 rounded-md bg-gradient-to-tr',
        'dark:from-primary-300 dark:to-primary-400 px-1 dark:bg-clip-text dark:px-0 dark:text-transparent'
      )}
    >
      {children}
    </span>
  )
}
