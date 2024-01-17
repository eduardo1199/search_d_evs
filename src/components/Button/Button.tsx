import { cn } from '@/lib/utils'
import { CircleNotch } from '@phosphor-icons/react'
import React, { ComponentProps, ReactNode } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  isSubmitted?: boolean
}

export const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isSubmitted, type, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          'flex justify-center px-6 py-[10px] rounded-md bg-primary-pink min-w-[180px] hover:bg-opacity-70 transition-all delay-100 focus:ring-2 focus:ring-primary-pink border-none focus:ring-opacity-70 outline-none',
          className,
        )}
        ref={ref}
        {...props}
      >
        {isSubmitted ? (
          <CircleNotch
            className="animate-spin text-white"
            size={24}
            width="bold"
          />
        ) : (
          children
        )}
      </button>
    )
  },
)

ButtonComponent.displayName = 'Button'
