import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { api } from '@/lib/api'
import { compareStarsTheRepositories } from '@/utils'
import { AxiosError } from 'axios'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

type UserProfileData = {
  id: number
  name: string
  avatar_url: string | null
  bio: string
  email: string | null
  followers: number
  following: number
  twitter_username: string | null
  location: string | null
  blog: string | null
  company: string | null
  login: string | null
}

type Repository = {
  name: string
  description: string | null
  stargazers_count: number
  updated_at: string
  id: number
}

type UserProfileContextData = {
  user: UserProfileData
  repositories: Repository[]
  isLoading: boolean
}

export const UserProfileContext = createContext<UserProfileContextData>(
  {} as UserProfileContextData,
)

interface UserProfileContextProviderProps {
  children: ReactNode
}

export function UserProfileContextProvider(
  props: UserProfileContextProviderProps,
) {
  const [user, setUser] = useState<UserProfileData>({} as UserProfileData)
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { username } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()

  const getUserProfile = useCallback(async () => {
    const response = await api.get<UserProfileData>(`${username}`)

    return response.data
  }, [username])

  const getUserRepositories = useCallback(async () => {
    const response = await api.get<Repository[]>(`${username}/repos`)

    return response.data
  }, [username])

  useEffect(() => {
    setIsLoading(true)

    if (!username) {
      navigate('/home')
    } else {
      Promise.all([getUserProfile(), getUserRepositories()])
        .then(([responseUserProfile, responseRepository]) => {
          const orderByRepositoriesWithStars = responseRepository.sort(
            compareStarsTheRepositories,
          )

          setRepositories(orderByRepositoriesWithStars)
          setUser(responseUserProfile)

          setIsLoading(false)
        })
        .catch((error) => {
          if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
              toast({
                variant: 'destructive',
                title: 'Parece que deu algo errado!',
                description: 'Usuário não encontrado!',
                action: (
                  <ToastAction altText="Tente novamente">
                    Tente Novamente
                  </ToastAction>
                ),
              })

              navigate('/home')
            } else {
              toast({
                variant: 'destructive',
                title: 'Parece que deu algo errado!',
                description: error.response?.data.message,
                action: (
                  <ToastAction altText="Tente novamente">
                    Tente Novamente
                  </ToastAction>
                ),
              })

              /* navigate('/home') */
              setIsLoading(false)
            }
          }
        })
    }
  }, [getUserProfile, getUserRepositories, navigate, username, toast])

  return (
    <UserProfileContext.Provider value={{ user, repositories, isLoading }}>
      {props.children}
    </UserProfileContext.Provider>
  )
}
