# Politica de Versionamento GitFlow

Este documento define como o projeto ONG deve organizar branches, commits, releases e correcoes. O objetivo e manter o historico rastreavel, reduzir conflitos e permitir que a branch de producao contenha apenas versoes prontas para entrega.

## 1. Pre-requisitos

- Git instalado e configurado com nome e e-mail:

```bash
git config --global user.name "Sanrics"
git config --global user.email "josericardosb572@gmail.com"
```

- A branch `main` representa o que esta publicado ou aprovado para publicacao.
- A branch `develop` representa a proxima versao em integracao.
- Todo trabalho deve ser feito em uma branch temporaria criada a partir da branch correta.
- Nunca faca `push` direto em `main` ou `develop` quando o repositorio tiver revisao por Pull Request.

## 2. Modelo de branches

| Branch | Finalidade | Origem | Destino |
|---|---|---|---|
| `main` | Versao estavel/producao | Inicial ou `release/*`/`hotfix/*` | Publicacao |
| `develop` | Integracao da proxima versao | `main` no inicio | `feature/*` e `release/*` |
| `feature/<nome>` | Nova funcionalidade | `develop` | `develop` |
| `release/<versao>` | Preparacao de uma versao | `develop` | `main` e `develop` |
| `hotfix/<versao>` | Correcao urgente em producao | `main` | `main` e `develop` |

Use nomes curtos, em minusculas, separados por hifens. Exemplos:

```text
feature/formulario-contato
feature/galeria-projetos
release/1.2.0
hotfix/1.2.1
```

## 3. Regra de versao

Use Versionamento Semantico no formato `MAJOR.MINOR.PATCH`:

- `MAJOR`: mudanca incompativel ou quebra de comportamento existente.
- `MINOR`: nova funcionalidade compativel com o que ja existe.
- `PATCH`: correcao compativel de bug, texto, estilo ou ajuste interno.

Exemplos:

```text
1.0.0 -> primeira versao estavel
1.1.0 -> nova funcionalidade compativel
1.1.1 -> correcao de bug
2.0.0 -> mudanca que quebra compatibilidade
```

Antes da primeira versao estavel, pode-se usar `0.x.y`, mas a equipe deve registrar essa decisao no Pull Request.

## 4. Configuracao inicial do repositorio

Execute uma vez, na pasta do projeto:

```bash
git init
git add .
git commit -m "chore: cria estrutura inicial do projeto"
git branch -M main
git switch -c develop
git remote add origin URL_DO_REPOSITORIO

git push -u origin main
git push -u origin develop
```

Se o repositorio remoto ja possuir commits, clone-o em vez de executar `git init`:

```bash
git clone URL_DO_REPOSITORIO
cd projeto-ong
git switch -c develop origin/develop
```

## 5. Inicio de qualquer trabalho

Atualize as referencias remotas e a branch de integracao antes de criar uma branch:

```bash
git fetch origin
git switch develop
git pull --ff-only origin develop
git switch -c feature/nome-da-tarefa
```

O uso de `--ff-only` evita criar merges locais acidentais durante a atualizacao.

## 6. Fluxo de uma feature

### 6.1 Desenvolvimento

```bash
git switch feature/nome-da-tarefa
# edite e teste os arquivos
git status
git diff
```

Faça commits pequenos e completos. Cada commit deve deixar o projeto em estado compreensivel:

```bash
git add index.html css/style.css
git commit -m "feat: adiciona secao de projetos"
git push -u origin feature/nome-da-tarefa
```

### 6.2 Atualizacao com `develop`

Antes de abrir ou atualizar o Pull Request:

```bash
git fetch origin
git switch develop
git pull --ff-only origin develop
git switch feature/nome-da-tarefa
git merge --no-ff develop
```

Resolva conflitos manualmente, teste e conclua:

```bash
git add arquivos-resolvidos
git commit
```

Se houver duvida sobre um conflito, nao escolha automaticamente um lado. Verifique a intencao das duas alteracoes.

### 6.3 Pull Request para `develop`

O Pull Request deve conter:

- objetivo e resumo da mudanca;
- arquivos ou paginas afetadas;
- passos usados para testar;
- capturas de tela quando houver alteracao visual;
- referencia da tarefa, quando existir;
- informacao sobre migracoes ou configuracoes necessarias.

Checklist minimo antes do merge:

- [ ] O projeto abre sem erros no navegador.
- [ ] Links, formularios e scripts afetados foram testados.
- [ ] A alteracao foi revisada por outra pessoa, quando possivel.
- [ ] Nao existem arquivos temporarios ou credenciais no commit.
- [ ] O branch esta atualizado com `develop`.

