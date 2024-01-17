import { Input } from '@/components/Input'
import { SideBar } from './components/SaidBar'
import { Repository } from './components/Repository'
import { useContext } from 'react'
import { UserProfileContext } from '@/context/UserProfile'
import { useParams } from 'react-router-dom'
import { Skeleton } from '@/components/Skeleton'

export function Profile() {
  const { isLoading, repositories } = useContext(UserProfileContext)

  const { username } = useParams()

  return (
    <div className="w-full h-screen px-[112px] pb-14 mt-5 flex gap-14">
      <SideBar />

      <main className="flex flex-1 flex-col">
        <div className="w-full">
          <Input className="min-w-[590px]" value={username} autoFocus />
        </div>

        <div className="mt-20 flex flex-col gap-4">
          {isLoading ? (
            Array(10)
              .fill(null)
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-b border-gray-200 pb-4"
                  >
                    <Skeleton className="h-28 w-full" />
                  </div>
                )
              })
          ) : (
            <></>
          )}

          {!isLoading &&
            repositories.map((repo) => {
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
