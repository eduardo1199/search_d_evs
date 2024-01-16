import { cn } from '@/lib/utils'
import React, { ComponentProps, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          'px-6 py-[10px] rounded-md bg-primary-pink min-w-[180px] hover:bg-opacity-70 transition-all delay-100 focus:ring-2 focus:ring-primary-pink border-none focus:ring-opacity-70 outline-none',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

ButtonComponent.displayName = 'Button'
