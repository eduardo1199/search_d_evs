# Search d_evs

## Projeto voltado para o desafio técnico da Petize

O sistema search d_evs consiste em um software de busca de usuários o github utilizando o nome do profile. Na primeira página de rota ‘/home’ é possível pesquisar por um usuário do github utilizando a api do github.

A segunda página mostra todas as informações do perfil do usuário pesquisado, mostrando informações como email, nome do perfil, cidade ou país e seus repositórios do perfil.

## Instalação e inicialização

O projeto foi criado com Vite ([https://vitejs.dev/](https://vitejs.dev/)) com versão do node 18.14.2, utilizando o gerenciador de pacotes NPM, na sua versão 9.5.0. Para iniciar a instalação do projeto, basta dar um clone no repositório, abrir o terminal do desenvolvedor e executar:

<aside>
💡 npm install

</aside>

As configurações do vite foram aplicadas da seguinte maneira, de forma que o server abre o sistema diretamente na rota home, para iniciar a busca por um usuário desejado.

```
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

Em seguida, após a instalação, basta executar:

<aside>
💡 npm run dev

</aside>

O sistema abrirá diretamente na rota home na porta [http://localhost:5173/](http://localhost:5173/).

## Build de deploy

Para executar a build do projeto, basta executar o comando no terminal.

<aside>
💡 npm run build

</aside>

uma pasta build será criada na raiz do projeto com todo código gerado pela aplicação. O sistema possui URL de produção na vercel. Qualquer commit realizado na branch main será atualizado.

produção ⇒ [https://search-d-evs-beta.vercel.app/home](https://search-d-evs-beta.vercel.app/home)

## Padrões de commits

No projeto utilizei o husky para padrões de commit. Atualmente o projeto se encontra com 2 branchs (develop e main). Utilizei a lib @commitlint/config-conventional como padrão de commit durante o desenvolvimento, então para novas implementação no branch develop, deve-se utilizar o padrão de commit @commitlint/config-conventional

<aside>
💡

```
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

</aside>

exemplo de uso: git commit -m “fet: new implementation”. O husky executará o camando abaixo a seguir:

<aside>
💡 "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",

</aside>

realizando um parse lint em todos os arquivos com extensão ts e tsx. 

## Pacotes e motivações de uso

### TailwindCSS

Para o desenvolvimento do projeto, foi utilizado alguma pacotes de terceiros para facilitar na implementação. O primeiro deles para uso de aplicação de estilos e layouts foi o TailwindCSS ([https://tailwindcss.com/](https://tailwindcss.com/)). O TailwindCSS é fácil utilidade quando temos projetos que precisam serem desenvolvidos de rápida escala e ágil. Suas configurações permitem uma aplicação simples de temas de cores e animações. O arquivo tailwind.config.ts foi configurado da seguinte maneira:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    colors: {
      'primary-pink': '#8C19D2',
      'primary-black': '#000000',
      'secondary-black': '#171923',
      'primary-blue': '#0069CA',
      white: '#FFFFFF',
      'gray-100': '#FCFCFC',
      'gray-200': '#E2E8F0',
      'gray-400': '#A0AEC0',
      'gray-600': '#4A5568',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
```

A principal motivação para uso do TailwindCSS foi devido a flexibilidade de aplicação de estilo, sem muito uso de arquivos de estilos, fácil aplicação. Caso ocorresse o uso de uma biblioteca de material designer, como MaterialUI, eu teria que adaptar os estilos dos componentes para uso no projeto. Além disso, o bundle da aplicação aumentaria devido a quantidade de componentes que não seriam utilizados no projeto. 

### react-router-dom

Para roteamento das páginas SPA, utilizei o react router dom com a seguinte configuração:

```
<Routes>
  <Route path="/">
    <Route index element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route
      path="/perfil/:username"
      element={
        <UserProfileContextProvider>
          <Profile />
        </UserProfileContextProvider>
      }
    />
  </Route>
</Routes>
```

A rota perfil recebe um parâmetro obrigatório de genérico, que consiste no username pesquisado pelo usuário na página home.

### date-fns

Utilizei mais um pacote chamado date-fns, para formatação de datas na aplicação. A formatação ocorre no componente de RepositoryLink, onde no rodapé existe o tempo da última modificação registrada no repositório. A função para formatação ocorre da seguinte maneira:

```
export function formattedDate(dateIsoString: string) {
  const parsedDate = new Date(dateIsoString)

  const currentDate = new Date()

  const formatted = formatDistance(parsedDate, currentDate, {
    locale: ptBR,
  })

  return formatted
}
```

### axios

Para requisições HTTP, utilizei o axios como ponte de acesso a API do github, criei uma função api que tem como baseURL a API do github. 

```
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
})
```

A URL poderia ter sido criada com variável de ambiente, mas para uso simplificado e direto, utilizei a URL publica para facilitar o acesso em ambos os ambientes.

### RadixUI

O Radix UI e Shadcns são pacotes de componentes baseados no tailwindCSS. A grande motivação de uso é a fácil aplicação, uso de componentes primitivos com grande acessbilidade. Além disso, você é capaz de escolher alguns componentes especifícos para uso. Por exemplo, o componente utilizado do Radix foi o Toast. 

A instalação é feita via comando, então ocorre a leitura da pasta indicada, dessa forma, a instalação do componente é feita via código.

## Modelo de implementação

Alguns patters foram utilizados nesse projeto, o exemplo de um deles foi a utilização do patters de composição. 

```
import { SocialMediaUserLabel } from './SocialMediaUserLabel'
import { SocialMediaUserLink } from './SocialMediaUserLink'
import { SocialMediaUserRoot } from './SocialMediaUserRoot'

export const SocialMediaUser = {
  Root: SocialMediaUserRoot,
  Label: SocialMediaUserLabel,
  Link: SocialMediaUserLink,
}
```

O componente SocialMedia presente na SideBar é um componente que foi decomposto em outros componentes de composição. É muito efiente quando possuimos um componente com grandes variações. O exemplo de uso foi para o informações do usuário onde poderia ser apenas visual ou um link de alguma rede social, porém com mesmo estilo. Então, o patter de composição é útil para essas variações.