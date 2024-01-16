import { api } from '@/lib/api'
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
      navigate('/')
    } else {
      Promise.all([getUserProfile(), getUserRepositories()])
        .then(([responseUserProfile, responseRepository]) => {
          console.log(responseUserProfile, responseRepository)

          setUser(responseUserProfile)
          setRepositories(responseRepository)

          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
    }
  }, [getUserProfile, getUserRepositories, navigate, username])

  console.log(username)

  return (
    <UserProfileContext.Provider value={{ user, repositories, isLoading }}>
      {props.children}
    </UserProfileContext.Provider>
  )
}
