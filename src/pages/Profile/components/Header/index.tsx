import { Input } from '@/components/Input'
import { useNavigate, useParams } from 'react-router-dom'

import Logo from '@/assets/logo.svg'
import { ArrowLeft } from '@phosphor-icons/react'

export function Header() {
  const { username } = useParams()

  const navigation = useNavigate()

  function handleNavigateToHomePage() {
    navigation('/home')
  }

  return (
    <header className="flex px-[112px] gap-[120px] items-center bg-white py-5">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Search d_evs"
          className="size-min max-w-[190px] max-h-11"
        />
      </div>

      <div className="flex gap-4 w-full">
        <button onClick={handleNavigateToHomePage}>
          <ArrowLeft size={25} className="text-primary-pink" />
        </button>
        <Input className="max-w-[590px]" value={username} autoFocus />
      </div>
    </header>
  )
}
