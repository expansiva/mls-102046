/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/forwardChangeOrderForClientApproval.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { messages, BuildFlowFsmForwardChangeOrderForClientApprovalBase } from '/_102046_/l2/buildFlowFsm/web/shared/forwardChangeOrderForClientApproval.js';

const collab_i18n_pt = {
  'page.title': messages['pt']['section.forwardChangeOrderForClientApproval.locateChangeOrder.title'],
  'orders.title': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.title'],
  'orders.empty': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.empty'],
  'orders.changeOrderId': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeOrderId.label'],
  'orders.clientRef': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.clientRef.label'],
  'orders.projectRef': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.projectRef.label'],
  'orders.description': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.description.label'],
  'orders.scopeImpact': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scopeImpact.label'],
  'orders.scheduleImpact': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.scheduleImpact.label'],
  'orders.changeAmount': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.changeAmount.label'],
  'orders.submittedAt': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.submittedAt.label'],
  'orders.forwardedAt': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.forwardedForClientApprovalAt.label'],
  'orders.status': messages['pt']['intent.forwardChangeOrderForClientApproval.qryLocateChangeOrder.list.column.status.label'],
  'handoff.title': messages['pt']['section.forwardChangeOrderForClientApproval.handoffChangeOrderToClient.title'],
  'form.title': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.title'],
  'form.action': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.action.cmdHandoffChangeOrderToClient'],
  'form.description': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.description.label'],
  'form.scopeImpact': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scopeImpact.label'],
  'form.scheduleImpact': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.scheduleImpact.label'],
  'form.changeAmount': messages['pt']['intent.forwardChangeOrderForClientApproval.cmdHandoffChangeOrderToClient.form.field.changeAmount.label'],
  'action.success': messages['pt']['action.cmdHandoffChangeOrderToClient.success'],
  'action.error': messages['pt']['action.cmdHandoffChangeOrderToClient.error'],
} as const;

type CollabI18n = typeof collab_i18n_pt;
const collab_i18n: { pt: CollabI18n } = { pt: collab_i18n_pt };

function field(row: unknown, name: string): string {
  if (typeof row !== 'object' || row === null) return '';
  const value = (row as Record<string, unknown>)[name];
  if (value === null || value === undefined) return '';
  return typeof value === 'string' ? value : String(value);
}

@customElement('build-flow-fsm--web--desktop--page11--forward-change-order-for-client-approval-102046')
export class BuildFlowFsmDesktopPage11ForwardChangeOrderForClientApprovalPage extends BuildFlowFsmForwardChangeOrderForClientApprovalBase {
  private get msg(): CollabI18n {
    return collab_i18n.pt;
  }

  render() {
    return html`
      <main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderOrders()}
          ${this.renderHandoff()}
        </div>
      </main>
    `;
  }

  renderHeader() {
    const msg = this.msg;
    return html`
      <header>
        <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      </header>
    `;
  }

