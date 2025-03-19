import { cn } from '@tszhong0411/utils'
import { type LinkProps } from 'next/link'

export type UnstyledLinkProps = {
  href: string
  children: React.ReactNode
  openNewTab?: boolean
  className?: string
  ariaLabel?: string
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ariaLabel,
  ...rest
}: UnstyledLinkProps) {
  // const isNewTab =
  //   openNewTab === undefined ? href && !href.startsWith('/') && !href.startsWith('#') : openNewTab

  // if (!isNewTab) {
  //   return (
  //     <Link href={href}>
  //       <a {...rest} className={className}>
  //         {children}
  //       </a>
  //     </Link>
  //   )
  // }

  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={href}
      aria-label={ariaLabel}
      {...rest}
      className={cn(className, 'cursor-newtab')}
    >
      {children}
    </a>
  )
}
