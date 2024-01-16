import { Star } from '@phosphor-icons/react'

interface RepositoryProps {
  repositoryName: string
  descriptionRepository: string | null
  numberOfStars: number
  update: string
}

export function Repository({
  repositoryName,
  descriptionRepository,
  numberOfStars,
  update,
}: RepositoryProps) {
  return (
    <div className="flex flex-col gap-4 items-start border-b border-gray-200 pb-4">
      <strong className="font-bold text-xl">{repositoryName}</strong>

      <p className="text-gray-600 font-normal">
        {descriptionRepository ?? 'Descrição do repositório não informado.'}
      </p>

      <div className="flex gap-2 text-gray-600 text-sm items-center">
        <div className="flex items-center gap-2">
          <Star size={24} />
          <span>{numberOfStars}</span>
        </div>

        <ul>
          <li>{update}</li>
        </ul>
      </div>
    </div>
  )
}