  renderOrders() {
    const msg = this.msg;
    const rows = this.qryLocateChangeOrderData ?? [];
    const loading = this.qryLocateChangeOrderState === 'loading';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['orders.title']}</h2>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] px-3 py-2"
            @click=${this.handleQryLocateChangeOrderClick}
            ?disabled=${loading}
          >${loading ? msg['orders.title'] : msg['orders.title']}</button>
        </div>
        ${loading ? html`<div class="h-24 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]" aria-busy="true"></div>` : nothing}
        ${!loading && rows.length === 0 ? html`<p class="text-[var(--text-muted,#64748b)]">${msg['orders.empty']}</p>` : nothing}
        ${!loading && rows.length > 0 ? html`
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm">
              <thead>
                <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                  <th class="px-3 py-2">${msg['orders.changeOrderId']}</th>
                  <th class="px-3 py-2">${msg['orders.clientRef']}</th>
                  <th class="px-3 py-2">${msg['orders.projectRef']}</th>
                  <th class="px-3 py-2">${msg['orders.description']}</th>
                  <th class="px-3 py-2">${msg['orders.scopeImpact']}</th>
                  <th class="px-3 py-2">${msg['orders.scheduleImpact']}</th>
                  <th class="px-3 py-2">${msg['orders.changeAmount']}</th>
                  <th class="px-3 py-2">${msg['orders.submittedAt']}</th>
                  <th class="px-3 py-2">${msg['orders.forwardedAt']}</th>
                  <th class="px-3 py-2">${msg['orders.status']}</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map((row: unknown) => html`
                  <tr class="border-b border-[var(--border-subtle,#e2e8f0)] align-top">
                    <td class="px-3 py-2">
                      <button type="button" class="text-[var(--link-text,#2563eb)] underline" @click=${() => this.setCmdHandoffChangeOrderToClientChangeOrderChangeOrderId(field(row, 'changeOrderId'))}>${field(row, 'changeOrderId')}</button>
                    </td>
                    <td class="px-3 py-2">${field(row, 'clientRef')}</td>
                    <td class="px-3 py-2">${field(row, 'projectRef')}</td>
                    <td class="px-3 py-2">${field(row, 'description')}</td>
                    <td class="px-3 py-2">${field(row, 'scopeImpact')}</td>
                    <td class="px-3 py-2">${field(row, 'scheduleImpact')}</td>
                    <td class="px-3 py-2">${field(row, 'changeAmount')}</td>
                    <td class="px-3 py-2">${field(row, 'submittedAt')}</td>
                    <td class="px-3 py-2">${field(row, 'forwardedForClientApprovalAt')}</td>
                    <td class="px-3 py-2">${field(row, 'status')}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        ` : nothing}
      </section>
    `;
  }

  renderHandoff() {
    const msg = this.msg;
    const busy = this.cmdHandoffChangeOrderToClientState === 'loading';
    const selected = this.cmdHandoffChangeOrderToClientChangeOrderChangeOrderId;
    const rows = this.qryLocateChangeOrderData ?? [];
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['handoff.title']}</h2>
        <form class="space-y-4" @submit=${this.handleCmdHandoffChangeOrderToClientClick}>
          <h3 class="font-medium">${msg['form.title']}</h3>
          <div>
            <label class="block text-sm font-medium" for="change-order-id">${msg['orders.changeOrderId']}</label>
            <select id="change-order-id" class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${selected} @change=${this.handleCmdHandoffChangeOrderToClientChangeOrderChangeOrderIdChange}>
              <option value="">${msg['orders.empty']}</option>
              ${rows.map((row: unknown) => { const id = field(row, 'changeOrderId'); return html`<option value=${id}>${id}</option>`; })}
            </select>
          </div>
          ${this.renderInput('description', msg['form.description'], this.cmdHandoffChangeOrderToClientDescription, this.handleCmdHandoffChangeOrderToClientDescriptionChange)}
          ${this.renderInput('scope-impact', msg['form.scopeImpact'], this.cmdHandoffChangeOrderToClientScopeImpact, this.handleCmdHandoffChangeOrderToClientScopeImpactChange)}
          ${this.renderInput('schedule-impact', msg['form.scheduleImpact'], this.cmdHandoffChangeOrderToClientScheduleImpact, this.handleCmdHandoffChangeOrderToClientScheduleImpactChange)}
          ${this.renderInput('change-amount', msg['form.changeAmount'], this.cmdHandoffChangeOrderToClientChangeAmount, this.handleCmdHandoffChangeOrderToClientChangeAmountChange, 'number')}
          <button type="submit" class="rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] px-4 py-2" ?disabled=${busy || selected.length === 0}>${busy ? msg['form.action'] : msg['form.action']}</button>
        </form>
        ${this.cmdHandoffChangeOrderToClientState === 'success' ? html`<details open class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-3"><summary>${msg['action.success']}</summary><p>${msg['action.success']}</p></details>` : nothing}
        ${this.cmdHandoffChangeOrderToClientState === 'error' ? html`<details open class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] p-3"><summary>${msg['action.error']}</summary><p>${this.cmdHandoffChangeOrderToClientError || msg['action.error']}</p></details>` : nothing}
      </section>
    `;
  }

  renderInput(id: string, label: string, value: string, handler: (event: Event) => void, type = 'text') {
    return html`
      <div>
        <label class="block text-sm font-medium" for=${id}>${label}</label>
        <input id=${id} type=${type} required class="mt-1 w-full rounded-md border border-[var(--border-default,#cbd5e1)] bg-[var(--input-bg,#ffffff)] px-3 py-2" .value=${value} @input=${handler} />
      </div>
    `;
  }
}
