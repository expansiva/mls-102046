/// <mls fileReference="_102046_/l2/buildFlowFsm/web/desktop/page31/projectCatalogue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmProjectCatalogueBase,
  messages,
  type MessageType,
} from '/_102046_/l2/buildFlowFsm/web/shared/projectCatalogue.js';

const collab_i18n_pt: MessageType = messages['pt'];
const collab_i18n_en: MessageType = messages['en'];
const collab_i18n: Record<string, MessageType> = {
  pt: collab_i18n_pt,
  en: collab_i18n_en,
};
type CollabMessage = MessageType;

@customElement('build-flow-fsm--web--desktop--page31--project-catalogue-102046')
export class BuildFlowFsmDesktopPage31ProjectCataloguePage extends BuildFlowFsmProjectCatalogueBase {
  get msg(): CollabMessage {
    return collab_i18n_pt;
  }

  render() {
    const msg = this.msg;
    const projects = this.qryListProjectData ?? [];
    const clients = this.qryClientPickerData ?? [];
    const selected = projects.find(
      (project: (typeof projects)[number]) => project.projectId === this.cmdUpdateProjectProjectId,
    );
    const selectedName = selected?.name ?? this.cmdUpdateProjectName;
    const createBusy = this.cmdCreateProjectState === 'loading';
    const updateBusy = this.cmdUpdateProjectState === 'loading';
    const deleteBusy = this.cmdDeleteProjectState === 'loading';
    const hasSelected = this.cmdUpdateProjectProjectId.length > 0;

    const clientOptions = (value: string, handler: (event: Event) => void) => html`
      <select
        class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
        .value=${value}
        @change=${handler}
        required
      >
        <option value="">${msg['intent.projectCatalogue.qryClientPicker.list.title']}</option>
        ${clients.map(
          (client: (typeof clients)[number]) => html`
            <option value=${client.clientId}>${client.clientName}</option>
          `,
        )}
      </select>
    `;

    const projectFormFields = (
      mode: 'create' | 'update',
    ) => {
      const isCreate = mode === 'create';
      const clientId = isCreate ? this.cmdCreateProjectClientId : this.cmdUpdateProjectClientId;
      const name = isCreate ? this.cmdCreateProjectName : this.cmdUpdateProjectName;
      const address = isCreate ? this.cmdCreateProjectAddress : this.cmdUpdateProjectAddress;
      const budget = isCreate
        ? this.cmdCreateProjectAuthorizedBudget
        : this.cmdUpdateProjectAuthorizedBudget;
      const start = isCreate
        ? this.cmdCreateProjectPlannedStartDate
        : this.cmdUpdateProjectPlannedStartDate;
      const end = isCreate ? this.cmdCreateProjectPlannedEndDate : this.cmdUpdateProjectPlannedEndDate;
      const clientHandler = isCreate
        ? this.handleCmdCreateProjectClientIdChange.bind(this)
        : this.handleCmdUpdateProjectClientIdChange.bind(this);
      const nameHandler = isCreate
        ? this.handleCmdCreateProjectNameChange.bind(this)
        : this.handleCmdUpdateProjectNameChange.bind(this);
      const addressHandler = isCreate
        ? this.handleCmdCreateProjectAddressChange.bind(this)
        : this.handleCmdUpdateProjectAddressChange.bind(this);
      const budgetHandler = isCreate
        ? this.handleCmdCreateProjectAuthorizedBudgetChange.bind(this)
        : this.handleCmdUpdateProjectAuthorizedBudgetChange.bind(this);
      const startHandler = isCreate
        ? this.handleCmdCreateProjectPlannedStartDateChange.bind(this)
        : this.handleCmdUpdateProjectPlannedStartDateChange.bind(this);
      const endHandler = isCreate
        ? this.handleCmdCreateProjectPlannedEndDateChange.bind(this)
        : this.handleCmdUpdateProjectPlannedEndDateChange.bind(this);
      const field = (
        label: string,
        value: string,
        handler: (event: Event) => void,
        type = 'text',
      ) => html`
        <label class="grid gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span>${label}</span>
          <input
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            type=${type}
            .value=${value}
            @change=${handler}
            required
          />
        </label>
      `;
      return html`
        <div class="grid gap-4">
          <label class="grid gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${isCreate
              ? msg['intent.projectCatalogue.cmdCreateProject.form.field.clientId.label']
              : msg['intent.projectCatalogue.cmdUpdateProject.form.field.clientId.label']}</span>
            ${clientOptions(clientId, clientHandler)}
          </label>
          ${field(
            isCreate
              ? msg['intent.projectCatalogue.cmdCreateProject.form.field.name.label']
              : msg['intent.projectCatalogue.cmdUpdateProject.form.field.name.label'],
            name,
            nameHandler,
          )}
          ${field(
            isCreate
              ? msg['intent.projectCatalogue.cmdCreateProject.form.field.address.label']
              : msg['intent.projectCatalogue.cmdUpdateProject.form.field.address.label'],
            address,
            addressHandler,
          )}
          <div class="grid gap-4 sm:grid-cols-2">
            ${field(
              isCreate
                ? msg['intent.projectCatalogue.cmdCreateProject.form.field.authorizedBudget.label']
                : msg['intent.projectCatalogue.cmdUpdateProject.form.field.authorizedBudget.label'],
              budget,
              budgetHandler,
              'number',
            )}
            ${field(
              isCreate
                ? msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedStartDate.label']
                : msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedStartDate.label'],
              start,
              startHandler,
              'date',
            )}
          </div>
          ${field(
            isCreate
              ? msg['intent.projectCatalogue.cmdCreateProject.form.field.plannedEndDate.label']
              : msg['intent.projectCatalogue.cmdUpdateProject.form.field.plannedEndDate.label'],
            end,
            endHandler,
            'date',
          )}
          <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">
            ${isCreate
              ? msg['intent.projectCatalogue.cmdCreateProject.form.field.status.label']
              : msg['intent.projectCatalogue.cmdUpdateProject.form.field.status.label']}
            <span class="ml-2 text-[var(--text-default,#0f172a)]">${
              isCreate ? this.cmdCreateProjectStatus : this.cmdUpdateProjectStatus
            }</span>
          </div>
        </div>
      `;
    };

    return html`
      <main class="grid gap-6 bg-[var(--page-bg,#ffffff)] p-4 text-[var(--text-default,#0f172a)] lg:p-6">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_3px_rgba(0,0,0,0.1))]">
          <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.projectCatalogue.recordList.title']}</h2>
            <button
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)]"
              @click=${this.handleCmdCreateProjectClick}
            >${msg['intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject']}</button>
          </div>
          ${this.qryListProjectState === 'loading'
            ? html`<div class="h-24 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f8fafc)]"></div>`
            : projects.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>`
              : html`
                  <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                      <thead>
                        <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.name.label']}</th>
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.clientId.label']}</th>
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.status.label']}</th>
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.authorizedBudget.label']}</th>
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.plannedStartDate.label']}</th>
                          <th class="px-3 py-2">${msg['intent.projectCatalogue.qryListProject.list.column.plannedEndDate.label']}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${projects.map(
                          (project: (typeof projects)[number]) => html`
                            <tr
                              class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--selected-bg,#f1f5f9)] ${project.projectId === this.cmdUpdateProjectProjectId ? 'bg-[var(--selected-bg,#f1f5f9)]' : ''}"
                              @click=${() => {
                                this.setCmdUpdateProjectProjectId(project.projectId);
                                this.setCmdDeleteProjectProjectId(project.projectId);
                                this.setCmdUpdateProjectClientId(project.clientId);
                                this.setCmdUpdateProjectName(project.name);
                                this.setCmdUpdateProjectAddress(project.address);
                                this.setCmdUpdateProjectStatus(project.status);
                                this.setCmdUpdateProjectAuthorizedBudget(String(project.authorizedBudget));
                                this.setCmdUpdateProjectPlannedStartDate(String(project.plannedStartDate));
                                this.setCmdUpdateProjectPlannedEndDate(String(project.plannedEndDate));
                              }}
                            >
                              <td class="px-3 py-3 font-medium">${project.name}</td>
                              <td class="px-3 py-3">${project.name ?? project.clientId}</td>
                              <td class="px-3 py-3">${project.status}</td>
                              <td class="px-3 py-3">${project.authorizedBudget}</td>
                              <td class="px-3 py-3">${project.plannedStartDate}</td>
                              <td class="px-3 py-3">${project.plannedEndDate}</td>
                            </tr>
                          `,
                        )}
                      </tbody>
                    </table>
                  </div>
                `}
        </section>

