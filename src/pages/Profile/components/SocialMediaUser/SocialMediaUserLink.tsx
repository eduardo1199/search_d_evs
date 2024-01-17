import { ComponentProps, ReactNode } from 'react'

interface SocialMediaUserLinkProps extends ComponentProps<'a'> {
  children: ReactNode
}

export function SocialMediaUserLink({
  children,
  ...props
}: SocialMediaUserLinkProps) {
  return (
    <a
      className="text-base font-normal no-underline"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}
