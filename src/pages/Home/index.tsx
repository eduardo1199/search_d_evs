import Logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  async function handleSearchSubmit() {
    if (!search.trim()) {
      return
    }

    navigate(`/perfil/${search}`)
  }

  return (
    <div className="bg-white w-full h-screen flex max-w-[1440px] justify-center items-center mx-auto">
      <div className="w-full flex flex-col gap-14 justify-center items-center">
        <img src={Logo} alt="Search d_evs" className="size-fit" />

        <div className="w-full flex gap-9 justify-center items-center px-3">
          <Input
            placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button.Root type="button" onClick={handleSearchSubmit}>
            <Button.Text>Search</Button.Text>
          </Button.Root>
        </div>
      </div>
    </div>
  )
}
