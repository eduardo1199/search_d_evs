import Logo from '@/assets/logo.svg'
import { Button } from '@/components/Button'
import {
  EnvelopeSimple,
  Heart,
  Link,
  MapPin,
  TwitterLogo,
  UsersThree,
  Buildings,
} from '@phosphor-icons/react'
import { SaidBarInfo } from '../SaidBarInfo'

export function SideBar() {
  return (
    <aside className="w-[280px] flex flex-col">
      <div className="w-[190px] h-11">
        <img src={Logo} alt="Search d_evs" className="size-min" />
      </div>

      <div className="flex flex-col gap-4 p-4 mb-10">
        <div className="flex gap-4 mt-20">
          <img src="" alt="profile" />
          <div className="flex flex-col">
            <strong className="text-secondary-black font-bold text-xl">
              Diego Silva
            </strong>
            <span className="text-gray-400 font-normal text-sm">
              @diego.ssilva
            </span>
          </div>
        </div>

        <p className="text-base font-normal text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>

        <div className="flex flex-col gap-2 mb-7">
          <SaidBarInfo icon={<UsersThree size={24} />} text="240 seguidores" />
          <SaidBarInfo icon={<Heart size={24} />} text="24 seguindo" />
        </div>

        <div className="flex flex-col gap-2">
          <SaidBarInfo icon={<Buildings size={24} />} text="Petize" />
          <SaidBarInfo icon={<MapPin size={24} />} text="São Paulo" />
          <SaidBarInfo
            icon={<EnvelopeSimple size={24} />}
            text="diego@petize.com.br"
          />
          <SaidBarInfo icon={<Link size={24} />} text="www.diegosilva.com.br" />
          <SaidBarInfo icon={<TwitterLogo size={24} />} text="@diegosilva" />
        </div>
      </div>
      <Button.Root>
        <Button.Text>Contato</Button.Text>
      </Button.Root>
    </aside>
  )
}
