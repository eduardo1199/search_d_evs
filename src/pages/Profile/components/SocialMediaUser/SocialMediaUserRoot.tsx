import { ReactNode } from 'react'

interface SocialMediaUserRootProps {
  children: ReactNode
}

export function SocialMediaUserRoot({ children }: SocialMediaUserRootProps) {
  return <div className="flex gap-2 items-center text-gray-600">{children}</div>
}