        <section class="grid gap-6 lg:grid-cols-2">
          <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
            <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.projectCatalogue.projectCreation.title']}</h2>
            ${projectFormFields('create')}
            <button
              class="mt-5 rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${createBusy}
              @click=${this.handleCmdCreateProjectClick}
            >${createBusy ? msg['action.cmdCreateProject.success'] : msg['intent.projectCatalogue.cmdCreateProject.form.action.cmdCreateProject']}</button>
            ${this.cmdCreateProjectState === 'success'
              ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdCreateProject.success']}</p>`
              : this.cmdCreateProjectState === 'error'
                ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdCreateProjectError || msg['action.cmdCreateProject.error']}</p>`
                : nothing}
          </article>

          <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
            <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.projectCatalogue.projectWorkspace.title']}</h2>
            ${hasSelected
              ? html`
                  <div class="mb-4 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                    <div class="font-semibold">${selectedName}</div>
                    <div class="text-sm text-[var(--text-muted,#64748b)]">${this.cmdUpdateProjectStatus}</div>
                  </div>
                  ${projectFormFields('update')}
                  <div class="mt-5 flex flex-wrap gap-3">
                    <button
                      class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                      ?disabled=${updateBusy}
                      @click=${this.handleCmdUpdateProjectClick}
                    >${updateBusy ? msg['action.cmdUpdateProject.success'] : msg['intent.projectCatalogue.cmdUpdateProject.form.action.cmdUpdateProject']}</button>
                    <button
                      class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
                      ?disabled=${deleteBusy}
                      @click=${(event: Event) => {
                        if (window.confirm(`${msg['intent.projectCatalogue.cmdDeleteProject.form.title']} ${selectedName}`)) {
                          this.handleCmdDeleteProjectClick(event);
                        }
                      }}
                    >${msg['intent.projectCatalogue.cmdDeleteProject.form.action.cmdDeleteProject']}</button>
                  </div>
                  ${this.cmdUpdateProjectState === 'success'
                    ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdUpdateProject.success']}</p>`
                    : this.cmdUpdateProjectState === 'error'
                      ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdUpdateProjectError || msg['action.cmdUpdateProject.error']}</p>`
                      : nothing}
                  ${this.cmdDeleteProjectState === 'success'
                    ? html`<p class="mt-3 text-sm text-[var(--status-success-text,#166534)]">${msg['action.cmdDeleteProject.success']}</p>`
                    : this.cmdDeleteProjectState === 'error'
                      ? html`<p class="mt-3 text-sm text-[var(--status-error-text,#b91c1c)]">${this.cmdDeleteProjectError || msg['action.cmdDeleteProject.error']}</p>`
                      : nothing}
                `
              : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['intent.projectCatalogue.qryListProject.list.empty']}</p>`}
          </article>
        </section>
      </main>
    `;
  }
}
