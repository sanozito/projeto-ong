# Mãos que Transformam

Site institucional da ONG **Mãos que Transformam**, desenvolvido para apresentar a organização, divulgar seus projetos sociais e receber cadastros de pessoas interessadas em atuar como voluntárias.

## Funcionalidades

- Página inicial com apresentação da ONG e seus objetivos.
- Seção de projetos, doações e formas de participação.
- Formulário de cadastro de voluntários.
- Máscaras para CPF, telefone, CEP e estado.
- Validação de campos obrigatórios, e-mail, CPF e data de nascimento.
- Armazenamento local dos cadastros usando `localStorage`.
- Consulta e remoção dos cadastros registrados no navegador.
- Layout responsivo com Bootstrap e CSS próprio.
- Navegação entre telas usando uma aplicação de página única no JavaScript.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- Git e GitFlow

## Como executar

O projeto não exige instalação de dependências ou servidor de aplicação.

### Opção 1: abrir diretamente

Abra o arquivo `index.html` em um navegador.

### Opção 2: usar um servidor local

Com Python instalado, execute na raiz do projeto:

```bash
python -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

O uso de um servidor local é recomendado para manter o comportamento de carregamento de arquivos consistente no navegador.

## Estrutura do projeto

```text
projeto-ong/
├── cadastro.html       # Atalho para a tela de cadastro
├── index.html          # Página principal
├── projetos.html       # Atalho para a tela de projetos
├── css/
│   └── style.css       # Estilos personalizados
├── docs/
│   └── GITFLOW.md      # Política de versionamento
├── img/
│   └── OngEmAcao.png   # Imagem usada na página inicial
├── js/
│   └── script.js       # Navegação, formulário e validações
└── README.md           # Documentação principal do projeto
```

## Dados dos cadastros

Os cadastros são armazenados no `localStorage` do navegador. Isso significa que:

- os dados ficam disponíveis somente no navegador e dispositivo utilizados;
- limpar os dados do site pode apagar os cadastros;
- os dados não são enviados para um servidor ou banco de dados;
- a solução atual é adequada para demonstração e prototipagem, não para operação em produção.

## Versionamento

O projeto utiliza o fluxo GitFlow com as branches principais:

```text
main
  └── develop
       └── feature/nome-da-tarefa
```

Para consultar o fluxo completo de branches, commits, releases e hotfixes, leia a [documentação GitFlow](docs/GITFLOW.md).

## Próximas melhorias

- Integrar o formulário a uma API e a um banco de dados.
- Adicionar autenticação para consulta de cadastros.
- Publicar informações detalhadas sobre cada projeto.
- Integrar uma solução real de doações.
- Adicionar testes automatizados.

## Status

Projeto em desenvolvimento acadêmico.
