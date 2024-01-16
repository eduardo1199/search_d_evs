import { cn } from '@/lib/utils'
import { Search } from 'lucide-react'
import React, { ComponentProps } from 'react'

export interface InputProps extends ComponentProps<'input'> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex flex-1 px-4 py-[10px] h-12 tex-center bg-white border border-gray-200 rounded-md outline-none text-lg font-normal text-primary-black text-opacity-35 border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-primary-pink">
        <Search className="mr-2 cursor-text" />
        <input
          type={type}
          className={cn(
            'w-full placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'
