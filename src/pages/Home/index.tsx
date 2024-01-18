import Logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  async function handleSearchSubmit(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    navigate(`/perfil/${search}`)
  }

  return (
    <div className="bg-white w-full h-screen flex max-w-[1440px] justify-center items-center mx-auto">
      <div className="w-full flex flex-col gap-14 justify-center items-center">
        <img src={Logo} alt="Search d_evs" className="size-fit sm:w-[240px]" />

        <form
          className="w-full flex sm:flex-col gap-9 justify-center items-center px-3"
          onSubmit={handleSearchSubmit}
        >
          <Input
            placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
          />

          <Button.Root type="submit" className="sm:w-full">
            <Button.Text>Search</Button.Text>
          </Button.Root>
        </form>
      </div>
    </div>
  )
}
