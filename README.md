# 102046 · BuildFlow FSM (client app)

Part of **collab.codes**.

`102046` is a **generated client application** (`projectType: "client"`) and one
of the largest in `mls-base` (~1140 `.ts` files). It is the pt-BR / ns4 run of
BuildFlow FSM.

> **buildFlowFsm** — *"Apoiar empresas de construção, reforma e serviços de
> campo nos EUA no custeio de obras, na coordenação da equipe de campo e na
> comunicação profissional com o cliente."*

Core entities: Project, WorkTask, Material/Inventory, TimeLog, ChangeOrder,
Invoice. Actors: project manager, field coordinator, field worker.

## Layout

| layer | content |
|---|---|
| `l4/buildFlowFsm/` | the ns4 solution model: `module.defs.ts`, `siteMap.defs.ts`, `workspace-model.defs.ts` (256 KB), plus `ontology/`, `journeys/`, `rules/`, `operations/`, `workflows/`, `usecases/`, `access/`, `contracts/`, `composition/`, `workspaces/`, `pipeline/` |
| `l1/buildFlowFsm/` | generated backend |
| `l2/buildFlowFsm/web/` | generated frontend pages |
| `l4/trace/`, `l2/…/trace/` | pipeline traces: `cb-health-report.json`, `cb-judge-findings-*`, `cb-cost.json`, `cb-repair-state.json` |

Masters: frontend `102020` → runtime `102033`; backend `102021` → runtime `102034`.

Last activity: 2026-08-22.

## Notes

- Its `l1` is the reference "good backend" this repo measures new guards against.
- `l4/trace/` is generation evidence, not application code.
