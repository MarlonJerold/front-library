'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Page() {
  const [activeSection, setActiveSection] = useState('sumario')

  const sections = [
    { id: 'sumario', title: 'Sumário' },
    { id: 'requisitos', title: 'Requisitos' },
    { id: 'instalacao', title: 'Instalação' },
    { id: 'uso', title: 'Uso' },
    { id: 'excecoes', title: 'Exceções e Tratamento de Erros' },
    { id: 'contribuindo', title: 'Contribuindo' },
    { id: 'licenca', title: 'Licença' },
    { id: 'contato', title: 'Contato' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 15C22 18.866 18.866 22 15 22C11.134 22 8 18.866 8 15C8 11.134 11.134 8 15 8C18.866 8 22 11.134 22 15Z" fill="currentColor"/>
            <path d="M15 10C13.3431 10 12 11.3431 12 13V17C12 18.6569 13.3431 20 15 20C16.6569 20 18 18.6569 18 17V13C18 11.3431 16.6569 10 15 10Z" fill="white"/>
            <path d="M5 9C6.65685 9 8 7.65685 8 6C8 4.34315 6.65685 3 5 3C3.34315 3 2 4.34315 2 6C2 7.65685 3.34315 9 5 9Z" fill="currentColor"/>
          </svg>
          <span className="text-xl font-bold">BskyAgent</span>
        </div>
        <nav className="mt-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block px-4 py-2 text-sm ${
                activeSection === section.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">BskyAgent</h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Uma biblioteca Java para interagir com a API do Bsky de forma simples e eficaz
            </p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <section id="sumario" className={activeSection === 'sumario' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Sumário</h2>
              <ul className="list-disc list-inside">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="requisitos" className={activeSection === 'requisitos' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Requisitos</h2>
              <ul className="list-disc list-inside">
                <li>Java 8 ou superior</li>
                <li>OkHttp para realizar requisições HTTP</li>
                <li>JSON-java para manipulação de JSON</li>
                <li>Jackson para deserialização de JSON em objetos Java</li>
              </ul>
            </section>

            <section id="instalacao" className={activeSection === 'instalacao' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Instalação</h2>
              <ol className="list-decimal list-inside">
                <li>Clone o repositório:</li>
              </ol>
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                <code>git clone https://github.com/MarlonJerold/bskyAgent.git</code>
              </pre>
              <p className="mt-4">Adicione a seguinte dependência ao seu arquivo pom.xml:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
                <code>{`<dependency>
    <groupId>org.bluesky</groupId>
    <artifactId>bluesky-library</artifactId>
    <version>1.0.0</version>
</dependency>`}</code>
              </pre>
            </section>

            <section id="uso" className={activeSection === 'uso' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Uso</h2>
              <Tabs defaultValue="autenticacao">
                <TabsList>
                  <TabsTrigger value="autenticacao">Autenticação</TabsTrigger>
                  <TabsTrigger value="createPost">CreatePost</TabsTrigger>
                  <TabsTrigger value="getProfile">GetProfile</TabsTrigger>
                  <TabsTrigger value="getPostThread">GetPostThread</TabsTrigger>
                </TabsList>
                <TabsContent value="autenticacao">
                  <Card>
                    <CardHeader>
                      <CardTitle>Autenticação</CardTitle>
                      <CardDescription>Como autenticar com o BskyAgent</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                        <code>{`String handle = "seu-handle";
String appPassword = "sua-senha-de-app";
BskyAgent agent = new BskyAgent(handle, appPassword);`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="createPost">
                  <Card>
                    <CardHeader>
                      <CardTitle>CreatePost</CardTitle>
                      <CardDescription>Como criar um post usando BskyAgent</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                        <code>{`String texto = "Olá, Bsky!";
agent.createPost(texto);`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="getProfile">
                  <Card>
                    <CardHeader>
                      <CardTitle>GetProfile</CardTitle>
                      <CardDescription>Como obter o perfil de um usuário</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                        <code>{`String actor = "patinho.tech";
Profile profile = agent.getProfile(actor);`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="getPostThread">
                  <Card>
                    <CardHeader>
                      <CardTitle>GetPostThread</CardTitle>
                      <CardDescription>Como obter uma thread de posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
                        <code>{`agent.getPostThread("url do Post");`}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>

            <section id="excecoes" className={activeSection === 'excecoes' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Exceções e Tratamento de Erros</h2>
              <p>
                BskyAgent lança IOException em caso de falha nas requisições HTTP ou problemas na comunicação com a API.
                Certifique-se de tratar essas exceções adequadamente no seu código para lidar com falhas de rede ou
                respostas inesperadas da API.
              </p>
            </section>

            <section id="contribuindo" className={activeSection === 'contribuindo' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Contribuindo</h2>
              <p className="mb-4">
                Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. Antes de contribuir,
                por favor leia o guia de contribuição.
              </p>
              <ol className="list-decimal list-inside">
                <li>Faça um fork do projeto</li>
                <li>Crie uma nova branch: <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">git checkout -b my-feature</code></li>
                <li>Faça suas mudanças e commit: <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">git commit -m 'Add my feature'</code></li>
                <li>Envie para a branch original: <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">git push origin my-feature</code></li>
                <li>Abra um pull request</li>
              </ol>
            </section>

            <section id="licenca" className={activeSection === 'licenca' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Licença</h2>
              <p>
                Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
              </p>
            </section>

            <section id="contato" className={activeSection === 'contato' ? '' : 'hidden'}>
              <h2 className="text-2xl font-bold mb-4">Contato</h2>
              <p>
                Para dúvidas, sugestões ou feedback, você pode entrar em contato através de jeroldmarlon5@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Table of contents */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4 hidden lg:block">
        <h3 className="text-lg font-semibold mb-4">Nesta página</h3>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <nav>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block py-1 text-sm ${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </div>
  )
}