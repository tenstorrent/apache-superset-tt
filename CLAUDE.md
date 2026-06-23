# CLAUDE.md — apache-superset-tt

## Projeto
Fork/clone do Apache Superset para fins de estudo e testes técnicos (sufixo `-tt`).
Plataforma de business intelligence moderna e open-source para exploração de dados e visualizações interativas.

## Stack
- **Backend**: Python 3.10/3.11, Flask, Flask-AppBuilder, SQLAlchemy, Celery
- **Frontend**: TypeScript/React, Webpack, Jest, Cypress (pasta `superset-frontend/`)
- **Banco de dados**: SQLite (dev) ou PostgreSQL/MySQL (prod) via SQLAlchemy
- **Cache/Filas**: Redis + Celery (opcional para alertas e relatórios assíncronos)
- **Infraestrutura**: Docker Compose (arquivos `docker-compose*.yml`), Helm (pasta `helm/`)

## Estrutura de pastas
```
apache-superset-tt/
├── superset/              # Backend Python (app Flask)
│   ├── config.py          # Configurações centrais
│   ├── app.py             # Factory da aplicação
│   ├── charts/            # API e lógica de gráficos
│   ├── dashboards/        # API e lógica de dashboards
│   └── databases/         # Conectores de banco de dados
├── superset-frontend/     # Frontend React/TypeScript
│   ├── src/               # Código-fonte principal
│   ├── plugins/           # Plugins de visualização
│   └── packages/          # Pacotes superset-ui
├── tests/                 # Testes Python (pytest)
├── requirements/          # Dependências Python (base, development, translations)
├── docker/                # Scripts de inicialização Docker
├── helm/                  # Charts Helm para Kubernetes
└── docs/                  # Documentação
```

## Comandos principais
- **Instalar (backend + frontend)**: `make install`
- **Criar venv**: `make venv && source venv/bin/activate`
- **Rodar backend**: `make flask-app` (porta 8088)
- **Rodar frontend (dev)**: `make node-app` (webpack-dev-server)
- **Rodar via Docker**: `docker compose up` (usa `docker-compose.yml`)
- **Testar (Python)**: `pytest tests/`
- **Testar (JS)**: `cd superset-frontend && npm test`
- **Formatar**: `make format` (black + prettier)
- **Celery worker**: `make report-celery-worker`

## Convenções
- Python 3.10 ou 3.11 obrigatório (`python3.11` tem prioridade no Makefile)
- Linting Python via `pre-commit` (black, flake8); JS via ESLint + Prettier
- Testes Python em `tests/`, arquivos com padrão `test_*.py` ou `*_test.py`
- Variáveis de ambiente Flask em `.flaskenv` (já versionado); configurações customizadas em `superset/config.py`
- Migrações de banco com `superset db upgrade` antes de subir o app
