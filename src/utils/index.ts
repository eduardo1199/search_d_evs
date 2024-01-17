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

export function formattedDate(dateIsoString: string) {
  const parsedDate = new Date(dateIsoString)

  const currentDate = new Date()

  const formatted = formatDistance(parsedDate, currentDate, {
    locale: ptBR,
  })

  return formatted
}
