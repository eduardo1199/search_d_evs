import { cn } from '@/lib/utils'
import { ComponentProps, ReactNode } from 'react'

interface TextButton extends ComponentProps<'span'> {
  children: ReactNode
}

export const TextButton = ({ className, children, ...props }: TextButton) => {
  return (
    <span className={cn('text-white font-semibold', className)} {...props}>
      {children}
    </span>
  )
}
