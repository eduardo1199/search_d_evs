import { Repository } from '@/types'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function compareStarsTheRepositories(
  repositoryFirts: Repository,
  repositorySecond: Repository,
) {
  if (repositoryFirts.stargazers_count > repositorySecond.stargazers_count) {
    return -1
  } else if (
    repositoryFirts.stargazers_count < repositorySecond.stargazers_count
  ) {
    return 1
  }

  return 0
}

export function formattedDate(date: string) {
  const parsedDate = new Date(date)

  const formatted = formatDistance(parsedDate, new Date(), {
    locale: ptBR,
  })

  return formatted
}
