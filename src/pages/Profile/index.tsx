import { Input } from '@/components/Input'
import { SideBar } from './components/SaidBar'
import { Repository } from './components/Repository'
import { useContext } from 'react'
import { UserProfileContext } from '@/context/UserProfile'

export function Profile() {
  const { isLoading, repositories } = useContext(UserProfileContext)

  console.log(isLoading)

  return (
    <div className="w-full h-screen px-[112px] pb-14 mt-5 flex gap-14">
      <SideBar />

      <main className="flex flex-1 flex-col">
        <div className="w-full">
          <Input className="min-w-[590px]" />
        </div>

        <div className="mt-20 flex flex-col gap-4">
          {repositories.map((repo) => {
            return (
              <Repository
                key={repo.id}
                descriptionRepository={repo.description}
                numberOfStars={repo.stargazers_count}
                repositoryName={repo.name}
                update={repo.updated_at}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
