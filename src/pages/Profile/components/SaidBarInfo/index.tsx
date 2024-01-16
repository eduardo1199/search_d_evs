import { ReactNode } from 'react'

interface SaidBarInfoProps {
  icon: ReactNode
  text: string | null
}

export function SaidBarInfo({ icon, text }: SaidBarInfoProps) {
  return (
    <div className="flex gap-2 items-center text-gray-600">
      {icon}
      <span className="text-base font-normal">{text}</span>
    </div>
  )
}
