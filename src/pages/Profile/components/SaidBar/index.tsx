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
import { UserProfileContext } from '@/context/UserProfile'
import { useContext } from 'react'
import { Skeleton } from '@/components/Skeleton'
import { SocialMediaUser } from '@/pages/Profile/components/SocialMediaUser'

export function SideBar() {
  const { isLoading, user } = useContext(UserProfileContext)

  return (
    <aside className="w-[280px] flex flex-col">
      <div className="flex flex-col gap-4 p-4 mb-10 bg-gray-white">
        {isLoading ? (
          <div className="flex gap-4">
            <Skeleton className="w-14 h-10 rounded-full" />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="w-full h-9" />
              <Skeleton className="w-full h-5" />
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
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
          <p className="text-base font-normal text-gray-600 mb-6">
            {user.bio ?? 'Não informado'}
          </p>
        )}

        {isLoading ? (
          <div className="flex flex-col gap-2 mb-7">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        ) : (
          <div className="flex flex-col gap-2 mb-7">
            <SocialMediaUser.Root>
              <UsersThree size={24} />
              <SocialMediaUser.Label>{`${user.followers} seguidores`}</SocialMediaUser.Label>
            </SocialMediaUser.Root>
            <SocialMediaUser.Root>
              <Heart size={24} />
              <SocialMediaUser.Label>{`${user.following} seguindo`}</SocialMediaUser.Label>
            </SocialMediaUser.Root>
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
            <SocialMediaUser.Root>
              <Buildings size={24} />
              <SocialMediaUser.Label>
                {user.company ?? 'Não informado'}
              </SocialMediaUser.Label>
            </SocialMediaUser.Root>

            <SocialMediaUser.Root>
              <MapPin size={24} />
              <SocialMediaUser.Label>
                {user.location ?? 'Não informado'}
              </SocialMediaUser.Label>
            </SocialMediaUser.Root>

            <SocialMediaUser.Root>
              <EnvelopeSimple size={24} />
              <SocialMediaUser.Label>
                {user.email ?? 'Não informado'}
              </SocialMediaUser.Label>
            </SocialMediaUser.Root>

            <SocialMediaUser.Root>
              <Link size={24} />
              <SocialMediaUser.Link href={user.blog ? user.blog : undefined}>
                {user.blog ? user.blog : 'Não informado'}
              </SocialMediaUser.Link>
            </SocialMediaUser.Root>

            <SocialMediaUser.Root>
              <TwitterLogo size={24} />
              <SocialMediaUser.Link
                href={
                  user.twitter_username
                    ? `https://twitter.com/${user.twitter_username}`
                    : undefined
                }
              >
                {user.twitter_username
                  ? `@${user.twitter_username}`
                  : 'Não informado'}
              </SocialMediaUser.Link>
            </SocialMediaUser.Root>
          </div>
        )}
      </div>
      <Button.Root>
        <Button.Text>Contato</Button.Text>
      </Button.Root>
    </aside>
  )
}
