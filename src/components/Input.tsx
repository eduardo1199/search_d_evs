import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

export interface InputProps extends ComponentProps<'input'> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex flex-1 px-4 py-[10px] h-12 tex-center bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-primary-pink text-lg font-normal text-primary-black text-opacity-35',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
