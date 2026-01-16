# Gestão de Equipamentos - CGTI

Sistema de gerenciamento de equipamentos (Notebooks e Impressoras) para o CGTI.

## Funcionalidades

- Cadastro de equipamentos (Notebook e Impressora).
- Listagem de equipamentos com status e responsável.
- Paginação com Pagy.
- Monitoramento de performance com Rack Mini Profiler (Ambiente de Desenvolvimento).
- Interface estilizada com Tailwind CSS.

## Tecnologias

- Ruby on Rails 8
- PostgreSQL
- Tailwind CSS
- Docker & Docker Compose

## Como Rodar

1.  Clone o repositório.
2.  Suba os containers: `docker-compose up -d`.
3.  Instale as dependências: `bundle install`.
4.  Configure o banco de dados: `rails db:setup`.
5.  Inicie o servidor: `rails s -b 127.0.0.1`.
