# CAPSLink — Plataforma de Integração CAPS & INSS

## Overview

GovTech platform for administrative integration between CAPS (Centro de Atenção Psicossocial) and INSS (Instituto Nacional do Seguro Social). Manages patients, standardized technical reports, social security processes, team trainings, and performance KPIs.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui + Recharts
- **Routing**: Wouter
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- `artifacts/caps-inss` — React + Vite frontend (preview path: `/`)
- `artifacts/api-server` — Express 5 REST API (preview path: `/api`)

## Key Features

1. **Dashboard** — KPI summary (grant times, denial rates, reworks, litigation)
2. **Pacientes** — Patient management with CAPS records
3. **Relatórios Técnicos** — Standardized INSS-compatible report templates
4. **Processos INSS** — Social security process tracking
5. **Treinamentos** — Team training management
6. **Indicadores** — Performance charts with Recharts

## Database Schema

- `patients` — CAPS patients (nome, CPF, diagnóstico, CID, status, responsável)
- `reports` — Technical reports (tipo, status, conteúdo, dataEnvio)
- `processes` — INSS processes (numeroProcesso, benefício, status, retrabalhos)
- `trainings` — Team trainings (tipo, modalidade, participantes, status)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Notes

- `lib/api-spec/package.json` codegen script patches `lib/api-zod/src/index.ts` after orval runs to avoid duplicate export conflicts
- Seed data includes 8 patients, 9 reports, 9 INSS processes, 6 trainings
