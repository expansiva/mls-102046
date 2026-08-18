/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/declineChangeOrder.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDeclineChangeOrderBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/declineChangeOrder.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
// 'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
'orders.title': m['intent.declineChangeOrder.qryLocateChangeOrder.list.title'],
'orders.empty': m['intent.declineChangeOrder.qryLocateChangeOrder.list.empty'],
'order.id': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeOrderId.label'],
'order.client': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.clientRef.label'],
'order.project': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.projectRef.label'],
'order.description': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.description.label'],
'order.scope': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scopeImpact.label'],
'order.schedule': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.scheduleImpact.label'],
'order.amount': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.changeAmount.label'],
'order.submitted': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.submittedAt.label'],
'order.forwarded': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
'order.status': m['intent.declineChangeOrder.qryLocateChangeOrder.list.column.status.label'],
'decline.title': m['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.title'],
'decline.action': m['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.action.cmdDeclineChangeOrderDecision'],
'decline.status': m['intent.declineChangeOrder.cmdDeclineChangeOrderDecision.form.field.status.label'],
'handoff.title': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.title'],
'handoff.action': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.action.cmdHandoffDeclinedChangeOrderToFieldCoordinator'],
'handoff.description': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.description.label'],
'handoff.scope': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scopeImpact.label'],
'handoff.schedule': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.scheduleImpact.label'],
'handoff.amount': m['intent.declineChangeOrder.cmdHandoffDeclinedChangeOrderToFieldCoordinator.form.field.changeAmount.label'],
'decline.success': m['action.cmdDeclineChangeOrderDecision.success'],
'decline.error': m['action.cmdDeclineChangeOrderDecision.error'],
'handoff.success': m['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffDeclinedChangeOrderToFieldCoordinator.error'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'queue.count': 'Pedidos aguardando sua decisão',
'queue.select': 'Selecionar ordem',
'queue.loading': 'Carregando ordens pendentes…',
'queue.retry': 'Tentar novamente',
'queue.selected': 'Ordem selecionada',
'queue.none': 'Nada aguardando sua decisão.',
'context.project': 'Projeto atual',
'context.client': 'Cliente relacionado',
'feedback.inProgress': 'Processando…',
'feedback.required': 'Preencha este campo para continuar.',
'feedback.declineFailed': 'Não foi possível recusar esta ordem.',
'feedback.handoffFailed': 'Não foi possível devolver esta decisão ao campo.',
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {
...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
'queue.count': 'Pedidos aguardando sua decisão',
'queue.select': 'Selecionar ordem',
'queue.loading': 'Carregando ordens pendentes…',
'queue.retry': 'Tentar novamente',
'queue.selected': 'Ordem selecionada',
'queue.none': 'Nada aguardando sua decisão.',
'context.project': 'Projeto atual',
'context.client': 'Cliente relacionado',
'feedback.inProgress': 'Processando…',
'feedback.required': 'Preencha este campo para continuar.',
'feedback.declineFailed': 'Não foi possível recusar esta ordem.',
'feedback.handoffFailed': 'Não foi possível devolver esta decisão ao campo.',
};
const pageMessage_en: PageMessageType = {
...fromShared(sharedMessages['en'] ?? sharedFallback),
'queue.count': 'Requests waiting for your decision',
'queue.select': 'Select order',
'queue.loading': 'Loading pending orders…',
'queue.retry': 'Try again',
'queue.selected': 'Selected order',
'queue.none': 'Nothing waiting for your decision.',
'context.project': 'Current project',
'context.client': 'Related client',
'feedback.inProgress': 'Processing…',
'feedback.required': 'Complete this field to continue.',
'feedback.declineFailed': 'This order could not be declined.',
'feedback.handoffFailed': 'This decision could not be returned to the field.',
};
const pageMessage_es: PageMessageType = {
...fromShared(sharedMessages['es'] ?? sharedFallback),
'queue.count': 'Solicitudes pendientes de decisión',
'queue.select': 'Seleccionar orden',
'queue.loading': 'Cargando órdenes pendientes…',
'queue.retry': 'Intentar de nuevo',
'queue.selected': 'Orden seleccionada',
'queue.none': 'No hay nada pendiente de decisión.',
'context.project': 'Proyecto actual',
'context.client': 'Cliente relacionado',
'feedback.inProgress': 'Procesando…',
'feedback.required': 'Completa este campo para continuar.',
'feedback.declineFailed': 'No se pudo rechazar esta orden.',
'feedback.handoffFailed': 'No se pudo devolver esta decisión al campo.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page31--decline-change-order-102046')
export class BuildFlowFsmDesktopPage31DeclineChangeOrderPage extends BuildFlowFsmDeclineChangeOrderBase {
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
return html`<div class="flex flex-col gap-6 text-[var(--text-default,#0f172a)]">
${this.renderQueue()}
${this.renderDecisionPanel()}
</div>`;
}
renderQueue() {
const msg = this.msg;
const rows = this.qryLocateChangeOrderData as unknown as Array<Record<string, unknown>>;
const text = (row: Record<string, unknown>, key: string): string => {
const value = row[key];
return value === null || value === undefined ? '' : String(value);
};
if (this.qryLocateChangeOrderState === 'loading') return html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-4 text-[var(--text-muted,#64748b)]">${msg['queue.loading']}</p>`;
if (this.qryLocateChangeOrderState === 'error') return html`<div class="flex items-center gap-3 rounded-lg bg-[var(--status-error-bg,#fef2f2)] p-4 text-[var(--status-error-text,#991b1b)]"><span>${msg['orders.empty']}</span><button class="rounded-md bg-[var(--button-secondary-bg,#fff)] px-3 py-2 text-[var(--button-secondary-text,#334155)]" @click=${(event: Event) => this.handleQryLocateChangeOrderClick(event)}>${msg['queue.retry']}</button></div>`;
return html`<section class="flex flex-col gap-3" aria-label=${msg['orders.title']}>
<p class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${rows.length} ${msg['queue.count']}</p>
${rows.length === 0 ? html`<p class="rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] p-6 text-[var(--text-muted,#64748b)]">${msg['queue.none']}</p>` : html`<div class="flex flex-col gap-3">${rows.map((row: Record<string, unknown>) => {
const id = text(row, 'changeOrderId');
const selected = id !== '' && id === this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId;
const select = () => {
this.setCmdDeclineChangeOrderDecisionChangeOrderChangeOrderId(id);
this.setCmdDeclineChangeOrderDecisionClientClientId(text(row, 'clientId') || text(row, 'clientClientId'));
this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeOrderChangeOrderId(id);
this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription(text(row, 'description'));
this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact(text(row, 'scopeImpact'));
this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact(text(row, 'scheduleImpact'));
this.setCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount(text(row, 'changeAmount'));
};
return html`<article class="rounded-lg border ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)]' : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#fff)]'} p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.08))]">
<div class="flex flex-wrap items-start justify-between gap-4"><div class="min-w-0"><button class="text-left font-semibold text-[var(--link-text,#2563eb)] underline" @click=${select}>${id || msg['queue.select']}</button><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${text(row, 'description')}</p></div><span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-1 text-sm text-[var(--status-neutral-text,#475569)]">${text(row, 'status')}</span></div>
<div class="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4"><div><div class="text-[var(--text-muted,#64748b)]">${msg['order.client']}</div><div>${text(row, 'clientRef')}</div></div><div><div class="text-[var(--text-muted,#64748b)]">${msg['order.project']}</div><div>${text(row, 'projectRef')}</div></div><div><div class="text-[var(--text-muted,#64748b)]">${msg['order.amount']}</div><div>${text(row, 'changeAmount')}</div></div><div><div class="text-[var(--text-muted,#64748b)]">${msg['order.schedule']}</div><div>${text(row, 'scheduleImpact')}</div></div></div>
${selected ? html`<div class="mt-4 text-sm text-[var(--text-muted,#64748b)]"><span>${msg['queue.selected']}</span> · ${msg['order.scope']}: ${text(row, 'scopeImpact')}</div>` : nothing}
</article>`;})}</div>`}
</section>`;
}
renderDecisionPanel() {
const msg = this.msg;
const selected = this.cmdDeclineChangeOrderDecisionChangeOrderChangeOrderId !== '';
const declineLoading = this.cmdDeclineChangeOrderDecisionState === 'loading';
const handoffLoading = this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'loading';
const declineError = this.cmdDeclineChangeOrderDecisionState === 'error';
const handoffError = this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'error';
if (!selected) return nothing;
return html`<section class="grid gap-6 md:grid-cols-2">
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#fff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['decline.title']}</h2><p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">${msg['order.status']}: ${this.status || this.cmdDeclineChangeOrderDecisionStatus}</p><button class="rounded-md bg-[var(--button-danger-bg,#b91c1c)] px-4 py-2 text-[var(--button-danger-text,#fff)] disabled:opacity-50" ?disabled=${declineLoading} @click=${() => { this.setCmdDeclineChangeOrderDecisionStatus('DECLINED'); return this.cmdDeclineChangeOrderDecision(); }}>${declineLoading ? msg['feedback.inProgress'] : msg['decline.action']}</button>${this.cmdDeclineChangeOrderDecisionState === 'success' ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['decline.success']}</p>` : nothing}${declineError ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdDeclineChangeOrderDecisionError || msg['decline.error']}</p>` : nothing}</div>
<div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#fff)] p-5"><h2 class="mb-4 text-lg font-semibold">${msg['handoff.title']}</h2><div class="flex flex-col gap-3"><label class="text-sm">${msg['handoff.description']}<textarea class="mt-1 min-h-20 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorDescription} @input=${(event: Event) => this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorDescriptionChange(event)}></textarea></label><label class="text-sm">${msg['handoff.scope']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpact} @input=${(event: Event) => this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScopeImpactChange(event)} /></label><label class="text-sm">${msg['handoff.schedule']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpact} @input=${(event: Event) => this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorScheduleImpactChange(event)} /></label><label class="text-sm">${msg['handoff.amount']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#fff)] p-2" .value=${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmount} @input=${(event: Event) => this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorChangeAmountChange(event)} /></label><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#fff)] disabled:opacity-50" ?disabled=${handoffLoading} @click=${(event: Event) => this.handleCmdHandoffDeclinedChangeOrderToFieldCoordinatorClick(event)}>${handoffLoading ? msg['feedback.inProgress'] : msg['handoff.action']}</button>${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorState === 'success' ? html`<p class="text-sm text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}${handoffError ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffDeclinedChangeOrderToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</div></div>
</section>`;
}
}
