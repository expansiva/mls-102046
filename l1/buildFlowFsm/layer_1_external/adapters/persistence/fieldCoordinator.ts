/// <mls fileReference="_102046_/l1/buildFlowFsm/layer_1_external/adapters/persistence/fieldCoordinator.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const fieldCoordinatorTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmFieldCoordinator',
  tableName: 'field_coordinator',
  purpose: 'cadastro',
  description: 'Stores field coordinator records.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'field_coordinator_id', postgresType: 'UUID' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['field_coordinator_id'],
  indexes: [],
  version: 1,
};