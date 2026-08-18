/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/projectTimelineView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectTimelineViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';
import type { QryProjectTimelineViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/projectTimelineView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  overviewTitle: m['section.projectTimelineView.overview.title'],
  queryTitle: m['organism.projectTimelineView.qryProjectTimelineView.title'],
  listTitle: m['intent.projectTimelineView.qryProjectTimelineView.list.title'],
  listEmpty: m['intent.projectTimelineView.qryProjectTimelineView.list.empty'],
  projectIdLabel: m['intent.projectTimelineView.qryProjectTimelineView.list.column.projectId.label'],
  workTasksLabel: m['intent.projectTimelineView.qryProjectTimelineView.list.column.workTasks.label'],
  scheduleEntriesLabel: m['intent.projectTimelineView.qryProjectTimelineView.list.column.scheduleEntries.label'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  context: 'Projeto em contexto',
  consult: 'Consultar cronograma',
  loading: 'Carregando cronograma…',
  error: 'Não foi possível carregar o cronograma.',
  noProject: 'Selecione um projeto no contexto para consultar o cronograma.',
  project: 'Projeto',
  tasks: 'Tarefas',
  schedule: 'Prazos e entradas',
  details: 'Detalhes',
  status: 'Status',
  progress: 'Progresso',
  date: 'Prazo',
  item: 'Item',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  context: 'Projeto em contexto',
  consult: 'Consultar cronograma',
  loading: 'Carregando cronograma…',
  error: 'Não foi possível carregar o cronograma.',
  noProject: 'Selecione um projeto no contexto para consultar o cronograma.',
  project: 'Projeto',
  tasks: 'Tarefas',
  schedule: 'Prazos e entradas',
  details: 'Detalhes',
  status: 'Status',
  progress: 'Progresso',
  date: 'Prazo',
  item: 'Item',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  context: 'Project in context',
  consult: 'View timeline',
  loading: 'Loading timeline…',
  error: 'The timeline could not be loaded.',
  noProject: 'Select a project in context to view its timeline.',
  project: 'Project',
  tasks: 'Tasks',
  schedule: 'Deadlines and entries',
  details: 'Details',
  status: 'Status',
  progress: 'Progress',
  date: 'Deadline',
  item: 'Item',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  context: 'Proyecto en contexto',
  consult: 'Consultar cronograma',
  loading: 'Cargando cronograma…',
  error: 'No fue posible cargar el cronograma.',
  noProject: 'Seleccione un proyecto en el contexto para consultar el cronograma.',
  project: 'Proyecto',
  tasks: 'Tareas',
  schedule: 'Plazos y entradas',
  details: 'Detalles',
  status: 'Estado',
  progress: 'Progreso',
  date: 'Plazo',
  item: 'Elemento',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--project-timeline-view-102046')
export class BuildFlowFsmDesktopPage21ProjectTimelineViewPage extends BuildFlowFsmProjectTimelineViewBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
/** i18n catalog — resolved once per language, refreshed only when the document language changes. */
protected get msg(): PageMessageType {
const lang = (document.documentElement.lang || '').toLowerCase();
if (lang !== this.#msgLang) {
this.#msgLang = lang;
this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
}
return this.#msgCache;
}
/** Main render. Split the page into render<Name>() methods and call them from here. */
render() {
const msg = this.msg;
return html`
  <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)] p-6">
    <section class="mx-auto max-w-7xl space-y-6" aria-labelledby="timeline-overview">
      <div class="flex flex-col gap-4 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['context']}</p>
          <h1 id="timeline-overview" class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['overviewTitle']}</h1>
          <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${this.qryProjectTimelineViewProjectTimelineProjectId || msg['noProject']}</p>
        </div>
        <button
          type="button"
          class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
          ?disabled=${!this.qryProjectTimelineViewProjectTimelineProjectId || this.qryProjectTimelineViewState === 'loading'}
          @click=${(event: Event) => this.handleQryProjectTimelineViewClick(event)}>
          ${this.qryProjectTimelineViewState === 'loading' ? msg['loading'] : msg['consult']}
        </button>
      </div>
      ${this.renderTimeline()}
    </section>
  </main>`;
}
renderTimeline() {
const msg = this.msg;
if (this.qryProjectTimelineViewState === 'loading') {
  return html`<section class="space-y-4" aria-busy="true" aria-label=${msg['loading']}>
    <div class="h-8 w-64 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="h-40 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
      <div class="h-40 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
    </div>
  </section>`;
}
if (this.qryProjectTimelineViewState === 'error') {
  return html`<section class="rounded-lg border border-[var(--status-error-bg,#fee2e2)] bg-[var(--surface-bg,#ffffff)] p-5 text-[var(--status-error-text,#b91c1c)]" role="alert">${msg['error']}</section>`;
}
const data: QryProjectTimelineViewOutput | null = this.qryProjectTimelineViewData;
if (!data) {
  return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 text-[var(--text-muted,#64748b)]">${msg['listEmpty']}</section>`;
}
const source: Record<string, unknown> = Object.fromEntries(Object.entries(data));
const toRecord = (value: unknown): Record<string, unknown> | null => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return null;
  return Object.fromEntries(Object.entries(value));
};
const display = (value: unknown): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
  return '';
};
const dateValue = (row: Record<string, unknown>): string => {
  const candidate = row['dueDate'] ?? row['endDate'] ?? row['deadline'] ?? row['scheduledDate'] ?? row['date'] ?? row['startDate'];
  return display(candidate);
};
const rowName = (row: Record<string, unknown>): string => display(row['name'] ?? row['title'] ?? row['taskName'] ?? row['description'] ?? row['id']);
const rowsFor = (value: unknown): Record<string, unknown>[] => Array.isArray(value) ? value.map((entry: unknown) => toRecord(entry)).filter((entry: Record<string, unknown> | null): entry is Record<string, unknown> => entry !== null).sort((a: Record<string, unknown>, b: Record<string, unknown>) => dateValue(a).localeCompare(dateValue(b))) : [];
const tasks = rowsFor(source['workTasks']);
const entries = rowsFor(source['scheduleEntries']);
const renderRows = (rows: Record<string, unknown>[], label: string) => rows.length === 0 ? nothing : html`<div class="space-y-3">${rows.map((row: Record<string, unknown>, index: number) => html`
  <article class="grid gap-3 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:grid-cols-[minmax(0,1fr)_auto]">
    <div class="min-w-0"><p class="font-semibold text-[var(--text-strong,#0f172a)]">${rowName(row) || `${label} ${index + 1}`}</p><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${display(row['status']) || msg['details']}</p></div>
    <div class="text-left md:text-right"><p class="text-sm font-semibold tabular-nums text-[var(--text-default,#0f172a)]">${dateValue(row)}</p><p class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${display(row['progress']) ? `${msg['progress']}: ${display(row['progress'])}` : msg['date']}</p></div>
  </article>`)}</div>`;
return html`<section class="space-y-5">
  <div><h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['queryTitle']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['projectIdLabel']}: ${display(source['projectId']) || this.qryProjectTimelineViewProjectTimelineProjectId}</p></div>
  <div class="grid gap-5 lg:grid-cols-2">
    <section class="space-y-3" aria-label=${msg['tasks']}><h3 class="text-base font-semibold">${msg['workTasksLabel']}</h3>${renderRows(tasks, msg['item'])}</section>
    <section class="space-y-3" aria-label=${msg['schedule']}><h3 class="text-base font-semibold">${msg['scheduleEntriesLabel']}</h3>${renderRows(entries, msg['item'])}</section>
  </div>
</section>`;
}
}
