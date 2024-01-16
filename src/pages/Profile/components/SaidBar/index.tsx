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
import { UserProfileContext } from '@/context/UserProfile'
import { useContext } from 'react'
import { Skeleton } from '@/components/Skeleton'

export function SideBar() {
  const { isLoading, user } = useContext(UserProfileContext)

  return (
    <aside className="w-[280px] flex flex-col">
      <div className="w-[190px] h-11">
        <img src={Logo} alt="Search d_evs" className="size-min" />
      </div>

      <div className="flex flex-col gap-4 p-4 mb-10">
        {isLoading ? (
          <div className="flex gap-4 mt-20">
            <Skeleton className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="w-full h-9" />
              <Skeleton className="w-full h-5" />
            </div>
          </div>
        ) : (
          <div className="flex gap-4 mt-20">
            <img
              src={user.avatar_url!}
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <strong className="text-secondary-black font-bold text-xl">
                {user.name}
              </strong>
              <span className="text-gray-400 font-normal text-sm">
                @{user.login}
              </span>
            </div>
          </div>
        )}

        {isLoading ? (
          <Skeleton className="w-full h-20" />
        ) : (
          <p className="text-base font-normal text-gray-600 mb-6">{user.bio}</p>
        )}

        {isLoading ? (
          <div className="flex flex-col gap-2 mb-7">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        ) : (
          <div className="flex flex-col gap-2 mb-7">
            <SaidBarInfo
              icon={<UsersThree size={24} />}
              text={`${user.followers} seguidores`}
            />
            <SaidBarInfo
              icon={<Heart size={24} />}
              text={`${user.following} seguindo`}
            />
          </div>
        )}

        {isLoading ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <SaidBarInfo icon={<Buildings size={24} />} text={null} />
            <SaidBarInfo icon={<MapPin size={24} />} text={user.location} />
            <SaidBarInfo
              icon={<EnvelopeSimple size={24} />}
              text={user.email}
            />
            <SaidBarInfo icon={<Link size={24} />} text={user.blog} />
            <SaidBarInfo
              icon={<TwitterLogo size={24} />}
              text={`@${user.twitter_username}`}
            />
          </div>
        )}
      </div>
      <Button.Root>
        <Button.Text>Contato</Button.Text>
      </Button.Root>
    </aside>
  )
}