Aprovado o Pull Request, faca o merge com `--no-ff` quando essa opcao estiver disponivel, para preservar o ponto de integracao da feature. Depois, remova a branch remota.

## 7. Preparacao de uma release

Quando `develop` tiver um conjunto coerente de funcionalidades para entrega:

```bash
git fetch origin
git switch develop
git pull --ff-only origin develop
git switch -c release/1.1.0
git push -u origin release/1.1.0
```

Na `release`, aceite apenas ajustes de preparacao:

- correcao de bugs encontrados na validacao;
- atualizacao de numero ou data da versao;
- ajustes de documentacao;
- ajustes de configuracao de entrega.

Nao inclua novas funcionalidades na `release`. Para cada correcao:

```bash
git add .
git commit -m "fix: corrige validacao do formulario de cadastro"
git push
```

### 7.1 Fechamento da release

Depois da validacao final, abra dois Pull Requests, ou execute o equivalente com revisao:

1. `release/1.1.0` para `main`.
2. `release/1.1.0` para `develop`, para devolver os ajustes de release.

Na `main`, crie a tag anotada e publique:

```bash
git switch main
git pull --ff-only origin main
git merge --no-ff release/1.1.0 -m "release: publica a versao 1.1.0"
git tag -a v1.1.0 -m "Versao 1.1.0"
git push origin main
git push origin v1.1.0
```

Depois, sincronize `develop` caso o merge tenha sido feito localmente:

```bash
git switch develop
git pull --ff-only origin develop
git merge --no-ff release/1.1.0 -m "chore: sincroniza ajustes da release 1.1.0"
git push origin develop
git branch -d release/1.1.0
git push origin --delete release/1.1.0
```

A tag e imutavel na pratica: se houver erro depois da publicacao, crie uma nova versao `PATCH` em vez de mover a tag existente.

## 8. Hotfix de producao

Use hotfix somente para problemas que precisam ser corrigidos antes da proxima release:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch -c hotfix/1.1.1
git push -u origin hotfix/1.1.1
```

Corrija, teste e registre:

```bash
git add .
git commit -m "fix: corrige envio do formulario em producao"
git push
```

Feche o hotfix nos dois destinos:

```bash
git switch main
git pull --ff-only origin main
git merge --no-ff hotfix/1.1.1 -m "hotfix: publica a versao 1.1.1"
git tag -a v1.1.1 -m "Versao 1.1.1"
git push origin main v1.1.1

git switch develop
git pull --ff-only origin develop
git merge --no-ff hotfix/1.1.1 -m "chore: sincroniza hotfix 1.1.1"
git push origin develop
```

Remova a branch depois da revisao:

```bash
git branch -d hotfix/1.1.1
git push origin --delete hotfix/1.1.1
```

## 9. Padrao de commits

Use uma categoria curta e uma descricao no imperativo:

```text
feat: adiciona cadastro de voluntario
fix: corrige validacao de e-mail
docs: documenta fluxo de versionamento
style: ajusta espacamento da pagina inicial
refactor: reorganiza funcoes do formulario
test: adiciona teste do cadastro
chore: atualiza configuracao do projeto
```

Boas praticas:

- um objetivo por commit;
- primeira linha curta e objetiva;
- nao inclua senhas, tokens ou dados pessoais;
- nao use mensagens genericas como `alteracoes`, `teste` ou `final`;
- prefira corrigir o commit local antes do Pull Request, quando isso nao apagar trabalho compartilhado.

## 10. Comandos de conferencia

```bash
# Branch atual e estado dos arquivos
git status

# Historico resumido
git log --oneline --decorate --graph --all

# Diferenca em relacao a develop
git diff develop...HEAD

# Tags existentes
git tag --list

# Verificar commits que ainda nao foram enviados
git log origin/develop..HEAD --oneline
```

## 11. Regras de protecao recomendadas

Configure no servidor Git, quando disponivel:

- exigir Pull Request para `main` e `develop`;
- exigir pelo menos uma aprovacao em `main`;
- exigir que os checks de validacao passem;
- bloquear push forcado e exclusao de `main`;
- permitir tags de release apenas para responsaveis autorizados;
- exigir branch atualizada antes do merge.

## 12. Resumo rapido

```text
feature/* -> develop -> release/* -> main
                                      |
                                tag vX.Y.Z

main -> hotfix/* -> main e develop
```

Em caso de duvida, preserve estas invariantes: `main` deve estar estavel, `develop` deve conter a integracao da proxima entrega, e toda mudanca deve ser rastreavel a uma branch e a um commit com mensagem clara.
