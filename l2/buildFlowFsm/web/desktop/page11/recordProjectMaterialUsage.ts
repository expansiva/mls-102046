/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page11/recordProjectMaterialUsage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmRecordProjectMaterialUsageBase, messages as sharedMessages, type MessageType } from '/_102046_/l2/buildFlowFsm/web/shared/recordProjectMaterialUsage.js';
const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];
/// **collab_i18n_start**
const fromShared = (m: MessageType) => ({
'project.section': m['section.recordProjectMaterialUsage.locateProject.title'],
'project.title': m['organism.recordProjectMaterialUsage.qryLocateProject.title'],
'project.list': m['intent.recordProjectMaterialUsage.qryLocateProject.list.title'],
'project.empty': m['intent.recordProjectMaterialUsage.qryLocateProject.list.empty'],
'project.projectId': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.projectId.label'],
'project.clientId': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.clientId.label'],
'project.name': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.name.label'],
'project.address': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.address.label'],
'project.status': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.status.label'],
'project.budget': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.authorizedBudget.label'],
'project.start': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedStartDate.label'],
'project.end': m['intent.recordProjectMaterialUsage.qryLocateProject.list.column.plannedEndDate.label'],
'material.section': m['section.recordProjectMaterialUsage.locateInventoryItem.title'],
'material.title': m['organism.recordProjectMaterialUsage.qryLocateInventoryItem.title'],
'material.list': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.title'],
'material.empty': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.empty'],
'material.id': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.inventoryItemId.label'],
'material.name': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.name.label'],
'material.description': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.description.label'],
'material.unit': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.unitOfMeasure.label'],
'material.cost': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.referenceUnitCost.label'],
'material.status': m['intent.recordProjectMaterialUsage.qryLocateInventoryItem.list.column.status.label'],
'balance.title': m['organism.recordProjectMaterialUsage.qryInventoryBalancePicker.title'],
'balance.list': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.title'],
'balance.empty': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.empty'],
'balance.id': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryBalanceId.label'],
'balance.item': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.inventoryItemId.label'],
'balance.quantity': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.physicalQuantity.label'],
'balance.cost': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.applicableUnitCost.label'],
'balance.status': m['intent.recordProjectMaterialUsage.qryInventoryBalancePicker.list.column.status.label'],
'create.section': m['section.recordProjectMaterialUsage.createMaterialUsage.title'],
'create.title': m['organism.recordProjectMaterialUsage.cmdCreateMaterialUsage.title'],
'create.form': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.title'],
'create.action': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.action.cmdCreateMaterialUsage'],
'create.quantity': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.quantity.label'],
'create.description': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.usageDescription.label'],
'create.date': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.consumedOn.label'],
'create.cost': m['intent.recordProjectMaterialUsage.cmdCreateMaterialUsage.form.field.unitCostBasis.label'],
'handoff.section': m['section.recordProjectMaterialUsage.handoffMaterialUsageToFieldCoordinator.title'],
'handoff.title': m['organism.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.title'],
'handoff.form': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.title'],
'handoff.action': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.action.cmdHandoffMaterialUsageToFieldCoordinator'],
'handoff.quantity': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.quantity.label'],
'handoff.description': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.usageDescription.label'],
'handoff.date': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.consumedOn.label'],
'handoff.cost': m['intent.recordProjectMaterialUsage.cmdHandoffMaterialUsageToFieldCoordinator.form.field.unitCostBasis.label'],
'create.success': m['action.cmdCreateMaterialUsage.success'],
'create.error': m['action.cmdCreateMaterialUsage.error'],
'handoff.success': m['action.cmdHandoffMaterialUsageToFieldCoordinator.success'],
'handoff.error': m['action.cmdHandoffMaterialUsageToFieldCoordinator.error'],
'usage.title': m['section.recordProjectMaterialUsage.usageWorkspace.title'],
'materialUsage.title': m['section.recordProjectMaterialUsage.materialUsageWorkspace.title'],
});
const pageMessage_pt = {
...fromShared(sharedMessages['pt'] ?? sharedFallback),
'page.title': 'Registrar consumo de material',
'context.project': 'Obra em contexto',
'choose.project': 'Selecione uma obra',
'choose.material': 'Selecione um material',
'choose.balance': 'Selecione um saldo',
'loading': 'Carregando…',
'refresh': 'Atualizar',
'submit': 'Registrar consumo',
'notify': 'Informar ao coordenador',
'project.selected': 'Obra selecionada',
'material.selected': 'Material selecionado',
'feedback.dismiss': 'Fechar mensagem',
'no.selection': 'Nenhum registro selecionado.'
};
type PageMessageType = typeof pageMessage_pt;
const pageMessage_pt_br: PageMessageType = {...fromShared(sharedMessages['pt-br'] ?? sharedFallback),...pageMessage_pt};
const pageMessage_en: PageMessageType = {...fromShared(sharedMessages['en'] ?? sharedFallback),'page.title':'Record material usage','context.project':'Project in context','choose.project':'Select a project','choose.material':'Select a material','choose.balance':'Select a balance','loading':'Loading…','refresh':'Refresh','submit':'Record usage','notify':'Inform coordinator','project.selected':'Selected project','material.selected':'Selected material','feedback.dismiss':'Dismiss message','no.selection':'No record selected.'};
const pageMessage_es: PageMessageType = {...fromShared(sharedMessages['es'] ?? sharedFallback),'page.title':'Registrar consumo de material','context.project':'Obra en contexto','choose.project':'Seleccione una obra','choose.material':'Seleccione un material','choose.balance':'Seleccione un saldo','loading':'Cargando…','refresh':'Actualizar','submit':'Registrar consumo','notify':'Informar al coordinador','project.selected':'Obra seleccionada','material.selected':'Material seleccionado','feedback.dismiss':'Cerrar mensaje','no.selection':'Ningún registro seleccionado.'};
const pageMessages: { [key: string]: PageMessageType } = { 'pt': pageMessage_pt, 'pt-br': pageMessage_pt_br, 'en': pageMessage_en, 'es': pageMessage_es };
/// **collab_i18n_end**
const pageFallback = pageMessages[Object.keys(pageMessages)[0]];
@customElement('build-flow-fsm--web--desktop--page11--record-project-material-usage-102046')
export class BuildFlowFsmDesktopPage11RecordProjectMaterialUsagePage extends BuildFlowFsmRecordProjectMaterialUsageBase {
#msgLang: string | null = null;
#msgCache: PageMessageType = pageFallback;
protected get msg(): PageMessageType { const lang = (document.documentElement.lang || '').toLowerCase(); if (lang !== this.#msgLang) { this.#msgLang = lang; this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback; } return this.#msgCache; }
render() { const msg = this.msg; return html`<main class="min-h-full bg-[var(--page-bg,#ffffff)] text-[var(--text-default,#0f172a)]"><div class="max-w-6xl mx-auto px-4 py-6 space-y-6"><h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>${this.renderProjectPicker()}${this.renderMaterialPicker()}${this.renderCreateForm()}${this.renderHandoffForm()}</div></main>`; }
renderProjectPicker() { const msg = this.msg; const rows = this.qryLocateProjectData; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['project.title']}</h2><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateProjectClick(event)} ?disabled=${this.qryLocateProjectState === 'loading'}>${this.qryLocateProjectState === 'loading' ? msg['loading'] : msg['refresh']}</button></div><h3 class="mt-4 font-medium">${msg['project.list']}</h3>${rows.length === 0 ? html`<p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['project.empty']}</p>` : html`<div class="mt-3 overflow-x-auto"><table class="min-w-full text-sm"><thead><tr>${[['project.projectId','projectId'],['project.clientId','clientId'],['project.name','name'],['project.address','address'],['project.status','status'],['project.budget','authorizedBudget'],['project.start','plannedStartDate'],['project.end','plannedEndDate']].map(([label]) => html`<th class="px-3 py-2 text-left">${msg[label as keyof PageMessageType]}</th>`)}</tr></thead><tbody>${rows.map((row) => html`<tr class="border-t border-[var(--border-subtle,#e2e8f0)]"><td class="px-3 py-2">${row.projectId}</td><td class="px-3 py-2">${row.clientId}</td><td class="px-3 py-2">${row.name}</td><td class="px-3 py-2">${row.address}</td><td class="px-3 py-2">${row.status}</td><td class="px-3 py-2">${row.authorizedBudget}</td><td class="px-3 py-2">${row.plannedStartDate}</td><td class="px-3 py-2">${row.plannedEndDate}</td></tr>`)}</tbody></table></div>`}</section>`; }
renderMaterialPicker() { const msg = this.msg; const rows = this.qryLocateInventoryItemData; const balances = this.qryInventoryBalancePickerData; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><div class="flex items-center justify-between"><h2 class="text-lg font-semibold">${msg['material.title']}</h2><div class="flex gap-2"><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryLocateInventoryItemClick(event)} ?disabled=${this.qryLocateInventoryItemState === 'loading'}>${this.qryLocateInventoryItemState === 'loading' ? msg['loading'] : msg['refresh']}</button><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${(event: Event) => this.handleQryInventoryBalancePickerClick(event)} ?disabled=${this.qryInventoryBalancePickerState === 'loading'}>${this.qryInventoryBalancePickerState === 'loading' ? msg['loading'] : msg['balance.list']}</button></div></div><h3 class="mt-4 font-medium">${msg['material.list']}</h3>${rows.length === 0 ? html`<p class="mt-2 text-[var(--text-muted,#64748b)]">${msg['material.empty']}</p>` : html`<div class="mt-3 grid gap-3 md:grid-cols-2">${rows.map((row) => html`<button class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left hover:bg-[var(--surface-alt-bg,#f8fafc)]" @click=${() => this.setCmdCreateMaterialUsageInventoryItemInventoryItemId(String(row.inventoryItemId))}><div class="font-medium">${row.name}</div><div class="text-sm text-[var(--text-muted,#64748b)]">${row.description} · ${row.unitOfMeasure} · ${row.referenceUnitCost}</div></button>`)}</div>`}<div class="mt-4"><h3 class="font-medium">${msg['balance.title']}</h3>${balances.length === 0 ? html`<p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['balance.empty']}</p>` : html`<div class="mt-2 grid gap-2 md:grid-cols-2">${balances.map((row) => html`<button class="rounded-md border border-[var(--border-subtle,#e2e8f0)] p-3 text-left" @click=${() => this.setCmdCreateMaterialUsageInventoryBalanceInventoryBalanceId(String(row.inventoryBalanceId))}>${row.inventoryBalanceId} · ${row.inventoryItemId} · ${row.physicalQuantity} · ${row.applicableUnitCost} · ${row.status}</button>`)}</div>`}</div></section>`; }
renderCreateForm() { const msg = this.msg; const loading = this.cmdCreateMaterialUsageState === 'loading'; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['create.title']}</h2><p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['context.project']}: ${this.cmdCreateMaterialUsageProjectProjectId}</p><form class="mt-4 grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdCreateMaterialUsageClick(event); }}><label>${msg['create.quantity']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdCreateMaterialUsageQuantity} @input=${(event: Event) => this.handleCmdCreateMaterialUsageQuantityChange(event)} required></label><label>${msg['create.date']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdCreateMaterialUsageConsumedOn} @input=${(event: Event) => this.handleCmdCreateMaterialUsageConsumedOnChange(event)} required></label><label>${msg['create.cost']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" step="any" .value=${this.cmdCreateMaterialUsageUnitCostBasis} @input=${(event: Event) => this.handleCmdCreateMaterialUsageUnitCostBasisChange(event)} required></label><label class="md:col-span-2">${msg['create.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${(event: Event) => this.handleCmdCreateMaterialUsageUsageDescriptionChange(event)} required>${this.cmdCreateMaterialUsageUsageDescription}</textarea></label><button class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] md:col-span-2" type="submit" ?disabled=${loading || !this.cmdCreateMaterialUsageProjectProjectId}>${loading ? msg['loading'] : msg['create.action']}</button></form>${this.cmdCreateMaterialUsageState === 'success' ? html`<p class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['create.success']}</p>` : nothing}${this.cmdCreateMaterialUsageState === 'error' ? html`<p class="mt-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdCreateMaterialUsageError || msg['create.error']}</p>` : nothing}</section>`; }
renderHandoffForm() { const msg = this.msg; const loading = this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'loading'; return html`<section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"><h2 class="text-lg font-semibold">${msg['handoff.title']}</h2><form class="mt-4 grid gap-4 md:grid-cols-2" @submit=${(event: Event) => { event.preventDefault(); this.handleCmdHandoffMaterialUsageToFieldCoordinatorClick(event); }}><label>${msg['handoff.quantity']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorQuantity} @input=${(event: Event) => this.handleCmdHandoffMaterialUsageToFieldCoordinatorQuantityChange(event)} required></label><label>${msg['handoff.date']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="date" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorConsumedOn} @input=${(event: Event) => this.handleCmdHandoffMaterialUsageToFieldCoordinatorConsumedOnChange(event)} required></label><label>${msg['handoff.cost']}<input class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" type="number" step="any" .value=${this.cmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasis} @input=${(event: Event) => this.handleCmdHandoffMaterialUsageToFieldCoordinatorUnitCostBasisChange(event)} required></label><label class="md:col-span-2">${msg['handoff.description']}<textarea class="mt-1 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] p-2" @input=${(event: Event) => this.handleCmdHandoffMaterialUsageToFieldCoordinatorUsageDescriptionChange(event)} required>${this.cmdHandoffMaterialUsageToFieldCoordinatorUsageDescription}</textarea></label><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)] md:col-span-2" type="submit" ?disabled=${loading || !this.cmdHandoffMaterialUsageToFieldCoordinatorMaterialUsageMaterialUsageId}>${loading ? msg['loading'] : msg['handoff.action']}</button></form>${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'success' ? html`<p class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] p-3 text-[var(--status-success-text,#166534)]">${msg['handoff.success']}</p>` : nothing}${this.cmdHandoffMaterialUsageToFieldCoordinatorState === 'error' ? html`<p class="mt-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] p-3 text-[var(--status-error-text,#991b1b)]">${this.cmdHandoffMaterialUsageToFieldCoordinatorError || msg['handoff.error']}</p>` : nothing}</section>`; }
}