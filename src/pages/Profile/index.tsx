import { Input } from '@/components/Input'
import { SideBar } from './components/SaidBar'
import { Repository } from './components/Repository'

export function Profile() {
  return (
    <div className="w-full h-screen px-[112px] pb-14 mt-5 flex gap-14">
      <SideBar />

      <main className="flex flex-1 flex-col">
        <div className="w-full">
          <Input className="min-w-[590px]" />
        </div>

        <div className="mt-20 flex flex-col gap-4">
          <Repository
            repositoryName="Repositório nome"
            descriptionRepository="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus."
            numberOfStars={100}
            update="Atualizado há 2 dias"
          />
          <Repository
            repositoryName="Repositório nome"
            descriptionRepository="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus."
            numberOfStars={100}
            update="Atualizado há 2 dias"
          />
          <Repository
            repositoryName="Repositório nome"
            descriptionRepository="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus."
            numberOfStars={100}
            update="Atualizado há 2 dias"
          />
          <Repository
            repositoryName="Repositório nome"
            descriptionRepository="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus."
            numberOfStars={100}
            update="Atualizado há 2 dias"
          />
          <Repository
            repositoryName="Repositório nome"
            descriptionRepository="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus."
            numberOfStars={100}
            update="Atualizado há 2 dias"
          />
        </div>
      </main>
    </div>
  )
}
