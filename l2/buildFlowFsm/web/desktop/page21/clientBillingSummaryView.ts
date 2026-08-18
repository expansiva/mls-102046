/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page21/clientBillingSummaryView.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingSummaryViewBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';
import type { QryClientBillingSummaryViewOutput } from '/_102046_/l2/buildFlowFsm/web/shared/clientBillingSummaryView.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'overview.title': m['section.clientBillingSummaryView.overview.title'],
  'summary.title': m['organism.clientBillingSummaryView.qryClientBillingSummaryView.title'],
  'summary.list.title': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.title'],
  'summary.empty': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.empty'],
  'client.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientId.label'],
  'project.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.projectId.label'],
  'approvedReferences.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderReferences.label'],
  'invoiceReferences.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoiceReferences.label'],
  'approvedAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.approvedChangeOrderAmount.label'],
  'billableAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.billableAmount.label'],
  'invoicedAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.invoicedAmount.label'],
  'availableAmount.label': m['intent.clientBillingSummaryView.qryClientBillingSummaryView.list.column.clientAvailableAmount.label'],
});
const pageMessage_pt = {
  ...fromShared(sharedMessages['pt'] ?? sharedFallback),
  'context.title': 'Contexto da consulta',
  'context.selected': 'Cliente selecionado em contexto',
  'context.missing': 'Selecione um cliente para consultar o resumo.',
  'action.load': 'Consultar resumo',
  'action.loading': 'Consultando…',
  'feedback.error': 'Não foi possível consultar o resumo de faturamento.',
  'feedback.empty': 'Nenhum resumo de faturamento disponível para este contexto.',
  'references.title': 'Referências financeiras',
  'approvedReferences.empty': 'Nenhuma alteração aprovada referenciada.',
  'invoiceReferences.empty': 'Nenhuma fatura emitida referenciada.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  'context.title': 'Contexto da consulta',
  'context.selected': 'Cliente selecionado em contexto',
  'context.missing': 'Selecione um cliente para consultar o resumo.',
  'action.load': 'Consultar resumo',
  'action.loading': 'Consultando…',
  'feedback.error': 'Não foi possível consultar o resumo de faturamento.',
  'feedback.empty': 'Nenhum resumo de faturamento disponível para este contexto.',
  'references.title': 'Referências financeiras',
  'approvedReferences.empty': 'Nenhuma alteração aprovada referenciada.',
  'invoiceReferences.empty': 'Nenhuma fatura emitida referenciada.',
};
const pageMessage_en: PageMessageType = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  'context.title': 'Query context',
  'context.selected': 'Client selected in context',
  'context.missing': 'Select a client to view the summary.',
  'action.load': 'View summary',
  'action.loading': 'Loading…',
  'feedback.error': 'The billing summary could not be loaded.',
  'feedback.empty': 'No billing summary is available for this context.',
  'references.title': 'Financial references',
  'approvedReferences.empty': 'No approved change orders referenced.',
  'invoiceReferences.empty': 'No issued invoices referenced.',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  'context.title': 'Contexto de la consulta',
  'context.selected': 'Cliente seleccionado en contexto',
  'context.missing': 'Seleccione un cliente para consultar el resumen.',
  'action.load': 'Consultar resumen',
  'action.loading': 'Consultando…',
  'feedback.error': 'No fue posible consultar el resumen de facturación.',
  'feedback.empty': 'No hay un resumen de facturación disponible para este contexto.',
  'references.title': 'Referencias financieras',
  'approvedReferences.empty': 'No hay cambios aprobados referenciados.',
  'invoiceReferences.empty': 'No hay facturas emitidas referenciadas.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page21--client-billing-summary-view-102046')
