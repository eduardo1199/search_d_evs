type Repository = {
  name: string
  description: string | null
  stargazers_count: number
  updated_at: string
  id: number
}

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
