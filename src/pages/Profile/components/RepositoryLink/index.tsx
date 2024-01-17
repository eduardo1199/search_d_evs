import { Repository } from '@/types'
import { formattedDate } from '@/utils'
import { Star } from '@phosphor-icons/react'

interface RepositoryLinkProps {
  repo: Repository
}

export function RepositoryLink({ repo }: RepositoryLinkProps) {
  const lasUpdateRepository = formattedDate(repo.pushed_at)

  return (
    <a
      className="flex flex-col gap-4 items-start border-b border-gray-200 pb-4 bg-white"
      href={repo.svn_url}
      target="_blank"
      rel="noreferrer"
    >
      <strong className="font-bold text-xl">{repo.name}</strong>

      <p className="text-gray-600 font-normal">
        {repo.description ?? 'Descrição do repositório não informada.'}
      </p>

      <div className="flex gap-2 text-gray-600 text-sm items-center">
        <div className="flex items-center gap-2">
          <Star size={24} />
          <span>{repo.stargazers_count}</span>
        </div>

        <ul>
          <li>Atualizado há {lasUpdateRepository}</li>
        </ul>
      </div>
    </a>
  )
}
