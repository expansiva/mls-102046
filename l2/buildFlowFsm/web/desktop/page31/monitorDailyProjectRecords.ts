/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/monitorDailyProjectRecords.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmMonitorDailyProjectRecordsBase,
  messages,
  type MessageType,
} from '/_102046_/l2/buildFlowFsm/web/shared/monitorDailyProjectRecords.js';

const collab_i18n_pt = messages['pt'];
type CollabI18n = MessageType;
const collab_i18n: { pt: CollabI18n } = { pt: collab_i18n_pt };

@customElement('monitor-daily-project-records--desktop--page31--monitor-daily-project-records-102046')
export class MonitorDailyProjectRecordsDesktopPage31MonitorDailyProjectRecordsPage extends BuildFlowFsmMonitorDailyProjectRecordsBase {
  get msg(): CollabI18n {
    return collab_i18n.pt;
  }

  render() {
    const msg = this.msg;
    const asRecord = (value: unknown): Record<string, unknown> | null => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return value as Record<string, unknown>;
      }
      return null;
    };
    const display = (value: unknown): string => {
      if (value === null || value === undefined) return '';
      if (Array.isArray(value)) {
        return value.map((item: unknown) => display(item)).join(', ');
      }
      if (typeof value === 'object') return JSON.stringify(value);
      return String(value);
    };
    const idList = (value: unknown): string[] => {
      if (Array.isArray(value)) {
        return value.map((item: unknown) => display(item)).filter((item: string) => item.length > 0);
      }
      if (typeof value === 'string' && value.length > 0) return [value];
      return [];
    };
    const valueFrom = (row: unknown, names: string[]): unknown => {
      const record = asRecord(row);
      if (record === null) return undefined;
      for (const name of names) {
        if (record[name] !== undefined && record[name] !== null) return record[name];
      }
      return undefined;
    };
    const locateRows = this.qryLocateProjectData;
    const selectedProjectId = this.qryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId;
    const overview = asRecord(this.qryInspectProjectExecutionOverviewData);
    const overviewRows = overview === null
      ? []
      : Object.values(overview).find((value: unknown) => Array.isArray(value)) as unknown[] | undefined ?? [];
    const timeLogRecord = asRecord(this.qryInspectProjectTimeLogsData);
    const timeLogRows = timeLogRecord === null
      ? []
      : Object.values(timeLogRecord).find((value: unknown) => Array.isArray(value)) as unknown[] | undefined ?? [];
    const materialRecord = asRecord(this.qryInspectProjectMaterialUsagesData);
    const materialRows = materialRecord === null
      ? []
      : Object.values(materialRecord).find((value: unknown) => Array.isArray(value)) as unknown[] | undefined ?? [];
    const overviewFields: Array<[keyof MessageType, string[]]> = [
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectName.label', ['projectName', 'name']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.projectStatus.label', ['projectStatus', 'status']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.taskSummary.label', ['taskSummary']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.upcomingCommitments.label', ['upcomingCommitments']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.totalLoggedHours.label', ['totalLoggedHours']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.materialUsageSummary.label', ['materialUsageSummary']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualLaborCost.label', ['actualLaborCost']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualMaterialCost.label', ['actualMaterialCost']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.actualCost.label', ['actualCost']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.budgetAmount.label', ['budgetAmount']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.costVariance.label', ['costVariance']],
      ['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.column.changeOrderImpactSummary.label', ['changeOrderImpactSummary']],
    ];
    const locateLabel = (key: keyof MessageType): string => msg[key];
    const renderRows = (rows: unknown[], emptyKey: keyof MessageType, columns: Array<[keyof MessageType, string[]]>) => rows.length === 0
      ? html`<p class="p-4 text-[var(--text-muted,#64748b)]">${msg[emptyKey]}</p>`
      : html`<div class="overflow-x-auto"><table class="w-full text-left"><thead><tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${columns.map(([key]) => html`<th class="px-3 py-2 text-[var(--text-muted,#64748b)]">${locateLabel(key)}</th>`)}</tr></thead><tbody>${rows.map((row: unknown) => html`<tr class="border-b border-[var(--border-subtle,#e2e8f0)]">${columns.map(([, names]) => html`<td class="px-3 py-2">${display(valueFrom(row, names))}</td>`)}</tr>`)}</tbody></table></div>`;

    return html`
      <main class="min-h-full space-y-6 bg-[var(--page-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0 1px 2px rgba(0,0,0,.08))]">
          <h1 class="text-xl font-bold text-[var(--text-strong,#0f172a)]">${msg['section.monitorDailyProjectRecords.project-selection.title']}</h1>
          ${this.qryLocateProjectState === 'loading' ? html`<p class="py-4 text-[var(--text-muted,#64748b)]">${msg['organism.monitorDailyProjectRecords.qryLocateProject.title']}</p>` : nothing}
          ${this.qryLocateProjectState !== 'loading' ? renderRows(locateRows, 'intent.monitorDailyProjectRecords.qryLocateProject.list.empty', [
            ['intent.monitorDailyProjectRecords.qryLocateProject.list.column.name.label', ['name']],
            ['intent.monitorDailyProjectRecords.qryLocateProject.list.column.status.label', ['status']],
            ['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedStartDate.label', ['plannedStartDate']],
            ['intent.monitorDailyProjectRecords.qryLocateProject.list.column.plannedEndDate.label', ['plannedEndDate']],
            ['intent.monitorDailyProjectRecords.qryLocateProject.list.column.authorizedBudget.label', ['authorizedBudget']],
          ]) : nothing}
          <div class="mt-4 flex justify-end"><button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${this.handleQryLocateProjectClick}>${msg['organism.monitorDailyProjectRecords.qryLocateProject.title']}</button></div>
          ${locateRows.length > 0 ? html`<div class="mt-4 flex flex-wrap gap-2">${locateRows.map((row: unknown) => { const id = display(valueFrom(row, ['projectId', 'id'])); const selected = id === selectedProjectId; return id.length > 0 ? html`<button class="rounded-md border px-3 py-2 ${selected ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1d4ed8)]' : 'border-[var(--border-default,#e2e8f0)]'}" @click=${() => { this.setQryInspectProjectExecutionOverviewProjectExecutionOverviewProjectId(id); this.handleQryInspectProjectExecutionOverviewClick(); }}>${display(valueFrom(row, ['name', 'projectName']))}</button>` : nothing; })}</div>` : nothing}
        </section>

        ${selectedProjectId ? html`
          <section class="space-y-4">
            <h2 class="text-lg font-bold">${msg['section.monitorDailyProjectRecords.execution-monitoring.title']}</h2>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5">
              <h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.title']}</h3>
              ${this.qryInspectProjectExecutionOverviewState === 'loading' ? html`<p class="py-4 text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectExecutionOverview.list.title']}</p>` : nothing}
              ${overviewRows.length > 0 ? html`<dl class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${overviewFields.map(([key, names]) => html`<div><dt class="text-sm text-[var(--text-muted,#64748b)]">${msg[key]}</dt><dd class="font-medium">${display(valueFrom(overviewRows[0], names))}</dd></div>`)}</dl>` : nothing}
            </div>
            <div class="grid gap-4 lg:grid-cols-2">
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectTimeLogs.title']}</h3>${this.qryInspectProjectTimeLogsState === 'loading' ? html`<p class="py-3 text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.title']}</p>` : renderRows(timeLogRows, 'intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.empty', [['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.workDate.label', ['workDate']], ['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.hoursWorked.label', ['hoursWorked']], ['intent.monitorDailyProjectRecords.qryInspectProjectTimeLogs.list.column.status.label', ['status']]])}<div class="mt-3 flex flex-wrap gap-2">${idList(valueFrom(overview, ['timeLogIds'])).map((id: string) => html`<button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${() => { this.setQryInspectProjectTimeLogsTimeLogTimeLogId(id); this.handleQryInspectProjectTimeLogsClick(); }}>${id}</button>`)}</div></div>
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"><h3 class="font-semibold">${msg['organism.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.title']}</h3>${this.qryInspectProjectMaterialUsagesState === 'loading' ? html`<p class="py-3 text-[var(--text-muted,#64748b)]">${msg['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.title']}</p>` : renderRows(materialRows, 'intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.empty', [['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.quantity.label', ['quantity']], ['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.usageDescription.label', ['usageDescription']], ['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.consumedOn.label', ['consumedOn']], ['intent.monitorDailyProjectRecords.qryInspectProjectMaterialUsages.list.column.unitCostBasis.label', ['unitCostBasis']]])}<div class="mt-3 flex flex-wrap gap-2">${idList(valueFrom(overview, ['materialUsageIds'])).map((id: string) => html`<button class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-[var(--button-secondary-text,#0f172a)]" @click=${() => { this.setQryInspectProjectMaterialUsagesMaterialUsageMaterialUsageId(id); this.handleQryInspectProjectMaterialUsagesClick(); }}>${id}</button>`)}</div></div>
            </div>
          </section>
        ` : nothing}
      </main>`;
  }
}