export class BuildFlowFsmDesktopPage21ClientBillingSummaryViewPage extends BuildFlowFsmClientBillingSummaryViewBase {
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
  <section class="space-y-6 bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]" aria-label=${msg['overview.title']}>
    ${this.renderContext()}
    ${this.renderSummary()}
  </section>`;
}
renderContext() {
const msg = this.msg;
const clientId = this.qryClientBillingSummaryViewClientBillingSummaryClientId;
const loading = this.qryClientBillingSummaryViewState === 'loading';
return html`
  <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]" aria-labelledby="billing-context-title">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 id="billing-context-title" class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['context.title']}</h2>
        <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${clientId ? msg['context.selected'] : msg['context.missing']}</p>
      </div>
      <button
        type="button"
        class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
        ?disabled=${!clientId || loading}
        @click=${(event: Event) => this.handleQryClientBillingSummaryViewClick(event)}>
        ${loading ? msg['action.loading'] : msg['action.load']}
      </button>
    </div>
    ${this.qryClientBillingSummaryViewState === 'error' ? html`<p class="mt-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">${msg['feedback.error']}</p>` : nothing}
  </section>`;
}
renderSummary() {
const msg = this.msg;
const data: QryClientBillingSummaryViewOutput | null = this.qryClientBillingSummaryViewData;
if (this.qryClientBillingSummaryViewState === 'loading') {
  return html`<section class="space-y-4" aria-busy="true"><div class="h-24 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f8fafc)]"></div><div class="h-40 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f8fafc)]"></div></section>`;
}
if (this.qryClientBillingSummaryViewState !== 'success' || data === null) {
  return html`<section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-6 text-sm text-[var(--text-muted,#64748b)]">${msg['feedback.empty']}</section>`;
}
const formatAmount = (value: number): string => new Intl.NumberFormat(document.documentElement.lang || 'pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const references = (value: unknown): string[] => Array.isArray(value) ? value.map((reference: unknown) => String(reference)) : [];
const approvedReferences = references(data.approvedChangeOrderReferences);
const invoiceReferences = references(data.invoiceReferences);
return html`
  <section class="space-y-5" aria-labelledby="billing-summary-title">
    <h2 id="billing-summary-title" class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['summary.title']}</h2>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      ${this.renderMetric(msg['availableAmount.label'], formatAmount(data.clientAvailableAmount), 'text-[var(--status-success-text,#166534)]')}
      ${this.renderMetric(msg['invoicedAmount.label'], formatAmount(data.invoicedAmount), 'text-[var(--text-strong,#0f172a)]')}
      ${this.renderMetric(msg['billableAmount.label'], formatAmount(data.billableAmount), 'text-[var(--text-strong,#0f172a)]')}
      ${this.renderMetric(msg['approvedAmount.label'], formatAmount(data.approvedChangeOrderAmount), 'text-[var(--text-strong,#0f172a)]')}
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
        <h3 class="text-base font-semibold">${msg['references.title']}</h3>
        <dl class="mt-3 space-y-3 text-sm">
          <div><dt class="font-medium text-[var(--text-muted,#64748b)]">${msg['approvedReferences.label']}</dt><dd class="mt-1">${approvedReferences.length ? approvedReferences.join(', ') : msg['approvedReferences.empty']}</dd></div>
          <div><dt class="font-medium text-[var(--text-muted,#64748b)]">${msg['invoiceReferences.label']}</dt><dd class="mt-1">${invoiceReferences.length ? invoiceReferences.join(', ') : msg['invoiceReferences.empty']}</dd></div>
        </dl>
      </article>
      <article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-sm">
        <dl class="space-y-3">
          <div><dt class="text-[var(--text-muted,#64748b)]">${msg['client.label']}</dt><dd class="font-medium">${data.clientId}</dd></div>
          <div><dt class="text-[var(--text-muted,#64748b)]">${msg['project.label']}</dt><dd class="font-medium">${data.projectId}</dd></div>
        </dl>
      </article>
    </div>
  </section>`;
}
renderMetric(label: string, value: string, valueClass: string) {
return html`<article class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"><p class="text-sm text-[var(--text-muted,#64748b)]">${label}</p><p class="mt-2 text-2xl font-bold tabular-nums ${valueClass}">${value}</p></article>`;
}
}
