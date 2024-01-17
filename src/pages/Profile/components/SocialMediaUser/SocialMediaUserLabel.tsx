import { ReactNode } from 'react'

interface SocialMediaUserLabelProps {
  children: ReactNode
}

export function SocialMediaUserLabel({ children }: SocialMediaUserLabelProps) {
  return <span className="text-base font-normal">{children}</span>
}
