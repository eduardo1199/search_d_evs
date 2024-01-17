import { SideBar } from './components/SaidBar'
import { Repository } from './components/Repository'
import { useContext } from 'react'
import { UserProfileContext } from '@/context/UserProfile'
import { Skeleton } from '@/components/Skeleton'
import { Header } from './components/Header'

export function Profile() {
  const { isLoading, repositories } = useContext(UserProfileContext)

  return (
    <div className="w-full h-screen pb-14 flex flex-col bg-gray-100">
      <Header />

      <main className="flex w-full gap-8 px-[112px] mt-20">
        <SideBar />

        <div className="flex flex-col gap-4 w-full flex-1">
          {!isLoading &&
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
              })}

          {isLoading &&
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
